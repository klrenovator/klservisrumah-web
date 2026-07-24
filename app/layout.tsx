import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { StickyMobileWhatsAppBar } from "@/components/sticky-mobile-whatsapp-bar";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
import { SocialProofWidgets } from "@/components/social-proof-widgets";
import { WebVitalsReporter } from "@/components/web-vitals-reporter";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { siteConfig } from "@/config/site";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: "#0284C7",
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
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.metaDescription,
    images: [siteConfig.defaultOgImage]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: siteConfig.logoIcon,
    apple: "/icons/icon-192.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const localSchema = getLocalBusinessSchema();

  return (
    <html lang="en-MY" className="antialiased">
      <body className="font-sans text-[#475569] bg-white min-h-screen flex flex-col justify-between">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />
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
          <ExitIntentPopup />
          <SocialProofWidgets />
        </Providers>
      </body>
    </html>
  );
}
