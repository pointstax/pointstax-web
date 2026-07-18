import { useEffect, useState } from 'react'
import { Logo } from './Logo'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-2xl bg-brand-ink/70 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 lg:px-10 py-4">
        <Logo dark />
        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="hidden md:inline font-mono text-[0.72rem] uppercase tracking-widest text-white/55 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#how"
            className="hidden md:inline font-mono text-[0.72rem] uppercase tracking-widest text-white/55 hover:text-white transition-colors"
          >
            How it works
          </a>
          <a
            href="#hero-form"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-ink transition-all hover:bg-brand-goldSoft"
          >
            <span>Get early access</span>
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
