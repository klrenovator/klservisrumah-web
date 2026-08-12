import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { problemPages } from "@/config/problem-data";
import { indexableProblemPages, isRedirectedProblemSlug, problemLocaleUrls } from "@/config/problem-canonical";
import { servicesData } from "@/config/services-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getArticleSchema, getFAQSchema, getHowToSchema, getSpeakableSchema } from "@/lib/seo";
import { LocaleProblemView } from "@/components/sections/locale-problem-view";

/**
 * Compose a unique, SERP-sized description for a problem page.
 *
 * The previous template was `symptom + boilerplate`, which left 19 pages under the
 * ~110 char threshold (Google then rewrites the snippet itself) and made every
 * description read identically. This packs each page's own top cause and fix into
 * the remaining budget, so all 44 descriptions are distinct and fully used.
 */
function buildProblemDescription(problem: (typeof problemPages)[number]): string {
  const cost = problem.costRange.replace(/ depending on.*$/i, "");
  const parts = [problem.symptom.trim()];

  const topCause = problem.causes?.[0];
  const topFix = problem.solutions?.[0];

  if (topCause) parts.push(`Common cause: ${lowerFirst(topCause)}.`);
  if (topFix) parts.push(`Fix: ${lowerFirst(topFix)}.`);
  parts.push(`Typical cost ${cost} in KL & Selangor.`);
  // Final filler for records with terse source copy, so every description still
  // reaches the ~110 char floor below which Google rewrites the snippet itself.
  parts.push("Same-day inspection available.");

  // Add sentences while they fit the 158-char meta description budget.
  let description = parts[0];
  for (const part of parts.slice(1)) {
    const candidate = `${description} ${part}`;
    // `continue`, not `break`: a long clause that overflows should be skipped so a
    // shorter later clause can still be used to reach the length floor.
    if (candidate.length > 158) continue;
    description = candidate;
  }
  return description;
}

function lowerFirst(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

// Every valid param is enumerated in `generateStaticParams()`, so anything
// else must 404 rather than be rendered on demand and cached as a 200
// (a soft 404). See `app/[lang]/[[...slug]]/page.tsx` for the full rationale.
export const dynamicParams = false;

export function generateStaticParams() {
  return indexableProblemPages().map((problem) => ({ slug: problem.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  if (isRedirectedProblemSlug(slug)) return {};
  const problem = problemPages.find((item) => item.slug === slug);
  if (!problem) return {};

  return buildMetadata({
    title: `${problem.title}: Causes, Fixes & Cost`,
    description: buildProblemDescription(problem),
    path: `/problems/${problem.slug}`,
    languageUrls: problemLocaleUrls(problem.slug),
    type: "article",
    keywords: [
      problem.title,
      problem.serviceSlug,
      `${problem.title} cost`,
      `${problem.title} KL`,
      "home problems Malaysia"
    ]
  });
}

export default async function ProblemPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const problem = problemPages.find((item) => item.slug === slug);
  if (!problem) notFound();
  const service = servicesData[problem.serviceSlug];
  const howToSteps = problem.solutions.map((solution) => ({ title: solution, desc: `Apply this step only after the cause is confirmed: ${solution}.` }));

  return (
    <>
      <Breadcrumbs items={[{ label: "Problems", href: "/problems" }, { label: problem.title, href: `/problems/${problem.slug}` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(problem.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getHowToSchema(howToSteps)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: problem.title, slug: problem.slug, excerpt: problem.symptom, path: `/problems/${problem.slug}`, category: service.title })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", ".problem-symptom", ".faq-answer"])) }} />

      <LocaleProblemView problem={problem} service={service} />
    </>
  );
}
