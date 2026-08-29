import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import Link from "next/link";
import { indexableProblemPages } from "@/config/problem-index";
import { servicesData } from "@/config/services-data";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { Phone, MessageSquare, AlertCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { localizedProblemsIndexLanguageUrls } from "@/components/sections/locale-problems-index";

export const metadata = buildMetadata({
  title: "Home Problem Guides — Diagnose & Fix KL Homes",
  description:
    "Diagnose common painting, plumbing, ceiling, waterproofing and handyman problems in Malaysian homes, then see the realistic repair cost and next step.",
  path: "/problems",
  languageUrls: localizedProblemsIndexLanguageUrls(),
  keywords: [
    "home problems Malaysia",
    "ceiling leak diagnosis KL",
    "peeling paint fix Selangor"
  ]
});

export default function ProblemsIndexPage() {

  return (
    <>
      <Breadcrumbs items={[{ label: "Problems", href: "/problems" }]} />
      {/* Hero Section — matches klrenovator.com problems page */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
              <AlertCircle className="w-3.5 h-3.5 inline mr-1" />
              Problem Diagnosis
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#075985] tracking-tight">
              Common Home Problems KL & Selangor
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
              KL Servis Rumah diagnoses and fixes all common home problems across Kuala Lumpur and Selangor. Find your problem below — each guide explains the cause, fix, and pricing.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp For Diagnosis</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-[#0EA5E9] text-[#075985] font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
              All Problems
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
              Select Your Home Problem
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {indexableProblemPages().map((problem) => {
              const service = servicesData[problem.serviceSlug];
              return (
                <Link key={problem.slug} href={`/problems/${problem.slug}`} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xs transition hover:-translate-y-0.5 hover:shadow-md group">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0EA5E9]">{service.title} · {problem.urgency}</span>
                  <h3 className="mt-2 text-lg font-extrabold text-[#075985] group-hover:text-[#0EA5E9] transition-colors">{problem.title}</h3>
                  <p className="mt-2 text-xs font-semibold leading-relaxed text-[#475569]">{problem.symptom}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0EA5E9]">
                    See Fix →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
