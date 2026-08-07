import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage } from "@/components/content/content-hub-page";
import { comparisonPages } from "@/config/content-data";
import { genericToHubItems, getHubMetadata, getItemListSchema } from "@/lib/hub";
import { getSpeakableSchema } from "@/lib/seo";

const title = "Home Service Comparisons KL & Selangor";
const description = "Compare methods, materials and quote types before choosing painting, plumbing, ceiling, waterproofing or handyman work.";
const path = "/compare";
const items = genericToHubItems(comparisonPages, path);

export const metadata = getHubMetadata({ title, description, path });

export default function CompareHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Compare", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", "h2"])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <ContentHubPage eyebrow="Compare before you approve" title={title} description={description} basePath={path} items={items} primaryCtaHref="/pricing" primaryCtaLabel="Check Price Guide" />
    </>
  );
}
