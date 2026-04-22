# Hero PRD Alignment Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the marketing site hero with the PRD design — replace the live recommendation widget with two tilted phone mockups and update copy across Hero, Features, and HowItWorks.

**Architecture:** Four targeted file changes. `HeroPhones.tsx` is a new standalone component composed into `Hero.tsx`. `Features.tsx` and `HowItWorks.tsx` are copy-only edits to their data arrays. No structural changes to layouts, animations on scroll-triggered sections, or the `LAUNCH_MODE` conditional.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion

**Spec:** `docs/superpowers/specs/2026-04-19-hero-prd-alignment-design.md`

---

## Chunk 1: HeroPhones Component + Hero Integration

### Task 1: Create HeroPhones.tsx

**Files:**
- Create: `src/components/HeroPhones.tsx`

- [ ] **Step 1: Create `src/components/HeroPhones.tsx` with the following content**

```tsx
import { motion } from 'framer-motion'

function StatusBar() {
  return (
    <div style={{ height: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px' }}>
      <span style={{ fontSize: 9, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>9:41</span>
      <div style={{ width: 50, height: 12, background: '#0d1520', borderRadius: '0 0 8px 8px' }} />
      <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>●●●</span>
    </div>
  )
}

export function HeroPhones() {
  const phoneBase = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    width: 160,
    height: 300,
    borderRadius: 28,
    overflow: 'hidden' as const,
    background: 'linear-gradient(160deg, #1a2332, #0d1520)',
    marginTop: -150,
    marginLeft: -80,
  }

  return (
    <div style={{ position: 'relative', height: 400 }}>
      {/* Radial glow behind phone 2 */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 0,
        }}
      />

      {/* Phone 1 — Card List (back, left) */}
      <motion.div
        initial={{ opacity: 0, x: -20, rotate: -14 }}
        animate={{ opacity: 1, x: -40, rotate: -10, y: 20 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          ...phoneBase,
          border: '1.5px solid rgba(255,255,255,0.15)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
          zIndex: 1,
        }}
      >
        <StatusBar />
        <div style={{ padding: '10px 14px 6px' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>Good morning, Gabriel</div>
          <div style={{ fontSize: 13, color: 'white', fontWeight: 700 }}>My Cards</div>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>3 cards · $2,847 pts this month</div>
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '6px 10px' }} />

        {/* Chase Sapphire */}
        <div style={{ margin: '0 10px 6px', borderRadius: 12, padding: '10px 12px', background: 'linear-gradient(135deg, rgba(26,26,110,0.6), rgba(37,99,235,0.3))', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 28, height: 18, borderRadius: 4, background: 'linear-gradient(135deg, #1a1a6e, #2563EB)', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>Chase Sapphire</div>
            <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.4)' }}>1,240 pts earned</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#60A5FA' }}>3×</div>
        </div>

        {/* Amex Gold */}
        <div style={{ margin: '0 10px 6px', borderRadius: 12, padding: '10px 12px', background: 'linear-gradient(135deg, rgba(184,134,11,0.4), rgba(255,215,0,0.15))', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 28, height: 18, borderRadius: 4, background: 'linear-gradient(135deg, #b8860b, #ffd700)', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>Amex Gold</div>
            <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.4)' }}>840 pts earned</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#ffd700' }}>4×</div>
        </div>

        {/* Citi Double Cash */}
        <div style={{ margin: '0 10px 6px', borderRadius: 12, padding: '10px 12px', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 28, height: 18, borderRadius: 4, background: 'linear-gradient(135deg, #0f4c81, #1a73e8)', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>Citi Double Cash</div>
            <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.4)' }}>767 pts earned</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#93C5FD' }}>2%</div>
        </div>

        {/* Earnings callout */}
        <div style={{ margin: '8px 10px 0', padding: '8px 10px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: 10 }}>
          <span style={{ fontSize: 7.5, color: '#10B981', fontWeight: 600 }}>↑ You earned +$14.20 more this week</span>
        </div>
      </motion.div>

      {/* Phone 2 — Live Recommendation (front, right) */}
      <motion.div
        initial={{ opacity: 0, x: 20, rotate: 4 }}
        animate={{ opacity: 1, x: 40, rotate: 8, y: -10 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          ...phoneBase,
          border: '1.5px solid rgba(37,99,235,0.3)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(37,99,235,0.25), 0 0 40px rgba(37,99,235,0.15)',
          zIndex: 3,
        }}
      >
        <StatusBar />
        <div style={{ padding: '8px 14px 6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
            <span style={{ fontSize: 7.5, color: '#10B981', fontFamily: 'monospace', letterSpacing: 1 }}>LIVE RECOMMENDATION</span>
          </div>
          <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.5)' }}>
            {'📍 '}<strong>Blue Bottle Coffee</strong>{' · Hayes Valley'}
          </div>
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '4px 10px 8px' }} />

        {/* Recommendation card */}
        <div style={{ margin: '0 10px', background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 14, padding: 12 }}>
          <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', marginBottom: 8 }}>POINTSTAX RECOMMENDS</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 36, height: 22, borderRadius: 5, background: 'linear-gradient(135deg, #1a1a6e, #2563EB)', flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, color: 'white', fontWeight: 700 }}>Chase Sapphire</div>
              <div style={{ fontSize: 7.5, color: '#93C5FD' }}>3× on dining · best match</div>
            </div>
            <div style={{ fontSize: 22, color: 'white', fontWeight: 800, marginLeft: 'auto' }}>3×</div>
          </div>
        </div>

        {/* Earnings row */}
        <div style={{ margin: '0 10px', padding: '8px 0', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>YOU'D EARN</div>
            <div style={{ fontSize: 15, color: 'white', fontWeight: 700 }}>
              +21 pts <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>vs 7 pts</span>
            </div>
          </div>
          <div style={{ fontSize: 10, color: '#10B981', fontWeight: 600 }}>+$0.26 extra</div>
        </div>

        {/* Other options */}
        <div style={{ margin: '6px 10px 0' }}>
          <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.35)', marginBottom: 5, letterSpacing: 0.5 }}>OTHER OPTIONS</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>Amex Gold</span>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)' }}>1× · not best here</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>Citi Double Cash</span>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)' }}>2% · decent</span>
          </div>
        </div>
      </motion.div>

      {/* Floating ticker */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{
          position: 'absolute',
          bottom: 20,
          right: -10,
          background: 'rgba(15,23,42,0.9)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 50,
          padding: '5px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          backdropFilter: 'blur(12px)',
          zIndex: 4,
        }}
      >
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
        <span style={{ fontSize: 9, color: 'white', fontWeight: 600, fontFamily: 'monospace' }}>Today +3,240 pts</span>
      </motion.div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/cuztomizer/Documents/GitHub/pointstax/pointstax-web
git add src/components/HeroPhones.tsx
git commit -m "feat(hero): add HeroPhones component with two tilted phone mockups"
```

