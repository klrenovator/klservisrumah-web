import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPinned } from "lucide-react";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { suburbPages } from "@/config/suburb-data";
import { NearMeLocator } from "@/components/near-me-locator";
import { getLocalBusinessServiceSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return Object.keys(servicesData).map((serviceSlug) => ({ serviceSlug }));
}

export async function generateMetadata(props: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await props.params;
  const service = servicesData[serviceSlug];
  if (!service) return {};
  return {
    title: `${service.title} Near Me in KL & Selangor`,
    description: `Find ${service.title.toLowerCase()} near you in KL & Selangor. Check service areas, suburbs, market-rate pricing and WhatsApp dispatch.`,
    alternates: { canonical: `/near-me/${service.slug}` }
  };
}

export default async function NearMeServicePage(props: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await props.params;
  const service = servicesData[serviceSlug];
  if (!service) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessServiceSchema(areaPages[0], service, `/near-me/${service.slug}`)) }} />
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#DBEAFE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#2563EB]"><MapPinned className="h-4 w-4" /> Near me</span>
          <h1 className="mt-4 text-3xl font-extrabold text-[#1E40AF] sm:text-5xl">Find {service.title} Near You in KL & Selangor</h1>
          <p className="mt-4 max-w-3xl text-base font-semibold leading-relaxed text-[#475569]">KL Servis Rumah covers major Klang Valley areas with transparent market-rate pricing. Use the locator helper or choose your area below to reach a local landing page.</p>

          <div className="mt-8"><NearMeLocator /></div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {areaPages.map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}/${service.slug}`} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xs transition hover:-translate-y-0.5 hover:shadow-md">
                <h2 className="text-lg font-extrabold text-[#1E40AF]">{service.title} in {area.name}</h2>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-[#475569]">Covers {area.landmarks.slice(0, 4).join(", ")}.</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs">
            <h2 className="text-2xl font-extrabold text-[#1E40AF]">Popular suburbs</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {suburbPages.slice(0, 24).map((suburb) => <Link key={suburb.slug} href={`/suburbs/${suburb.slug}/${service.slug}`} className="rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-[#475569] hover:bg-[#DBEAFE]">{suburb.name}</Link>)}
            </div>
          </div>

          <a href={getWhatsAppLink({ service: `${service.title} near me` })} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white">WhatsApp nearest dispatch</a>
        </div>
      </section>
    </>
  );
}
