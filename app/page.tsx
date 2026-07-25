import React from "react";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/trust-bar";
import { RecentJobsTicker } from "@/components/recent-jobs-ticker";
import { TrustBadges } from "@/components/sections/trust-badges";
import { ServicesGrid } from "@/components/sections/services-grid";
import { StatsCounter } from "@/components/content/stats-counter";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { OurProcess } from "@/components/sections/our-process";
import { BeforeAfter } from "@/components/sections/before-after";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Testimonials } from "@/components/sections/testimonials";
import { GoogleReviews } from "@/components/sections/google-reviews";
import { PricingComparison } from "@/components/sections/pricing-comparison";
import { NotSureSection } from "@/components/sections/not-sure-section";
import { ServiceAreas } from "@/components/sections/service-areas";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { HomeCTA } from "@/components/sections/home-cta";
import { HomepageAeoLinks } from "@/components/sections/homepage-aeo-links";
import { TikTokShowcase } from "@/components/sections/tiktok-showcase";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import {
  getFAQSchema,
  getBreadcrumbSchema,
  getSpeakableSchema,
  getOfferCatalogSchema
} from "@/lib/seo";

// ── Homepage AI-Ready FAQPage (short, direct answers optimised for AEO /
//    Google Gemini / ChatGPT / Perplexity zero-click surfaces) ─────────────
const HOMEPAGE_FAQS = [
  {
    q: "How much do home services cost in KL & Selangor?",
    a: "KL Servis Rumah pricing is transparent and market-rate. Handyman jobs start at RM 80, plumbing repairs from RM 120, plaster ceiling repair from RM 180, single-room painting from RM 450, PU grouting waterproofing from RM 300 and full-house renovation from RM 22,000. Every quote is fixed and itemised before work begins — no hidden fees, no surprise charges."
  },
  {
    q: "Do you offer same-day home service in Kuala Lumpur?",
    a: "Yes. For bookings placed before 11:00 AM we dispatch the nearest available technician in Kuala Lumpur, Petaling Jaya, Subang Jaya, Puchong, Shah Alam, Cheras, Ampang, Klang, Kajang, Kepong or Mont Kiara for a same-day slot. Emergency plumbing leaks and burst pipes get priority routing with a 30–60 minute average arrival time."
  },
  {
    q: "Which home services does KL Servis Rumah provide?",
    a: "We provide 28+ residential and light-commercial services across Klang Valley: interior/exterior painting, plumbing leak repair, plaster ceiling & gypsum partitions, PU-grouting waterproofing, handyman work, electrical wiring, water-heater install, ceiling fans, downlights, tiling, vinyl/SPC flooring, epoxy flooring, roof repair, kitchen cabinet, carpentry, door & lock repair, glass & aluminium, cleaning, CCTV, auto gate, welding and full house renovation."
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
  },
  {
    q: "How do I book home services in KL?",
    a: "Booking is simple: (1) Select your service and location on our homepage quote form, (2) Click 'Get My Instant Quote', (3) You'll be connected to WhatsApp with our team immediately. For urgent issues, call us directly at " + siteConfig.phoneDisplay + ". We respond within 30 minutes during business hours."
  },
  {
    q: "What makes KL Servis Rumah different from other home service providers?",
    a: "Four key differences: (1) Background-verified tradesmen only, (2) Fixed-price quotes before work begins - no variation orders, (3) Written warranties on all work, (4) Insured operations with public liability coverage. Plus: same-day dispatch, transparent pricing, and clean work practices."
  },
  {
    q: "Can I get a quote before booking?",
    a: "Absolutely. Use our instant quote form on the homepage to get pricing in 60 seconds. Or WhatsApp us with photos of your problem - we'll provide a preliminary quote range before scheduling a site visit if needed."
  },
  {
    q: "Do you provide services for commercial properties?",
    a: "Yes. We handle light-commercial projects: office painting, plumbing for shoplots, ceiling & partition for offices, commercial waterproofing, and maintenance contracts. We coordinate with building management for condos and commercial spaces."
  },
  {
    q: "What payment methods do you accept?",
    a: "We offer flexible payment: (1) Pay after service completion (most popular), (2) Milestone payments for larger projects, (3) Online transfer, (4) Cash. No upfront deposits required for standard services."
  }
];

const homepageFaqSchema = getFAQSchema(HOMEPAGE_FAQS);

const homepageBreadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", item: "https://www.klservisrumah.my/" }
]);

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
    { "@type": "State", name: "Selangor" }
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "MYR",
    lowPrice: "80",
    highPrice: "22000",
    offerCount: Object.keys(servicesData).length,
    availability: "https://schema.org/InStock"
  }
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

export default function Home() {
  return (
    <>
      {/* ── AEO / GEO / SEO JSON-LD (homepage-specific) ────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageBreadcrumbSchema) }}
      />
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

      <TrustBar />
      <Hero />
      {/* Floating rotating request toast — shows one item at a time, fades in/out */}
      <RecentJobsTicker />
      <TrustBadges />
      <ServicesGrid />

      <div className="bg-white section-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsCounter
            stats={[
              { value: "13+", label: "Service pillars", trilingualMs: "Pilar perkhidmatan", trilingualZh: "服务项目" },
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
      <Testimonials />
      <GoogleReviews />
      <PricingComparison />
      <NotSureSection />
      <ServiceAreas />

      {/* AEO-optimised internal linking hub (top areas, services, problems, tools) */}
      <HomepageAeoLinks />

      <FAQAccordion />

      {/* Lightweight social proof sections — match the KLRenovator trust pattern without loading third-party embeds on page load. */}
      <TikTokShowcase locale="en" />
      <InstagramFeed locale="en" />

      <HomeCTA />
    </>
  );
}
