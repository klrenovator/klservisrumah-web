"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ExternalLink, MessageSquare, Play, Video } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

type Locale = "en" | "ms" | "zh";

type VideoItem = {
  id: string;
  videoId?: string;
  url: string;
  embedUrl?: string;
  caption: string;
  captionMS: string;
  captionZH: string;
};

// Lightweight social proof facade. Replace videoId/embedUrl with KL Servis
// Rumah-specific TikTok URLs when approved clips are available. Until then,
// cards link to the official social profile and do not load third-party JS.
const VIDEOS: VideoItem[] = [
  {
    id: "painting-condo",
    url: siteConfig.links.tiktok,
    caption: "Condo repainting workflow: masking, patching, primer and two-coat finish",
    captionMS: "Aliran kerja mengecat kondo: masking, tampal, primer dan dua lapisan cat",
    captionZH: "公寓翻新油漆流程：保护、修补、底漆和两层面漆"
  },
  {
    id: "plumbing-leak",
    url: siteConfig.links.tiktok,
    caption: "Plumbing leak diagnosis before opening walls or replacing fittings",
    captionMS: "Diagnos kebocoran paip sebelum pecah dinding atau tukar fitting",
    captionZH: "水管漏水诊断：先确认原因再拆墙或更换配件"
  },
  {
    id: "ceiling-repair",
    url: siteConfig.links.tiktok,
    caption: "Ceiling board replacement and skim-coat finishing after leak damage",
    captionMS: "Tukar papan siling dan skim coat selepas kerosakan akibat bocor",
    captionZH: "漏水损坏后的天花板更换与批灰收尾"
  },
  {
    id: "waterproofing-pu",
    url: siteConfig.links.tiktok,
    caption: "PU grouting approach for active bathroom and concrete slab leaks",
    captionMS: "Kaedah PU grouting untuk kebocoran aktif bilik air dan slab konkrit",
    captionZH: "PU灌浆处理浴室和混凝土楼板活跃漏水"
  },
  {
    id: "handyman-tv",
    url: siteConfig.links.tiktok,
    caption: "Safe TV wall mounting with wall-type checks and final weight test",
    captionMS: "Pemasangan TV selamat dengan semakan jenis dinding dan ujian berat",
    captionZH: "安全电视挂墙：确认墙体类型并进行承重测试"
  }
];

const LABELS = {
  en: {
    eyebrow: "Real Jobs. Real Proof.",
    title: "Watch Our Home Service Workflow",
    subtitle: "Short job-style cards show what we inspect before painting, plumbing, ceiling, waterproofing and handyman work. No heavy TikTok embed loads until a real video is clicked.",
    play: "Play preview",
    open: "Open social post",
    follow: "Follow our TikTok",
    book: "Book on WhatsApp",
    cta: "Want the same clean process at your property? Send photos and area for fast advice."
  },
  ms: {
    eyebrow: "Kerja Sebenar. Bukti Sebenar.",
    title: "Lihat Aliran Kerja Servis Rumah Kami",
    subtitle: "Kad kerja ringkas menerangkan apa yang kami semak sebelum mengecat, plumbing, siling, waterproofing dan handyman. Embed TikTok berat tidak dimuat sehingga video sebenar diklik.",
    play: "Main pratonton",
    open: "Buka post sosial",
    follow: "Ikuti TikTok kami",
    book: "Tempah WhatsApp",
    cta: "Nak proses kemas di rumah anda? Hantar foto dan kawasan untuk nasihat pantas."
  },
  zh: {
    eyebrow: "真实工作，真实证明",
    title: "观看我们的家居服务流程",
    subtitle: "短卡片展示油漆、水管、天花、防水和杂工服务前会检查什么。只有点击真实视频时才加载 TikTok 嵌入。",
    play: "播放预览",
    open: "打开社交帖子",
    follow: "关注我们的 TikTok",
    book: "WhatsApp 预约",
    cta: "想要同样干净的施工流程？发送照片和地区，我们快速建议。"
  }
} as const;

function caption(video: VideoItem, locale: Locale) {
  if (locale === "ms") return video.captionMS;
  if (locale === "zh") return video.captionZH;
  return video.caption;
}

function SocialVideoCard({ video, locale, anyPlayed, onAnyPlayed }: { video: VideoItem; locale: Locale; anyPlayed: boolean; onAnyPlayed: () => void }) {
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const labels = LABELS[locale];

  useEffect(() => {
    if (!anyPlayed || !ref.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setInView(true);
        observer.disconnect();
      }
    }, { rootMargin: "220px 0px", threshold: 0.1 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [anyPlayed]);

  const handlePlay = useCallback(() => {
    if (!video.embedUrl) {
      window.open(video.url, "_blank", "noopener,noreferrer");
      return;
    }
    setPlaying(true);
    onAnyPlayed();
  }, [onAnyPlayed, video.embedUrl, video.url]);

  const shouldRenderIframe = Boolean(video.embedUrl) && (playing || (anyPlayed && inView));

  return (
    <article ref={ref} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative w-full bg-slate-950" style={{ aspectRatio: "9 / 16" }}>
        {shouldRenderIframe ? (
          <iframe
            src={video.embedUrl}
            title={caption(video, locale)}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button type="button" onClick={handlePlay} className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-[#075985] p-4 text-center text-white focus:outline-none focus:ring-4 focus:ring-sky-300/60" aria-label={`${labels.play}: ${caption(video, locale)}`}>
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur transition group-hover:scale-110 group-hover:bg-white/25">
              <Play className="h-6 w-6 fill-white text-white" />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white/80">
              <Video className="h-3.5 w-3.5" /> Workflow
            </span>
            <p className="mt-3 text-sm font-bold leading-snug text-white/95">{caption(video, locale)}</p>
          </button>
        )}
      </div>
      <div className="flex items-center justify-between gap-2 px-4 py-3 text-xs">
        <p className="line-clamp-2 flex-1 font-semibold text-slate-600">{caption(video, locale)}</p>
        <a href={video.url} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-bold text-slate-700 transition hover:border-sky-300 hover:text-[#0EA5E9]" aria-label={labels.open}>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

export function TikTokShowcase({ locale = "en" }: { locale?: Locale }) {
  const loc = LABELS[locale] ? locale : "en";
  const labels = LABELS[loc];
  const [anyPlayed, setAnyPlayed] = useState(false);

  return (
    <section id="social-video-showcase" className="border-y border-slate-100 bg-slate-50 py-16 sm:py-20">
      <div className="container-default">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-white">
              <Video className="h-3.5 w-3.5 text-sky-300" /> {labels.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#075985] sm:text-4xl">{labels.title}</h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">{labels.subtitle}</p>
          </div>
          <a href={siteConfig.links.tiktok} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-widest text-slate-800 shadow-sm transition hover:border-sky-300 hover:text-[#0EA5E9]">
            {labels.follow} <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {VIDEOS.map((video) => (
            <SocialVideoCard key={video.id} video={video} locale={loc} anyPlayed={anyPlayed} onAnyPlayed={() => setAnyPlayed(true)} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border border-sky-100 bg-white p-5 sm:flex-row">
          <p className="text-center text-sm font-semibold text-slate-700 sm:text-left">{labels.cta}</p>
          <a href={getWhatsAppLink({ service: "Social proof workflow enquiry" })} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-5 py-3 text-sm font-black text-white transition hover:bg-[#16A34A]">
            <MessageSquare className="h-4 w-4" /> {labels.book}
          </a>
        </div>
      </div>
    </section>
  );
}
