"use client";

import React from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import type { ServiceDetail } from "@/config/services-data";
import { DirectAnswer } from "@/components/content/direct-answer";
import { DecisionTree } from "@/components/content/decision-tree";
import { ComparisonTable } from "@/components/content/comparison-table";
import { ProcessTimeline } from "@/components/content/process-timeline";
import { TrustBadgesRow } from "@/components/content/trust-badges-row";
import { RelatedServices } from "@/components/sections/related-services";
import { RelatedProblems } from "@/components/sections/related-problems";
import { ServiceAreaLinks } from "@/components/sections/service-area-links";
import dynamic from "next/dynamic";
import { warrantyLead } from "@/lib/utils";

/**
 * The estimator is the only heavy interactive block on this page and it sits
 * below the fold, so it is code-split out of the initial payload. Everything
 * a crawler needs — description, published sub-service rates, FAQs — is
 * already static HTML above and below it.
 */
const ServiceEstimatorBlock = dynamic(
  () => import("@/components/tools/service-estimator-block").then((mod) => mod.ServiceEstimatorBlock),
  {
    loading: () => (
      <div className="section-tight bg-gradient-to-b from-sky-50/60 to-white">
        <div className="container-narrow">
          <div className="h-96 animate-pulse rounded-3xl border border-slate-200 bg-white" aria-hidden="true" />
        </div>
      </div>
    )
  }
);

type ServiceDetailContentProps = {
  service: ServiceDetail;
};

/**
 * ServiceDetailContent — Klrenovator-style service page body.
 * Sections in order:
 *   1. Overview (description + highlights)
 *   2. Instant estimator (or a link to the dedicated tool for that trade)
 *   3. Direct Answer (AI-citable)
 *   4. Sub-services pricing
 *   5. Process Timeline
 *   6. Decision Tree
 *   7. Comparison Table (us vs typical)
 *   8. Trust badges row
 *   9. FAQs
 *  10. Related problems, coverage areas and related services (internal linking)
 */
