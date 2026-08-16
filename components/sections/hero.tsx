"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getLocalizedServiceNav, serviceNavBySlug, serviceNavList } from "@/config/service-nav.generated";
import { ArrowRight, ShieldCheck, MessageSquare, Phone, Star } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";
import { HeroSearchBar } from "@/components/ui/hero-search-bar";

// Photographic hero slideshow — matches the KLRenovator gold-standard
// visual language while keeping the KL Servis Rumah quote form.
// Every image is optimised for LCP: eager+priority on the first slide,
// lazy on the rest, blur placeholder to prevent layout shift.
const HERO_IMAGES = [
  {
    src: "/hero/home-services-painters-kl.jpg",
    alt: "Professional Malaysian house painter in KL Servis Rumah uniform painting a modern condo living room in Kuala Lumpur"
  },
  {
    src: "/hero/home-services-plumbing-kl.jpg",
    alt: "Malaysian plumber repairing a modern chrome kitchen tap in a Kuala Lumpur home"
  },
  {
    src: "/hero/home-services-waterproofing-kl.jpg",
    alt: "PU polyurethane grouting waterproofing on a bathroom ceiling by KL Servis Rumah technician"
  },
  {
    src: "/hero/home-services-handyman-kl.jpg",
    alt: "Handyman mounting a flat-screen TV on a Kuala Lumpur condo wall with a precision bracket"
  },
  {
    src: "/hero/home-services-ceiling-kl.jpg",
    alt: "Ceiling specialist installing a modern gypsum L-box ceiling with cove lighting in a KL condo"
  }
];

const HERO_IMAGE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px";
const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiA5Jz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB5MT0nMCcgeDI9JzEnIHkyPScxJz48c3RvcCBzdG9wLWNvbG9yPScjMDc1OTg1Jy8+PHN0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPScjMEVBNUU5Jy8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzknIGZpbGw9J3VybCgjZyknLz48L3N2Zz4=";

type QuoteBoxProps = {
  selectedService: string;
  selectedArea: string;
  onServiceChange: (value: string) => void;
  onAreaChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  variant: "desktop" | "mobile";
  lang: "en" | "ms" | "zh";
  t: (key: string, vars?: Record<string, string>) => string;
};

