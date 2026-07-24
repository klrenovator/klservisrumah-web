import { notFound } from "next/navigation";
import { residentialPages } from "@/config/content-data";
import { GenericContentPageView } from "@/components/content/generic-content-page";
import { getArticleSchema, getFAQSchema } from "@/lib/seo";
export function generateStaticParams() { return residentialPages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) { const { slug } = await props.params; const page = residentialPages.find((item) => item.slug === slug); if (!page) return {}; return { title: page.title, description: page.intro, alternates: { canonical: `/residential/${page.slug}` } }; }
export default async function ResidentialPage(props: { params: Promise<{ slug: string }> }) { const { slug } = await props.params; const page = residentialPages.find((item) => item.slug === slug); if (!page) notFound(); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: page.title, slug: page.slug, excerpt: page.intro, path: `/residential/${page.slug}`, category: page.category })) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(page.faqs)) }} /><GenericContentPageView page={page} /></>; }
