import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { blogPosts } from "@/config/blog-data";
import { blogI18n } from "@/config/blog-i18n";
import { topicalAuthorityMap } from "@/config/topical-authority-map";

/**
 * Generates the browser-safe blog catalogue. Article bodies deliberately stay
 * in the server article store; client components only receive this metadata.
 */
const index = blogPosts.map((post) => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  category: post.category,
  date: post.date,
  readTime: post.readTime,
  locales: {
    ms: blogI18n[post.slug]?.ms
      ? {
          slug: blogI18n[post.slug]!.ms!.slug,
          title: blogI18n[post.slug]!.ms!.title,
          excerpt: blogI18n[post.slug]!.ms!.excerpt,
          category: blogI18n[post.slug]!.ms!.category
        }
      : null,
    zh: blogI18n[post.slug]?.zh
      ? {
          slug: blogI18n[post.slug]!.zh!.slug,
          title: blogI18n[post.slug]!.zh!.title,
          excerpt: blogI18n[post.slug]!.zh!.excerpt,
          category: blogI18n[post.slug]!.zh!.category
        }
      : null
  }
}));

const slugs = index.map((post) => post.slug);
if (new Set(slugs).size !== slugs.length) {
  throw new Error("Cannot generate blog index: duplicate English slugs detected");
}
for (const locale of ["ms", "zh"] as const) {
  const localizedSlugs = index.flatMap((post) => post.locales[locale]?.slug ?? []);
  if (new Set(localizedSlugs).size !== localizedSlugs.length) {
    throw new Error(`Cannot generate blog index: duplicate ${locale} slugs detected`);
  }
}

const relatedSlugs = new Set(
  Object.values(topicalAuthorityMap).flatMap((silo) => [
    ...silo.relatedBlogs,
    ...silo.specialties.flatMap((specialty) => specialty.relatedBlogs)
  ])
);
const relatedIndex = index.filter((post) => relatedSlugs.has(post.slug));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const slugsPath = path.resolve(__dirname, "../config/blog-slugs.generated.json");
const relatedPath = path.resolve(__dirname, "../config/blog-related.generated.json");
await Promise.all([
  writeFile(slugsPath, `${JSON.stringify(slugs)}\n`, "utf8"),
  writeFile(relatedPath, `${JSON.stringify(relatedIndex)}\n`, "utf8")
]);
console.log(`✓ Blog indexes generated (${index.length} slugs; ${relatedIndex.length} client-related cards) → ${path.relative(process.cwd(), slugsPath)}`);
