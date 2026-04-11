import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-brand-paper border-t border-brand-rule/60 pt-20 pb-10 grain">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Huge wordmark */}
        <div className="mb-16">
          <div className="font-display italic text-[clamp(4rem,13vw,13rem)] leading-none text-brand-ink tracking-tightest">
            PointStax<span className="text-brand-gold">.</span>
          </div>
          <p className="mt-4 font-display text-2xl italic text-brand-ink/55 max-w-lg">
            Every point, perfectly used.
          </p>
        </div>

        {/* Columns */}
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] rule-top pt-10">
          <div>
            <Logo />
            <p className="mt-5 text-sm text-brand-ink/55 max-w-xs leading-relaxed">
              The first rewards optimizer that actually understands your entire wallet.
              Built for people who read the fine print.
            </p>
          </div>

          <div>
            <div className="label-eyebrow mb-4">Product</div>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#hero-form">Waitlist</FooterLink>
              <FooterLink href="#">iOS app (soon)</FooterLink>
              <FooterLink href="#">Android app (soon)</FooterLink>
            </ul>
          </div>

          <div>
            <div className="label-eyebrow mb-4">Legal</div>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/privacy">Privacy</FooterLink>
              <FooterLink href="/terms">Terms</FooterLink>
              <FooterLink href="mailto:support@pointstax.ai">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <div className="label-eyebrow mb-4">Elsewhere</div>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#">Twitter / X</FooterLink>
              <FooterLink href="#">Instagram</FooterLink>
              <FooterLink href="#">GitHub</FooterLink>
            </ul>
          </div>
        </div>

        <div className="rule-top mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="label-eyebrow">© {year} PointStax. All rights reserved.</div>
          <div className="label-eyebrow">Est. 2026 · Made with obsession</div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition-colors"
      >
        <span className="h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-4" />
        <span className="group-hover:italic font-display transition-all">{children}</span>
      </a>
    </li>
  )
}
