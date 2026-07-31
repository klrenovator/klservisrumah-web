import React from "react";
import { toIsoDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { blogPosts } from "@/config/blog-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getArticleSchema } from "@/lib/seo";
import { Calendar, User, Clock, MessageSquare, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { blogI18n, localizedBlogPath } from "@/config/blog-i18n";

// Every valid param is enumerated in `generateStaticParams()`, so anything
// else must 404 rather than be rendered on demand and cached as a 200
// (a soft 404). See `app/[lang]/[[...slug]]/page.tsx` for the full rationale.
export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  const msSlug = blogI18n[post.slug]?.ms?.slug;
  const zhSlug = blogI18n[post.slug]?.zh?.slug;
  const hasFullCluster = msSlug && zhSlug;

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDesc,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    type: "article",
    publishedTime: toIsoDate(post.date),
    modifiedTime: toIsoDate(post.date),
    keywords: [post.title, post.category, "home maintenance Malaysia"],
    ...(hasFullCluster ? {
      languageUrls: {
        en: `/blog/${post.slug}`,
        ms: localizedBlogPath("ms", msSlug!),
        zh: localizedBlogPath("zh", zhSlug!),
      }
    } : {})
  });
}

export default async function BlogPostSlugPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  const articleSchema = getArticleSchema(post);

  const waLink = getWhatsAppLink({ service: post.category });

  // Related posts for internal linking
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[
        { label: "Blog", href: "/blog" },
        { label: post.title, href: `/blog/${post.slug}` }
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0EA5E9] hover:text-[#075985] transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Knowledge Hub</span>
            </Link>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-3 py-1 rounded-md uppercase tracking-wider w-fit">
                {post.category}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#075985] tracking-tight leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-xs sm:text-sm font-bold text-[#475569] border-y border-slate-100 py-3.5 mt-2">
                <div className="flex items-center gap-1.5">
                  <User className="w-4.5 h-4.5 text-[#0EA5E9]" />
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4.5 h-4.5 text-[#0EA5E9]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4.5 h-4.5 text-[#0EA5E9]" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <article className="prose max-w-none text-[#475569] leading-relaxed text-sm sm:text-base flex flex-col gap-6 font-medium whitespace-pre-line border-b border-slate-100 pb-12">
              {post.content}
            </article>

            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left mt-4">
              <div className="flex flex-col gap-1 max-w-lg">
                <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest">Expert Support Desk</span>
                <span className="text-lg sm:text-xl font-extrabold text-[#075985] tracking-tight">Need help with {post.category}?</span>
                <p className="text-xs text-[#475569] font-semibold leading-relaxed">
                  Our professional tradesmen serve all locations in KL & Selangor. Get an instant, free fixed-rate quote today!
                </p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22C55E] hover:bg-[#1eb050] text-white text-center font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-white text-[#22C55E]" />
                <span>Chat On WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-slate-50 border-t border-slate-100 py-16" aria-label="Related blog posts">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
                Related Articles
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
                More {post.category} Guides
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-[#0EA5E9]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <span className="text-[10px] font-bold text-[#0EA5E9] bg-[#E0F2FE]/30 px-2 py-0.5 rounded uppercase tracking-wider">
                    {rp.category}
                  </span>
                  <h3 className="text-sm font-extrabold text-[#075985] mt-3 group-hover:text-[#0EA5E9] transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
                  <p className="text-xs text-[#475569] mt-2 font-medium line-clamp-2">
                    {rp.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50">
                    <span className="text-[10px] text-slate-400">{rp.readTime}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0EA5E9]">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
