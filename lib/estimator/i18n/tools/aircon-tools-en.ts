import type { MessageDictionary } from "../../../i18n";

export const airconToolsEnDict: MessageDictionary = {
  "common": {
    "duration": "Same day",
    "package": "Aircon Service",
    "relatedService": "Aircon Service",
    "relatedServiceDesc": "See the full aircon service page",
    "relatedPrice": "Aircon Pricing Guide",
    "relatedPriceDesc": "Review the 2026 price list",
    "assumption": "Estimate only — the final quotation follows an on-site inspection.",
    "access": {
      "easy": "Easy access",
      "difficult": "Difficult access"
    }
  },
  "install": {
    "meta": { "name": "Aircon Installation Cost Calculator" },
    "unit": {
      "wall1": "Wall-Mounted 1.0–1.5 HP",
      "wall2": "Wall-Mounted 2.0 HP",
      "wall25": "Wall-Mounted 2.5 HP",
      "wall3": "Wall-Mounted 3.0 HP",
      "wall4": "Wall-Mounted 4.0 HP",
      "wall5": "Wall-Mounted 5.0 HP",
      "cassette": "Ceiling Cassette 1.0–1.5 HP",
      "window": "Window Unit 1.0–1.5 HP"
    },
    "steps": {
      "unit": { "title": "Which unit are you installing?", "subtitle": "Pick the type and horsepower" },
      "extra": { "title": "Extra copper & access", "subtitle": "Copper beyond 7 ft is charged per foot" }
    },
    "fields": {
      "unit": "Unit type",
      "copper": "Extra copper pipe",
      "access": "Access"
    },
    "breakdown": {
      "base": "Installation base",
      "baseNote": "Installation only — unit not included",
      "copper": "Extra copper",
      "copperNote": "per foot beyond 7 ft",
      "copperNone": "No extra copper"
    },
    "result": { "service": "Aircon Installation" }
  },
  "gas": {
    "meta": { "name": "Aircon Gas Top-Up Cost Calculator" },
    "steps": {
      "gas": { "title": "Which refrigerant?", "subtitle": "Check the nameplate on the outdoor unit" },
      "amount": { "title": "How much gas?", "subtitle": "PSI required and leak check" }
    },
    "fields": {
      "gas": "Refrigerant type",
      "psi": "PSI required",
      "leak": "Include structural leak check"
    },
    "types": {
      "r22": "R22",
      "r410a": "R410A",
      "r32": "R32"
    },
    "leak": {
      "yes": "Yes",
      "no": "No"
    },
    "breakdown": {
      "gas": "Gas top-up",
      "leak": "Leak check",
      "leakNone": "Not included",
      "leakNote": "From RM 114, included"
    },
    "result": { "service": "Aircon Gas Top-Up" }
  },
  "size": {
    "meta": { "name": "Aircon Size Calculator" },
    "steps": {
      "room": { "title": "About the room", "subtitle": "Area, ceiling and sun exposure" }
    },
    "fields": {
      "area": "Room area",
      "ceiling": "Ceiling height",
      "exposure": "Sun exposure"
    },
    "ceiling": {
      "standard": "Standard (9–10 ft)",
      "high": "High / double-volume"
    },
    "exposure": {
      "low": "Low (shaded)",
      "high": "High (west-facing / hot)"
    },
    "breakdown": {
      "area": "Room area",
      "btu": "Recommended cooling",
      "hp": "≈ {hp} HP"
    },
    "result": { "service": "Aircon" }
  },
  "btu": {
    "meta": { "name": "Aircon BTU Calculator" },
    "steps": {
      "dims": { "title": "Room dimensions", "subtitle": "Length, width and occupancy" }
    },
    "fields": {
      "length": "Length",
      "width": "Width",
      "occupancy": "People in room"
    },
    "people": "people",
    "breakdown": {
      "area": "Floor area",
      "occupancy": "Occupancy",
      "btu": "BTU required"
    },
    "result": { "service": "Aircon" }
  },
  "elec": {
    "meta": { "name": "Aircon Electricity Cost Calculator" },
    "steps": {
      "usage": { "title": "Usage", "subtitle": "Horsepower and daily hours" }
    },
    "fields": {
      "hp": "Horsepower",
      "hours": "Hours per day"
    },
    "breakdown": {
      "usage": "Daily usage",
      "monthly": "Est. monthly cost",
      "note": "at RM 0.50/kWh — estimate only"
    },
    "result": { "service": "Aircon" }
  },
  "save": {
    "meta": { "name": "Inverter Aircon Savings Calculator" },
    "steps": {
      "usage": { "title": "Usage", "subtitle": "Horsepower and daily hours" }
    },
    "fields": {
      "hp": "Horsepower",
      "hours": "Hours per day"
    },
    "breakdown": {
      "saving": "Inverter saving",
      "pct": "≈ 35% vs non-inverter",
      "monthly": "Est. monthly saving",
      "note": "at RM 0.50/kWh — estimate only"
    },
    "result": { "service": "Aircon" }
  },
  "pick": {
    "meta": { "name": "Which Aircon Service Do I Need?" },
    "steps": {
      "symptoms": { "title": "What do you see?", "subtitle": "Select all that apply" }
    },
    "fields": { "symptoms": "Symptoms" },
    "symptoms": {
      "not-cold": "Not cold / warm air",
      "leaking": "Water leaking",
      "noise": "Making noise",
      "smell": "Bad smell",
      "weak": "Weak airflow",
      "not-on": "Not turning on",
      "ice": "Ice forming"
    },
    "breakdown": {
      "symptoms": "Symptoms",
      "service": "Recommended service"
    },
    "findings": { "detail": "A technician will confirm the diagnosis on site." }
  }
};
