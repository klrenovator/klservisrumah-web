/**
 * Plumbing Diagnostic Estimator — Chinese (Simplified) content dictionary.
 * Key set and {tokens} must stay identical to plumbing-en.ts (harness-checked).
 * NOTE: severity labels keep the " — " separator; the breakdown note renders
 * the short form before it.
 */

import type { MessageDictionary } from "../../../i18n";

export const plumbingZhDict: MessageDictionary = {
  meta: {
    name: "水管问题诊断",
    resultLabel: "维修费用估价"
  },
  steps: {
    problem: {
      title: "是什么问题?",
      subtitle: "选最接近的一项——估价后可在 WhatsApp 补充细节。"
    },
    severity: {
      title: "有多严重?",
      subtitle: "这决定紧急程度和派工优先级。"
    },
    location: {
      title: "在房子的哪个位置?",
      subtitle: "位置影响施工出入与管道走向。"
    },
    property: {
      title: "关于房产",
      subtitle: "老旧管道通常需要更多工夫才能触及。"
    },
    timing: {
      title: "什么时候需要水喉师傅?",
      subtitle: "紧急派工有附加费——开工前一定说明。"
    }
  },
  fields: {
    problem: { label: "水管问题" },
    severity: { label: "严重程度" },
    location: { label: "位置" },
    quantity: { label: "多少处洁具 / 点位受影响?" },
    houseType: { label: "房产类型" },
    propertyAge: { label: "屋龄" },
    partsSupply: { label: "配件由谁提供?" },
    timing: { label: "期望时间" }
  },
  formats: {
    pointOne: "{value} 处",
    pointMany: "{value} 处"
  },
  problems: {
    "blocked-sink": {
      label: "水槽堵塞",
      service: "下水道疏通与清洗",
      causes: {
        "0": "油污与食物残渣在存水弯堆积",
        "1": "排水管局部塌陷",
        "2": "与其他洁具共用的支管堵塞"
      }
    },
    "blocked-toilet": {
      label: "马桶堵塞",
      service: "马桶堵塞疏通",
      causes: {
        "0": "异物卡在排污弯内",
        "1": "排污立管或检查井堵塞",
        "2": "冲水量不足"
      }
    },
    "blocked-floor-trap": {
      label: "地漏堵塞",
      service: "地漏与排水疏通",
      causes: {
        "0": "头发与皂垢堆积",
        "1": "淤泥积存在地漏内",
        "2": "地漏格栅损坏"
      }
    },
    "outdoor-drain": {
      label: "室外排水沟堵塞",
      service: "室外排水疏通",
      causes: {
        "0": "落叶与淤泥堆积",
        "1": "树根侵入管道",
        "2": "管段破裂或塌陷"
      }
    },
    "pipe-leak": {
      label: "水管漏水",
      service: "漏水检测与维修",
      causes: {
        "0": "管段锈蚀或开裂",
        "1": "卡压接头失效",
        "2": "水压过高使配件受压"
      }
    },
    "concealed-leak": {
      label: "隐蔽 / 暗管漏水",
      service: "暗漏检测与维修",
      causes: {
        "0": "楼板下埋设供水管破损",
        "1": "墙内管接头渗漏",
        "2": "老旧镀锌管针孔锈蚀"
      }
    },
    "outdoor-pipe": {
      label: "室外水管漏水",
      service: "室外管道维修",
      causes: {
        "0": "地下供水管开裂",
        "1": "水表接口损坏",
        "2": "花园龙头配件失效"
      }
    },
    "low-pressure": {
      label: "水压偏低",
      service: "水压诊断与增压泵",
      causes: {
        "0": "总水阀半关或卡涩",
        "1": "老旧镀锌管结垢",
        "2": "压力泵或水箱浮球失效",
        "3": "隐藏漏水降低管路压力"
      }
    },
    "no-water": {
      label: "完全没水",
      service: "紧急恢复供水",
      causes: {
        "0": "总阀门关闭或失效",
        "1": "储水箱无水 / 浮球阀卡死",
        "2": "水泵电路故障",
        "3": "水务公司供水中断"
      }
    },
    "tap-replacement": {
      label: "更换水龙头",
      service: "水龙头与混合阀更换",
      causes: {
        "0": "阀芯或垫圈磨损",
        "1": "龙头本体锈蚀",
        "2": "螺纹密封损坏"
      }
    },
    "mixer-replacement": {
      label: "更换混合阀 / 花洒套装",
      service: "花洒混合阀更换",
      causes: {
        "0": "恒温阀芯失效",
        "1": "入墙接口锈蚀",
        "2": "滑杆或软管渗漏"
      }
    },
    "toilet-repair": {
      label: "马桶维修 / 更换",
      service: "马桶维修与安装",
      causes: {
        "0": "冲水阀或进水垫圈磨损",
        "1": "底座法兰密封失效",
        "2": "水箱开裂"
      }
    },
    "sink-install": {
      label: "厨房水槽安装 / 维修",
      service: "厨房水槽安装",
      causes: {
        "0": "水槽密封或卡扣失效",
        "1": "排水存水弯老化",
        "2": "进水接头松动"
      }
    },
    bidet: {
      label: "安装喷枪 / 手持花洒",
      service: "喷枪安装",
      causes: {
        "0": "软管老化",
        "1": "角阀渗漏",
        "2": "喷头磨损"
      }
    },
    "water-heater": {
      label: "热水器故障",
      service: "热水器维修与保养",
      causes: {
        "0": "加热管或温控器失效",
        "1": "潮气侵入导致 RCCB 跳闸",
        "2": "水垢降低出水量",
        "3": "泄压阀渗漏"
      }
    },
    "heater-install": {
      label: "新装热水器",
      service: "热水器安装",
      causes: {
        "0": "更换报废旧机",
        "1": "新浴室配置",
        "2": "升级为储水式容量"
      }
    },
    "pump-install": {
      label: "安装水泵 / 增压泵",
      service: "增压泵安装",
      causes: {
        "0": "高楼层长期低压",
        "1": "现有水泵失效",
        "2": "新装水箱配套"
      }
    }
  },
  severityLevels: {
    minor: { label: "轻微 — 烦人但还能用", hint: "排水缓慢、偶尔滴水" },
    moderate: { label: "中等 — 影响日常使用", hint: "一处洁具无法使用" },
    major: { label: "严重 — 整间无法使用", hint: "返水或完全堵死" },
    emergency: { label: "紧急 — 到处是水", hint: "积水或爆管" }
  },
  locations: {
    kitchen: "厨房",
    "bathroom-main": "主浴室",
    "bathroom-ensuite": "套间浴室",
    laundry: "洗衣房 / 后院",
    outdoor: "室外 / 花园",
    "roof-tank": "屋顶 / 水箱",
    multiple: "多个位置"
  },
  houseTypes: {
    condo: "公寓 / 共管公寓",
    terrace: "排屋",
    "semi-d": "半独立 / 独立洋房",
    shop: "店铺 / 办公室",
    factory: "工厂 / 仓库"
  },
  ages: {
    new: "5 年以下",
    mid: "5 – 15 年",
    older: "15 – 30 年",
    old: "30 年以上"
  },
  timing: {
    standard: { label: "标准排期", hint: "下一个可约档期" },
    today: { label: "最好今天", hint: "当天优先" },
    emergency: { label: "紧急现在", hint: "立即派工" },
    "after-hours": { label: "下班后 / 周末", hint: "正常时段以外" }
  },
  partsSupply: {
    include: { label: "报价含配件", hint: "我们提供 SIRIM 认证配件" },
    customer: { label: "我已买好配件", hint: "仅安装人工" }
  },
  severityNote: {
    routine: "暂无损坏风险——可按您的时间预约。",
    emergency: "请立即关闭总水阀并致电我们——失控的水会在数小时内损坏地板、天花板和电路。",
    urgent: "请在 24–48 小时内预约,以免问题恶化为水损。",
    soon: "请在本周内预约——故障只会越来越严重。"
  },
  durations: {
    oneHour: "现场约 1 小时",
    oneTwoHours: "现场 1–2 小时",
    halfDay: "半个工作日",
    oneDay: "1 个工作日",
    oneTwoDays: "1–2 个工作日"
  },
  packages: {
    emergency: "水管紧急响应",
    urgent: "优先水管维修",
    standard: "标准水管上门"
  },
  breakdown: {
    noteDrain: "公布价格:{label} · 验证区间 RM {low}–RM {high}",
    notePublished: "公布价格:{label}",
    noteHeaterInstall: "公布价格:{instant} – {storage}",
    additionalOne: "同一趟增加 {n} 处",
    additionalMany: "同一趟增加 {n} 处",
    additionalNote: "有折扣——不收第二次上门费",
    jobConditions: "施工条件",
    jobConditionsValue: "× {mult}",
    jobConditionsNote: "{severity}程度 · {location} · {house} · {age} · {timing}",
    supply: "您自行提供配件",
    supplyValue: "− RM {amount}",
    supplyNote: "已扣除材料成本;保留安装人工与工艺保修",
    minimum: "已套用最低上门费",
    minimumNote: "网站公布水管起步价"
  },
  findings: {
    causeDetail: "在屋龄{age}的{house}房产中,\"{problem}\"通常是由此引起的。"
  },
  addons: {
    inspection: {
      label: "全屋水管健康检查",
      note: "同一趟检查所有龙头、存水弯、阀门与明管"
    },
    drain: { label: "疏通全部排水与地漏", note: "公布价格:{label}" },
    leakDetection: { label: "电子暗漏检测", note: "公布价格:{label}" },
    heaterService: { label: "热水器保养与除垢", note: "公布价格:{label}" },
    waterproof: { label: "湿区防水检查", note: "公布价格:{label}" }
  },
  related: {
    plumbing: { label: "水管服务", desc: "持牌水喉师傅、SIRIM 配件" },
    costGuide: { label: "水管费用指南", desc: "公布 2026 价格" },
    waterHeater: { label: "热水器服务", desc: "安装、维修与除垢" },
    waterproofing: { label: "防水工程", desc: "湿区防护" },
    emergency: { label: "紧急水管", desc: "当天派工" }
  },
  articles: {
    hiddenLeak: "吉隆坡隐蔽漏水检测",
    monsoon: "巴生谷季侯风家居准备"
  },
  maintenance: {
    drains: "每月往厨房排水口倒热水与酶清洁剂,防止油污堆积。",
    rccb: "每 6 个月测试 RCCB 与热水器泄压阀。",
    hoses: "水槽下软管每 5 年更换——它们是最常见的爆裂点。"
  },
  assumptions: {
    visit: "估价按一次上门标准工具计算;CCTV 管道探测等专用设备另行报价。",
    customerParts: "您提供洁具或配件;我们仅保修工艺。",
    includedParts: "含 SIRIM 认证标准配件;高端品牌洁具另行报价。",
    belowMinimum: "小工程按我们公布的最低上门费计收。",
    pressureTest: "维修后包含水压测试。"
  }
};
