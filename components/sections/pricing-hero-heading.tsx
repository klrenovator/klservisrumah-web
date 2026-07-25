"use client";

import React from "react";
import { useTranslations } from "@/hooks/use-translations";

export function PricingHeroHeading() {
  const t = useTranslations();
  return (
    <div className="max-w-4xl">
      <span className="inline-flex rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#0284C7]">
        {t("pricing.pageTitle")}
      </span>
      <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#075985] sm:text-5xl">
        {t("pricing.pageTitle")}
      </h1>
      <p className="mt-5 max-w-3xl text-base font-semibold leading-relaxed text-[#475569] sm:text-lg">
        {t("pricing.pageSubtitle")}
      </p>
    </div>
  );
}
