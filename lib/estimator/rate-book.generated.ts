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
 * Published sub-service pricing for all 31 services, powering the generic
 * per-service estimator at `/services/[slug]` and `/tools/[slug]-calculator`.
 */
export const SERVICE_SCOPES: Record<string, ServiceScopeBook> = {
  "painting": {
    "startPrice": 450,
    "scopes": [
      {
        "name": "Interior House Painting",
        "amount": 450,
        "unit": "room",
        "published": "From RM 450 / room",
        "desc": "Premium interior wall painting with low-odor, low-VOC washable paint."
      },
      {
        "name": "Exterior House Painting",
        "amount": 2200,
        "unit": "job",
        "published": "From RM 2,200",
        "desc": "Weatherproof, anti-fungal, and UV-resistant exterior coatings for ultimate protection."
      },
      {
        "name": "Wall Crack & Moisture Repair",
        "amount": 180,
        "unit": "job",
        "published": "From RM 180",
        "desc": "Sanding, skimming, structural crack filling, and applying premium moisture sealer primers."
      },
      {
        "name": "Condo & Apartment Painting",
        "amount": 450,
        "unit": "room",
        "published": "From RM 450 / room",
        "desc": "Full interior painting for condominiums and apartments, including walls, ceilings, and feature areas, with lift access planning and furniture protection."
      }
    ],
    "quoteOnly": [
      {
        "name": "Commercial & Office Painting",
        "desc": "Corporate office layouts, shopfronts, and retail spaces painted on tight schedules with minimal business disruption."
      },
      {
        "name": "Ceiling Painting",
        "desc": "Repainting interior ceilings with stain-blocking primers, mould treatment, and washable ceiling paint for a clean, bright finish."
      },
      {
        "name": "Wall Preparation & Priming",
        "desc": "Professional surface preparation — cleaning, crack filling, sanding, sealing and priming — so topcoat paint adheres evenly and lasts longer."
      },
      {
        "name": "Feature Wall Painting",
        "desc": "Designer feature wall finishes — accent colours, two-tone effects, textured and faux finishes — for living rooms, bedrooms, and accent areas."
      }
    ]
  },
  "plumbing": {
    "startPrice": 150,
    "scopes": [
      {
        "name": "Water Leakage Diagnosis & Repair",
        "amount": 220,
        "unit": "job",
        "published": "From RM 220",
        "desc": "Detection of hidden pipe leaks behind walls or underground, followed by precise repair."
      },
      {
        "name": "Toilet, Tap & Sink Installation",
        "amount": 150,
        "unit": "job",
        "published": "From RM 150",
        "desc": "Fitting new toilet bowls, modern kitchen faucets, basins, and heavy-duty sink plumbing."
      },
      {
        "name": "Drain Unclogging & Cleaning",
        "amount": 180,
        "unit": "job",
        "published": "From RM 180",
        "desc": "Clearing stubborn hair, grease, and debris blockages in kitchen drains, floor traps, and toilets."
      },
      {
        "name": "Water Heater & Pump Installation",
        "amount": 180,
        "unit": "job",
        "published": "From RM 180",
        "desc": "Setting up modern instant/storage water heaters and home water pressure booster pumps."
      }
    ],
    "quoteOnly": []
  },
  "ceiling": {
    "startPrice": 220,
    "scopes": [
      {
        "name": "Water-Damaged Ceiling Repair",
        "amount": 220,
        "unit": "job",
        "published": "From RM 220",
        "desc": "Removing moldy, rotting plasterboard, addressing the leak source, and fitting a clean moisture-resistant panel."
      },
      {
        "name": "Plaster Ceiling Installation",
        "amount": 10,
        "unit": "sqft",
        "published": "From RM 10 / sq ft",
        "desc": "Elegant flat, tiered, or L-box plaster ceiling setups with custom cutout channels for downlights."
      },
      {
        "name": "Gypsum Board Partition Wall",
        "amount": 11,
        "unit": "sqft",
        "published": "From RM 11 / sq ft",
        "desc": "Durable, paint-ready partition walls to divide office rooms, bedrooms, or storage areas."
      }
    ],
    "quoteOnly": [
      {
        "name": "Cornice & L-Box Concealed Light Trough",
        "desc": "Custom decorative moldings and ambient indirect LED lighting plaster designs."
      }
    ]
  },
  "waterproofing": {
    "startPrice": 300,
    "scopes": [
      {
        "name": "PU High-Pressure Injection Grouting",
        "amount": 300,
        "unit": "point",
        "published": "From RM 300 / point",
        "desc": "Smart non-destructive polyurethane injection to seal inter-floor concrete slab leaks."
      },
      {
        "name": "Bathroom & Wet Area Waterproofing",
        "amount": 1000,
        "unit": "job",
        "published": "From RM 1,000",
        "desc": "Chemical waterproofing membrane application for showers, toilets, and wet commercial washrooms."
      },
      {
        "name": "Wall Dampness & Efflorescence Repair",
        "amount": 350,
        "unit": "job",
        "published": "From RM 350",
        "desc": "Sanding off salt scaling, sanitizing mold, and applying commercial moisture-blocking barriers."
      }
    ],
    "quoteOnly": [
      {
        "name": "Roof & Concrete Slab Waterproofing",
        "desc": "Heavy-duty elastomeric UV-resistant acrylic or torch-on bituminous membranes for roof slabs and balconies."
      }
    ]
  },
  "handyman": {
    "startPrice": 100,
    "scopes": [
      {
        "name": "Heavy TV Wall Mounting",
        "amount": 150,
        "unit": "job",
        "published": "From RM 150",
        "desc": "Safe, level wall-mounting of TVs up to 85\" on brick, concrete, or gypsum partition walls with hidden wire options."
      },
      {
        "name": "Door, Hinge & Lockset Repair",
        "amount": 120,
        "unit": "job",
        "published": "From RM 120",
        "desc": "Fixing sagging doors, replacing rusty hinges, and installing premium lever locks or smart digital locks."
      },
      {
        "name": "Furniture Assembly (IKEA/Taobao)",
        "amount": 120,
        "unit": "job",
        "published": "From RM 120",
        "desc": "Assembly of complex wardrobes, beds, display cabinets, office desks, and kitchen island carts."
      },
      {
        "name": "Curtains, Blinds & Shelves Hanging",
        "amount": 100,
        "unit": "job",
        "published": "From RM 100",
        "desc": "Secure wall mounting of heavy curtain tracks, roman blinds, floating shelves, mirrors, and picture frames."
      }
    ],
    "quoteOnly": []
  },
  "house-renovation": {
    "startPrice": 22000,
    "scopes": [
      {
        "name": "Full House Renovation Package",
        "amount": 22000,
        "unit": "job",
        "published": "From RM 22,000",
        "desc": "Hacking, structural, ceiling, tiling, electrical, plumbing, painting, and final cleaning."
      },
      {
        "name": "Partial House Renovation",
        "amount": 12000,
        "unit": "job",
        "published": "From RM 12,000",
        "desc": "Targeted renovation for specific areas — kitchen, bathroom, living or bedrooms — with isolated work zones."
      },
      {
        "name": "Terrace House Renovation",
        "amount": 22000,
        "unit": "job",
        "published": "From RM 22,000",
        "desc": "End-to-end terrace house makeover: extension, kitchen, bathroom, flooring, ceiling, electrical and plumbing."
      },
      {
        "name": "Semi-D Renovation",
        "amount": 35000,
        "unit": "job",
        "published": "From RM 35,000",
        "desc": "Semi-D house renovation with structural modifications, car porch, kitchen extension and interior finishes."
      },
      {
        "name": "Bungalow Renovation",
        "amount": 60000,
        "unit": "job",
        "published": "From RM 60,000",
        "desc": "Bungalow full refurbishment including façade, roofing, outdoor, interior and M&E upgrades."
      },
      {
        "name": "Condo Interior Refurbishment",
        "amount": 30000,
        "unit": "job",
        "published": "From RM 30,000",
        "desc": "Full condo interior rebuild including management work-hour compliance, lift protection and debris handling."
      },
      {
        "name": "Apartment Renovation",
        "amount": 18000,
        "unit": "job",
        "published": "From RM 18,000",
        "desc": "Apartment interior renovation with JMB compliance, waterproofing, tiling and painting."
      },
      {
        "name": "Kitchen & Bathroom Makeover",
        "amount": 10000,
        "unit": "job",
        "published": "From RM 10,000",
        "desc": "Demolition, retiling, waterproofing, new cabinetry, plumbing rerouting, and finishing."
      }
    ],
    "quoteOnly": [
      {
        "name": "House Extension",
        "desc": "Kitchen, car porch, balcony or rear extension with brickwork, roofing and authority submission guidance."
      },
      {
        "name": "Commercial Shoplot Renovation",
        "desc": "Retail and F&B shop fit-outs with electrical upgrades, signage readiness, and fast-track delivery."
      },
      {
        "name": "Renovation Contractor Services",
        "desc": "Licensed contractor for design, hacking, structural, M&E, carpentry, painting and handover."
      }
    ]
  },
  "electrical": {
    "startPrice": 150,
    "scopes": [
      {
        "name": "New Power Point & Switch Installation",
        "amount": 150,
        "unit": "point",
        "published": "From RM 150 / point",
        "desc": "Adding new 13A sockets, USB outlets, double-pole switches, and dimmer controls on existing or new circuits."
      },
      {
        "name": "DB Box Upgrade & Rewiring",
        "amount": 2200,
        "unit": "job",
        "published": "From RM 2,200",
        "desc": "Replacing old fuse boxes with modern MCB+RCCB distribution boards and full or partial house rewiring."
      },
      {
        "name": "Lighting Point & Downlight Installation",
        "amount": 120,
        "unit": "point",
        "published": "From RM 120 / point",
        "desc": "Cutting and wiring new ceiling downlight points, pendant points, and track lighting on existing ceilings."
      },
      {
        "name": "Aircond, Water Heater & Oven Point",
        "amount": 220,
        "unit": "point",
        "published": "From RM 220 / point",
        "desc": "Heavy-load 20A–32A dedicated points with proper isolator and cable sizing per appliance."
      }
    ],
    "quoteOnly": []
  },
  "water-heater": {
    "startPrice": 180,
    "scopes": [
      {
        "name": "Instant Water Heater Installation",
        "amount": 250,
        "unit": "job",
        "published": "From RM 250",
        "desc": "Single-point instant shower heater supply and install with proper isolator, water-proof cover, and pressure test."
      },
      {
        "name": "Storage Tank Heater Installation",
        "amount": 420,
        "unit": "job",
        "published": "From RM 420",
        "desc": "Multi-point 15L–50L storage heater installation including wall mounting, pressure relief valve, and pipework."
      },
      {
        "name": "Water Heater Repair & Descaling",
        "amount": 180,
        "unit": "job",
        "published": "From RM 180",
        "desc": "Diagnosing leaks, RCCB trips, slow heating, and noises. Includes descaling and anode-rod check on storage tanks."
      },
      {
        "name": "Heat Pump Water Heater Install",
        "amount": 2200,
        "unit": "job",
        "published": "From RM 2,200",
        "desc": "Energy-efficient heat-pump system installation for landed properties with outdoor condenser mounting."
      }
    ],
    "quoteOnly": []
  },
  "ceiling-fan": {
    "startPrice": 150,
    "scopes": [
      {
        "name": "New Ceiling Fan Installation",
        "amount": 220,
        "unit": "job",
        "published": "From RM 220",
        "desc": "Mounting your supplied fan on a solid fan hook with regulator, wiring, and swing-test included."
      },
      {
        "name": "Ceiling Fan Replacement",
        "amount": 250,
        "unit": "job",
        "published": "From RM 250",
        "desc": "Removing the old fan, safe disposal, and installing your new fan on the existing hook with fresh wiring."
      },
      {
        "name": "DC Motor Smart Fan Install",
        "amount": 320,
        "unit": "job",
        "published": "From RM 320",
        "desc": "Installing modern 5-blade DC inverter fans with remote and smart-home app pairing."
      },
      {
        "name": "Industrial / Shoplot Fan Install",
        "amount": 420,
        "unit": "job",
        "published": "From RM 420",
        "desc": "Large 60-inch industrial fans and high-CFM commercial installations for warehouses, gyms, and F&B."
      }
    ],
    "quoteOnly": []
  },
  "lighting": {
    "startPrice": 120,
    "scopes": [
      {
        "name": "LED Downlight Installation",
        "amount": 120,
        "unit": "point",
        "published": "From RM 120 / point",
        "desc": "Cutting and wiring new downlight points with COB LED fixtures, drivers, and proper heat dissipation."
      },
      {
        "name": "Pendant & Chandelier Install",
        "amount": 180,
        "unit": "job",
        "published": "From RM 180",
        "desc": "Mounting heavy pendants and chandeliers on reinforced ceiling hooks with safety cables."
      },
      {
        "name": "Cove & Strip LED Installation",
        "amount": 22,
        "unit": "linearft",
        "published": "From RM 22 / ft",
        "desc": "Hidden cove LED strip with aluminum profile, dimmer, and driver concealed in ceiling void."
      },
      {
        "name": "Smart Lighting & Dimmer Retrofit",
        "amount": 250,
        "unit": "point",
        "published": "From RM 250 / point",
        "desc": "Wi-Fi, Zigbee, or DALI smart switches and dimmers compatible with Google Home, Alexa, and Apple Home."
      }
    ],
    "quoteOnly": []
  },
  "tiling": {
    "startPrice": 14,
    "scopes": [
      {
        "name": "Floor Tiling Installation",
        "amount": 14,
        "unit": "sqft",
        "published": "From RM 14 / sq ft",
        "desc": "Standard 300x300mm to 600x600mm floor tile installation with cement-sand screed and tile adhesive."
      },
      {
        "name": "Wall Tiling Installation",
        "amount": 16,
        "unit": "sqft",
        "published": "From RM 16 / sq ft",
        "desc": "Kitchen splashback, bathroom wall, and feature wall tiling with straight or brick-bond patterns."
      },
      {
        "name": "Floor Tile Replacement & Tile Hacking",
        "amount": 18,
        "unit": "sqft",
        "published": "From RM 18 / sq ft",
        "desc": "Hacking old tiles, screeding, waterproofing and new tile installation with debris disposal."
      },
      {
        "name": "Porcelain Tiles Installation",
        "amount": 16,
        "unit": "sqft",
        "published": "From RM 16 / sq ft",
        "desc": "Homogeneous porcelain tiles in matte, glossy, wood-look and stone-look finishes with rectified edges."
      },
      {
        "name": "Ceramic Tiles Installation",
        "amount": 14,
        "unit": "sqft",
        "published": "From RM 14 / sq ft",
        "desc": "Ceramic wall and floor tiles for bathrooms, kitchens and balconies with colour-matched grout."
      },
      {
        "name": "Large-Format Slab Tiling",
        "amount": 26,
        "unit": "sqft",
        "published": "From RM 26 / sq ft",
        "desc": "600x1200mm, 800x800mm, 1200x2400mm slabs with self-levelling, suction-cup lifters, and lippage tuning."
      },
      {
        "name": "Mosaic Tiles Installation",
        "amount": 22,
        "unit": "sqft",
        "published": "From RM 22 / sq ft",
        "desc": "Glass, porcelain and stone mosaic for backsplash, shower niche and feature walls with mesh backing."
      },
      {
        "name": "Bathroom Tiling & Waterproofing",
        "amount": 18,
        "unit": "sqft",
        "published": "From RM 18 / sq ft",
        "desc": "Bathroom floor and wall tiling with 3-coat waterproofing membrane and 24-hour ponding test."
      },
      {
        "name": "Kitchen Backsplash Tiling",
        "amount": 18,
        "unit": "sqft",
        "published": "From RM 18 / sq ft",
        "desc": "Kitchen backsplash tiling with subway, mosaic or large format tiles and anti-mould silicone sealing."
      },
      {
        "name": "Tile Repair & Re-Grouting",
        "amount": 22,
        "unit": "sqft",
        "published": "From RM 22 / sq ft",
        "desc": "Removing hollow, cracked or broken tiles, surface prep, replacement, epoxy grout and silicone sealing."
      },
      {
        "name": "Floor Leveling & Self-Leveling",
        "amount": 8,
        "unit": "sqft",
        "published": "From RM 8 / sq ft",
        "desc": "Cement screeding and self-leveling compound to correct uneven floors before tiling."
      }
    ],
    "quoteOnly": []
  },
  "plaster-ceiling": {
    "startPrice": 10,
    "scopes": [
      {
        "name": "Flat Plaster Ceiling",
        "amount": 10,
        "unit": "sqft",
        "published": "From RM 10 / sq ft",
        "desc": "Clean, single-level flat ceiling with skim coat finish — ideal for minimalist modern interiors."
      },
      {
        "name": "False Ceiling Installation",
        "amount": 10,
        "unit": "sqft",
        "published": "From RM 10 / sq ft",
        "desc": "General false ceiling for homes and offices with GI frame and moisture-resistant boards."
      },
      {
        "name": "Gypsum Ceiling",
        "amount": 10,
        "unit": "sqft",
        "published": "From RM 10 / sq ft",
        "desc": "Gypsum board ceiling with fire-rated and moisture-resistant options from Knauf, BNBM, Gyproc."
      },
      {
        "name": "Tiered & L-Box Ceiling",
        "amount": 14,
        "unit": "sqft",
        "published": "From RM 14 / sq ft",
        "desc": "Two or three-tier ceiling with concealed LED trough, L-box profile, and integrated downlight cutouts."
      },
      {
        "name": "Cove & Curved Ceiling",
        "amount": 22,
        "unit": "sqft",
        "published": "From RM 22 / sq ft",
        "desc": "Custom curved, cove, or barrel ceiling with flexible GI framing for ambient indirect lighting."
      },
      {
        "name": "Gypsum Partition & Office Partition",
        "amount": 11,
        "unit": "sqft",
        "published": "From RM 11 / sq ft",
        "desc": "Gypsum board partition for room division, office cubicles and meeting rooms with sound insulation option."
      },
      {
        "name": "Room Partition",
        "amount": 11,
        "unit": "sqft",
        "published": "From RM 11 / sq ft",
        "desc": "Bedroom, study or storage room partition with door opening and electrical point provisions."
      },
      {
        "name": "Feature Wall & Wall Panel",
        "amount": 18,
        "unit": "sqft",
        "published": "From RM 18 / sq ft",
        "desc": "TV feature wall, fluted panel, wainscoting and decorative wall panel with concealed LED."
      },
      {
        "name": "Skim Coat & Wall Plastering",
        "amount": 5,
        "unit": "sqft",
        "published": "From RM 5 / sq ft",
        "desc": "Glass-smooth skim coating and wall plastering for paint-ready finish and crack repair."
      },
      {
        "name": "Wall Crack Repair & Repainting",
        "amount": 180,
        "unit": "job",
        "published": "From RM 180",
        "desc": "Hairline and structural crack filling, sanding, sealer and premium repainting for flawless finish."
      },
      {
        "name": "Ceiling Repair & Re-Skim",
        "amount": 8,
        "unit": "sqft",
        "published": "From RM 8 / sq ft",
        "desc": "Removing water-damaged boards, structural reinforcement, and re-skim coating existing ceilings."
      }
    ],
    "quoteOnly": []
  },
  "skim-coat": {
    "startPrice": 5,
    "scopes": [
      {
        "name": "Wall Skim Coating",
        "amount": 5,
        "unit": "sqft",
        "published": "From RM 5 / sq ft",
        "desc": "Two-coat skim coating on plastered or previously painted walls for a glass-smooth paint-ready finish."
      },
      {
        "name": "Ceiling Skim Coating",
        "amount": 6,
        "unit": "sqft",
        "published": "From RM 6 / sq ft",
        "desc": "Re-skim of existing plaster ceilings to refresh aged surfaces before repainting."
      },
      {
        "name": "Crack & Joint Repair",
        "amount": 22,
        "unit": "linearft",
        "published": "From RM 22 / linier ft",
        "desc": "Opening, routing, and filling of structural and settlement cracks with flexible acrylic filler."
      },
      {
        "name": "Full Condo Re-Skim Package",
        "amount": 4200,
        "unit": "job",
        "published": "From RM 4,200",
        "desc": "Complete skim coat of an entire 1,000 sqft condo unit ready for repainting."
      }
    ],
    "quoteOnly": []
  },
  "flooring": {
    "startPrice": 14,
    "scopes": [
      {
        "name": "SPC Click-Lock Flooring Install",
        "amount": 14,
        "unit": "sqft",
        "published": "From RM 14 / sq ft",
        "desc": "Waterproof stone polymer composite planks with built-in underlay, ideal for whole-home installation."
      },
      {
        "name": "Laminate Flooring Install",
        "amount": 11,
        "unit": "sqft",
        "published": "From RM 11 / sq ft",
        "desc": "Budget-friendly HDF laminate with wood-look finish, AC4–AC5 wear rating for residential traffic."
      },
      {
        "name": "Luxury Vinyl Plank (LVP) Install",
        "amount": 16,
        "unit": "sqft",
        "published": "From RM 16 / sq ft",
        "desc": "100% waterproof LVP with realistic wood grain, perfect for wet kitchens, bathrooms, and basement."
      },
      {
        "name": "Vinyl Flooring Installation",
        "amount": 12,
        "unit": "sqft",
        "published": "From RM 12 / sq ft",
        "desc": "Sheet or plank vinyl flooring for wet areas, kitchens and commercial spaces with welded seams."
      },
      {
        "name": "Floor Tile Installation",
        "amount": 14,
        "unit": "sqft",
        "published": "From RM 14 / sq ft",
        "desc": "Porcelain, ceramic, large format and mosaic tile installation for new builds and renovations."
      },
      {
        "name": "Floor Tile Replacement & Subfloor Hacking",
        "amount": 18,
        "unit": "sqft",
        "published": "From RM 18 / sq ft",
        "desc": "Hacking old tiles, subfloor leveling, waterproofing and new tile installation with debris disposal."
      },
      {
        "name": "Porcelain & Ceramic Tiles",
        "amount": 16,
        "unit": "sqft",
        "published": "From RM 16 / sq ft",
        "desc": "Supply and install homogeneous porcelain and ceramic tiles in matte, glossy or wood-look finishes."
      },
      {
        "name": "Large Format & Mosaic Tiles",
        "amount": 22,
        "unit": "sqft",
        "published": "From RM 22 / sq ft",
        "desc": "Large slab 600x1200mm, 800x800mm and mosaic pattern installation with levelling clips."
      },
      {
        "name": "Floor Leveling & Screeding",
        "amount": 8,
        "unit": "sqft",
        "published": "From RM 8 / sq ft",
        "desc": "Self-leveling compound and cement screeding to correct uneven floors before flooring installation."
      },
      {
        "name": "Hollow Tile & Uneven Floor Repair",
        "amount": 250,
        "unit": "job",
        "published": "From RM 250",
        "desc": "Tap-test hollow tile detection, removal and re-bedding, plus uneven floor grinding and leveling."
      },
      {
        "name": "Skirting & Transition Strip Fitting",
        "amount": 8,
        "unit": "linearft",
        "published": "From RM 8 / linier ft",
        "desc": "PVC, MDF, or aluminium skirting plus T-mould and reducer transitions for a clean room-to-room finish."
      }
    ],
    "quoteOnly": []
  },
  "epoxy-flooring": {
    "startPrice": 22,
    "scopes": [
      {
        "name": "Self-Levelling Epoxy Floor",
        "amount": 22,
        "unit": "sqft",
        "published": "From RM 22 / sq ft",
        "desc": "Mirror-smooth 2–3mm self-levelling epoxy for residential, showroom, and light commercial floors."
      },
      {
        "name": "Flake / Quartz Broadcast Epoxy",
        "amount": 26,
        "unit": "sqft",
        "published": "From RM 26 / sq ft",
        "desc": "Decorative vinyl flake or coloured quartz broadcast with slip-resistant finish for garages and kitchens."
      },
      {
        "name": "Heavy-Duty Mortar Screed",
        "amount": 38,
        "unit": "sqft",
        "published": "From RM 38 / sq ft",
        "desc": "5–10mm trowel-applied epoxy mortar for warehouses, factories, and forklift traffic zones."
      },
      {
        "name": "Epoxy Floor Repair & Recoating",
        "amount": 14,
        "unit": "sqft",
        "published": "From RM 14 / sq ft",
        "desc": "Diamond-grinding the existing epoxy, repairing damaged areas, and applying fresh primer + topcoat."
      }
    ],
    "quoteOnly": []
  },
  "roof-repair": {
    "startPrice": 380,
    "scopes": [
      {
        "name": "Roof Leak Diagnosis & Repair",
        "amount": 380,
        "unit": "job",
        "published": "From RM 380",
        "desc": "Thermal imaging to locate the leak source, followed by tile, flashing, or membrane repair on the affected area."
      },
      {
        "name": "Ridge Re-Bedding & Re-Pointing",
        "amount": 22,
        "unit": "linearft",
        "published": "From RM 22 / linier ft",
        "desc": "Removing loose ridge mortar and re-bedding with flexible polymer mortar for a permanent seal."
      },
      {
        "name": "Gutter Cleaning & Realignment",
        "amount": 320,
        "unit": "job",
        "published": "From RM 320",
        "desc": "Clearing leaves and debris, realigning falls toward downpipes, and sealing leaking joints."
      },
      {
        "name": "Full Torch-On Membrane Waterproofing",
        "amount": 26,
        "unit": "sqft",
        "published": "From RM 26 / sq ft",
        "desc": "Two-layer torch-applied bituminous membrane system with 10-year manufacturer warranty for flat roofs."
      }
    ],
    "quoteOnly": []
  },
  "kitchen-cabinet": {
    "startPrice": 7500,
    "scopes": [
      {
        "name": "Modular Kitchen Cabinet (10ft L-shape)",
        "amount": 7500,
        "unit": "job",
        "published": "From RM 7,500",
        "desc": "Häfele or Blum hardware with 18mm melamine carcass, doors in laminate, acrylic, or spray-painted finish."
      },
      {
        "name": "Custom Plywood Kitchen",
        "amount": 11000,
        "unit": "job",
        "published": "From RM 11,000",
        "desc": "Built-to-fit plywood cabinet with soft-close hardware, custom doors, and full-height pantry units."
      },
      {
        "name": "Quartz / Granite Countertop",
        "amount": 220,
        "unit": "linearft",
        "published": "From RM 220 / linier ft",
        "desc": "Caesarstone, Silestone, or local granite with undermount sink cutout and seamless joins."
      },
      {
        "name": "Kitchen Makeover (Doors & Hardware Only)",
        "amount": 4200,
        "unit": "job",
        "published": "From RM 4,200",
        "desc": "Replacing doors, drawer fronts, handles, hinges, and runners to refresh an existing kitchen carcass."
      }
    ],
    "quoteOnly": []
  },
  "carpentry": {
    "startPrice": 300,
    "scopes": [
      {
        "name": "Built-in Wardrobe",
        "amount": 320,
        "unit": "linearft",
        "published": "From RM 320 / linier ft",
        "desc": "Floor-to-ceiling wardrobe with internal drawers, shelves, hanging rails, and mirror or laminate doors."
      },
      {
        "name": "TV Console & Feature Wall",
        "amount": 1500,
        "unit": "job",
        "published": "From RM 1,500",
        "desc": "Custom TV console with storage drawers, floating shelves, cable management, and matching feature wall panelling."
      },
      {
        "name": "Study Desk & Home Office",
        "amount": 1100,
        "unit": "job",
        "published": "From RM 1,100",
        "desc": "Built-in study desk with cable management, drawers, overhead cabinets, and matching shelving."
      },
      {
        "name": "Shoe Cabinet & Entry Storage",
        "amount": 1800,
        "unit": "job",
        "published": "From RM 1,800",
        "desc": "Slim depth shoe cabinet with tilt-out drawers, sitting bench, mirror, and integrated lighting."
      }
    ],
    "quoteOnly": []
  },
  "door": {
    "startPrice": 250,
    "scopes": [
      {
        "name": "Solid Timber Door Installation",
        "amount": 550,
        "unit": "job",
        "published": "From RM 550",
        "desc": "Solid meranti or chengal door with meranti frame, 3 SS304 hinges, architrave, and basic mortice lockset."
      },
      {
        "name": "Laminate Door Installation",
        "amount": 250,
        "unit": "job",
        "published": "From RM 250",
        "desc": "HDF-skin engineered door with smooth laminate finish, ideal for budget-friendly modern interiors."
      },
      {
        "name": "Door Planing & Adjustment",
        "amount": 120,
        "unit": "job",
        "published": "From RM 120",
        "desc": "Trimming a door that is scraping the floor or frame, rehanging on existing hinges, and adjusting the lockset."
      },
      {
        "name": "Fire-Rated Door Installation",
        "amount": 950,
        "unit": "job",
        "published": "From RM 950",
        "desc": "1-hour or 2-hour certified fire door with intumescent seals, suitable for kitchen, staircase, or fire-escape access."
      }
    ],
    "quoteOnly": []
  },
  "window-repair": {
    "startPrice": 200,
    "scopes": [
      {
        "name": "Glass Replacement",
        "amount": 200,
        "unit": "job",
        "published": "From RM 200",
        "desc": "Removing broken or cracked glass and installing new clear, tinted, frosted, or tempered glass to the same size and thickness."
      },
      {
        "name": "Window Seal Replacement",
        "amount": 30,
        "unit": "linearft",
        "published": "From RM 30 / linier ft",
        "desc": "Replacing worn or hardened EPDM rubber seals to stop water ingress and improve insulation."
      },
      {
        "name": "Window Handle & Hinge Repair",
        "amount": 120,
        "unit": "job",
        "published": "From RM 120",
        "desc": "Replacing broken, stiff, or corroded handles, hinges, stays, and locking mechanisms on casement or top-hung windows."
      },
      {
        "name": "Sliding Window Roller Replacement",
        "amount": 150,
        "unit": "job",
        "published": "From RM 150",
        "desc": "Replacing worn nylon or steel rollers and cleaning tracks for smooth sliding operation."
      }
    ],
    "quoteOnly": []
  },
  "locksmith": {
    "startPrice": 180,
    "scopes": [
      {
        "name": "Smart Lock Installation",
        "amount": 420,
        "unit": "job",
        "published": "From RM 420",
        "desc": "Supply and install digital keypad, Bluetooth, Wi-Fi, or biometric fingerprint lock with app pairing and user registration."
      },
      {
        "name": "Mortice / Deadbolt Lock Replacement",
        "amount": 220,
        "unit": "job",
        "published": "From RM 220",
        "desc": "Remove existing mortice or deadbolt lock and install a new Yale, Imperial, or Hafele lock with 3 keys."
      },
      {
        "name": "Key Cutting & Re-Keying",
        "amount": 30,
        "unit": "job",
        "published": "From RM 30",
        "desc": "Cutting new keys to existing locks, or re-keying the lock to a new key so old keys stop working (ideal after moving in or lost key)."
      },
      {
        "name": "Emergency Lockout (Landed House)",
        "amount": 180,
        "unit": "job",
        "published": "From RM 180",
        "desc": "Non-destructive entry to your home or room during lockout, with proof of ownership. Available same-day within KL & Selangor."
      }
    ],
    "quoteOnly": []
  },
  "glass-aluminium": {
    "startPrice": 320,
    "scopes": [
      {
        "name": "Frameless Shower Screen",
        "amount": 420,
        "unit": "panel",
        "published": "From RM 420 / panel",
        "desc": "10–12mm tempered glass with concealed hinges and anti-leak seals. Custom cut to your bathroom layout."
      },
      {
        "name": "Aluminium Sliding Window",
        "amount": 320,
        "unit": "sqft",
        "published": "From RM 320 / sq ft",
        "desc": "Locally fabricated aluminium sliding window with 5mm clear or tinted glass, nylon rollers, and weatherstrip."
      },
      {
        "name": "Glass Office Partition",
        "amount": 220,
        "unit": "sqft",
        "published": "From RM 220 / sq ft",
        "desc": "10–12mm tempered glass partition with aluminium or frameless channel, including door and hardware."
      },
      {
        "name": "Wall Mirror Installation",
        "amount": 320,
        "unit": "job",
        "published": "From RM 320",
        "desc": "5–6mm silver-backed mirror with concealed aluminium channel fixings, suitable for bathrooms, gyms, and dressing rooms."
      }
    ],
    "quoteOnly": []
  },
  "cleaning": {
    "startPrice": 180,
    "scopes": [
      {
        "name": "Weekly Condo Cleaning (1,000 sqft)",
        "amount": 180,
        "unit": "visit",
        "published": "From RM 180 / visit",
        "desc": "3-bed condo or apartment cleaned weekly, including kitchen, bathrooms, and common areas."
      },
      {
        "name": "Bi-Weekly Terrace House Cleaning",
        "amount": 250,
        "unit": "visit",
        "published": "From RM 250 / visit",
        "desc": "Two-storey terrace house cleaned every fortnight, including ground floor, first floor, and outdoor areas."
      },
      {
        "name": "Office Cleaning (Small Office, 1,500 sqft)",
        "amount": 320,
        "unit": "visit",
        "published": "From RM 320 / visit",
        "desc": "After-hours office cleaning including workstations, meeting rooms, pantry, and restrooms."
      },
      {
        "name": "One-Off Spring Clean",
        "amount": 420,
        "unit": "job",
        "published": "From RM 420",
        "desc": "One-time deep clean including ceiling fans, light fixtures, behind furniture, and window interiors."
      }
    ],
    "quoteOnly": []
  },
  "deep-cleaning": {
    "startPrice": 420,
    "scopes": [
      {
        "name": "Condo Move-Out Deep Clean (1,000 sqft)",
        "amount": 420,
        "unit": "job",
        "published": "From RM 420",
        "desc": "Full top-to-bottom clean including inside cabinets, oven, fridge, fans, and window tracks. Move-out ready."
      },
      {
        "name": "Terrace House Deep Clean (2,000 sqft)",
        "amount": 650,
        "unit": "job",
        "published": "From RM 650",
        "desc": "Two-storey home including outdoor areas, garage, and staircases. Move-in or move-out ready."
      },
      {
        "name": "Post-Illness Disinfection Clean",
        "amount": 500,
        "unit": "job",
        "published": "From RM 500",
        "desc": "Hospital-grade disinfection of all touchpoints, fabrics, and air spaces. Recommended after flu, COVID, or stomach bugs."
      },
      {
        "name": "Allergy Season Refresh",
        "amount": 480,
        "unit": "job",
        "published": "From RM 480",
        "desc": "HEPA-vacuum deep clean with dust-mite treatment on mattresses, sofas, and curtains."
      }
    ],
    "quoteOnly": []
  },
  "post-renovation-cleaning": {
    "startPrice": 650,
    "scopes": [
      {
        "name": "Condo Post-Renovation Clean (1,000 sqft)",
        "amount": 650,
        "unit": "job",
        "published": "From RM 650",
        "desc": "Full post-renovation clean for a 3-bed condo after a typical kitchen + bathroom renovation."
      },
      {
        "name": "Terrace House Post-Renovation Clean (2,000 sqft)",
        "amount": 1400,
        "unit": "job",
        "published": "From RM 1,400",
        "desc": "Whole-house post-renovation clean including outdoor areas, garage, and windows."
      },
      {
        "name": "New Tiles Grout Haze Removal",
        "amount": 10,
        "unit": "sqft",
        "published": "From RM 10 / sq ft",
        "desc": "Specialist grout haze removal on newly laid porcelain or ceramic tiles using pH-balanced acidic cleaner."
      },
      {
        "name": "Construction Debris Removal",
        "amount": 320,
        "unit": "job",
        "published": "From RM 320",
        "desc": "Bagging and disposal of leftover construction materials, packaging, and debris. Skip bin coordination if needed."
      }
    ],
    "quoteOnly": []
  },
  "cctv": {
    "startPrice": 420,
    "scopes": [
      {
        "name": "Condo Wi-Fi CCTV Package (4 cameras)",
        "amount": 2200,
        "unit": "job",
        "published": "From RM 2,200",
        "desc": "4x 4MP Wi-Fi cameras with cloud storage, mobile app setup, and remote viewing. Ideal for 1,000-1,500 sqft condos."
      },
      {
        "name": "Landed House PoE CCTV (8 cameras)",
        "amount": 4200,
        "unit": "job",
        "published": "From RM 4,200",
        "desc": "8x 4MP PoE bullet cameras, 8-channel NVR with 2TB HDD, 1-week continuous recording, full cable routing."
      },
      {
        "name": "Single Camera Add-On",
        "amount": 420,
        "unit": "job",
        "published": "From RM 420",
        "desc": "Adding one more camera to an existing system (Hikvision/Dahua/Ezviz/Tapo) including cable, mounting, and app pairing."
      },
      {
        "name": "CCTV System Health Check & Relocation",
        "amount": 220,
        "unit": "job",
        "published": "From RM 220",
        "desc": "On-site health check, cleaning, re-aim, app reconfiguration, or relocation of existing CCTV cameras."
      }
    ],
    "quoteOnly": []
  },
  "autogate": {
    "startPrice": 2200,
    "scopes": [
      {
        "name": "Single Swing Autogate",
        "amount": 2200,
        "unit": "job",
        "published": "From RM 2,200",
        "desc": "Single-leaf swing gate motor with 2 remotes, safety sensor, and basic installation. Most popular for terrace houses."
      },
      {
        "name": "Double Swing Autogate",
        "amount": 3200,
        "unit": "job",
        "published": "From RM 3,200",
        "desc": "Two-leaf swing gate with dual motors, synchronisation, 2 remotes, and 2 safety sensors."
      },
      {
        "name": "Sliding Autogate",
        "amount": 3800,
        "unit": "job",
        "published": "From RM 3,800",
        "desc": "Sliding gate with rack-and-pinion motor, ground track, and 2 remotes. Ideal for narrow driveways."
      },
      {
        "name": "Autogate Motor Replacement & Service",
        "amount": 950,
        "unit": "job",
        "published": "From RM 950",
        "desc": "Replacement of failed motor with new unit, control board reconfiguration, and safety sensor re-test."
      }
    ],
    "quoteOnly": []
  },
  "welding": {
    "startPrice": 280,
    "scopes": [
      {
        "name": "Custom Window Grille",
        "amount": 42,
        "unit": "sqft",
        "published": "From RM 42 / sq ft",
        "desc": "Powder-coated mild steel window grille in your chosen design (geometric, classic, or modern). Includes anti-rust primer."
      },
      {
        "name": "Main Gate Fabrication",
        "amount": 2800,
        "unit": "job",
        "published": "From RM 2,800",
        "desc": "Custom main gate with mild steel frame, infill design of your choice, and hot-dip galvanised + powder-coat finish."
      },
      {
        "name": "On-Site Welding Repair",
        "amount": 280,
        "unit": "job",
        "published": "From RM 280",
        "desc": "Emergency or scheduled welding repair at your location — broken hinges, gate, grille, railing, or structural steel."
      },
      {
        "name": "Staircase Stringer Fabrication",
        "amount": 420,
        "unit": "linearft",
        "published": "From RM 420 / linier ft",
        "desc": "Custom mild steel staircase stringer fabricated to your measurements, primed and painted for indoor or outdoor use."
      }
    ],
    "quoteOnly": []
  },
  "aircon": {
    "startPrice": 129,
    "scopes": [
      {
        "name": "Basic Servicing",
        "amount": 129,
        "unit": "job",
        "published": "From RM 129",
        "desc": "Filter and coil cleaning, drainage check, gas pressure and cooling test for wall-mounted units from RM 129."
      },
      {
        "name": "Chemical Wash",
        "amount": 156,
        "unit": "job",
        "published": "From RM 156",
        "desc": "Pressure chemical wash of coils and blower without full dismantling, from RM 156."
      },
      {
        "name": "Chemical Overhaul",
        "amount": 286,
        "unit": "job",
        "published": "From RM 286",
        "desc": "Full dismantle-and-wash overhaul that deep-cleans every part and fixes chronic water leaks, from RM 286."
      },
      {
        "name": "Gas Top-Up",
        "amount": 2.5,
        "unit": "job",
        "published": "RM 2.50–3.00 / PSI",
        "desc": "R22, R410A and R32 refill charged per PSI, with a structural leak check included from RM 114."
      },
      {
        "name": "Installation",
        "amount": 259,
        "unit": "job",
        "published": "From RM 259",
        "desc": "Wall-mounted, cassette and window installation from RM 259 — installation only, unit not included."
      },
      {
        "name": "Repair",
        "amount": 114,
        "unit": "job",
        "published": "From RM 114",
        "desc": "Diagnostic fee from RM 114 (waived if repaired same visit) plus spare parts from RM 195 to RM 1,040."
      },
      {
        "name": "Ceiling Cassette",
        "amount": 195,
        "unit": "job",
        "published": "From RM 195",
        "desc": "Commercial ceiling cassette servicing, chemical wash, overhaul and installation from RM 195."
      },
      {
        "name": "Dismantling & Relocation",
        "amount": 117,
        "unit": "job",
        "published": "From RM 117",
        "desc": "Dismantle only from RM 117, nearby reinstall from RM 325, and different-location relocation from RM 455."
      }
    ],
    "quoteOnly": []
  },
  "kitchen-renovation": {
    "startPrice": 8000,
    "scopes": [
      {
        "name": "Full Kitchen Renovation",
        "amount": 8000,
        "unit": "job",
        "published": "From RM 8,000",
        "desc": "Complete kitchen rebuild: hacking, waterproofing, tiling, cabinets, countertop, plumbing, electrical and painting."
      },
      {
        "name": "Kitchen Cabinet Installation",
        "amount": 4500,
        "unit": "job",
        "published": "From RM 4,500",
        "desc": "Custom base, wall and tall cabinets with soft-close hinges, drawer systems and pantry pull-outs."
      },
      {
        "name": "Kitchen Countertop Replacement",
        "amount": 1800,
        "unit": "job",
        "published": "From RM 1,800",
        "desc": "Quartz, granite or sintered stone countertop supply and install with sink cut-out and edge profile."
      },
      {
        "name": "Kitchen Backsplash Tile Installation",
        "amount": 18,
        "unit": "sqft",
        "published": "From RM 18 / sq ft",
        "desc": "Porcelain, ceramic, mosaic or subway backsplash tiling with grout colour matching and anti-mould seal."
      },
      {
        "name": "Kitchen Island & Peninsula",
        "amount": 2200,
        "unit": "job",
        "published": "From RM 2,200",
        "desc": "Custom island or peninsula with storage, breakfast bar, power points and waterfall edge option."
      },
      {
        "name": "Wet Kitchen Renovation",
        "amount": 6500,
        "unit": "job",
        "published": "From RM 6,500",
        "desc": "Heavy-duty wet kitchen for wok cooking: floor trap, stainless steel sink, wall tiles to ceiling, strong ventilation."
      },
      {
        "name": "Dry Kitchen Renovation",
        "amount": 5500,
        "unit": "job",
        "published": "From RM 5,500",
        "desc": "Modern dry kitchen with island, display cabinets, wine rack and ambient lighting for entertaining."
      },
      {
        "name": "Kitchen Plumbing & Electrical",
        "amount": 950,
        "unit": "job",
        "published": "From RM 950",
        "desc": "Sink, dishwasher, water filter point, oven, hob, hood, extra 13A/15A power points and LED lighting."
      }
    ],
    "quoteOnly": [
      {
        "name": "Kitchen Extension",
        "desc": "Rear or side kitchen extension with brickwork, roofing, waterproofing and DBKL/MBSA guidance where required."
      }
    ]
  },
  "bathroom-renovation": {
    "startPrice": 6000,
    "scopes": [
      {
        "name": "Full Bathroom Renovation",
        "amount": 6000,
        "unit": "job",
        "published": "From RM 6,000",
        "desc": "Complete bathroom rebuild: hacking, waterproofing with ponding test, tiling, plumbing, sanitary and electrical."
      },
      {
        "name": "Toilet Renovation",
        "amount": 4500,
        "unit": "job",
        "published": "From RM 4,500",
        "desc": "Small toilet/WC renovation: WC replacement, wall and floor tiling, plumbing and ventilation."
      },
      {
        "name": "Bathroom Makeover",
        "amount": 5500,
        "unit": "job",
        "published": "From RM 5,500",
        "desc": "Cosmetic makeover without major hacking: retiling, new vanity, shower and lighting upgrade."
      },
      {
        "name": "Shower Area Renovation",
        "amount": 2800,
        "unit": "job",
        "published": "From RM 2,800",
        "desc": "Shower area rebuild: waterproofing, anti-slip floor tiles, rain shower, glass screen and niche."
      },
      {
        "name": "Bathroom Tiling",
        "amount": 16,
        "unit": "sqft",
        "published": "From RM 16 / sq ft",
        "desc": "Bathroom wall and floor tiling with straight, brick-bond or herringbone patterns, epoxy grout."
      },
      {
        "name": "Bathroom Waterproofing",
        "amount": 1200,
        "unit": "job",
        "published": "From RM 1,200",
        "desc": "Cementitious membrane, 3 coats, with 24–48 hour ponding test and warranty. No-hack PU injection also available."
      },
      {
        "name": "Bathroom Plumbing",
        "amount": 850,
        "unit": "job",
        "published": "From RM 850",
        "desc": "Hot and cold pipe reroute, floor trap replacement, drainage correction and pressure test."
      },
      {
        "name": "Sanitary Installation",
        "amount": 650,
        "unit": "job",
        "published": "From RM 650",
        "desc": "WC, basin, vanity cabinet, shower set, rain shower, bathtub and accessories installation."
      },
      {
        "name": "Bathroom Floor Replacement",
        "amount": 1800,
        "unit": "job",
        "published": "From RM 1,800",
        "desc": "Hacking old floor, rescreed with slope, waterproofing, new anti-slip floor tiles."
      },
      {
        "name": "Bathroom Wall Tile Replacement",
        "amount": 2200,
        "unit": "job",
        "published": "From RM 2,200",
        "desc": "Hacking old wall tiles, replaster, waterproofing and new wall tiles with trim and silicone."
      },
      {
        "name": "Bathroom Ceiling Repair",
        "amount": 450,
        "unit": "job",
        "published": "From RM 450",
        "desc": "Moisture-resistant gypsum or aluminium ceiling replacement with exhaust fan point and LED lighting."
      },
      {
        "name": "Bathroom Leak Repair",
        "amount": 350,
        "unit": "job",
        "published": "From RM 350",
        "desc": "Leak diagnosis with thermal imaging, PU injection or membrane repair, and ceiling restoration below."
      }
    ],
    "quoteOnly": []
  }
};
