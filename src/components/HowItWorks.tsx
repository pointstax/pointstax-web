const steps = [
  {
    n: '1',
    title: 'Add your cards',
    body: 'Tell us which cards you have. No credentials, no credit pull.',
  },
  {
    n: '2',
    title: 'Get smart recommendations',
    body: 'We tell you exactly which card to use, based on where you are.',
  },
  {
    n: '3',
    title: 'Earn more, spend smarter',
    body: 'Watch your rewards stack up and see your real redemption value.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-gradient-to-br from-brand-iceLight to-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-extrabold text-brand-navy">How it works</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-deep text-2xl font-extrabold text-white">
                {s.n}
              </div>
              <h3 className="mt-6 text-xl font-bold text-brand-navy">{s.title}</h3>
              <p className="mt-2 text-brand-navy/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
