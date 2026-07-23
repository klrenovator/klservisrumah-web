import React from "react";
import { ServiceAreas } from "@/components/sections/service-areas";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Service Coverage Areas KL & Selangor",
  description: "Explore our target neighborhood coverage directories across Kuala Lumpur and Selangor. Certified painters, plumbers, waterproofers, and handymen."
};

export default function AreasPage() {
  const crumbs = [{ name: "Coverage Areas", item: "/areas" }];
  const schema = getBreadcrumbSchema(crumbs);

  return (
    <>
      <Breadcrumbs items={[{ label: "Coverage Areas", href: "/areas" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ServiceAreas />

      <WhyChooseUs />
    </>
  );
}
