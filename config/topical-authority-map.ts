/**
 * Topical Authority Map — KL Servis Rumah
 *
 * Single source of truth for the internal-linking silo of every service pillar.
 * Mirrors the KLRenovator approach where each key service page links to:
 *   - Related services (within the same vertical)
 *   - Problem / diagnostic pages
 *   - Top area/location pages for that service
 *   - FAQ pages
 *   - Relevant blog posts
 *
 * This file is used by:
 *   - Service detail pages (for "Related Services", "Related Problems",
 *     "Related Blogs", "Service Areas")
 *   - Blog posts (for "Related Content")
 *   - The homepage AEO links hub
 *   - The smart-finder search index
 *   - Future locale-specialty pages (typed specialty relationships)
 *
 * Every slug referenced below is validated at build/test time against the
 * source-of-truth data (`services-data`, `problem-data`, `blog-data`) by
 * `validateTopicalAuthorityMap()` in `config/topical-authority-validate.ts` —
 * no silent Handyman fallback.
 *
 * PERFORMANCE NOTE — why the validator lives in a sibling file
 * ------------------------------------------------------------
 * This module is imported by client components (`related-services.tsx`,
 * `related-blogs.tsx`). The validator needs `services-data` (~470 KB) and
 * `problem-data` (~207 KB); the runtime lookups below need neither — they only
 * read the static literal in this file. Keeping the two together dragged both
 * registries into the browser bundle of every service and sub-service page.
 * Keep this module free of data-registry imports.
 */


export type SpecialtySilo = {
  /** Kebab-case specialty slug (sub-service) under the parent service. */
  specialtySlug: string;
  /** Valid problem/symptom page slugs most relevant to this specialty. */
  relatedProblems: string[];
  /** Valid blog post slugs most relevant to this specialty. */
  relatedBlogs: string[];
};

export type TopicalSilo = {
  serviceSlug: string;
  /** Related service slugs within the same vertical. */
  relatedServices: string[];
  /** Problem/symptom page slugs that link to this service. */
  relatedProblems: string[];
  /** Top area slugs where this service is most requested. */
  topAreas: string[];
  /** Related FAQ section identifiers. */
  faqSlugs: string[];
  /** Related blog post slugs. */
  relatedBlogs: string[];
  /** AI-generated search queries this service should rank for. */
  targetQueries: string[];
  /** Typed relationships for each of the service's specialties. */
  specialties: SpecialtySilo[];
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
    "sagging-plaster-ceiling", "low-water-pressure",
    "clogged-drain", "toilet-not-flushing",
    "damp-walls-paint-bubbling", "ceiling-mold-stains"
  ],
};

const KL_SELANGOR_AREAS = [
  "kuala-lumpur", "petaling-jaya", "subang-jaya",
  "shah-alam", "puchong", "klang", "cheras", "ampang",
  "kajang", "damansara"
];

/* ──────────────────────────────────────────────────────────────────────────
 * Valid slug pools — kept as typed constants so every reference below can be
 * linted/validated and so the specialty map reuses only verified slugs.
 * ────────────────────────────────────────────────────────────────────────── */

const PROB: Record<string, string[]> = {
  painting: ["peeling-paint-malaysia", "faded-exterior-paint-malaysia", "yellowing-white-walls", "paint-cracking-hairline-walls"],
  plumbing: ["burst-pipe-emergency", "leaking-bathroom", "low-water-pressure", "blocked-drain-toilet", "clogged-drain", "toilet-not-flushing", "water-heater-not-heating"],
  ceiling: ["ceiling-mold-stains", "sagging-plaster-ceiling", "cracked-ceiling-joints", "condensation-ceiling-mold", "ceiling-cornice-crack"],
  waterproofing: ["damp-walls-paint-bubbling", "ceiling-leak-after-rain", "bathroom-leak-upper-floor", "balcony-leak-condo", "roof-leak-rainy-season", "wall-dampness-rising", "swimming-pool-leak-balcony", "concrete-slab-crack-leak"],
  handyman: ["loose-door-hinge", "tv-fell-off-wall", "stuck-window-lock", "ikea-furniture-assembly-help", "curtain-track-falling"],
  "house-renovation": ["old-condo-full-refurbishment", "wall-cracks-settlement-masonry", "popping-tiles-buckling", "old-bathroom-plumbing-tiles", "old-kitchen-cabinet-plumbing-damage"],
  electrical: ["rccb-tripping-kl", "power-tripping-frequently", "downlight-flickering"],
  "water-heater": ["water-heater-not-heating"],
  "ceiling-fan": ["ceiling-fan-wobbling"],
  lighting: ["downlight-flickering"],
  tiling: ["loose-hollow-tiles", "cracked-tile-grout", "popping-tiles-buckling"],
  "plaster-ceiling": ["cracked-ceiling-joints", "damaged-gypsum-partition-wall", "sagging-plaster-ceiling"],
  "skim-coat": ["peeling-skim-coat", "uneven-wall-surface-skim"],
  flooring: ["spc-flooring-peeling-edges", "vinyl-flooring-lifting-edges", "uneven-floor-subfloor-leveling", "loose-hollow-tiles"],
  "epoxy-flooring": ["epoxy-floor-yellowing"],
  "roof-repair": ["clogged-gutter-leaking", "cracked-roof-tiles"],
  "kitchen-cabinet": ["kitchen-cabinet-door-misaligned", "cabinet-door-sagging"],
  carpentry: ["wardrobe-door-not-closing", "wardrobe-door-jamming"],
  door: ["door-scraping-floor", "digital-smart-lock-installation", "door-hinge-sagging", "loose-door-hinge"],
  "window-repair": ["sliding-window-stuck", "stuck-sliding-window", "stuck-window-lock", "rusting-window-grille"],
  locksmith: ["smart-lock-not-working", "locked-out-of-house"],
  "glass-aluminium": ["shower-screen-leaking", "shower-screen-water-leak", "sliding-window-stuck"],
  cctv: ["cctv-not-recording", "cctv-not-recording-storage-full"],
  autogate: ["autogate-not-closing", "autogate-remote-not-working"],
  welding: ["rusting-window-grille", "loose-metal-gate-hinges", "autogate-not-closing"],
  "awning-installation": ["clogged-gutter-leaking", "roof-leak-rainy-season", "ceiling-leak-after-rain", "rusting-window-grille"],
  aircon: ["aircon-not-cold", "aircon-water-leaking", "aircon-making-noise", "aircon-bad-smell", "aircon-weak-airflow", "aircon-not-turning-on", "aircon-tripping-mcb", "ice-forming-on-aircon", "aircon-remote-display-issue"],
  "kitchen-renovation": ["old-kitchen-cabinet-plumbing-damage", "kitchen-cabinet-door-misaligned", "cabinet-door-sagging", "clogged-drain"],
  "bathroom-renovation": ["old-bathroom-plumbing-tiles", "leaking-bathroom", "bathroom-leak-upper-floor", "toilet-not-flushing", "loose-hollow-tiles", "cracked-tile-grout"],
};

