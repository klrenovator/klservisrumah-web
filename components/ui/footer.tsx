"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle } from "lucide-react";
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
            <a href={siteConfig.links.facebook} target="_blank" rel="nofollow noopener noreferrer" aria-label="Facebook KL Servis Rumah" style={{ backgroundColor: "#1877F2" }} className="p-2.5 rounded-lg text-white transition-opacity hover:opacity-85"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg></a>
            <a href={siteConfig.links.instagram} target="_blank" rel="nofollow noopener noreferrer" aria-label="Instagram KL Servis Rumah" style={{ backgroundColor: "#E4405F" }} className="p-2.5 rounded-lg text-white transition-opacity hover:opacity-85"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.399 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg></a>
            <a href={siteConfig.links.googleBusiness} target="_blank" rel="nofollow noopener noreferrer" aria-label="Google Business Profile KL Servis Rumah" style={{ backgroundColor: "#4285F4" }} className="p-2.5 rounded-lg text-white transition-opacity hover:opacity-85"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg></a>
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
