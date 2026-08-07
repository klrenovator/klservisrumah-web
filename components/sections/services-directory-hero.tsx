"use client";

import React from "react";
import { useTranslations } from "@/hooks/use-translations";

export function ServicesDirectoryHero() {
  const t = useTranslations();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <span className="rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0369A1]">
        {t("services.directoryEyebrow")}
      </span>
      {/* The two halves render as one continuous sentence for assistive tech and
          for the crawler's text extraction, so they need a real space between
          them — a <br /> alone produced "…You Needin KL & Selangor". */}
      <h1 className="mt-4 text-4xl font-extrabold text-[#075985] sm:text-6xl text-balance">
        {t("services.directoryTitle1")}{" "}
        <span className="block sm:inline">{t("services.directoryTitle2")}</span>
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-[#475569]">
        {t("services.directorySubtitle")}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#services" className="btn-primary px-8 py-3 text-base">{t("services.browseAll")}</a>
        <a href="/pricing" className="btn-ghost px-8 py-3 text-base">{t("services.viewPricingGuide")}</a>
      </div>
    </div>
  );
}
