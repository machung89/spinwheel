import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { mainNav } from "@/lib/site";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries/en";
import { toolLinks } from "@/content";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSelector } from "./language-selector";

/**
 * Server-rendered header. Menus use <details> so navigation is crawlable and
 * works without JavaScript.
 */
export function Header({ locale, t }: { locale: Locale; t: Dict }) {
  const L = (p: string) => localizePath(locale, p);
  const tools = toolLinks(locale);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link href={L("/")} className="rounded-lg focus-visible:outline-2 focus-visible:outline-ring" aria-label={t.nav.homeAria}>
          <Logo />
        </Link>

        <nav aria-label={t.nav.mainNav} className="ms-4 hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.key === "tools" ? (
              <details key={item.href} className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-muted-fg hover:bg-muted hover:text-fg [&::-webkit-details-marker]:hidden">
                  {t.nav.tools} <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="absolute top-full start-0 mt-2 w-64 rounded-2xl border border-border bg-card p-2 shadow-xl">
                  {tools.map((tool) => (
                    <Link key={tool.href} href={L(tool.href)} className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">
                      {tool.name}
                    </Link>
                  ))}
                  <Link href={L("/tools/")} className="mt-1 block rounded-lg border-t border-border px-3 py-2 text-sm font-semibold text-primary hover:bg-muted">
                    {t.nav.allTools}
                  </Link>
                </div>
              </details>
            ) : (
              <Link key={item.href} href={L(item.href)} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-fg hover:bg-muted hover:text-fg">
                {t.nav[item.key]}
              </Link>
            ),
          )}
        </nav>

        <div className="ms-auto flex items-center gap-1">
          <LanguageSelector />
          <ThemeToggle label={t.nav.toggleTheme} />

          <details className="group relative lg:hidden">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg hover:bg-muted [&::-webkit-details-marker]:hidden" aria-label={t.nav.openMenu}>
              <Menu className="size-5" />
            </summary>
            <nav aria-label={t.nav.mobileNav} className="fixed inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-card px-4 py-3 shadow-xl">
              {mainNav.map((item) => (
                <Link key={item.href} href={L(item.href)} className="block rounded-lg px-3 py-2.5 font-medium hover:bg-muted">
                  {t.nav[item.key]}
                </Link>
              ))}
              <p className="mt-2 px-3 text-xs font-semibold tracking-wide text-muted-fg uppercase">{t.nav.tools}</p>
              <div className="grid grid-cols-2">
                {tools.map((tool) => (
                  <Link key={tool.href} href={L(tool.href)} className="rounded-lg px-3 py-2 text-sm hover:bg-muted">
                    {tool.name}
                  </Link>
                ))}
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
