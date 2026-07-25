import React from "react";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ServiceComparisonTable } from "@/components/service-comparison-table";
import { DecisionTree } from "@/components/content/decision-tree";
import { StatsCounter } from "@/components/content/stats-counter";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "All Home Services in KL & Selangor | 28 Services",
  description: "Explore 28 professional home services in Kuala Lumpur & Selangor. Painting, Plumbing, Electrical, Renovation, Cleaning, Security & more. Transparent market-rate pricing."
};

export default function ServicesPage() {
  const crumbs = [{ name: "Services", item: "/services" }];
  const schema = getBreadcrumbSchema(crumbs);

  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section - Klrenovator Style */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
            28 Services • 3 Languages
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-[#075985] sm:text-6xl text-balance">
            Every Home Service You Need.<br />All in One Place.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#475569]">
            From painting and plumbing to full renovation, electrical, cleaning, and security — 
            discover market-rate pricing, real warranties, and same-day availability across KL & Selangor.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn-primary px-8 py-3 text-base">Browse All Services</a>
            <a href="/pricing" className="btn-ghost px-8 py-3 text-base">View Pricing Guide</a>
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Decision Tree - Klrenovator Style */}
      <DecisionTree 
        options={[
          {
            level: "recommended",
            title: "Full Service Package",
            description: "Book the complete service with our expert team. Includes diagnosis, materials, labour, and warranty.",
            compareService: "Compare with Lighter Option",
            compareAction: "Need something simpler?"
          },
          {
            level: "lighter",
            title: "DIY + Materials Only",
            description: "Get quality materials + guidance. Perfect if you want to handle labour yourself or have a handyman.",
            compareService: "Escalate to Full Service",
            compareAction: "Want professional execution?"
          },
          {
            level: "urgent",
            title: "Emergency / Same-Day",
            description: "Urgent issue? We dispatch the nearest available team within hours (subject to availability).",
            compareService: "Book Regular Slot",
            compareAction: "Can wait 24-48 hours?"
          }
        ]} 
      />

      {/* Stats Counter */}
      <StatsCounter 
        variant="gradient" 
        stats={[
          { value: "28", label: "Expert Services", trilingualMs: "Perkhidmatan Pakar", trilingualZh: "专业服务" },
          { value: "1,200+", label: "Projects Completed", trilingualMs: "Projek Siap", trilingualZh: "已完成项目" },
          { value: "4.9★", label: "Google Rating", trilingualMs: "Penilaian Google", trilingualZh: "Google 评分" },
          { value: "90 Days", label: "Warranty Coverage", trilingualMs: "Liputan Jaminan", trilingualZh: "保修覆盖" }
        ]} 
      />

      <ServiceComparisonTable />

      <WhyChooseUs />
    </>
  );
}
