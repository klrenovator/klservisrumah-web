import type { LocationPairBundleEntry } from "@/lib/location-bundles";

/** Useful, pair-specific planning copy shared by area, suburb and near-me views. */
export function LocationPairContent({ copy }: { copy: LocationPairBundleEntry }) {
  return (
    <section className="space-y-7" aria-label={copy.contextHeading}>
      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#075985]">{copy.contextHeading}</h2>
        <div className="mt-4 space-y-4">
          {copy.contextParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm font-medium leading-7 text-[#475569]">{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-sky-100 bg-sky-50/40 p-6 sm:p-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#075985]">{copy.scopeHeading}</h2>
        <p className="mt-3 text-sm font-medium leading-7 text-[#475569]">{copy.scopeIntro}</p>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {copy.scopeItems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white bg-white p-5">
              <h3 className="font-extrabold text-[#075985]">{item.title}</h3>
              <p className="mt-2 text-xs font-medium leading-6 text-[#475569]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#075985]">{copy.quoteHeading}</h2>
        <p className="mt-3 text-sm font-medium leading-7 text-[#475569]">{copy.quoteIntro}</p>
        <ul className="mt-5 ml-5 list-disc space-y-3 marker:text-[#0EA5E9]">
          {copy.quoteItems.map((item) => <li key={item} className="pl-1 text-sm font-medium leading-6 text-[#475569]">{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
