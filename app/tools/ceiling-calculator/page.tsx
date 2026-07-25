import { SimpleToolPage } from "@/components/tools/simple-tool-page";
import { getWebApplicationSchema } from "@/lib/seo";
import { buildMetadata } from "@/lib/seo-meta";
export const metadata = buildMetadata({
  title: "Ceiling Cost Calculator KL & Selangor",
  description: "Estimate plaster ceiling, cornice and L-box material scope for your room before asking for a market-rate ceiling quote in the Klang Valley.",
  path: "/tools/ceiling-calculator"
});
export default function CeilingCalculatorPage(){ return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(getWebApplicationSchema("Ceiling Material Calculator", "/tools/ceiling-calculator", "Estimate ceiling material factors."))}}/><SimpleToolPage title="Ceiling Material Calculator" description="Enter dimensions, design type, and fittings so we can estimate ceiling material and labour scope." fields={["Room length", "Room width", "Ceiling type", "Downlight / fan count"]}/></>; }
