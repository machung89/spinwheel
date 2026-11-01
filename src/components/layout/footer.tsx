import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries/en";
import { landingPagesFor, toolLinks } from "@/content";
import { Logo } from "./logo";
import { PrivacyChoicesButton } from "@/components/consent/privacy-choices-button";

function Column({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-bold">{title}</h2>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-muted-fg hover:text-fg">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ locale, t }: { locale: Locale; t: Dict }) {
  const L = (p: string) => localizePath(locale, p);
  const wheels = landingPagesFor(locale)
    .filter((p) => p.kind === "wheel")
    .map((p) => ({ href: L(`/${p.slug}/`), label: p.name }));
  const tools = toolLinks(locale).map((x) => ({ href: L(x.href), label: x.name }));
  const company = [
    { href: L("/about/"), label: t.footer.aboutLink },
    { href: L("/contact/"), label: t.footer.contact },
    { href: L("/blog/"), label: t.footer.blog },
    { href: L("/templates/"), label: t.footer.allTemplates },
    { href: L("/privacy-policy/"), label: t.footer.privacy },
    { href: L("/terms-of-service/"), label: t.footer.terms },
  ];
  return (
    <footer className="mt-20 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-3 text-sm text-muted-fg">{t.footer.about}</p>
        </div>
        <Column title={t.footer.wheels} links={wheels} />
        <Column title={t.footer.tools} links={tools} />
        <div>
          <Column title={t.footer.company} links={company} />
          <PrivacyChoicesButton />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-muted-fg sm:flex-row sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
          </p>
          <p>{t.footer.randomNote}</p>
        </div>
      </div>
    </footer>
  );
}
