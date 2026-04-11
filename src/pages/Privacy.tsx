import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'

export function Privacy() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-36 pb-24 text-brand-ink">
        <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-brand-navy/60">Effective: April 10, 2026</p>

        <div className="mt-4 rounded-xl border border-brand-ice bg-brand-iceLight px-5 py-3 text-sm text-brand-navy/80">
          <strong>Note:</strong> This is an interim draft. It will be replaced with a
          lawyer-reviewed version before public launch.
        </div>

        <div className="mt-8 space-y-6 leading-relaxed">
          <section>
            <p>
              PointStax ("PointStax", "we", "us", "our") is committed to protecting your
              privacy. This Privacy Policy describes how we collect, use, and share
              information when you sign up for our waitlist, visit our website, or use the
              PointStax mobile app (collectively, the "Service").
            </p>
            <p>
              By using the Service, you agree to the collection and use of information in
              accordance with this policy. If you do not agree, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">1. Information We Collect</h2>

            <h3 className="mt-4 text-lg font-semibold">Waitlist sign-ups (pre-launch)</h3>
            <p>When you join our waitlist, we collect:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Your email address</li>
              <li>The date and time you signed up</li>
              <li>The source of your signup (e.g., which section of the page)</li>
              <li>
                A hashed representation of your IP address (for anti-abuse; we do not store
                raw IP addresses)
              </li>
              <li>Your user agent string (browser/OS type)</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold">Mobile app (post-launch)</h3>
            <p>When you use the PointStax app, we collect:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                Card metadata you enter (card name, issuer, network, rewards tier) — never
                account numbers, PINs, or credentials
              </li>
              <li>
                Your location, only when you explicitly enable location-based recommendations
              </li>
              <li>Purchase categories you log (e.g., "Dining", "Travel")</li>
              <li>Usage analytics to improve the product (screen views, feature clicks)</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold">Website analytics</h3>
            <p>
              We use Plausible Analytics to understand how visitors use this site. Plausible
              is a privacy-friendly tool that does not use cookies, does not track you across
              sites, and does not collect personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. What We Don't Collect</h2>
            <p>PointStax does not:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Collect your full credit or debit card numbers</li>
              <li>Store your online banking credentials</li>
              <li>Pull your credit report or initiate hard inquiries</li>
              <li>Link to your bank, brokerage, or investment accounts</li>
              <li>Sell or rent your personal information to anyone</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. How We Use Information</h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <strong>Pre-launch:</strong> To notify you when PointStax launches. That's it.
              </li>
              <li>
                <strong>Post-launch:</strong> To provide card recommendations, show you your
                rewards, improve the product, prevent fraud, and respond to support requests.
              </li>
              <li>
                <strong>Legal:</strong> To comply with applicable law, enforce our terms, or
                respond to lawful requests from public authorities.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. Third-Party Services</h2>
            <p>We use a small number of third-party services to operate PointStax:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <strong>Google Cloud Firestore</strong> — stores your card metadata and
                waitlist information securely.
              </li>
              <li>
                <strong>Plausible Analytics</strong> — privacy-friendly website analytics
                (no cookies, no personal data).
              </li>
              <li>
                <strong>Anthropic</strong> — powers our AI recommendation engine. We do not
                send your personal identifying information to Anthropic.
              </li>
            </ul>
            <p>
              We require each third party to protect your data with industry-standard
              safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">5. Data Security</h2>
            <p>
              We use bank-level encryption (TLS 1.2+) for data in transit and encryption at
              rest for data stored on our servers. Authentication credentials, if any, are
              hashed and never stored in plain text.
            </p>
            <p>
              However, no method of transmission or storage is 100% secure. We cannot
              guarantee absolute security, but we take reasonable steps to protect your
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">6. Data Retention</h2>
            <p>
              <strong>Waitlist:</strong> We retain your email until you ask us to delete it
              or until 12 months after the app launches — whichever comes first.
            </p>
            <p>
              <strong>App data:</strong> We retain your data while your account is active.
              When you delete your account, we delete your personal data within 30 days,
              except where required by law to retain longer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data ("right to be forgotten")</li>
              <li>Export your data in a portable format</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, email{' '}
              <a href="mailto:support@pointstax.ai" className="text-brand-deep">
                support@pointstax.ai
              </a>
              . We'll respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">8. Children's Privacy</h2>
            <p>
              PointStax is not intended for anyone under 18. We do not knowingly collect
              personal data from children. If we discover we have collected data from a child
              under 18, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material
              changes, we will notify you by email (if you're on the waitlist or have an
              account) and update the "Effective" date above. Continued use of the Service
              after changes means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, email{' '}
              <a href="mailto:support@pointstax.ai" className="text-brand-deep">
                support@pointstax.ai
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
