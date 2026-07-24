import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import { CheckCircle, ShieldAlert, Award, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { TrustBar } from "@/components/trust-bar";
import { StickyBookButton } from "@/components/sticky-book-button";
import { ServiceAreaSelector } from "@/components/service-area-selector";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = servicesData[params.slug];
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `https://www.klservisrumah.my/services/${service.slug}`,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title
        }
      ]
    }
  };
}

export default async function ServiceSlugPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = servicesData[params.slug];
  if (!service) {
    notFound();
  }

  const serviceSchema = getServiceSchema({
    title: service.title,
    description: service.description,
    startPrice: service.startPrice,
    slug: service.slug
  });

  const crumbs = [
    { name: "Services", item: "/services" },
    { name: service.title, item: `/services/${service.slug}` }
  ];
  const breadcrumbSchema = getBreadcrumbSchema(crumbs);
  const faqSchema = getFAQSchema(service.faqs);

  const waLink = getWhatsAppLink({ service: service.title });

  return (
    <>
      <TrustBar />
      <StickyBookButton service={service.title} />
      <Breadcrumbs items={[
        { label: "Services", href: "/services" },
        { label: service.title, href: `/services/${service.slug}` }
      ]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 flex flex-col gap-10">
              
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest bg-[#0EA5E9]/10 px-4 py-1.5 rounded-full w-fit">
                  Verified Specialized Service
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E40AF] tracking-tight leading-tight">
                  {service.title}
                </h1>
                <p className="text-base text-[#475569] leading-relaxed font-semibold">
                  {service.tagline}
                </p>
              </div>

              <div className="text-sm text-[#475569] leading-relaxed flex flex-col gap-4">
                <p>{service.description}</p>
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-xl font-extrabold text-[#1E40AF] tracking-tight border-b border-slate-100 pb-3">
                  Why Choose Our {service.title} Specialist
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm font-semibold text-[#475569]">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100">
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-extrabold text-[#1E40AF] tracking-tight">
                    Service Pricing & Scope Breakdown
                  </h2>
                  <p className="text-xs text-[#475569] font-semibold">
                    100% itemized upfront rates. Absolutely no hidden charges.
                  </p>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                  {service.subServices.map((sub, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-3xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-[#1E40AF]">{sub.name}</span>
                        <p className="text-xs text-[#475569] font-medium leading-relaxed">{sub.desc}</p>
                      </div>
                      <span className="text-sm sm:text-base font-extrabold text-[#0EA5E9] shrink-0 bg-[#0EA5E9]/5 px-4 py-2 rounded-xl border border-[#0EA5E9]/10 w-fit">
                        {sub.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] font-bold text-[#475569] flex items-center gap-2 mt-2 border-t border-slate-200/50 pt-4">
                  <ShieldAlert className="w-4.5 h-4.5 text-[#0EA5E9]" />
                  <span>Note: Standard rates vary slightly based on actual onsite dimensions or difficult access profiles. Final prices confirmed before work begins.</span>
                </div>
              </div>

              <ServiceAreaSelector serviceSlug={service.slug} />

              <div className="flex flex-col gap-6">
                <h2 className="text-xl font-extrabold text-[#1E40AF] tracking-tight border-b border-slate-100 pb-3">
                  Our Work execution Process
                </h2>
                <div className="flex flex-col gap-4">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="text-lg font-extrabold text-[#0EA5E9] bg-[#DBEAFE]/30 px-3.5 py-1.5 rounded-xl">
                        {step.step}
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-bold text-[#1E40AF]">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-semibold">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 w-full sticky top-28">
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-[#0EA5E9] font-bold uppercase tracking-widest">Active Dispatch Center</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E40AF] tracking-tight">Need {service.title}?</h2>
                  <p className="text-xs sm:text-sm text-[#475569] font-semibold leading-relaxed">
                    Reserve a slot instantly. Zero upfront payments. Full craftsmanship warranty guaranteed.
                  </p>
                </div>

                <div className="flex flex-col gap-3 bg-white p-5 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 text-xs font-bold text-[#1E40AF]">
                    <Award className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <span>Included Guarantee:</span>
                  </div>
                  <p className="text-xs sm:text-sm font-extrabold text-emerald-500 leading-normal">
                    ✓ {service.warranty}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#22C55E] hover:bg-[#1eb050] text-white text-center font-extrabold text-sm py-4 rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4.5 h-4.5 fill-white text-[#22C55E]" />
                    <span>Book on WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="w-full bg-white hover:bg-slate-100/50 border border-[#1E40AF]/15 text-[#1E40AF] text-center font-extrabold text-sm py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Call Support {siteConfig.phoneDisplay}</span>
                  </a>
                </div>

                <div className="text-[10px] text-[#475569] font-bold text-center leading-normal border-t border-slate-200/50 pt-5">
                  Operated by an established local company: <br />
                  <span className="text-[#1E40AF] font-extrabold">{siteConfig.parentCompany}</span>
                </div>
              </div>
            </div>

          </div>

          <hr className="border-slate-100 my-16" />
          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            <h2 className="text-2xl font-extrabold text-[#1E40AF] text-center tracking-tight">
              {service.title} FAQs
            </h2>
            <div className="flex flex-col gap-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100/60">
                  <h3 className="text-base font-extrabold text-[#1E40AF] mb-2">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-semibold">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
