"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Landmark, Users, Hammer, Flame } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/hooks/use-translations";

export function AboutContent() {
  const t = useTranslations();

  const values = [
    { icon: <Users className="w-6 h-6 text-[#0EA5E9]" />, key: "team" },
    { icon: <ShieldCheck className="w-6 h-6 text-[#0EA5E9]" />, key: "warranty" },
    { icon: <Hammer className="w-6 h-6 text-[#0EA5E9]" />, key: "materials" },
    { icon: <Flame className="w-6 h-6 text-[#0EA5E9]" />, key: "cleanliness" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">

      <div className="flex flex-col gap-4 text-center sm:text-left">
        <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest bg-[#0EA5E9]/10 px-4.5 py-1.5 rounded-full w-fit mx-auto sm:mx-0">
          {t("about.eyebrow")}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
          {t("about.pageTitle")}
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          {t("about.intro")}
        </p>
      </div>

      <hr className="border-slate-200/60" />

      <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 flex flex-col gap-6">
        <h2 className="text-xl font-extrabold text-[#075985] tracking-tight flex items-center gap-2">
          <Landmark className="w-5 h-5 text-[#0EA5E9]" />
          <span>{t("about.standardsHeading")}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm font-semibold text-[#475569]">
          <div className="bg-white p-4 rounded-xl border border-slate-100/80 flex flex-col gap-1">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">{t("about.positioningLabel")}</span>
            <span className="text-[#075985]">{t("about.positioningValue")}</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100/80 flex flex-col gap-1">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">{t("about.pricingLabel")}</span>
            <span className="text-[#075985]">{t("about.pricingValue")}</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100/80 flex flex-col gap-1">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">{t("about.officeLabel")}</span>
            <span className="text-[#075985] truncate">{siteConfig.addressStreet}, Kuala Lumpur</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100/80 flex flex-col gap-1">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">{t("about.statusLabel")}</span>
            <span className="text-emerald-500 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> {t("about.statusValue")}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold text-[#075985] tracking-tight">{t("about.missionHeading")}</h2>
        <p className="text-sm text-[#475569] leading-relaxed font-semibold">
          {t("about.missionBody")}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-extrabold text-[#075985] tracking-tight">{t("about.valuesHeading")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((val) => (
            <div key={val.key} className="flex gap-4 items-start">
              <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl shrink-0 mt-0.5">
                {val.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold text-[#075985]">{t(`about.values.${val.key}.title`)}</h3>
                <p className="text-xs text-[#475569] leading-relaxed font-semibold">{t(`about.values.${val.key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
