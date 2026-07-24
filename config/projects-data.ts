export type ProjectItem = {
  slug: string;
  service: string;
  title: string;
  location: string;
  summary: string;
  image: string;
};

export const projectItems: ProjectItem[] = [
  {
    slug: "petaling-jaya-interior-painting",
    service: "Painting",
    title: "Interior repainting with wall preparation",
    location: "Petaling Jaya",
    summary: "Surface patching, primer, two-coat finish, and full furniture protection for an occupied home.",
    image: "/projects/painting-hero.webp"
  },
  {
    slug: "subang-jaya-ceiling-leak-repair",
    service: "Ceiling",
    title: "Water-stained ceiling board replacement",
    location: "Subang Jaya",
    summary: "Damaged board removal, moisture-resistant replacement board, skim coat, primer, and repaint.",
    image: "/projects/ceiling-hero.webp"
  },
  {
    slug: "mont-kiara-pu-grouting",
    service: "Waterproofing",
    title: "Bathroom PU grouting leak control",
    location: "Mont Kiara",
    summary: "Non-hacking PU injection approach for an inter-floor leak, followed by ceiling finish restoration.",
    image: "/projects/waterproofing-hero.webp"
  },
  {
    slug: "cheras-tv-wall-mounting",
    service: "Handyman",
    title: "Safe TV wall mounting on mixed wall types",
    location: "Cheras",
    summary: "Wall type identification, correct anchors, level alignment, and final weight testing.",
    image: "/projects/handyman-hero.webp"
  }
];
