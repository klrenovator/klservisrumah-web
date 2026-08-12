import React from "react";
import { notFound } from "next/navigation";
import { problemPages } from "@/config/problem-data";
import { buildMetadata } from "@/lib/seo-meta";
import { getLocalizedProblem } from "@/lib/problem-i18n";
import { indexableProblemPages, isRedirectedProblemSlug, problemLocaleUrls } from "@/config/problem-canonical";
import { LocaleProblemPage } from "@/components/sections/locale-problem-page";

export const dynamicParams = false;

export function generateStaticParams() {
  return indexableProblemPages().map((problem) => ({ slug: problem.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  if (isRedirectedProblemSlug(slug)) return {};
  const problem = problemPages.find((item) => item.slug === slug);
  if (!problem) return {};
  const localized = getLocalizedProblem(problem, "ms");
  return buildMetadata({
    title: `${localized.title}: Punca, Baiki & Kos`,
    description: localized.symptom,
    path: `/ms/problems/${problem.slug}`,
    type: "article",
    languageUrls: problemLocaleUrls(problem.slug),
    ogLocale: "ms_MY",
    ogAlternateLocales: ["en_MY", "zh_MY"],
    keywords: [localized.title, "masalah rumah", "KL"],
  });
}

export default async function MsProblemPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  if (isRedirectedProblemSlug(slug)) notFound();
  return <LocaleProblemPage locale="ms" slug={slug} />;
}
