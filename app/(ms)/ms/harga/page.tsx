import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { servicesData } from "@/config/services-data";
import { getFAQSchema, getOfferCatalogSchema } from "@/lib/seo";
import { PricingHeroHeading } from "@/components/sections/pricing-hero-heading";
import { LocalePricingContent } from "@/components/sections/locale-pricing-content";

export const metadata = buildMetadata({
  title: "Senarai Harga Servis Rumah KL & Selangor 2026 — Panduan Kos",
  description:
    "Harga telus 2026 untuk perkhidmatan mengecat, paip, siling plaster, kalis air, aircond dan handyman di Kuala Lumpur & Selangor. Tiada caj tersembunyi.",
  path: "/ms/harga",
  languageUrls: {
    en: "/pricing",
    ms: "/ms/harga",
    zh: "/zh/pricing"
  },
  ogLocale: "ms_MY",
  ogAlternateLocales: ["en_MY", "zh_MY"],
  keywords: [
    "harga servis rumah KL",
    "harga cat rumah 2026",
    "kos tukang paip Selangor",
    "harga kalis air KL",
    "senarai harga servis rumah"
  ]
});

const pricingFaqsMs = [
  {
    q: "Bagaimanakah anda menetapkan harga perkhidmatan?",
    a: "Kami mematuhi kadar berpatutan di Lembah Klang. Harga tidak dinaikkan secara tidak munasabah. Sebutharga muktamad disahkan selepas pemeriksaan skop, akses, bahan dan tahap ketersediaan."
  },
  {
    q: "Adakah terdapat caj tersembunyi kemudian?",
    a: "Tiada. Jika kerja tambahan diperlukan, ia dijelaskan terlebih dahulu dan diluluskan oleh anda sebelum kami meneruskannya."
  },
  {
    q: "Bolehkah saya mendapatkan sebutharga melalui gambar di WhatsApp?",
    a: "Boleh. Banyak tugas kecil boleh dianggarkan daripada gambar yang jelas, ukuran dan lokasi anda. Projek kebocoran, siling atau luaran yang lebih rumit mungkin memerlukan pemeriksaan tapak."
  },
  {
    q: "Adakah caj kerja kecemasan berbeza?",
    a: "Kerja kecemasan mungkin melibatkan kos tambahan apabila penghantaran segera, tenaga kerja luar waktu kerja, kesukaran akses atau kawalan keselamatan terlibat. Caj tambahan dimaklumkan sebelum kerja bermula."
  }
];

const offerCatalogItemsMs = Object.values(servicesData)
  .slice(0, 12)
  .map((service) => ({ name: service.title, price: service.startPrice, desc: service.tagline }));

export default function MsPricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Harga", href: "/ms/harga" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(pricingFaqsMs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOfferCatalogSchema(offerCatalogItemsMs)) }}
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
