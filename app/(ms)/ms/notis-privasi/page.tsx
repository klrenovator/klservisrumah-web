import { buildMetadata } from "@/lib/seo-meta";
import { privacyContent } from "@/config/legal-content";
import { LegalDocument } from "@/components/legal/legal-document";

export const metadata = buildMetadata({
  title: "Notis Privasi — KL Servis Rumah",
  description: "Cara KL Servis Rumah mengumpul, menggunakan, berkongsi dan melindungi data peribadi bagi lawatan laman, persetujuan analitik, pertanyaan, sebut harga dan tempahan.",
  path: "/ms/notis-privasi",
  languageUrls: { en: "/privacy", ms: "/ms/notis-privasi", zh: "/zh/yin-si-sheng-ming" }
});

export default function MalayPrivacyPage() {
  return <LegalDocument document={privacyContent.ms} homeLabel="Utama" currentPath="/ms/notis-privasi" ariaLabel="Laluan navigasi" />;
}
