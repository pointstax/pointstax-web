import { LAUNCH_MODE } from '../config'
import { WaitlistForm } from './WaitlistForm'

export function FinalCTA() {
  if (LAUNCH_MODE === 'launched') return null

  return (
    <section className="bg-brand-deep py-20 text-white">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-extrabold">Be the first to try it.</h2>
        <p className="mt-4 text-lg text-brand-ice">
          Join the waitlist and get early access when we launch.
        </p>
        <div className="mt-8">
          <WaitlistForm source="final-cta" />
        </div>
      </div>
    </section>
  )
}
