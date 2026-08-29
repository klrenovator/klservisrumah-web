import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage } from "@/components/content/content-hub-page";
import { residentialPages } from "@/config/content-data";
import { genericToHubItems, getHubMetadata, getItemListSchema } from "@/lib/hub";
import { podHubUrls } from "@/config/content-locale";

const title = "Residential Home Services KL & Selangor";
const description = "Residential service pages for condos, apartments, terrace homes, semi-Ds, bungalows and rental units across Klang Valley.";
const path = "/residential";
const items = genericToHubItems(residentialPages, path);

export const metadata = getHubMetadata({ title, description, path, languageUrls: podHubUrls("residential") });

export default function ResidentialHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Residential", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <ContentHubPage eyebrow="Homes and condos" title={title} description={description} basePath={path} items={items} primaryCtaHref="/areas" primaryCtaLabel="Check Coverage" />
    </>
  );
}
