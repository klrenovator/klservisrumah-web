import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { SiteHead } from "@/components/layout/site-head";
import { SiteChrome } from "@/components/layout/site-chrome";
import { siteConfig } from "@/config/site";
import { optimizeTitle, optimizeDescription, buildAlternates } from "@/lib/seo-meta";
import zhMessages from "@/messages/zh.json";
import type { MessageDictionary } from "@/lib/i18n";

/**
 * The tree's dictionary is serialized across the RSC boundary into
 * <Providers>, which seeds the lazy translation cache before first render —
 * so the client chrome (navbar, footer, CTA bars) prerenders in Chinese
 * instead of flashing English until the post-hydration lazy fetch.
 */
const initialMessages = zhMessages as MessageDictionary;

export const viewport: Viewport = {
  themeColor: "#075985",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

/**
 * Chinese root layout metadata (`(zh)` route group).
 *
 * Every page under /zh declares its own full metadata through `buildMetadata`,
 * so these values are fallbacks only — but they are localized so that any page
 * which ever forgets its own metadata still inherits Chinese defaults rather
 * than the English site-wide ones.
 */
export const metadata: Metadata = {
  title: optimizeTitle("KL Servis Rumah — 吉隆坡与雪兰莪固定价格家居服务", { appendBrand: false }),
  description: optimizeDescription(
    "吉隆坡与雪兰莪固定价格家居服务 — 油漆、水管、天花板、防水与杂工。开工前以书面确认固定报价。"
  ),
  metadataBase: new URL("https://www.klservisrumah.my"),
  manifest: "/manifest.json",
  verification: {
    google: "bXgZJKdBlDiVK9DsjNukmCqqicH37cqU_YdHSIVhjlg",
    other: {
      "msvalidate.01": "6CA0BEF9CB1FECC50C10A3F56F7ED27E",
    },
  },
  // /zh canonicalises to "/" (the scaffold is a redirect stub), so the fallback
  // alternates mirror that relationship and never emit hreflang here.
  alternates: buildAlternates("/zh", true),
  openGraph: {
    title: optimizeTitle("KL Servis Rumah — 吉隆坡与雪兰莪固定价格家居服务", { appendBrand: false }),
    description: optimizeDescription(
      "吉隆坡与雪兰莪固定价格家居服务 — 油漆、水管、天花板、防水与杂工。开工前以书面确认固定报价。"
    ),
    url: "https://www.klservisrumah.my/zh",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ],
    locale: "zh_MY",
    alternateLocale: ["en_MY", "ms_MY"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: optimizeTitle("KL Servis Rumah — 吉隆坡与雪兰莪固定价格家居服务", { appendBrand: false }),
    description: optimizeDescription(
      "吉隆坡与雪兰莪固定价格家居服务 — 油漆、水管、天花板、防水与杂工。"
    ),
    images: [siteConfig.defaultOgImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any", type: "image/png" },
      { url: "/logo/logo-icon.png", sizes: "any", type: "image/png" }
    ],
    shortcut: siteConfig.logoIcon,
    apple: "/icons/icon-192.png"
  },
  other: {
    "geo.region": "MY-10",
    "geo.placename": "Kuala Lumpur, Selangor, Malaysia",
    "geo.position": `${siteConfig.geoLat};${siteConfig.geoLng}`,
    ICBM: `${siteConfig.geoLat}, ${siteConfig.geoLng}`,
    language: "English, Bahasa Malaysia, Chinese",
    "ai-context": "https://www.klservisrumah.my/llms.txt",
    llms: "https://www.klservisrumah.my/llms.txt",
    "llms-full": "https://www.klservisrumah.my/llms-full.txt",
  }
};

/**
 * Chinese root layout — serves the real /zh tree (gongju, bo-ke,
 * chang-jian-wen-ti, services) with a server-rendered `<html lang="zh-MY">`.
 * See `(en)/layout.tsx` for why each language tree needs its own root layout.
 */
export default function ChineseRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-MY" className="scroll-smooth">
      <head>
        <SiteHead />
      </head>
      <body className="font-sans text-[#475569] bg-white min-h-screen flex flex-col justify-between antialiased">
        <SiteChrome initialLang="zh" initialMessages={initialMessages}>{children}</SiteChrome>
      </body>
    </html>
  );
}
