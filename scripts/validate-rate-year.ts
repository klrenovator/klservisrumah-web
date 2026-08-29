/**
 * §5.6 RATE_YEAR gate (`audit:rate-year`, wired into `prebuild`).
 *
 * WHY THIS EXISTS
 * ---------------
 * Part 5 §5.6 (Content Decay) prescribed a "RATE_YEAR build assertion" —
 * the build must fail if year-stamped marketing copy claims a year other
 * than the current one. Without it, "2026 rates" copy silently decays into
 * a staleness signal for Google and answer engines the moment the calendar
 * flips.
 *
 * HOW IT WORKS
 * ------------
 * 1. `config/rate-year.ts` derives RATE_YEAR from the clock; the flagship
 *    English surfaces interpolate `RATE_YEAR_LABEL` so they self-update.
 * 2. This gate scans the remaining hand-written copy (including the MS/ZH
 *    tool dictionaries, which are plain strings) for bare `20xx` year
 *    claims *inside string literals* and asserts every one equals
 *    RATE_YEAR. Numeric code (lat/lng decimals, quantity presets like
 *    `value: 2000`, model numbers outside strings) is not marketing copy
 *    and is ignored by construction.
 * 3. Legitimate contexts are exempted even inside strings:
 *    - date stamps (lastReviewed, "Last updated:", ISO dates, month-year
 *      like "Sept 2023" inside comments) — not year claims;
 *    - historical facts (foundingDate);
 *    - product model names ("Autogate 2000" is a motor brand, not a year).
 *    Generated files and blog articles (whose dates are publish dates,
 *    governed by the editorial rota) are out of scope.
 *
 * On January 1st of a new year this gate fails with the exact file:line
 * list of every claim to refresh — the annual freshness ritual, enforced.
 */

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { globSync } from "node:fs";
import { RATE_YEAR } from "../config/rate-year.ts";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Files whose year tokens are publish/historical dates, not rate claims. */
const SKIP_FILES = new Set([
  // Blog content: dates are publish dates (freshness rota governs them).
  "config/blog-data.ts",
  "config/blog-data-extra.ts",
  "config/blog-data-batch4.ts",
  "config/blog-data-awning.ts",
  "config/blog-i18n.ts",
  // Historical/handoff facts and evidence logs.
  "config/problem-canonical.ts",
  "config/topical-authority-map.ts",
  "config/topical-authority-validate.ts",
  // Legal copy: carries historical references (PDPA 2010, SSM registration
  // year, act citations) that must NOT be rewritten annually.
  "config/legal-content.ts",
]);

/** Line contexts that are dates/facts rather than year claims. */
const DATE_CONTEXT =
  /lastReviewed|reviewLastUpdated|Last updated|Dikemas kini|最后更新|foundingDate|renewedDate|issuedDate/;

/** ISO date like 2026-07-25 (also inside JSON-LD strings). */
const ISO_DATE = /\b(19|20)\d{2}-\d{2}-\d{2}\b/;

/** Product model name, not a year (Malaysian autogate motor brand). */
const PRODUCT_MODEL = /Autogate\s*2000/;

/** Bare 4-digit year token inside a string literal. */
const YEAR_TOKEN = /(19|20)\d{2}/g;