---

### Task 2: Modify Hero.tsx

**Files:**
- Modify: `src/components/Hero.tsx`

Four copy edits + swap component + delete dead code. Make all edits before committing.

- [ ] **Step 1: Add HeroPhones import after the WaitlistForm import**

Replace:
```tsx
import { WaitlistForm } from './WaitlistForm'
```
With:
```tsx
import { WaitlistForm } from './WaitlistForm'
import { HeroPhones } from './HeroPhones'
```

- [ ] **Step 2: Delete the "Intelligence for your wallet" eyebrow span**

Replace (the entire `<span>` element — note the leading spaces match the file indentation):
```tsx
          <span className="hidden md:inline-flex font-mono text-[0.68rem] uppercase tracking-widest text-white/45">
            Intelligence for your wallet
          </span>
```
With: *(nothing — delete the element entirely)*
```tsx

```

- [ ] **Step 3: Replace the h1 headline**

Replace:
```tsx
            <h1 className="font-display text-display-xl font-semibold text-white text-balance">
              The AI that goes
              <br />
              where <span className="relative inline-block">
                <span
                  className="bg-gradient-to-br from-brand-ice via-white to-brand-sky bg-clip-text text-transparent"
                >
                  you
                </span>
              </span>{' '}
              go.
            </h1>
```
With:
```tsx
            <h1 className="font-display text-display-xl font-semibold text-white text-balance">
              Every point,{' '}
              <span className="bg-gradient-to-br from-brand-ice via-white to-brand-sky bg-clip-text text-transparent">
                perfectly used.
              </span>
            </h1>
```

