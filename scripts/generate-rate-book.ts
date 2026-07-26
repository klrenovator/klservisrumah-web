/**
 * Rate-book code generator.
 *
 * `config/services-data.ts` is ~3,300 lines of trilingual copy. Importing it
 * from the estimator dragged a 436 KB chunk into the client bundle on every
 * tool page purely to read a handful of prices out of it.
 *
 * This script runs before every build and distils those two published pricing
 * sources into `lib/estimator/rate-book.generated.ts` — a flat object of
 * numbers and short label strings. The estimators import the generated file, so
 * the client ships kilobytes instead of hundreds of kilobytes, while the rates
 * still come from exactly the same published prices and can never drift: the
 * file is regenerated on every `npm run build`.
 *
 * Usage: npm run gen:rates   (wired into `prebuild`)
 */

import fs from "node:fs";
import path from "node:path";
import { servicesData } from "../config/services-data.ts";
import { marketRateBaseline, type MarketRateItem } from "../config/market-rates.ts";

const AMOUNT = /RM\s*([\d,]+(?:\.\d+)?)/gi;

function parseAmount(text: string | undefined): number | null {
  if (!text) return null;
  AMOUNT.lastIndex = 0;
  const match = AMOUNT.exec(text);
  if (!match) return null;
  const value = Number(match[1].replace(/,/g, ""));
  return Number.isFinite(value) ? value : null;
}

function parseAmounts(text: string | undefined): number[] {
  if (!text) return [];
  const out: number[] = [];
  AMOUNT.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = AMOUNT.exec(text)) !== null) {
    const value = Number(match[1].replace(/,/g, ""));
    if (Number.isFinite(value)) out.push(value);
  }
  return out;
}

type Range = { low: number; high: number };

function parseRange(text: string | undefined, unitHint?: string): Range | null {
  if (!text) return null;
  const clauses = text.split(/\bor\b/i).map((clause) => clause.trim());
  const candidates = unitHint
    ? clauses.filter((clause) => clause.toLowerCase().includes(unitHint.toLowerCase()))
    : clauses;
  const pool = candidates.length ? candidates : clauses;
  for (const clause of pool) {
    const amounts = parseAmounts(clause);
    if (amounts.length >= 2) return { low: amounts[0], high: amounts[1] };
  }
  const amounts = parseAmounts(text);
  if (amounts.length >= 2) return { low: amounts[0], high: amounts[1] };
  if (amounts.length === 1) return { low: amounts[0], high: amounts[0] };
  return null;
}

function findSub(slug: string, fragment: string) {
  const service = servicesData[slug];
  if (!service) return undefined;
  const needle = fragment.toLowerCase();
  return (
    service.subServices.find((item) => item.name.toLowerCase() === needle) ??
    service.subServices.find((item) => item.name.toLowerCase().includes(needle))
  );
}

/** Sub-service price + its published label, e.g. [450, "From RM 450 / room"]. */
function sub(slug: string, fragment: string): { value: number; label: string } {
  const found = findSub(slug, fragment);
  const value = parseAmount(found?.price);
  if (value === null) {
    throw new Error(
      `[rate-book] No published price found for "${fragment}" in service "${slug}". ` +
        `The estimator would otherwise silently fall back to a wrong number.`
    );
  }
  return { value, label: found!.price };
}

function servicePrice(slug: string): number {
  const value = parseAmount(servicesData[slug]?.startPrice);
  if (value === null) throw new Error(`[rate-book] No startPrice for service "${slug}".`);
  return value;
}

function marketRow(serviceSlug: MarketRateItem["serviceSlug"], fragment: string) {
  const needle = fragment.toLowerCase();
  const row = marketRateBaseline.find(
    (item) => item.serviceSlug === serviceSlug && item.label.toLowerCase().includes(needle)
  );
  if (!row) throw new Error(`[rate-book] No market-rate row matching "${fragment}" for "${serviceSlug}".`);
  return row;
}

