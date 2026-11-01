/**
 * Locale configuration. English is served without a prefix ("/wheel-of-names/");
 * every other locale lives under its code ("/vi/wheel-of-names/"). Slugs are shared
 * across locales so each page has a 1:1 hreflang alternate.
 */
export const locales = ["en", "vi", "es", "fr", "pt", "de", "ja", "ko", "zh", "ar"] as const;
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
  flag: "us" | "vn" | "es" | "fr" | "br" | "de" | "jp" | "kr" | "cn" | "sa";
  /** Text direction; Arabic is right-to-left. */
  dir: "ltr" | "rtl";
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { code: "en", name: "English", englishName: "English", hreflang: "en", htmlLang: "en-US", ogLocale: "en_US", flag: "us", dir: "ltr" },
  vi: { code: "vi", name: "Tiếng Việt", englishName: "Vietnamese", hreflang: "vi", htmlLang: "vi-VN", ogLocale: "vi_VN", flag: "vn", dir: "ltr" },
  es: { code: "es", name: "Español", englishName: "Spanish", hreflang: "es", htmlLang: "es", ogLocale: "es_ES", flag: "es", dir: "ltr" },
  fr: { code: "fr", name: "Français", englishName: "French", hreflang: "fr", htmlLang: "fr", ogLocale: "fr_FR", flag: "fr", dir: "ltr" },
  pt: { code: "pt", name: "Português", englishName: "Portuguese", hreflang: "pt-BR", htmlLang: "pt-BR", ogLocale: "pt_BR", flag: "br", dir: "ltr" },
  de: { code: "de", name: "Deutsch", englishName: "German", hreflang: "de", htmlLang: "de", ogLocale: "de_DE", flag: "de", dir: "ltr" },
  ja: { code: "ja", name: "日本語", englishName: "Japanese", hreflang: "ja", htmlLang: "ja", ogLocale: "ja_JP", flag: "jp", dir: "ltr" },
  ko: { code: "ko", name: "한국어", englishName: "Korean", hreflang: "ko", htmlLang: "ko", ogLocale: "ko_KR", flag: "kr", dir: "ltr" },
  zh: { code: "zh", name: "简体中文", englishName: "Chinese (Simplified)", hreflang: "zh-Hans", htmlLang: "zh-CN", ogLocale: "zh_CN", flag: "cn", dir: "ltr" },
  ar: { code: "ar", name: "العربية", englishName: "Arabic", hreflang: "ar", htmlLang: "ar", ogLocale: "ar_AR", flag: "sa", dir: "rtl" },
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
  // "/en/..." redirects to the unprefixed URL, but is still parsed as English.
  if (isLocale(seg)) return { locale: seg, path: pathname.slice(seg.length + 1) || "/" };
  return { locale: defaultLocale, path: pathname || "/" };
}

/** Replaces {placeholders} in a dictionary string. */
export function fmt(template: string, params: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in params ? String(params[k]) : m));
}
