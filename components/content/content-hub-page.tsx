import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export type HubItem = {
  slug: string;
  title: string;
  category: string;
  intro: string;
  href?: string;
  relatedServiceTitle?: string;
  bullets?: string[];
};

type ContentHubPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  basePath: string;
  items: HubItem[];
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
};

function categoryCounts(items: HubItem[]) {
  const counts = new Map<string, number>();
  for (const item of items) counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

export function ContentHubPage({
  eyebrow,
  title,
  description,
  basePath,
  items,
  primaryCtaHref = "/contact",
  primaryCtaLabel = "Book a Site Visit",
  secondaryCtaHref = "/pricing",
  secondaryCtaLabel = "View Pricing"
}: ContentHubPageProps) {
  const counts = categoryCounts(items);
  const featured = items.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-950 py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.28),transparent_38%),linear-gradient(135deg,rgba(7,89,133,0.95),rgba(2,6,23,0.98))]" />
        <div className="container-default relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-sky-100 backdrop-blur">
              <BookOpen className="h-3.5 w-3.5 text-sky-300" /> {eyebrow}
            </span>
            <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/82 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={getWhatsAppLink({ service: title })} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-green-950/30 transition hover:bg-[#16A34A]">
                <MessageSquare className="h-4 w-4" /> WhatsApp Advice
              </a>
              <Link href={primaryCtaHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black uppercase tracking-wider text-[#075985] transition hover:bg-sky-50">
                {primaryCtaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-sky-200">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-white">Hub snapshot</p>
                <p className="text-xs font-semibold text-white/65">Crawlable, internal-link rich, answer-ready</p>
              </div>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <dt className="text-[10px] font-black uppercase tracking-widest text-sky-200">Pages</dt>
                <dd className="mt-1 text-2xl font-black text-white">{items.length}</dd>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <dt className="text-[10px] font-black uppercase tracking-widest text-sky-200">Coverage</dt>
                <dd className="mt-1 text-2xl font-black text-white">KL + Selangor</dd>
              </div>
            </dl>
            <div className="mt-4 flex flex-wrap gap-2">
              {counts.slice(0, 5).map(([category, count]) => (
                <span key={category} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold text-white/85">
                  {category}: {count}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-default">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Featured pathways</p>
              <h2 className="mt-2 text-2xl font-black text-[#075985] sm:text-3xl">Start with the most useful pages</h2>
            </div>
            <Link href={secondaryCtaHref} className="btn-ghost w-fit">
              {secondaryCtaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <Link key={item.slug} href={item.href ?? `${basePath}/${item.slug}`} className="group rounded-3xl border border-slate-100 bg-slate-50/60 p-6 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-lg">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0EA5E9]">{item.category}</span>
                <h3 className="mt-2 text-lg font-black leading-tight text-[#075985] group-hover:text-[#0EA5E9]">{item.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm font-semibold leading-relaxed text-slate-600">{item.intro}</p>
                {item.relatedServiceTitle ? <p className="mt-4 text-xs font-bold text-slate-500">Related service: {item.relatedServiceTitle}</p> : null}
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-[#0EA5E9] group-hover:gap-2 transition-all">
                  Open guide <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-14 sm:py-16">
        <div className="container-default">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow">Complete index</p>
            <h2 className="mt-2 text-2xl font-black text-[#075985] sm:text-3xl">All pages in this hub</h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
              Each card links to a detailed page with practical guidance, FAQs, related services and booking paths.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link key={item.slug} href={item.href ?? `${basePath}/${item.slug}`} className="group rounded-2xl border border-slate-100 bg-white p-4 transition hover:border-sky-200 hover:shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.category}</p>
                    <h3 className="mt-1 text-sm font-black leading-snug text-[#075985] group-hover:text-[#0EA5E9]">{item.title}</h3>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-sky-400 opacity-0 transition group-hover:opacity-100" />
                </div>
                <p className="mt-2 line-clamp-2 text-xs font-semibold leading-relaxed text-slate-500">{item.intro}</p>
                {item.bullets?.length ? (
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" /> {item.bullets[0]}
                  </div>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-default">
          <div className="rounded-3xl bg-gradient-to-br from-[#075985] to-[#0EA5E9] p-6 text-white sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-sky-100">Need a local opinion?</p>
                <h2 className="mt-2 text-2xl font-black sm:text-3xl">Send photos and your area — we will recommend the right next step.</h2>
                <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-sky-50">
                  KL Servis Rumah covers {siteConfig.areas.slice(0, 10).join(", ")} and the wider Klang Valley with transparent fixed-price quotes.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={getWhatsAppLink({ service: title })} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white transition hover:bg-[#16A34A]">
                  <MessageSquare className="h-4 w-4" /> WhatsApp Now
                </a>
                <Link href="/areas" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black uppercase tracking-wider text-[#075985] transition hover:bg-sky-50">
                  <MapPin className="h-4 w-4" /> Check Areas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
