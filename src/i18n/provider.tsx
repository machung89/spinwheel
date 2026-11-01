"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Dict } from "./dictionaries/en";
import { fmt, localizePath, type Locale } from "./config";
import { translateError, translateNotice, type Notice } from "./errors";

interface I18n {
  locale: Locale;
  t: Dict;
  fmt: typeof fmt;
  /** Localizes an internal path for the current locale. */
  href: (path: string) => string;
  errorText: (e: unknown) => string;
  noticeText: (n: Notice) => string;
}

const Ctx = createContext<I18n | null>(null);

/** Receives only the active locale's dictionary from the server layout. */
export function I18nProvider({ locale, dict, children }: { locale: Locale; dict: Dict; children: ReactNode }) {
  const value = useMemo<I18n>(
    () => ({
      locale,
      t: dict,
      fmt,
      href: (p) => localizePath(locale, p),
      errorText: (e) => translateError(dict, e),
      noticeText: (n) => translateNotice(dict, n),
    }),
    [locale, dict],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n(): I18n {
  const v = useContext(Ctx);
  if (!v) throw new Error("useI18n must be used inside <I18nProvider>");
  return v;
}
