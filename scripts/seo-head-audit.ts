/**
 * Full-corpus technical SEO head audit.
 *
 * Validates the rendered HTML rather than source declarations: titles,
 * descriptions, canonicals, robots, H1s, Open Graph, Twitter cards, hreflang,
 * sitemap membership and duplicate metadata across canonical indexable URLs.
 */
import fs from "node:fs";
import path from "node:path";
import sitemap from "../app/(en)/sitemap.ts";

const BUILD_DIR = path.join(process.cwd(), ".next", "server", "app");
const ORIGIN = "https://www.klservisrumah.my";
const expectedNoindex = new Set(["/_not-found", "/ms", "/zh"]);

type Page = {
  url: string;
  title: string;
  description: string;
  canonical: string;
  robots: string;
  h1: string;
  h1Count: number;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  hreflangCount: number;
  html: string;
};

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : entry.isFile() && entry.name.endsWith(".html") ? [file] : [];
  });
}

function pageUrl(file: string): string {
  let relative = path.relative(BUILD_DIR, file).replace(/\\/g, "/").replace(/\.html$/, "");
  relative = relative.replace(/^\((en|ms|zh)\)\//, "");
  if (relative === "index") return "/";
  if (relative.endsWith("/index")) relative = relative.slice(0, -6);
  return `/${relative}`;
}

function decodeHtml(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function content(html: string, pattern: RegExp): string {
  const raw = pattern.exec(html)?.[1] ?? "";
  return decodeHtml(raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function parse(file: string): Page {
  const html = fs.readFileSync(file, "utf8");
  const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  return {
    url: pageUrl(file),
    title: content(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    description: content(html, /<meta\b[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i),
    canonical: content(html, /<link\b[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i),
    robots: content(html, /<meta\b[^>]*name="robots"[^>]*content="([^"]*)"[^>]*>/i),
    h1: h1Matches[0] ? content(h1Matches[0][0], /<h1\b[^>]*>([\s\S]*?)<\/h1>/i) : "",
    h1Count: h1Matches.length,
    ogTitle: content(html, /<meta\b[^>]*property="og:title"[^>]*content="([^"]*)"[^>]*>/i),
    ogDescription: content(html, /<meta\b[^>]*property="og:description"[^>]*content="([^"]*)"[^>]*>/i),
    ogUrl: content(html, /<meta\b[^>]*property="og:url"[^>]*content="([^"]*)"[^>]*>/i),
    ogImage: content(html, /<meta\b[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i),
    twitterTitle: content(html, /<meta\b[^>]*name="twitter:title"[^>]*content="([^"]*)"[^>]*>/i),
    twitterDescription: content(html, /<meta\b[^>]*name="twitter:description"[^>]*content="([^"]*)"[^>]*>/i),
    twitterImage: content(html, /<meta\b[^>]*name="twitter:image"[^>]*content="([^"]*)"[^>]*>/i),
    hreflangCount: (html.match(/<link\b[^>]*hreflang="[^"]+"[^>]*>/gi) ?? []).length,
    html
  };
}

function normalized(value: string): string {
  try {
    const url = new URL(value, ORIGIN);
    const pathname = decodeURIComponent(url.pathname).replace(/\/$/, "");
    return `${url.origin}${pathname}`;
  } catch {
    return value.replace(/\/$/, "");
  }
}

function expectedCanonical(page: Page): string {
  return `${ORIGIN}${page.url === "/" ? "" : page.url}`;
}

function isNoindex(page: Page): boolean {
  return page.robots.toLowerCase().includes("noindex");
}

function isSelfCanonical(page: Page): boolean {
  return normalized(page.canonical) === normalized(expectedCanonical(page));
}

function duplicateGroups(pages: Page[], field: "title" | "description") {
  const grouped = new Map<string, string[]>();
  for (const page of pages.filter((item) => !isNoindex(item) && isSelfCanonical(item))) {
    const key = page[field];
    if (!key) continue;
    grouped.set(key, [...(grouped.get(key) ?? []), page.url]);
  }
  return [...grouped.entries()].filter(([, urls]) => urls.length > 1);
}

if (!fs.existsSync(BUILD_DIR)) {
  console.error("Build output not found. Run `npm run build` first.");
  process.exit(1);
}

const pages = walk(BUILD_DIR).sort().map(parse);
const failures: string[] = [];
const warnings: string[] = [];

for (const page of pages) {
  const noindex = isNoindex(page);
  const selfCanonical = isSelfCanonical(page);

  if (!page.title) failures.push(`${page.url}: missing title`);
  if (!page.description) failures.push(`${page.url}: missing meta description`);
  if (!noindex && !page.canonical) failures.push(`${page.url}: missing canonical`);
  if (!page.robots) failures.push(`${page.url}: missing robots directive`);
  if (page.url !== "/_not-found" && page.h1Count !== 1) {
    failures.push(`${page.url}: expected one H1, found ${page.h1Count}`);
  }

  // Social metadata must be complete and page-specific on every indexable
  // page. Redirect/noindex locale scaffolds and the framework 404 may inherit
  // layout social tags; they are intentionally excluded from social sharing.
  if (!noindex) {
    if (!page.ogTitle || !page.ogDescription || !page.ogUrl || !page.ogImage) {
      failures.push(`${page.url}: incomplete Open Graph metadata`);
    }
    if (!page.twitterTitle || !page.twitterDescription || !page.twitterImage) {
      failures.push(`${page.url}: incomplete Twitter metadata`);
    }
    if (page.ogTitle && page.ogTitle !== page.title) failures.push(`${page.url}: og:title differs from title`);
    if (page.ogDescription && page.ogDescription !== page.description) failures.push(`${page.url}: og:description differs from description`);
    if (page.twitterTitle && page.twitterTitle !== page.title) failures.push(`${page.url}: twitter:title differs from title`);
    if (page.twitterDescription && page.twitterDescription !== page.description) failures.push(`${page.url}: twitter:description differs from description`);
    if (page.canonical && page.ogUrl && normalized(page.ogUrl) !== normalized(page.canonical)) {
      failures.push(`${page.url}: og:url differs from canonical`);
    }
  }

  const marketRateHead = [page.title, page.description, page.ogTitle, page.ogDescription, page.twitterTitle, page.twitterDescription, page.h1]
    .join(" ");
  if (/market[- ]rate/i.test(marketRateHead)) failures.push(`${page.url}: market-rate appears in SEO metadata or H1`);

  if (noindex && !expectedNoindex.has(page.url)) failures.push(`${page.url}: unexpected noindex`);
  if (!noindex && expectedNoindex.has(page.url)) failures.push(`${page.url}: expected noindex is missing`);

  if (!noindex && !selfCanonical) {
    // BP-1 phase 1 removed the last cross-page canonical on the site: the 1,073
    // `/suburbs/<twin>/<svc>` pages that used to canonicalise to
    // `/areas/<twin>/<svc>` are now 301s instead of pages, so the old
    // `/suburbs/` exemption here is obsolete. Every indexable page must be
    // self-canonical — a canonical pointing elsewhere now means a duplicate has
    // crept back in.
    failures.push(`${page.url}: unexpected cross-page canonical -> ${page.canonical}`);
    if (page.hreflangCount > 0) failures.push(`${page.url}: canonicalized page emits hreflang`);
  }
  if (!noindex && selfCanonical && page.hreflangCount === 0) failures.push(`${page.url}: self-canonical page has no hreflang`);

  if (page.title.length > 65) warnings.push(`${page.url}: title is ${page.title.length} characters`);
  if (page.description.length > 180) warnings.push(`${page.url}: description is ${page.description.length} characters`);
}

const duplicateTitles = duplicateGroups(pages, "title");
const duplicateDescriptions = duplicateGroups(pages, "description");
for (const [value, urls] of duplicateTitles) {
  failures.push(`duplicate title (${urls.length}): "${value}" -> ${urls.slice(0, 4).join(", ")}`);
}
for (const [value, urls] of duplicateDescriptions) {
  failures.push(`duplicate description (${urls.length}): "${value}" -> ${urls.slice(0, 4).join(", ")}`);
}

const sitemapUrls = new Set(sitemap().map((entry) => normalized(entry.url)));
const indexableUrls = new Set(
  pages
    .filter((page) => !isNoindex(page) && isSelfCanonical(page))
    .map((page) => normalized(expectedCanonical(page)))
);
for (const url of sitemapUrls) {
  if (!indexableUrls.has(url)) failures.push(`sitemap URL is not a rendered self-canonical indexable page: ${url}`);
}
for (const url of indexableUrls) {
  if (!sitemapUrls.has(url)) failures.push(`self-canonical indexable page missing from sitemap: ${url}`);
}

const canonicalized = pages.filter((page) => !isNoindex(page) && !isSelfCanonical(page)).length;
const noindex = pages.filter(isNoindex).length;
console.log("Technical SEO head audit");
console.log(`  Rendered pages: ${pages.length}`);
console.log(`  Self-canonical indexable: ${indexableUrls.size}`);
console.log(`  Canonicalized supporting pages: ${canonicalized}`);
console.log(`  Noindex pages: ${noindex}`);
console.log(`  Sitemap URLs: ${sitemapUrls.size}`);
console.log(`  Duplicate indexable titles: ${duplicateTitles.length}`);
console.log(`  Duplicate indexable descriptions: ${duplicateDescriptions.length}`);
console.log(`  Warnings: ${warnings.length}`);
for (const warning of warnings.slice(0, 12)) console.log(`    WARN ${warning}`);

if (failures.length > 0) {
  console.error(`  Failures: ${failures.length}`);
  for (const failure of failures.slice(0, 40)) console.error(`    FAIL ${failure}`);
  if (failures.length > 40) console.error(`    ...and ${failures.length - 40} more`);
  process.exit(1);
}

console.log("  PASS: rendered metadata, canonical, social, hreflang, robots and sitemap checks passed.");
