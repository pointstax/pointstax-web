interface LogoProps {
  className?: string
  showWordmark?: boolean
}

export function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.svg"
        alt="PointStax"
        className="h-9 w-9"
        width={36}
        height={36}
      />
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
