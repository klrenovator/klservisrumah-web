"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { AllPagesMenu } from "@/components/ui/all-pages-menu";
import { Logo } from "@/components/ui/logo";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";
import { getLocalizedService } from "@/lib/service-i18n";

const PRIMARY_LINKS = [
  { href: "/", key: "nav.home" },
  { href: "/pricing", key: "nav.pricing" },
  { href: "/areas", key: "nav.areas" },
  { href: "/blog", key: "nav.blog" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();
  const { lang } = useLang();
  const waLink = getWhatsAppLink();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setServicesOpen(false); }, [pathname]);

  const isServices = pathname === "/services" || pathname.startsWith("/services/");
  return <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-slate-100 bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur" : "border-b border-slate-200 bg-white"}`}>
    <div className="hidden bg-[#075985] py-2 text-xs text-white sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <span className="flex items-center gap-1.5 truncate font-black uppercase tracking-wider text-slate-200"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22c55e]" />{t("nav.topbar")}</span>
        <div className="hidden items-center gap-6 md:flex"><a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 font-black text-slate-200 transition hover:text-sky-300"><Phone className="h-3 w-3 text-sky-300" />{siteConfig.phoneDisplay}</a><a href={waLink} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 font-black transition hover:text-[#22c55e]"><MessageSquare className="h-3.5 w-3.5 text-[#22c55e]" />WhatsApp Online</a></div>
      </div>
    </div>
    <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <Link href="/" className="shrink-0" aria-label="KL Servis Rumah homepage"><Logo size="md" /></Link>
      <div className="hidden items-center gap-1 lg:flex">
        {PRIMARY_LINKS.slice(0, 1).map(item => <NavLink key={item.href} href={item.href} active={pathname === item.href} label={t(item.key)} />)}
        <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
          <button type="button" onClick={() => setServicesOpen(value => !value)} className={`relative inline-flex items-center gap-1 px-3 py-2 text-xs font-black uppercase tracking-widest transition-colors ${isServices ? "text-[#0284C7]" : "text-slate-900 hover:text-[#0284C7]"}`} aria-expanded={servicesOpen}>{t("nav.services")}<ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />{isServices && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284C7]" />}</button>
          {servicesOpen && <div className="absolute left-0 top-full mt-2 w-[620px] rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_18px_50px_rgba(2,31,68,0.15)]">
            <div className="mb-2 flex items-center justify-between px-2"><span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">All services</span><Link href="/services" className="text-xs font-bold text-[#0284C7] hover:text-[#075985]">View all services</Link></div>
            <div className="grid grid-cols-2 gap-1">{Object.values(servicesData).map(source => { const service = getLocalizedService(source, lang); return <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-[#0284C7]">{service.title}</Link>; })}</div>
          </div>}
        </div>
        {PRIMARY_LINKS.slice(1).map(item => <NavLink key={item.href} href={item.href} active={pathname === item.href || pathname.startsWith(`${item.href}/`)} label={t(item.key)} />)}
      </div>
      <div className="hidden items-center gap-3 lg:flex"><LanguageSwitcher /><a href={waLink} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#0284C7] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0369A1] hover:shadow-md">{t("common.bookService")}</a></div>
      <div className="flex items-center gap-2.5 lg:hidden"><LanguageSwitcher /><a href={`tel:${siteConfig.phone}`} className="rounded-xl border border-slate-200 p-2.5 text-[#075985] transition hover:text-[#0EA5E9]" aria-label="Call support"><Phone className="h-5 w-5" /></a><AllPagesMenu /></div>
    </nav>
  </header>;
}
function NavLink({ href, active, label }: { href: string; active: boolean; label: string }) { return <Link href={href} className={`relative px-3 py-2 text-xs font-black uppercase tracking-widest transition-colors ${active ? "text-[#0284C7]" : "text-slate-900 hover:text-[#0284C7]"}`}>{label}{active && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284C7]" />}</Link>; }
