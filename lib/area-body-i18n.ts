import type { Locale } from "@/lib/i18n";
import { getLocalizedAreaBody } from "@/config/area-body-i18n";

/**
 * Returns the fully localised long-form description for an area page.
 * Falls back to the original English description (passed in) when:
 * - locale is "en"
 * - no translation exists for the slug
 */
export function localizeAreaDescription(
  slug: string,
  locale: Locale,
  englishDescription: string
): string {
  if (locale === "en") return englishDescription;

  const localised = getLocalizedAreaBody(slug, locale);
  return localised?.description ?? englishDescription;
}