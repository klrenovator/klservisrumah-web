"use client";

import Link from "next/link";
import { useEffect } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
        <span className="rounded-full bg-rose-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-rose-600">Something went wrong</span>
        <h1 className="text-4xl font-extrabold text-[#075985]">This page hit a temporary issue</h1>
        <p className="text-base font-semibold leading-relaxed text-[#475569]">
          Please retry, or report the issue through WhatsApp so our team can help you reach the right service page.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={reset} className="rounded-xl bg-[#0284C7] px-5 py-3 text-sm font-extrabold text-white">Try again</button>
          <Link href="/services" className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-extrabold text-[#075985]">Services</Link>
          <a href={getWhatsAppLink({ service: "website issue report" })} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white">Report via WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
