export function lightweightLocalizedBlogPath(locale: "ms" | "zh", slug: string) {
  return locale === "ms" ? `/ms/blog/${slug}` : `/zh/bo-ke/${slug}`;
}
