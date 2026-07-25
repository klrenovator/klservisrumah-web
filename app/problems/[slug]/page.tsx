import React from "react";
import { notFound } from "next/navigation";
import { problemPages } from "@/config/problem-data";
import { servicesData } from "@/config/services-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getArticleSchema, getBreadcrumbSchema, getFAQSchema, getHowToSchema } from "@/lib/seo";
import { LocaleProblemView } from "@/components/sections/locale-problem-view";

export function generateStaticParams() {
  return problemPages.map((problem) => ({ slug: problem.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const problem = problemPages.find((item) => item.slug === slug);
  if (!problem) return {};
  return {
    title: `${problem.title}: Causes, Fixes & Cost in KL`,
    description: `${problem.symptom} Learn causes, professional fixes, when to call a pro, and estimated cost: ${problem.costRange}.`,
    alternates: { canonical: `/problems/${problem.slug}` }
  };
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: "Problems", item: "/problems" }, { name: problem.title, item: `/problems/${problem.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(problem.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getHowToSchema(howToSteps)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: problem.title, slug: problem.slug, excerpt: problem.symptom, path: `/problems/${problem.slug}`, category: service.title })) }} />

      <LocaleProblemView problem={problem} service={service} />
    </>
  );
}
