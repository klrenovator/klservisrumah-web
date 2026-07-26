/**
 * Ceiling Repair & Installation Estimator — English content dictionary.
 * See painting-en.ts for the dictionary contract; parity checked by the harness.
 */

import type { MessageDictionary } from "../../../i18n";

export const ceilingEnDict: MessageDictionary = {
  meta: {
    name: "Ceiling Repair Estimator",
    resultLabel: "Estimated ceiling cost"
  },
  steps: {
    type: {
      title: "What type of ceiling?",
      subtitle: "Not sure? Pick the last option and we will identify it on site."
    },
    work: {
      title: "What do you need done?",
      subtitle: "Repair, replacement or a brand-new design."
    },
    area: {
      title: "How big is the area?",
      subtitle: "Tap the closest size — no measuring needed."
    },
    damage: {
      title: "What is the condition?",
      subtitle: "Damage level drives how much of the frame we have to rebuild."
    },
    access: {
      title: "Ceiling height & timing",
      subtitle: "Height decides the access equipment we bring."
    }
  },
  fields: {
    ceilingType: { label: "Ceiling material" },
    workType: { label: "Type of work" },
    areaPreset: { label: "Ceiling / partition area" },
    customLength: { label: "Length" },
    customWidth: { label: "Width" },
    damage: { label: "Damage level" },
    extras: { label: "Anything else included?", help: "Optional — select all that apply." },
    lightCount: { label: "How many light fittings to remove?" },
    height: { label: "Ceiling height" },
    urgency: { label: "When do you need it?" }
  },
  formats: {
    fittingOne: "{value} fitting",
    fittingMany: "{value} fittings"
  },
  ceilingTypes: {
    gypsum: { label: "Gypsum board", hint: "Most common in condos & new homes" },
    plaster: { label: "Plaster ceiling", hint: "Skim-finished plasterboard" },
    pvc: { label: "PVC panel", hint: "Moisture-resistant strip ceiling" },
    "calcium-silicate": { label: "Calcium silicate", hint: "Fire & moisture resistant board" },
    wood: { label: "Timber / wood", hint: "Timber strip or plywood ceiling" },
    "cement-board": { label: "Cement board", hint: "Wet-area / external soffit" },
    "not-sure": { label: "Not sure", hint: "We identify it on site" }
  },
  workTypes: {
    repair: { label: "Repair existing ceiling", hint: "Patch, re-skim or replace a section" },
    "replace-section": { label: "Replace a section", hint: "Cut out and rebuild damaged boards" },
    "new-flat": { label: "New flat ceiling", hint: "Clean single-level design" },
    "new-tiered": { label: "New tiered / L-box ceiling", hint: "Concealed LED trough design" },
    "new-cove": { label: "New cove / curved ceiling", hint: "Custom curved feature" },
    partition: { label: "Gypsum partition wall", hint: "Divide a room or office" }
  },
  areaPresets: {
    "small-patch": { label: "Small patch (up to 20 sq ft)", hint: "One damaged spot" },
    "8x10": { hint: "Small bedroom" },
    "10x10": { hint: "Standard bedroom" },
    "10x12": { hint: "Master bedroom" },
    "12x15": { hint: "Living hall" },
    "15x20": { hint: "Large hall" },
    "20x25": { hint: "Open-plan / shop lot" },
    custom: { label: "Custom size", hint: "Enter your own measurements" }
  },
  damage: {
    none: { label: "No damage — new installation", hint: "Fresh build" },
    hairline: { label: "Hairline cracks only", hint: "Cosmetic joint movement" },
    cracks: { label: "Visible cracks", hint: "Joint tape failure" },
    stains: { label: "Water stains", hint: "Past or current leak" },
    sagging: { label: "Sagging boards", hint: "Fixings or frame failing" },
    hole: { label: "Hole or broken board", hint: "Impact or access cut" },
    collapsed: { label: "Partially collapsed", hint: "Board has come down" },
    mould: { label: "Mould growth", hint: "Sustained damp" }
  },
  extras: {
    "water-damage": { label: "Active water damage", hint: "Leak source must be treated first" },
    paint: { label: "Paint the ceiling after", hint: "Two coats, matched to your wall colour" },
    "lighting-removal": { label: "Remove & reinstall lighting", hint: "Downlights, pendants or track" },
    "fan-removal": { label: "Remove & reinstall ceiling fan", hint: "Includes hook check" },
    cornice: { label: "Add cornice / moulding", hint: "Decorative perimeter trim" },
    insulation: { label: "Add insulation layer", hint: "Heat and sound reduction" },
    debris: { label: "Debris disposal needed", hint: "Old boards carted away" }
  },
  heights: {
    standard: { label: "Standard (up to 10 ft)", hint: "Normal step ladder" },
    tall: { label: "Tall (10 – 14 ft)", hint: "Extended platform" },
    void: { label: "Double volume / void", hint: "Scaffold tower required" }
  },
  urgency: {
    standard: { label: "Standard schedule", hint: "Next available slot" },
    "7-days": { label: "Within 7 days", hint: "Priority scheduling" },
    urgent: { label: "Urgent — 48 hours", hint: "Crew reshuffled for you" },
    emergency: { label: "Emergency — sagging risk", hint: "Same-day make-safe" }
  },
  work: {
    "new-flat": {
      rateNote: "Published rate: {label}",
      service: "Flat Plaster Ceiling Installation",
      package: "Flat Ceiling Package"
    },
    "new-tiered": {
      rateNote: "Published rate: {label}",
      service: "Tiered & L-Box Ceiling Installation",
      package: "L-Box Design Package"
    },
    "new-cove": {
      rateNote: "Published rate: {label}",
      service: "Cove & Curved Ceiling Installation",
      package: "Feature Ceiling Package"
    },
    partition: {
      rateNote: "Published rate: {label}",
      service: "Gypsum Board Partition Wall",
      package: "Partition Package"
    },
    "replace-section": {
      rateNote: "Published installation band RM {low}–RM {high} / sq ft",
      service: "Ceiling Section Replacement",
      package: "Section Replacement Package"
    },
    repair: {
      rateNote: "Published rate: {label}",
      service: "Plaster Ceiling Repair & Re-Skim",
      package: "Repair & Re-Skim Package"
    }
  },
  breakdown: {
    ceilingArea: "Ceiling area",
    ceilingAreaValue: "{area} sq ft",
    customBasis: "{length} × {width} ft",
    appliedRate: "Applied rate",
    appliedRateValue: "RM {rate} / sq ft",
    appliedRateNote: "{rateNote} · {type} factor ×{factor} · {damage}",
    leakSource: "Leak source treatment",
    leakSourceNote: "Published rate: {label} — the source is sealed before reinstatement",
    painting: "Ceiling painting",
    paintingNote: "{area} sq ft × published interior painting band",
    lighting: "Lighting removal & reinstatement",
    lightingNoteOne: "{count} point at half the published {label} rate",
    lightingNoteMany: "{count} points at half the published {label} rate",
    fan: "Ceiling fan removal & refit",
    fanNote: "Derived from published {label}",
    cornice: "Cornice / decorative moulding",
    corniceNote: "≈ {perimeter} linear ft perimeter",
    insulation: "Insulation layer",
    insulationNote: "Rockwool / foil-backed layer above the boards",
    debris: "Debris disposal",
    debrisNote: "Published handyman task rate",
    minimum: "Minimum job value applied",
    minimumNote: "Published starting price: {label}"
  },
  durations: {
    halfDay: "Half day (3–4 hours)",
    oneDay: "1 working day",
    oneTwoDays: "1–2 working days",
    threeFourDays: "3–4 working days",
    aboutDays: "About {n} working days"
  },
  addons: {
    paint: { label: "Paint the finished ceiling", note: "Two coats over the new surface" },
    downlights: { label: "New LED downlight points", note: "Published rate: {label} per point" },
    coveLighting: { label: "Concealed cove LED strip", note: "Derived from published cove & strip LED rate" },
    waterproof: { label: "Waterproofing the leak source", note: "Published rate: {label}" },
    postClean: { label: "Post-works cleaning", note: "Dust sheeting removal and full vacuum" }
  },
  related: {
    plasterCeiling: { label: "Plaster Ceiling Service", desc: "Flat, tiered and cove designs" },
    ceilingRepair: { label: "Ceiling Repair", desc: "Water damage and partitions" },
    costGuide: { label: "Ceiling Cost Guide", desc: "Published 2026 rates" },
    lighting: { label: "Lighting Installation", desc: "Downlights and cove strips" },
    waterproofing: { label: "Waterproofing", desc: "Stop the leak above the ceiling" }
  },
  articles: {
    gypsumVs: "Gypsum vs Plaster Ceiling in Malaysia",
    ceilingFix: "How to Fix a Leaking Ceiling Without Tile Hacking"
  },
  assumptions: {
    framing: "Rate assumes a standard GI framing grid at normal spacing over an accessible ceiling void.",
    services: "Existing wiring, air-cond piping and sprinkler heads are worked around, not relocated.",
    belowMinimum: "Your scope is below our minimum job value, so the published starting price applies.",
    included: "Board and skim material is included in the sq ft rate.",
    sagging: "Sagging or collapsed ceilings are made safe first; the final scope is confirmed once the void is opened."
  },
  maintenance: {
    inspect: "Inspect ceiling joints after heavy monsoon rain — early stains are cheap to treat.",
    ventilate: "Keep the ceiling void ventilated to prevent condensation from air-cond piping.",
    reskim: "Re-skim and repaint every 5–7 years to keep joints invisible."
  }
};
