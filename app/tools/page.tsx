import Link from "next/link";
import { ArrowRight, Calculator, ClipboardCheck, MessageSquare } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getHubMetadata, getItemListSchema } from "@/lib/hub";
import { getSpeakableSchema, getWebApplicationSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";

const title = "Free Home Service Tools KL";
const description = "Use free planning tools for painting cost, plumbing diagnostics, leak triage, ceiling material and TV mount advice before requesting a quote.";
const path = "/tools";
const tools = [
  { title: "Painting Cost Calculator", href: "/tools/painting-calculator", desc: "Estimate repainting scope by rooms, walls and surface preparation." },
  { title: "Plumbing Diagnostic", href: "/tools/plumbing-diagnostic", desc: "Triage leaks, low pressure, clogged drains and fixture problems." },
  { title: "Leak Triage", href: "/tools/leak-triage", desc: "Prioritise ceiling, wall, bathroom and roof leaks before water damage spreads." },
  { title: "Ceiling Calculator", href: "/tools/ceiling-calculator", desc: "Prepare measurements for plaster ceiling, board replacement and partitions." },
  { title: "TV Mount Advisor", href: "/tools/tv-mount-advisor", desc: "Choose a bracket and wall anchor strategy before booking a handyman." }
];
const items = tools.map((tool) => ({ slug: tool.href.split("/").pop() ?? tool.title, title: tool.title, category: "Free Tool", intro: tool.desc, href: tool.href }));

export const metadata = getHubMetadata({ title, description, path });

export default function ToolsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Tools", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", "h2"])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      {tools.map((tool) => (
        <script key={tool.href} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebApplicationSchema(tool.title, tool.href, tool.desc)) }} />
      ))}

      <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.28),transparent_38%),linear-gradient(135deg,rgba(7,89,133,0.95),rgba(2,6,23,0.98))]" />
        <div className="container-default relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-sky-100 backdrop-blur">
            <Calculator className="h-3.5 w-3.5 text-sky-300" /> Free instant tools
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Plan the Job Before You Book
          </h1>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/82 sm:text-lg">
            Get a faster, cleaner quote by sending measurements, photos and symptoms from these tools. They are not final quotations, but they help our dispatch desk route the right tradesman.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={getWhatsAppLink({ service: "Tool result follow-up" })} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageSquare className="h-4 w-4" /> Send Tool Result
            </a>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-black uppercase tracking-wider text-[#075985] transition hover:bg-sky-50">
              View Price Guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="container-default">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0EA5E9]">
                  <ClipboardCheck className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-lg font-extrabold text-[#075985] group-hover:text-[#0EA5E9]">{tool.title}</h2>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">{tool.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-[#0EA5E9] group-hover:gap-2 transition-all">
                  Open tool <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
