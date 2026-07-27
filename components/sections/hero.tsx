"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import { ArrowRight, ShieldCheck, MessageSquare, Phone, Star } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useTranslations } from "@/hooks/use-translations";

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
    alt: "Certified Malaysian plumber fixing a modern chrome kitchen tap in a Kuala Lumpur home"
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

export function Hero() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);
  const t = useTranslations();

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = selectedService
      ? servicesData[selectedService]?.title
      : t("common.bookService");
    const waLink = getWhatsAppLink({ service: serviceName, location: selectedArea });
    window.open(waLink, "_blank");
  };

  const setSlide = (next: number) => {
    if (next === current) return;
    setPrevious(current);
    setVisible(false);
    setCurrent(next);
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % HERO_IMAGES.length;
        setPrevious(prev);
        setVisible(false);
        return next;
      });
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const currentImage = HERO_IMAGES[current];
  const previousImage = previous !== null ? HERO_IMAGES[previous] : null;

  return (
    <section
      className="relative w-full min-h-[calc(100svh-5rem)] sm:min-h-[calc(100svh-7rem)] flex items-center overflow-hidden bg-slate-950"
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
            quality={85}
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
          quality={85}
          onLoad={() => setVisible(true)}
        />
        {/* Layered overlays for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30 z-10" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {HERO_IMAGES.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setSlide(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/35 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}: ${img.alt}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-default relative z-20 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-white">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-white/90">
                4.9 / 5 · {siteConfig.reviewCount}+ Google reviews
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
                "Insured & verified",
                "Price confirmed first",
                "Same-day available",
                "30-day to 10-year warranty"
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
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
              >
                <MessageSquare className="w-5 h-5 fill-white text-[#22C55E]" />
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

          {/* Right conversion box */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/40 flex flex-col gap-6">
              <div className="flex flex-col gap-1.5 border-b border-slate-100 pb-5">
                <span className="eyebrow">Instant dispatch · Segera · 即时</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#075985] tracking-tight">
                  Get Your Quote in 60 Seconds
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] font-medium">
                  Dapatkan sebut harga dalam 60 saat · 60秒内获得报价
                </p>
              </div>

              <form onSubmit={handleBook} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-extrabold text-[#075985] uppercase tracking-wider">
                    What service do you need? · Perkhidmatan · 服务
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    required
                    className="w-full bg-slate-50 hover:bg-slate-100/50 text-[#075985] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0EA5E9] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-[#475569]">
                      Select a service...
                    </option>
                    {Object.values(servicesData).map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title} (From {service.startPrice})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-extrabold text-[#075985] uppercase tracking-wider">
                    Your Location · Lokasi · 位置 (KL &amp; Selangor)
                  </label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    required
                    className="w-full bg-slate-50 hover:bg-slate-100/50 text-[#075985] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0EA5E9] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-[#475569]">
                      Select your area...
                    </option>
                    {siteConfig.areas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full text-base mt-2">
                  <span>Get My Instant Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs text-[#475569] font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>No upfront deposits · Bayar selepas siap · 完工后付款</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
