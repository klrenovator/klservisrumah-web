"use client";

import React from "react";
import Link from "next/link";
import { getLocalizedProblemNav, problemNavList } from "@/config/problem-nav.generated";
import { isRedirectedProblemSlug, problemPath } from "@/config/problem-canonical";
import { ArrowRight, AlertTriangle, Calculator } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";

type RelatedProblemsProps = {
  serviceSlug: string;
  maxItems?: number;
  /** Audit P4-17 — render the service's cost-calculator tools under the
      problems (closes the tools ↔ problems link loop for aircon). */
  showTools?: boolean;
};

// Audit P4-17 — tool ↔ problem cross-links for the flagship aircon service.
// Slugs are the published `/tools/<slug>` routes (verified in the corpus).
const SERVICE_TOOLS: Record<string, { slug: string; labelKey: string }[]> = {
  aircon: [
    { slug: "aircon-btu-calculator", labelKey: "toolsList.airconBtu" },
    { slug: "aircon-installation-cost", labelKey: "toolsList.airconInstall" },
    { slug: "aircon-gas-topup-cost", labelKey: "toolsList.airconGas" },
    { slug: "aircon-electricity-cost", labelKey: "toolsList.airconElectricity" }
  ]
};

/**
 * RelatedProblems — shows problem/symptom pages relevant to the current service.
 * Implements the same problem-page internal-linking pattern as KLRenovator
 * (e.g. "Common Aircond Problems" linking from service pages to problem pages).
 * This builds strong topical authority and provides users with diagnostic pathways.
 *
 * Titles, symptoms and cost ranges are localized client-side via
 * `getLocalizedProblem()` (MS/ZH when the user's active language is set), so
 * visitors browsing in Bahasa Malaysia or Chinese see native content instead
 * of English. The links still resolve to the EN `/problems/[slug]` route,
 * where `LocaleProblemView` renders the locale-appropriate full page.
 */
export function RelatedProblems({ serviceSlug, maxItems = 4, showTools = false }: RelatedProblemsProps) {
  const t = useTranslations();
  const { lang } = useLang();

  const related = problemNavList
    .filter((p) => p.serviceSlug === serviceSlug && !isRedirectedProblemSlug(p.slug))
    .slice(0, maxItems)
    .map((problem) => getLocalizedProblemNav(problem, lang));

  if (related.length === 0) return null;

  return (
    <section className="bg-white border-t border-slate-100 py-16 sm:py-20" aria-label={t("internalLinks.commonProblems")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-600 tracking-widest uppercase bg-amber-50 px-4 py-1.5 rounded-full">
            {t("internalLinks.problems")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
            {t("internalLinks.commonProblems")}
          </h2>
          <p className="text-sm text-[#475569] max-w-2xl leading-relaxed">
            {t("internalLinks.problemsIntro")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {related.map((problem) => (
            <Link
              key={problem.slug}
              href={problemPath(problem.slug, lang)}
              className="bg-amber-50/40 rounded-2xl p-5 border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-extrabold text-[#075985] group-hover:text-amber-600 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed font-medium line-clamp-2">
                    {problem.symptom}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {problem.costRange}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 group-hover:text-amber-700">
                      <span>{t("common.viewDetails")}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-8 text-center">
            <Link
              href="/problems"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0EA5E9] hover:text-[#075985] transition-colors"
            >
              {t("internalLinks.viewAllProblems")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {showTools && SERVICE_TOOLS[serviceSlug] && (
          <div className="mt-10 rounded-2xl border border-sky-100 bg-sky-50/50 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-extrabold text-[#075985]">
                  <Calculator className="w-4 h-4 text-[#0EA5E9]" aria-hidden="true" />
                  {t("internalLinks.airconTools")}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#475569] leading-relaxed">
                  {t("internalLinks.airconToolsSub")}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {SERVICE_TOOLS[serviceSlug].map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white px-3.5 py-2 text-xs font-extrabold text-[#075985] transition hover:border-[#0EA5E9] hover:bg-sky-50"
                  >
                    {t(tool.labelKey)}
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
