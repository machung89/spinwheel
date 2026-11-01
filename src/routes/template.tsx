import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { fmt, localeMeta, localizePath, type Locale } from "@/i18n/config";
import { getDict, toLocale } from "@/i18n/server";
import { categoriesFor, templatesFor } from "@/content";
import { isFullTemplate, templateHref, type FullTemplate } from "@/data/templates/templates";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd, webAppSchema } from "@/components/seo/json-ld";
import { Container, FaqSection, RelatedLinks, Steps, TrustBadges } from "@/components/layout/content-blocks";
import { storageKeyFor } from "@/components/layout/landing-view";
import { WheelApp } from "@/components/wheel/wheel-app";
import { AdSlot } from "@/components/ads/ad-slot";
import { siteConfig } from "@/lib/site";

export function templateParams(locs: readonly Locale[]) {
  return locs.flatMap((lang) => templatesFor(lang).filter(isFullTemplate).map((t) => ({ lang, category: t.category, slug: t.slug })));
}

type Props = { params: Promise<{ lang: string; category: string; slug: string }> };

function find(locale: Locale, category: string, slug: string): FullTemplate | undefined {
  return templatesFor(locale).find((t): t is FullTemplate => isFullTemplate(t) && t.category === category && t.slug === slug);
}

/** "Charades" -> "Charades Wheel"; names that already mention a wheel/picker or are questions stay as-is. */
const WHEELISH = /wheel|picker|\?|vòng quay|ruleta|roue|roleta|sélecteur|selector|seletor|sorteador|chọn/i;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, category, slug } = await params;
  const locale = toLocale(lang);
  const t = find(locale, category, slug);
  if (!t) return {};
  return pageMetadata({ locale, title: `${t.seoTitle} | ${siteConfig.name}`, description: t.metaDescription, path: templateHref(t) });
}

export default async function TemplatePage({ params }: Props) {
  const { lang, category, slug } = await params;
  const locale = toLocale(lang);
  const d = getDict(locale);
  const t = find(locale, category, slug);
  const c = categoriesFor(locale).find((x) => x.slug === category);
  if (!t || !c) notFound();
  const title = WHEELISH.test(t.name) ? t.name : fmt(d.templates.wheelSuffix, { name: t.name });
  const all = templatesFor(locale);
  const related = t.related
    .map((s) => all.find((x) => x.slug === s))
    .filter((r) => r !== undefined)
    .map((r) => ({ href: localizePath(locale, templateHref(r)), title: `${r.emoji} ${r.name}`, description: r.description }));

  return (
    <>
      <Container className="pt-6 pb-4">
        <Breadcrumbs
          locale={locale}
          t={d}
          items={[
            { name: d.nav.templates, path: "/templates/" },
            { name: c.name, path: `/templates/${c.slug}/` },
            { name: t.name, path: templateHref(t) },
          ]}
        />
        <div className="mt-4 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            <span aria-hidden="true">{t.emoji}</span> {title}
          </h1>
          <p className="mt-3 text-lg text-muted-fg">{t.description}</p>
          <div className="mt-4">
            <TrustBadges t={d} />
          </div>
        </div>
      </Container>

      <Container className="py-4">
        <WheelApp storageKey={storageKeyFor(locale, `template:${t.slug}`)} preset={t.preset} templateSlug={t.slug} />
      </Container>

      <AdSlot placement="belowWheel" className="px-4" />

      <Container>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>{d.templates.about}</h2>
          <p>{t.intro}</p>
          <h2>{d.templates.tips}</h2>
          <ul>
            {t.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </article>

        <section aria-labelledby="how-to" className="mt-16">
          <h2 id="how-to" className="text-2xl font-extrabold tracking-tight">
            {d.templates.customizeTitle}
          </h2>
          <Steps
            steps={[
              { title: d.templates.step1, text: d.templates.step1Text },
              { title: d.templates.step2, text: d.templates.step2Text },
              { title: d.templates.step3, text: d.templates.step3Text },
              { title: d.templates.step4, text: d.templates.step4Text },
            ]}
          />
        </section>

        <FaqSection faqs={t.faqs} title={d.common.faqTitle} />
        <RelatedLinks title={d.templates.related} links={related} />
      </Container>
      <JsonLd data={webAppSchema({ name: title, description: t.metaDescription, path: localizePath(locale, templateHref(t)), inLanguage: localeMeta[locale].hreflang })} />
    </>
  );
}
