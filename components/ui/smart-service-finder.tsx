"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Calculator,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Wrench,
  HelpCircle,
  Layers,
  CheckCircle2,
  AlertCircle,
  X,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import type { SmartSearchResult } from "@/lib/smart-finder-search";
import {
  getLoadedSmartSearch,
  loadSmartSearch,
  pendingSmartSearchResponse,
  prefetchSmartSearch,
  type SmartSearchEngine,
} from "@/lib/smart-finder-loader";
import { useLang } from "@/context/lang-context";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackSmartFinderSearch, trackSmartFinderCardExpand, trackSmartFinderCalculatorClick, trackSmartFinderQuoteClick, trackSmartFinderNoResults, trackSmartFinderPopularTag, trackSmartFinderRelatedClick } from "@/lib/analytics";

type TabType = "included" | "materials" | "process" | "faqs";

const FINDER_COPY = {
  en: {
    eyebrow: "SMART HOME SERVICE FINDER",
    heading: "What home problem can we fix for you today?",
    subheading: "Type any repair, leaking, painting, or renovation problem in English, Malay, or Chinese. Our smart engine will match you with upfront pricing, materials, and instant cost calculators.",
    placeholder: "Try typing: 'bathroom wall leaking', 'house painting', 'ceiling crack', or 'water heater'...",
    searchBtn: "Find Service",
    clear: "Clear",
    popularTagsLabel: "Popular Searches:",
    popularTags: [
      "Bathroom Wall Leaking",
      "House Painting",
      "Water Heater Install",
      "Ceiling Crack Repair",
      "Kitchen Renovation",
      "Clogged Pipe"
    ],
    resultsTitle: "Recommended Services for Your Search",
    searching: "Matching your request to the right service…",
    multiServiceBadge: "Multi-Service Match — Several Services Found",
    noResultsHeading: "Didn't find exactly what you're looking for?",
    noResultsSubheading: "Don't worry! We offer custom home repairs and specialist solutions across Kuala Lumpur and Selangor. Speak directly with our master technician on WhatsApp.",
    whatsappConsult: "Chat on WhatsApp for Instant Consultation",
    browseAll: "Browse All 28+ Professional Services",
    estimatedPriceNote: "Estimated Price — Final quotation confirmed after on-site or video inspection",
    viewDetails: "View Details & Scope",
    hideDetails: "Hide Details",
    tabIncluded: "What's Included",
    tabMaterials: "Materials Used",
    tabProcess: "How It's Done",
    tabFaqs: "FAQs",
    relatedServicesLabel: "Related Services:",
    openCalculator: "Open Cost Calculator",
    getQuote: "Get Official Quotation",
    whatsappBook: "WhatsApp Now",
    whyMatches: "Why this matches:",
    needsDecisionWarning: "Needs Business Decision — Specialist licensing/availability check required"
  },
  ms: {
    eyebrow: "CARIAN SERVIS RUMAH PINTAR",
    heading: "Apakah masalah rumah yang boleh kami bantu hari ini?",
    subheading: "Taip sebarang kerosakan, kebocoran, pengecatan, atau pengubahsuaian dalam Bahasa Melayu, Inggeris, atau Cina. Sistem pintar kami akan memadankan harga anggaran, bahan, dan kalkulator kos.",
    placeholder: "Cuba taip: 'bilik air bocor', 'cat rumah', 'siling retak', atau 'nak pasang water heater'...",
    searchBtn: "Cari Servis",
    clear: "Padam",
    popularTagsLabel: "Carian Popular:",
    popularTags: [
      "Bilik Air Bocor",
      "Cat Rumah",
      "Pasang Water Heater",
      "Baiki Siling Retak",
      "Ubah Suai Dapur",
      "Paip Tersumbat"
    ],
    resultsTitle: "Perkhidmatan Disyorkan Untuk Carian Anda",
    searching: "Memadankan permintaan anda dengan servis yang betul…",
    multiServiceBadge: "Padanan Pelbagai Servis — Beberapa Servis Ditemui",
    noResultsHeading: "Tidak menjumpai servis yang anda cari?",
    noResultsSubheading: "Jangan risau! Kami menyediakan pembaikan kustom dan penyelesaian pakar di seluruh KL & Selangor. Hubungi terus juruteknik master kami di WhatsApp.",
    whatsappConsult: "Tanya di WhatsApp untuk Konsultasi Serta-merta",
    browseAll: "Lihat Semua 28+ Perkhidmatan Profesional",
    estimatedPriceNote: "Harga Anggaran — Sebut harga muktamad disahkan selepas pemeriksaan tapak atau video",
    viewDetails: "Lihat Butiran & Skop Kerja",
    hideDetails: "Tutup Butiran",
    tabIncluded: "Skop Kerja",
    tabMaterials: "Bahan Digunakan",
    tabProcess: "Proses Kerja",
    tabFaqs: "Soalan Lazim",
    relatedServicesLabel: "Servis Berkaitan:",
    openCalculator: "Buka Kalkulator Kos",
    getQuote: "Dapatkan Sebut Harga",
    whatsappBook: "WhatsApp Sekarang",
    whyMatches: "Sebab padanan:",
    needsDecisionWarning: "Perlu Pengesahan Syarikat — Semakan lesen pakar/ketersediaan diperlukan"
  },
  zh: {
    eyebrow: "智能家居维修与装潢搜索指南",
    heading: "今天我们可以为您解决什么家居问题？",
    subheading: "可以用中文、马来文或英文输入任何漏水、油漆、水电或修缮装修问题。智能系统立刻为您提供匹配建议、工项材料与在线价格估价工具。",
    placeholder: "试输入：‘厕所漏水’、‘我要油漆房子’、‘天花板裂了’或‘安装热水器’...",
    searchBtn: "马上搜寻",
    clear: "清除",
    popularTagsLabel: "热门需求速查：",
    popularTags: [
      "厕所漏水维修",
      "全屋油漆粉刷",
      "安装热水器",
      "修补天花板裂痕",
      "厨房装修翻新",
      "水管堵塞疏通"
    ],
    resultsTitle: "为您精选的对应专业服务",
    searching: "正在为您匹配合适的专业服务…",
    multiServiceBadge: "多项服务匹配 — 找到多项相关工项",
    noResultsHeading: "找不到您完全符合的需求？",
    noResultsSubheading: "别担心！在吉隆坡与雪兰莪，我们提供全方位定制化修缮与专业检修服务。点击通过 WhatsApp 直接向首席师傅咨询。",
    whatsappConsult: "通过 WhatsApp 直接在线咨询",
    browseAll: "浏览全部 28+ 专业服务目录",
    estimatedPriceNote: "预估费用参考 — 最终确实报价将在现场检查或评估后作准",
    viewDetails: "查看施工内容与材料详情",
    hideDetails: "收起详情",
    tabIncluded: "施工范围",
    tabMaterials: "使用建材",
    tabProcess: "施工步骤",
    tabFaqs: "常见问题",
    relatedServicesLabel: "延伸推荐服务：",
    openCalculator: "开启智能估价计算器",
    getQuote: "索取正式配套报价",
    whatsappBook: "立即 WhatsApp 询问",
    whyMatches: "匹配原因：",
    needsDecisionWarning: "需公司确认 — 该工项需要核实专业认证许可"
  }
};

