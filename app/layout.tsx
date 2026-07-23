import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { siteConfig } from "@/config/site";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.metaDescription,
  metadataBase: new URL("https://www.klservisrumah.my"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.metaDescription,
    url: "https://www.klservisrumah.my",
    siteName: siteConfig.name,
    images: [
      {
        url: "/logo/logo.png",
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
    images: ["/logo/logo.png"]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo/logo.png",
    apple: "/logo/logo.png"
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
    <html lang="en-MY" className={`${plusJakartaSans.variable} ${inter.variable} antialiased`}>
      <body className="font-body text-[#4A607C] bg-white min-h-screen flex flex-col justify-between">
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />

        <Providers>
          <Navbar />
          <main className="grow w-full">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
