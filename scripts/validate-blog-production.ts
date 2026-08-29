import fs from "node:fs";
import path from "node:path";
import { blogPosts } from "@/config/blog-data";
import { blogI18n, type BlogLocale } from "@/config/blog-i18n";
import { servicesData } from "@/config/services-data";
import { problemPages } from "@/config/problem-data";
import { PROBLEM_CANONICAL_REDIRECTS } from "@/config/problem-canonical";
import { TOOL_SLUG_I18N } from "@/config/tools-i18n";
import { slugify, toIsoDate, DEFAULT_CONTENT_DATE } from "@/lib/utils";
import productionBlogRecords from "@/config/blog-production.generated.json" with { type: "json" };

/** Validates the live production article store after the Markdown migration. */
const errors: string[] = [];
const warnings: string[] = [];
const linkTargets = new Set<string>();
const locales: BlogLocale[] = ["ms", "zh"];
const root = process.cwd();
const migratedSlugs = new Set(productionBlogRecords.map((record) => record.en.slug));

const unique = (values: string[], label: string) => {
  const seen = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) errors.push(`duplicate ${label}: ${value}`);
    seen.add(value);
  }
};

if (blogPosts.length !== 216) errors.push(`expected 216 published topics, found ${blogPosts.length}`);
unique(blogPosts.map((post) => post.slug), "English slug");
unique(blogPosts.map((post) => post.title), "English title");
for (const locale of locales) {
  unique(blogPosts.flatMap((post) => blogI18n[post.slug]?.[locale]?.slug ?? []), `${locale} slug`);
  unique(blogPosts.flatMap((post) => blogI18n[post.slug]?.[locale]?.title ?? []), `${locale} title`);
}

const serviceRoutes = new Set(Object.keys(servicesData));
const subServiceRoutes = new Set(
  Object.values(servicesData).flatMap((service) =>
    service.subServices.map((subService) => `${service.slug}/${slugify(subService.name)}`)
  )
);
const liveProblems = new Set(
  problemPages
    .map((problem) => problem.slug)
    .filter((slug) => !(slug in PROBLEM_CANONICAL_REDIRECTS))
);
const englishTools = new Set(Object.keys(TOOL_SLUG_I18N.ms));
const msTools = new Set(Object.values(TOOL_SLUG_I18N.ms));
const zhTools = new Set(Object.values(TOOL_SLUG_I18N.zh));
const englishBlogs = new Set(blogPosts.map((post) => post.slug));
const msBlogs = new Set(blogPosts.flatMap((post) => blogI18n[post.slug]?.ms?.slug ?? []));
const zhBlogs = new Set(blogPosts.flatMap((post) => blogI18n[post.slug]?.zh?.slug ?? []));
const staticPaths = new Set([
  "/", "/services", "/problems", "/blog", "/tools", "/contact", "/about", "/pricing",
  "/faq", "/areas", "/estimate", "/projects", "/process", "/guides", "/answers",
  "/privacy", "/terms", "/ms", "/ms/services", "/ms/problems", "/ms/blog", "/ms/alatan",
  "/ms/soalan-lazim", "/ms/search", "/ms/notis-privasi", "/ms/terma",
  "/zh", "/zh/services", "/zh/problems", "/zh/bo-ke", "/zh/gongju",
  "/zh/chang-jian-wen-ti", "/zh/search", "/zh/yin-si-sheng-ming", "/zh/tiao-kuan"
]);

function linkExists(href: string): boolean {
  const clean = decodeURI(href.split("#")[0].split("?")[0].replace(/\/$/, "")) || "/";
  if (staticPaths.has(clean)) return true;
  const segments = clean.split("/").filter(Boolean);
  let locale: "en" | BlogLocale = "en";
  if (segments[0] === "ms" || segments[0] === "zh") locale = segments.shift() as BlogLocale;

  if (segments[0] === "services") {
    if (segments.length === 2) return serviceRoutes.has(segments[1]);
    if (segments.length === 3) return subServiceRoutes.has(`${segments[1]}/${segments[2]}`);
    if (segments.length === 4 && locale === "en" && ["cost", "emergency"].includes(segments[3])) {
      return serviceRoutes.has(segments[1]);
    }
    return false;
  }
  if (segments[0] === "problems") return segments.length === 2 && liveProblems.has(segments[1]);
  if (locale === "en" && segments[0] === "tools") return segments.length === 2 && englishTools.has(segments[1]);
  if (locale === "ms" && segments[0] === "alatan") return segments.length === 2 && msTools.has(segments[1]);
  if (locale === "zh" && segments[0] === "gongju") return segments.length === 2 && zhTools.has(segments[1]);
  if (locale === "en" && segments[0] === "blog") return segments.length === 2 && englishBlogs.has(segments[1]);
  if (locale === "ms" && segments[0] === "blog") return segments.length === 2 && msBlogs.has(segments[1]);
  if (locale === "zh" && segments[0] === "bo-ke") return segments.length === 2 && zhBlogs.has(segments[1]);
  return false;
}

