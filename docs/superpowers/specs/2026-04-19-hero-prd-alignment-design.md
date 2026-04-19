# Hero PRD Alignment Design Spec

**Date:** 2026-04-19
**Status:** Approved
**Repo:** pointstax-web

## Overview

Align the marketing site hero and supporting sections with the original PRD design. Primary change: replace the `LiveRecommendationCard` widget in the hero with two tilted phone mockups. Secondary: restore "Every point, perfectly used." headline and update Features + HowItWorks copy.

---

## 1. Hero Section (`src/components/Hero.tsx`)

### Copy changes

| Element | Old | New |
|---|---|---|
| Headline | "The AI that goes where you go." | "Every point, perfectly used." |
| Subheadline | "PointStax sits in your pocket..." | "Maximize rewards on every purchase, across every card you own. PointStax knows exactly which card to use — before you swipe." |
| CTA button label | "Request early access" | "Get early access" (update `buttonLabel` prop passed to `<WaitlistForm>` only — keep the `LAUNCH_MODE` conditional intact, do not change launch/download branch) |
| Right-side eyebrow | "INTELLIGENCE FOR YOUR WALLET" | Remove the `<span className="hidden md:inline-flex font-mono ...">Intelligence for your wallet</span>` at line 50 of Hero.tsx entirely |

### Visual change

Remove `<LiveRecommendationCard>` (inline component inside `Hero.tsx`) entirely. Replace with `<HeroPhones />` in the right column of the hero grid.

- `LiveRecommendationCard` is defined as an inner function inside `Hero.tsx` — delete it completely.
- The two-column grid layout (`lg:grid-cols-[1.08fr_1fr]`) stays unchanged.

### Trust strip

Keep existing `<TrustPill>` components with their SVG star icons. No emoji changes. Labels update to:
- "Bank-level encryption"
- "Read-only access"
- "No credit pull"

(These already match — no code change needed here.)

---

## 2. HeroPhones Component (new file: `src/components/HeroPhones.tsx`)

### Container

```
position: relative
height: 400px   (matches right column of hero grid)
display: flex; align-items: center; justify-content: center
```

### Phone shell (both phones)

```
width: 160px
height: 300px
border-radius: 28px
border: 1.5px solid (see per-phone)
overflow: hidden
background: linear-gradient(160deg, #1a2332, #0d1520)
```

Status bar inside each phone:
```
height: 28px
display: flex; align-items: center; justify-content: space-between; padding: 0 14px
- Left: "9:41" — font-size: 9px, font-weight: 600, color: rgba(255,255,255,0.6)
- Center: pill notch (width: 50px, height: 12px, background: #0d1520, border-radius: 0 0 8px 8px)
- Right: "●●●" — font-size: 8px, color: rgba(255,255,255,0.4)
```

### Phone 1 — Card List (back, left)

```
transform: rotate(-10deg) translateX(-40px) translateY(20px)
z-index: 1
border: 1.5px solid rgba(255,255,255,0.15)
box-shadow: 0 24px 60px rgba(0,0,0,0.6)
```

**Content (below status bar):**

Header block (`padding: 10px 14px 6px`):
- Greeting: "Good morning, Gabriel" — 8px, rgba(255,255,255,0.35)
- Title: "My Cards" — 13px, white, font-weight 700
- Subtitle: "3 cards · $2,847 pts this month" — 8px, rgba(255,255,255,0.4)
- Divider: 1px rgba(255,255,255,0.06), margin: 6px 10px

Three card rows (`margin: 0 10px 6px`, `border-radius: 12px`, `padding: 10px 12px`):

| Card | Row bg | Chip gradient | Multiplier color |
|---|---|---|---|
| Chase Sapphire | linear-gradient(135deg, rgba(26,26,110,0.6), rgba(37,99,235,0.3)) | #1a1a6e→#2563EB | #60A5FA |
| Amex Gold | linear-gradient(135deg, rgba(184,134,11,0.4), rgba(255,215,0,0.15)) | #b8860b→#ffd700 | #ffd700 |
| Citi Double Cash | rgba(255,255,255,0.04) | #0f4c81→#1a73e8 | #93C5FD |

Each row:
- Chip: `width: 28px; height: 18px; border-radius: 4px`
- Name: 9px white font-weight 600
- Pts earned: 7.5px rgba(255,255,255,0.4) (e.g. "1,240 pts earned")
- Multiplier: 11px, font-weight 800 (Chase: "3×", Amex: "4×", Citi: "2%" — cash back, not a typo)

Green earnings callout (`margin: 8px 10px 0`, `padding: 8px 10px`, `background: rgba(16,185,129,0.08)`, `border: 1px solid rgba(16,185,129,0.15)`, `border-radius: 10px`):
- "↑ You earned +$14.20 more this week" — 7.5px, color #10B981, font-weight 600

### Phone 2 — Live Recommendation (front, right)

```
transform: rotate(8deg) translateX(40px) translateY(-10px)
z-index: 3
border: 1.5px solid rgba(37,99,235,0.3)
box-shadow: 0 32px 80px rgba(0,0,0,0.7),
            0 0 0 1px rgba(37,99,235,0.25),
            0 0 40px rgba(37,99,235,0.15)
```

