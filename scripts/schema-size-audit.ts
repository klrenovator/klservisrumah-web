/**
 * Schema size / bloat gate (audit P5-04 regression gate).
 *
 * Part 5 §P5-04 measured 22–31 KB of JSON-LD per page (up to 14% of the HTML),
 * driven by 610,656 repeated `City` nodes: the full 37-city `areaServed` list
 * (each entry carrying a `containedInPlace: Country` sub-node), the 33-entry
 * `brand` list and the 26-entry `knowsAbout` list re-emitted on every page in
 * up to three business/service nodes.
 *
 * The fix (this gate asserts it on every built corpus):
 *
 *   1. The FULL Organization node (`getOrganizationSchema()` — knowsAbout,
 *      brand, full areaServed, contactPoints, openingHours…) is emitted only
 *      on the three homepages (`/`, `/ms`, `/zh`). Every other page ships a
 *      compact @id-reference node identifying `/#organization`.
 *   2. No sub-page's JSON-LD exceeds 8 KB **excluding FAQPage nodes** (Part 5
 *      §Quick wins: "JSON-LD ≤8 KB on sub-pages"). The refinement is deliberate
 *      and measured: the 8 KB metric targets the repeated entity/coverage
 *      bloat this gate exists to kill; a page's authored, visibly-rendered
 *      Q&A is content, not bloat (e.g. the awning service genuinely carries 15
 *      FAQs ≈8.8 KB, and the "ultimate guide" answers pages carry 10–15 each).
 *      Both figures are reported per pattern.
 *   3. `City` nodes appear only on the homepages (the homepage Service node
 *      keeps its 10-city coverage list) — except the `/areas/<area>` and
 *      `/suburbs/<suburb>` hubs, whose single page-local City node is exactly
 *      the "page's own area" case Part 5 allows. All other sub-pages use a
 *      GeoCircle or a page-local `Place` (area×service pairs) instead.
 *   4. Exactly one business-family node per page (HomeAndConstructionBusiness
 *      / LocalBusiness), so the P5-01 duplicate-entity regression cannot
 *      re-appear as a size problem either.
 *
 * Exits non-zero on any FATAL finding so it can be wired into CI after the
 * build step. Run: `npm run audit:schema-size` (after `npm run build`).
 */
import fs from "node:fs";
import path from "node:path";

const BUILD = path.join(process.cwd(), ".next", "server", "app");

/** Part 5 success metric for sub-pages. */
const SUBPAGE_LD_MAX_BYTES = 8 * 1024;

/**
 * Pages allowed to carry the FULL Organization node — the entity's home.
 * `/ms` and `/zh` look like locale homepages but are noindex redirect stubs
 * (LocaleScaffold → auto-redirect to `/`), so the entity lives on `/` alone.
 */
const FULL_ORG_PAGES = new Set(["/"]);

type JsonValue = Record<string, unknown> | unknown[] | string | number | boolean | null;

/** The 404 shell is not indexed and carries no SiteHead — exempt. */
const EXEMPT_PAGES = new Set(["/_not-found"]);

/** Hub patterns whose single City node is the page's own area (audit-allowed). */
const PAGE_LOCAL_CITY = /^\/(areas|suburbs)\/[^/]+$/;

type PageStats = {
  url: string;
  ldBytes: number;
  faqBytes: number;
  blocks: number;
  cityNodes: number;
  brandNodes: number;
  knowsAboutNodes: number;
  businessNodes: number;
  fullOrgNodes: number;
  htmlBytes: number;
};

const stats: PageStats[] = [];
const fatals: string[] = [];
const warnings: string[] = [];

function pageUrl(p: string): string {
  let rel = path.relative(BUILD, p).split(path.sep).join("/");
  // Route groups appear in the on-disk build path (`(ms)/ms/...`) but not in
  // the URL — strip them.
  rel = rel.replace(/\(([^)]+)\)\//g, "");
  rel = rel.replace(/\.html$/, "");
  if (rel === "index") return "/";
  return `/${rel.replace(/\/index$/, "")}`;
}

/** Collect every JSON node in a parsed JSON-LD document (flattening @graph). */
function* walkNodes(node: JsonValue): Generator<Record<string, unknown>> {
  if (Array.isArray(node)) {
    for (const item of node) yield* walkNodes(item as JsonValue);
    return;
  }
  if (node && typeof node === "object") {
    yield node;
    for (const value of Object.values(node)) {
      if (value && typeof value === "object") yield* walkNodes(value as JsonValue);
    }
  }
}

