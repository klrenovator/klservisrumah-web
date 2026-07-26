/**
 * Deep-tool spec snapshotter.
 *
 * Dumps every user-visible string a spec can produce — step/field/choice copy
 * (slider formats evaluated at sample points) plus compute() results over the
 * exact Cartesian axes the test harness sweeps — so a refactor (e.g. the
 * trilingual dictionary extraction) can be proven behaviour-preserving by
 * diffing the before/after output. Not wired into package.json; run manually:
 *
 *   node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --experimental-strip-types \
 *     --import ./scripts/ts-resolver.mjs scripts/snapshot-specs.ts <outDir>
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { paintingSpec, PAINT_TARGETS } from "../lib/estimator/painting.ts";
import { leakSpec, LEAK_LOCATIONS } from "../lib/estimator/leak.ts";
import { ceilingSpec, CEILING_TYPES } from "../lib/estimator/ceiling.ts";
import { plumbingSpec, PLUMBING_PROBLEMS } from "../lib/estimator/plumbing.ts";
import { tvMountSpec } from "../lib/estimator/tv-mount.ts";
import type { Answers, EstimatorSpec, Field } from "../lib/estimator/types.ts";

const outDir = process.argv[2] ?? "/home/user/spec-snaps";
mkdirSync(outDir, { recursive: true });

function serializeField(field: Field): Record<string, unknown> {
  const base: Record<string, unknown> = { ...field };
  delete base.visible;
  if (field.kind === "slider" && field.format) {
    const samples = [field.min, Math.round((field.min + field.max) / 2), field.max, 1, 2, 5, 10, 25, 40]
      .filter((v, i, arr) => v >= field.min && v <= field.max && arr.indexOf(v) === i);
    base.formatSamples = samples.map((v) => `${v}=${field.format!(v)}`);
  }
  return base;
}

function serializeSpec(spec: EstimatorSpec) {
  return {
    slug: spec.slug,
    name: spec.name,
    serviceSlug: spec.serviceSlug,
    resultLabel: spec.resultLabel,
    defaults: spec.defaults,
    steps: spec.steps.map((step) => ({
      id: step.id,
      title: step.title,
      subtitle: step.subtitle,
      icon: step.icon,
      advanced: step.advanced ?? false,
      fields: step.fields.map(serializeField)
    }))
  };
}

function enumerate(spec: EstimatorSpec, axes: Record<string, unknown[]>, base: Answers = {}): Answers[] {
  const combos: Answers[] = [{ ...spec.defaults, ...base }];
  for (const key of Object.keys(axes)) {
    const next: Answers[] = [];
    for (const combo of combos) {
      for (const value of axes[key]) next.push({ ...combo, [key]: value as Answers[string] });
    }
    combos.length = 0;
    combos.push(...next);
  }
  return combos;
}

function dump(spec: EstimatorSpec, axesSets: Record<string, unknown[]>[]) {
  const specJson = serializeSpec(spec);
  writeFileSync(join(outDir, `${spec.slug}.json`), JSON.stringify(specJson, null, 2));
  const lines: string[] = [];
  for (const axes of axesSets) {
    for (const combo of enumerate(spec, axes)) {
      lines.push(JSON.stringify({ answers: combo, result: spec.compute(combo) }));
    }
  }
  writeFileSync(join(outDir, `${spec.slug}-results.jsonl`), lines.join("\n"));
  console.log(`${spec.slug}: ${specJson.steps.length} steps, ${lines.length} result combos`);
}

dump(paintingSpec, [
  {
    target: PAINT_TARGETS.map((row) => row.value),
    condition: ["excellent", "heavy-cracks", "water-damage", "rusty-metal"],
    grade: ["economy", "luxury"],
    access: ["easy", "rope-access"],
    urgency: ["standard", "emergency"],
    paintSupply: ["include", "customer"]
  },
  {
    areaPreset: ["8x8", "10x12", "20x20", "custom"],
    colour: ["same", "dark", "multiple"],
    extraPrep: [[], ["skim-coat"], ["skim-coat", "waterproofing", "crack-repair", "mould-treatment", "wallpaper-removal", "furniture-shift"]],
    customHeight: [8, 20]
  },
  {
    target: ["apartment", "landed-exterior", "factory", "warehouse", "office"],
    propertySize: ["600", "1200", "8000"],
    features: [[], ["low-voc", "odourless", "washable", "anti-mould", "weather-resistant", "premium-exterior", "heat-reflective", "anti-rust"]]
  },
  {
    target: ["doors", "windows", "main-gate", "kitchen-cabinets", "stair-railing"],
    itemCount: [1, 40]
  }
]);

dump(leakSpec, [
  {
    location: LEAK_LOCATIONS.map((row) => row.value),
    severity: ["slow", "severe"],
    symptoms: [["wet-wall"], ["burst-pipe", "dripping", "meter-spinning"], ["mould", "brown-stain", "ceiling-bubble", "cracks", "peeling-paint"]],
    affected: ["spot", "multiple"]
  },
  {
    duration: ["today", "year"],
    propertyType: ["condo", "terrace", "semi-d", "shop"],
    propertyAge: ["new", "old"]
  }
]);

dump(ceilingSpec, [
  {
    ceilingType: CEILING_TYPES.map((row) => row.value),
    workType: ["repair", "replace-section", "new-flat", "new-tiered", "new-cove", "partition"],
    damage: ["none", "collapsed"],
    height: ["standard", "void"]
  },
  {
    areaPreset: ["small-patch", "10x12", "20x25", "custom"],
    extras: [[], ["water-damage", "paint", "lighting-removal", "fan-removal", "cornice", "insulation", "debris"]],
    lightCount: [1, 30],
    urgency: ["standard", "emergency"]
  }
]);

dump(plumbingSpec, [
  {
    problem: PLUMBING_PROBLEMS.map((row) => row.value),
    severity: ["minor", "emergency"],
    timing: ["standard", "emergency"],
    partsSupply: ["include", "customer"]
  },
  {
    location: ["kitchen", "bathroom-main", "bathroom-ensuite", "laundry", "outdoor", "roof-tank", "multiple"],
    houseType: ["condo", "terrace", "semi-d", "shop", "factory"],
    propertyAge: ["new", "old"],
    quantity: [1, 10]
  }
]);

dump(tvMountSpec, [
  {
    tvSize: ["32", "43", "55", "65", "75", "85", "98"],
    wallType: ["concrete", "brick", "plasterboard", "wood", "cement-board", "glass-tile", "not-sure"],
    bracket: ["fixed", "tilt", "full-motion", "ceiling", "not-sure"],
    bracketSupply: ["customer", "include"]
  },
  {
    extras: [[], ["concealment"], ["concealment", "trunking", "power-point", "soundbar", "shelf", "dismount", "setup"]],
    powerPoint: ["yes", "no"],
    height: ["standard", "high", "very-high"]
  }
]);

console.log(`\nSnapshots written to ${outDir}`);
