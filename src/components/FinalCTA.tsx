import { LAUNCH_MODE } from '../config'
import { WaitlistForm } from './WaitlistForm'

export function FinalCTA() {
  if (LAUNCH_MODE === 'launched') return null

  return (
    <section className="relative overflow-hidden bg-brand-ink text-brand-paper py-28 lg:py-40">
      {/* massive background numeral */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display italic text-[min(60vw,700px)] leading-none text-brand-deep/20">
          Pts.
        </span>
      </div>

      {/* gold radial */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40 blur-[100px]"
        style={{
          background:
            'radial-gradient(ellipse at 20% 30%, rgba(233, 180, 76, 0.3), transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(29, 78, 216, 0.35), transparent 60%)',
        }}
      />
      <div className="absolute inset-0 grain" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-brand-gold" />
          <span className="label-eyebrow !text-brand-gold">The Final Act</span>
          <span className="h-px w-10 bg-brand-gold" />
        </div>

        <h2 className="font-display text-display-lg">
          Be <em className="italic text-brand-gold">first</em> in the door.
        </h2>

        <p className="mt-6 text-lg text-brand-paper/65 font-light max-w-xl mx-auto">
          We're launching soon, and the first wave gets lifetime access to premium features.
          No gimmicks. Just earlier.
        </p>

        <div className="mt-10 max-w-xl mx-auto">
          <WaitlistForm source="final-cta" buttonLabel="Reserve my spot" />
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 label-eyebrow !text-brand-paper/60">
          <span>No spam</span>
          <span className="h-px w-6 bg-brand-paper/30" />
          <span>Unsubscribe anytime</span>
          <span className="h-px w-6 bg-brand-paper/30" />
          <span>No credit card required</span>
        </div>
      </div>
    </section>
  )
}
