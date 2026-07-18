import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { LAUNCH_DATE } from '../config'

const items = [
  {
    q: 'Is PointStax free?',
    a: 'Yes. PointStax is free to download and use. We may introduce optional premium features later, but the core recommendations — the part that actually earns you more points — will always be free.',
  },
  {
    q: 'Which cards do you support?',
    a: 'All major US credit card issuers: Chase, American Express, Capital One, Citi, Bank of America, Wells Fargo, US Bank, Discover, Barclays, and dozens of co-branded cards. The database grows weekly.',
  },
  {
    q: 'Do you ever see my account numbers?',
    a: 'Never. We never ask for card numbers, PINs, or bank credentials. No credit pull. No account linking. You tell us which cards you have — we just do the math.',
  },
  {
    q: 'How does the AI actually know what to recommend?',
    a: "PointStax reasons about four signals: your location, the merchant category, your current portfolio (including active bonuses and spending caps), and the real-world redemption value of each point. The model runs on-device for most recommendations — fast and private.",
  },
  {
    q: 'When is it launching?',
    a: `${LAUNCH_DATE}. Join the waitlist above to be first in line.`,
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative bg-brand-canvas py-24 lg:py-32">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              <span className="label-eyebrow">FAQ</span>
            </div>
            <h2 className="font-display text-display-md font-semibold text-brand-ink text-balance">
              Questions, answered.
            </h2>
            <p className="mt-5 text-base text-brand-muted leading-relaxed max-w-sm">
              Still curious? Email{' '}
              <a
                href="mailto:support@pointstax.ai"
                className="text-brand-ink underline decoration-brand-live decoration-2 underline-offset-4 hover:text-brand-goldDeep transition-colors"
              >
                support@pointstax.ai
              </a>{' '}
              and a human will reply.
            </p>
          </div>

          <div className="rounded-2xl bg-brand-surface border border-brand-rule shadow-cardSoft overflow-hidden">
            {items.map((item, i) => {
              const expanded = open === i
              return (
                <div
                  key={item.q}
                  className={`${i !== items.length - 1 ? 'border-b border-brand-rule' : ''}`}
                >
                  <button
                    onClick={() => setOpen(expanded ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 lg:px-8 py-6 text-left group"
                    aria-expanded={expanded}
                  >
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-xs font-medium text-brand-muted">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-medium text-brand-ink text-lg text-balance">
                        {item.q}
                      </span>
                    </div>
                    <span
                      className={`flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-full border transition-all duration-500 ${
                        expanded
                          ? 'border-brand-gold bg-brand-gold text-white rotate-45'
                          : 'border-brand-rule text-brand-muted group-hover:border-brand-ink group-hover:text-brand-ink'
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-8 pb-6 pl-14 text-brand-muted leading-relaxed max-w-2xl">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
