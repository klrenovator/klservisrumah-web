import React from "react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/config/blog-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getBreadcrumbSchema } from "@/lib/seo";
import { Calendar, User, Clock, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDesc,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      url: `https://www.klservisrumah.my/blog/${post.slug}`
    }
  };
}

export default async function BlogPostSlugPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  const crumbs = [
    { name: "Blog", item: "/blog" },
    { name: post.title, item: `/blog/${post.slug}` }
  ];
  const breadcrumbSchema = getBreadcrumbSchema(crumbs);

  const waLink = getWhatsAppLink({ service: post.category });

  return (
    <>
      <Breadcrumbs items={[
        { label: "Blog", href: "/blog" },
        { label: post.title, href: `/blog/${post.slug}` }
      ]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
    </>
  );
}
