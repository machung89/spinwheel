"use client";

import { useEffect, useRef, useState } from "react";
import { adsAllowed, analyticsConfig, CONSENT_CHANGED_EVENT } from "@/features/analytics/consent";
import { cn } from "@/lib/cn";
import { useI18n } from "@/i18n/provider";

/** Named placements → AdSense ad unit IDs (configure in .env). */
const SLOTS = {
  belowWheel: process.env.NEXT_PUBLIC_AD_SLOT_BELOW_WHEEL || "",
  inContent: process.env.NEXT_PUBLIC_AD_SLOT_IN_CONTENT || "",
  sidebar: process.env.NEXT_PUBLIC_AD_SLOT_SIDEBAR || "",
  articleEnd: process.env.NEXT_PUBLIC_AD_SLOT_ARTICLE_END || "",
} as const;

export type AdPlacement = keyof typeof SLOTS;

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/** Ad network banner units, largest first. Each size has its own key. */
const BANNERS = [
  { minViewport: 760, width: 728, height: 90, key: "32e1ef900eac3f963f5ce3dbe44cea17" },
  { minViewport: 500, width: 468, height: 60, key: "e5f656a2a839f9550ef1aa4c8264ec2b" },
  { minViewport: 0, width: 320, height: 50, key: "f8c13939e9583caa70a82ab47326bb96" },
];

const bannerFor = (viewport: number) => BANNERS.find((b) => viewport >= b.minViewport) ?? BANNERS[BANNERS.length - 1];

function bannerDocument({ width, height, key }: (typeof BANNERS)[number]) {
  const options = JSON.stringify({ key, format: "iframe", height, width, params: {} });
  return `<!doctype html><html><head><style>html,body{margin:0;padding:0;overflow:hidden;background:transparent}</style></head><body><script>atOptions=${options};</script><script src="https://bauval.org/22/${key}"></script></body></html>`;
}

/**
 * Network banner, loaded only after the visitor accepts ad cookies. The ad script is third-party and
 * obfuscated, and it reads storage and can navigate the page, so it runs in a sandboxed frame: with no
 * allow-same-origin it can't see the site's localStorage (visitors' lists), and with no
 * allow-top-navigation it can't redirect or hijack the page. Clicks still open the ad in a new tab.
 * html[data-ads] (set before first paint) reserves the height in CSS, so the page doesn't jump.
 */
function BannerAd({ className }: { className?: string }) {
  const { t } = useI18n();
  const [banner, setBanner] = useState<(typeof BANNERS)[number] | null>(null);

  useEffect(() => {
    const update = () => setBanner(adsAllowed() ? bannerFor(window.innerWidth) : null);
    update();
    window.addEventListener(CONSENT_CHANGED_EVENT, update);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener(CONSENT_CHANGED_EVENT, update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <aside aria-label={t.common.advertisement} className={cn("ad-banner mx-auto my-8 w-full max-w-5xl", className)}>
      <p className="mb-1 text-center text-[10px] tracking-widest text-muted-fg uppercase">{t.common.advertisement}</p>
      <div className="ad-banner-frame flex justify-center overflow-hidden">
        {banner && (
          <iframe
            key={banner.key}
            title={t.common.advertisement}
            srcDoc={bannerDocument(banner)}
            sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
            width={banner.width}
            height={banner.height}
            // Matches the frame's document; a mismatch with the dark theme paints an opaque white box.
            className="shrink-0 border-0 [color-scheme:light]"
          />
        )}
      </div>
    </aside>
  );
}

/** AdSense when it's configured, otherwise the network banner. */
export function AdSlot({ placement, className }: { placement: AdPlacement; className?: string }) {
  if (analyticsConfig.adsenseClient) return <AdSenseUnit placement={placement} className={className} />;
  return analyticsConfig.bannerAds ? <BannerAd className={className} /> : null;
}

/**
 * Responsive AdSense unit. Renders nothing unless both the publisher ID and
 * the slot ID are configured, so there are never empty boxes. Placements are
 * kept outside the wheel and away from interactive controls, with a visible
 * "Advertisement" label and reserved height to avoid layout shift.
 */
function AdSenseUnit({ placement, className }: { placement: AdPlacement; className?: string }) {
  const { t } = useI18n();
  const ref = useRef<HTMLModElement>(null);
  const client = analyticsConfig.adsenseClient;
  const slot = SLOTS[placement];

  useEffect(() => {
    if (!client || !slot || !ref.current || ref.current.dataset.adsbygoogleStatus) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* ad blocked or not ready */
    }
  }, [client, slot]);

  if (!client || !slot) return null;
  return (
    <aside aria-label={t.common.advertisement} className={cn("mx-auto my-10 w-full max-w-5xl", className)}>
      <p className="mb-1 text-center text-[10px] tracking-widest text-muted-fg uppercase">{t.common.advertisement}</p>
      <div className={cn("overflow-hidden rounded-2xl", placement === "sidebar" ? "min-h-[600px]" : "min-h-[280px]")}>
        <ins
          ref={ref}
          className="adsbygoogle block"
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={placement === "sidebar" ? "vertical" : "auto"}
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
