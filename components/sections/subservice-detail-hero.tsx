import React from "react";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { CheckCircle2, MessageSquare, Phone, ArrowRight, Award } from "lucide-react";
import { TrustBadgesRow } from "@/components/content/trust-badges-row";
import type { SubService, ServiceDetail } from "@/config/services-data";

type SubserviceDetailHeroProps = {
  service: ServiceDetail;
  sub: SubService;
};

const trilingualSublines: Record<string, { ms: string; zh: string }> = {
  "painting":          { ms: "Pengecatan rumah profesional", zh: "专业油漆服务" },
  "plumbing":          { ms: "Paip & kebocoran profesional", zh: "专业水管与漏水维修" },
  "ceiling":           { ms: "Siling plaster & partition", zh: "石膏天花板与隔断" },
  "waterproofing":     { ms: "Kalis air & rawatan kebocoran", zh: "防水与漏水处理" },
  "handyman":          { ms: "Tukang serba boleh", zh: "杂工服务" },
  "house-renovation":  { ms: "Pengubahsuaian rumah", zh: "全屋翻新" },
  "electrical":        { ms: "Pendawaian elektrik berlesen", zh: "持牌电工服务" },
  "water-heater":      { ms: "Pemanas air & pembaikan", zh: "热水器安装与维修" },
  "ceiling-fan":       { ms: "Pemasangan kipas siling", zh: "吊扇安装" },
  "lighting":          { ms: "Pemasangan pencahayaan", zh: "照明设计与安装" },
  "tiling":            { ms: "Jubin lantai & dinding", zh: "瓷砖铺贴" },
  "plaster-ceiling":   { ms: "Siling plaster moden", zh: "现代石膏天花板" },
  "skim-coat":         { ms: "Lapisan skim dinding", zh: "墙面腻子" },
  "flooring":          { ms: "Lantai vinil, SPC & laminate", zh: "乙烯基、SPC和复合地板" },
  "epoxy-flooring":    { ms: "Epoxy lantai industri", zh: "工业环氧地坪" },
  "roof-repair":       { ms: "Pembaikan bumbung & kalis air", zh: "屋顶维修与防水" },
  "kitchen-cabinet":   { ms: "Kabinet dapur tersuai", zh: "定制厨房橱柜" },
  "carpentry":         { ms: "Pertukangan tersuai", zh: "定制木工" },
  "door":              { ms: "Pemasangan & pembaikan pintu", zh: "门安装与维修" },
  "window-repair":     { ms: "Pembaikan tingkap & kaca", zh: "窗户维修与玻璃更换" },
  "locksmith":         { ms: "Kunci & kunci pintar", zh: "锁与智能锁" },
  "glass-aluminium":          { ms: "Kaca & aluminium", zh: "玻璃与铝制品" },
  "cleaning":                  { ms: "Cucian rumah & pejabat", zh: "家居与办公室清洁" },
  "deep-cleaning":             { ms: "Cucian mendalam", zh: "深度清洁" },
  "post-renovation-cleaning": { ms: "Cucian selepas renovasi", zh: "装修后清洁" },
  "cctv":                      { ms: "Pemasangan CCTV", zh: "监控摄像头安装" },
  "autogate":                  { ms: "Pintu pagar automatik", zh: "自动门安装" }
};

/**
 * SubserviceDetailHero — Klrenovator-style sub-service hero.
 * Compact version of the service hero, focused on a single sub-service.
 */
export function SubserviceDetailHero({ service, sub }: SubserviceDetailHeroProps) {
  const subline = trilingualSublines[service.slug] ?? { ms: "", zh: "" };
  const waLink = getWhatsAppLink({ service: sub.name });

  return (
    <section className="relative bg-white section-tight border-b border-slate-100 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#0EA5E9]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[#E0F2FE]/10 blur-3xl pointer-events-none" />

      <div className="container-default relative z-10">
        {/* Breadcrumb-style category line */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#475569] mb-6">
          <a href="/services" className="hover:text-[#0EA5E9] transition-colors">Services</a>
          <span className="text-slate-300">/</span>
          <a href={`/services/${service.slug}`} className="hover:text-[#0EA5E9] transition-colors">{service.title}</a>
          <span className="text-slate-300">/</span>
          <span className="text-[#075985]">{sub.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left content */}
          <div className="lg:col-span-8 flex flex-col items-start gap-5">
            <span className="trust-pill-blue trust-pill">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{service.title} sub-service</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#075985] tracking-tight leading-[1.1] text-balance">
              {sub.name} in KL &amp; Selangor
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-semibold max-w-2xl">
              {sub.desc}
            </p>

            {(subline.ms || subline.zh) && (
              <p className="trilingual-sub italic">
                {subline.ms && <span><b>BM:</b> {subline.ms}</span>}
                {subline.ms && subline.zh && <span className="mx-1.5 text-slate-300">|</span>}
                {subline.zh && <span><b>中文:</b> {subline.zh}</span>}
              </p>
            )}

            {/* Price + Warranty row */}
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <span className="inline-flex items-baseline gap-2 bg-[#F0F9FF] border-2 border-[#BAE6FD] rounded-2xl px-5 py-3">
                <span className="text-xs font-extrabold text-[#0EA5E9] uppercase tracking-wider">{sub.price.toLowerCase().startsWith("from") ? "" : "Price"}</span>
                <span className="text-2xl sm:text-3xl font-black text-[#075985] tracking-tight">{sub.price}</span>
              </span>
              <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-2xl text-sm font-bold">
                <Award className="w-4 h-4" />
                <span>{service.warranty}</span>
              </span>
            </div>

            {/* Trust badges row */}
            <TrustBadgesRow variant="light" />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1">
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
              <a
                href={`/services/${service.slug}`}
                className="btn-link self-center"
              >
                <span>View full {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right info card */}
          <div className="lg:col-span-4 w-full">
            <div className="card sticky top-28 flex flex-col gap-5">
              <div>
                <span className="eyebrow">Booking snapshot · Ringkasan · 概览</span>
                <h2 className="text-lg font-extrabold text-[#075985] tracking-tight mt-2">
                  At a glance
                </h2>
              </div>
              <dl className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between gap-3 border-b border-slate-100 pb-2">
                  <dt className="font-bold text-[#475569]">Service</dt>
                  <dd className="text-[#075985] font-extrabold text-right">{sub.name}</dd>
                </div>
                <div className="flex justify-between gap-3 border-b border-slate-100 pb-2">
                  <dt className="font-bold text-[#475569]">Category</dt>
                  <dd className="text-[#075985] font-extrabold text-right">{service.title}</dd>
                </div>
                <div className="flex justify-between gap-3 border-b border-slate-100 pb-2">
                  <dt className="font-bold text-[#475569]">Price</dt>
                  <dd className="text-[#0EA5E9] font-extrabold text-right">{sub.price}</dd>
                </div>
                <div className="flex justify-between gap-3 border-b border-slate-100 pb-2">
                  <dt className="font-bold text-[#475569]">Warranty</dt>
                  <dd className="text-emerald-600 font-extrabold text-right text-xs">{service.warranty}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="font-bold text-[#475569]">Coverage</dt>
                  <dd className="text-[#075985] font-extrabold text-right text-xs">All KL &amp; Selangor</dd>
                </div>
              </dl>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#22C55E]" />
                <span>Get My Quote</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-ghost w-full"
              >
                <Phone className="w-4 h-4 text-[#0EA5E9]" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