export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const t = useTranslations();
  return (
    <>
      {/* Section 1 — Overview */}
      <section className="section-tight bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div>
                <span className="eyebrow">{t("serviceContent.overviewEyebrow")}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
                  {t("serviceContent.aboutService", { name: service.title })}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="eyebrow">{t("serviceContent.whyChooseUs")}</span>
              <ul className="flex flex-col gap-2.5 mt-1">
                {service.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-sm font-semibold text-[#475569]">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Instant estimator, directly under the description */}
      <ServiceEstimatorBlock slug={service.slug} title={service.title} warranty={service.warranty} />

      {/* Section 3 — Direct Answer (AI-citable) */}
      <section className="section-tight bg-slate-50">
        <div className="container-narrow">
          <DirectAnswer
            question={`Is ${service.title.toLowerCase()} the right service for you?`}
            answer={`${service.title} is recommended when you need ${service.tagline.toLowerCase()} Our ${service.title} packages start from ${service.startPrice} and include transparent itemized quotes, fully insured operations, and a written ${service.warranty.toLowerCase()}. KL Servis Rumah confirms the exact scope, price, and any material costs before work begins so you can book with a clear budget and no hidden surprises.`}
            trilingualMs={`${service.title} disyorkan apabila anda memerlukan ${service.tagline.toLowerCase()} Pakej kami bermula dari ${service.startPrice} dengan sebut harga terperinci, operasi diinsuranskan, dan ${service.warranty.toLowerCase()}.`}
            trilingualZh={`${service.title} 适合需要${service.tagline.toLowerCase()}的客户。我们的服务从 ${service.startPrice} 起，包含透明分项报价、全程保险、以及${service.warranty.toLowerCase()}。`}
            trustItems={[
              t("serviceContent.priceConfirmed"),
              t("serviceContent.warranty", { days: warrantyLead(service.warranty) }),
              t("serviceContent.insuredOps"),
              t("serviceContent.sameDayAvail"),
              t("serviceContent.ssmRegistered")
            ]}
          />
        </div>
      </section>

      {/* Section 4 — Sub-services pricing */}
      <section className="section-tight bg-white">
        <div className="container-default">
          <div className="max-w-2xl">
            <span className="eyebrow">{t("serviceContent.pricingScope")}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
              {service.title} pricing breakdown
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mt-3 font-medium">
              100% itemized upfront rates. No hidden charges, no weekend surcharges, no transport fees.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {service.subServices.map((sub, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-[#BAE6FD] hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#075985]">
                    {sub.name}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed font-medium">
                    {sub.desc}
                  </p>
                </div>
                <span className="text-sm sm:text-base font-extrabold text-[#0EA5E9] shrink-0 bg-[#F0F9FF] px-5 py-2.5 rounded-xl border border-[#BAE6FD] w-fit">
                  {sub.price}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 text-xs font-semibold text-[#475569] flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
            <AlertCircle className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5" />
            <span>Standard rates vary slightly based on actual on-site dimensions, difficult access, or premium material upgrades. Final prices are confirmed and approved by you before any work begins.</span>
          </div>
        </div>
      </section>

      {/* Section 5 — Process Timeline */}
      <section className="section-tight bg-slate-50">
        <div className="container-narrow">
          <ProcessTimeline
            title={`How we deliver ${service.title.toLowerCase()}`}
            subtitle="Every step is explained, every action is confirmed, and every handover is signed off. No hidden steps, no surprises."
            steps={service.process}
          />
        </div>
      </section>

      {/* Section 6 — Decision Tree */}
      <section className="section-tight bg-white">
        <div className="container-default">
          <DecisionTree
            title="Should you book this service, a lighter option, or escalate first?"
            options={[
              {
                level: "recommended",
                title: `Book ${service.title}`,
                description: `Your situation matches the primary symptoms, scope, and pricing band for ${service.title.toLowerCase()}. This is the right service for most customers.`,
                compareService: "View pricing above",
                compareAction: "See"
              },
              {
                level: "lighter",
                title: "Consider a lighter option",
                description: "If your problem is smaller in scope, you may only need a single sub-service (e.g. one repair or one point) rather than the full package. We'll happily quote the smaller scope.",
                compareService: "Sub-services list",
                compareAction: "Browse"
              },
              {
                level: "urgent",
                title: "Escalate first",
                description: "If the work involves permits, building works, structural changes, or hidden issues that need assessment, we may need to inspect first or coordinate with other trades before booking.",
                compareService: "Site inspection",
                compareAction: "Book"
              }
            ]}
          />
        </div>
      </section>

      {/* Section 7 — Comparison Table */}
      <section className="section-tight bg-slate-50">
        <div className="container-default">
          <ComparisonTable
            title="KL Servis Rumah vs typical home service contractors"
            subtitle="We publish real prices and process. Others make you call first. Here's what that means for your home."
            rows={[
              {
                criteria: "Price display",
                ours: `Full pricing published online — you see ${service.startPrice} before you even call.`,
                theirs: "No prices online. \"Call for quote\" — price depends on who answers the phone."
              },
              {
                criteria: "Quote before work",
                ours: "Price confirmed in writing before any work begins. No surprise variation orders.",
                theirs: "Quote given verbally, often changes after \"inspection\" with add-on charges."
              },
              {
                criteria: "Hidden fees",
                ours: "Zero hidden fees. Materials, transport, and labour are all included in the starting price.",
                theirs: "Transport fee, service charge, weekend surcharge — all added after arrival."
              },
              {
                criteria: "Workmanship warranty",
                ours: `${service.warranty}. If it fails within the warranty period, we return free.`,
                theirs: "Most offer no warranty. If they do, it's verbal only — no written guarantee."
              },
              {
                criteria: "Business registration",
                ours: "Registered Malaysian business. Legitimate operation with a public track record.",
                theirs: "Many are unregistered freelancers operating from a personal phone number."
              },
              {
                criteria: "Materials & parts",
                ours: "Genuine or OEM-equivalent parts from trusted Malaysian suppliers. Quoted before replacement.",
                theirs: "Unknown part sources. Some use recycled or counterfeit components."
              }
            ]}
          />
        </div>
      </section>

      {/* Section 8 — Trust Badges row (compact, repeated) */}
      <section className="section-tight bg-white">
        <div className="container-default">
          <div className="card text-center">
            <span className="eyebrow">{t("serviceContent.allCoverage")}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
              {service.title} you can trust
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mt-3 max-w-2xl mx-auto">
              Every {service.title.toLowerCase()} booking comes with these guarantees. No exceptions, no fine print.
            </p>
            <div className="mt-6 flex justify-center">
              <TrustBadgesRow variant="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — FAQs */}
      <section className="section-tight bg-slate-50">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <span className="eyebrow">{t("serviceContent.faqs")}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
              {service.title} — frequently asked questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {service.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-[#BAE6FD] transition-all overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-5 sm:p-6 flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#075985]">
                    {faq.q}
                  </h3>
                  <span className="text-2xl text-[#0EA5E9] font-bold shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 — Related Problems (internal linking to symptom/diagnostic pages) */}
      <RelatedProblems serviceSlug={service.slug} maxItems={4} />

      {/* Section 11 — Service Area Links (internal linking to location pages) */}
      <ServiceAreaLinks serviceSlug={service.slug} maxItems={8} />

      {/* Section 12 — Related Services (internal linking) */}
      <RelatedServices currentSlug={service.slug} maxItems={6} />
    </>
  );
}
