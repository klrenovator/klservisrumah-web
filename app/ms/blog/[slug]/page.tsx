import { blogPosts } from "@/config/blog-data";
import { blogI18n, localizedBlogPath } from "@/config/blog-i18n";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const dynamicParams = false;
export async function generateStaticParams() { return Object.values(blogI18n).flatMap((v) => v.ms ? [{ slug: v.ms.slug }] : []); }
function find(slug: string) { const entry = Object.entries(blogI18n).find(([, v]) => v.ms?.slug === slug); return entry && { original: blogPosts.find((p) => p.slug === entry[0])!, post: entry[1].ms! }; }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const result = find((await params).slug); return result ? buildMetadata({ title: result.post.metaTitle, description: result.post.metaDesc, path: localizedBlogPath("ms", result.post.slug), image: result.original.coverImage, type: "article" }) : {}; }
export default async function MalayArticle({ params }: { params: Promise<{ slug: string }> }) { const result = find((await params).slug); if (!result) notFound(); const { original, post } = result; return <main className="bg-white py-12 sm:py-16"><article className="mx-auto max-w-4xl px-4 sm:px-6"><Link className="text-sm font-bold text-[#0284C7] hover:underline" href="/blog">← Kembali ke Hab Ilmu</Link><p className="mt-8 text-xs font-bold uppercase tracking-widest text-[#0284C7]">{post.category}</p><h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#075985] sm:text-4xl">{post.title}</h1><p className="mt-4 border-y border-slate-100 py-3 text-sm font-semibold text-slate-500">Oleh {original.author} · {original.date} · {original.readTime}</p><div className="mt-8 whitespace-pre-line text-base font-medium leading-relaxed text-slate-600">{post.content}</div><aside className="mt-10 rounded-2xl bg-slate-50 p-6"><h2 className="text-xl font-extrabold text-[#075985]">Perlukan bantuan {post.category.toLowerCase()}?</h2><p className="mt-2 text-slate-600">Dapatkan sebut harga percuma daripada pasukan kami di KL dan Selangor.</p><a className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-bold text-white" href={getWhatsAppLink({ service: original.category })} target="_blank" rel="noopener noreferrer"><MessageSquare className="h-4 w-4"/> WhatsApp kami</a></aside></article></main>; }
