"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Info, Sparkles } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { buildServiceEstimator, DEDICATED_TOOL_BY_SERVICE, hasServiceEstimator } from "@/lib/estimator/service-estimator";
import { toolsContent } from "@/config/tools-data";
import { EstimatorForm } from "./estimator/estimator-form";

/**
 * The estimator that appears on every `/services/[slug]` page, directly under
 * the service description.
 *
 * Two cases:
 *
 *   • The service already has a hand-built, in-depth estimator (painting,
 *     plumbing, ceiling, waterproofing, handyman). We do not duplicate a
 *     shallower version of it here — we link straight to it.
 *   • Everything else gets the generic estimator, built at render time from
 *     the same published sub-service rates the page lists above it.
 */
export function ServiceEstimatorBlock({
  slug,
  title,
  warranty
}: {
  slug: string;
  title: string;
  warranty: string;
}) {
  const t = useTranslations();
  const dedicatedSlug = DEDICATED_TOOL_BY_SERVICE[slug];
  const dedicated = dedicatedSlug ? toolsContent[dedicatedSlug] : undefined;

  // The spec is rebuilt whenever the locale changes (t is memoised on lang),
  // so every question, modifier and breakdown label follows the language pill.
  const spec = useMemo(
    () => (dedicated || !hasServiceEstimator(slug) ? null : buildServiceEstimator({ slug, title, warranty, t })),
    [dedicated, slug, title, warranty, t]
  );

  if (dedicated) {
    return (
      <section className="section-tight bg-gradient-to-b from-sky-50/60 to-white">
        <div className="container-narrow">
          <div className="overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-[0_18px_50px_-30px_rgba(2,31,68,0.35)]">
            <div className="bg-gradient-to-br from-[#075985] to-[#0EA5E9] p-6 text-white sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> {t("serviceEstimator.eyebrow")}
              </span>
              <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">{dedicated.name}</h2>
              <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-sky-50">
                {t("serviceEstimator.dedicatedIntro")}
              </p>
              <Link
                href={`/tools/${dedicated.slug}`}
                className="mt-6 inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-[#075985] transition hover:bg-sky-50"
              >
                {t("serviceEstimator.openTool", { name: dedicated.name })} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-3 sm:p-6">
              {dedicated.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
                  <p className="mt-1 text-base font-black leading-tight text-[#075985]">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!spec) return null;

  return (
    <section id="estimator" className="section-tight scroll-mt-24 bg-gradient-to-b from-sky-50/60 to-white">
      <div className="container-narrow">
        <span className="eyebrow">{t("serviceEstimator.eyebrow")}</span>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-[#075985] sm:text-3xl">
          {t("serviceEstimator.heading")}
        </h2>
        <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-slate-600">
          {t("serviceEstimator.sub")}
        </p>

        <div className="mt-6">
          <EstimatorForm spec={spec} translator={t} />
        </div>

        <p className="mt-4 flex gap-2.5 text-xs font-bold leading-relaxed text-slate-500">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA5E9]" aria-hidden="true" />
          <span>{t("serviceEstimator.disclaimerShort")}</span>
        </p>
      </div>
    </section>
  );
}
