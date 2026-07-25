"use client";

import React from "react";
import { Phone, Mail, Clock, MapPin, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/hooks/use-translations";

/**
 * LocaleContactInfo — localised contact sidebar with address, phone,
 * email, operating hours, and dispatch-note panel.
 */
export function LocaleContactInfo() {
  const t = useTranslations();

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-3xs">
          <MapPin className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t("contact.labels.address")}</span>
            <span className="text-xs sm:text-sm text-[#075985] font-bold leading-relaxed">{siteConfig.address}</span>
          </div>
        </div>

        <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-3xs">
          <Phone className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t("contact.labels.phone")}</span>
            <a href={`tel:${siteConfig.phone}`} className="text-xs sm:text-sm text-[#0EA5E9] font-extrabold">{siteConfig.phoneDisplay}</a>
          </div>
        </div>

        <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-3xs">
          <Mail className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t("contact.labels.email")}</span>
            <a href={`mailto:${siteConfig.email}`} className="text-xs sm:text-sm text-[#075985] font-bold">{siteConfig.email}</a>
          </div>
        </div>

        <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-3xs">
          <Clock className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t("contact.labels.hours")}</span>
            <span className="text-xs sm:text-sm text-[#075985] font-bold">{siteConfig.hours}</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F8FAFC] rounded-3xl p-5 border border-slate-100/60 flex gap-3">
        <ShieldAlert className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
        <p className="text-[11px] font-bold text-[#475569] leading-normal">
          {t("contact.dispatchNote")}
        </p>
      </div>
    </>
  );
}
