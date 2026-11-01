# WhirlPick — Spin the Wheel & Random Picker Tools

A free, SEO-first random picker platform: a fully featured spinning wheel, 12 wheel landing pages,
8 standalone random tools, 48 templates in 10 categories (37 with their own page, 11 linking to landing pages), and a blog —
fully translated into **English, Tiếng Việt, Español, Français and Português (BR)**. It's built with Next.js 16
(App Router) and deployed to **Cloudflare Workers via vinext**.

- No accounts, no database. Wheels live in the visitor's browser (LocalStorage).
- Every outcome comes from `crypto.getRandomValues` with unbiased rejection sampling (see [docs/RANDOMNESS.md](docs/RANDOMNESS.md)).
- Every indexable page is prerendered HTML with unique metadata, canonical, Open Graph and JSON-LD.

## Quick start

```bash
npm install
npm run dev            # Next.js dev server on http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Next.js dev server |
| `npm run build` / `npm start` | Standard Next.js production build / server (used for local checks) |
| `npm test` | Unit tests (Vitest): RNG fairness, pointer alignment, share links, CSV/JSON, tools, translation completeness |
| `npm run typecheck` | Generate route types and run `tsc` |
| `npm run dev:vinext` | vinext dev server (Vite + workerd) on http://localhost:3001 |
| `npm run build:vinext` | **Cloudflare Workers production build** (prerenders all ~406 routes in 5 languages) |
| `npm run start:vinext` | Serve the Workers build locally **in the real Workers runtime** (workerd) on :4173 |
| `npm run check:links -- http://localhost:4173` | Crawl the sitemap and verify every link, H1, title, description, canonical and 404 |
| `npm run deploy` | Build + deploy production Worker |
| `npm run deploy:preview` | Build + deploy the `whirlpick-preview` Worker (noindex) |
| `npm run generate:images` | Regenerate PNG icons and `public/og.png` |

Deployment, custom domains, HTTPS, secrets and GitHub integration: **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)**.
AdSense, consent, analytics and Search Console: **[docs/MONETIZATION.md](docs/MONETIZATION.md)**.

## Configuration

Copy `.env.example` to `.env.production.local` (or set the variables in CI). `NEXT_PUBLIC_*` values are
inlined at **build time**, so rebuild after changing them.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, e.g. `https://whirlpick.com` (no trailing slash) |
| `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_GTM_ID` | Google Analytics 4 / Tag Manager (optional) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Search Console HTML-tag token (optional) |
| `NEXT_PUBLIC_ADSENSE_CLIENT` + `NEXT_PUBLIC_AD_SLOT_*` | AdSense publisher and ad-unit IDs (optional; ads render nothing until set) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Address shown on /contact |
| `YOUTUBE_API_KEY` | **Server secret** for the YouTube Comment Picker's link loading (paste mode works without it) |

## Project structure

```
src/
  app/                      Routes (App Router) — two root layouts
    (en)/                   English, unprefixed: /, /coin-flip/, /templates/…  (one folder per landing page)
    (intl)/[lang]/          vi / es / fr / pt: /vi/, /vi/coin-flip/, …
    api/youtube-comments/   Worker route proxying the YouTube Data API
    global-not-found.tsx    404 document for URLs outside both layouts
    sitemap.ts robots.ts manifest.ts globals.css
  routes/                   Shared page modules both route groups render (home, landing, templates, blog…)
  i18n/                     Locale config, UI dictionaries (en/vi/es/fr/pt), client provider, error codes
  content/                  Localized page copy per locale (vi/, es/, fr/, pt/), merged onto the English base
  components/
    wheel/                  WheelApp (orchestrator), WheelStage (canvas + animation), renderer, dialogs
    editor/ settings/       Entry editor and Design/Spin/Sound/History panels
    tools/                  Team, number, letter, dice, coin, yes/no, truth-or-dare, YouTube picker
    layout/ seo/ ads/ consent/ templates/ ui/
  features/                 UI-independent logic
    random/rng.ts           Crypto RNG, unbiased ints, weighted pick, shuffle
    wheel-engine/           Types-driven engine: segments, spin planning, easing, reducer, validation
    sharing/                Versioned, compressed share-link codec
    import-export/          CSV / Excel / JSON / bulk paste
    storage/ sound/ effects/ analytics/ youtube/
  data/                     English base: landing copy, templates, categories, blog posts, truth-or-dare prompts
tests/                      Vitest unit tests
scripts/                    Link checker, image generator
```

The wheel engine (`src/features/wheel-engine`) has no React or DOM dependencies, so it can be reused
for server features later (cloud-saved wheels, AI-generated templates, etc.).

## Adding content

- **Landing page:** add an entry to `src/data/landing/wheels.ts` or `tools.ts`, its translations to
  `src/content/<locale>/landing-*.ts`, and a two-line English route folder `src/app/(en)/<slug>/page.tsx`
  (copy any sibling; a test fails if it's missing). It's then prerendered in every language and added to the sitemap.
- **Template:** add to `src/data/templates/templates.ts`. Use `href` to point to an existing landing page
  instead of creating a duplicate page.
- **Blog post:** add to `src/data/blog/posts-*.ts`. Body blocks support `[links](/path/)` and `**bold**`.
  `paginate()` in `src/data/blog/index.ts` is ready for `/blog/page/N/` once there are more than 12 posts.
- **Translations:** every content type has a localized counterpart in `src/content/<locale>/`, and UI strings
  live in `src/i18n/dictionaries/<locale>.ts` (typed against `en.ts`, so a missing key is a type error).
  `tests/i18n.test.ts` checks that every page, template, post and preset exists in each language and that
  `{placeholders}` and links survive translation.

## Languages

English is served without a prefix; other languages live under `/vi/`, `/es/`, `/fr/`, `/pt/` with the same
slugs. Every page has a self-canonical plus `hreflang` alternates (and `x-default` → English), the sitemap
lists all languages, and `/en/...` redirects to the unprefixed URL. The header has a language selector
with flags that keeps you on the same page.

English pages are real static routes in `src/app/(en)/` rather than a rewrite to `/en/`, because only real
static paths are served from the Workers static-assets cache (rewritten URLs render on every request).

**Adding a language** (e.g. `de`):
1. Add it to `locales` and `localeMeta` (name, hreflang, flag) in `src/i18n/config.ts`; add a flag in `src/components/layout/flag.tsx`.
2. Create `src/i18n/dictionaries/de.ts` (copy `en.ts`) and register it in `src/i18n/server.ts`.
3. Create `src/content/de/` (copy `src/content/vi/`, translate) and register it in `src/content/index.ts`.
4. Run `npm test` and `npm run check:links`. The `(intl)/[lang]` routes prerender every non-English locale automatically.

## Future expansion

Accounts, cloud-saved wheels, a community gallery and moderation can use Cloudflare D1 (data) and R2 (images).
Add bindings in `cloudflare.config.ts` and read them with `import { env } from "cloudflare:workers"`.
The share codec already reserves a version number for a future short-ID format backed by storage.
