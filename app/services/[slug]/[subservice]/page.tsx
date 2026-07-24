import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { servicesData } from "@/config/services-data";
import { clusterPages } from "@/config/content-data";
import { GenericContentPageView } from "@/components/content/generic-content-page";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { slugify } from "@/lib/utils";
import { ServiceAreaSelector } from "@/components/service-area-selector";
import { InternalLinkGrid } from "@/components/internal-link-grid";

export function generateStaticParams() {
  const subServiceParams = Object.values(servicesData).flatMap((service) =>
    service.subServices.map((sub) => ({ slug: service.slug, subservice: slugify(sub.name) }))
  );
  const clusterParams = clusterPages
    .filter((page) => page.relatedServiceSlug)
    .map((page) => ({ slug: String(page.relatedServiceSlug), subservice: page.slug }));
  return [...subServiceParams, ...clusterParams];
}

export async function generateMetadata(props: { params: Promise<{ slug: string; subservice: string }> }) {
  const params = await props.params;
  const service = servicesData[params.slug];
  const sub = service?.subServices.find((item) => slugify(item.name) === params.subservice);
  const cluster = clusterPages.find((page) => page.relatedServiceSlug === params.slug && page.slug === params.subservice);
  if (!service) return {};
  if (cluster) {
    return {
      title: cluster.title,
      description: cluster.intro,
      alternates: { canonical: `/services/${service.slug}/${cluster.slug}` }
    };
  }
  if (!sub) return {};
  return {
    title: `${sub.name} in KL & Selangor — ${sub.price}`,
    description: `${sub.name} by KL Servis Rumah. ${sub.desc} Transparent market-rate pricing, insured team, and WhatsApp booking.`,
    alternates: { canonical: `/services/${service.slug}/${params.subservice}` }
  };
}

export default async function SubServicePage(props: { params: Promise<{ slug: string; subservice: string }> }) {
  const params = await props.params;
  const service = servicesData[params.slug];
  const sub = service?.subServices.find((item) => slugify(item.name) === params.subservice);
  const cluster = clusterPages.find((page) => page.relatedServiceSlug === params.slug && page.slug === params.subservice);
  if (!service) notFound();
  if (cluster && !sub) {
    return <GenericContentPageView page={cluster} />;
  }
  if (!sub) notFound();

  const faqs = [
    { q: `How much does ${sub.name} cost in KL & Selangor?`, a: `${sub.name} is priced ${sub.price}. Final cost depends on dimensions, access, materials, and actual site condition, and is confirmed before work begins.` },
    { q: `What is included in ${sub.name}?`, a: `Our quote includes workmanship scope, standard preparation, suitable tools, cleanup, and warranty terms related to ${service.title}.` },
    { q: `Can I book ${sub.name} on WhatsApp?`, a: `Yes. Send your area, photos, property type, and preferred date so our dispatch desk can confirm a market-rate quote.` },
    { q: `Is ${sub.name} available same day?`, a: `Same-day slots depend on technician availability and urgency. Plumbing leaks and safety-related handyman issues receive priority dispatch.` }
  ];
  const crumbs = [
    { name: "Services", item: "/services" },
    { name: service.title, item: `/services/${service.slug}` },
    { name: sub.name, item: `/services/${service.slug}/${params.subservice}` }
  ];

  return (
    <>
      <Breadcrumbs items={[
        { label: "Services", href: "/services" },
        { label: service.title, href: `/services/${service.slug}` },
        { label: sub.name, href: `/services/${service.slug}/${params.subservice}` }
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema({ title: sub.name, description: sub.desc, startPrice: sub.price, slug: service.slug })) }} />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full bg-[#DBEAFE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Sub-service landing page</span>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#1E40AF] sm:text-5xl">
                {sub.name} in KL & Selangor — {sub.price}
              </h1>
              <p className="text-base font-semibold leading-relaxed text-[#475569] sm:text-lg">{sub.desc}</p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="text-2xl font-extrabold text-[#1E40AF]">What this service includes</h2>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {["Initial inspection and scope confirmation", "Surface or fixture preparation", "Professional tools and suitable materials", "Clean execution with property protection", "Function / finish testing before handover", "Transparent market-rate final quote", service.warranty, "WhatsApp support for scheduling"].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-[#475569]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="text-2xl font-extrabold text-[#1E40AF]">Process timeline</h2>
              <div className="mt-5 space-y-4">
                {service.process.slice(0, 5).map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <span className="h-fit rounded-xl bg-[#DBEAFE] px-3 py-1.5 text-sm font-extrabold text-[#2563EB]">{step.step}</span>
                    <div>
                      <h3 className="font-extrabold text-[#1E40AF]">{step.title}</h3>
                      <p className="mt-1 text-sm font-semibold leading-relaxed text-[#475569]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ServiceAreaSelector serviceSlug={service.slug} />

            <InternalLinkGrid
              title="Other services you may need"
              links={service.subServices.filter((item) => item.name !== sub.name).map((item) => ({
                title: item.name,
                href: `/services/${service.slug}/${slugify(item.name)}`,
                desc: item.desc
              }))}
            />

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="mb-5 text-2xl font-extrabold text-[#1E40AF]">FAQs</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="rounded-2xl bg-slate-50 p-4">
                    <h3 className="font-extrabold text-[#1E40AF]">{faq.q}</h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl bg-[#2563EB] p-6 text-white shadow-xl">
              <h2 className="text-2xl font-extrabold">Book {sub.name}</h2>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-blue-50">Send photos and area. We confirm scope and price before dispatch.</p>
              <a href={getWhatsAppLink({ service: sub.name })} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white">
                <MessageCircle className="h-4 w-4" /> WhatsApp Quote
              </a>
              <Link href={`/services/${service.slug}`} className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#1E40AF]">
                Parent service page
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
