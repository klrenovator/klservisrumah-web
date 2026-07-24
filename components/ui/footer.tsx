import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <Logo size="sm" />
            </Link>
            <p className="text-sm text-[#475569] leading-relaxed">
              Professional, market-rate, and fully insured painting, ceiling repairs, plumbing, waterproofing, and handyman services across Kuala Lumpur and Selangor.
            </p>
            <div className="flex flex-col gap-2.5 mt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#075985] font-semibold bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#0EA5E9]" />
                <span>Fully insured operations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#075985] font-semibold bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Background-verified local team</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-[#075985] uppercase tracking-wider">Our Core Services</h3>
            <ul className="flex flex-col gap-3">
              {Object.values(servicesData).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-[#475569] hover:text-[#0EA5E9] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]/40" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-[#0EA5E9] font-semibold hover:underline">
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-[#075985] uppercase tracking-wider">Helpful Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/contact", label: "Book a Service" },
                { href: "/pricing", label: "Pricing & Rates" },
                { href: "/faq", label: "FAQ Helpdesk" },
                { href: "/blog", label: "Home Care Blog" },
                { href: "/about", label: "About KL Servis Rumah" },
                { href: "/projects", label: "Project Gallery" }
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#475569] hover:text-[#0EA5E9] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-[#075985] uppercase tracking-wider">Contact & Dispatch</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                <span className="text-sm text-[#475569] leading-relaxed">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-[#475569] hover:text-[#075985] font-semibold transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-[#475569] hover:text-[#075985] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                <span className="text-sm text-[#475569]">{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-200/60 my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-xs text-[#475569]">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#475569]">
            <Link href="/about" className="hover:text-[#075985] transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-[#075985] transition-colors">Booking Policy</Link>
            <Link href="/faq" className="hover:text-[#075985] transition-colors">FAQ Helpdesk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
