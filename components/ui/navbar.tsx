"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackPhoneCall, trackWhatsAppClick } from "@/lib/analytics";
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

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function HeaderWhatsAppActions({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const waLink = getWhatsAppLink();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open WhatsApp contact options"
        aria-expanded={open}
        className={
          compact
            ? "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_8px_22px_rgba(37,211,102,0.35)] ring-1 ring-[#128C7E]/20 transition hover:bg-[#1fb957] focus-visible:outline-[#128C7E]"
            : "inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_8px_22px_rgba(37,211,102,0.22)] transition hover:bg-[#1fb957] hover:shadow-[0_10px_26px_rgba(37,211,102,0.28)]"
        }
      >
        <WhatsAppIcon className={compact ? "h-6 w-6" : "h-4 w-4"} />
        {!compact && <span>WhatsApp</span>}
        {!compact && <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />}
      </button>
      {open && (
        <div className="absolute right-0 top-full z-[70] mt-2 w-60 overflow-hidden rounded-2xl border border-emerald-100 bg-white p-2 text-sm shadow-[0_18px_50px_rgba(2,31,68,0.18)] animate-in fade-in zoom-in-95 duration-150 transform-gpu">
          <a
            href={waLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
            onClick={() => {
              trackWhatsAppClick({ page: "header_whatsapp_menu" });
              setOpen(false);
            }}
            className="flex items-center gap-3 rounded-xl px-3 py-3 font-extrabold text-slate-700 transition hover:bg-emerald-50 hover:text-[#128C7E]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Message on WhatsApp</span>
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={() => {
              trackPhoneCall({ page: "header_whatsapp_menu" });
              setOpen(false);
            }}
            className="flex items-center gap-3 rounded-xl px-3 py-3 font-extrabold text-slate-700 transition hover:bg-emerald-50 hover:text-[#128C7E]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call us</span>
          </a>
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();
  const { lang } = useLang();
  const waLink = getWhatsAppLink();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setServicesOpen(false); }, [pathname]);

  const isServices = pathname === "/services" || pathname.startsWith("/services/");
  return <header className={`sticky top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-200 ${scrolled ? "border-b border-slate-100 bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm" : "border-b border-slate-200 bg-white"}`}>
    <div className="hidden bg-[#075985] py-2 text-xs text-white sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <span className="flex items-center gap-1.5 truncate font-black uppercase tracking-wider text-slate-200"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22c55e]" />{t("nav.topbar")}</span>
        <div className="hidden items-center gap-6 md:flex"><a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 font-black text-slate-200 transition hover:text-sky-300"><Phone className="h-3 w-3 text-sky-300" />{siteConfig.phoneDisplay}</a><a href={waLink} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 font-black transition hover:text-[#22c55e]"><WhatsAppIcon className="h-3.5 w-3.5 text-[#22c55e]" />WhatsApp Online</a></div>
      </div>
    </div>
    <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-1.5 min-[430px]:gap-3 px-2 min-[430px]:px-3 sm:px-6 lg:px-8">
      <Link href="/" className="shrink-0" aria-label="KL Servis Rumah homepage"><span className="sm:hidden"><Logo size="sm" priority={false} /></span><span className="hidden sm:inline"><Logo size="md" priority={false} /></span></Link>
      <div className="hidden items-center gap-1 lg:flex">
        {PRIMARY_LINKS.slice(0, 1).map(item => <NavLink key={item.href} href={item.href} active={pathname === item.href} label={t(item.key)} />)}
        <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
          <button type="button" onClick={() => setServicesOpen(value => !value)} className={`relative inline-flex items-center gap-1 px-3 py-2 text-xs font-black uppercase tracking-widest transition-colors ${isServices ? "text-[#0284C7]" : "text-slate-900 hover:text-[#0284C7]"}`} aria-expanded={servicesOpen}>{t("nav.services")}<ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />{isServices && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284C7]" />}</button>
          {servicesOpen && <div className="absolute left-0 top-full mt-2 w-[620px] rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_18px_50px_rgba(2,31,68,0.15)] animate-in fade-in zoom-in-95 duration-150 transform-gpu">
            <div className="mb-2 flex items-center justify-between px-2"><span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">{t("menu.services")}</span><Link href="/services" className="text-xs font-bold text-[#0284C7] hover:text-[#075985]">{t("common.viewAll")}</Link></div>
            <div className="grid grid-cols-2 gap-1">{Object.values(servicesData).map(source => { const service = getLocalizedService(source, lang); return <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-[#0284C7]">{service.title}</Link>; })}</div>
          </div>}
        </div>
        {PRIMARY_LINKS.slice(1).map(item => <NavLink key={item.href} href={item.href} active={pathname === item.href || pathname.startsWith(`${item.href}/`)} label={t(item.key)} />)}
      </div>
      <div className="hidden items-center gap-3 lg:flex"><LanguageSwitcher /><HeaderWhatsAppActions /></div>
      {/* Keep WhatsApp between the language selector and the all-pages menu on every phone size. */}
      <div className="flex shrink-0 items-center gap-1.5 min-[430px]:gap-3 lg:hidden"><LanguageSwitcher /><HeaderWhatsAppActions compact /><AllPagesMenu /></div>
    </nav>
  </header>;
}
function NavLink({ href, active, label }: { href: string; active: boolean; label: string }) { return <Link href={href} className={`relative px-3 py-2 text-xs font-black uppercase tracking-widest transition-colors ${active ? "text-[#0284C7]" : "text-slate-900 hover:text-[#0284C7]"}`}>{label}{active && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284C7]" />}</Link>; }
