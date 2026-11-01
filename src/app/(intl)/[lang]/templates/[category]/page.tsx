import { locales } from "@/i18n/config";
import { categoryParams } from "@/routes/template-category";

export { default, generateMetadata } from "@/routes/template-category";

export const dynamicParams = false;
export function generateStaticParams() {
  return categoryParams(locales.filter((l) => l !== "en"));
}
