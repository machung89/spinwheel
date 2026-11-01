/**
 * Thin analytics wrapper around gtag / dataLayer. Events are only sent when
 * GA4 or GTM is configured, and the site never sends entry text, names or
 * other user-supplied content — only counts and modes.
 */
export type AnalyticsEvent =
  | "wheel_spin"
  | "wheel_created"
  | "winner_selected"
  | "winner_removed"
  | "template_opened"
  | "wheel_shared"
  | "fullscreen_opened"
  | "csv_imported"
  | "tool_used";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: AnalyticsEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") window.gtag("event", event, params);
    else if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event, ...params });
  } catch {
    /* analytics must never break the app */
  }
}
