# PointStax Web (Landing)

The `pointstax.ai` marketing / waitlist landing site — a static Vite + React SPA
served by Caddy on platform-infra.

## Platform Context

For full platform documentation, see the [pointstax-docs](https://github.com/pointstax/pointstax-docs)
repo. Cross-repo deploy conventions live in the canonical runbook
`cidadel-core/docs/runbooks/platform-github-actions-deploys.md`.

## Stack

- Vite 8 + React 19 + TypeScript, Tailwind CSS 3.4, framer-motion
- Built to a static bundle (`dist/`) — no server runtime; Caddy `file_server` serves it
- Analytics: Plausible (no cookies, no consent banner)

## Project Structure

```
src/
├── components/   — Nav, Hero, HeroPhones, AlwaysWithYou, Features, HowItWorks,
│                    AppScreenshots, FAQ, FinalCTA, WaitlistForm, Footer, Logo
├── pages/        — Home, Terms, Privacy
├── lib/          — api client (waitlist submit)
└── config.ts     — LAUNCH_MODE / LAUNCH_DATE / store URLs
public/           — favicon.svg, logo.svg, icon-*/apple-touch/og-image (+ .well-known AASA)
scripts/          — render-og.mjs, render-icons.mjs (regenerate raster assets from SVG)
```

## Build & Run

```bash
npm ci
npm run dev          # local dev server
npm run build        # tsc -b && vite build  -> dist/
npm run preview      # serve the production build locally
```

## Branding assets

The header logo mark and all icons derive from `public/logo.svg` (the gold
card-stack mark). After changing `logo.svg` / `og-image.svg`, regenerate the
raster set (favicon PNG, PWA icons, apple-touch, OG image) — they are pre-rendered
and committed, so CI needs no extra prebuild step:

```bash
node scripts/render-icons.mjs   # favicon.png, apple-touch-icon.png, icon-192/512.png, og-image.png
```

Palette: dark + gold (`brand-gold*` tokens in `tailwind.config.ts`); `brand-live`
(mint) is reserved for live/success/$-value cues. See memory `project_branding`.

## Deployment — $0 self-hosted GitHub Actions

**`pointstax.ai` is a static site served by the dockerized Caddy on
`platform-infra`** (the Caddy/gateway host), from the web root
`/opt/cidadel/pointstax-landing`. Deploy is a self-hosted GitHub Actions workflow
— same `$0`, no-paid-runner model as the API, but **cross-host** because the
runner and the web root live on different machines.

```bash
gh workflow run deploy-pointstax-web.yml -f environment=none   # build-only validation
gh workflow run deploy-pointstax-web.yml -f environment=prod   # build + publish to pointstax.ai
gh run watch
```

**How it works** (`.github/workflows/deploy-pointstax-web.yml`,
`runs-on: [self-hosted, platform-apps]`):

1. Builds `dist/` on the `pointstax` org runner (which lives on **platform-apps**,
   WireGuard `10.0.1.1` / public `178.156.253.208`).
2. Publishes the files **across to platform-infra** (WireGuard `10.0.1.10` / public
   `178.156.141.55`) over the private WG LAN as `root@10.0.1.10`, using the runner
   host's key `/root/.ssh/id_ed25519`. This CI host-to-host SSH works even though
   workstation→host SSH is blocked on-path. Same transport as
   `strategiz-core/deploy-frontend.yml`.
3. `rsync -a --delete dist/ → /opt/cidadel/pointstax-landing/`. Caddy's
   `file_server` reads the filesystem at request time, so the swap is live
   **immediately — no Caddy reload**.
4. Verifies the freshly hashed entry bundle landed on the served dir AND that
   `https://pointstax.ai` actually serves it (5× curl retry) — a dead or stale
   deploy fails the run.

**Why cross-host (the host-mismatch trap):** the web root is on **platform-infra**,
not platform-apps. Writing the build on platform-apps would serve nothing publicly
("3 green deploys, site still stale"). The `environment=none` mode builds without
deploying, so a broken build never reaches the live site.

**One-time prerequisite:** the pointstax platform-apps runner must be able to SSH
to `root@10.0.1.10`. The workflow's preflight step fails loudly (before any write)
if it can't. To authorize:

```bash
# on platform-apps:               cat /root/.ssh/id_ed25519.pub
# on platform-infra (10.0.1.10):  append that line to /root/.ssh/authorized_keys
```

(All org runners are root on the same platform-apps box and share that key; the
strategiz runner is already authorized, so pointstax's likely is too.)

**Rollback** — the deploy snapshots the live dir to
`/opt/cidadel/pointstax-landing.previous` on platform-infra before each swap:

```bash
ssh -i /root/.ssh/id_ed25519 -o IdentitiesOnly=yes root@10.0.1.10 \
  'set -e; rm -rf /opt/cidadel/pointstax-landing && \
   mv /opt/cidadel/pointstax-landing.previous /opt/cidadel/pointstax-landing'
```

**Caddyfile changes** (first-time adding the `pointstax.ai` block, or changing the
root path) are separate and DO need a reload — edit `/opt/cidadel/Caddyfile` on
platform-infra, then `docker exec caddy caddy validate …` and
`docker exec caddy caddy reload …`. A routine content deploy never touches the
Caddyfile. See memory `project_web_serving_topology`.

## Conventions

- Functional React components; Tailwind for styling (tokens in `tailwind.config.ts`)
- `public/.well-known/apple-app-site-association` must stay valid — passkeys depend
  on it (see memory `project_web_serving_topology`)
