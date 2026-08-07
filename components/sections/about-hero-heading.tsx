"use client";

import React from "react";
import { useTranslations } from "@/hooks/use-translations";

/**
 * Locale-aware hero heading for /about.
 *
 * Previously the hero heading was hard-coded English inside the page while
 * `AboutContent` rendered a second <h1> from the dictionary — giving the page two
 * <h1> elements (an accessibility and SEO defect) and leaving the hero untranslated
 * for BM/ZH visitors. The hero now owns the single <h1> and reads from the
 * dictionary; `AboutContent` renders an <h2> beneath it.
 */
export function AboutHeroHeading() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
      <span className="text-xs font-bold text-[#0369A1] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
        {t("about.heroEyebrow")}
      </span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#075985] tracking-tight text-balance">
        {t("about.heroTitle")}
      </h1>
      <p className="about-lead text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl text-pretty">
        {t("about.heroLead")}
      </p>
    </div>
  );
}
