import { motion } from 'framer-motion'
import { LAUNCH_DATE, LAUNCH_MODE } from '../config'
import { WaitlistForm } from './WaitlistForm'
import { HeroPhones } from './HeroPhones'

/**
 * Modern-AI hero: dark gradient-mesh background, huge Geist headline,
 * glass "live recommendation" card on the right showing the product thinking.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-white pt-16 pb-28 lg:pt-24 lg:pb-40">
      {/* Gradient mesh background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-mesh-hero opacity-90"
      />
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-dark opacity-60 mask-fade-b"
        style={{ backgroundSize: '64px 64px' }}
      />
      {/* Subtle vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(11, 15, 26, 0.5) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Top status bar */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-live" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-live animate-pulse-dot" />
            </span>
            <span className="font-mono text-[0.68rem] uppercase tracking-widest text-white/75">
              Launching · {LAUNCH_DATE}
            </span>
          </div>

        </motion.div>

        {/* Main grid */}
        <div className="mt-16 lg:mt-24 grid gap-14 lg:grid-cols-[1.08fr_1fr] lg:gap-16 items-center">
          {/* Left: headline + CTA */}
          <div className="reveal-stagger">
            <h1 className="font-display text-display-xl font-semibold text-white text-balance">
              Every point,{' '}
              <span className="bg-gradient-to-br from-brand-goldMist via-white to-brand-goldBright bg-clip-text text-transparent">
                perfectly used.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
              Maximize rewards on every purchase, across every card you own. PointStax knows exactly which card to use — before you swipe.
            </p>

            {LAUNCH_MODE === 'waitlist' ? (
              <div id="hero-form" className="mt-10 max-w-xl">
                <WaitlistForm source="hero" buttonLabel="Get early access" />
                <div className="mt-5 flex items-center gap-4 font-mono text-[0.68rem] uppercase tracking-widest text-white/45">
                  <span>iOS</span>
                  <span className="h-px w-6 bg-white/15" />
                  <span>Android</span>
                  <span className="h-px w-6 bg-white/15" />
                  <span className="text-brand-live">Coming soon</span>
                </div>
              </div>
            ) : (
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#" className="rounded-full bg-white px-7 py-4 font-medium text-brand-ink">
                  Download for iOS
                </a>
                <a href="#" className="rounded-full border border-white/20 bg-white/5 backdrop-blur px-7 py-4 font-medium text-white">
                  Get it on Google Play
                </a>
              </div>
            )}

            {/* Trust ticker */}
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-white/10">
              <TrustPill text="Bank-level encryption" />
              <TrustPill text="Read-only access" />
              <TrustPill text="No credit pull" />
            </div>
          </div>

          {/* Right: phone mockups */}
          <div className="relative">
            <HeroPhones />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to canvas */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-brand-canvas"
      />
    </section>
  )
}

function TrustPill({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-[0.78rem] text-white/55">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity=".4"
        />
      </svg>
      {text}
    </div>
  )
}
