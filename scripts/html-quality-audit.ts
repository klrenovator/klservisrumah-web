/**
 * Full-corpus HTML quality audit (Session 011).
 *
 * Walks every generated HTML page in `.next/server/app` and checks the
 * dimensions that source-level linting cannot see:
 *
 *   1. `<img>` without an `alt` attribute (WCAG 1.1.1) — or empty alt on a
 *      non-decorative-looking image (reported, not fatal).
 *   2. `<a>` with empty / `#` / `javascript:` hrefs — unusable or unsafe
 *      links. `href="#"` links are crawl dead-ends and keyboard traps.
 *   3. `<a target="_blank">` without `rel="noopener"` (tabnabbing).
 *   4. `<button>` with no accessible name (no text, no aria-label/title).
 *   5. Duplicate `id` attributes within one page (breaks labels/anchors).
 *   6. Missing / empty `<title>` or meta description.
 *   7. `<html lang>` missing or inconsistent with the URL prefix.
 *   8. Every `<script type="application/ld+json">` must parse as valid JSON.
 *   9. Page size report (raw bytes + gzip estimate) — keeps the H2 page-size
 *      decision data-gated instead of estimated.
 *  10. Exactly one `<main>` landmark per document (duplicate landmarks break
 *      the skip link and the screen-reader landmark list).
 *  11. Exactly one `<h1>` per document.
 *  12. No lower-cased currency in readable text ("from rm 14 / sq ft") — a
 *      price mangled by a `.toLowerCase()` interpolation (P3-05 follow-up).
 *  16. No raw message-template placeholder ("{name}") in readable text — a
 *      missing substitution variable renders the literal token to visitors
 *      (caught live on /ms/services/painting/cost, Fix Wave 28).
 *  17. On /ms/… and /zh/… pages, WhatsApp prefill links must not carry
 *      English template phrases ("cost quote", "I would like…") — a BM/中文
 *      visitor must never send an English message to the dispatch desk
 *      (caught live, Fix Wave 28).
 *
 * Exits non-zero if any FATAL finding exists, so it can be wired into CI or
 * `prebuild` like `seo-audit.ts`. Warnings are reported but do not fail.
 *
 * Run: `npm run audit:html` (after `npm run build`).
 */
import fs from "node:fs";
import path from "node:path";
import { gzipSync } from "node:zlib";

const BUILD = path.join(process.cwd(), ".next", "server", "app");

type Finding = {
  page: string;
  kind: string;
  detail: string;
  fatal: boolean;
};

const findings: Finding[] = [];

function report(page: string, kind: string, detail: string, fatal = true) {
  findings.push({ page, kind, detail, fatal });
}

const sizeStats: { bytes: number; gzip: number }[] = [];
const pageList: string[] = [];

function listPages(): string[] {
  return pageList;
}

function walk(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(p);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      pageList.push(pageUrl(p));
      audit(p);
    }
  }
}

/** On-disk relative URL for a built HTML file, e.g. `/services/painting`. */
function pageUrl(p: string): string {
  // Route groups appear in the on-disk build path (`(ms)/ms/...`) but not in
  // the URL — strip them before deriving the page URL.
  let rel = p
    .slice(BUILD.length)
    .replace(/\.html$/, "")
    .replace(/\/\([^)]+\)/g, "");
  if (!rel.startsWith("/")) rel = "/" + rel;
  if (rel.endsWith("/index")) rel = rel.slice(0, -"/index".length);
  if (rel === "") rel = "/";
  return rel;
}

