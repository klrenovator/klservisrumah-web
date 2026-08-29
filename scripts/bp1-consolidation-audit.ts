/**
 * BP-1 phase 1 — programmatic-consolidation gate.
 *
 * Part 1 of the deep audit identified index bloat as the site's single biggest
 * architecture problem: 2,581 indexable EN URLs from one template, of which
 * 2,146 were duplication (1,073 `/areas/<a>/<svc>/near-me` twins of their own
 * parent + 1,073 `/suburbs/<twin>/<svc>` twins of `/areas/<twin>/<svc>`).
 *
 * BP-1 phase 1 stops generating those 2,146 pages and 301-redirects them to
 * their canonical parent. This script is the regression gate that keeps them
 * gone — without it, one re-added route file silently restores a thousand-page
 * duplicate set and the next sitemap ships it straight back to Google.
 *
 * MODES
 * -----
 *   default          source + build corpus checks (run after `npm run build`)
 *   --source-only    source checks only; safe in `prebuild` before any build
 *                    output exists
 *
 * Exits non-zero on any failure.
 *
 * Run: `npm run audit:bp1`
 */
import fs from "node:fs";
import path from "node:path";
import { areaPages } from "@/config/area-data";
import { suburbPages } from "@/config/suburb-data";
import { servicesData } from "@/config/services-data";
import { AREA_SLUGS, SERVICE_SLUGS, SUBURB_TWIN_SLUGS, SUBURB_ORIGINAL_SLUGS } from "@/config/suburb-twin-slugs.generated";
import { hasAreaTwin, suburbServicePath, bp1RedirectTarget } from "@/lib/bp1-consolidation";
import sitemap from "@/app/(en)/sitemap";

const ROOT = process.cwd();
const BUILD = path.join(ROOT, ".next", "server", "app");
const SOURCE_ONLY = process.argv.includes("--source-only");

const failures: string[] = [];
const warnings: string[] = [];

function fail(message: string) {
  failures.push(message);
}

function ok(label: string, detail: string) {
  console.log(`   ✅ ${label} — ${detail}`);
}

const serviceSlugs = Object.keys(servicesData);
const areaSlugs = new Set(areaPages.map((area) => area.slug));

/** Walk the build output and return every rendered path (e.g. "/services/painting"). */
function listBuiltPages(): string[] {
  const built: string[] = [];
  (function walkBuild(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walkBuild(full);
      else if (entry.name.endsWith(".html")) {
        let rel = "/" + path.relative(BUILD, full).split(path.sep).join("/");
        rel = rel.replace(/\.html$/, "").replace(/\/\([^)]+\)/g, "");
        built.push(rel);
      }
    }
  })(BUILD);
  return built;
}

/* ------------------------------------------------------------------ *
 * 1. The generated twin map must match the data it was derived from.
 * ------------------------------------------------------------------ */
console.log("\n1. Generated consolidation map");

const derivedTwins = suburbPages.filter((s) => areaSlugs.has(s.slug)).map((s) => s.slug);
const derivedOriginals = suburbPages.filter((s) => !areaSlugs.has(s.slug)).map((s) => s.slug);

if (JSON.stringify(derivedTwins) !== JSON.stringify(SUBURB_TWIN_SLUGS)) {
  fail(
    `SUBURB_TWIN_SLUGS is stale — generated ${SUBURB_TWIN_SLUGS.length} but data derives ${derivedTwins.length}. ` +
      `Run \`npm run gen:bp1-map\`.`,
  );
} else {
  ok("twin slugs", `${SUBURB_TWIN_SLUGS.length} in sync with area-data ∩ suburb-data`);
}

if (JSON.stringify(derivedOriginals) !== JSON.stringify(SUBURB_ORIGINAL_SLUGS)) {
  fail(
    `SUBURB_ORIGINAL_SLUGS is stale — generated ${SUBURB_ORIGINAL_SLUGS.length} but data derives ${derivedOriginals.length}. ` +
      `Run \`npm run gen:bp1-map\`.`,
  );
} else {
  ok("original slugs", `${SUBURB_ORIGINAL_SLUGS.length} suburbs keep self-canonical /suburbs pages`);
}

