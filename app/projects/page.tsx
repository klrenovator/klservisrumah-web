import { ProjectGallery } from "@/components/project-gallery";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { projectItems } from "@/config/projects-data";
import { getHubMetadata, getItemListSchema } from "@/lib/hub";
import { getArticleSchema, getBreadcrumbSchema, getSpeakableSchema } from "@/lib/seo";

const title = "Project Gallery — KL Servis Rumah";
const description = "Browse KL Servis Rumah project proof structure for painting, ceiling, waterproofing and handyman work across KL & Selangor.";
const path = "/projects";
const items = projectItems.map((project) => ({
  slug: project.slug,
  title: project.title,
  category: project.service,
  intro: project.summary,
  href: path
}));

export const metadata = getHubMetadata({ title, description, path });

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Projects", href: path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Projects", item: path }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", "h2"])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: "KL Servis Rumah Project Gallery", slug: "projects", excerpt: "Project gallery and before-after proof hub.", path, category: "Projects" })) }} />
      <ProjectGallery />
    </>
  );
}
