import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { areaPages } from "@/config/area-data";
import { getBreadcrumbSchema, getFAQSchema, getSpeakableSchema } from "@/lib/seo";
import { buildAreaBundle } from "@/lib/location-bundles";
import { LocaleAreaView } from "@/components/sections/locale-area-view";
import { siteConfig } from "@/config/site";

const baseUrl = "https://www.klservisrumah.my";

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
  const crumbs = [
    { name: "Coverage Areas", item: "/areas" },
    { name: area.name, item: `/areas/${area.slug}` }
  ];
  const breadcrumbSchema = getBreadcrumbSchema(crumbs);
  const faqSchema = getFAQSchema(area.faqs);
  const speakableSchema = getSpeakableSchema(["h1", ".area-intro", ".faq-answer"]);

  // Area-specific LocalBusiness Service schema — signals that KL Servis
  // Rumah services this exact locality (crucial for local-pack ranking).
  const areaServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/areas/${area.slug}#localbusiness`,
    name: `${siteConfig.name} — ${area.name}`,
    description: area.description,
    url: `${baseUrl}/areas/${area.slug}`,
    telephone: siteConfig.phone,
    priceRange: "$$",
    image: siteConfig.defaultOgImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: area.state,
      addressCountry: "MY"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: area.lat,
      longitude: area.lng
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "State", name: area.state }
    },
    parentOrganization: { "@id": `${baseUrl}/#organization` },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.reviewRating,
      reviewCount: siteConfig.reviewCount,
      bestRating: 5,
      worstRating: 1
    }
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaServiceSchema) }}
      />

      <LocaleAreaView slug={area.slug} landmarks={area.landmarks} bundle={buildAreaBundle(area)} />
    </>
  );
}
