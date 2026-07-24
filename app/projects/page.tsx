import { ProjectGallery } from "@/components/project-gallery";
import { getArticleSchema } from "@/lib/seo";

export const metadata = {
  title: "Project Gallery — KL Servis Rumah",
  description: "View KL Servis Rumah project-gallery structure for painting, plumbing, ceiling, waterproofing and handyman work across KL & Selangor."
};

export default function ProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: "KL Servis Rumah Project Gallery", slug: "projects", excerpt: "Project gallery and before-after proof hub.", path: "/projects", category: "Projects" })) }} />
      <ProjectGallery />
    </>
  );
}
