import { ProjectGallery } from "@/components/project-gallery";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { projectItems } from "@/config/projects-data";
import { getHubMetadata, getItemListSchema } from "@/lib/hub";
import { getSpeakableSchema } from "@/lib/seo";

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", "h2"])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListSchema(title, description, path, items)) }} />
      {/* No Article schema here on purpose: this route is a gallery/collection
          hub, and its ItemList markup above already describes it accurately.
          Marking a hub as an Article claims a content type the page is not. */}
      <ProjectGallery />
    </>
  );
}
