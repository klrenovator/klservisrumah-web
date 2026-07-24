export type MarketRateItem = {
  serviceSlug: "painting" | "plumbing" | "ceiling" | "waterproofing" | "handyman";
  label: string;
  publishedRate: string;
  marketRange: string;
  pricingUnit: string;
  validationNote: string;
  lastReviewed: string;
};

export const marketRateBaseline: MarketRateItem[] = [
  {
    serviceSlug: "painting",
    label: "Interior room painting",
    publishedRate: "From RM 400 / room",
    marketRange: "RM 300–RM 900 / room or RM 1.50–RM 6.80 / sq ft",
    pricingUnit: "room / sq ft",
    validationNote: "Aligned to mid-market Klang Valley 2026 room-painting ranges; final quote depends on wall repair, ceiling height, paint grade, and protection scope.",
    lastReviewed: "2026-07-24"
  },
  {
    serviceSlug: "painting",
    label: "Exterior house painting",
    publishedRate: "From RM 1,800",
    marketRange: "RM 2.50–RM 6.00 / sq ft depending on access and paint system",
    pricingUnit: "job / sq ft",
    validationNote: "Starts at small terrace or limited facade scope; full landed homes require measured quotation.",
    lastReviewed: "2026-07-24"
  },
  {
    serviceSlug: "plumbing",
    label: "Minor plumbing repair",
    publishedRate: "From RM 120",
    marketRange: "RM 80–RM 500 depending on repair complexity",
    pricingUnit: "task",
    validationNote: "Within market range for tap, valve, sink, minor pipe, and troubleshooting tasks.",
    lastReviewed: "2026-07-24"
  },
  {
    serviceSlug: "plumbing",
    label: "Drain unclogging",
    publishedRate: "From RM 150",
    marketRange: "RM 150–RM 500 depending on blockage depth",
    pricingUnit: "task",
    validationNote: "Aligned with local drain and toilet choke market rates; severe main drain cases quoted separately.",
    lastReviewed: "2026-07-24"
  },
  {
    serviceSlug: "ceiling",
    label: "Plaster ceiling repair",
    publishedRate: "From RM 180",
    marketRange: "RM 180–RM 1,500+ depending on board and frame damage",
    pricingUnit: "task / area",
    validationNote: "Small patch repairs start at market-rate callout scope; larger replacement priced by measured area.",
    lastReviewed: "2026-07-24"
  },
  {
    serviceSlug: "ceiling",
    label: "Plaster ceiling installation",
    publishedRate: "From RM 8 / sq ft",
    marketRange: "RM 6–RM 15 / sq ft depending on design",
    pricingUnit: "sq ft",
    validationNote: "Within standard Klang Valley rates for plain gypsum ceiling; L-box and tiered designs cost more.",
    lastReviewed: "2026-07-24"
  },
  {
    serviceSlug: "waterproofing",
    label: "PU injection grouting",
    publishedRate: "From RM 250 / point",
    marketRange: "RM 80–RM 300 / point depending on leak severity",
    pricingUnit: "injection point",
    validationNote: "Sits in market range for active concrete slab leaks where point count and access vary.",
    lastReviewed: "2026-07-24"
  },
  {
    serviceSlug: "waterproofing",
    label: "Bathroom / wet-area waterproofing",
    publishedRate: "From RM 850",
    marketRange: "RM 800–RM 3,500 no-hack or RM 4,500–RM 9,000 with hacking",
    pricingUnit: "bathroom / area",
    validationNote: "Starting point is for limited treatment; full hacking and retile scope needs site quotation.",
    lastReviewed: "2026-07-24"
  },
  {
    serviceSlug: "handyman",
    label: "General handyman task",
    publishedRate: "From RM 80",
    marketRange: "RM 40–RM 150 / hour or RM 60–RM 250 per common task",
    pricingUnit: "task",
    validationNote: "Market-rate entry point for small installation, curtain, shelf, or lock adjustment jobs.",
    lastReviewed: "2026-07-24"
  },
  {
    serviceSlug: "handyman",
    label: "TV wall mounting",
    publishedRate: "From RM 120",
    marketRange: "RM 80–RM 250+ depending on TV size and wall type",
    pricingUnit: "task",
    validationNote: "Quote adjusts for TV size, bracket type, wall material, cable trunking, and anchor requirements.",
    lastReviewed: "2026-07-24"
  }
];

export function getMarketRatesForService(serviceSlug: MarketRateItem["serviceSlug"]) {
  return marketRateBaseline.filter((item) => item.serviceSlug === serviceSlug);
}
