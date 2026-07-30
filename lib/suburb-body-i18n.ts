import type { Locale } from "@/lib/i18n";
import { getLocalizedSuburbBody } from "@/config/suburb-body-i18n";

/**
 * Returns the fully localised long-form content for a suburb page.
 * Falls back to the original English content (passed in) when:
 * - locale is "en"
 * - no translation exists for the slug
 */
export function localizeSuburbBody(
  slug: string,
  locale: Locale,
  englishHousingProfile: string,
  englishCommonIssues: string[]
): {
  housingProfile: string;
  commonIssues: string[];
  localFaq?: { q: string; a: string };
} {
  if (locale === "en") {
    return {
      housingProfile: englishHousingProfile,
      commonIssues: englishCommonIssues
    };
  }

  const localised = getLocalizedSuburbBody(slug, locale);

  if (!localised) {
    return {
      housingProfile: englishHousingProfile,
      commonIssues: englishCommonIssues
    };
  }

  return {
    housingProfile: localised.housingProfile,
    commonIssues: localised.commonIssues,
    localFaq: localised.localFaq
  };
}