import { notFound } from "next/navigation";
import { seasonalPages } from "@/config/content-data";
import { GenericContentPageView } from "@/components/content/generic-content-page";
import { getArticleSchema, getFAQSchema } from "@/lib/seo";
export function generateStaticParams() { return seasonalPages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) { const { slug } = await props.params; const page = seasonalPages.find((item) => item.slug === slug); if (!page) return {}; return { title: page.title, description: page.intro, alternates: { canonical: `/seasonal/${page.slug}` } }; }
export default async function SeasonalPage(props: { params: Promise<{ slug: string }> }) { const { slug } = await props.params; const page = seasonalPages.find((item) => item.slug === slug); if (!page) notFound(); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: page.title, slug: page.slug, excerpt: page.intro, path: `/seasonal/${page.slug}`, category: page.category })) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(page.faqs)) }} /><GenericContentPageView page={page} /></>; }
