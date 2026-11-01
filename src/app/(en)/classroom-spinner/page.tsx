import * as route from "@/routes/landing";
import { withParams } from "@/routes/fixed-params";

const { Page, generateMetadata } = withParams(route, { lang: "en", slug: "classroom-spinner" });
export { generateMetadata };
export default Page;
