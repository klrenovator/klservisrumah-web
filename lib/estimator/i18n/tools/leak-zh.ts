/**
 * Water Leak Triage — Chinese (Simplified) content dictionary.
 * Key set and {tokens} must stay identical to leak-en.ts (harness-checked).
 */

import type { MessageDictionary } from "../../../i18n";

export const leakZhDict: MessageDictionary = {
  meta: {
    name: "漏水检测估价",
    resultLabel: "维修费用估价"
  },
  steps: {
    location: {
      title: "哪里漏水?",
      subtitle: "选择您最先看到水迹或潮湿的位置。"
    },
    symptoms: {
      title: "您看到什么情况?",
      subtitle: "勾选所有症状——这是诊断的关键依据。"
    },
    severity: {
      title: "目前有多严重?",
      subtitle: "请如实选择——这决定紧急程度和派工优先级。"
    },
    duration: {
      title: "漏水多久了?",
      subtitle: "漏水越久,通常隐藏损坏越多。"
    },
    property: {
      title: "告诉我们您的房产情况",
      subtitle: "建筑类型和屋龄影响出入与维修方式。"
    }
  },
  fields: {
    location: { label: "漏水位置" },
    symptoms: { label: "症状" },
    severity: { label: "漏水严重程度" },
    affected: { label: "受影响面积多大?" },
    duration: { label: "漏水时长" },
    propertyType: { label: "房产类型" },
    propertyAge: { label: "屋龄" }
  },
  locations: {
    bathroom: {
      label: "浴室",
      service: "浴室防水与漏水维修",
      causes: {
        "0": "地板防水层失效",
        "1": "瓷砖填缝开裂或脱落",
        "2": "地漏或花洒混合阀接口渗漏",
        "3": "马桶法兰密封失效"
      }
    },
    kitchen: {
      label: "厨房",
      service: "厨房水管漏水维修",
      causes: {
        "0": "水槽存水弯或排水接口松动",
        "1": "水槽下软管老化",
        "2": "隐蔽供水管开裂",
        "3": "排水支管堵塞返水"
      }
    },
    roof: {
      label: "屋顶",
      service: "屋顶漏水检测与维修",
      causes: {
        "0": "瓦片开裂或滑移",
        "1": "屋脊砂浆失效 / 需重新勾缝",
        "2": "天沟或泛水板锈蚀",
        "3": "排水沟堵塞导致溢水"
      }
    },
    ceiling: {
      label: "天花板",
      service: "天花板漏水修复与还原",
      causes: {
        "0": "楼上单位或浴室渗漏",
        "1": "屋顶或天沟水沿楼板蔓延",
        "2": "空调管道冷凝水",
        "3": "吊顶内隐蔽水管爆裂"
      }
    },
    balcony: {
      label: "阳台 / 后院",
      service: "阳台防水",
      causes: {
        "0": "阳台防水层失效",
        "1": "阳台地漏堵塞",
        "2": "板边砂浆层开裂",
        "3": "坡度不良导致积水"
      }
    },
    wall: {
      label: "墙壁",
      service: "墙体潮湿与注浆处理",
      causes: {
        "0": "地潮沿墙上升",
        "1": "墙内暗管渗漏",
        "2": "外墙裂缝渗入雨水",
        "3": "窗台 / 窗框密封失效"
      }
    },
    outdoor: {
      label: "室外 / 花园",
      service: "室外管道与排水维修",
      causes: {
        "0": "地下供水管开裂",
        "1": "花园水龙头或软管接头渗漏",
        "2": "排水管破裂",
        "3": "水表接口损坏"
      }
    },
    "water-tank": {
      label: "水箱",
      service: "水箱与水泵维修",
      causes: {
        "0": "浮球阀失效",
        "1": "水箱本体或配件开裂",
        "2": "溢流管持续排水",
        "3": "水箱出水口松动"
      }
    },
    pipe: {
      label: "水管(明管)",
      service: "水管漏水维修",
      causes: {
        "0": "管段锈蚀或开裂",
        "1": "接头或卡压配件失效",
        "2": "水压过高压迫接头",
        "3": "镀锌铁管老化"
      }
    },
    toilet: {
      label: "马桶",
      service: "马桶维修与重新密封",
      causes: {
        "0": "冲水阀或进水垫圈磨损",
        "1": "蜡圈 / 橡胶法兰密封失效",
        "2": "水箱或缸体开裂",
        "3": "进水软管接头松动"
      }
    },
    tap: {
      label: "水龙头 / 混合阀",
      service: "水龙头与混合阀更换",
      causes: {
        "0": "阀芯或垫圈磨损",
        "1": "龙头本体锈蚀",
        "2": "软管接头松动或开裂",
        "3": "螺纹密封损坏"
      }
    },
    "water-heater": {
      label: "热水器",
      service: "热水器维修",
      causes: {
        "0": "泄压阀失效",
        "1": "内胆或加热管锈蚀",
        "2": "进出水接口渗漏",
        "3": "水垢堆积压迫内胆"
      }
    }
  },
  symptoms: {
    "wet-wall": { label: "墙面湿斑或潮湿", implies: "水分已经进入墙体结构层。" },
    dripping: { label: "正在滴水", implies: "供水侧正在持续漏水的活跃渗漏。" },
    "low-pressure": { label: "水压偏低", implies: "掉压通常意味着水在到达出水口前流失。" },
    "brown-stain": { label: "褐色 / 黄色水渍", implies: "长期的慢性渗漏一直在浸泡基层。" },
    "ceiling-bubble": { label: "天花板起泡或下垂", implies: "水积在板上方——有坍塌风险。" },
    cracks: { label: "出现裂缝", implies: "湿气变化正在拉裂灰泥或砂浆层。" },
    mould: { label: "霉斑或霉味", implies: "长期潮湿——健康与饰面双重隐患。" },
    "burst-pipe": { label: "爆管 / 积水", implies: "紧急情况:请立即关闭总水阀。" },
    "pipe-noise": { label: "管道嘶嘶或敲击声", implies: "带压暗漏的典型特征。" },
    "meter-spinning": { label: "关紧水阀水表仍转动", implies: "确认供水侧存在隐藏漏水。" },
    "high-bill": { label: "水费异常偏高", implies: "隐性漏水已持续数周。" },
    "peeling-paint": { label: "油漆剥落 / 起泡", implies: "潮气正顶穿漆膜。" }
  },
  severityLevels: {
    slow: { label: "轻微 — 仅在大雨或长时间淋浴后出现", hint: "间歇性潮湿" },
    moderate: { label: "中等 — 每天可见", hint: "水渍或潮斑缓慢扩大" },
    fast: { label: "较快 — 每周都在扩散", hint: "明显持续恶化" },
    severe: { label: "严重 — 持续流水", hint: "用水桶接、积水、滴水" }
  },
  durations: {
    today: "今天刚开始",
    week: "最近一周内",
    month: "约一个月",
    months: "好几个月",
    year: "超过一年"
  },
  propertyAge: {
    new: "5 年以下",
    mid: "5 – 15 年",
    older: "15 – 30 年",
    old: "30 年以上"
  },
  propertyType: {
    condo: "公寓 / 共管公寓",
    terrace: "排屋",
    "semi-d": "半独立 / 独立洋房",
    shop: "店铺 / 办公室"
  },
  affected: {
    spot: "一个小点(手掌大小)",
    patch: "一块区域(最大 1 m²)",
    large: "较大范围(2 – 4 m²)",
    multiple: "多个房间受影响"
  },
  severityNote: {
    routine: "可观察后按您的时间安排维修——暂无即时损坏风险。",
    emergency: "请立即关闭总水阀并致电我们——持续漏水会迅速造成结构和电路损坏。",
    urgent: "请在 24–48 小时内预约。损坏正在扩散,拖延只会让维修范围扩大。",
    soon: "请在本周内预约。漏水已经成形,但尚未造成结构损坏。"
  },
  result: {
    durationEmergency: "当天紧急止漏,完整维修 1–2 天",
    durationHigh: "1–2 个工作日,另加养护时间",
    durationMid: "半天至 1 个工作日",
    durationLow: "现场 2–4 小时",
    packageEmergency: "紧急漏水响应",
    packageUrgent: "优先漏水维修",
    packageRoutine: "预约漏水维修",
    causeDetail: "巴生谷这一屋龄房产中,{location}漏水的常见原因。",
    quoteOnlyReason: "严重的浴室漏水往往需要敲除重铺瓷砖——该范围须现场检查后报价。"
  },
  breakdown: {
    publishedRate: "公布价格:{label}",
    pu: "PU 注浆堵漏",
    puValueOne: "{points} 个注浆点 × RM {rate}",
    puValueMany: "{points} 个注浆点 × RM {rate}",
    bathroom: "湿区防水(免敲砖系统)",
    bathroomNote: "免敲砖处理公布区间 RM {low}–RM {high}",
    hack: "可能需要敲除重铺范围",
    hackValue: "RM {low}–RM {high}",
    hackNote: "公布敲除区间——仅当砖下防水层已失效",
    roof: "屋顶漏水检测与维修",
    membrane: "局部防水层修补",
    membraneNote: "约 {area} 平方英尺 × 公布单价 每平方英尺 RM {rate}",
    ceiling: "水损天花板修复",
    source: "源头处理(楼板注浆)",
    sourceNote: "依据公布 PU 注浆价折算——封堵源头后才还原天花板",
    pipe: "漏水检测与管道维修",
    pipeNote: "公布价格:{label},另计维修复杂度",
    heater: "热水器维修",
    fixture: "洁具维修 / 更换",
    external: "室外管道排查与维修",
    emergencyUplift: "紧急派工附加费",
    emergencyUpliftNote: "仅限当天紧急响应;开工前明确告知",
    propertyFactor: "房产系数",
    propertyFactorValue: "× {factor}",
    propertyFactorNote: "{type}、{age}——老旧与高层房产需要更多出入管理"
  },
  addons: {
    ceilingReinstate: { label: "更换天花板并重新油漆", note: "公布价格:{label}" },
    wallDamp: { label: "墙体潮湿与泛碱处理", note: "公布价格:{label}" },
    gutter: { label: "排水沟清理与校正", note: "公布价格:{label}" },
    fullBathroom: { label: "浴室整体防水配套", note: "公布价格:{label}" },
    repaint: { label: "维修后重油受影响墙面 / 天花板", note: "公布价格:{label}" }
  },
  related: {
    waterproofing: { label: "防水与 PU 注浆", desc: "从源头妥善封堵" },
    plumbing: { label: "水管漏水维修", desc: "隐蔽管道检测" },
    ceiling: { label: "天花板维修", desc: "还原受损板材" },
    roof: { label: "屋顶维修", desc: "瓦片、屋脊与天沟" },
    costGuide: { label: "防水费用指南", desc: "公布 2026 价格" }
  },
  articles: {
    ceilingFix: "免敲砖修复天花板漏水的方法",
    hiddenLeak: "吉隆坡隐蔽漏水检测",
    puVs: "PU 注浆与整体防水对比"
  },
  maintenance: {
    meter: "每月在关紧所有水龙头后检查水表一次——读数走动即暗藏漏水。",
    gutters: "雨季前清理地漏与排水沟。",
    silicone: "每 2–3 年重新打浴室硅胶缝,保护底层防水膜。"
  },
  assumptions: {
    diagnosis: "诊断仅基于您的回答——确切源头将用湿度计确认,必要时现场做热成像。",
    scope: "维修数字涵盖漏水源头;饰面工程(瓷砖、油漆、天花板)另列为附加项。",
    emergency: "紧急附加费仅在您要求当天派工时收取。"
  }
};
