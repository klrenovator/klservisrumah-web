import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { areaPages } from "@/config/area-data";
import { getFAQSchema } from "@/lib/seo";
import { buildAreaBundle } from "@/lib/location-bundles";
import { LocaleAreaView } from "@/components/sections/locale-area-view";

const baseUrl = "https://www.klservisrumah.my";

// Every valid param is enumerated in `generateStaticParams()`, so anything
// else must 404 rather than be rendered on demand and cached as a 200
// (a soft 404). See `app/[lang]/[[...slug]]/page.tsx` for the full rationale.
export const dynamicParams = false;

export async function generateStaticParams() {
  return areaPages.map((area) => ({
    slug: area.slug
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const area = areaPages.find((a) => a.slug === params.slug);
  if (!area) return {};

  return buildMetadata({
    title: area.metaTitle,
    description: area.metaDesc,
    path: `/areas/${area.slug}`,
    keywords: [
      `home services ${area.name}`,
      `painter ${area.name}`,
      `plumber ${area.name}`,
      `handyman ${area.name}`,
      `waterproofing ${area.name}`,
      `plaster ceiling ${area.name}`,
      area.name,
      area.shortName,
      area.state
    ]
  });
}

export default async function AreaSlugPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const area = areaPages.find((a) => a.slug === params.slug);
  if (!area) {
    notFound();
  }

  // Schema stays canonical (English) for search engines; the visible body is
  // rendered by the client wrapper in the visitor's active language.
  const faqSchema = getFAQSchema(area.faqs);

  // This is a coverage page, not a separate business branch. Service schema
  // accurately describes the relationship without inventing a postal address
  // or placing the company's physical geo coordinates at the area centroid.
  const areaServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/areas/${area.slug}#service`,
    name: `Home services in ${area.name}`,
    description: area.description,
    url: `${baseUrl}/areas/${area.slug}`,
    provider: { "@id": `${baseUrl}/#organization` },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "State", name: area.state }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaServiceSchema) }}
      />

      <LocaleAreaView slug={area.slug} landmarks={area.landmarks} bundle={buildAreaBundle(area)} />
    </>
  );
}
