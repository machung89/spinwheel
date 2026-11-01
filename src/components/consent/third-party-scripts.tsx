"use client";

import { useEffect } from "react";
import { analyticsConfig } from "@/features/analytics/consent";

function inject(src: string, attrs: Record<string, string> = {}) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v);
  document.head.appendChild(s);
}

/**
 * Loads GA4, GTM and AdSense after the page is idle so they never compete
 * with the wheel for the main thread. Consent Mode defaults are set earlier
 * by an inline <head> script, so tags respect the visitor's choice.
 */
export function ThirdPartyScripts() {
  useEffect(() => {
    const { gaId, gtmId, adsenseClient } = analyticsConfig;
    if (!gaId && !gtmId && !adsenseClient) return;
    const load = () => {
      if (gaId) {
        inject(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`);
        window.gtag?.("js", new Date());
        window.gtag?.("config", gaId, { anonymize_ip: true });
      }
      if (gtmId) {
        window.dataLayer?.push({ "gtm.start": Date.now(), event: "gtm.js" });
        inject(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`);
      }
      if (adsenseClient) {
        inject(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(adsenseClient)}`, { crossorigin: "anonymous" });
      }
    };
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(load, { timeout: 3500 });
    else setTimeout(load, 2000);
  }, []);
  return null;
}
