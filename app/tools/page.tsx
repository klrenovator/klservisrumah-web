import Link from "next/link";

export const metadata = { title: "Home Service Tools KL", description: "Free tools for painting cost, plumbing diagnostics, leak triage, ceiling material and TV mount advice." };

const tools = [
  ["Painting Cost Calculator", "/tools/painting-calculator"],
  ["Plumbing Diagnostic", "/tools/plumbing-diagnostic"],
  ["Leak Triage", "/tools/leak-triage"],
  ["Ceiling Calculator", "/tools/ceiling-calculator"],
  ["TV Mount Advisor", "/tools/tv-mount-advisor"]
];

export default function ToolsPage(){
  return <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20"><div className="mx-auto max-w-5xl px-4"><h1 className="text-4xl font-extrabold text-[#075985]">Free Home Service Tools</h1><div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">{tools.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-100 bg-white p-6 text-lg font-extrabold text-[#075985] shadow-xs hover:shadow-md">{title}</Link>)}</div></div></section>;
}
