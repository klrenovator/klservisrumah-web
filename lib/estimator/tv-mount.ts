/**
 * TV Mount Advisor — bracket recommendation + installation estimate.
 *
 * Priced from the published handyman TV mounting rate and its validated band.
 */

import { RATES, clamp, roundMoney, priceLabel, withinBand } from "./pricing";
import type { AddOn, Answers, EstimateResult, EstimatorSpec } from "./types";

const TV_SIZES: { value: string; label: string; inches: number; hint: string; position: number }[] = [
  { value: "32", label: 'Up to 32"', inches: 32, hint: "≈ 5 kg · VESA 200×200", position: 0 },
  { value: "43", label: '40" – 43"', inches: 43, hint: "≈ 9 kg · VESA 200×200", position: 0.15 },
  { value: "55", label: '50" – 55"', inches: 55, hint: "≈ 16 kg · VESA 400×400", position: 0.35 },
  { value: "65", label: '60" – 65"', inches: 65, hint: "≈ 24 kg · VESA 400×400", position: 0.55 },
  { value: "75", label: '70" – 75"', inches: 75, hint: "≈ 32 kg · VESA 600×400", position: 0.75 },
  { value: "85", label: '80" – 85"', inches: 85, hint: "≈ 45 kg · VESA 800×400", position: 0.9 },
  { value: "98", label: 'Above 85"', inches: 98, hint: "Commercial display · 2-person lift", position: 1 }
];

const WALL_TYPES: {
  value: string;
  label: string;
  icon: string;
  hint: string;
  add: number;
  anchor: string;
  maxSafe: number;
  warning?: string;
}[] = [
  { value: "concrete", label: "Concrete / RC wall", icon: "🧱", hint: "Solid, rings dull when knocked", add: 0.1, anchor: "M10 through-bolt or sleeve anchor into RC", maxSafe: 98 },
  { value: "brick", label: "Brick / block wall", icon: "🧱", hint: "Most common in Malaysian homes", add: 0, anchor: "M8 sleeve anchor into solid brick, avoiding mortar joints", maxSafe: 85 },
  { value: "plasterboard", label: "Plasterboard / gypsum partition", icon: "⬜", hint: "Hollow, sounds drummy", add: 0.35, anchor: "Backing plate fixed to the metal studs — never board anchors alone", maxSafe: 65, warning: "Gypsum partitions cannot carry a large TV on board anchors. We fit a timber or steel backing plate across the studs." },
  { value: "wood", label: "Timber / plywood wall", icon: "🪵", hint: "Feature wall or timber stud", add: 0.2, anchor: "Coach screws into solid timber studs", maxSafe: 75, warning: "We locate and fix into the studs; plywood facing alone is not load-bearing." },
  { value: "cement-board", label: "Cement board partition", icon: "🪨", hint: "Fibre cement over studs", add: 0.28, anchor: "Through-fixed to studs with load spreader", maxSafe: 75 },
  { value: "glass-tile", label: "Tiled wall", icon: "🔳", hint: "Tiles over brick or concrete", add: 0.22, anchor: "Diamond-core drilled through tile into the substrate", maxSafe: 85, warning: "Tile drilling carries a small chip risk; we core-drill slowly and seal the penetration." },
  { value: "not-sure", label: "Not sure", icon: "❓", hint: "We test the wall on arrival", add: 0.12, anchor: "Confirmed by knock test and pilot drill on site", maxSafe: 75 }
];

const BRACKETS: { value: string; label: string; hint: string; add: number; icon: string }[] = [
  { value: "fixed", label: "Fixed / flat to wall", hint: "Slimmest profile, lowest cost", add: 0, icon: "▭" },
  { value: "tilt", label: "Tilting", hint: "Angle down for high mounting", add: 0.12, icon: "◺" },
  { value: "full-motion", label: "Full-motion swivel arm", hint: "Pull out and turn — heaviest load", add: 0.3, icon: "↔️" },
  { value: "ceiling", label: "Ceiling mount", hint: "Drop-down from the slab", add: 0.45, icon: "⬇️" },
  { value: "not-sure", label: "Recommend one for me", hint: "We advise on site", add: 0.1, icon: "❓" }
];

const BRACKET_SUPPLY: { value: string; label: string; hint: string }[] = [
  { value: "customer", label: "I already have a bracket", hint: "Installation only" },
  { value: "include", label: "Supply the bracket for me", hint: "Rated bracket matched to your TV" }
];