function audit(file: string) {
  const url = pageUrl(file);
  const rawHtml = fs.readFileSync(file, "utf8");
  sizeStats.push({ bytes: Buffer.byteLength(rawHtml, "utf8"), gzip: gzipSync(rawHtml, { level: 9 }).length });

  // Strip <script>/<style> bodies before scanning for markup: Next.js's inline
  // bootstrap chunks contain text like `<a.length;b+=2)` that regexes for
  // `<a ...>` would otherwise misread as anchors.
  const html = rawHtml.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ");

  // 1. Images without alt.
  const imgRe = /<img\b[^>]*>/gi;
  let imgMatch: RegExpExecArray | null;
  while ((imgMatch = imgRe.exec(html)) !== null) {
    const tag = imgMatch[0];
    if (!/alt=/i.test(tag)) {
      report(url, "img-no-alt", truncate(tag));
    } else {
      const alt = (/alt="([^"]*)"/i.exec(tag) || [])[1] ?? "";
      // Empty alt is legal for decorative images, but flag it so it can be
      // eyeballed once — most of this site's images are meaningful photos.
      if (alt.trim() === "") {
        report(url, "img-empty-alt", truncate(tag), false);
      }
    }
  }

  // 2. Broken / dead links.
  const aRe = /<a\b[^>]*>/gi;
  let aMatch: RegExpExecArray | null;
  while ((aMatch = aRe.exec(html)) !== null) {
    const tag = aMatch[0];
    const href = (/href="([^"]*)"/i.exec(tag) || [])[1];
    if (href === undefined || href === "") {
      report(url, "a-no-href", truncate(tag));
    } else if (href === "#" || href.startsWith("javascript:")) {
      report(url, "a-dead-href", truncate(tag));
    }
    // 3. Tabnabbing: target=_blank without noopener.
    if (/target="_blank"/i.test(tag) && !/rel="[^"]*\bnoopener\b/i.test(tag)) {
      report(url, "a-tabnabbing", truncate(tag));
    }
  }

  // 4. Buttons with no accessible name.
  const btnRe = /<button\b[^>]*>/gi;
  let btnMatch: RegExpExecArray | null;
  while ((btnMatch = btnRe.exec(html)) !== null) {
    const tag = btnMatch[0];
    const selfClosing = /\/>$/.test(tag);
    if (selfClosing) continue;
    const hasAria = /aria-label="[^"]+"/i.test(tag) || /aria-labelledby=/i.test(tag) || /title="[^"]+"/i.test(tag);
    if (hasAria) continue;
    // Look at the content between this button tag and its closing tag.
    const rest = html.slice(btnMatch.index + tag.length, btnMatch.index + tag.length + 2000);
    const closeIdx = rest.search(/<\/button>/i);
    const inner = closeIdx === -1 ? rest : rest.slice(0, closeIdx);
    const text = inner.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    const hasImg = /<img\b/i.test(inner) && /alt="[^"]+"/i.test(inner);
    if (text === "" && !hasImg) {
      report(url, "button-no-name", truncate(tag + inner.slice(0, 80)));
    }
  }

  // 5. Duplicate ids.
  const idRe = /id="([^"]+)"/gi;
  const ids = new Map<string, number>();
  let idMatch: RegExpExecArray | null;
  while ((idMatch = idRe.exec(html)) !== null) {
    const id = idMatch[1];
    ids.set(id, (ids.get(id) ?? 0) + 1);
  }
  for (const [id, count] of ids) {
    if (count > 1) {
      report(url, "duplicate-id", `${id} ×${count}`);
    }
  }

  // 6. Title / description.
  const title = (/<title[^>]*>([^<]*)<\/title>/i.exec(html) || [])[1]?.trim() ?? "";
  if (!title) {
    report(url, "missing-title", "");
  }
  const desc = (/<meta\b[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i.exec(html) || [])[1]?.trim() ?? "";
  if (!desc) {
    report(url, "missing-description", "");
  }

  // 7. html lang consistency — primary subtag must match the URL locale
  //    (the site deliberately uses regional tags like en-MY / ms-MY / zh-CN,
  //    which is correct and better than bare language codes).
  //
  //    Exception: the framework's `_not-found` document shell is generated by
  //    Next.js itself (it emits `<html>` without lang for the app-level 404
  //    when multiple root layouts exist). The site's own not-found component
  //    corrects it client-side via an inline script; server-side it is outside
  //    our control, so it is not a defect of this codebase.
  const lang = (/<html[^>]*lang="([^"]+)"/i.exec(html) || [])[1] ?? "";
  if (!lang && url !== "/_not-found") {
    report(url, "missing-lang", "");
  } else if (lang) {
    const primary = lang.split("-")[0].toLowerCase();
    const expected =
      url.startsWith("/ms") ? "ms" :
      url.startsWith("/zh") ? "zh" : "en";
    if (primary !== expected) {
      report(url, "lang-mismatch", `lang=${lang}, expected ${expected}`);
    }
  }

  // 8. JSON-LD parseability.
  const ldRe = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let ldMatch: RegExpExecArray | null;
  while ((ldMatch = ldRe.exec(html)) !== null) {
    const raw = ldMatch[1].trim();
    if (!raw) continue;
    try {
      JSON.parse(raw);
    } catch {
      report(url, "jsonld-invalid", truncate(raw));
    }
  }

  // 10. Exactly one `main` landmark.
  //
  //     `SiteChrome` already wraps every route in `<main id="main-content">`,
  //     which is also the skip-link target. Pages and shared components that
  //     opened their own `<main>` produced two `main` landmarks in one
  //     document: invalid HTML, and a screen reader announces two "main"
  //     regions with the skip link jumping to the outer one. This caught the
  //     legal pages (/privacy, /terms and their ms/zh twins), the MS/ZH blog
  //     article pages and the admin dashboard.
  const mainCount = (html.match(/<main\b/gi) || []).length;
  if (mainCount !== 1) {
    report(url, mainCount === 0 ? "no-main-landmark" : "duplicate-main-landmark", `${mainCount} <main> elements`);
  }

  // 11. Exactly one `h1`.
  //
  //     Zero h1s leaves the document without a programmatic title; more than
  //     one splits the document outline and dilutes the primary keyword signal.
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) {
    report(url, h1Count === 0 ? "no-h1" : "multiple-h1", `${h1Count} <h1> elements`);
  }

  // 12–14. Landmark reading order (audit C2 / P2-C1 / P4-01).
  //
  //     A root `loading.tsx` used to flush "Loading…" into `<main>` and stream
  //     the real page (including the H1) after `</footer>`. JS-less crawlers
  //     then saw an empty landmark. These checks fail the build if that
  //     pattern returns.
  const mainOpen = html.search(/<main\b/i);
  const mainClose = html.search(/<\/main>/i);
  const h1Open = html.search(/<h1\b/i);
  const footerClose = html.lastIndexOf("</footer>");
  if (mainOpen >= 0 && mainClose > mainOpen) {
    const mainInner = html.slice(mainOpen, mainClose);
    const mainText = mainInner.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (/^(Loading\.\.\.|Memuatkan\.\.\.|加载中\.\.\.)$/i.test(mainText)) {
      report(url, "main-loading-shell", truncate(mainText));
    }
    if (h1Open >= 0 && (h1Open < mainOpen || h1Open > mainClose)) {
      report(url, "h1-outside-main", `h1@${h1Open} main=${mainOpen}–${mainClose}`);
    }
  }
  if (h1Open >= 0 && footerClose >= 0 && h1Open > footerClose) {
    report(url, "h1-after-footer", `h1@${h1Open} footer@${footerClose}`);
  }

  // 15. Lower-cased currency in readable text (P3-05 follow-up, Fix Wave 12).
  //
  //     "…packages start from rm 14 / sq ft" — a price whose currency token was
  //     lower-cased by a `.toLowerCase()` interpolation of a registry field
  //     into a sentence. The service-hub DirectAnswer did exactly that on 28 of
  //     29 hubs. Answer engines quote that sentence verbatim, so a mangled "rm"
  //     is both a trust problem for the reader and a machine-readability one
  //     for the extractor. Case-SENSITIVE on purpose: "RM 450" must not match.
  //     Scripts/styles are stripped first so JSON-LD, CSS and JS never trigger
  //     it.
  const readable = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  const lowerCurrency = readable.match(/(^|[^A-Za-z])rm\s?\d[\d,.]*/);
  if (lowerCurrency) {
    const at = lowerCurrency.index ?? 0;
    report(url, "lowercase-currency", truncate(readable.slice(Math.max(0, at - 60), at + 60)));
  }

  // 16. Raw message-template placeholder in readable text (Fix Wave 28).
  //
  //     `{t("costPage.methodHeading")}` was rendered WITHOUT its {name}
  //     variable, so 29 cost pages × 3 locales published the literal heading
  //     "Dari mana harga {name} ini datang". Scripts/styles are stripped
  //     above, so a brace token here is always visible visitor-facing text.
  const rawPlaceholder = readable.match(/\{[a-zA-Z][a-zA-Z0-9_]*\}/);
  if (rawPlaceholder) {
    const at = rawPlaceholder.index ?? 0;
    report(url, "raw-template-placeholder", truncate(readable.slice(Math.max(0, at - 60), at + 60)));
  }

  // 17. English WhatsApp prefill phrases on BM/中文 pages (Fix Wave 28).
  //
  //     The cost page built its WhatsApp link as `${service.title} cost
  //     quote`, so BM visitors were set up to text the dispatch desk
  //     "…Perkhidmatan Mengecat Rumah cost quote untuk harta saya". The
  //     prefill lives in the href (never visible text), so only an attribute
  //     scan can catch it. Forbidden substrings are the English templates
  //     from lib/whatsapp.ts — they can never legitimately appear inside a
  //     /ms/… or /zh/… page's wa.me link.
  if (url.startsWith("/ms/") || url.startsWith("/zh/")) {
    const waRe = /href="https:\/\/wa\.me\/[^"]*[?&]text=([^"&]+)[^"]*"/gi;
    let waMatch: RegExpExecArray | null;
    while ((waMatch = waRe.exec(html)) !== null) {
      let decoded: string;
      try {
        decoded = decodeURIComponent(waMatch[1]);
      } catch {
        continue;
      }
      if (/\bcost\s+quote\b|\bI would like\b|\bI am looking\b|\bI am located\b|\bCan I check\b|\bHello KL Servis Rumah\b|\bfor my property\b|\bbook a home service\b/i.test(decoded)) {
        report(url, "wa-prefill-locale-leak", truncate(decoded));
      }
    }
  }
}

