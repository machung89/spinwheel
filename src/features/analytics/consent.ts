/**
 * Consent state + Google Consent Mode v2.
 *
 * Defaults are "denied" for every storage type until the visitor chooses.
 * A Global Privacy Control signal (navigator.globalPrivacyControl) is honored
 * as an opt-out of ad personalization ("sale/sharing") as required by several
 * US state privacy laws (e.g. California, Colorado, Connecticut).
 */
import { safeGet, safeSet } from "@/features/storage/storage";

export interface Consent {
  analytics: boolean;
  ads: boolean;
  /** ISO timestamp of the choice. */
  at: string;
}

export const CONSENT_KEY = "consent";
export const OPEN_CONSENT_EVENT = "spinwheelge:open-consent";

export const analyticsConfig = {
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  adsenseClient: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "",
};

export const hasThirdParties = () => Boolean(analyticsConfig.gaId || analyticsConfig.gtmId || analyticsConfig.adsenseClient);

export function readConsent(): Consent | null {
  try {
    const raw = safeGet(CONSENT_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    return typeof c.analytics === "boolean" && typeof c.ads === "boolean" ? c : null;
  } catch {
    return null;
  }
}

export function gpcEnabled(): boolean {
  return typeof navigator !== "undefined" && (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

export function applyConsent(c: Pick<Consent, "analytics" | "ads">) {
  const ads = c.ads && !gpcEnabled();
  window.gtag?.("consent", "update", {
    analytics_storage: c.analytics ? "granted" : "denied",
    ad_storage: ads ? "granted" : "denied",
    ad_user_data: ads ? "granted" : "denied",
    ad_personalization: ads ? "granted" : "denied",
  });
}

export function saveConsent(c: Pick<Consent, "analytics" | "ads">) {
  const value: Consent = { ...c, at: new Date().toISOString() };
  safeSet(CONSENT_KEY, JSON.stringify(value));
  applyConsent(value);
}

/** Inline <head> script: defines gtag and sets Consent Mode defaults before any Google tag loads. */
export const consentDefaultsScript = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied",functionality_storage:"granted",security_storage:"granted",wait_for_update:500});try{var c=JSON.parse(localStorage.getItem("spinwheelge:v1:consent"));if(c){var a=c.ads&&navigator.globalPrivacyControl!==true;gtag("consent","update",{analytics_storage:c.analytics?"granted":"denied",ad_storage:a?"granted":"denied",ad_user_data:a?"granted":"denied",ad_personalization:a?"granted":"denied"})}}catch(e){}`;
