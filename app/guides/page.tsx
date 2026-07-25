import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage } from "@/components/content/content-hub-page";
import { guidePages } from "@/config/content-data";
import { genericToHubItems, getHubMetadata, getItemListSchema } from "@/lib/hub";
import { getBreadcrumbSchema, getSpeakableSchema } from "@/lib/seo";

const title = "Home Service Guides KL & Selangor";
const description = "Decision guides for choosing painters, plumbers, waterproofing contractors, ceiling teams and handyman services in KL & Selangor.";
const path = "/guides";
const items = genericToHubItems(guidePages, path);

export const metadata = getHubMetadata({ title, description, path });

export default function GuidesHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Guides", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Guides", item: path }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", "h2"])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <ContentHubPage eyebrow="Expert homeowner guides" title={title} description={description} basePath={path} items={items} primaryCtaHref="/contact" primaryCtaLabel="Ask an Expert" />
    </>
  );
}
