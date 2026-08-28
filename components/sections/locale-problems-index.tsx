import React from "react";
import Link from "next/link";
import { AlertCircle, MessageSquare, Phone } from "lucide-react";
import { indexableProblemPages } from "@/config/problem-index";
import { servicesData } from "@/config/services-data";
import { getLocalizedProblem } from "@/lib/problem-i18n";
import { getLocalizedService } from "@/lib/service-i18n";
import { getServerTranslator } from "@/lib/i18n-server";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { problemPath } from "@/config/problem-canonical";
import type { Locale } from "@/lib/i18n";

/**
 * Localized problem hub (`/ms/problems`, `/zh/problems`).
 *
 * WHY THIS EXISTS
 * ---------------
 * Every localized problem page renders a breadcrumb whose first crumb points at
 * the locale's problem hub (`locale-problem-page.tsx#hubHref`). Those hubs did
 * not exist: `/ms/problems` returned a hard 404 and `/zh/problems` fell through
 * to the Chinese catch-all, which serves the 404 boundary with a 200 status —
 * a soft 404. 130 pages (65 MS + 65 ZH) linked to a dead destination, and the
 * MS/ZH trees had no browsable entry point into the diagnostic content at all
 * while English had `/problems`.
 */
export function localizedProblemsIndexLanguageUrls() {
  return { en: "/problems", ms: "/ms/problems", zh: "/zh/problems" };
}

const COPY = {
  en: {
    eyebrow: "Problem Diagnosis",
    heading: "Common Home Problems KL & Selangor",
    intro:
      "KL Servis Rumah diagnoses and fixes all common home problems across Kuala Lumpur and Selangor. Find your problem below — each guide explains the cause, fix, and pricing.",
    whatsapp: "WhatsApp For Diagnosis",
    call: "Call",
    allEyebrow: "All Problems",
    allHeading: "Select Your Home Problem",
    cta: "See Fix →",
  },
  ms: {
    eyebrow: "Diagnosis Masalah",
    heading: "Masalah Rumah Biasa di KL & Selangor",
    intro:
      "KL Servis Rumah mendiagnosis dan membaiki masalah rumah yang biasa di seluruh Kuala Lumpur dan Selangor. Cari masalah anda di bawah — setiap panduan menerangkan punca, cara baiki dan anggaran kos.",
    whatsapp: "WhatsApp Untuk Diagnosis",
    call: "Hubungi",
    allEyebrow: "Semua Masalah",
    allHeading: "Pilih Masalah Rumah Anda",
    cta: "Lihat Cara Baiki →",
  },
  zh: {
    eyebrow: "问题诊断",
    heading: "吉隆坡与雪兰莪常见家居问题",
    intro:
      "KL Servis Rumah 为吉隆坡与雪兰莪的住宅诊断并修复各类常见家居问题。在下方找到您的问题——每篇指南都会说明成因、修复方式与费用范围。",
    whatsapp: "WhatsApp 咨询诊断",
    call: "致电",
    allEyebrow: "所有问题",
    allHeading: "选择您的家居问题",
    cta: "查看修复方法 →",
  },
} as const;

const URGENCY_LABEL: Record<Locale, Record<string, string>> = {
  en: { Low: "Low", Medium: "Medium", High: "High", Emergency: "Emergency" },
  ms: { Low: "Rendah", Medium: "Sederhana", High: "Tinggi", Emergency: "Kecemasan" },
  zh: { Low: "低", Medium: "中等", High: "高", Emergency: "紧急" },
};

export function LocaleProblemsIndex({ locale }: { locale: Locale }) {
  const t = getServerTranslator(locale);
  const copy = COPY[locale];
  const hubPath = localizedProblemsIndexLanguageUrls()[locale];
  const problems = indexableProblemPages();

  return (
    <>
      <Breadcrumbs
        ariaLabel={t("breadcrumbs.navAria")}
        items={[{ label: t("nav.problems"), href: hubPath }]}
      />

      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
              <AlertCircle className="w-3.5 h-3.5 inline mr-1" aria-hidden="true" />
              {copy.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#075985] tracking-tight text-balance">
              {copy.heading}
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">{copy.intro}</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
              <a
                href={getWhatsAppLink({ lang: locale })}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-page="locale_problems_hub"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>{copy.whatsapp}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                data-analytics-page="locale_problems_hub"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-[#0EA5E9] text-[#075985] font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{copy.call} {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
              {copy.allEyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">{copy.allHeading}</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => {
              const service = servicesData[problem.serviceSlug];
              const localizedProblem = getLocalizedProblem(problem, locale);
              const localizedService = getLocalizedService(service, locale);
              const urgency = URGENCY_LABEL[locale][problem.urgency] ?? problem.urgency;
              return (
                <Link
                  key={problem.slug}
                  href={problemPath(problem.slug, locale)}
                  className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xs transition hover:-translate-y-0.5 hover:shadow-md group"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0EA5E9]">
                    {localizedService.title} · {urgency}
                  </span>
                  <h3 className="mt-2 text-lg font-extrabold text-[#075985] group-hover:text-[#0EA5E9] transition-colors">
                    {localizedProblem.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold leading-relaxed text-[#475569]">
                    {localizedProblem.symptom}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0EA5E9]">
                    {copy.cta}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
