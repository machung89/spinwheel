import { locales } from "@/i18n/config";
import { blogPostParams } from "@/routes/blog-post";

export { default, generateMetadata } from "@/routes/blog-post";

export const dynamicParams = false;
export function generateStaticParams() {
  return blogPostParams(locales.filter((l) => l !== "en"));
}
