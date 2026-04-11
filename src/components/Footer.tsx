import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-brand-canvas border-t border-brand-rule pt-20 pb-12">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.8fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 text-sm text-brand-muted max-w-xs leading-relaxed">
              The AI that goes where you go. Intelligent recommendations, zero credentials,
              every point quietly compounded.
            </p>
          </div>

          <div>
            <div className="label-eyebrow mb-4">Product</div>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#how">How it works</FooterLink>
              <FooterLink href="#hero-form">Waitlist</FooterLink>
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
              <FooterLink href="#">LinkedIn</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-brand-rule flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-mono text-[0.7rem] text-brand-muted">
            © {year} PointStax. All rights reserved.
          </div>
          <div className="font-mono text-[0.7rem] text-brand-muted uppercase tracking-widest">
            Made with obsession · New York
          </div>
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
        className="text-brand-muted hover:text-brand-ink transition-colors inline-flex items-center gap-1.5 group"
      >
        <span>{children}</span>
        <span className="inline-block opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
          →
        </span>
      </a>
    </li>
  )
}
