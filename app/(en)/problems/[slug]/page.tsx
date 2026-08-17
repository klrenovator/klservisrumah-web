import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { problemPages } from "@/config/problem-data";
import { isRedirectedProblemSlug, problemLocaleUrls } from "@/config/problem-canonical";
import { indexableProblemPages } from "@/config/problem-index";
import { servicesData } from "@/config/services-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getArticleSchema, getFAQSchema, getHowToSchema, getSpeakableSchema } from "@/lib/seo";
import { LocaleProblemView } from "@/components/sections/locale-problem-view";
import { getLocalizedProblem } from "@/lib/problem-i18n";
import { getLocalizedService } from "@/lib/service-i18n";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";
import { buildProblemDescription } from "@/lib/problem-meta";


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
    description: buildProblemDescription(problem, "en"),
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

      <LocaleProblemView
        problem={Object.fromEntries(SUPPORTED_LOCALES.map((locale) => [locale, getLocalizedProblem(problem, locale)])) as Record<Locale, typeof problem>}
        service={{
          slug: service.slug,
          title: Object.fromEntries(SUPPORTED_LOCALES.map((locale) => [locale, getLocalizedService(service, locale).title])) as Record<Locale, string>
        }}
      />
    </>
  );
}
