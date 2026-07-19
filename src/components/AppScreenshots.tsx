import { motion } from 'framer-motion'

/**
 * "Notifications from your wallet" — iOS-style notification cards
 * showing PointStax interjecting with timely recommendations.
 */
const notifications = [
  {
    time: '07:42',
    title: 'At Blue Bottle Coffee',
    body: 'Use Chase Sapphire Preferred · 3× on dining',
    earned: '+21 pts',
    accent: 'from-brand-gold to-brand-goldDeep',
  },
  {
    time: '12:16',
    title: 'At Whole Foods Market',
    body: 'Use Amex Gold · 4× on US groceries',
    earned: '+184 pts',
    accent: 'from-amber-400 to-amber-600',
  },
  {
    time: '19:03',
    title: 'Booking Delta DL 204',
    body: 'Use Capital One Venture X · 5× on travel via portal',
    earned: '+1,240 pts',
    accent: 'from-brand-live to-emerald-600',
  },
]

export function AppScreenshots() {
  return (
    <section className="relative bg-brand-canvas py-24 lg:py-32">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-live" />
            <span className="label-eyebrow">A day in the life</span>
          </div>
          <h2 className="font-display text-display-lg font-semibold text-brand-ink text-balance">
            Three ordinary purchases.
            <br />
            <span className="text-brand-muted">Three quiet wins.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {notifications.map((n, i) => (
            <motion.div
              key={n.time}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl bg-brand-surface border border-brand-rule shadow-cardSoft p-6 hover:shadow-cardLg transition-shadow"
            >
              {/* top row with app identity */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`h-7 w-7 rounded-md bg-gradient-to-br ${n.accent} flex items-center justify-center`}
                  >
                    <span className="font-display text-[0.7rem] font-bold text-white">PS</span>
                  </div>
                  <span className="font-mono text-[0.68rem] uppercase tracking-widest text-brand-muted">
                    PointStax
                  </span>
                </div>
                <span className="font-mono text-[0.68rem] text-brand-muted">{n.time}</span>
              </div>

              <div className="font-medium text-brand-ink leading-snug">
                {n.title}
              </div>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                {n.body}
              </p>

              <div className="mt-5 pt-4 border-t border-brand-rule flex items-center justify-between">
                <span className="label-eyebrow !text-[0.6rem]">You'd earn</span>
                <span className="font-display text-lg font-semibold text-brand-ink tabular">
                  {n.earned}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge to the perks pillar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 flex flex-col md:flex-row items-center justify-between gap-5 pt-10 border-t border-brand-rule"
        >
          <div className="max-w-xs">
            <span className="label-eyebrow">And that's just the swipes</span>
            <div className="mt-2 font-display text-3xl font-semibold text-brand-ink leading-tight text-balance">
              Never leave a perk on the table.
            </div>
          </div>
          <div className="text-center md:text-right max-w-md">
            <div className="text-base text-brand-ink">
              Expiring credits, 5% categories you forgot to activate, annual benefits —
              often worth <span className="font-semibold text-brand-live">more</span> than
              the everyday points. PointStax catches those too.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
