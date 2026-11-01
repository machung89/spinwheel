import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { normalize } from "@/lib/text";
import { fmt, localizePath } from "@/i18n/config";
import { getDict, toLocale } from "@/i18n/server";
import { categoriesFor, templatesFor } from "@/content";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Container } from "@/components/layout/content-blocks";
import { TemplateCard } from "@/components/templates/template-card";
import { TemplateSearch } from "@/components/templates/template-search";
import { AdSlot } from "@/components/ads/ad-slot";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = toLocale((await params).lang);
  const t = getDict(locale);
  return pageMetadata({ locale, title: t.templates.seoTitle, description: fmt(t.templates.seoDescription, { n: templatesFor(locale).length }), path: "/templates/" });
}

export default async function TemplatesPage({ params }: Props) {
  const locale = toLocale((await params).lang);
  const t = getDict(locale);
  const categories = categoriesFor(locale);
  const templates = templatesFor(locale);
  return (
    <Container className="pt-6">
      <Breadcrumbs locale={locale} t={t} items={[{ name: t.nav.templates, path: "/templates/" }]} />
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        {t.templates.title}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-fg">{t.templates.intro}</p>

      <nav aria-label={t.templates.categories} className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <Link key={c.slug} href={localizePath(locale, `/templates/${c.slug}/`)} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium hover:bg-muted">
            <span aria-hidden="true">{c.emoji}</span> {c.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8">
        <TemplateSearch containerId="template-list" />
      </div>

      <div id="template-list" className="mt-4 space-y-12">
        {categories.map((c) => {
          const items = templates.filter((tp) => tp.category === c.slug);
          return (
            <section key={c.slug} aria-labelledby={`cat-${c.slug}`} data-search-group>
              <div className="flex items-baseline justify-between gap-3">
                <h2 id={`cat-${c.slug}`} className="text-xl font-extrabold tracking-tight">
                  <span aria-hidden="true">{c.emoji}</span> {c.name}
                </h2>
                <Link href={localizePath(locale, `/templates/${c.slug}/`)} className="text-sm font-semibold text-primary hover:underline">
                  {t.templates.viewAll}
                </Link>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((tp) => (
                  <li key={tp.slug} data-search={normalize(`${tp.name} ${tp.description} ${c.name}`)}>
                    <TemplateCard t={tp} locale={locale} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
      <AdSlot placement="inContent" />
    </Container>
  );
}
