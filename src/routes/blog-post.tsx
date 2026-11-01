import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { fmt, localeMeta, localizePath, type Locale } from "@/i18n/config";
import { getDict, toLocale } from "@/i18n/server";
import { landingLink, postsFor } from "@/content";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { articleSchema, JsonLd } from "@/components/seo/json-ld";
import { Container, RelatedLinks } from "@/components/layout/content-blocks";
import { BlockList } from "@/components/layout/block-list";
import { AdSlot } from "@/components/ads/ad-slot";

export function blogPostParams(locs: readonly Locale[]) {
  return locs.flatMap((lang) => postsFor(lang).map((p) => ({ lang, slug: p.slug })));
}

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = toLocale(lang);
  const p = postsFor(locale).find((x) => x.slug === slug);
  if (!p) return {};
  return pageMetadata({
    locale,
    title: `${p.title} | WhirlPick`,
    description: p.description,
    path: `/blog/${p.slug}/`,
    type: "article",
    publishedTime: p.published,
    modifiedTime: p.updated ?? p.published,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const locale = toLocale(lang);
  const t = getDict(locale);
  const posts = postsFor(locale);
  const post = posts.find((x) => x.slug === slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}/`;
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const dateFmt = new Intl.DateTimeFormat(localeMeta[locale].htmlLang, { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
  return (
    <Container className="pt-6">
      <Breadcrumbs
        locale={locale}
        t={t}
        items={[
          { name: t.nav.blog, path: "/blog/" },
          { name: post.title, path },
        ]}
      />
      <article className="mx-auto mt-6 max-w-3xl">
        <header>
          <p className="text-sm font-semibold text-primary">{post.tags.join(" · ")}</p>
          <h1 className="mt-2 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            {post.title}
          </h1>
          <p className="mt-3 text-lg text-muted-fg">{post.description}</p>
          <p className="mt-4 text-sm text-muted-fg">
            {t.common.by} {post.author} · <time dateTime={post.published}>{dateFmt.format(new Date(post.published))}</time> · {fmt(t.common.minRead, { n: post.readingMinutes })}
          </p>
        </header>
        <div className="prose-content mt-8">
          <BlockList blocks={post.body} locale={locale} />
        </div>
      </article>
      <AdSlot placement="articleEnd" />
      <RelatedLinks
        title={t.blog.tryTools}
        links={post.tools.map((s) => {
          const l = landingLink(locale, s);
          return { ...l, href: localizePath(locale, l.href) };
        })}
      />
      <RelatedLinks title={t.blog.more} links={more.map((p) => ({ href: localizePath(locale, `/blog/${p.slug}/`), title: p.title, description: p.description }))} />
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: localizePath(locale, path),
          published: post.published,
          updated: post.updated,
          author: post.author,
          inLanguage: localeMeta[locale].hreflang,
        })}
      />
    </Container>
  );
}
