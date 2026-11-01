import type { LandingPage } from "@/data/landing";
import { landingLink, todFor } from "@/content";
import { fmt, localeMeta, localizePath, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries/en";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd, webAppSchema } from "@/components/seo/json-ld";
import { AdSlot } from "@/components/ads/ad-slot";
import { ToolRenderer } from "@/components/tools/tool-renderer";
import { Container, FaqSection, RelatedLinks, Steps, TrustBadges } from "./content-blocks";
import { RichText } from "./rich-text";

/** Per-locale LocalStorage key so wheels in different languages don't overwrite each other. */
export const storageKeyFor = (locale: Locale, key: string) => (locale === "en" ? key : `${locale}:${key}`);

/** Shared layout for every primary landing page: hero, tool, original content, FAQ and related links. */
export function LandingView({ page, locale, t }: { page: LandingPage; locale: Locale; t: Dict }) {
  const isWheel = page.kind === "wheel";
  const path = `/${page.slug}/`;
  const nameLower = page.name.toLocaleLowerCase(localeMeta[locale].htmlLang);
  return (
    <>
      <Container className="pt-6 pb-4">
        <Breadcrumbs locale={locale} t={t} items={isWheel ? [{ name: page.name, path }] : [{ name: t.nav.tools, path: "/tools/" }, { name: page.name, path }]} />
        <div className="mt-4 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            {page.h1}
          </h1>
          <p className="mt-3 text-lg text-muted-fg">{page.lead}</p>
          <div className="mt-4">
            <TrustBadges t={t} />
          </div>
        </div>
      </Container>

      <Container className="py-4">
        <ToolRenderer kind={page.kind} storageKey={storageKeyFor(locale, page.slug)} preset={page.preset} tod={page.kind === "truthdare" ? todFor(locale) : undefined} />
      </Container>

      <AdSlot placement="belowWheel" className="px-4" />

      <Container>
        <article className="mx-auto max-w-3xl">
          <div className="prose-content">
            {page.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p}>
                    <RichText text={p} locale={locale} />
                  </p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>
                        <RichText text={li} locale={locale} />
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>

        <section aria-labelledby="how-to" className="mt-16">
          <h2 id="how-to" className="text-2xl font-extrabold tracking-tight">
            {fmt(t.common.howToUse, { name: nameLower })}
          </h2>
          <Steps steps={page.howTo} />
        </section>

        <section aria-labelledby="benefits" className="mt-16">
          <h2 id="benefits" className="text-2xl font-extrabold tracking-tight">
            {fmt(t.common.whyUse, { name: nameLower })}
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {page.benefits.map((b) => (
              <li key={b.title} className="rounded-2xl border border-border bg-card p-4">
                <h3 className="font-bold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-fg">{b.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <AdSlot placement="inContent" />

        <FaqSection faqs={page.faqs} title={t.common.faqTitle} />
        <RelatedLinks
          title={t.common.relatedTools}
          links={page.related.map((slug) => {
            const l = landingLink(locale, slug);
            return { ...l, href: localizePath(locale, l.href) };
          })}
        />
      </Container>

      <JsonLd data={webAppSchema({ name: page.h1, description: page.metaDescription, path: localizePath(locale, path), inLanguage: localeMeta[locale].hreflang })} />
    </>
  );
}
