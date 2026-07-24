import React from "react";
import { notFound } from "next/navigation";
import { AlertTriangle, Clock3, MessageCircle } from "lucide-react";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service) return {};
  return {
    title: `Emergency ${service.title} KL & Selangor — Fast Dispatch`,
    description: `Urgent ${service.title.toLowerCase()} help in KL & Selangor. Response priority for leaks, unsafe ceilings, urgent handyman and water damage cases.`,
    alternates: { canonical: `/services/${slug}/emergency` }
  };
}

export default async function EmergencyPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service) notFound();
  const faqs = [
    { q: `What counts as an emergency for ${service.title}?`, a: "Active water leaks, safety risks, flooding, sagging structures, jammed locks, and urgent fixture failures are treated as priority cases." },
    { q: "Is emergency pricing higher?", a: "Emergency work can cost more than scheduled work because of priority dispatch and urgent handling, but pricing is still confirmed before work starts." },
    { q: "How fast can a technician arrive?", a: "Average timing depends on location and crew availability. Send your area and photos early for the fastest review." }
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title, href: `/services/${slug}` }, { label: "Emergency", href: `/services/${slug}/emergency` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: "Services", item: "/services" }, { name: service.title, item: `/services/${slug}` }, { name: "Emergency", item: `/services/${slug}/emergency` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema({ title: `Emergency ${service.title}`, description: service.description, startPrice: service.startPrice, slug: service.slug })) }} />

      <section className="bg-gradient-to-b from-rose-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-rose-600"><AlertTriangle className="h-4 w-4" /> Urgent response guide</span>
          <h1 className="mt-4 text-3xl font-extrabold text-[#1E40AF] sm:text-5xl">Emergency {service.title} in KL & Selangor</h1>
          <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">For urgent problems, send photos, your area, and a short video if safe. We triage the risk, explain immediate steps, and confirm a market-rate emergency quote before permanent work begins.</p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {["Stop or isolate the source if safe", "Send photos and your location", "Approve the quote before repair starts"].map((step, idx) => (
              <div key={step} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs">
                <span className="rounded-xl bg-[#DBEAFE] px-3 py-1.5 text-sm font-extrabold text-[#2563EB]">0{idx + 1}</span>
                <h2 className="mt-4 text-lg font-extrabold text-[#1E40AF]">{step}</h2>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
            <h2 className="flex items-center gap-2 text-2xl font-extrabold text-[#1E40AF]"><Clock3 className="h-6 w-6 text-[#0EA5E9]" /> Fastest coverage areas</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {areaPages.map((area) => <span key={area.slug} className="rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-[#475569]">{area.name}</span>)}
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-[#2563EB] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold">Urgent WhatsApp dispatch</h2>
            <p className="mt-2 text-sm font-semibold text-blue-50">Use the button below and include the word URGENT in your message.</p>
            <a href={getWhatsAppLink({ service: `URGENT ${service.title}` })} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white"><MessageCircle className="h-4 w-4" /> WhatsApp Urgent Request</a>
          </div>
        </div>
      </section>
    </>
  );
}
