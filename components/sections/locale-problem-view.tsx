"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, MessageCircle } from "lucide-react";
import { useLang } from "@/context/lang-context";
import type { ProblemDetail } from "@/config/problem-data";
import type { ServiceDetail } from "@/config/services-data";
import { getLocalizedProblem } from "@/lib/problem-i18n";
import { getLocalizedService } from "@/lib/service-i18n";
import { getWhatsAppLink } from "@/lib/whatsapp";

type LocaleProblemViewProps = {
  problem: ProblemDetail;
  service: ServiceDetail;
};

const copy = {
  en: { causes: "Common causes", solutions: "Professional solutions", whenToCall: "When to call a pro", related: "Related service", relatedBody: (title: string) => `This problem usually connects to ${title}. Review service scope, pricing, warranty, and process before booking.`, view: "View", faqs: "FAQs", needFixed: "Need this fixed?", needFixedBody: "Send photos and a short video if safe. We confirm a fixed-price quote before dispatch.", whatsapp: "WhatsApp Diagnosis", estimate: "Estimated professional fix:", urgency: "Urgency", headingSuffix: "— Causes, Fixes & Cost in KL" },
  ms: { causes: "Punca biasa", solutions: "Penyelesaian profesional", whenToCall: "Bila perlu hubungi pakar", related: "Perkhidmatan berkaitan", relatedBody: (title: string) => `Masalah ini biasanya berkaitan dengan ${title}. Semak skop perkhidmatan, harga, jaminan, dan proses sebelum menempah.`, view: "Lihat", faqs: "Soalan Lazim", needFixed: "Perlu dibaiki?", needFixedBody: "Hantar foto dan video pendek jika selamat. Kami sahkan sebut harga tetap sebelum penghantaran.", whatsapp: "Diagnosis WhatsApp", estimate: "Anggaran pembaikan profesional:", urgency: "Kesegeraan", headingSuffix: "— Punca, Cara Baiki & Kos di KL" },
  zh: { causes: "常见原因", solutions: "专业解决方案", whenToCall: "何时应联系专业人员", related: "相关服务", relatedBody: (title: string) => `此问题通常与${title}相关。预约前请先了解服务范围、价格、保修与流程。`, view: "查看", faqs: "常见问题", needFixed: "需要维修吗？", needFixedBody: "如安全的话，请发送照片和简短视频。我们会在派工前确认固定价报价。", whatsapp: "WhatsApp 诊断", estimate: "专业维修预估费用：", urgency: "紧急程度", headingSuffix: "— 原因、修复方法与吉隆坡费用" }
} as const;

export function LocaleProblemView({ problem, service }: LocaleProblemViewProps) {
  const { lang } = useLang();
  const localizedProblem = getLocalizedProblem(problem, lang);
  const localizedService = getLocalizedService(service, lang);
  const t = copy[lang];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <article className="lg:col-span-8 flex flex-col gap-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-rose-600">
              <AlertTriangle className="h-4 w-4" /> {t.urgency}: {localizedProblem.urgency}
            </span>
            {/* The problem title already reads as a noun phrase ("Peeling Paint in
                Malaysian Homes"), so prefixing "Why Is My …?" produced broken
                grammar on all 44 problem pages. A trailing qualifier keeps the
                primary keyword first — which is also what Google weights most. */}
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#075985] sm:text-5xl text-balance">
              {`${localizedProblem.title} ${t.headingSuffix}`}
            </h1>
            <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">{localizedProblem.symptom}</p>
            <p className="mt-3 text-sm font-extrabold text-[#0EA5E9]">{t.estimate} {localizedProblem.costRange}</p>
          </div>

          <Section title={t.causes} items={localizedProblem.causes} />
          <Section title={t.solutions} items={localizedProblem.solutions} />
          <Section title={t.whenToCall} items={localizedProblem.whenToCall} />

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
            <h2 className="text-2xl font-extrabold text-[#075985]">{t.related}</h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">{t.relatedBody(localizedService.title)}</p>
            <Link href={`/services/${service.slug}`} className="mt-5 inline-flex rounded-xl bg-[#0284C7] px-5 py-3 text-sm font-extrabold text-white">{t.view} {localizedService.title}</Link>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
            <h2 className="mb-5 text-2xl font-extrabold text-[#075985]">{t.faqs}</h2>
            <div className="space-y-4">
              {localizedProblem.faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl bg-slate-50 p-4">
                  <h3 className="font-extrabold text-[#075985]">{faq.q}</h3>
                  <p className="mt-2 text-sm font-semibold text-[#475569]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 rounded-3xl bg-[#0284C7] p-6 text-white shadow-xl">
            <h2 className="text-2xl font-extrabold">{t.needFixed}</h2>
            <p className="mt-2 text-sm font-semibold text-blue-50">{t.needFixedBody}</p>
            <a href={getWhatsAppLink({ service: localizedProblem.title })} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white">
              <MessageCircle className="h-4 w-4" /> {t.whatsapp}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
      <h2 className="mb-5 text-2xl font-extrabold text-[#075985]">{title}</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-[#475569]">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />{item}
          </div>
        ))}
      </div>
    </div>
  );
}
