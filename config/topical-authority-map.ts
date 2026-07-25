/**
 * Topical Authority Map — KL Servis Rumah
 *
 * Defines the internal linking silos for every service pillar. Mirrors the
 * KLRenovator approach where each key service page links to:
 *   - Related services (within the same vertical)
 *   - Problem / diagnostic pages
 *   - Top area/location pages for that service
 *   - FAQ pages
 *   - Relevant blog posts
 *
 * This file is used by:
 *   - Service detail pages (for "Related Services", "Related Problems", "Service Areas")
 *   - Area detail pages (for "Available Services")
 *   - Blog posts (for "Related Content")
 *   - The homepage AEO links hub
 *
 * Usage: import { getRelatedItems } from "@/config/topical-authority-map"
 */

export type TopicalSilo = {
  serviceSlug: string;
  /** Related service slugs within the same silo */
  relatedServices: string[];
  /** Problem/symptom page slugs that link to this service */
  relatedProblems: string[];
  /** Top area slugs where this service is most requested */
  topAreas: string[];
  /** Related FAQ section identifiers */
  faqSlugs: string[];
  /** Related blog post slugs */
  relatedBlogs: string[];
  /** AI-generated search queries this service should rank for */
  targetQueries: string[];
};

/**
 * HOMEPAGE_SILO — exported for the homepage AEO section to reuse the same
 * curated link lists, ensuring a single source of truth.
 */
export const HOMEPAGE_SILO = {
  topServices: [
    "painting", "plumbing", "ceiling", "waterproofing",
    "handyman", "electrical", "tiling", "flooring",
    "house-renovation", "kitchen-cabinet", "roof-repair", "cctv"
  ],
  topAreas: [
    "kuala-lumpur", "petaling-jaya", "subang-jaya",
    "shah-alam", "puchong", "klang", "cheras", "ampang"
  ],
  topProblems: [
    "peeling-paint-malaysia", "leaking-bathroom",
    "sagging-ceiling", "low-water-pressure",
    "clogged-drain", "toilet-not-flushing",
    "damp-walls-paint-bubbling", "ceiling-mold-stains"
  ],
};

/**
 * Full topical authority map — one entry per service pillar.
 * Each entry defines related content for strong internal linking.
 */
