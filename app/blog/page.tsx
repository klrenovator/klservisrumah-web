import React from "react";
import Link from "next/link";
import { blogPosts } from "@/config/blog-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getBreadcrumbSchema } from "@/lib/seo";
import { User, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Home Maintenance Blog — Expert Tips KL & Selangor",
  description: "Read professional home maintenance tips, painting guidelines, leak repairs, and DIY alignment guides written by the KL Servis Rumah specialists."
};

export default function BlogPage() {
  const crumbs = [{ name: "Blog", item: "/blog" }];
  const breadcrumbSchema = getBreadcrumbSchema(crumbs);

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#0781B2] tracking-widest uppercase bg-[#D2DEE7]/30 px-4 py-1.5 rounded-full">
              Informative Resource
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#021F44] tracking-tight">
              Our Expert Knowledge Hub
            </h1>
            <p className="text-base text-[#4A607C] leading-relaxed">
              Read professional tips, step-by-step guides, and technical explanations on painting, leak prevention, ceiling repairs, and smart handyman alignments under Malaysian weather.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_25px_rgba(2,31,68,0.01)] hover:shadow-[0_15px_40px_rgba(2,31,68,0.03)] hover:border-[#0781B2]/20 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#0781B2] bg-[#0781B2]/10 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-300 font-semibold">{post.date}</span>
                  </div>

                  <h2 className="text-xl font-extrabold text-[#021F44] tracking-tight group-hover:text-[#0781B2] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#4A607C] leading-relaxed font-medium">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-bold text-[#4A607C] mt-2">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4 text-[#0781B2]" />
                      <span>By {post.author.split(" ")[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#0781B2]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex justify-end">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0781B2] group-hover:text-[#021F44]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
