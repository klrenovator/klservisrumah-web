import { localizedPodHubRoute } from "@/lib/locale-content-router";

const route = localizedPodHubRoute("seasonal", "zh");

export const generateMetadata = route.generateMetadata;
export default route.Page;
