"use client";

import { OPEN_CONSENT_EVENT } from "@/features/analytics/consent";
import { useI18n } from "@/i18n/provider";

export function PrivacyChoicesButton() {
  const { t } = useI18n();
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className="mt-2 text-start text-sm text-muted-fg underline-offset-2 hover:text-fg hover:underline"
    >
      {t.footer.privacyChoices}
    </button>
  );
}
