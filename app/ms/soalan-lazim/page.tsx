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

export const metadata = buildMetadata({
  title: "Soalan Lazim — Setiap Soalan Perkhidmatan Rumah Dijawab",
  description: `${faqDirectoryTotalCount}+ soalan tentang harga, jaminan, insurans, kawasan liputan, bahan dan tempahan — dijawab di setiap halaman perkhidmatan, kawasan dan masalah di tapak ini.`,
  path: "/ms/soalan-lazim",
  keywords: ["soalan lazim perkhidmatan rumah Malaysia", "soalan tukang KL", "kos cat FAQ Selangor"],
  languageUrls: {
    en: "/faq",
    ms: "/ms/soalan-lazim",
    zh: "/zh/chang-jian-wen-ti",
  }
});

export default function MalayFaqPage() {
  const faqDirectory = getFaqDirectory("ms");
  return (
    <>
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqHeroHeading />
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mt-2">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm">
                <MessageSquare className="w-4 h-4" />
                <span>Tanya di WhatsApp</span>
              </a>
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-[#0EA5E9] text-[#075985] font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200">
                <Phone className="w-4 h-4" />
                <span>Hubungi {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Soalan Lazim", href: "/ms/soalan-lazim" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", ".faq-intro", ".faq-answer"])) }} />

      <FAQAccordion />

      <section className="bg-slate-50 border-t border-slate-100 py-12 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSearchFilter />
        </div>
      </section>

      <FaqDirectoryView categories={faqDirectory} totalCount={faqDirectoryTotalCount} lang="ms" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(getFAQSchema(faqDirectory.flatMap((c) => c.items.map((i) => ({ q: i.q, a: i.a })))))
      }} />
    </>
  );
}