if (JSON.stringify([...areaPages.map((area) => area.slug)]) !== JSON.stringify(AREA_SLUGS)) {
  fail(`AREA_SLUGS is stale — generated ${AREA_SLUGS.length} but area-data has ${areaPages.length}. Run \`npm run gen:bp1-map\`.`);
} else {
  ok("area slugs", `${AREA_SLUGS.length} in sync with area-data`);
}

if (JSON.stringify(serviceSlugs) !== JSON.stringify(SERVICE_SLUGS)) {
  fail(`SERVICE_SLUGS is stale — generated ${SERVICE_SLUGS.length} but services-data has ${serviceSlugs.length}. Run \`npm run gen:bp1-map\`.`);
} else {
  ok("service slugs", `${SERVICE_SLUGS.length} in sync with services-data`);
}

// A 301 to a page that does not exist is worse than no redirect.
for (const slug of SUBURB_TWIN_SLUGS) {
  if (!areaSlugs.has(slug)) fail(`twin slug "${slug}" has no /areas page to redirect to`);
}

// Slug validation: an invented URL must fall through to a plain 404, not 301
// onto a soft-404. These are the exact shapes that produced the defect.
const inventedPaths = [
  "/areas/not-a-place/painting/near-me",
  "/areas/kuala-lumpur/not-a-service/near-me",
  "/suburbs/cheras/not-a-service",
  "/suburbs/not-a-suburb/painting",
  "/suburbs/meru/not-a-service",
];
for (const p of inventedPaths) {
  if (bp1RedirectTarget(p) !== null) {
    fail(`bp1RedirectTarget("${p}") returns ${bp1RedirectTarget(p)} — an invented URL must 404, not 301 onto a soft-404`);
  }
}
ok("invented URLs", `${inventedPaths.length} non-existent slugs correctly fall through to 404`);

// Every real retired URL must resolve, and to the exact expected parent.
let resolved = 0;
for (const area of areaPages) {
  for (const s of serviceSlugs) {
    if (bp1RedirectTarget(`/areas/${area.slug}/${s}/near-me`) !== `/areas/${area.slug}/${s}`) {
      fail(`/areas/${area.slug}/${s}/near-me does not 301 to its parent`);
    } else resolved++;
  }
}
for (const slug of SUBURB_TWIN_SLUGS) {
  for (const s of serviceSlugs) {
    if (bp1RedirectTarget(`/suburbs/${slug}/${s}`) !== `/areas/${slug}/${s}`) {
      fail(`/suburbs/${slug}/${s} does not 301 to /areas/${slug}/${s}`);
    } else resolved++;
  }
}
ok("redirect resolution", `${resolved} retired URLs map to the expected live parent`);

// suburbServicePath must never return a retired URL.
for (const suburb of suburbPages) {
  for (const serviceSlug of serviceSlugs) {
    const target = suburbServicePath(suburb.slug, serviceSlug);
    if (bp1RedirectTarget(target) !== null) {
      fail(`suburbServicePath("${suburb.slug}", "${serviceSlug}") returns retired URL ${target}`);
    }
  }
}
ok("suburbServicePath", `${suburbPages.length * serviceSlugs.length} pairs all resolve to live URLs`);

/* ------------------------------------------------------------------ *
 * 2. The retired routes must not exist in source.
 * ------------------------------------------------------------------ */
console.log("\n2. Retired route files");

const nearMeRoute = path.join(ROOT, "app", "(en)", "areas", "[slug]", "[serviceSlug]", "near-me", "page.tsx");
if (fs.existsSync(nearMeRoute)) {
  fail(`near-me route still exists: app/(en)/areas/[slug]/[serviceSlug]/near-me/page.tsx (${areaPages.length * serviceSlugs.length} duplicate pages)`);
} else {
  ok("near-me route", "app/(en)/areas/[slug]/[serviceSlug]/near-me/page.tsx removed");
}

