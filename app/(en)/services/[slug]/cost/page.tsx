import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { getMarketRatesForService, type MarketRateItem } from "@/config/market-rates";
import { getArticleSchema, getFAQSchema, getOfferCatalogSchema } from "@/lib/seo";
import { SERVICE_SCOPES } from "@/lib/estimator/rate-book.generated";
import { buildEstimateLinks } from "@/config/estimate-links";
import { buildServiceBundle, buildServiceCostDetail, buildServiceLinks } from "@/lib/location-bundles";
import { createTranslator, type MessageDictionary } from "@/lib/i18n";
import { buildCostDirectAnswer, buildCostDirectAnswerVars } from "@/lib/cost-direct-answer";
import enMessagesJson from "@/messages/en.json";
import { LocaleServiceCostView } from "@/components/sections/locale-service-cost-view";

const englishMessages = enMessagesJson as MessageDictionary;

/**
 * English translator for the strings this route marks up in JSON-LD. The
 * DirectAnswer card is rendered by the localized client view; running the very
 * same builder against the EN dictionary guarantees the marked-up Question and
 * Answer are byte-identical to the server-rendered H2 and paragraph (P5-02 /
 * part 5's `faqSchemaNoVisibleMatch` check).
 */
const translateEn = createTranslator(
  { en: englishMessages, ms: englishMessages, zh: englishMessages },
  "en"
);

// Every valid param is enumerated in `generateStaticParams()`, so anything
// else must 404 rather than be rendered on demand and cached as a 200
// (a soft 404). See `app/[lang]/[[...slug]]/page.tsx` for the full rationale.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} Cost in KL & Selangor — 2026 Pricing Guide`,
    description: `How much does ${service.title.toLowerCase()} cost in KL & Selangor? Review published price ranges, cost factors, examples and WhatsApp quote options.`,
    path: `/services/${slug}/cost`,
    image: service.heroImage,
    ogTemplate: "cost"
  });
}

/**
 * The four site-wide cost FAQs (CF-4). The same Q&As are shipped to the
 * client as localized `costPage.faqs` message keys; this EN array exists
 * because the FAQPage markup on the canonical URL must match the
 * server-rendered English HTML 1:1 (P5-02). Keep both in sync.
 */
const COST_FAQS_EN = [
  { q: "What is the starting price for {name}?", a: "{name} starts from {startPrice}. Final cost depends on dimensions, access, materials, and actual site condition." },
  { q: "Are your prices fair for KL & Selangor?", a: "Yes. KL Servis Rumah prices are the fair Klang Valley standard: not inflated, not underpriced, and confirmed before work starts." },
  { q: "Can I get a quote from photos?", a: "For many small jobs, clear photos and measurements help us estimate. Complex leaks, ceilings, and exterior access may need inspection." },
  { q: "Do you charge hidden fees?", a: "No. Additional scope is explained and approved before proceeding." }
];

export default async function CostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service) notFound();
  const rates = getMarketRatesForService(slug as MarketRateItem["serviceSlug"]);
  const scopeBook = SERVICE_SCOPES[slug] ?? { startPrice: 0, scopes: [], quoteOnly: [] };

  // P3-04 — the literal "how much does {service} cost in KL & Selangor?" card
  // is both rendered (client view) and marked up (below), so the highest-intent
  // query for this business is answered in the extractable format on all 29
  // money pages. Built here from the same pure builder the view calls.
  const directAnswer = buildCostDirectAnswer(
    translateEn,
    buildCostDirectAnswerVars({
      t: translateEn,
      locale: "en",
      name: service.title,
      startPrice: service.startPrice,
      units: scopeBook.scopes.map((scope) => scope.unit),
      scopeCount: scopeBook.scopes.length,
      quoteOnlyCount: scopeBook.quoteOnly.length
    })
  );

  // Schema (canonical EN HTML): the DirectAnswer Q&A first (it is the headline
  // query, and part 5 checks the FIRST marked-up Question against the rendered
  // text), then the site-wide FAQ templates, then this service's own published
  // FAQs. All of them are rendered visibly by the client view, so the marked-up
  // Q&As always exist in the server-rendered document.
  const faqs = [
    { q: directAnswer.question, a: directAnswer.answer },
    ...COST_FAQS_EN.map((faq) => ({
      q: faq.q.replace("{name}", service.title).replace("{startPrice}", service.startPrice),
      a: faq.a.replace("{name}", service.title).replace("{startPrice}", service.startPrice)
    })),
    ...service.faqs
  ];
  const estimatorHref =
    buildEstimateLinks().find((link) => link.slug === slug)?.resolvedPath ?? `/estimate/${slug}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getOfferCatalogSchema(service.subServices)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: `${service.title} Cost in KL & Selangor`, slug: `${slug}/cost`, excerpt: service.metaDesc, path: `/services/${slug}/cost`, category: "Pricing" })) }} />

      <LocaleServiceCostView
        slug={slug}
        bundle={buildServiceBundle(service)}
        detail={buildServiceCostDetail(service)}
        scopeBook={scopeBook}
        rates={rates}
        startPrice={service.startPrice}
        estimatorHref={estimatorHref}
        relatedCostGuides={buildRelatedCostBundles(service.slug)}
      />
    </>
  );
}

/**
 * Circular selection gives every cost guide the same six sibling inlinks —
 * the same pattern the emergency pages use. Each page links the next six
 * `/services/<slug>/cost` guides so no cost page depends on one neighbour.
 */
function buildRelatedCostBundles(serviceSlug: string) {
  const allServices = Object.values(servicesData);
  const currentIndex = allServices.findIndex((service) => service.slug === serviceSlug);

  const relatedServices = Array.from({ length: Math.min(6, allServices.length - 1) }, (_, offset) => (
    allServices[(currentIndex + offset + 1) % allServices.length]
  ));

  return buildServiceLinks(relatedServices, (service) => `/services/${service.slug}/cost`);
}
