/**
 * Service i18n parity gate — localized service hubs must never hide subservices.
 *
 * `getLocalizedService()` replaces the EN `subServices` array *wholesale* when
 * a locale override array exists (`override.subServices?.length` check). If a
 * session adds an EN subservice but does not extend the MS/ZH arrays, the
 * localized service hub silently drops the new subservices — exactly the
 * plaster-ceiling defect found in Session 12, where `/ms/services/plaster-ceiling`
 * and `/zh/services/plaster-ceiling` listed only 4 of 11 subservices.
 *
 * This gate fails the build whenever a locale override's subServices array
 * exists but does not match the EN array length, or carries empty
 * name/price/desc entries. (A missing override array is fine — the helper
 * then falls back to the full EN list.)
 *
 * Run via `npm run prebuild` (after audit:specialty-coverage).
 */
import { servicesData } from "@/config/services-data";

type Locale = "ms" | "zh";

const issues: string[] = [];

for (const [slug, service] of Object.entries(servicesData)) {
  const enCount = service.subServices.length;

  for (const locale of ["ms", "zh"] as Locale[]) {
    const override = service.i18n?.[locale];
    // No override at all → getLocalizedService falls back to the EN list. OK.
    if (!override?.subServices || override.subServices.length === 0) continue;

    if (override.subServices.length !== enCount) {
      issues.push(
        `[${slug}] i18n.${locale}.subServices has ${override.subServices.length} entries but EN has ${enCount} — ` +
          `${enCount - override.subServices.length} subservice(s) are invisible on /${locale}/services/${slug}. ` +
          `Extend the ${locale.toUpperCase()} array to match EN.`,
      );
    }

    override.subServices.forEach((sub, i) => {
      for (const field of ["name", "price", "desc"] as const) {
        const value = sub[field];
        if (typeof value !== "string" || value.trim().length === 0) {
          issues.push(`[${slug}] i18n.${locale}.subServices[${i}].${field} is empty — every localized subservice needs name, price and desc.`);
        }
      }
    });
  }
}

if (issues.length > 0) {
  console.error(`\nService i18n parity validation FAILED with ${issues.length} issue(s):\n`);
  for (const issue of issues) console.error(`  - ${issue}`);
  process.exit(1);
}

const services = Object.keys(servicesData).length;
const localizedHubs = Object.values(servicesData).filter((s) => s.i18n?.ms?.subServices?.length && s.i18n?.zh?.subServices?.length).length;
console.log(
  `Service i18n parity OK: ${services} services checked — ${localizedHubs} localized hubs carry full MS+ZH subServices arrays ` +
    `matching the EN count, no empty name/price/desc entries.`,
);
