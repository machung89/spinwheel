import * as route from "@/routes/template";
import { withParams } from "@/routes/fixed-params";

export const dynamicParams = false;
export function generateStaticParams() {
  return route.templateParams(["en"]).map(({ lang: _, ...rest }) => rest);
}

const { Page, generateMetadata } = withParams(route, { lang: "en" });
export { generateMetadata };
export default Page;
