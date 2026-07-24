import { SimpleToolPage } from "@/components/tools/simple-tool-page";
import { getWebApplicationSchema } from "@/lib/seo";
export const metadata = { title: "Leak Triage Tool KL", description: "Check if ceiling, wall, roof or bathroom leak needs urgent waterproofing support." };
export default function LeakTriagePage(){ return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(getWebApplicationSchema("Leak Triage Tool", "/tools/leak-triage", "Triage leak urgency."))}}/><SimpleToolPage title="Leak Triage Tool" description="Tell us where water appears, whether it is active, and how quickly damage is spreading." fields={["Leak location", "Active water yes/no", "Damage spread", "Duration"]}/></>; }
