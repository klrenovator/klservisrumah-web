import React from "react";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/trust-bar";
import { RecentJobsTicker } from "@/components/recent-jobs-ticker";
import { TrustBadges } from "@/components/sections/trust-badges";
import { ServicesGrid } from "@/components/sections/services-grid";
import { StatsCounter } from "@/components/content/stats-counter";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { OurProcess } from "@/components/sections/our-process";
import { BeforeAfter } from "@/components/sections/before-after";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Testimonials } from "@/components/sections/testimonials";
import { ServiceAreas } from "@/components/sections/service-areas";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { HomeCTA } from "@/components/sections/home-cta";

export default function Home() {
  return (
    <>
      <TrustBar />
      <Hero />
      <div className="bg-white px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <RecentJobsTicker />
        </div>
      </div>
      <TrustBadges />
      <ServicesGrid />

      <div className="bg-white section-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsCounter
            stats={[
              { value: "13+", label: "Service pillars", trilingualMs: "Pilar perkhidmatan", trilingualZh: "服务项目" },
              { value: "1,200+", label: "Completed projects", trilingualMs: "Projek siap", trilingualZh: "完成项目" },
              { value: "4.9 / 5", label: "Google rating", trilingualMs: "Penilaian Google", trilingualZh: "谷歌评分" },
              { value: "30 min", label: "Avg response time", trilingualMs: "Purata respons", trilingualZh: "平均响应" }
            ]}
            variant="gradient"
          />
        </div>
      </div>

      <WhyChooseUs />
      <OurProcess />
      <BeforeAfter />
      <FeaturedProjects />
      <Testimonials />
      <ServiceAreas />
      <FAQAccordion />

      <HomeCTA />
    </>
  );
}
