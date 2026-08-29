import { localizedPodHubRoute } from "@/lib/locale-content-router";

const route = localizedPodHubRoute("commercial", "zh");

export const generateMetadata = route.generateMetadata;
export default route.Page;