const nearMeView = path.join(ROOT, "components", "sections", "locale-near-me-view.tsx");
if (fs.existsSync(nearMeView)) {
  fail("dead component still present: components/sections/locale-near-me-view.tsx");
} else {
  ok("near-me view", "components/sections/locale-near-me-view.tsx removed");
}

/* ------------------------------------------------------------------ *
 * 3. The suburb route must only generate the non-twin suburbs.
 * ------------------------------------------------------------------ */
console.log("\n3. Suburb route generation");

const suburbRouteSource = fs.readFileSync(
  path.join(ROOT, "app", "(en)", "suburbs", "[slug]", "[serviceSlug]", "page.tsx"),
  "utf8",
);
if (!suburbRouteSource.includes("SUBURB_ORIGINAL_SLUGS")) {
  fail("suburbs/[slug]/[serviceSlug]/page.tsx does not filter generateStaticParams by SUBURB_ORIGINAL_SLUGS");
} else {
  ok("suburb generateStaticParams", `filtered to ${SUBURB_ORIGINAL_SLUGS.length} non-twin suburbs (× ${serviceSlugs.length} services = ${SUBURB_ORIGINAL_SLUGS.length * serviceSlugs.length} pages)`);
}
if (/canonicalPath:/.test(suburbRouteSource)) {
  fail("suburbs route still emits a cross-page canonicalPath — twins are 301s now, survivors are self-canonical");
} else {
  ok("suburb canonical", "self-canonical (no cross-page canonicalPath override)");
}

/* ------------------------------------------------------------------ *
 * 4. The 301s must be wired into middleware.
 * ------------------------------------------------------------------ */
console.log("\n4. Redirect wiring");

const middlewareSource = fs.readFileSync(path.join(ROOT, "middleware.ts"), "utf8");
if (!middlewareSource.includes("bp1RedirectTarget")) {
  fail("middleware.ts does not call bp1RedirectTarget — the 2,146 retired URLs would 404 instead of 301");
} else {
  ok("middleware", "bp1RedirectTarget applied");
}

const retiredUrlCount = areaPages.length * serviceSlugs.length + SUBURB_TWIN_SLUGS.length * serviceSlugs.length;
ok(
  "redirect surface",
  `${retiredUrlCount} retired URLs (${areaPages.length * serviceSlugs.length} near-me + ${SUBURB_TWIN_SLUGS.length * serviceSlugs.length} suburb twins)`,
);

/* ------------------------------------------------------------------ *
 * 5. The sitemap must not advertise a retired URL.
 * ------------------------------------------------------------------ */
console.log("\n5. Sitemap composition");

const sitemapPaths = sitemap().map((entry) => new URL(entry.url).pathname);
const nearMeInSitemap = sitemapPaths.filter((p) => /^\/areas\/[^/]+\/[^/]+\/near-me\/?$/.test(p));
const twinInSitemap = sitemapPaths.filter(
  (p) => {
    const m = /^\/suburbs\/([^/]+)\/[^/]+\/?$/.exec(p);
    return m ? hasAreaTwin(m[1]) : false;
  },
);

if (nearMeInSitemap.length > 0) {
  fail(`sitemap still lists ${nearMeInSitemap.length} /areas/*/near-me URLs (e.g. ${nearMeInSitemap.slice(0, 3).join(", ")})`);
} else {
  ok("near-me in sitemap", "0 URLs");
}
if (twinInSitemap.length > 0) {
  fail(`sitemap still lists ${twinInSitemap.length} /suburbs/<twin>/* URLs (e.g. ${twinInSitemap.slice(0, 3).join(", ")})`);
} else {
  ok("suburb twins in sitemap", "0 URLs");
}

const keptSuburbs = sitemapPaths.filter((p) => /^\/suburbs\/[^/]+\/[^/]+\/?$/.test(p));
if (keptSuburbs.length !== SUBURB_ORIGINAL_SLUGS.length * serviceSlugs.length) {
  fail(`sitemap lists ${keptSuburbs.length} suburb pages, expected ${SUBURB_ORIGINAL_SLUGS.length * serviceSlugs.length}`);
} else {
  ok("kept suburb pages", `${keptSuburbs.length} (non-twin suburbs only)`);
}

