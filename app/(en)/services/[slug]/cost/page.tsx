import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { getArticleSchema, getFAQSchema, getOfferCatalogSchema } from "@/lib/seo";
import { createTranslator, type MessageDictionary } from "@/lib/i18n";
import {
  buildCostDirectAnswer,
  buildCostDirectAnswerVars,
  buildCostPageFaqs,
  buildCostPageSiteFaqs
} from "@/lib/cost-direct-answer";
import enMessagesJson from "@/messages/en.json";
import { LocaleServiceCostView } from "@/components/sections/locale-service-cost-view";
import {
  buildServiceCostPageData,
  localizedServiceCostLanguageUrls
} from "@/components/sections/locale-service-cost-page";

const englishMessages = enMessagesJson as MessageDictionary;

/**
 * English translator for the strings this route marks up in JSON-LD. The
 * DirectAnswer card and the FAQPage Q&As are rendered by the shared body;
 * running the very same pure builders against the EN dictionary guarantees
 * the marked-up Question and Answer are byte-identical to the
 * server-rendered H2 and paragraphs (P5-02 / part 5's
 * `faqSchemaNoVisibleMatch` check).
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
    title: translateEn("costPage.metaTitle", { name: service.title }),
    description: translateEn("costPage.metaDesc", { name: service.title.toLowerCase() }),
    path: `/services/${slug}/cost`,
    image: service.heroImage,
    // P3-12 phase 3 — the cost guide now has real MS/ZH twins, so the
    // cluster links all three sibling URLs (x-default stays English)
    // instead of being self-referencing.
    languageUrls: localizedServiceCostLanguageUrls(slug),
    ogTemplate: "cost"
  });
}

export default async function CostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service) notFound();
  const data = buildServiceCostPageData(slug);

  // P3-04 — the literal "how much does {service} cost in KL & Selangor?" card
  // is both rendered (shared body) and marked up (below), so the
  // highest-intent query for this business is answered in the extractable
  // format on all 29 money pages. Built here from the same pure builder the
  // view calls.
  const directAnswer = buildCostDirectAnswer(
    translateEn,
    buildCostDirectAnswerVars({
      t: translateEn,
      locale: "en",
      name: service.title,
      startPrice: data.startPrice,
      units: data.scopeBook.scopes.map((scope) => scope.unit),
      scopeCount: data.scopeBook.scopes.length,
      quoteOnlyCount: data.scopeBook.quoteOnly.length
    })
  );

  // Schema (canonical EN HTML): the DirectAnswer Q&A first (it is the
  // headline query, and part 5 checks the FIRST marked-up Question against
  // the rendered text), then the site-wide FAQ templates, then this
  // service's own published FAQs. The templates now read the same
  // `costPage.faqs.*` dictionary keys the body renders (the old hand-copied
  // array had drifted from the visible copy), so every marked-up Q&A exists
  // verbatim in the server-rendered document.
  const faqs = buildCostPageFaqs(
    directAnswer,
    buildCostPageSiteFaqs(translateEn, { name: service.title, startPrice: data.startPrice }),
    service.faqs
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getOfferCatalogSchema(service.subServices)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: `${service.title} Cost in KL & Selangor`, slug: `${slug}/cost`, excerpt: service.metaDesc, path: `/services/${slug}/cost`, category: "Pricing" })) }} />

      <LocaleServiceCostView
        slug={slug}
        bundle={data.bundle}
        detail={data.detail}
        scopeBook={data.scopeBook}
        rates={data.rates}
        startPrice={data.startPrice}
        estimatorHref={data.estimatorHref}
        related={data.related}
      />
    </>
  );
}
