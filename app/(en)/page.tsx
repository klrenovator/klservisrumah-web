import React from "react";
import { Hero } from "@/components/sections/hero";
import { SmartServiceFinder } from "@/components/ui/smart-service-finder";
import { TrustBar } from "@/components/trust-bar";
import { RecentJobsTicker } from "@/components/recent-jobs-ticker";
import { TrustBadges } from "@/components/sections/trust-badges";
import { ServicesGrid } from "@/components/sections/services-grid";
import { StatsCounter } from "@/components/content/stats-counter";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { OurProcess } from "@/components/sections/our-process";
import { BeforeAfter } from "@/components/sections/before-after";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { GoogleReviews } from "@/components/sections/google-reviews";
import { PricingComparison } from "@/components/sections/pricing-comparison";
import { NotSureSection } from "@/components/sections/not-sure-section";
import { ServiceAreas } from "@/components/sections/service-areas";
import { VisibleFaqList } from "@/components/content/visible-faq";
import { HomeCTA } from "@/components/sections/home-cta";
import { HomepageAeoLinks } from "@/components/sections/homepage-aeo-links";

import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import {
  getFAQSchema,
  getSpeakableSchema,
  getOfferCatalogSchema,
  buildServiceAreaGeoCircle,
  parsePricedOffer
} from "@/lib/seo";

// ── Homepage AI-Ready FAQPage (short, direct answers optimised for AEO /
//    Google Gemini / ChatGPT / Perplexity zero-click surfaces) ─────────────
const HOMEPAGE_FAQS = [
  {
    q: "How much do home services cost in KL & Selangor?",
    a: "KL Servis Rumah pricing is transparent and fixed upfront. Handyman jobs start at RM 280, plumbing repairs from RM 280, plaster ceiling repair from RM 180, single-room painting from RM 450, PU grouting waterproofing from RM 300 and full-house renovation from RM 22,000. Every quote is fixed and itemised before work begins — no hidden fees, no surprise charges."
  },
  {
    q: "Do you offer same-day home service in Kuala Lumpur?",
    a: "Yes. For bookings placed before 11:00 AM we dispatch the nearest available technician in Kuala Lumpur, Petaling Jaya, Subang Jaya, Puchong, Shah Alam, Cheras, Ampang, Klang, Kajang, Kepong or Mont Kiara for a same-day slot. Emergency plumbing leaks and burst pipes get priority routing with a 30–60 minute average arrival time."
  },
  {
    q: "Which home services does KL Servis Rumah provide?",
    a: "We provide 28+ residential and light-commercial services across Klang Valley: interior/exterior painting, plumbing leak repair, plaster ceiling & gypsum partitions, PU-grouting waterproofing, handyman work, electrical wiring, water-heater install, ceiling fans, downlights, tiling, vinyl/SPC flooring, epoxy flooring, roof repair, kitchen cabinet, carpentry, door & lock repair, glass & aluminium, CCTV, auto gate, welding and full house renovation."
  },
  {
    q: "Are your tradesmen insured and background-verified?",
    a: "Yes. Every KL Servis Rumah painter, plumber, ceiling installer, waterproofing specialist and handyman is background-verified and covered under our public liability insurance. Our teams follow JMB/building-management rules for high-rise condos, use shoe covers indoors, and leave a clean site after every visit."
  },
  {
    q: "What warranty does KL Servis Rumah give?",
    a: "Written warranties: 30 days on handyman installations & plumbing joints, 60–90 days on plaster ceiling and gypsum partitions, up to 12 months on electrical, water heater, ceiling fan and lighting installs, and up to 5 years on full chemical waterproofing membrane works. All warranties are recorded on your official invoice."
  },
  {
    q: "Which areas in KL & Selangor do you cover?",
    a: `We cover all of Kuala Lumpur and Selangor including ${siteConfig.areas.slice(0, 24).join(", ")} and more. Same-day dispatch is available across the entire Klang Valley — WhatsApp ${siteConfig.phoneDisplay} for coverage confirmation.`
  }
];

const homepageFaqSchema = getFAQSchema(HOMEPAGE_FAQS);

// Homepage BreadcrumbList intentionally omitted (audit P5-11): a depth-1
// trail of only "Home" adds no navigation value and is invalid UX/schema noise.

const homepageSpeakableSchema = getSpeakableSchema([
  "h1",
  ".hero-subhead",
  ".faq-answer"
]);

