/**
 * Part 2 — template/near-duplication analyzer.
 *
 * For each content cluster (per-service pods: commercial, residential, process,
 * answers, brands, compare, top, seasonal, near-me hub, cost, emergency,
 * blog sub-clusters, problem pages), measures:
 *   - mean pairwise shingle Jaccard similarity
 *   - % of sentences shared with >= 50% of sibling pages (boilerplate)
 *   - % of sentences unique to a single page
 *
 * Reads rendered HTML directly (content block after </footer>), so it can also
 * compare area×service pages against their canonical service page.
 *
 * Output: docs/audit-part2-clusters.json
 */
import fs from "node:fs";
import path from "node:path";

const BUILD_DIR = path.join(process.cwd(), ".next", "server", "app");
const OUT = path.join(process.cwd(), "docs", "audit-part2-clusters.json");

function pageUrl(file: string): string {
  let relative = path.relative(BUILD_DIR, file).replace(/\\/g, "/").replace(/\.html$/, "");
  relative = relative.replace(/^\((en|ms|zh)\)\//, "");
  if (relative === "index") return "/";
  if (relative.endsWith("/index")) relative = relative.slice(0, -6);
  return `/${relative}`;
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

function contentText(html: string): string {
  const lastFooter = html.lastIndexOf("</footer>");
  const cut = lastFooter >= 0 ? html.slice(lastFooter + 9) : html;
  // strip floating widgets region up to the breadcrumb (first <nav> after footer)
  const nav = cut.indexOf("<nav");
  const body = nav >= 0 ? cut.slice(nav) : cut;
  return cleanText(body);
}

function walk(dir: string, out: string[]): void {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.isFile() && entry.name.endsWith(".html")) out.push(p);
  }
}

