import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { SiteHead } from "@/components/layout/site-head";
import { SiteChrome } from "@/components/layout/site-chrome";
import { siteConfig } from "@/config/site";
import { optimizeTitle, optimizeDescription, buildAlternates } from "@/lib/seo-meta";

export const viewport: Viewport = {
  themeColor: "#075985",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  // NOTE: deliberately a plain string, NOT { default, template }.
  // Pages append their own brand suffix via `lib/seo-meta.ts#optimizeTitle`, which
  // guarantees exactly one brand mention within the 60-char SERP budget. A
  // `template` here double-appended the brand on 26 pages and pushed 425 of 437
  // titles past the truncation point.
  title: optimizeTitle(`${siteConfig.name} — ${siteConfig.tagline}`, { appendBrand: false }),
  description: optimizeDescription(siteConfig.metaDescription),
  metadataBase: new URL("https://www.klservisrumah.my"),
  manifest: "/manifest.json",
  verification: {
    google: "bXgZJKdBlDiVK9DsjNukmCqqicH37cqU_YdHSIVhjlg",
    other: {
      "msvalidate.01": "6CA0BEF9CB1FECC50C10A3F56F7ED27E",
    },
  },
  // Self-referencing hreflang: all three languages are served from the same URL
  // (client-side switch). The previous /ms and /zh targets 301-redirect back here,
  // and Google discards hreflang clusters whose targets redirect.
  alternates: buildAlternates("/"),
  openGraph: {
    title: optimizeTitle(`${siteConfig.name} — ${siteConfig.tagline}`, { appendBrand: false }),
    description: optimizeDescription(siteConfig.metaDescription),
    url: "https://www.klservisrumah.my",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ],
    locale: "en_MY",
    alternateLocale: ["ms_MY", "zh_MY"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: optimizeTitle(`${siteConfig.name} — ${siteConfig.tagline}`, { appendBrand: false }),
    description: optimizeDescription(siteConfig.metaDescription),
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
  // Geo + AI meta tags
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
 * English root layout (`(en)` route group).
 *
 * The app has three root layouts — one per language tree — because a nested
 * layout cannot change the `<html lang>` attribute server-side (Next.js only
 * renders `<html>` from a root layout). Previously the /ms and /zh trees were
 * served with `lang="en-MY"` in the raw HTML and only corrected on hydration
 * (a screen-reader/crawler gap). With a dedicated root layout per tree, every
 * page's server-rendered document declares its true language.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY" className="scroll-smooth">
      <head>
        <SiteHead />
      </head>
      <body className="font-sans text-[#475569] bg-white min-h-screen flex flex-col justify-between antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
