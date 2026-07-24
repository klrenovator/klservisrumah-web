import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { getMarketRatesForService, type MarketRateItem } from "@/config/market-rates";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getArticleSchema, getBreadcrumbSchema, getFAQSchema, getOfferCatalogSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service) return {};
  return {
    title: `${service.title} Cost in KL & Selangor — 2026 Pricing Guide`,
    description: `How much does ${service.title.toLowerCase()} cost in KL & Selangor? See market-rate pricing, factors, quote examples, and WhatsApp booking.`,
    alternates: { canonical: `/services/${slug}/cost` }
  };
}

export default async function CostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service) notFound();
  const rates = getMarketRatesForService(slug as MarketRateItem["serviceSlug"]);
  const faqs = [
    { q: `What is the starting price for ${service.title}?`, a: `${service.title} starts from ${service.startPrice}. Final cost depends on dimensions, access, materials, and actual site condition.` },
    { q: "Are prices standard market rate?", a: "Yes. KL Servis Rumah follows standard Malaysian market-rate pricing: not inflated, not underpriced, and confirmed before work starts." },
    { q: "Can I get a quote from photos?", a: "For many small jobs, clear photos and measurements help us estimate. Complex leaks, ceilings, and exterior access may need inspection." },
    { q: "Do you charge hidden fees?", a: "No. Additional scope is explained and approved before proceeding." }
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title, href: `/services/${slug}` }, { label: "Cost", href: `/services/${slug}/cost` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: "Services", item: "/services" }, { name: service.title, item: `/services/${slug}` }, { name: "Cost", item: `/services/${slug}/cost` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getOfferCatalogSchema(service.subServices)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: `${service.title} Cost in KL & Selangor`, slug: `${slug}/cost`, excerpt: service.metaDesc, path: `/services/${slug}/cost`, category: "Pricing" })) }} />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="rounded-full bg-[#DBEAFE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">2026 pricing guide</span>
          <h1 className="mt-4 text-3xl font-extrabold text-[#1E40AF] sm:text-5xl">How Much Does {service.title} Cost in KL & Selangor?</h1>
          <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">This guide follows the project rule: prices should match standard market rate — not too high, not too low. Use these ranges to understand your likely budget before requesting a fixed quote.</p>

          <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-100 bg-white shadow-xs">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-widest text-[#1E40AF]"><tr><th className="px-5 py-4">Scope</th><th className="px-5 py-4">Our published rate</th><th className="px-5 py-4">Market range</th><th className="px-5 py-4">Notes</th></tr></thead>
              <tbody className="divide-y divide-slate-100">
                {(rates.length ? rates : service.subServices.map((sub) => ({ label: sub.name, publishedRate: sub.price, marketRange: "Confirmed after scope", validationNote: sub.desc }))).map((rate) => (
                  <tr key={rate.label}><td className="px-5 py-4 font-extrabold text-[#1E40AF]">{rate.label}</td><td className="px-5 py-4 font-bold text-[#0EA5E9]">{rate.publishedRate}</td><td className="px-5 py-4 text-[#475569]">{rate.marketRange}</td><td className="px-5 py-4 text-xs font-semibold text-[#475569]">{rate.validationNote}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              "Property size and measured work area",
              "Surface or fixture condition before work starts",
              "Material grade and brand selected",
              "Condo management rules, lift protection, or difficult access",
              "Emergency vs scheduled appointment timing",
              "Bundled multi-task visit savings"
            ].map((factor) => <div key={factor} className="rounded-2xl bg-white p-5 text-sm font-semibold text-[#475569] shadow-xs border border-slate-100">✓ {factor}</div>)}
          </div>

          <div className="mt-10 rounded-3xl bg-[#2563EB] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold">Need an exact quote?</h2>
            <p className="mt-2 text-sm font-semibold text-blue-50">Send photos, measurements and your area. We confirm the itemized market-rate quote before work begins.</p>
            <a href={getWhatsAppLink({ service: `${service.title} cost quote` })} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white">WhatsApp for Quote</a>
          </div>
        </div>
      </section>
    </>
  );
}