- [ ] **Step 4: Replace the subheadline paragraph**

Replace:
```tsx
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
              PointStax sits in your pocket and knows — before you do — which
              card earns the most at every store, every restaurant, every swipe.
              Location-aware. Portfolio-wide. Quietly obsessive about your points.
            </p>
```
With:
```tsx
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
              Maximize rewards on every purchase, across every card you own. PointStax knows exactly which card to use — before you swipe.
            </p>
```

- [ ] **Step 5: Update the waitlist form button label**

Replace:
```tsx
                <WaitlistForm source="hero" buttonLabel="Request early access" />
```
With:
```tsx
                <WaitlistForm source="hero" buttonLabel="Get early access" />
```

- [ ] **Step 6: Replace LiveRecommendationCard with HeroPhones in the right column**

Replace:
```tsx
          {/* Right: live recommendation card */}
          <div className="relative">
            <LiveRecommendationCard />
          </div>
```
With:
```tsx
          {/* Right: phone mockups */}
          <div className="relative">
            <HeroPhones />
          </div>
```

- [ ] **Step 7: Delete the entire LiveRecommendationCard inner function**

Replace (the entire function — starts right after the closing `}` of `TrustPill`):
```tsx
function LiveRecommendationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="relative mx-auto max-w-md"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 bg-gradient-to-br from-brand-blue/30 via-brand-electric/20 to-brand-live/20 blur-3xl opacity-80"
      />

      <div className="relative rounded-3xl bg-white/[0.06] backdrop-blur-2xl border border-white/10 shadow-cardLg p-6">
        {/* window chrome */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-widest text-brand-live">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-live animate-pulse-dot" />
            Live
          </div>
        </div>

        {/* Context row — location */}
        <div className="flex items-center gap-3 mb-5">
          <div className="relative h-10 w-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-brand-blue to-brand-electric flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="8" r="2.5" stroke="white" strokeWidth="1.8" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[0.62rem] uppercase tracking-widest text-white/40">
              You're at
            </div>
            <div className="font-medium text-white truncate">Blue Bottle Coffee · Hayes Valley</div>
          </div>
        </div>

        {/* Thinking → Result */}
        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
          <div className="flex items-center gap-2 mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/40">
              <path
                d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-white/40">
              PointStax recommends
            </span>
          </div>

          {/* Card preview */}
          <div className="flex items-center gap-4">
            <div
              className="flex-shrink-0 w-14 h-9 rounded-md relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #0B1B4D 100%)' }}
            >
              <div className="absolute top-1.5 left-1.5 w-2 h-1.5 rounded-sm bg-gradient-to-br from-brand-ice to-brand-sky" />
              <div className="absolute bottom-1 left-1.5 right-1.5 h-px bg-white/30" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-medium text-white leading-tight">Chase Sapphire Preferred</div>
              <div className="font-mono text-[0.7rem] text-white/50 mt-0.5">
                3× on dining · 1× baseline
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-2xl font-semibold text-white tabular">3×</div>
            </div>
          </div>
        </div>

        {/* Result row */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <div className="font-mono text-[0.62rem] uppercase tracking-widest text-white/40">
              You'd earn
            </div>
            <div className="font-display text-3xl font-semibold text-white tabular mt-1">
              +21 <span className="text-white/50 text-lg font-normal">pts</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[0.62rem] uppercase tracking-widest text-brand-live/80">
              vs. Amex (1×)
            </div>
            <div className="font-mono text-sm text-brand-live mt-1">+$0.26 extra</div>
          </div>
        </div>

        {/* Shimmer top edge */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>

      {/* Floating point ticker */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-2 -top-6 hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-brand-ink/70 backdrop-blur-xl px-4 py-2 shadow-cardSoft"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-brand-live">
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/50">Today</span>
        <span className="font-semibold text-white tabular">+3,240 pts</span>
      </motion.div>
    </motion.div>
  )
}
```
With: *(nothing — delete the entire function)*

- [ ] **Step 8: Run the dev server and verify in browser**

```bash
cd /Users/cuztomizer/Documents/GitHub/pointstax/pointstax-web
npm run dev
```

