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

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <Logo size="sm" />
            </Link>
            <p className="text-sm text-[#475569] leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex flex-col gap-2.5 mt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#075985] font-semibold bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#0EA5E9]" />
                <span>{t("home.trustBadges.items.insured")}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#075985] font-semibold bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>{t("home.trustBadges.items.verified")}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-[#075985] uppercase tracking-wider">
              {t("nav.services")}
            </h3>
            <ul className="flex flex-col gap-3">
              {Object.values(servicesData).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-[#475569] hover:text-[#0EA5E9] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]/40" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-[#0EA5E9] font-semibold hover:underline">
                  {t("common.viewAll")} &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-[#075985] uppercase tracking-wider">
              {t("footer.explore")}
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/contact", key: "common.bookService" },
                { href: "/pricing", key: "nav.pricing" },
                { href: "/faq", key: "nav.faq" },
                { href: "/blog", key: "nav.blog" },
                { href: "/about", key: "nav.about" },
                { href: "/projects", key: "common.viewAll" }
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#475569] hover:text-[#0EA5E9] transition-colors">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-[#075985] uppercase tracking-wider">
              {t("nav.contact")}
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                <span className="text-sm text-[#475569] leading-relaxed">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-[#475569] hover:text-[#075985] font-semibold transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-[#475569] hover:text-[#075985] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                <span className="text-sm text-[#475569]">{t("footer.operatingHours")}</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-200/60 my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-xs text-[#475569]">
            {t("footer.copyright", { year })}
          </p>
          <div className="flex gap-6 text-xs text-[#475569]">
            <Link href="/about" className="hover:text-[#075985] transition-colors">{t("nav.about")}</Link>
            <Link href="/contact" className="hover:text-[#075985] transition-colors">{t("common.bookService")}</Link>
            <Link href="/faq" className="hover:text-[#075985] transition-colors">{t("nav.faq")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
