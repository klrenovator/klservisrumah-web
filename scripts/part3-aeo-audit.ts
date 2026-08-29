/**
 * Part 3 — AEO / GEO / LLMO / AI-Search corpus analyzer.
 *
 * Walks the production build (`.next/server/app`) and emits, per page, the
 * signals that decide how answer engines (Google AI Overviews / AI Mode,
 * ChatGPT, Perplexity, Gemini, Claude, Bing Copilot) can retrieve, quote and
 * cite the page:
 *
 *   • question-headed content (H2/H3 ending in "?") and question families
 *     (how-much / how-long / which-better / what-causes / when / can / is)
 *   • the DirectAnswer ("quick-answer") AI-citable block
 *   • trilingual leakage inside the DirectAnswer BM/中文 sub-blocks
 *     (English fragments embedded in Malay/Chinese sentences)
 *   • FAQPage / HowTo / Speakable schema coverage
 *   • NAP presence (phone / email / address) in readable text
 *   • vague-marketing wording (LLM-summarization hazard)
 *   • content depth and first-160-characters (what an AI extractor reads
 *     first)
 *
 * Outputs:
 *   docs/audit-part3-corpus.jsonl   — one record per rendered page
 *   docs/audit-part3-aggregate.json — per-URL-pattern aggregates (EN) +
 *                                     trilingual-leak rollups (all locales)
 *
 * Usage: node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --experimental-strip-types --import ./scripts/ts-resolver.mjs scripts/part3-aeo-audit.ts
 */

import fs from "node:fs";
import path from "node:path";
import { servicesData } from "@/config/services-data";
import { trilingualLeakSignatures } from "@/lib/trilingual-leak";

const BUILD_DIR = path.join(process.cwd(), ".next", "server", "app");
const OUT_CORPUS = path.join(process.cwd(), "docs", "audit-part3-corpus.jsonl");
const OUT_AGG = path.join(process.cwd(), "docs", "audit-part3-aggregate.json");

type Lang = "en" | "ms" | "zh";

type PageRec = {
  url: string;
  pattern: string;
  lang: Lang;
  words: number;
  cjk: number;
  questionH2: number;
  questionH3: number;
  questionHeadings: string[];
  families: Record<string, number>;
  hasQuickAnswer: boolean;
  faqSchema: boolean;
  faqQuestions: number; // Q&A entries in FAQPage JSON-LD
  howToSchema: boolean;
  speakableSchema: boolean;
  napWholePage: boolean; // phone+email+address anywhere in the raw HTML (footer included)
  hasNapPhone: boolean;
  hasNapEmail: boolean;
  hasNapAddress: boolean;
  vagueCount: number;
  vagueSamples: string[];
  trilingualBmLeak: number; // leak signatures inside rendered BM note spans (P3-01 detector)
  trilingualZhLeak: number; // leak signatures inside rendered 中文 note spans (P3-01 detector)
  contentStart: string;
};

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
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&rarr;|&raquo;|&rsaquo;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Content block = everything after the last </footer> (same convention as Part 2). */
function contentText(html: string): string {
  const idx = html.lastIndexOf("</footer>");
  const block = idx === -1 ? html : html.slice(idx + 9);
  return cleanText(block);
}

function wordStats(text: string): { words: number; cjk: number } {
  const cjk = (text.match(/[\u4e00-\u9fff]/g) || []).length;
  const latin = text.replace(/[\u4e00-\u9fff]/g, " ").split(/\s+/).filter(Boolean).length;
  return { words: latin + cjk, cjk };
}

function headings(html: string): { h2: string[]; h3: string[] } {
  const h2: string[] = [];
  const h3: string[] = [];
  const re = /<h([23])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const txt = cleanText(m[2]);
    if (!txt) continue;
    if (m[1] === "2") h2.push(txt);
    else h3.push(txt);
  }
  return { h2, h3 };
}

