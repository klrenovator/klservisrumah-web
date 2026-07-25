import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage } from "@/components/content/content-hub-page";
import { answerPages } from "@/config/content-data";
import { genericToHubItems, getHubMetadata, getItemListSchema } from "@/lib/hub";
import { getBreadcrumbSchema, getSpeakableSchema } from "@/lib/seo";

const title = "Home Service Answers for KL & Selangor";
const description = "Straight answers to the most common home service questions in Kuala Lumpur and Selangor — cost, timing, warranty and what to expect on site.";
const path = "/answers";
const items = genericToHubItems(answerPages, path);

export const metadata = getHubMetadata({ title, description, path });

export default function AnswersHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Answers", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Answers", item: path }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", "h2"])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <ContentHubPage eyebrow="Quick answers" title={title} description={description} basePath={path} items={items} primaryCtaHref="/services" primaryCtaLabel="Browse Services" />
    </>
  );
}
