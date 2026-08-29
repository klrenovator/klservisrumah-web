import type { Locale } from "@/lib/i18n";
import type { ProblemDetail, LocalizedProblemContent } from "@/config/problem-data";
import { problemI18n } from "@/config/problem-data";
import { localizeProblemBody } from "@/lib/problem-body-i18n";

/**
 * Returns the problem/diagnostic entry with localized content applied for
 * the given locale. Falls back to English when a locale-specific field is
 * missing, mirroring the pattern used by getLocalizedService().
 *
 * P2-16: the optional depth fields (overview / diyChecks / prevention /
 * costDetail) are localised through `config/problem-body-i18n.ts` — the same
 * source that carries the native symptom/causes/solutions/whenToCall body — so
 * an enriched problem page never silently falls back to English depth copy.
 */
export function getLocalizedProblem(problem: ProblemDetail, locale: Locale): ProblemDetail {
  let localizedProblem = problem;

  if (locale !== "en") {
    const override: Partial<LocalizedProblemContent> | undefined = problemI18n[problem.slug]?.[locale];
    if (override) {
      localizedProblem = {
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
  }

  const localisedBody = localizeProblemBody(
    problem.slug,
    locale,
    localizedProblem.symptom,
    localizedProblem.causes,
    localizedProblem.solutions,
    localizedProblem.whenToCall,
    {
      overview: problem.overview,
      diyChecks: problem.diyChecks,
      prevention: problem.prevention,
      costDetail: problem.costDetail
    }
  );

  const faqs = [...localizedProblem.faqs];
  if (localisedBody.localFaq) {
    faqs.push(localisedBody.localFaq);
  }

  return {
    ...localizedProblem,
    symptom: localisedBody.symptom,
    causes: localisedBody.causes,
    solutions: localisedBody.solutions,
    whenToCall: localisedBody.whenToCall,
    faqs: faqs,
    overview: localisedBody.overview,
    diyChecks: localisedBody.diyChecks,
    prevention: localisedBody.prevention,
    costDetail: localisedBody.costDetail
  };
}
