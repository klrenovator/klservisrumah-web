/**
 * Plumbing Diagnostic Estimator — English content dictionary.
 * See painting-en.ts for the dictionary contract; parity checked by the harness.
 *
 * NOTE: severity labels embed " — " because the job-conditions breakdown note
 * renders the short form via `.split(" —")`. Keep that separator in every
 * locale's severity labels.
 */

import type { MessageDictionary } from "../../../i18n";

export const plumbingEnDict: MessageDictionary = {
  meta: {
    name: "Plumbing Diagnostic",
    resultLabel: "Estimated repair cost"
  },
  steps: {
    problem: {
      title: "What is the problem?",
      subtitle: "Pick the closest match — you can add details on WhatsApp afterwards."
    },
    severity: {
      title: "How severe is it?",
      subtitle: "This sets the urgency level and dispatch priority."
    },
    location: {
      title: "Where in the property?",
      subtitle: "Location affects access and pipe routing."
    },
    property: {
      title: "About the property",
      subtitle: "Older pipework usually needs more work to reach."
    },
    timing: {
      title: "When do you need a plumber?",
      subtitle: "Emergency dispatch carries an uplift — always explained before work starts."
    }
  },
  fields: {
    problem: { label: "Plumbing problem" },
    severity: { label: "Severity" },
    location: { label: "Location" },
    quantity: { label: "How many fixtures / points are affected?" },
    houseType: { label: "Property type" },
    propertyAge: { label: "Property age" },
    partsSupply: { label: "Who supplies the parts?" },
    timing: { label: "Preferred timing" }
  },
  formats: {
    pointOne: "{value} point",
    pointMany: "{value} points"
  },
  problems: {
    "blocked-sink": {
      label: "Blocked sink",
      service: "Drain Unclogging & Cleaning",
      causes: {
        "0": "Grease and food waste build-up in the trap",
        "1": "Partially collapsed waste pipe",
        "2": "Blocked branch line shared with other fixtures"
      }
    },
    "blocked-toilet": {
      label: "Blocked toilet",
      service: "Toilet Choke Clearing",
      causes: {
        "0": "Foreign object lodged in the trapway",
        "1": "Blocked soil stack or manhole",
        "2": "Insufficient flush volume"
      }
    },
    "blocked-floor-trap": {
      label: "Blocked floor trap",
      service: "Floor Trap & Drain Clearing",
      causes: {
        "0": "Hair and soap scum build-up",
        "1": "Silt accumulation in the trap",
        "2": "Damaged trap grating"
      }
    },
    "outdoor-drain": {
      label: "Blocked outdoor drain",
      service: "External Drain Clearing",
      causes: {
        "0": "Leaf and silt build-up",
        "1": "Root intrusion into the line",
        "2": "Broken or collapsed drain section"
      }
    },
    "pipe-leak": {
      label: "Pipe leak",
      service: "Water Leakage Diagnosis & Repair",
      causes: {
        "0": "Corroded or split pipe run",
        "1": "Failed compression joint",
        "2": "Excess pressure stressing fittings"
      }
    },
    "concealed-leak": {
      label: "Hidden / concealed leak",
      service: "Concealed Leak Detection & Repair",
      causes: {
        "0": "Buried supply pipe failure under the slab",
        "1": "Wall-embedded pipe joint leaking",
        "2": "Pinhole corrosion in old GI pipework"
      }
    },
    "outdoor-pipe": {
      label: "Outdoor pipe leak",
      service: "External Pipe Repair",
      causes: {
        "0": "Cracked underground supply line",
        "1": "Damaged meter connection",
        "2": "Failed garden tap fitting"
      }
    },
    "low-pressure": {
      label: "Low water pressure",
      service: "Water Pressure Diagnosis & Booster Pump",
      causes: {
        "0": "Partially closed or seized stopcock",
        "1": "Scale build-up in old galvanised pipe",
        "2": "Failed pressure pump or tank float",
        "3": "Hidden leak reducing line pressure"
      }
    },
    "no-water": {
      label: "No water at all",
      service: "Emergency Supply Restoration",
      causes: {
        "0": "Main valve closed or failed",
        "1": "Empty storage tank / float valve stuck",
        "2": "Pump electrical failure",
        "3": "Supply interruption from the utility"
      }
    },
    "tap-replacement": {
      label: "Tap replacement",
      service: "Tap & Mixer Replacement",
      causes: {
        "0": "Worn cartridge or washer",
        "1": "Corroded tap body",
        "2": "Damaged thread seal"
      }
    },
    "mixer-replacement": {
      label: "Mixer / shower set replacement",
      service: "Shower Mixer Replacement",
      causes: {
        "0": "Failed thermostatic cartridge",
        "1": "Corroded wall inlets",
        "2": "Leaking rail or hose"
      }
    },
    "toilet-repair": {
      label: "Toilet repair / replacement",
      service: "Toilet Repair & Installation",
      causes: {
        "0": "Worn flush valve or inlet washer",
        "1": "Failed flange seal at the base",
        "2": "Cracked cistern"
      }
    },
    "sink-install": {
      label: "Kitchen sink install / repair",
      service: "Kitchen Sink Installation",
      causes: {
        "0": "Failed sink seal or clip",
        "1": "Perished waste trap",
        "2": "Loose supply connector"
      }
    },
    bidet: {
      label: "Bidet / hand shower install",
      service: "Bidet Spray Installation",
      causes: {
        "0": "Perished hose",
        "1": "Leaking angle valve",
        "2": "Worn spray head"
      }
    },
    "water-heater": {
      label: "Water heater problem",
      service: "Water Heater Repair & Service",
      causes: {
        "0": "Failed heating element or thermostat",
        "1": "RCCB tripping from moisture ingress",
        "2": "Scale build-up reducing output",
        "3": "Leaking pressure relief valve"
      }
    },
    "heater-install": {
      label: "New water heater installation",
      service: "Water Heater Installation",
      causes: {
        "0": "Replacing an end-of-life unit",
        "1": "New bathroom fit-out",
        "2": "Upgrading to storage capacity"
      }
    },
    "pump-install": {
      label: "Water pump / booster install",
      service: "Booster Pump Installation",
      causes: {
        "0": "Chronic low pressure on upper floors",
        "1": "Failed existing pump",
        "2": "New tank installation"
      }
    }
  },
  severityLevels: {
    minor: { label: "Minor — annoying but usable", hint: "Slow drain, occasional drip" },
    moderate: { label: "Moderate — affects daily use", hint: "One fixture unusable" },
    major: { label: "Major — cannot use the room", hint: "Overflowing or fully blocked" },
    emergency: { label: "Emergency — water everywhere", hint: "Flooding or burst pipe" }
  },
  locations: {
    kitchen: "Kitchen",
    "bathroom-main": "Main bathroom",
    "bathroom-ensuite": "En-suite bathroom",
    laundry: "Laundry / yard",
    outdoor: "Outdoor / garden",
    "roof-tank": "Roof / water tank",
    multiple: "Multiple locations"
  },
  houseTypes: {
    condo: "Condo / Apartment",
    terrace: "Terrace House",
    "semi-d": "Semi-D / Bungalow",
    shop: "Shop Lot / Office",
    factory: "Factory / Warehouse"
  },
  ages: {
    new: "Under 5 years",
    mid: "5 – 15 years",
    older: "15 – 30 years",
    old: "Over 30 years"
  },
  timing: {
    standard: { label: "Standard schedule", hint: "Next available slot" },
    today: { label: "Today if possible", hint: "Same-day priority" },
    emergency: { label: "Emergency now", hint: "Immediate dispatch" },
    "after-hours": { label: "After hours / weekend", hint: "Outside normal window" }
  },
  partsSupply: {
    include: { label: "Include parts in the quote", hint: "We supply SIRIM-certified parts" },
    customer: { label: "I already bought the parts", hint: "Installation labour only" }
  },
  severityNote: {
    routine: "No damage risk — book at your convenience.",
    emergency: "Close your main stopcock and call us now — uncontrolled water damages floors, ceilings and wiring within hours.",
    urgent: "Book within 24–48 hours before the problem escalates into water damage.",
    soon: "Book within the week — the fault will keep getting worse."
  },
  durations: {
    oneHour: "About 1 hour on site",
    oneTwoHours: "1–2 hours on site",
    halfDay: "Half a working day",
    oneDay: "1 working day",
    oneTwoDays: "1–2 working days"
  },
  packages: {
    emergency: "Emergency Plumbing Response",
    urgent: "Priority Plumbing Repair",
    standard: "Standard Plumbing Visit"
  },
  breakdown: {
    noteDrain: "Published rate: {label} · validated band RM {low}–RM {high}",
    notePublished: "Published rate: {label}",
    noteHeaterInstall: "Published rates: {instant} – {storage}",
    additionalOne: "Additional {n} unit on the same visit",
    additionalMany: "Additional {n} units on the same visit",
    additionalNote: "Discounted — no second call-out charge",
    jobConditions: "Job conditions",
    jobConditionsValue: "× {mult}",
    jobConditionsNote: "{severity} severity · {location} · {house} · {age} · {timing}",
    supply: "You supply the parts",
    supplyValue: "− RM {amount}",
    supplyNote: "Material cost removed; installation labour and warranty on workmanship retained",
    minimum: "Minimum call-out applied",
    minimumNote: "Published plumbing starting price"
  },
  findings: {
    causeDetail: "Frequently the root cause for \"{problem}\" in {house} properties around {age}."
  },
  addons: {
    inspection: {
      label: "Whole-house plumbing health check",
      note: "All taps, traps, valves and visible pipework inspected during the same visit"
    },
    drain: { label: "Clear all drains & floor traps", note: "Published rate: {label}" },
    leakDetection: { label: "Electronic concealed leak detection", note: "Published rate: {label}" },
    heaterService: { label: "Water heater service & descaling", note: "Published rate: {label}" },
    waterproof: { label: "Wet-area waterproofing check", note: "Published rate: {label}" }
  },
  related: {
    plumbing: { label: "Plumbing Services", desc: "Licensed plumbers, SIRIM parts" },
    costGuide: { label: "Plumbing Cost Guide", desc: "Published 2026 rates" },
    waterHeater: { label: "Water Heater Service", desc: "Install, repair and descale" },
    waterproofing: { label: "Waterproofing", desc: "Wet-area protection" },
    emergency: { label: "Emergency Plumbing", desc: "Same-day dispatch" }
  },
  articles: {
    hiddenLeak: "Hidden Water Leak Detection in KL",
    monsoon: "Monsoon Home Prep for the Klang Valley"
  },
  maintenance: {
    drains: "Pour hot water and enzyme cleaner down kitchen drains monthly to stop grease build-up.",
    rccb: "Test your RCCB and water heater relief valve every 6 months.",
    hoses: "Replace flexible hoses under sinks every 5 years — they are the most common burst point."
  },
  assumptions: {
    visit: "Estimate covers one visit with standard tools; specialist equipment such as CCTV drain survey is quoted separately.",
    customerParts: "You supply the fixtures or parts; we warrant the workmanship only.",
    includedParts: "SIRIM-certified standard parts are included; premium branded fixtures are quoted separately.",
    belowMinimum: "Small tasks are charged at our published minimum call-out.",
    pressureTest: "Pressure testing after repair is included."
  }
};
