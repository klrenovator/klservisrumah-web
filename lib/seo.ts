import { siteConfig } from "@/config/site";
import { toIsoDate } from "@/lib/utils";
import { servicesData, type ServiceDetail } from "@/config/services-data";
import type { AreaDetail } from "@/config/area-data";
import type { SuburbDetail } from "@/config/suburb-data";
import type { BlogPost } from "@/config/blog-data";
import type { SubService } from "@/config/services-data";

const baseUrl = "https://www.klservisrumah.my";

type FAQ = { q: string; a: string };
type ReviewInput = { author: string; rating: number; body: string; datePublished?: string };
type VideoInput = { name: string; description: string; thumbnailUrl: string; uploadDate: string; contentUrl?: string; embedUrl?: string };

function absoluteUrl(path = "") {
  if (path.startsWith("http")) return path;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressStreet,
    addressLocality: siteConfig.addressCity,
    postalCode: siteConfig.addressPostal,
    addressRegion: siteConfig.addressState,
    addressCountry: "MY"
  };
}

function geoCoordinates() {
  return {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geoLat,
    longitude: siteConfig.geoLng
  };
}

/**
 * Build a comprehensive areaServed array with GeoCoordinates for LocalBusiness schema.
 * Matches KLRenovator's rich GeoCoordinate-aware area serving.
 */
export function getServiceAreaSchema(areas = siteConfig.areas) {
  return areas.map((area) => ({
    "@type": "City",
    name: area,
    containedInPlace: {
      "@type": "Country",
      name: "Malaysia"
    }
  }));
}

/**
 * Build a GeoCircle for the service radius (Klang Valley, ~50km from KL centre).
 * Complements per-City areaServed list.
 */
export function buildServiceAreaGeoCircle() {
  return {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geoLat,
      longitude: siteConfig.geoLng
    },
    geoRadius: {
      "@type": "Distance",
      name: "50 km",
      value: 50000,
      unitCode: "MTR"
    }
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    // NB: `taxID` is intentionally omitted from the public Organization
    // schema. Per the permanent handoff rule (Section 56, Rule 2):
    // "SSM number only in backend schema, never in visible HTML text."
    // Search engines do not require it for LocalBusiness / HomeAndConstructionBusiness
    // markup, and the rest of the legal-name + NAP + contact-point data is
    // more than sufficient to anchor the entity in the Knowledge Graph.
    alternateName: ["KL Servis Rumah", "KLSR", "KL Home Services", "Servis Rumah KL", siteConfig.legalName],
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logo),
      width: 512,
      height: 512
    },
    image: absoluteUrl(siteConfig.defaultOgImage),
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    foundingDate: siteConfig.foundingDate,
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: siteConfig.numberOfEmployees
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "RM80 - RM22000",
    currenciesAccepted: "MYR",
    paymentAccepted: "Cash, Bank Transfer, DuitNow",
    address: postalAddress(),
    geo: geoCoordinates(),
    hasMap: siteConfig.links.googleMaps,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00"
    },
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.googleMaps
    ].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: "MY",
        availableLanguage: ["English", "Malay", "Chinese"]
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "emergency",
        areaServed: ["Kuala Lumpur", "Selangor"],
        availableLanguage: ["English", "Malay", "Chinese"]
      },
      {
        "@type": "ContactPoint",
        url: siteConfig.whatsappLink,
        contactType: "sales",
        areaServed: "MY",
        availableLanguage: ["English", "Malay", "Chinese"]
      }
    ],
    knowsAbout: siteConfig.knowsAbout.map((k) => ({
      "@type": "Thing",
      name: k
    })),
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.parentCompany,
      legalName: siteConfig.legalName
    },
    areaServed: [
      ...getServiceAreaSchema(),
      buildServiceAreaGeoCircle()
    ],
    brand: siteConfig.brandsSupported.map((brand) => ({
      "@type": "Brand",
      name: brand
    })),
    serviceType: siteConfig.serviceTypes
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: siteConfig.name,
    description: siteConfig.metaDescription,
    publisher: { "@id": `${baseUrl}/#organization` },
    inLanguage: ["en-MY", "ms-MY", "zh-MY"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * @deprecated Audit P5-01 — do not emit a second business entity.
 * The single site entity is `getOrganizationSchema()` (`HomeAndConstructionBusiness`
 * @ `#organization`). This stub is retained only so any stale import fails
 * loudly at call sites that still expect a full node; prefer deleting call
 * sites instead of restoring the duplicate.
 */
export function getLocalBusinessSchema(): never {
  throw new Error(
    "getLocalBusinessSchema() removed (audit P5-01). Use getOrganizationSchema() / @id #organization."
  );
}

/**
 * Parse a human price string into schema.org Offer fields that keep units.
 * "From RM 14 / sq ft" → price 14 + UnitPriceSpecification referenceUnit
 * "From RM 450 / room" → price 450 + unit Text
 * "On Quote" → no numeric price
 * Bare "RM 14" with no unit is still emitted as a number (callers should pass
 * unit-bearing strings — see services-data startPrice fixes, audit C7/P5-08).
 */
export function parsePricedOffer(price: string): {
  price?: string;
  priceSpecification?: Record<string, unknown>;
} {
  const raw = price.trim();
  if (!raw || !/RM\s*[\d.,]/i.test(raw)) {
    return {
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "MYR",
        description: raw || "Project-specific quotation on request"
      }
    };
  }
  const numeric = raw.replace(/[^0-9.]/g, "");
  if (!numeric) return {};

  // Capture trailing unit after / or "per"
  const unitMatch =
    raw.match(/\/\s*([A-Za-z][A-Za-z0-9.\s-]{0,24})\s*$/) ||
    raw.match(/\bper\s+([A-Za-z][A-Za-z0-9.\s-]{0,24})\s*$/i);
  const unitText = unitMatch ? unitMatch[1].trim() : undefined;

  // Schema.org unit codes where we know them
  const unitCodeMap: Record<string, string> = {
    "sq ft": "FTK",
    sqft: "FTK",
    "sq. ft": "FTK",
    "sq. ft.": "FTK",
    "kaki persegi": "FTK",
    "平方英尺": "FTK",
    room: "C62",
    bilik: "C62",
    point: "C62",
    job: "C62",
    task: "C62"
  };
  const unitCode = unitText ? unitCodeMap[unitText.toLowerCase()] : undefined;

  if (unitText) {
    return {
      price: numeric,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: numeric,
        priceCurrency: "MYR",
        unitText,
        ...(unitCode ? { unitCode } : {}),
        description: raw.startsWith("From") || raw.startsWith("Dari") || raw.startsWith("从")
          ? raw
          : `Starting from ${raw}`
      }
    };
  }

  return {
    price: numeric,
    priceSpecification: {
      "@type": "PriceSpecification",
      price: numeric,
      priceCurrency: "MYR",
      description: raw.startsWith("From") || raw.startsWith("Dari") || raw.startsWith("从")
        ? raw
        : `Starting from ${raw}`
    }
  };
}

