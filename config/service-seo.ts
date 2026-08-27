export type ServiceSeoCopy = {
  title: string;
  description: string;
};

type LocalizedServiceSeo = {
  en: ServiceSeoCopy;
  ms?: ServiceSeoCopy;
  zh?: ServiceSeoCopy;
};

/**
 * Search metadata for every main service page.
 *
 * This registry is intentionally separate from long-form service content. It
 * keeps each SERP title and description page-specific without forcing a title
 * template over services with very different customer intent. Titles are
 * written without a trailing brand; `buildMetadata()` appends the brand only
 * when the complete title still fits its display budget.
 */
export const serviceSeo: Record<string, LocalizedServiceSeo> = {
  painting: {
    en: {
      title: "House Painting Services KL & Selangor",
      description:
        "House, interior, exterior and wall painting for homes, offices and shops across KL & Selangor. View the service scope and request a clear quote on WhatsApp."
    },
    ms: {
      title: "Servis Cat Rumah KL & Selangor",
      description:
        "Servis mengecat dalaman, luaran dan mengecat semula rumah, pejabat atau kedai di KL & Selangor. Lihat skop kerja dan minta sebut harga melalui WhatsApp."
    },
    zh: {
      title: "吉隆坡与雪兰莪房屋油漆服务",
      description:
        "为吉隆坡与雪兰莪的住宅、办公室和店铺提供室内、外墙、墙面及重新油漆服务。查看施工范围，并通过 WhatsApp 获取清楚报价。"
    }
  },
  ceiling: {
    en: {
      title: "Ceiling & Partition Services KL & Selangor",
      description:
        "Plaster ceiling installation and repair, gypsum partitions, L-box features and skim finishing across KL & Selangor. Discuss your space and request a quote."
    },
    ms: {
      title: "Servis Siling & Partition KL & Selangor",
      description:
        "Pemasangan dan pembaikan siling plaster, partition gypsum, L-box serta kemasan skim di KL & Selangor. Kongsi ruang anda dan minta sebut harga."
    },
    zh: {
      title: "吉隆坡与雪兰莪天花板与隔墙服务",
      description:
        "在吉隆坡与雪兰莪提供石膏天花板安装与维修、石膏板隔墙、L-box 造型及批灰收面。说明空间需求并获取报价。"
    }
  },
  plumbing: {
    en: {
      title: "Plumbing & Leak Repair KL & Selangor",
      description:
        "Plumbing and leak repair across KL & Selangor, including pipes, taps, toilets, drains, water heaters and pumps. Send the issue on WhatsApp for a quote."
    },
    ms: {
      title: "Servis Paip & Baiki Bocor KL & Selangor",
      description:
        "Servis paip dan baiki kebocoran di KL & Selangor untuk paip, pili, tandas, longkang, pemanas air dan pam. Hantar masalah melalui WhatsApp untuk sebut harga."
    },
    zh: {
      title: "吉隆坡与雪兰莪水管与漏水维修",
      description:
        "吉隆坡与雪兰莪水管和漏水维修，包括管道、水龙头、马桶、排水、热水器与水泵。通过 WhatsApp 发送问题以获取报价。"
    }
  },
  waterproofing: {
    en: {
      title: "Waterproofing Services KL & Selangor",
      description:
        "Bathroom, roof and concrete waterproofing plus PU injection grouting for leaks across KL & Selangor. Get the cause assessed and request a clear quote."
    },
    ms: {
      title: "Servis Kalis Air KL & Selangor",
      description:
        "Kalis air bilik mandi, bumbung dan konkrit serta suntikan PU untuk kebocoran di KL & Selangor. Dapatkan penilaian punca dan sebut harga yang jelas."
    },
    zh: {
      title: "吉隆坡与雪兰莪防水服务",
      description:
        "为吉隆坡与雪兰莪提供浴室、屋顶与混凝土防水及 PU 注浆补漏。先评估漏水原因，再获取清楚报价。"
    }
  },
  handyman: {
    en: {
      title: "Handyman Services KL & Selangor",
      description:
        "Handyman help across KL & Selangor for TV mounting, doors, locks, curtains, shelves and furniture assembly. Share photos on WhatsApp for a clear quote."
    },
    ms: {
      title: "Servis Handyman KL & Selangor",
      description:
        "Servis handyman di KL & Selangor untuk pemasangan TV, pintu, kunci, langsir, rak dan perabot. Kongsi foto melalui WhatsApp untuk sebut harga jelas."
    },
    zh: {
      title: "吉隆坡与雪兰莪家居杂工服务",
      description:
        "吉隆坡与雪兰莪家居杂工服务，包括电视挂墙、门锁、窗帘、置物架及家具组装。通过 WhatsApp 发送照片以获取清楚报价。"
    }
  },
  "house-renovation": {
    en: {
      title: "House Renovation Services KL & Selangor",
      description:
        "House, condo, kitchen, bathroom and shoplot renovation across KL & Selangor with a defined scope and coordinated trades. Request a site discussion."
    },
    ms: {
      title: "Servis Pengubahsuaian Rumah KL & Selangor",
      description:
        "Pengubahsuaian rumah, kondominium, dapur, bilik mandi dan shoplot di KL & Selangor dengan skop jelas dan kerja diselaraskan. Minta perbincangan tapak."
    },
    zh: {
      title: "吉隆坡与雪兰莪房屋翻新服务",
      description:
        "吉隆坡与雪兰莪住宅、公寓、厨房、卫生间与店铺翻新，范围明确、多工种协调。预约现场沟通。"
    }
  },
  "kitchen-renovation": {
    en: {
      title: "Kitchen Renovation Contractor KL & Selangor",
      description:
        "Full kitchen renovation in KL & Selangor: hacking, tiling, waterproofing, custom cabinets, quartz countertop, plumbing and electrical. Fixed price, 3D layout. WhatsApp quote."
    },
    ms: {
      title: "Kontraktor Pengubahsuaian Dapur KL & Selangor",
      description:
        "Pengubahsuaian dapur penuh di KL & Selangor: pecah, jubin, kalis air, kabinet custom, countertop quartz, paip, elektrik. Harga tetap, susun atur 3D. Sebut harga WhatsApp."
    },
    zh: {
      title: "吉隆坡与雪兰莪厨房翻新承包商",
      description:
        "吉隆坡与雪兰莪厨房翻新承包商，涵盖整体拆建、定制橱柜、石英石台面、水电改造与防油烟排风。透明固定总价与施工保修。"
    }
  },
  "bathroom-renovation": {
    en: {
      title: "Bathroom Renovation Contractor KL & Selangor",
      description:
        "Full bathroom renovation in KL & Selangor: hacking, waterproofing with ponding test, tiling, plumbing, sanitary and ceiling. Anti-leak, anti-slip. Fixed price. WhatsApp quote."
    },
    ms: {
      title: "Kontraktor Pengubahsuaian Bilik Mandi KL & Selangor",
      description:
        "Pengubahsuaian bilik mandi penuh di KL & Selangor: pecah, kalis air dengan ujian kolam, jubin, paip, sanitari dan siling. Anti-bocor, anti-gelincir. Harga tetap. Sebut harga WhatsApp."
    },
    zh: {
      title: "吉隆坡与雪兰莪卫生间翻新承包商",
      description:
        "吉隆坡与雪兰莪专业卫生间与厕所翻新服务，提供拆除、多层防水膜蓄水测试、防滑地砖与洁具安装。透明固定总价与防漏保修。"
    }
  },
  electrical: {
    en: {
      title: "Electrician & Wiring Services KL & Selangor",
      description:
        "Electrical wiring, power points, DB boxes, lighting and appliance points across KL & Selangor. Explain the installation or fault and request a quote."
    }
  },
  "water-heater": {
    en: {
      title: "Water Heater Installation & Repair KL & Selangor",
      description:
        "Instant, storage and heat-pump water heater installation, repair and descaling across KL & Selangor. Share the model and issue for a clear quote."
    }
  },
  "ceiling-fan": {
    en: {
      title: "Ceiling Fan Installation KL & Selangor",
      description:
        "New and replacement ceiling fan installation for concrete, plaster ceiling, condo and shoplot settings across KL & Selangor. Request a quote."
    }
  },
  lighting: {
    en: {
      title: "Lighting Installation Services KL & Selangor",
      description:
        "Downlight, pendant, cove LED, track light, dimmer and smart lighting installation across KL & Selangor. Discuss your layout and request a quote."
    }
  },
  tiling: {
    en: {
      title: "Tiling & Tile Repair KL & Selangor",
      description:
        "Floor and wall tiling, large-format slabs, tile repair and regrouting for properties across KL & Selangor. Share measurements and request a quote."
    }
  },
  "plaster-ceiling": {
    en: {
      title: "Plaster Ceiling Services KL & Selangor",
      description:
        "Flat, tiered, L-box, cove and curved plaster ceiling installation, repair and re-skimming across KL & Selangor. Discuss your design and get a quote."
    },
    ms: {
      title: "Servis Siling Plaster KL & Selangor",
      description:
        "Pemasangan, pembaikan dan skim semula siling plaster rata, bertingkat, L-box, cove atau melengkung di KL & Selangor. Bincang reka bentuk dan sebut harga."
    },
    zh: {
      title: "吉隆坡与雪兰莪石膏天花板服务",
      description:
        "吉隆坡与雪兰莪平顶、错层、L-box、灯槽及弧形石膏天花板安装、维修与重新批灰。讨论设计并获取报价。"
    }
  },
  "skim-coat": {
    en: {
      title: "Wall & Ceiling Skim Coat KL & Selangor",
      description:
        "Skim coating for walls and ceilings, crack and joint repair, and paint-ready finishing across KL & Selangor. Share the surface condition for a quote."
    }
  },
  flooring: {
    en: {
      title: "Vinyl, SPC & Laminate Flooring KL & Selangor",
      description:
        "SPC, laminate and luxury vinyl flooring installation with subfloor preparation, skirting and transition strips across KL & Selangor. Request a quote."
    }
  },
  "epoxy-flooring": {
    en: {
      title: "Epoxy & PU Flooring KL & Selangor",
      description:
        "Epoxy and polyurethane floor coatings for garages, warehouses, factories, showrooms and kitchens across KL & Selangor. Discuss the surface and use."
    }
  },
  "roof-repair": {
    en: {
      title: "Roof Repair & Waterproofing KL & Selangor",
      description:
        "Roof leak diagnosis, tile and ridge repair, gutter work and membrane waterproofing across KL & Selangor. Share leak details and request a quote."
    }
  },
  "kitchen-cabinet": {
    en: {
      title: "Kitchen Cabinets & Countertops KL & Selangor",
      description:
        "Custom and modular kitchen cabinets, hardware upgrades and quartz, granite or solid-surface countertops across KL & Selangor. Discuss your layout."
    }
  },
  carpentry: {
    en: {
      title: "Custom Carpentry & Built-Ins KL & Selangor",
      description:
        "Custom wardrobes, TV consoles, study desks, feature walls, shoe cabinets and storage across KL & Selangor. Share dimensions and request a quote."
    }
  },
  door: {
    en: {
      title: "Door Repair & Installation KL & Selangor",
      description:
        "Door supply, installation, planing, alignment and repair for timber, laminate and fire-rated doors across KL & Selangor. Send photos for a quote."
    }
  },
  "window-repair": {
    en: {
      title: "Window Repair & Glass Replacement KL & Selangor",
      description:
        "Glass, seal, handle, hinge and sliding-window roller replacement for common window types across KL & Selangor. Share photos and request a quote."
    }
  },
  locksmith: {
    en: {
      title: "Locksmith & Smart Lock Services KL & Selangor",
      description:
        "Smart, mortice and deadbolt lock installation, replacement, re-keying and landed-house lockout help across KL & Selangor. Request assistance."
    }
  },
  "glass-aluminium": {
    en: {
      title: "Glass & Aluminium Services KL & Selangor",
      description:
        "Shower screens, aluminium windows, glass office partitions and wall mirrors made and installed across KL & Selangor. Discuss measurements and scope."
    }
  },
  cctv: {
    en: {
      title: "CCTV Installation Services KL & Selangor",
      description:
        "Wired PoE and wireless CCTV installation, NVR, mobile-app setup, camera additions and system checks across KL & Selangor. Request a site quote."
    }
  },
  autogate: {
    en: {
      title: "Auto Gate Installation & Repair KL & Selangor",
      description:
        "Swing, folding and sliding auto gate installation plus motor, sensor and battery-backup service across KL & Selangor. Request an assessment."
    }
  },
  welding: {
    en: {
      title: "Welding & Metal Fabrication KL & Selangor",
      description:
        "Custom grilles, gates, staircase steelwork and on-site welding repair in mild steel, stainless steel or aluminium across KL & Selangor. Get a quote."
    }
  },
  "awning-installation": {
    en: {
      title: "Awning Installation KL & Selangor | Car Porch & Polycarbonate",
      description:
        "Custom awning installation across KL & Selangor: car porch, balcony, entrance and shopfront awnings in polycarbonate, metal deck, ACP, glass or fabric, plus awning replacement. Request a project quote on WhatsApp."
    },
    ms: {
      title: "Pemasangan Awning KL & Selangor | Car Porch & Polikarbonat",
      description:
        "Pemasangan awning tersuai di KL & Selangor: awning car porch, balkoni, pintu masuk dan kedai dalam polikarbonat, metal deck, ACP, kaca atau fabrik, serta penggantian awning. Minta sebut harga projek di WhatsApp."
    },
    zh: {
      title: "吉隆坡与雪兰莪雨棚安装 | 车棚与聚碳酸酯雨棚",
      description:
        "吉隆坡与雪兰莪定制雨棚安装：车棚、阳台、入口及店面雨棚，可选聚碳酸酯、金属瓦、ACP、玻璃或布艺，并提供雨棚更换。通过 WhatsApp 获取项目报价。"
    }
  }
};

export function getServiceSeo(
  slug: string,
  locale: "en" | "ms" | "zh",
  fallback: ServiceSeoCopy
): ServiceSeoCopy {
  return serviceSeo[slug]?.[locale] ?? fallback;
}
