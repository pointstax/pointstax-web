import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Add your cards',
    body: 'Tell us which cards you have. No credentials, no credit pull, no account linking. Takes about 42 seconds.',
  },
  {
    num: '02',
    title: 'Open before you pay',
    body: "One tap at checkout. PointStax knows the merchant, your location, and your portfolio — and hands you the right answer instantly.",
  },
  {
    num: '03',
    title: 'Watch the stack compound',
    body: 'Real redemption value, tracked automatically. Category by category. Card by card. Points that actually mean something.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-brand-surface py-24 lg:py-32 border-y border-brand-rule">
      {/* Subtle soft mesh bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-mesh-soft opacity-80 pointer-events-none"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-electric" />
            <span className="label-eyebrow">Flow</span>
          </div>
          <h2 className="font-display text-display-lg font-semibold text-brand-ink text-balance">
            Three small acts.
            <br />
            <span className="text-brand-muted">Forever more rewards.</span>
          </h2>
        </div>

        {/* Horizontal flow */}
        <div className="relative grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-0 right-0 top-10 h-px"
            style={{
              background:
                'linear-gradient(to right, transparent 0%, #E2E8F0 10%, #E2E8F0 90%, transparent 100%)',
            }}
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Node */}
              <div className="relative z-10 inline-flex items-center gap-3 rounded-full border border-brand-rule bg-brand-canvas px-4 py-2.5 shadow-cardSoft">
                <span className="h-2 w-2 rounded-full bg-brand-blue" />
                <span className="font-mono text-xs font-medium tracking-widest text-brand-ink">
                  {s.num}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl lg:text-3xl font-semibold text-brand-ink leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-brand-muted leading-relaxed max-w-sm">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
