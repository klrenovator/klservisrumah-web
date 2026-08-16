import Link from "next/link";
import type { LegalDocument as LegalDocumentCopy } from "@/config/legal-content";

export function LegalDocument({
  document,
  homeLabel,
  currentPath
}: {
  document: LegalDocumentCopy;
  homeLabel: string;
  currentPath: string;
}) {
  return (
    <>
      <nav className="mx-auto max-w-4xl px-4 pt-8 text-sm sm:px-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-slate-500">
          <li><Link href="/" className="font-bold hover:text-[#0284C7]">{homeLabel}</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={currentPath} aria-current="page" className="text-[#075985]">{document.title}</Link></li>
        </ol>
      </nav>
      <main className="bg-white py-10 sm:py-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          <header className="border-b border-slate-200 pb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">{document.eyebrow}</span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#075985] sm:text-5xl">{document.title}</h1>
            <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-slate-600">{document.summary}</p>
            <p className="mt-4 text-xs font-bold text-slate-400">{document.updated}</p>
          </header>
          <div className="mt-10 space-y-10">
            {document.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-extrabold tracking-tight text-[#075985] sm:text-2xl">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm font-medium leading-7 text-slate-600 sm:text-base">{paragraph}</p>
                ))}
                {section.items && (
                  <ul className="mt-4 ml-5 list-disc space-y-3 marker:text-[#0284C7]">
                    {section.items.map((item) => <li key={item} className="pl-1 text-sm font-medium leading-7 text-slate-600 sm:text-base">{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
