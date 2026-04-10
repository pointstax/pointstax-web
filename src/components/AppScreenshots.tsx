import { PhoneMockup } from './PhoneMockup'

export function AppScreenshots() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-extrabold text-brand-navy">
          Designed for every wallet
        </h2>
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <PhoneMockup title="Your cards">
            <div className="space-y-3">
              <div className="h-24 rounded-xl bg-gradient-to-br from-brand-deep to-brand-navy" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-brand-blue to-brand-deep" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-brand-sky to-brand-blue" />
            </div>
          </PhoneMockup>
          <PhoneMockup title="Best card here">
            <div className="space-y-3">
              <div className="rounded-xl bg-brand-ice p-4">
                <div className="text-xs font-bold text-brand-deep">★ Sapphire Preferred</div>
                <div className="mt-2 text-2xl font-extrabold text-brand-navy">3x</div>
                <div className="text-xs text-brand-navy/60">points on dining</div>
              </div>
              <div className="h-2 rounded bg-brand-ice" />
              <div className="h-2 w-3/4 rounded bg-brand-ice" />
            </div>
          </PhoneMockup>
          <PhoneMockup title="Your rewards">
            <div className="space-y-3">
              <div className="text-3xl font-extrabold text-brand-deep">$1,284</div>
              <div className="text-xs text-brand-navy/60">total redemption value</div>
              <div className="mt-4 h-2 rounded bg-brand-ice" />
              <div className="h-2 w-2/3 rounded bg-brand-ice" />
              <div className="h-2 w-1/2 rounded bg-brand-ice" />
            </div>
          </PhoneMockup>
        </div>
      </div>
    </section>
  )
}