function QuoteBox({
  selectedService,
  selectedArea,
  onServiceChange,
  onAreaChange,
  onSubmit,
  variant,
  lang,
  t
}: QuoteBoxProps) {
  return (
    <div
      className={
        variant === "desktop"
          ? "flex flex-col gap-6 rounded-3xl border border-white/40 bg-white/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8"
          : "flex flex-col gap-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_18px_50px_rgba(2,31,68,0.10)] sm:p-8"
      }
    >
      <div className="flex flex-col gap-1.5 border-b border-slate-100 pb-5">
        <span className="eyebrow">{t("hero.eyebrow")}</span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#075985] tracking-tight">
          {t("hero.quoteTitle")}
        </h2>
      </div>

      <form onSubmit={onSubmit} data-lead-form={`hero-${variant}`} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor={`${variant}-service`} className="text-xs font-extrabold text-[#075985] uppercase tracking-wider">
            {t("hero.serviceLabel")}
          </label>
          <select
            id={`${variant}-service`}
            name="service"
            value={selectedService}
            onChange={(e) => onServiceChange(e.target.value)}
            required
            className="w-full bg-slate-50 hover:bg-slate-100/50 text-[#075985] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0EA5E9] focus:bg-white transition-all cursor-pointer"
          >
            <option value="" disabled className="text-[#475569]">
              {t("hero.selectService")}
            </option>
            {serviceNavList.map((sourceService) => {
              const service = getLocalizedServiceNav(sourceService, lang);
              return (
                <option key={service.slug} value={service.slug}>
                  {service.title} ({t("common.fromLabel")} {service.startPrice})
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${variant}-area`} className="text-xs font-extrabold text-[#075985] uppercase tracking-wider">
            {t("hero.locationLabel")}
          </label>
          <select
            id={`${variant}-area`}
            name="area"
            value={selectedArea}
            onChange={(e) => onAreaChange(e.target.value)}
            required
            className="w-full bg-slate-50 hover:bg-slate-100/50 text-[#075985] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0EA5E9] focus:bg-white transition-all cursor-pointer"
          >
            <option value="" disabled className="text-[#475569]">
              {t("hero.selectArea")}
            </option>
            {siteConfig.areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-primary w-full text-base mt-2">
          <span>{t("hero.getQuote")}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>

      <div className="flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs text-[#475569] font-semibold">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>{t("hero.noDeposit")}</span>
      </div>
    </div>
  );
}

export function Hero() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);
  const t = useTranslations();
  const { lang } = useLang();

  const handleBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const localizedSelectedService = selectedService
      ? serviceNavBySlug[selectedService]
        ? getLocalizedServiceNav(serviceNavBySlug[selectedService], lang).title
        : t("common.bookService")
      : t("common.bookService");
    const waLink = getWhatsAppLink({ service: localizedSelectedService, location: selectedArea, lang });
    window.open(waLink, "_blank");
  };

  const setSlide = (next: number) => {
    if (next === current) return;
    setPrevious(current);
    setVisible(false);
    setCurrent(next);
  };

  useEffect(() => {
    let id: number | null = null;
    const advance = () => {
      setCurrent((prev) => {
        const next = (prev + 1) % HERO_IMAGES.length;
        setPrevious(prev);
        setVisible(false);
        return next;
      });
    };
    const start = () => {
      if (id !== null) window.clearInterval(id);
      id = window.setInterval(advance, 6000);
    };
    const stop = () => {
      if (id !== null) {
        window.clearInterval(id);
        id = null;
      }
    };
    // Pause the slideshow while the tab is hidden — a background tab has no
    // visible audience, and each tick churns two React state updates plus an
    // image decode for nothing (battery/CPU on mobile).
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const currentImage = HERO_IMAGES[current];
  const previousImage = previous !== null ? HERO_IMAGES[previous] : null;
  const quoteBoxProps = {
    selectedService,
    selectedArea,
    onServiceChange: setSelectedService,
    onAreaChange: setSelectedArea,
    onSubmit: handleBook,
    lang,
    t
  };

  return (
    <>
      <section
        className="relative flex min-h-[calc(100svh-5rem)] w-full items-center overflow-hidden bg-slate-950 sm:min-h-[calc(100svh-7rem)]"
        aria-label="KL Servis Rumah hero"
      >
        {/* Background slideshow — only current + previous frames stay mounted.
            This preserves the cross-fade while preventing every hero asset from
            competing with the LCP image on first load. */}
        <div className="absolute inset-0 z-0">
          {previousImage ? (
            <Image
              key={`previous-${previous}`}
              src={previousImage.src}
              alt={previousImage.alt}
              fill
              sizes={HERO_IMAGE_SIZES}
              className="object-cover object-center opacity-100"
              loading="lazy"
              decoding="async"
              placeholder="blur"
              blurDataURL={HERO_BLUR}
              quality={65}
            />
          ) : null}
          <Image
            key={`current-${current}`}
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            priority={current === 0}
            loading={current === 0 ? "eager" : "lazy"}
            fetchPriority={current === 0 ? "high" : "auto"}
            sizes={HERO_IMAGE_SIZES}
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            quality={65}
            onLoad={() => setVisible(true)}
          />
          {/* Layered overlays for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30 z-10" />
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-1">
          {HERO_IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setSlide(i)}
              className="flex h-8 w-8 items-center justify-center rounded-full"
              aria-label={t("hero.slideAria", { n: i + 1, alt: img.alt })}
              aria-pressed={i === current}
            >
              <span
                aria-hidden="true"
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  i === current ? "w-8 bg-white" : "w-3 bg-white/35 hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="container-default relative z-20 py-14 pb-20 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 text-white">
              {/* Hero Search Bar - Prominent search bar for finding services */}
              <div className="w-full mb-4">
                <HeroSearchBar />
              </div>

              {/* Rating badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <div className="flex items-center gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-white/90">
                  4.9 / 5 · {t("hero.googleReviews", { count: String(siteConfig.reviewCount) })}
                </span>
              </div>

              {/* Main Heading — speakable target for AEO (Gemini/ChatGPT/Perplexity) */}
              <h1 className="hero-h1 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black uppercase tracking-tight leading-[1.05] text-white text-balance">
                {t("home.hero.heading1")}{" "}
                <br className="hidden sm:block" />
                <span className="text-sky-400">{t("home.hero.heading2")}</span>{" "}
                {t("home.hero.headingLocation")}
              </h1>

              {/* Locale-aware subline */}
              <p className="text-sm italic text-white/70 font-medium">
                {t("hero.subline")}
              </p>

              {/* Semantic Subtext Body Copy — targeted by speakable JSON-LD */}
              <p className="hero-subhead text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
                {t("home.hero.subhead")}
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  t("hero.chipInsured"),
                  t("hero.chipPrice"),
                  t("hero.chipSameDay"),
                  t("hero.chipWarranty")
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-semibold text-white/90 backdrop-blur-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
                <a
                  href={getWhatsAppLink({ lang })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base"
                >
                  <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>{t("home.cta.bookButton")}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm sm:text-base font-bold text-white transition-all hover:bg-white/20 backdrop-blur-md"
                >
                  <Phone className="w-4 h-4 text-sky-300" />
                  <span>{t("common.callUs")} {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right conversion box (desktop only to preserve the desktop hero layout) */}
            <div className="hidden w-full lg:col-span-5 lg:block">
              <QuoteBox {...quoteBoxProps} variant="desktop" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile quote card is intentionally placed after the hero image section,
          preventing the form from overlapping the photographic background. */}
      <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:hidden" aria-label={t("hero.quoteTitle")}>
        <div className="mx-auto max-w-xl">
          <QuoteBox {...quoteBoxProps} variant="mobile" />
        </div>
      </section>
    </>
  );
}
