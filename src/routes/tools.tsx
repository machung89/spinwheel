import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { localizePath } from "@/i18n/config";
import { getDict, toLocale } from "@/i18n/server";
import { landingPagesFor, toolLinks } from "@/content";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Container } from "@/components/layout/content-blocks";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = toLocale((await params).lang);
  const t = getDict(locale);
  return pageMetadata({ locale, title: t.toolsPage.seoTitle, description: t.toolsPage.seoDescription, path: "/tools/" });
}

export default async function ToolsPage({ params }: Props) {
  const locale = toLocale((await params).lang);
  const t = getDict(locale);
  const L = (p: string) => localizePath(locale, p);
  return (
    <Container className="pt-6">
      <Breadcrumbs locale={locale} t={t} items={[{ name: t.nav.tools, path: "/tools/" }]} />
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        {t.toolsPage.title}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-fg">{t.toolsPage.intro}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {toolLinks(locale).map((tool) => (
          <li key={tool.href}>
            <Link href={L(tool.href)} className="block h-full rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
              <h2 className="font-bold">{tool.name}</h2>
              <p className="mt-1 text-sm text-muted-fg">{tool.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="mt-14 text-2xl font-extrabold tracking-tight">{t.toolsPage.wheels}</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {landingPagesFor(locale)
          .filter((p) => p.kind === "wheel")
          .map((p) => (
            <li key={p.slug}>
              <Link href={L(`/${p.slug}/`)} className="block h-full rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                <h3 className="font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-fg">{p.lead}</p>
              </Link>
            </li>
          ))}
      </ul>
    </Container>
  );
}
