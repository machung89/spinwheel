"use client";

import { useEffect, useRef } from "react";
import { analyticsConfig } from "@/features/analytics/consent";
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

/**
 * Responsive AdSense unit. Renders nothing unless both the publisher ID and
 * the slot ID are configured, so there are never empty boxes. Placements are
 * kept outside the wheel and away from interactive controls, with a visible
 * "Advertisement" label and reserved height to avoid layout shift.
 */
export function AdSlot({ placement, className }: { placement: AdPlacement; className?: string }) {
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
