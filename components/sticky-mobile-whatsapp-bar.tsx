"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { trackPhoneCall, trackWhatsAppClick } from "@/lib/analytics";

export function StickyMobileWhatsAppBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-[0_-10px_30px_rgba(2,31,68,0.08)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick({ page: "sticky_mobile_bar" })}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-3 py-3 text-sm font-extrabold text-white"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          onClick={() => trackPhoneCall({ page: "sticky_mobile_bar" })}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#0284C7] px-3 py-3 text-sm font-extrabold text-white"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
      </div>
    </div>
  );
}
