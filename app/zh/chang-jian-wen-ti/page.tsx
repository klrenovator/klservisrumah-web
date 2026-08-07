import { buildMetadata } from "@/lib/seo-meta";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { FaqHeroHeading } from "@/components/sections/faq-hero-heading";
import { FaqSearchFilter } from "@/components/sections/faq-search-filter";
import { FaqDirectoryView } from "@/components/sections/faq-directory-view";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getSpeakableSchema, getFAQSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { Phone, MessageSquare } from "lucide-react";
import { faqDirectoryTotalCount, getFaqDirectory } from "@/lib/faq-directory";
import { LocaleTreeLinks } from "@/components/sections/locale-tree-links";

export const metadata = buildMetadata({
  title: "常见问题 — 所有住宅服务问题解答",
  description: `${faqDirectoryTotalCount}+ 个关于价格、保修、保险、服务范围、材料和预约的问题——在本站每个服务、区域和问题页面中都有解答。`,
  path: "/zh/chang-jian-wen-ti",
  keywords: ["马来西亚住宅服务常见问题", "吉隆坡维修问答", "雪兰莪油漆费用FAQ"],
  languageUrls: {
    en: "/faq",
    ms: "/ms/soalan-lazim",
    zh: "/zh/chang-jian-wen-ti",
  }
});

export default function ChineseFaqPage() {
  const faqDirectory = getFaqDirectory("zh");
  return (
    <>
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqHeroHeading />
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mt-2">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp 咨询</span>
              </a>
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-[#0EA5E9] text-[#075985] font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200">
                <Phone className="w-4 h-4" />
                <span>致电 {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "常见问题", href: "/zh/chang-jian-wen-ti" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", ".faq-intro", ".faq-answer"])) }} />

      <FAQAccordion />

      <section className="bg-slate-50 border-t border-slate-100 py-12 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSearchFilter />
        </div>
      </section>

      <FaqDirectoryView categories={faqDirectory} totalCount={faqDirectoryTotalCount} lang="zh" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(getFAQSchema(faqDirectory.flatMap((c) => c.items.map((i) => ({ q: i.q, a: i.a })))))
      }} />

      {/* Crawl path from this tree to the other three localized trees. */}
      <LocaleTreeLinks locale="zh" current="faq" />
    </>
  );
}