export function getOfferCatalogSchema(items: { name: string; price: string; desc?: string }[]) {
  return {
    "@type": "OfferCatalog",
    name: "Service price guide",
    itemListElement: items.map((item) => {
      const priced = parsePricedOffer(item.price);
      return {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.name,
          description: item.desc
        },
        priceCurrency: "MYR",
        ...(priced.price ? { price: priced.price } : {}),
        ...(priced.priceSpecification ? { priceSpecification: priced.priceSpecification } : {}),
        availability: "https://schema.org/InStock"
      };
    })
  };
}

export function getWarrantySchema(period: string, scope: string) {
  return {
    "@type": "WarrantyPromise",
    durationOfWarranty: period,
    warrantyScope: scope
  };
}

export function getServiceSchema(service: { title: string; description: string; startPrice: string; slug: string; path?: string; subServices?: SubService[] }) {
  const detail = servicesData[service.slug];
  const heroImage = detail?.heroImage || siteConfig.defaultOgImage;
  // Localised service pages (`/ms/services/*`, `/zh/services/*`) pass their own
  // path so the schema's @id/url point at the page that actually renders it,
  // and their localized sub-services so the offer catalog is in-language too.
  const servicePath = service.path ?? `/services/${service.slug}`;
  const catalogSubServices = service.subServices ?? detail?.subServices;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}${servicePath}#service`,
    serviceType: service.title,
    name: service.title,
    url: `${baseUrl}${servicePath}`,
    image: absoluteUrl(heroImage),
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${baseUrl}/#organization`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: postalAddress()
    },
    description: service.description,
    // Quote-only services (e.g. awning installation) publish no numeric price —
    // emit an availability-only Offer rather than an invalid/empty price, which
    // would mislead structured-data consumers and contradict the visible page.
    // Unit-bearing prices (e.g. "RM 14 / sq ft") keep their unit via
    // UnitPriceSpecification so schema does not claim flooring costs "RM 14"
    // (audit C7 / P5-08).
    offers: (() => {
      const priced = parsePricedOffer(service.startPrice);
      if (!priced.price) {
        return {
          "@type": "Offer",
          priceCurrency: "MYR",
          availability: "https://schema.org/InStock",
          priceSpecification: priced.priceSpecification ?? {
            "@type": "PriceSpecification",
            priceCurrency: "MYR",
            description: "Project-specific quotation on request"
          }
        };
      }
      return {
        "@type": "Offer",
        priceCurrency: "MYR",
        price: priced.price,
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        priceSpecification: priced.priceSpecification
      };
    })(),
    hasOfferCatalog: catalogSubServices ? getOfferCatalogSchema(catalogSubServices) : undefined,
    areaServed: [
      ...getServiceAreaSchema(),
      buildServiceAreaGeoCircle()
    ]
  };
}

