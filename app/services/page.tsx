import React from "react";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Professional Home Services Directory",
  description: "Browse our expert home services including interior house painting, water leakage repairs, plaster ceiling installations, waterproofing, and handyman alignments."
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

      <ServicesGrid />

      <WhyChooseUs />
    </>
  );
}
