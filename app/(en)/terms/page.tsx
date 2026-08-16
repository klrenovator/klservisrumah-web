import { buildMetadata } from "@/lib/seo-meta";
import { termsContent } from "@/config/legal-content";
import { LegalDocument } from "@/components/legal/legal-document";

export const metadata = buildMetadata({
  title: "Website & Service Terms — KL Servis Rumah",
  description: "Terms for using the KL Servis Rumah website, calculators and quotation channels, plus booking, scope, pricing, access, warranty and service conditions.",
  path: "/terms",
  languageUrls: { en: "/terms", ms: "/ms/terma", zh: "/zh/tiao-kuan" }
});

export default function TermsPage() {
  return <LegalDocument document={termsContent.en} homeLabel="Home" currentPath="/terms" />;
}
