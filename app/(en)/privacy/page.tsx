import { buildMetadata } from "@/lib/seo-meta";
import { privacyContent } from "@/config/legal-content";
import { LegalDocument } from "@/components/legal/legal-document";

export const metadata = buildMetadata({
  title: "Privacy Notice — KL Servis Rumah",
  description: "How KL Servis Rumah collects, uses, shares and protects personal data for website visits, analytics consent, enquiries, quotations and home-service bookings.",
  path: "/privacy",
  languageUrls: { en: "/privacy", ms: "/ms/notis-privasi", zh: "/zh/yin-si-sheng-ming" }
});

export default function PrivacyPage() {
  return <LegalDocument document={privacyContent.en} homeLabel="Home" currentPath="/privacy" ariaLabel="Breadcrumb" />;
}