const BLOG: Record<string, string[]> = {
  painting: ["5-tips-choosing-paint-colors-malaysia", "when-to-repaint-your-house-malaysia", "when-to-repaint-condo-vs-repaint-terrace-house"],
  plumbing: ["hidden-water-leak-detection-kl"],
  ceiling: ["gypsum-vs-plaster-ceiling-malaysia"],
  waterproofing: ["how-to-fix-leaking-ceiling-without-tile-hacking", "pu-grouting-vs-full-membrane-waterproofing", "how-to-fix-a-leaking-roof-in-kl"],
  handyman: ["tv-wall-mounting-safety-guide"],
  "house-renovation": ["cost-of-full-house-renovation-kl", "how-to-hire-honest-contractor-malaysia"],
  electrical: ["safe-electrical-wiring-upgrade-old-house"],
  "water-heater": [],
  "ceiling-fan": [],
  lighting: [],
  tiling: [],
  "plaster-ceiling": ["gypsum-vs-plaster-ceiling-malaysia"],
  "skim-coat": ["when-to-repaint-your-house-malaysia"],
  flooring: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"],
  "epoxy-flooring": [],
  "roof-repair": ["how-to-fix-a-leaking-roof-in-kl"],
  "kitchen-cabinet": ["kitchen-cabinet-material-guide-malaysia"],
  carpentry: [],
  door: ["smart-lock-buying-guide-malaysia-2026"],
  "window-repair": ["pu-grouting-vs-full-membrane-waterproofing"],
  locksmith: ["smart-lock-buying-guide-malaysia-2026"],
  "glass-aluminium": ["how-to-fix-leaking-ceiling-without-tile-hacking"],
  cctv: ["cctv-installation-buying-guide-kl"],
  autogate: ["auto-gate-installation-guide-malaysia"],
  welding: ["auto-gate-installation-guide-malaysia", "how-to-fix-a-leaking-roof-in-kl"],
  "awning-installation": ["how-to-choose-right-awning-malaysia", "polycarbonate-vs-metal-vs-acp-awning-malaysia", "car-porch-awning-guide-malaysia", "how-awning-pricing-works-malaysia", "awning-maintenance-leaks-rust-water-pooling", "how-to-fix-a-leaking-roof-in-kl", "roof-repair-waterproofing-kl", "roof-leak-diagnosis-repair-kl"],
  aircon: ["aircon-service-price-malaysia-2026", "chemical-wash-vs-chemical-overhaul-aircon", "aircon-gas-topup-guide-malaysia", "aircon-installation-cost-malaysia", "how-often-to-service-aircon-malaysia"],
  "kitchen-renovation": ["kitchen-cabinet-material-guide-malaysia", "cost-of-full-house-renovation-kl"],
  "bathroom-renovation": ["how-to-fix-leaking-ceiling-without-tile-hacking", "pu-grouting-vs-full-membrane-waterproofing"],
};

/* ──────────────────────────────────────────────────────────────────────────
 * Full topical authority map — one entry per service pillar (all 28).
 * No entry falls back to Handyman; every slug is drawn from the pools above.
 * ────────────────────────────────────────────────────────────────────────── */
