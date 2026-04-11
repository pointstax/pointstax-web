/**
 * Newspaper masthead bar — sits above the nav like a real broadsheet.
 * No competitor has this. Immediately signals "this isn't a SaaS landing."
 */
export function Masthead() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="relative z-40 bg-brand-ink text-brand-paper">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-2.5">
        <div className="flex items-center justify-between gap-4 font-mono text-[0.62rem] uppercase tracking-[0.22em]">
          <span className="hidden sm:inline-flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-brand-paper/70">Est. 2026</span>
          </span>
          <span className="text-brand-gold truncate">
            {today} · The Rewards Broadsheet
          </span>
          <span className="hidden sm:inline text-brand-paper/70">
            Vol. I · No. 1 · New York
          </span>
        </div>
      </div>
    </div>
  )
}
