import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { clusterPages } from "@/config/content-data";
import { GenericContentPageView } from "@/components/content/generic-content-page";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getFAQSchema, getServiceSchema } from "@/lib/seo";
import { slugify } from "@/lib/utils";
import { LocaleServiceView } from "@/components/sections/locale-service-view";
import { TrustBar } from "@/components/trust-bar";
import { StickyBookButton } from "@/components/sticky-book-button";

export function generateStaticParams() {
  const subServiceParams = Object.values(servicesData).flatMap((service) =>
    service.subServices.map((sub) => ({ slug: service.slug, subservice: slugify(sub.name) }))
  );
  const clusterParams = clusterPages
    .filter((page) => page.relatedServiceSlug)
    .map((page) => ({ slug: String(page.relatedServiceSlug), subservice: page.slug }));
  return [...subServiceParams, ...clusterParams];
}

export async function generateMetadata(props: { params: Promise<{ slug: string; subservice: string }> }) {
  const params = await props.params;
  const service = servicesData[params.slug];
  const sub = service?.subServices.find((item) => slugify(item.name) === params.subservice);
  const cluster = clusterPages.find((page) => page.relatedServiceSlug === params.slug && page.slug === params.subservice);
  if (!service) return {};
  if (cluster) {
    return buildMetadata({
    title: cluster.title,
    description: cluster.intro,
    path: `/services/${service.slug}/${cluster.slug}`
  });
  }
  if (!sub) return {};
  return buildMetadata({
    title: `${sub.name} in KL & Selangor — ${sub.price}`,
    description: `${sub.desc} Market-rate pricing from ${sub.price}, insured team, and WhatsApp booking across Kuala Lumpur and Selangor.`,
    path: `/services/${service.slug}/${params.subservice}`,
    image: service.heroImage,
    keywords: [sub.name, `${sub.name} KL`, `${sub.name} price`, service.title]
  });
}

export default async function SubServicePage(props: { params: Promise<{ slug: string; subservice: string }> }) {
  const params = await props.params;
  const service = servicesData[params.slug];
  const sub = service?.subServices.find((item) => slugify(item.name) === params.subservice);
  const cluster = clusterPages.find((page) => page.relatedServiceSlug === params.slug && page.slug === params.subservice);
  if (!service) notFound();
  if (cluster && !sub) {
    return <GenericContentPageView page={cluster} />;
  }
  if (!sub) notFound();

  const faqs = [
    { q: `How much does ${sub.name} cost in KL & Selangor?`, a: `${sub.name} is priced ${sub.price}. Final cost depends on dimensions, access, materials, and actual site condition, and is confirmed before work begins.` },
    { q: `What is included in ${sub.name}?`, a: `Our quote includes workmanship scope, standard preparation, suitable tools, cleanup, and warranty terms related to ${service.title}.` },
    { q: `Can I book ${sub.name} on WhatsApp?`, a: `Yes. Send your area, photos, property type, and preferred date so our dispatch desk can confirm a market-rate quote.` },
    { q: `Is ${sub.name} available same day?`, a: `Same-day slots depend on technician availability and urgency. Emergency and safety-related ${service.title.toLowerCase()} issues receive priority dispatch.` },
    { q: `Do you cover my area for ${sub.name}?`, a: `Yes. We dispatch ${service.title.toLowerCase()} teams daily across all of KL and Selangor — Kuala Lumpur, Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Klang, and every major suburb.` },
    { q: `What warranty comes with ${sub.name}?`, a: `Every ${sub.name} booking is covered by our written ${service.warranty.toLowerCase()}. If anything covered fails within the warranty period, we return to fix it free of charge.` }
  ];

  return (
    <>
      <TrustBar />
      <StickyBookButton service={sub.name} />
      <Breadcrumbs items={[
        { label: "Services", href: "/services" },
        { label: service.title, href: `/services/${service.slug}` },
        { label: sub.name, href: `/services/${service.slug}/${params.subservice}` }
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema({ title: sub.name, description: sub.desc, startPrice: sub.price, slug: service.slug })) }} />

      <LocaleServiceView service={service} sub={sub} />
    </>
  );
}
