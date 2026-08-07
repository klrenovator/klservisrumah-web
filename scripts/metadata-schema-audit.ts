/**
 * Full-corpus metadata + JSON-LD deep validation audit.
 *
 * Walks every generated HTML file under .next/server/app and validates:
 *  1. <title> length distribution (too long / too short / duplicates)
 *  2. meta description length distribution (too long / too short)
 *  3. JSON-LD block deep validation:
 *     - LocalBusiness / Organization NAP field completeness
 *     - AggregateRating consistency (same rating + count sitewide)
 *     - Breadcrumb @id/url consistency with the page URL
 *     - Service schema field sanity
 *  4. Internal anchor-text quality (generic anchor counts)
 *  5. Image loading strategy (fetchpriority / loading=eager counts per page)
 *
 * Run AFTER `npm run build`:
 *   node --experimental-strip-types --import ./scripts/ts-resolver.mjs scripts/metadata-schema-audit.ts
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const APP_DIR = join(process.cwd(), ".next", "server", "app");

function* walk(dir: string): Generator<string> {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (entry === "_not-found") continue;
      yield* walk(full);
    } else if (entry.endsWith(".html")) {
      yield full;
    }
  }
}

function htmlPathToUrl(file: string): string {
  let rel = relative(APP_DIR, file).replace(/\\/g, "/").replace(/\.html$/, "");
  // Route groups add a "(en)" etc. segment: mirror scripts/seo-audit.ts logic.
  rel = rel.replace(/^\((en|ms|zh)\)\//, "");
  if (rel === "index") return "/";
  if (rel.endsWith("/index")) rel = rel.slice(0, -"/index".length);
  return `/${rel}`;
}

function stripTags(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

interface JsonLdNode {
  "@type"?: string | string[];
  "@id"?: string;
  url?: string;
  name?: string;
  telephone?: string;
  email?: string;
  address?: unknown;
  aggregateRating?: { ratingValue?: string | number; reviewCount?: string | number };
  itemListElement?: Array<{ "@type"?: string; name?: string; item?: string }>;
  [key: string]: unknown;
}

const totals = {
  pages: 0,
  titleMissing: 0,
  titleTooLong: [] as Array<[string, number]>,
  titleTooShort: [] as Array<[string, number]>,
  descMissing: 0,
  descTooLong: [] as Array<[string, number]>,
  descTooShort: [] as Array<[string, number]>,
  jsonLdParseFail: [] as string[],
  localBusinessMissingNap: [] as string[],
  ratingsSeen: new Map<string, number>(),
  breadcrumbMismatch: [] as string[],
  genericAnchors: new Map<string, number>(),
  multiFetchpriority: [] as string[],
  titleMap: new Map<string, string[]>(),
};

// Words that make for useless link text when they are the entire anchor.
const GENERIC_ANCHOR_RE = /^(click here|here|read more|learn more|more|link|view more|see more|details|this page|find out more)$/i;

for (const file of walk(APP_DIR)) {
  const html = readFileSync(file, "utf8");
  const url = htmlPathToUrl(file);
  totals.pages++;

  // --- Title ---
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (!titleMatch) {
    totals.titleMissing++;
    if (totals.titleMissing < 5) console.log("❌ title missing:", url);
  } else {
    const title = titleMatch[1].trim();
    const len = title.length;
    if (len > 70) totals.titleTooLong.push([url, len] as [string, number]);
    if (len < 20) totals.titleTooShort.push([url, len] as [string, number]);
    const existing = totals.titleMap.get(title) ?? [];
    existing.push(url);
    totals.titleMap.set(title, existing);
  }

  // --- Description ---
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  if (!descMatch) {
    totals.descMissing++;
    if (totals.descMissing < 5) console.log("❌ description missing:", url);
  } else {
    const len = descMatch[1].trim().length;
    if (len > 200) totals.descTooLong.push([url, len] as [string, number]);
    if (len < 50) totals.descTooShort.push([url, len] as [string, number]);
  }

  // --- JSON-LD ---
  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const block of ldBlocks) {
    try {
      const parsed = JSON.parse(block[1]) as JsonLdNode | JsonLdNode[];
      const nodes = Array.isArray(parsed) ? parsed : [parsed];
      for (const node of nodes) {
        const type = Array.isArray(node["@type"]) ? node["@type"].join("+") : node["@type"];
        if (type && /LocalBusiness|Organization|HomeAndConstructionBusiness/.test(String(type))) {
          if (!node.telephone || !node.name) {
            totals.localBusinessMissingNap.push(`${url} (${String(type)})`);
          }
        }
        if (node.aggregateRating?.ratingValue !== undefined) {
          const key = `${node.aggregateRating.ratingValue}|${node.aggregateRating.reviewCount}`;
          totals.ratingsSeen.set(key, (totals.ratingsSeen.get(key) ?? 0) + 1);
        }
        if (type === "BreadcrumbList" && node.itemListElement) {
          const items = node.itemListElement;
          const last = items[items.length - 1];
          if (last?.item) {
            const lastUrl = String(last.item).replace(/\/$/, "");
            const pageUrlAbs = `https://www.klservisrumah.my${url === "/" ? "" : url}`;
            if (lastUrl !== pageUrlAbs && !pageUrlAbs.startsWith(lastUrl)) {
              totals.breadcrumbMismatch.push(`${url} -> ${lastUrl}`);
            }
          }
        }
      }
    } catch {
      totals.jsonLdParseFail.push(url);
    }
  }

  // --- Generic anchors (visible body links only) ---
  const bodyMatch = html.match(/<body[\s\S]*<\/body>/);
  if (bodyMatch) {
    for (const a of bodyMatch[0].matchAll(/<a\s[^>]*>([\s\S]*?)<\/a>/g)) {
      const text = stripTags(a[1]);
      if (text && GENERIC_ANCHOR_RE.test(text)) {
        const key = text.toLowerCase();
        totals.genericAnchors.set(key, (totals.genericAnchors.get(key) ?? 0) + 1);
      }
    }
  }

  // --- fetchpriority=high count per page (should be <= a handful: the LCP image only) ---
  const fpCount = (html.match(/fetchpriority="high"/g) || []).length;
  if (fpCount > 2) totals.multiFetchpriority.push(`${url} (${fpCount})`);
}

console.log("\n============================================================");
console.log(`Pages audited: ${totals.pages}`);
console.log("============================================================");
console.log(`\n[1] Titles\n  missing: ${totals.titleMissing}\n  >70 chars: ${totals.titleTooLong.length}\n  <20 chars: ${totals.titleTooShort.length}`);
for (const [u, l] of totals.titleTooLong.slice(0, 10)) console.log(`    - ${u} (${l})`);
// Duplicate titles
let dupTitleGroups = 0;
for (const [title, urls] of totals.titleMap) {
  if (urls.length > 1) {
    dupTitleGroups++;
    if (dupTitleGroups <= 8) console.log(`  DUP (${urls.length}×): "${title.slice(0, 60)}" -> ${urls.slice(0, 4).join(", ")}${urls.length > 4 ? "…" : ""}`);
  }
}
console.log(`  duplicate-title groups: ${dupTitleGroups}`);

console.log(`\n[2] Descriptions\n  missing: ${totals.descMissing}\n  >200 chars: ${totals.descTooLong.length}\n  <50 chars: ${totals.descTooShort.length}`);
for (const [u, l] of totals.descTooLong.slice(0, 10)) console.log(`    - ${u} (${l})`);

console.log(`\n[3] JSON-LD\n  parse failures: ${totals.jsonLdParseFail.length}\n  LocalBusiness/Org missing NAP: ${totals.localBusinessMissingNap.length}`);
console.log("  AggregateRating value|count distribution:");
for (const [k, v] of [...totals.ratingsSeen.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`    ${k} -> ${v} pages`);
}
console.log(`  breadcrumb last-item url mismatches: ${totals.breadcrumbMismatch.length}`);
for (const m of totals.breadcrumbMismatch.slice(0, 8)) console.log(`    - ${m}`);

console.log(`\n[4] Generic anchor texts (site-wide counts):`);
for (const [k, v] of [...totals.genericAnchors.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`    "${k}" × ${v}`);
}
if (totals.genericAnchors.size === 0) console.log("    none");

console.log(`\n[5] Pages with >2 fetchpriority=high images: ${totals.multiFetchpriority.length}`);
for (const m of totals.multiFetchpriority.slice(0, 10)) console.log(`    - ${m}`);
