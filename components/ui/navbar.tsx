"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X, Phone, CheckCircle2 } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { SiteSearch } from "@/components/ui/site-search";
import { trackPhoneCall, trackWhatsAppClick } from "@/lib/analytics";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const waLink = getWhatsAppLink();

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className="bg-[#2563EB] text-white py-2 text-xs md:text-sm px-4 text-center font-medium border-b border-[#0EA5E9]/20 flex items-center justify-center gap-2">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#DBEAFE]" />
        <span>Market-rate Home Services in Kuala Lumpur & Selangor — Painting, Plumbing, Ceiling & Handyman</span>
      </div>

      <nav className={`w-full bg-white transition-all duration-300 border-b ${scrolled ? "py-3 shadow-[0_4px_20px_rgba(2,31,68,0.03)] border-slate-100" : "py-5 border-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="KL Servis Rumah homepage">
              <Image src={siteConfig.logoIcon} alt="" width={44} height={44} className="rounded-xl" priority />
              <div className="flex flex-col">
                <span className="text-[#1E40AF] font-extrabold text-lg sm:text-2xl tracking-tight leading-none flex items-center gap-1">
                  KL<span className="text-[#0EA5E9]">SERVIS</span>RUMAH<span className="text-[#0EA5E9] text-xs sm:text-sm font-bold">.MY</span>
                </span>
                <span className="text-[9px] sm:text-xs tracking-widest text-[#475569] font-semibold mt-1">
                  PAINTING • CEILING • PLUMBING • HANDYMAN
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`font-medium text-sm transition-colors duration-200 ${isActive ? "text-[#0EA5E9] font-semibold" : "text-[#475569] hover:text-[#1E40AF]"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <SiteSearch />
              <LanguageSwitcher />
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => trackPhoneCall({ page: pathname })}
                className="flex items-center gap-2 text-sm font-semibold text-[#1E40AF] hover:text-[#0EA5E9] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0EA5E9]" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ page: pathname })}
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Book Service
              </a>
            </div>

            <div className="flex lg:hidden items-center gap-3">
              <LanguageSwitcher />
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => trackPhoneCall({ page: pathname })}
                className="p-2.5 rounded-xl border border-slate-100 text-[#1E40AF] hover:text-[#0EA5E9]"
                aria-label="Call support"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl border border-slate-100 text-[#1E40AF] hover:bg-slate-50 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-6 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-3">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.label} href={item.href} className={`px-4 py-3 rounded-xl font-medium text-base transition-colors ${isActive ? "bg-[#0EA5E9]/10 text-[#0EA5E9]" : "text-[#475569] hover:bg-slate-50 hover:text-[#1E40AF]"}`}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <hr className="border-slate-100 my-1" />
            <div className="flex flex-col gap-3 px-4">
              <div className="text-xs text-[#475569] font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0EA5E9]" />
                <span>Operating Hours: {siteConfig.hours}</span>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ page: pathname, placement: "mobile_menu" })}
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-center font-semibold text-base py-3 rounded-xl transition-all duration-200 shadow-sm"
              >
                Book Via WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => trackPhoneCall({ page: pathname, placement: "mobile_menu" })}
                className="border border-[#1E40AF]/20 text-[#1E40AF] text-center font-semibold text-base py-3 rounded-xl transition-all duration-200 hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#0EA5E9]" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