const FAMILY_PATTERNS: { key: string; re: RegExp }[] = [
  { key: "howMuch", re: /how much|what (is|are).*(cost|price)|cost of|price of|berapa|harga|费用|多少钱|价格|报价/i },
  { key: "howLong", re: /how long|how many (days|hours|weeks)|take to|berapa lama|durasi|多久|多长时间|几天|多长时间能/i },
  { key: "whichBetter", re: /which (is|one)|vs\.?|versus|better than|lebih baik|哪个|还是|比較|对比/i },
  { key: "whatCauses", re: /what causes|why (is|does|are|do)|punca|kenapa|sebab|为什么|原因|是什么导致/i },
  { key: "whenShould", re: /when (should|do|to)|bila|什么时候|何时/i },
  { key: "canDo", re: /^can |^could |^do you |^does |^boleh|^adakah|能不能|可以|是否/i },
  { key: "isIt", re: /^is |^are |^am i |^is it/i }
];

const VAGUE_TERMS = [
  /\bbest\b/i,
  /\bpremium\b/i,
  /\btop-?quality\b/i,
  /\breliable\b/i,
  /\btrusted\b/i,
  /\baffordable\b/i,
  /\bexpert\b/i,
  /\bleading\b/i,
  /\bunbeatable\b/i,
  /\b#1\b/i,
  /\baward-?winning\b/i,
  /\bhigh-?quality\b/i,
  /\bworld-?class\b/i,
  /\bsuperior\b/i,
  /\bguaranteed (results|satisfaction)\b/i
];

/**
 * Count English-leakage signatures inside the DirectAnswer trilingual sub-note
 * (P3-01). This replaces the original "ASCII words between fixed anchors"
 * counter, which (a) could not tell Malay from English — Malay is written in
 * the Latin script, so clean localized notes scored as leaks and (b) missed
 * the quote-only BM branch (no "Pakej kami bermula" end anchor). The notes are
 * now extracted from the rendered `trilingual-sub` paragraphs (hero subline +
 * quick-answer note spans) and scored with the shared structural detector in
 * lib/trilingual-leak: EN-field containment against the page's own registry
 * entry, English area-unit tokens, and English function-word density.
 */
function trilingualLeaks(html: string, url: string): { bm: number; zh: number } {
  const slug = url.match(/^(?:\/(?:ms|zh))?\/services\/([a-z0-9-]+)$/)?.[1];
  const svc = slug ? servicesData[slug] : undefined;
  const en = svc ? { title: svc.title, tagline: svc.tagline, warranty: svc.warranty } : {};
  let bm = 0;
  let zh = 0;
  const paras = html.match(/<p class="trilingual-sub[^"]*"[^>]*>[\s\S]*?<\/p>/g) || [];
  for (const p of paras) {
    const flat = cleanText(p);
    const bmM = flat.match(/BM:\s*(.*?)(?:[·|]\s*中文:|中文:|$)/);
    const zhM = flat.match(/中文:\s*(.*)$/);
    if (bmM) bm += trilingualLeakSignatures(bmM[1].trim(), en).length;
    if (zhM) zh += trilingualLeakSignatures(zhM[1].trim(), en).length;
  }
  return { bm, zh };
}

/** Number of Q&A entries in FAQPage JSON-LD blocks. */
function faqQuestionCount(html: string): number {
  let count = 0;
  const re = /"@type"\s*:\s*"FAQPage"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    // questions are serialised as {"@type":"Question","name":...}
    const window = html.slice(m.index, m.index + 30000);
    const q = window.match(/"@type"\s*:\s*"Question"/g);
    if (q) count += q.length;
  }
  return count;
}

function walk(dir: string, files: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, files);
    else if (entry.name.endsWith(".html")) files.push(p);
  }
  return files;
}

