import { localizedPodHubRoute } from "@/lib/locale-content-router";

const route = localizedPodHubRoute("process", "zh");

export const generateMetadata = route.generateMetadata;
export default route.Page;
