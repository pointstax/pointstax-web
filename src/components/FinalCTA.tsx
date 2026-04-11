import { LAUNCH_MODE } from '../config'
import { WaitlistForm } from './WaitlistForm'

export function FinalCTA() {
  if (LAUNCH_MODE === 'launched') return null

  return (
    <section className="relative overflow-hidden bg-brand-ink text-white py-24 lg:py-32">
      {/* Gradient mesh */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-mesh-hero opacity-90"
      />
      {/* Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-dark opacity-50"
        style={{
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3.5 py-1.5 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-live animate-pulse-dot" />
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-white/70">
            First access
          </span>
        </div>

        <h2 className="font-display text-display-lg font-semibold text-white text-balance">
          Put PointStax in your pocket.
        </h2>
        <p className="mt-6 text-lg text-white/60 font-light max-w-xl mx-auto text-balance">
          We're launching soon. The first wave gets lifetime access to premium features.
          No gimmicks. Just earlier.
        </p>

        <div className="mt-10 max-w-xl mx-auto">
          <WaitlistForm source="final-cta" buttonLabel="Reserve my spot" />
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 font-mono text-[0.68rem] uppercase tracking-widest text-white/40">
          <span>No spam</span>
          <span className="h-px w-5 bg-white/15" />
          <span>Unsubscribe anytime</span>
          <span className="h-px w-5 bg-white/15" />
          <span>No credit card required</span>
        </div>
      </div>
    </section>
  )
}
