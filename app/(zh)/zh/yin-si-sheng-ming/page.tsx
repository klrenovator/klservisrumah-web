import { buildMetadata } from "@/lib/seo-meta";
import { privacyContent } from "@/config/legal-content";
import { LegalDocument } from "@/components/legal/legal-document";

export const metadata = buildMetadata({
  title: "隐私声明 — KL Servis Rumah",
  description: "了解 KL Servis Rumah 如何处理网站访问、分析同意、咨询、报价与家居服务预约所涉及的个人资料，以及您的隐私选择和权利。",
  path: "/zh/yin-si-sheng-ming",
  languageUrls: { en: "/privacy", ms: "/ms/notis-privasi", zh: "/zh/yin-si-sheng-ming" }
});

export default function ChinesePrivacyPage() {
  return <LegalDocument document={privacyContent.zh} homeLabel="首页" currentPath="/zh/yin-si-sheng-ming" />;
}
