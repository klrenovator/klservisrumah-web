import React from "react";
import Image from "next/image";
import { projectItems } from "@/config/projects-data";

export function ProjectGallery() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">Project Gallery</span>
          <h1 className="mt-2 text-3xl font-extrabold text-[#1E40AF]">Recent Home Service Work Types</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-[#475569]">
            Photo placeholders are included until the owner uploads approved real project images. The structure is ready for before/after proof and image SEO.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projectItems.map((project) => (
            <article key={project.slug} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xs">
              <Image src={project.image} alt={project.title} width={600} height={420} className="h-44 w-full object-cover" />
              <div className="p-5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0EA5E9]">{project.service} · {project.location}</span>
                <h2 className="mt-2 text-base font-extrabold text-[#1E40AF]">{project.title}</h2>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-[#475569]">{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
