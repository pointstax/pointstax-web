import { motion } from 'framer-motion'

const features = [
  {
    num: '01',
    title: 'Context-aware reasoning',
    body: 'Every purchase is evaluated against your entire wallet, your location, the merchant category, and active bonuses — in under 60ms.',
    stat: '60ms',
    statLabel: 'inference time',
  },
  {
    num: '02',
    title: 'Portfolio intelligence',
    body: 'PointStax understands the full shape of your rewards portfolio: sign-up bonuses, spending caps, expiring points, and transfer partners.',
    stat: '∞',
    statLabel: 'cards supported',
  },
  {
    num: '03',
    title: 'Real-world value',
    body: "Not marketing math. We calculate the actual redemption value per point — so you know when to hoard, burn, and transfer.",
    stat: '1.8¢',
    statLabel: 'avg. value per point',
  },
  {
    num: '04',
    title: 'Quietly proactive',
    body: 'Notices when a card hits its quarterly cap, when a sign-up bonus window closes, when an annual credit resets. Handles the math so you don\'t.',
    stat: '24/7',
    statLabel: 'background monitoring',
  },
]

export function Features() {
  return (
    <section id="features" className="relative bg-brand-canvas py-24 lg:py-32">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <span className="label-eyebrow">System</span>
          </div>
          <h2 className="font-display text-display-lg font-semibold text-brand-ink text-balance">
            An AI designed for your wallet.
            <br />
            <span className="text-brand-muted">Not for a pitch deck.</span>
          </h2>
        </div>

        <div className="grid gap-px bg-brand-rule rounded-3xl overflow-hidden border border-brand-rule sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.article
              key={f.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-brand-surface p-8 lg:p-10 hover:bg-brand-canvas transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs tracking-widest text-brand-muted">
                  {f.num}
                </span>
                <div className="inline-flex items-baseline gap-2 rounded-full border border-brand-rule bg-brand-canvas/70 px-3 py-1">
                  <span className="font-display text-base font-semibold text-brand-ink tabular">
                    {f.stat}
                  </span>
                  <span className="label-eyebrow !text-[0.58rem]">{f.statLabel}</span>
                </div>
              </div>

              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-brand-ink leading-tight">
                {f.title}
              </h3>
              <p className="mt-4 text-brand-muted leading-relaxed max-w-md">
                {f.body}
              </p>

              {/* Subtle hover accent line */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-blue via-brand-electric to-brand-live opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
