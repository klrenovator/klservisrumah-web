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
      ms: { title: "Penggantian papan siling bernoda air", location: "Subang Jaya", summary: "Penggantian papan rosak, papan pengganti tahan lembap, skim coat, primer, dan pengecatan semula." },
      zh: { title: "水渍天花板板更换", location: "梳邦再也", summary: "拆除受损板、防潮替换板、批腻子、底漆与重新油漆。" }
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
      ms: { title: "Pengawalan kebocoran bilik air dengan grouting PU", location: "Mont Kiara", summary: "Suntikan PU tanpa memecah untuk kebocoran antara tingkat, diikuti pembaikan kemasan siling." },
      zh: { title: "浴室PU注浆漏水控制", location: "蒙奇亚拉", summary: "无砸PU注浆修复楼层间漏水，随后恢复天花板饰面。" }
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
      ms: { title: "Pemasangan TV selamat pada dinding campuran", location: "Cheras", summary: "Pengenalpastian jenis dinding, anchor betul, pelarasan paras, dan ujian beban akhir." },
      zh: { title: "混合墙体安全电视安装", location: "蕉赖", summary: "墙体类型识别、正确锚栓、水平对齐与最终承重测试。" }
    }
  }
];
