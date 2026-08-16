import { buildMetadata } from "@/lib/seo-meta";
import { termsContent } from "@/config/legal-content";
import { LegalDocument } from "@/components/legal/legal-document";

export const metadata = buildMetadata({
  title: "网站与服务条款 — KL Servis Rumah",
  description: "KL Servis Rumah 网站、计算器、报价及预约条款，包括工程范围、价格、现场通道、书面保修、客户责任和马来西亚适用法律。",
  path: "/zh/tiao-kuan",
  languageUrls: { en: "/terms", ms: "/ms/terma", zh: "/zh/tiao-kuan" }
});

export default function ChineseTermsPage() {
  return <LegalDocument document={termsContent.zh} homeLabel="首页" currentPath="/zh/tiao-kuan" />;
}
