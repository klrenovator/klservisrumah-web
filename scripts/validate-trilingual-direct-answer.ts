/**
 * P3-01 gate — trilingual DirectAnswer leak validator (runs in `prebuild`).
 *
 * The DirectAnswer card on every `/services/<slug>` hub renders a BM sub-note
 * and a 中文 sub-note. Part 3 of the deep audit found English tagline/warranty/
 * title fragments interpolated into those sentences on 29/29 service pages.
 * The fix moved note assembly into `lib/direct-answer-trilingual.ts`; this
 * script runs that exact builder over the full service registry so the defect
 * can never come back — a build cannot start while any note leaks.
 *
 * Checks per service (29 services × 3 locale bases × 2 notes):
 *   1. every service carries `i18n.ms` + `i18n.zh` title/tagline/warranty —
 *      the notes' only value sources (an absent override falls back to English
 *      and re-creates the leak);
 *   2. the generated notes are locale-base invariant (EN/MS/ZH page renders
 *      must emit byte-identical BM/中文 notes);
 *   3. zero leak signatures (lib/trilingual-leak L1 containment, L2 English
 *      unit tokens, L3 English function-word density) inside either note;
 *   4. structural sanity: BM note keeps the "disyorkan apabila anda memerlukan"
 *      anchor and carries no CJK; ZH note keeps "适合需要…的客户" and carries
 *      CJK; quote-only services never print "On Quote" inside the notes.
 *
 * Usage: node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON \
 *          --experimental-strip-types --import ./scripts/ts-resolver.mjs \
 *          scripts/validate-trilingual-direct-answer.ts
 */

import { servicesData } from "@/config/services-data";
import { buildServiceTrilingualNotes, quoteOnlyFromProp } from "@/lib/direct-answer-trilingual";
import { trilingualLeakSignatures } from "@/lib/trilingual-leak";
import { getLocalizedService } from "@/lib/service-i18n";
import type { Locale } from "@/lib/i18n";

const REQUIRED: Array<"title" | "tagline" | "warranty"> = ["title", "tagline", "warranty"];
const BASES: Array<"en" | "ms" | "zh"> = ["en", "ms", "zh"];

type Failure = { slug: string; check: string; detail: string };

const failures: Failure[] = [];
let notesChecked = 0;

const containsCjk = (s: string) => /[\u3400-\u9FFF\u3040-\u30FF]/.test(s);

for (const [slug, service] of Object.entries(servicesData)) {
  // 1 — structural precondition: all six localized values must exist.
  for (const loc of ["ms", "zh"] as const) {
    const override = service.i18n?.[loc];
    for (const f of REQUIRED) {
      const value = (override?.[f] || "").trim();
      if (!value) {
        failures.push({
          slug,
          check: `i18n.${loc}.${f} present`,
          detail: `missing — the ${loc.toUpperCase()} DirectAnswer note would fall back to the English ${f} (P3-01 regression)`
        });
      }
    }
  }

  // 2 — the note must not depend on which locale the page renders in.
  let baseline: { ms: string; zh: string } | null = null;
  for (const base of BASES) {
    const localized = getLocalizedService(service, base as Locale);
    const notes = buildServiceTrilingualNotes(localized);
    if (!baseline) baseline = notes;
    else if (notes.ms !== baseline.ms || notes.zh !== baseline.zh) {
      failures.push({
        slug,
        check: "base invariance",
        detail: `notes rendered for "${base}" base differ from "${BASES[0]}" base — a localized field is leaking into a cross-locale note (or vice versa)`
      });
    }
  }
  if (!baseline) continue;

  // 3 + 4 — leak scan and structural anchors on both notes.
  const en = { title: service.title, tagline: service.tagline, warranty: service.warranty };
  for (const loc of ["ms", "zh"] as const) {
    const note = loc === "ms" ? baseline.ms : baseline.zh;
    notesChecked += 1;

    const sigs = trilingualLeakSignatures(note, en);
    for (const s of sigs) {
      failures.push({ slug, check: `no ${loc.toUpperCase()} leak`, detail: `${s.rule}: ${s.detail} — "${note.slice(0, 160)}…"` });
    }

    if (loc === "ms") {
      if (!note.includes("disyorkan apabila anda memerlukan")) {
        failures.push({ slug, check: "BM anchor intact", detail: "template anchor 'disyorkan apabila anda memerlukan' missing — update scripts/part3-aeo-audit.ts if this is an intended template change" });
      }
      if (containsCjk(note)) {
        failures.push({ slug, check: "BM script purity", detail: "CJK text inside the BM note" });
      }
    } else {
      if (!note.includes("适合需要") || !note.includes("的客户")) {
        failures.push({ slug, check: "ZH anchor intact", detail: "template anchors '适合需要…的客户' missing — update scripts/part3-aeo-audit.ts if this is an intended template change" });
      }
      if (note.replace(/[^\u3400-\u9FFF]/g, "").length < 6) {
        failures.push({ slug, check: "ZH script purity", detail: "fewer than 6 CJK characters — note is not Chinese" });
      }
    }
  }

  if (quoteOnlyFromProp(service)) {
    if (/on quote/i.test(baseline.ms) || /on quote/i.test(baseline.zh)) {
      failures.push({ slug, check: "quote-only wording", detail: `"On Quote" printed inside a BM/中文 note for a quote-only service` });
    }
  } else if (!/RM\s*\d/.test(baseline.ms) || !/RM\s*\d/.test(baseline.zh)) {
    failures.push({ slug, check: "price carried through", detail: "priced service but the note lost its RM amount" });
  }
}

if (failures.length > 0) {
  console.error(`✗ Trilingual DirectAnswer leak check FAILED — ${failures.length} problem(s) across ${Object.keys(servicesData).length} services:\n`);
  for (const f of failures) console.error(`  • [${f.slug}] ${f.check}: ${f.detail}`);
  console.error(
    "\nFix: interpolate the per-locale i18n fields in lib/direct-answer-trilingual.ts templates —\n" +
      "BM notes read service.i18n.ms.{title,tagline,warranty}, 中文 notes read service.i18n.zh.*.\n" +
      "See docs/full-website-deep-audit/PART-3-AUDIT-REPORT.md §P3-01."
  );
  process.exit(1);
}

console.log(
  `✓ Trilingual DirectAnswer notes clean — ${Object.keys(servicesData).length} services × ${BASES.length} locale bases, ` +
    `${notesChecked} unique notes, 0 English leaks (L1 containment / L2 units / L3 function words), anchors intact.`
);
