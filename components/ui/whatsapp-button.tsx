"use client";

import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const link = getWhatsAppLink();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating interactive card */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.4 }}
          className="bg-white rounded-2xl p-4 shadow-[0_10px_40px_rgba(2,31,68,0.08)] border border-slate-100 flex flex-col gap-2.5 max-w-[260px] pointer-events-auto"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-[#021F44] tracking-wide uppercase">WhatsApp Dispatch Desk</span>
          </div>
          <p className="text-xs text-[#4A607C] leading-normal font-medium">
            Same-day slots available in KL & Selangor. WhatsApp us for an instant, transparent quote!
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#22C55E] hover:bg-[#1eb050] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all duration-200 gap-2"
          >
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 fill-white text-[#22C55E]" />
              <span>Chat With Dispatch</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
