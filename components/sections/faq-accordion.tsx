"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { useLang } from "@/context/lang-context";
import { faqsByLang } from "@/config/hub-faqs";

const headerCopy = {
  en: { eyebrow: "Helpdesk Support", title: "Home Service Questions, Answered", body: "Straight answers on pricing, warranty, insurance, scheduling and site preparation — from the team that does the work." },
  ms: { eyebrow: "Sokongan Helpdesk", title: "Soalan Perkhidmatan Rumah, Dijawab", body: "Jawapan jujur tentang harga, jaminan, insurans, penjadualan dan persediaan tapak — daripada pasukan yang melakukan kerja itu sendiri." },
  zh: { eyebrow: "客服支持", title: "家居服务问题解答", body: "关于价格、保修、保险、排期与施工前准备的诚实解答——由实际施工团队提供。" }
} as const;

/**
 * Hub FAQ block for `/faq`, `/ms/soalan-lazim` and `/zh/chang-jian-wen-ti`.
 *
 * Answers are always in the HTML (`<details>`), never gated on client state
 * (audit P5-02 / P3-11). Language follows the tree via `useLang()`.
 */
export function FAQAccordion() {
  const { lang } = useLang();
  const faqs = faqsByLang[lang] ?? faqsByLang.en;
  const header = headerCopy[lang] ?? headerCopy.en;

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
            {header.eyebrow}
          </span>
          <h2 className="text-3xl font-extrabold text-[#075985] tracking-tight">
            {header.title}
          </h2>
          <p className="text-base text-[#475569] leading-relaxed max-w-2xl">
            {header.body}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const panelId = `faq-panel-${idx}`;
            return (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl border border-slate-100/80 shadow-[0_2px_15px_rgba(2,31,68,0.01)] overflow-hidden"
              >
                <summary
                  className="w-full cursor-pointer list-none text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#075985] hover:text-[#0EA5E9] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0EA5E9] focus-visible:rounded-xl"
                  aria-controls={panelId}
                  id={`faq-trigger-${idx}`}
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-[#0EA5E9] shrink-0" aria-hidden="true" />
                    <span>{faq.q}</span>
                  </div>
                  <span
                    className="w-5 h-5 text-[#475569] shrink-0 text-xl leading-none transition-transform duration-300 group-open:rotate-45 group-open:text-[#0EA5E9]"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div
                  id={panelId}
                  className="faq-answer px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-50"
                >
                  <p className="font-semibold text-[#475569] bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                    {faq.a}
                  </p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
