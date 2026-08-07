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
  title: "Blog Rumah & Panduan Pakar — KL & Selangor",
  description: "Tip penyelenggaraan rumah praktikal, panduan pengecatan, nasihat pembaikan kebocoran dan panduan praktikal daripada pasukan pakar KL Servis Rumah.",
  path: "/ms/blog",
  languageUrls: { en: "/blog", ms: "/ms/blog", zh: "/zh/bo-ke" },
  keywords: ["tip rumah Malaysia", "panduan cat KL", "nasihat kebocoran Selangor"]
});

export default function MalayBlogHub() {
  type TranslatedPost = { original: (typeof blogPosts)[0]; ms: { slug: string; title: string; excerpt: string; content: string; category: string; metaTitle: string; metaDesc: string } };
  const translatedPosts: TranslatedPost[] = blogPosts
    .map((post): TranslatedPost | null => {
      const ms = blogI18n[post.slug]?.ms;
      if (!ms) return null;
      return { original: post, ms };
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
              Pusat Ilmu
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#075985] tracking-tight">
              Tip Rumah & Panduan Pakar
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
              Nasihat penyelenggaraan rumah praktikal daripada KL Servis Rumah — pakar perkhidmatan rumah dipercayai di KL &amp; Selangor.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href={getWhatsAppLink({ lang: "ms" })} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Kami</span>
              </a>
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-[#0EA5E9] text-[#075985] font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200">
                <Phone className="w-4 h-4" />
                <span>Hubungi {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-sm">
        <ol className="flex items-center gap-2 text-[#475569]">
          <li><Link href="/" className="hover:text-[#0EA5E9]">Utama</Link></li>
          <li className="text-slate-300">/</li>
          <li className="font-semibold text-[#075985]">Blog</li>
        </ol>
      </nav>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featured && (
            <div className="mb-16">
              <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">Artikel Pilihan</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">Terkini daripada pakar kami</h2>
              </div>
              <Link href={`/ms/blog/${featured.ms.slug}`} className="block bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#0EA5E9]/20 transition-all duration-300 group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-2.5 py-0.5 rounded-md uppercase tracking-wider w-fit">{featured.ms.category}</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#075985] tracking-tight group-hover:text-[#0EA5E9] transition-colors leading-snug">{featured.ms.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed font-medium">{featured.ms.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0EA5E9] group-hover:text-[#075985]">
                      <span>Baca Panduan Penuh</span>
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
            <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">Semua Artikel</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">Lagi Panduan &amp; Tip</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {rest.map(({ original, ms }) => (
              <Link key={original.slug} href={`/ms/blog/${ms.slug}`} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#0EA5E9]/20 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-2.5 py-0.5 rounded-md uppercase tracking-wider">{ms.category}</span>
                    <span className="text-xs text-slate-300 font-semibold">{original.date}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#075985] tracking-tight group-hover:text-[#0EA5E9] transition-colors leading-snug">{ms.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">{ms.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs font-bold text-[#475569] mt-2">
                    <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-[#0EA5E9]" /><span>{original.readTime}</span></div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50 flex justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0EA5E9] group-hover:text-[#075985]">
                    <span>Baca Artikel</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Crawl path from this tree to the other three localized trees. */}
      <LocaleTreeLinks locale="ms" current="blog" />
    </>
  );
}
