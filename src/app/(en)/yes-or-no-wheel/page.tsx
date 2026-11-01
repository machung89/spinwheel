import * as route from "@/routes/landing";
import { withParams } from "@/routes/fixed-params";

const { Page, generateMetadata } = withParams(route, { lang: "en", slug: "yes-or-no-wheel" });
export { generateMetadata };
export default Page;
