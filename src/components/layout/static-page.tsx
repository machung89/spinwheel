import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { buttonClass } from "@/components/ui/button";
import { pagesFor } from "@/content";
import type { PagesContent } from "@/content/types";
import { fmt } from "@/i18n/config";
import { getDict, toLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { BlockList } from "./block-list";
import { Container } from "./content-blocks";

type Props = { params: Promise<{ lang: string }> };

/** Builds metadata + page component for About, Contact, Privacy and Terms from localized content. */
export function staticPage(key: keyof PagesContent, path: string) {
  async function generateMetadata({ params }: Props): Promise<Metadata> {
    const locale = toLocale((await params).lang);
    const c = pagesFor(locale)[key];
    return pageMetadata({ locale, title: c.seoTitle, description: c.description, path });
  }

  async function Page({ params }: Props) {
    const locale = toLocale((await params).lang);
    const t = getDict(locale);
    const c = pagesFor(locale)[key];
    const email = siteConfig.contactEmail;
    const vars = { site: siteConfig.name, domain: siteConfig.url.replace(/^https?:\/\//, ""), email: `[${email}](mailto:${email})` };
    return (
      <Container className="pt-6">
        <Breadcrumbs locale={locale} t={t} items={[{ name: c.title, path }]} />
        <article className="mx-auto mt-6 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            {c.title}
          </h1>
          {c.updated && <p className="mt-2 text-sm text-muted-fg">{c.updated}</p>}
          <div className="prose-content mt-6">
            {key === "contact" && (
              <p>
                <a href={`mailto:${email}`} className={buttonClass("primary", "lg", "!text-primary-fg !no-underline")}>
                  {fmt(t.contact.email, { email })}
                </a>
              </p>
            )}
            <BlockList blocks={c.blocks} locale={locale} vars={vars} />
          </div>
        </article>
      </Container>
    );
  }

  return { generateMetadata, Page };
}
