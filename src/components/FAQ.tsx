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
    q: 'How do you actually make money?',
    a: `We're building toward an optional premium tier with deeper portfolio analytics, bonus tracking, and personalized card recommendations. The essentials stay free, forever.`,
  },
  {
    q: 'When is it launching?',
    a: `${LAUNCH_DATE}. Join the waitlist above to be first in line.`,
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative bg-brand-paper py-28 lg:py-36 grain">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          {/* Left — section label */}
          <div className="rule-top pt-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-brand-ink" />
              <span className="label-eyebrow">Frequently Asked</span>
            </div>
            <h2 className="font-display text-display-md text-brand-ink">
              Questions, <em className="italic text-brand-deep">answered</em>.
            </h2>
            <p className="mt-5 text-base text-brand-ink/60 leading-relaxed max-w-sm">
              Still curious? Email{' '}
              <a href="mailto:support@pointstax.ai" className="underline decoration-brand-gold underline-offset-4 decoration-2 hover:text-brand-deep transition-colors">
                support@pointstax.ai
              </a>{' '}
              and a human will reply.
            </p>
          </div>

          {/* Right — accordion items */}
          <div className="rule-top">
            {items.map((item, i) => {
              const expanded = open === i
              return (
                <div key={item.q} className="rule-bottom">
                  <button
                    onClick={() => setOpen(expanded ? null : i)}
                    className="flex w-full items-baseline justify-between gap-6 py-7 text-left group"
                    aria-expanded={expanded}
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-xs tracking-widest text-brand-ink/45">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`font-display text-2xl lg:text-3xl leading-tight transition-colors ${
                          expanded ? 'text-brand-ink italic' : 'text-brand-ink/85 group-hover:text-brand-ink group-hover:italic'
                        }`}
                      >
                        {item.q}
                      </span>
                    </div>
                    <span
                      className={`font-display text-3xl text-brand-gold transition-transform duration-500 ${
                        expanded ? 'rotate-[135deg]' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-[52px] pr-8 text-brand-ink/65 text-base lg:text-lg leading-relaxed max-w-2xl">
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