function getTypedServiceSchema(service: ServiceDetail, extra: Record<string, unknown> = {}) {
  return {
    ...getServiceSchema({ title: service.title, description: service.description, startPrice: service.startPrice, slug: service.slug }),
    hasOfferCatalog: getOfferCatalogSchema(service.subServices),
    ...extra
  };
}

export function getPaintingServiceSchema() {
  return getTypedServiceSchema(servicesData.painting);
}

export function getPlumbingServiceSchema() {
  return getTypedServiceSchema(servicesData.plumbing);
}

export function getCeilingServiceSchema() {
  return getTypedServiceSchema(servicesData.ceiling);
}

export function getWaterproofingServiceSchema() {
  return getTypedServiceSchema(servicesData.waterproofing, {
    warranty: getWarrantySchema("P5Y", servicesData.waterproofing.warranty)
  });
}

export function getHandymanServiceSchema() {
  return getTypedServiceSchema(servicesData.handyman);
}

export function getLocalBusinessServiceSchema(area: AreaDetail | SuburbDetail, service: ServiceDetail, path?: string) {
  const pagePath = path ?? `/areas/${area.slug}/${service.slug}`;

  // Location landing pages describe where one real business offers a service;
  // they are not additional LocalBusiness branches. Service + areaServed keeps
  // the markup truthful and avoids conflicting the Mont Kiara business address
  // with a different locality's centroid.
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}${pagePath}#service`,
    name: `${service.title} in ${area.name}`,
    serviceType: service.title,
    description: service.description,
    url: absoluteUrl(pagePath),
    image: absoluteUrl(service.heroImage),
    provider: { "@id": `${baseUrl}/#organization` },
    areaServed: {
      "@type": "Place",
      name: area.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.lat,
        longitude: area.lng
      }
    },
    offers: (() => {
      const priced = parsePricedOffer(service.startPrice);
      return {
        "@type": "Offer",
        priceCurrency: "MYR",
        ...(priced.price ? { price: priced.price } : {}),
        ...(priced.priceSpecification ? { priceSpecification: priced.priceSpecification } : {}),
        availability: "https://schema.org/InStock"
      };
    })(),
    hasOfferCatalog: getOfferCatalogSchema(service.subServices)
  };
}

export function getArticleSchema(post: BlogPost | { title: string; excerpt?: string; content?: string; slug: string; date?: string; author?: string; coverImage?: string; category?: string; path?: string }) {
  const path = "path" in post && post.path ? post.path : `/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: "excerpt" in post ? post.excerpt : undefined,
    image: absoluteUrl(("coverImage" in post && post.coverImage) || siteConfig.defaultOgImage),
    // Must be ISO-8601 — the blog data stores display strings like "July 20, 2026",
    // which Google rejects as an invalid date and drops the Article rich result.
    datePublished: toIsoDate("date" in post ? post.date : undefined),
    dateModified: toIsoDate("date" in post ? post.date : undefined),
    // Audit P5-05: "KL Servis Rumah Editorial Team" is an organization, not a
    // Person. Emit Organization until real human author entities exist. A
    // Person typed with the company name is invalid schema and weak E-E-A-T.
    author: {
      "@type": "Organization",
      name: ("author" in post && post.author) || siteConfig.name,
      url: baseUrl
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo)
      }
    },
    articleSection: ("category" in post && post.category) || "Home Services",
    mainEntityOfPage: absoluteUrl(path)
  };
}

export function getHowToSchema(steps: { title: string; desc: string }[], supplies: string[] = [], tools: string[] = []) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Professional home service process",
    supply: supplies.map((supply) => ({ "@type": "HowToSupply", name: supply })),
    tool: tools.map((tool) => ({ "@type": "HowToTool", name: tool })),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.desc
    }))
  };
}

/**
 * @deprecated Audit P5-03 — unused Product-wrapped review schema that would
 * attach AggregateRating to a fake Product ("KL Servis Rumah") with a dummy
 * RM 80 offer. Do not call. When reviews are owner-verified, emit
 * AggregateRating + Review on the real LocalBusiness/Organization entity
 * where the reviews are visibly shown (homepage/service), never as a Product.
 */
export function getReviewSchema(_reviews: ReviewInput[]): never {
  throw new Error(
    "getReviewSchema() removed (audit P5-03). Do not emit Product-wrapped AggregateRating; verify review source first."
  );
}

export function getVideoSchema(video: VideoInput) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: [absoluteUrl(video.thumbnailUrl)],
    uploadDate: video.uploadDate,
    contentUrl: video.contentUrl ? absoluteUrl(video.contentUrl) : undefined,
    embedUrl: video.embedUrl ? absoluteUrl(video.embedUrl) : undefined
  };
}

export function getFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.item)
    }))
  };
}

export function getSpeakableSchema(cssSelectors: string[] = ["h1", "h2", ".faq-answer"]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors
    }
  };
}

export function getWebApplicationSchema(name: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url: absoluteUrl(path),
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MYR"
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl
    }
  };
}
