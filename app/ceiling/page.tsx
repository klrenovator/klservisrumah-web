import ServiceSlugPage from "@/app/services/[slug]/page";
import { servicesData } from "@/config/services-data";

const service = servicesData.ceiling;

export const metadata = {
  title: service.metaTitle,
  description: service.metaDesc,
  alternates: { canonical: "/ceiling" }
};

export default function CeilingPillarPage() {
  return <ServiceSlugPage params={Promise.resolve({ slug: "ceiling" })} />;
}
