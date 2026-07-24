import React from "react";
import { CheckCircle2, ArrowRight, MessageSquare, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { SubService, ServiceDetail } from "@/config/services-data";
import { DirectAnswer } from "@/components/content/direct-answer";
import { DecisionTree } from "@/components/content/decision-tree";
import { ProcessTimeline } from "@/components/content/process-timeline";
import { InternalLinkGrid } from "@/components/internal-link-grid";
import { slugify } from "@/lib/utils";
import { ServiceAreaSelector } from "@/components/service-area-selector";

type SubserviceDetailContentProps = {
  service: ServiceDetail;
  sub: SubService;
};

const INCLUDED_ITEMS = [
  "Initial site inspection and scope confirmation",
  "Surface or fixture preparation work",
  "Professional tools and suitable materials",
  "Clean execution with property protection",
  "Function and finish testing before handover",
  "Transparent market-rate final quote",
  "Written warranty documentation",
  "WhatsApp support for scheduling and questions"
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
export function SubserviceDetailContent({ service, sub }: SubserviceDetailContentProps) {
  const otherSubs = service.subServices.filter((item) => item.name !== sub.name);

  return (
    <>
      {/* Section 1 — What's Included */}
      <section className="section-tight bg-white">
        <div className="container-default">
          <div className="max-w-2xl">
            <span className="eyebrow">What's included · Apa yang disertakan · 包括</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
              Everything you get with {sub.name}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mt-3 font-medium">
              Our {sub.name.toLowerCase()} package covers the full scope from preparation to handover, with no hidden charges.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {INCLUDED_ITEMS.map((item) => (
              <div key={item} className="card card-tight flex items-start gap-3 bg-slate-50/50">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#475569] leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Direct Answer (AI-citable) */}
      <section className="section-tight bg-slate-50">
        <div className="container-narrow">
          <DirectAnswer
            question={`What does ${sub.name.toLowerCase()} include in KL & Selangor?`}
            answer={`${sub.name} by KL Servis Rumah is a professional sub-service under ${service.title}, priced ${sub.price}. ${sub.desc} Every booking includes a transparent market-rate quote, background-verified technicians, and a written ${service.warranty.toLowerCase()}. The exact scope and price are confirmed in writing before any work begins, so you book with a clear budget and no hidden surprises.`}
            trilingualMs={`${sub.name} oleh KL Servis Rumah adalah sub-perkhidmatan di bawah ${service.title}, berharga ${sub.price}. ${sub.desc} Setiap tempahan termasuk sebut harga telus, tukang terlatih, dan ${service.warranty.toLowerCase()}.`}
            trilingualZh={`${sub.name} 由 KL Servis Rumah 提供，是${service.title}下的专业子服务，价格为 ${sub.price}。${sub.desc} 每次预订包含透明报价、经过背景核查的技术人员，以及${service.warranty.toLowerCase()}。`}
            trustItems={[
              "Price Confirmed First",
              `${service.warranty.split(" ")[0]} Warranty`,
              "Insured Operations",
              "Same-Day Available"
            ]}
          />
        </div>
      </section>

      {/* Section 3 — Process Timeline */}
      <section className="section-tight bg-white">
        <div className="container-narrow">
          <ProcessTimeline
            title={`How we deliver ${sub.name.toLowerCase()}`}
            subtitle="Every step is confirmed, every action is documented, and every handover is signed off. No hidden steps, no surprises."
            steps={service.process.slice(0, 5)}
          />
        </div>
      </section>

      {/* Section 4 — Decision Tree */}
      <section className="section-tight bg-slate-50">
        <div className="container-default">
          <DecisionTree
            title="Should you book this sub-service, a simpler option, or escalate first?"
            options={[
              {
                level: "recommended",
                title: `Book ${sub.name}`,
                description: `Your situation matches the symptoms and scope for ${sub.name.toLowerCase()}. This is the right sub-service for most customers.`,
                compareService: "View pricing",
                compareAction: "See"
              },
              {
                level: "lighter",
                title: "Consider a lighter option",
                description: `If your need is smaller in scope, another sub-service under ${service.title.toLowerCase()} may fit better and cost less. We happily quote any scope.`,
                compareService: "Other sub-services",
                compareAction: "Browse"
              },
              {
                level: "urgent",
                title: "Escalate first",
                description: "If the work involves hidden damage, structural concerns, or coordination with other trades, we may need to inspect or quote on-site before booking.",
                compareService: "Site inspection",
                compareAction: "Book"
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
              <span className="eyebrow">Pricing · Harga · 定价</span>
              <h3 className="text-2xl font-extrabold text-[#075985] tracking-tight">
                Transparent {sub.name.toLowerCase()} pricing
              </h3>
              <p className="text-base text-[#475569] leading-relaxed">
                {sub.name} starts from <b className="text-[#0EA5E9]">{sub.price}</b>. Final pricing depends on actual on-site dimensions, access difficulty, material grade, and any add-ons you select. All of this is itemized and confirmed with you in writing before any work begins.
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                <li className="flex items-start gap-2 text-sm font-semibold text-[#475569]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>No hidden transport or service charges</span>
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-[#475569]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>No weekend or after-hours surcharge</span>
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-[#475569]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Itemized material costs before replacement</span>
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-[#475569]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Payment after work is signed off, never before</span>
                </li>
              </ul>
            </div>

            <div className="card card-loose flex flex-col gap-4">
              <span className="eyebrow">Warranty · Jaminan · 保修</span>
              <h3 className="text-2xl font-extrabold text-[#075985] tracking-tight">
                {sub.name} warranty coverage
              </h3>
              <p className="text-base text-[#475569] leading-relaxed">
                Every {sub.name.toLowerCase()} booking is backed by our written <b className="text-emerald-600">{service.warranty.toLowerCase()}</b>. If anything covered by the warranty fails within the period, we return to fix it free of charge — no arguments, no re-quoting.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mt-2">
                <p className="text-sm font-extrabold text-emerald-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{service.warranty}</span>
                </p>
                <p className="text-xs text-emerald-700/80 mt-1 font-semibold">
                  Warranty terms explained in writing on every invoice. Keep your invoice for the duration of the coverage period.
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
              title={`Other ${service.title} sub-services`}
              subtitle="You may also need these related services from the same category."
              links={otherSubs.map((item) => ({
                title: item.name,
                href: `/services/${service.slug}/${slugify(item.name)}`,
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
            <span className="eyebrow">FAQs · Soalan Lazim · 常见问题</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
              {sub.name} — frequently asked questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <FaqItem
              q={`How much does ${sub.name.toLowerCase()} cost in KL & Selangor?`}
              a={`${sub.name} is priced ${sub.price}. The final cost depends on dimensions, access, materials, and actual on-site condition, and is confirmed in writing before any work begins. There are no hidden transport, service, or weekend fees.`}
            />
            <FaqItem
              q={`What is included in ${sub.name.toLowerCase()}?`}
              a={`Our ${sub.name.toLowerCase()} package includes workmanship scope, standard preparation, suitable tools, full cleanup, and warranty coverage related to ${service.title.toLowerCase()}. Specific inclusions are itemized in your quote.`}
            />
            <FaqItem
              q={`Can I book ${sub.name.toLowerCase()} via WhatsApp?`}
              a={`Yes. Send your area, photos, property type, and preferred date so our dispatch desk can confirm a market-rate quote and book a slot that fits your schedule. Same-day slots are often available for urgent requests.`}
            />
            <FaqItem
              q={`Is ${sub.name.toLowerCase()} available same-day?`}
              a={`Same-day slots depend on technician availability and urgency. Emergency and safety-related ${service.title.toLowerCase()} issues (e.g. active leaks, electrical hazards) receive priority dispatch. WhatsApp early in the day for the best chance of a same-day slot.`}
            />
            <FaqItem
              q={`Do you cover my area for ${sub.name.toLowerCase()}?`}
              a={`Yes. We dispatch ${service.title.toLowerCase()} teams daily across all of KL and Selangor — Kuala Lumpur, Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Klang, and every major suburb. Just confirm your area in WhatsApp and we will match you with the nearest available technician.`}
            />
            <FaqItem
              q={`What warranty comes with ${sub.name.toLowerCase()}?`}
              a={`Every ${sub.name.toLowerCase()} booking is covered by our written ${service.warranty.toLowerCase()}. If anything covered fails within the warranty period, we return to fix it free of charge. Warranty terms are explained on every invoice.`}
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
              <MessageSquare className="w-5 h-5 fill-white text-[#22C55E]" />
              <span>Book {sub.name} on WhatsApp</span>
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
        <span className="text-2xl text-[#0EA5E9] font-bold shrink-0 transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-medium">{a}</p>
      </div>
    </details>
  );
}
