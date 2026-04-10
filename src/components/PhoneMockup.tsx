import { motion } from 'framer-motion'

interface PhoneMockupProps {
  title: string
  tilt?: number
  delay?: number
  children?: React.ReactNode
  className?: string
}

export function PhoneMockup({
  title,
  tilt = 0,
  delay = 0,
  children,
  className = '',
}: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: tilt }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
        rotate: tilt,
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay },
      }}
      className={`relative rounded-[2.5rem] border-[6px] border-brand-blue bg-brand-navy p-2 shadow-2xl ${className}`}
      style={{ width: '220px', height: '440px' }}
    >
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[2rem] bg-gradient-to-b from-brand-iceLight to-white">
        <div className="px-4 py-3 text-xs font-semibold text-brand-deep">{title}</div>
        <div className="flex-1 px-4 pb-4">{children}</div>
      </div>
    </motion.div>
  )
}
