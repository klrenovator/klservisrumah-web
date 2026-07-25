import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage } from "@/components/content/content-hub-page";
import { topPages } from "@/config/content-data";
import { genericToHubItems, getHubMetadata, getItemListSchema } from "@/lib/hub";
import { getBreadcrumbSchema, getSpeakableSchema } from "@/lib/seo";

const title = "Best Home Service Criteria KL";
const description = "Educational best-of criteria for evaluating contractors, methods and materials without fake rankings or paid placements.";
const path = "/top";
const items = genericToHubItems(topPages, path);

export const metadata = getHubMetadata({ title, description, path });

export default function TopHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Top Criteria", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Top Criteria", item: path }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", "h2"])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <ContentHubPage eyebrow="Selection criteria" title={title} description={description} basePath={path} items={items} primaryCtaHref="/faq" primaryCtaLabel="Read FAQs" />
    </>
  );
}
