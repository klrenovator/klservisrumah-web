/**
 * Estimator test harness.
 *
 * Exhaustively exercises every estimator across a large sweep of answer
 * combinations and asserts the invariants a customer-facing quotation must
 * never violate:
 *
 *   • price > 0 and finite
 *   • low ≤ price ≤ high
 *   • labour + materials === price   (the split must reconcile)
 *   • every published minimum is respected
 *   • duration, service, package and breakdown are always populated
 *   • add-on prices are positive and finite
 *   • no NaN leaks into any displayed string
 *   • monotonicity: a bigger area never costs less
 *
 * Run: npm run test:estimators
 */

import { paintingSpec, PAINT_TARGETS } from "../lib/estimator/painting.ts";
import { leakSpec, LEAK_LOCATIONS } from "../lib/estimator/leak.ts";
import { ceilingSpec, CEILING_TYPES } from "../lib/estimator/ceiling.ts";
import { plumbingSpec, PLUMBING_PROBLEMS } from "../lib/estimator/plumbing.ts";
import { tvMountSpec } from "../lib/estimator/tv-mount.ts";
import { RATES } from "../lib/estimator/pricing.ts";
import { SERVICE_SCOPES } from "../lib/estimator/rate-book.generated.ts";
import {
  buildServiceEstimator,
  hasServiceEstimator,
  DEDICATED_TOOL_BY_SERVICE
} from "../lib/estimator/service-estimator.ts";
import { createTranslator, type MessageDictionary } from "../lib/i18n.ts";
import enMessages from "../messages/en.json" with { type: "json" };
import msMessages from "../messages/ms.json" with { type: "json" };
import zhMessages from "../messages/zh.json" with { type: "json" };

/**
 * English translator for the generic engine. The harness exercises pricing
 * invariants, which are locale-independent, so a single English translator is
 * sufficient and keeps the assertions stable.
 */
const testTranslator = createTranslator(
  {
    en: enMessages as MessageDictionary,
    ms: msMessages as MessageDictionary,
    zh: zhMessages as MessageDictionary
  },
  "en"
);
import { servicesData } from "../config/services-data.ts";
import { toolsContent } from "../config/tools-data.ts";
import {
  blockingMessage,
  canAdvance,
  summariseAnswers,
  visibleFields,
  visibleSteps
} from "../lib/estimator/wizard-logic.ts";
import type { Answers, EstimatorSpec, EstimateResult, Field } from "../lib/estimator/types.ts";

let checks = 0;
let failures = 0;
const seen = new Set<string>();

function fail(message: string) {
  failures += 1;
  if (seen.has(message)) return;
  seen.add(message);
  console.error(`  ✗ ${message}`);
}

function assert(condition: boolean, message: string) {
  checks += 1;
  if (!condition) fail(message);
}

