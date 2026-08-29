import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ServicesDirectoryHero } from "@/components/sections/services-directory-hero";
import { SmartServiceFinder } from "@/components/ui/smart-service-finder";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ServiceComparisonTable } from "@/components/service-comparison-table";
import { LocaleDecisionTree } from "@/components/sections/locale-decision-tree";
import { StatsCounter } from "@/components/content/stats-counter";
import { SERVICE_COUNT } from "@/config/service-nav.generated";
import { localizedServicesIndexLanguageUrls } from "@/components/sections/locale-services-index";

export const metadata = buildMetadata({
  title: "Painting, Ceiling & Home Services KL & Selangor",
  description:
    "Explore painting, ceiling & partition, plumbing, waterproofing, handyman and other home maintenance services across KL & Selangor. View scope and pricing.",
  path: "/services",
  // Real hreflang cluster with the H3-pilot localized directories.
  languageUrls: localizedServicesIndexLanguageUrls(),
  keywords: [
    "home services KL",
    "handyman Selangor",
    "renovation services Kuala Lumpur"
  ]
});

export default function ServicesPage() {

  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      {/* Hero Section - Klrenovator Style */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-16 sm:py-20">
        <ServicesDirectoryHero />
      </section>

      <div className="container-default py-10 sm:py-14">
        <SmartServiceFinder />
      </div>

      <ServicesGrid />

      {/* Decision Tree - localised via LocaleDecisionTree wrapper */}
      <LocaleDecisionTree variant="servicesPage" />

      {/* Stats Counter */}
      <StatsCounter
        variant="gradient"
        stats={[
          // Count + warranty wording derived from the same registries that
          // render the pages (P3-07): a hand-tuned "28" and a blanket
          // "90 Days" contradicted the 29-service catalog and the per-service
          // warranty strings printed on this very grid.
          { value: String(SERVICE_COUNT), label: "Expert Services", trilingualMs: "Perkhidmatan Pakar", trilingualZh: "专业服务" },
          { value: "1,200+", label: "Projects Completed", trilingualMs: "Projek Siap", trilingualZh: "已完成项目" },
          { value: "4.9★", label: "Google Rating", trilingualMs: "Penilaian Google", trilingualZh: "Google 评分" },
          { value: "30 Days – 10 Years", label: "Warranty Coverage (per service)", trilingualMs: "Liputan Jaminan (ikut perkhidmatan)", trilingualZh: "保修覆盖（按服务）" }
        ]}
      />

      <ServiceComparisonTable />

      <WhyChooseUs />
    </>
  );
}
