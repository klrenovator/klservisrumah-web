import React from "react";
import { notFound } from "next/navigation";
import { problemPages } from "@/config/problem-data";
import { buildMetadata } from "@/lib/seo-meta";
import { getLocalizedProblem } from "@/lib/problem-i18n";
import { isRedirectedProblemSlug, problemLocaleUrls } from "@/config/problem-canonical";
import { indexableProblemPages } from "@/config/problem-index";
import { LocaleProblemPage } from "@/components/sections/locale-problem-page";
import { buildProblemDescription } from "@/lib/problem-meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return indexableProblemPages().map((problem) => ({ slug: problem.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  if (isRedirectedProblemSlug(slug)) return {};
  const problem = problemPages.find((item) => item.slug === slug);
  if (!problem) return {};
  const localized = getLocalizedProblem(problem, "zh");
  return buildMetadata({
    title: `${localized.title}：原因、修复与费用`,
    description: buildProblemDescription(localized, "zh"),
    path: `/zh/problems/${problem.slug}`,
    type: "article",
    languageUrls: problemLocaleUrls(problem.slug),
    ogLocale: "zh_MY",
    ogAlternateLocales: ["en_MY", "ms_MY"],
    keywords: [localized.title, "房屋问题", "吉隆坡"],
  });
}

export default async function ZhProblemPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  if (isRedirectedProblemSlug(slug)) notFound();
  return <LocaleProblemPage locale="zh" slug={slug} />;
}
