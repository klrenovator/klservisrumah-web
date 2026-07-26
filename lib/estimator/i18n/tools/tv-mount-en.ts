/**
 * TV Mount Advisor — English content dictionary.
 * See painting-en.ts for the dictionary contract; parity checked by the harness.
 */

import type { MessageDictionary } from "../../../i18n";

export const tvMountEnDict: MessageDictionary = {
  meta: {
    name: "TV Mount Advisor",
    resultLabel: "Estimated installation cost"
  },
  steps: {
    tv: {
      title: "How big is your TV?",
      subtitle: "Screen size decides the bracket rating and how many people we send."
    },
    wall: {
      title: "What is the wall made of?",
      subtitle: "Knock it — a dull thud means solid, a drummy sound means a hollow partition."
    },
    bracket: {
      title: "Which bracket do you want?",
      subtitle: "Not sure? Choose the last option and we will recommend one."
    },
    extras: {
      title: "Cables, power and extras",
      subtitle: "Everything here can be done in the same visit."
    }
  },
  fields: {
    tvSize: { label: "TV size" },
    wallType: { label: "Wall type" },
    height: { label: "Mounting height" },
    bracket: { label: "Bracket type" },
    bracketSupply: { label: "Do you need us to supply it?" },
    powerPoint: { label: "Is there a power point behind the TV?" },
    extras: { label: "Add anything else?", help: "Optional — select all that apply." }
  },
  tvSizes: {
    "32": { label: "Up to 32\"", hint: "≈ 5 kg · VESA 200×200" },
    "43": { label: "40\" – 43\"", hint: "≈ 9 kg · VESA 200×200" },
    "55": { label: "50\" – 55\"", hint: "≈ 16 kg · VESA 400×400" },
    "65": { label: "60\" – 65\"", hint: "≈ 24 kg · VESA 400×400" },
    "75": { label: "70\" – 75\"", hint: "≈ 32 kg · VESA 600×400" },
    "85": { label: "80\" – 85\"", hint: "≈ 45 kg · VESA 800×400" },
    "98": { label: "Above 85\"", hint: "Commercial display · 2-person lift" }
  },
  wallTypes: {
    concrete: {
      label: "Concrete / RC wall",
      hint: "Solid, rings dull when knocked",
      anchor: "M10 through-bolt or sleeve anchor into RC"
    },
    brick: {
      label: "Brick / block wall",
      hint: "Most common in Malaysian homes",
      anchor: "M8 sleeve anchor into solid brick, avoiding mortar joints"
    },
    plasterboard: {
      label: "Plasterboard / gypsum partition",
      hint: "Hollow, sounds drummy",
      anchor: "Backing plate fixed to the metal studs — never board anchors alone",
      warning: "Gypsum partitions cannot carry a large TV on board anchors. We fit a timber or steel backing plate across the studs."
    },
    wood: {
      label: "Timber / plywood wall",
      hint: "Feature wall or timber stud",
      anchor: "Coach screws into solid timber studs",
      warning: "We locate and fix into the studs; plywood facing alone is not load-bearing."
    },
    "cement-board": {
      label: "Cement board partition",
      hint: "Fibre cement over studs",
      anchor: "Through-fixed to studs with load spreader"
    },
    "glass-tile": {
      label: "Tiled wall",
      hint: "Tiles over brick or concrete",
      anchor: "Diamond-core drilled through tile into the substrate",
      warning: "Tile drilling carries a small chip risk; we core-drill slowly and seal the penetration."
    },
    "not-sure": {
      label: "Not sure",
      hint: "We test the wall on arrival",
      anchor: "Confirmed by knock test and pilot drill on site"
    }
  },
  brackets: {
    fixed: { label: "Fixed / flat to wall", hint: "Slimmest profile, lowest cost" },
    tilt: { label: "Tilting", hint: "Angle down for high mounting" },
    "full-motion": { label: "Full-motion swivel arm", hint: "Pull out and turn — heaviest load" },
    ceiling: { label: "Ceiling mount", hint: "Drop-down from the slab" },
    "not-sure": { label: "Recommend one for me", hint: "We advise on site" }
  },
  bracketSupply: {
    customer: { label: "I already have a bracket", hint: "Installation only" },
    include: { label: "Supply the bracket for me", hint: "Rated bracket matched to your TV" }
  },
  extras: {
    concealment: { label: "Conceal cables in the wall", hint: "Chase, conduit and make good" },
    trunking: { label: "Surface cable trunking", hint: "Neat paintable trunking — no wall chasing" },
    "power-point": { label: "New power point behind the TV", hint: "Licensed electrical work" },
    soundbar: { label: "Mount a soundbar", hint: "Bracket aligned under the TV" },
    shelf: { label: "Floating shelf for devices", hint: "Console, router or media box" },
    dismount: { label: "Remove existing TV / bracket", hint: "Take down and make good" },
    setup: { label: "Device setup & tuning", hint: "Connect sources and check picture" }
  },
  heights: {
    standard: { label: "Standard height", hint: "Eye level when seated" },
    high: { label: "High mount", hint: "Above a console or fireplace" },
    "very-high": { label: "Very high / double volume", hint: "Ladder or tower access" }
  },
  powerPoint: {
    yes: "Yes, there is a socket",
    no: "No socket there"
  },
  durations: {
    oneHour: "About 1 hour on site",
    oneTwoHours: "1–2 hours on site",
    twoFourHours: "2–4 hours on site",
    halfDay: "Half a working day"
  },
  packages: {
    heavy: "Heavy TV Mounting Package",
    mediaWall: "Complete Media Wall Package",
    standard: "Standard TV Mounting"
  },
  breakdown: {
    mounting: "TV mounting — {size}",
    mountingNote: "Published rate: {label} · validated band RM {low}–RM {high}",
    factor: "Wall, bracket & height factor",
    factorValue: "× {mult}",
    factorNote: "{wall} · {bracket} bracket · {height}",
    bracketSupply: "{bracket} bracket supply",
    bracketSupplyRecommended: "Recommended",
    bracketSupplyNote: "Load-rated bracket matched to your TV's VESA pattern and weight",
    concealment: "In-wall cable concealment",
    concealmentNote: "Chase, conduit, patch and make good ready for paint",
    trunking: "Surface cable trunking",
    trunkingNote: "Derived from published {label} rate",
    powerPoint: "New power point behind the TV",
    powerPointNote: "Published rate: {label}",
    soundbar: "Soundbar mounting",
    soundbarNote: "Published rate: {label}",
    shelf: "Floating shelf installation",
    shelfNote: "Published rate: {label}",
    dismount: "Remove existing TV / bracket",
    dismountNote: "Take down, patch holes and make good",
    setup: "Device setup & picture tuning",
    setupNote: "Sources connected, inputs labelled, picture checked",
    minimum: "Minimum call-out applied",
    minimumNote: "Published handyman starting price"
  },
  findings: {
    fixingTitle: "Recommended fixing method",
    bracketTitle: "Recommended bracket",
    bracketHeavy: "For a {size} TV we normally fit a heavy-duty fixed or tilting bracket — full-motion arms put a much larger leverage load on the wall.",
    bracketFixed: "A fixed slim bracket suits a {size} TV and keeps the panel close to the wall.",
    bracketChoice: "{bracket} — {hint}.",
    loadTitle: "Load check",
    loadExceeds: "A {size} TV exceeds what a {wall} carries safely without reinforcement. We install a backing plate or relocate to a structural wall.",
    loadSafe: "A {size} TV is within safe load for a {wall} using the fixing method above.",
    warningTitle: "Important for your wall type",
    noPowerTitle: "No power point behind the TV",
    noPowerDetail: "Without a socket behind the panel the cable will be visible. Adding a concealed point during the same visit is the cleanest fix."
  },
  addons: {
    conceal: { label: "In-wall cable concealment", note: "Chase, conduit and make good" },
    power: { label: "New power point behind the TV", note: "Published rate: {label}" },
    soundbar: { label: "Soundbar bracket & alignment", note: "Published rate: {label}" },
    featureWall: { label: "TV console & feature wall carpentry", note: "Published rate: {label}" },
    patchPaint: { label: "Patch & repaint after mounting", note: "Published rate: {label}" }
  },
  related: {
    handyman: { label: "Handyman Services", desc: "TV mounting, shelves and fixings" },
    costGuide: { label: "Handyman Cost Guide", desc: "Published 2026 rates" },
    electrical: { label: "Electrical Installation", desc: "New power and data points" },
    carpentry: { label: "Carpentry & Feature Walls", desc: "TV consoles and media walls" },
    lighting: { label: "Lighting", desc: "Ambient lighting behind the TV" }
  },
  articles: {
    safety: "TV Wall Mounting Safety Guide"
  },
  service: {
    summary: "TV Wall Mounting — {size} on {wall}"
  },
  maintenance: {
    bolts: "Re-check bracket bolts every 12 months, especially on full-motion arms.",
    ventilation: "Keep at least 5 cm of ventilation gap behind the panel.",
    noExtraWeight: "Never hang extra weight (shelves, decor) from the TV bracket arm."
  },
  assumptions: {
    scope: "Estimate covers one TV on one wall with the fixing method shown above.",
    supplied: "Bracket supplied is load-rated for your TV's weight and VESA pattern.",
    customerBracket: "You supply the bracket — we check that it is rated for your TV before drilling.",
    belowMinimum: "Small jobs are charged at our published minimum call-out.",
    wallCheck: "Wall type is verified with a knock test and pilot drill before final fixing."
  }
};
