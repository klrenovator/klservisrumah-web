import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
        <span className="rounded-full bg-[#DBEAFE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">404 page not found</span>
        <h1 className="text-4xl font-extrabold text-[#1E40AF]">We could not find that service page</h1>
        <p className="text-base font-semibold leading-relaxed text-[#475569]">
          The page may have moved, but our home service dispatch desk is still ready to help with painting, plumbing, ceiling, waterproofing, and handyman requests in KL & Selangor.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-extrabold text-white">Back to homepage</Link>
          <Link href="/services" className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-extrabold text-[#1E40AF]">Browse services</Link>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white">
            <MessageCircle className="h-4 w-4" /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
