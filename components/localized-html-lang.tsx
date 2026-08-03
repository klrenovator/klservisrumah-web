"use client";

import { useEffect } from "react";

/**
 * LocalizedHtmlLang
 * -----------------
 * Next.js App Router only renders the `<html>` element from the ROOT layout,
 * so the fully-localised subtrees (`/ms/*`, `/zh/*`) are served with the
 * site-wide `lang="en-MY"` attribute even though their visible copy is Bahasa
 * Malaysia or Simplified Chinese. A nested layout cannot change that
 * server-side without splitting the app into multiple root layouts.
 *
 * This tiny client component corrects `document.documentElement.lang` on
 * hydration so assistive technology (screen readers pick the right speech
 * synthesiser) and rendering crawlers see language metadata that matches the
 * page content. It renders nothing and has no visual or behavioural impact.
 */
export function LocalizedHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    // App Router keeps the same <html> element across client-side (soft)
    // navigations, so restore the previous language on unmount — otherwise
    // navigating from a localised page back to an English one would leave a
    // stale lang="ms-MY"/"zh-MY" on the document until the next hard reload.
    const previous = document.documentElement.lang || "en-MY";
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);

  return null;
}
