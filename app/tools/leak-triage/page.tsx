import { SimpleToolPage } from "@/components/tools/simple-tool-page";
import { getWebApplicationSchema } from "@/lib/seo";
import { buildMetadata } from "@/lib/seo-meta";
export const metadata = buildMetadata({
  title: "Leak Triage Tool — Is Your Leak Urgent?",
  description: "Check whether a ceiling, wall, roof or bathroom leak needs urgent waterproofing attention, and what a realistic repair usually involves.",
  path: "/tools/leak-triage"
});
export default function LeakTriagePage(){ return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(getWebApplicationSchema("Leak Triage Tool", "/tools/leak-triage", "Triage leak urgency."))}}/><SimpleToolPage title="Leak Triage Tool" description="Tell us where water appears, whether it is active, and how quickly damage is spreading." fields={["Leak location", "Active water yes/no", "Damage spread", "Duration"]}/></>; }
