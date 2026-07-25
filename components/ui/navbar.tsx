"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Phone, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { AllPagesMenu } from "@/components/ui/all-pages-menu";
import { SiteSearch } from "@/components/ui/site-search";
import { trackPhoneCall, trackWhatsAppClick } from "@/lib/analytics";
import { Logo } from "@/components/ui/logo";
import { useTranslations } from "@/hooks/use-translations";

const navKeyMap: Record<string, string> = {
  "/": "nav.home",
  "/services": "nav.services",
  "/areas": "nav.areas",
  "/problems": "nav.problems",
  "/pricing": "nav.pricing",
  "/faq": "nav.faq",
  "/blog": "nav.blog",
  "/about": "nav.about",
  "/contact": "nav.contact"
};

function resolveNavKey(href: string): string {
  if (navKeyMap[href]) return navKeyMap[href];
  if (href.startsWith("/services")) return "nav.services";
  if (href.startsWith("/areas")) return "nav.areas";
  if (href.startsWith("/problems")) return "nav.problems";
  if (href.startsWith("/blog")) return "nav.blog";
  return "nav.home";
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waLink = getWhatsAppLink();

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-b border-slate-100" : "bg-white border-b border-slate-200"}`}>
      {/* Top Utility Bar — matches klrenovator.com pattern */}
      <div className="hidden sm:block bg-[#075985] text-white text-xs py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <span className="truncate font-black tracking-wider uppercase text-slate-200 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            {t("nav.topbar")}
          </span>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden md:inline-flex items-center gap-2 font-black tracking-wide text-slate-200 hover:text-[#0EA5E9] transition-colors"
            >
              <Phone className="h-3 w-3 text-[#0EA5E9]" /> {siteConfig.phoneDisplay}
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 font-black tracking-wide text-white hover:text-[#22c55e] transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5 text-[#22c55e]" /> WhatsApp Online
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative inline-block shrink-0" aria-label="KL Servis Rumah homepage">
          <Logo size="md" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/")) || (item.href !== "/" && pathname === item.href);
            const key = resolveNavKey(item.href);
            const label = t(key);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs font-black uppercase tracking-widest transition-colors px-3 py-2 ${isActive ? "text-[#0284C7]" : "text-slate-900 hover:text-[#0284C7]"}`}
              >
                {label}
                {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284C7]" />}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <SiteSearch />
          <LanguageSwitcher />
          <AllPagesMenu />
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick({ page: pathname })}
            className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {t("common.bookService")}
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2.5">
          <LanguageSwitcher />
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={() => trackPhoneCall({ page: pathname })}
            className="p-2.5 rounded-xl border border-slate-100 text-[#075985] hover:text-[#0EA5E9]"
            aria-label="Call support"
          >
            <Phone className="w-5 h-5" />
          </a>
          <AllPagesMenu />
        </div>
      </nav>
    </header>
  );
}
