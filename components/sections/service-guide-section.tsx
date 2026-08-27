"use client";

import React from "react";
import { MessageSquare, CheckCircle2, Info, Wrench } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";
import { getWhatsAppLink } from "@/lib/whatsapp";
import type { ServiceGuide, ServiceGuideContent } from "@/config/services-data";
import type { Locale } from "@/lib/i18n";

/**
 * ServiceGuideSection — long-form pillar content rendered for services that
 * carry an optional `guide` block on their ServiceDetail (e.g. the awning
 * installation page). Renders, in order:
 *
 *   1. Guide intro / definition (AEO/GEO anchor)
 *   2. System types (H3 cards)
 *   3. Material comparison table (snippet-friendly)
 *   4. Applications grid
 *   5. Problems → solutions cards
 *   6. Local climate considerations
 *   7. Quotation / cost factors + WhatsApp CTA
 *
 * Localized by the `ms` / `zh` guide blocks; falls back to the English block
 * when a locale is missing. Renders nothing when the service has no guide.
 */
export function ServiceGuideSection({
  guide,
  serviceTitle,
  localeOverride,
}: {
  guide?: ServiceGuide;
  serviceTitle: string;
  /**
   * Server-rendered localised pages (`/ms/services/[slug]`, `/zh/services/[slug]`)
   * pass their fixed locale so the guide renders in that language. The client
   * service pages leave this unset and follow the active language pill.
   */
  localeOverride?: Exclude<Locale, "en">;
}) {
  const t = useTranslations();
  const { lang } = useLang();
  const effectiveLocale = localeOverride ?? lang;
  if (!guide) return null;
  const content: ServiceGuideContent =
    (localeOverride ? guide[localeOverride] : undefined) ?? guide[effectiveLocale] ?? guide.en;
  const waLink = getWhatsAppLink({ service: serviceTitle, lang: effectiveLocale });

  return (
    <>
      {/* ── Guide intro / definition ──────────────────────────────────── */}
      <section className="section-tight bg-white" aria-labelledby="guide-intro">
        <div className="container-narrow">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2
            id="guide-intro"
            className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3"
          >
            {content.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-medium mt-4">
            {content.intro}
          </p>
        </div>
      </section>

      {/* ── Types ─────────────────────────────────────────────────────── */}
      <section className="section-tight bg-slate-50" aria-labelledby="guide-types">
        <div className="container-default">
          <h2 id="guide-types" className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
            {content.typesHeading}
          </h2>
          {content.typesIntro && (
            <p className="text-base text-[#475569] leading-relaxed font-medium mt-3 max-w-3xl">
              {content.typesIntro}
            </p>
          )}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.types.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col gap-2.5 hover:border-[#BAE6FD] hover:shadow-md transition-all"
              >
                <h3 className="text-base sm:text-lg font-extrabold text-[#075985]">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────────────── */}
      <section className="section-tight bg-white" aria-labelledby="guide-comparison">
        <div className="container-default">
          <h2 id="guide-comparison" className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
            {content.comparisonHeading}
          </h2>
          {content.comparisonIntro && (
            <p className="text-base text-[#475569] leading-relaxed font-medium mt-3 max-w-3xl">
              {content.comparisonIntro}
            </p>
          )}
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-[#075985] text-white">
                  {content.comparison.headers.map((header, idx) => (
                    <th key={idx} scope="col" className="px-4 py-3.5 text-xs sm:text-sm font-extrabold whitespace-nowrap">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.comparison.rows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className={`px-4 py-3.5 text-xs sm:text-sm leading-relaxed align-top ${
                          cellIdx === 0
                            ? "font-extrabold text-[#075985] whitespace-nowrap"
                            : "font-medium text-[#475569]"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {content.comparison.caption && (
            <p className="mt-4 text-xs font-semibold text-[#64748B] leading-relaxed flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{content.comparison.caption}</span>
            </p>
          )}
        </div>
      </section>

      {/* ── Applications ──────────────────────────────────────────────── */}
      <section className="section-tight bg-slate-50" aria-labelledby="guide-applications">
        <div className="container-default">
          <h2 id="guide-applications" className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
            {content.applicationsHeading}
          </h2>
          {content.applicationsIntro && (
            <p className="text-base text-[#475569] leading-relaxed font-medium mt-3 max-w-3xl">
              {content.applicationsIntro}
            </p>
          )}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.applications.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col gap-2">
                <h3 className="text-base font-extrabold text-[#075985]">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problems → solutions ──────────────────────────────────────── */}
      <section className="section-tight bg-white" aria-labelledby="guide-problems">
        <div className="container-default">
          <h2 id="guide-problems" className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
            {content.problemsHeading}
          </h2>
          {content.problemsIntro && (
            <p className="text-base text-[#475569] leading-relaxed font-medium mt-3 max-w-3xl">
              {content.problemsIntro}
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3">
            {content.problems.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row gap-3 sm:gap-5"
              >
                <div className="flex items-start gap-3 sm:w-64 shrink-0">
                  <Wrench className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-base font-extrabold text-[#075985]">{item.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Climate ───────────────────────────────────────────────────── */}
      <section className="section-tight bg-slate-50" aria-labelledby="guide-climate">
        <div className="container-narrow">
          <h2 id="guide-climate" className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
            {content.climateHeading}
          </h2>
          {content.climateIntro && (
            <p className="text-base text-[#475569] leading-relaxed font-medium mt-3">
              {content.climateIntro}
            </p>
          )}
          <ul className="mt-6 flex flex-col gap-3">
            {content.climatePoints.map((point, idx) => (
              <li key={idx} className="flex gap-3 items-start bg-white rounded-2xl border border-slate-200 p-4 sm:p-5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-medium">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Quote factors + CTA ───────────────────────────────────────── */}
      <section className="section-tight bg-white" aria-labelledby="guide-quote">
        <div className="container-default">
          <div className="rounded-3xl border border-[#BAE6FD] bg-gradient-to-br from-[#F0F9FF] to-white p-6 sm:p-10">
            <h2 id="guide-quote" className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
              {content.quoteHeading}
            </h2>
            {content.quoteIntro && (
              <p className="text-base text-[#475569] leading-relaxed font-medium mt-3 max-w-3xl">
                {content.quoteIntro}
              </p>
            )}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {content.quoteFactors.map((factor, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-medium">{factor}</p>
                </div>
              ))}
            </div>
            {content.quoteCta && (
              <p className="mt-6 text-sm sm:text-base text-[#475569] leading-relaxed font-medium max-w-3xl">
                {content.quoteCta}
              </p>
            )}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
                <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
                <span>{t("serviceDetail.guideWhatsAppCta")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