const EXTRAS: { value: string; label: string; hint: string }[] = [
  { value: "concealment", label: "Conceal cables in the wall", hint: "Chase, conduit and make good" },
  { value: "trunking", label: "Surface cable trunking", hint: "Neat paintable trunking — no wall chasing" },
  { value: "power-point", label: "New power point behind the TV", hint: "Licensed electrical work" },
  { value: "soundbar", label: "Mount a soundbar", hint: "Bracket aligned under the TV" },
  { value: "shelf", label: "Floating shelf for devices", hint: "Console, router or media box" },
  { value: "dismount", label: "Remove existing TV / bracket", hint: "Take down and make good" },
  { value: "setup", label: "Device setup & tuning", hint: "Connect sources and check picture" }
];

const HEIGHTS: { value: string; label: string; hint: string; add: number }[] = [
  { value: "standard", label: "Standard height", hint: "Eye level when seated", add: 0 },
  { value: "high", label: "High mount", hint: "Above a console or fireplace", add: 0.1 },
  { value: "very-high", label: "Very high / double volume", hint: "Ladder or tower access", add: 0.25 }
];

function asArray(value: unknown): string[] {
  return Array.isArray(value) ? (value as string[]) : [];
}

export function computeTvMount(answers: Answers): EstimateResult {
  const size = TV_SIZES.find((row) => row.value === answers.tvSize) ?? TV_SIZES[2];
  const wall = WALL_TYPES.find((row) => row.value === answers.wallType) ?? WALL_TYPES[1];
  const bracket = BRACKETS.find((row) => row.value === answers.bracket) ?? BRACKETS[0];
  const height = HEIGHTS.find((row) => row.value === answers.height) ?? HEIGHTS[0];
  const extras = asArray(answers.extras);
  const supplyBracket = answers.bracketSupply === "include";

  const band = RATES.handyman.tvBand;
  const position = clamp(size.position + bracket.add * 0.5 + wall.add * 0.5, 0, 1);
  let base = Math.max(RATES.handyman.tvMount, withinBand(band, position));

  const breakdown: { label: string; value: string; note?: string }[] = [
    {
      label: `TV mounting — ${size.label}`,
      value: `RM ${roundMoney(base).toLocaleString()}`,
      note: `Published rate: ${priceLabel("handyman.tv")} · validated band RM ${band.low}–RM ${band.high}`
    }
  ];

  const multiplier = (1 + wall.add) * (1 + bracket.add) * (1 + height.add);
  base *= multiplier;
  if (multiplier !== 1) {
    breakdown.push({
      label: "Wall, bracket & height factor",
      value: `× ${multiplier.toFixed(2)}`,
      note: `${wall.label} · ${bracket.label} bracket · ${height.label}`
    });
  }

  let total = base;

  if (supplyBracket) {
    // Bracket hardware priced from the published handyman task band.
    const bracketCost = withinBand(RATES.handyman.generalBand, clamp(size.position + bracket.add, 0, 1));
    total += bracketCost;
    breakdown.push({
      label: `${bracket.label === "Recommend one for me" ? "Recommended" : bracket.label} bracket supply`,
      value: `RM ${roundMoney(bracketCost).toLocaleString()}`,
      note: "Load-rated bracket matched to your TV's VESA pattern and weight"
    });
  }

  if (extras.includes("concealment")) {
    const cost = RATES.handyman.tvMount * 0.85;
    total += cost;
    breakdown.push({
      label: "In-wall cable concealment",
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: "Chase, conduit, patch and make good ready for paint"
    });
  }

  if (extras.includes("trunking")) {
    const cost = RATES.handyman.shelf * 0.6;
    total += cost;
    breakdown.push({
      label: "Surface cable trunking",
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: `Derived from published ${priceLabel("handyman.shelf")} rate`
    });
  }

  if (extras.includes("power-point")) {
    const cost = RATES.handyman.powerPoint;
    total += cost;
    breakdown.push({
      label: "New power point behind the TV",
      value: `RM ${cost.toLocaleString()}`,
      note: `Published rate: ${priceLabel("electrical.powerPoint")}`
    });
  }

  if (extras.includes("soundbar")) {
    const cost = RATES.handyman.shelf;
    total += cost;
    breakdown.push({
      label: "Soundbar mounting",
      value: `RM ${cost.toLocaleString()}`,
      note: `Published rate: ${priceLabel("handyman.shelf")}`
    });
  }

  if (extras.includes("shelf")) {
    const cost = RATES.handyman.shelf;
    total += cost;
    breakdown.push({
      label: "Floating shelf installation",
      value: `RM ${cost.toLocaleString()}`,
      note: `Published rate: ${priceLabel("handyman.shelf")}`
    });
  }

  if (extras.includes("dismount")) {
    const cost = RATES.handyman.callOut * 0.7;
    total += cost;
    breakdown.push({
      label: "Remove existing TV / bracket",
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: "Take down, patch holes and make good"
    });
  }

  if (extras.includes("setup")) {
    const cost = RATES.handyman.callOut * 0.5;
    total += cost;
    breakdown.push({
      label: "Device setup & picture tuning",
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: "Sources connected, inputs labelled, picture checked"
    });
  }

  let minimumApplied = false;
  if (total < RATES.handyman.callOut) {
    total = RATES.handyman.callOut;
    minimumApplied = true;
    breakdown.push({
      label: "Minimum call-out applied",
      value: `RM ${RATES.handyman.callOut.toLocaleString()}`,
      note: "Published handyman starting price"
    });
  }

  const price = roundMoney(total);
  const spread = 0.14 + wall.add * 0.2;
  const low = roundMoney(price * (1 - spread));
  const high = roundMoney(price * (1 + spread + 0.06));
  const materials = roundMoney(price * (supplyBracket ? 0.34 : 0.12));
  const labour = price - materials;

  const hours = 1.2 + size.position + (extras.includes("concealment") ? 1.2 : 0) + extras.length * 0.3;
  const duration = hours <= 1.5 ? "About 1 hour on site" : hours <= 2.5 ? "1–2 hours on site" : hours <= 4 ? "2–4 hours on site" : "Half a working day";

  const findings = [
    { title: "Recommended fixing method", detail: wall.anchor },
    {
      title: "Recommended bracket",
      detail:
        bracket.value === "not-sure"
          ? size.inches >= 65
            ? `For a ${size.label} TV we normally fit a heavy-duty fixed or tilting bracket — full-motion arms put a much larger leverage load on the wall.`
            : `A fixed slim bracket suits a ${size.label} TV and keeps the panel close to the wall.`
          : `${bracket.label} — ${bracket.hint.toLowerCase()}.`
    },
    {
      title: "Load check",
      detail:
        size.inches > wall.maxSafe
          ? `A ${size.label} TV exceeds what a ${wall.label.toLowerCase()} carries safely without reinforcement. We install a backing plate or relocate to a structural wall.`
          : `A ${size.label} TV is within safe load for a ${wall.label.toLowerCase()} using the fixing method above.`
    }
  ];
  if (wall.warning) findings.push({ title: "Important for your wall type", detail: wall.warning });
  if (answers.powerPoint === "no" && !extras.includes("power-point")) {
    findings.push({
      title: "No power point behind the TV",
      detail: "Without a socket behind the panel the cable will be visible. Adding a concealed point during the same visit is the cleanest fix."
    });
  }

  const addOns: AddOn[] = [
    {
      id: "conceal",
      label: "In-wall cable concealment",
      price: roundMoney(RATES.handyman.tvMount * 0.85),
      note: "Chase, conduit and make good",
      recommended: !extras.includes("concealment") && !extras.includes("trunking")
    },
    {
      id: "power",
      label: "New power point behind the TV",
      price: RATES.handyman.powerPoint,
      note: `Published rate: ${priceLabel("electrical.powerPoint")}`,
      recommended: answers.powerPoint === "no" && !extras.includes("power-point")
    },
    {
      id: "soundbar-addon",
      label: "Soundbar bracket & alignment",
      price: RATES.handyman.shelf,
      note: `Published rate: ${priceLabel("handyman.shelf")}`,
      recommended: !extras.includes("soundbar") && size.inches >= 55
    },
    {
      id: "feature-wall",
      label: "TV console & feature wall carpentry",
      price: RATES.handyman.tvConsole,
      note: `Published rate: ${priceLabel("carpentry.tvConsole")}`,
      recommended: false
    },
    {
      id: "patch-paint",
      label: "Patch & repaint after mounting",
      price: RATES.painting.repairMinimum,
      note: `Published rate: ${priceLabel("painting.repair")}`,
      recommended: extras.includes("dismount") || extras.includes("concealment")
    }
  ];

  return {
    price,
    low,
    high,
    labour,
    materials,
    duration,
    recommendedService: `TV Wall Mounting — ${size.label} on ${wall.label}`,
    packageName:
      size.inches >= 75 ? "Heavy TV Mounting Package" : extras.length >= 2 ? "Complete Media Wall Package" : "Standard TV Mounting",
    serviceHref: "/services/handyman",
    breakdown,
    addOns,
    findings,
    related: [
      { label: "Handyman Services", href: "/services/handyman", desc: "TV mounting, shelves and fixings" },
      { label: "Handyman Cost Guide", href: "/services/handyman/cost", desc: "Published 2026 rates" },
      { label: "Electrical Installation", href: "/services/electrical", desc: "New power and data points" },
      { label: "Carpentry & Feature Walls", href: "/services/carpentry", desc: "TV consoles and media walls" },
      { label: "Lighting", href: "/services/lighting", desc: "Ambient lighting behind the TV" }
    ],
    articles: [{ label: "TV Wall Mounting Safety Guide", href: "/blog/tv-wall-mounting-safety-guide" }],
    maintenance: [
      "Re-check bracket bolts every 12 months, especially on full-motion arms.",
      "Keep at least 5 cm of ventilation gap behind the panel.",
      "Never hang extra weight (shelves, decor) from the TV bracket arm."
    ],
    assumptions: [
      "Estimate covers one TV on one wall with the fixing method shown above.",
      supplyBracket
        ? "Bracket supplied is load-rated for your TV's weight and VESA pattern."
        : "You supply the bracket — we check that it is rated for your TV before drilling.",
      minimumApplied
        ? "Small jobs are charged at our published minimum call-out."
        : "Wall type is verified with a knock test and pilot drill before final fixing."
    ]
  };
}

