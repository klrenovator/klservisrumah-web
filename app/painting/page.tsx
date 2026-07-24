import ServiceSlugPage from "@/app/services/[slug]/page";
import { servicesData } from "@/config/services-data";

const service = servicesData.painting;

export const metadata = {
  title: service.metaTitle,
  description: service.metaDesc,
  alternates: { canonical: "/painting" }
};

export default function PaintingPillarPage() {
  return <ServiceSlugPage params={Promise.resolve({ slug: "painting" })} />;
}
