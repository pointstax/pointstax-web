import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Core blues
          deep: '#1D4ED8',
          deepAlt: '#1E40AF',
          blue: '#2563EB',
          blueAlt: '#3B82F6',
          sky: '#60A5FA',
          skyAlt: '#93C5FD',
          ice: '#BFDBFE',
          iceAlt: '#DBEAFE',
          iceLight: '#EFF6FF',
          // Neutrals (cool modern)
          canvas: '#FAFBFD',
          surface: '#FFFFFF',
          ink: '#0B0F1A',               // near-black, cool
          inkAlt: '#0F172A',
          inkSoft: '#1E293B',
          navy: '#1E3A5F',               // legacy alias
          muted: '#64748B',
          subtle: '#94A3B8',
          rule: '#E2E8F0',
          ruleSoft: '#F1F5F9',
          // Accent signals
          live: '#10B981',               // mint for "live" pulses
          liveSoft: '#34D399',
          electric: '#7C3AED',           // electric purple accent (modern AI)
        },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.035em',
        tight: '-0.02em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.18em',
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.045em' }],
        'display-lg': ['clamp(2.25rem, 5.5vw, 4.5rem)', { lineHeight: '0.98', letterSpacing: '-0.04em' }],
        'display-md': ['clamp(1.75rem, 3.75vw, 3rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
      },
      backgroundImage: {
        'mesh-hero':
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37, 99, 235, 0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 100%, rgba(124, 58, 237, 0.28), transparent 60%), radial-gradient(ellipse 50% 50% at 85% 80%, rgba(16, 185, 129, 0.18), transparent 60%)',
        'mesh-soft':
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37, 99, 235, 0.08), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(124, 58, 237, 0.06), transparent 60%)',
        'grid-dark':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        card: '0 30px 60px -24px rgba(29, 78, 216, 0.28), 0 10px 22px -12px rgba(10, 14, 26, 0.18)',
        cardSoft: '0 20px 50px -20px rgba(29, 78, 216, 0.14)',
        cardLg: '0 50px 100px -30px rgba(10, 14, 26, 0.2), 0 10px 30px -10px rgba(29, 78, 216, 0.12)',
        glass: '0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 20px 60px -20px rgba(0, 0, 0, 0.4)',
        glow: '0 0 0 1px rgba(16, 185, 129, 0.35), 0 0 60px rgba(16, 185, 129, 0.25)',
        ring: '0 0 0 8px rgba(16, 185, 129, 0.08)',
        inner: '0 1px 0 rgba(255,255,255,0.06) inset, 0 -1px 0 rgba(0,0,0,0.2) inset',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'fade-up': 'fade-up 900ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'marquee': 'marquee 40s linear infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-dot': 'pulse-dot 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
          '50%': { transform: 'translateY(-10px) rotate(var(--tw-rotate, 0deg))' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.6)', opacity: '0' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