export const tvMountSpec: EstimatorSpec = {
  slug: "tv-mount-advisor",
  name: "TV Mount Advisor",
  serviceSlug: "handyman",
  resultLabel: "Estimated installation cost",
  defaults: {
    tvSize: "55",
    wallType: "brick",
    bracket: "fixed",
    bracketSupply: "customer",
    extras: [],
    powerPoint: "yes",
    height: "standard"
  },
  steps: [
    {
      id: "tv",
      title: "How big is your TV?",
      subtitle: "Screen size decides the bracket rating and how many people we send.",
      icon: "📺",
      fields: [
        {
          id: "tvSize",
          kind: "cards",
          label: "TV size",
          required: true,
          choices: TV_SIZES.map((row) => ({ value: row.value, label: row.label, hint: row.hint, popular: row.value === "55" }))
        }
      ]
    },
    {
      id: "wall",
      title: "What is the wall made of?",
      subtitle: "Knock it — a dull thud means solid, a drummy sound means a hollow partition.",
      icon: "🧱",
      fields: [
        {
          id: "wallType",
          kind: "cards",
          label: "Wall type",
          required: true,
          choices: WALL_TYPES.map((row) => ({ value: row.value, label: row.label, icon: row.icon, hint: row.hint }))
        },
        {
          id: "height",
          kind: "cards",
          label: "Mounting height",
          required: true,
          choices: HEIGHTS.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        }
      ]
    },
    {
      id: "bracket",
      title: "Which bracket do you want?",
      subtitle: "Not sure? Choose the last option and we will recommend one.",
      icon: "🔩",
      fields: [
        {
          id: "bracket",
          kind: "cards",
          label: "Bracket type",
          required: true,
          choices: BRACKETS.map((row) => ({ value: row.value, label: row.label, hint: row.hint, icon: row.icon }))
        },
        {
          id: "bracketSupply",
          kind: "cards",
          label: "Do you need us to supply it?",
          columns: 2,
          choices: BRACKET_SUPPLY.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        }
      ]
    },
    {
      id: "extras",
      title: "Cables, power and extras",
      subtitle: "Everything here can be done in the same visit.",
      icon: "🔌",
      fields: [
        {
          id: "powerPoint",
          kind: "cards",
          label: "Is there a power point behind the TV?",
          columns: 2,
          required: true,
          choices: [
            { value: "yes", label: "Yes, there is a socket", icon: "✅" },
            { value: "no", label: "No socket there", icon: "❌" }
          ]
        },
        {
          id: "extras",
          kind: "multi",
          label: "Add anything else?",
          help: "Optional — select all that apply.",
          choices: EXTRAS.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        }
      ]
    }
  ],
  compute: computeTvMount
};
