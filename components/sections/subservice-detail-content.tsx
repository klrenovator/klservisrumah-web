"use client";

import React from "react";
import { CheckCircle2, ArrowRight, MessageSquare, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/hooks/use-translations";
import type { SubService, ServiceDetail } from "@/config/services-data";
import { DirectAnswer } from "@/components/content/direct-answer";
import { DecisionTree } from "@/components/content/decision-tree";
import { ProcessTimeline } from "@/components/content/process-timeline";
import { InternalLinkGrid } from "@/components/internal-link-grid";
import { slugify, warrantyLead } from "@/lib/utils";
import { ServiceAreaSelector } from "@/components/service-area-selector";

type SubserviceDetailContentProps = {
  service: ServiceDetail;
  sub: SubService;
  baseService?: ServiceDetail;
};

const INCLUDED_ITEM_KEYS = [
  "subserviceContent.includedItems.1",
  "subserviceContent.includedItems.2",
  "subserviceContent.includedItems.3",
  "subserviceContent.includedItems.4",
  "subserviceContent.includedItems.5",
  "subserviceContent.includedItems.6",
  "subserviceContent.includedItems.7",
  "subserviceContent.includedItems.8"
];

const PRICING_BULLET_KEYS = [
  "subserviceContent.pricingBullets.noHidden",
  "subserviceContent.pricingBullets.noSurcharge",
  "subserviceContent.pricingBullets.itemizedMaterials",
  "subserviceContent.pricingBullets.payAfter"
];

/**
 * SubserviceDetailContent — Klrenovator-style sub-service body.
 * Sections in order:
 *   1. What's included (8-item grid)
 *   2. Direct Answer (AI-citable)
 *   3. Process Timeline
 *   4. Decision Tree
 *   5. Pricing notes & warranty
 *   6. Service areas
 *   7. Related sub-services (InternalLinkGrid)
 *   8. FAQs
 */
export function SubserviceDetailContent({ service, sub, baseService }: SubserviceDetailContentProps) {
  const t = useTranslations();
  const otherSubs = service.subServices
    .map((item, index) => ({ item, baseItem: baseService?.subServices[index] ?? item }))
    .filter(({ item }) => item.name !== sub.name);
  const nameLower = sub.name.toLowerCase();
  const serviceLower = service.title.toLowerCase();
  const warrantyLower = service.warranty.toLowerCase();

  return (
    <>
      {/* Section 1 — What's Included */}
      <section className="section-tight bg-white">
        <div className="container-default">
          <div className="max-w-2xl">
            <span className="eyebrow">{t("subserviceContent.whatsIncluded")}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
              {t("subserviceContent.includedHeading", { name: sub.name })}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mt-3 font-medium">
              {t("subserviceContent.includedSub", { nameLower })}
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {INCLUDED_ITEM_KEYS.map((key) => (
              <div key={key} className="card card-tight flex items-start gap-3 bg-slate-50/50">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#475569] leading-snug">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Direct Answer (AI-citable) */}
      <section className="section-tight bg-slate-50">
        <div className="container-narrow">
          <DirectAnswer
            question={t("subserviceContent.directQuestion", { nameLower })}
            answer={t("subserviceContent.directAnswer", {
              name: sub.name,
              service: service.title,
              price: sub.price,
              desc: sub.desc,
              warrantyLower
            })}
            trustItems={[
              t("serviceContent.priceConfirmed"),
              t("serviceContent.warranty", { days: warrantyLead(service.warranty) }),
              t("serviceContent.insuredOps"),
              t("serviceContent.sameDayAvail")
            ]}
          />
        </div>
      </section>

      {/* Section 3 — Process Timeline */}
      <section className="section-tight bg-white">
        <div className="container-narrow">
          <ProcessTimeline
            title={t("subserviceContent.processHeading", { name: sub.name })}
            subtitle={t("subserviceContent.processSub")}
            steps={service.process.slice(0, 5)}
          />
        </div>
      </section>

      {/* Section 4 — Decision Tree */}
      <section className="section-tight bg-slate-50">
        <div className="container-default">
          <DecisionTree
            title={t("subserviceContent.decisionHeading", { name: sub.name })}
            options={[
              {
                level: "recommended",
                title: t("subserviceContent.decisionBookTitle", { name: sub.name }),
                description: t("subserviceContent.decisionBookDesc", { nameLower }),
                compareService: t("subserviceContent.decisionBookService"),
                compareAction: t("subserviceContent.decisionBookAction")
              },
              {
                level: "lighter",
                title: t("subserviceContent.decisionLighterTitle"),
                description: t("subserviceContent.decisionLighterDesc", { serviceLower }),
                compareService: t("subserviceContent.decisionLighterService"),
                compareAction: t("subserviceContent.decisionLighterAction")
              },
              {
                level: "urgent",
                title: t("subserviceContent.decisionEscalateTitle"),
                description: t("subserviceContent.decisionEscalateDesc"),
                compareService: t("subserviceContent.decisionEscalateService"),
                compareAction: t("subserviceContent.decisionEscalateAction")
              }
            ]}
          />
        </div>
      </section>

      {/* Section 5 — Pricing & Warranty details */}
      <section className="section-tight bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card card-loose flex flex-col gap-4">
              <span className="eyebrow">{t("subserviceContent.pricing")}</span>
              <h3 className="text-2xl font-extrabold text-[#075985] tracking-tight">
                {t("subserviceContent.pricingHeading", { nameLower })}
              </h3>
              <p className="text-base text-[#475569] leading-relaxed">
                {t("subserviceContent.pricingDescBefore", { name: sub.name })}{" "}
                <b className="text-[#0369A1]">{sub.price}</b>
                {t("subserviceContent.pricingDescAfter")}
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {PRICING_BULLET_KEYS.map((key) => (
                  <li key={key} className="flex items-start gap-2 text-sm font-semibold text-[#475569]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card card-loose flex flex-col gap-4">
              <span className="eyebrow">{t("subserviceContent.warranty")}</span>
              <h3 className="text-2xl font-extrabold text-[#075985] tracking-tight">
                {t("subserviceContent.warrantyHeading", { name: sub.name })}
              </h3>
              <p className="text-base text-[#475569] leading-relaxed">
                {t("subserviceContent.warrantyDescBefore", { nameLower })}{" "}
                <b className="text-emerald-600">{warrantyLower}</b>
                {t("subserviceContent.warrantyDescAfter")}
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mt-2">
                <p className="text-sm font-extrabold text-emerald-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{service.warranty}</span>
                </p>
                <p className="text-xs text-emerald-700/80 mt-1 font-semibold">
                  {t("subserviceContent.warrantyNote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Service areas */}
      <section className="section-tight bg-slate-50">
        <div className="container-default">
          <ServiceAreaSelector serviceSlug={service.slug} />
        </div>
      </section>

      {/* Section 7 — Related sub-services */}
      {otherSubs.length > 0 && (
        <section className="section-tight bg-white">
          <div className="container-default">
            <InternalLinkGrid
              title={t("subserviceContent.relatedHeading", { service: service.title })}
              subtitle={t("subserviceContent.relatedSub")}
              links={otherSubs.map(({ item, baseItem }) => ({
                title: item.name,
                href: `/services/${service.slug}/${slugify(baseItem.name)}`,
                desc: item.desc
              }))}
            />
          </div>
        </section>
      )}

      {/* Section 8 — FAQs (native <details> accordion) */}
      <section className="section-tight bg-slate-50">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <span className="eyebrow">{t("subserviceContent.faqs")}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
              {t("subserviceContent.faqHeading", { name: sub.name })}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <FaqItem
              q={t("subserviceContent.howMuchCost", { name: sub.name })}
              a={t("subserviceContent.faqCostAnswer", { name: sub.name, price: sub.price })}
            />
            <FaqItem
              q={t("subserviceContent.faqIncludedQ", { nameLower })}
              a={t("subserviceContent.faqIncludedA", { nameLower, serviceLower })}
            />
            <FaqItem
              q={t("subserviceContent.faqWhatsAppQ", { nameLower })}
              a={t("subserviceContent.faqWhatsAppA")}
            />
            <FaqItem
              q={t("subserviceContent.faqSameDayQ", { nameLower })}
              a={t("subserviceContent.faqSameDayA", { serviceLower })}
            />
            <FaqItem
              q={t("subserviceContent.faqAreaQ", { nameLower })}
              a={t("subserviceContent.faqAreaA", { serviceLower })}
            />
            <FaqItem
              q={t("subserviceContent.faqWarrantyQ", { nameLower })}
              a={t("subserviceContent.faqWarrantyA", { nameLower, warrantyLower })}
            />
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi KL Servis Rumah, I want to book ${sub.name}. My area is: `)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base"
            >
              <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
              <span>{t("serviceDetail.bookSubWhatsApp", { name: sub.name })}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-white rounded-2xl border border-slate-200 hover:border-[#BAE6FD] transition-all overflow-hidden">
      <summary className="cursor-pointer list-none p-5 sm:p-6 flex items-center justify-between gap-4">
        <h3 className="text-base sm:text-lg font-extrabold text-[#075985]">{q}</h3>
        <span className="text-2xl text-[#0369A1] font-bold shrink-0 transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-medium">{a}</p>
      </div>
    </details>
  );
}
