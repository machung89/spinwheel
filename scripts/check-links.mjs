// Crawls a running site starting from the sitemap and verifies every internal link,
// image and canonical URL returns 200, and that each HTML page has exactly one <h1>,
// a <title>, a meta description and a canonical link.
// Usage: node scripts/check-links.mjs [baseUrl]   (default http://localhost:3000)
const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://spinwheelge.com").replace(/\/$/, "");

const toLocal = (u) => (u.startsWith(siteUrl) ? base + u.slice(siteUrl.length) : u);
const seen = new Map();
const problems = [];
const titles = new Map();
const descriptions = new Map();

async function check(url, from) {
  if (seen.has(url)) return;
  seen.set(url, null);
  let res;
  try {
    res = await fetch(url, { redirect: "manual" });
  } catch (e) {
    problems.push(`${url} (from ${from}): ${e.message}`);
    return;
  }
  seen.set(url, res.status);
  if (res.status !== 200) {
    problems.push(`${res.status} ${url} (from ${from})${res.headers.get("location") ? " -> " + res.headers.get("location") : ""}`);
    return;
  }
  if (!(res.headers.get("content-type") || "").includes("text/html")) return;
  const html = await res.text();
  const path = url.slice(base.length);
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) problems.push(`${path}: expected 1 <h1>, found ${h1}`);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const isNoindex = /<meta name="robots" content="noindex/.test(html);
  if (!title) problems.push(`${path}: missing <title>`);
  if (!isNoindex) {
    if (!desc) problems.push(`${path}: missing meta description`);
    if (!canonical) problems.push(`${path}: missing canonical`);
    else if (toLocal(canonical) !== url) problems.push(`${path}: canonical ${canonical} doesn't match URL`);
    if (title) titles.set(title, [...(titles.get(title) || []), path]);
    if (desc) descriptions.set(desc, [...(descriptions.get(desc) || []), path]);
  }
  const links = [...html.matchAll(/(?:href|src)="([^"#]+)/g)].map((m) => m[1]).filter((h) => h.startsWith("/") && !h.startsWith("//"));
  for (const l of new Set(links)) await check(base + l.replace(/&amp;/g, "&"), path);
}

const sitemap = await (await fetch(base + "/sitemap.xml")).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => toLocal(m[1]));
console.log(`Sitemap: ${urls.length} URLs`);
for (const u of urls) await check(u, "sitemap");
for (const [t, paths] of titles) if (paths.length > 1) problems.push(`Duplicate title "${t}": ${paths.join(", ")}`);
for (const [d, paths] of descriptions) if (paths.length > 1) problems.push(`Duplicate description on: ${paths.join(", ")}`);

const robots = await fetch(base + "/robots.txt");
if (robots.status !== 200) problems.push(`robots.txt returned ${robots.status}`);
const missing = await fetch(base + "/this-page-does-not-exist/");
if (missing.status !== 404) problems.push(`Unknown URL returned ${missing.status}, expected 404`);

console.log(`Checked ${seen.size} URLs`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):\n` + problems.join("\n"));
  process.exit(1);
}
console.log("All links OK, every page has one <h1>, unique titles/descriptions and a matching canonical.");
