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
import { ServiceGuideSection } from "@/components/sections/service-guide-section";
import { warrantyLead, slugify } from "@/lib/utils";
import { buildServiceTrilingualNotes } from "@/lib/direct-answer-trilingual";
import Link from "next/link";

/**
 * Quote-only services publish no numeric price (startPrice "On Quote").
 * Local helper — NOT an import from config/services-data — so this client
 * component never drags the ~470 KB service registry into the browser bundle
 * (the client-bundle guard fails the build on such registry imports).
 */
function isQuoteOnly(service: ServiceDetail): boolean {
  const hasAmount = (price: string) => /RM\s*\d/.test(price);
  return !hasAmount(service.startPrice) && service.subServices.every((sub) => !hasAmount(sub.price));
}
// NOTE: ServiceEstimatorBlock has been moved to locale-service-view.tsx
// and is now rendered at the TOP of the page (before the hero) for
// immediate customer access. Do not import it here.

type ServiceDetailContentProps = {
  service: ServiceDetail;
  /** Audit P4-06 — rate-book include/exclude data (server-computed, slim). */
  scopeSummary?: {
    scopes: { name: string; published: string }[];
    quoteOnly: { name: string; desc: string }[];
  };
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
export function ServiceDetailContent({ service, scopeSummary }: ServiceDetailContentProps) {
  const t = useTranslations();
  // P3-01: the BM/中文 sub-notes are assembled in one shared, pure builder
  // (lib/direct-answer-trilingual.ts) so each note always interpolates the
  // fields localized *for its own language* — never the page locale's English
  // tagline/warranty — and so the prebuild validator can run the exact same
  // code path over all 29 services.
  const notes = buildServiceTrilingualNotes(service);
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
          {isQuoteOnly(service) ? (
            <DirectAnswer
              question={t("serviceContent.isRightService", { name: service.title.toLowerCase() })}
              answer={`${service.title} is recommended when you need ${service.tagline.toLowerCase()} This service is priced by project: KL Servis Rumah confirms the exact scope, materials and quotation terms in writing before work begins, with ${service.warranty.toLowerCase()}. Send your location, photos and rough dimensions on WhatsApp for a project-specific quotation — no generic 'starting from' price is published because every awning is built to the site.`}
              trilingualMs={notes.ms}
              trilingualZh={notes.zh}
              trustItems={
                [
                  t("serviceContent.projectQuotedTrust"),
                  t("serviceContent.ssmRegistered"),
                  t("serviceContent.insuredOps"),
                  t("serviceContent.whatsappResponse")
                ]
              }
            />
          ) : (
            <DirectAnswer
              question={t("serviceContent.isRightService", { name: service.title.toLowerCase() })}
              answer={`${service.title} is recommended when you need ${service.tagline.toLowerCase()} Our ${service.title} packages start from ${service.startPrice} and include transparent itemized quotes, fully insured operations, and a written ${service.warranty.toLowerCase()}. KL Servis Rumah confirms the exact scope, price, and any material costs before work begins so you can book with a clear budget and no hidden surprises.`}
              trilingualMs={notes.ms}
              trilingualZh={notes.zh}
              trustItems={[
                t("serviceContent.priceConfirmed"),
                t("serviceContent.warranty", { days: warrantyLead(service.warranty) }),
                t("serviceContent.insuredOps"),
                t("serviceContent.sameDayAvail"),
                t("serviceContent.ssmRegistered")
              ]}
            />
          )}
        </div>
      </section>

      {/* Section 3b — Long-form pillar guide (types, comparison table,
          applications, problems→solutions, climate notes, quote factors).
          Rendered only for services that carry a `guide` block. */}
      <ServiceGuideSection guide={service.guide} serviceTitle={service.title} />

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
                  {/RM\s*\d/.test(sub.price) ? sub.price : t("serviceDetail.quoteOnRequest")}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-5 text-xs font-semibold text-[#475569] flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
            <AlertCircle className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5" />
            <span>{t("serviceContent.pricingNote")}</span>
          </div>

          {/* Audit P4-06 — explicit "what's included / not included" scoping.
              Data comes from the rate-book (the same published scopes + the
              quote-only list the cost guide shows), passed server-side so the
              client bundle stays lean. Removes the uncertainty that makes
              visitors abandon before requesting a quote. */}
          {scopeSummary && (scopeSummary.scopes.length > 0 || scopeSummary.quoteOnly.length > 0) && (
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5">
                <h3 className="flex items-center gap-2 text-sm font-extrabold text-[#075985]">
                  <CheckCircle className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                  {t("serviceContent.includedHeading")}
                </h3>
                <p className="mt-1.5 text-xs font-semibold text-[#475569] leading-relaxed">
                  {t("serviceContent.includedSub")}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {scopeSummary.scopes.map((scope) => (
                    <li
                      key={scope.name}
                      className="flex items-start gap-2.5 text-sm font-semibold text-[#334155] leading-snug"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        {scope.name}{" "}
                        <span className="font-extrabold text-[#0284C7] whitespace-nowrap">
                          ({scope.published})
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/40 p-5">
                <h3 className="flex items-center gap-2 text-sm font-extrabold text-[#075985]">
                  <AlertCircle className="w-4 h-4 text-amber-500" aria-hidden="true" />
                  {t("serviceContent.notIncludedHeading")}
                </h3>
                <p className="mt-1.5 text-xs font-semibold text-[#475569] leading-relaxed">
                  {t("serviceContent.notIncludedSub")}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {scopeSummary.quoteOnly.map((quote) => (
                    <li
                      key={quote.name}
                      className="flex items-start gap-2.5 text-sm font-semibold text-[#334155] leading-snug"
                    >
                      <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <span className="font-extrabold">{quote.name}</span>
                        <span className="text-[#475569]"> — {quote.desc}</span>
                      </span>
                    </li>
                  ))}
                  {[1, 2, 3].map((n) => (
                    <li
                      key={`generic-${n}`}
                      className="flex items-start gap-2.5 text-sm font-semibold text-[#334155] leading-snug"
                    >
                      <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{t(`serviceContent.excludedGeneric.${n}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
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
              <TrustBadgesRow variant="light" warrantyText={service.warranty} />
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
      {/* Audit P4-17 — aircon is the flagship price-led service (RM 129) but
          its symptom pages received only 1–2 inbound each. Surface 6 of the 9
          aircon problems (vs 4 for other services) + the aircon cost tools. */}
      <RelatedProblems
        serviceSlug={service.slug}
        maxItems={service.slug === "aircon" ? 6 : 4}
        showTools={service.slug === "aircon"}
      />

      {/* Section 10b — Related Blogs (internal linking service ↔ blog) */}
      <RelatedBlogs serviceSlug={service.slug} maxItems={3} />

      {/* Section 11 — Service Area Links (internal linking to location pages) */}
      <ServiceAreaLinks serviceSlug={service.slug} maxItems={8} />

      {/* Section 12 — Related Services (internal linking) */}
      <RelatedServices currentSlug={service.slug} maxItems={6} />
    </>
  );
}
