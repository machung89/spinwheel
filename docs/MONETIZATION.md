# AdSense, consent, analytics and Search Console

## Google AdSense

1. Apply at adsense.google.com with your production domain. Approval isn't guaranteed. The site is built for
   review: 20 substantive landing pages, 37 unique template pages, 10 category pages, 6 articles, About, Contact,
   Privacy Policy and Terms, with no thin or duplicate pages.
2. Set `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-…` and rebuild. The AdSense script loads after the page is idle.
3. **Auto ads** are toggled in the AdSense dashboard (Ads → By site). To keep ads away from the wheel, use
   *Page exclusions*/*Excluded areas*, or rely on manual units only.
4. **Manual ad units:** create *Display* units and set the slot IDs:

| Placement | Env var | Where it renders |
| --- | --- | --- |
| `belowWheel` | `NEXT_PUBLIC_AD_SLOT_BELOW_WHEEL` | Below the wheel app, before the content, on every tool page |
| `inContent` | `NEXT_PUBLIC_AD_SLOT_IN_CONTENT` | Between content sections, and on template/category pages |
| `articleEnd` | `NEXT_PUBLIC_AD_SLOT_ARTICLE_END` | End of blog articles |
| `sidebar` | `NEXT_PUBLIC_AD_SLOT_SIDEBAR` | Reserved; add `<AdSlot placement="sidebar" />` where wanted |

`AdSlot` (`src/components/ads/ad-slot.tsx`) renders **nothing** until both IDs are set, so there are never empty
boxes. When it does render, it reserves height (no layout shift) and shows an "Advertisement" label. Ads are
never placed inside the wheel area, next to the Spin button or editor controls, or in fullscreen mode.

5. Add `public/ads.txt` with the line AdSense gives you (`google.com, pub-…, DIRECT, f08c47fec0942fa0`), then rebuild.

## Consent management

- An inline `<head>` script sets **Google Consent Mode v2** defaults to *denied* for `ad_storage`,
  `ad_user_data`, `ad_personalization` and `analytics_storage` before any Google tag loads, then applies a saved choice.
- The banner (`src/components/consent/consent-banner.tsx`) only appears when a Google product is configured.
  It offers Accept all / Reject non-essential / Customize. The footer link "Privacy choices / Do not sell or share"
  reopens it at any time.
- **Global Privacy Control** is honored as an opt-out of personalized ads (CA, CO, CT and other US state laws).
- **EEA, UK and Switzerland:** Google requires a **Google-certified CMP that integrates with IAB TCF** to serve
  personalized ads there. The simplest option is AdSense → *Privacy & messaging* → *European regulations message*.
  With it enabled, Google's CMP handles those regions and the built-in banner still covers everyone else.
  Also consider enabling the *US state regulations* message for a standardized opt-out.

## Google Analytics 4 / Tag Manager

Set `NEXT_PUBLIC_GA_ID` (and/or `NEXT_PUBLIC_GTM_ID`). Custom events sent via `track()` in
`src/features/analytics/analytics.ts`:

`wheel_spin`, `wheel_created`, `winner_selected`, `winner_removed`, `template_opened`, `wheel_shared`,
`fullscreen_opened`, `csv_imported`, `tool_used`

Parameters are counts and modes only. Entry text, names and comments are never sent.

## Google Search Console

1. Add a **Domain** property (DNS verification through Cloudflare is one click), or use the HTML tag method with
   `NEXT_PUBLIC_GSC_VERIFICATION`.
2. Submit `https://your-domain.com/sitemap.xml`.
3. Structured data used: Organization, WebSite, WebApplication (price 0, no ratings), BreadcrumbList, Article.
   FAQPage markup is intentionally omitted: Google only shows FAQ rich results for authoritative government and
   health sites, so the FAQs appear as visible HTML instead.
