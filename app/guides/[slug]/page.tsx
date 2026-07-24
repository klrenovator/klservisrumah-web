import { notFound } from "next/navigation";
import { guidePages } from "@/config/content-data";
import { GenericContentPageView } from "@/components/content/generic-content-page";
import { getArticleSchema, getFAQSchema } from "@/lib/seo";

export function generateStaticParams() { return guidePages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const page = guidePages.find((item) => item.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.intro, alternates: { canonical: `/guides/${page.slug}` } };
}
export default async function GuidePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const page = guidePages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: page.title, slug: page.slug, excerpt: page.intro, path: `/guides/${page.slug}`, category: page.category })) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(page.faqs)) }} /><GenericContentPageView page={page} /></>;
}
