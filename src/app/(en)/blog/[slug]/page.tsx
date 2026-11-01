import * as route from "@/routes/blog-post";
import { withParams } from "@/routes/fixed-params";

export const dynamicParams = false;
export function generateStaticParams() {
  return route.blogPostParams(["en"]).map(({ lang: _, ...rest }) => rest);
}

const { Page, generateMetadata } = withParams(route, { lang: "en" });
export { generateMetadata };
export default Page;