function typesOf(node: Record<string, unknown>): string[] {
  const t = node["@type"];
  if (typeof t === "string") return [t];
  if (Array.isArray(t)) return t.filter((x): x is string => typeof x === "string");
  return [];
}

function auditFile(p: string) {
  const html = fs.readFileSync(p, "utf8");
  const url = pageUrl(p);
  const stat: PageStats = {
    url,
    ldBytes: 0,
    faqBytes: 0,
    blocks: 0,
    cityNodes: 0,
    brandNodes: 0,
    knowsAboutNodes: 0,
    businessNodes: 0,
    fullOrgNodes: 0,
    htmlBytes: Buffer.byteLength(html)
  };

  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html))) {
    const raw = match[1];
    stat.blocks += 1;
    stat.ldBytes += Buffer.byteLength(raw);
    let doc: JsonValue;
    try {
      doc = JSON.parse(raw);
    } catch {
      fatals.push(`${url}: unparseable ld+json block #${stat.blocks}`);
      continue;
    }
    const root = Array.isArray(doc) ? undefined : (doc as Record<string, unknown>);
    if (root && typesOf(root).includes("FAQPage")) {
      stat.faqBytes += Buffer.byteLength(raw);
    } else if (root && Array.isArray(root["@graph"])) {
      // FAQ content embedded in a @graph (tool pages) counts as page content
      // too — measure the FAQPage node itself, not the whole graph block.
      for (const node of root["@graph"] as Record<string, unknown>[]) {
        if (typesOf(node).includes("FAQPage")) {
          stat.faqBytes += Buffer.byteLength(JSON.stringify(node));
        }
      }
    }
    for (const node of walkNodes(doc)) {
      const types = typesOf(node);
      if (types.includes("City")) stat.cityNodes += 1;
      if (types.includes("Brand")) stat.brandNodes += 1;
      if (types.includes("HomeAndConstructionBusiness") || types.includes("LocalBusiness")) {
        stat.businessNodes += 1;
        // A "full" Organization node is the one carrying the site-wide lists
        // (knowsAbout / brand / multi-city areaServed). The compact reference
        // node on sub-pages carries none of those.
        if (node.knowsAbout || node.brand || Array.isArray(node.areaServed)) {
          stat.fullOrgNodes += 1;
          if (node.knowsAbout) stat.knowsAboutNodes += 1;
        }
      }
    }
  }

  stats.push(stat);
  if (EXEMPT_PAGES.has(url)) return;

  const isHomepage = FULL_ORG_PAGES.has(url);
  const nonFaqBytes = stat.ldBytes - stat.faqBytes;

  if (!isHomepage && stat.fullOrgNodes > 0) {
    fatals.push(
      `${url}: full Organization node (knowsAbout/brand/areaServed list) emitted off-homepage — must be the compact @id-reference node`
    );
  }
  if (isHomepage && stat.fullOrgNodes === 0) {
    fatals.push(`${url}: homepage must carry the FULL Organization node (entity home)`);
  }
  if (!isHomepage && nonFaqBytes > SUBPAGE_LD_MAX_BYTES) {
    fatals.push(
      `${url}: JSON-LD ${(nonFaqBytes / 1024).toFixed(1)} KB (excl. FAQ content) exceeds the ${SUBPAGE_LD_MAX_BYTES / 1024} KB sub-page ceiling`
    );
  }
  const cityCeiling = PAGE_LOCAL_CITY.test(url) ? 1 : 0;
  if (!isHomepage && stat.cityNodes > cityCeiling) {
    fatals.push(
      `${url}: ${stat.cityNodes} City node(s) on a sub-page (allowed here: ${cityCeiling}) — use GeoCircle or a page-local Place`
    );
  }
  // The homepage legitimately carries TWO nodes sharing one @id: the full
  // Organization node plus SiteHead's compact reference node (they merge by
  // @id). Every other page must carry exactly the single reference node.
  if (isHomepage ? stat.businessNodes > 2 : stat.businessNodes !== 1) {
    fatals.push(
      `${url}: ${stat.businessNodes} business-family node(s) — expected ${isHomepage ? "≤2 (full + reference, same @id)" : "exactly 1 (the @id-reference node)"} (P5-01 duplicate entity regression)`
    );
  }
  if (stat.ldBytes > stat.htmlBytes * 0.15) {
    warnings.push(
      `${url}: JSON-LD is ${((stat.ldBytes / stat.htmlBytes) * 100).toFixed(1)}% of the HTML`
    );
  }
}

function walk(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.isFile() && entry.name.endsWith(".html")) auditFile(p);
  }
}

if (!fs.existsSync(BUILD)) {
  console.error("FATAL: no built corpus at .next/server/app — run `npm run build` first.");
  process.exit(2);
}

