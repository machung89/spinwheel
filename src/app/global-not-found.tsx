import type { Metadata } from "next";
import LocaleLayout from "@/routes/root-layout";
import NotFound from "@/routes/not-found";
import { siteConfig } from "@/lib/site";
import { getDict } from "@/i18n/server";

// With two root layouts ((en) and (intl)/[lang]) there's no single layout for unmatched URLs,
// so Next renders this full document instead. Unknown paths are treated as English.
export const metadata: Metadata = {
  title: `${getDict("en").notFound.title} | ${siteConfig.name}`,
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <LocaleLayout params={Promise.resolve({ lang: "en" })}>
      <NotFound />
    </LocaleLayout>
  );
}