Navigate to `http://localhost:5173` (or whatever port Vite reports). Check:
- Headline reads "Every point, perfectly used."
- Subheadline reads "Maximize rewards on every purchase, across every card you own. PointStax knows exactly which card to use — before you swipe."
- CTA button reads "Get early access" (waitlist mode) or shows download links (launch mode)
- No "Intelligence for your wallet" eyebrow text
- Two tilted phone mockups appear in the right column
- Phone 1 (card list) tilts left, Phone 2 (recommendation) tilts right
- Both phones animate in on page load (not on scroll)
- Floating "Today +3,240 pts" ticker appears

- [ ] **Step 9: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat(hero): replace LiveRecommendationCard with HeroPhones, update copy"
```

---

## Chunk 2: Features + HowItWorks Copy

### Task 3: Update Features.tsx copy

**Files:**
- Modify: `src/components/Features.tsx`

- [ ] **Step 1: Replace the entire `features` array**

Replace:
```tsx
const features = [
  {
    num: '01',
    title: 'Context-aware reasoning',
    body: 'Every purchase is evaluated against your entire wallet, your location, the merchant category, and active bonuses — in under 60ms.',
    stat: '60ms',
    statLabel: 'inference time',
  },
  {
    num: '02',
    title: 'Portfolio intelligence',
    body: 'PointStax understands the full shape of your rewards portfolio: sign-up bonuses, spending caps, expiring points, and transfer partners.',
    stat: '∞',
    statLabel: 'cards supported',
  },
  {
    num: '03',
    title: 'Real-world value',
    body: "Not marketing math. We calculate the actual redemption value per point — so you know when to hoard, burn, and transfer.",
    stat: '1.8¢',
    statLabel: 'avg. value per point',
  },
  {
    num: '04',
    title: 'Quietly proactive',
    body: 'Notices when a card hits its quarterly cap, when a sign-up bonus window closes, when an annual credit resets. Handles the math so you don\'t.',
    stat: '24/7',
    statLabel: 'background monitoring',
  },
]
```
With:
```tsx
const features = [
  {
    num: '01',
    title: 'AI-powered recommendations',
    body: 'Advanced AI analyzes your spending and tells you exactly which card to use, every time.',
    stat: '60ms',
    statLabel: 'INFERENCE TIME',
  },
  {
    num: '02',
    title: 'Location-aware',
    body: 'Powered by where you are. The best card for every store, every restaurant, every gas station.',
    stat: '∞',
    statLabel: 'STORES COVERED',
  },
  {
    num: '03',
    title: 'All your cards in one place',
    body: 'Your full rewards portfolio, balances, perks, and benefits — at a glance.',
    stat: '1.8¢',
    statLabel: 'AVG PT VALUE',
  },
  {
    num: '04',
    title: 'See your real value',
    body: 'Know what your points are actually worth. We calculate real redemption value so you can spend smarter.',
    stat: '24/7',
    statLabel: 'MONITORING',
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Features.tsx
git commit -m "feat(features): update copy to match PRD"
```

---

### Task 4: Update HowItWorks.tsx copy (steps 02 and 03)

**Files:**
- Modify: `src/components/HowItWorks.tsx`

Step 01 ("Add your cards") is already correct — do not touch it.

- [ ] **Step 1: Replace step 02**

Replace:
```tsx
  {
    num: '02',
    title: 'Open before you pay',
    body: "One tap at checkout. PointStax knows the merchant, your location, and your portfolio — and hands you the right answer instantly.",
  },
```
With:
```tsx
  {
    num: '02',
    title: 'Get smart recommendations',
    body: "We tell you exactly which card to use, based on where you are and what you're buying.",
  },
```

- [ ] **Step 2: Replace step 03**

Replace:
```tsx
  {
    num: '03',
    title: 'Watch the stack compound',
    body: 'Real redemption value, tracked automatically. Category by category. Card by card. Points that actually mean something.',
  },
```
With:
```tsx
  {
    num: '03',
    title: 'Earn more, spend smarter',
    body: 'Watch your rewards stack up and see your real redemption value grow — every single purchase.',
  },
```

- [ ] **Step 3: Commit**

```bash
git add src/components/HowItWorks.tsx
git commit -m "feat(how-it-works): update steps 02 and 03 copy to match PRD"
```
