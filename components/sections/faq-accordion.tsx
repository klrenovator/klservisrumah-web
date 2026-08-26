"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, CheckCircle } from "lucide-react";
import { useLang } from "@/context/lang-context";

type Faq = { q: string; a: string };

const faqsByLang: Record<"en" | "ms" | "zh", Faq[]> = {
  en: [
    {
      q: "What is your starting price for your home services?",
      a: "Our minor handyman jobs start from RM 80, basic plumbing repairs from RM 120, plaster ceiling repair from RM 180, and single room painting from RM 450. Every quote we issue is fixed and itemized before any actual work is commenced, so there are absolutely no hidden fees."
    },
    {
      q: "Are you an established local company in Malaysia?",
      a: "Yes. KL Servis Rumah operates as an established local company with fully insured work boundaries, transparent quotations, official invoices, and background-verified tradesmen."
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
  ],
  ms: [
    {
      q: "Apakah harga permulaan untuk perkhidmatan rumah anda?",
      a: "Kerja tukang kecil kami bermula dari RM 80, pembaikan paip asas dari RM 120, pembaikan siling plaster dari RM 180, dan pengecatan satu bilik dari RM 450. Setiap sebut harga yang kami keluarkan adalah tetap dan terperinci sebelum sebarang kerja sebenar bermula, jadi tiada sebarang yuran tersembunyi."
    },
    {
      q: "Adakah anda syarikat tempatan yang mantap di Malaysia?",
      a: "Ya. KL Servis Rumah beroperasi sebagai syarikat tempatan yang mantap dengan skop kerja diinsuranskan sepenuhnya, sebut harga telus, invois rasmi, dan tukang yang disaring latar belakang."
    },
    {
      q: "Adakah anda menawarkan jaminan untuk perkhidmatan anda?",
      a: "Sudah tentu! Kami menawarkan jaminan bertulis sehingga 90 hari untuk siling plaster dan partition struktur, jaminan sehingga 5 tahun untuk kerja membran kalis air kimia penuh, dan jaminan 30 hari untuk pengedap sendi paip dan pemasangan tukang am."
    },
    {
      q: "Bolehkah saya mendapatkan lawatan juruteknik pada hari yang sama di KL atau Selangor?",
      a: "Ya! Untuk tempahan segera, seperti kebocoran paip aktif atau permintaan pemasangan TV mengejut, sila hubungi kami awal (sebelum 11:00 pagi) dan kami akan menghantar juruteknik terdekat yang tersedia di pinggir bandar anda untuk slot hari yang sama."
    },
    {
      q: "Adakah anda membekalkan cat, paip, dan sauh, atau saya perlu sendiri?",
      a: "Kami membekalkan semua bahan profesional standard: cat premium Nippon/Dulux, paip SIRIM PVC/PPR, papan plaster tahan karat, sauh dinding keluli, dan rangka. Jika anda telah membeli kemasan estetik khusus (seperti lampu mewah khas, paip air, atau rak), kami sedia memasangnya dengan ketepatan."
    }
  ],
  zh: [
    {
      q: "你们家庭服务的起价是多少？",
      a: "我们的小型维修工作从 RM 80 起，基础水管维修从 RM 120 起，石膏天花板维修从 RM 180 起，单间房油漆从 RM 450 起。我们提供的每份报价在实际施工前都是固定且逐项列明的，因此绝无任何隐藏费用。"
    },
    {
      q: "你们是马来西亚的正规本地公司吗？",
      a: "是的。KL Servis Rumah 作为一家正规本地公司运营，提供全面投保的工作范围、透明报价、正式发票以及经过背景审查的技术人员。"
    },
    {
      q: "你们的服务提供保修吗？",
      a: "当然！我们为石膏天花板和结构隔墙提供长达 90 天的书面保修，为完整的化学防水层工程提供长达 5 年的保证，并为水管接头密封与一般维修安装提供 30 天保修。"
    },
    {
      q: "我能在吉隆坡或雪兰莪获得当天技术员上门服务吗？",
      a: "可以！对于紧急预约，例如正在漏水的管道或突发的电视安装需求，请尽早（上午 11:00 前）联系我们，我们会为您派遣所在区域最近的可用技术员，安排当天时段。"
    },
    {
      q: "你们提供油漆、管道与锚固件，还是需要我自备？",
      a: "我们提供所有标准专业材料：优质 Nippon/Dulux 涂料、SIRIM 认证 PVC/PPR 水管、防锈石膏板、钢制墙壁锚固件与框架。如果您已购买特定的美观饰面（如定制豪华灯具、水龙头或置物架），我们也乐意为您精准安装。"
    }
  ]
};

const headerCopy = {
  en: { eyebrow: "Helpdesk Support", title: "Home Service Questions, Answered", body: "Straight answers on pricing, warranty, insurance, scheduling and site preparation — from the team that does the work." },
  ms: { eyebrow: "Sokongan Helpdesk", title: "Soalan Perkhidmatan Rumah, Dijawab", body: "Jawapan jujur tentang harga, jaminan, insurans, penjadualan dan persediaan tapak — daripada pasukan yang melakukan kerja itu sendiri." },
  zh: { eyebrow: "客服支持", title: "家居服务问题解答", body: "关于价格、保修、保险、排期与施工前准备的诚实解答——由实际施工团队提供。" }
} as const;

export function FAQAccordion() {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = faqsByLang[lang];
  const header = headerCopy[lang];

  const toggle = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-slate-100/80 shadow-[0_2px_15px_rgba(2,31,68,0.01)] overflow-hidden transition-all duration-300"
              >
                {/* Trigger bar */}
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    id={`faq-trigger-${idx}`}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#075985] hover:text-[#0EA5E9] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0EA5E9] focus-visible:rounded-xl"
                  >
                    <div className="flex items-center gap-3.5">
                      <HelpCircle className="w-5 h-5 text-[#0EA5E9] shrink-0" aria-hidden="true" />
                      <span>{faq.q}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#475569] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#0EA5E9]" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {/* Content body */}
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={`faq-trigger-${idx}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-50 animate-in fade-in slide-in-from-top-4 duration-200"
                  >
                    <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 flex gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="font-semibold text-[#475569]">{faq.a}</p>
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
