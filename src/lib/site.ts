export const siteConfig = {
  name: "WhirlPick",
  tagline: "Free Random Picker Wheel",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://spinwheelge.com").replace(/\/$/, ""),
  description:
    "Create a custom spinning wheel, pick random names, choose prizes and make decisions instantly. Free, fair and no sign-up required.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@spinwheelge.com",
  locale: "en_US",
  twitter: undefined as string | undefined,
};

/** Main navigation; labels come from the dictionary's `nav` section. */
export const mainNav = [
  { href: "/", key: "home" },
  { href: "/templates/", key: "templates" },
  { href: "/wheel-of-names/", key: "wheelOfNames" },
  { href: "/tools/", key: "tools" },
  { href: "/blog/", key: "blog" },
] as const;

export function absoluteUrl(path = "/"): string {
  return siteConfig.url + (path.startsWith("/") ? path : `/${path}`);
}
