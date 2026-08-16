import type { ReactNode } from "react";
import { Providers } from "@/app/providers";
import type { Locale, MessageDictionary } from "@/lib/i18n";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { StickyMobileWhatsAppBar } from "@/components/sticky-mobile-whatsapp-bar";
import { WebVitalsReporter } from "@/components/web-vitals-reporter";
import { ErrorReporter } from "@/components/error-reporter";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { ConversionTracker } from "@/components/analytics/conversion-tracker";
import { CookieConsent } from "@/components/analytics/cookie-consent";
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
export function SiteChrome({
  children,
  initialLang = "en",
  initialMessages,
}: {
  children: ReactNode;
  /**
   * Tree-native locale. Each per-language root layout passes its own locale
   * and dictionary so the chrome (navbar/footer/CTAs) prerenders in the
   * tree's language instead of English.
   */
  initialLang?: Locale;
  initialMessages?: MessageDictionary;
}) {
  return (
    <>
      <Providers initialLang={initialLang} initialMessages={initialMessages}>
        <GoogleAnalytics />
        <ConversionTracker />
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
        <CookieConsent />
        <DeferredWidgets />
      </Providers>
    </>
  );
}
