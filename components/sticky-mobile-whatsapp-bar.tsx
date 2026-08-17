"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";

export function StickyMobileWhatsAppBar() {
  const t = useTranslations();
  const { lang } = useLang();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(2,31,68,0.08)] backdrop-blur-sm md:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={getWhatsAppLink({ lang })}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("common.bookWhatsAppAria")}
          data-analytics-page="sticky_mobile_bar"
          className="flex items-center justify-center gap-2 min-[430px]:gap-2.5 rounded-xl bg-[#25D366] px-3 min-[430px]:px-4 py-4 text-sm min-[430px]:text-base font-extrabold text-white shadow-[0_8px_20px_rgba(37,211,102,0.28)]"
        >
          <MessageCircle className="h-4 w-4 min-[430px]:h-5 min-[430px]:w-5" /> {t("common.bookWhatsApp")}
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          aria-label={t("common.callUsAria", { phone: siteConfig.phoneDisplay })}
          data-analytics-page="sticky_mobile_bar"
          className="flex items-center justify-center gap-2 min-[430px]:gap-2.5 rounded-xl bg-[#0284C7] px-3 min-[430px]:px-4 py-4 text-sm min-[430px]:text-base font-extrabold text-white shadow-[0_8px_20px_rgba(2,132,199,0.28)]"
        >
          <Phone className="h-4 w-4 min-[430px]:h-5 min-[430px]:w-5" /> {t("common.callUs")}
        </a>
      </div>
    </div>
  );
}
