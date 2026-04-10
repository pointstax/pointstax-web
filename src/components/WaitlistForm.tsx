import { useState } from 'react'
import { submitWaitlist } from '../lib/api'

interface WaitlistFormProps {
  source: 'hero' | 'final-cta' | 'nav'
  placeholder?: string
  buttonLabel?: string
  className?: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const STORAGE_KEY = 'pointstax_waitlist_submitted'

export function WaitlistForm({
  source,
  placeholder = 'you@email.com',
  buttonLabel = 'Get early access',
  className = '',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>(() => {
    if (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)) {
      return 'success'
    }
    return 'idle'
  })
  const [message, setMessage] = useState<string>('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'loading') return

    setStatus('loading')
    const result = await submitWaitlist(email, source)

    if (result.success) {
      setStatus('success')
      setMessage("You're on the list. We'll be in touch.")
      localStorage.setItem(STORAGE_KEY, '1')
    } else {
      setStatus('error')
      setMessage(result.error ?? 'Something went wrong. Try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`rounded-xl bg-brand-ice px-5 py-4 text-brand-deep ${className}`}>
        <p className="font-semibold">{message || "You're on the list. We'll be in touch."}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        aria-label="Email address"
        className="flex-1 rounded-xl border border-brand-ice bg-white px-4 py-3 text-brand-navy placeholder-brand-navy/40 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-xl bg-brand-deep px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-blue/40 disabled:opacity-50"
      >
        {status === 'loading' ? 'Submitting…' : buttonLabel}
      </button>
      {status === 'error' && (
        <p className="w-full text-sm text-red-600" role="alert">
          {message}
        </p>
      )}
    </form>
  )
}