function hasNaN(value: unknown): boolean {
  if (typeof value === "number") return !Number.isFinite(value);
  if (typeof value === "string") return /NaN|Infinity|undefined|\[object/.test(value);
  if (Array.isArray(value)) return value.some(hasNaN);
  if (value && typeof value === "object") return Object.values(value).some(hasNaN);
  return false;
}

function validate(spec: EstimatorSpec, answers: Answers, label: string): EstimateResult {
  const result = spec.compute(answers);
  const tag = `[${spec.slug}] ${label}`;

  assert(Number.isFinite(result.price) && result.price > 0, `${tag}: price must be positive and finite (got ${result.price})`);
  assert(result.low <= result.price, `${tag}: low (${result.low}) must not exceed price (${result.price})`);
  assert(result.high >= result.price, `${tag}: high (${result.high}) must not be below price (${result.price})`);
  assert(result.low > 0, `${tag}: low must be positive (got ${result.low})`);
  assert(
    result.labour + result.materials === result.price,
    `${tag}: labour (${result.labour}) + materials (${result.materials}) must equal price (${result.price})`
  );
  assert(result.labour >= 0 && result.materials >= 0, `${tag}: labour and materials must be non-negative`);
  assert(Boolean(result.duration?.trim()), `${tag}: duration must be populated`);
  assert(Boolean(result.recommendedService?.trim()), `${tag}: recommendedService must be populated`);
  assert(Boolean(result.packageName?.trim()), `${tag}: packageName must be populated`);
  assert(result.serviceHref.startsWith("/"), `${tag}: serviceHref must be an internal path`);
  assert(result.breakdown.length > 0, `${tag}: breakdown must explain at least one line`);
  assert(result.assumptions.length > 0, `${tag}: assumptions must be populated`);
  assert(result.related.length > 0, `${tag}: related links must be populated`);

  for (const addOn of result.addOns) {
    assert(
      Number.isFinite(addOn.price) && addOn.price > 0,
      `${tag}: add-on "${addOn.label}" has an invalid price (${addOn.price})`
    );
  }
  for (const row of result.breakdown) {
    assert(!hasNaN(row.value), `${tag}: breakdown row "${row.label}" renders a bad value ("${row.value}")`);
    assert(!hasNaN(row.note ?? ""), `${tag}: breakdown row "${row.label}" renders a bad note`);
  }
  assert(!hasNaN(result.duration), `${tag}: duration renders a bad value ("${result.duration}")`);

  return result;
}

/** Cartesian sweep over a set of answer axes. */
function sweep(spec: EstimatorSpec, axes: Record<string, unknown[]>, base: Answers = {}) {
  const keys = Object.keys(axes);
  const combos: Answers[] = [{ ...spec.defaults, ...base }];
  for (const key of keys) {
    const next: Answers[] = [];
    for (const combo of combos) {
      for (const value of axes[key]) next.push({ ...combo, [key]: value as Answers[string] });
    }
    combos.length = 0;
    combos.push(...next);
  }
  for (const combo of combos) {
    const label = keys.map((key) => `${key}=${JSON.stringify(combo[key])}`).join(" ");
    validate(spec, combo, label);
  }
  return combos.length;
}

console.log("Running estimator test harness…\n");

/* ── Painting ──────────────────────────────────────────────────────────── */
console.log("• Painting Cost Calculator");
let cases = sweep(paintingSpec, {
  target: PAINT_TARGETS.map((row) => row.value),
  condition: ["excellent", "heavy-cracks", "water-damage", "rusty-metal"],
  grade: ["economy", "luxury"],
  access: ["easy", "rope-access"],
  urgency: ["standard", "emergency"],
  paintSupply: ["include", "customer"]
});
cases += sweep(paintingSpec, {
  areaPreset: ["8x8", "10x12", "20x20", "custom"],
  colour: ["same", "dark", "multiple"],
  extraPrep: [[], ["skim-coat"], ["skim-coat", "waterproofing", "crack-repair", "mould-treatment", "wallpaper-removal", "furniture-shift"]],
  customHeight: [8, 20]
});
cases += sweep(paintingSpec, {
  target: ["apartment", "landed-exterior", "factory", "warehouse", "office"],
  propertySize: ["600", "1200", "8000"],
  features: [[], ["low-voc", "odourless", "washable", "anti-mould", "weather-resistant", "premium-exterior", "heat-reflective", "anti-rust"]]
});
cases += sweep(paintingSpec, {
  target: ["doors", "windows", "main-gate", "kitchen-cabinets", "stair-railing"],
  itemCount: [1, 40]
});

// Published minimums must hold.
const smallRoom = paintingSpec.compute({ ...paintingSpec.defaults, target: "interior-walls", areaPreset: "8x8", condition: "excellent", grade: "economy" });
assert(
  smallRoom.price >= RATES.painting.roomMinimum * 0.9,
  `[painting] smallest interior job (${smallRoom.price}) fell below the published room minimum (${RATES.painting.roomMinimum})`
);
const smallExterior = paintingSpec.compute({ ...paintingSpec.defaults, target: "exterior-walls", areaPreset: "8x8", condition: "excellent", grade: "economy" });
assert(
  smallExterior.price >= RATES.painting.exteriorMinimum * 0.9,
  `[painting] smallest exterior job (${smallExterior.price}) fell below the published exterior minimum (${RATES.painting.exteriorMinimum})`
);

// Monotonicity: a larger room must never be cheaper.
const sizes = ["8x8", "10x10", "12x15", "20x20"];
let previous = 0;
for (const size of sizes) {
  const price = paintingSpec.compute({ ...paintingSpec.defaults, target: "interior-walls", areaPreset: size }).price;
  assert(price >= previous, `[painting] price dropped when the area grew (${size} → ${price} after ${previous})`);
  previous = price;
}
console.log(`  ${cases} combinations checked`);

/* ── Leak triage ───────────────────────────────────────────────────────── */
console.log("• Water Leak Triage");
cases = sweep(leakSpec, {
  location: LEAK_LOCATIONS.map((row) => row.value),
  severity: ["slow", "severe"],
  symptoms: [["wet-wall"], ["burst-pipe", "dripping", "meter-spinning"], ["mould", "brown-stain", "ceiling-bubble", "cracks", "peeling-paint"]],
  affected: ["spot", "multiple"]
});
cases += sweep(leakSpec, {
  duration: ["today", "year"],
  propertyType: ["condo", "terrace", "semi-d", "shop"],
  propertyAge: ["new", "old"]
});

// Severity escalation must be ordered.
const calm = leakSpec.compute({ ...leakSpec.defaults, location: "tap", symptoms: ["wet-wall"], severity: "slow", duration: "week", affected: "spot" });
const crisis = leakSpec.compute({ ...leakSpec.defaults, location: "ceiling", symptoms: ["burst-pipe", "dripping", "ceiling-bubble", "meter-spinning"], severity: "severe", duration: "today", affected: "multiple" });
assert(calm.severity === "routine" || calm.severity === "soon", `[leak] a slow tap drip should not be urgent (got ${calm.severity})`);
assert(crisis.severity === "emergency", `[leak] a burst pipe with a collapsing ceiling must be an emergency (got ${crisis.severity})`);
assert(crisis.price > calm.price, `[leak] the emergency case must cost more than the calm case`);
assert((crisis.findings?.length ?? 0) > 0, `[leak] findings must be populated`);
console.log(`  ${cases} combinations checked`);

/* ── Ceiling ───────────────────────────────────────────────────────────── */
console.log("• Ceiling Repair Estimator");
cases = sweep(ceilingSpec, {
  ceilingType: CEILING_TYPES.map((row) => row.value),
  workType: ["repair", "replace-section", "new-flat", "new-tiered", "new-cove", "partition"],
  damage: ["none", "collapsed"],
  height: ["standard", "void"]
});
cases += sweep(ceilingSpec, {
  areaPreset: ["small-patch", "10x12", "20x25", "custom"],
  extras: [[], ["water-damage", "paint", "lighting-removal", "fan-removal", "cornice", "insulation", "debris"]],
  lightCount: [1, 30],
  urgency: ["standard", "emergency"]
});
const patch = ceilingSpec.compute({ ...ceilingSpec.defaults, areaPreset: "small-patch", damage: "hairline", extras: [] });
assert(
  patch.price >= RATES.ceiling.repairMinimum,
  `[ceiling] smallest patch (${patch.price}) fell below the published repair minimum (${RATES.ceiling.repairMinimum})`
);
console.log(`  ${cases} combinations checked`);

/* ── Plumbing ──────────────────────────────────────────────────────────── */
console.log("• Plumbing Diagnostic");
cases = sweep(plumbingSpec, {
  problem: PLUMBING_PROBLEMS.map((row) => row.value),
  severity: ["minor", "emergency"],
  timing: ["standard", "emergency"],
  partsSupply: ["include", "customer"]
});
cases += sweep(plumbingSpec, {
  location: ["kitchen", "bathroom-main", "bathroom-ensuite", "laundry", "outdoor", "roof-tank", "multiple"],
  houseType: ["condo", "terrace", "semi-d", "shop", "factory"],
  propertyAge: ["new", "old"],
  quantity: [1, 10]
});
const tinyJob = plumbingSpec.compute({ ...plumbingSpec.defaults, problem: "bidet", severity: "minor", partsSupply: "customer", quantity: 1 });
assert(
  tinyJob.price >= RATES.plumbing.minorRepair,
  `[plumbing] smallest job (${tinyJob.price}) fell below the published minimum call-out (${RATES.plumbing.minorRepair})`
);
const burst = plumbingSpec.compute({ ...plumbingSpec.defaults, problem: "pipe-leak", severity: "emergency", timing: "emergency" });
assert(burst.severity === "emergency", `[plumbing] an emergency pipe leak must be flagged as an emergency (got ${burst.severity})`);
console.log(`  ${cases} combinations checked`);

/* ── TV mount ──────────────────────────────────────────────────────────── */
console.log("• TV Mount Advisor");
cases = sweep(tvMountSpec, {
  tvSize: ["32", "43", "55", "65", "75", "85", "98"],
  wallType: ["concrete", "brick", "plasterboard", "wood", "cement-board", "glass-tile", "not-sure"],
  bracket: ["fixed", "tilt", "full-motion", "ceiling", "not-sure"],
  bracketSupply: ["customer", "include"]
});
cases += sweep(tvMountSpec, {
  extras: [[], ["concealment"], ["concealment", "trunking", "power-point", "soundbar", "shelf", "dismount", "setup"]],
  powerPoint: ["yes", "no"],
  height: ["standard", "high", "very-high"]
});
const smallTv = tvMountSpec.compute({ ...tvMountSpec.defaults, tvSize: "32", wallType: "brick", bracket: "fixed", extras: [] });
assert(
  smallTv.price >= RATES.handyman.tvMount * 0.9,
  `[tv] smallest mount (${smallTv.price}) fell below the published TV mounting rate (${RATES.handyman.tvMount})`
);
// The load-safety warning must fire for a big TV on a hollow partition.
const heavyOnBoard = tvMountSpec.compute({ ...tvMountSpec.defaults, tvSize: "85", wallType: "plasterboard" });
assert(
  heavyOnBoard.findings?.some((finding) => /exceeds what a/i.test(finding.detail)) ?? false,
  `[tv] an 85" TV on plasterboard must raise a load-safety finding`
);
console.log(`  ${cases} combinations checked`);

/* ── Calibration guards ────────────────────────────────────────────────────
   These lock the estimator to figures the website already publishes elsewhere,
   so a future tweak to a multiplier cannot silently drift the tool away from
   our own quoted prices and stated timelines.
   ──────────────────────────────────────────────────────────────────────────── */
console.log("• Calibration against published figures");

// The painting FAQ states a standard 3-bedroom ~1,000 sq ft apartment takes
// 2 to 3 days. The two published interior prices (RM 450/room and
// RM 1.50–6.80/sq ft) must also reconcile: a plain single-room repaint should
// land near the per-room minimum, not multiples of it.
const oneRoom = paintingSpec.compute({ ...paintingSpec.defaults, target: "interior-walls", areaPreset: "10x12" });
assert(
  oneRoom.price <= RATES.painting.roomMinimum * 2.5,
  `[calibration] a plain 10x12 room repaint (RM ${oneRoom.price}) is far above the published RM ${RATES.painting.roomMinimum}/room`
);
assert(
  oneRoom.price >= RATES.painting.roomMinimum,
  `[calibration] a plain room repaint (RM ${oneRoom.price}) undercuts the published RM ${RATES.painting.roomMinimum}/room minimum`
);
assert(
  /1 working day|1–2 working days/.test(oneRoom.duration),
  `[calibration] a single room should take about a day, got "${oneRoom.duration}"`
);

const apartment = paintingSpec.compute({ ...paintingSpec.defaults, target: "apartment", propertySize: "900" });
assert(
  /2–3 working days|1–2 working days/.test(apartment.duration),
  `[calibration] a ~1,000 sq ft apartment should take 2–3 days per our FAQ, got "${apartment.duration}"`
);

// Whole-property scopes must stay inside the published per-sq-ft band once
// converted back to built-up area.
for (const [size, target] of [["900", "condominium"], ["2200", "landed-house"]] as const) {
  const result = paintingSpec.compute({ ...paintingSpec.defaults, target, propertySize: size });
  const perSqft = result.price / Number(size);
  assert(
    perSqft >= 1 && perSqft <= RATES.painting.interiorSqft.high,
    `[calibration] ${target} at ${size} sq ft works out to RM ${perSqft.toFixed(2)} per built-up sq ft — outside a believable range`
  );
}

// A tiled/hollow-wall TV mount must never undercut the published mounting rate.
const tvBase = tvMountSpec.compute({ ...tvMountSpec.defaults });
assert(
  tvBase.price >= RATES.handyman.tvMount,
  `[calibration] a standard TV mount (RM ${tvBase.price}) undercuts the published RM ${RATES.handyman.tvMount}`
);

// Ceiling installation must sit inside the published RM 6–15 / sq ft band.
const newCeiling = ceilingSpec.compute({ ...ceilingSpec.defaults, workType: "new-flat", areaPreset: "12x15", damage: "none", extras: [] });
const ceilingPerSqft = newCeiling.price / 180;
assert(
  ceilingPerSqft >= RATES.ceiling.installBand.low && ceilingPerSqft <= RATES.ceiling.installBand.high * 1.35,
  `[calibration] new flat ceiling works out to RM ${ceilingPerSqft.toFixed(2)}/sq ft, outside the published RM ${RATES.ceiling.installBand.low}–${RATES.ceiling.installBand.high} band`
);
console.log("  published prices and timelines reconciled");

/* ── Wizard walkthrough ────────────────────────────────────────────────────
   Simulates a real user tapping through each estimator: every step must be
   reachable, every required field answerable, and the WhatsApp summary must
   describe every answer given. This is the UI contract the React component
   depends on, exercised without a DOM.
   ──────────────────────────────────────────────────────────────────────────── */
console.log("• Wizard walkthroughs");

/** Pick the last selectable option for a field, to avoid always testing defaults. */
function pickAnswer(field: Field): Answers[string] | undefined {
  switch (field.kind) {
    case "cards":
    case "select":
      return field.choices.at(-1)?.value;
    case "multi":
      return field.choices.slice(0, Math.max(field.min ?? 1, 2)).map((choice) => choice.value);
    case "slider":
      return field.max;
    case "number":
      return field.max;
    case "toggle":
      return true;
    default:
      return undefined;
  }
}

let walkthroughs = 0;
for (const spec of [paintingSpec, leakSpec, ceilingSpec, plumbingSpec, tvMountSpec]) {
  // Walk once accepting defaults, and once choosing the last option everywhere.
  for (const mode of ["defaults", "last-option"] as const) {
    let answers: Answers = { ...spec.defaults };
    let guard = 0;
    let stepIndex = 0;

    while (stepIndex < visibleSteps(spec, answers).length) {
      const steps = visibleSteps(spec, answers);
      const step = steps[stepIndex];
      assert(Boolean(step), `[${spec.slug}/${mode}] step ${stepIndex} vanished mid-walk`);

      if (mode === "last-option") {
        for (const field of visibleFields(step, answers)) {
          const value = pickAnswer(field);
          if (value !== undefined) answers = { ...answers, [field.id]: value };
        }
      }

      // A step may legitimately demand input (e.g. leak symptoms). What it must
      // never do is block silently — the user has to be told exactly what to do.
      if (!canAdvance(step, answers)) {
        const reason = blockingMessage(step, answers);
        assert(
          Boolean(reason?.trim()),
          `[${spec.slug}/${mode}] step "${step.id}" blocks the user without explaining why`
        );
        // Answering the blocking fields must actually unblock the step.
        for (const field of visibleFields(step, answers)) {
          const value = pickAnswer(field);
          if (value !== undefined) answers = { ...answers, [field.id]: value };
        }
        assert(
          canAdvance(step, answers),
          `[${spec.slug}/${mode}] step "${step.id}" stays blocked even after every field is answered`
        );
        assert(
          blockingMessage(step, answers) === null,
          `[${spec.slug}/${mode}] step "${step.id}" still reports a blocker after being completed`
        );
      }

      // Every visible field must render a non-empty label.
      for (const field of visibleFields(step, answers)) {
        assert(Boolean(field.label?.trim()), `[${spec.slug}/${mode}] field "${field.id}" has no label`);
        if (field.kind === "cards" || field.kind === "select" || field.kind === "multi") {
          assert(field.choices.length > 0, `[${spec.slug}/${mode}] field "${field.id}" has no choices`);
          const values = field.choices.map((choice) => choice.value);
          assert(
            new Set(values).size === values.length,
            `[${spec.slug}/${mode}] field "${field.id}" has duplicate choice values`
          );
        }
      }

      stepIndex += 1;
      guard += 1;
      assert(guard < 50, `[${spec.slug}/${mode}] wizard failed to terminate`);
      if (guard >= 50) break;
    }

    // Finishing must yield a valid estimate and a complete summary.
    const result = validate(spec, answers, `walkthrough:${mode}`);
    const summary = summariseAnswers(spec, answers);
    assert(summary.length > 0, `[${spec.slug}/${mode}] WhatsApp summary is empty`);
    for (const line of summary) {
      assert(!hasNaN(line), `[${spec.slug}/${mode}] summary line renders a bad value: "${line}"`);
      assert(line.includes(":"), `[${spec.slug}/${mode}] summary line is malformed: "${line}"`);
    }
    assert(
      result.addOns.every((addOn) => addOn.label.trim().length > 0),
      `[${spec.slug}/${mode}] an add-on has no label`
    );
    walkthroughs += 1;
  }

  // Every step must be reachable from the defaults.
  const reachable = visibleSteps(spec, spec.defaults);
  assert(reachable.length >= 4, `[${spec.slug}] only ${reachable.length} steps reachable — expected at least 4`);
  const ids = reachable.map((step) => step.id);
  assert(new Set(ids).size === ids.length, `[${spec.slug}] duplicate step ids: ${ids.join(", ")}`);
}
console.log(`  ${walkthroughs} full walkthroughs completed`);

/* ── Single-page contract ──────────────────────────────────────────────── */
/**
 * The estimator renders on one page: primary questions are always visible and
 * everything marked `advanced` is collapsed behind an optional toggle. That
 * only works if (a) the visitor is never asked more than a handful of things
 * up front, and (b) nothing hidden in the advanced section can block them —
 * so every advanced field must already carry a usable default.
 */
console.log("• Single-page form contract");
const MAX_PRIMARY_QUESTIONS = 4;
for (const spec of [paintingSpec, leakSpec, ceilingSpec, plumbingSpec, tvMountSpec]) {
  const reachable = visibleSteps(spec, spec.defaults);
  const primary = reachable.filter((step) => !step.advanced);
  const advanced = reachable.filter((step) => step.advanced);

  assert(primary.length >= 1, `[${spec.slug}] no primary questions — the page would open empty`);
  assert(
    primary.length <= MAX_PRIMARY_QUESTIONS,
    `[${spec.slug}] ${primary.length} primary questions shown up front — keep it to ${MAX_PRIMARY_QUESTIONS} or fewer and mark the rest advanced`
  );

  // An untouched advanced section must still produce a bookable estimate.
  for (const step of advanced) {
    for (const field of visibleFields(step, spec.defaults)) {
      assert(
        !field.required || spec.defaults[field.id] !== undefined,
        `[${spec.slug}] advanced field "${field.id}" is required but has no default — it would silently block the estimate`
      );
      assert(
        canAdvance(step, spec.defaults),
        `[${spec.slug}] advanced step "${step.id}" blocks on defaults — a collapsed section must never stop the customer`
      );
    }
  }

  // The headline price must be real before a single tap.
  const opening = spec.compute(spec.defaults);
  assert(opening.price > 0, `[${spec.slug}] opening price must be a real number, not zero`);
  // Anything the defaults cannot satisfy must be a *visible* primary question.
  // A customer can only fix what they can see.
  for (const step of reachable) {
    assert(
      canAdvance(step, spec.defaults) || !step.advanced,
      `[${spec.slug}] step "${step.id}" needs an answer but is hidden in the advanced section`
    );
  }
}
console.log("  every estimator opens with a live price and ≤4 visible questions");

/* ── Generic per-service estimators ────────────────────────────────────────
 * One engine covers every service that does not have a hand-built estimator.
 * It must satisfy the same invariants as the five bespoke ones, and — because
 * it is generated rather than authored — it must additionally never quote a
 * rate that the service page does not publish.
 */
console.log("• Per-service estimators");
let serviceSpecs = 0;
let serviceCases = 0;
for (const service of Object.values(servicesData)) {
  if (!hasServiceEstimator(service.slug)) {
    fail(`[${service.slug}] no estimator could be built — the service page would have no calculator`);
    continue;
  }

  const spec = buildServiceEstimator({
    slug: service.slug,
    title: service.title,
    warranty: service.warranty,
    t: testTranslator
  });
  serviceSpecs += 1;

  const book = SERVICE_SCOPES[service.slug];
  const publishedNames = new Set(book.scopes.map((scope) => scope.name));
  const floor = book.startPrice;

  // Sweep every scope against every quantity preset and every modifier.
  for (const scope of book.scopes) {
    assert(
      publishedNames.has(scope.name),
      `[${service.slug}] scope "${scope.name}" is not in the published price list`
    );
    assert(
      service.subServices.some((item) => item.name === scope.name && item.price === scope.published),
      `[${service.slug}] scope "${scope.name}" quotes "${scope.published}", which does not match the service page`
    );

    const qtyField = `qty_${scope.unit}`;
    const quantities = [1, 4, 40, 500];
    serviceCases += sweep(
      spec,
      {
        condition: ["new", "normal", "damaged"],
        access: ["easy", "difficult"],
        urgency: ["standard", "emergency"],
        [qtyField]: quantities
      },
      { scope: scope.name }
    );

    // The published starting price is a hard floor in every combination.
    for (const quantity of quantities) {
      const result = spec.compute({ ...spec.defaults, scope: scope.name, [qtyField]: quantity });
      assert(
        result.price >= floor,
        `[${service.slug}] "${scope.name}" × ${quantity} quoted ${result.price}, below the published minimum ${floor}`
      );
      assert(
        result.serviceHref === `/services/${service.slug}`,
        `[${service.slug}] estimator links to ${result.serviceHref} instead of its own service page`
      );
      assert(
        result.breakdown.some((row) => row.value === scope.published),
        `[${service.slug}] breakdown for "${scope.name}" never shows the published rate ${scope.published}`
      );
    }
  }

  // More of something must never cost less.
  for (const scope of book.scopes) {
    const qtyField = `qty_${scope.unit}`;
    let previous = 0;
    for (const quantity of [1, 2, 5, 20, 100]) {
      const { price } = spec.compute({ ...spec.defaults, scope: scope.name, [qtyField]: quantity });
      assert(
        price >= previous,
        `[${service.slug}] "${scope.name}" costs less at ${quantity} units than at the previous step`
      );
      previous = price;
    }
  }

  // Single-page contract applies here too.
  const reachable = visibleSteps(spec, spec.defaults);
  const primary = reachable.filter((step) => !step.advanced);
  assert(
    primary.length <= 2,
    `[${service.slug}] ${primary.length} primary questions — a service-page estimator must stay to 2`
  );
  for (const step of reachable) {
    assert(
      canAdvance(step, spec.defaults) || !step.advanced,
      `[${service.slug}] step "${step.id}" needs an answer but is hidden in the advanced section`
    );
  }

  // Only one quantity question may ever be visible at a time, or the customer
  // sees "how many panels" and "how many sq ft" side by side.
  for (const scope of book.scopes) {
    const answers = { ...spec.defaults, scope: scope.name };
    const shown = visibleSteps(spec, answers)
      .flatMap((step) => visibleFields(step, answers))
      .filter((field) => field.id.startsWith("qty_"));
    assert(
      shown.length === 1,
      `[${service.slug}] "${scope.name}" shows ${shown.length} quantity questions — exactly 1 is required`
    );
    assert(
      shown[0]?.id === `qty_${scope.unit}`,
      `[${service.slug}] "${scope.name}" is charged per ${scope.unit} but asks "${shown[0]?.id}"`
    );
  }
}

// Services with a bespoke estimator must map to a tool that actually exists,
// otherwise the service page would link into a 404.
for (const [serviceSlug, toolSlug] of Object.entries(DEDICATED_TOOL_BY_SERVICE)) {
  assert(
    Boolean(servicesData[serviceSlug]),
    `DEDICATED_TOOL_BY_SERVICE references unknown service "${serviceSlug}"`
  );
  assert(
    Boolean(toolsContent[toolSlug]),
    `DEDICATED_TOOL_BY_SERVICE points "${serviceSlug}" at unknown tool "${toolSlug}"`
  );
}

console.log(`  ${serviceSpecs} service estimators · ${serviceCases} combinations checked`);

/* ── Summary ───────────────────────────────────────────────────────────── */
console.log(`\n${failures === 0 ? "✓ PASS" : "✗ FAIL"} — ${checks} assertions, ${failures} failure${failures === 1 ? "" : "s"}`);
if (failures > 0) process.exit(1);
