import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'

export function Terms() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-32 text-brand-navy">
        <h1 className="text-4xl font-extrabold">Terms of Service</h1>
        <p className="mt-2 text-sm text-brand-navy/60">Effective: April 10, 2026</p>

        <div className="prose prose-blue mt-8 space-y-6">
          <h2 className="text-2xl font-bold">Acceptance</h2>
          <p>
            By signing up for the PointStax waitlist or using the PointStax app, you agree to
            these terms. If you don't agree, don't use the service.
          </p>

          <h2 className="text-2xl font-bold">Eligibility</h2>
          <p>You must be at least 18 years old to use PointStax.</p>

          <h2 className="text-2xl font-bold">Not financial advice</h2>
          <p>
            PointStax provides information to help you decide which credit card to use. Our
            recommendations are based on publicly available reward structures and algorithms —
            they are not financial, tax, or legal advice. You are responsible for your own
            financial decisions.
          </p>

          <h2 className="text-2xl font-bold">No guarantees</h2>
          <p>
            We work hard to provide accurate information, but we can't guarantee that every
            recommendation is optimal for your specific situation. Reward programs change; we
            do our best to keep up.
          </p>

          <h2 className="text-2xl font-bold">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, PointStax is not liable for any indirect,
            incidental, or consequential damages arising from your use of the service.
          </p>

          <h2 className="text-2xl font-bold">Changes</h2>
          <p>
            We may update these terms. If we make material changes, we'll notify you via email
            or in the app. Continued use constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-bold">Governing law</h2>
          <p>
            These terms are governed by the laws of the State of [STATE], United States,
            without regard to conflict of laws principles.
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
