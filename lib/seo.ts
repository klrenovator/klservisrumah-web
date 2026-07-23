import { siteConfig } from "@/config/site";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": siteConfig.name,
    "legalName": siteConfig.parentCompany,
    "url": "https://www.klservisrumah.my",
    "logo": "https://www.klservisrumah.my/logo/logo.png",
    "image": "https://www.klservisrumah.my/logo/logo.png",
    "description": siteConfig.description,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.addressStreet,
      "addressLocality": siteConfig.addressCity,
      "postalCode": siteConfig.addressPostal,
      "addressRegion": siteConfig.addressState,
      "addressCountry": "MY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.geoLat,
      "longitude": siteConfig.geoLng
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.tiktok,
      siteConfig.links.youtube
    ],
    "areaServed": siteConfig.areas.map(area => ({
      "@type": "AdministrativeArea",
      "name": area,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Selangor"
      }
    }))
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": "https://www.klservisrumah.my/logo/logo.png",
    "@id": "https://www.klservisrumah.my/#localbusiness",
    "url": "https://www.klservisrumah.my",
    "telephone": siteConfig.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.addressStreet,
      "addressLocality": siteConfig.addressCity,
      "postalCode": siteConfig.addressPostal,
      "addressRegion": siteConfig.addressState,
      "addressCountry": "MY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.geoLat,
      "longitude": siteConfig.geoLng
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.reviewRating,
      "reviewCount": siteConfig.reviewCount
    }
  };
}

export function getServiceSchema(service: { title: string; description: string; startPrice: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": siteConfig.name,
      "telephone": siteConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.addressStreet,
        "addressLocality": siteConfig.addressCity,
        "postalCode": siteConfig.addressPostal,
        "addressRegion": siteConfig.addressState,
        "addressCountry": "MY"
      }
    },
    "description": service.description,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "MYR",
      "price": service.startPrice.replace(/[^0-9]/g, ""),
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock"
    },
    "areaServed": siteConfig.areas.map(area => ({
      "@type": "AdministrativeArea",
      "name": area
    }))
  };
}

export function getFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.klservisrumah.my${item.item}`
    }))
  };
}
