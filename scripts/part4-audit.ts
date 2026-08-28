/**
 * Part 4 — SXO / Mobile UX / CRO / CTA / Trust / Local SEO corpus analyzer.
 *
 * Walks the production build (.next/server/app) and emits, per page, the
 * signals that decide the search-experience and conversion quality of the
 * page:
 *
 *   • CTA surface — WhatsApp anchors, tel: anchors, /contact links, estimator
 *     /calculator links, actual <form>/<select>/<input>, quote-box presence
 *   • Trust elements — warranty text, reviews/testimonials, before-after,
 *     process steps, SSM, insured/background-verified, NAP in the content
 *     block (after </footer>) vs whole page
 *   • Price disclosure — "From RM" / numeric starting price presence
 *   • Floating/sticky CTAs — mobile WhatsApp+Call bar, desktop "Book This
 *     Service" float, floating WhatsApp dispatch desk
 *   • Breadcrumbs (UI + BreadcrumbList JSON-LD)
 *   • Local SEO schema — LocalBusiness / Organization / PostalAddress / geo /
 *     areaServed / Service-by-area
 *   • Content-in-<main> vs after-footer (SXO/a11y ordering)
 *
 * Outputs:
 *   docs/audit-part4-corpus.jsonl   — one record per rendered page
 *   docs/audit-part4-aggregate.json — per-URL-pattern aggregates (EN) +
 *                                     CTA/trust schema roll-ups (all locales)
 *   docs/audit-part4-links.json     — internal-link graph: inbound counts,
 *                                     orphan/underlinked/overlinked sets,
 *                                     anchor-text distribution
 *
 * Usage: node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --experimental-strip-types --import ./scripts/ts-resolver.mjs scripts/part4-audit.ts
 */

import fs from "node:fs";
import path from "node:path";

const BUILD_DIR = path.join(process.cwd(), ".next", "server", "app");
const OUT_CORPUS = path.join(process.cwd(), "docs", "audit-part4-corpus.jsonl");
const OUT_AGG = path.join(process.cwd(), "docs", "audit-part4-aggregate.json");
const OUT_LINKS = path.join(process.cwd(), "docs", "audit-part4-links.json");

type Lang = "en" | "ms" | "zh";

type PageRec = {
  url: string;
  pattern: string;
  lang: Lang;
  // CTA surface
  whatsappAnchors: number;
  telAnchors: number;
  contactLinks: number;
  estimatorLinks: number; // /tools/*, /estimate/*, calculator/estimator
  hasForm: boolean;
  hasSelect: boolean;
  hasInput: boolean;
  quoteBox: boolean; // contains a quote/estimate form label or button
  // Trust
  hasWarranty: boolean;
  hasReview: boolean; // Google review / testimonial
  hasTestimonial: boolean;
  hasBeforeAfter: boolean;
  hasProcessSteps: boolean;
  hasSsm: boolean;
  hasInsured: boolean;
  hasResponseTime: boolean; // min/hour/response promise
  napInContent: boolean; // phone+email+address after </footer>
  // Price
  hasStartPrice: boolean; // "From RM" / "starting" numeric
  hasPriceList: boolean; // sub-service price rows
  // Floating / sticky CTAs
  stickyMobileBar: boolean;
  stickyBookButton: boolean;
  whatsappFloat: boolean;
  // Breadcrumbs
  hasBreadcrumbsUi: boolean;
  hasBreadcrumbSchema: boolean;
  // Local schema
  localBusinessSchema: boolean;
  organizationSchema: boolean;
  postalAddressSchema: boolean;
  geoSchema: boolean;
  areaServedSchema: boolean;
  serviceSchema: boolean;
  aggregateRatingSchema: boolean;
  reviewSchema: boolean;
  // Content ordering (SXO / a11y)
  contentAfterFooter: boolean;
  wordsInMain: number;
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

/** Content block = everything after the last </footer> (same as Part 2/3). */
function contentText(html: string): string {
  const idx = html.lastIndexOf("</footer>");
  const block = idx === -1 ? html : html.slice(idx + 9);
  return cleanText(block);
}

const PHONE_RE = /\+?\s*60\s*11[- ]?1662[- ]?7349|601116627349/;
const WA_RE = /wa\.me\/601116627349/;

function walk(dir: string, files: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, files);
    else if (entry.name.endsWith(".html")) files.push(p);
  }
  return files;
}

