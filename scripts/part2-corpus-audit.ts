/**
 * Part 2 (On-Page SEO + Content) corpus analyzer — v2.
 *
 * Streams every rendered HTML page in `.next/server/app` and extracts:
 *   - title / meta description / canonical (fixed regexes)
 *   - H1-H3 trees, counts, H1 position relative to <main> and <footer>
 *   - main-block text (actual <main> content)
 *   - post-footer content text (the Suspense-resolved page content that the
 *     static export emits AFTER the footer and OUTSIDE <main>)
 *   - schema types, img alt coverage, link counts, word counts
 *   - content hash for duplicate detection (post-footer block)
 *
 * Writes:
 *   - docs/audit-part2-corpus.jsonl   (one JSON object per page)
 *   - docs/audit-part2-aggregate.json (per-pattern aggregates + pair similarity)
 *
 * Run: `node --max-old-space-size=3072 ... scripts/part2-corpus-audit.ts` after build.
 */
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const BUILD_DIR = path.join(process.cwd(), ".next", "server", "app");
const OUT_LINES = path.join(process.cwd(), "docs", "audit-part2-corpus.jsonl");
const OUT_AGG = path.join(process.cwd(), "docs", "audit-part2-aggregate.json");

type PageRec = {
  url: string;
  pattern: string;
  lang: "en" | "ms" | "zh";
  title: string;
  titleLen: number;
  titleHasBrand: boolean;
  desc: string;
  descLen: number;
  h1Count: number;
  h1s: string[];
  h1InsideMain: boolean | null; // null = no main found
  h2Count: number;
  h2s: string[];
  h3Count: number;
  h3s: string[];
  canonical: string;
  canonicalized: boolean;
  robots: string;
  schemaTypes: string[];
  imgCount: number;
  imgNoAlt: number;
  aCount: number;
  mainWords: number;
  contentWords: number;
  contentCjk: number;
  contentHash: string; // hash of post-footer content block
  contentStart: string; // first 200 chars of content block
};

function pageUrl(file: string): string {
  let relative = path.relative(BUILD_DIR, file).replace(/\\/g, "/").replace(/\.html$/, "");
  relative = relative.replace(/^\((en|ms|zh)\)\//, "");
  if (relative === "index") return "/";
  if (relative.endsWith("/index")) relative = relative.slice(0, -6);
  return `/${relative}`;
}

function classify(url: string): { pattern: string; lang: "en" | "ms" | "zh" } {
  let lang: "en" | "ms" | "zh" = "en";
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
  if (top === "suburbs") {
    if (seg.length === 2) return { pattern: "/suburbs/<suburb>", lang };
    return { pattern: "/suburbs/<suburb>/<svc>", lang };
  }
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
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function wordStats(text: string): { words: number; cjk: number } {
  const cjk = (text.match(/[\u4e00-\u9fff]/g) || []).length;
  const latin = text.replace(/[\u4e00-\u9fff]/g, " ").split(/\s+/).filter(Boolean).length;
  return { words: latin + cjk, cjk };
}

function attr(html: string, attrName: string): string {
  const re = new RegExp(
    `<meta[^>]*${attrName}=["'][^"']*["'][^>]*content=["']([^"']*)["']`,
    "i"
  );
  const rev = new RegExp(
    `<meta[^>]*content=["'][^"']*["'][^>]*${attrName}=["'][^"']*["']`,
    "i"
  );
  let m = html.match(re) ?? html.match(rev);
  if (!m && attrName === "name") {
    // generic: name="X"
    const g = html.match(/<meta[^>]*name=["']([^"']+)["'][^>]*content=["']([^"']*)["']/i);
    if (g) return g[2];
  }
  return m ? m[1].replace(/&quot;/g, '"').replace(/&amp;/g, "&") : "";
}

function metaContent(html: string, name: string): string {
  const direct = html.match(
    new RegExp(`<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']*)["']`, "i")
  );
  const reverse = html.match(
    new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*name=["']${name}["']`, "i")
  );
  return (direct ? direct[1] : reverse ? reverse[1] : "").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}

function canonical(html: string): string {
  const m = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i)
    ?? html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
  if (!m) return "";
  return m[1].replace(/^https?:\/\/[^/]+/i, "").replace(/\/index$/, "");
}

function headings(html: string, level: 1 | 2 | 3): string[] {
  const out: string[] = [];
  const re = new RegExp(`<h${level}[^>]*>([\\s\\S]*?)<\\/h${level}>`, "gi");
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) out.push(cleanText(m[1]));
  return out;
}

/** Text of the <main> block (what strict text extractors see). */
function mainBlockText(html: string): string {
  const main = html.match(/<main[\s\S]*?<\/main>/i);
  return main ? cleanText(main[0]) : "";
}

/**
 * Content block = the Suspense-resolved body content that the static export
 * emits AFTER </footer>, OUTSIDE <main>. We cut at </footer> to exclude the
 * site chrome (navbar/footer widgets) as far as possible.
 */
function contentBlockText(html: string): string {
  const lastFooter = html.lastIndexOf("</footer>");
  const cut = lastFooter >= 0 ? html.slice(lastFooter + 9) : html;
  return cleanText(cut);
}

function walk(dir: string, out: string[]): void {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.isFile() && entry.name.endsWith(".html")) out.push(p);
  }
}

