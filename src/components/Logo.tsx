interface LogoProps {
  className?: string
  showWordmark?: boolean
  dark?: boolean
}

export function Logo({ className = '', showWordmark = true, dark = false }: LogoProps) {
  return (
    <a href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo.svg"
        alt="PointStax"
        className="h-10 w-10 transition-transform group-hover:rotate-[6deg]"
        width={40}
        height={40}
      />
      {showWordmark && (
        <span
          className={`text-[22px] font-semibold tracking-tight leading-none ${
            dark ? 'text-white' : 'text-brand-ink'
          }`}
        >
          PointStax
        </span>
      )}
    </a>
  )
}
