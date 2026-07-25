"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

/**
 * Locale-aware hero heading for /faq.
 *
 * The previous markup hard-coded an English "Frequently Asked Questions" <h1>,
 * which (a) never translated for BM/ZH visitors and (b) wasted the page's single
 * strongest ranking signal on a generic label carrying no keyword or geo modifier.
 */
export function FaqHeroHeading() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
      <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
        <HelpCircle className="w-3.5 h-3.5 inline mr-1" />
        {t("faq.heroEyebrow")}
      </span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#075985] tracking-tight text-balance">
        {t("faq.heroTitle")}
      </h1>
      <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl text-pretty">
        {t("faq.heroLead")}
      </p>
    </div>
  );
}
