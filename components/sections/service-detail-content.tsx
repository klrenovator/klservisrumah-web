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
import { RelatedBlogs } from "@/components/sections/related-blogs";
import { warrantyLead, slugify } from "@/lib/utils";
import Link from "next/link";
// NOTE: ServiceEstimatorBlock has been moved to locale-service-view.tsx
// and is now rendered at the TOP of the page (before the hero) for
// immediate customer access. Do not import it here.

type ServiceDetailContentProps = {
  service: ServiceDetail;
};

/**
 * ServiceDetailContent — Klrenovator-style service page body.
 * Sections in order:
 *   1. Overview (description + highlights)
 *   2. Direct Answer (AI-citable)
 *   3. Sub-services pricing
 *   4. Process Timeline
 *   5. Decision Tree
 *   6. Comparison Table (us vs typical)
 *   7. Trust badges row
 *   8. FAQs
 *   9. Related problems, coverage areas and related services (internal linking)
 * 
 * NOTE: The ServiceEstimatorBlock is rendered at the TOP of the page
 * in locale-service-view.tsx, NOT here. This ensures customers see the
 * calculator immediately without scrolling.
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

      {/* Section 3 — Direct Answer (AI-citable) */}
      <section className="section-tight bg-slate-50">
        <div className="container-narrow">
          <DirectAnswer
            question={t("serviceContent.isRightService", { name: service.title.toLowerCase() })}
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
              {t("serviceContent.pricingHeading", { name: service.title })}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mt-3 font-medium">
              {t("serviceContent.pricingSub")}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {service.subServices.map((sub, idx) => (
              <Link
                key={idx}
                href={`/services/${service.slug}/${slugify(sub.name)}`}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-[#BAE6FD] hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group"
              >
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#075985] group-hover:text-[#0EA5E9] transition-colors">
                    {sub.name}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed font-medium">
                    {sub.desc}
                  </p>
                </div>
                <span className="text-sm sm:text-base font-extrabold text-[#0EA5E9] shrink-0 bg-[#F0F9FF] px-5 py-2.5 rounded-xl border border-[#BAE6FD] w-fit">
                  {sub.price}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-5 text-xs font-semibold text-[#475569] flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
            <AlertCircle className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5" />
            <span>{t("serviceContent.pricingNote")}</span>
          </div>
        </div>
      </section>

      {/* Section 5 — Process Timeline */}
      <section className="section-tight bg-slate-50">
        <div className="container-narrow">
          <ProcessTimeline
            title={t("serviceContent.processHeading", { name: service.title })}
            subtitle={t("serviceContent.processSub")}
            steps={service.process}
          />
        </div>
      </section>

      {/* Section 6 — Decision Tree */}
      <section className="section-tight bg-white">
        <div className="container-default">
          <DecisionTree
            title={t("serviceContent.decisionHeading", { name: service.title })}
            tagLabels={{
              recommended: t("decisionTree.tags.recommended"),
              lighter: t("decisionTree.tags.lighter"),
              urgent: t("decisionTree.tags.urgent")
            }}
            options={[
              {
                level: "recommended",
                title: t("serviceContent.decisionTreeBookTitle", { name: service.title }),
                description: t("serviceContent.decisionTreeBookDesc", { nameLower: service.title.toLowerCase() }),
                compareService: t("serviceContent.decisionTreePricingAbove"),
                compareAction: t("serviceContent.decisionTreeSee")
              },
              {
                level: "lighter",
                title: t("serviceContent.decisionTreeLighterTitle"),
                description: t("serviceContent.decisionTreeLighterDesc"),
                compareService: t("serviceContent.decisionTreeSubServices"),
                compareAction: t("serviceContent.decisionTreeBrowse")
              },
              {
                level: "urgent",
                title: t("serviceContent.decisionTreeEscalateTitle"),
                description: t("serviceContent.decisionTreeEscalateDesc"),
                compareService: t("serviceContent.decisionTreeSiteInspection"),
                compareAction: t("serviceContent.decisionTreeBookAction")
              }
            ]}
          />
        </div>
      </section>

      {/* Section 7 — Comparison Table */}
      <section className="section-tight bg-slate-50">
        <div className="container-default">
          <ComparisonTable
            title={t("serviceContent.comparisonHeading", { name: service.title })}
            subtitle={t("serviceContent.comparisonSub")}
            ourLabel={t("comparison.ourLabel")}
            theirLabel={t("comparison.theirLabel")}
            rows={[
              {
                criteria: t("serviceContent.compPriceDisplay"),
                ours: t("serviceContent.compPriceOurs", { startPrice: service.startPrice }),
                theirs: t("serviceContent.compPriceTheirs")
              },
              {
                criteria: t("serviceContent.compQuote"),
                ours: t("serviceContent.compQuoteOurs"),
                theirs: t("serviceContent.compQuoteTheirs")
              },
              {
                criteria: t("serviceContent.compHiddenFees"),
                ours: t("serviceContent.compHiddenOurs"),
                theirs: t("serviceContent.compHiddenTheirs")
              },
              {
                criteria: t("serviceContent.compWarranty"),
                ours: t("serviceContent.compWarrantyOurs", { warranty: service.warranty }),
                theirs: t("serviceContent.compWarrantyTheirs")
              },
              {
                criteria: t("serviceContent.compRegistration"),
                ours: t("serviceContent.compRegistrationOurs"),
                theirs: t("serviceContent.compRegistrationTheirs")
              },
              {
                criteria: t("serviceContent.compMaterials"),
                ours: t("serviceContent.compMaterialsOurs"),
                theirs: t("serviceContent.compMaterialsTheirs")
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
              {t("serviceContent.trustHeading", { name: service.title })}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mt-3 max-w-2xl mx-auto">
              {t("serviceContent.trustSub", { nameLower: service.title.toLowerCase() })}
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
              {t("serviceContent.faqHeading", { name: service.title })}
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

      {/* Section 10b — Related Blogs (internal linking service ↔ blog) */}
      <RelatedBlogs serviceSlug={service.slug} maxItems={3} />

      {/* Section 11 — Service Area Links (internal linking to location pages) */}
      <ServiceAreaLinks serviceSlug={service.slug} maxItems={8} />

      {/* Section 12 — Related Services (internal linking) */}
      <RelatedServices currentSlug={service.slug} maxItems={6} />
    </>
  );
}