function band(serviceSlug: MarketRateItem["serviceSlug"], fragment: string, unitHint?: string): Range {
  const parsed = parseRange(marketRow(serviceSlug, fragment).marketRange, unitHint);
  if (!parsed) throw new Error(`[rate-book] Could not parse a range for "${fragment}" (${serviceSlug}).`);
  return parsed;
}

/* ── Definition of the rate book ─────────────────────────────────────────── */

const rates = {
  painting: {
    interiorSqft: band("painting", "Interior room painting", "sq ft"),
    exteriorSqft: band("painting", "Exterior house painting", "sq ft"),
    roomMinimum: sub("painting", "Interior House Painting").value,
    exteriorMinimum: sub("painting", "Exterior House Painting").value,
    repairMinimum: sub("painting", "Wall Crack & Moisture Repair").value,
    skimWallSqft: sub("skim-coat", "Wall Skim Coating").value,
    skimCeilingSqft: sub("skim-coat", "Ceiling Skim Coating").value,
    crackLinearFt: sub("skim-coat", "Crack & Joint Repair").value,
    dampRemedial: sub("waterproofing", "Wall Dampness & Efflorescence Repair").value,
    callOut: servicePrice("handyman"),
    cleaning: servicePrice("cleaning")
  },
  ceiling: {
    flatSqft: sub("plaster-ceiling", "Flat Plaster Ceiling").value,
    tieredSqft: sub("plaster-ceiling", "Tiered & L-Box Ceiling").value,
    coveSqft: sub("plaster-ceiling", "Cove & Curved Ceiling").value,
    reskimSqft: sub("plaster-ceiling", "Ceiling Repair & Re-Skim").value,
    partitionSqft: sub("ceiling", "Gypsum Board Partition Wall").value,
    repairMinimum: sub("ceiling", "Water-Damaged Ceiling Repair").value,
    installPublished: sub("ceiling", "Plaster Ceiling Installation").value,
    repairBand: band("ceiling", "Plaster ceiling repair"),
    installBand: band("ceiling", "Plaster ceiling installation", "sq ft"),
    downlightPoint: sub("lighting", "LED Downlight Installation").value,
    fanPoint: sub("ceiling-fan", "New Ceiling Fan Installation").value,
    ceilingPaintSqft: sub("skim-coat", "Ceiling Skim Coating").value
  },
  plumbing: {
    minorRepair: servicePrice("plumbing"),
    minorBand: band("plumbing", "Minor plumbing repair"),
    leakDiagnosis: sub("plumbing", "Water Leakage Diagnosis").value,
    drain: sub("plumbing", "Drain Unclogging").value,
    drainBand: band("plumbing", "Drain unclogging"),
    fixtureInstall: sub("plumbing", "Toilet, Tap & Sink Installation").value,
    heaterService: sub("plumbing", "Water Heater & Pump Installation").value,
    heaterRepair: sub("water-heater", "Water Heater Repair").value,
    instantHeater: sub("water-heater", "Instant Water Heater Installation").value,
    storageHeater: sub("water-heater", "Storage Tank Heater Installation").value
  },
  waterproofing: {
    puPoint: sub("waterproofing", "PU High-Pressure Injection Grouting").value,
    puBand: band("waterproofing", "PU injection grouting", "point"),
    bathroom: sub("waterproofing", "Bathroom & Wet Area Waterproofing").value,
    bathroomBand: band("waterproofing", "Bathroom", "no-hack"),
    bathroomHackBand: band("waterproofing", "Bathroom", "hacking"),
    wallDamp: sub("waterproofing", "Wall Dampness & Efflorescence Repair").value,
    roofDiagnosis: sub("roof-repair", "Roof Leak Diagnosis & Repair").value,
    roofMembraneSqft: sub("roof-repair", "Full Torch-On Membrane Waterproofing").value,
    gutter: sub("roof-repair", "Gutter Cleaning & Realignment").value,
    ceilingRepair: sub("ceiling", "Water-Damaged Ceiling Repair").value
  },
  handyman: {
    callOut: servicePrice("handyman"),
    tvMount: sub("handyman", "Heavy TV Wall Mounting").value,
    tvBand: band("handyman", "TV wall mounting"),
    generalBand: band("handyman", "General handyman task", "task"),
    shelf: sub("handyman", "Curtains, Blinds & Shelves Hanging").value,
    powerPoint: sub("electrical", "New Power Point & Switch Installation").value,
    lightPoint: sub("lighting", "LED Downlight Installation").value,
    tvConsole: sub("carpentry", "TV Console & Feature Wall").value
  }
};

