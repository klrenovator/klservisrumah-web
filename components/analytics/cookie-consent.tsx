"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/lang-context";
import {
  ANALYTICS_CONSENT_EVENT,
  ANALYTICS_CONSENT_KEY,
  OPEN_CONSENT_SETTINGS_EVENT,
  type AnalyticsConsent
} from "@/lib/consent";

const copy = {
  en: {
    title: "Your privacy choices",
    body: "We use essential storage for site functions. With your permission, Google Analytics helps us understand visits and lead actions such as WhatsApp, calls and quote requests. Analytics is off until you accept.",
    accept: "Accept analytics",
    reject: "Essential only",
    privacy: "Read Privacy Notice"
  },
  ms: {
    title: "Pilihan privasi anda",
    body: "Kami menggunakan storan penting untuk fungsi laman. Dengan izin anda, Google Analytics membantu kami memahami lawatan dan tindakan prospek seperti WhatsApp, panggilan dan permintaan sebut harga. Analitik dimatikan sehingga anda menerima.",
    accept: "Terima analitik",
    reject: "Penting sahaja",
    privacy: "Baca Notis Privasi"
  },
  zh: {
    title: "您的隐私选择",
    body: "网站功能会使用必要存储。经您同意后，Google Analytics 可帮助我们了解访问及 WhatsApp、电话和报价申请等咨询行为。您接受之前，分析功能保持关闭。",
    accept: "接受分析",
    reject: "仅必要功能",
    privacy: "阅读隐私声明"
  }
} as const;

export function CookieConsent() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const text = copy[lang] ?? copy.en;
  const privacyPath = lang === "ms" ? "/ms/notis-privasi" : lang === "zh" ? "/zh/yin-si-sheng-ming" : "/privacy";

  useEffect(() => {
    try {
      setOpen(window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === null);
    } catch {
      // If browser storage is blocked, keep optional analytics disabled.
      setOpen(false);
    }
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_SETTINGS_EVENT, reopen);
  }, []);

  const choose = (choice: AnalyticsConsent) => {
    let storedChoice = choice;
    try {
      window.localStorage.setItem(ANALYTICS_CONSENT_KEY, choice);
    } catch {
      // A blocked storage API cannot persist consent, so analytics remains off.
      storedChoice = "denied";
    }
    window.dispatchEvent(new CustomEvent<AnalyticsConsent>(ANALYTICS_CONSENT_EVENT, { detail: storedChoice }));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <section
      className="fixed inset-x-3 bottom-[calc(7.25rem+env(safe-area-inset-bottom))] z-[95] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl md:bottom-5"
      role="dialog"
      aria-live="polite"
      aria-label={text.title}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="text-base font-extrabold text-[#075985]">{text.title}</h2>
          <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-600">{text.body}</p>
          <Link href={privacyPath} className="mt-2 inline-block text-xs font-bold text-[#0284C7] underline underline-offset-2">
            {text.privacy}
          </Link>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button type="button" onClick={() => choose("denied")} className="rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-extrabold text-slate-700 hover:bg-slate-50">
            {text.reject}
          </button>
          <button type="button" onClick={() => choose("granted")} className="rounded-xl bg-[#075985] px-4 py-2.5 text-xs font-extrabold text-white hover:bg-[#0369A1]">
            {text.accept}
          </button>
        </div>
      </div>
    </section>
  );
}
