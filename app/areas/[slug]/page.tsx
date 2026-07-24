import React from "react";
import { notFound } from "next/navigation";
import { areaPages } from "@/config/area-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import { MapPin, Landmark, Shield, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { ServicesGrid } from "@/components/sections/services-grid";

export async function generateStaticParams() {
  return areaPages.map((area) => ({
    slug: area.slug
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const area = areaPages.find((a) => a.slug === params.slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDesc,
    alternates: {
      canonical: `/areas/${area.slug}`
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDesc,
      url: `https://www.klservisrumah.my/areas/${area.slug}`
    }
  };
}

export default async function AreaSlugPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const area = areaPages.find((a) => a.slug === params.slug);
  if (!area) {
    notFound();
  }

  const crumbs = [
    { name: "Coverage Areas", item: "/areas" },
    { name: area.name, item: `/areas/${area.slug}` }
  ];
  const breadcrumbSchema = getBreadcrumbSchema(crumbs);
  const faqSchema = getFAQSchema(area.faqs);

  const waLink = getWhatsAppLink({ location: area.name });

  return (
    <>
      <Breadcrumbs items={[
        { label: "Coverage Areas", href: "/areas" },
        { label: area.name, href: `/areas/${area.slug}` }
      ]} />

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
                <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest bg-[#0EA5E9]/10 px-4 py-1.5 rounded-full w-fit flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0EA5E9]" />
                  <span>Serving {area.name}</span>
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E40AF] tracking-tight leading-tight">
                  Premium Home Services in {area.name}
                </h1>
                <p className="text-base text-[#475569] leading-relaxed font-semibold">
                  Local Painting, Plumbing, Plaster Ceiling, Waterproofing & Handyman Services.
                </p>
              </div>

              <div className="text-sm text-[#475569] leading-relaxed flex flex-col gap-4">
                <p>{area.description}</p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100/80 flex flex-col gap-5">
                <h2 className="text-lg font-extrabold text-[#1E40AF] tracking-tight flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[#0EA5E9]" />
                  <span>Coverage Suburbs & Landmarks in {area.name}</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {area.landmarks.map((landmark, idx) => (
                    <div key={idx} className="flex gap-2 items-center text-xs sm:text-sm font-semibold text-[#475569]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                      <span>{landmark}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <ServicesGrid />
              </div>

            </div>

            <div className="lg:col-span-5 w-full lg:sticky lg:top-28">
              <div className="bg-[#1E40AF] text-white rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-[0_20px_50px_rgba(2,31,68,0.12)]">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest">Immediate Dispatch</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">Book in {area.name}</h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed">
                    Need a painter, plumber, ceiling fixer, or handyman today in {area.name}? Chat with our manager to reserve a prompt slot.
                  </p>
                </div>

                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 flex flex-col gap-3 text-xs sm:text-sm font-semibold">
                  <div className="flex items-center gap-2 text-[#0EA5E9]">
                    <Shield className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-wider block font-bold">Standard Safety Pack:</span>
                  </div>
                  <ul className="flex flex-col gap-2 text-slate-200">
                    <li>✓ Fully insured local operations</li>
                    <li>✓ Fully insured work boundaries</li>
                    <li>✓ 100% itemized fixed quotes before work</li>
                    <li>✓ Up to 90 days solid warranties</li>
                  </ul>
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
                    className="w-full bg-transparent hover:bg-white/5 border border-white/20 text-white text-center font-extrabold text-sm py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Call Support {siteConfig.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <hr className="border-slate-100 my-16" />
          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            <h2 className="text-2xl font-extrabold text-[#1E40AF] text-center tracking-tight">
              {area.name} Local FAQs
            </h2>
            <div className="flex flex-col gap-4">
              {area.faqs.map((faq, idx) => (
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
