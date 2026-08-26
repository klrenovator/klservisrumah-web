/**
 * Specialty coverage gate — 100% native MS/ZH coverage of all subservices.
 *
 * `validate-specialty-locale.ts` gates the *quality* of each authored block;
 * this companion gates *coverage*: every subService in `services-data` must
 * have a matching `specialtyLocaleContent` entry (keyed `<service>/<slug>`),
 * and no specialty key may exist without a matching subService (orphan key —
 * dead data, and historically a symptom of a renamed subservice whose
 * hardcoded links then 404, e.g. the house-renovation/condo-renovation case).
 *
 * Run via `npm run prebuild` (after audit:specialty-locale).
 */
import { servicesData } from "@/config/services-data";
import { specialtyLocaleContent } from "@/config/specialty-locale-content";
import { slugify } from "@/lib/utils";

const issues: string[] = [];
const validKeys = new Set<string>();

for (const [slug, service] of Object.entries(servicesData)) {
  for (const sub of service.subServices) {
    const key = `${slug}/${slugify(sub.name)}`;
    validKeys.add(key);
    if (!specialtyLocaleContent[key]) {
      issues.push(`missing specialty-locale entry: ${key} (subservice "${sub.name}" has no native MS/ZH page)`);
    }
  }
}

for (const key of Object.keys(specialtyLocaleContent)) {
  if (!validKeys.has(key)) issues.push(`orphan specialty-locale key: ${key} (no matching subService — dead data or renamed subservice)`);
}

if (issues.length > 0) {
  console.error(`\nSpecialty coverage validation FAILED with ${issues.length} issue(s):\n`);
  for (const issue of issues) console.error(`  - ${issue}`);
  process.exit(1);
}

console.log(
  `Specialty coverage OK: all ${validKeys.size} subservices across ${Object.keys(servicesData).length} services have ` +
    `native MS/ZH specialty pages; 0 orphan keys (${Object.keys(specialtyLocaleContent).length} authored entries).`,
);
