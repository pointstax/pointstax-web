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
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-brand-paper/92 border-b border-brand-rule/60 shadow-ink'
          : 'bg-brand-paper/0 border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 lg:px-10 py-5">
        <Logo />
        <div className="flex items-center gap-8">
          <span className="label-eyebrow hidden md:inline">Est. 2026 · New York</span>
          <a
            href="#hero-form"
            className="group relative inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-2.5 text-sm font-medium text-brand-paper transition-all hover:bg-brand-deep"
          >
            <span>Get early access</span>
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
