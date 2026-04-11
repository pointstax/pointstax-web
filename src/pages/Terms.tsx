import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'

export function Terms() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-36 pb-24 text-brand-ink">
        <h1 className="text-4xl font-extrabold">Terms of Service</h1>
        <p className="mt-2 text-sm text-brand-navy/60">Effective: April 10, 2026</p>

        <div className="mt-4 rounded-xl border border-brand-ice bg-brand-iceLight px-5 py-3 text-sm text-brand-navy/80">
          <strong>Note:</strong> This is an interim draft. It will be replaced with a
          lawyer-reviewed version before public launch.
        </div>

        <div className="mt-8 space-y-6 leading-relaxed">
          <section>
            <p>
              Welcome to PointStax. These Terms of Service ("Terms") govern your access to
              and use of the PointStax website, waitlist, and mobile applications
              (collectively, the "Service"), provided by PointStax ("we", "us", or "our").
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If
              you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">1. Eligibility</h2>
            <p>
              You must be at least 18 years old and legally able to enter into a binding
              contract to use PointStax. By using the Service, you represent that you meet
              these requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. Account Registration</h2>
            <p>
              To use certain features, you may need to create an account. You agree to
              provide accurate, current information and to keep it updated. You are
              responsible for safeguarding your account credentials and for all activity
              under your account.
            </p>
            <p>
              You agree to notify us immediately at{' '}
              <a href="mailto:support@pointstax.ai" className="text-brand-deep">
                support@pointstax.ai
              </a>{' '}
              if you suspect unauthorized access to your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. Not Financial Advice</h2>
            <p>
              <strong>
                PointStax provides general informational recommendations based on publicly
                available data about credit card reward programs. The Service is not
                financial, legal, tax, or investment advice.
              </strong>
            </p>
            <p>
              Our recommendations are algorithmic suggestions. You are solely responsible
              for your financial decisions, including whether to apply for, open, close, or
              use any credit card. Always review the terms and conditions of any financial
              product directly with the issuer before making decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. Accuracy of Information</h2>
            <p>
              We work to keep reward program data accurate and up-to-date. However, credit
              card issuers change their programs frequently. We cannot guarantee that every
              data point is current or that every recommendation is optimal for your
              specific situation.
            </p>
            <p>
              <strong>You should always verify reward terms directly with the card issuer
              before making purchases or redemptions.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Attempt to reverse engineer, decompile, or scrape the Service</li>
              <li>
                Interfere with or disrupt the Service or circumvent any security measures
              </li>
              <li>Submit false, misleading, or fraudulent information</li>
              <li>Impersonate any person or entity</li>
              <li>
                Use automated tools (bots, scrapers) to access or collect data without our
                written permission
              </li>
              <li>Resell, sublicense, or commercially exploit the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">6. Intellectual Property</h2>
            <p>
              The Service, including all content, features, logos, and software, is owned
              by PointStax or its licensors and is protected by copyright, trademark, and
              other laws. We grant you a limited, non-exclusive, non-transferable, revocable
              license to use the Service for personal, non-commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">7. Third-Party Services and Links</h2>
            <p>
              The Service may contain links to third-party websites or services that are
              not owned or controlled by PointStax (including credit card issuer websites).
              We are not responsible for the content, privacy practices, or terms of any
              third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">8. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY
              KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
              ERROR-FREE, OR COMPLETELY SECURE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">9. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, POINTSTAX AND ITS OFFICERS, DIRECTORS,
              EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST
              PROFITS, LOST REWARDS, OR LOSS OF DATA, ARISING FROM YOUR USE OF (OR INABILITY
              TO USE) THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES.
            </p>
            <p>
              IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED ONE HUNDRED U.S. DOLLARS ($100),
              OR THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS, WHICHEVER IS GREATER.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless PointStax from any claims, damages,
              liabilities, costs, or expenses (including reasonable attorneys' fees) arising
              from your use of the Service, your violation of these Terms, or your violation
              of any rights of another.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">11. Termination</h2>
            <p>
              We may suspend or terminate your access to the Service at any time, with or
              without notice, for any reason, including if we believe you have violated
              these Terms. Upon termination, your right to use the Service ceases
              immediately.
            </p>
            <p>
              You may stop using the Service at any time. To delete your account or
              waitlist entry, email{' '}
              <a href="mailto:support@pointstax.ai" className="text-brand-deep">
                support@pointstax.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">12. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by the laws of the State of [STATE], United States,
              without regard to conflict of laws principles. Any disputes arising out of or
              related to these Terms or the Service shall be resolved exclusively in the
              state or federal courts located in [COUNTY], [STATE], and you consent to the
              personal jurisdiction of those courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">13. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. If we make material changes, we
              will notify you by email or via the Service and update the "Effective" date.
              Your continued use of the Service after changes take effect constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">14. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining
              provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">15. Contact Us</h2>
            <p>
              Questions about these Terms? Email{' '}
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
