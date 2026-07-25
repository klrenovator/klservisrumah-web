"use client";

import React from "react";
import { useTranslations } from "@/hooks/use-translations";

export function ContactHeroHeading() {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest bg-[#0EA5E9]/10 px-4.5 py-1.5 rounded-full w-fit">
        {t("contact.pageTitle")}
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
        {t("contact.pageTitle")}
      </h1>
      <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-semibold">
        {t("contact.pageSubtitle")}
      </p>
    </div>
  );
}
