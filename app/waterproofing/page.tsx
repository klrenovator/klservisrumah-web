import ServiceSlugPage from "@/app/services/[slug]/page";
import { servicesData } from "@/config/services-data";

const service = servicesData.waterproofing;

export const metadata = {
  title: service.metaTitle,
  description: service.metaDesc,
  alternates: { canonical: "/waterproofing" }
};

export default function WaterproofingPillarPage() {
  return <ServiceSlugPage params={Promise.resolve({ slug: "waterproofing" })} />;
}