function sentences(text: string): string[] {
  const parts = text.split(/(?<=[.!?。！？])\s+/);
  return parts.map((s) => s.trim()).filter((s) => s.replace(/[^\p{L}\p{N}]/gu, "").length > 24);
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

function clusterAnalyze(pages: { url: string; text: string }[]): Record<string, unknown> {
  const n = pages.length;
  if (n < 2) return { n, note: "single-page cluster" };
  const shingleSets = pages.map((p) => shingles(p.text));
  let simSum = 0;
  let pairs = 0;
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { simSum += jaccard(shingleSets[i], shingleSets[j]); pairs++; }
  const meanSim = simSum / pairs;
  // sentence sharing
  const allSent = new Map<string, number>();
  for (const p of pages) for (const s of new Set(sentences(p.text))) allSent.set(s, (allSent.get(s) ?? 0) + 1);
  const sentencesArr = [...allSent.entries()];
  const shared50 = sentencesArr.filter(([, c]) => c >= Math.max(2, Math.ceil(n * 0.5))).length;
  const sharedAll = sentencesArr.filter(([, c]) => c === n).length;
  const totalSent = sentencesArr.length;
  return {
    n,
    meanPairwiseJaccard: +meanSim.toFixed(3),
    distinctSentences: totalSent,
    sentencesSharedBy50pctPlus: shared50,
    sentencesSharedByAll: sharedAll,
    pctShared50: +(shared50 / Math.max(totalSent, 1) * 100).toFixed(1),
    pctSharedAll: +(sharedAll / Math.max(totalSent, 1) * 100).toFixed(1),
    exampleSharedAll: sentencesArr.filter(([, c]) => c === n).slice(0, 6).map(([s]) => s.slice(0, 110)),
    exampleShared50: sentencesArr.filter(([, c]) => c >= Math.ceil(n / 2) && c < n).slice(0, 6).map(([s]) => s.slice(0, 110)),
  };
}

async function main() {
  const files: string[] = [];
  walk(BUILD_DIR, files);
  console.log(`Rendered pages: ${files.length}`);
  // Group into clusters
  const clusters = new Map<string, { url: string; text: string }[]>();
  const EN = files.filter((f) => !f.includes("(ms)") && !f.includes("(zh)"));
  for (const f of EN) {
    const url = pageUrl(f);
    const m = url.match(/^\/(commercial|residential|process|answers|brands|compare|top|seasonal)\/([^/]+)$/);
    if (m) {
      const key = `/${m[1]}/<slug> (EN)`;
      if (!clusters.has(key)) clusters.set(key, []);
      clusters.get(key)!.push({ url, text: contentText(fs.readFileSync(f, "utf8")) });
    }
    const m2 = url.match(/^\/near-me\/([^/]+)$/);
    if (m2) {
      const key = "/near-me/<svc> (EN)";
      if (!clusters.has(key)) clusters.set(key, []);
      clusters.get(key)!.push({ url, text: contentText(fs.readFileSync(f, "utf8")) });
    }
    const m3 = url.match(/^\/services\/([^/]+)\/(cost|emergency)$/);
    if (m3) {
      const key = `/services/<svc>/${m3[2]} (EN)`;
      if (!clusters.has(key)) clusters.set(key, []);
      clusters.get(key)!.push({ url, text: contentText(fs.readFileSync(f, "utf8")) });
    }
    const m4 = url.match(/^\/problems\/([^/]+)$/);
    if (m4) {
      const key = "/problems/<p> (EN)";
      if (!clusters.has(key)) clusters.set(key, []);
      clusters.get(key)!.push({ url, text: contentText(fs.readFileSync(f, "utf8")) });
    }
  }
  // Area x service: cluster by service across 6 sample areas + vs service page
  const areaSvc = new Map<string, { url: string; text: string }[]>();
  const svcPages = new Map<string, string>();
  for (const f of EN) {
    const url = pageUrl(f);
    const m = url.match(/^\/services\/([^/]+)$/);
    if (m) svcPages.set(m[1], contentText(fs.readFileSync(f, "utf8")));
    const m2 = url.match(/^\/areas\/([^/]+)\/([^/]+)$/);
    if (m2 && ["kuala-lumpur", "petaling-jaya", "cheras", "puchong", "shah-alam", "subang-jaya"].includes(m2[1])) {
      if (!areaSvc.has(m2[2])) areaSvc.set(m2[2], []);
      areaSvc.get(m2[2])!.push({ url, text: contentText(fs.readFileSync(f, "utf8")) });
    }
  }
  const areaVsSvc: Record<string, unknown>[] = [];
  for (const [svc, pages] of areaSvc) {
    const svcText = svcPages.get(svc);
    if (!svcText) continue;
    const sims = pages.map((p) => +jaccard(shingles(p.text), shingles(svcText)).toFixed(3));
    areaVsSvc.push({
      svc,
      n: pages.length,
      meanVsService: +(sims.reduce((a, b) => a + b, 0) / sims.length).toFixed(3),
      min: Math.min(...sims),
      max: Math.max(...sims),
    });
  }
  const areaVsArea: Record<string, unknown>[] = [];
  for (const [svc, pages] of areaSvc) if (pages.length > 2) areaVsArea.push({ svc, ...clusterAnalyze(pages) });

  const out: Record<string, unknown> = {};
  for (const [key, pages] of clusters) out[key] = clusterAnalyze(pages);
  out["areaVsServicePage (mean)"] = areaVsSvc;
  out["areaPagesWithinService (mean)"] = areaVsArea.map((r) => ({ svc: (r as { svc: string }).svc, meanPairwiseJaccard: r.meanPairwiseJaccard, pctShared50: r.pctShared50 }));
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  for (const [key, v] of Object.entries(out)) {
    if (typeof v === "object" && "meanPairwiseJaccard" in (v as object)) {
      const r = v as { n: number; meanPairwiseJaccard: number; pctShared50: number; pctSharedAll: number };
      console.log(`${key.padEnd(34)} n=${String(r.n).padStart(3)} meanJac=${String(r.meanPairwiseJaccard).padStart(6)} shared50=${String(r.pctShared50).padStart(5)}% sharedAll=${String(r.pctSharedAll).padStart(5)}%`);
    }
  }
  console.log("areaVsService:", JSON.stringify(areaVsSvc.filter((x) => x.meanVsService > 0.3), null, 0).slice(0, 800));
}

main().catch((e) => { console.error(e); process.exit(1); });
