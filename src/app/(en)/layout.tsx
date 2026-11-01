import * as layout from "@/routes/root-layout";
import { withParams } from "@/routes/fixed-params";

export { viewport } from "@/routes/root-layout";

const { Page, generateMetadata } = withParams(layout, { lang: "en" });
export { generateMetadata };
export default Page;