function truncate(s: string, n = 140): string {
  const clean = s.replace(/\s+/g, " ").trim();
  return clean.length > n ? clean.slice(0, n) + "…" : clean;
}

if (!fs.existsSync(BUILD)) {
  console.error("❌ Build output not found — run `npm run build` first.");
  process.exit(1);
}

walk(BUILD);

// Size report — largest 15 pages.
const byBytes = [...sizeStats].sort((a, b) => b.bytes - a.bytes);

console.log("📊 Full-corpus HTML quality audit");
console.log(`   Pages checked: ${sizeStats.length}`);
console.log(`   Raw HTML total: ${(byBytes.reduce((s, r) => s + r.bytes, 0) / 1048576).toFixed(1)} MB`);
console.log(`   Gzip total: ${(byBytes.reduce((s, r) => s + r.gzip, 0) / 1048576).toFixed(1)} MB`);
console.log(`   Median raw: ${(byBytes[Math.floor(byBytes.length / 2)].bytes / 1024).toFixed(1)} KB`);

const fatals = findings.filter((f) => f.fatal);
const warnings = findings.filter((f) => !f.fatal);

const byKind = (list: Finding[]) => {
  const counts = new Map<string, number>();
  for (const f of list) counts.set(f.kind, (counts.get(f.kind) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
};

console.log("\n🔴 Fatal findings:");
if (fatals.length === 0) {
  console.log("   none");
} else {
  for (const [kind, count] of byKind(fatals)) console.log(`   ${kind}: ${count}`);
}

console.log("\n🟡 Warnings (informational):");
if (warnings.length === 0) {
  console.log("   none");
} else {
  for (const [kind, count] of byKind(warnings)) console.log(`   ${kind}: ${count}`);
}

const sample = fatals.slice(0, 15);
if (sample.length) {
  console.log("\nSample of fatal findings (first 15):");
  for (const f of sample) console.log(`   ${f.page} — ${f.kind}: ${f.detail}`);
}

console.log("\nLargest 15 pages (raw / gzip):");
const ordered = [...sizeStats].map((s, i) => ({ ...s, i })).sort((a, b) => b.bytes - a.bytes);
const pages = listPages();
for (let i = 0; i < Math.min(15, ordered.length); i++) {
  const r = ordered[i];
  console.log(`   ${(r.bytes / 1024).toFixed(0).padStart(6)} KB raw / ${(r.gzip / 1024).toFixed(0).padStart(4)} KB gz  ${pages[r.i] ?? "?"}`);
}

process.exit(fatals.length > 0 ? 1 : 0);
