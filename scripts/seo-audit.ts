import fs from "node:fs";
import path from "node:path";
import { servicesData } from "../config/services-data.ts";
import { areaPages } from "../config/area-data.ts";
import { suburbPages } from "../config/suburb-data.ts";
import { problemPages } from "../config/problem-data.ts";
import { blogPosts } from "../config/blog-data.ts";

const SITE = "https://www.klservisrumah.my";

/**
 * Canonical/hreflang rule, captured after Session 007 finding N10:
 *
 *   If a page's canonical points at a different URL, the page must NOT emit
 *   hreflang at all. The canonical page owns the hreflang cluster.
 *
 * Per Google: "If page A points to page B via `rel=canonical`, the canonical
 * tag overrides hreflang on page A. If A still declares hreflang entries that
 * B does not reciprocate, Google silently drops A from the cluster and
 * third-party hreflang validators flag the cluster as broken."
 */
function toLocal(u: string | undefined): string | null {
  if (!u) return null;
  if (u.startsWith(SITE + "/")) return "/" + u.slice(SITE.length + 1);
  if (u === SITE || u === SITE + "/") return "/";
  return null;
}

/**
 * Two URLs that both point at the same resource, even when one uses
 * percent-encoded CJK and the other uses raw CJK characters, or when one
 * is `/index` and the other is `/` (Next.js's build emits index.html for
 * the root, so the on-disk URL is `/index` while the canonical is `/`).
 */
function isSameUrl(a: string, b: string): boolean {
  const norm = (u: string) => {
    let v = u;
    if (v === "/index" || v === "/index/") v = "/";
    try { v = decodeURIComponent(v); } catch { /* leave as-is */ }
    return v;
  };
  return norm(a) === norm(b);
}

function checkMetadataConsistency(): {
  totalChecked: number;
  hreflangOnCanonicalised: number;
  issues: string[];
} {
  // Walk the generated build and find every page that ships hreflang despite
  // canonicalising to a different URL.
  const BUILD = path.join(process.cwd(), ".next", "server", "app");
  if (!fs.existsSync(BUILD)) {
    return { totalChecked: 0, hreflangOnCanonicalised: 0, issues: ["Build output not found — run `npm run build` first."] };
  }
  const issues: string[] = [];
  let checked = 0;
  let bad = 0;

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.isFile() && entry.name.endsWith(".html")) {
        const html = fs.readFileSync(p, "utf8");
        checked++;
        const c = (html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i) || [])[1];
        const alts = [...html.matchAll(/<link[^>]+rel="alternate"[^>]+href="([^"]+)"/gi)].map((m) => m[1]);
        if (!c || alts.length === 0) continue;
        const cLocal = toLocal(c);
        if (!cLocal) continue;
        const rel = p.slice(BUILD.length).replace(/\.html$/, "");
        let myUrl = rel;
        if (myUrl.startsWith("/")) myUrl = myUrl.slice(1);
        if (myUrl.endsWith("/index")) myUrl = myUrl.slice(0, -"/index".length);
        myUrl = "/" + myUrl;
        const myUrlN = myUrl.endsWith("/") ? myUrl : myUrl + "/";
        const cLocalN = cLocal.endsWith("/") ? cLocal : cLocal + "/";
        // The Next.js build emits `index.html` for `/`, so the on-disk URL is
        // `/index` while the canonical is `/` — the same resource. Same
        // heuristic as the canonical-equivalence check.
        const selfCanonical = isSameUrl(myUrlN, cLocalN) || isSameUrl(cLocal, myUrl);
        if (!selfCanonical) {
          // Page is canonicalised elsewhere. It must NOT emit hreflang.
          bad++;
          if (issues.length < 5) {
            issues.push(`Hreflang on canonicalised page: ${myUrl} → canonical ${cLocal} (${alts.length} alts)`);
          }
        }
      }
    }
  }
  walk(BUILD);
  return { totalChecked: checked, hreflangOnCanonicalised: bad, issues };
}

const routes = [
  "/",
  "/services",
  "/areas",
  "/contact",
  "/faq",
  "/blog",
  ...Object.keys(servicesData).map((slug) => `/services/${slug}`),
  ...areaPages.map((area) => `/areas/${area.slug}`),
  ...suburbPages.slice(0, 20).map((suburb) => `/suburbs/${suburb.slug}/painting`),
  ...problemPages.map((problem) => `/problems/${problem.slug}`),
  ...blogPosts.map((post) => `/blog/${post.slug}`)
];

const consistency = checkMetadataConsistency();

const report = `# SEO Audit Report

Generated: ${new Date().toISOString()}

## Route Inventory

${routes.map((route) => `- ${route}`).join("\n")}

## Checks

- Total representative routes: ${routes.length}
- Service pages: ${Object.keys(servicesData).length}
- Area pages: ${areaPages.length}
- Suburb records: ${suburbPages.length}
- Problem pages: ${problemPages.length}
- Blog posts: ${blogPosts.length}

## Metadata consistency (post-build full-corpus)

- Pages checked: ${consistency.totalChecked}
- Pages with hreflang while canonicalised to a different URL: ${consistency.hreflangOnCanonicalised}

${consistency.issues.length > 0 ? `### Issues\n\n${consistency.issues.map((i) => `- ${i}`).join("\n")}` : "_No issues found — every page that canonicalises to a different URL correctly omits hreflang (Google: canonical overrides hreflang)._"}

## Manual follow-up

Run production crawl after deployment to verify status codes, canonical tags, rendered schema and Core Web Vitals.
`;

const output = path.join(process.cwd(), "docs", "seo-audit-report.md");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, report);

if (consistency.hreflangOnCanonicalised > 0) {
  console.error(`❌ ${consistency.hreflangOnCanonicalised} pages ship hreflang while canonicalised to a different URL. See ${output}`);
  process.exit(1);
}
console.log(`✅ Metadata consistency check passed. Report written to ${output}`);
