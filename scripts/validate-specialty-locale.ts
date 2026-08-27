import { specialtyLocaleContent } from "@/config/specialty-locale-content";
import type { SpecialtyLocaleBlock } from "@/config/specialty-locale-content";

/**
 * Non-thin content gate for the localized specialty store.
 *
 * Every authored MS/ZH specialty block must clear a minimum substantive bar so
 * localized specialty pages never ship as spun or near-empty templates. This
 * is wired into `prebuild` (alongside `audit:topical-map`) so a thin block
 * fails the build instead of reaching production.
 */

type Issue = { key: string; locale: string; field: string; message: string };

// Character thresholds are lower for `zh` because Chinese is information-denser
// per character than Latin script; a 20-char Chinese sentence carries as much
// meaning as a 60-char English one. Using the same character minimums for both
// would falsely flag genuine CJK content as thin.
const MIN: Record<"ms" | "zh", Record<string, number>> = {
  ms: {
    name: 2,
    tagline: 40,
    description: 180,
    highlightLen: 20,
    highlights: 3,
    processSteps: 4,
    processTitleLen: 3,
    processDescLen: 20,
    faqs: 4,
    faqQuestionLen: 10,
    faqAnswerLen: 40,
    metaTitle: 20,
    metaDesc: 60,
  },
  zh: {
    name: 2,
    tagline: 20,
    description: 100,
    highlightLen: 6,
    highlights: 3,
    processSteps: 4,
    processTitleLen: 2,
    processDescLen: 10,
    faqs: 4,
    faqQuestionLen: 6,
    faqAnswerLen: 20,
    metaTitle: 14,
    metaDesc: 40,
  },
};

const PRIORITY_KEYS = [
  "painting/interior-house-painting",
  "painting/exterior-house-painting",
  "painting/commercial-and-office-painting",
  "painting/wall-crack-and-moisture-repair",
  "ceiling/water-damaged-ceiling-repair",
  "ceiling/plaster-ceiling-installation",
  "ceiling/gypsum-board-partition-wall",
  "ceiling/cornice-and-l-box-concealed-light-trough",
  "plaster-ceiling/flat-plaster-ceiling",
  "plaster-ceiling/tiered-and-l-box-ceiling",
  "plaster-ceiling/cove-and-curved-ceiling",
  "plaster-ceiling/ceiling-repair-and-re-skim",
  "waterproofing/pu-high-pressure-injection-grouting",
  "waterproofing/bathroom-and-wet-area-waterproofing",
  "waterproofing/roof-and-concrete-slab-waterproofing",
  "waterproofing/wall-dampness-and-efflorescence-repair",
  "plumbing/water-leakage-diagnosis-and-repair",
  "plumbing/toilet-tap-and-sink-installation",
  "plumbing/drain-unclogging-and-cleaning",
  "plumbing/water-heater-and-pump-installation",
  "electrical/new-power-point-and-switch-installation",
  "electrical/db-box-upgrade-and-rewiring",
  "electrical/lighting-point-and-downlight-installation",
  "electrical/aircond-water-heater-and-oven-point",
  "handyman/heavy-tv-wall-mounting",
  "handyman/door-hinge-and-lockset-repair",
  "handyman/furniture-assembly-ikea-taobao",
  "handyman/curtains-blinds-and-shelves-hanging",
  "tiling/floor-tiling-installation",
  "tiling/wall-tiling-installation",
  "tiling/large-format-slab-tiling",
  "tiling/tile-repair-and-re-grouting",
  "flooring/spc-click-lock-flooring-install",
  "flooring/laminate-flooring-install",
  "flooring/luxury-vinyl-plank-lvp-install",
  "flooring/skirting-and-transition-strip-fitting",
  "kitchen-cabinet/modular-kitchen-cabinet-10ft-l-shape",
  "kitchen-cabinet/custom-plywood-kitchen",
  "kitchen-cabinet/quartz-granite-countertop",
  "kitchen-cabinet/kitchen-makeover-doors-and-hardware-only",
  "carpentry/built-in-wardrobe",
  "carpentry/tv-console-and-feature-wall",
  "carpentry/study-desk-and-home-office",
  "carpentry/shoe-cabinet-and-entry-storage",
  "epoxy-flooring/self-levelling-epoxy-floor",
  "epoxy-flooring/flake-quartz-broadcast-epoxy",
  "epoxy-flooring/heavy-duty-mortar-screed",
  "epoxy-flooring/epoxy-floor-repair-and-recoating",
  "cctv/condo-wi-fi-cctv-package-4-cameras",
  "cctv/landed-house-poe-cctv-8-cameras",
  "cctv/single-camera-add-on",
  "cctv/cctv-system-health-check-and-relocation",
  "window-repair/glass-replacement",
  "window-repair/window-seal-replacement",
  "window-repair/window-handle-and-hinge-repair",
  "window-repair/sliding-window-roller-replacement",
  "glass-aluminium/frameless-shower-screen",
  "glass-aluminium/aluminium-sliding-window",
  "glass-aluminium/glass-office-partition",
  "glass-aluminium/wall-mirror-installation",
  "door/solid-timber-door-installation",
  "door/laminate-door-installation",
  "door/door-planing-and-adjustment",
  "door/fire-rated-door-installation",
  "roof-repair/roof-leak-diagnosis-and-repair",
  "roof-repair/ridge-re-bedding-and-re-pointing",
  "roof-repair/gutter-cleaning-and-realignment",
  "roof-repair/full-torch-on-membrane-waterproofing",
  "ceiling-fan/new-ceiling-fan-installation",
  "ceiling-fan/ceiling-fan-replacement",
  "ceiling-fan/dc-motor-smart-fan-install",
  "ceiling-fan/industrial-shoplot-fan-install",
  "lighting/led-downlight-installation",
  "lighting/pendant-and-chandelier-install",
  "lighting/cove-and-strip-led-installation",
  "lighting/smart-lighting-and-dimmer-retrofit",
  "skim-coat/wall-skim-coating",
  "skim-coat/ceiling-skim-coating",
  "skim-coat/crack-and-joint-repair",
  "skim-coat/full-condo-re-skim-package",
  "locksmith/smart-lock-installation",
  "locksmith/mortice-deadbolt-lock-replacement",
  "locksmith/key-cutting-and-re-keying",
  "locksmith/emergency-lockout-landed-house",
  "autogate/single-swing-autogate",
  "autogate/double-swing-autogate",
  "autogate/sliding-autogate",
  "autogate/autogate-motor-replacement-and-service",
  "welding/custom-window-grille",
  "welding/main-gate-fabrication",
  "welding/on-site-welding-repair",
  "welding/staircase-stringer-fabrication",
  "water-heater/instant-water-heater-installation",
  "water-heater/storage-tank-heater-installation",
  "water-heater/water-heater-repair-and-descaling",
  "water-heater/heat-pump-water-heater-install",
  "house-renovation/full-house-renovation-package",
  "house-renovation/kitchen-and-bathroom-makeover",
  "house-renovation/condo-interior-refurbishment",
  "house-renovation/commercial-shoplot-renovation",
];

