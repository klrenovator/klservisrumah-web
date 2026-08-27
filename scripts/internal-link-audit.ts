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
 * This script has two phases:
 *
 * 1. **Rendered-HTML scan** — walks every emitted page, collects every
 *    same-origin `href`, and resolves it against:
 *
 *      • the set of pages the build actually emitted;
 *      • static files under `public/`;
 *      • the redirect sources declared in `next.config.mjs`;
 *      • the locale prefixes handled by `middleware.ts`.
 *
 * 2. **Source scan** — client-only UI (the navbar mega-menus, drawers, modals)
 *    renders its links on interaction, so phase 1 never sees them. That hid a
 *    second real defect: the Renovation mega-menu's "Condo Renovation"
 *    shortcut pointed at `/services/house-renovation/condo-renovation`, which
 *    404s — for months, across many green audits. Phase 2 therefore scans the
 *    `app/` and `components/` source for *fully static* internal link targets
 *    (`href="/…"`, `href={'/…'}`, `` href={`/…`} `` without interpolation, and
 *    `router.push('/…')`) and resolves them against the same known set.
 *    Dynamically-built paths (template literals with `${…}`) are skipped —
 *    they are data-driven and already covered by the rendered-HTML scan.
 *
 * Any href that resolves to none of the known targets is a broken internal
 * link and fails the build.
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

/** Resolve a raw link target against everything the build can serve. */
const MIDDLEWARE_LOCALES = ["ms", "zh"];
function isKnown(raw: string): boolean {
  // Compare the path only — query strings and fragments are not routes.
  const url = raw.split("#")[0].split("?")[0];
  if (!url) return true; // pure "#anchor" / "?query" — not a route change
  if (known.has(url) || known.has(decodeURIComponent(url))) return true;
  // Middleware 301s deep locale URLs (/ms/X → /X with the locale cookie set)
  // unless X belongs to a REAL_LOCALE_TREES subtree (which are emitted pages
  // and already known above). The link is valid exactly when the post-redirect
  // target resolves — so a locale-prefixed typo still fails the audit.
  for (const locale of MIDDLEWARE_LOCALES) {
    if (url === `/${locale}`) return true; // scaffold landing (sets locale, redirects to /)
    if (url.startsWith(`/${locale}/`)) {
      const stripped = url.slice(`/${locale}`.length) || "/";
      if (known.has(stripped) || known.has(decodeURIComponent(stripped))) return true;
    }
  }
  // The admin area was removed (owner decision, 2026-08-27); any stale /admin
  // link now 404s against the static route universe, so no special case remains.
  return false;
}

/* ── Phase 1 — rendered-HTML scan ──────────────────────────────────────── */

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
    if (match[1].startsWith("/_next/")) continue; // build-served assets
    linksChecked++;
    const url = match[1].split("#")[0].split("?")[0];
    if (!url) continue;
    if (isKnown(match[1])) continue;

    const entry = broken.get(url) ?? { href: url, count: 0, examples: [] };
    entry.count++;
    if (entry.examples.length < 3 && !entry.examples.includes(from)) entry.examples.push(from);
    broken.set(url, entry);
  }
}

/* ── Phase 2 — source scan (client-only links never hit the HTML) ──────── */

const SRC_ROOTS = ["app", "components"];
type SourceLink = { file: string; line: number; raw: string; context: string };

/** Fully-static internal link targets, extracted from JSX/TS source. */
function extractStaticLinks(source: string, file: string): SourceLink[] {
  const links: SourceLink[] = [];
  const lineStarts: number[] = [0];
  for (let i = 0; i < source.length; i++) if (source[i] === "\n") lineStarts.push(i + 1);
  const lineOf = (index: number) => {
    let lo = 0, hi = lineStarts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (lineStarts[mid] <= index) lo = mid;
      else hi = mid - 1;
    }
    return lo + 1;
  };

  // href="/…" · href='/…' · href={"/…"} · href={`/…`} (no interpolation)
  // router.push("/…") · router.push(`/…`) — static programmatic navigation.
  // `\b` keeps `hreflang=` from matching `href=`.
  const patterns = [
    /\bhref\s*=\s*"([^"]*)"/g,
    /\bhref\s*=\s*'([^']*)'/g,
    /\bhref\s*=\s*\{\s*"([^"]*)"\s*\}/g,
    /\bhref\s*=\s*\{\s*`([^`]*)`\s*\}/g,
    /\bpush\s*\(\s*"([^"]*)"/g,
    /\bpush\s*\(\s*`([^`]*)`/g,
  ];

  for (const regex of patterns) {
    for (const match of source.matchAll(regex)) {
      const raw = match[1];
      // Only same-origin internal targets; skip build assets.
      if (!raw.startsWith("/") || raw.startsWith("/_next/")) continue;
      // Interpolated template literals are data-driven — covered by phase 1.
      if (raw.includes("${")) continue;
      links.push({ file, line: lineOf(match.index ?? 0), raw, context: match[0].slice(0, 80) });
    }
  }
  return links;
}

const sourceLinks: SourceLink[] = [];
for (const root of SRC_ROOTS) {
  const rootPath = path.join(process.cwd(), root);
  if (!fs.existsSync(rootPath)) continue;
  (function walkSrc(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walkSrc(full);
      else if (/\.(tsx?|mts)$/.test(entry.name)) {
        sourceLinks.push(...extractStaticLinks(fs.readFileSync(full, "utf8"), path.relative(process.cwd(), full)));
      }
    }
  })(rootPath);
}

const sourceBroken = sourceLinks.filter((link) => !isKnown(link.raw));

console.log("🔗 Internal link audit");
console.log(`   Rendered pages: ${pages.size}`);
console.log(`   [1/2] Rendered-HTML links checked: ${linksChecked.toLocaleString()}`);
console.log(`   [2/2] Source static links checked: ${sourceLinks.length} (client-only UI: mega-menus, drawers, modals)`);
console.log(`   Distinct broken targets: ${broken.size}` + (sourceBroken.length ? ` (+ ${sourceBroken.length} in source)` : ""));

let failed = false;

if (broken.size > 0) {
  console.error("\n✗ Broken internal links (rendered HTML):\n");
  for (const entry of [...broken.values()].sort((a, b) => b.count - a.count)) {
    console.error(`   ${entry.href}`);
    console.error(`      linked ${entry.count}× — e.g. from ${entry.examples.join(", ")}`);
  }
  failed = true;
}

if (sourceBroken.length > 0) {
  console.error("\n✗ Broken static links in source (never visible to the rendered-HTML scan):\n");
  for (const link of sourceBroken) {
    console.error(`   ${link.raw}`);
    console.error(`      at ${link.file}:${link.line} — ${link.context}`);
  }
  failed = true;
}

if (failed) {
  console.error("");
  process.exit(1);
}

console.log("✓ Every internal link — rendered and hardcoded-in-source — resolves to a rendered page, a public file or a declared redirect.");
