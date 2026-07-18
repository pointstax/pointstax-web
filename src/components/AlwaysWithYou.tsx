import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * "With you everywhere" — horizontal scenario strip showing the AI
 * reasoning across different contexts. Replaces the old pull quote.
 */
const scenarios = [
  {
    icon: 'coffee',
    context: 'Dining',
    place: 'Blue Bottle Coffee',
    card: 'Chase Sapphire Preferred',
    mult: '3×',
    accent: 'from-brand-gold to-brand-goldDeep',
  },
  {
    icon: 'cart',
    context: 'Groceries',
    place: 'Whole Foods Market',
    card: 'Amex Gold',
    mult: '4×',
    accent: 'from-amber-400 to-amber-600',
  },
  {
    icon: 'plane',
    context: 'Travel',
    place: 'Delta Flight DL 204',
    card: 'Capital One Venture X',
    mult: '5×',
    accent: 'from-brand-live to-emerald-600',
  },
  {
    icon: 'fuel',
    context: 'Gas',
    place: 'Shell · 9th & Market',
    card: 'Amex Blue Cash',
    mult: '3%',
    accent: 'from-sky-400 to-brand-gold',
  },
]

const icons: Record<string, ReactNode> = {
  coffee: (
    <path d="M3 10h14v4a4 4 0 01-4 4H7a4 4 0 01-4-4v-4zm14 0h2a2 2 0 012 2v1a2 2 0 01-2 2h-2M6 2v3M10 2v3M14 2v3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  ),
  cart: (
    <path d="M3 3h2l2 12h12l2-8H7m3 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  plane: (
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
  ),
  fuel: (
    <path d="M3 21V5a2 2 0 012-2h6a2 2 0 012 2v16M3 21h10M3 10h10m0 4h3a2 2 0 002-2V8a2 2 0 00-.59-1.41L16 5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
}

export function AlwaysWithYou() {
  return (
    <section className="relative bg-brand-canvas py-24 lg:py-32 overflow-hidden">
      {/* subtle grid bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-light opacity-60"
        style={{
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-live animate-pulse-dot" />
            <span className="label-eyebrow">With you everywhere</span>
          </div>
          <h2 className="font-display text-display-lg font-semibold text-brand-ink text-balance">
            Dining. Groceries. Travel. Gas.
            <br />
            <span className="text-brand-muted">It knows the right answer.</span>
          </h2>
          <p className="mt-6 text-lg text-brand-muted max-w-xl leading-relaxed">
            PointStax reasons about context: where you are, what you're buying,
            what's in your wallet, and what it's actually worth. The answer is
            instant. The earnings compound.
          </p>
        </div>

        {/* Scenario grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.place}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl bg-brand-surface border border-brand-rule p-6 shadow-cardSoft hover:shadow-cardLg transition-shadow"
            >
              {/* icon */}
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  {icons[s.icon]}
                </svg>
              </div>

              {/* label */}
              <div className="mt-5 label-eyebrow">{s.context}</div>
              <div className="mt-1 text-base font-medium text-brand-ink truncate">
                {s.place}
              </div>

              {/* divider */}
              <div className="my-5 h-px bg-brand-rule" />

              {/* card + multiplier */}
              <div className="flex items-end justify-between">
                <div className="min-w-0 pr-3">
                  <div className="label-eyebrow !text-[0.6rem]">Use</div>
                  <div className="mt-1 text-sm font-medium text-brand-ink leading-snug truncate">
                    {s.card}
                  </div>
                </div>
                <div className="font-display text-3xl font-semibold text-brand-ink tabular leading-none">
                  {s.mult}
                </div>
              </div>

              {/* hover accent glow */}
              <div
                aria-hidden="true"
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                style={{
                  boxShadow: '0 0 0 1px rgba(29, 78, 216, 0.15), 0 40px 80px -30px rgba(29, 78, 216, 0.3)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom summary */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-brand-ink text-white p-8 lg:p-10 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-mesh-hero opacity-60"
          />
          <div className="relative">
            <div className="label-eyebrow !text-white/45">Daily total</div>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="font-display text-5xl font-semibold text-white tabular">+1,445</span>
              <span className="text-xl text-white/50">pts</span>
            </div>
          </div>
          <div className="relative text-center md:text-right">
            <div className="text-xl font-medium text-white text-balance">
              That's <span className="text-brand-live">$26.01</span> you would have
              left on the table.
            </div>
            <div className="mt-1.5 label-eyebrow !text-white/40">
              Times 365. Every year. Every card.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
