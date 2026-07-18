import { motion } from 'framer-motion'

const features = [
  {
    num: '01',
    title: 'AI-powered recommendations',
    body: 'Advanced AI analyzes your spending and tells you exactly which card to use, every time.',
    stat: '60ms',
    statLabel: 'INFERENCE TIME',
  },
  {
    num: '02',
    title: 'Location-aware',
    body: 'Powered by where you are. The best card for every store, every restaurant, every gas station.',
    stat: '∞',
    statLabel: 'STORES COVERED',
  },
  {
    num: '03',
    title: 'All your cards in one place',
    body: 'Your full rewards portfolio, balances, perks, and benefits — at a glance.',
    stat: '1.8¢',
    statLabel: 'AVG PT VALUE',
  },
  {
    num: '04',
    title: 'See your real value',
    body: 'Know what your points are actually worth. We calculate real redemption value so you can spend smarter.',
    stat: '24/7',
    statLabel: 'MONITORING',
  },
]

export function Features() {
  return (
    <section id="features" className="relative bg-brand-canvas py-24 lg:py-32">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
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
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-gold via-brand-goldDeep to-brand-live opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
