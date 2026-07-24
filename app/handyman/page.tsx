import ServiceSlugPage from "@/app/services/[slug]/page";
import { servicesData } from "@/config/services-data";

const service = servicesData.handyman;

export const metadata = {
  title: service.metaTitle,
  description: service.metaDesc,
  alternates: { canonical: "/handyman" }
};

export default function HandymanPillarPage() {
  return <ServiceSlugPage params={Promise.resolve({ slug: "handyman" })} />;
}
