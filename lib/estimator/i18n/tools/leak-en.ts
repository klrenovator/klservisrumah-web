/**
 * Water Leak Triage — English content dictionary.
 * See painting-en.ts for the dictionary contract; parity checked by the harness.
 */

import type { MessageDictionary } from "../../../i18n";

export const leakEnDict: MessageDictionary = {
  meta: {
    name: "Water Leak Triage",
    resultLabel: "Estimated repair cost"
  },
  steps: {
    location: {
      title: "Where is the leak?",
      subtitle: "Pick the spot where you first see water or damp."
    },
    symptoms: {
      title: "What are you seeing?",
      subtitle: "Select every symptom — this is what drives the diagnosis."
    },
    severity: {
      title: "How bad is it right now?",
      subtitle: "Be honest — this sets the urgency level and dispatch priority."
    },
    duration: {
      title: "How long has it been leaking?",
      subtitle: "Older leaks usually mean more hidden damage."
    },
    property: {
      title: "Tell us about the property",
      subtitle: "Building type and age change the access and repair method."
    }
  },
  fields: {
    location: { label: "Leak location" },
    symptoms: { label: "Symptoms" },
    severity: { label: "Leak severity" },
    affected: { label: "How much area is affected?" },
    duration: { label: "Leak duration" },
    propertyType: { label: "Property type" },
    propertyAge: { label: "Property age" }
  },
  locations: {
    bathroom: {
      label: "Bathroom",
      service: "Bathroom Waterproofing & Leak Repair",
      causes: {
        "0": "Failed floor waterproofing membrane",
        "1": "Cracked or missing tile grout",
        "2": "Leaking floor trap or shower mixer connection",
        "3": "Failed seal around the toilet flange"
      }
    },
    kitchen: {
      label: "Kitchen",
      service: "Kitchen Plumbing Leak Repair",
      causes: {
        "0": "Loose sink trap or waste connection",
        "1": "Perished flexible hose under the sink",
        "2": "Cracked concealed supply pipe",
        "3": "Blocked waste line backing up"
      }
    },
    roof: {
      label: "Roof",
      service: "Roof Leak Diagnosis & Repair",
      causes: {
        "0": "Cracked or slipped roof tiles",
        "1": "Failed ridge capping / re-pointing",
        "2": "Corroded valley gutter or flashing",
        "3": "Blocked gutter causing overflow"
      }
    },
    ceiling: {
      label: "Ceiling",
      service: "Ceiling Leak Repair & Reinstatement",
      causes: {
        "0": "Leak from the unit or bathroom above",
        "1": "Roof or gutter water tracking along the slab",
        "2": "Condensation from air-cond piping",
        "3": "Burst concealed pipe in the ceiling void"
      }
    },
    balcony: {
      label: "Balcony / Yard",
      service: "Balcony Waterproofing",
      causes: {
        "0": "Failed balcony membrane",
        "1": "Blocked balcony floor trap",
        "2": "Cracked screed at the slab edge",
        "3": "Water ponding from poor fall"
      }
    },
    wall: {
      label: "Wall",
      service: "Wall Dampness & Injection Treatment",
      causes: {
        "0": "Rising damp from the ground slab",
        "1": "Concealed pipe leak inside the wall",
        "2": "External wall crack letting rain through",
        "3": "Failed window sill / frame seal"
      }
    },
    outdoor: {
      label: "Outdoor / Garden",
      service: "External Pipe & Drainage Repair",
      causes: {
        "0": "Cracked underground supply pipe",
        "1": "Leaking garden tap or hose bib",
        "2": "Broken drainage line",
        "3": "Damaged water meter connection"
      }
    },
    "water-tank": {
      label: "Water Tank",
      service: "Water Tank & Pump Repair",
      causes: {
        "0": "Failed ball float valve",
        "1": "Cracked tank body or fitting",
        "2": "Overflow pipe discharging continuously",
        "3": "Loose tank outlet connection"
      }
    },
    pipe: {
      label: "Pipe (visible)",
      service: "Pipe Leak Repair",
      causes: {
        "0": "Corroded or split pipe section",
        "1": "Failed joint or compression fitting",
        "2": "Excess water pressure stressing joints",
        "3": "Ageing galvanised iron pipework"
      }
    },
    toilet: {
      label: "Toilet",
      service: "Toilet Repair & Reseal",
      causes: {
        "0": "Worn flush valve or inlet washer",
        "1": "Failed wax / rubber flange seal",
        "2": "Cracked cistern or bowl",
        "3": "Loose water supply connector"
      }
    },
    tap: {
      label: "Tap / Mixer",
      service: "Tap & Mixer Replacement",
      causes: {
        "0": "Worn cartridge or washer",
        "1": "Corroded tap body",
        "2": "Loose or cracked flexible connector",
        "3": "Damaged thread seal"
      }
    },
    "water-heater": {
      label: "Water Heater",
      service: "Water Heater Repair",
      causes: {
        "0": "Failed pressure relief valve",
        "1": "Corroded tank or heating element",
        "2": "Leaking inlet / outlet connection",
        "3": "Scale build-up stressing the vessel"
      }
    }
  },
  symptoms: {
    "wet-wall": { label: "Wet or damp wall patch", implies: "Moisture is already inside the wall build-up." },
    dripping: { label: "Active dripping water", implies: "An active supply-side leak is losing water continuously." },
    "low-pressure": { label: "Low water pressure", implies: "Pressure loss often means water is escaping before the outlet." },
    "brown-stain": { label: "Brown / yellow stain", implies: "A slow historic leak has been soaking the substrate." },
    "ceiling-bubble": { label: "Ceiling bubbling or sagging", implies: "Water is pooling above the board — collapse risk." },
    cracks: { label: "Cracks appearing", implies: "Moisture movement is stressing the plaster or screed." },
    mould: { label: "Mould or musty smell", implies: "Persistent dampness — a health and finish concern." },
    "burst-pipe": { label: "Burst pipe / flooding", implies: "Emergency: shut the main stopcock now." },
    "pipe-noise": { label: "Hissing or knocking pipes", implies: "Classic signature of a pressurised concealed leak." },
    "meter-spinning": { label: "Water meter moves with taps off", implies: "Confirmed hidden leak on the supply side." },
    "high-bill": { label: "Unusually high water bill", implies: "Ongoing hidden loss over weeks." },
    "peeling-paint": { label: "Paint peeling / blistering", implies: "Moisture is pushing through the coating." }
  },
  severityLevels: {
    slow: { label: "Slow — only after heavy rain or long showers", hint: "Intermittent damp" },
    moderate: { label: "Moderate — visible daily", hint: "Stain or damp patch grows slowly" },
    fast: { label: "Fast — spreading week by week", hint: "Clearly worsening" },
    severe: { label: "Severe — continuous water", hint: "Buckets, flooding, dripping" }
  },
  durations: {
    today: "Started today",
    week: "Within the last week",
    month: "About a month",
    months: "Several months",
    year: "More than a year"
  },
  propertyAge: {
    new: "Under 5 years",
    mid: "5 – 15 years",
    older: "15 – 30 years",
    old: "Over 30 years"
  },
  propertyType: {
    condo: "Condo / Apartment",
    terrace: "Terrace House",
    "semi-d": "Semi-D / Bungalow",
    shop: "Shop Lot / Office"
  },
  affected: {
    spot: "One small spot (palm-sized)",
    patch: "A patch (up to 1 m²)",
    large: "Large area (2 – 4 m²)",
    multiple: "Multiple rooms affected"
  },
  severityNote: {
    routine: "Monitor and schedule a repair at your convenience — no immediate damage risk.",
    emergency: "Shut off the main stopcock now and call us — active water loss causes fast structural and electrical damage.",
    urgent: "Book within 24–48 hours. Damage is actively spreading and repair scope grows the longer you wait.",
    soon: "Book within the week. The leak is established but not yet causing structural damage."
  },
  result: {
    durationEmergency: "Emergency make-safe same day, full repair 1–2 days",
    durationHigh: "1–2 working days plus curing time",
    durationMid: "Half to 1 working day",
    durationLow: "2–4 hours on site",
    packageEmergency: "Emergency Leak Response",
    packageUrgent: "Priority Leak Repair",
    packageRoutine: "Scheduled Leak Repair",
    causeDetail: "Common cause for {location} leaks in Klang Valley properties of this age.",
    quoteOnlyReason: "Severe bathroom leaks often need hacking and re-tiling — that scope is quoted after inspection."
  },
  breakdown: {
    publishedRate: "Published rate: {label}",
    pu: "PU injection grouting",
    puValueOne: "{points} point × RM {rate}",
    puValueMany: "{points} points × RM {rate}",
    bathroom: "Wet-area waterproofing (no-hack system)",
    bathroomNote: "Published band RM {low}–RM {high} for no-hack treatment",
    hack: "Possible hacking & re-tile scope",
    hackValue: "RM {low}–RM {high}",
    hackNote: "Published hacking band — only if the membrane below the tiles has failed",
    roof: "Roof leak diagnosis & repair",
    membrane: "Partial membrane waterproofing",
    membraneNote: "≈ {area} sq ft × published RM {rate} / sq ft",
    ceiling: "Water-damaged ceiling repair",
    source: "Source treatment (slab injection)",
    sourceNote: "Derived from published PU grouting rate — the ceiling is only reinstated after the source is sealed",
    pipe: "Leak detection & pipe repair",
    pipeNote: "Published rate: {label} plus repair complexity",
    heater: "Water heater repair",
    fixture: "Fixture repair / replacement",
    external: "External pipe trace & repair",
    emergencyUplift: "Emergency dispatch uplift",
    emergencyUpliftNote: "Applied only for same-day emergency response; explained before work starts",
    propertyFactor: "Property factor",
    propertyFactorValue: "× {factor}",
    propertyFactorNote: "{type}, {age} — older and high-rise properties need more access control"
  },
  addons: {
    ceilingReinstate: { label: "Ceiling board replacement & repaint", note: "Published rate: {label}" },
    wallDamp: { label: "Wall dampness & efflorescence treatment", note: "Published rate: {label}" },
    gutter: { label: "Gutter cleaning & realignment", note: "Published rate: {label}" },
    fullBathroom: { label: "Full bathroom waterproofing package", note: "Published rate: {label}" },
    repaint: { label: "Repaint affected wall / ceiling after repair", note: "Published rate: {label}" }
  },
  related: {
    waterproofing: { label: "Waterproofing & PU Grouting", desc: "Seal the source properly" },
    plumbing: { label: "Plumbing Leak Repair", desc: "Concealed pipe detection" },
    ceiling: { label: "Ceiling Repair", desc: "Reinstate damaged boards" },
    roof: { label: "Roof Repair", desc: "Tiles, ridge and gutter work" },
    costGuide: { label: "Waterproofing Cost Guide", desc: "Published 2026 rates" }
  },
  articles: {
    ceilingFix: "How to Fix a Leaking Ceiling Without Tile Hacking",
    hiddenLeak: "Hidden Water Leak Detection in KL",
    puVs: "PU Grouting vs Full Membrane Waterproofing"
  },
  maintenance: {
    meter: "Check your water meter with every tap closed once a month — movement means a hidden leak.",
    gutters: "Clear floor traps and gutters before the monsoon season.",
    silicone: "Re-seal bathroom silicone joints every 2–3 years to protect the membrane below."
  },
  assumptions: {
    diagnosis: "Diagnosis is based on your answers only — the exact source is confirmed with moisture meters and, if needed, thermal imaging on site.",
    scope: "Repair figures cover the leak source; finishing works (tiles, paint, ceiling boards) are listed separately as add-ons.",
    emergency: "Emergency uplift only applies if you request same-day dispatch."
  }
};
