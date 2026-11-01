"use client";

import { Check, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { localeMeta, localizePath, locales, splitLocale } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";
import { Flag } from "./flag";

/**
 * Language menu with flags. Each option links to the *same page* in that language,
 * so the links are crawlable and work without JavaScript. The browser's language is
 * never used to redirect automatically (that would hurt SEO and annoy travelers).
 */
export function LanguageSelector() {
  const { locale, t } = useI18n();
  const { path } = splitLocale(usePathname() || "/");
  const current = localeMeta[locale];

  return (
    <details className="lang-menu group relative">
      <summary className="lang-trigger" aria-label={`${t.nav.language}: ${current.name}`}>
        <Flag code={current.flag} />
        <span className="hidden text-xs font-bold tracking-wide uppercase sm:inline">{current.code}</span>
        <ChevronDown className="lang-chevron size-3.5" aria-hidden="true" />
      </summary>
      <div className="lang-panel" role="menu" aria-label={t.nav.language}>
        <p className="lang-heading">{t.nav.language}</p>
        <ul>
          {locales.map((l) => {
            const m = localeMeta[l];
            const active = l === locale;
            return (
              <li key={l}>
                <a
                  href={localizePath(l, path)}
                  hrefLang={m.hreflang}
                  lang={m.htmlLang}
                  dir={m.dir}
                  role="menuitem"
                  aria-current={active ? "true" : undefined}
                  className="lang-option"
                  data-active={active || undefined}
                >
                  <Flag code={m.flag} className="flag-lg" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold">{m.name}</span>
                    <span className="block truncate text-xs text-muted-fg">{m.englishName}</span>
                  </span>
                  {active && <Check className="size-4 text-primary" aria-hidden="true" />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </details>
  );
}