const nearMeHubs = sitemapPaths.filter((p) => p === "/near-me" || /^\/near-me\/[^/]+$/.test(p));
if (nearMeHubs.length !== serviceSlugs.length + 1) {
  fail(`expected ${serviceSlugs.length + 1} /near-me hub URLs in sitemap, found ${nearMeHubs.length}`);
} else {
  ok("near-me hubs kept", `${nearMeHubs.length} URLs (/near-me + one per service)`);
}

console.log(`   ℹ️  sitemap total: ${sitemapPaths.length} URLs`);

/* ------------------------------------------------------------------ *
 * 6. No source may build a retired path.
 * ------------------------------------------------------------------ */
console.log("\n6. Source-level link hygiene");

const SCAN_DIRS = ["app", "components", "lib", "config"];

/**
 * Modules that legitimately build `/suburbs/<slug>/<svc>` URLs because they have
 * already restricted themselves to the non-twin set, and whose *output* is
 * validated directly elsewhere in this gate (check 5 reads the real sitemap
 * entries; check 7 reads the real built HTML). A regex cannot tell "filtered
 * emitter" from "unfiltered link", so those two are named here and everything
 * else is held to `suburbServicePath()`.
 */
const FILTERED_EMITTERS = new Set([
  // `sitemap.ts` — `.filter((suburb) => !hasAreaTwin(suburb.slug))`
  path.join(ROOT, "app", "(en)", "sitemap.ts"),
  // `suburbs/[slug]/[serviceSlug]/page.tsx` — generateStaticParams is filtered to
  // SUBURB_ORIGINAL_SLUGS, so every path it builds is a kept page by construction.
  path.join(ROOT, "app", "(en)", "suburbs", "[slug]", "[serviceSlug]", "page.tsx"),
]);

const SELF = new Set(
  [
    "lib/bp1-consolidation.ts",
    "config/suburb-twin-slugs.generated.ts",
  ].map((p) => path.join(ROOT, p)),
);

function* walk(dir: string): Generator<string> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(ts|tsx)$/.test(entry.name)) yield full;
  }
}

// The exemption above is only sound while those two files really do filter.
// Assert it, so the allowlist cannot silently become a hole in the gate.
const sitemapSource = fs.readFileSync(path.join(ROOT, "app", "(en)", "sitemap.ts"), "utf8");
if (!/!hasAreaTwin\(suburb\.slug\)/.test(sitemapSource)) {
  fail("sitemap.ts no longer filters suburbs by !hasAreaTwin() — remove it from FILTERED_EMITTERS or restore the filter");
}

const offenders: string[] = [];
let scannedFiles = 0;
for (const dir of SCAN_DIRS) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
    if (SELF.has(file)) continue;
    const rel = path.relative(ROOT, file);
    const isFilteredEmitter = FILTERED_EMITTERS.has(file);
    const source = fs.readFileSync(file, "utf8");
    scannedFiles++;
    source.split("\n").forEach((line, index) => {
      const code = line.trim();
      if (code.startsWith("*") || code.startsWith("//")) return;
      // A literal template that appends /near-me to an areas pair URL — the
      // route no longer exists, so any such link is a 301 hop.
      if (/\/areas\/\$\{[^}]+\}\/\$\{[^}]+\}\/near-me/.test(line)) {
        offenders.push(`${rel}:${index + 1} builds a retired near-me URL`);
      }
      // A literal template that builds a /suburbs/ URL without consulting the
      // twin map. Every *link emitter* must go through `suburbServicePath()`.
      if (!isFilteredEmitter && /["'`]\/suburbs\/\$\{/.test(line) && !/suburbServicePath/.test(line)) {
        offenders.push(`${rel}:${index + 1} builds a /suburbs/ URL without suburbServicePath()`);
      }
    });
  }
}
if (offenders.length > 0) {
  for (const o of offenders) fail(o);
} else {
  ok("source scan", `0 hardcoded links to retired URLs across ${scannedFiles} source files (${FILTERED_EMITTERS.size} filtered emitters validated by checks 5/7)`);
}

