/**
 * Structured data for the estimator tools.
 *
 * Each tool page emits a single `@graph` document so Google, Bing and the AI
 * crawlers resolve one connected entity set instead of five disconnected
 * blobs: SoftwareApplication + HowTo + FAQPage + Service + BreadcrumbList +
 * LocalBusiness + PriceSpecification.
 */

import { buildServiceAreaGeoCircle } from "@/lib/seo";
import type { ToolContent } from "@/config/tools-data";

const baseUrl = "https://www.klservisrumah.my";

/**
 * The site-wide business entity is emitted once in `SiteHead` as
 * `HomeAndConstructionBusiness` @ `#organization`. Tool pages only
 * *reference* it by @id so the graph stays a single connected entity
 * (audit P5-01 — the parallel `#localbusiness` node was removed).
 * BreadcrumbList is rendered by `components/ui/breadcrumbs.tsx`.
 */
const ORGANIZATION_ID = `${baseUrl}/#organization`;

function absolute(path = "") {
  if (path.startsWith("http")) return path;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getToolGraph(
  content: ToolContent,
  options: {
    /** Absolute page URL — the localised MS/ZH routes pass their own. */
    url?: string;
    /** BCP-47 tag for this rendering (default: the trilingual EN-page list). */
    language?: string;
  } = {}
) {
  const url = options.url ?? absolute(`/tools/${content.slug}`);
  const inLanguage = options.language ? [options.language] : ["en-MY", "ms-MY", "zh-MY"];

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
        inLanguage,
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
        featureList: content.covers,
        provider: { "@id": ORGANIZATION_ID }
        // aggregateRating deliberately omitted (audit P5-03): the business's
        // review score must not be attached to a free calculator
        // SoftwareApplication. Rating markup belongs only where reviews are
        // visibly shown AND the owner has verified the source — neither is
        // true on tool pages today.
      },

      /* The service the tool prices, with the published rate table attached. */
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: content.heading,
        description: content.directAnswer,
        serviceType: content.name,
        provider: { "@id": ORGANIZATION_ID },
        // Audit P5-04: the 20-city areaServed list (repeated on all 43×3 tool
        // pages) is replaced by the Klang Valley GeoCircle — the full city
        // list ships once, on the homepage Organization node.
        areaServed: buildServiceAreaGeoCircle(),
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

      /* Audit P5-06: the HowTo node was removed — Google retired HowTo rich
         results (Sept 2023) and the visible "How it works" section still
         carries the steps in plain HTML for users and AI crawlers. */

      /* FAQ — the primary AEO surface. */
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a }
        }))
      }

      /* Audit P5-07: the trailing WebPage node (speakable + primaryImageOfPage)
         was removed — an orphan node duplicating the document's own metadata;
         speakable has no active Google rich-result use. */
    ]
  };
}
