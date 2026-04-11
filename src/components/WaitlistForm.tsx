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
  buttonLabel = 'Request early access',
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

  const isDark = source === 'hero' || source === 'final-cta'

  if (status === 'success') {
    return (
      <div
        className={`relative flex items-center gap-4 px-6 py-5 rounded-2xl border ${
          isDark
            ? 'border-brand-live/40 bg-brand-live/10 text-white'
            : 'border-brand-live/40 bg-brand-live/5 text-brand-ink'
        } ${className}`}
      >
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-brand-live">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="white"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div>
          <div className="font-medium">You're on the list.</div>
          <div className={`label-eyebrow !tracking-wider mt-0.5 ${isDark ? '!text-white/55' : ''}`}>
            We'll be in touch before launch
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div
        className={`group relative flex items-center rounded-2xl transition-all duration-300 border ${
          isDark
            ? 'bg-white/[0.06] backdrop-blur-xl border-white/15 focus-within:border-brand-live/60 focus-within:bg-white/[0.08]'
            : 'bg-brand-surface border-brand-rule focus-within:border-brand-ink shadow-sm focus-within:shadow-cardSoft'
        }`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-label="Email address"
          className={`flex-1 bg-transparent pl-5 lg:pl-6 pr-2 py-4 text-base outline-none ${
            isDark
              ? 'text-white placeholder:text-white/35'
              : 'text-brand-ink placeholder:text-brand-muted'
          }`}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`m-1.5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all ${
            isDark
              ? 'bg-white text-brand-ink hover:bg-brand-ice'
              : 'bg-brand-ink text-white hover:bg-brand-deep'
          } disabled:opacity-50`}
        >
          <span>{status === 'loading' ? 'Submitting…' : buttonLabel}</span>
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-3 text-sm font-mono text-brand-live" role="alert">
          {message}
        </p>
      )}
    </form>
  )
}