/* ------------------------------------------------------------------ *
 * 7. Build corpus (skipped in --source-only mode).
 * ------------------------------------------------------------------ */
if (!SOURCE_ONLY) {
  console.log("\n7. Build corpus");

  if (!fs.existsSync(BUILD)) {
    fail(`no build output at .next/server/app — run \`npm run build\` first (or pass --source-only)`);
  } else {
    const built = listBuiltPages();
    const builtSet = new Set(built);

    const builtNearMe = built.filter((u) => /^\/areas\/[^/]+\/[^/]+\/near-me$/.test(u));
    if (builtNearMe.length > 0) {
      fail(`build still contains ${builtNearMe.length} /areas/*/*/near-me pages (e.g. ${builtNearMe.slice(0, 3).join(", ")})`);
    } else {
      ok("built near-me pages", "0");
    }

    const builtTwins = built.filter((u) => {
      const m = /^\/suburbs\/([^/]+)\/[^/]+$/.exec(u);
      return m ? hasAreaTwin(m[1]) : false;
    });
    if (builtTwins.length > 0) {
      fail(`build still contains ${builtTwins.length} /suburbs/<twin>/* pages (e.g. ${builtTwins.slice(0, 3).join(", ")})`);
    } else {
      ok("built suburb-twin pages", "0");
    }

    const builtSuburbs = built.filter((u) => /^\/suburbs\/[^/]+\/[^/]+$/.test(u));
    if (builtSuburbs.length !== SUBURB_ORIGINAL_SLUGS.length * serviceSlugs.length) {
      fail(`build contains ${builtSuburbs.length} suburb pages, expected ${SUBURB_ORIGINAL_SLUGS.length * serviceSlugs.length}`);
    } else {
      ok("built kept suburb pages", `${builtSuburbs.length}`);
    }

    // Every 301 target must resolve to a real page, otherwise the redirect
    // trades a duplicate for a soft-404.
    const missingTargets = new Set<string>();
    for (const area of areaPages) {
      for (const serviceSlug of serviceSlugs) {
        const target = `/areas/${area.slug}/${serviceSlug}`;
        if (!builtSet.has(target)) missingTargets.add(target);
      }
    }
    for (const slug of SUBURB_TWIN_SLUGS) {
      for (const serviceSlug of serviceSlugs) {
        const target = `/areas/${slug}/${serviceSlug}`;
        if (!builtSet.has(target)) missingTargets.add(target);
      }
    }
    if (missingTargets.size > 0) {
      fail(`${missingTargets.size} redirect targets are not built pages (e.g. ${[...missingTargets].slice(0, 3).join(", ")})`);
    } else {
      ok("redirect targets", `all ${new Set([...areaPages.map((a) => a.slug), ...SUBURB_TWIN_SLUGS]).size * serviceSlugs.length} distinct /areas pair targets exist`);
    }

    // No rendered page may link at a retired URL.
    const retiredHref = new Map<string, number>();
    for (const rel of built) {
      const file = path.join(BUILD, rel === "/" ? "index.html" : `${rel.slice(1)}.html`);
      if (!fs.existsSync(file)) continue;
      const html = fs.readFileSync(file, "utf8");
      const re = /href="([^"]+)"/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(html)) !== null) {
        let href = m[1];
        if (href.startsWith("https://www.klservisrumah.my")) href = href.slice("https://www.klservisrumah.my".length);
        if (!href.startsWith("/")) continue;
        if (bp1RedirectTarget(href) === null) continue;
        retiredHref.set(href, (retiredHref.get(href) ?? 0) + 1);
      }
    }
    if (retiredHref.size > 0) {
      const total = [...retiredHref.values()].reduce((a, b) => a + b, 0);
      fail(`${total} rendered internal links point at retired URLs (${retiredHref.size} distinct, e.g. ${[...retiredHref.keys()].slice(0, 3).join(", ")})`);
    } else {
      ok("rendered internal links", "0 pointing at retired URLs");
    }

    console.log(`   ℹ️  built HTML pages: ${built.length}`);
  }
} else {
  console.log("\n7. Build corpus — skipped (--source-only)");
}

