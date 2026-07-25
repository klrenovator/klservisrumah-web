"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Phone } from "lucide-react";
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waLink = getWhatsAppLink();

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <nav className={`w-full bg-white transition-all duration-300 border-b ${scrolled ? "py-2.5 shadow-[0_4px_20px_rgba(2,31,68,0.03)] border-slate-100" : "py-4 border-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="group shrink-0" aria-label="KL Servis Rumah homepage">
              <Logo size="md" />
            </Link>

            <div className="hidden xl:flex items-center gap-6">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                const key = resolveNavKey(item.href);
                const label = t(key);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-medium text-sm transition-colors duration-200 ${isActive ? "text-[#0EA5E9] font-semibold" : "text-[#475569] hover:text-[#075985]"}`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <SiteSearch />
              <LanguageSwitcher />
              <AllPagesMenu />
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => trackPhoneCall({ page: pathname })}
                className="flex items-center gap-2 text-sm font-semibold text-[#075985] hover:text-[#0EA5E9] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0EA5E9]" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
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
          </div>
        </div>
      </nav>
    </header>
  );
}
