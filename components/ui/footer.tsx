"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle, Facebook } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { useTranslations } from "@/hooks/use-translations";

export function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations();

  // Top services for footer (limited to 8 for cleaner layout)
  const topServices = Object.values(servicesData).slice(0, 8);

  // Curated top areas for footer — mirrors KLRenovator area-linking density
  // and pushes internal-link equity from every page to the most valuable
  // location silos.
  const topAreas = [
    { slug: "kuala-lumpur", label: "Kuala Lumpur" },
    { slug: "petaling-jaya", label: "Petaling Jaya" },
    { slug: "subang-jaya", label: "Subang Jaya" },
    { slug: "shah-alam", label: "Shah Alam" },
    { slug: "puchong", label: "Puchong" },
    { slug: "klang", label: "Klang" },
    { slug: "cheras", label: "Cheras" },
    { slug: "ampang", label: "Ampang" }
  ];

  return (
    <footer className="bg-white text-slate-500 border-t border-slate-200">
      {/* Trust strip — surfaces the four core promises on every page */}
      <div className="bg-gradient-to-r from-sky-50 via-white to-emerald-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-[11px] sm:text-xs text-slate-700 font-semibold">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>Insured &amp; verified crew</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-sky-500 shrink-0" />
            <span>Fixed quote before work</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-amber-500 shrink-0" />
            <span>30-day to 10-year warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-violet-500 shrink-0" />
            <span>Same-day dispatch KL &amp; Selangor</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand Block */}
        <div className="space-y-4">
          <Link href="/" className="inline-block" aria-label="KL Servis Rumah homepage">
            <Logo size="sm" />
          </Link>
          <p className="text-xs leading-relaxed text-slate-500">{t("footer.tagline")}</p>

          <div className="flex items-center gap-2.5 pt-1 flex-wrap">
            <a href={siteConfig.links.whatsapp} target="_blank" rel="nofollow noopener noreferrer" aria-label="WhatsApp KL Servis Rumah" style={{ backgroundColor: "#25D366" }} className="p-2.5 rounded-lg text-white transition-opacity hover:opacity-85"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
            <a href={siteConfig.links.facebook} target="_blank" rel="nofollow noopener noreferrer" aria-label="Facebook KL Servis Rumah" style={{ backgroundColor: "#1877F2" }} className="p-2.5 rounded-lg text-white transition-opacity hover:opacity-85"><Facebook className="h-4 w-4" /></a>
            <a href={siteConfig.links.googleMaps} target="_blank" rel="nofollow noopener noreferrer" aria-label="Google Maps" style={{ backgroundColor: "#4285F4" }} className="p-2.5 rounded-lg text-white transition-opacity hover:opacity-85"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></a>
            <a href={siteConfig.links.googleBusiness} target="_blank" rel="nofollow noopener noreferrer" aria-label="Google Business Profile" style={{ backgroundColor: "#34A853" }} className="p-2.5 rounded-lg text-white transition-opacity hover:opacity-85"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></a>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-4">
          <p className="text-xs font-black uppercase tracking-wider text-slate-900">{t("nav.services")}</p>
          <ul className="space-y-2">
            {topServices.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium">
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors">
                {t("common.viewAll")} &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links + Price Guides */}
        <div className="space-y-4">
          <p className="text-xs font-black uppercase tracking-wider text-slate-900">{t("footer.explore")}</p>

          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-sky-600 mb-2">{t("nav.pricing")}</p>
            <ul className="space-y-1.5">
              <li><Link href="/pricing" className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium">{t("pricing.pageTitle")}</Link></li>
              <li><Link href="/services/painting" className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium">Painting Price Guide</Link></li>
              <li><Link href="/services/plumbing" className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium">Plumbing Price Guide</Link></li>
              <li><Link href="/services/waterproofing" className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium">Waterproofing Price Guide</Link></li>
            </ul>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{t("footer.explore")}</p>
            <ul className="space-y-1.5">
              <li><Link href="/areas" className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium">{t("nav.areas")}</Link></li>
              <li><Link href="/problems" className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium">{t("nav.problems")}</Link></li>
              <li><Link href="/blog" className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium">{t("nav.blog")}</Link></li>
              <li><Link href="/faq" className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium">{t("nav.faq")}</Link></li>
              <li><Link href="/about" className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium">{t("nav.about")}</Link></li>
            </ul>
          </div>
        </div>

        {/* Areas Block — pushes location silos and boosts local SEO signals */}
        <div className="space-y-4">
          <p className="text-xs font-black uppercase tracking-wider text-slate-900">{t("nav.areas")}</p>
          <ul className="space-y-2">
            {topAreas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/areas/${a.slug}`}
                  className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium"
                >
                  {a.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas" className="text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors">
                {t("common.viewAll")} &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Block */}
        <div className="space-y-4">
          <p className="text-xs font-black uppercase tracking-wider text-slate-900">{t("nav.contact")}</p>
          <ul className="space-y-3 text-xs">
            <li><a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 hover:text-sky-600 transition-colors font-medium"><Phone className="h-3.5 w-3.5 text-sky-500 shrink-0" />{siteConfig.phoneDisplay}</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-sky-600 transition-colors font-medium break-all"><Mail className="h-3.5 w-3.5 text-sky-500 shrink-0" />{siteConfig.email}</a></li>
            <li className="flex items-start gap-2.5"><MapPin className="h-3.5 w-3.5 text-sky-500 shrink-0 mt-0.5" /><span className="font-medium">KL & Selangor (Klang Valley)</span></li>
            <li className="flex items-start gap-2.5"><Clock className="h-3.5 w-3.5 text-sky-500 shrink-0 mt-0.5" /><div><p className="text-slate-700 font-bold">{t("footer.operatingHours")}</p><p className="text-slate-400">Emergency bookings accepted</p></div></li>
          </ul>
          <a href={siteConfig.links.whatsapp} target="_blank" rel="nofollow noopener noreferrer" style={{ backgroundColor: "#25D366" }} className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-white font-bold text-sm shadow-lg shadow-green-500/20 transition-all hover:shadow-xl hover:shadow-green-500/30">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Now
          </a>
        </div>
      </div>

      <hr className="border-slate-200/60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          {t("footer.copyright", { year })}
        </p>
        <div className="flex gap-6 text-xs text-slate-500">
          <Link href="/about" className="hover:text-sky-600 transition-colors font-medium">{t("nav.about")}</Link>
          <Link href="/contact" className="hover:text-sky-600 transition-colors font-medium">{t("common.bookService")}</Link>
          <Link href="/faq" className="hover:text-sky-600 transition-colors font-medium">{t("nav.faq")}</Link>
          <Link href="/pricing" className="hover:text-sky-600 transition-colors font-medium">{t("nav.pricing")}</Link>
        </div>
      </div>
    </footer>
  );
}
