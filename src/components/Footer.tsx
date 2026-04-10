import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-brand-ice bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Logo />
            <p className="mt-2 text-sm text-brand-navy/60">Every point, perfectly used.</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-navy/70">
            <a href="#" className="hover:text-brand-deep">About</a>
            <a href="/privacy" className="hover:text-brand-deep">Privacy</a>
            <a href="/terms" className="hover:text-brand-deep">Terms</a>
            <a href="mailto:support@pointstax.ai" className="hover:text-brand-deep">Contact</a>
          </nav>
        </div>
        <div className="mt-8 border-t border-brand-ice pt-6 text-center text-xs text-brand-navy/50">
          © 2026 PointStax. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
