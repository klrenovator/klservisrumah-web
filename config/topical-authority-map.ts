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
 * `validateTopicalAuthorityMap()` — no silent Handyman fallback.
 */

import { servicesData } from "@/config/services-data";
import { problemPages } from "@/config/problem-data";
import publishedBlogSlugs from "@/config/blog-slugs.generated.json" with { type: "json" };
import { slugify } from "@/lib/utils";

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
  "house-renovation": ["old-condo-full-refurbishment"],
  electrical: ["rccb-tripping-kl", "power-tripping-frequently", "downlight-flickering"],
  "water-heater": ["water-heater-not-heating"],
  "ceiling-fan": ["ceiling-fan-wobbling"],
  lighting: ["downlight-flickering"],
  tiling: ["loose-hollow-tiles", "cracked-tile-grout"],
  "plaster-ceiling": ["cracked-ceiling-joints"],
  "skim-coat": ["peeling-skim-coat", "uneven-wall-surface-skim"],
  flooring: ["spc-flooring-peeling-edges", "vinyl-flooring-lifting-edges"],
  "epoxy-flooring": ["epoxy-floor-yellowing"],
  "roof-repair": ["clogged-gutter-leaking", "cracked-roof-tiles"],
  "kitchen-cabinet": ["kitchen-cabinet-door-misaligned", "cabinet-door-sagging"],
  carpentry: ["wardrobe-door-not-closing", "wardrobe-door-jamming"],
  door: ["door-scraping-floor", "digital-smart-lock-installation"],
  "window-repair": ["sliding-window-stuck"],
  locksmith: ["smart-lock-not-working", "locked-out-of-house"],
  "glass-aluminium": ["shower-screen-leaking"],
  cleaning: ["mold-in-bathroom-after-cleaning", "stubborn-bathroom-limescale"],
  "deep-cleaning": ["stubborn-grout-stains-after-deep-clean", "move-out-condo-deep-clean"],
  "post-renovation-cleaning": ["construction-dust-returning", "cement-splatter-tile-clean"],
  cctv: ["cctv-not-recording", "cctv-not-recording-storage-full"],
  autogate: ["autogate-not-closing", "autogate-remote-not-working"],
  welding: ["rusting-window-grille", "loose-metal-gate-hinges"],
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
  door: [],
  "window-repair": [],
  locksmith: ["smart-lock-buying-guide-malaysia-2026"],
  "glass-aluminium": [],
  cleaning: [],
  "deep-cleaning": [],
  "post-renovation-cleaning": [],
  cctv: ["cctv-installation-buying-guide-kl"],
  autogate: ["auto-gate-installation-guide-malaysia"],
  welding: [],
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
    ],
  },
  plumbing: {
    serviceSlug: "plumbing",
    relatedServices: ["waterproofing", "handyman", "water-heater", "house-renovation"],
    relatedProblems: PROB.plumbing,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["plumbing-faq"],
    relatedBlogs: BLOG.plumbing,
    targetQueries: ["plumber KL", "plumbing repair Selangor", "leaking pipe repair Malaysia", "emergency plumber near me KL"],
    specialties: [
      { specialtySlug: "water-leakage-diagnosis-and-repair", relatedProblems: ["burst-pipe-emergency", "leaking-bathroom", "water-heater-not-heating"], relatedBlogs: ["hidden-water-leak-detection-kl"] },
      { specialtySlug: "toilet-tap-and-sink-installation", relatedProblems: ["low-water-pressure", "toilet-not-flushing"], relatedBlogs: [] },
      { specialtySlug: "drain-unclogging-and-cleaning", relatedProblems: ["blocked-drain-toilet", "clogged-drain", "toilet-not-flushing"], relatedBlogs: [] },
      { specialtySlug: "water-heater-and-pump-installation", relatedProblems: ["low-water-pressure", "water-heater-not-heating"], relatedBlogs: [] },
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
    targetQueries: ["waterproofing KL", "bathroom waterproofing Selangor", "PU grouting Malaysia", "roof waterproofing KL"],
    specialties: [
      { specialtySlug: "pu-high-pressure-injection-grouting", relatedProblems: ["concrete-slab-crack-leak", "ceiling-leak-after-rain", "wall-dampness-rising"], relatedBlogs: ["pu-grouting-vs-full-membrane-waterproofing"] },
      { specialtySlug: "bathroom-and-wet-area-waterproofing", relatedProblems: ["bathroom-leak-upper-floor", "damp-walls-paint-bubbling", "swimming-pool-leak-balcony"], relatedBlogs: ["how-to-fix-leaking-ceiling-without-tile-hacking"] },
      { specialtySlug: "roof-and-concrete-slab-waterproofing", relatedProblems: ["roof-leak-rainy-season", "balcony-leak-condo", "concrete-slab-crack-leak"], relatedBlogs: ["how-to-fix-a-leaking-roof-in-kl"] },
      { specialtySlug: "wall-dampness-and-efflorescence-repair", relatedProblems: ["wall-dampness-rising", "damp-walls-paint-bubbling", "balcony-leak-condo"], relatedBlogs: ["how-to-fix-leaking-ceiling-without-tile-hacking"] },
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
    relatedServices: ["painting", "plumbing", "ceiling", "electrical", "tiling", "flooring", "kitchen-cabinet", "carpentry"],
    relatedProblems: PROB["house-renovation"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["renovation-faq"],
    relatedBlogs: BLOG["house-renovation"],
    targetQueries: ["house renovation KL", "home renovation Malaysia", "full house renovation Selangor", "renovation contractor near me"],
    specialties: [
      { specialtySlug: "full-house-renovation-package", relatedProblems: ["old-condo-full-refurbishment"], relatedBlogs: ["cost-of-full-house-renovation-kl", "how-to-hire-honest-contractor-malaysia"] },
      { specialtySlug: "kitchen-and-bathroom-makeover", relatedProblems: ["old-condo-full-refurbishment"], relatedBlogs: ["kitchen-cabinet-material-guide-malaysia", "cost-of-full-house-renovation-kl"] },
      { specialtySlug: "condo-interior-refurbishment", relatedProblems: ["old-condo-full-refurbishment"], relatedBlogs: ["cost-of-full-house-renovation-kl"] },
      { specialtySlug: "commercial-shoplot-renovation", relatedProblems: ["old-condo-full-refurbishment"], relatedBlogs: ["how-to-hire-honest-contractor-malaysia"] },
    ],
  },
  electrical: {
    serviceSlug: "electrical",
    relatedServices: ["lighting", "ceiling-fan", "handyman", "house-renovation"],
    relatedProblems: PROB.electrical,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["electrical-faq"],
    relatedBlogs: BLOG.electrical,
    targetQueries: ["electrical wiring KL", "ceiling fan installation Malaysia", "water heater installation KL", "downlight installation Selangor"],
    specialties: [
      { specialtySlug: "new-power-point-and-switch-installation", relatedProblems: ["power-tripping-frequently", "downlight-flickering"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house"] },
      { specialtySlug: "db-box-upgrade-and-rewiring", relatedProblems: ["rccb-tripping-kl", "power-tripping-frequently"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house"] },
      { specialtySlug: "lighting-point-and-downlight-installation", relatedProblems: ["downlight-flickering"], relatedBlogs: ["safe-electrical-wiring-upgrade-old-house"] },
      { specialtySlug: "aircond-water-heater-and-oven-point", relatedProblems: ["power-tripping-frequently", "downlight-flickering"], relatedBlogs: [] },
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
    relatedServices: ["flooring", "waterproofing", "house-renovation"],
    relatedProblems: PROB.tiling,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["tiling-faq"],
    relatedBlogs: BLOG.tiling,
    targetQueries: ["tiling KL", "tile installation Selangor", "floor tiling Malaysia", "tile repair KL"],
    specialties: [
      { specialtySlug: "floor-tiling-installation", relatedProblems: ["loose-hollow-tiles", "cracked-tile-grout"], relatedBlogs: [] },
      { specialtySlug: "wall-tiling-installation", relatedProblems: ["loose-hollow-tiles"], relatedBlogs: [] },
      { specialtySlug: "large-format-slab-tiling", relatedProblems: ["loose-hollow-tiles"], relatedBlogs: [] },
      { specialtySlug: "tile-repair-and-re-grouting", relatedProblems: ["cracked-tile-grout", "loose-hollow-tiles"], relatedBlogs: [] },
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
      { specialtySlug: "tiered-and-l-box-ceiling", relatedProblems: ["cracked-ceiling-joints"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "cove-and-curved-ceiling", relatedProblems: ["cracked-ceiling-joints"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
      { specialtySlug: "ceiling-repair-and-re-skim", relatedProblems: ["cracked-ceiling-joints"], relatedBlogs: ["gypsum-vs-plaster-ceiling-malaysia"] },
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
    relatedServices: ["tiling", "house-renovation", "cleaning"],
    relatedProblems: PROB.flooring,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["flooring-faq"],
    relatedBlogs: BLOG.flooring,
    targetQueries: ["flooring KL", "SPC flooring Malaysia", "vinyl flooring installation KL", "laminate flooring price Selangor"],
    specialties: [
      { specialtySlug: "spc-click-lock-flooring-install", relatedProblems: ["spc-flooring-peeling-edges", "vinyl-flooring-lifting-edges"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
      { specialtySlug: "laminate-flooring-install", relatedProblems: ["vinyl-flooring-lifting-edges"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
      { specialtySlug: "luxury-vinyl-plank-lvp-install", relatedProblems: ["spc-flooring-peeling-edges", "vinyl-flooring-lifting-edges"], relatedBlogs: ["spc-vs-vinyl-vs-laminate-flooring-malaysia"] },
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
    relatedServices: ["waterproofing", "ceiling", "painting"],
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
    targetQueries: ["carpentry KL", "built-in wardrobe Malaysia", "custom furniture Selangor", "TV console install KL"],
    specialties: [
      { specialtySlug: "built-in-wardrobe", relatedProblems: ["wardrobe-door-not-closing", "wardrobe-door-jamming"], relatedBlogs: [] },
      { specialtySlug: "tv-console-and-feature-wall", relatedProblems: ["wardrobe-door-not-closing"], relatedBlogs: [] },
      { specialtySlug: "study-desk-and-home-office", relatedProblems: ["wardrobe-door-not-closing"], relatedBlogs: [] },
      { specialtySlug: "shoe-cabinet-and-entry-storage", relatedProblems: ["wardrobe-door-not-closing", "wardrobe-door-jamming"], relatedBlogs: [] },
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
    relatedServices: ["window-repair", "door"],
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
    ],
  },
  cleaning: {
    serviceSlug: "cleaning",
    relatedServices: ["deep-cleaning", "post-renovation-cleaning"],
    relatedProblems: PROB.cleaning,
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["cleaning-faq"],
    relatedBlogs: BLOG.cleaning,
    targetQueries: ["house cleaning KL", "office cleaning Selangor", "weekly cleaning Malaysia", "spring clean KL"],
    specialties: [
      { specialtySlug: "weekly-condo-cleaning-1-000-sqft", relatedProblems: ["mold-in-bathroom-after-cleaning", "stubborn-bathroom-limescale"], relatedBlogs: [] },
      { specialtySlug: "bi-weekly-terrace-house-cleaning", relatedProblems: ["mold-in-bathroom-after-cleaning"], relatedBlogs: [] },
      { specialtySlug: "office-cleaning-small-office-1-500-sqft", relatedProblems: ["mold-in-bathroom-after-cleaning"], relatedBlogs: [] },
      { specialtySlug: "one-off-spring-clean", relatedProblems: ["stubborn-bathroom-limescale", "mold-in-bathroom-after-cleaning"], relatedBlogs: [] },
    ],
  },
  "deep-cleaning": {
    serviceSlug: "deep-cleaning",
    relatedServices: ["cleaning", "post-renovation-cleaning"],
    relatedProblems: PROB["deep-cleaning"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["deep-cleaning-faq"],
    relatedBlogs: BLOG["deep-cleaning"],
    targetQueries: ["deep cleaning KL", "move out clean Selangor", "disinfection clean Malaysia"],
    specialties: [
      { specialtySlug: "condo-move-out-deep-clean-1-000-sqft", relatedProblems: ["move-out-condo-deep-clean", "stubborn-grout-stains-after-deep-clean"], relatedBlogs: [] },
      { specialtySlug: "terrace-house-deep-clean-2-000-sqft", relatedProblems: ["move-out-condo-deep-clean"], relatedBlogs: [] },
      { specialtySlug: "post-illness-disinfection-clean", relatedProblems: ["move-out-condo-deep-clean"], relatedBlogs: [] },
      { specialtySlug: "allergy-season-refresh", relatedProblems: ["move-out-condo-deep-clean", "construction-dust-returning"], relatedBlogs: [] },
    ],
  },
  "post-renovation-cleaning": {
    serviceSlug: "post-renovation-cleaning",
    relatedServices: ["deep-cleaning", "cleaning", "house-renovation"],
    relatedProblems: PROB["post-renovation-cleaning"],
    topAreas: KL_SELANGOR_AREAS,
    faqSlugs: ["post-renovation-cleaning-faq"],
    relatedBlogs: BLOG["post-renovation-cleaning"],
    targetQueries: ["post renovation cleaning KL", "construction dust clean Selangor", "grout haze removal Malaysia"],
    specialties: [
      { specialtySlug: "condo-post-renovation-clean-1-000-sqft", relatedProblems: ["construction-dust-returning", "cement-splatter-tile-clean"], relatedBlogs: [] },
      { specialtySlug: "terrace-house-post-renovation-clean-2-000-sqft", relatedProblems: ["construction-dust-returning", "cement-splatter-tile-clean"], relatedBlogs: [] },
      { specialtySlug: "new-tiles-grout-haze-removal", relatedProblems: ["cement-splatter-tile-clean", "stubborn-grout-stains-after-deep-clean"], relatedBlogs: [] },
      { specialtySlug: "construction-debris-removal", relatedProblems: ["construction-dust-returning", "cement-splatter-tile-clean"], relatedBlogs: [] },
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
  welding: {
    serviceSlug: "welding",
    relatedServices: ["autogate", "glass-aluminium"],
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

/* ──────────────────────────────────────────────────────────────────────────
 * Validation
 * ────────────────────────────────────────────────────────────────────────── */

const VALID_SERVICES = new Set(Object.keys(servicesData));
const VALID_PROBLEMS = new Set(problemPages.map((p) => p.slug));
const VALID_BLOGS = new Set(publishedBlogSlugs);

/** Valid specialty slugs per service, keyed by service slug. */
const VALID_SPECIALTIES: Record<string, Set<string>> = Object.fromEntries(
  Object.values(servicesData).map((s) => [
    s.slug,
    new Set(s.subServices.map((sub) => slugify(sub.name))),
  ]),
);

export type TopicalMapIssue = {
  serviceSlug: string;
  field: string;
  value: string;
  message: string;
};

/**
 * Validates every slug referenced by the topical authority map against the
 * source-of-truth data. Returns a list of issues (empty = fully valid).
 * Run via `scripts/validate-topical-map.ts` in CI / prebuild.
 */
export function validateTopicalAuthorityMap(): TopicalMapIssue[] {
  const issues: TopicalMapIssue[] = [];
  const push = (serviceSlug: string, field: string, value: string, message: string) =>
    issues.push({ serviceSlug, field, value, message });

  for (const [slug, silo] of Object.entries(topicalAuthorityMap)) {
    if (!VALID_SERVICES.has(slug)) push(slug, "serviceSlug", slug, "unknown service slug");

    // Ensure exactly every service pillar has a complete entry (no Handyman fallback).
    silo.relatedServices.forEach((ref) => {
      if (!VALID_SERVICES.has(ref)) push(slug, "relatedServices", ref, "unknown service slug");
    });
    silo.relatedProblems.forEach((ref) => {
      if (!VALID_PROBLEMS.has(ref)) push(slug, "relatedProblems", ref, "unknown problem slug");
    });
    silo.relatedBlogs.forEach((ref) => {
      if (!VALID_BLOGS.has(ref)) push(slug, "relatedBlogs", ref, "unknown blog slug");
    });
    silo.topAreas.forEach((ref) => {
      if (!/^[a-z0-9-]+$/.test(ref)) push(slug, "topAreas", ref, "malformed area slug");
    });

    for (const spec of silo.specialties) {
      const validSpecs = VALID_SPECIALTIES[slug];
      if (!validSpecs?.has(spec.specialtySlug)) {
        push(slug, `specialties.${spec.specialtySlug}`, spec.specialtySlug, "unknown specialty slug for this service");
      }
      spec.relatedProblems.forEach((ref) => {
        if (!VALID_PROBLEMS.has(ref)) push(slug, `specialties.${spec.specialtySlug}.relatedProblems`, ref, "unknown problem slug");
      });
      spec.relatedBlogs.forEach((ref) => {
        if (!VALID_BLOGS.has(ref)) push(slug, `specialties.${spec.specialtySlug}.relatedBlogs`, ref, "unknown blog slug");
      });
    }
  }

  // Ensure every one of the 28 service pillars is present (completeness gate).
  for (const s of Object.keys(servicesData)) {
    if (!topicalAuthorityMap[s]) push(s, "serviceSlug", s, "missing topical map entry");
  }

  // Ensure every specialty of every service is represented (coverage gate).
  for (const s of Object.values(servicesData)) {
    for (const sub of s.subServices) {
      const specSlug = slugify(sub.name);
      const silo = topicalAuthorityMap[s.slug];
      if (!silo?.specialties.some((spec) => spec.specialtySlug === specSlug)) {
        push(s.slug, `specialties.${specSlug}`, specSlug, "specialty missing from topical map");
      }
    }
  }

  return issues;
}
