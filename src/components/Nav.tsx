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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-white/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <a
          href="#hero-form"
          className="rounded-lg bg-brand-deep px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          Get early access
        </a>
      </div>
    </nav>
  )
}
