import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import Link from "next/link";
import { blogPosts } from "@/config/blog-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { User, Clock, ArrowRight, Phone, MessageSquare, BookOpen } from "lucide-react";
import { LocaleHubRedirect } from "@/components/ui/locale-hub-redirect";

export const metadata = buildMetadata({
  title: "Home Maintenance Blog — Expert Tips KL & Selangor",
  description:
    "Professional home maintenance tips, painting guidance, leak repair advice and practical guides written by the KL Servis Rumah specialist team.",
  path: "/blog",
  languageUrls: {
    en: "/blog",
    ms: "/ms/blog",
    zh: "/zh/bo-ke",
  },
  keywords: [
    "home maintenance tips Malaysia",
    "painting guide KL",
    "leak repair advice Selangor"
  ]
});

export default function BlogPage() {

  // Featured article (first post)
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      {/* Auto-redirect to /ms/blog or /zh/bo-ke when the visitor's preferred
          language is not English — keeps the full page (including this
          server-rendered listing) in sync with the language switcher. */}
      <LocaleHubRedirect />

      {/* Hero Section — matches klrenovator.com blog page */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
              <BookOpen className="w-3.5 h-3.5 inline mr-1" />
              Knowledge Base
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#075985] tracking-tight">
              Home Tips & Expert Guides
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
              Practical home maintenance advice from KL Servis Rumah — your trusted home services specialist across KL & Selangor.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-[#0EA5E9] text-[#075985] font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Article — matches klrenovator.com featured post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
                  Featured Article
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
                  Latest from our experts
                </h2>
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="block bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_25px_rgba(2,31,68,0.01)] hover:shadow-[0_15px_40px_rgba(2,31,68,0.03)] hover:border-[#0EA5E9]/20 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-2.5 py-0.5 rounded-md uppercase tracking-wider w-fit">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#075985] tracking-tight group-hover:text-[#0EA5E9] transition-colors leading-snug">
                      {featuredPost.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed font-medium">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-bold text-[#475569]">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4 text-[#0EA5E9]" />
                        <span>By {featuredPost.author.split(" ")[0]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-[#0EA5E9]" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0EA5E9] group-hover:text-[#075985]">
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  <div className="bg-slate-100 rounded-2xl h-64 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-slate-300" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* All Articles */}
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
              All Articles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
              More Guides & Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {otherPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_25px_rgba(2,31,68,0.01)] hover:shadow-[0_15px_40px_rgba(2,31,68,0.03)] hover:border-[#0EA5E9]/20 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-300 font-semibold">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#075985] tracking-tight group-hover:text-[#0EA5E9] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-bold text-[#475569] mt-2">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4 text-[#0EA5E9]" />
                      <span>By {post.author.split(" ")[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#0EA5E9]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex justify-end">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0EA5E9] group-hover:text-[#075985]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