interface ResultCardProps {
  result: SmartSearchResult;
  lang?: "en" | "ms" | "zh";
  copy: typeof FINDER_COPY["en"];
  onSelectRelated: (slug: string) => void;
}

function ResultCard({ result, copy, onSelectRelated }: ResultCardProps) {
  const { service, score, matchReason, matchedProblem, matchedCalculator } = result;
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("included");

  return (
    <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-[0_12px_40px_rgba(2,31,68,0.06)] transition-all hover:border-[#0EA5E9]/40 hover:shadow-[0_18px_50px_rgba(2,31,68,0.12)]">
      {/* Top Banner: Category & Reason */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#0284C7]">
            <Sparkles className="h-3 w-3" />
            <span>{service.category}</span>
          </span>
          {score >= 90 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
              <CheckCircle2 className="h-3 w-3" />
              <span>{score}% Match</span>
            </span>
          )}
        </div>
        <span className="text-xs font-extrabold text-[#075985]">
          {matchReason}
        </span>
      </div>

      {/* Main Info: Title, Tagline, Price */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <Link
            href={service.quoteUrl}
            className="text-xl sm:text-2xl font-black text-[#075985] hover:text-[#0EA5E9] transition-colors"
          >
            {service.title}
          </Link>
          <p className="text-sm text-[#475569] font-medium leading-relaxed max-w-2xl">
            {service.tagline || service.description}
          </p>
        </div>

        {/* Price Tag */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center rounded-2xl bg-slate-50 border border-slate-200/80 px-4 py-3 shrink-0">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#64748B]">
            {service.priceType}
          </span>
          <span className="text-lg sm:text-xl font-extrabold text-[#0EA5E9]">
            {service.startPrice}
          </span>
        </div>
      </div>

      {/* Matched Problem / Calculator Highlight Badge */}
      {(matchedProblem || matchedCalculator) && (
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl bg-amber-50/70 border border-amber-200/80 p-3 text-xs text-amber-900">
          <AlertCircle className="h-4 w-4 shrink-0 text-amber-600" />
          <div className="flex flex-col">
            {matchedProblem && (
              <span className="font-bold">
                {copy.whyMatches} {matchedProblem.title} ({matchedProblem.symptom})
              </span>
            )}
            {matchedCalculator && (
              <span className="font-bold">
                {copy.openCalculator}: {matchedCalculator.name}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Business Decision Flag */}
      {service.needsBusinessDecision && (
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 px-3 py-2 text-xs font-bold text-rose-800">
          <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
          <span>{service.businessDecisionNote || copy.needsDecisionWarning}</span>
        </div>
      )}

      {/* Progressive Disclosure Toggle */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            const next = !expanded;
            setExpanded(next);
            if (next) {
              trackSmartFinderCardExpand({ serviceSlug: service.serviceSlug, serviceTitle: service.title, score });
            }
          }}
          className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
          aria-expanded={expanded}
        >
          <span>{expanded ? copy.hideDetails : copy.viewDetails}</span>
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        <span className="text-[11px] font-semibold italic text-[#64748B]">
          {copy.estimatedPriceNote}
        </span>
      </div>

      {/* Expanded Details Sections */}
      {expanded && (
        <div className="mt-4 flex flex-col gap-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Tab Selection */}
          <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-200/80 pb-3">
            <button
              type="button"
              onClick={() => setActiveTab("included")}
              className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition-colors ${
                activeTab === "included"
                  ? "bg-[#075985] text-white shadow-sm"
                  : "bg-white text-[#475569] hover:bg-slate-100"
              }`}
            >
              <CheckCircle2 className="inline h-3.5 w-3.5 mr-1" />
              {copy.tabIncluded}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("materials")}
              className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition-colors ${
                activeTab === "materials"
                  ? "bg-[#075985] text-white shadow-sm"
                  : "bg-white text-[#475569] hover:bg-slate-100"
              }`}
            >
              <Wrench className="inline h-3.5 w-3.5 mr-1" />
              {copy.tabMaterials}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("process")}
              className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition-colors ${
                activeTab === "process"
                  ? "bg-[#075985] text-white shadow-sm"
                  : "bg-white text-[#475569] hover:bg-slate-100"
              }`}
            >
              <Layers className="inline h-3.5 w-3.5 mr-1" />
              {copy.tabProcess}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("faqs")}
              className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition-colors ${
                activeTab === "faqs"
                  ? "bg-[#075985] text-white shadow-sm"
                  : "bg-white text-[#475569] hover:bg-slate-100"
              }`}
            >
              <HelpCircle className="inline h-3.5 w-3.5 mr-1" />
              {copy.tabFaqs}
            </button>
          </div>

          {/* Tab 1: Included */}
          {activeTab === "included" && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-[#334155]">
              {service.whatIsIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tab 2: Materials */}
          {activeTab === "materials" && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-[#334155]">
              {service.materials.map((mat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#0EA5E9] shrink-0 mt-0.5" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tab 3: Process */}
          {activeTab === "process" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.process.map((stepItem, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-1 rounded-xl bg-white p-3 border border-slate-200/70"
                >
                  <span className="text-[10px] font-black uppercase text-[#0EA5E9]">
                    Step {stepItem.step}
                  </span>
                  <span className="text-xs font-extrabold text-[#075985]">
                    {stepItem.title}
                  </span>
                  <p className="text-[11px] text-[#475569] leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 4: FAQs */}
          {activeTab === "faqs" && (
            <div className="flex flex-col gap-3">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="flex flex-col gap-1 border-b border-slate-200/60 pb-2 last:border-0 last:pb-0">
                  <span className="text-xs font-bold text-[#075985]">
                    Q: {faq.q}
                  </span>
                  <p className="text-xs text-[#475569]">
                    A: {faq.a}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Related Services Links */}
      {service.relatedServices.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="font-bold text-[#64748B] mr-1">
            {copy.relatedServicesLabel}
          </span>
          {service.relatedServices.map((rel) => (
            <button
              key={rel.slug}
              type="button"
              onClick={() => {
                trackSmartFinderRelatedClick({ fromService: service.serviceSlug, toService: rel.slug });
                onSelectRelated(rel.title);
              }}
              className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-[#075985] hover:bg-[#E0F2FE] hover:text-[#0284C7] transition-colors"
            >
              {rel.title}
            </button>
          ))}
        </div>
      )}

      {/* Conversion CTAs */}
      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Primary CTA: WhatsApp */}
        <a
          href={`${service.ctaUrl}${encodeURIComponent("\n\n[From: Smart Service Finder]")}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
          data-analytics-page="smart_service_finder_card"
          data-analytics-service={service.title}
          className="btn-whatsapp flex-1 justify-center text-sm py-3.5"
        >
          <MessageSquare className="h-4 w-4 fill-white text-[#25D366]" />
          <span>{copy.whatsappBook}</span>
        </a>

        {/* Secondary CTA: Quote Link */}
        <Link
          href={service.quoteUrl}
          onClick={() => trackSmartFinderQuoteClick({ serviceSlug: service.serviceSlug, serviceTitle: service.title })}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm font-extrabold text-[#075985] hover:bg-slate-100 transition-colors"
        >
          <span>{copy.getQuote}</span>
          <ArrowRight className="h-4 w-4 text-[#0EA5E9]" />
        </Link>

        {/* Optional Calculator Direct Link */}
        {service.calculators.length > 0 && (
          <Link
            href={service.calculators[0].url}
            onClick={() => trackSmartFinderCalculatorClick({ serviceSlug: service.serviceSlug, calculatorSlug: service.calculators[0].slug, calculatorUrl: service.calculators[0].url })}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0EA5E9]/30 bg-[#E0F2FE]/40 px-4 py-3.5 text-xs font-extrabold text-[#0284C7] hover:bg-[#E0F2FE] transition-colors"
          >
            <Calculator className="h-4 w-4" />
            <span>{copy.openCalculator}</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export function SmartServiceFinder({ initialQuery = "" }: { initialQuery?: string }) {
  const { lang } = useLang();
  const [query, setQuery] = useState(initialQuery);
  const copy = FINDER_COPY[lang] || FINDER_COPY.en;
  const lastTrackedQuery = useRef<string>("");
  const searchSource = useRef<"input" | "popular_tag" | "related_service">("input");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  // The search engine (and the ~1.1 MB of content registries it pulls in) is
  // code-split — see lib/smart-finder-loader.ts. It is fetched on the first
  // sign of search intent instead of during initial page load.
  const [engine, setEngine] = useState<SmartSearchEngine | null>(() => getLoadedSmartSearch());

  const trimmedQuery = query.trim();

  useEffect(() => {
    if (engine || !trimmedQuery) return;
    let cancelled = false;
    loadSmartSearch()
      .then((mod) => {
        if (!cancelled) setEngine(() => mod);
      })
      .catch(() => {
        /* Retried on the next keystroke. */
      });
    return () => {
      cancelled = true;
    };
  }, [engine, trimmedQuery]);

  const searchResponse = useMemo(() => {
    if (!engine) return pendingSmartSearchResponse(query, lang);
    return engine.searchSmartServices(query, lang);
  }, [engine, query, lang]);

  const isSearching = trimmedQuery.length > 0 && !engine;

  // ── Debounced search analytics ───────────────────────────────────────
  // Track search queries after a short debounce so we don't fire on every
  // keystroke, only when the user pauses typing.
  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed || trimmed === lastTrackedQuery.current) return;
    // Wait until the engine has actually scored the query, otherwise every
    // search would be reported as a zero-result search while the chunk loads.
    if (!engine) return;
    const timer = setTimeout(() => {
      lastTrackedQuery.current = trimmed;
      trackSmartFinderSearch({
        query: trimmed,
        resultCount: searchResponse.results.length,
        lang,
        source: searchSource.current,
      });
      // Reset source back to default after tracking
      searchSource.current = "input";
      // Track no-results separately for easier filtering in GA
      if (searchResponse.results.length === 0) {
        trackSmartFinderNoResults({ query: trimmed, lang });
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [query, searchResponse.results.length, lang, engine]);

  const handleSelectTag = useCallback((tag: string) => {
    searchSource.current = "popular_tag";
    trackSmartFinderPopularTag({ tag, lang });
    setQuery(tag);
  }, [lang]);

  const handleSelectRelated = useCallback((title: string) => {
    searchSource.current = "related_service";
    setQuery(title);
  }, []);

  // The primary button previously had an empty `onClick`, so it looked
  // actionable but did nothing. Results are live-rendered as the visitor types,
  // so the button now does the only useful thing left: send an empty search
  // back to the input, and jump focus to the results once there are some.
  const handleSearchButton = useCallback(() => {
    if (!trimmedQuery) {
      inputRef.current?.focus();
      return;
    }
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [trimmedQuery]);

  const hasSearch = trimmedQuery.length > 0;
  const hasResults = searchResponse.results.length > 0;

  return (
    <section className="w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-12 sm:py-20 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-sky-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{copy.eyebrow}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {copy.heading}
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
            {copy.subheading}
          </p>
        </div>

        {/* Primary Search Bar */}
        <div className="mt-8 sm:mt-10 max-w-3xl mx-auto">
          <div
            className="relative flex items-center rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-xl focus-within:border-sky-400 focus-within:bg-white/15 transition-all"
            onPointerEnter={prefetchSmartSearch}
          >
            <Search className="h-6 w-6 text-sky-400 ml-3 shrink-0" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={prefetchSmartSearch}
              placeholder={copy.placeholder}
              className="w-full bg-transparent px-4 py-3 text-sm sm:text-base font-semibold text-white placeholder:text-slate-400 outline-none [&::-webkit-search-cancel-button]:hidden"
              aria-label={copy.eyebrow}
              autoComplete="off"
              enterKeyHint="search"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label={copy.clear}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
            <button
              type="button"
              onClick={handleSearchButton}
              className="btn-primary shrink-0 px-6 py-3 text-sm font-black uppercase tracking-wider"
            >
              <span>{copy.searchBtn}</span>
            </button>
          </div>

          {/* Popular Tag Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="font-extrabold text-slate-400 mr-1">
              {copy.popularTagsLabel}
            </span>
            {copy.popularTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleSelectTag(tag)}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-bold text-slate-300 hover:border-sky-400 hover:bg-sky-500/20 hover:text-white transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Live Search Results Section */}
        {hasSearch && (
          <div
            ref={resultsRef}
            className="mt-12 sm:mt-14 space-y-6"
            aria-live="polite"
            aria-busy={isSearching}
          >
            {isSearching ? (
              /* Engine chunk still in flight — never flash the "no results"
                 panel at a visitor whose query has not been scored yet. */
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-10">
                <p className="text-center text-sm font-bold text-slate-300">{copy.searching}</p>
                <div className="mt-6 space-y-4" aria-hidden="true">
                  <div className="h-24 rounded-2xl bg-slate-800/80 animate-pulse" />
                  <div className="h-24 rounded-2xl bg-slate-800/60 animate-pulse" />
                </div>
              </div>
            ) : (
              <>
                {/* Multi-Service Query Notification Badge */}
                {searchResponse.isMultiServiceQuery && (
                  <div className="flex items-center justify-center gap-2 rounded-2xl bg-sky-500/20 border border-sky-400/40 p-4 text-xs sm:text-sm font-extrabold text-sky-200">
                    <Sparkles className="h-5 w-5 text-sky-400 shrink-0" aria-hidden="true" />
                    <span>{copy.multiServiceBadge}</span>
                  </div>
                )}

                {hasResults ? (

              <>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider">
                    {copy.resultsTitle} ({searchResponse.results.length})
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {searchResponse.results.map((result) => (
                    <ResultCard
                      key={result.service.serviceSlug}
                      result={result}
                      lang={lang}
                      copy={copy}
                      onSelectRelated={handleSelectRelated}
                    />
                  ))}
                </div>
              </>
            ) : (
              /* No-Result Experience — Section 24 */
              <div className="flex flex-col items-center justify-center text-center rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-12">
                <div className="rounded-full bg-slate-800 p-4 text-sky-400 mb-4">
                  <HelpCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {copy.noResultsHeading}
                </h3>
                <p className="mt-2 max-w-md text-sm text-slate-400 leading-relaxed">
                  {copy.noResultsSubheading}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppLink({ lang })}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    data-analytics-page="smart_finder_no_results"
                    className="btn-whatsapp text-sm px-6 py-3.5"
                  >
                    <MessageSquare className="h-4 w-4 fill-white text-[#25D366]" />
                    <span>{copy.whatsappConsult}</span>
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3.5 text-sm font-extrabold text-white hover:bg-slate-700 transition-colors"
                  >
                    <span>{copy.browseAll}</span>
                    <ArrowRight className="h-4 w-4 text-sky-400" />
                  </Link>
                </div>

                {/* Offer Popular / Related Services */}
                <div className="mt-10 w-full">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                    {copy.browseAll}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {searchResponse.relatedSuggestions.map((sug) => (
                      <Link
                        key={sug.serviceSlug}
                        href={sug.quoteUrl}
                        className="flex flex-col items-start gap-1 rounded-2xl bg-slate-800/80 p-4 border border-slate-700/80 hover:border-sky-400/50 transition-all text-left"
                      >
                        <span className="text-xs font-black text-sky-400">
                          {sug.startPrice}
                        </span>
                        <span className="text-sm font-bold text-white">
                          {sug.title}
                        </span>
                        <span className="text-[11px] text-slate-400 line-clamp-2">
                          {sug.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
