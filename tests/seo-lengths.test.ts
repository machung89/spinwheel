import { describe, expect, it } from "vitest";
import { fmt, locales } from "@/i18n/config";
import { getDict } from "@/i18n/server";
import { categoriesFor, landingPagesFor, pagesFor, postsFor, templatesFor } from "@/content";
import { isFullTemplate } from "@/data/templates/templates";
import { fitTitle } from "@/lib/seo";

// Search results show roughly 60 characters of a title and 155–160 of a description.
// Translations run longer than English, so this guards every locale.
const TITLE = { min: 25, max: 65 };
const DESC = { min: 70, max: 165 };

function metas(locale: (typeof locales)[number]) {
  const t = getDict(locale);
  const brand = (s: string) => `${s} | WhirlPick`;
  const pages = pagesFor(locale);
  return [
    { id: "home", title: t.home.seoTitle, description: t.home.description },
    { id: "templates", title: t.templates.seoTitle, description: fmt(t.templates.seoDescription, { n: templatesFor(locale).length }) },
    { id: "tools", title: t.toolsPage.seoTitle, description: t.toolsPage.seoDescription },
    { id: "blog", title: t.blog.seoTitle, description: t.blog.seoDescription },
    ...(["about", "contact", "privacy", "terms"] as const).map((k) => ({ id: k, title: pages[k].seoTitle, description: pages[k].description })),
    ...landingPagesFor(locale).map((p) => ({ id: p.slug, title: p.seoTitle, description: p.metaDescription })),
    ...categoriesFor(locale).map((c) => ({ id: `category/${c.slug}`, title: brand(c.seoTitle), description: c.metaDescription })),
    ...templatesFor(locale).filter(isFullTemplate).map((x) => ({ id: `template/${x.slug}`, title: brand(x.seoTitle), description: x.metaDescription })),
    ...postsFor(locale).map((p) => ({ id: `blog/${p.slug}`, title: brand(p.title), description: p.description })),
  ].map((m) => ({ ...m, title: fitTitle(m.title) }));
}

describe("search snippet lengths", () => {
  for (const locale of locales) {
    it(`${locale}: titles ${TITLE.min}–${TITLE.max} and descriptions ${DESC.min}–${DESC.max} characters`, () => {
      const bad = metas(locale).flatMap((m) => [
        ...(m.title.length < TITLE.min || m.title.length > TITLE.max ? [`title ${m.title.length} ${m.id}: ${m.title}`] : []),
        ...(m.description.length < DESC.min || m.description.length > DESC.max ? [`desc ${m.description.length} ${m.id}: ${m.description}`] : []),
      ]);
      expect(bad).toEqual([]);
    });
  }
});
