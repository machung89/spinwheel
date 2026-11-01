# Deploying to Cloudflare Workers

WhirlPick deploys with **vinext** (`vinext`, `@vinext/cloudflare`, `cf`), Cloudflare's Vite-based
implementation of the Next.js API. No Docker, no VPS, and no Node.js server at runtime.

## Compatibility notes (checked 2026-11-01, vinext 1.4, Next.js 16.4)

- `npx vinext check` reports 97% compatibility. The only partial item is `images`, and the app doesn't use `next/image`.
- Init options used: `--cdn-cache=static-assets --data-cache=none --image-optimization=none`.
  All 82 routes are prerendered into Workers Static Assets and served from the `ASSETS` binding
  (`x-vinext-cache: HIT`). No KV, R2 or Images bindings are needed, which keeps cost and moving parts down.
- `next/font` is only partly supported by vinext, so the site uses system font stacks (also faster).
- The `compatibilityDate` must not be newer than the workerd release in `node_modules`. If a later
  toolchain update supports a newer date, bump it in `cloudflare.config.ts`.
- The codebase stays standard Next.js: `npm run build` (`next build`) also works.

**Fallback:** if a future vinext release breaks something, the official OpenNext adapter works with the same code:
`npm i -D @opennextjs/cloudflare wrangler`, add `open-next.config.ts` and a `wrangler.jsonc` per
https://opennext.js.org/cloudflare, then run `npx opennextjs-cloudflare build && npx opennextjs-cloudflare deploy`.

## Environments

| Environment | Command | Worker | Notes |
| --- | --- | --- | --- |
| Local (Next.js) | `npm run dev` | – | Fastest iteration |
| Local (Workers runtime) | `npm run build:vinext && npm run start:vinext` | workerd | Test the production build before deploying |
| Preview | `npm run deploy:preview` | `whirlpick-preview` | Vite mode `preview`: loads `.env.preview`, `robots.txt` disallows everything, workers.dev URL |
| Production | `npm run deploy` | `whirlpick` | Vite mode `production`, custom domain |

`cloudflare.config.ts` is a function of the mode, so each environment gets a complete config.

## First deploy

1. **Authenticate:** `npx cf auth login` (local), or set `CLOUDFLARE_API_TOKEN` (CI). Create the token with the
   **Edit Cloudflare Workers** template.
2. **Account:** set `CLOUDFLARE_ACCOUNT_ID` (find it in the dashboard URL `dash.cloudflare.com/<account-id>`).
3. **Build-time variables:** create `.env.production.local` from `.env.example` and set at least
   `NEXT_PUBLIC_SITE_URL=https://your-domain.com`.
4. **Test locally in workerd:**
   ```bash
   npm test && npm run typecheck
   npm run build:vinext
   npm run start:vinext            # http://localhost:4173
   npm run check:links -- http://localhost:4173
   ```
5. **Deploy:** `npm run deploy`. Without a custom domain, it's served at `https://whirlpick.<subdomain>.workers.dev`.

## Custom domain and HTTPS

1. Add the domain to Cloudflare (Websites → Add a site) and point your registrar's nameservers to Cloudflare.
2. Deploy with the domain set:
   ```bash
   CF_CUSTOM_DOMAIN=spinwheelge.com npm run deploy
   ```
   `cloudflare.config.ts` adds `domains: [CF_CUSTOM_DOMAIN]` to production. Cloudflare then creates the DNS record
   and issues the TLS certificate automatically, so HTTPS works with no extra steps. Once a domain is set,
   the workers.dev URL is turned off for production.
3. In the zone, enable **SSL/TLS → Edge Certificates → Always Use HTTPS** and **HSTS** after confirming HTTPS works.
4. **www:** add a proxied DNS record for `www` (e.g. `AAAA www 100::`) and a **Redirect Rule** from
   `https://www.spinwheelge.com/*` to `https://spinwheelge.com/${1}` (301), so there's one canonical host.
5. Make sure `NEXT_PUBLIC_SITE_URL` matches the domain, then rebuild.

## Secrets

The YouTube Comment Picker can load comments from a video URL when `YOUTUBE_API_KEY` is set (create a key with the
YouTube Data API v3 enabled in Google Cloud Console). Set it on the Worker:

```bash
npx cf workers secrets update --help   # shows the exact arguments for your cf version
```

Locally, put it in `.dev.vars` (git-ignored): `YOUTUBE_API_KEY=...`. Without it, the tool runs in paste mode.

## GitHub integration

Either approach works. Pick one:

**A. GitHub Actions** (included: `.github/workflows/deploy.yml`)
- Add repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, plus repository variables
  `NEXT_PUBLIC_SITE_URL`, `CF_CUSTOM_DOMAIN` and any `NEXT_PUBLIC_*` analytics/ads IDs.
- Pushes to `main` run tests, typecheck and the Workers build, then deploy production. Pull requests deploy the
  preview Worker.

**B. Cloudflare Workers Builds** (dashboard): Workers & Pages → your Worker → Settings → Builds → Connect
GitHub repository. Build command: `npm ci && npm test && npm run build:vinext`. Deploy command:
`npx vinext-cloudflare deploy --skip-build`. Add the `NEXT_PUBLIC_*` values as **build variables**.

## Caching

- `/_next/static/*` (hashed JS/CSS) bypasses the Worker and is served as immutable static assets.
- HTML is prerendered at build time and served from Static Assets, so a new deployment replaces it atomically.
- Optional: `npx vinext-cloudflare deploy --warm-cache` pre-warms the CDN after deploy.

## Troubleshooting

- *"This Worker requires compatibility date …"*: lower `compatibilityDate` to the date in the error message.
- *Ads, analytics or canonical URLs show old values*: `NEXT_PUBLIC_*` values are inlined at build time, so rebuild.
- *Stale route types in `tsc`*: run `npm run typecheck` (it runs `next typegen` first).
