"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

/**
 * Client-side search box for the `/faq` mega-page.
 *
 * Deliberately does NOT receive the ~1,000-entry FAQ dataset as a React
 * prop — that would ship the whole dataset into the client JS bundle and
 * violate the site's Core Web Vitals budget (permanent rule 17). Instead
 * the page renders every FAQ as plain server HTML with `data-faq-item`
 * markers, and this component filters by reading `textContent` directly
 * from the already-rendered DOM nodes.
 */
export function FaqSearchFilter() {
  const [query, setQuery] = useState("");
  const [resultCount, setResultCount] = useState<number | null>(null);
  const totalRef = useRef<number>(0);
  const t = useTranslations();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-faq-item]"));
    totalRef.current = items.length;

    const categories = Array.from(document.querySelectorAll<HTMLElement>("[data-faq-category]"));
    const q = query.trim().toLowerCase();

    if (!q) {
      items.forEach((item) => item.classList.remove("hidden"));
      categories.forEach((cat) => {
        cat.classList.remove("hidden");
        const emptyNote = cat.querySelector<HTMLElement>("[data-faq-empty]");
        if (emptyNote) emptyNote.classList.add("hidden");
      });
      setResultCount(null);
      return;
    }

    let visibleTotal = 0;

    categories.forEach((cat) => {
      const catItems = Array.from(cat.querySelectorAll<HTMLElement>("[data-faq-item]"));
      let visibleInCat = 0;
      catItems.forEach((item) => {
        const matches = (item.textContent ?? "").toLowerCase().includes(q);
        item.classList.toggle("hidden", !matches);
        if (matches) {
          visibleInCat += 1;
          visibleTotal += 1;
        }
      });
      cat.classList.toggle("hidden", visibleInCat === 0);
      const emptyNote = cat.querySelector<HTMLElement>("[data-faq-empty]");
      if (emptyNote) emptyNote.classList.add("hidden");
    });

    setResultCount(visibleTotal);
  }, [query]);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm focus-within:border-[#0EA5E9]">
        <Search className="h-5 w-5 shrink-0 text-[#0EA5E9]" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t("faqSearch.placeholder")}
          className="w-full bg-transparent text-sm font-semibold text-[#075985] outline-none placeholder:text-slate-400"
          aria-label={t("faqSearch.ariaLabel")}
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label={t("faqSearch.clearAria")}
            className="shrink-0 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {query && (
        <p className="mt-3 text-center text-xs font-bold text-[#475569]">
          {resultCount === 0
            ? t("faqSearch.noResults")
            : resultCount === 1
              ? t("faqSearch.showingResults", { count: resultCount ?? 0 })
              : t("faqSearch.showingResultsPlural", { count: resultCount ?? 0 })}
        </p>
      )}
    </div>
  );
}
