"use client";

import React, { useMemo, useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function SimpleToolPage({ title, description, fields }: { title: string; description: string; fields: string[] }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const summary = useMemo(() => fields.map((field) => `${field}: ${values[field] || "not provided"}`).join("; "), [fields, values]);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <span className="rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">Free diagnostic tool</span>
        <h1 className="mt-4 text-3xl font-extrabold text-[#075985] sm:text-5xl">{title}</h1>
        <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">{description}</p>
        <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field} className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#075985]">
                {field}
                <input value={values[field] || ""} onChange={(event) => setValues((current) => ({ ...current, [field]: event.target.value }))} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#075985] outline-none focus:border-[#0EA5E9]" />
              </label>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-relaxed text-[#475569]">
            <strong className="text-[#075985]">Preliminary guidance:</strong> Based on your inputs, we recommend sending photos and measurements on WhatsApp so the dispatch desk can confirm scope and market-rate pricing. This tool is not a final quotation.
          </div>
          <a href={getWhatsAppLink({ service: `${title} — ${summary}` })} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white">
            Send tool result on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
