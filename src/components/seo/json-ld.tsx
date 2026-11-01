import { absoluteUrl, siteConfig } from "@/lib/site";

type Json = Record<string, unknown>;

/** Serializes JSON-LD safely (escapes "<" so content can't close the script tag). */
export function JsonLd({ data }: { data: Json | Json[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/icon-512.png"),
    email: siteConfig.contactEmail,
  };
}

export function websiteSchema(inLanguage = "en"): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage,
  };
}

/** WebApplication (a SoftwareApplication subtype). Price 0 is accurate: every tool is free. No ratings are claimed. */
export function webAppSchema({ name, description, path, inLanguage = "en" }: { name: string; description: string; path: string; inLanguage?: string }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    inLanguage,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

export function articleSchema(a: { title: string; description: string; path: string; published: string; updated?: string; author: string; inLanguage?: string }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    mainEntityOfPage: absoluteUrl(a.path),
    datePublished: a.published,
    dateModified: a.updated ?? a.published,
    author: { "@type": "Organization", name: a.author, url: siteConfig.url },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    image: absoluteUrl("/og.png"),
    inLanguage: a.inLanguage ?? "en",
  };
}
