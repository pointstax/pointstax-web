import { motion } from 'framer-motion'
import { LAUNCH_DATE, LAUNCH_MODE } from '../config'
import { CreditCard } from './CreditCard'
import { WaitlistForm } from './WaitlistForm'

export function Hero() {
  return (
    <section className="relative overflow-hidden grain bg-brand-paper pt-14 pb-24 lg:pt-20 lg:pb-32">
      {/* grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #1E3A5F 1px, transparent 1px), linear-gradient(to bottom, #1E3A5F 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-10%] w-[60%] h-[60%] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(233, 180, 76, 0.4), transparent 60%)' }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="rule-top flex items-center justify-between pt-6 pb-10">
          <span className="label-eyebrow">Dateline · {LAUNCH_DATE}</span>
          <span className="label-eyebrow hidden md:inline">
            For people who <em className="font-display italic">read the fine print</em>
          </span>
          <span className="label-eyebrow hidden sm:inline">Front Page · A1</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20 items-end">
          {/* left — text */}
          <div className="reveal-stagger">
            <h1 className="font-display text-display-xl text-brand-ink">
              Every point,
              <br />
              <span className="italic text-brand-inkSoft">perfectly</span>{' '}
              <span className="italic relative inline-block">
                used.
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 18"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10 C 80 2, 160 16, 298 8"
                    stroke="#E9B44C"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-brand-ink/75 font-light">
              <span className="float-left font-display text-[5.2rem] leading-[0.78] pr-3 pt-1.5 text-brand-ink">
                A
              </span>
              n AI that actually knows{' '}
              <em className="font-display italic text-brand-ink text-xl">which card</em>{' '}
              earns the most on{' '}
              <em className="font-display italic text-brand-ink text-xl">every purchase</em>
              . Location-aware. Portfolio-wide. Obsessive about your points —
              because if you've ever pulled out the wrong card at a Whole Foods
              checkout, you know the small, quiet grief of it.
            </p>

            {LAUNCH_MODE === 'waitlist' ? (
              <div id="hero-form" className="mt-10 max-w-xl">
                <WaitlistForm source="hero" buttonLabel="Join the waitlist" />
                <div className="mt-5 flex items-center gap-4 label-eyebrow">
                  <span>iOS</span>
                  <span className="h-px w-8 bg-brand-rule" />
                  <span>Android</span>
                  <span className="h-px w-8 bg-brand-rule" />
                  <span className="text-brand-gold">Coming soon</span>
                </div>
              </div>
            ) : (
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#" className="rounded-full bg-brand-ink px-7 py-4 font-medium text-brand-paper">
                  Download for iOS
                </a>
                <a href="#" className="rounded-full border border-brand-ink px-7 py-4 font-medium text-brand-ink">
                  Get it on Google Play
                </a>
              </div>
            )}

            <div className="mt-12 grid grid-cols-3 gap-6 rule-top pt-6">
              <Stat value="3.2x" label="more points earned, avg." />
              <Stat value="42s" label="to set up your wallet" />
              <Stat value="$1,284" label="avg. extra rewards / year" />
            </div>
          </div>

          {/* right — stacked tactile cards */}
          <div className="relative h-[460px] lg:h-[560px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="absolute inset-0"
            >
              <div className="absolute left-0 top-0 w-[78%] animate-float-slower">
                <CreditCard variant="sky" issuer="Sky Rewards" label="Back" points="82,114" tilt={-10} delay={0.35} />
              </div>
              <div className="absolute left-[15%] top-[12%] w-[78%] animate-float-slow">
                <CreditCard variant="gold" issuer="Gold Elite" label="Middle" points="254,700" tilt={-3} delay={0.2} />
              </div>
              <div className="absolute left-[8%] top-[28%] w-[86%]">
                <CreditCard variant="deep" issuer="PointStax" label="Primary" points="128,402" tilt={2} delay={0.05} />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -right-2 top-6 hidden md:flex items-center gap-3 bg-brand-ink text-brand-paper px-4 py-3 rounded-full shadow-cardSoft"
              >
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-brand-gold">Live</span>
                <span className="h-4 w-px bg-brand-paper/30" />
                <span className="font-display text-xl tabular">+3,240 pts today</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl sm:text-4xl text-brand-ink tabular">{value}</div>
      <div className="mt-1 font-mono text-[0.62rem] uppercase tracking-widest text-brand-ink/55">
        {label}
      </div>
    </div>
  )
}
