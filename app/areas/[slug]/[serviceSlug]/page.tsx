import React from "react";
import { notFound } from "next/navigation";
import { MapPin, MessageCircle } from "lucide-react";
import { areaPages } from "@/config/area-data";
import { servicesData } from "@/config/services-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getBreadcrumbSchema, getFAQSchema, getLocalBusinessServiceSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { InternalLinkGrid } from "@/components/internal-link-grid";

export function generateStaticParams() {
  return areaPages.flatMap((area) => Object.keys(servicesData).map((serviceSlug) => ({ slug: area.slug, serviceSlug })));
}

export async function generateMetadata(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const area = areaPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!area || !service) return {};
  return {
    title: `${service.title} in ${area.name} — From ${service.startPrice}`,
    description: `${service.title} in ${area.name}. Local team, market-rate pricing, landmarks covered, warranty and WhatsApp booking for ${area.shortName}.`,
    alternates: { canonical: `/areas/${area.slug}/${service.slug}` }
  };
}

function localContext(areaName: string, serviceTitle: string, landmarks: string[]) {
  return `${areaName}'s mix of ${landmarks.slice(0, 3).join(", ")} properties means ${serviceTitle.toLowerCase()} often requires local access planning, careful parking or lift coordination, and a tidy handover. Our dispatch desk asks for photos, property type, and exact neighbourhood before assigning a suitable team.`;
}

export default async function AreaServicePage(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const area = areaPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!area || !service) notFound();

  const faqs = [
    { q: `How fast can you reach ${area.name} for ${service.title}?`, a: `Timing depends on crew location and traffic, but ${area.name} is part of our active KL & Selangor dispatch coverage. Same-day slots are offered when available.` },
    { q: `Which ${area.name} neighbourhoods do you cover?`, a: `We cover key landmarks and neighbourhoods including ${area.landmarks.join(", ")}. Send your exact address on WhatsApp to confirm.` },
    { q: `How much does ${service.title} cost in ${area.name}?`, a: `${service.title} starts from ${service.startPrice}. Final price is confirmed at standard market rate after scope, access and materials are checked.` }
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Coverage Areas", href: "/areas" }, { label: area.name, href: `/areas/${area.slug}` }, { label: service.title, href: `/areas/${area.slug}/${service.slug}` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: "Coverage Areas", item: "/areas" }, { name: area.name, item: `/areas/${area.slug}` }, { name: service.title, item: `/areas/${area.slug}/${service.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessServiceSchema(area, service, `/areas/${area.slug}/${service.slug}`)) }} />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]"><MapPin className="h-4 w-4" /> {area.name}</span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#075985] sm:text-5xl">{service.title} in {area.name} — From {service.startPrice}</h1>
              <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">{localContext(area.name, service.title, area.landmarks)}</p>
              <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">{service.description}</p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="text-2xl font-extrabold text-[#075985]">{area.name} landmarks and neighbourhoods covered</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {area.landmarks.map((landmark) => <span key={landmark} className="rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-[#475569]">{landmark}</span>)}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="text-2xl font-extrabold text-[#075985]">Service pricing in {area.name}</h2>
              <div className="mt-5 space-y-3">
                {service.subServices.map((sub) => (
                  <div key={sub.name} className="flex flex-col justify-between gap-3 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center">
                    <div><h3 className="font-extrabold text-[#075985]">{sub.name}</h3><p className="text-xs font-semibold text-[#475569]">{sub.desc}</p></div>
                    <span className="rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-[#0EA5E9]">{sub.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <InternalLinkGrid title={`More ${area.name} service pages`} links={Object.values(servicesData).filter((item) => item.slug !== service.slug).map((item) => ({ title: `${item.title} in ${area.name}`, href: `/areas/${area.slug}/${item.slug}`, desc: item.tagline }))} />

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="mb-5 text-2xl font-extrabold text-[#075985]">{area.name} FAQs</h2>
              <div className="space-y-4">
                {faqs.map((faq) => <div key={faq.q} className="rounded-2xl bg-slate-50 p-4"><h3 className="font-extrabold text-[#075985]">{faq.q}</h3><p className="mt-2 text-sm font-semibold text-[#475569]">{faq.a}</p></div>)}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl bg-[#0284C7] p-6 text-white shadow-xl">
              <h2 className="text-2xl font-extrabold">Book in {area.name}</h2>
              <p className="mt-2 text-sm font-semibold text-blue-50">WhatsApp your exact location, photos and preferred time.</p>
              <a href={getWhatsAppLink({ service: service.title, location: area.name })} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white"><MessageCircle className="h-4 w-4" /> WhatsApp Dispatch</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
