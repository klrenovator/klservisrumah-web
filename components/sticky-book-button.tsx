"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function StickyBookButton({ service, location }: { service?: string; location?: string }) {
  return (
    <a
      href={getWhatsAppLink({ service, location })}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick({ service, location, page: "sticky_book_button" })}
      className="fixed bottom-20 right-4 z-40 hidden rounded-full bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 md:inline-flex md:items-center md:gap-2"
    >
      <MessageCircle className="h-4 w-4" /> Book This Service
    </a>
  );
}
