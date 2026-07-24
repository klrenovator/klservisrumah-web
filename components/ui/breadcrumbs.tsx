import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs md:text-sm text-[#475569] font-medium overflow-x-auto no-scrollbar">
        <Link href="/" className="hover:text-[#0EA5E9] transition-colors flex items-center gap-1 shrink-0">
          <Home className="w-4 h-4 text-[#0EA5E9]" />
          <span>Home</span>
        </Link>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.href}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              {isLast ? (
                <span className="text-[#075985] font-bold truncate shrink-0">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[#0EA5E9] transition-colors shrink-0">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
