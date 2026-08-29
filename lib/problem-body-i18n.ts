import type { Locale } from "@/lib/i18n";
import { getLocalizedProblemBody } from "@/config/problem-body-i18n";

/**
 * Returns the fully localised long-form content for a problem page.
 * Falls back to the original English content (passed in) when:
 * - locale is "en"
 * - no translation exists for the slug
 */
export function localizeProblemBody(
  slug: string,
  locale: Locale,
  englishSymptom: string,
  englishCauses: string[],
  englishSolutions: string[],
  englishWhenToCall: string[],
  englishDepth?: {
    overview?: string;
    diyChecks?: string[];
    prevention?: string[];
    costDetail?: string;
  }
): {
  symptom: string;
  causes: string[];
  solutions: string[];
  whenToCall: string[];
  localFaq?: { q: string; a: string };
  overview?: string;
  diyChecks?: string[];
  prevention?: string[];
  costDetail?: string;
} {
  if (locale === "en") {
    return {
      symptom: englishSymptom,
      causes: englishCauses,
      solutions: englishSolutions,
      whenToCall: englishWhenToCall,
      ...(englishDepth ?? {})
    };
  }

  const localised = getLocalizedProblemBody(slug, locale);

  if (!localised) {
    return {
      symptom: englishSymptom,
      causes: englishCauses,
      solutions: englishSolutions,
      whenToCall: englishWhenToCall,
      ...(englishDepth ?? {})
    };
  }

  return {
    symptom: localised.symptom,
    causes: localised.causes,
    solutions: localised.solutions,
    whenToCall: localised.whenToCall,
    localFaq: localised.localFaq,
    overview: localised.overview,
    diyChecks: localised.diyChecks,
    prevention: localised.prevention,
    costDetail: localised.costDetail
  };
}
