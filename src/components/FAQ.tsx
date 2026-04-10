import { useState } from 'react'
import { LAUNCH_DATE } from '../config'

const items = [
  {
    q: 'Is PointStax free?',
    a: 'Yes. PointStax is free to download and use. We may introduce premium features later, but the core recommendations will always be free.',
  },
  {
    q: 'Which cards do you support?',
    a: 'We support major US credit cards from Chase, American Express, Capital One, Citi, Bank of America, Wells Fargo, Discover, and more. The full list grows as we add more.',
  },
  {
    q: 'When is it launching?',
    a: `${LAUNCH_DATE}. Join the waitlist above to be the first to know.`,
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-gradient-to-br from-white to-brand-iceLight py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-4xl font-extrabold text-brand-navy">
          Frequently asked
        </h2>
        <div className="mt-12 space-y-4">
          {items.map((item, i) => (
            <div
              key={item.q}
              className="rounded-2xl border border-brand-ice bg-white shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-brand-navy"
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span
                  className="text-2xl text-brand-deep transition-transform"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-brand-navy/70">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
