import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { areaPages } from "@/config/area-data";
import { getFAQSchema, getAreaPlaceSchema, getAreaServiceSchema } from "@/lib/seo";
import { buildAreaBundle } from "@/lib/location-bundles";
import { LocaleAreaView } from "@/components/sections/locale-area-view";
import { CoverageMap } from "@/components/sections/coverage-map";

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

  // Audit P4-14: this is a coverage page, not a separate business branch. The
  // page now defines the area's full Place entity ONCE (City + real
  // GeoCoordinates + State, stable `#place` @id) and a Service node whose
  // areaServed references that Place by @id. Area×service pages and the
  // homepage organization node reference these same Place @ids, so engines can
  // associate every Service+area pair with one geo-located city entity.
  const areaPlaceSchema = getAreaPlaceSchema(area);
  const areaServiceSchema = getAreaServiceSchema(area);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaPlaceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaServiceSchema) }}
      />

      <LocaleAreaView slug={area.slug} landmarks={area.landmarks} bundle={buildAreaBundle(area)} />

      {/* Audit P4-12 — coverage map with the current area highlighted (static
          SVG; CSP `frame-src 'none'` rules out third-party map iframes). */}
      <CoverageMap
        highlightSlug={area.slug}
        areas={areaPages.map((a) => ({
          slug: a.slug,
          name: a.name,
          shortName: a.shortName,
          lat: a.lat,
          lng: a.lng
        }))}
      />
    </>
  );
}
