import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'

export function Privacy() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-32 text-brand-navy">
        <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-brand-navy/60">Effective: April 10, 2026</p>

        <div className="prose prose-blue mt-8 space-y-6">
          <p>
            PointStax ("we", "us") respects your privacy. This policy explains what we collect,
            why, and how we use it.
          </p>

          <h2 className="text-2xl font-bold">What we collect</h2>
          <p>
            <strong>Pre-launch (waitlist):</strong> only your email address when you sign up for
            early access. We also record the time of signup, the source (which part of the page
            you signed up from), and a hashed version of your IP address for anti-abuse purposes.
          </p>
          <p>
            <strong>At launch:</strong> when you use the mobile app, we collect the information
            you provide about your credit cards (card name, network, issuer — never account
            numbers or credentials) and, with your permission, your location for recommendations.
          </p>

          <h2 className="text-2xl font-bold">What we don't collect</h2>
          <p>
            We never collect your credit card account numbers, PINs, login credentials, or pull
            your credit. We do not link to your bank accounts.
          </p>

          <h2 className="text-2xl font-bold">How we use it</h2>
          <p>
            Pre-launch, we use your email only to notify you when PointStax is available. After
            launch, we use your data to provide recommendations and improve the service. We
            never sell your data.
          </p>

          <h2 className="text-2xl font-bold">Third parties</h2>
          <p>
            We use Plausible Analytics, which does not use cookies or collect personal data.
            That's it.
          </p>

          <h2 className="text-2xl font-bold">Data retention</h2>
          <p>
            We keep your email on the waitlist until you unsubscribe or we launch the app. After
            launch, your data is kept while your account is active.
          </p>

          <h2 className="text-2xl font-bold">Your rights</h2>
          <p>
            You can request deletion of your data at any time by emailing{' '}
            <a href="mailto:support@pointstax.ai" className="text-brand-deep">support@pointstax.ai</a>.
          </p>

          <h2 className="text-2xl font-bold">Contact</h2>
          <p>
            Questions? Email <a href="mailto:support@pointstax.ai" className="text-brand-deep">support@pointstax.ai</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
