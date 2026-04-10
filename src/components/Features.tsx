import { motion } from 'framer-motion'

const features = [
  {
    icon: '🤖',
    title: 'AI-powered recommendations',
    body: 'Advanced AI analyzes your spending and tells you exactly which card to use, every time.',
  },
  {
    icon: '📍',
    title: 'Location-aware',
    body: 'Powered by where you are. The best card for every store, every restaurant, every gas station.',
  },
  {
    icon: '💳',
    title: 'All your cards in one place',
    body: 'Your full rewards portfolio, balances, perks, and benefits — at a glance.',
  },
  {
    icon: '💎',
    title: 'See your real value',
    body: 'Know what your points are actually worth. We calculate real redemption value so you can spend smarter.',
  },
]

export function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-extrabold text-brand-navy">
          Stop guessing which card to use
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-brand-navy/70">
          PointStax does the math for every purchase, so you don't have to.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-brand-ice bg-gradient-to-br from-white to-brand-iceLight p-8 shadow-sm"
            >
              <div className="text-4xl">{f.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-brand-navy">{f.title}</h3>
              <p className="mt-2 text-brand-navy/70">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
