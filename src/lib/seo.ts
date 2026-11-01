import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";
import { defaultLocale, localeMeta, localizePath, locales, type Locale } from "@/i18n/config";

interface PageMeta {
  locale: Locale;
  title: string;
  description: string;
  /** Unprefixed path, e.g. "/wheel-of-names/". */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  /** Locales this page exists in (defaults to all). */
  available?: readonly Locale[];
}

/** hreflang map for a page: every available locale plus x-default (English). */
export function languageAlternates(path: string, available: readonly Locale[] = locales): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of available) map[localeMeta[l].hreflang] = absoluteUrl(localizePath(l, path));
  map["x-default"] = absoluteUrl(localizePath(defaultLocale, path));
  return map;
}

/** Google shows ~60 characters of a title; the " | Brand" suffix is dropped when it would push past that. */
const TITLE_MAX = 60;
export function fitTitle(title: string): string {
  const suffix = ` | ${siteConfig.name}`;
  return title.length > TITLE_MAX && title.endsWith(suffix) ? title.slice(0, -suffix.length) : title;
}

/** Complete metadata (canonical, hreflang, Open Graph, Twitter) for an indexable page. */
export function pageMetadata({ locale, title, description, path, type = "website", publishedTime, modifiedTime, noindex, available }: PageMeta): Metadata {
  const url = absoluteUrl(localizePath(locale, path));
  title = fitTitle(title);
  const others = (available ?? locales).filter((l) => l !== locale);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: languageAlternates(path, available) },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: localeMeta[locale].ogLocale,
      alternateLocale: others.map((l) => localeMeta[l].ogLocale),
      images: [{ url: absoluteUrl("/og.png"), width: 1200, height: 630, alt: `${siteConfig.name}` }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/og.png")] },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}
