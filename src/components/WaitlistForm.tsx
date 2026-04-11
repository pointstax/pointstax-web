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
  buttonLabel = 'Join the waitlist',
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

  // Darker context for dark backgrounds (FinalCTA)
  const isDark = source === 'final-cta'

  if (status === 'success') {
    return (
      <div
        className={`relative flex items-center gap-4 px-6 py-5 rounded-full border ${
          isDark
            ? 'border-brand-gold/40 bg-brand-gold/10 text-brand-paper'
            : 'border-brand-gold/50 bg-brand-gold/10 text-brand-ink'
        } ${className}`}
      >
        <span className="font-display text-3xl italic text-brand-gold leading-none">✓</span>
        <div>
          <div className="font-display text-lg italic">You're on the list.</div>
          <div className={`label-eyebrow !tracking-wider ${isDark ? '!text-brand-paper/65' : ''}`}>
            We'll be in touch before launch
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div
        className={`group relative flex items-center rounded-full transition-all duration-300 border-2 ${
          isDark
            ? 'bg-brand-paper/5 backdrop-blur-sm border-brand-paper/20 focus-within:border-brand-gold'
            : 'bg-white border-brand-rule focus-within:border-brand-ink shadow-sm focus-within:shadow-lg'
        }`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-label="Email address"
          className={`flex-1 bg-transparent pl-6 lg:pl-8 pr-2 py-5 font-sans text-base outline-none placeholder:font-display placeholder:italic ${
            isDark
              ? 'text-brand-paper placeholder:text-brand-paper/40'
              : 'text-brand-ink placeholder:text-brand-ink/40'
          }`}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`m-1.5 flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
            isDark
              ? 'bg-brand-gold text-brand-ink hover:bg-brand-goldSoft'
              : 'bg-brand-ink text-brand-paper hover:bg-brand-deep'
          } disabled:opacity-50`}
        >
          <span>{status === 'loading' ? 'Submitting…' : buttonLabel}</span>
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>
      {status === 'error' && (
        <p
          className={`mt-3 text-sm font-mono ${isDark ? 'text-brand-gold' : 'text-red-600'}`}
          role="alert"
        >
          {message}
        </p>
      )}
    </form>
  )
}
