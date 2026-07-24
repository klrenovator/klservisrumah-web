import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import { TrustBar } from "@/components/trust-bar";
import { StickyBookButton } from "@/components/sticky-book-button";
import { LocaleServiceView } from "@/components/sections/locale-service-view";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = servicesData[params.slug];
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `https://www.klservisrumah.my/services/${service.slug}`,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title
        }
      ]
    }
  };
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

  const crumbs = [
    { name: "Services", item: "/services" },
    { name: service.title, item: `/services/${service.slug}` }
  ];
  const breadcrumbSchema = getBreadcrumbSchema(crumbs);
  const faqSchema = getFAQSchema(service.faqs);

  return (
    <>
      <TrustBar />
      <StickyBookButton service={service.title} />
      <Breadcrumbs items={[
        { label: "Services", href: "/services" },
        { label: service.title, href: `/services/${service.slug}` }
      ]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <LocaleServiceView service={service} />
    </>
  );
}
