#!/usr/bin/env node
/**
 * validate-blog-markdown.mjs
 *
 * Production-record validator for the /blogs/{en,ms,zh} markdown corpus.
 *
 * It parses the REAL route universe out of the app config (services, sub-services,
 * problems + canonical redirects, tools + localized tool slugs, wired blog posts)
 * and asserts that every in-article link in the markdown resolves to a page that
 * actually exists. It also checks frontmatter completeness, single-H1, slug
 * uniqueness, cover-image existence and meta length conventions.
 *
 * Usage: node scripts/validate-blog-markdown.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");

/* ── slugify (mirrors lib/utils.ts) ─────────────────────────────────────── */
const slugify = (input) =>
  input
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

/* ── 1. Services + sub-services ─────────────────────────────────────────── */
const servicesSrc = read("config/services-data.ts");
const serviceKeys = [...servicesSrc.matchAll(/^ {2}"([a-z0-9-]+)": \{/gm)].map((m) => [m[1], m.index]);
const serviceSlugs = new Set();
const subServiceRoutes = new Set();
serviceKeys.forEach(([key, start], i) => {
  serviceSlugs.add(key);
  const end = i + 1 < serviceKeys.length ? serviceKeys[i + 1][1] : servicesSrc.length;
  const block = servicesSrc.slice(start, end);
  const subBlock = block.match(/\n {4}subServices: \[([\s\S]*?)\n {4}\],/);
  if (!subBlock) return;
  for (const m of subBlock[1].matchAll(/\{ name: "([^"]+)"/g)) {
    subServiceRoutes.add(`${key}/${slugify(m[1])}`);
  }
});

/* ── 2. Problems (live/indexable only) ──────────────────────────────────── */
const problemSrc = read("config/problem-data.ts") + read("config/problem-data-extra.ts");
const allProblemSlugs = new Set([...problemSrc.matchAll(/\n {4}slug: "([a-z0-9-]+)"/g)].map((m) => m[1]));
const canonicalSrc = read("config/problem-canonical.ts");
const redirectBlock = canonicalSrc.match(/PROBLEM_CANONICAL_REDIRECTS[^=]*= \{([\s\S]*?)\n\};/)[1];
const redirectedProblemSlugs = new Set([...redirectBlock.matchAll(/"([a-z0-9-]+)":\s*"([a-z0-9-]+)"/g)].map((m) => m[1]));
const liveProblemSlugs = new Set([...allProblemSlugs].filter((s) => !redirectedProblemSlugs.has(s)));

/* ── 3. Tools (canonical + ms/zh localized slugs) ───────────────────────── */
const toolsI18nSrc = read("config/tools-i18n.ts");
const slugMapBlock = toolsI18nSrc.match(/TOOL_SLUG_I18N[^=]*= \{([\s\S]*?)\n\};/)[1];
const [msBlock, zhBlock] = (() => {
  const msStart = slugMapBlock.indexOf("ms: {");
  const zhStart = slugMapBlock.indexOf("zh: {");
  return [slugMapBlock.slice(msStart, zhStart), slugMapBlock.slice(zhStart)];
})();
const parsePairs = (block) => [...block.matchAll(/"([a-z0-9-]+)":\s*"([^"]+)"/g)];
const enToolSlugs = new Set(parsePairs(msBlock).map((m) => m[1]));
const msToolSlugs = new Set(parsePairs(msBlock).map((m) => m[2]));
const zhToolSlugs = new Set(parsePairs(zhBlock).map((m) => m[2]));

/* ── 4. Wired (live) blog posts ─────────────────────────────────────────── */
const blogSrc = ["config/blog-data.ts", "config/blog-data-extra.ts", "config/blog-data-batch4.ts"]
  .map(read)
  .join("\n");
const enBlogSlugs = new Set([...blogSrc.matchAll(/\n\s{2,4}slug: "([a-z0-9-]+)"/g)].map((m) => m[1]));
const blogI18nSrc = read("config/blog-i18n.ts");
const msBlogSlugs = new Set();
const zhBlogSlugs = new Set();
{
  // Entries are `ms: { slug: "..." }` / `zh: { slug: "..." }` blocks.
  const re = /\n\s{4}(ms|zh): \{\s*\n?\s*slug: "([^"]+)"/g;
  for (const m of blogI18nSrc.matchAll(re)) (m[1] === "ms" ? msBlogSlugs : zhBlogSlugs).add(m[2]);
}

/* ── 5. Static / router pages that are safe link targets ────────────────── */
const staticPaths = new Set([
  "/", "/services", "/problems", "/blog", "/tools", "/contact", "/about", "/pricing",
  "/faq", "/areas", "/estimate", "/projects", "/process", "/guides", "/answers",
  "/ms", "/ms/services", "/ms/problems", "/ms/blog", "/ms/alatan", "/ms/soalan-lazim", "/ms/search",
  "/zh", "/zh/services", "/zh/problems", "/zh/bo-ke", "/zh/gongju", "/zh/chang-jian-wen-ti", "/zh/search",
]);

