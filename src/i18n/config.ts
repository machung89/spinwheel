/**
 * Locale configuration. English is served without a prefix ("/wheel-of-names/");
 * every other locale lives under its code ("/vi/wheel-of-names/"). Slugs are shared
 * across locales so each page has a 1:1 hreflang alternate.
 */
export const locales = ["en", "vi", "es", "fr", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export interface LocaleMeta {
  code: Locale;
  /** Native name shown in the language selector. */
  name: string;
  /** English name (for aria labels / tooltips). */
  englishName: string;
  hreflang: string;
  /** BCP 47 tag for <html lang>, Intl and speech synthesis. */
  htmlLang: string;
  ogLocale: string;
  flag: "us" | "vn" | "es" | "fr" | "br";
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { code: "en", name: "English", englishName: "English", hreflang: "en", htmlLang: "en-US", ogLocale: "en_US", flag: "us" },
  vi: { code: "vi", name: "Tiếng Việt", englishName: "Vietnamese", hreflang: "vi", htmlLang: "vi-VN", ogLocale: "vi_VN", flag: "vn" },
  es: { code: "es", name: "Español", englishName: "Spanish", hreflang: "es", htmlLang: "es", ogLocale: "es_ES", flag: "es" },
  fr: { code: "fr", name: "Français", englishName: "French", hreflang: "fr", htmlLang: "fr", ogLocale: "fr_FR", flag: "fr" },
  pt: { code: "pt", name: "Português", englishName: "Portuguese", hreflang: "pt-BR", htmlLang: "pt-BR", ogLocale: "pt_BR", flag: "br" },
};

export const isLocale = (v: string | undefined): v is Locale => !!v && (locales as readonly string[]).includes(v);

/** "/wheel-of-names/" + "vi" -> "/vi/wheel-of-names/". English stays unprefixed. */
export function localizePath(locale: Locale, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return locale === defaultLocale ? p : `/${locale}${p === "/" ? "/" : p}`;
}

/** Splits "/vi/blog/x/" into { locale: "vi", path: "/blog/x/" }. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const seg = pathname.split("/")[1];
  // "/en/..." also occurs: English pages are prerendered at /en/ and served unprefixed via a rewrite.
  if (isLocale(seg)) return { locale: seg, path: pathname.slice(seg.length + 1) || "/" };
  return { locale: defaultLocale, path: pathname || "/" };
}

/** Replaces {placeholders} in a dictionary string. */
export function fmt(template: string, params: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in params ? String(params[k]) : m));
}
