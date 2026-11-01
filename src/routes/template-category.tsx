import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { fmt, localizePath, type Locale } from "@/i18n/config";
import { getDict, toLocale } from "@/i18n/server";
import { categoriesFor, templatesFor } from "@/content";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Container, RelatedLinks } from "@/components/layout/content-blocks";
import { TemplateCard } from "@/components/templates/template-card";
import { AdSlot } from "@/components/ads/ad-slot";
import { siteConfig } from "@/lib/site";

export function categoryParams(locs: readonly Locale[]) {
  return locs.flatMap((lang) => categoriesFor(lang).map((c) => ({ lang, category: c.slug })));
}

type Props = { params: Promise<{ lang: string; category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, category } = await params;
  const locale = toLocale(lang);
  const c = categoriesFor(locale).find((x) => x.slug === category);
  if (!c) return {};
  return pageMetadata({ locale, title: `${c.seoTitle} | ${siteConfig.name}`, description: c.metaDescription, path: `/templates/${c.slug}/` });
}

export default async function CategoryPage({ params }: Props) {
  const { lang, category } = await params;
  const locale = toLocale(lang);
  const t = getDict(locale);
  const categories = categoriesFor(locale);
  const c = categories.find((x) => x.slug === category);
  if (!c) notFound();
  const items = templatesFor(locale).filter((tp) => tp.category === c.slug);
  const others = categories.filter((o) => o.slug !== c.slug);
  return (
    <Container className="pt-6">
      <Breadcrumbs
        locale={locale}
        t={t}
        items={[
          { name: t.nav.templates, path: "/templates/" },
          { name: c.name, path: `/templates/${c.slug}/` },
        ]}
      />
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        <span aria-hidden="true">{c.emoji}</span> {c.h1}
      </h1>
      <div className="prose-content mt-3 max-w-3xl text-lg">
        {c.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <h2 className="mt-10 text-xl font-extrabold tracking-tight">{fmt(t.templates.countIn, { n: items.length })}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((tp) => (
          <li key={tp.slug}>
            <TemplateCard t={tp} locale={locale} />
          </li>
        ))}
      </ul>
      <AdSlot placement="inContent" />
      <RelatedLinks title={t.templates.otherCategories} links={others.map((o) => ({ href: localizePath(locale, `/templates/${o.slug}/`), title: `${o.emoji} ${o.name}` }))} />
    </Container>
  );
}