function main() {
  const files = walk(BUILD_DIR);
  const recs: PageRec[] = [];
  for (const f of files) {
    const url = pageUrl(f);
    const { pattern, lang } = classify(url);
    const html = fs.readFileSync(f, "utf8");
    const text = contentText(html);
    const { words, cjk } = wordStats(text);
    const { h2, h3 } = headings(html);
    const qHeadings = [...h2, ...h3].filter((h) => h.trim().endsWith("?") || h.trim().endsWith("？"));
    const families: Record<string, number> = {};
    for (const h of [...h2, ...h3]) {
      for (const fam of FAMILY_PATTERNS) if (fam.re.test(h)) families[fam.key] = (families[fam.key] ?? 0) + 1;
    }
    const vague: string[] = [];
    for (const re of VAGUE_TERMS) {
      const m = text.match(re);
      if (m && vague.length < 8) vague.push(m[0]);
    }
    const leaks = trilingualLeaks(html, url);
    recs.push({
      url,
      pattern,
      lang,
      words,
      cjk,
      questionH2: h2.filter((h) => h.trim().endsWith("?") || h.trim().endsWith("？")).length,
      questionH3: h3.filter((h) => h.trim().endsWith("?") || h.trim().endsWith("？")).length,
      questionHeadings: qHeadings.slice(0, 10),
      families,
      hasQuickAnswer: text.includes("Direct Answer · Jawapan Ringkas · 直接答案"),
      faqSchema: html.includes('"FAQPage"'),
      faqQuestions: faqQuestionCount(html),
      howToSchema: html.includes('"HowTo"'),
      speakableSchema: html.includes('"SpeakableSpecification"'),
      napWholePage: /\+?\s*60\s*11[- ]?1662[- ]?7349|601116627349/.test(html) && /info@klservisrumah\.my/.test(html) && /Jalan Kiara|Mont Kiara/.test(html),
      hasNapPhone: /\+?\s*60\s*11[- ]?1662[- ]?7349|601116627349/.test(text),
      hasNapEmail: /info@klservisrumah\.my/.test(text),
      hasNapAddress: /Jalan Kiara|Mont Kiara/.test(text),
      vagueCount: vague.length,
      vagueSamples: vague,
      trilingualBmLeak: leaks.bm,
      trilingualZhLeak: leaks.zh,
      contentStart: text.slice(0, 180)
    });
  }

  // ---- aggregates ----
  const byPattern = new Map<string, PageRec[]>();
  for (const r of recs) {
    if (!byPattern.has(r.pattern)) byPattern.set(r.pattern, []);
    byPattern.get(r.pattern)!.push(r);
  }
  const aggregate: Record<string, unknown> = {
    generatedAt: new Date().toISOString(),
    totalPages: recs.length,
    trilingualLeaks: {
      pagesWithBmLeak: recs.filter((r) => r.trilingualBmLeak > 2).length,
      pagesWithZhLeak: recs.filter((r) => r.trilingualZhLeak > 2).length,
      bmLeakByPattern: {},
      zhLeakByPattern: {}
    },
    patterns: {}
  };
  for (const [key, items] of byPattern) {
    const en = items.filter((r) => r.lang === "en");
    if (en.length === 0) continue;
    const q2 = en.filter((r) => r.questionH2 > 0).length;
    const q3 = en.filter((r) => r.questionH3 > 0).length;
    const qa = en.filter((r) => r.hasQuickAnswer).length;
    const faq = en.filter((r) => r.faqSchema).length;
    const howTo = en.filter((r) => r.howToSchema).length;
    const speakable = en.filter((r) => r.speakableSchema).length;
    const nap = en.filter((r) => r.hasNapPhone && r.hasNapEmail).length;
    const napWhole = en.filter((r) => r.napWholePage).length;
    const faqQ = en.reduce((a, r) => a + (r.faqQuestions || 0), 0);
    const vaguePages = en.filter((r) => r.vagueCount > 0).length;
    const famCounts: Record<string, number> = {};
    for (const r of en) for (const [k, v] of Object.entries(r.families)) famCounts[k] = (famCounts[k] ?? 0) + v;
    const words = en.map((r) => r.words);
    const mean = (a: number[]) => a.reduce((x, y) => x + y, 0) / (a.length || 1);
    (aggregate.patterns as Record<string, unknown>)[key] = {
      n: en.length,
      pctQuestionH2: Math.round((100 * q2) / en.length),
      pctQuestionH3: Math.round((100 * q3) / en.length),
      meanQuestionHeadings: +mean(en.map((r) => r.questionH2 + r.questionH3)).toFixed(2),
      familyPages: famCounts,
      pctQuickAnswer: Math.round((100 * qa) / en.length),
      pctFaqSchema: Math.round((100 * faq) / en.length),
      pctHowToSchema: Math.round((100 * howTo) / en.length),
      pctSpeakable: Math.round((100 * speakable) / en.length),
      pctNap: Math.round((100 * nap) / en.length),
      pctNapWholePage: Math.round((100 * napWhole) / en.length),
      faqQuestionMean: +(faqQ / (en.length || 1)).toFixed(1),
      pctVague: Math.round((100 * vaguePages) / en.length),
      meanWords: Math.round(mean(words)),
      sampleQuestions: [...new Set(en.flatMap((r) => r.questionHeadings))].slice(0, 6)
    };
  }
  // trilingual leak rollups per pattern
  const bmByPattern: Record<string, number> = {};
  const zhByPattern: Record<string, number> = {};
  for (const r of recs) {
    if (r.trilingualBmLeak > 0) bmByPattern[r.pattern] = (bmByPattern[r.pattern] ?? 0) + 1;
    if (r.trilingualZhLeak > 0) zhByPattern[r.pattern] = (zhByPattern[r.pattern] ?? 0) + 1;
  }
  (aggregate.trilingualLeaks as Record<string, unknown>).bmLeakByPattern = bmByPattern;
  (aggregate.trilingualLeaks as Record<string, unknown>).zhLeakByPattern = zhByPattern;

  fs.mkdirSync(path.dirname(OUT_CORPUS), { recursive: true });
  fs.writeFileSync(OUT_CORPUS, recs.map((r) => JSON.stringify(r)).join("\n"));
  fs.writeFileSync(OUT_AGG, JSON.stringify(aggregate, null, 2));

  // ---- console summary ----
  console.log(`Part 3 AEO corpus: ${recs.length} pages`);
  const en = recs.filter((r) => r.lang === "en");
  console.log(`EN pages with ≥1 question heading: ${en.filter((r) => r.questionH2 + r.questionH3 > 0).length}/${en.length}`);
  console.log(`EN pages with quick-answer block: ${en.filter((r) => r.hasQuickAnswer).length}`);
  console.log(`Trilingual-leak pages (structural: EN containment / units / function words — see lib/trilingual-leak): BM ${recs.filter((r) => r.trilingualBmLeak > 0).length} | ZH ${recs.filter((r) => r.trilingualZhLeak > 0).length}`);
  const bmLeakPages = recs.filter((r) => r.trilingualBmLeak > 0);
  const zhLeakPages = recs.filter((r) => r.trilingualZhLeak > 0);
  const leakByPattern = (pages: PageRec[]) => {
    const m = new Map<string, number>();
    for (const r of pages) m.set(r.pattern, (m.get(r.pattern) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  };
  console.log('BM leak by pattern:', JSON.stringify(leakByPattern(bmLeakPages)));
  console.log('ZH leak by pattern:', JSON.stringify(leakByPattern(zhLeakPages)));
  const leakSamples = recs.filter((r) => r.trilingualBmLeak > 0 || r.trilingualZhLeak > 0).slice(0, 8).map((r) => r.url);
  console.log('leak samples:', JSON.stringify(leakSamples));
  for (const [key, v] of Object.entries(aggregate.patterns as Record<string, unknown>)) {
    const p = v as { n: number; pctQuestionH2: number; pctFaqSchema: number; pctQuickAnswer: number; pctNap: number; meanWords: number };
    console.log(`${key.padEnd(28)} n=${String(p.n).padStart(4)} qH2=${String(p.pctQuestionH2).padStart(3)}% qa=${String(p.pctQuickAnswer).padStart(3)}% faqSchema=${String(p.pctFaqSchema).padStart(3)}% nap=${String(p.pctNap).padStart(3)}% words=${String(p.meanWords).padStart(5)}`);
  }
}

main();
