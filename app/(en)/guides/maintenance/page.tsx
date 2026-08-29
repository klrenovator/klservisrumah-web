import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage } from "@/components/content/content-hub-page";
import { maintenancePages } from "@/config/content-data";
import { genericToHubItems, getHubMetadata, getItemListSchema } from "@/lib/hub";

const title = "Home Maintenance Checklists KL & Selangor";
const description = "Monthly, rainy-season, rental-turnover and renovation-cleanup checklists for Malaysian homes, condos and landed properties.";
const path = "/guides/maintenance";
const items = genericToHubItems(maintenancePages, path);

export const metadata = getHubMetadata({ title, description, path });

export default function MaintenanceHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Maintenance", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <ContentHubPage eyebrow="Preventive maintenance" title={title} description={description} basePath={path} items={items} primaryCtaHref="/tools" primaryCtaLabel="Use Free Tools" />
    </>
  );
}
