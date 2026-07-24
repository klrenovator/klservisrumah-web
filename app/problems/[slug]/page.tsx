import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckCircle2, MessageCircle } from "lucide-react";
import { problemPages } from "@/config/problem-data";
import { servicesData } from "@/config/services-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getArticleSchema, getBreadcrumbSchema, getFAQSchema, getHowToSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return problemPages.map((problem) => ({ slug: problem.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const problem = problemPages.find((item) => item.slug === slug);
  if (!problem) return {};
  return {
    title: `${problem.title}: Causes, Fixes & Cost in KL`,
    description: `${problem.symptom} Learn causes, professional fixes, when to call a pro, and estimated cost: ${problem.costRange}.`,
    alternates: { canonical: `/problems/${problem.slug}` }
  };
}

export default async function ProblemPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const problem = problemPages.find((item) => item.slug === slug);
  if (!problem) notFound();
  const service = servicesData[problem.serviceSlug];
  const howToSteps = problem.solutions.map((solution) => ({ title: solution, desc: `Apply this step only after the cause is confirmed: ${solution}.` }));

  return (
    <>
      <Breadcrumbs items={[{ label: "Problems", href: "/problems" }, { label: problem.title, href: `/problems/${problem.slug}` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: "Problems", item: "/problems" }, { name: problem.title, item: `/problems/${problem.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(problem.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getHowToSchema(howToSteps)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: problem.title, slug: problem.slug, excerpt: problem.symptom, path: `/problems/${problem.slug}`, category: service.title })) }} />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <article className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-rose-600"><AlertTriangle className="h-4 w-4" /> Urgency: {problem.urgency}</span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#1E40AF] sm:text-5xl">Why Is My {problem.title}? Causes, Fixes & Cost in KL</h1>
              <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">{problem.symptom}</p>
              <p className="mt-3 text-sm font-extrabold text-[#0EA5E9]">Estimated professional fix: {problem.costRange}</p>
            </div>

            <Section title="Common causes" items={problem.causes} />
            <Section title="Professional solutions" items={problem.solutions} />
            <Section title="When to call a pro" items={problem.whenToCall} />

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="text-2xl font-extrabold text-[#1E40AF]">Related service</h2>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">This problem usually connects to {service.title}. Review service scope, pricing, warranty, and process before booking.</p>
              <Link href={`/services/${service.slug}`} className="mt-5 inline-flex rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-extrabold text-white">View {service.title}</Link>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="mb-5 text-2xl font-extrabold text-[#1E40AF]">FAQs</h2>
              <div className="space-y-4">{problem.faqs.map((faq) => <div key={faq.q} className="rounded-2xl bg-slate-50 p-4"><h3 className="font-extrabold text-[#1E40AF]">{faq.q}</h3><p className="mt-2 text-sm font-semibold text-[#475569]">{faq.a}</p></div>)}</div>
            </div>
          </article>

          <aside className="lg:col-span-4"><div className="sticky top-28 rounded-3xl bg-[#2563EB] p-6 text-white shadow-xl"><h2 className="text-2xl font-extrabold">Need this fixed?</h2><p className="mt-2 text-sm font-semibold text-blue-50">Send photos and a short video if safe. We confirm a market-rate quote before dispatch.</p><a href={getWhatsAppLink({ service: problem.title })} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white"><MessageCircle className="h-4 w-4" /> WhatsApp Diagnosis</a></div></aside>
        </div>
      </section>
    </>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
      <h2 className="mb-5 text-2xl font-extrabold text-[#1E40AF]">{title}</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-[#475569]"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />{item}</div>)}
      </div>
    </div>
  );
}
