import React from "react";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ServicesDirectoryHero } from "@/components/sections/services-directory-hero";
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
        <ServicesDirectoryHero />
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