function shingles(text: string, n = 3): Set<string> {
  const tokens = text.toLowerCase().split(/\s+/).filter((w) => w.length > 1);
  const set = new Set<string>();
  for (let i = 0; i + n <= tokens.length; i++) set.add(tokens.slice(i, i + n).join(" "));
  return set;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

async function main() {
  const files: string[] = [];
  walk(BUILD_DIR, files);
  console.log(`Rendered pages found: ${files.length}`);
  const out = fs.createWriteStream(OUT_LINES);
  const recs: PageRec[] = [];

  for (let i = 0; i < files.length; i++) {
    const html = fs.readFileSync(files[i], "utf8");
    const url = pageUrl(files[i]);
    const { pattern, lang } = classify(url);
    const titleTag = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleTag ? cleanText(titleTag[1]) : "";
    const desc = metaContent(html, "description");
    const canon = canonical(html);
    const robots = metaContent(html, "robots");
    const h1s = headings(html, 1);
    const h2s = headings(html, 2);
    const h3s = headings(html, 3);
    const mainTxt = mainBlockText(html);
    const contentTxt = contentBlockText(html);
    const { words: mainWords } = wordStats(mainTxt);
    const { words: contentWords, cjk } = wordStats(contentTxt);
    const mainIdx = html.search(/<main\b/i);
    const mainEnd = mainIdx >= 0 ? mainIdx + (html.match(/<main[\s\S]*?<\/main>/i)?.[0].length ?? 0) : -1;
    const h1Idx = html.search(/<h1\b/i);
    const schemaTypes = [...new Set([...html.matchAll(/"@type"\s*:\s*"([^"]+)"/g)].map((m) => m[1]))];
    const imgs = html.match(/<img\b/gi) || [];
    const imgNoAlt = (html.match(/<img\b(?![^>]*\balt=)[^>]*>/gi) || []).length;
    const aCount = (html.match(/<a\b/gi) || []).length;
    const contentHash = createHash("sha1").update(contentTxt).digest("hex").slice(0, 12);

    recs.push({
      url, pattern, lang, title, titleLen: title.length, titleHasBrand: /kl servis rumah/i.test(title),
      desc, descLen: desc.length, h1Count: h1s.length, h1s,
      h1InsideMain: mainIdx >= 0 ? h1Idx > mainIdx && h1Idx < mainEnd : null,
      h2Count: h2s.length, h2s: h2s.slice(0, 14), h3Count: h3s.length, h3s: h3s.slice(0, 24),
      canonical: canon, canonicalized: canon !== "" && canon !== url.replace(/\/index$/, ""),
      robots, schemaTypes, imgCount: imgs.length, imgNoAlt, aCount,
      mainWords, contentWords, contentCjk: cjk, contentHash, contentStart: contentTxt.slice(0, 200),
    });
    out.write(JSON.stringify(recs[recs.length - 1]) + "\n");
    if (i % 500 === 0) console.log(`  ${i}/${files.length}`);
  }
  out.end();

  // ---- Pattern aggregates ----
  const groups = new Map<string, PageRec[]>();
  for (const r of recs) {
    if (!groups.has(r.pattern)) groups.set(r.pattern, []);
    groups.get(r.pattern)!.push(r);
  }
  const median = (arr: number[]) => { const s = [...arr].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
  const patternAgg: Record<string, unknown> = {};
  for (const [pat, items] of groups) {
    const titles = items.map((r) => r.title);
    const descs = items.map((r) => r.desc);
    const words = items.map((r) => r.contentWords);
    patternAgg[pat] = {
      n: items.length,
      uniqueTitles: new Set(titles).size,
      dupTitlePages: items.length - new Set(titles).size,
      uniqueDescs: new Set(descs).size,
      dupDescPages: items.length - new Set(descs).size,
      titleLen: { min: Math.min(...titles.map((t) => t.length)), mean: +(titles.reduce((a, t) => a + t.length, 0) / titles.length).toFixed(1), median: median(titles.map((t) => t.length)), max: Math.max(...titles.map((t) => t.length)) },
      descLen: { min: Math.min(...descs.map((t) => t.length)), mean: +(descs.reduce((a, t) => a + t.length, 0) / descs.length).toFixed(1), median: median(descs.map((t) => t.length)), max: Math.max(...descs.map((t) => t.length)) },
      h1Zero: items.filter((r) => r.h1Count === 0).length,
      h1One: items.filter((r) => r.h1Count === 1).length,
      h1Many: items.filter((r) => r.h1Count > 1).length,
      h1InsideMain: items.filter((r) => r.h1InsideMain === true).length,
      h1OutsideMain: items.filter((r) => r.h1InsideMain === false).length,
      h2Mean: +(items.reduce((a, r) => a + r.h2Count, 0) / items.length).toFixed(1),
      h3Mean: +(items.reduce((a, r) => a + r.h3Count, 0) / items.length).toFixed(1),
      contentWords: { min: Math.min(...words), mean: +(words.reduce((a, w) => a + w, 0) / words.length).toFixed(1), median: median(words), max: Math.max(...words) },
      mainWordsMean: +(items.reduce((a, r) => a + r.mainWords, 0) / items.length).toFixed(1),
      noAltImgs: items.reduce((a, r) => a + r.imgNoAlt, 0),
      imgCount: items.reduce((a, r) => a + r.imgCount, 0),
      schemaCoverage: (() => {
        const cov: Record<string, number> = {};
        for (const r of items) for (const t of r.schemaTypes) cov[t] = (cov[t] ?? 0) + 1;
        return cov;
      })(),
      dupContentPages: items.length - new Set(items.map((r) => r.contentHash)).size,
      canonicalized: items.filter((r) => r.canonicalized).length,
      sampleTitles: [...new Set(titles)].slice(0, 4),
      sampleH2s: (() => {
        const map = new Map<string, number>();
        for (const r of items) for (const h of r.h2s) map.set(h, (map.get(h) ?? 0) + 1);
        return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12);
      })(),
    };
  }

  // ---- Near-me vs parent duplication ----
  const parentByKey = new Map<string, { url: string; hash: string; start: string }>();
  for (const r of recs) if (r.pattern === "/areas/<area>/<svc>") parentByKey.set(r.url.replace(/\/index$/, ""), r);
  const nearMe = recs.filter((r) => r.pattern === "/areas/<area>/<svc>/near-me");
  let nearMeIdentical = 0;
  const nearMeSamples: { parent: string; identical: boolean; h1Parent: string; h1Near: string }[] = [];
  for (const n of nearMe) {
    const parentUrl = n.url.replace(/\/near-me$/, "");
    const p = parentByKey.get(parentUrl);
    if (!p) continue;
    const identical = p.contentHash === n.contentHash;
    if (identical) nearMeIdentical++;
    if (nearMeSamples.length < 6) nearMeSamples.push({ parent: parentUrl, identical, h1Parent: p.h1s[0] ?? "", h1Near: n.h1s[0] ?? "" });
  }

  // ---- Area x service vs their canonical service page (shingle similarity) ----
  const servicePages = new Map<string, string>();
  for (const r of recs) if (r.pattern === "/services/<svc>") servicePages.set(r.url, r.contentStart + "|" + r.contentHash);
  // build text for similarity from JSONL? we only kept hashes; recompute sample below from file list
  // Use hash prefixes only for the report; exact similarity computed on a sample:
  const areaPages = recs.filter((r) => r.pattern === "/areas/<area>/<svc>");
  let simTotal = 0; let simSum = 0;
  const simSamples: { url: string; svc: string; area: string; sim: number }[] = [];
  // Map service slug from URL
  const svcByUrl = new Map<string, string>();
  for (const r of areaPages) {
    const m = r.url.match(/^\/areas\/([^/]+)\/([^/]+)$/);
    if (m) { svcByUrl.set(r.url, m[2]); }
  }
  // For a sample of 200 area pages per service, compute similarity of contentStart shingles vs service page contentStart
  const svcStarts = new Map<string, string>();
  for (const r of recs) if (r.pattern === "/services/<svc>") { const m = r.url.match(/^\/services\/([^/]+)$/); if (m) svcStarts.set(m[1], r.contentStart); }
  const sampleArea = areaPages.filter((r) => /^\/areas\/kuala-lumpur|^\/areas\/petaling-jaya|^\/areas\/cheras/.test(r.url));
  for (const r of sampleArea) {
    const svc = svcByUrl.get(r.url);
    const svcStart = svc ? svcStarts.get(svc) : "";
    if (!svcStart) continue;
    const sim = jaccard(shingles(r.contentStart), shingles(svcStart));
    simTotal++; simSum += sim;
    if (simSamples.length < 8) simSamples.push({ url: r.url, svc: svc ?? "", area: r.url.split("/")[2], sim: +sim.toFixed(3) });
  }

  const agg = {
    totalPages: recs.length,
    patterns: patternAgg,
    nearMeDup: { total: nearMe.length, identicalContentHash: nearMeIdentical, pct: +(nearMeIdentical / Math.max(nearMe.length, 1) * 100).toFixed(2), samples: nearMeSamples },
    areaVsServiceSim: { sampled: simTotal, mean: +(simSum / Math.max(simTotal, 1)).toFixed(3), samples: simSamples },
    generatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(OUT_AGG, JSON.stringify(agg, null, 2));
  console.log(`Wrote ${recs.length} records`);
  console.log(`near-me identical content hash: ${nearMeIdentical}/${nearMe.length}`);
  console.log(`area-vs-service shingle sim (sample ${simTotal}): ${(simSum / Math.max(simTotal, 1)).toFixed(3)}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
