import { SimpleToolPage } from "@/components/tools/simple-tool-page";
import { getWebApplicationSchema } from "@/lib/seo";
import { buildMetadata } from "@/lib/seo-meta";
export const metadata = buildMetadata({
  title: "TV Mount Advisor — Wall Type & Bracket",
  description: "Find the right TV bracket and fixing method for brick, concrete, gypsum or partition walls in Malaysian condos and landed homes.",
  path: "/tools/tv-mount-advisor"
});
export default function TvMountAdvisorPage(){ return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(getWebApplicationSchema("TV Mount Advisor", "/tools/tv-mount-advisor", "Recommend TV mount factors."))}}/><SimpleToolPage title="TV Mount Advisor" description="Share TV size, wall type, bracket type and cable preference for a safe mounting recommendation." fields={["TV size", "Wall type", "Bracket type", "Cable preference"]}/></>; }
