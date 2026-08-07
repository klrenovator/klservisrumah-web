"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Calculator, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";
import { buildServiceEstimator } from "@/lib/estimator/service-estimator";
import { estimatePath } from "@/config/estimate-links";
import { servicesData } from "@/config/services-data";
import { getLocalizedService } from "@/lib/service-i18n";
import { siteConfig } from "@/config/site";
import { trackPhoneCall } from "@/lib/analytics";
import { EstimatorForm } from "@/components/tools/estimator/estimator-form";
import { EstimatorShareBar } from "@/components/tools/estimator-share-bar";

/**
 * The standalone, shareable estimator page (`/estimate/<slug>`).
 *
 * This is the page the business owner sends to a customer on WhatsApp: it
 * opens straight onto the estimator for one service — no marketing content to
 * wade through — with a visible link bar at the top so the owner can copy or
 * forward the URL in one tap, and the estimator itself answering the only
 * question the customer has: "roughly how much will this cost?"
 *
 * Everything follows the language pill (EN/BM/中文), because the spec is
 * rebuilt whenever the locale changes — the same generic published-rate
 * engine that powers the estimator on the service page.
 */
export function EstimateSharePage({
  slug,
  warranty,
  startPrice
}: {
  slug: string;
  warranty: string;
  startPrice: string;
}) {
  const t = useTranslations();
  const { lang } = useLang();

  // The page-level copy is translated ("Pengira kos {service}" in MS), so the
  // service name embedded in those sentences must follow the language pill too.
  const localizedTitle = getLocalizedService(servicesData[slug], lang).title;

  const spec = useMemo(
    () => buildServiceEstimator({ slug, title: localizedTitle, warranty, t }),
    [slug, localizedTitle, warranty, t]
  );

  return (
    <div className="bg-gradient-to-b from-sky-50/70 via-white to-white">
      <div className="container-narrow pb-16 pt-8 sm:pt-12">
        {/* ── Heading ─────────────────────────────────────────────────── */}
        <span className="eyebrow">
          <Sparkles className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
          {t("estimateShare.pageEyebrow")}
        </span>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-[#075985] sm:text-4xl">
          {t("estimateShare.pageHeading", { service: localizedTitle })}
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">
          {t("estimateShare.pageSub", { service: localizedTitle })}
        </p>

        {/* ── Share bar — the reason this page exists ─────────────────── */}
        <div className="mt-5">
          <EstimatorShareBar path={estimatePath(slug)} serviceName={localizedTitle} translator={t} />
        </div>

        {/* ── The estimator itself ────────────────────────────────────── */}
        <div className="mt-7">
          {/*
            The estimator's question cards render as <h3>. Without a section
            heading above them the document went h1 -> h3, an accessibility
            (WCAG 1.3.1) and document-outline defect present on all 22
            `/estimate/<slug>` pages. `/tools/*` already renders a visible <h2>
            above the same form; this page's layout has no room for one, so the
            heading is exposed to assistive tech and crawlers via sr-only. The
            existing `pageHeading` key is reused — no new translation debt.
          */}
          <h2 className="sr-only">{t("estimateShare.pageHeading", { service: localizedTitle })}</h2>
          <EstimatorForm spec={spec} translator={t} />
        </div>

        {/* ── How the figure is built ─────────────────────────────────── */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
          <h2 className="flex items-center gap-2 text-lg font-black text-[#075985]">
            <Calculator className="h-5 w-5 text-[#0EA5E9]" aria-hidden="true" />
            {t("estimateShare.howTitle")}
          </h2>
          <ul className="mt-4 space-y-3">
            {[
              t("estimateShare.how1"),
              t("estimateShare.how2"),
              t("estimateShare.how3")
            ].map((line) => (
              <li key={line} className="flex gap-2.5 text-sm font-semibold leading-relaxed text-slate-600">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-black text-emerald-800">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              {t("estimateShare.warrantyLine", { warranty })}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-black text-[#075985]">
              {t("estimateShare.startingAt", { price: startPrice })}
            </span>
          </div>
        </section>

        {/* ── Next steps ──────────────────────────────────────────────── */}
        <section className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/services/${slug}`}
            className="inline-flex min-h-13 flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#075985] to-[#0EA5E9] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-500/25 transition hover:from-[#0c4a6e] hover:to-[#0284C7]"
          >
            {t("estimateShare.viewFullService", { service: localizedTitle })} <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={() => trackPhoneCall({ page: `estimate_${slug}` })}
            className="inline-flex min-h-13 flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-black text-[#075985] transition hover:border-sky-300 hover:bg-sky-50"
          >
            <Phone className="h-4 w-4 text-[#0EA5E9]" aria-hidden="true" /> {siteConfig.phoneDisplay}
          </a>
        </section>
      </div>
    </div>
  );
}