function checkBlock(key: string, locale: "ms" | "zh", b: SpecialtyLocaleBlock, issues: Issue[]) {
  const min = MIN[locale];
  const push = (field: string, message: string) => issues.push({ key, locale, field, message });

  if (!b.name || b.name.length < min.name) push("name", `name too short (${b.name?.length ?? 0} < ${min.name})`);
  if (!b.tagline || b.tagline.length < min.tagline) push("tagline", `tagline too short (${b.tagline?.length ?? 0} < ${min.tagline})`);
  if (!b.description || b.description.length < min.description)
    push("description", `description too short (${b.description?.length ?? 0} < ${min.description})`);
  if (!b.metaTitle || b.metaTitle.length < min.metaTitle) push("metaTitle", `metaTitle too short (${b.metaTitle?.length ?? 0})`);
  if (!b.metaDesc || b.metaDesc.length < min.metaDesc) push("metaDesc", `metaDesc too short (${b.metaDesc?.length ?? 0})`);

  if (!Array.isArray(b.highlights) || b.highlights.length < min.highlights)
    push("highlights", `expected >= ${min.highlights} highlights, got ${b.highlights?.length ?? 0}`);
  else
    b.highlights.forEach((h, i) => {
      if (!h || h.length < min.highlightLen) push(`highlights[${i}]`, `highlight too short (${h?.length ?? 0} chars)`);
    });

  if (!Array.isArray(b.process) || b.process.length < min.processSteps)
    push("process", `expected >= ${min.processSteps} process steps, got ${b.process?.length ?? 0}`);
  else
    b.process.forEach((p, i) => {
      if (!p.title || p.title.length < min.processTitleLen) push(`process[${i}].title`, "title too short");
      if (!p.desc || p.desc.length < min.processDescLen) push(`process[${i}].desc`, `desc too short (${p.desc?.length ?? 0} chars)`);
    });

  if (!Array.isArray(b.faqs) || b.faqs.length < min.faqs)
    push("faqs", `expected >= ${min.faqs} FAQs, got ${b.faqs?.length ?? 0}`);
  else
    b.faqs.forEach((f, i) => {
      if (!f.q || f.q.length < min.faqQuestionLen) push(`faqs[${i}].q`, `question too short (${f.q?.length ?? 0} chars)`);
      if (!f.a || f.a.length < min.faqAnswerLen) push(`faqs[${i}].a`, `answer too short (${f.a?.length ?? 0} chars)`);
    });
}

const issues: Issue[] = [];

for (const [key, entry] of Object.entries(specialtyLocaleContent)) {
  if (!entry.ms) issues.push({ key, locale: "ms", field: "block", message: "missing ms block" });
  if (!entry.zh) issues.push({ key, locale: "zh", field: "block", message: "missing zh block" });
  if (entry.ms) checkBlock(key, "ms", entry.ms, issues);
  if (entry.zh) checkBlock(key, "zh", entry.zh, issues);

  // Page structures intentionally vary by specialty, but a page's MS and ZH
  // variants must expose the same number of customer-facing list items.
  if (entry.ms && entry.zh) {
    for (const field of ["highlights", "process", "faqs"] as const) {
      if (entry.ms[field].length !== entry.zh[field].length) {
        issues.push({
          key,
          locale: "ms/zh",
          field,
          message: `locale count mismatch (${entry.ms[field].length} MS vs ${entry.zh[field].length} ZH)`,
        });
      }
    }
  }
}

// The priority tranche must always be present and fully native.
for (const key of PRIORITY_KEYS) {
  if (!specialtyLocaleContent[key]) {
    issues.push({ key, locale: "any", field: "presence", message: "priority specialty missing from locale content store" });
  }
}

if (issues.length > 0) {
  console.error(`\nSpecialty locale content validation FAILED with ${issues.length} issue(s):\n`);
  for (const issue of issues) {
    console.error(`  [${issue.key}] (${issue.locale}) ${issue.field}: ${issue.message}`);
  }
  process.exit(1);
}

const blockCount = Object.keys(specialtyLocaleContent).length * 2;
console.log(
  `Specialty locale content OK: ${Object.keys(specialtyLocaleContent).length} specialties × ms/zh ` +
    `(${blockCount} native blocks) above the non-thin threshold with per-page list-count parity.`,
);