/** Published price strings quoted verbatim in estimator explanations. */
const labelPairs: [string, string, string][] = [
  ["painting.interior", "painting", "Interior House Painting"],
  ["painting.exterior", "painting", "Exterior House Painting"],
  ["painting.repair", "painting", "Wall Crack & Moisture Repair"],
  ["skim.wall", "skim-coat", "Wall Skim Coating"],
  ["skim.ceiling", "skim-coat", "Ceiling Skim Coating"],
  ["ceiling.repair", "ceiling", "Water-Damaged Ceiling Repair"],
  ["ceiling.partition", "ceiling", "Gypsum Board Partition Wall"],
  ["plasterCeiling.flat", "plaster-ceiling", "Flat Plaster Ceiling"],
  ["plasterCeiling.tiered", "plaster-ceiling", "Tiered & L-Box Ceiling"],
  ["plasterCeiling.cove", "plaster-ceiling", "Cove & Curved Ceiling"],
  ["plasterCeiling.reskim", "plaster-ceiling", "Ceiling Repair & Re-Skim"],
  ["plumbing.leak", "plumbing", "Water Leakage Diagnosis"],
  ["plumbing.drain", "plumbing", "Drain Unclogging"],
  ["plumbing.fixture", "plumbing", "Toilet, Tap & Sink Installation"],
  ["waterHeater.repair", "water-heater", "Water Heater Repair"],
  ["waterHeater.instant", "water-heater", "Instant Water Heater Installation"],
  ["waterHeater.storage", "water-heater", "Storage Tank Heater Installation"],
  ["waterproofing.pu", "waterproofing", "PU High-Pressure Injection Grouting"],
  ["waterproofing.bathroom", "waterproofing", "Bathroom & Wet Area Waterproofing"],
  ["waterproofing.wallDamp", "waterproofing", "Wall Dampness & Efflorescence Repair"],
  ["roof.diagnosis", "roof-repair", "Roof Leak Diagnosis & Repair"],
  ["roof.gutter", "roof-repair", "Gutter Cleaning & Realignment"],
  ["handyman.tv", "handyman", "Heavy TV Wall Mounting"],
  ["handyman.shelf", "handyman", "Curtains, Blinds & Shelves Hanging"],
  ["electrical.powerPoint", "electrical", "New Power Point & Switch Installation"],
  ["lighting.downlight", "lighting", "LED Downlight Installation"],
  ["ceilingFan.install", "ceiling-fan", "New Ceiling Fan Installation"],
  ["carpentry.tvConsole", "carpentry", "TV Console & Feature Wall"]
];

const labels = Object.fromEntries(labelPairs.map(([key, slug, fragment]) => [key, sub(slug, fragment).label]));

/* ── Per-service scope catalogue ─────────────────────────────────────────── */

/**
 * Every service's published sub-services, distilled into the minimum a
 * calculator needs: the amount, the unit it is charged in, and the exact
 * published string to quote back to the customer.
 *
 * This is what lets a single generic estimator cover all 28 services without
 * anyone hand-writing 28 specs — and it guarantees the calculator can never
 * show a rate that is not published on the service page itself.
 */
