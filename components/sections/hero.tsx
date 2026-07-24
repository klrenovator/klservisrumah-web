"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import { ArrowRight, ShieldCheck, MessageSquare, Phone, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ReviewBadge } from "@/components/ui/review-badge";
import { TrustBadgesRow } from "@/components/content/trust-badges-row";
import { useTranslations } from "@/hooks/use-translations";

export function Hero() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const t = useTranslations();

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = selectedService ? servicesData[selectedService]?.title : t("common.bookService");
    const waLink = getWhatsAppLink({ service: serviceName, location: selectedArea });
    window.open(waLink, "_blank");
  };

  return (
    <section className="relative bg-gradient-to-b from-[#F8FAFC] via-white to-white section border-b border-slate-100 overflow-hidden">
      {/* Decorative background highlights */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#0EA5E9]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#E0F2FE]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E0F2FE]/30 blur-3xl pointer-events-none" />

      <div className="container-default relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="animate-fade-in">
              <ReviewBadge />
            </div>

            <span className="trust-pill-blue trust-pill">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("home.servicesGrid.heading")}</span>
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#075985] tracking-tight leading-[1.05] text-balance">
              {t("home.hero.heading1")} <br />
              <span className="text-[#0EA5E9]">{t("home.hero.heading2")}</span> {t("home.hero.headingLocation")}
            </h1>

            {/* Trilingual subline */}
            <p className="trilingual-sub italic">
              <b>BM:</b> Servis rumah premium di KL &amp; Selangor dengan harga pasaran.
              <span className="mx-1.5 text-slate-300">|</span>
              <b>中文:</b> 吉隆坡与雪兰莪的市场行情优质家居服务。
            </p>

            {/* Semantic Subtext Body Copy */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
              {t("home.hero.subhead")}
            </p>

            {/* Trust Badges Row */}
            <TrustBadgesRow variant="light" />

            {/* WhatsApp + Phone Click Action Box */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
              >
                <MessageSquare className="w-5 h-5 fill-white text-[#22C55E]" />
                <span>{t("home.cta.bookButton")}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-ghost text-base"
              >
                <Phone className="w-4 h-4 text-[#0EA5E9]" />
                <span>{t("common.callUs")} {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Hero Right Conversion Box Column */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(2,31,68,0.08)] border border-slate-100 flex flex-col gap-6">
              <div className="flex flex-col gap-1.5 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-2">
                  <span className="eyebrow">Instant dispatch · Segera · 即时</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#075985] tracking-tight">
                  Get Your Quote in 60 Seconds
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] font-medium">
                  Dapatkan sebut harga dalam 60 saat · 60秒内获得报价
                </p>
              </div>

              <form onSubmit={handleBook} className="flex flex-col gap-5">
                {/* Service Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-extrabold text-[#075985] uppercase tracking-wider">
                    What service do you need? · Perkhidmatan · 服务
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    required
                    className="w-full bg-slate-50 hover:bg-slate-100/50 text-[#075985] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0EA5E9] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-[#475569]">Select a service...</option>
                    {Object.values(servicesData).map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title} (From {service.startPrice})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Area Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-extrabold text-[#075985] uppercase tracking-wider">
                    Your Location · Lokasi · 位置 (KL & Selangor)
                  </label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    required
                    className="w-full bg-slate-50 hover:bg-slate-100/50 text-[#075985] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0EA5E9] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-[#475569]">Select your area...</option>
                    {siteConfig.areas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Booking button */}
                <button
                  type="submit"
                  className="btn-primary w-full text-base mt-2"
                >
                  <span>Get My Instant Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              {/* Secure safety seal */}
              <div className="flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs text-[#475569] font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>No upfront deposits · Bayar selepas siap · 完工后付款</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