export const topicalAuthorityMap: Record<string, TopicalSilo> = {
  painting: {
    serviceSlug: "painting",
    relatedServices: ["ceiling", "handyman", "house-renovation"],
    relatedProblems: [
      "peeling-paint-malaysia",
      "damp-walls-paint-bubbling",
      "faded-exterior-paint-malaysia",
      "wall-cracks-malaysia"
    ],
    topAreas: [
      "kuala-lumpur", "petaling-jaya", "subang-jaya",
      "shah-alam", "puchong", "klang", "cheras", "ampang",
      "mont-kiara", "bangsar", "kajang", "damansara"
    ],
    faqSlugs: ["painting-faq"],
    relatedBlogs: ["how-to-choose-house-painter", "nippon-vs-dulux-paint"],
    targetQueries: [
      "house painting KL",
      "interior painting cost Malaysia",
      "exterior painting Selangor",
      "best painter near me KL"
    ]
  },
  plumbing: {
    serviceSlug: "plumbing",
    relatedServices: ["waterproofing", "handyman", "house-renovation"],
    relatedProblems: [
      "leaking-bathroom",
      "low-water-pressure",
      "clogged-drain",
      "toilet-not-flushing",
      "burst-pipe-emergency",
      "water-heater-leaking"
    ],
    topAreas: [
      "kuala-lumpur", "petaling-jaya", "subang-jaya",
      "shah-alam", "puchong", "klang", "cheras", "ampang",
      "kajang", "setia-alam", "batu-caves"
    ],
    faqSlugs: ["plumbing-faq"],
    relatedBlogs: ["how-to-choose-plumber", "plumbing-pipe-comparison"],
    targetQueries: [
      "plumber KL",
      "plumbing repair Selangor",
      "leaking pipe repair Malaysia",
      "emergency plumber near me KL"
    ]
  },
  ceiling: {
    serviceSlug: "ceiling",
    relatedServices: ["painting", "handyman", "house-renovation", "electrical"],
    relatedProblems: [
      "sagging-ceiling",
      "ceiling-mold-stains",
      "ceiling-water-stains",
      "wall-cracks-malaysia"
    ],
    topAreas: [
      "kuala-lumpur", "petaling-jaya", "subang-jaya",
      "shah-alam", "puchong", "klang", "cheras", "ampang",
      "damansara", "mont-kiara"
    ],
    faqSlugs: ["ceiling-faq"],
    relatedBlogs: ["how-to-choose-ceiling-contractor", "plaster-vs-gypsum-ceiling"],
    targetQueries: [
      "plaster ceiling KL",
      "ceiling repair Selangor",
      "L-box ceiling installation",
      "gypsum ceiling price Malaysia"
    ]
  },
  waterproofing: {
    serviceSlug: "waterproofing",
    relatedServices: ["plumbing", "ceiling", "painting", "house-renovation"],
    relatedProblems: [
      "leaking-bathroom",
      "ceiling-water-stains",
      "damp-walls-paint-bubbling",
      "roof-leaking-malaysia"
    ],
    topAreas: [
      "kuala-lumpur", "petaling-jaya", "subang-jaya",
      "shah-alam", "puchong", "klang", "cheras", "ampang",
      "kajang", "setia-alam"
    ],
    faqSlugs: ["waterproofing-faq"],
    relatedBlogs: ["how-to-choose-waterproofing-contractor", "pu-vs-membrane-comparison"],
    targetQueries: [
      "waterproofing KL",
      "bathroom waterproofing Selangor",
      "PU grouting Malaysia",
      "roof waterproofing KL"
    ]
  },
  handyman: {
    serviceSlug: "handyman",
    relatedServices: ["painting", "plumbing", "ceiling", "electrical"],
    relatedProblems: [
      "door-not-closing",
      "furniture-assembly",
      "tv-mounting",
      "sagging-ceiling",
      "toilet-not-flushing"
    ],
    topAreas: [
      "kuala-lumpur", "petaling-jaya", "subang-jaya",
      "shah-alam", "puchong", "klang", "cheras", "ampang",
      "mont-kiara", "bangsar"
    ],
    faqSlugs: ["handyman-faq"],
    relatedBlogs: ["how-to-choose-handyman", "tv-mount-types-comparison"],
    targetQueries: [
      "handyman KL",
      "handyman near me Selangor",
      "TV mounting service KL",
      "furniture assembly Malaysia"
    ]
  },
  electrical: {
    serviceSlug: "electrical",
    relatedServices: ["handyman", "ceiling", "house-renovation"],
    relatedProblems: [
      "power-trip-malaysia",
      "ceiling-fan-not-working",
      "water-heater-leaking"
    ],
    topAreas: [
      "kuala-lumpur", "petaling-jaya", "subang-jaya",
      "shah-alam", "puchong", "klang", "cheras", "ampang"
    ],
    faqSlugs: ["electrical-faq"],
    relatedBlogs: [],
    targetQueries: [
      "electrical wiring KL",
      "ceiling fan installation Malaysia",
      "water heater installation KL",
      "downlight installation Selangor"
    ]
  },
  tiling: {
    serviceSlug: "tiling",
    relatedServices: ["waterproofing", "painting", "handyman", "house-renovation"],
    relatedProblems: [
      "loose-tiles-malaysia",
      "broken-tiles-malaysia",
      "damp-walls-paint-bubbling"
    ],
    topAreas: [
      "kuala-lumpur", "petaling-jaya", "subang-jaya",
      "shah-alam", "puchong", "klang", "cheras", "ampang"
    ],
    faqSlugs: ["tiling-faq"],
    relatedBlogs: [],
    targetQueries: [
      "tiling KL",
      "tile installation Selangor",
      "vinyl flooring Malaysia",
      "epoxy flooring KL"
    ]
  },
  flooring: {
    serviceSlug: "flooring",
    relatedServices: ["tiling", "painting", "handyman", "house-renovation"],
    relatedProblems: [
      "loose-tiles-malaysia",
      "damp-walls-paint-bubbling"
    ],
    topAreas: [
      "kuala-lumpur", "petaling-jaya", "subang-jaya",
      "shah-alam", "puchong", "klang", "cheras", "ampang"
    ],
    faqSlugs: ["flooring-faq"],
    relatedBlogs: [],
    targetQueries: [
      "flooring KL",
      "SPC flooring Malaysia",
      "vinyl flooring installation KL",
      "epoxy flooring price Selangor"
    ]
  },
  "house-renovation": {
    serviceSlug: "house-renovation",
    relatedServices: ["painting", "plumbing", "ceiling", "waterproofing", "tiling", "flooring", "electrical", "kitchen-cabinet"],
    relatedProblems: [
      "peeling-paint-malaysia",
      "leaking-bathroom",
      "ceiling-water-stains",
      "wall-cracks-malaysia"
    ],
    topAreas: [
      "kuala-lumpur", "petaling-jaya", "subang-jaya",
      "shah-alam", "puchong", "klang", "cheras", "ampang",
      "mont-kiara", "bangsar"
    ],
    faqSlugs: ["renovation-faq"],
    relatedBlogs: [],
    targetQueries: [
      "house renovation KL",
      "home renovation Malaysia",
      "full house renovation Selangor",
      "renovation contractor near me"
    ]
  }
};

/**
 * Get related items for a given service slug.
 * Falls back to handyman for unknown services.
 */
export function getRelatedItems(slug: string): TopicalSilo {
  return topicalAuthorityMap[slug] || topicalAuthorityMap.handyman;
}

/**
 * Get related service slugs for a given service.
 */
export function getRelatedServices(slug: string): string[] {
  return getRelatedItems(slug).relatedServices;
}

/**
 * Get related problem slugs for a given service.
 */
export function getRelatedProblems(slug: string): string[] {
  return getRelatedItems(slug).relatedProblems;
}

/**
 * Get top area slugs for a given service.
 */
export function getTopAreas(slug: string): string[] {
  return getRelatedItems(slug).topAreas;
}