// Build a homepage-wide Service listing so search engines see the top
// service pillars & their offers directly on `/`.
const homeServicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.klservisrumah.my/#homepage-service",
  name: "Home Maintenance & Renovation Services — Kuala Lumpur & Selangor",
  serviceType: "Home Services",
  category: "Home maintenance and renovation",
  description: siteConfig.description,
  url: "https://www.klservisrumah.my/",
  provider: { "@id": "https://www.klservisrumah.my/#organization" },
  areaServed: [
    { "@type": "City", name: "Kuala Lumpur" },
    { "@type": "City", name: "Petaling Jaya" },
    { "@type": "City", name: "Subang Jaya" },
    { "@type": "City", name: "Shah Alam" },
    { "@type": "City", name: "Puchong" },
    { "@type": "City", name: "Klang" },
    { "@type": "City", name: "Cheras" },
    { "@type": "City", name: "Ampang" },
    { "@type": "City", name: "Kajang" },
    { "@type": "State", name: "Selangor" },
    buildServiceAreaGeoCircle()
  ],
  // AggregateOffer low/high use flat job-start prices only (not per-sq-ft
  // unit rates). Audit P3-05: previous lowPrice "80" was a stale priceRange
  // floor that no service actually starts at.
  offers: (() => {
    const flatPrices = Object.values(servicesData)
      .map((s) => s.startPrice)
      .filter((p) => /RM\s*[\d.,]+/i.test(p) && !/\//.test(p))
      .map((p) => Number(p.replace(/[^0-9.]/g, "")))
      .filter((n) => Number.isFinite(n) && n > 0);
    const low = flatPrices.length ? Math.min(...flatPrices) : undefined;
    const high = flatPrices.length ? Math.max(...flatPrices) : undefined;
    return {
      "@type": "AggregateOffer",
      priceCurrency: "MYR",
      ...(low !== undefined ? { lowPrice: String(low) } : {}),
      ...(high !== undefined ? { highPrice: String(high) } : {}),
      offerCount: Object.keys(servicesData).length,
      availability: "https://schema.org/InStock"
    };
  })()
};

const homeOfferCatalogSchema = {
  "@context": "https://schema.org",
  ...getOfferCatalogSchema(
    Object.values(servicesData).slice(0, 12).map((s) => ({
      name: s.title,
      price: s.startPrice,
      desc: s.tagline
    }))
  )
};

// ── Entity-specific schema for AI search / Google Knowledge Graph ─────────
const homeEntitySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: Object.values(servicesData).slice(0, 10).map((service, i) => {
    const priced = parsePricedOffer(service.startPrice);
    return {
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.tagline,
        url: `https://www.klservisrumah.my/services/${service.slug}`,
        provider: { "@id": "https://www.klservisrumah.my/#organization" },
        offers: {
          "@type": "Offer",
          priceCurrency: "MYR",
          ...(priced.price ? { price: priced.price } : {}),
          ...(priced.priceSpecification
            ? { priceSpecification: priced.priceSpecification }
            : {}),
          availability: "https://schema.org/InStock"
        }
      }
    };
  })
};

export default function Home() {
  return (
    <>
      {/* ── AEO / GEO / SEO JSON-LD (homepage-specific) ────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSpeakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeServicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeOfferCatalogSchema) }}
      />
      {/* ── Entity ItemList schema for AI search surfaces ──────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeEntitySchema) }}
      />

      <Hero />
      <div className="container-default py-10 sm:py-14">
        <SmartServiceFinder />
      </div>
      {/* Trust strip — relocated below the hero so the slideshow leads the page */}
      <TrustBar />
      <TrustBadges />
      <ServicesGrid />

      {/* Popular Local Requests — moved below services to avoid overlap with hero search */}
      <RecentJobsTicker />

      <div className="bg-white section-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsCounter
            stats={[
              // Count derived from the same servicesData registry the FAQ
              // copy and grid use — a hardcoded "13+" previously sat on the
              // same page as "28+ services" (visible inconsistency).
              { value: `${Object.keys(servicesData).length}+`, label: "Home services", trilingualMs: "Perkhidmatan rumah", trilingualZh: "家庭服务" },
              { value: "1,200+", label: "Completed projects", trilingualMs: "Projek siap", trilingualZh: "完成项目" },
              { value: "4.9 / 5", label: "Google rating", trilingualMs: "Penilaian Google", trilingualZh: "谷歌评分" },
              { value: "30 min", label: "Avg response time", trilingualMs: "Purata respons", trilingualZh: "平均响应" }
            ]}
            variant="gradient"
          />
        </div>
      </div>

      <WhyChooseUs />
      <OurProcess />
      <BeforeAfter />
      <FeaturedProjects />
      <GoogleReviews />
      <PricingComparison />
      <NotSureSection />
      <ServiceAreas />

      {/* AEO-optimised internal linking hub (top areas, services, problems, tools) */}
      <HomepageAeoLinks />

      {/* P5-02 / P3-11: FAQPage schema must match visible HTML. The old
          FAQAccordion used a different 5-question set and hid answers behind
          `{isOpen && …}`. This list is the same HOMEPAGE_FAQS array as the
          JSON-LD above, rendered with native <details> so answers are in SSR. */}
      <VisibleFaqList
        className="bg-slate-50 border-y border-slate-100 py-20 sm:py-24"
        headingId="homepage-faq-heading"
        eyebrow="Helpdesk Support"
        heading="Home service questions, answered"
        faqs={HOMEPAGE_FAQS}
      />

      {/* Lightweight social proof sections — match the KLRenovator trust pattern without loading third-party embeds on page load. */}


      <HomeCTA />
    </>
  );
}
