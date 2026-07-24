import React from "react";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { CheckCircle2, MessageSquare, Phone, Award, Star } from "lucide-react";
import { TrustBadgesRow } from "@/components/content/trust-badges-row";
import type { ServiceDetail } from "@/config/services-data";

type ServiceDetailHeroProps = {
  service: ServiceDetail;
};

const trilingualSublines: Record<string, { ms: string; zh: string }> = {
  "painting":          { ms: "Pengecatan rumah premium di KL & Selangor", zh: "吉隆坡与雪兰莪优质房屋油漆" },
  "plumbing":          { ms: "Paip & pembaikan kebocoran di KL & Selangor", zh: "吉隆坡与雪兰莪水管与漏水维修" },
  "ceiling":           { ms: "Siling plaster & partisi di KL & Selangor", zh: "吉隆坡与雪兰莪石膏天花板与隔断" },
  "waterproofing":     { ms: "Kalis air & PU grouting di KL & Selangor", zh: "吉隆坡与雪兰莪防水与PU注浆" },
  "handyman":          { ms: "Tukang serba boleh di KL & Selangor", zh: "吉隆坡与雪兰莪杂工服务" },
  "house-renovation":  { ms: "Pengubahsuaian rumah menyeluruh di KL & Selangor", zh: "吉隆坡与雪兰莪全屋翻新" },
  "electrical":        { ms: "Pendawaian & elektrik berlesen di KL & Selangor", zh: "吉隆坡与雪兰莪持牌电工服务" },
  "water-heater":      { ms: "Pemanas air & pembaikan di KL & Selangor", zh: "吉隆坡与雪兰莪热水器安装与维修" },
  "ceiling-fan":       { ms: "Pemasangan kipas siling di KL & Selangor", zh: "吉隆坡与雪兰莪吊扇安装" },
  "lighting":          { ms: "Pemasangan pencahayaan di KL & Selangor", zh: "吉隆坡与雪兰莪照明设计与安装" },
  "tiling":            { ms: "Jubin lantai & dinding di KL & Selangor", zh: "吉隆坡与雪兰莪瓷砖铺贴" },
  "plaster-ceiling":   { ms: "Siling plaster moden di KL & Selangor", zh: "吉隆坡与雪兰莪现代石膏天花板" },
  "skim-coat":         { ms: "Lapisan skim dinding di KL & Selangor", zh: "吉隆坡与雪兰莪墙面腻子" },
  "flooring":          { ms: "Jubin vinil, SPC & laminate di KL & Selangor", zh: "吉隆坡与雪兰莪乙烯基、SPC和复合地板" },
  "epoxy-flooring":    { ms: "Epoxy lantai industri di KL & Selangor", zh: "吉隆坡与雪兰莪工业环氧地坪" },
  "roof-repair":       { ms: "Pembaikan bumbung & kalis air di KL & Selangor", zh: "吉隆坡与雪兰莪屋顶维修与防水" },
  "kitchen-cabinet":   { ms: "Kabinet dapur tersuai di KL & Selangor", zh: "吉隆坡与雪兰莪定制厨房橱柜" },
  "carpentry":         { ms: "Pertukangan & perabot tersuai di KL & Selangor", zh: "吉隆坡与雪兰莪定制木工与家具" },
  "door":              { ms: "Pembaikan & pasang pintu di KL & Selangor", zh: "吉隆坡与雪兰莪门维修与安装" },
  "window-repair":     { ms: "Pembaikan tingkap & kaca di KL & Selangor", zh: "吉隆坡与雪兰莪窗户维修与玻璃更换" },
  "locksmith":         { ms: "Kunci pintar & kunci di KL & Selangor", zh: "吉隆坡与雪兰莪智能锁与锁匠" },
  "glass-aluminium":         { ms: "Kaca & aluminium di KL & Selangor", zh: "吉隆坡与雪兰莪玻璃与铝制品" },
  "cleaning":                 { ms: "Cucian rumah & pejabat di KL & Selangor", zh: "吉隆坡与雪兰莪家居与办公室清洁" },
  "deep-cleaning":            { ms: "Cucian mendalam di KL & Selangor", zh: "吉隆坡与雪兰莪深度清洁" },
  "post-renovation-cleaning":{ ms: "Cucian selepas renovasi di KL & Selangor", zh: "吉隆坡与雪兰莪装修后清洁" },
  "cctv":                     { ms: "Pemasangan CCTV di KL & Selangor", zh: "吉隆坡与雪兰莪监控摄像头安装" },
  "autogate":                 { ms: "Pintu pagar automatik di KL & Selangor", zh: "吉隆坡与雪兰莪自动门安装" }
};

/**
 * ServiceDetailHero — Klrenovator-style service hero with image background,
 * trilingual subline, price badge, and trust badges.
 */
export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const subline = trilingualSublines[service.slug] ?? { ms: "", zh: "" };
  const waLink = getWhatsAppLink({ service: service.title });

  return (
    <section className="relative bg-white section border-b border-slate-100 overflow-hidden">
      {/* Decorative background highlights */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#0EA5E9]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#E0F2FE]/10 blur-3xl pointer-events-none" />

      <div className="container-default relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <span className="trust-pill-blue trust-pill">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Specialist Service</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#075985] tracking-tight leading-[1.05] text-balance">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-semibold max-w-2xl">
              {service.tagline}
            </p>

            {(subline.ms || subline.zh) && (
              <p className="trilingual-sub italic">
                {subline.ms && <span><b>BM:</b> {subline.ms}</span>}
                {subline.ms && subline.zh && <span className="mx-1.5 text-slate-300">|</span>}
                {subline.zh && <span><b>中文:</b> {subline.zh}</span>}
              </p>
            )}

            {/* Price + Warranty row */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="inline-flex items-baseline gap-2 bg-[#F0F9FF] border-2 border-[#BAE6FD] rounded-2xl px-5 py-3">
                <span className="text-xs font-extrabold text-[#0EA5E9] uppercase tracking-wider">From</span>
                <span className="text-3xl sm:text-4xl font-black text-[#075985] tracking-tight">{service.startPrice}</span>
              </span>
              <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-2xl text-sm font-bold">
                <Award className="w-4 h-4" />
                <span>{service.warranty}</span>
              </span>
            </div>

            {/* Trust badges row */}
            <TrustBadgesRow variant="light" />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
              >
                <MessageSquare className="w-5 h-5 fill-white text-[#22C55E]" />
                <span>Book via WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-ghost text-base"
              >
                <Phone className="w-4 h-4 text-[#0EA5E9]" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
            </div>

            {/* Google rating strip */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <span className="text-sm font-extrabold text-[#075985]">4.9 / 5</span>
              <span className="text-xs text-[#475569] font-semibold">· {siteConfig.reviewCount}+ Google Reviews</span>
            </div>
          </div>

          {/* Right hero image card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-3xl overflow-hidden bg-gradient-to-br from-[#075985] via-[#0369A1] to-[#0EA5E9] shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/30 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/20 blur-2xl" />
              </div>
              <img
                src={service.heroImage}
                alt={`${service.title} service banner`}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="eyebrow text-[#7DD3FC] mb-2">All KL & Selangor</div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                  {service.title}
                </h2>
                <p className="text-sm text-white/80 font-medium mt-1">
                  Same-day available · Warranty-backed · Insured
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
