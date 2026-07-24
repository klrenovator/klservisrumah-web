import React from "react";

export function BeforeAfterSlider({ title = "Before / after proof", beforeLabel = "Before", afterLabel = "After" }: { title?: string; beforeLabel?: string; afterLabel?: string }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xs">
      <h3 className="mb-4 text-lg font-extrabold text-[#075985]">{title}</h3>
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-100">
        <div className="flex min-h-40 items-center justify-center bg-slate-100 p-4 text-center text-xs font-extrabold uppercase tracking-widest text-slate-500">
          {beforeLabel}<br />Photo placeholder
        </div>
        <div className="flex min-h-40 items-center justify-center bg-[#E0F2FE] p-4 text-center text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
          {afterLabel}<br />Photo placeholder
        </div>
      </div>
      <p className="mt-3 text-[11px] font-semibold leading-relaxed text-[#475569]">
        Real project photos should replace these placeholders once the business owner provides approved before/after media.
      </p>
    </div>
  );
}
