import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries/en";
import { breadcrumbSchema, JsonLd } from "./json-ld";

export interface Crumb {
  name: string;
  /** Unprefixed path; localized here. */
  path: string;
}

/** Visible breadcrumb trail + matching BreadcrumbList JSON-LD. "Home" is prepended automatically. */
export function Breadcrumbs({ items, locale, t }: { items: Crumb[]; locale: Locale; t: Dict }) {
  const all = [{ name: t.common.home, path: "/" }, ...items].map((c) => ({ ...c, path: localizePath(locale, c.path) }));
  return (
    <>
      <nav aria-label={t.common.breadcrumb} className="text-sm text-muted-fg">
        <ol className="flex flex-wrap items-center gap-1">
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="size-3.5 rtl:-scale-x-100" aria-hidden="true" />}
              {i === all.length - 1 ? (
                <span aria-current="page" className="font-medium text-fg">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="hover:text-fg hover:underline">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
