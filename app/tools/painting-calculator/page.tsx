import { SimpleToolPage } from "@/components/tools/simple-tool-page";
import { getWebApplicationSchema } from "@/lib/seo";
import { buildMetadata } from "@/lib/seo-meta";
export const metadata = buildMetadata({
  title: "Painting Cost Calculator KL & Selangor",
  description: "Estimate paint quantity, coats and wall preparation for your rooms before requesting a market-rate painting quote in KL and Selangor.",
  path: "/tools/painting-calculator"
});
export default function PaintingCalculatorPage(){ return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(getWebApplicationSchema("Painting Cost Calculator", "/tools/painting-calculator", "Estimate painting cost factors."))}}/><SimpleToolPage title="Painting Cost Calculator" description="Enter room quantity, approximate area, wall condition, and paint preference to prepare a better quote request." fields={["Room count", "Approximate wall area", "Wall condition", "Paint preference"]}/></>; }
