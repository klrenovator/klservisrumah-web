/**
 * Ceiling Repair & Installation Estimator — Chinese (Simplified) content dictionary.
 * Key set and {tokens} must stay identical to ceiling-en.ts (harness-checked).
 */

import type { MessageDictionary } from "../../../i18n";

export const ceilingZhDict: MessageDictionary = {
  meta: {
    name: "天花板维修估价器",
    resultLabel: "天花板工程估价"
  },
  steps: {
    type: {
      title: "天花板是什么材质?",
      subtitle: "不确定?选最后一项,我们现场确认。"
    },
    work: {
      title: "需要做什么?",
      subtitle: "维修、局部更换或全新设计。"
    },
    area: {
      title: "面积多大?",
      subtitle: "点选最接近的尺寸——无需量尺。"
    },
    damage: {
      title: "目前状况如何?",
      subtitle: "损坏程度决定龙骨需要重建多少。"
    },
    access: {
      title: "天花板高度与时间",
      subtitle: "高度决定我们携带的登高设备。"
    }
  },
  fields: {
    ceilingType: { label: "天花板材质" },
    workType: { label: "工程类型" },
    areaPreset: { label: "天花板 / 隔断面积" },
    customLength: { label: "长度" },
    customWidth: { label: "宽度" },
    damage: { label: "损坏程度" },
    extras: { label: "还需要什么?", help: "可选——勾选所有适用项。" },
    lightCount: { label: "需要拆装多少盏灯?" },
    height: { label: "天花板高度" },
    urgency: { label: "什么时候需要?" }
  },
  formats: {
    fittingOne: "{value} 盏",
    fittingMany: "{value} 盏"
  },
  ceilingTypes: {
    gypsum: { label: "石膏板", hint: "公寓与新房最常见" },
    plaster: { label: "抹灰天花板", hint: "批灰饰面石膏板" },
    pvc: { label: "PVC 扣板", hint: "防潮条形板" },
    "calcium-silicate": { label: "硅酸钙板", hint: "防火防潮板" },
    wood: { label: "木质", hint: "木条或胶合板天花板" },
    "cement-board": { label: "水泥板", hint: "湿区 / 室外檐底" },
    "not-sure": { label: "不确定", hint: "我们现场辨认" }
  },
  workTypes: {
    repair: { label: "维修现有天花板", hint: "修补、重批灰或更换局部" },
    "replace-section": { label: "更换局部", hint: "切除并重建受损板材" },
    "new-flat": { label: "新做平顶", hint: "简洁单层设计" },
    "new-tiered": { label: "新做叠级 / L-box 吊顶", hint: "隐藏 LED 灯槽设计" },
    "new-cove": { label: "新做弧形 / cove 吊顶", hint: "定制弧形造型" },
    partition: { label: "石膏隔断墙", hint: "分隔房间或办公室" }
  },
  areaPresets: {
    "small-patch": { label: "小修补(20 平方英尺以内)", hint: "一处受损点" },
    "8x10": { hint: "小卧室" },
    "10x10": { hint: "标准卧室" },
    "10x12": { hint: "主人房" },
    "12x15": { hint: "客厅" },
    "15x20": { hint: "大客厅" },
    "20x25": { hint: "开放式 / 店铺" },
    custom: { label: "自定义尺寸", hint: "输入您自己的尺寸" }
  },
  damage: {
    none: { label: "无损坏 — 新安装", hint: "全新施工" },
    hairline: { label: "仅发丝裂纹", hint: "接缝正常伸缩" },
    cracks: { label: "明显裂缝", hint: "接缝带失效" },
    stains: { label: "水渍", hint: "过去或正在渗漏" },
    sagging: { label: "板材下垂", hint: "挂件或龙骨失效" },
    hole: { label: "破洞或板裂", hint: "撞击或开洞" },
    collapsed: { label: "局部坍塌", hint: "板材已经掉落" },
    mould: { label: "霉菌滋生", hint: "长期潮湿" }
  },
  extras: {
    "water-damage": { label: "正在漏水受损", hint: "必须先处理漏水源头" },
    paint: { label: "完工后油漆天花板", hint: "两层面漆,配您墙面颜色" },
    "lighting-removal": { label: "拆装灯具", hint: "筒灯、吊灯或轨道灯" },
    "fan-removal": { label: "拆装吊扇", hint: "包含吊钩检查" },
    cornice: { label: "加装石膏线 / 饰线", hint: "周边装饰线条" },
    insulation: { label: "加装隔热层", hint: "隔热降噪" },
    debris: { label: "需要清运废料", hint: "旧板材运走处理" }
  },
  heights: {
    standard: { label: "标准(10 英尺以内)", hint: "普通梯具" },
    tall: { label: "较高(10 – 14 英尺)", hint: "加高平台" },
    void: { label: "挑高 / 中空", hint: "需要脚手架塔" }
  },
  urgency: {
    standard: { label: "标准排期", hint: "下一个可约档期" },
    "7-days": { label: "7 天内", hint: "优先排期" },
    urgent: { label: "加急 — 48 小时", hint: "为您调配班组" },
    emergency: { label: "紧急 — 有坍塌风险", hint: "当天先做安全处理" }
  },
  work: {
    "new-flat": {
      rateNote: "公布价格:{label}",
      service: "平面石膏板吊顶安装",
      package: "平顶配套"
    },
    "new-tiered": {
      rateNote: "公布价格:{label}",
      service: "叠级与 L-Box 吊顶安装",
      package: "L-Box 设计配套"
    },
    "new-cove": {
      rateNote: "公布价格:{label}",
      service: "弧形与 Cove 吊顶安装",
      package: "造型吊顶配套"
    },
    partition: {
      rateNote: "公布价格:{label}",
      service: "石膏板隔断墙",
      package: "隔断配套"
    },
    "replace-section": {
      rateNote: "公布安装区间 每平方英尺 RM {low}–RM {high}",
      service: "天花板局部更换",
      package: "局部更换配套"
    },
    repair: {
      rateNote: "公布价格:{label}",
      service: "石膏天花板维修与重批灰",
      package: "维修重批灰配套"
    }
  },
  breakdown: {
    ceilingArea: "天花板面积",
    ceilingAreaValue: "{area} 平方英尺",
    customBasis: "{length} × {width} 英尺",
    appliedRate: "适用单价",
    appliedRateValue: "每平方英尺 RM {rate}",
    appliedRateNote: "{rateNote} · {type}系数 ×{factor} · {damage}",
    leakSource: "漏水源头处理",
    leakSourceNote: "公布价格:{label}——封堵源头后才还原",
    painting: "天花板油漆",
    paintingNote: "{area} 平方英尺 × 公布室内油漆区间",
    lighting: "灯具拆装复原",
    lightingNoteOne: "{count} 个点,按公布 {label} 价格半价计",
    lightingNoteMany: "{count} 个点,按公布 {label} 价格半价计",
    fan: "吊扇拆装复位",
    fanNote: "依据公布 {label} 折算",
    cornice: "石膏线 / 装饰线条",
    corniceNote: "周边约 {perimeter} 延英尺",
    insulation: "隔热层",
    insulationNote: "板上铺设岩棉 / 铝箔层",
    debris: "废料清运",
    debrisNote: "网站公布杂工单项价格",
    minimum: "已套用最低工程金额",
    minimumNote: "公布起步价:{label}"
  },
  durations: {
    halfDay: "半天(3–4 小时)",
    oneDay: "1 个工作日",
    oneTwoDays: "1–2 个工作日",
    threeFourDays: "3–4 个工作日",
    aboutDays: "约 {n} 个工作日"
  },
  addons: {
    paint: { label: "油漆完工的天花板", note: "新表面上两层面漆" },
    downlights: { label: "新装 LED 筒灯", note: "公布价格:每个点 {label}" },
    coveLighting: { label: "隐藏灯槽 LED 灯带", note: "依据公布灯槽灯带价折算" },
    waterproof: { label: "漏水源头防水", note: "公布价格:{label}" },
    postClean: { label: "完工清洁", note: "撤除防尘布并全面吸尘" }
  },
  related: {
    plasterCeiling: { label: "石膏板吊顶服务", desc: "平顶、叠级与弧形设计" },
    ceilingRepair: { label: "天花板维修", desc: "水损与隔断" },
    costGuide: { label: "天花板费用指南", desc: "公布 2026 价格" },
    lighting: { label: "灯具安装", desc: "筒灯与灯带" },
    waterproofing: { label: "防水工程", desc: "止住天花板上方的渗漏" }
  },
  articles: {
    gypsumVs: "马来西亚石膏板与抹灰天花板对比",
    ceilingFix: "免敲砖修复天花板漏水的方法"
  },
  assumptions: {
    framing: "价格按标准 GI 龙骨常规间距、吊顶空间可正常进入计算。",
    services: "现有电线、空调管道与喷淋头以避让处理,不移位。",
    belowMinimum: "您的范围低于我们的最低工程金额,因此按网站公布起步价计算。",
    included: "板材与批灰材料已包含在每平方英尺单价内。",
    sagging: "下垂或坍塌的天花板先做安全处理;打开吊顶后确认最终范围。"
  },
  maintenance: {
    inspect: "季侯风大雨后检查天花板接缝——早期水渍处理最便宜。",
    ventilate: "保持吊顶内通风,防止空调管道冷凝。",
    reskim: "每 5–7 年重批灰并油漆一次,让接缝始终隐形。"
  }
};
