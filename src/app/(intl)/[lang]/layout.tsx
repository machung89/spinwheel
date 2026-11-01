import { locales } from "@/i18n/config";

export { default, generateMetadata, viewport } from "@/routes/root-layout";

// English lives at unprefixed static routes in (en); this root layout serves the other locales.
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.filter((l) => l !== "en").map((lang) => ({ lang }));
}
