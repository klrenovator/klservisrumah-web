import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Profile */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex flex-col gap-1">
              <span className="text-[#021F44] font-extrabold text-xl tracking-tight leading-none">
                KL<span className="text-[#0781B2]">SERVIS</span>RUMAH<span className="text-[#0781B2] text-xs font-bold">.MY</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#4A607C] font-semibold">
                PAINTING • CEILING • PLUMBING • HANDYMAN
              </span>
            </Link>
            <p className="text-sm text-[#4A607C] leading-relaxed">
              Professional, transparently-priced, and fully insured painting, ceiling repairs, plumbing, waterproofing, and handyman services across Kuala Lumpur and Selangor. Delivered by experienced local craftsmen.
            </p>
            <div className="flex flex-col gap-2.5 mt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#021F44] font-semibold bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#0781B2]" />
                <span>SSM: {siteConfig.ssmFull}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#021F44] font-semibold bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Managed by {siteConfig.parentCompany}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-[#021F44] uppercase tracking-wider">Our Core Services</h3>
            <ul className="flex flex-col gap-3">
              {Object.values(servicesData).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-[#4A607C] hover:text-[#0781B2] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0781B2]/40" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-[#0781B2] font-semibold hover:underline"
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Local Coverage */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-[#021F44] uppercase tracking-wider">Top Service Areas</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {areaPages.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-sm text-[#4A607C] hover:text-[#0781B2] transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li className="col-span-2">
                <Link
                  href="/areas"
                  className="text-sm text-[#0781B2] font-semibold hover:underline"
                >
                  View All Areas served &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-[#021F44] uppercase tracking-wider">Contact & Dispatch</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#0781B2] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A607C] leading-relaxed">
                  {siteConfig.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0781B2] shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-[#4A607C] hover:text-[#021F44] font-semibold transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0781B2] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-[#4A607C] hover:text-[#021F44] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#0781B2] shrink-0" />
                <span className="text-sm text-[#4A607C]">
                  {siteConfig.hours}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom bar */}
        <hr className="border-slate-200/60 my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-xs text-[#4A607C]">
            &copy; {year} {siteConfig.name} (Registration No: {siteConfig.ssm}). All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#4A607C]">
            <Link href="/about" className="hover:text-[#021F44] transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-[#021F44] transition-colors">
              Booking Policy
            </Link>
            <Link href="/faq" className="hover:text-[#021F44] transition-colors">
              FAQ Helpdesk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
