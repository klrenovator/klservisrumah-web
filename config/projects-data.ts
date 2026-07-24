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
    image: "/hero-painting.svg"
  },
  {
    slug: "subang-jaya-ceiling-leak-repair",
    service: "Ceiling",
    title: "Water-stained ceiling board replacement",
    location: "Subang Jaya",
    summary: "Damaged board removal, moisture-resistant replacement board, skim coat, primer, and repaint.",
    image: "/hero-ceiling.svg"
  },
  {
    slug: "mont-kiara-pu-grouting",
    service: "Waterproofing",
    title: "Bathroom PU grouting leak control",
    location: "Mont Kiara",
    summary: "Non-hacking PU injection approach for an inter-floor leak, followed by ceiling finish restoration.",
    image: "/hero-waterproofing.svg"
  },
  {
    slug: "cheras-tv-wall-mounting",
    service: "Handyman",
    title: "Safe TV wall mounting on mixed wall types",
    location: "Cheras",
    summary: "Wall type identification, correct anchors, level alignment, and final weight testing.",
    image: "/hero-handyman.svg"
  }
];