export const topicalAuthorityMap: Record<string, TopicalSilo> = {
  painting: {
    serviceSlug: "painting",
    relatedServices: ["ceiling", "waterproofing", "skim-coat", "tiling", "house-renovation"],
    relatedProblems: PROB.painting,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["painting-faq"],
    relatedBlogs: BLOG.painting,
    targetQueries: ["house painting KL", "interior painting cost Malaysia", "exterior painting Selangor", "best painter near me KL"],
    specialties: [
      { specialtySlug: "interior-house-painting", relatedProblems: ["peeling-paint-malaysia", "yellowing-white-walls", "paint-cracking-hairline-walls"], relatedBlogs: ["5-tips-choosing-paint-colors-malaysia", "when-to-repaint-your-house-malaysia"] },
      { specialtySlug: "exterior-house-painting", relatedProblems: ["faded-exterior-paint-malaysia", "peeling-paint-malaysia"], relatedBlogs: ["when-to-repaint-your-house-malaysia", "when-to-repaint-condo-vs-repaint-terrace-house"] },
      { specialtySlug: "commercial-and-office-painting", relatedProblems: ["peeling-paint-malaysia", "paint-cracking-hairline-walls"], relatedBlogs: ["5-tips-choosing-paint-colors-malaysia"] },
      { specialtySlug: "wall-crack-and-moisture-repair", relatedProblems: ["damp-walls-paint-bubbling", "peeling-paint-malaysia", "paint-cracking-hairline-walls"], relatedBlogs: ["when-to-repaint-your-house-malaysia"] },
      { specialtySlug: "condo-and-apartment-painting", relatedProblems: ["peeling-paint-malaysia", "yellowing-white-walls"], relatedBlogs: ["when-to-repaint-condo-vs-repaint-terrace-house"] },
      { specialtySlug: "ceiling-painting", relatedProblems: ["peeling-paint-malaysia"], relatedBlogs: ["when-to-repaint-your-house-malaysia"] },
      { specialtySlug: "wall-preparation-and-priming", relatedProblems: ["paint-cracking-hairline-walls", "peeling-paint-malaysia"], relatedBlogs: ["5-tips-choosing-paint-colors-malaysia"] },
      { specialtySlug: "feature-wall-painting", relatedProblems: ["yellowing-white-walls"], relatedBlogs: ["5-tips-choosing-paint-colors-malaysia"] },
    ],
  },
  plumbing: {
    serviceSlug: "plumbing",
    relatedServices: ["waterproofing", "handyman", "water-heater", "house-renovation"],
    relatedProblems: PROB.plumbing,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["plumbing-faq"],
    relatedBlogs: BLOG.plumbing,
    targetQueries: ["plumber KL", "plumbing repair Selangor", "leaking pipe repair Malaysia", "emergency plumber near me KL", "bathroom plumbing renovation KL", "kitchen plumbing renovation Selangor", "pipe replacement Malaysia", "shower installation KL"],
    specialties: [
      { specialtySlug: "water-leakage-diagnosis-and-repair", relatedProblems: ["burst-pipe-emergency", "leaking-bathroom", "water-heater-not-heating"], relatedBlogs: ["hidden-water-leak-detection-kl"] },
      { specialtySlug: "toilet-tap-and-sink-installation", relatedProblems: ["low-water-pressure", "toilet-not-flushing"], relatedBlogs: [] },
      { specialtySlug: "drain-unclogging-and-cleaning", relatedProblems: ["blocked-drain-toilet", "clogged-drain", "toilet-not-flushing"], relatedBlogs: [] },
      { specialtySlug: "water-heater-and-pump-installation", relatedProblems: ["low-water-pressure", "water-heater-not-heating"], relatedBlogs: [] },
      { specialtySlug: "bathroom-plumbing-renovation", relatedProblems: ["leaking-bathroom", "bathroom-leak-upper-floor"], relatedBlogs: ["hidden-water-leak-detection-kl"] },
      { specialtySlug: "kitchen-plumbing-renovation", relatedProblems: ["clogged-drain", "low-water-pressure"], relatedBlogs: ["hidden-water-leak-detection-kl"] },
      { specialtySlug: "pipe-replacement-and-rerouting", relatedProblems: ["burst-pipe-emergency", "low-water-pressure"], relatedBlogs: ["hidden-water-leak-detection-kl"] },
      { specialtySlug: "drainage-and-floor-trap-upgrade", relatedProblems: ["blocked-drain-toilet", "clogged-drain"], relatedBlogs: [] },
      { specialtySlug: "shower-and-rain-shower-installation", relatedProblems: ["low-water-pressure", "leaking-bathroom"], relatedBlogs: [] },
      { specialtySlug: "renovation-plumbing-work", relatedProblems: ["burst-pipe-emergency", "leaking-bathroom"], relatedBlogs: ["hidden-water-leak-detection-kl", "cost-of-full-house-renovation-kl"] },
    ],
  },
  ceiling: {
    serviceSlug: "ceiling",
    relatedServices: ["plaster-ceiling", "painting", "waterproofing", "electrical", "house-renovation"],
    relatedProblems: PROB.ceiling,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["ceiling-faq"],
    relatedBlogs: BLOG.ceiling,
    targetQueries: ["plaster ceiling KL", "ceiling repair Selangor", "L-box ceiling installation", "gypsum ceiling price Malaysia"],
    specialties: [
      { specialtySlug: "water-damaged-ceiling-repair", relatedProblems: ["ceiling-mold-stains", "ceiling-leak-after-rain", "condensation-ceiling-mold", "sagging-plaster-ceiling"], relatedBlogs: ["how-to-fix-leaking-ceiling-without-tile-hacking"] },
      { specialtySlug: "plaster-ceiling-installation", relatedProblems: ["cracked-ceiling-joints", "sagging-plaster-ceiling", "ceiling-cornice-crack"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "gypsum-board-partition-wall", relatedProblems: ["cracked-ceiling-joints", "ceiling-cornice-crack"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "cornice-and-l-box-concealed-light-trough", relatedProblems: ["ceiling-cornice-crack", "cracked-ceiling-joints"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
    ],
  },
  waterproofing: {
    serviceSlug: "waterproofing",
    relatedServices: ["plumbing", "roof-repair", "painting", "ceiling", "house-renovation"],
    relatedProblems: PROB.waterproofing,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["waterproofing-faq"],
    relatedBlogs: BLOG.waterproofing,
    targetQueries: ["waterproofing KL", "bathroom waterproofing Selangor", "PU grouting Malaysia", "roof waterproofing KL", "toilet waterproofing KL", "balcony waterproofing Selangor", "water leakage repair KL", "ceiling water damage repair"],
    specialties: [
      { specialtySlug: "pu-high-pressure-injection-grouting", relatedProblems: ["concrete-slab-crack-leak", "ceiling-leak-after-rain", "wall-dampness-rising"], relatedBlogs: ["pu-grouting-vs-full-membrane-waterproofing"] },
      { specialtySlug: "bathroom-and-wet-area-waterproofing", relatedProblems: ["bathroom-leak-upper-floor", "damp-walls-paint-bubbling", "swimming-pool-leak-balcony"], relatedBlogs: ["how-to-fix-leaking-ceiling-without-tile-hacking"] },
      { specialtySlug: "roof-and-concrete-slab-waterproofing", relatedProblems: ["roof-leak-rainy-season", "balcony-leak-condo", "concrete-slab-crack-leak"], relatedBlogs: ["how-to-fix-a-leaking-roof-in-kl"] },
      { specialtySlug: "wall-dampness-and-efflorescence-repair", relatedProblems: ["wall-dampness-rising", "damp-walls-paint-bubbling", "balcony-leak-condo"], relatedBlogs: ["how-to-fix-leaking-ceiling-without-tile-hacking"] },
      { specialtySlug: "toilet-waterproofing", relatedProblems: ["bathroom-leak-upper-floor", "damp-walls-paint-bubbling", "ceiling-leak-after-rain"], relatedBlogs: ["how-to-fix-leaking-ceiling-without-tile-hacking", "pu-grouting-vs-full-membrane-waterproofing"] },
      { specialtySlug: "balcony-waterproofing", relatedProblems: ["balcony-leak-condo", "swimming-pool-leak-balcony", "concrete-slab-crack-leak"], relatedBlogs: ["how-to-fix-a-leaking-roof-in-kl"] },
      { specialtySlug: "concrete-slab-and-car-porch-waterproofing", relatedProblems: ["concrete-slab-crack-leak", "roof-leak-rainy-season", "swimming-pool-leak-balcony"], relatedBlogs: ["how-to-fix-a-leaking-roof-in-kl"] },
      { specialtySlug: "water-leakage-repair", relatedProblems: ["wall-dampness-rising", "ceiling-leak-after-rain", "bathroom-leak-upper-floor"], relatedBlogs: ["pu-grouting-vs-full-membrane-waterproofing", "how-to-fix-leaking-ceiling-without-tile-hacking"] },
      { specialtySlug: "ceiling-water-damage-repair", relatedProblems: ["ceiling-leak-after-rain", "roof-leak-rainy-season", "bathroom-leak-upper-floor"], relatedBlogs: ["how-to-fix-leaking-ceiling-without-tile-hacking"] },
      { specialtySlug: "waterproofing-repair-and-re-coating", relatedProblems: ["concrete-slab-crack-leak", "wall-dampness-rising", "roof-leak-rainy-season"], relatedBlogs: ["pu-grouting-vs-full-membrane-waterproofing", "how-to-fix-a-leaking-roof-in-kl"] },
    ],
  },
  handyman: {
    serviceSlug: "handyman",
    relatedServices: ["electrical", "plumbing", "painting", "door", "ceiling-fan"],
    relatedProblems: PROB.handyman,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["handyman-faq"],
    relatedBlogs: BLOG.handyman,
    targetQueries: ["handyman KL", "handyman near me Selangor", "TV mounting service KL", "furniture assembly Malaysia"],
    specialties: [
      { specialtySlug: "heavy-tv-wall-mounting", relatedProblems: ["tv-fell-off-wall", "curtain-track-falling"], relatedBlogs: ["tv-wall-mounting-safety-guide"] },
      { specialtySlug: "door-hinge-and-lockset-repair", relatedProblems: ["loose-door-hinge", "stuck-window-lock"], relatedBlogs: [] },
      { specialtySlug: "furniture-assembly-ikea-taobao", relatedProblems: ["ikea-furniture-assembly-help"], relatedBlogs: [] },
      { specialtySlug: "curtains-blinds-and-shelves-hanging", relatedProblems: ["curtain-track-falling", "tv-fell-off-wall"], relatedBlogs: [] },
    ],
  },
  "house-renovation": {
    serviceSlug: "house-renovation",
    relatedServices: ["painting", "plumbing", "ceiling", "electrical", "tiling", "flooring", "kitchen-cabinet", "carpentry", "kitchen-renovation", "bathroom-renovation"],
    relatedProblems: PROB["house-renovation"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["renovation-faq"],
    relatedBlogs: BLOG["house-renovation"],
    targetQueries: ["house renovation KL", "home renovation Malaysia", "full house renovation Selangor", "renovation contractor near me"],
    specialties: [
      { specialtySlug: "full-house-renovation-package", relatedProblems: ["old-condo-full-refurbishment", "wall-cracks-settlement-masonry"], relatedBlogs: ["cost-of-full-house-renovation-kl", "how-to-hire-honest-contractor-malaysia"] },
      { specialtySlug: "partial-house-renovation", relatedProblems: ["popping-tiles-buckling", "old-condo-full-refurbishment"], relatedBlogs: ["cost-of-full-house-renovation-kl"] },
      { specialtySlug: "terrace-house-renovation", relatedProblems: ["wall-cracks-settlement-masonry", "old-condo-full-refurbishment"], relatedBlogs: ["cost-of-full-house-renovation-kl"] },
      { specialtySlug: "semi-d-renovation", relatedProblems: ["wall-cracks-settlement-masonry", "old-condo-full-refurbishment"], relatedBlogs: ["cost-of-full-house-renovation-kl"] },
      { specialtySlug: "bungalow-renovation", relatedProblems: ["wall-cracks-settlement-masonry", "old-condo-full-refurbishment"], relatedBlogs: ["cost-of-full-house-renovation-kl"] },
      { specialtySlug: "condo-interior-refurbishment", relatedProblems: ["old-condo-full-refurbishment"], relatedBlogs: ["cost-of-full-house-renovation-kl"] },
      { specialtySlug: "apartment-renovation", relatedProblems: ["old-condo-full-refurbishment"], relatedBlogs: ["cost-of-full-house-renovation-kl"] },
      { specialtySlug: "kitchen-and-bathroom-makeover", relatedProblems: ["old-bathroom-plumbing-tiles", "old-kitchen-cabinet-plumbing-damage"], relatedBlogs: ["kitchen-cabinet-material-guide-malaysia", "cost-of-full-house-renovation-kl"] },
      { specialtySlug: "house-extension", relatedProblems: ["wall-cracks-settlement-masonry", "old-condo-full-refurbishment"], relatedBlogs: ["cost-of-full-house-renovation-kl"] },
      { specialtySlug: "commercial-shoplot-renovation", relatedProblems: ["damaged-gypsum-partition-wall", "old-condo-full-refurbishment"], relatedBlogs: ["how-to-hire-honest-contractor-malaysia"] },
      { specialtySlug: "office-renovation-and-fit-out", relatedProblems: ["damaged-gypsum-partition-wall", "old-condo-full-refurbishment"], relatedBlogs: ["how-to-hire-honest-contractor-malaysia", "cost-of-full-house-renovation-kl"] },
      { specialtySlug: "retail-shop-renovation", relatedProblems: ["damaged-gypsum-partition-wall", "old-condo-full-refurbishment"], relatedBlogs: ["how-to-hire-honest-contractor-malaysia"] },
      { specialtySlug: "restaurant-and-f-and-b-renovation", relatedProblems: ["old-kitchen-cabinet-plumbing-damage", "old-condo-full-refurbishment"], relatedBlogs: ["how-to-hire-honest-contractor-malaysia"] },
      { specialtySlug: "office-partition-and-workspace-build", relatedProblems: ["damaged-gypsum-partition-wall", "old-condo-full-refurbishment"], relatedBlogs: ["how-to-hire-honest-contractor-malaysia"] },
      { specialtySlug: "renovation-contractor-services", relatedProblems: ["old-condo-full-refurbishment", "wall-cracks-settlement-masonry"], relatedBlogs: ["how-to-hire-honest-contractor-malaysia"] },
    ],
  },
  electrical: {
    serviceSlug: "electrical",
    relatedServices: ["lighting", "ceiling-fan", "handyman", "house-renovation"],
    relatedProblems: PROB.electrical,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["electrical-faq"],
    relatedBlogs: BLOG.electrical,
    targetQueries: ["electrical wiring KL", "ceiling fan installation Malaysia", "water heater installation KL", "downlight installation Selangor", "house rewiring KL", "kitchen electrical renovation Selangor", "bathroom electrical wiring Malaysia", "renovation electrician KL"],
    specialties: [
      { specialtySlug: "new-power-point-and-switch-installation", relatedProblems: ["power-tripping-frequently", "downlight-flickering"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house"] },
      { specialtySlug: "db-box-upgrade-and-rewiring", relatedProblems: ["rccb-tripping-kl", "power-tripping-frequently"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house"] },
      { specialtySlug: "lighting-point-and-downlight-installation", relatedProblems: ["downlight-flickering"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house"] },
      { specialtySlug: "aircond-water-heater-and-oven-point", relatedProblems: ["power-tripping-frequently", "downlight-flickering"], relatedBlogs: [] },
      { specialtySlug: "house-rewiring", relatedProblems: ["rccb-tripping-kl", "power-tripping-frequently"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house"] },
      { specialtySlug: "additional-power-points", relatedProblems: ["power-tripping-frequently"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house"] },
      { specialtySlug: "switch-installation", relatedProblems: ["downlight-flickering"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house"] },
      { specialtySlug: "kitchen-electrical", relatedProblems: ["rccb-tripping-kl", "power-tripping-frequently"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house"] },
      { specialtySlug: "bathroom-electrical", relatedProblems: ["rccb-tripping-kl", "water-heater-not-heating"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house"] },
      { specialtySlug: "renovation-electrical-work", relatedProblems: ["rccb-tripping-kl", "power-tripping-frequently"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house", "cost-of-full-house-renovation-kl"] },
    ],
  },
  "water-heater": {
    serviceSlug: "water-heater",
    relatedServices: ["plumbing", "electrical"],
    relatedProblems: PROB["water-heater"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["water-heater-faq"],
    relatedBlogs: BLOG["water-heater"],
    targetQueries: ["water heater installation KL", "instant water heater Malaysia", "water heater repair Selangor"],
    specialties: [
      { specialtySlug: "instant-water-heater-installation", relatedProblems: ["water-heater-not-heating"], relatedBlogs: [] },
      { specialtySlug: "storage-tank-heater-installation", relatedProblems: ["water-heater-not-heating"], relatedBlogs: [] },
      { specialtySlug: "water-heater-repair-and-descaling", relatedProblems: ["water-heater-not-heating"], relatedBlogs: [] },
      { specialtySlug: "heat-pump-water-heater-install", relatedProblems: ["water-heater-not-heating"], relatedBlogs: [] },
    ],
  },
  "ceiling-fan": {
    serviceSlug: "ceiling-fan",
    relatedServices: ["electrical", "lighting"],
    relatedProblems: PROB["ceiling-fan"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["ceiling-fan-faq"],
    relatedBlogs: BLOG["ceiling-fan"],
    targetQueries: ["ceiling fan installation KL", "ceiling fan repair Malaysia", "DC smart fan install Selangor"],
    specialties: [
      { specialtySlug: "new-ceiling-fan-installation", relatedProblems: ["ceiling-fan-wobbling"], relatedBlogs: [] },
      { specialtySlug: "ceiling-fan-replacement", relatedProblems: ["ceiling-fan-wobbling"], relatedBlogs: [] },
      { specialtySlug: "dc-motor-smart-fan-install", relatedProblems: ["ceiling-fan-wobbling"], relatedBlogs: [] },
      { specialtySlug: "industrial-shoplot-fan-install", relatedProblems: ["ceiling-fan-wobbling"], relatedBlogs: [] },
    ],
  },
  lighting: {
    serviceSlug: "lighting",
    relatedServices: ["electrical", "ceiling-fan"],
    relatedProblems: PROB.lighting,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["lighting-faq"],
    relatedBlogs: BLOG.lighting,
    targetQueries: ["LED downlight installation KL", "lighting design Malaysia", "smart lighting retrofit Selangor"],
    specialties: [
      { specialtySlug: "led-downlight-installation", relatedProblems: ["downlight-flickering"], relatedBlogs: [] },
      { specialtySlug: "pendant-and-chandelier-install", relatedProblems: ["downlight-flickering"], relatedBlogs: [] },
      { specialtySlug: "cove-and-strip-led-installation", relatedProblems: ["downlight-flickering"], relatedBlogs: [] },
      { specialtySlug: "smart-lighting-and-dimmer-retrofit", relatedProblems: ["downlight-flickering"], relatedBlogs: [] },
    ],
  },
  tiling: {
    serviceSlug: "tiling",
    relatedServices: ["flooring", "waterproofing", "house-renovation", "bathroom-renovation", "kitchen-renovation"],
    relatedProblems: PROB.tiling,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["tiling-faq"],
    relatedBlogs: BLOG.tiling,
    targetQueries: ["tiling KL", "tile installation Selangor", "floor tiling Malaysia", "tile repair KL"],
    specialties: [
      { specialtySlug: "floor-tiling-installation", relatedProblems: ["loose-hollow-tiles", "cracked-tile-grout", "popping-tiles-buckling"], relatedBlogs: [] },
      { specialtySlug: "wall-tiling-installation", relatedProblems: ["loose-hollow-tiles"], relatedBlogs: [] },
      { specialtySlug: "floor-tile-replacement-and-tile-hacking", relatedProblems: ["popping-tiles-buckling", "loose-hollow-tiles", "cracked-tile-grout"], relatedBlogs: [] },
      { specialtySlug: "porcelain-tiles-installation", relatedProblems: ["popping-tiles-buckling", "loose-hollow-tiles"], relatedBlogs: [] },
      { specialtySlug: "ceramic-tiles-installation", relatedProblems: ["cracked-tile-grout"], relatedBlogs: [] },
      { specialtySlug: "large-format-slab-tiling", relatedProblems: ["loose-hollow-tiles"], relatedBlogs: [] },
      { specialtySlug: "mosaic-tiles-installation", relatedProblems: ["cracked-tile-grout"], relatedBlogs: [] },
      { specialtySlug: "bathroom-tiling-and-waterproofing", relatedProblems: ["leaking-bathroom", "loose-hollow-tiles", "old-bathroom-plumbing-tiles"], relatedBlogs: [] },
      { specialtySlug: "kitchen-backsplash-tiling", relatedProblems: ["cracked-tile-grout"], relatedBlogs: [] },
      { specialtySlug: "tile-repair-and-re-grouting", relatedProblems: ["popping-tiles-buckling", "cracked-tile-grout", "loose-hollow-tiles"], relatedBlogs: [] },
      { specialtySlug: "floor-leveling-and-self-leveling", relatedProblems: ["uneven-floor-subfloor-leveling", "loose-hollow-tiles"], relatedBlogs: [] },
    ],
  },
  "plaster-ceiling": {
    serviceSlug: "plaster-ceiling",
    relatedServices: ["ceiling", "skim-coat", "painting"],
    relatedProblems: PROB["plaster-ceiling"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["plaster-ceiling-faq"],
    relatedBlogs: BLOG["plaster-ceiling"],
    targetQueries: ["plaster ceiling design KL", "L-box ceiling Malaysia", "plaster ceiling repair Selangor"],
    specialties: [
      { specialtySlug: "flat-plaster-ceiling", relatedProblems: ["cracked-ceiling-joints"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "false-ceiling-installation", relatedProblems: ["sagging-plaster-ceiling"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "gypsum-ceiling", relatedProblems: ["cracked-ceiling-joints"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "tiered-and-l-box-ceiling", relatedProblems: ["cracked-ceiling-joints"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "cove-and-curved-ceiling", relatedProblems: ["cracked-ceiling-joints"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "gypsum-partition-and-office-partition", relatedProblems: ["damaged-gypsum-partition-wall", "cracked-ceiling-joints"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "room-partition", relatedProblems: ["damaged-gypsum-partition-wall", "cracked-ceiling-joints"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "feature-wall-and-wall-panel", relatedProblems: ["cracked-ceiling-joints"], relatedBlogs: [] },
      { specialtySlug: "skim-coat-and-wall-plastering", relatedProblems: ["cracked-ceiling-joints"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "wall-crack-repair-and-repainting", relatedProblems: ["cracked-ceiling-joints", "paint-cracking-hairline-walls"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "ceiling-repair-and-re-skim", relatedProblems: ["cracked-ceiling-joints", "sagging-plaster-ceiling"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
    ],
  },
  "skim-coat": {
    serviceSlug: "skim-coat",
    relatedServices: ["painting", "plaster-ceiling"],
    relatedProblems: PROB["skim-coat"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["skim-coat-faq"],
    relatedBlogs: BLOG["skim-coat"],
    targetQueries: ["wall skim coat Malaysia", "ceiling skim coating KL", "skim coat repair Selangor"],
    specialties: [
      { specialtySlug: "wall-skim-coating", relatedProblems: ["uneven-wall-surface-skim", "peeling-skim-coat"], relatedBlogs: ["when-to-repaint-your-house-malaysia"] },
      { specialtySlug: "ceiling-skim-coating", relatedProblems: ["peeling-skim-coat", "uneven-wall-surface-skim"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "crack-and-joint-repair", relatedProblems: ["peeling-skim-coat", "uneven-wall-surface-skim", "paint-cracking-hairline-walls"], relatedBlogs: ["when-to-repaint-your-house-malaysia"] },
      { specialtySlug: "full-condo-re-skim-package", relatedProblems: ["uneven-wall-surface-skim", "peeling-skim-coat"], relatedBlogs: ["when-to-repaint-condo-vs-repaint-terrace-house"] },
    ],
  },
  flooring: {
    serviceSlug: "flooring",
    relatedServices: ["tiling", "house-renovation"],
    relatedProblems: PROB.flooring,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["flooring-faq"],
    relatedBlogs: BLOG.flooring,
    targetQueries: ["flooring KL", "SPC flooring Malaysia", "vinyl flooring installation KL", "laminate flooring price Selangor"],
    specialties: [
      { specialtySlug: "spc-click-lock-flooring-install", relatedProblems: ["spc-flooring-peeling-edges", "vinyl-flooring-lifting-edges", "uneven-floor-subfloor-leveling"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
      { specialtySlug: "laminate-flooring-install", relatedProblems: ["vinyl-flooring-lifting-edges", "uneven-floor-subfloor-leveling"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
      { specialtySlug: "luxury-vinyl-plank-lvp-install", relatedProblems: ["spc-flooring-peeling-edges", "vinyl-flooring-lifting-edges", "uneven-floor-subfloor-leveling"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
      { specialtySlug: "vinyl-flooring-installation", relatedProblems: ["vinyl-flooring-lifting-edges", "uneven-floor-subfloor-leveling"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
      { specialtySlug: "floor-tile-installation", relatedProblems: ["loose-hollow-tiles", "popping-tiles-buckling"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
      { specialtySlug: "floor-tile-replacement-and-subfloor-hacking", relatedProblems: ["popping-tiles-buckling", "loose-hollow-tiles"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
      { specialtySlug: "porcelain-and-ceramic-tiles", relatedProblems: ["loose-hollow-tiles", "popping-tiles-buckling"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
      { specialtySlug: "large-format-and-mosaic-tiles", relatedProblems: ["loose-hollow-tiles"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
      { specialtySlug: "floor-leveling-and-screeding", relatedProblems: ["uneven-floor-subfloor-leveling", "vinyl-flooring-lifting-edges"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
      { specialtySlug: "hollow-tile-and-uneven-floor-repair", relatedProblems: ["uneven-floor-subfloor-leveling", "loose-hollow-tiles", "popping-tiles-buckling"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
      { specialtySlug: "skirting-and-transition-strip-fitting", relatedProblems: ["vinyl-flooring-lifting-edges"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
    ],
  },
  "epoxy-flooring": {
    serviceSlug: "epoxy-flooring",
    relatedServices: ["flooring", "tiling"],
    relatedProblems: PROB["epoxy-flooring"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["epoxy-faq"],
    relatedBlogs: BLOG["epoxy-flooring"],
    targetQueries: ["epoxy flooring KL", "self-levelling epoxy Malaysia", "epoxy floor repair Selangor"],
    specialties: [
      { specialtySlug: "self-levelling-epoxy-floor", relatedProblems: ["epoxy-floor-yellowing"], relatedBlogs: [] },
      { specialtySlug: "flake-quartz-broadcast-epoxy", relatedProblems: ["epoxy-floor-yellowing"], relatedBlogs: [] },
      { specialtySlug: "heavy-duty-mortar-screed", relatedProblems: ["epoxy-floor-yellowing"], relatedBlogs: [] },
      { specialtySlug: "epoxy-floor-repair-and-recoating", relatedProblems: ["epoxy-floor-yellowing"], relatedBlogs: [] },
    ],
  },
  "roof-repair": {
    serviceSlug: "roof-repair",
    relatedServices: ["waterproofing", "ceiling", "painting", "awning-installation"],
    relatedProblems: PROB["roof-repair"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["roof-repair-faq"],
    relatedBlogs: BLOG["roof-repair"],
    targetQueries: ["roof repair KL", "roof leak Selangor", "gutter cleaning Malaysia", "roof waterproofing KL"],
    specialties: [
      { specialtySlug: "roof-leak-diagnosis-and-repair", relatedProblems: ["cracked-roof-tiles", "clogged-gutter-leaking", "roof-leak-rainy-season"], relatedBlogs: ["how-to-fix-a-leaking-roof-in-kl"] },
      { specialtySlug: "ridge-re-bedding-and-re-pointing", relatedProblems: ["cracked-roof-tiles", "roof-leak-rainy-season"], relatedBlogs: ["how-to-fix-a-leaking-roof-in-kl"] },
      { specialtySlug: "gutter-cleaning-and-realignment", relatedProblems: ["clogged-gutter-leaking", "roof-leak-rainy-season"], relatedBlogs: ["how-to-fix-a-leaking-roof-in-kl"] },
      { specialtySlug: "full-torch-on-membrane-waterproofing", relatedProblems: ["roof-leak-rainy-season", "concrete-slab-crack-leak"], relatedBlogs: ["how-to-fix-a-leaking-roof-in-kl", "pu-grouting-vs-full-membrane-waterproofing"] },
    ],
  },
  "kitchen-cabinet": {
    serviceSlug: "kitchen-cabinet",
    relatedServices: ["carpentry", "house-renovation", "tiling"],
    relatedProblems: PROB["kitchen-cabinet"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["kitchen-cabinet-faq"],
    relatedBlogs: BLOG["kitchen-cabinet"],
    targetQueries: ["kitchen cabinet KL", "modular kitchen Malaysia", "countertop Selangor", "kitchen cabinet price"],
    specialties: [
      { specialtySlug: "modular-kitchen-cabinet-10ft-l-shape", relatedProblems: ["kitchen-cabinet-door-misaligned", "cabinet-door-sagging"], relatedBlogs: ["kitchen-cabinet-material-guide-malaysia"] },
      { specialtySlug: "custom-plywood-kitchen", relatedProblems: ["kitchen-cabinet-door-misaligned", "cabinet-door-sagging"], relatedBlogs: ["kitchen-cabinet-material-guide-malaysia"] },
      { specialtySlug: "quartz-granite-countertop", relatedProblems: ["kitchen-cabinet-door-misaligned"], relatedBlogs: ["kitchen-cabinet-material-guide-malaysia"] },
      { specialtySlug: "kitchen-makeover-doors-and-hardware-only", relatedProblems: ["cabinet-door-sagging", "kitchen-cabinet-door-misaligned"], relatedBlogs: ["kitchen-cabinet-material-guide-malaysia"] },
    ],
  },
  carpentry: {
    serviceSlug: "carpentry",
    relatedServices: ["kitchen-cabinet", "house-renovation", "door"],
    relatedProblems: PROB.carpentry,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["carpentry-faq"],
    relatedBlogs: BLOG.carpentry,
    targetQueries: ["carpentry KL", "built-in wardrobe Malaysia", "custom furniture Selangor", "TV console install KL", "walk-in wardrobe KL", "wall panel Malaysia", "vanity cabinet KL", "cabinet repair KL"],
    specialties: [
      { specialtySlug: "built-in-wardrobe", relatedProblems: ["wardrobe-door-not-closing", "wardrobe-door-jamming"], relatedBlogs: [] },
      { specialtySlug: "tv-console-and-feature-wall", relatedProblems: ["wardrobe-door-not-closing"], relatedBlogs: [] },
      { specialtySlug: "study-desk-and-home-office", relatedProblems: ["wardrobe-door-not-closing"], relatedBlogs: [] },
      { specialtySlug: "shoe-cabinet-and-entry-storage", relatedProblems: ["wardrobe-door-not-closing", "wardrobe-door-jamming"], relatedBlogs: ["shoe-cabinet-entry-storage-kl"] },
      { specialtySlug: "walk-in-wardrobe-and-closet-system", relatedProblems: ["wardrobe-door-not-closing", "wardrobe-door-jamming"], relatedBlogs: ["cost-of-full-house-renovation-kl"] },
      { specialtySlug: "vanity-cabinet-and-dressing-table", relatedProblems: ["wardrobe-door-jamming"], relatedBlogs: [] },
      { specialtySlug: "storage-cabinet-and-display-shelving", relatedProblems: ["wardrobe-door-not-closing"], relatedBlogs: ["cost-of-full-house-renovation-kl"] },
      { specialtySlug: "feature-wall-and-wall-panelling", relatedProblems: [], relatedBlogs: [] },
      { specialtySlug: "dining-bench-and-banquette-seating", relatedProblems: [], relatedBlogs: [] },
      { specialtySlug: "wardrobe-and-cabinet-repair", relatedProblems: ["wardrobe-door-not-closing", "wardrobe-door-jamming"], relatedBlogs: ["kitchen-cabinet-material-guide-malaysia"] },
    ],
  },
  door: {
    serviceSlug: "door",
    relatedServices: ["locksmith", "handyman", "carpentry"],
    relatedProblems: PROB.door,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["door-faq"],
    relatedBlogs: BLOG.door,
    targetQueries: ["door installation KL", "door repair Malaysia", "fire-rated door Selangor", "door planing KL"],
    specialties: [
      { specialtySlug: "solid-timber-door-installation", relatedProblems: ["door-scraping-floor", "digital-smart-lock-installation"], relatedBlogs: [] },
      { specialtySlug: "laminate-door-installation", relatedProblems: ["door-scraping-floor"], relatedBlogs: [] },
      { specialtySlug: "door-planing-and-adjustment", relatedProblems: ["door-scraping-floor"], relatedBlogs: [] },
      { specialtySlug: "fire-rated-door-installation", relatedProblems: ["door-scraping-floor"], relatedBlogs: [] },
      { specialtySlug: "door-replacement", relatedProblems: ["door-scraping-floor", "door-hinge-sagging"], relatedBlogs: [] },
      { specialtySlug: "door-frame-repair-and-replacement", relatedProblems: ["door-scraping-floor", "door-hinge-sagging", "loose-door-hinge"], relatedBlogs: [] },
      { specialtySlug: "bathroom-and-kitchen-pvc-door-replacement", relatedProblems: ["door-scraping-floor", "loose-door-hinge"], relatedBlogs: [] },
      { specialtySlug: "sliding-and-bi-fold-door-installation", relatedProblems: ["door-scraping-floor", "sliding-window-stuck"], relatedBlogs: [] },
      { specialtySlug: "main-entrance-door-installation", relatedProblems: ["digital-smart-lock-installation", "door-scraping-floor"], relatedBlogs: ["smart-lock-buying-guide-malaysia-2026"] },
      { specialtySlug: "door-closer-and-hardware-installation", relatedProblems: ["loose-door-hinge", "door-hinge-sagging"], relatedBlogs: [] },
    ],
  },
  "window-repair": {
    serviceSlug: "window-repair",
    relatedServices: ["glass-aluminium", "door"],
    relatedProblems: PROB["window-repair"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["window-repair-faq"],
    relatedBlogs: BLOG["window-repair"],
    targetQueries: ["window repair KL", "glass replacement Selangor", "sliding window Malaysia", "window seal KL"],
    specialties: [
      { specialtySlug: "glass-replacement", relatedProblems: ["sliding-window-stuck"], relatedBlogs: [] },
      { specialtySlug: "window-seal-replacement", relatedProblems: ["sliding-window-stuck"], relatedBlogs: [] },
      { specialtySlug: "window-handle-and-hinge-repair", relatedProblems: ["stuck-window-lock", "sliding-window-stuck"], relatedBlogs: [] },
      { specialtySlug: "sliding-window-roller-replacement", relatedProblems: ["sliding-window-stuck"], relatedBlogs: [] },
      { specialtySlug: "window-installation", relatedProblems: ["sliding-window-stuck", "stuck-window-lock"], relatedBlogs: [] },
      { specialtySlug: "window-replacement", relatedProblems: ["sliding-window-stuck", "stuck-sliding-window"], relatedBlogs: [] },
      { specialtySlug: "window-grille-installation", relatedProblems: ["rusting-window-grille", "stuck-window-lock"], relatedBlogs: [] },
      { specialtySlug: "window-frame-repair-and-realignment", relatedProblems: ["stuck-sliding-window", "sliding-window-stuck"], relatedBlogs: [] },
      { specialtySlug: "louvre-and-top-hung-window-repair", relatedProblems: ["stuck-window-lock", "sliding-window-stuck"], relatedBlogs: [] },
      { specialtySlug: "window-waterproofing-and-resealing", relatedProblems: ["wall-dampness-rising", "damp-walls-paint-bubbling"], relatedBlogs: ["pu-grouting-vs-full-membrane-waterproofing"] },
    ],
  },
  locksmith: {
    serviceSlug: "locksmith",
    relatedServices: ["door", "handyman"],
    relatedProblems: PROB.locksmith,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["locksmith-faq"],
    relatedBlogs: BLOG.locksmith,
    targetQueries: ["locksmith KL", "smart lock installation Malaysia", "emergency lockout Selangor", "deadbolt replacement KL"],
    specialties: [
      { specialtySlug: "smart-lock-installation", relatedProblems: ["smart-lock-not-working", "locked-out-of-house"], relatedBlogs: ["smart-lock-buying-guide-malaysia-2026"] },
      { specialtySlug: "mortice-deadbolt-lock-replacement", relatedProblems: ["smart-lock-not-working", "locked-out-of-house"], relatedBlogs: ["smart-lock-buying-guide-malaysia-2026"] },
      { specialtySlug: "key-cutting-and-re-keying", relatedProblems: ["locked-out-of-house", "smart-lock-not-working"], relatedBlogs: ["smart-lock-buying-guide-malaysia-2026"] },
      { specialtySlug: "emergency-lockout-landed-house", relatedProblems: ["locked-out-of-house", "smart-lock-not-working"], relatedBlogs: ["smart-lock-buying-guide-malaysia-2026"] },
    ],
  },
  "glass-aluminium": {
    serviceSlug: "glass-aluminium",
    relatedServices: ["window-repair", "door", "awning-installation"],
    relatedProblems: PROB["glass-aluminium"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["glass-aluminium-faq"],
    relatedBlogs: BLOG["glass-aluminium"],
    targetQueries: ["shower screen KL", "glass partition Malaysia", "aluminium window Selangor", "mirror installation KL"],
    specialties: [
      { specialtySlug: "frameless-shower-screen", relatedProblems: ["shower-screen-leaking"], relatedBlogs: [] },
      { specialtySlug: "aluminium-sliding-window", relatedProblems: ["sliding-window-stuck"], relatedBlogs: [] },
      { specialtySlug: "glass-office-partition", relatedProblems: ["shower-screen-leaking"], relatedBlogs: [] },
      { specialtySlug: "wall-mirror-installation", relatedProblems: ["shower-screen-leaking"], relatedBlogs: [] },
      { specialtySlug: "glass-partition", relatedProblems: ["shower-screen-leaking"], relatedBlogs: [] },
      { specialtySlug: "sliding-glass-door", relatedProblems: ["sliding-window-stuck", "stuck-sliding-window"], relatedBlogs: [] },
      { specialtySlug: "aluminium-casement-window", relatedProblems: ["stuck-window-lock", "sliding-window-stuck"], relatedBlogs: [] },
      { specialtySlug: "glass-railing-and-balustrade", relatedProblems: ["balcony-leak-condo"], relatedBlogs: [] },
      { specialtySlug: "aluminium-composite-panel-cladding", relatedProblems: ["faded-exterior-paint-malaysia", "damp-walls-paint-bubbling"], relatedBlogs: [] },
      { specialtySlug: "glass-repair-and-reglazing", relatedProblems: ["shower-screen-water-leak", "shower-screen-leaking"], relatedBlogs: [] },
    ],
  },
  cctv: {
    serviceSlug: "cctv",
    relatedServices: ["electrical", "autogate"],
    relatedProblems: PROB.cctv,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["cctv-faq"],
    relatedBlogs: BLOG.cctv,
    targetQueries: ["CCTV installation KL", "CCTV package Malaysia", "home security camera Selangor"],
    specialties: [
      { specialtySlug: "condo-wi-fi-cctv-package-4-cameras", relatedProblems: ["cctv-not-recording", "cctv-not-recording-storage-full"], relatedBlogs: ["cctv-installation-buying-guide-kl"] },
      { specialtySlug: "landed-house-poe-cctv-8-cameras", relatedProblems: ["cctv-not-recording", "cctv-not-recording-storage-full"], relatedBlogs: ["cctv-installation-buying-guide-kl"] },
      { specialtySlug: "single-camera-add-on", relatedProblems: ["cctv-not-recording"], relatedBlogs: ["cctv-installation-buying-guide-kl"] },
      { specialtySlug: "cctv-system-health-check-and-relocation", relatedProblems: ["cctv-not-recording", "cctv-not-recording-storage-full"], relatedBlogs: ["cctv-installation-buying-guide-kl"] },
    ],
  },
  autogate: {
    serviceSlug: "autogate",
    relatedServices: ["welding", "electrical"],
    relatedProblems: PROB.autogate,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["autogate-faq"],
    relatedBlogs: BLOG.autogate,
    targetQueries: ["auto gate installation KL", "autogate motor repair Selangor", "sliding gate Malaysia"],
    specialties: [
      { specialtySlug: "single-swing-autogate", relatedProblems: ["autogate-not-closing", "autogate-remote-not-working"], relatedBlogs: ["auto-gate-installation-guide-malaysia"] },
      { specialtySlug: "double-swing-autogate", relatedProblems: ["autogate-not-closing"], relatedBlogs: ["auto-gate-installation-guide-malaysia"] },
      { specialtySlug: "sliding-autogate", relatedProblems: ["autogate-not-closing", "autogate-remote-not-working"], relatedBlogs: ["auto-gate-installation-guide-malaysia"] },
      { specialtySlug: "autogate-motor-replacement-and-service", relatedProblems: ["autogate-not-closing", "autogate-remote-not-working"], relatedBlogs: ["auto-gate-installation-guide-malaysia"] },
    ],
  },
  "awning-installation": {
    serviceSlug: "awning-installation",
    relatedServices: ["welding", "roof-repair", "glass-aluminium", "waterproofing", "handyman", "house-renovation"],
    relatedProblems: PROB["awning-installation"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["awning-faq"],
    relatedBlogs: BLOG["awning-installation"],
    targetQueries: ["awning installation KL", "awning contractor Selangor", "car porch awning Malaysia", "polycarbonate awning KL", "awning installer near me", "awning replacement Klang Valley"],
    specialties: [
      { specialtySlug: "car-porch-awning-installation", relatedProblems: ["roof-leak-rainy-season", "clogged-gutter-leaking"], relatedBlogs: ["car-porch-awning-guide-malaysia", "polycarbonate-vs-metal-vs-acp-awning-malaysia", "how-to-fix-a-leaking-roof-in-kl"] },
      { specialtySlug: "polycarbonate-awning", relatedProblems: ["ceiling-leak-after-rain", "roof-leak-rainy-season"], relatedBlogs: ["polycarbonate-vs-metal-vs-acp-awning-malaysia", "how-awning-pricing-works-malaysia", "roof-leak-diagnosis-repair-kl"] },
      { specialtySlug: "metal-deck-awning", relatedProblems: ["clogged-gutter-leaking", "rusting-window-grille"], relatedBlogs: ["polycarbonate-vs-metal-vs-acp-awning-malaysia", "roof-repair-waterproofing-kl"] },
      { specialtySlug: "aluminium-composite-acp-awning", relatedProblems: ["ceiling-leak-after-rain"], relatedBlogs: ["polycarbonate-vs-metal-vs-acp-awning-malaysia"] },
      { specialtySlug: "glass-awning", relatedProblems: ["ceiling-leak-after-rain"], relatedBlogs: ["how-to-choose-right-awning-malaysia", "polycarbonate-vs-metal-vs-acp-awning-malaysia"] },
      { specialtySlug: "canvas-and-fabric-awning", relatedProblems: ["roof-leak-rainy-season"], relatedBlogs: ["how-to-choose-right-awning-malaysia"] },
      { specialtySlug: "balcony-patio-and-window-awning", relatedProblems: ["balcony-leak-condo", "ceiling-leak-after-rain"], relatedBlogs: ["how-to-choose-right-awning-malaysia", "how-to-fix-a-leaking-roof-in-kl"] },
      { specialtySlug: "awning-replacement-and-repair", relatedProblems: ["clogged-gutter-leaking", "roof-leak-rainy-season", "rusting-window-grille"], relatedBlogs: ["awning-maintenance-leaks-rust-water-pooling", "how-awning-pricing-works-malaysia", "how-to-fix-a-leaking-roof-in-kl", "roof-leak-diagnosis-repair-kl"] },
    ],
  },
  welding: {
    serviceSlug: "welding",
    relatedServices: ["autogate", "glass-aluminium", "awning-installation", "roof-repair"],
    relatedProblems: PROB.welding,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["welding-faq"],
    relatedBlogs: BLOG.welding,
    targetQueries: ["welding KL", "metal gate fabrication Selangor", "window grille Malaysia", "on-site welding repair KL"],
    specialties: [
      { specialtySlug: "custom-window-grille", relatedProblems: ["rusting-window-grille", "loose-metal-gate-hinges"], relatedBlogs: [] },
      { specialtySlug: "main-gate-fabrication", relatedProblems: ["loose-metal-gate-hinges", "rusting-window-grille"], relatedBlogs: [] },
      { specialtySlug: "on-site-welding-repair", relatedProblems: ["loose-metal-gate-hinges", "rusting-window-grille"], relatedBlogs: [] },
      { specialtySlug: "staircase-stringer-fabrication", relatedProblems: ["loose-metal-gate-hinges"], relatedBlogs: [] },
      { specialtySlug: "iron-works", relatedProblems: ["rusting-window-grille", "loose-metal-gate-hinges"], relatedBlogs: [] },
      { specialtySlug: "metal-grille-installation", relatedProblems: ["rusting-window-grille", "stuck-window-lock"], relatedBlogs: [] },
      { specialtySlug: "metal-gate-repair", relatedProblems: ["loose-metal-gate-hinges", "autogate-not-closing"], relatedBlogs: ["auto-gate-installation-guide-malaysia"] },
      { specialtySlug: "stainless-steel-railing-fabrication", relatedProblems: ["loose-metal-gate-hinges", "rusting-window-grille"], relatedBlogs: [] },
      { specialtySlug: "steel-structure-and-awning-fabrication", relatedProblems: ["roof-leak-rainy-season", "clogged-gutter-leaking"], relatedBlogs: ["how-to-fix-a-leaking-roof-in-kl"] },
      { specialtySlug: "anti-rust-treatment-and-repainting", relatedProblems: ["rusting-window-grille", "faded-exterior-paint-malaysia"], relatedBlogs: ["when-to-repaint-your-house-malaysia"] },
    ],
  },
  aircon: {
    serviceSlug: "aircon",
    relatedServices: ["electrical", "ceiling", "house-renovation", "handyman"],
    relatedProblems: PROB.aircon,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["aircon-faq"],
    relatedBlogs: BLOG.aircon,
    targetQueries: ["aircon service KL", "aircond service price Malaysia", "aircon chemical wash Selangor", "aircon installation cost KL", "aircon gas top up Malaysia"],
    specialties: [
      { specialtySlug: "basic-servicing", relatedProblems: ["aircon-not-cold", "aircon-weak-airflow", "aircon-bad-smell"], relatedBlogs: ["how-often-to-service-aircon-malaysia", "aircon-service-price-malaysia-2026"] },
      { specialtySlug: "chemical-wash", relatedProblems: ["aircon-bad-smell", "aircon-water-leaking", "aircon-not-cold"], relatedBlogs: ["chemical-wash-vs-chemical-overhaul-aircon"] },
      { specialtySlug: "chemical-overhaul", relatedProblems: ["aircon-water-leaking", "aircon-bad-smell", "aircon-not-cold"], relatedBlogs: ["chemical-wash-vs-chemical-overhaul-aircon"] },
      { specialtySlug: "gas-top-up", relatedProblems: ["aircon-not-cold", "ice-forming-on-aircon"], relatedBlogs: ["aircon-gas-topup-guide-malaysia"] },
      { specialtySlug: "installation", relatedProblems: ["aircon-water-leaking", "aircon-not-cold"], relatedBlogs: ["aircon-installation-cost-malaysia"] },
      { specialtySlug: "repair", relatedProblems: ["aircon-not-turning-on", "aircon-tripping-mcb", "aircon-making-noise", "aircon-remote-display-issue"], relatedBlogs: ["aircon-service-price-malaysia-2026"] },
      { specialtySlug: "ceiling-cassette", relatedProblems: ["aircon-water-leaking", "aircon-not-cold"], relatedBlogs: ["aircon-installation-cost-malaysia"] },
      { specialtySlug: "dismantling-and-relocation", relatedProblems: ["aircon-water-leaking"], relatedBlogs: ["aircon-installation-cost-malaysia"] },
    ],
  },
  "kitchen-renovation": {
    serviceSlug: "kitchen-renovation",
    relatedServices: ["kitchen-cabinet", "house-renovation", "plumbing", "tiling", "electrical"],
    relatedProblems: PROB["kitchen-renovation"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["kitchen-renovation-faq"],
    relatedBlogs: BLOG["kitchen-renovation"],
    targetQueries: ["kitchen renovation KL", "kitchen contractor Selangor", "wet kitchen extension Malaysia", "kitchen cabinet renovation KL"],
    specialties: [
      { specialtySlug: "full-kitchen-renovation", relatedProblems: ["old-kitchen-cabinet-plumbing-damage", "kitchen-cabinet-door-misaligned"], relatedBlogs: ["kitchen-cabinet-material-guide-malaysia"] },
      { specialtySlug: "kitchen-cabinet-installation", relatedProblems: ["kitchen-cabinet-door-misaligned", "cabinet-door-sagging", "old-kitchen-cabinet-plumbing-damage"], relatedBlogs: ["kitchen-cabinet-material-guide-malaysia"] },
      { specialtySlug: "kitchen-countertop-replacement", relatedProblems: ["kitchen-cabinet-door-misaligned"], relatedBlogs: ["kitchen-cabinet-material-guide-malaysia"] },
      { specialtySlug: "kitchen-backsplash-tile-installation", relatedProblems: ["cracked-tile-grout"], relatedBlogs: [] },
      { specialtySlug: "kitchen-island-and-peninsula", relatedProblems: ["kitchen-cabinet-door-misaligned"], relatedBlogs: ["kitchen-cabinet-material-guide-malaysia"] },
      { specialtySlug: "wet-kitchen-renovation", relatedProblems: ["old-kitchen-cabinet-plumbing-damage", "clogged-drain"], relatedBlogs: [] },
      { specialtySlug: "dry-kitchen-renovation", relatedProblems: ["kitchen-cabinet-door-misaligned"], relatedBlogs: [] },
      { specialtySlug: "kitchen-extension", relatedProblems: ["wall-cracks-settlement-masonry", "old-condo-full-refurbishment"], relatedBlogs: ["cost-of-full-house-renovation-kl"] },
      { specialtySlug: "kitchen-plumbing-and-electrical", relatedProblems: ["old-kitchen-cabinet-plumbing-damage", "clogged-drain", "rccb-tripping-kl"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house"] },
    ],
  },
  "bathroom-renovation": {
    serviceSlug: "bathroom-renovation",
    relatedServices: ["waterproofing", "plumbing", "tiling", "house-renovation", "water-heater"],
    relatedProblems: PROB["bathroom-renovation"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["bathroom-renovation-faq"],
    relatedBlogs: BLOG["bathroom-renovation"],
    targetQueries: ["bathroom renovation KL", "toilet makeover Selangor", "bathroom waterproofing Malaysia", "bathroom contractor KL"],
    specialties: [
      { specialtySlug: "full-bathroom-renovation", relatedProblems: ["old-bathroom-plumbing-tiles", "leaking-bathroom", "bathroom-leak-upper-floor"], relatedBlogs: ["how-to-fix-leaking-ceiling-without-tile-hacking"] },
      { specialtySlug: "toilet-renovation", relatedProblems: ["toilet-not-flushing", "blocked-drain-toilet"], relatedBlogs: [] },
      { specialtySlug: "bathroom-makeover", relatedProblems: ["old-bathroom-plumbing-tiles"], relatedBlogs: [] },
      { specialtySlug: "shower-area-renovation", relatedProblems: ["shower-screen-leaking", "leaking-bathroom"], relatedBlogs: [] },
      { specialtySlug: "bathroom-tiling", relatedProblems: ["loose-hollow-tiles", "cracked-tile-grout", "popping-tiles-buckling"], relatedBlogs: [] },
      { specialtySlug: "bathroom-waterproofing", relatedProblems: ["leaking-bathroom", "bathroom-leak-upper-floor"], relatedBlogs: ["pu-grouting-vs-full-membrane-waterproofing"] },
      { specialtySlug: "bathroom-plumbing", relatedProblems: ["old-bathroom-plumbing-tiles", "leaking-bathroom", "low-water-pressure"], relatedBlogs: ["hidden-water-leak-detection-kl"] },
      { specialtySlug: "sanitary-installation", relatedProblems: ["toilet-not-flushing"], relatedBlogs: [] },
      { specialtySlug: "bathroom-floor-replacement", relatedProblems: ["old-bathroom-plumbing-tiles", "loose-hollow-tiles", "popping-tiles-buckling", "leaking-bathroom"], relatedBlogs: [] },
      { specialtySlug: "bathroom-wall-tile-replacement", relatedProblems: ["cracked-tile-grout"], relatedBlogs: [] },
      { specialtySlug: "bathroom-ceiling-repair", relatedProblems: ["ceiling-mold-stains", "sagging-plaster-ceiling"], relatedBlogs: [] },
      { specialtySlug: "bathroom-leak-repair", relatedProblems: ["leaking-bathroom", "bathroom-leak-upper-floor"], relatedBlogs: ["how-to-fix-leaking-ceiling-without-tile-hacking"] },
    ],
  },
};

/* ──────────────────────────────────────────────────────────────────────────
 * Accessors
 * ────────────────────────────────────────────────────────────────────────── */

/**
 * Get the full silo for a given service slug. Unlike the legacy fallback, an
 * unknown slug returns a strict guard: consumers of the silo will render
 * nothing for that service rather than silently inheriting Handyman content.
 */
export function getSilo(slug: string): TopicalSilo | undefined {
  return topicalAuthorityMap[slug];
}

export function getRelatedItems(slug: string): TopicalSilo {
  const silo = topicalAuthorityMap[slug];
  if (!silo) {
    // Defensive: preserve the old call signature but never return the Handyman
    // silo. Callers that use related services/problems already guard on the
    // returned arrays (empty = no section), so an empty silo is the safe,
    // semantically-correct result for an unknown service.
    return {
      serviceSlug: slug,
      relatedServices: [],
      relatedProblems: [],
      topAreas: [],
      faqSlugs: [],
      relatedBlogs: [],
      targetQueries: [],
      specialties: [],
    };
  }
  return silo;
}

/** Get related service slugs for a given service. */
export function getRelatedServices(slug: string): string[] {
  return getRelatedItems(slug).relatedServices;
}

/** Get related problem slugs for a given service. */
export function getRelatedProblems(slug: string): string[] {
  return getRelatedItems(slug).relatedProblems;
}

/** Get related blog slugs for a given service. */
export function getRelatedBlogs(slug: string): string[] {
  return getRelatedItems(slug).relatedBlogs;
}

/** Get top area slugs for a given service. */
export function getTopAreas(slug: string): string[] {
  return getRelatedItems(slug).topAreas;
}

/** Get the typed specialty relationships for a service (if any). */
export function getSpecialtySilo(slug: string, specialtySlug: string): SpecialtySilo | undefined {
  return topicalAuthorityMap[slug]?.specialties.find((s) => s.specialtySlug === specialtySlug);
}
