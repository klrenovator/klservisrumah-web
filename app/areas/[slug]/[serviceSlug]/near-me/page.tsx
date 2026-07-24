import React from "react";
import { notFound } from "next/navigation";
import { areaPages } from "@/config/area-data";
import { servicesData } from "@/config/services-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getFAQSchema, getLocalBusinessServiceSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return areaPages.flatMap((area) => Object.keys(servicesData).map((serviceSlug) => ({ slug: area.slug, serviceSlug })));
}

export async function generateMetadata(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const area = areaPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!area || !service) return {};
  return {
    title: `${service.title} Near Me in ${area.name} — From ${service.startPrice}`,
    description: `Looking for ${service.title.toLowerCase()} near me in ${area.name}? KL Servis Rumah covers ${area.landmarks.slice(0, 4).join(", ")} with WhatsApp booking.`,
    alternates: { canonical: `/areas/${area.slug}/${service.slug}/near-me` }
  };
}

export default async function NearMePage(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const area = areaPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!area || !service) notFound();
  const faqs = [
    { q: `Is ${service.title} available near me in ${area.name}?`, a: `Yes. We cover ${area.name} and nearby landmarks such as ${area.landmarks.slice(0, 4).join(", ")}.` },
    { q: "How do I confirm nearest dispatch?", a: "Send your exact address or pin location on WhatsApp so we can check the closest available crew." },
    { q: "Will near-me pricing be higher?", a: "No arbitrary uplift. Prices follow standard market rate, with travel or access factors stated before work begins." }
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Coverage Areas", href: "/areas" }, { label: area.name, href: `/areas/${area.slug}` }, { label: `${service.title} Near Me`, href: `/areas/${area.slug}/${service.slug}/near-me` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessServiceSchema(area, service, `/areas/${area.slug}/${service.slug}/near-me`)) }} />
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="rounded-full bg-[#DBEAFE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Near me local page</span>
          <h1 className="mt-4 text-3xl font-extrabold text-[#1E40AF] sm:text-5xl">{service.title} Near Me in {area.name} — From {service.startPrice}</h1>
          <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">If you searched for “{service.title.toLowerCase()} near me” in {area.name}, KL Servis Rumah can help across {area.landmarks.join(", ")}. Our teams confirm access, scope, and market-rate pricing before work begins.</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.subServices.map((sub) => <div key={sub.name} className="rounded-2xl border border-slate-100 bg-white p-5"><h2 className="font-extrabold text-[#1E40AF]">{sub.name}</h2><p className="mt-1 text-sm font-bold text-[#0EA5E9]">{sub.price}</p><p className="mt-2 text-xs font-semibold text-[#475569]">{sub.desc}</p></div>)}
          </div>
          <a href={getWhatsAppLink({ service: service.title, location: area.name })} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white">Check nearest slot on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
