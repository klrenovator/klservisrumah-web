import { localizedPodHubRoute } from "@/lib/locale-content-router";

const route = localizedPodHubRoute("compare", "ms");

export const generateMetadata = route.generateMetadata;
export default route.Page;
