/**
 * Server-side problem record helpers.
 *
 * Split out of `config/problem-canonical.ts` so the slug/URL helpers that
 * client components need stay free of the ~207 KB `config/problem-data`
 * registry. Only import this from server components, route handlers,
 * `generateStaticParams`, the sitemap and build scripts.
 */

import { problemPages, type ProblemDetail } from "@/config/problem-data";
import { isRedirectedProblemSlug } from "@/config/problem-canonical";

/** Live, indexable problem records (redirected near-duplicates excluded). */
export function indexableProblemPages(): ProblemDetail[] {
  return problemPages.filter((problem) => !isRedirectedProblemSlug(problem.slug));
}
