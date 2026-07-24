import React from "react";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getFAQSchema } from "@/lib/seo";

export const metadata = {
  title: "Frequently Asked Questions — Helpdesk Support",
  description: "Get answers to pricing, warranties, insured operations, areas served, and work prep for KL Servis Rumah painting, plumbing, ceiling, and waterproofing."
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What is your starting price for your home services?",
      a: "Our minor handyman jobs start from RM 80, basic plumbing repairs from RM 120, plaster ceiling repair from RM 180, and single room painting from RM 400. Every quote we issue is fixed and itemized before any actual work is commenced, so there are absolutely no hidden fees."
    },
    {
      q: "Are you an established local company in Malaysia?",
      a: "Yes. KL Servis Rumah is operated by an established local company with fully insured operations, transparent quotations, official invoices, and background-verified tradesmen."
    },
    {
      q: "Do you offer warranties on your services?",
      a: "Absolutely! We offer up to 90 days written warranties on plaster ceilings and structural partitions, up to 5-year guarantees on full chemical waterproofing membrane works, and a 30-day warranty on plumbing joint seals and general handyman installations."
    },
    {
      q: "Can I get a same-day technician visit in KL or Selangor?",
      a: "Yes! For urgent bookings, such as active plumbing pipe leakage or sudden TV mounting requests, please contact us early (before 11:00 AM) and we will dispatch the nearest available technician in your suburb for a same-day slot."
    },
    {
      q: "Do you supply the paint, pipes, and anchors, or do I need to?",
      a: "We supply all standard professional materials: premium Nippon/Dulux paints, SIRIM PVC/PPR plumbing pipes, rust-proof plasterboards, steel wall anchors, and framing. If you have purchased specific aesthetic finishes (like custom luxury lights, taps, or shelves), we are happy to install those with precision."
    }
  ];

  const schema = getFAQSchema(faqs);

  return (
    <>
      <Breadcrumbs items={[{ label: "FAQ Helpdesk", href: "/faq" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <FAQAccordion />
    </>
  );
}
