import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { SiteHead } from "@/components/layout/site-head";
import { SiteChrome } from "@/components/layout/site-chrome";
import { siteConfig } from "@/config/site";
import { optimizeTitle, optimizeDescription, buildAlternates } from "@/lib/seo-meta";
import msMessages from "@/messages/ms.json";
import type { MessageDictionary } from "@/lib/i18n";

/**
 * The tree's dictionary is serialized across the RSC boundary into
 * <Providers>, which seeds the lazy translation cache before first render —
 * so the client chrome (navbar, footer, CTA bars) prerenders in Bahasa
 * Malaysia instead of flashing English until the post-hydration lazy fetch.
 */
const initialMessages = msMessages as MessageDictionary;

export const viewport: Viewport = {
  themeColor: "#075985",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

/**
 * Bahasa Malaysia root layout metadata (`(ms)` route group).
 *
 * Every page under /ms declares its own full metadata through `buildMetadata`,
 * so these values are fallbacks only — but they are localized so that any page
 * which ever forgets its own metadata still inherits Malay defaults rather than
 * the English site-wide ones.
 */
export const metadata: Metadata = {
  title: optimizeTitle("KL Servis Rumah — Perkhidmatan Rumah Harga Tetap di KL & Selangor", { appendBrand: false }),
  description: optimizeDescription(
    "Perkhidmatan rumah harga tetap di Kuala Lumpur & Selangor — mengecat, paip, siling, kalis air dan handyman. Sebut harga tetap disahkan bertulis sebelum kerja bermula."
  ),
  metadataBase: new URL("https://www.klservisrumah.my"),
  manifest: "/manifest.json",
  verification: {
    google: "bXgZJKdBlDiVK9DsjNukmCqqicH37cqU_YdHSIVhjlg",
    other: {
      "msvalidate.01": "6CA0BEF9CB1FECC50C10A3F56F7ED27E",
    },
  },
  // /ms canonicalises to "/" (the scaffold is a redirect stub), so the fallback
  // alternates mirror that relationship and never emit hreflang here.
  alternates: buildAlternates("/ms", true),
  openGraph: {
    title: optimizeTitle("KL Servis Rumah — Perkhidmatan Rumah Harga Tetap di KL & Selangor", { appendBrand: false }),
    description: optimizeDescription(
      "Perkhidmatan rumah harga tetap di Kuala Lumpur & Selangor — mengecat, paip, siling, kalis air dan handyman. Sebut harga tetap disahkan bertulis sebelum kerja bermula."
    ),
    url: "https://www.klservisrumah.my/ms",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ],
    locale: "ms_MY",
    alternateLocale: ["en_MY", "zh_MY"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: optimizeTitle("KL Servis Rumah — Perkhidmatan Rumah Harga Tetap di KL & Selangor", { appendBrand: false }),
    description: optimizeDescription(
      "Perkhidmatan rumah harga tetap di Kuala Lumpur & Selangor — mengecat, paip, siling, kalis air dan handyman."
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
 * Bahasa Malaysia root layout — serves the real /ms tree (alatan, blog,
 * soalan-lazim, services) with a server-rendered `<html lang="ms-MY">`.
 * See `(en)/layout.tsx` for why each language tree needs its own root layout.
 */
export default function MalayRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms-MY" className="scroll-smooth">
      <head>
        <SiteHead />
      </head>
      <body className="font-sans text-[#475569] bg-white min-h-screen flex flex-col justify-between antialiased">
        <SiteChrome initialLang="ms" initialMessages={initialMessages}>{children}</SiteChrome>
      </body>
    </html>
  );
}
