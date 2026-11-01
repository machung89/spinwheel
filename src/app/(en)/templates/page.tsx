import * as route from "@/routes/templates";
import { withParams } from "@/routes/fixed-params";

const { Page, generateMetadata } = withParams(route, { lang: "en" });
export { generateMetadata };
export default Page;
