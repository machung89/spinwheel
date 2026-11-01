import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { languageAlternates } from "@/lib/seo";
import { localizePath, locales } from "@/i18n/config";
import { categoriesFor, landingPagesFor, postsFor, templatesFor } from "@/content";
import { isFullTemplate, templateHref } from "@/data/templates/templates";

export const dynamic = "force-static";

/** Content last reviewed date for pages without their own date. */
const SITE_UPDATED = "2026-11-01";

type Freq = "weekly" | "monthly" | "yearly";

/** One <url> per locale, each listing every language version via xhtml:link hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  const add = (path: string, priority: number, changeFrequency: Freq = "monthly", lastModified = SITE_UPDATED) => {
    const languages = languageAlternates(path);
    for (const l of locales) {
      out.push({ url: absoluteUrl(localizePath(l, path)), lastModified, changeFrequency, priority, alternates: { languages } });
    }
  };
  add("/", 1, "weekly");
  for (const p of landingPagesFor("en")) add(`/${p.slug}/`, p.kind === "wheel" ? 0.9 : 0.8);
  add("/templates/", 0.8, "weekly");
  for (const c of categoriesFor("en")) add(`/templates/${c.slug}/`, 0.7);
  for (const t of templatesFor("en").filter(isFullTemplate)) add(templateHref(t), 0.6);
  add("/tools/", 0.7);
  const posts = postsFor("en");
  add("/blog/", 0.7, "weekly", posts[0]?.published);
  for (const p of posts) add(`/blog/${p.slug}/`, 0.6, "monthly", p.updated ?? p.published);
  add("/about/", 0.3, "yearly");
  add("/contact/", 0.3, "yearly");
  add("/privacy-policy/", 0.2, "yearly");
  add("/terms-of-service/", 0.2, "yearly");
  return out;
}
