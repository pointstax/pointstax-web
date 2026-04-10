const items = [
  { icon: '🔒', label: 'Bank-level encryption' },
  { icon: '👁', label: 'Read-only access' },
  { icon: '🛡', label: 'Your data stays yours' },
]

export function TrustStrip() {
  return (
    <section className="border-y border-brand-ice bg-white py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 text-sm font-medium text-brand-navy/70">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
