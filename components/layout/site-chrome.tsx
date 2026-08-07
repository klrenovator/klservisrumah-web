import type { ReactNode } from "react";
import { Providers } from "@/app/providers";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { StickyMobileWhatsAppBar } from "@/components/sticky-mobile-whatsapp-bar";
import { WebVitalsReporter } from "@/components/web-vitals-reporter";
import { ErrorReporter } from "@/components/error-reporter";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { DeferredWidgets } from "@/components/deferred-widgets";
import { SkipToContentLink } from "@/components/ui/skip-to-content";

/**
 * SiteChrome — the `<body>` children shared by all three root layouts.
 *
 * The site uses multiple root layouts (one per language tree) so that every
 * tree ships a correct server-side `<html lang>` attribute. Everything inside
 * `<body>` is identical across languages — providers, analytics, navigation,
 * footer, floating CTAs — and lives here so it is defined exactly once.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Providers>
        <GoogleAnalytics />
        <WebVitalsReporter />
        <ErrorReporter />
        <ServiceWorkerRegister />
        <SkipToContentLink />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="grow w-full focus:outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileWhatsAppBar />
        <DeferredWidgets />
      </Providers>
    </>
  );
}
