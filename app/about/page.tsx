import React from "react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { AboutContent } from "@/components/sections/about-content";

export const metadata = {
  title: "About Us — KL Servis Rumah",
  description: "Learn about KL Servis Rumah, our mission, insured operations, and premium home service values across Kuala Lumpur and Selangor."
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <AboutContent />
      </section>
    </>
  );
}
