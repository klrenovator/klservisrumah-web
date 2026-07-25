import type { Locale } from "@/lib/i18n";
import type { ProblemDetail, LocalizedProblemContent } from "@/config/problem-data";
import { problemI18n } from "@/config/problem-data";

/**
 * Returns the problem/diagnostic entry with localized content applied for
 * the given locale. Falls back to English when a locale-specific field is
 * missing, mirroring the pattern used by getLocalizedService().
 */
export function getLocalizedProblem(problem: ProblemDetail, locale: Locale): ProblemDetail {
  if (locale === "en") return problem;
  const override: LocalizedProblemContent | undefined = problemI18n[problem.slug]?.[locale];
  if (!override) return problem;
  return {
    ...problem,
    title: override.title || problem.title,
    symptom: override.symptom || problem.symptom,
    costRange: override.costRange || problem.costRange,
    causes: override.causes?.length ? override.causes : problem.causes,
    solutions: override.solutions?.length ? override.solutions : problem.solutions,
    whenToCall: override.whenToCall?.length ? override.whenToCall : problem.whenToCall,
    faqs: override.faqs?.length ? override.faqs : problem.faqs
  };
}
