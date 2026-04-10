import { motion } from 'framer-motion'
import { LAUNCH_DATE, LAUNCH_MODE } from '../config'
import { PhoneMockup } from './PhoneMockup'
import { WaitlistForm } from './WaitlistForm'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-iceLight via-white to-brand-ice pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block rounded-full bg-brand-ice px-4 py-1.5 text-sm font-semibold text-brand-deep">
              Launching {LAUNCH_DATE}
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-6xl">
              Every point,
              <br />
              <span className="text-brand-deep">perfectly used.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-brand-navy/70">
              Maximize rewards on every purchase, across every card you own.
            </p>

            {LAUNCH_MODE === 'waitlist' ? (
              <>
                <div id="hero-form" className="mt-8 max-w-lg">
                  <WaitlistForm source="hero" />
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-lg bg-brand-navy/5 px-4 py-2 text-sm font-medium text-brand-navy/60">
                    📱 App Store — Coming Soon
                  </span>
                  <span className="rounded-lg bg-brand-navy/5 px-4 py-2 text-sm font-medium text-brand-navy/60">
                    ▶ Google Play — Coming Soon
                  </span>
                </div>
              </>
            ) : (
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-xl bg-brand-navy px-6 py-3 font-semibold text-white"
                >
                  📱 Download on App Store
                </a>
                <a
                  href="#"
                  className="rounded-xl bg-brand-navy px-6 py-3 font-semibold text-white"
                >
                  ▶ Get it on Google Play
                </a>
              </div>
            )}
          </motion.div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <PhoneMockup title="Your cards" tilt={-6} delay={0.2}>
                <div className="space-y-3">
                  <div className="h-20 rounded-xl bg-gradient-to-br from-brand-deep to-brand-navy" />
                  <div className="h-20 rounded-xl bg-gradient-to-br from-brand-blue to-brand-deep" />
                  <div className="h-20 rounded-xl bg-gradient-to-br from-brand-sky to-brand-blue" />
                </div>
              </PhoneMockup>
              <div className="absolute -right-16 top-16 hidden lg:block">
                <PhoneMockup title="Best card here" tilt={6} delay={0.4}>
                  <div className="space-y-3">
                    <div className="rounded-xl bg-brand-ice p-3 text-xs font-semibold text-brand-deep">
                      ★ Use: Sapphire Preferred
                    </div>
                    <div className="h-2 rounded bg-brand-ice" />
                    <div className="h-2 w-2/3 rounded bg-brand-ice" />
                    <div className="h-2 w-3/4 rounded bg-brand-ice" />
                  </div>
                </PhoneMockup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
