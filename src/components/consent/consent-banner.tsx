"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { gpcEnabled, hasThirdParties, OPEN_CONSENT_EVENT, readConsent, saveConsent } from "@/features/analytics/consent";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/fields";
import { useI18n } from "@/i18n/provider";

export function ConsentBanner() {
  const { t: d, href } = useI18n();
  const t = d.consent;
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [ads, setAds] = useState(true);
  const [gpc, setGpc] = useState(false);

  useEffect(() => {
    setGpc(gpcEnabled());
    const existing = readConsent();
    if (existing) {
      setAnalytics(existing.analytics);
      setAds(existing.ads);
    } else if (hasThirdParties()) setOpen(true);
    const reopen = () => {
      setCustom(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  if (!open) return null;
  const choose = (c: { analytics: boolean; ads: boolean }) => {
    saveConsent(c);
    setOpen(false);
  };

  return (
    <div role="dialog" aria-label={t.title} className="fixed inset-x-3 bottom-3 z-[140] mx-auto max-w-xl rounded-3xl border border-border bg-card p-5 text-fg shadow-2xl sm:bottom-5">
      <h2 className="text-base font-bold">{t.title}</h2>
      <p className="mt-1.5 text-sm text-muted-fg">
        {t.text}{" "}
        <Link href={href("/privacy-policy/")} className="text-primary underline">
          {t.policy}
        </Link>
        .
      </p>
      {gpc && <p className="mt-2 text-xs text-muted-fg">{t.gpc}</p>}
      {custom && (
        <div className="mt-3 space-y-1 rounded-2xl bg-muted p-3">
          <Switch label={t.essential} description={t.essentialDesc} checked onChange={() => {}} disabled />
          <Switch label={t.analytics} description={t.analyticsDesc} checked={analytics} onChange={setAnalytics} />
          <Switch label={t.ads} description={t.adsDesc} checked={ads && !gpc} onChange={setAds} disabled={gpc} />
        </div>
      )}
      <div className="mt-4 flex flex-wrap justify-end gap-2">
        {custom ? (
          <Button variant="primary" onClick={() => choose({ analytics, ads: ads && !gpc })}>
            {t.save}
          </Button>
        ) : (
          <Button variant="ghost" onClick={() => setCustom(true)}>
            {t.customize}
          </Button>
        )}
        <Button onClick={() => choose({ analytics: false, ads: false })}>{t.reject}</Button>
        <Button variant="primary" onClick={() => choose({ analytics: true, ads: !gpc })}>
          {t.accept}
        </Button>
      </div>
    </div>
  );
}
