import { staticPage } from "@/components/layout/static-page";
import { withParams } from "@/routes/fixed-params";

const sp = staticPage("terms", "/terms-of-service/");
const { Page, generateMetadata } = withParams({ default: sp.Page, generateMetadata: sp.generateMetadata }, { lang: "en" });
export { generateMetadata };
export default Page;
