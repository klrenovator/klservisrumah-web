/**
 * Middleware locale-tree coverage gate (Fix Wave 28, 2026-08-31).
 *
 * BACKGROUND — found during the Wave-28 LIVE production verification:
 * `/ms/harga` returned **404** and `/zh/pricing` 301-stripped to the English
 * `/pricing` on the production edge, even though both localized pricing hubs
 * are built, listed in `sitemap.xml` and linked from the footer. Root cause:
 * the pages exist (`app/(ms)/ms/harga`, `app/(zh)/zh/pricing`) but the
 * middleware `REAL_LOCALE_TREES` whitelist was never extended for them, so
 * the edge treated the URLs as language-switching duplicates of English and
 * 301-stripped the locale prefix. It is exactly the bug Wave 25 fixed by
 * hand for `/ms/search` + `/zh/search` — one entry at a time, with no
 * systematic check, so the next real tree (harga/pricing) shipped broken
 * AGAIN. Whitelisting by whack-a-mole does not work; this gate ends the
 * pattern.
 *
 * WHAT IT CHECKS (both directions, so the list can neither lag nor rot):
 *   1. Every depth-1 `/ms/<tree>` and `/zh/<tree>` app route that really
 *      renders pages MUST be present in `REAL_LOCALE_TREES` (directly or via
 *      the `POD_LOCALE_TREES` spread).
 *   2. Every entry in `REAL_LOCALE_TREES` MUST map to a real depth-1 route
 *      that renders pages (catches stale/deleted trees).
 *
 * Depth-1 rules the gate relies on: the middleware matcher is prefix-based
 * (`pathname === tree || pathname.startsWith(tree + "/")`), so whitelisting
 * `/ms/guides` also covers `/ms/guides/maintenance`; dynamic segments
 * (`[slug]`, `[...unmatched]`) are not trees. The stale-entry check is
 * subpath-aware: a deep whitelist entry (`/ms/guides/maintenance`, from
 * `POD_LOCALE_TREES`) is valid when that exact route subpath exists and
 * renders pages.
 *
 * Run: automatically inside `npm run prebuild` (`audit:locale-trees`).
 */
import fs from "node:fs";
import path from "node:path";
import { POD_LOCALE_TREES } from "@/config/pod-family-paths";

const ROOT = process.cwd();

/** Depth-1 route trees under a locale route group that render at least one page. */
function localeTrees(groupDir: string, localePrefix: string): string[] {
  const abs = path.join(ROOT, groupDir, localePrefix);
  if (!fs.existsSync(abs)) return [];
  const trees: string[] = [];
  for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("[")) continue; // dynamic catch-alls are not trees
    if (entry.name.startsWith("_") || entry.name.startsWith("(")) continue;
    if (hasPage(path.join(abs, entry.name))) trees.push(`/${localePrefix}/${entry.name}`);
  }
  return trees.sort();
}

function hasPage(dir: string): boolean {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (hasPage(p)) return true;
    } else if (entry.isFile() && /^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
      return true;
    }
  }
  return false;
}

/** The explicit (non-spread) entries of REAL_LOCALE_TREES in middleware.ts. */
function explicitWhitelist(): string[] {
  const src = fs.readFileSync(path.join(ROOT, "middleware.ts"), "utf8");
  const start = src.indexOf("const REAL_LOCALE_TREES");
  if (start === -1) {
    console.error("❌ REAL_LOCALE_TREES not found in middleware.ts");
    process.exit(1);
  }
  const end = src.indexOf("] as const;", start);
  const block = src.slice(start, end);
  return [...block.matchAll(/"(\/ms\/[^"]+|\/zh\/[^"]+)"/g)].map((m) => m[1]).sort();
}

const expected = [...localeTrees("app/(ms)", "ms"), ...localeTrees("app/(zh)", "zh")];
const allowed = [...explicitWhitelist(), ...POD_LOCALE_TREES].sort();

const missing = expected.filter((tree) => !allowed.includes(tree));

/** A whitelist entry is stale only when its exact route subpath does not render pages. */
function whitelistEntryIsStale(tree: string): boolean {
  if (expected.includes(tree)) return false; // top-level tree — primary check passed
  const m = /^\/(ms|zh)\/(.+)$/.exec(tree);
  if (!m) return true;
  const sub = path.join(ROOT, `app/(${m[1]})`, m[1], m[2]);
  return !(fs.existsSync(sub) && fs.statSync(sub).isDirectory() && hasPage(sub));
}
const stale = allowed.filter(whitelistEntryIsStale);

console.log("🌳 Middleware locale-tree coverage audit");
console.log(`   Real /ms|/zh route trees found: ${expected.length}`);
console.log(`   Whitelisted passthrough trees:  ${allowed.length}`);

let failed = false;
if (missing.length > 0) {
  failed = true;
  console.error(`\n❌ ${missing.length} real localized route tree(s) NOT whitelisted in middleware`);
  console.error("   → the edge will 301-strip their locale prefix (404 / wrong-language redirect):");
  for (const tree of missing) console.error(`     ${tree}`);
  console.error("   Fix: add them to REAL_LOCALE_TREES in middleware.ts");
}
if (stale.length > 0) {
  failed = true;
  console.error(`\n❌ ${stale.length} stale REAL_LOCALE_TREES entrie(s) with no real route:`);
  for (const tree of stale) console.error(`     ${tree}`);
  console.error("   Fix: remove them from middleware.ts (or restore the route)");
}

if (failed) process.exit(1);
console.log("   ✅ every real localized tree is whitelisted; no stale whitelist entries");
for (const tree of expected) console.log(`      ${tree}`);
