import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage } from "@/components/content/content-hub-page";
import { answerPages } from "@/config/content-data";
import { genericToHubItems, getHubMetadata, getItemListSchema } from "@/lib/hub";
import { getBreadcrumbSchema, getSpeakableSchema } from "@/lib/seo";

const title = "AI Answer Hub for Home Services KL";
const description = "Direct answer pages for ChatGPT, Gemini, Perplexity and Google AI Overviews covering every KL Servis Rumah service pillar.";
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
      <ContentHubPage eyebrow="AEO / GEO hub" title={title} description={description} basePath={path} items={items} primaryCtaHref="/services" primaryCtaLabel="Browse Services" />
    </>
  );
}
