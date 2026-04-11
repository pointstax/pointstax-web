import { motion } from 'framer-motion'

/**
 * Newspaper-style pull quote between sections.
 * A massive italic serif statement that makes the page feel literary.
 */
export function PullQuote() {
  return (
    <section className="relative bg-brand-paper py-24 lg:py-32 grain overflow-hidden">
      {/* giant gold quote mark */}
      <div
        aria-hidden="true"
        className="absolute left-6 top-0 font-display italic text-[clamp(14rem,25vw,28rem)] leading-none text-brand-gold/20 pointer-events-none select-none"
      >
        “
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="rule-bottom pb-4 mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-ink" />
            <span className="label-eyebrow">An Editorial</span>
          </div>

          <p className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] text-brand-ink">
            The average American with three credit cards leaves{' '}
            <em className="italic text-brand-deep">
              <span className="relative inline-block">
                $1,284
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6 C 80 2, 160 10, 298 5"
                    stroke="#E9B44C"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </em>{' '}
            on the table every year — not because they're careless, but because the math is{' '}
            <em className="italic">too tedious to do in a checkout line</em>.
          </p>

          <footer className="mt-12 flex items-center gap-5 rule-top pt-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-deep to-brand-ink flex items-center justify-center text-brand-gold font-display italic text-xl">
              PS
            </div>
            <div>
              <div className="font-display italic text-lg text-brand-ink">The PointStax Editorial Board</div>
              <div className="label-eyebrow">Unsigned, but definitely true</div>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
