"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { ANALYTICS_CONSENT_EVENT, ANALYTICS_CONSENT_KEY, type AnalyticsConsent } from "@/lib/consent";

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
      setConsent(stored === "granted" || stored === "denied" ? stored : null);
    } catch {
      setConsent("denied");
    }
    const onConsent = (event: Event) => {
      setConsent((event as CustomEvent<AnalyticsConsent>).detail);
    };
    window.addEventListener(ANALYTICS_CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, onConsent);
  }, []);

  // Basic consent mode: no Google script or analytics request is made until
  // the visitor explicitly accepts optional analytics storage.
  if (!measurementId || consent !== "granted") return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('consent', 'update', { analytics_storage: 'granted' });
          gtag('config', '${measurementId}', {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  );
}
