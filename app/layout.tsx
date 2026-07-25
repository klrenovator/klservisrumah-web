import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { StickyMobileWhatsAppBar } from "@/components/sticky-mobile-whatsapp-bar";
import { WebVitalsReporter } from "@/components/web-vitals-reporter";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { DeferredWidgets } from "@/components/deferred-widgets";
import { siteConfig } from "@/config/site";
import { getOrganizationSchema, getLocalBusinessSchema, getWebsiteSchema, buildServiceAreaGeoCircle } from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: "#075985",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.metaDescription,
  metadataBase: new URL("https://www.klservisrumah.my"),
  manifest: "/manifest.json",
  verification: {
    google: "bXgZJKdBlDiVK9DsjNukmCqqicH37cqU_YdHSIVhjlg",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-MY": "/",
      "ms-MY": "/ms",
      "zh-MY": "/zh",
      "x-default": "/"
    }
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.metaDescription,
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
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.metaDescription,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const localSchema = getLocalBusinessSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en-MY" className="scroll-smooth">
      <head>
        {/* Performance hints — pre-warm critical third-party endpoints */}
        <link rel="preconnect" href="https://wa.me" crossOrigin="" />
        <link rel="preconnect" href="https://api.whatsapp.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* 1. Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* 2. Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />
        {/* 3. WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans text-[#475569] bg-white min-h-screen flex flex-col justify-between antialiased">
        <Providers>
          <GoogleAnalytics />
          <WebVitalsReporter />
          <ServiceWorkerRegister />
          <Navbar />
          <main className="grow w-full">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <StickyMobileWhatsAppBar />
          <DeferredWidgets />
        </Providers>
      </body>
    </html>
  );
}
