import { SimpleToolPage } from "@/components/tools/simple-tool-page";
import { getWebApplicationSchema } from "@/lib/seo";
import { buildMetadata } from "@/lib/seo-meta";
export const metadata = buildMetadata({
  title: "Plumbing Diagnostic Tool for KL Homes",
  description: "Narrow down the likely cause of a leak, blockage or low water pressure in your Malaysian home before booking a plumber visit.",
  path: "/tools/plumbing-diagnostic"
});
export default function PlumbingDiagnosticPage(){ return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(getWebApplicationSchema("Plumbing Diagnostic Tool", "/tools/plumbing-diagnostic", "Triage plumbing symptoms."))}}/><SimpleToolPage title="Plumbing Diagnostic Tool" description="Describe the symptom, fixture location, duration and severity so we can recommend the right next step." fields={["Symptom", "Fixture location", "Duration", "Severity 1-5"]}/></>; }
