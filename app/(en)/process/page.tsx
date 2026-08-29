import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage } from "@/components/content/content-hub-page";
import { processPages } from "@/config/content-data";
import { genericToHubItems, getHubMetadata, getItemListSchema } from "@/lib/hub";

const title = "Home Service Process Guides KL";
const description = "Step-by-step process pages explaining preparation, workmanship checks, cleanup and warranty handover for every service.";
const path = "/process";
const items = genericToHubItems(processPages, path);

export const metadata = getHubMetadata({ title, description, path });

export default function ProcessHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Process", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <ContentHubPage eyebrow="How work gets done" title={title} description={description} basePath={path} items={items} primaryCtaHref="/projects" primaryCtaLabel="View Projects" />
    </>
  );
}
