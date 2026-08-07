import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContentHubPage, type HubItem } from "@/components/content/content-hub-page";
import { servicesData } from "@/config/services-data";
import { siteConfig } from "@/config/site";
import { getHubMetadata, getItemListSchema } from "@/lib/hub";
import { getSpeakableSchema } from "@/lib/seo";

const title = "Home Services Near Me in KL & Selangor";
const description = "Find nearby KL Servis Rumah teams for painting, plumbing, ceiling, waterproofing, handyman, electrical and renovation services across Klang Valley.";
const path = "/near-me";
const items: HubItem[] = Object.values(servicesData).map((service) => ({
  slug: service.slug,
  title: `${service.title} Near Me`,
  category: "Near Me Service",
  intro: `${service.tagline} Same-day dispatch is available across ${siteConfig.areas.slice(0, 8).join(", ")} and nearby Klang Valley areas.`,
  href: `/near-me/${service.slug}`,
  relatedServiceTitle: service.title,
  bullets: [`From ${service.startPrice}`, service.warranty, "WhatsApp photos for faster quote"]
}));

export const metadata = getHubMetadata({ title, description, path });

export default function NearMeHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Near Me", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", "h2"])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <ContentHubPage eyebrow="Local dispatch hub" title={title} description={description} basePath={path} items={items} primaryCtaHref="/areas" primaryCtaLabel="View Areas" secondaryCtaHref="/services" secondaryCtaLabel="All Services" />
    </>
  );
}