/* ------------------------------------------------------------------ *
 * 8. Part-4 evidence: NAP contact strip inside content (audit P4-15).
 * ------------------------------------------------------------------ */
if (!SOURCE_ONLY) {
  console.log("\n8. NAP contact strip in content (P4-15)");

  if (!fs.existsSync(BUILD)) {
    fail(`no build output at .next/server/app — run \`npm run build\` first (or pass --source-only)`);
  } else {
    // The strip's <section> is the only element carrying these localized
    // aria-labels; the footer NAP (tel/mailto/address) shares the same raw
    // values, so the label is the only footprint that proves *content*-level
    // placement. Matches messages/{en,ms,zh}.json napStrip.label.
    const NAP_STRIP_LABELS = ["Contact KL Servis Rumah", "Hubungi KL Servis Rumah", "联系 KL Servis Rumah"];

    const napBuilt = listBuiltPages();
    let napPages = 0;
    for (const rel of napBuilt) {
      const file = path.join(BUILD, rel === "/" ? "index.html" : `${rel.slice(1)}.html`);
      if (!fs.existsSync(file)) continue;
      const html = fs.readFileSync(file, "utf8");
      if (NAP_STRIP_LABELS.some((label) => html.includes(label))) napPages++;
    }
    const pctNapInContent = napBuilt.length > 0 ? Math.round((napPages / napBuilt.length) * 1000) / 10 : 0;
    console.log(`   ℹ️  NAP strip in content: ${napPages}/${napBuilt.length} pages (${pctNapInContent}%)`);

    // Part 4 measured corpus pctNapInContent = 0%; P4-15 acceptance is > 0.
    // (The strip ships on service/problem/cost/tool/commercial/blog bodies in
    // all three locales, so a healthy build lands far above zero — the gate
    // merely refuses a silent regression back to footer-only NAP.)
    if (napPages === 0) {
      fail("pctNapInContent = 0% — the P4-15 NAP contact strip is missing from every built page");
    } else {
      ok("pctNapInContent", `${pctNapInContent}% > 0 (${napPages} pages carry the contact strip inside content)`);
    }

    // One representative page per template family, so a strip mount that is
    // accidentally dropped from a single template is caught here instead of
    // in a manual grep.
    const templateSamples: Array<[string, string]> = [
      ["EN service", "/services/painting"],
      ["MS service", "/ms/services/painting"],
      ["ZH service", "/zh/services/painting"],
      ["EN problem", "/problems/damp-walls-paint-bubbling"],
      ["EN cost guide", "/services/painting/cost"],
      ["EN tool", "/tools/painting-calculator"],
      ["EN commercial pod", "/commercial/painting-services-kl"],
    ];
    for (const [label, rel] of templateSamples) {
      const file = path.join(BUILD, rel === "/" ? "index.html" : `${rel.slice(1)}.html`);
      const html = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
      if (!NAP_STRIP_LABELS.some((l) => html.includes(l))) {
        fail(`NAP strip missing on ${label} page ${rel}`);
      }
    }
    ok("template coverage", `${templateSamples.length} template families (EN/MS/ZH service, problem, cost, tool, pod) all carry the strip`);
  }
} else {
  console.log("\n8. NAP contact strip in content (P4-15) — skipped (--source-only)");
}

/* ------------------------------------------------------------------ */
console.log("");
for (const w of warnings) console.log(`⚠️  ${w}`);
if (failures.length > 0) {
  console.error(`❌ BP-1 consolidation gate FAILED — ${failures.length} problem(s):`);
  for (const f of failures) console.error(`   • ${f}`);
  process.exit(1);
}

const retired = areaPages.length * serviceSlugs.length + SUBURB_TWIN_SLUGS.length * serviceSlugs.length;
console.log(
  `✅ BP-1 phase 1 consolidation gate PASSED — ${retired} duplicate URLs retired (301), ` +
    `${SUBURB_ORIGINAL_SLUGS.length * serviceSlugs.length} suburb pages + ${serviceSlugs.length + 1} near-me hubs kept.`,
);
