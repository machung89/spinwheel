import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  // Two root layouts ((en) and (intl)/[lang]) need a global 404 document.
  experimental: { globalNotFound: true },
  async redirects() {
    return [
      // Common alternate spellings and legacy paths -> canonical landing pages (308).
      // English is served unprefixed; /en/... is never a real route.
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path+", destination: "/:path+/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/wheel", destination: "/spin-the-wheel/", permanent: true },
      { source: "/spin-wheel", destination: "/spin-the-wheel/", permanent: true },
      { source: "/random-name-picker", destination: "/wheel-of-names/", permanent: true },
      { source: "/name-wheel", destination: "/wheel-of-names/", permanent: true },
      { source: "/yes-no-wheel", destination: "/yes-or-no-wheel/", permanent: true },
      { source: "/random-team-generator", destination: "/team-generator/", permanent: true },
      { source: "/flip-a-coin", destination: "/coin-flip/", permanent: true },
      { source: "/roll-dice", destination: "/dice-roller/", permanent: true },
      { source: "/templates/education", destination: "/templates/classroom/", permanent: true },
      { source: "/templates/entertainment", destination: "/templates/movies/", permanent: true },
      { source: "/privacy", destination: "/privacy-policy/", permanent: true },
      { source: "/terms", destination: "/terms-of-service/", permanent: true },
    ];
  },
  async headers() {
    // Hashed /_next/static assets already get immutable caching; see also public/_headers for Workers assets.
    return [
      { source: "/:path*", headers: securityHeaders },
    ];
  },
};

export default nextConfig;
