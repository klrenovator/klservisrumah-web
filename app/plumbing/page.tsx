import ServiceSlugPage from "@/app/services/[slug]/page";
import { servicesData } from "@/config/services-data";

const service = servicesData.plumbing;

export const metadata = {
  title: service.metaTitle,
  description: service.metaDesc,
  alternates: { canonical: "/plumbing" }
};

export default function PlumbingPillarPage() {
  return <ServiceSlugPage params={Promise.resolve({ slug: "plumbing" })} />;
}
