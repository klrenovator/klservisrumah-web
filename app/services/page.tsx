import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ServicesDirectoryHero } from "@/components/sections/services-directory-hero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ServiceComparisonTable } from "@/components/service-comparison-table";
import { LocaleDecisionTree } from "@/components/sections/locale-decision-tree";
import { StatsCounter } from "@/components/content/stats-counter";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All Home Services in KL & Selangor — 28 Services",
  description:
    "Browse 28 professional home services across Kuala Lumpur and Selangor: painting, plumbing, electrical, renovation, cleaning, security and more.",
  path: "/services",
  keywords: [
    "home services KL",
    "handyman Selangor",
    "renovation services Kuala Lumpur"
  ]
});

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

      {/* Decision Tree - localised via LocaleDecisionTree wrapper */}
      <LocaleDecisionTree variant="servicesPage" />

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
