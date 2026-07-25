"use client";

import { ExternalLink, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

type Locale = "en" | "ms" | "zh";

type InstaPost = {
  id: string;
  captionEN: string;
  captionMS: string;
  captionZH: string;
  color: string;
};

const POSTS: InstaPost[] = [
  {
    id: "paint-prep",
    captionEN: "Wall preparation before interior repainting: protection, patching and primer.",
    captionMS: "Persediaan dinding sebelum cat semula: perlindungan, tampal dan primer.",
    captionZH: "室内翻新油漆前的墙面准备：保护、修补和底漆。",
    color: "from-sky-100 via-blue-50 to-cyan-100"
  },
  {
    id: "leak-check",
    captionEN: "Leak source checks before waterproofing — avoid unnecessary hacking.",
    captionMS: "Semakan punca bocor sebelum waterproofing — elak pecah lantai yang tidak perlu.",
    captionZH: "防水前先查漏水源头，避免不必要的敲砖。",
    color: "from-emerald-100 via-teal-50 to-sky-100"
  },
  {
    id: "ceiling-finish",
    captionEN: "Clean ceiling skim finish ready for primer and paint handover.",
    captionMS: "Kemasan skim siling bersih sebelum primer dan cat akhir.",
    captionZH: "干净的天花批灰效果，准备上底漆和面漆。",
    color: "from-slate-100 via-sky-50 to-blue-100"
  },
  {
    id: "handyman-safe",
    captionEN: "Handyman safety checks: wall anchors, alignment and final load test.",
    captionMS: "Semakan keselamatan handyman: anchor dinding, alignment dan ujian beban.",
    captionZH: "杂工安全检查：墙锚、水平校正和最终承重测试。",
    color: "from-orange-100 via-amber-50 to-yellow-100"
  },
  {
    id: "dispatch-team",
    captionEN: "Same-day dispatch desk coordinating jobs across Kuala Lumpur and Selangor.",
    captionMS: "Meja dispatch hari sama menyelaras kerja sekitar KL dan Selangor.",
    captionZH: "当天派工团队协调吉隆坡和雪兰莪各区工作。",
    color: "from-pink-100 via-rose-50 to-orange-100"
  }
];

const LABELS = {
  en: {
    heading: "Follow Our Work on Instagram",
    subtext: "Real-job proof belongs on real channels. This lightweight section keeps performance fast while giving visitors a clear path to see current updates.",
    cta: "Open Instagram",
    badge: "Instagram proof"
  },
  ms: {
    heading: "Ikuti Kerja Kami di Instagram",
    subtext: "Bukti kerja sebenar berada di saluran sebenar. Seksyen ringan ini mengekalkan prestasi pantas sambil memberi laluan jelas ke update terbaru.",
    cta: "Buka Instagram",
    badge: "Bukti Instagram"
  },
  zh: {
    heading: "在 Instagram 关注我们的工程",
    subtext: "真实工程证明应在真实频道展示。本轻量区块保持网站快速，同时让访客查看最新动态。",
    cta: "打开 Instagram",
    badge: "Instagram 证明"
  }
} as const;

function postCaption(post: InstaPost, locale: Locale) {
  if (locale === "ms") return post.captionMS;
  if (locale === "zh") return post.captionZH;
  return post.captionEN;
}

export function InstagramFeed({ locale = "en", compact = false }: { locale?: Locale; compact?: boolean }) {
  const loc = LABELS[locale] ? locale : "en";
  const labels = LABELS[loc];
  const posts = compact ? POSTS.slice(0, 3) : POSTS;

  return (
    <section className="border-t border-pink-100 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 py-14 sm:py-16">
      <div className="container-default">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-white">
              <Instagram className="h-3.5 w-3.5" /> {labels.badge}
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-[#075985] sm:text-3xl">{labels.heading}</h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">{labels.subtext}</p>
          </div>
          <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 px-5 py-3 text-xs font-black uppercase tracking-widest text-white shadow-md transition hover:from-pink-600 hover:to-rose-700">
            <Instagram className="h-4 w-4" /> {labels.cta}
          </a>
        </div>

        <div className={`grid gap-4 ${compact ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"}`}>
          {posts.map((post) => (
            <a key={post.id} href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer nofollow" className="group relative aspect-square overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-pink-300 hover:shadow-md" aria-label={postCaption(post, loc)}>
              <div className={`absolute inset-0 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                <Instagram className="h-10 w-10 text-pink-400 transition group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <p className="line-clamp-4 text-xs font-semibold leading-snug text-white">{postCaption(post, loc)}</p>
              </div>
              <span className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-pink-600 shadow-sm">
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
