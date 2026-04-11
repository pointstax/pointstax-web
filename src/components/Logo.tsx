interface LogoProps {
  className?: string
  showWordmark?: boolean
}

export function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <a href="/" className={`group inline-flex items-center gap-3 ${className}`}>
      <img
        src="/logo.svg"
        alt="PointStax"
        className="h-9 w-9 transition-transform group-hover:rotate-[4deg]"
        width={36}
        height={36}
      />
      {showWordmark && (
        <span className="font-display text-2xl italic text-brand-ink leading-none tracking-tight">
          PointStax
        </span>
      )}
    </a>
  )
}