function validateCopy(
  key: string,
  locale: "en" | BlogLocale,
  copy: { slug: string; title: string; excerpt: string; category: string; metaTitle: string; metaDesc: string; content: string }
) {
  for (const field of ["slug", "title", "excerpt", "category", "metaTitle", "metaDesc", "content"] as const) {
    if (!copy[field]?.trim()) errors.push(`${key}/${locale}: missing ${field}`);
  }
  if (/^#\s+/m.test(copy.content)) errors.push(`${key}/${locale}: article body contains an H1`);
  if (/^(""")|(write_article\()/m.test(copy.content)) errors.push(`${key}/${locale}: generator scaffolding found`);
  // The migrated 191-topic corpus was normalized to these authoring limits.
  // Legacy hand-wired posts are instead checked after Next's metadata optimizer
  // has applied its rendered-title/description safeguards.
  if (migratedSlugs.has(key)) {
    const titleLength = [...copy.metaTitle].length;
    const descriptionLength = [...copy.metaDesc].length;
    if (locale === "zh") {
      if (titleLength < 12 || titleLength > 34) warnings.push(`${key}/zh: metaTitle ${titleLength} chars`);
      if (descriptionLength < 45 || descriptionLength > 90) warnings.push(`${key}/zh: metaDesc ${descriptionLength} chars`);
    } else {
      if (titleLength < 40 || titleLength > 62) warnings.push(`${key}/${locale}: metaTitle ${titleLength} chars`);
      if (descriptionLength < 120 || descriptionLength > 172) warnings.push(`${key}/${locale}: metaDesc ${descriptionLength} chars`);
    }
  }

  for (const match of copy.content.matchAll(/\]\((\/[^)\s]*)\)/g)) {
    const href = match[1];
    linkTargets.add(href);
    if (!linkExists(href)) errors.push(`${key}/${locale}: broken link ${href}`);
    if (locale !== "en" && !href.startsWith(`/${locale}/`)) errors.push(`${key}/${locale}: cross-locale link ${href}`);
    if (locale === "en" && (/^\/ms\//.test(href) || /^\/zh\//.test(href))) errors.push(`${key}/en: cross-locale link ${href}`);
  }
}

// P2-19 date invariants — the Part 2 audit found 216 posts sharing 5 dates
// (99 on one day) and a constant sitemap lastMod. Per-article dates were
// assigned deterministically (see scripts/assign-blog-dates.ts); this gate
// keeps the corpus from regressing to a burst-publish pattern:
//   1. every post's date must parse to ISO without the fallback,
//   2. no future dates (campaign window ends 2026-08-27, the awning launch),
//   3. no single date may host more than 10 posts (was 99).
const MAX_POSTS_PER_DATE = 10;
const CAMPAIGN_END = "2026-08-27";
const dateHistogram = new Map<string, number>();
for (const post of blogPosts) {
  const iso = toIsoDate(post.date);
  if (iso === DEFAULT_CONTENT_DATE && post.date.trim() !== DEFAULT_CONTENT_DATE) {
    errors.push(`${post.slug}: date "${post.date}" does not parse to ISO-8601`);
  }
  if (iso > CAMPAIGN_END) errors.push(`${post.slug}: date ${iso} is in the future (campaign ends ${CAMPAIGN_END})`);
  dateHistogram.set(iso, (dateHistogram.get(iso) ?? 0) + 1);
}
for (const [date, count] of [...dateHistogram.entries()].sort()) {
  if (count > MAX_POSTS_PER_DATE) errors.push(`date ${date}: ${count} posts share one date (max ${MAX_POSTS_PER_DATE})`);
}
const maxPostsPerDate = Math.max(...dateHistogram.values());
console.log(`Blog dates: ${dateHistogram.size} distinct dates across ${blogPosts.length} posts; max ${maxPostsPerDate} posts on one date.`);

for (const post of blogPosts) {
  validateCopy(post.slug, "en", post);
  if (!fs.existsSync(path.join(root, "public", post.coverImage.replace(/^\//, "")))) {
    errors.push(`${post.slug}: cover image does not exist: ${post.coverImage}`);
  }
  for (const locale of locales) {
    const copy = blogI18n[post.slug]?.[locale];
    if (!copy) errors.push(`${post.slug}: missing ${locale} article`);
    else validateCopy(post.slug, locale, copy);
  }
}

console.log(`Validated ${blogPosts.length} published topics (${blogPosts.length * 3} localized articles).`);
console.log(`Route universe: ${serviceRoutes.size} services, ${subServiceRoutes.size} sub-services, ${liveProblems.size} problems, ${englishTools.size} tools.`);
console.log(`Distinct internal article-link targets: ${linkTargets.size}.`);
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} metadata warning(s):`);
  warnings.forEach((warning) => console.log(`  - ${warning}`));
}
if (errors.length) {
  console.error(`\n✖ ${errors.length} validation error(s):`);
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}
console.log("✓ Production blog validation passed.");
