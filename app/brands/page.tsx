import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage } from "@/components/content/content-hub-page";
import { brandPages } from "@/config/content-data";
import { genericToHubItems, getHubMetadata, getItemListSchema } from "@/lib/hub";
import { getBreadcrumbSchema, getSpeakableSchema } from "@/lib/seo";

const title = "Material & Brand Guides Malaysia";
const description = "Practical brand and material guidance for paint, pipes, water heaters, gypsum boards and waterproofing products used in KL homes.";
const path = "/brands";
const items = genericToHubItems(brandPages, path);

export const metadata = getHubMetadata({ title, description, path });

export default function BrandsHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Brands", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Brands", item: path }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", "h2"])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <ContentHubPage eyebrow="Materials and brands" title={title} description={description} basePath={path} items={items} primaryCtaHref="/services" primaryCtaLabel="Find Service" />
    </>
  );
}