/** Count of anchors matching a predicate; returns { n, anchors[] } for sampling. */
function countAnchors(html: string, test: (href: string, text: string) => boolean): { n: number; samples: string[] } {
  let n = 0;
  const samples: string[] = [];
  const re = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const attrs = m[1];
    const hrefMatch = attrs.match(/href\s*=\s*"([^"]*)"/);
    const href = hrefMatch ? hrefMatch[1] : "";
    const text = cleanText(m[2]).slice(0, 80);
    if (test(href, text)) {
      n++;
      if (samples.length < 6) samples.push(text || href);
    }
  }
  return { n, samples };
}

function main() {
  const files = walk(BUILD_DIR);
  const recs: PageRec[] = [];

  // Internal-link graph state (shared across pages).
  const inbound = new Map<string, number>();
  const anchorByTarget = new Map<string, Map<string, number>>();
  const totalLinks = { count: 0 };

  const addInboundLink = (to: string, text: string) => {
    const key = to.split("#")[0].split("?")[0];
    if (!key || !key.startsWith("/")) return;
    inbound.set(key, (inbound.get(key) ?? 0) + 1);
    totalLinks.count++;
    if (!anchorByTarget.has(key)) anchorByTarget.set(key, new Map());
    const t = text.trim().replace(/\s+/g, " ").slice(0, 60);
    if (t) anchorByTarget.get(key)!.set(t, (anchorByTarget.get(key)!.get(t) ?? 0) + 1);
  };

  for (const f of files) {
    const url = pageUrl(f);
    const { pattern, lang } = classify(url);
    const html = fs.readFileSync(f, "utf8");
    const text = contentText(html);
    const mainOpen = html.indexOf("<main");
    const mainClose = html.lastIndexOf("</main>");
    const contentAfterFooter = html.lastIndexOf("</footer>") > mainClose;

    const wa = countAnchors(html, (href) => WA_RE.test(href));
    const tel = countAnchors(html, (href) => /^tel:/.test(href));
    const contact = countAnchors(html, (href) => href.startsWith("/contact") || href.startsWith("/ms/contact") || href.startsWith("/zh/contact"));
    const estimator = countAnchors(html, (href) => /^\/(tools|alatan|gongju|estimate)\b/.test(href) || /calculat|estimator|budget/i.test(href));

    // Inbound link collection: every same-origin <a href> on the page.
    const linkRe = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
    let lm: RegExpExecArray | null;
    while ((lm = linkRe.exec(html))) {
      const attrs = lm[1];
      const hrefMatch = attrs.match(/href\s*=\s*"(\/[^"]*)"/);
      if (!hrefMatch) continue;
      const href = hrefMatch[1];
      if (href.startsWith("/_next/")) continue;
      // strip locale prefix only when it maps to a real tree target is complex;
      // keep the raw target for orphan counts (the audit:links already verified targets resolve).
      addInboundLink(href, cleanText(lm[2]));
    }

    recs.push({
      url, pattern, lang,
      whatsappAnchors: wa.n, telAnchors: tel.n, contactLinks: contact.n, estimatorLinks: estimator.n,
      hasForm: /<form\b/.test(html),
      hasSelect: /<select\b/.test(html),
      hasInput: /<input\b/.test(html),
      quoteBox: /quote|Quote|sebut harga|报价|estimate|Estimate|Get a.*[Qq]uote/i.test(text.slice(0, 1200)),
      hasWarranty: /warranty|Waranti|保修|jaminan/i.test(text),
      hasReview: /google review|Google Reviews|testimonial|ulasan|评价|testimoni/i.test(text),
      hasTestimonial: /testimonial|testimoni|客户评价/i.test(text),
      hasBeforeAfter: /before and after|Before|After|sebelum|selepas|前后/i.test(text),
      hasProcessSteps: /process|Process|process\.steps|langkah|步骤/i.test(text),
      hasSsm: /SSM/i.test(text),
      hasInsured: /insured|diinsuranskan|保险|background-?verified|背景/i.test(text),
      hasResponseTime: /30[- ]?min|30 to 60|30–60|60 seconds|response time|respons|响应|arrival time/i.test(text),
      napInContent: PHONE_RE.test(text) && /info@klservisrumah\.my/.test(text) && /Jalan Kiara|Mont Kiara/.test(text),
      hasStartPrice: /from rm\s*\d|RM\s*\d|starting from RM|dari RM/i.test(text),
      hasPriceList: /RM\s*\d{2,}/.test(text),
      stickyMobileBar: html.includes("sticky_mobile_bar"),
      stickyBookButton: html.includes("sticky_book_button"),
      whatsappFloat: html.includes("whatsapp_desk") || /fixed bottom-6 right-6/.test(html),
      hasBreadcrumbsUi: html.includes('aria-label="Breadcrumb"') || /Breadcrumb/i.test(text),
      hasBreadcrumbSchema: html.includes('"BreadcrumbList"'),
      localBusinessSchema: html.includes('"LocalBusiness"'),
      organizationSchema: html.includes('"Organization"'),
      postalAddressSchema: html.includes('"PostalAddress"'),
      geoSchema: html.includes('"GeoCoordinates"') || /geo\.position/.test(html),
      areaServedSchema: html.includes('"areaServed"'),
      serviceSchema: html.includes('"@type":"Service"') || html.includes('"@type": "Service"'),
      aggregateRatingSchema: html.includes('"AggregateRating"'),
      reviewSchema: html.includes('"review"') || html.includes('"Review"'),
      contentAfterFooter,
      wordsInMain: mainOpen !== -1 && mainClose !== -1 ? cleanText(html.slice(mainOpen, mainClose + 7)).split(/\s+/).filter(Boolean).length : 0
    });
  }

  // ---- aggregates per pattern (EN) ----
  const byPattern = new Map<string, PageRec[]>();
  for (const r of recs) {
    if (!byPattern.has(r.pattern)) byPattern.set(r.pattern, []);
    byPattern.get(r.pattern)!.push(r);
  }
  const aggregate: Record<string, unknown> = {
    generatedAt: new Date().toISOString(),
    totalPages: recs.length,
    patterns: {}
  };
  for (const [key, items] of byPattern) {
    const en = items.filter((r) => r.lang === "en");
    if (en.length === 0) continue;
    const pct = (pred: (r: PageRec) => boolean) => Math.round((100 * en.filter(pred).length) / en.length);
    const mean = (vals: number[]) => +(vals.reduce((a, b) => a + b, 0) / (vals.length || 1)).toFixed(2);
    (aggregate.patterns as Record<string, unknown>)[key] = {
      n: en.length,
      pctWhatsapp: pct((r) => r.whatsappAnchors > 0),
      meanWhatsapp: mean(en.map((r) => r.whatsappAnchors)),
      pctTel: pct((r) => r.telAnchors > 0),
      pctContactLink: pct((r) => r.contactLinks > 0),
      pctEstimatorLink: pct((r) => r.estimatorLinks > 0),
      pctForm: pct((r) => r.hasForm),
      pctQuoteBox: pct((r) => r.quoteBox),
      pctStartPrice: pct((r) => r.hasStartPrice),
      pctWarranty: pct((r) => r.hasWarranty),
      pctReview: pct((r) => r.hasReview),
      pctTestimonial: pct((r) => r.hasTestimonial),
      pctBeforeAfter: pct((r) => r.hasBeforeAfter),
      pctProcessSteps: pct((r) => r.hasProcessSteps),
      pctSsm: pct((r) => r.hasSsm),
      pctInsured: pct((r) => r.hasInsured),
      pctResponseTime: pct((r) => r.hasResponseTime),
      pctNapInContent: pct((r) => r.napInContent),
      pctStickyMobileBar: pct((r) => r.stickyMobileBar),
      pctStickyBookButton: pct((r) => r.stickyBookButton),
      pctBreadcrumbs: pct((r) => r.hasBreadcrumbsUi),
      pctBreadcrumbSchema: pct((r) => r.hasBreadcrumbSchema),
      pctLocalBusiness: pct((r) => r.localBusinessSchema),
      pctOrganization: pct((r) => r.organizationSchema),
      pctPostalAddress: pct((r) => r.postalAddressSchema),
      pctGeoSchema: pct((r) => r.geoSchema),
      pctAreaServed: pct((r) => r.areaServedSchema),
      pctServiceSchema: pct((r) => r.serviceSchema),
      pctAggregateRating: pct((r) => r.aggregateRatingSchema),
      pctReviewSchema: pct((r) => r.reviewSchema),
      pctContentAfterFooter: pct((r) => r.contentAfterFooter),
      meanWordsInMain: mean(en.map((r) => r.wordsInMain))
    };
  }

  // ---- internal-link graph ----
  const pageSet = new Set(recs.map((r) => r.url));
  const orphans: string[] = [];
  const underlinked: { url: string; in: number }[] = [];
  const overlinked: { url: string; in: number }[] = [];
  for (const url of pageSet) {
    const inCount = inbound.get(url) ?? 0;
    if (inCount === 0) orphans.push(url);
    else if (inCount > 0 && inCount < 3) underlinked.push({ url, in: inCount });
  }
  // Overlinked = top 1% of inbound counts among non-root pages.
  const inCounts = [...inbound.values()].sort((a, b) => b - a);
  const topCutoff = inCounts[Math.floor(inCounts.length * 0.01)] ?? 0;
  for (const [url, n] of inbound) {
    if (url !== "/" && n >= topCutoff && n > 50) overlinked.push({ url, in: n });
  }
  // Anchor-text category distribution across ALL internal links.
  const anchorCat = { branded: { n: 0, examples: [] as string[] }, generic: { n: 0, examples: [] as string[] }, descriptive: { n: 0, examples: [] as string[] } };
  for (const [, anchors] of anchorByTarget) {
    for (const [text, count] of anchors) {
      if (!text || /^[→↗›»>]|^\s*$/.test(text)) { anchorCat.generic.n += count; continue; }
      if (/kl servis rumah|servisrumah|klservisrumah/i.test(text)) { anchorCat.branded.n += count; if (anchorCat.branded.examples.length < 3) anchorCat.branded.examples.push(text); continue; }
      if (/^(home|back to|view (all|details|more|services|areas|every|common)|read (more|blog|the)|learn more|browse all|see every|get (a )?(quote|free)|book|call|whatsapp|here|viewDetails|see all|all services|all areas|contact|faq|blog|about|pricing)$/i.test(text) || /^\d{6,}$/.test(text)) { anchorCat.generic.n += count; if (anchorCat.generic.examples.length < 3) anchorCat.generic.examples.push(text); continue; }
      anchorCat.descriptive.n += count;
    }
  }
  // Inbound count aggregated per URL pattern (EN only for clarity, plus all-locale).
  const inboundByPattern = new Map<string, { n: number; sum: number; min: number; max: number; avg: number; urls: string[] }>();
  const patternOf = (url: string) => classify(url).pattern;
  for (const [url, count] of inbound) {
    const pat = patternOf(url);
    const rec = inboundByPattern.get(pat) ?? { n: 0, sum: 0, min: count, max: 0, avg: 0, urls: [] };
    rec.n++; rec.sum += count; rec.min = Math.min(rec.min, count); rec.max = Math.max(rec.max, count);
    if (rec.urls.length < 5 && count <= 3) rec.urls.push(`${url} (${count})`);
    inboundByPattern.set(pat, rec);
  }
  const inboundPatterns = Object.fromEntries([...inboundByPattern.entries()].map(([k, v]) => [k, { n: v.n, avgInbound: +(v.sum / v.n).toFixed(1), maxInbound: v.max, lowInboundSample: v.urls }]));
  const linksOut = {
    totalInternalLinks: totalLinks.count,
    totalDistinctTargets: inbound.size,
    orphans,
    orphanCount: orphans.length,
    underlinkedCount: underlinked.length,
    underlinkedSample: underlinked.slice(0, 40),
    overlinkedCount: overlinked.length,
    overlinkedSample: overlinked.sort((a, b) => b.in - a.in).slice(0, 30),
    inboundPatterns,
    anchorCategories: Object.fromEntries(Object.entries(anchorCat).map(([k, v]) => [k, { n: v.n, pct: Math.round((100 * v.n) / totalLinks.count), examples: v.examples }]))
  };

  fs.mkdirSync(path.dirname(OUT_CORPUS), { recursive: true });
  fs.writeFileSync(OUT_CORPUS, recs.map((r) => JSON.stringify(r)).join("\n"));
  fs.writeFileSync(OUT_AGG, JSON.stringify(aggregate, null, 2));
  fs.writeFileSync(OUT_LINKS, JSON.stringify(linksOut, null, 2));

  // ---- console summary ----
  console.log(`Part 4 corpus: ${recs.length} pages`);
  const en = recs.filter((r) => r.lang === "en");
  console.log(`EN: ${en.length}`);
  console.log(`Sticky mobile bar pages (all locales): ${recs.filter((r) => r.stickyMobileBar).length}`);
  console.log(`Sticky "Book This Service" pages (all locales): ${recs.filter((r) => r.stickyBookButton).length}`);
  console.log(`WA+tel anchor pages (en): ${en.filter((r) => r.whatsappAnchors > 0 && r.telAnchors > 0).length}`);
  console.log(`NAP in content block (en): ${en.filter((r) => r.napInContent).length}`);
  console.log(`LocalBusiness schema (en): ${en.filter((r) => r.localBusinessSchema).length}`);
  console.log(`Breadcrumb schema (en): ${en.filter((r) => r.hasBreadcrumbSchema).length}`);
  console.log(`Content after </footer> (en): ${en.filter((r) => r.contentAfterFooter).length}`);
  console.log(`Internal links: ${totalLinks.count} | targets: ${inbound.size} | orphans: ${linksOut.orphanCount} | underlinked(<3): ${linksOut.underlinkedCount} | overlinked: ${linksOut.overlinkedCount}`);
  for (const [key, v] of Object.entries(aggregate.patterns as Record<string, unknown>)) {
    const p = v as { n: number; pctWhatsapp: number; pctStartPrice: number; pctStickyBookButton: number; pctNapInContent: number; pctLocalBusiness: number; pctContentAfterFooter: number; meanWordsInMain: number };
    console.log(`${key.padEnd(28)} n=${String(p.n).padStart(4)} wa=${String(p.pctWhatsapp).padStart(3)}% price=${String(p.pctStartPrice).padStart(3)}% sticky=$${String(p.pctStickyBookButton).padStart(3)}% nap=${String(p.pctNapInContent).padStart(3)}% lb=${String(p.pctLocalBusiness).padStart(3)}% afterFtr=${String(p.pctContentAfterFooter).padStart(3)}% wordsMain=${String(p.meanWordsInMain).padStart(5)}`);
  }
}

main();
