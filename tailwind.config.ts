import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Blues — PointStax signature
          deep: '#1D4ED8',
          deepAlt: '#1E40AF',
          blue: '#2563EB',
          blueAlt: '#3B82F6',
          sky: '#60A5FA',
          skyAlt: '#93C5FD',
          ice: '#BFDBFE',
          iceAlt: '#DBEAFE',
          iceLight: '#E6F4FE',
          paper: '#FAFAF7',          // warm paper background (editorial)
          ink: '#0A1929',            // deep ink for text
          inkSoft: '#1E3A5F',        // softer text tone
          navy: '#1E3A5F',           // legacy alias
          // Accents
          gold: '#E9B44C',           // warm gold for "points" highlights
          goldSoft: '#F4D49D',       // lighter gold
          rule: '#D4CFC2',           // paper-like divider color
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        tight: '-0.015em',
        wide: '0.05em',
        wider: '0.12em',
        widest: '0.22em',
      },
      fontSize: {
        'display-xl': ['clamp(3.75rem, 9vw, 8rem)', { lineHeight: '0.92', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },
      boxShadow: {
        card: '0 30px 60px -24px rgba(29, 78, 216, 0.35), 0 10px 22px -12px rgba(10, 25, 41, 0.18)',
        cardSoft: '0 20px 50px -20px rgba(29, 78, 216, 0.18)',
        ink: '0 1px 0 rgba(10, 25, 41, 0.08)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'fade-up': 'fade-up 900ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'marquee': 'marquee 40s linear infinite',
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
      },
    },
  },
  plugins: [],
} satisfies Config
