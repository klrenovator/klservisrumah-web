import React from "react";
import { buildMetadata } from "@/lib/seo-meta";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { servicesData } from "@/config/services-data";
import {
  getFAQSchema,
  getOfferCatalogSchema,
} from "@/lib/seo";
import { PricingHeroHeading } from "@/components/sections/pricing-hero-heading";
import { LocalePricingContent } from "@/components/sections/locale-pricing-content";

export const metadata = buildMetadata({
  title: "Home Services Pricing KL & Selangor — 2026 Guide",
  description:
    "Honest 2026 prices for painting, plumbing, plaster ceiling, waterproofing and handyman work in Kuala Lumpur and Selangor. No hidden charges.",
  path: "/pricing",
  keywords: [
    "home service price Malaysia",
    "painting cost KL",
    "plumber rate Selangor",
    "waterproofing price KL"
  ]
});

const pricingFaqs = [
  {
    q: "How do you set your prices?",
    a: "We follow fair Klang Valley rates. Prices are not inflated and not underpriced. Final quotes are confirmed only after scope, access, materials and urgency are checked.",
  },
  {
    q: "Do you charge hidden fees later?",
    a: "No. If extra work is needed, it is explained first and approved by you before we continue.",
  },
  {
    q: "Can I get a quote from photos on WhatsApp?",
    a: "Yes. Many small jobs can be estimated from clear photos, measurements and your area. More complex leak, ceiling or exterior jobs may still need an inspection.",
  },
  {
    q: "Are emergency jobs charged differently?",
    a: "Emergency jobs can cost more when urgent dispatch, after-hours labour, access difficulty or safety controls are involved. The emergency uplift is explained before work starts.",
  },
];

// Audit P5-04: this catalog previously flattened ALL 222 sub-services into
// one 92 KB OfferCatalog — the single largest JSON-LD block on the site.
// The full per-service sub-service catalogs already ship on the 29
// `/services/<svc>` pages (getServiceSchema.hasOfferCatalog), so re-emitting
// every row here only duplicated them at 10× the page's weight. The catalog
// now lists the flagship service-level offers (same slice(0, 12) precedent
// the homepage's homeOfferCatalogSchema uses); units stay attached via
// parsePricedOffer → UnitPriceSpecification (audit C7/P5-08 invariant).
const offerCatalogItems = Object.values(servicesData)
  .slice(0, 12)
  .map((service) => ({ name: service.title, price: service.startPrice, desc: service.tagline }));

export default function PricingPage() {

  return (
    <>
      <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(pricingFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOfferCatalogSchema(offerCatalogItems)) }}
      />

      <section className="bg-gradient-to-b from-slate-50 via-white to-sky-50/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingHeroHeading />
        </div>
      </section>

      <LocalePricingContent />
    </>
  );
}
