/**
 * TV Mount Advisor — locale-aware spec builder.
 *
 * Bracket recommendation + installation estimate, priced from the published
 * handyman TV mounting rate and its validated band. Copy resolves through the
 * injected translator; locale-neutral data only here.
 */

import { RATES, clamp, roundMoney, priceLabel, withinBand } from "../pricing";
import type { AddOn, Answers, EstimateResult, EstimatorSpec } from "../types";
import { asArray, opt, type Translator } from "./shared";

const TV_SIZES: { value: string; inches: number; position: number }[] = [
  { value: "32", inches: 32, position: 0 },
  { value: "43", inches: 43, position: 0.15 },
  { value: "55", inches: 55, position: 0.35 },
  { value: "65", inches: 65, position: 0.55 },
  { value: "75", inches: 75, position: 0.75 },
  { value: "85", inches: 85, position: 0.9 },
  { value: "98", inches: 98, position: 1 }
];

const WALL_TYPES: { value: string; icon: string; add: number; maxSafe: number }[] = [
  { value: "concrete", icon: "🧱", add: 0.1, maxSafe: 98 },
  { value: "brick", icon: "🧱", add: 0, maxSafe: 85 },
  { value: "plasterboard", icon: "⬜", add: 0.35, maxSafe: 65 },
  { value: "wood", icon: "🪵", add: 0.2, maxSafe: 75 },
  { value: "cement-board", icon: "🪨", add: 0.28, maxSafe: 75 },
  { value: "glass-tile", icon: "🔳", add: 0.22, maxSafe: 85 },
  { value: "not-sure", icon: "❓", add: 0.12, maxSafe: 75 }
];

const BRACKETS: { value: string; add: number; icon: string }[] = [
  { value: "fixed", add: 0, icon: "▭" },
  { value: "tilt", add: 0.12, icon: "◺" },
  { value: "full-motion", add: 0.3, icon: "↔️" },
  { value: "ceiling", add: 0.45, icon: "⬇️" },
  { value: "not-sure", add: 0.1, icon: "❓" }
];

const BRACKET_SUPPLY: { value: string }[] = [{ value: "customer" }, { value: "include" }];

const EXTRAS: { value: string }[] = [
  { value: "concealment" },
  { value: "trunking" },
  { value: "power-point" },
  { value: "soundbar" },
  { value: "shelf" },
  { value: "dismount" },
  { value: "setup" }
];

const HEIGHTS: { value: string; add: number }[] = [
  { value: "standard", add: 0 },
  { value: "high", add: 0.1 },
  { value: "very-high", add: 0.25 }
];

