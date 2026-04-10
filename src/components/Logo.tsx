interface LogoProps {
  className?: string
  showWordmark?: boolean
}

export function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
        <defs>
          <linearGradient id="card1" x1="0" x2="1">
            <stop offset="0" stopColor="#BFDBFE" />
            <stop offset="1" stopColor="#93C5FD" />
          </linearGradient>
          <linearGradient id="card2" x1="0" x2="1">
            <stop offset="0" stopColor="#60A5FA" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="card3" x1="0" x2="1">
            <stop offset="0" stopColor="#2563EB" />
            <stop offset="1" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        <g transform="translate(32 32)">
          <rect x="-22" y="-14" width="44" height="28" rx="4" fill="url(#card1)" transform="rotate(-12)" opacity=".7" />
          <rect x="-22" y="-14" width="44" height="28" rx="4" fill="url(#card2)" transform="rotate(-5)" opacity=".85" />
          <rect x="-22" y="-14" width="44" height="28" rx="4" fill="url(#card3)" transform="rotate(2)" />
        </g>
      </svg>
      {showWordmark && (
        <span
          className="text-xl font-extrabold text-brand-navy"
          style={{ letterSpacing: '0.02em' }}
        >
          PointStax
        </span>
      )}
    </div>
  )
}
