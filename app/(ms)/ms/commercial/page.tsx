import { localizedPodHubRoute } from "@/lib/locale-content-router";

const route = localizedPodHubRoute("commercial", "ms");

export const generateMetadata = route.generateMetadata;
export default route.Page;
