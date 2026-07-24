import { SimpleToolPage } from "@/components/tools/simple-tool-page";
import { getWebApplicationSchema } from "@/lib/seo";
export const metadata = { title: "TV Mount Advisor KL", description: "Choose the right TV bracket and wall anchor type before booking a handyman." };
export default function TvMountAdvisorPage(){ return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(getWebApplicationSchema("TV Mount Advisor", "/tools/tv-mount-advisor", "Recommend TV mount factors."))}}/><SimpleToolPage title="TV Mount Advisor" description="Share TV size, wall type, bracket type and cable preference for a safe mounting recommendation." fields={["TV size", "Wall type", "Bracket type", "Cable preference"]}/></>; }
