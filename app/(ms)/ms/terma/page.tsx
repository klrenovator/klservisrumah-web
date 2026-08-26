import { buildMetadata } from "@/lib/seo-meta";
import { termsContent } from "@/config/legal-content";
import { LegalDocument } from "@/components/legal/legal-document";

export const metadata = buildMetadata({
  title: "Terma Laman & Perkhidmatan — KL Servis Rumah",
  description: "Terma penggunaan laman, kalkulator, saluran sebut harga dan tempahan KL Servis Rumah, termasuk skop, harga, akses, waranti dan syarat perkhidmatan.",
  path: "/ms/terma",
  languageUrls: { en: "/terms", ms: "/ms/terma", zh: "/zh/tiao-kuan" }
});

export default function MalayTermsPage() {
  return <LegalDocument document={termsContent.ms} homeLabel="Utama" currentPath="/ms/terma" ariaLabel="Laluan navigasi" />;
}
