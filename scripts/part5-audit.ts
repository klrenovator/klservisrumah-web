/**
 * Part 5 — Schema / Breadcrumbs / Image SEO / Cannibalization corpus analyzer.
 *
 * Walks the production build (.next/server/app) and, per rendered page:
 *
 *   • Parses every <script type="application/ld+json"> block (JSON.parse —
 *     parse failures are recorded), flattens @graph, and inventories every
 *     @type node.
 *   • Schema validity/consistency flags: duplicate FAQPage nodes, duplicate
 *     BreadcrumbList nodes, business-entity duplication (Organization/
 *     HomeAndConstructionBusiness + LocalBusiness), Speakable-only WebPage
 *     nodes, AggregateRating placement (parent type), Review nodes, HowTo
 *     names, BlogPosting datePublished vs dateModified, Offer prices and
 *     priceValidUntil, FAQPage question count vs visible FAQ text.
 *   • Breadcrumbs: visible UI trail (nav aria-label="Breadcrumb"), JSON-LD
 *     depth, first/last item names, home-anchored or not.
 *   • Image SEO: <img> count, missing/empty alt, svg vs raster, loading=lazy,
 *     width/height presence, global src → page-count inventory, og:image.
 *   • Cannibalization inputs: <title>, first <h1>, canonical href,
 *     self-canonical or canonicalised-away, meta robots.
 *
 * Outputs:
 *   docs/audit-part5-corpus.jsonl        — one record per rendered page
 *   docs/audit-part5-schema.json         — schema-type inventory + flags by pattern
 *   docs/audit-part5-images.json         — image inventory + per-pattern stats
 *   docs/audit-part5-cannibalization.json— duplicate titles/H1s + per-service page families
 *
 * Usage: node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --experimental-strip-types --import ./scripts/ts-resolver.mjs scripts/part5-audit.ts
 */

import fs from "node:fs";
import path from "node:path";

const BUILD_DIR = path.join(process.cwd(), ".next", "server", "app");
const OUT_CORPUS = path.join(process.cwd(), "docs", "audit-part5-corpus.jsonl");
const OUT_SCHEMA = path.join(process.cwd(), "docs", "audit-part5-schema.json");
const OUT_IMAGES = path.join(process.cwd(), "docs", "audit-part5-images.json");
const OUT_CANNI = path.join(process.cwd(), "docs", "audit-part5-cannibalization.json");

type Lang = "en" | "ms" | "zh";

