import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage } from "@/components/content/content-hub-page";
import { commercialPages } from "@/config/content-data";
import { genericToHubItems, getHubMetadata, getItemListSchema } from "@/lib/hub";
import { podHubUrls } from "@/config/content-locale";

const title = "Commercial Home Services KL & Selangor";
const description = "Commercial service pages for offices, retail lots, showrooms, warehouses and strata facilities across Klang Valley.";
const path = "/commercial";
const items = genericToHubItems(commercialPages, path);

export const metadata = getHubMetadata({ title, description, path, languageUrls: podHubUrls("commercial") });

export default function CommercialHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Commercial", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <ContentHubPage eyebrow="Business properties" title={title} description={description} basePath={path} items={items} primaryCtaHref="/contact" primaryCtaLabel="Request Site Visit" />
    </>
  );
}
