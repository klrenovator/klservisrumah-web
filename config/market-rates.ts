export type MarketRateItem = {
  serviceSlug: "painting" | "plumbing" | "ceiling" | "waterproofing" | "handyman" | "aircon";
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
    publishedRate: "From RM 450 / room",
    marketRange: "RM 300–RM 900 / room or RM 1.50–RM 6.80 / sq ft",
    pricingUnit: "room / sq ft",
    validationNote: "Aligned to typical Klang Valley 2026 room-painting ranges; final quote depends on wall repair, ceiling height, paint grade, and protection scope.",
    lastReviewed: "2026-07-25"
  },
  {
    serviceSlug: "painting",
    label: "Exterior house painting",
    publishedRate: "From RM 2,200",
    marketRange: "RM 2.50–RM 6.00 / sq ft depending on access and paint system",
    pricingUnit: "job / sq ft",
    validationNote: "Starts at small terrace or limited facade scope; full landed homes require measured quotation.",
    lastReviewed: "2026-07-25"
  },
  {
    serviceSlug: "plumbing",
    label: "Minor plumbing repair",
    publishedRate: "From RM 280",
    marketRange: "RM 80–RM 500 depending on repair complexity",
    pricingUnit: "task",
    validationNote: "Within the usual local range for tap, valve, sink, minor pipe, and troubleshooting tasks.",
    lastReviewed: "2026-07-25"
  },
  {
    serviceSlug: "plumbing",
    label: "Drain unclogging",
    publishedRate: "From RM 180",
    marketRange: "RM 150–RM 500 depending on blockage depth",
    pricingUnit: "task",
    validationNote: "Aligned with local drain and toilet choke rates; severe main drain cases quoted separately.",
    lastReviewed: "2026-07-25"
  },
  {
    serviceSlug: "ceiling",
    label: "Plaster ceiling repair",
    publishedRate: "From RM 220",
    marketRange: "RM 180–RM 1,500+ depending on board and frame damage",
    pricingUnit: "task / area",
    validationNote: "Small patch repairs start at standard callout scope; larger replacement priced by measured area.",
    lastReviewed: "2026-07-25"
  },
  {
    serviceSlug: "ceiling",
    label: "Plaster ceiling installation",
    publishedRate: "From RM 10 / sq ft",
    marketRange: "RM 6–RM 15 / sq ft depending on design",
    pricingUnit: "sq ft",
    validationNote: "Within standard Klang Valley rates for plain gypsum ceiling; L-box and tiered designs cost more.",
    lastReviewed: "2026-07-25"
  },
  {
    serviceSlug: "waterproofing",
    label: "PU injection grouting",
    publishedRate: "From RM 300 / point",
    marketRange: "RM 80–RM 350 / point depending on leak severity",
    pricingUnit: "injection point",
    validationNote: "Fits the typical range for active concrete slab leaks where point count and access vary.",
    lastReviewed: "2026-07-25"
  },
  {
    serviceSlug: "waterproofing",
    label: "Bathroom / wet-area waterproofing",
    publishedRate: "From RM 1,000",
    marketRange: "RM 800–RM 3,500 no-hack or RM 4,500–RM 9,000 with hacking",
    pricingUnit: "bathroom / area",
    validationNote: "Starting point is for limited treatment; full hacking and retile scope needs site quotation.",
    lastReviewed: "2026-07-25"
  },
  {
    serviceSlug: "handyman",
    label: "General handyman task",
    publishedRate: "From RM 280",
    marketRange: "RM 40–RM 180 / hour or RM 60–RM 300 per common task",
    pricingUnit: "task",
    validationNote: "Fair entry point for small installation, curtain, shelf, or lock adjustment jobs.",
    lastReviewed: "2026-07-25"
  },
  {
    serviceSlug: "handyman",
    label: "TV wall mounting",
    publishedRate: "From RM 150",
    marketRange: "RM 80–RM 300+ depending on TV size and wall type",
    pricingUnit: "task",
    validationNote: "Quote adjusts for TV size, bracket type, wall material, cable trunking, and anchor requirements.",
    lastReviewed: "2026-07-25"
  },
  {
    serviceSlug: "aircon",
    label: "Wall-mounted basic servicing",
    publishedRate: "From RM 129",
    marketRange: "RM 99–RM 195 depending on HP (1.0–3.5 HP)",
    pricingUnit: "unit",
    validationNote: "Minimum starting price; final cost depends on unit HP, condition and access, confirmed after inspection.",
    lastReviewed: "2026-08-17"
  },
  {
    serviceSlug: "aircon",
    label: "Pressure chemical wash",
    publishedRate: "From RM 156",
    marketRange: "RM 120–RM 260 depending on HP and unit type",
    pricingUnit: "unit",
    validationNote: "Wall, window and ceiling cassette units priced by HP; premium chemical brands quoted separately.",
    lastReviewed: "2026-08-17"
  },
  {
    serviceSlug: "aircon",
    label: "Chemical overhaul",
    publishedRate: "From RM 286",
    marketRange: "RM 220–RM 650 depending on HP and unit type",
    pricingUnit: "unit",
    validationNote: "Full dismantle-and-wash overhaul; the definitive fix for chronic water leaks.",
    lastReviewed: "2026-08-17"
  },
  {
    serviceSlug: "aircon",
    label: "Gas top-up (R22 / R410A / R32)",
    publishedRate: "RM 2.50–3.00 / PSI",
    marketRange: "RM 2.50–RM 3.00 per PSI depending on refrigerant type",
    pricingUnit: "PSI",
    validationNote: "Charged on the actual PSI required after on-site inspection; leak check included.",
    lastReviewed: "2026-08-17"
  },
  {
    serviceSlug: "aircon",
    label: "New wall-mounted installation",
    publishedRate: "From RM 259",
    marketRange: "RM 199–RM 584 depending on HP",
    pricingUnit: "unit",
    validationNote: "Installation only — the unit is not included. Includes 7 ft copper pipe, insulation, wiring and commissioning.",
    lastReviewed: "2026-08-17"
  },
  {
    serviceSlug: "aircon",
    label: "Repair diagnosis & spare parts",
    publishedRate: "From RM 114",
    marketRange: "RM 88–RM 1,040 depending on the faulty part",
    pricingUnit: "task",
    validationNote: "Diagnostic fee waived if repaired the same visit; spare parts carry a 3-month warranty.",
    lastReviewed: "2026-08-17"
  },
  {
    serviceSlug: "aircon",
    label: "Dismantling & relocation",
    publishedRate: "From RM 117",
    marketRange: "RM 90–RM 455 depending on scope and location",
    pricingUnit: "task",
    validationNote: "Dismantle only, nearby reinstall, or different-location relocation, priced by HP and distance.",
    lastReviewed: "2026-08-17"
  }
];

export function getMarketRatesForService(serviceSlug: MarketRateItem["serviceSlug"]) {
  return marketRateBaseline.filter((item) => item.serviceSlug === serviceSlug);
}