type ScopeUnit = "job" | "sqft" | "linearft" | "point" | "visit" | "room" | "panel";

function unitOf(price: string): ScopeUnit {
  const tail = price.split("/")[1]?.trim().toLowerCase() ?? "";
  if (!tail) return "job";
  if (tail.startsWith("sq ft")) return "sqft";
  // "linier ft" is the spelling used in services-data.ts.
  if (tail.startsWith("linier ft") || tail.startsWith("linear ft") || tail === "ft") return "linearft";
  if (tail.startsWith("point")) return "point";
  if (tail.startsWith("visit")) return "visit";
  if (tail.startsWith("room")) return "room";
  if (tail.startsWith("panel")) return "panel";
  return "job";
}

const serviceScopes = Object.fromEntries(
  Object.values(servicesData).map((service) => [
    service.slug,
    {
      /** `startPrice` — the lowest published figure for the whole service. */
      startPrice: parseAmount(service.startPrice) ?? 0,
      scopes: service.subServices
        // "On Quote" scopes carry no number, so they cannot be estimated. They
        // are surfaced separately by the UI as a "request a quote" route.
        .filter((item) => parseAmount(item.price) !== null)
        .map((item) => ({
          name: item.name,
          amount: parseAmount(item.price)!,
          unit: unitOf(item.price),
          published: item.price,
          desc: item.desc
        })),
      /** Scopes we publish but deliberately do not price without a site visit. */
      quoteOnly: service.subServices
        .filter((item) => parseAmount(item.price) === null)
        .map((item) => ({ name: item.name, desc: item.desc }))
    }
  ])
);

for (const [slug, entry] of Object.entries(serviceScopes)) {
  if (!entry.scopes.length) {
    throw new Error(
      `[rate-book] Service "${slug}" has no numerically-priced sub-service, so no estimator can be generated for it.`
    );
  }
}

const output = `/**
 * AUTO-GENERATED — DO NOT EDIT BY HAND.
 *
 * Produced by \`scripts/generate-rate-book.ts\`, which runs automatically on
 * every \`npm run build\`. Every value below is distilled from the pricing
 * published on this website:
 *
 *   • config/services-data.ts  → startPrice + subServices[].price
 *   • config/market-rates.ts   → publishedRate + marketRange
 *
 * Change a price in either of those files and this file follows on the next
 * build. Editing it directly will be overwritten.
 */

export type RateRange = { low: number; high: number };

export const RATES = ${JSON.stringify(rates, null, 2)} as const;

/** Published price strings, quoted verbatim in estimator explanations. */
export const PRICE_LABELS = ${JSON.stringify(labels, null, 2)} as const;

export type PriceLabelKey = keyof typeof PRICE_LABELS;

/** How a published sub-service rate is charged. */
export type ScopeUnit = "job" | "sqft" | "linearft" | "point" | "visit" | "room" | "panel";

export type PublishedScope = {
  name: string;
  amount: number;
  unit: ScopeUnit;
  /** The published price string, quoted verbatim to the customer. */
  published: string;
  desc: string;
};

export type ServiceScopeBook = {
  startPrice: number;
  scopes: PublishedScope[];
  quoteOnly: { name: string; desc: string }[];
};

/**
 * Published sub-service pricing for all ${Object.keys(serviceScopes).length} services, powering the generic
 * per-service estimator at \`/services/[slug]\` and \`/tools/[slug]-calculator\`.
 */
export const SERVICE_SCOPES: Record<string, ServiceScopeBook> = ${JSON.stringify(serviceScopes, null, 2)};
`;

const target = path.join(process.cwd(), "lib", "estimator", "rate-book.generated.ts");
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, output);

const count = labelPairs.length + Object.values(rates).reduce((total, group) => total + Object.keys(group).length, 0);
console.log(`✓ Rate book generated from published pricing (${count} values) → ${path.relative(process.cwd(), target)}`);