**Radial glow sibling** (absolute, z-index 0, NOT inside phone):
```
position: absolute
width: 200px; height: 200px
background: radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)
filter: blur(40px)
right: 20px; top: 50%; transform: translateY(-50%)
```

**Content (below status bar):**

Header block (`padding: 8px 14px 6px`):
- Live row: 5px green dot + "LIVE RECOMMENDATION" in 7.5px #10B981 monospace letter-spacing 1px
- Location: "📍 **Blue Bottle Coffee** · Hayes Valley" — 8.5px, rgba(255,255,255,0.5), bold name
- Divider: 1px rgba(255,255,255,0.06), margin: 4px 10px 8px

Recommendation card (`margin: 0 10px`, `background: rgba(37,99,235,0.15)`, `border: 1px solid rgba(37,99,235,0.3)`, `border-radius: 14px`, `padding: 12px`):
- Label: "POINTSTAX RECOMMENDS" — 7px, rgba(255,255,255,0.4), monospace, margin-bottom 8px
- Row: chip (36×22px, gradient #1a1a6e→#2563EB, border-radius 5px) + name "Chase Sapphire" (10px white bold) + sub "3× on dining · best match" (7.5px #93C5FD) + "3×" (22px white font-weight 800, margin-left auto)

Earnings row (`margin: 0 10px`, `padding: 8px 0`, `border-top: 1px solid rgba(255,255,255,0.06)`):
- Left: label "YOU'D EARN" (8px rgba muted), value "+21 pts" (15px white bold) + " vs 7 pts" (9px muted)
- Right: "+$0.26 extra" — 10px #10B981 font-weight 600

Other options list (`margin: 6px 10px 0`):
- Section label: "OTHER OPTIONS" — 7.5px rgba(255,255,255,0.35), margin-bottom 5px, letter-spacing 0.5px
- Two rows, each: `display:flex; justify-content:space-between; padding: 5px 0; border-top: 1px solid rgba(255,255,255,0.05)`
  - Row 1: "Amex Gold" (8px rgba 40%) | "1× · not best here" (8px rgba 35%)
  - Row 2: "Citi Double Cash" (8px rgba 40%) | "2% · decent" (8px rgba 35%)

### Floating ticker (absolute, z-index 4)

```
position: absolute
bottom: 20px; right: -10px
background: rgba(15,23,42,0.9)
border: 1px solid rgba(255,255,255,0.1)
border-radius: 50px
padding: 5px 12px
display: flex; align-items: center; gap: 6px
backdrop-filter: blur(12px)
```
- 5px green dot + "Today +3,240 pts" — 9px white font-weight 600 monospace

### Animation

Use Framer Motion `animate` (not `whileInView`) — hero phones are above the fold and must be visible immediately.

Phone 1: `initial={{ opacity: 0, x: -20, rotate: -14 }}` → `animate={{ opacity: 1, x: -40, rotate: -10 }}`, `transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}`

Phone 2: `initial={{ opacity: 0, x: 20, rotate: 4 }}` → `animate={{ opacity: 1, x: 40, rotate: 8 }}`, `transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}`

Ticker: `initial={{ opacity: 0, y: 8 }}` → `animate={{ opacity: 1, y: 0 }}`, `transition={{ duration: 0.5, delay: 0.9 }}`

---

## 3. Features Section (`src/components/Features.tsx`) — Copy only

Update the four feature card objects. Structure (title, stat value, stat label, body) is unchanged.

| # | Title | Stat | Stat label | Body |
|---|---|---|---|---|
| 01 | AI-powered recommendations | 60ms | INFERENCE TIME | Advanced AI analyzes your spending and tells you exactly which card to use, every time. |
| 02 | Location-aware | ∞ | STORES COVERED | Powered by where you are. The best card for every store, every restaurant, every gas station. |
| 03 | All your cards in one place | 1.8¢ | AVG PT VALUE | Your full rewards portfolio, balances, perks, and benefits — at a glance. |
| 04 | See your real value | 24/7 | MONITORING | Know what your points are actually worth. We calculate real redemption value so you can spend smarter. |

Note: Stat label for #02 changes from "cards supported" → "STORES COVERED". This is intentional.

---

## 4. HowItWorks Section (`src/components/HowItWorks.tsx`) — Copy only (steps 02 and 03)

Step 01 is already correct. Only update steps 02 and 03:

| Step | Title | Body |
|---|---|---|
| 02 | Get smart recommendations | We tell you exactly which card to use, based on where you are and what you're buying. |
| 03 | Earn more, spend smarter | Watch your rewards stack up and see your real redemption value grow — every single purchase. |

---

## Files

| Action | File |
|---|---|
| Modify | `src/components/Hero.tsx` — update headline, subheadline, CTA label; remove `LiveRecommendationCard` function; replace with `<HeroPhones />` |
| Create | `src/components/HeroPhones.tsx` — new component per spec above |
| Modify | `src/components/Features.tsx` — copy only |
| Modify | `src/components/HowItWorks.tsx` — copy only (steps 02, 03) |
