const items = [
  'Bank-level encryption',
  'Read-only access',
  'No credit pull',
  'Your data stays yours',
  'Never sold, never shared',
  'SOC 2 ready',
]

/**
 * Infinite marquee of trust signals. No emoji — just refined typography.
 */
export function TrustStrip() {
  const doubled = [...items, ...items]
  return (
    <section className="relative bg-brand-ink text-brand-paper overflow-hidden py-6 border-y border-brand-ink">
      <div className="mask-fade-edges">
        <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="font-display text-2xl italic text-brand-paper/90">{item}</span>
              <span className="font-display text-2xl text-brand-gold select-none">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
