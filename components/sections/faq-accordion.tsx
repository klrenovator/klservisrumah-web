"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { ChevronDown, HelpCircle, CheckCircle } from "lucide-react";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  const faqs = [
    {
      q: "What is your starting price for your home services?",
      a: "Our minor handyman jobs start from RM 80, basic plumbing repairs from RM 120, plaster ceiling repair from RM 180, and single room painting from RM 350. Every quote we issue is fixed and itemized before any actual work is commenced, so there are absolutely no hidden fees."
    },
    {
      q: "Are you a registered company in Malaysia?",
      a: `Yes, we are a fully registered and legal business operated directly under our parent company ${siteConfig.parentCompany} (SSM Registration Number: ${siteConfig.ssmFull}). All payments are made legally to our corporate banking accounts, and we issue official invoices/receipts.`
    },
    {
      q: "Do you offer warranties on your services?",
      a: "Absolutely! We offer up to 90 days written warranties on plaster ceilings and structural partitions, up to 5-year guarantees on full chemical waterproofing membrane works, and a 30-day warranty on plumbing joint seals and general handyman installations."
    },
    {
      q: "Can I get a same-day technician visit in KL or Selangor?",
      a: "Yes! For urgent bookings, such as active plumbing pipe leakage or sudden TV mounting requests, please contact us early (before 11:00 AM) and we will dispatch the nearest available technician in your suburb for a same-day slot."
    },
    {
      q: "Do you supply the paint, pipes, and anchors, or do I need to?",
      a: "We supply all standard professional materials: premium Nippon/Dulux paints, SIRIM PVC/PPR plumbing pipes, rust-proof plasterboards, steel wall anchors, and framing. If you have purchased specific aesthetic finishes (like custom luxury lights, taps, or shelves), we are happy to install those with precision."
    }
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-bold text-[#0781B2] tracking-widest uppercase bg-[#D2DEE7]/30 px-4 py-1.5 rounded-full">
            Helpdesk Support
          </span>
          <h2 className="text-3xl font-extrabold text-[#021F44] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#4A607C] leading-relaxed max-w-2xl">
            Quick, honest, and comprehensive answers to our clients' most common questions. Pre-optimized for instant AI Overviews (AIO) and snippet placements.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100/80 shadow-[0_2px_15px_rgba(2,31,68,0.01)] overflow-hidden transition-all duration-300"
              >
                {/* Trigger bar */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#021F44] hover:text-[#0781B2] transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-[#0781B2] shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4A607C] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0781B2]" : ""
                    }`}
                  />
                </button>

                {/* Content body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4A607C] leading-relaxed border-t border-slate-50 animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 flex gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="font-semibold text-[#4A607C]">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
