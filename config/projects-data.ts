export type ProjectItem = {
  slug: string;
  service: string;
  title: string;
  location: string;
  summary: string;
  image: string;
  i18n?: { ms?: Partial<ProjectItem>; zh?: Partial<ProjectItem> };
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
    image: "/hero-ceiling.svg",
    i18n: {
      ms: { title: "Noda air ceiling board replacement", location: "Subang Jaya", summary: "Papan rosak removal, moisture-resistant replacement board, skim coat, primer, and repaint." },
      zh: { title: "水渍 ceiling board replacement", location: "梳邦再也", summary: "受损板 removal, moisture-resistant replacement board, skim coat, primer, and repaint." }
    }
  },
  {
    slug: "mont-kiara-pu-grouting",
    service: "Waterproofing",
    title: "Bathroom PU grouting leak control",
    location: "Mont Kiara",
    summary: "Non-hacking PU injection approach for an inter-floor leak, followed by ceiling finish restoration.",
    image: "/hero-waterproofing.svg",
    i18n: {
      ms: { title: "Bilik air PU grouting leak control", location: "Mont Kiara", summary: "Tanpa memecah PU injection approach for an inter-floor leak, followed by ceiling finish restoration." },
      zh: { title: "浴室 PU grouting leak control", location: "蒙奇亚拉", summary: "无砸 PU injection approach for an inter-floor leak, followed by ceiling finish restoration." }
    }
  },
  {
    slug: "cheras-tv-wall-mounting",
    service: "Handyman",
    title: "Safe TV wall mounting on mixed wall types",
    location: "Cheras",
    summary: "Wall type identification, correct anchors, level alignment, and final weight testing.",
    image: "/hero-handyman.svg",
    i18n: {
      ms: { title: "Pemasangan TV selamat wall mounting on mixed wall types", location: "Cheras", summary: "Wall type identification, correct anchors, level alignment, and final weight testing." },
      zh: { title: "安全电视 wall mounting on mixed wall types", location: "蕉赖", summary: "Wall type identification, correct anchors, level alignment, and final weight testing." }
    }
  }
];
