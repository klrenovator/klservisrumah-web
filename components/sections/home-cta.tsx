"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/hooks/use-translations";

export function HomeCTA() {
  const t = useTranslations();

  return (
    <section className="bg-gradient-to-r from-[#075985] to-[#0369A1] py-20 border-t border-[#0EA5E9]/30 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#0EA5E9]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center gap-7">
        <span className="text-xs font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 px-4 py-1.5 rounded-full uppercase tracking-widest">
          {t("home.cta.badge")}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          {t("home.cta.heading")}
        </h2>
        <p className="text-base text-slate-300 max-w-2xl leading-relaxed font-medium">
          {t("home.cta.subheading")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#22C55E] hover:bg-[#1eb050] text-white text-center font-extrabold text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 fill-white text-[#22C55E]" />
            <span>{t("home.cta.bookButton")}</span>
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-transparent hover:bg-white/5 border-2 border-white/20 hover:border-white/40 text-white text-center font-extrabold text-base px-8 py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>{t("home.cta.callButton", { phone: siteConfig.phoneDisplay })}</span>
          </a>
        </div>

        <span className="text-xs text-slate-400 font-semibold mt-1">
          {t("home.cta.hours")}
        </span>
      </div>
    </section>
  );
}
