import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage } from "@/components/content/content-hub-page";
import { topPages } from "@/config/content-data";
import { genericToHubItems, getHubMetadata, getItemListSchema } from "@/lib/hub";
import { podHubUrls } from "@/config/content-locale";

const title = "Home Service Comparison Criteria KL";
const description = "Educational criteria for comparing contractors, methods and materials in KL without fabricated rankings or paid placements.";
const path = "/top";
const items = genericToHubItems(topPages, path);

export const metadata = getHubMetadata({ title, description, path, languageUrls: podHubUrls("top") });

export default function TopHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Top Criteria", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <ContentHubPage eyebrow="Selection criteria" title={title} description={description} basePath={path} items={items} primaryCtaHref="/faq" primaryCtaLabel="Read FAQs" />
    </>
  );
}
