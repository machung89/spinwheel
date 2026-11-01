import type { Dict } from "./dictionaries/en";
import en from "./dictionaries/en";
import vi from "./dictionaries/vi";
import es from "./dictionaries/es";
import fr from "./dictionaries/fr";
import pt from "./dictionaries/pt";
import { defaultLocale, isLocale, type Locale } from "./config";

const dictionaries: Record<Locale, Dict> = { en, vi, es, fr, pt };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}

/** Narrows a route param to a Locale (unknown values fall back to English; routes 404 them separately). */
export function toLocale(v: string): Locale {
  return isLocale(v) ? v : defaultLocale;
}
