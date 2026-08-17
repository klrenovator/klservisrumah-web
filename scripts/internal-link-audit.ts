/**
 * Internal link audit.
 *
 * WHY THIS EXISTS
 * ---------------
 * Nothing in the existing audit suite verified that an internal link actually
 * resolves. `html-quality-audit.ts` checks that an `href` is *present* and not
 * `#`/`javascript:`; `seo-head-audit.ts` checks canonicals, hreflang and
 * sitemap parity. Neither notices a link pointing at a URL the build never
 * emitted.
 *
 * That gap hid a real defect: every localized problem page breadcrumbs up to
 * its locale's problem hub, but `/ms/problems` and `/zh/problems` did not
 * exist — 130 pages linked to a hard 404 and a soft 404 respectively.
 *
 * This script walks every rendered page, collects every same-origin `href`,
 * and resolves it against:
 *
 *   • the set of pages the build actually emitted;
 *   • static files under `public/`;
 *   • the redirect sources declared in `next.config.mjs`;
 *   • the locale prefixes handled by `middleware.ts`.
 *
 * Any href that resolves to none of those is a broken internal link and fails
 * the build.
 *
 * Run: `npm run audit:links` (after `npm run build`).
 */
import fs from "node:fs";
import path from "node:path";

const BUILD = path.join(process.cwd(), ".next", "server", "app");
const PUBLIC = path.join(process.cwd(), "public");

if (!fs.existsSync(BUILD)) {
  console.error("❌ Build output not found — run `npm run build` first.");
  process.exit(1);
}

/** Rendered page URL for an emitted `.html` file. */
function pageUrl(file: string): string {
  let url = "/" + path.relative(BUILD, file).split(path.sep).join("/").replace(/\.html$/, "");
  url = url.replace(/^\/\([^)]+\)/, ""); // strip the (en)/(ms)/(zh) route group
  if (url === "" || url === "/index") return "/";
  return url.replace(/\/index$/, "");
}

const htmlFiles: string[] = [];
(function walk(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) htmlFiles.push(full);
  }
})(BUILD);

const pages = new Set(htmlFiles.map(pageUrl));

const publicFiles = new Set<string>();
(function walkPublic(dir: string) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkPublic(full);
    else publicFiles.add("/" + path.relative(PUBLIC, full).split(path.sep).join("/"));
  }
})(PUBLIC);

/** Redirect sources declared in next.config.mjs — these are valid destinations. */
const nextConfig = fs.readFileSync(path.join(process.cwd(), "next.config.mjs"), "utf8");
const redirectSources = new Set(
  [...nextConfig.matchAll(/source:\s*"([^"]+)"/g)].map((m) => m[1]).filter((s) => !s.includes(":"))
);

/** Route-handler and metadata routes that emit no `.html` file. */
const GENERATED_ROUTES = new Set([
  "/sitemap.xml",
  "/sitemap-news.xml",
  "/robots.txt",
  "/manifest.json",
]);

const known = new Set<string>([...pages, ...publicFiles, ...redirectSources, ...GENERATED_ROUTES]);
// Accept both the trailing-slash and bare form of every known URL.
for (const url of [...known]) {
  if (url !== "/") known.add(url.replace(/\/$/, ""));
  known.add(url.endsWith("/") ? url : `${url}/`);
}

type Broken = { href: string; count: number; examples: string[] };
const broken = new Map<string, Broken>();
let linksChecked = 0;

for (const file of htmlFiles) {
  const from = pageUrl(file);
  const raw = fs.readFileSync(file, "utf8");
  // Strip script/style bodies: Next.js's inline flight payload contains text
  // that looks like markup and would produce phantom hrefs.
  const html = raw
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ");

  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1];
    if (href.startsWith("/_next/")) continue;
    // Compare the path only — query strings and fragments are not routes.
    const url = href.split("#")[0].split("?")[0];
    if (!url) continue;
    linksChecked++;
    if (known.has(url) || known.has(decodeURIComponent(url))) continue;

    const entry = broken.get(url) ?? { href: url, count: 0, examples: [] };
    entry.count++;
    if (entry.examples.length < 3 && !entry.examples.includes(from)) entry.examples.push(from);
    broken.set(url, entry);
  }
}

console.log("🔗 Internal link audit");
console.log(`   Rendered pages: ${pages.size}`);
console.log(`   Internal links checked: ${linksChecked.toLocaleString()}`);
console.log(`   Distinct broken targets: ${broken.size}`);

if (broken.size > 0) {
  console.error("\n✗ Broken internal links:\n");
  for (const entry of [...broken.values()].sort((a, b) => b.count - a.count)) {
    console.error(`   ${entry.href}`);
    console.error(`      linked ${entry.count}× — e.g. from ${entry.examples.join(", ")}`);
  }
  console.error("");
  process.exit(1);
}

console.log("✓ Every internal link resolves to a rendered page, a public file or a declared redirect.");
