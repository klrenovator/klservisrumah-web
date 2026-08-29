"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";
import { serviceNavBySlug, getLocalizedServiceNav } from "@/config/service-nav.generated";
import { areaNavBySlug, getLocalizedAreaName } from "@/config/area-nav.generated";

/**
 * Derive booking context from the current path so the single global float
 * pre-fills the right service/area on the pages that have one:
 *   /services/<slug> and /services/<slug>/<sub>  → service
 *   /areas/<slug>                                → location
 * This replaces the old per-page mounts (audit P4-05: the float was absent on
 * pricing/tools/problems/areas/blog — the highest-intent pages) and keeps the
 * desktop float singular per viewport (audit P4-03: WhatsApp desk + book
 * button used to stack on service pages).
 */
function usePathContext(): { service?: string; location?: string } {
  const pathname = usePathname() ?? "";
  const { lang } = useLang();
  const segments = pathname.split("/").filter(Boolean);
  // Strip a leading locale segment (ms/zh trees share the same URL shapes).
  if (segments[0] === "ms" || segments[0] === "zh") segments.shift();

  if (segments[0] === "services" && segments[1]) {
    const source = serviceNavBySlug[segments[1]];
    return source ? { service: getLocalizedServiceNav(source, lang).title } : {};
  }
  if (segments[0] === "areas" && segments[1]) {
    const area = areaNavBySlug[segments[1]];
    return area ? { location: getLocalizedAreaName(area, lang) } : {};
  }
  return {};
}

export function StickyBookButton({ service, location }: { service?: string; location?: string }) {
  const t = useTranslations();
  const { lang } = useLang();
  const pathContext = usePathContext();
  const serviceLabel = service ?? pathContext.service;
  const locationLabel = location ?? pathContext.location;

  return (
    <a
      href={getWhatsAppLink({ service: serviceLabel, location: locationLabel, lang })}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics-page="sticky_book_button"
      {...(serviceLabel ? { "data-analytics-service": serviceLabel } : {})}
      className="fixed bottom-20 right-4 z-40 hidden rounded-full bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 md:inline-flex md:items-center md:gap-2"
    >
      <MessageCircle className="h-4 w-4" /> {t("stickyBook.label")}
    </a>
  );
}
