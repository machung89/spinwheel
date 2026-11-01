import { locales } from "@/i18n/config";
import { templateParams } from "@/routes/template";

export { default, generateMetadata } from "@/routes/template";

export const dynamicParams = false;
export function generateStaticParams() {
  return templateParams(locales.filter((l) => l !== "en"));
}