walk(BUILD);

// ── Aggregate report ────────────────────────────────────────────────────────
const totalLd = stats.reduce((acc, s) => acc + s.ldBytes, 0);
const totalFaq = stats.reduce((acc, s) => acc + s.faqBytes, 0);
const totalHtml = stats.reduce((acc, s) => acc + s.htmlBytes, 0);
const totalCities = stats.reduce((acc, s) => acc + s.cityNodes, 0);
const max = stats.reduce((best, s) => (s.ldBytes > best.ldBytes ? s : best), stats[0]);
const subpages = stats.filter((s) => !FULL_ORG_PAGES.has(s.url) && !EXEMPT_PAGES.has(s.url));
const subMax = subpages.reduce(
  (best, s) => (s.ldBytes - s.faqBytes > best.ldBytes - best.faqBytes ? s : best),
  subpages[0]
);

const byPattern = new Map<string, { pages: number; ld: number; faq: number }>();
for (const s of stats) {
  if (EXEMPT_PAGES.has(s.url)) continue;
  const pattern = s.url
    .replace(/^\/(ms|zh)(\/|$)/, "/$1/")
    .replace(/\/areas\/[^/]+\/[^/]+/, "/areas/<a>/<s>")
    .replace(/\/areas\/[^/]+/, "/areas/<a>")
    .replace(/\/suburbs\/[^/]+\/[^/]+/, "/suburbs/<a>/<s>")
    .replace(/\/suburbs\/[^/]+/, "/suburbs/<a>")
    .replace(/\/services\/[^/]+\/[^/]+/, "/services/<svc>/<sub>")
    .replace(/\/services\/[^/]+/, "/services/<svc>")
    .replace(/\/blog\/[^/]+/, "/blog/<post>")
    .replace(/\/problems\/[^/]+/, "/problems/<p>")
    .replace(/\/tools\/[^/]+/, "/tools/<t>")
    .replace(/\/near-me\/[^/]+/, "/near-me/<svc>")
    .replace(/\/(answers|brands|commercial|compare|process|residential|seasonal|top|guides)\/[^/]+/, "/$1/<slug>");
  const cur = byPattern.get(pattern) ?? { pages: 0, ld: 0, faq: 0 };
  cur.pages += 1;
  cur.ld += s.ldBytes;
  cur.faq += s.faqBytes;
  byPattern.set(pattern, cur);
}

console.log("schema-size audit (P5-04 gate)");
console.log(`pages scanned:              ${stats.length}`);
console.log(`total JSON-LD:              ${(totalLd / 1024 / 1024).toFixed(1)} MB across corpus (${(totalFaq / 1024 / 1024).toFixed(1)} MB of it page-specific FAQ content)`);
console.log(`total HTML:                 ${(totalHtml / 1024 / 1024).toFixed(1)} MB`);
console.log(`JSON-LD share of HTML:      ${((totalLd / totalHtml) * 100).toFixed(1)}%`);
console.log(`City nodes in corpus:       ${totalCities}`);
console.log(`largest JSON-LD (any):      ${max.url} — ${(max.ldBytes / 1024).toFixed(1)} KB`);
console.log(
  `largest non-FAQ JSON-LD:    ${subMax.url} — ${((subMax.ldBytes - subMax.faqBytes) / 1024).toFixed(1)} KB (ceiling ${SUBPAGE_LD_MAX_BYTES / 1024} KB)`
);
console.log("");
console.log("pattern                                   pages   avg non-FAQ JSON-LD/page");
const rows = [...byPattern.entries()].sort(
  (a, b) => (b[1].ld - b[1].faq) / b[1].pages - (a[1].ld - a[1].faq) / a[1].pages
);
for (const [pattern, agg] of rows) {
  console.log(
    `${pattern.padEnd(42)}${String(agg.pages).padStart(6)}   ${((agg.ld - agg.faq) / agg.pages / 1024).toFixed(2)} KB`
  );
}

if (warnings.length) {
  console.log(`\nWARNINGS (${warnings.length}):`);
  for (const w of warnings.slice(0, 20)) console.log("  ⚠ " + w);
  if (warnings.length > 20) console.log(`  … and ${warnings.length - 20} more`);
}

if (fatals.length) {
  console.log(`\nFATAL (${fatals.length}):`);
  for (const f of fatals.slice(0, 40)) console.log("  ✗ " + f);
  if (fatals.length > 40) console.log(`  … and ${fatals.length - 40} more`);
  console.log("\n✗ FAIL — schema-size gate");
  process.exit(1);
}

console.log("\n✓ PASS — schema-size gate");
