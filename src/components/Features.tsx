import { motion } from 'framer-motion'

const features = [
  {
    num: '01',
    title: 'Knows the card',
    display: 'the card',
    body: 'Advanced AI analyzes your spending patterns and matches every purchase to the card that earns the most. No lookup tables. No guessing. Just the right answer, instantly.',
    stat: '3.2×',
    statLabel: 'more points on average',
  },
  {
    num: '02',
    title: 'Knows the place',
    display: 'the place',
    body: 'Location-aware recommendations for every store, restaurant, gas station, airline, and grocery chain. The café next door. The hotel in Lisbon. Your corner bodega.',
    stat: '127',
    statLabel: 'merchant categories',
  },
  {
    num: '03',
    title: 'Knows your wallet',
    display: 'your wallet',
    body: 'Track your entire rewards portfolio — balances, perks, sign-up bonuses, annual fees, expiring points. At a glance. Never miss another benefit.',
    stat: '∞',
    statLabel: 'cards per portfolio',
  },
  {
    num: '04',
    title: 'Knows real value',
    display: 'real value',
    body: `Not marketing math. Actual redemption value. We calculate what your points are worth for flights, hotels, transfers, cash back — and tell you when to hoard and when to burn.`,
    stat: '1.8¢',
    statLabel: 'avg. value per point',
  },
]

export function Features() {
  return (
    <section id="features" className="relative bg-brand-paper py-24 lg:py-32 grain">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-3xl rule-bottom pb-12 mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-brand-ink" />
            <span className="label-eyebrow">Chapter One</span>
          </div>
          <h2 className="mt-5 font-display text-display-lg text-brand-ink">
            Stop guessing. Start <em className="italic text-brand-deep">stacking</em>.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-brand-ink/65 font-light leading-relaxed">
            Four things PointStax obsesses over so you don't have to.
          </p>
        </div>

        {/* Editorial two-column grid with alternating layouts */}
        <div className="grid gap-x-12 gap-y-20 lg:grid-cols-2">
          {features.map((f, i) => (
            <motion.article
              key={f.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="flex items-start justify-between mb-6 rule-bottom pb-5">
                <span className="font-mono text-xs tracking-widest text-brand-ink/55">
                  No. {f.num}
                </span>
                <span className="font-display italic text-brand-ink/40 text-lg">
                  chapter.{f.num.padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display text-4xl lg:text-5xl text-brand-ink leading-tight">
                Knows <em className="italic text-brand-deep">{f.display}</em>.
              </h3>
              <p className="mt-5 text-brand-ink/65 text-base lg:text-lg leading-relaxed max-w-lg">
                {f.body}
              </p>
              <div className="mt-8 inline-flex items-baseline gap-4 px-5 py-3 bg-brand-ink/[0.035] border border-brand-rule rounded-full">
                <span className="font-display text-3xl text-brand-ink tabular">{f.stat}</span>
                <span className="label-eyebrow !tracking-wider">{f.statLabel}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