/* ── Link resolver ──────────────────────────────────────────────────────── */
function linkExists(href) {
  const clean = decodeURI(href.split("#")[0].split("?")[0].replace(/\/$/, "")) || "/";
  if (staticPaths.has(clean)) return true;
  const seg = clean.split("/").filter(Boolean);
  let locale = "en";
  if (seg[0] === "ms" || seg[0] === "zh") { locale = seg.shift(); }

  if (seg[0] === "services") {
    if (seg.length === 2) return serviceSlugs.has(seg[1]);
    if (seg.length === 3) return subServiceRoutes.has(`${seg[1]}/${seg[2]}`);
    if (seg.length === 4 && locale === "en" && ["cost", "emergency"].includes(seg[3]))
      return serviceSlugs.has(seg[1]);
    return false;
  }
  if (seg[0] === "problems") return seg.length === 2 && liveProblemSlugs.has(seg[1]);
  if (locale === "en" && seg[0] === "tools") return seg.length === 2 && enToolSlugs.has(seg[1]);
  if (locale === "ms" && seg[0] === "alatan") return seg.length === 2 && msToolSlugs.has(seg[1]);
  if (locale === "zh" && seg[0] === "gongju") return seg.length === 2 && zhToolSlugs.has(seg[1]);
  if (locale === "en" && seg[0] === "blog") return seg.length === 2 && enBlogSlugs.has(seg[1]);
  if (locale === "ms" && seg[0] === "blog") return seg.length === 2 && msBlogSlugs.has(seg[1]);
  if (locale === "zh" && seg[0] === "bo-ke") return seg.length === 2 && zhBlogSlugs.has(seg[1]);
  return false;
}

/* ── Markdown scan ──────────────────────────────────────────────────────── */
const REQUIRED_FM = ["slug", "title", "excerpt", "category", "language", "date", "readTime", "author", "coverImage", "metaTitle", "metaDesc", "status", "batch"];
const errors = [];
const warnings = [];
const slugsByLang = { en: new Map(), ms: new Map(), zh: new Map() };
const titlesByLang = { en: new Map(), ms: new Map(), zh: new Map() };
const linkTargets = new Set();
let fileCount = 0;

for (const lang of ["en", "ms", "zh"]) {
  const dir = path.join(ROOT, "blogs", lang);
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort()) {
    fileCount += 1;
    const rel = `blogs/${lang}/${file}`;
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
    if (!fm) { errors.push(`${rel}: missing YAML frontmatter`); continue; }
    const meta = {};
    for (const line of fm[1].split("\n")) {
      const m = line.match(/^([a-zA-Z]+):\s*(.*)$/);
      if (m) meta[m[1]] = m[2].replace(/^"(.*)"$/, "$1").trim();
    }
    for (const key of REQUIRED_FM) if (!meta[key]) errors.push(`${rel}: frontmatter missing "${key}"`);
    if (meta.language && meta.language !== lang) errors.push(`${rel}: language "${meta.language}" != folder "${lang}"`);

    const body = raw.slice(fm[0].length);
    const h1 = body.match(/^# .+$/gm) || [];
    if (h1.length !== 1) errors.push(`${rel}: expected exactly 1 H1, found ${h1.length}`);
    if (/^(""")|(write_article\()/m.test(body)) errors.push(`${rel}: contains generator scaffolding text`);
    if (!body.includes("wa.me/601116627349")) warnings.push(`${rel}: no WhatsApp CTA link`);

    if (meta.slug) {
      if (slugsByLang[lang].has(meta.slug)) errors.push(`${rel}: duplicate slug "${meta.slug}" (also ${slugsByLang[lang].get(meta.slug)})`);
      else slugsByLang[lang].set(meta.slug, rel);
    }
    if (meta.title) {
      if (titlesByLang[lang].has(meta.title)) errors.push(`${rel}: duplicate title "${meta.title}"`);
      else titlesByLang[lang].set(meta.title, rel);
    }
    if (meta.coverImage && !fs.existsSync(path.join(ROOT, "public", meta.coverImage.replace(/^\//, ""))))
      errors.push(`${rel}: coverImage not found on disk: ${meta.coverImage}`);

    // Meta length conventions (CJK counted by character).
    const tLen = [...(meta.metaTitle || "")].length;
    const dLen = [...(meta.metaDesc || "")].length;
    if (lang === "zh") {
      if (tLen < 12 || tLen > 34) warnings.push(`${rel}: zh metaTitle ${tLen} chars (expect 12–34)`);
      if (dLen < 45 || dLen > 90) warnings.push(`${rel}: zh metaDesc ${dLen} chars (expect 45–90)`);
    } else {
      if (tLen < 40 || tLen > 62) warnings.push(`${rel}: metaTitle ${tLen} chars (expect 40–62)`);
      if (dLen < 120 || dLen > 172) warnings.push(`${rel}: metaDesc ${dLen} chars (expect 120–172)`);
    }

    // Internal links.
    for (const m of body.matchAll(/\]\((\/[^)\s]*)\)/g)) {
      const href = m[1];
      linkTargets.add(href);
      if (!linkExists(href)) errors.push(`${rel}: BROKEN LINK ${href}`);
      const expectPrefix = lang === "en" ? null : `/${lang}/`;
      if (expectPrefix && !href.startsWith(expectPrefix)) errors.push(`${rel}: cross-locale link ${href} in ${lang} article`);
      if (lang === "en" && (href.startsWith("/ms/") || href.startsWith("/zh/"))) errors.push(`${rel}: cross-locale link ${href} in en article`);
    }
  }
}

/* ── Report ─────────────────────────────────────────────────────────────── */
console.log(`Scanned ${fileCount} markdown files (${slugsByLang.en.size} en / ${slugsByLang.ms.size} ms / ${slugsByLang.zh.size} zh)`);
console.log(`Route universe: ${serviceSlugs.size} services, ${subServiceRoutes.size} sub-services, ${liveProblemSlugs.size} live problems, ${enToolSlugs.size} tools, ${enBlogSlugs.size} wired blogs`);
console.log(`Distinct internal link targets: ${linkTargets.size}`);
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warning(s):`);
  for (const w of warnings) console.log("  - " + w);
}
if (errors.length) {
  console.log(`\n✖ ${errors.length} error(s):`);
  for (const e of errors) console.log("  - " + e);
  process.exit(1);
}
console.log("\n✓ All checks passed.");
