import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { servicesData } from "@/config/services-data";
import { getFAQSchema, getOfferCatalogSchema } from "@/lib/seo";
import { PricingHeroHeading } from "@/components/sections/pricing-hero-heading";
import { LocalePricingContent } from "@/components/sections/locale-pricing-content";

export const metadata = buildMetadata({
  title: "吉隆坡与雪兰莪家居服务价格表 — 2026指南",
  description:
    "2026年吉隆坡与雪兰莪油漆、水管、石膏天花板、防水与杂工服务透明价格。无隐藏费用。",
  path: "/zh/pricing",
  languageUrls: {
    en: "/pricing",
    ms: "/ms/harga",
    zh: "/zh/pricing"
  },
  ogLocale: "zh_MY",
  ogAlternateLocales: ["en_MY", "ms_MY"],
  keywords: [
    "吉隆坡家居服务价格",
    "吉隆坡油漆费用",
    "雪兰莪水管工收费",
    "防水价格吉隆坡",
    "家居维修价格表"
  ]
});

const pricingFaqsZh = [
  {
    q: "你们是如何制定价格的？",
    a: "我们遵循巴生谷公平透明的市场价格。价格绝不虚高。最终报价将在确认工作范围、现场环境、材料及紧急程度后书面确认。"
  },
  {
    q: "之后会有隐藏费用吗？",
    a: "不会。如果需要额外工作，我们会先向您说明并取得您的同意，然后才会继续施工。"
  },
  {
    q: "可以通过 WhatsApp 发送照片获取报价吗？",
    a: "可以。许多小型工作可以通过清晰的照片、尺寸和所在区域进行初步估算。较复杂的漏水、天花板或外墙工程可能仍需现场检查。"
  },
  {
    q: "紧急服务的收费会有不同吗？",
    a: "当涉及紧急调度、非工作时间加班、施工难度或特殊安全控制时，紧急服务可能会有额外费用。所有调整都会在开工前明确告知。"
  }
];

const offerCatalogItemsZh = Object.values(servicesData)
  .slice(0, 12)
  .map((service) => ({ name: service.title, price: service.startPrice, desc: service.tagline }));

export default function ZhPricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "价格指南", href: "/zh/pricing" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(pricingFaqsZh)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOfferCatalogSchema(offerCatalogItemsZh)) }}
      />

      <section className="bg-gradient-to-b from-slate-50 via-white to-sky-50/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingHeroHeading />
        </div>
      </section>

      <LocalePricingContent />
    </>
  );
}
