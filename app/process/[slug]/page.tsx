import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo-meta";
import { processPages } from "@/config/content-data";
import { GenericContentPageView } from "@/components/content/generic-content-page";
import { getFAQSchema, getHowToSchema } from "@/lib/seo";
export function generateStaticParams() { return processPages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) { const { slug } = await props.params; const page = processPages.find((item) => item.slug === slug); if (!page) return {}; return buildMetadata({
    title: page.title,
    description: page.intro,
    path: `/process/${page.slug}`
  }); }
export default async function ProcessPage(props: { params: Promise<{ slug: string }> }) { const { slug } = await props.params; const page = processPages.find((item) => item.slug === slug); if (!page) notFound(); const steps = page.bullets.map((bullet) => ({ title: bullet, desc: bullet })); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getHowToSchema(steps)) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(page.faqs)) }} /><GenericContentPageView page={page} /></>; }
