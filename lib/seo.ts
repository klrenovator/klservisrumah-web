import { siteConfig } from "@/config/site";
import { servicesData, type ServiceDetail } from "@/config/services-data";
import type { AreaDetail } from "@/config/area-data";
import type { SuburbDetail } from "@/config/suburb-data";
import type { BlogPost } from "@/config/blog-data";

const baseUrl = "https://www.klservisrumah.my";

type FAQ = { q: string; a: string };
type ReviewInput = { author: string; rating: number; body: string; datePublished?: string };
type VideoInput = { name: string; description: string; thumbnailUrl: string; uploadDate: string; contentUrl?: string; embedUrl?: string };

function absoluteUrl(path = "") {
  if (path.startsWith("http")) return path;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function aggregateRating() {
  return {
    "@type": "AggregateRating",
    ratingValue: siteConfig.reviewRating,
    reviewCount: siteConfig.reviewCount,
    bestRating: 5,
    worstRating: 1
  };
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

export function getServiceAreaSchema(areas = siteConfig.areas) {
  return areas.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
    containedInPlace: {
      "@type": "Country",
      name: "Malaysia"
    }
  }));
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    url: baseUrl,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.defaultOgImage),
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: postalAddress(),
    geo: geoCoordinates(),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00"
    },
    sameAs: [siteConfig.links.facebook, siteConfig.links.instagram, siteConfig.links.tiktok, siteConfig.links.youtube],
    areaServed: getServiceAreaSchema(),
    aggregateRating: aggregateRating()
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: siteConfig.name,
    image: absoluteUrl(siteConfig.defaultOgImage),
    url: baseUrl,
    telephone: siteConfig.phone,
    priceRange: "$$",
    address: postalAddress(),
    geo: geoCoordinates(),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00"
    },
    areaServed: getServiceAreaSchema(),
    aggregateRating: aggregateRating()
  };
}

export function getOfferCatalogSchema(items: { name: string; price: string; desc?: string }[]) {
  return {
    "@type": "OfferCatalog",
    name: "Service price guide",
    itemListElement: items.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: item.name,
        description: item.desc
      },
      priceCurrency: "MYR",
      price: item.price.replace(/[^0-9.]/g, "") || undefined,
      availability: "https://schema.org/InStock"
    }))
  };
}

export function getWarrantySchema(period: string, scope: string) {
  return {
    "@type": "WarrantyPromise",
    durationOfWarranty: period,
    warrantyScope: scope
  };
}

export function getServiceSchema(service: { title: string; description: string; startPrice: string; slug: string }) {
  const detail = servicesData[service.slug];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/services/${service.slug}#service`,
    serviceType: service.title,
    name: service.title,
    url: `${baseUrl}/services/${service.slug}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${baseUrl}/#organization`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: postalAddress()
    },
    description: service.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "MYR",
      price: service.startPrice.replace(/[^0-9.]/g, ""),
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock"
    },
    hasOfferCatalog: detail ? getOfferCatalogSchema(detail.subServices) : undefined,
    aggregateRating: aggregateRating(),
    areaServed: getServiceAreaSchema()
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
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${baseUrl}${path ?? `/areas/${"parentArea" in area ? area.slug : area.slug}/${service.slug}`}#local-service`,
    name: `${siteConfig.name} — ${service.title} in ${area.name}`,
    url: absoluteUrl(path ?? `/areas/${area.slug}/${service.slug}`),
    telephone: siteConfig.phone,
    priceRange: "$$",
    image: absoluteUrl(service.heroImage),
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: area.lat,
      longitude: area.lng
    },
    areaServed: {
      "@type": "Place",
      name: area.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.lat,
        longitude: area.lng
      }
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        description: service.description,
        hasOfferCatalog: getOfferCatalogSchema(service.subServices)
      },
      priceCurrency: "MYR",
      price: service.startPrice.replace(/[^0-9.]/g, ""),
      availability: "https://schema.org/InStock"
    },
    aggregateRating: aggregateRating()
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
    datePublished: ("date" in post && post.date) || "2026-07-24",
    dateModified: "2026-07-24",
    author: {
      "@type": "Person",
      name: ("author" in post && post.author) || siteConfig.name
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

export function getReviewSchema(reviews: ReviewInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: siteConfig.name,
    aggregateRating: aggregateRating(),
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.author },
      reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5 },
      reviewBody: review.body,
      datePublished: review.datePublished
    }))
  };
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
