import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { suburbPages } from "@/config/suburb-data";
import { servicesData } from "@/config/services-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getFAQSchema, getLocalBusinessServiceSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return suburbPages.flatMap((suburb) => Object.keys(servicesData).map((serviceSlug) => ({ slug: suburb.slug, serviceSlug })));
}

export async function generateMetadata(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const suburb = suburbPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!suburb || !service) return {};
  return {
    title: `${service.title} in ${suburb.name} — From ${service.startPrice}`,
    description: `${service.title} in ${suburb.name}. ${suburb.metaDesc}`,
    alternates: { canonical: `/suburbs/${suburb.slug}/${service.slug}` }
  };
}

export default async function SuburbServicePage(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const suburb = suburbPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!suburb || !service) notFound();
  const faqs = [
    ...suburb.faqs.slice(0, 2),
    { q: `How much does ${service.title} cost in ${suburb.name}?`, a: `${service.title} starts from ${service.startPrice}. Final pricing is market-rate and confirmed after checking scope, access and materials.` }
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Suburbs", href: "/areas" }, { label: suburb.name, href: `/suburbs/${suburb.slug}/${service.slug}` }, { label: service.title, href: `/suburbs/${suburb.slug}/${service.slug}` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessServiceSchema(suburb, service, `/suburbs/${suburb.slug}/${service.slug}`)) }} />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#DBEAFE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#2563EB]"><MapPin className="h-4 w-4" /> {suburb.name}</span>
              <h1 className="mt-4 text-3xl font-extrabold text-[#1E40AF] sm:text-5xl">{service.title} in {suburb.name} — From {service.startPrice}</h1>
              <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">{suburb.housingProfile}</p>
              <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">For {suburb.name}, our team commonly checks {suburb.commonIssues.slice(0, 3).join(", ")} before recommending the right {service.title.toLowerCase()} scope.</p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="text-2xl font-extrabold text-[#1E40AF]">Local landmarks covered</h2>
              <div className="mt-5 flex flex-wrap gap-3">{suburb.landmarks.map((landmark) => <span key={landmark} className="rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-[#475569]">{landmark}</span>)}</div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="text-2xl font-extrabold text-[#1E40AF]">Pricing guide</h2>
              <div className="mt-5 space-y-3">{service.subServices.map((sub) => <div key={sub.name} className="rounded-2xl bg-slate-50 p-4"><h3 className="font-extrabold text-[#1E40AF]">{sub.name}</h3><p className="text-sm font-bold text-[#0EA5E9]">{sub.price}</p><p className="mt-1 text-xs font-semibold text-[#475569]">{sub.desc}</p></div>)}</div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="mb-5 text-2xl font-extrabold text-[#1E40AF]">Nearby suburb pages</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{suburb.nearbySuburbs.map((nearby) => <Link key={nearby} href={`/suburbs/${nearby}/${service.slug}`} className="rounded-2xl bg-slate-50 p-4 text-sm font-extrabold text-[#1E40AF] hover:bg-[#DBEAFE]">{nearby.replace(/-/g, " ")} {service.title}</Link>)}</div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8"><h2 className="mb-5 text-2xl font-extrabold text-[#1E40AF]">FAQs</h2><div className="space-y-4">{faqs.map((faq) => <div key={faq.q} className="rounded-2xl bg-slate-50 p-4"><h3 className="font-extrabold text-[#1E40AF]">{faq.q}</h3><p className="mt-2 text-sm font-semibold text-[#475569]">{faq.a}</p></div>)}</div></div>
          </div>

          <aside className="lg:col-span-4"><div className="sticky top-28 rounded-3xl bg-[#2563EB] p-6 text-white shadow-xl"><h2 className="text-2xl font-extrabold">Book in {suburb.name}</h2><p className="mt-2 text-sm font-semibold text-blue-50">Send photos, location pin and preferred date.</p><a href={getWhatsAppLink({ service: service.title, location: suburb.name })} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white"><MessageCircle className="h-4 w-4" /> WhatsApp Dispatch</a></div></aside>
        </div>
      </section>
    </>
  );
}
