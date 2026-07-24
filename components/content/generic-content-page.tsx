import React from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import type { GenericContentPage } from "@/config/content-data";
import { servicesData } from "@/config/services-data";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { InternalLinkGrid } from "@/components/internal-link-grid";

export function GenericContentPageView({ page }: { page: GenericContentPage }) {
  const relatedService = page.relatedServiceSlug ? servicesData[page.relatedServiceSlug] : undefined;

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-[#DBEAFE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">
            {page.category}
          </span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#1E40AF] sm:text-5xl">
            {page.title}
          </h1>
          <p className="text-base font-semibold leading-relaxed text-[#475569] sm:text-lg">
            {page.intro}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
          <h2 className="mb-5 text-2xl font-extrabold text-[#1E40AF]">Key takeaways</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {page.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-sm font-semibold leading-relaxed text-[#475569]">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
          <h2 className="mb-5 text-2xl font-extrabold text-[#1E40AF]">Practical guidance for KL & Selangor</h2>
          <div className="space-y-4 text-sm font-semibold leading-relaxed text-[#475569]">
            <p>
              Malaysian homes face tropical humidity, fast rain cycles, condo management rules, and mixed construction materials. That means the right method depends on surface condition, access, safety requirements, and whether water or structural movement is involved.
            </p>
            <p>
              The safest approach is to shortlist the likely cause, collect clear photos, confirm the property type, and request an itemized market-rate quotation. KL Servis Rumah confirms scope before work begins and avoids arbitrary pricing.
            </p>
          </div>
        </div>

        {relatedService ? (
          <InternalLinkGrid
            title={`Related ${relatedService.title} resources`}
            links={[
              { title: relatedService.title, href: `/services/${relatedService.slug}`, desc: relatedService.tagline },
              ...relatedService.subServices.slice(0, 2).map((sub) => ({
                title: sub.name,
                href: `/services/${relatedService.slug}/${sub.name.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`,
                desc: sub.desc
              }))
            ]}
          />
        ) : null}

        <div className="rounded-3xl bg-[#2563EB] p-6 text-white sm:p-8">
          <h2 className="text-2xl font-extrabold">Need help applying this to your property?</h2>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-blue-50">
            Send your photos, area, and preferred timing. Our dispatch desk will help identify the suitable service and quote at standard market rate.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={getWhatsAppLink({ service: page.title })} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp Dispatch
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#1E40AF]">
              Booking form
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
          <h2 className="mb-5 text-2xl font-extrabold text-[#1E40AF]">FAQs</h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-slate-50 p-4">
                <h3 className="font-extrabold text-[#1E40AF]">{faq.q}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
