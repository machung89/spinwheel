import { locales } from "@/i18n/config";
import { landingParams } from "@/routes/landing";

export { default, generateMetadata } from "@/routes/landing";

export const dynamicParams = false;
export function generateStaticParams() {
  return landingParams(locales.filter((l) => l !== "en"));
}
