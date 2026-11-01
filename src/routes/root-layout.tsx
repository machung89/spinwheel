import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { siteConfig } from "@/lib/site";
import { localeMeta } from "@/i18n/config";
import { getDict, toLocale } from "@/i18n/server";
import { I18nProvider } from "@/i18n/provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MenuCloser } from "@/components/layout/menu-closer";
import { themeScript } from "@/components/layout/theme-toggle";
import { ConsentBanner } from "@/components/consent/consent-banner";
import { ThirdPartyScripts } from "@/components/consent/third-party-scripts";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo/json-ld";
import { consentDefaultsScript } from "@/features/analytics/consent";

type Props = { children: ReactNode; params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getDict(toLocale((await params).lang));
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: `${siteConfig.name} – ${t.site.tagline}`, template: `%s | ${siteConfig.name}` },
    description: t.site.description,
    applicationName: siteConfig.name,
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/icon-192.png", type: "image/png", sizes: "192x192" }],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.webmanifest",
    verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0f1a" },
  ],
};

export default async function LocaleLayout({ children, params }: Props) {
  const locale = toLocale((await params).lang);
  const t = getDict(locale);
  return (
    <html lang={localeMeta[locale].htmlLang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: consentDefaultsScript }} />
      </head>
      <body className="min-h-dvh">
        <I18nProvider locale={locale} dict={t}>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg">
            {t.nav.skip}
          </a>
          <Header locale={locale} t={t} />
          <main id="main">{children}</main>
          <Footer locale={locale} t={t} />
          <MenuCloser />
          <ConsentBanner />
          <ThirdPartyScripts />
        </I18nProvider>
        <JsonLd data={[organizationSchema(), websiteSchema(localeMeta[locale].hreflang)]} />
      </body>
    </html>
  );
}
