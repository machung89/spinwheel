import * as route from "@/routes/blog";
import { withParams } from "@/routes/fixed-params";

const { Page, generateMetadata } = withParams(route, { lang: "en" });
export { generateMetadata };
export default Page;
