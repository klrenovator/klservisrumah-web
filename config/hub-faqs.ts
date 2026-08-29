export type HubFaq = { q: string; a: string };

/** Shared Q&As for `/faq`, `/ms/soalan-lazim`, `/zh/chang-jian-wen-ti`. */
export const faqsByLang: Record<"en" | "ms" | "zh", HubFaq[]> = {
  en: [
    {
      q: "What is your starting price for your home services?",
      a: "Our minor handyman jobs start from RM 280, basic plumbing repairs from RM 280, plaster ceiling repair from RM 220, and single room painting from RM 450. Every quote we issue is fixed and itemized before any actual work is commenced, so there are absolutely no hidden fees."
    },
    {
      q: "Are you an established local company in Malaysia?",
      a: "Yes. KL Servis Rumah operates as an established local company with fully insured work boundaries, transparent quotations, official invoices, and background-verified tradesmen."
    },
    {
      q: "Do you offer warranties on your services?",
      a: "Absolutely! We offer a written warranty on every job, per service: 30 days on plumbing joint seals and general handyman installations; 90 days on ceiling repair and structural partitions; 12 months on painting, tiling and electrical/appliance installs; up to 5 years on waterproofing membranes, flooring, epoxy and cabinetry; and up to 10 years on roof membranes and premium plaster-ceiling systems."
    },
    {
      q: "Can I get a same-day technician visit in KL or Selangor?",
      a: "Yes! For urgent bookings, such as active plumbing pipe leakage or sudden TV mounting requests, please contact us early (before 11:00 AM) and we will dispatch the nearest available technician in your suburb for a same-day slot."
    },
    {
      q: "Do you supply the paint, pipes, and anchors, or do I need to?",
      a: "We supply all standard professional materials: premium Nippon/Dulux paints, SIRIM PVC/PPR plumbing pipes, rust-proof plasterboards, steel wall anchors, and framing. If you have purchased specific aesthetic finishes (like custom luxury lights, taps, or shelves), we are happy to install those with precision."
    }
  ],
  ms: [
    {
      q: "Apakah harga permulaan untuk perkhidmatan rumah anda?",
      a: "Kerja tukang kecil kami bermula dari RM 280, pembaikan paip asas dari RM 280, pembaikan siling plaster dari RM 220, dan pengecatan satu bilik dari RM 450. Setiap sebut harga yang kami keluarkan adalah tetap dan terperinci sebelum sebarang kerja sebenar bermula, jadi tiada sebarang yuran tersembunyi."
    },
    {
      q: "Adakah anda syarikat tempatan yang mantap di Malaysia?",
      a: "Ya. KL Servis Rumah beroperasi sebagai syarikat tempatan yang mantap dengan skop kerja diinsuranskan sepenuhnya, sebut harga telus, invois rasmi, dan tukang yang disaring latar belakang."
    },
    {
      q: "Adakah anda menawarkan jaminan untuk perkhidmatan anda?",
      a: "Sudah tentu! Kami menawarkan jaminan bertulis untuk setiap kerja, ikut perkhidmatan: 30 hari untuk pengedap sendi paip dan pemasangan tukang am; 90 hari untuk pembaikan siling dan partition struktur; 12 bulan untuk cat, jubin dan pemasangan elektrik/perkakas; sehingga 5 tahun untuk membran kalis air, lantai, epoksi dan kabinet; dan sehingga 10 tahun untuk membran bumbung serta sistem siling plaster perdana."
    },
    {
      q: "Bolehkah saya mendapatkan lawatan juruteknik pada hari yang sama di KL atau Selangor?",
      a: "Ya! Untuk tempahan segera, seperti kebocoran paip aktif atau permintaan pemasangan TV mengejut, sila hubungi kami awal (sebelum 11:00 pagi) dan kami akan menghantar juruteknik terdekat yang tersedia di pinggir bandar anda untuk slot hari yang sama."
    },
    {
      q: "Adakah anda membekalkan cat, paip, dan sauh, atau saya perlu sendiri?",
      a: "Kami membekalkan semua bahan profesional standard: cat premium Nippon/Dulux, paip SIRIM PVC/PPR, papan plaster tahan karat, sauh dinding keluli, dan rangka. Jika anda telah membeli kemasan estetik khusus (seperti lampu mewah khas, paip air, atau rak), kami sedia memasangnya dengan ketepatan."
    }
  ],
  zh: [
    {
      q: "你们家庭服务的起价是多少？",
      a: "我们的小型维修工作从 RM 280 起，基础水管维修从 RM 280 起，石膏天花板维修从 RM 220 起，单间房油漆从 RM 450 起。我们提供的每份报价在实际施工前都是固定且逐项列明的，因此绝无任何隐藏费用。"
    },
    {
      q: "你们是马来西亚的正规本地公司吗？",
      a: "是的。KL Servis Rumah 作为一家正规本地公司运营，提供全面投保的工作范围、透明报价、正式发票以及经过背景审查的技术人员。"
    },
    {
      q: "你们的服务提供保修吗？",
      a: "当然！每项工程均附按服务的书面保修：水管接头密封与一般维修安装 30 天；天花板维修与结构隔墙 90 天；油漆、瓷砖与电气/电器安装 12 个月；防水层、地板、环氧地坪与橱柜长达 5 年；屋顶防水层与优质石膏天花系统长达 10 年。"
    },
    {
      q: "我能在吉隆坡或雪兰莪获得当天技术员上门服务吗？",
      a: "可以！对于紧急预约，例如正在漏水的管道或突发的电视安装需求，请尽早（上午 11:00 前）联系我们，我们会为您派遣所在区域最近的可用技术员，安排当天时段。"
    },
    {
      q: "你们提供油漆、管道与锚固件，还是需要我自备？",
      a: "我们提供所有标准专业材料：优质 Nippon/Dulux 涂料、SIRIM 认证 PVC/PPR 水管、防锈石膏板、钢制墙壁锚固件与框架。如果您已购买特定的美观饰面（如定制豪华灯具、水龙头或置物架），我们也乐意为您精准安装。"
    }
  ]
};
