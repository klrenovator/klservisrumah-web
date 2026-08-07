import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import Link from "next/link";
import { blogPosts } from "@/config/blog-data";
import { blogI18n } from "@/config/blog-i18n";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { LocaleTreeLinks } from "@/components/sections/locale-tree-links";
import { ArrowRight, Phone, MessageSquare, BookOpen, Clock } from "lucide-react";

export const metadata = buildMetadata({
  title: "家居博客与专家指南 — 吉隆坡和雪兰莪",
  description: "来自KL Servis Rumah专业团队的实用家居维护建议、油漆指南、漏水维修建议和实用指南。",
  path: "/zh/bo-ke",
  languageUrls: { en: "/blog", ms: "/ms/blog", zh: "/zh/bo-ke" },
  keywords: ["马来西亚家居贴士", "吉隆坡油漆指南", "雪兰莪漏水维修建议"]
});

export default function ChineseBlogHub() {
  type TranslatedPost = { original: (typeof blogPosts)[0]; zh: { slug: string; title: string; excerpt: string; content: string; category: string; metaTitle: string; metaDesc: string } };
  const translatedPosts: TranslatedPost[] = blogPosts
    .map((post): TranslatedPost | null => {
      const zh = blogI18n[post.slug]?.zh;
      if (!zh) return null;
      return { original: post, zh };
    })
    .filter((x): x is TranslatedPost => x !== null);

  const featured = translatedPosts[0];
  const rest = translatedPosts.slice(1);

  return (
    <>
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
              <BookOpen className="w-3.5 h-3.5 inline mr-1" />
              知识中心
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#075985] tracking-tight">
              家居贴士与专家指南
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
              来自KL Servis Rumah的实用家居维护建议——吉隆坡和雪兰莪值得信赖的住宅服务专家。
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp 咨询</span>
              </a>
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-[#0EA5E9] text-[#075985] font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200">
                <Phone className="w-4 h-4" />
                <span>致电 {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-sm">
        <ol className="flex items-center gap-2 text-[#475569]">
          <li><Link href="/" className="hover:text-[#0EA5E9]">首页</Link></li>
          <li className="text-slate-300">/</li>
          <li className="font-semibold text-[#075985]">博客</li>
        </ol>
      </nav>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featured && (
            <div className="mb-16">
              <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">精选文章</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">专家最新分享</h2>
              </div>
              <Link href={`/zh/bo-ke/${featured.zh.slug}`} className="block bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#0EA5E9]/20 transition-all duration-300 group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-2.5 py-0.5 rounded-md uppercase tracking-wider w-fit">{featured.zh.category}</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#075985] tracking-tight group-hover:text-[#0EA5E9] transition-colors leading-snug">{featured.zh.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed font-medium">{featured.zh.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0EA5E9] group-hover:text-[#075985]">
                      <span>阅读完整指南</span>
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

          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">所有文章</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">更多指南与贴士</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {rest.map(({ original, zh }) => (
              <Link key={original.slug} href={`/zh/bo-ke/${zh.slug}`} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#0EA5E9]/20 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-2.5 py-0.5 rounded-md uppercase tracking-wider">{zh.category}</span>
                    <span className="text-xs text-slate-300 font-semibold">{original.date}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#075985] tracking-tight group-hover:text-[#0EA5E9] transition-colors leading-snug">{zh.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">{zh.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs font-bold text-[#475569] mt-2">
                    <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-[#0EA5E9]" /><span>{original.readTime}</span></div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50 flex justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0EA5E9] group-hover:text-[#075985]">
                    <span>阅读文章</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Crawl path from this tree to the other three localized trees. */}
      <LocaleTreeLinks locale="zh" current="blog" />
    </>
  );
}
