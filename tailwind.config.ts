import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#1D4ED8',
          deepAlt: '#1E40AF',
          blue: '#2563EB',
          blueAlt: '#3B82F6',
          sky: '#60A5FA',
          skyAlt: '#93C5FD',
          ice: '#BFDBFE',
          iceAlt: '#DBEAFE',
          iceLight: '#E6F4FE',
          navy: '#1E3A5F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
