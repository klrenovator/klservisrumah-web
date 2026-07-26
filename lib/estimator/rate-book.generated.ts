/**
 * AUTO-GENERATED — DO NOT EDIT BY HAND.
 *
 * Produced by `scripts/generate-rate-book.ts`, which runs automatically on
 * every `npm run build`. Every value below is distilled from the pricing
 * published on this website:
 *
 *   • config/services-data.ts  → startPrice + subServices[].price
 *   • config/market-rates.ts   → publishedRate + marketRange
 *
 * Change a price in either of those files and this file follows on the next
 * build. Editing it directly will be overwritten.
 */

export type RateRange = { low: number; high: number };

export const RATES = {
  "painting": {
    "interiorSqft": {
      "low": 1.5,
      "high": 6.8
    },
    "exteriorSqft": {
      "low": 2.5,
      "high": 6
    },
    "roomMinimum": 450,
    "exteriorMinimum": 2200,
    "repairMinimum": 180,
    "skimWallSqft": 5,
    "skimCeilingSqft": 6,
    "crackLinearFt": 22,
    "dampRemedial": 350,
    "callOut": 100,
    "cleaning": 180
  },
  "ceiling": {
    "flatSqft": 10,
    "tieredSqft": 14,
    "coveSqft": 22,
    "reskimSqft": 8,
    "partitionSqft": 11,
    "repairMinimum": 220,
    "installPublished": 10,
    "repairBand": {
      "low": 180,
      "high": 1500
    },
    "installBand": {
      "low": 6,
      "high": 15
    },
    "downlightPoint": 120,
    "fanPoint": 220,
    "ceilingPaintSqft": 6
  },
  "plumbing": {
    "minorRepair": 150,
    "minorBand": {
      "low": 80,
      "high": 500
    },
    "leakDiagnosis": 220,
    "drain": 180,
    "drainBand": {
      "low": 150,
      "high": 500
    },
    "fixtureInstall": 150,
    "heaterService": 180,
    "heaterRepair": 180,
    "instantHeater": 250,
    "storageHeater": 420
  },
  "waterproofing": {
    "puPoint": 300,
    "puBand": {
      "low": 80,
      "high": 350
    },
    "bathroom": 1000,
    "bathroomBand": {
      "low": 800,
      "high": 3500
    },
    "bathroomHackBand": {
      "low": 4500,
      "high": 9000
    },
    "wallDamp": 350,
    "roofDiagnosis": 380,
    "roofMembraneSqft": 26,
    "gutter": 320,
    "ceilingRepair": 220
  },
  "handyman": {
    "callOut": 100,
    "tvMount": 150,
    "tvBand": {
      "low": 80,
      "high": 300
    },
    "generalBand": {
      "low": 60,
      "high": 300
    },
    "shelf": 100,
    "powerPoint": 150,
    "lightPoint": 120,
    "tvConsole": 1500
  }
} as const;

/** Published price strings, quoted verbatim in estimator explanations. */
export const PRICE_LABELS = {
  "painting.interior": "From RM 450 / room",
  "painting.exterior": "From RM 2,200",
  "painting.repair": "From RM 180",
  "skim.wall": "From RM 5 / sq ft",
  "skim.ceiling": "From RM 6 / sq ft",
  "ceiling.repair": "From RM 220",
  "ceiling.partition": "From RM 11 / sq ft",
  "plasterCeiling.flat": "From RM 10 / sq ft",
  "plasterCeiling.tiered": "From RM 14 / sq ft",
  "plasterCeiling.cove": "From RM 22 / sq ft",
  "plasterCeiling.reskim": "From RM 8 / sq ft",
  "plumbing.leak": "From RM 220",
  "plumbing.drain": "From RM 180",
  "plumbing.fixture": "From RM 150",
  "waterHeater.repair": "From RM 180",
  "waterHeater.instant": "From RM 250",
  "waterHeater.storage": "From RM 420",
  "waterproofing.pu": "From RM 300 / point",
  "waterproofing.bathroom": "From RM 1,000",
  "waterproofing.wallDamp": "From RM 350",
  "roof.diagnosis": "From RM 380",
  "roof.gutter": "From RM 320",
  "handyman.tv": "From RM 150",
  "handyman.shelf": "From RM 100",
  "electrical.powerPoint": "From RM 150 / point",
  "lighting.downlight": "From RM 120 / point",
  "ceilingFan.install": "From RM 220",
  "carpentry.tvConsole": "From RM 1,500"
} as const;

export type PriceLabelKey = keyof typeof PRICE_LABELS;
