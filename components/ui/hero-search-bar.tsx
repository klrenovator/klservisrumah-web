"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchSmartServices, type SmartSearchResult } from "@/lib/smart-finder-search";
import { useLang } from "@/context/lang-context";

const SEARCH_PLACEHOLDERS = {
  en: "Find any service...",
  ms: "Cari mana-mana servis...",
  zh: "寻找任何服务..."
};

const POPULAR_SEARCHES = {
  en: ["Painting", "Ceiling", "Plaster Ceiling", "Partition", "Plumbing", "Waterproofing", "Handyman", "CCTV", "Repair"],
  ms: ["Pengecatan", "Siling", "Siling Plaster", "Partition", "Paip", "Kalis Air", "Tukang", "CCTV", "Pembaikan"],
  zh: ["油漆", "天花板", "石膏天花", "隔墙", "水管", "防水", "维修工", "CCTV监控", "维修"]
};

interface HeroSearchBarProps {
  onSearch?: (query: string) => void;
}

export function HeroSearchBar({ onSearch }: HeroSearchBarProps) {
  const router = useRouter();
  const { lang } = useLang();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<SmartSearchResult[]>([]);
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  const placeholder = SEARCH_PLACEHOLDERS[lang] || SEARCH_PLACEHOLDERS.en;
  const popularSearches = POPULAR_SEARCHES[lang] || POPULAR_SEARCHES.en;

  // Debounced search
  const handleSearch = useCallback((searchQuery: string) => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    searchTimeout.current = setTimeout(() => {
      const results = searchSmartServices(searchQuery, lang);
      setSearchResults(results.results.slice(0, 5));
    }, 300);
  }, [lang]);

  useEffect(() => {
    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to search page with query
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleSelectResult = (result: SmartSearchResult) => {
    setQuery("");
    setSearchResults([]);
    setIsFocused(false);
    // Navigate to the service page
    router.push(result.service.quoteUrl);
  };

  const handleSelectPopular = (searchTerm: string) => {
    setQuery(searchTerm);
    setIsFocused(true);
    handleSearch(searchTerm);
  };

  const handleClear = () => {
    setQuery("");
    setSearchResults([]);
  };

  const handleBlur = () => {
    // Small delay to allow click on results before hiding
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  return (
    <div className="relative w-full max-w-3xl">
      {/* Search Bar */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center rounded-2xl border-2 border-white/30 bg-white/10 p-1.5 shadow-lg backdrop-blur-xl transition-all focus-within:border-sky-400 focus-within:bg-white/15 hover:border-white/40">
          <Search className="h-5 w-5 text-sky-300 ml-3 shrink-0" aria-hidden="true" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            placeholder={placeholder}
            className="w-full bg-transparent px-4 py-4 text-base font-medium text-white placeholder:text-white/40 outline-none transition-colors"
            aria-label="Search for home services"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="submit"
            className="btn-primary shrink-0 px-6 py-4 text-sm font-bold uppercase tracking-wider ml-2"
          >
            <span className="hidden sm:inline">Search</span>
            <Search className="h-4 w-4 sm:hidden" />
          </button>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isFocused && (query || searchResults.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {searchResults.length > 0 ? (
            <div className="space-y-1">
              {searchResults.map((result) => (
                <button
                  key={result.service.serviceSlug}
                  onClick={() => handleSelectResult(result)}
                  className="w-full flex flex-col items-start gap-1 rounded-xl p-3 text-left hover:bg-sky-50 transition-colors"
                >
                  <span className="text-sm font-bold text-[#075985]">
                    {result.service.title}
                  </span>
                  <span className="text-xs text-[#475569] line-clamp-1">
                    {result.service.tagline || result.service.description}
                  </span>
                  <span className="text-[10px] font-semibold text-[#0EA5E9] mt-1">
                    {result.matchReason}
                  </span>
                </button>
              ))}
            </div>
          ) : query ? (
            <div className="text-center py-6">
              <p className="text-sm text-slate-500">
                {lang === "ms" ? "Tiada hasil dijumpai" : lang === "zh" ? "没有找到结果" : "No results found"}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {lang === "ms" ? "Cuba cari dengan perkataan lain" : lang === "zh" ? "尝试其他搜索词" : "Try different keywords"}
              </p>
            </div>
          ) : null}

          {/* Popular Searches */}
          {query === "" && (
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#0EA5E9] mb-2">
                {lang === "ms" ? "Carian Popular" : lang === "zh" ? "热门搜索" : "Popular Searches"}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => handleSelectPopular(search)}
                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-[#075985] hover:bg-sky-50 hover:border-sky-200 transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
