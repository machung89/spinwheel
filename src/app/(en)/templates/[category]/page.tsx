import * as route from "@/routes/template-category";
import { withParams } from "@/routes/fixed-params";

export const dynamicParams = false;
export function generateStaticParams() {
  return route.categoryParams(["en"]).map(({ lang: _, ...rest }) => rest);
}

const { Page, generateMetadata } = withParams(route, { lang: "en" });
export { generateMetadata };
export default Page;
