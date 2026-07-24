import React from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Calculator, MessageCircle, ShieldCheck, WalletCards } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { siteConfig } from "@/config/site";
import { getMarketRatesForService, type MarketRateItem } from "@/config/market-rates";
import { servicesData } from "@/config/services-data";
import { getArticleSchema, getBreadcrumbSchema, getFAQSchema, getOfferCatalogSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Pricing & Rates in KL & Selangor — Transparent Market-Rate Guide",
  description:
    "Review KL Servis Rumah pricing for painting, plumbing, ceiling, waterproofing and handyman work in KL & Selangor. Market-rate, transparent and itemized.",
  alternates: {
    canonical: "/pricing",
  },
};

const pricingFaqs = [
  {
    q: "How do you set your prices?",
    a: "We follow standard Klang Valley market rates. Prices are not inflated and not underpriced. Final quotes are confirmed only after scope, access, materials and urgency are checked.",
  },
  {
    q: "Do you charge hidden fees later?",
    a: "No. If extra work is needed, it is explained first and approved by you before we continue.",
  },
  {
    q: "Can I get a quote from photos on WhatsApp?",
    a: "Yes. Many small jobs can be estimated from clear photos, measurements and your area. More complex leak, ceiling or exterior jobs may still need an inspection.",
  },
  {
    q: "Are emergency jobs charged differently?",
    a: "Emergency jobs can cost more when urgent dispatch, after-hours labour, access difficulty or safety controls are involved. The emergency uplift is explained before work starts.",
  },
];

const pricingPrinciples = [
  {
    title: "Standard market rate",
    body: "Our public pricing follows the handoff rule: not too high, not too low, and always aligned with the normal local market.",
    icon: WalletCards,
  },
  {
    title: "Itemized before work",
    body: "Scope, materials, labour, access challenges and urgent timing are explained before technicians begin the job.",
    icon: Calculator,
  },
  {
    title: "Warranty-aware quoting",
    body: "Where workmanship warranty applies, the quote is matched to the correct repair method instead of a cheap short-term patch.",
    icon: ShieldCheck,
  },
  {
    title: "WhatsApp-first convenience",
    body: "Send photos, size, location and timing to get a faster pricing direction before a site visit is booked.",
    icon: MessageCircle,
  },
];

const offerCatalogItems = Object.values(servicesData).flatMap((service) => service.subServices);

export default function PricingPage() {
  const breadcrumbItems = [
    { name: "Pricing", item: "/pricing" },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(pricingFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOfferCatalogSchema(offerCatalogItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getArticleSchema({
              title: "KL Servis Rumah Pricing & Market-Rate Guide",
              slug: "pricing-kl-selangor",
              path: "/pricing",
              excerpt:
                "Transparent pricing hub for painting, plumbing, ceiling, waterproofing and handyman services in KL & Selangor.",
              category: "Pricing",
            }),
          ),
        }}
      />

      <section className="bg-gradient-to-b from-slate-50 via-white to-sky-50/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#0284C7]">
              Transparent pricing hub
            </span>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#075985] sm:text-5xl">
              Pricing & rates for KL home services
            </h1>
            <p className="mt-5 max-w-3xl text-base font-semibold leading-relaxed text-[#475569] sm:text-lg">
              Review starting prices, common scopes and service-by-service rate guides for painting, plumbing,
              ceiling work, waterproofing and handyman jobs. Final quotes stay market-rate, transparent and
              confirmed before work begins.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pricingPrinciples.map(({ title, body, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm shadow-sky-100/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E0F2FE]">
                  <Icon className="h-5 w-5 text-[#0284C7]" />
                </div>
                <h2 className="mt-4 text-lg font-extrabold text-[#075985]">{title}</h2>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">Service-by-service pricing</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#075985]">Choose a service and open the full pricing guide</h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-[#475569]">
              Each service keeps its own cost guide so customers can see the likely budget, common inclusions and the
              typical factors that affect the final quotation.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {Object.values(servicesData).map((service) => {
              const rates = getMarketRatesForService(service.slug as MarketRateItem["serviceSlug"]);
              const visibleRates = rates.length ? rates : service.subServices.slice(0, 3).map((sub) => ({
                serviceSlug: service.slug as MarketRateItem["serviceSlug"],
                label: sub.name,
                publishedRate: sub.price,
                marketRange: "Confirmed after scope check",
                pricingUnit: "task",
                validationNote: sub.desc,
                lastReviewed: "2026-07-24",
              }));

              return (
                <article
                  key={service.slug}
                  className="rounded-[2rem] border border-slate-100 bg-gradient-to-br from-white via-white to-sky-50/30 p-6 shadow-sm shadow-sky-100/50 sm:p-7"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0284C7]">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Starts from {service.startPrice}
                      </div>
                      <h3 className="mt-4 text-2xl font-extrabold text-[#075985]">{service.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm font-semibold leading-relaxed text-[#475569]">
                        {service.tagline}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-bold text-[#075985] shadow-sm">
                      Warranty: <span className="text-[#0284C7]">{service.warranty}</span>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {visibleRates.map((rate) => (
                      <div key={`${service.slug}-${rate.label}`} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">{rate.pricingUnit}</p>
                        <h4 className="mt-2 text-base font-extrabold text-[#075985]">{rate.label}</h4>
                        <p className="mt-3 text-lg font-extrabold text-[#0284C7]">{rate.publishedRate}</p>
                        <p className="mt-2 text-xs font-semibold leading-relaxed text-[#475569]">{rate.marketRange}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-dashed border-sky-200 bg-sky-50/60 p-4 text-sm font-semibold leading-relaxed text-[#475569]">
                    <span className="font-extrabold text-[#075985]">Pricing note:</span> {visibleRates[0]?.validationNote ?? service.description}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/services/${service.slug}/cost`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0284C7] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#0369A1]"
                    >
                      Open pricing guide
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center rounded-xl border border-sky-200 px-5 py-3 text-sm font-extrabold text-[#075985] transition hover:bg-sky-50"
                    >
                      View service page
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">How your final quote is confirmed</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#075985]">What usually changes the price on site?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Measured size, quantity or total work area",
                "Existing wall, pipe, board or waterproofing condition",
                "Material grade, brand and safety requirements",
                "Condo access rules, lift protection or restricted timing",
                "Emergency response, after-hours or same-day urgency",
                "Bundled work that reduces separate visit charges",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-100 bg-white p-5 text-sm font-semibold text-[#475569] shadow-sm">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] bg-[#075985] p-7 text-white shadow-xl shadow-sky-200/40 sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-sky-100">Need a faster answer?</p>
            <h2 className="mt-3 text-3xl font-extrabold">Send photos on WhatsApp</h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-sky-50/95">
              Share your area, measurements, photos and timing. Our team will guide you toward the right service and
              confirm the likely market-rate budget before dispatch.
            </p>
            <a
              href={getWhatsAppLink({ service: "pricing quote" })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#16A34A]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp for pricing help
            </a>
            <div className="mt-5 rounded-2xl bg-white/10 p-4 text-sm font-semibold leading-relaxed text-sky-50">
              Public phone & WhatsApp: <span className="font-extrabold text-white">{siteConfig.phoneDisplay}</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">Pricing FAQ</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#075985]">Common pricing questions</h2>
          </div>

          <div className="mt-8 space-y-4">
            {pricingFaqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#075985]">{faq.q}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
