import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { useRef } from 'react'

interface CreditCardProps {
  variant?: 'deep' | 'sky' | 'gold'
  label?: string
  issuer?: string
  points?: string
  tilt?: number
  delay?: number
  className?: string
}

/**
 * Tactile, glass-like credit card with 3D hover parallax.
 * No screens, no phones — this IS the product.
 */
export function CreditCard({
  variant = 'deep',
  label = 'Rewards Card',
  issuer = 'PointStax',
  points = '128,402',
  tilt = 0,
  delay = 0,
  className = '',
}: CreditCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 180, damping: 18 })
  const rotateY = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 180, damping: 18 })

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 100)
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 100)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const faces: Record<string, { bg: string; accent: string; text: string; shine: string }> = {
    deep: {
      bg: 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 40%, #0A1F4D 100%)',
      accent: '#93C5FD',
      text: '#DBEAFE',
      shine: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.25), transparent 60%)',
    },
    sky: {
      bg: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 45%, #1E3A8A 100%)',
      accent: '#E9B44C',
      text: '#EFF6FF',
      shine: 'radial-gradient(ellipse at 60% 15%, rgba(255,255,255,0.35), transparent 55%)',
    },
    gold: {
      bg: 'linear-gradient(135deg, #E9B44C 0%, #B98A2B 45%, #6B4C14 100%)',
      accent: '#FFFCF2',
      text: '#1E0F00',
      shine: 'radial-gradient(ellipse at 40% 25%, rgba(255,255,255,0.42), transparent 55%)',
    },
  }
  const face = faces[variant]

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, rotate: tilt }}
      animate={{ opacity: 1, y: 0, rotate: tilt }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative aspect-[1.586/1] w-full rounded-[22px] shadow-card overflow-hidden ${className}`}
    >
      {/* base */}
      <div
        className="absolute inset-0 rounded-[22px]"
        style={{ background: face.bg }}
      />
      {/* shine layer */}
      <div
        className="absolute inset-0 rounded-[22px]"
        style={{ background: face.shine, transform: 'translateZ(1px)' }}
      />
      {/* subtle diagonal sheen */}
      <div
        className="absolute inset-0 rounded-[22px] opacity-[0.18] mix-blend-overlay"
        style={{
          background:
            'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
        }}
      />
      {/* noise */}
      <div
        className="absolute inset-0 rounded-[22px] opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* content */}
      <div className="relative h-full p-[7%] flex flex-col justify-between" style={{ transform: 'translateZ(20px)' }}>
        {/* top row */}
        <div className="flex items-start justify-between">
          <div>
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.22em]" style={{ color: face.text, opacity: 0.7 }}>
              {label}
            </div>
            <div
              className="font-display text-[1.8rem] leading-none mt-1 italic"
              style={{ color: face.text }}
            >
              {issuer}
            </div>
          </div>
          {/* chip */}
          <div
            className="w-10 h-8 rounded-[6px] relative"
            style={{
              background: `linear-gradient(135deg, ${face.accent} 0%, rgba(255,255,255,0.6) 50%, ${face.accent} 100%)`,
            }}
          >
            <div className="absolute inset-[15%] border border-black/20 rounded-[3px]" />
            <div className="absolute inset-y-[30%] left-[20%] right-[20%] border-t border-b border-black/25" />
          </div>
        </div>

        {/* middle — points */}
        <div className="mt-2">
          <div className="font-mono text-[0.55rem] uppercase tracking-[0.2em]" style={{ color: face.text, opacity: 0.55 }}>
            Total points
          </div>
          <div
            className="font-display text-[clamp(1.6rem,4cqw,2.4rem)] leading-none tabular mt-1"
            style={{ color: face.text }}
          >
            {points}
          </div>
        </div>

        {/* bottom row */}
        <div className="flex items-end justify-between">
          <div className="font-mono text-[0.55rem] tracking-[0.12em]" style={{ color: face.text, opacity: 0.55 }}>
            •••• •••• •••• 4402
          </div>
          {/* contactless icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: face.text, opacity: 0.7 }}>
            <path d="M5 8c3.5 3 3.5 5 0 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M9 6c5 4.5 5 7.5 0 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M13 4c6.5 6 6.5 10 0 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}
