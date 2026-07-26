/**
 * Structured data for the estimator tools.
 *
 * Each tool page emits a single `@graph` document so Google, Bing and the AI
 * crawlers resolve one connected entity set instead of five disconnected
 * blobs: SoftwareApplication + HowTo + FAQPage + Service + BreadcrumbList +
 * LocalBusiness + PriceSpecification.
 */

import { siteConfig } from "@/config/site";
import type { ToolContent } from "@/config/tools-data";

const baseUrl = "https://www.klservisrumah.my";

/**
 * The site-wide LocalBusiness node is emitted once in `app/layout.tsx`. Tool
 * pages only *reference* it by @id so the graph stays a single connected
 * entity instead of two competing definitions. The same applies to
 * BreadcrumbList, which `components/ui/breadcrumbs.tsx` already renders.
 */
const LOCAL_BUSINESS_ID = `${baseUrl}/#localbusiness`;

function absolute(path = "") {
  if (path.startsWith("http")) return path;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getToolGraph(content: ToolContent) {
  const url = absolute(`/tools/${content.slug}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      /* The tool itself — free web application. */
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": `${url}#app`,
        name: content.name,
        url,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Cost Estimator",
        operatingSystem: "Any (web browser)",
        browserRequirements: "Requires JavaScript",
        description: content.metaDesc,
        inLanguage: ["en-MY", "ms-MY", "zh-MY"],
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
        featureList: content.covers,
        provider: { "@id": LOCAL_BUSINESS_ID },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.reviewRating,
          reviewCount: siteConfig.reviewCount,
          bestRating: 5,
          worstRating: 1
        }
      },

      /* The service the tool prices, with the published rate table attached. */
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: content.heading,
        description: content.directAnswer,
        serviceType: content.name,
        provider: { "@id": LOCAL_BUSINESS_ID },
        areaServed: siteConfig.areas.slice(0, 20).map((area) => ({
          "@type": "City",
          name: area,
          containedInPlace: { "@type": "Country", name: "Malaysia" }
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${content.name} — published 2026 rates`,
          itemListElement: content.priceTable.map((row) => ({
            "@type": "Offer",
            name: row.scope,
            description: row.note,
            priceCurrency: "MYR",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "MYR",
              description: row.rate
            }
          }))
        }
      },

      /* How to use the estimator. */
      {
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name: `How to use the ${content.name}`,
        description: `Get an instant ${content.name.toLowerCase()} estimate for Kuala Lumpur and Selangor in about ${content.estimatedMinutes} minute${content.estimatedMinutes > 1 ? "s" : ""}.`,
        totalTime: `PT${content.estimatedMinutes}M`,
        estimatedCost: { "@type": "MonetaryAmount", currency: "MYR", value: "0" },
        tool: [{ "@type": "HowToTool", name: content.name }],
        step: content.howTo.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          text: step.desc,
          url: `${url}#estimator`
        }))
      },

      /* FAQ — the primary AEO surface. */
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a }
        }))
      },

      /* Speakable — voice assistants and AI readers. */
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: content.metaTitle,
        description: content.metaDesc,
        isPartOf: { "@id": `${baseUrl}/#website` },
        primaryImageOfPage: { "@type": "ImageObject", url: absolute(content.heroImage), caption: content.heroAlt },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".quick-answer", ".faq-answer"]
        }
      }
    ]
  };
}
