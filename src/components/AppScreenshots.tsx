import { motion } from 'framer-motion'

/**
 * "A random Tuesday" — editorial storytelling with three vignettes
 * instead of generic phone screenshots.
 */
const vignettes = [
  {
    time: '07:42',
    where: 'Blue Bottle Coffee',
    category: 'DINING',
    recommended: 'Sapphire Preferred',
    multiplier: '3×',
    earned: '+21 pts',
    body: 'Amex wanted to earn 1×. PointStax nudged you to your Sapphire. Morning win.',
    tone: 'paper',
  },
  {
    time: '12:16',
    where: 'Whole Foods Market',
    category: 'GROCERY',
    recommended: 'Amex Gold',
    multiplier: '4×',
    earned: '+184 pts',
    body: 'You almost used your Apple Card. Gold earns 4× on groceries. Close call.',
    tone: 'ink',
  },
  {
    time: '19:03',
    where: 'Delta Flight DL 204',
    category: 'TRAVEL',
    recommended: 'Venture X',
    multiplier: '5×',
    earned: '+1,240 pts',
    body: 'Booked through the Capital One portal. A thousand extra points, gone unnoticed.',
    tone: 'gold',
  },
] as const

export function AppScreenshots() {
  return (
    <section className="relative bg-brand-paper py-28 lg:py-36 grain">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="max-w-3xl rule-bottom pb-12 mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-brand-ink" />
            <span className="label-eyebrow">A Day in the Life</span>
          </div>
          <h2 className="mt-5 font-display text-display-lg text-brand-ink">
            A random <em className="italic text-brand-deep">Tuesday</em>.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-brand-ink/65 font-light leading-relaxed">
            Three ordinary purchases. Three quiet wins. Three reminders that PointStax is
            sitting on your shoulder, whispering the right answer.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {vignettes.map((v, i) => {
            const dark = v.tone === 'ink'
            const gold = v.tone === 'gold'
            return (
              <motion.article
                key={v.time}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-[28px] p-8 lg:p-9 shadow-cardSoft ${
                  dark
                    ? 'bg-brand-ink text-brand-paper'
                    : gold
                    ? 'bg-brand-gold text-brand-ink'
                    : 'bg-white text-brand-ink border border-brand-rule/60'
                }`}
              >
                {/* receipt perforation on top */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-3"
                  style={{
                    backgroundImage: `radial-gradient(circle at 8px 0, ${
                      dark ? '#FAFAF7' : gold ? '#0A1929' : '#FAFAF7'
                    } 5px, transparent 5px)`,
                    backgroundSize: '16px 10px',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: '0 -3px',
                  }}
                />

                <div className="flex items-center justify-between pt-3">
                  <span className={`font-mono text-xs tracking-widest ${dark ? 'text-brand-paper/60' : gold ? 'text-brand-ink/60' : 'text-brand-ink/50'}`}>
                    {v.time}
                  </span>
                  <span className={`label-eyebrow !text-[0.62rem] ${dark ? '!text-brand-gold' : gold ? '!text-brand-ink/70' : ''}`}>
                    {v.category}
                  </span>
                </div>

                <div className="mt-5 font-display text-2xl italic leading-tight">
                  {v.where}
                </div>

                <div className="mt-8 flex items-end justify-between rule-top !border-dashed pt-5"
                     style={{ borderColor: dark ? 'rgba(250,250,247,0.2)' : 'rgba(10,25,41,0.2)' }}>
                  <div>
                    <div className={`label-eyebrow !tracking-wider ${dark ? '!text-brand-paper/55' : gold ? '!text-brand-ink/55' : ''}`}>
                      Use
                    </div>
                    <div className="font-display text-2xl mt-1">{v.recommended}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-display text-5xl tabular leading-none ${gold ? 'text-brand-ink' : dark ? 'text-brand-gold' : 'text-brand-deep'}`}>
                      {v.multiplier}
                    </div>
                    <div className={`font-mono text-xs mt-2 ${dark ? 'text-brand-paper/60' : gold ? 'text-brand-ink/60' : 'text-brand-ink/55'}`}>
                      {v.earned}
                    </div>
                  </div>
                </div>

                <p className={`mt-6 text-sm leading-relaxed ${dark ? 'text-brand-paper/70' : gold ? 'text-brand-ink/75' : 'text-brand-ink/65'}`}>
                  {v.body}
                </p>
              </motion.article>
            )
          })}
        </div>

        {/* Daily total */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 rule-top pt-10"
        >
          <div className="flex items-baseline gap-4">
            <span className="label-eyebrow">Daily total</span>
            <span className="font-display text-6xl text-brand-ink tabular">+1,445</span>
            <span className="font-display text-xl italic text-brand-ink/50">pts</span>
          </div>
          <div className="text-center md:text-right">
            <div className="font-display text-2xl italic text-brand-ink">
              That's <span className="text-brand-deep">$26.01</span> you would have left on the table.
            </div>
            <div className="label-eyebrow mt-1">Times 365. Every year. Every card.</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
