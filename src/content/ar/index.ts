import type { LocaleContent } from "../types";
import { landingWheels } from "./landing-wheels";
import { landingTools } from "./landing-tools";
import { categories, templates } from "./templates";
import { posts } from "./blog";
import { pages } from "./pages";
import { tod } from "./tod";

const ar: LocaleContent = { landing: { ...landingWheels, ...landingTools }, categories, templates, posts, pages, tod };
export default ar;
