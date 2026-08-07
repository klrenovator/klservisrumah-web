import { blogPosts } from "@/config/blog-data";
import { blogI18n, localizedBlogPath } from "@/config/blog-i18n";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, Clock, MessageSquare, ArrowLeft } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { LocaleTreeLinks } from "@/components/sections/locale-tree-links";

export const dynamicParams = false;
export async function generateStaticParams() {
  return Object.values(blogI18n).flatMap((v) => (v.ms ? [{ slug: v.ms.slug }] : []));
}

function find(slug: string) {
  const entry = Object.entries(blogI18n).find(([, v]) => v.ms?.slug === slug);
  if (!entry) return null;
  const [englishSlug, val] = entry;
  const original = blogPosts.find((p) => p.slug === englishSlug)!;
  return { original, post: val.ms!, englishSlug };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const result = find((await params).slug);
  if (!result) return {};
  const zhSlug = blogI18n[result.englishSlug]?.zh?.slug;
  return buildMetadata({
    title: result.post.metaTitle,
    description: result.post.metaDesc,
    path: localizedBlogPath("ms", result.post.slug),
    image: result.original.coverImage,
    type: "article",
    publishedTime: result.original.date,
    modifiedTime: result.original.date,
    keywords: [result.post.title, result.post.category, "rumah Malaysia"],
    languageUrls: {
      en: `/blog/${result.englishSlug}`,
      ms: localizedBlogPath("ms", result.post.slug),
      zh: zhSlug ? localizedBlogPath("zh", zhSlug) : localizedBlogPath("ms", result.post.slug),
    }
  });
}

export default async function MalayArticle({ params }: { params: Promise<{ slug: string }> }) {
  const result = find((await params).slug);
  if (!result) notFound();
  const { original, post, englishSlug } = result;
  const zhPost = blogI18n[englishSlug]?.zh;
  const localizedPosts = Object.entries(blogI18n)
    .flatMap(([sourceSlug, locales]) => locales.ms ? [{ englishSlug: sourceSlug, post: locales.ms }] : []);
  const currentIndex = localizedPosts.findIndex((entry) => entry.englishSlug === englishSlug);
  const relatedPosts = Array.from({ length: Math.min(6, localizedPosts.length - 1) }, (_, offset) => (
    localizedPosts[(currentIndex + offset + 1) % localizedPosts.length]
  ));

  // Render markdown-like content
  const contentHtml = post.content
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      // `###` is the only heading level used anywhere in the localized article
      // bodies (verified: zero `##` and zero `####` markers in blog-i18n.ts), so
      // these ARE the article's top-level sections. Emitting them as <h3> put an
      // h1 -> h3 skip in every one of the 36 MS/ZH articles, which breaks the
      // WCAG 1.3.1 heading hierarchy and weakens section extraction for AI
      // answer engines. Rendering them as <h2> is the semantically correct
      // level; the visual size is unchanged.
      if (trimmed.startsWith("### ")) return `<h2 class="text-xl font-extrabold text-[#075985] mt-8 mb-3">${trimmed.slice(4)}</h2>`;
      if (trimmed.startsWith("---")) return `<hr class="border-slate-200 my-8" />`;
      if (trimmed.startsWith("* ")) return `<ul class="list-disc pl-6 space-y-1 my-3">${trimmed.split("\n").map(l => `<li class="text-slate-600">${l.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')}</li>`).join("")}</ul>`;
      return `<p class="text-base text-slate-600 leading-relaxed my-3">${trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#075985]">$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>`;
    })
    .join("\n");

  return (
    <>
      <nav aria-label="Laluan navigasi" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8 text-sm">
        <ol className="flex items-center gap-2 text-[#475569]">
          <li><Link href="/" className="hover:text-[#0EA5E9]">Utama</Link></li>
          <li className="text-slate-300">/</li>
          <li><Link href="/ms/blog" className="hover:text-[#0EA5E9]">Blog</Link></li>
          <li className="text-slate-300">/</li>
          <li className="font-semibold text-[#075985] truncate max-w-[200px]">{post.title}</li>
        </ol>
        {/* Language switcher for this article */}
        <div className="flex items-center gap-2 mt-3 text-xs">
          <Link href={`/blog/${englishSlug}`} className="px-2 py-1 rounded border border-slate-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9]">EN</Link>
          <span className="px-2 py-1 rounded border border-[#0EA5E9] text-[#0EA5E9] font-bold">BM</span>
          {zhPost && <Link href={localizedBlogPath("zh", zhPost.slug)} className="px-2 py-1 rounded border border-slate-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9]">中文</Link>}
        </div>
      </nav>

      <main className="bg-white py-8 sm:py-12">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link href="/ms/blog" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0EA5E9] hover:text-[#075985] transition-colors w-fit mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Blog</span>
          </Link>

          <span className="text-xs font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-3 py-1 rounded-md uppercase tracking-wider w-fit">{post.category}</span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#075985] sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 border-y border-slate-100 py-3 text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-1"><User className="w-4 h-4 text-[#0EA5E9]" /><span>{original.author}</span></div>
            <div className="flex items-center gap-1"><Calendar className="w-4 h-4 text-[#0EA5E9]" /><span>{original.date}</span></div>
            <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-[#0EA5E9]" /><span>{original.readTime}</span></div>
          </div>
          <div className="mt-8 prose-article" dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <section className="mt-12" aria-labelledby="related-articles">
            <h2 id="related-articles" className="text-2xl font-extrabold text-[#075985]">Artikel lain untuk anda</h2>
            <p className="mt-2 text-sm font-semibold text-[#475569]">Terokai lebih banyak panduan rumah daripada pasukan KL Servis Rumah.</p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link key={related.englishSlug} href={localizedBlogPath("ms", related.post.slug)} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/30 hover:shadow-md">
                  <span className="text-xs font-bold text-[#0EA5E9]">{related.post.category}</span>
                  <h3 className="mt-2 font-extrabold text-[#075985]">{related.post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569]">{related.post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>

          <aside className="mt-12 rounded-2xl bg-slate-50 p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-[#075985]">Perlukan bantuan {post.category.toLowerCase()}?</h2>
            <p className="mt-2 text-slate-600">Dapatkan sebut harga percuma daripada pasukan kami di KL dan Selangor.</p>
            <a className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white hover:bg-[#128C7E] transition-colors" href={getWhatsAppLink({ service: original.category, lang: "ms" })} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4" /> WhatsApp kami
            </a>
          </aside>
        </article>

        {/* Crawl path from this tree to the other three localized trees. */}
        <LocaleTreeLinks locale="ms" current="blog" />
      </main>
    </>
  );
}
