import React from "react";
import { notFound } from "next/navigation";
import { areaPages } from "@/config/area-data";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import { buildAreaBundle } from "@/lib/location-bundles";
import { LocaleAreaView } from "@/components/sections/locale-area-view";

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

  // Schema stays canonical (English) for search engines; the visible body is
  // rendered by the client wrapper in the visitor's active language.
  const crumbs = [
    { name: "Coverage Areas", item: "/areas" },
    { name: area.name, item: `/areas/${area.slug}` }
  ];
  const breadcrumbSchema = getBreadcrumbSchema(crumbs);
  const faqSchema = getFAQSchema(area.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <LocaleAreaView slug={area.slug} landmarks={area.landmarks} bundle={buildAreaBundle(area)} />
    </>
  );
}
