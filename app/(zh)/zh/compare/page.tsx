import { localizedPodHubRoute } from "@/lib/locale-content-router";

const route = localizedPodHubRoute("compare", "zh");

export const generateMetadata = route.generateMetadata;
export default route.Page;