/** A year token whose enclosing string is clearly a path/URL/class list. */
function isNonCopyString(body: string, abs: number): boolean {
  const b = body.slice(0, abs);
  const a = body.slice(abs + 4);
  // URL/query/path or className tokens ("hero-2026-banner", "/og-image?…&t=pod")
  if (/[?=&/%#]/.test(b) || /[?=&/%#]/.test(a)) return true;
  // A class-name run: no spaces and at least one separator/digit boundary.
  if (!/\s/.test(body) && /[-_.]/.test(body)) return true;
  return false;
}

type Hit = { line: number; match: string; text: string };

/**
 * Returns every `20xx` token that appears inside a string literal on the
 * line, with comment and escape handling. Year claims in marketing copy are
 * always inside strings; numeric code (lat/lng, quantity presets, model
 * numbers) is never a copy claim.
 */
function stringYearTokens(line: string): { match: string; index: number }[] {
  const out: { match: string; index: number }[] = [];
  let quote: '"' | "'" | "`" | null = null;
  let inLineComment = false;
  let inBlockComment = false;
  let i = 0;
  while (i < line.length) {
    const ch = line[i];
    const next = line[i + 1];
    if (inLineComment) break;
    if (inBlockComment) {
      if (ch === "*" && next === "/") {
        inBlockComment = false;
        i += 2;
      } else {
        i += 1;
      }
      continue;
    }
    if (quote === null) {
      if (ch === "/" && next === "/") { inLineComment = true; i += 2; continue; }
      if (ch === "/" && next === "*") { inBlockComment = true; i += 2; continue; }
      if (ch === '"' || ch === "'" || ch === "`") { quote = ch; i += 1; continue; }
      i += 1;
      continue;
    }
    // Inside a string literal.
    if (ch === "\\") { i += 2; continue; }
    if (ch === quote) { quote = null; i += 1; continue; }
    i += 1;
  }

  // Now extract tokens only from string spans. Re-walk with span tracking.
  let q: '"' | "'" | "`" | null = null;
  let start = 0;
  let j = 0;
  const spans: { from: number; to: number }[] = [];
  while (j < line.length) {
    const ch = line[j];
    const next = line[j + 1];
    if (q === null) {
      if (ch === "/" && next === "/") break;
      if (ch === "/" && next === "*") { j += 2; while (j < line.length && !(line[j] === "*" && line[j + 1] === "/")) j += 1; j += 2; continue; }
      if (ch === '"' || ch === "'" || ch === "`") { q = ch; start = j + 1; j += 1; continue; }
      j += 1;
      continue;
    }
    if (ch === "\\") { j += 2; continue; }
    if (ch === q) { spans.push({ from: start, to: j }); q = null; j += 1; continue; }
    j += 1;
  }
  if (q !== null) spans.push({ from: start, to: line.length });

  for (const span of spans) {
    const body = line.slice(span.from, span.to);
    for (const m of body.matchAll(YEAR_TOKEN)) {
      const abs = span.from + m.index!;
      const before = line.slice(Math.max(0, abs - 8), abs);
      const after = line.slice(abs + m[0].length, abs + m[0].length + 2);
      // Numeric code inside strings, not copy claims:
      if (before.endsWith(".")) continue; // decimals (SVG paths, lat/lng, stats)
      if (/[A-Za-z]$/.test(before)) continue; // product codes (CR2032 battery)
      if (/^\d/.test(after)) continue; // longer numbers (SSM 202503227236, RM22000)
      if (/^(px|vw|vh|%|em|rem|pt|px\b)/.test(after)) continue; // measurements (1920px)
      // Historical facts, not rate claims:
      if (m[0] === "2000") continue; // "pre-2000 homes", "Autogate 2000" brand
      if (after.startsWith("年")) continue; // Chinese dates "2010 年"
      if (/(Act|Akta|PDPA|SSM|Tahun)\s*$/.test(before)) continue; // PDPA 2010
      // Paths/URLs/class lists (hero-2026-banner, /og-image?…&t=pod) are
      // not marketing copy — the year there is a route/asset id, not a claim.
      if (isNonCopyString(body, abs)) continue;
      out.push({ match: m[0], index: abs });
    }
  }
  return out;
}

function scanFile(rel: string): Hit[] {
  const source = readFileSync(path.join(ROOT, rel), "utf8");
  const hits: Hit[] = [];
  source.split("\n").forEach((line, index) => {
    if (DATE_CONTEXT.test(line)) return;
    if (ISO_DATE.test(line)) return;
    if (PRODUCT_MODEL.test(line)) return;
    for (const token of stringYearTokens(line)) {
      // "Sept 2023" style month-year references inside comments are
      // historical notes — skip when the token sits in a comment span.
      hits.push({ line: index + 1, match: token.match, text: line.trim().slice(0, 140) });
    }
  });
  return hits;
}

function listFiles(): string[] {
  const files: string[] = [];
  for (const dir of ["config", "components", "app", "lib"]) {
    for (const ext of ["ts", "tsx"]) {
      for (const f of globSync(`${dir}/**/*.${ext}`, { cwd: ROOT })) {
        files.push(f.split(path.sep).join("/"));
      }
    }
  }
  return files
    .filter((f) => !f.endsWith(".generated.ts"))
    .filter((f) => !SKIP_FILES.has(f))
    .filter((f) => f !== "app/(en)/sitemap.ts" && f !== "app/robots.ts")
    .sort();
}

let failures = 0;
let scanned = 0;
let checked = 0;

if (RATE_YEAR < 2026) {
  console.error(`audit:rate-year — FAIL: system clock reports RATE_YEAR=${RATE_YEAR} (< 2026); refusing to trust it.`);
  failures += 1;
}

for (const rel of listFiles()) {
  scanned += 1;
  for (const hit of scanFile(rel)) {
    checked += 1;
    if (hit.match !== String(RATE_YEAR)) {
      failures += 1;
      console.error(`audit:rate-year — STALE YEAR "${hit.match}" (expected ${RATE_YEAR}) in ${rel}:${hit.line}: ${hit.text}`);
    }
  }
}

if (failures > 0) {
  console.error(
    `audit:rate-year — FAIL: ${failures} year-stamped claim(s) are not ${RATE_YEAR}. ` +
      `Refresh each claim (or interpolate config/rate-year.ts RATE_YEAR_LABEL) — §5.6 freshness rota.`
  );
  process.exit(1);
}

console.log(`audit:rate-year — PASS: ${scanned} files scanned, ${checked} in-string year tokens, all = ${RATE_YEAR}.`);
