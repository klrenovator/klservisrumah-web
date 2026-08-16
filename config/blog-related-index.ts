import relatedBlogData from "@/config/blog-related.generated.json" with { type: "json" };

export type RelatedBlogIndexPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

/** Only the curated cards referenced by client-side service sections. */
export const relatedBlogIndex = relatedBlogData as RelatedBlogIndexPost[];
