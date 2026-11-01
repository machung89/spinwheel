import Link from "next/link";
import { templateHref, type WheelTemplate } from "@/data/templates/templates";
import { localizePath, type Locale } from "@/i18n/config";

export function TemplateCard({ t, locale }: { t: WheelTemplate; locale: Locale }) {
  return (
    <Link
      href={localizePath(locale, templateHref(t))}
      className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring"
    >
      <span className="text-2xl" aria-hidden="true">
        {t.emoji}
      </span>
      <span className="min-w-0 break-words hyphens-auto">
        <span className="block font-semibold">{t.name}</span>
        <span className="mt-0.5 block text-sm text-muted-fg">{t.description}</span>
      </span>
    </Link>
  );
}
