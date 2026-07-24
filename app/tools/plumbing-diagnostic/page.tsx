import { SimpleToolPage } from "@/components/tools/simple-tool-page";
import { getWebApplicationSchema } from "@/lib/seo";
export const metadata = { title: "Plumbing Diagnostic Tool KL", description: "Triage plumbing leaks, blockages, low pressure and water heater issues before booking." };
export default function PlumbingDiagnosticPage(){ return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(getWebApplicationSchema("Plumbing Diagnostic Tool", "/tools/plumbing-diagnostic", "Triage plumbing symptoms."))}}/><SimpleToolPage title="Plumbing Diagnostic Tool" description="Describe the symptom, fixture location, duration and severity so we can recommend the right next step." fields={["Symptom", "Fixture location", "Duration", "Severity 1-5"]}/></>; }
