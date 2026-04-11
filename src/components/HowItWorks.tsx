import { motion } from 'framer-motion'

const steps = [
  {
    num: 'I',
    time: '0:00',
    title: 'Add your cards',
    body: 'Tell us which cards you have. We never ask for numbers, PINs, or credentials. No credit pull. No account linking.',
  },
  {
    num: 'II',
    time: '0:42',
    title: 'Tap, and it thinks',
    body: 'Open the app at checkout. PointStax knows the merchant, your location, and your portfolio. The answer is instant.',
  },
  {
    num: 'III',
    time: '∞',
    title: 'Watch the stack grow',
    body: 'Real redemption value in your pocket. Category-by-category. Card-by-card. Points that actually mean something.',
  },
]

export function HowItWorks() {
  return (
    <section className="relative bg-brand-ink text-brand-paper py-28 lg:py-36 overflow-hidden">
      {/* gold radial */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] opacity-30 blur-[140px]"
        style={{ background: 'radial-gradient(ellipse, rgba(233, 180, 76, 0.35), transparent 60%)' }}
      />
      {/* subtle noise */}
      <div className="absolute inset-0 grain" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="max-w-3xl rule-bottom border-brand-paper/15 pb-12 mb-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="label-eyebrow !text-brand-gold">Chapter Two</span>
          </div>
          <h2 className="mt-5 font-display text-display-lg">
            The <em className="italic text-brand-gold">ritual</em>.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-brand-paper/65 font-light leading-relaxed">
            Three small acts. Forever more rewards.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* vertical rule (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-[68px] top-0 bottom-0 w-px bg-brand-paper/15"
          />

          <div className="space-y-20 lg:space-y-28">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid lg:grid-cols-[140px_1fr_auto] gap-8 items-start"
              >
                {/* Roman numeral marker */}
                <div className="flex items-center gap-4">
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-brand-gold ring-8 ring-brand-ink" />
                  <span className="font-display text-5xl italic text-brand-paper/90 leading-none">
                    {s.num}
                  </span>
                </div>

                <div className="max-w-2xl">
                  <h3 className="font-display text-3xl lg:text-4xl">{s.title}</h3>
                  <p className="mt-3 text-base lg:text-lg text-brand-paper/60 leading-relaxed">{s.body}</p>
                </div>

                <div className="hidden lg:block label-eyebrow !text-brand-gold whitespace-nowrap mt-2">
                  {s.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
