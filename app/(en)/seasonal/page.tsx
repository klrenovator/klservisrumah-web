import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage } from "@/components/content/content-hub-page";
import { seasonalPages } from "@/config/content-data";
import { genericToHubItems, getHubMetadata, getItemListSchema } from "@/lib/hub";
import { podHubUrls } from "@/config/content-locale";

const title = "Seasonal Home Service Guides Malaysia";
const description = "Rainy-season, festive repaint, monsoon leak and year-end renovation planning guides for KL and Selangor homes.";
const path = "/seasonal";
const items = genericToHubItems(seasonalPages, path);

export const metadata = getHubMetadata({ title, description, path, languageUrls: podHubUrls("seasonal") });

export default function SeasonalHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Seasonal", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <ContentHubPage eyebrow="Timed for Malaysian homes" title={title} description={description} basePath={path} items={items} primaryCtaHref="/guides/maintenance" primaryCtaLabel="Maintenance Checklists" />
    </>
  );
}
