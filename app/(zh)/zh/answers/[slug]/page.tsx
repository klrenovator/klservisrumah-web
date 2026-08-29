import { localizedPodDetailRoute } from "@/lib/locale-content-router";

const route = localizedPodDetailRoute("answers", "zh");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export const dynamicParams = false;
export default route.Page;
