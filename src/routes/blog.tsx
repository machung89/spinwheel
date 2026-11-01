import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { fmt, localeMeta, localizePath } from "@/i18n/config";
import { getDict, toLocale } from "@/i18n/server";
import { postsFor } from "@/content";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Container } from "@/components/layout/content-blocks";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = toLocale((await params).lang);
  const t = getDict(locale);
  return pageMetadata({ locale, title: t.blog.seoTitle, description: t.blog.seoDescription, path: "/blog/" });
}

export default async function BlogIndex({ params }: Props) {
  const locale = toLocale((await params).lang);
  const t = getDict(locale);
  const dateFmt = new Intl.DateTimeFormat(localeMeta[locale].htmlLang, { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
  return (
    <Container className="pt-6">
      <Breadcrumbs locale={locale} t={t} items={[{ name: t.nav.blog, path: "/blog/" }]} />
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        {t.blog.title}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-fg">{t.blog.intro}</p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {postsFor(locale).map((p) => (
          <li key={p.slug}>
            <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <p className="text-xs font-semibold text-primary">{p.tags.join(" · ")}</p>
              <h2 className="mt-2 text-lg font-bold">
                <Link href={localizePath(locale, `/blog/${p.slug}/`)} className="hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-sm text-muted-fg">{p.description}</p>
              <p className="mt-4 text-xs text-muted-fg">
                <time dateTime={p.published}>{dateFmt.format(new Date(p.published))}</time> · {fmt(t.common.minRead, { n: p.readingMinutes })}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Container>
  );
}
