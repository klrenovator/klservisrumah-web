import type { ReactNode } from "react";

export type VisibleFaq = { q: string; a: string };

/**
 * Always-in-HTML FAQ list (audit P5-02 / P3-11).
 *
 * Google's FAQ rich-result policy requires the marked-up Q&As to be present
 * in the visible page. `{isOpen && answer}` accordions fail that test because
 * collapsed answers never reach the static HTML. Native `<details>` keeps
 * every answer in the document for no-JS crawlers and AI extractors while
 * still collapsing in the browser.
 */
export function VisibleFaqList({
  faqs,
  heading,
  eyebrow,
  headingId = "visible-faq-heading",
  className = "",
}: {
  faqs: VisibleFaq[];
  heading: ReactNode;
  eyebrow?: ReactNode;
  headingId?: string;
  className?: string;
}) {
  if (!faqs.length) return null;
  return (
    <section className={className} aria-labelledby={headingId}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2
          id={headingId}
          className={`text-2xl font-extrabold tracking-tight text-[#075985] sm:text-3xl ${eyebrow ? "mt-3" : ""}`}
        >
          {heading}
        </h2>
        <div className="mt-8 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-[#BAE6FD]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
                <span className="text-sm font-extrabold text-[#075985] sm:text-base">{faq.q}</span>
                <span
                  className="shrink-0 text-xl leading-none text-[#0EA5E9] transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="faq-answer px-5 pb-5 text-sm font-medium leading-relaxed text-[#475569] sm:px-6 sm:pb-6 sm:text-base">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
