"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";

export function StickyBookButton({ service, location }: { service?: string; location?: string }) {
  const t = useTranslations();
  const { lang } = useLang();
  return (
    <a
      href={getWhatsAppLink({ service, location, lang })}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics-page="sticky_book_button"
      {...(service ? { "data-analytics-service": service } : {})}
      className="fixed bottom-20 right-4 z-40 hidden rounded-full bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 md:inline-flex md:items-center md:gap-2"
    >
      <MessageCircle className="h-4 w-4" /> {t("stickyBook.label")}
    </a>
  );
}
