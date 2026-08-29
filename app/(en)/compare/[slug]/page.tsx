import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo-meta";
import { podDetailUrls } from "@/config/content-locale";
import { comparisonPages } from "@/config/content-data";
import { GenericContentPageView } from "@/components/content/generic-content-page";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getArticleSchema, getFAQSchema } from "@/lib/seo";
// Every valid param is enumerated in `generateStaticParams()`, so anything
// else must 404 rather than be rendered on demand and cached as a 200
// (a soft 404). See `app/[lang]/[[...slug]]/page.tsx` for the full rationale.
export const dynamicParams = false;

export function generateStaticParams() { return comparisonPages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) { const { slug } = await props.params; const page = comparisonPages.find((item) => item.slug === slug); if (!page) return {}; return buildMetadata({
    title: page.title,
    description: page.intro,
    path: `/compare/${page.slug}`,
    languageUrls: podDetailUrls("compare", page.slug)
  }); }
export default async function ComparePage(props: { params: Promise<{ slug: string }> }) { const { slug } = await props.params; const page = comparisonPages.find((item) => item.slug === slug); if (!page) notFound(); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: page.title, slug: page.slug, excerpt: page.intro, path: `/compare/${page.slug}`, category: page.category })) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(page.faqs)) }} /><Breadcrumbs items={[{ label: "Compare", href: "/compare" }, { label: page.title, href: `/compare/${page.slug}` }]} /><GenericContentPageView page={page} /></>; }