function pageUrl(file: string): string {
  let relative = path.relative(BUILD_DIR, file).replace(/\\/g, "/").replace(/\.html$/, "");
  relative = relative.replace(/^\((en|ms|zh)\)\//, "");
  if (relative === "index") return "/";
  if (relative.endsWith("/index")) relative = relative.slice(0, -6);
  return `/${relative}`;
}

function classify(url: string): { pattern: string; lang: Lang } {
  let lang: Lang = "en";
  let u = url;
  if (u.startsWith("/ms/") || u === "/ms") { lang = "ms"; u = u.replace(/^\/ms/, ""); }
  else if (u.startsWith("/zh/") || u === "/zh") { lang = "zh"; u = u.replace(/^\/zh/, ""); }
  if (u === "" || u === "/") return { pattern: "/", lang };
  const seg = u.replace(/^\//, "").split("/");
  const top = seg[0];
  if (top === "services") {
    if (seg.length === 2) return { pattern: "/services/<svc>", lang };
    if (seg[2] === "cost") return { pattern: "/services/<svc>/cost", lang };
    if (seg[2] === "emergency") return { pattern: "/services/<svc>/emergency", lang };
    return { pattern: "/services/<svc>/<sub>", lang };
  }
  if (top === "areas") {
    if (seg.length === 2) return { pattern: "/areas/<area>", lang };
    if (seg.length === 3) return { pattern: "/areas/<area>/<svc>", lang };
    if (seg.length === 4 && seg[3] === "near-me") return { pattern: "/areas/<area>/<svc>/near-me", lang };
    return { pattern: "/areas/other", lang };
  }
  if (top === "suburbs") return seg.length === 2 ? { pattern: "/suburbs/<suburb>", lang } : { pattern: "/suburbs/<suburb>/<svc>", lang };
  if (top === "problems") return seg.length === 2 ? { pattern: "/problems/<p>", lang } : { pattern: "/problems", lang };
  if (top === "blog") return seg.length === 2 ? { pattern: "/blog/<slug>", lang } : { pattern: "/blog", lang };
  if (top === "tools" || top === "alatan" || top === "gongju") return { pattern: "/tools/<slug>", lang };
  if (top === "guides") return seg.length >= 2 ? { pattern: "/guides/*", lang } : { pattern: "/guides", lang };
  if (top === "answers") return seg.length >= 2 ? { pattern: "/answers/<slug>", lang } : { pattern: "/answers", lang };
  if (top === "compare") return seg.length >= 2 ? { pattern: "/compare/<slug>", lang } : { pattern: "/compare", lang };
  if (top === "process") return seg.length >= 2 ? { pattern: "/process/<slug>", lang } : { pattern: "/process", lang };
  if (top === "commercial") return seg.length >= 2 ? { pattern: "/commercial/<slug>", lang } : { pattern: "/commercial", lang };
  if (top === "residential") return seg.length >= 2 ? { pattern: "/residential/<slug>", lang } : { pattern: "/residential", lang };
  if (top === "brands") return seg.length >= 2 ? { pattern: "/brands/<slug>", lang } : { pattern: "/brands", lang };
  if (top === "top") return seg.length >= 2 ? { pattern: "/top/<slug>", lang } : { pattern: "/top", lang };
  if (top === "seasonal") return seg.length >= 2 ? { pattern: "/seasonal/<slug>", lang } : { pattern: "/seasonal", lang };
  if (top === "estimate") return { pattern: "/estimate/*", lang };
  if (top === "near-me") return { pattern: "/near-me/<svc>", lang };
  if (top === "search") return { pattern: "/search", lang };
  if (top === "faq" || top === "soalan-lazim" || top === "chang-jian-wen-ti") return { pattern: "/faq", lang };
  if (top === "about" || top === "contact" || top === "pricing" || top === "projects" || top === "privacy" || top === "terms") return { pattern: `/${top}`, lang };
  return { pattern: `/static/${top}`, lang };
}

function cleanText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    // Rendered HTML emits apostrophes as the hex entity `&#x27;` (React
    // escape). Without decoding it, texts like "Can't" fail to match the
    // corpus source, producing false FAQ-mismatch positives (5 pages with
    // faqSchemaNoVisibleMatch=True, verified → 0 after this fix).
    .replace(/&#x27;/g, "'")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function walk(dir: string, files: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, files);
    else if (entry.name.endsWith(".html")) files.push(p);
  }
  return files;
}

/** Flatten a parsed JSON-LD blob into individual typed nodes (handles @graph + nesting). */
function flattenNodes(obj: unknown, out: Record<string, unknown>[] = []): Record<string, unknown>[] {
  if (Array.isArray(obj)) { for (const o of obj) flattenNodes(o, out); return out; }
  if (obj && typeof obj === "object") {
    const rec = obj as Record<string, unknown>;
    if (rec["@type"]) out.push(rec);
    for (const [k, v] of Object.entries(rec)) {
      if (k === "@type") continue;
      flattenNodes(v, out);
    }
  }
  return out;
}

function typesOf(node: Record<string, unknown>): string[] {
  const t = node["@type"];
  if (Array.isArray(t)) return t.map(String);
  return t ? [String(t)] : [];
}

type PageRec = {
  url: string; pattern: string; lang: Lang;
  // schema
  ldBlocks: number; ldParseErrors: number;
  types: Record<string, number>;
  faqPageNodes: number; faqQuestionCount: number;
  breadcrumbListNodes: number; breadcrumbDepth: number; breadcrumbFirst: string; breadcrumbLast: string;
  businessEntityNodes: number; // LocalBusiness + HomeAndConstructionBusiness top-level
  speakableNodes: number;
  aggregateRatingParents: string[];
  reviewNodes: number;
  howToNodes: number; howToNames: string[];
  serviceNodes: number;
  offerPrices: string[]; priceValidUntil: string[];
  blogDatePub: string; blogDateMod: string;
  imageObjectNodes: number; personNodes: number;
  visibleFaqHeading: boolean; faqSchemaNoVisibleMatch: boolean;
  // breadcrumb UI
  breadcrumbUi: boolean;
  // images
  imgCount: number; imgNoAlt: number; imgEmptyAlt: number; imgSvg: number; imgRaster: number;
  imgLazy: number; imgNoDims: number; nextImage: number;
  ogImage: string;
  // cannibalization inputs
  title: string; h1: string; canonical: string; selfCanonical: boolean; robotsMeta: string;
};

function main() {
  const files = walk(BUILD_DIR);
  const recs: PageRec[] = [];
  const imageInventory = new Map<string, number>(); // src -> pages
  const globalTypeCounts = new Map<string, number>();
  const parseErrorPages: string[] = [];

  for (const f of files) {
    const url = pageUrl(f);
    const { pattern, lang } = classify(url);
    const html = fs.readFileSync(f, "utf8");
    const text = cleanText(html.slice(html.lastIndexOf("</footer>") + 9));

    // ---------- JSON-LD ----------
    const ldRe = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
    let m: RegExpExecArray | null;
    let ldBlocks = 0, ldParseErrors = 0;
    const nodes: Record<string, unknown>[] = [];
    while ((m = ldRe.exec(html))) {
      ldBlocks++;
      try {
        const parsed = JSON.parse(m[1]);
        flattenNodes(parsed, nodes);
      } catch {
        ldParseErrors++;
        if (parseErrorPages.length < 30) parseErrorPages.push(url);
      }
    }

    const types: Record<string, number> = {};
    for (const n of nodes) for (const t of typesOf(n)) {
      types[t] = (types[t] ?? 0) + 1;
      globalTypeCounts.set(t, (globalTypeCounts.get(t) ?? 0) + 1);
    }

    const faqNodes = nodes.filter((n) => typesOf(n).includes("FAQPage"));
    const faqQuestions = nodes.filter((n) => typesOf(n).includes("Question"));
    const bcNodes = nodes.filter((n) => typesOf(n).includes("BreadcrumbList"));
    let breadcrumbDepth = 0, breadcrumbFirst = "", breadcrumbLast = "";
    if (bcNodes.length > 0) {
      const items = (bcNodes[0].itemListElement as Record<string, unknown>[] | undefined) ?? [];
      breadcrumbDepth = items.length;
      breadcrumbFirst = String((items[0] as Record<string, unknown> | undefined)?.name ?? "");
      breadcrumbLast = String((items[items.length - 1] as Record<string, unknown> | undefined)?.name ?? "");
    }
    const bizNodes = nodes.filter((n) => {
      const t = typesOf(n);
      return (t.includes("LocalBusiness") || t.includes("HomeAndConstructionBusiness")) && n["@context"];
    });
    const speakableNodes = nodes.filter((n) => n.speakable).length;
    const aggregateRatingParents = nodes
      .filter((n) => n.aggregateRating)
      .map((n) => typesOf(n).join("+"));
    const reviewNodes = nodes.filter((n) => typesOf(n).includes("Review")).length;
    const howTo = nodes.filter((n) => typesOf(n).includes("HowTo"));
    const serviceNodes = nodes.filter((n) => typesOf(n).includes("Service")).length;
    const offerPrices: string[] = [];
    const priceValidUntil: string[] = [];
    for (const n of nodes) {
      if (typesOf(n).includes("Offer")) {
        if (n.price !== undefined) offerPrices.push(String(n.price));
        if (n.priceValidUntil) priceValidUntil.push(String(n.priceValidUntil));
      }
    }
    const blogNode = nodes.find((n) => typesOf(n).includes("BlogPosting"));
    const imageObjectNodes = nodes.filter((n) => typesOf(n).includes("ImageObject")).length;
    const personNodes = nodes.filter((n) => typesOf(n).includes("Person")).length;

    // FAQ schema vs visible content: take first Question name, check whole-page text
    let faqSchemaNoVisibleMatch = false;
    if (faqQuestions.length > 0) {
      const q = cleanText(String(faqQuestions[0].name ?? "")).slice(0, 60);
      if (q && !cleanText(html).includes(q)) faqSchemaNoVisibleMatch = true;
    }
    const visibleFaqHeading = /Frequently Asked|Soalan Lazim|常见问题|FAQs?\b/i.test(text);

    // ---------- Images ----------
    const imgRe = /<img\b([^>]*)>/gi;
    let im: RegExpExecArray | null;
    let imgCount = 0, imgNoAlt = 0, imgEmptyAlt = 0, imgSvg = 0, imgRaster = 0, imgLazy = 0, imgNoDims = 0, nextImage = 0;
    const seenSrcThisPage = new Set<string>();
    while ((im = imgRe.exec(html))) {
      imgCount++;
      const attrs = im[1];
      const srcM = attrs.match(/\bsrc\s*=\s*"([^"]*)"/);
      const altM = attrs.match(/\balt\s*=\s*"([^"]*)"/);
      const src = srcM ? srcM[1] : "";
      if (!altM) imgNoAlt++;
      else if (altM[1].trim() === "") imgEmptyAlt++;
      if (/\.svg(\?|$)/.test(src)) imgSvg++; else if (src) imgRaster++;
      if (/loading\s*=\s*"lazy"/.test(attrs)) imgLazy++;
      if (!/\bwidth\s*=/.test(attrs) || !/\bheight\s*=/.test(attrs)) {
        if (!/\bfill\b|position:\s*absolute/.test(attrs)) imgNoDims++;
      }
      if (src.startsWith("/_next/image")) nextImage++;
      let canonicalSrc = src.replace(/^\/_next\/image\?url=([^&]+).*$/, (_s, u) => decodeURIComponent(u));
      if (canonicalSrc.startsWith("data:")) canonicalSrc = "";
      canonicalSrc = canonicalSrc.slice(0, 200);
      if (canonicalSrc && !seenSrcThisPage.has(canonicalSrc)) {
        seenSrcThisPage.add(canonicalSrc);
        imageInventory.set(canonicalSrc, (imageInventory.get(canonicalSrc) ?? 0) + 1);
      }
    }

    const ogImage = (html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"/) ?? [])[1] ?? "";

    // ---------- Cannibalization inputs ----------
    const title = cleanText((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) ?? [])[1] ?? "");
    const h1 = cleanText((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) ?? [])[1] ?? "");
    const canonical = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/) ?? [])[1] ?? "";
    const expectedSelf = `https://www.klservisrumah.my${url === "/" ? "" : url}`;
    const selfCanonical = canonical === expectedSelf || canonical === `${expectedSelf}/`;
    const robotsMeta = (html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/) ?? [])[1] ?? "";

    recs.push({
      url, pattern, lang,
      ldBlocks, ldParseErrors, types,
      faqPageNodes: faqNodes.length, faqQuestionCount: faqQuestions.length,
      breadcrumbListNodes: bcNodes.length, breadcrumbDepth, breadcrumbFirst, breadcrumbLast,
      businessEntityNodes: bizNodes.length,
      speakableNodes,
      aggregateRatingParents,
      reviewNodes,
      howToNodes: howTo.length, howToNames: howTo.map((n) => String(n.name ?? "")).slice(0, 2),
      serviceNodes,
      offerPrices: offerPrices.slice(0, 6), priceValidUntil: [...new Set(priceValidUntil)],
      blogDatePub: String(blogNode?.datePublished ?? ""), blogDateMod: String(blogNode?.dateModified ?? ""),
      imageObjectNodes, personNodes,
      visibleFaqHeading, faqSchemaNoVisibleMatch,
      breadcrumbUi: /aria-label="(Breadcrumb|Laluan|导航路径|面包屑)"/i.test(html),
      imgCount, imgNoAlt, imgEmptyAlt, imgSvg, imgRaster, imgLazy, imgNoDims, nextImage,
      ogImage,
      title, h1, canonical, selfCanonical, robotsMeta,
    });
  }

  // ---------- Write corpus ----------
  fs.writeFileSync(OUT_CORPUS, recs.map((r) => JSON.stringify(r)).join("\n") + "\n");

  // ---------- Schema aggregate by pattern (EN) ----------
  const byPattern = new Map<string, PageRec[]>();
  for (const r of recs) {
    const key = `${r.lang}:${r.pattern}`;
    if (!byPattern.has(key)) byPattern.set(key, []);
    byPattern.get(key)!.push(r);
  }
  const pct = (n: number, d: number) => (d === 0 ? 0 : Math.round((n / d) * 1000) / 10);
  const mean = (xs: number[]) => (xs.length === 0 ? 0 : Math.round((xs.reduce((a, b) => a + b, 0) / xs.length) * 10) / 10);

  const schemaAgg: Record<string, unknown> = {};
  for (const [key, pages] of [...byPattern.entries()].sort()) {
    const n = pages.length;
    const typeUnion: Record<string, number> = {};
    for (const p of pages) for (const [t, c] of Object.entries(p.types)) typeUnion[t] = (typeUnion[t] ?? 0) + c;
    schemaAgg[key] = {
      pages: n,
      meanLdBlocks: mean(pages.map((p) => p.ldBlocks)),
      parseErrors: pages.reduce((a, p) => a + p.ldParseErrors, 0),
      pctMultiFaqPage: pct(pages.filter((p) => p.faqPageNodes > 1).length, n),
      pctFaqPage: pct(pages.filter((p) => p.faqPageNodes >= 1).length, n),
      pctMultiBreadcrumb: pct(pages.filter((p) => p.breadcrumbListNodes > 1).length, n),
      pctBreadcrumbSchema: pct(pages.filter((p) => p.breadcrumbListNodes >= 1).length, n),
      pctBreadcrumbUi: pct(pages.filter((p) => p.breadcrumbUi).length, n),
      meanBreadcrumbDepth: mean(pages.filter((p) => p.breadcrumbDepth > 0).map((p) => p.breadcrumbDepth)),
      pctBizEntityDup: pct(pages.filter((p) => p.businessEntityNodes >= 2).length, n),
      meanSpeakable: mean(pages.map((p) => p.speakableNodes)),
      aggregateRatingParents: [...new Set(pages.flatMap((p) => p.aggregateRatingParents))],
      pctAggregateRating: pct(pages.filter((p) => p.aggregateRatingParents.length > 0).length, n),
      pctReview: pct(pages.filter((p) => p.reviewNodes > 0).length, n),
      pctHowTo: pct(pages.filter((p) => p.howToNodes > 0).length, n),
      howToNames: [...new Set(pages.flatMap((p) => p.howToNames))].slice(0, 4),
      pctVisibleFaqNoSchema: pct(pages.filter((p) => p.visibleFaqHeading && p.faqPageNodes === 0).length, n),
      pctFaqSchemaNoVisible: pct(pages.filter((p) => p.faqSchemaNoVisibleMatch).length, n),
      pctSelfCanonical: pct(pages.filter((p) => p.selfCanonical).length, n),
      pctCanonicalAway: pct(pages.filter((p) => !p.selfCanonical && p.canonical !== "").length, n),
      priceValidUntil: [...new Set(pages.flatMap((p) => p.priceValidUntil))].slice(0, 3),
      pctBlogDateEqual: pct(pages.filter((p) => p.blogDatePub && p.blogDatePub === p.blogDateMod).length, n),
      typeUnion,
      sample: pages[0].url,
    };
  }

  // ---------- Image aggregate ----------
  const imgAgg: Record<string, unknown> = {};
  for (const [key, pages] of [...byPattern.entries()].sort()) {
    const n = pages.length;
    imgAgg[key] = {
      pages: n,
      meanImgs: mean(pages.map((p) => p.imgCount)),
      meanRaster: mean(pages.map((p) => p.imgRaster)),
      meanSvg: mean(pages.map((p) => p.imgSvg)),
      totalNoAlt: pages.reduce((a, p) => a + p.imgNoAlt, 0),
      totalEmptyAlt: pages.reduce((a, p) => a + p.imgEmptyAlt, 0),
      pctPagesZeroRaster: pct(pages.filter((p) => p.imgRaster === 0).length, n),
      meanLazy: mean(pages.map((p) => p.imgLazy)),
      totalNoDims: pages.reduce((a, p) => a + p.imgNoDims, 0),
      ogImages: [...new Set(pages.map((p) => p.ogImage))].slice(0, 3),
    };
  }
  const topImages = [...imageInventory.entries()].sort((a, b) => b[1] - a[1]).slice(0, 40)
    .map(([src, pages]) => ({ src: src.slice(0, 120), pages }));

  // ---------- Cannibalization ----------
  const en = recs.filter((r) => r.lang === "en" && !/noindex/.test(r.robotsMeta));
  const titleMap = new Map<string, string[]>();
  const h1Map = new Map<string, string[]>();
  for (const r of en) {
    if (r.title) { if (!titleMap.has(r.title)) titleMap.set(r.title, []); titleMap.get(r.title)!.push(r.url); }
    if (r.h1) { if (!h1Map.has(r.h1)) h1Map.set(r.h1, []); h1Map.get(r.h1)!.push(r.url); }
  }
  const dupTitles = [...titleMap.entries()].filter(([, urls]) => urls.length > 1)
    .sort((a, b) => b[1].length - a[1].length)
    .map(([title, urls]) => ({ title: title.slice(0, 110), count: urls.length, sample: urls.slice(0, 4) }));
  const dupH1s = [...h1Map.entries()].filter(([, urls]) => urls.length > 1)
    .sort((a, b) => b[1].length - a[1].length)
    .map(([h1, urls]) => ({ h1: h1.slice(0, 110), count: urls.length, sample: urls.slice(0, 4) }));

  // Per-service page families across templates (EN, indexable, self-canonical)
  const serviceSlugs = fs.readdirSync(path.join(BUILD_DIR, "(en)", "services"), { withFileTypes: true })
    .filter((d) => d.isDirectory()).map((d) => d.name);
  const families: Record<string, { total: number; selfCanonical: number; byTemplate: Record<string, number> }> = {};
  for (const slug of serviceSlugs) {
    const matches = en.filter((r) => r.url === `/services/${slug}` || r.url.includes(`/${slug}`) &&
      new RegExp(`(^|/)${slug}(/|$)|${slug}-|-${slug}`).test(r.url));
    const byTemplate: Record<string, number> = {};
    for (const r of matches) byTemplate[r.pattern] = (byTemplate[r.pattern] ?? 0) + 1;
    families[slug] = {
      total: matches.length,
      selfCanonical: matches.filter((r) => r.selfCanonical).length,
      byTemplate,
    };
  }

  fs.writeFileSync(OUT_SCHEMA, JSON.stringify({
    generatedAt: new Date().toISOString(),
    pages: recs.length,
    globalTypeCounts: Object.fromEntries([...globalTypeCounts.entries()].sort((a, b) => b[1] - a[1])),
    parseErrorPages,
    byPattern: schemaAgg,
  }, null, 2));

  fs.writeFileSync(OUT_IMAGES, JSON.stringify({
    generatedAt: new Date().toISOString(),
    distinctImages: imageInventory.size,
    topImages,
    byPattern: imgAgg,
  }, null, 2));

  fs.writeFileSync(OUT_CANNI, JSON.stringify({
    generatedAt: new Date().toISOString(),
    enIndexablePages: en.length,
    duplicateTitles: dupTitles.slice(0, 60),
    duplicateTitleTotal: dupTitles.length,
    duplicateH1s: dupH1s.slice(0, 60),
    duplicateH1Total: dupH1s.length,
    serviceFamilies: families,
  }, null, 2));

  console.log(`part5-audit: ${recs.length} pages`);
  console.log(`  JSON-LD parse errors: ${recs.reduce((a, r) => a + r.ldParseErrors, 0)}`);
  console.log(`  distinct images: ${imageInventory.size}`);
  console.log(`  duplicate titles (EN indexable): ${dupTitles.length}; duplicate H1s: ${dupH1s.length}`);
  console.log(`  wrote ${OUT_CORPUS}, ${OUT_SCHEMA}, ${OUT_IMAGES}, ${OUT_CANNI}`);
}

main();
