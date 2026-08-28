import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo-meta";
import { seasonalPages } from "@/config/content-data";
import { GenericContentPageView } from "@/components/content/generic-content-page";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getArticleSchema, getFAQSchema } from "@/lib/seo";
// Every valid param is enumerated in `generateStaticParams()`, so anything
// else must 404 rather than be rendered on demand and cached as a 200
// (a soft 404). See `app/[lang]/[[...slug]]/page.tsx` for the full rationale.
export const dynamicParams = false;

export function generateStaticParams() { return seasonalPages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) { const { slug } = await props.params; const page = seasonalPages.find((item) => item.slug === slug); if (!page) return {}; return buildMetadata({
    title: page.title,
    description: page.intro,
    path: `/seasonal/${page.slug}`
  }); }
export default async function SeasonalPage(props: { params: Promise<{ slug: string }> }) { const { slug } = await props.params; const page = seasonalPages.find((item) => item.slug === slug); if (!page) notFound(); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: page.title, slug: page.slug, excerpt: page.intro, path: `/seasonal/${page.slug}`, category: page.category })) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(page.faqs)) }} /><Breadcrumbs items={[{ label: "Seasonal", href: "/seasonal" }, { label: page.title, href: `/seasonal/${page.slug}` }]} /><GenericContentPageView page={page} /></>; }
