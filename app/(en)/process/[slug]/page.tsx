import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo-meta";
import { processPages } from "@/config/content-data";
import { GenericContentPageView } from "@/components/content/generic-content-page";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getFAQSchema } from "@/lib/seo";
// Every valid param is enumerated in `generateStaticParams()`, so anything
// else must 404 rather than be rendered on demand and cached as a 200
// (a soft 404). See `app/[lang]/[[...slug]]/page.tsx` for the full rationale.
export const dynamicParams = false;

export function generateStaticParams() { return processPages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) { const { slug } = await props.params; const page = processPages.find((item) => item.slug === slug); if (!page) return {}; return buildMetadata({
    title: page.title,
    description: page.intro,
    path: `/process/${page.slug}`
  }); }
export default async function ProcessPage(props: { params: Promise<{ slug: string }> }) { const { slug } = await props.params; const page = processPages.find((item) => item.slug === slug); if (!page) notFound(); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(page.faqs)) }} /><Breadcrumbs items={[{ label: "Process", href: "/process" }, { label: page.title, href: `/process/${page.slug}` }]} /><GenericContentPageView page={page} /></>; }
