import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import {
  getServiceSchema,
  getFAQSchema,
} from "@/lib/seo";
import { TrustBar } from "@/components/trust-bar";
import { LocaleServiceView } from "@/components/sections/locale-service-view";
import { localizedServiceLanguageUrls } from "@/components/sections/locale-service-page";
import { getServiceSeo } from "@/config/service-seo";
import { SERVICE_SCOPES } from "@/lib/estimator/rate-book.generated";

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = servicesData[params.slug];
  if (!service) return {};
  const seo = getServiceSeo(service.slug, "en", {
    title: service.metaTitle,
    description: service.metaDesc
  });

  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/services/${service.slug}`,
    image: service.heroImage,
    // Real hreflang cluster with the H3-pilot localized twins.
    languageUrls: localizedServiceLanguageUrls(service.slug),
    keywords: [
      service.title,
      `${service.title} KL`,
      `${service.title} Kuala Lumpur`,
      `${service.title} Selangor`,
      `${service.title} price`,
      `${service.title} cost`,
      "home services Malaysia"
    ]
  });
}

export default function ServiceSlugPage(props: { params: Promise<{ slug: string }> }) {
  // Next.js 15 requires async params; we mirror the interface but use a
  // sync client wrapper that reads the locale at render time.
  return <ServiceSlugPageResolver params={props.params} />;
}

async function ServiceSlugPageResolver({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) {
    notFound();
  }

  const serviceSchema = getServiceSchema({
    title: service.title,
    description: service.description,
    startPrice: service.startPrice,
    slug: service.slug
  });

  const faqSchema = getFAQSchema(service.faqs);

  return (
    <>
      <TrustBar />
      <Breadcrumbs items={[
        { name: "Services", href: "/services" },
        { name: service.title, href: `/services/${service.slug}` }
      ]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Audit P4-06 — pass the rate-book include/exclude rows as a slim
          server-computed prop (keeps the 63 KB rate-book registry out of the
          client bundle; mirrors the cost page's scopeBook pattern). */}
      <LocaleServiceView
        service={service}
        scopeSummary={(() => {
          const book = SERVICE_SCOPES[slug];
          if (!book) return undefined;
          return {
            scopes: book.scopes.map((s) => ({ name: s.name, published: s.published })),
            quoteOnly: book.quoteOnly.map((q) => ({ name: q.name, desc: q.desc }))
          };
        })()}
      />
    </>
  );
}
