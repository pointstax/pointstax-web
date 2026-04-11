import { motion } from 'framer-motion'
import { LAUNCH_DATE, LAUNCH_MODE } from '../config'
import { WaitlistForm } from './WaitlistForm'

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
          <span className="hidden md:inline-flex font-mono text-[0.68rem] uppercase tracking-widest text-white/45">
            Intelligence for your wallet
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="mt-16 lg:mt-24 grid gap-14 lg:grid-cols-[1.08fr_1fr] lg:gap-16 items-center">
          {/* Left: headline + CTA */}
          <div className="reveal-stagger">
            <h1 className="font-display text-display-xl font-semibold text-white text-balance">
              The AI that goes
              <br />
              where <span className="relative inline-block">
                <span
                  className="bg-gradient-to-br from-brand-ice via-white to-brand-sky bg-clip-text text-transparent"
                >
                  you
                </span>
              </span>{' '}
              go.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
              PointStax sits in your pocket and knows — before you do — which
              card earns the most at every store, every restaurant, every swipe.
              Location-aware. Portfolio-wide. Quietly obsessive about your points.
            </p>

            {LAUNCH_MODE === 'waitlist' ? (
              <div id="hero-form" className="mt-10 max-w-xl">
                <WaitlistForm source="hero" buttonLabel="Request early access" />
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

          {/* Right: live recommendation card */}
          <div className="relative">
            <LiveRecommendationCard />
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

function LiveRecommendationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="relative mx-auto max-w-md"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 bg-gradient-to-br from-brand-blue/30 via-brand-electric/20 to-brand-live/20 blur-3xl opacity-80"
      />

      <div className="relative rounded-3xl bg-white/[0.06] backdrop-blur-2xl border border-white/10 shadow-cardLg p-6">
        {/* window chrome */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-widest text-brand-live">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-live animate-pulse-dot" />
            Live
          </div>
        </div>

        {/* Context row — location */}
        <div className="flex items-center gap-3 mb-5">
          <div className="relative h-10 w-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-brand-blue to-brand-electric flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="8" r="2.5" stroke="white" strokeWidth="1.8" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[0.62rem] uppercase tracking-widest text-white/40">
              You're at
            </div>
            <div className="font-medium text-white truncate">Blue Bottle Coffee · Hayes Valley</div>
          </div>
        </div>

        {/* Thinking → Result */}
        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
          <div className="flex items-center gap-2 mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/40">
              <path
                d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-white/40">
              PointStax recommends
            </span>
          </div>

          {/* Card preview */}
          <div className="flex items-center gap-4">
            <div
              className="flex-shrink-0 w-14 h-9 rounded-md relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #0B1B4D 100%)' }}
            >
              <div className="absolute top-1.5 left-1.5 w-2 h-1.5 rounded-sm bg-gradient-to-br from-brand-ice to-brand-sky" />
              <div className="absolute bottom-1 left-1.5 right-1.5 h-px bg-white/30" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-medium text-white leading-tight">Chase Sapphire Preferred</div>
              <div className="font-mono text-[0.7rem] text-white/50 mt-0.5">
                3× on dining · 1× baseline
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-2xl font-semibold text-white tabular">3×</div>
            </div>
          </div>
        </div>

        {/* Result row */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <div className="font-mono text-[0.62rem] uppercase tracking-widest text-white/40">
              You'd earn
            </div>
            <div className="font-display text-3xl font-semibold text-white tabular mt-1">
              +21 <span className="text-white/50 text-lg font-normal">pts</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[0.62rem] uppercase tracking-widest text-brand-live/80">
              vs. Amex (1×)
            </div>
            <div className="font-mono text-sm text-brand-live mt-1">+$0.26 extra</div>
          </div>
        </div>

        {/* Shimmer top edge */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>

      {/* Floating point ticker */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-2 -top-6 hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-brand-ink/70 backdrop-blur-xl px-4 py-2 shadow-cardSoft"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-brand-live">
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/50">Today</span>
        <span className="font-semibold text-white tabular">+3,240 pts</span>
      </motion.div>
    </motion.div>
  )
}