export function computeTvMount(t: Translator, answers: Answers): EstimateResult {
  const size = TV_SIZES.find((row) => row.value === answers.tvSize) ?? TV_SIZES[2];
  const wall = WALL_TYPES.find((row) => row.value === answers.wallType) ?? WALL_TYPES[1];
  const bracket = BRACKETS.find((row) => row.value === answers.bracket) ?? BRACKETS[0];
  const height = HEIGHTS.find((row) => row.value === answers.height) ?? HEIGHTS[0];
  const extras = asArray(answers.extras);
  const supplyBracket = answers.bracketSupply === "include";

  const band = RATES.handyman.tvBand;
  const position = clamp(size.position + bracket.add * 0.5 + wall.add * 0.5, 0, 1);
  let base = Math.max(RATES.handyman.tvMount, withinBand(band, position));

  const sizeLabel = t(`tvSizes.${size.value}.label`);
  const wallLabel = t(`wallTypes.${wall.value}.label`);
  const bracketLabel = t(`brackets.${bracket.value}.label`);
  const heightLabel = t(`heights.${height.value}.label`);

  const breakdown: { label: string; value: string; note?: string }[] = [
    {
      label: t("breakdown.mounting", { size: sizeLabel }),
      value: `RM ${roundMoney(base).toLocaleString()}`,
      note: t("breakdown.mountingNote", { label: priceLabel("handyman.tv"), low: band.low, high: band.high })
    }
  ];

  const multiplier = (1 + wall.add) * (1 + bracket.add) * (1 + height.add);
  base *= multiplier;
  if (multiplier !== 1) {
    breakdown.push({
      label: t("breakdown.factor"),
      value: t("breakdown.factorValue", { mult: multiplier.toFixed(2) }),
      note: t("breakdown.factorNote", { wall: wallLabel, bracket: bracketLabel, height: heightLabel })
    });
  }

  let total = base;

  if (supplyBracket) {
    // Bracket hardware priced from the published handyman task band.
    const bracketCost = withinBand(RATES.handyman.generalBand, clamp(size.position + bracket.add, 0, 1));
    total += bracketCost;
    breakdown.push({
      label: t("breakdown.bracketSupply", {
        bracket: bracket.value === "not-sure" ? t("breakdown.bracketSupplyRecommended") : bracketLabel
      }),
      value: `RM ${roundMoney(bracketCost).toLocaleString()}`,
      note: t("breakdown.bracketSupplyNote")
    });
  }

  if (extras.includes("concealment")) {
    const cost = RATES.handyman.tvMount * 0.85;
    total += cost;
    breakdown.push({
      label: t("breakdown.concealment"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: t("breakdown.concealmentNote")
    });
  }

  if (extras.includes("trunking")) {
    const cost = RATES.handyman.shelf * 0.6;
    total += cost;
    breakdown.push({
      label: t("breakdown.trunking"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: t("breakdown.trunkingNote", { label: priceLabel("handyman.shelf") })
    });
  }

  if (extras.includes("power-point")) {
    const cost = RATES.handyman.powerPoint;
    total += cost;
    breakdown.push({
      label: t("breakdown.powerPoint"),
      value: `RM ${cost.toLocaleString()}`,
      note: t("breakdown.powerPointNote", { label: priceLabel("electrical.powerPoint") })
    });
  }

  if (extras.includes("soundbar")) {
    const cost = RATES.handyman.shelf;
    total += cost;
    breakdown.push({
      label: t("breakdown.soundbar"),
      value: `RM ${cost.toLocaleString()}`,
      note: t("breakdown.soundbarNote", { label: priceLabel("handyman.shelf") })
    });
  }

  if (extras.includes("shelf")) {
    const cost = RATES.handyman.shelf;
    total += cost;
    breakdown.push({
      label: t("breakdown.shelf"),
      value: `RM ${cost.toLocaleString()}`,
      note: t("breakdown.shelfNote", { label: priceLabel("handyman.shelf") })
    });
  }

  if (extras.includes("dismount")) {
    const cost = RATES.handyman.callOut * 0.7;
    total += cost;
    breakdown.push({
      label: t("breakdown.dismount"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: t("breakdown.dismountNote")
    });
  }

  if (extras.includes("setup")) {
    const cost = RATES.handyman.callOut * 0.5;
    total += cost;
    breakdown.push({
      label: t("breakdown.setup"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: t("breakdown.setupNote")
    });
  }

  let minimumApplied = false;
  if (total < RATES.handyman.callOut) {
    total = RATES.handyman.callOut;
    minimumApplied = true;
    breakdown.push({
      label: t("breakdown.minimum"),
      value: `RM ${RATES.handyman.callOut.toLocaleString()}`,
      note: t("breakdown.minimumNote")
    });
  }

  const price = roundMoney(total);
  const spread = 0.14 + wall.add * 0.2;
  const low = roundMoney(price * (1 - spread));
  const high = roundMoney(price * (1 + spread + 0.06));
  const materials = roundMoney(price * (supplyBracket ? 0.34 : 0.12));
  const labour = price - materials;

  const hours = 1.2 + size.position + (extras.includes("concealment") ? 1.2 : 0) + extras.length * 0.3;
  const duration =
    hours <= 1.5
      ? t("durations.oneHour")
      : hours <= 2.5
        ? t("durations.oneTwoHours")
        : hours <= 4
          ? t("durations.twoFourHours")
          : t("durations.halfDay");

  const findings = [
    { title: t("findings.fixingTitle"), detail: t(`wallTypes.${wall.value}.anchor`) },
    {
      title: t("findings.bracketTitle"),
      detail:
        bracket.value === "not-sure"
          ? size.inches >= 65
            ? t("findings.bracketHeavy", { size: sizeLabel })
            : t("findings.bracketFixed", { size: sizeLabel })
          : t("findings.bracketChoice", {
              bracket: bracketLabel,
              hint: t(`brackets.${bracket.value}.hint`).toLowerCase()
            })
    },
    {
      title: t("findings.loadTitle"),
      detail:
        size.inches > wall.maxSafe
          ? t("findings.loadExceeds", { size: sizeLabel, wall: wallLabel.toLowerCase() })
          : t("findings.loadSafe", { size: sizeLabel, wall: wallLabel.toLowerCase() })
    }
  ];
  const wallWarning = opt(t, `wallTypes.${wall.value}.warning`);
  if (wallWarning) findings.push({ title: t("findings.warningTitle"), detail: wallWarning });
  if (answers.powerPoint === "no" && !extras.includes("power-point")) {
    findings.push({
      title: t("findings.noPowerTitle"),
      detail: t("findings.noPowerDetail")
    });
  }

  const addOns: AddOn[] = [
    {
      id: "conceal",
      label: t("addons.conceal.label"),
      price: roundMoney(RATES.handyman.tvMount * 0.85),
      note: t("addons.conceal.note"),
      recommended: !extras.includes("concealment") && !extras.includes("trunking")
    },
    {
      id: "power",
      label: t("addons.power.label"),
      price: RATES.handyman.powerPoint,
      note: t("addons.power.note", { label: priceLabel("electrical.powerPoint") }),
      recommended: answers.powerPoint === "no" && !extras.includes("power-point")
    },
    {
      id: "soundbar-addon",
      label: t("addons.soundbar.label"),
      price: RATES.handyman.shelf,
      note: t("addons.soundbar.note", { label: priceLabel("handyman.shelf") }),
      recommended: !extras.includes("soundbar") && size.inches >= 55
    },
    {
      id: "feature-wall",
      label: t("addons.featureWall.label"),
      price: RATES.handyman.tvConsole,
      note: t("addons.featureWall.note", { label: priceLabel("carpentry.tvConsole") }),
      recommended: false
    },
    {
      id: "patch-paint",
      label: t("addons.patchPaint.label"),
      price: RATES.painting.repairMinimum,
      note: t("addons.patchPaint.note", { label: priceLabel("painting.repair") }),
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
    recommendedService: t("service.summary", { size: sizeLabel, wall: wallLabel }),
    packageName:
      size.inches >= 75 ? t("packages.heavy") : extras.length >= 2 ? t("packages.mediaWall") : t("packages.standard"),
    serviceHref: "/services/handyman",
    breakdown,
    addOns,
    findings,
    related: [
      { label: t("related.handyman.label"), href: "/services/handyman", desc: t("related.handyman.desc") },
      { label: t("related.costGuide.label"), href: "/services/handyman/cost", desc: t("related.costGuide.desc") },
      { label: t("related.electrical.label"), href: "/services/electrical", desc: t("related.electrical.desc") },
      { label: t("related.carpentry.label"), href: "/services/carpentry", desc: t("related.carpentry.desc") },
      { label: t("related.lighting.label"), href: "/services/lighting", desc: t("related.lighting.desc") }
    ],
    articles: [{ label: t("articles.safety"), href: "/blog/tv-wall-mounting-safety-guide" }],
    maintenance: [t("maintenance.bolts"), t("maintenance.ventilation"), t("maintenance.noExtraWeight")],
    assumptions: [
      t("assumptions.scope"),
      supplyBracket ? t("assumptions.supplied") : t("assumptions.customerBracket"),
      minimumApplied ? t("assumptions.belowMinimum") : t("assumptions.wallCheck")
    ]
  };
}

export function buildTvMountSpec(t: Translator): EstimatorSpec {
  return {
    slug: "tv-mount-advisor",
    name: t("meta.name"),
    serviceSlug: "handyman",
    resultLabel: t("meta.resultLabel"),
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
        title: t("steps.tv.title"),
        subtitle: t("steps.tv.subtitle"),
        icon: "📺",
        fields: [
          {
            id: "tvSize",
            kind: "cards",
            label: t("fields.tvSize.label"),
            required: true,
            choices: TV_SIZES.map((row) => ({
              value: row.value,
              label: t(`tvSizes.${row.value}.label`),
              hint: t(`tvSizes.${row.value}.hint`),
              popular: row.value === "55"
            }))
          }
        ]
      },
      {
        id: "wall",
        title: t("steps.wall.title"),
        subtitle: t("steps.wall.subtitle"),
        icon: "🧱",
        fields: [
          {
            id: "wallType",
            kind: "cards",
            label: t("fields.wallType.label"),
            required: true,
            choices: WALL_TYPES.map((row) => ({
              value: row.value,
              label: t(`wallTypes.${row.value}.label`),
              icon: row.icon,
              hint: t(`wallTypes.${row.value}.hint`)
            }))
          },
          {
            id: "height",
            kind: "cards",
            label: t("fields.height.label"),
            required: true,
            choices: HEIGHTS.map((row) => ({
              value: row.value,
              label: t(`heights.${row.value}.label`),
              hint: t(`heights.${row.value}.hint`)
            }))
          }
        ]
      },
      {
        id: "bracket",
        title: t("steps.bracket.title"),
        subtitle: t("steps.bracket.subtitle"),
        icon: "🔩",
        fields: [
          {
            id: "bracket",
            kind: "cards",
            label: t("fields.bracket.label"),
            required: true,
            choices: BRACKETS.map((row) => ({
              value: row.value,
              label: t(`brackets.${row.value}.label`),
              hint: t(`brackets.${row.value}.hint`),
              icon: row.icon
            }))
          },
          {
            id: "bracketSupply",
            kind: "cards",
            label: t("fields.bracketSupply.label"),
            columns: 2,
            choices: BRACKET_SUPPLY.map((row) => ({
              value: row.value,
              label: t(`bracketSupply.${row.value}.label`),
              hint: t(`bracketSupply.${row.value}.hint`)
            }))
          }
        ]
      },
      {
        id: "extras",
        advanced: true,
        title: t("steps.extras.title"),
        subtitle: t("steps.extras.subtitle"),
        icon: "🔌",
        fields: [
          {
            id: "powerPoint",
            kind: "cards",
            label: t("fields.powerPoint.label"),
            columns: 2,
            required: true,
            choices: [
              { value: "yes", label: t("powerPoint.yes"), icon: "✅" },
              { value: "no", label: t("powerPoint.no"), icon: "❌" }
            ]
          },
          {
            id: "extras",
            kind: "multi",
            label: t("fields.extras.label"),
            help: t("fields.extras.help"),
            choices: EXTRAS.map((row) => ({
              value: row.value,
              label: t(`extras.${row.value}.label`),
              hint: t(`extras.${row.value}.hint`)
            }))
          }
        ]
      }
    ],
    compute: (answers) => computeTvMount(t, answers)
  };
}
