/**
 * TV Mount Advisor — Chinese (Simplified) content dictionary.
 * Key set and {tokens} must stay identical to tv-mount-en.ts (harness-checked).
 */

import type { MessageDictionary } from "../../../i18n";

export const tvMountZhDict: MessageDictionary = {
  meta: {
    name: "电视挂装估价",
    resultLabel: "安装费用估价"
  },
  steps: {
    tv: {
      title: "电视多大?",
      subtitle: "屏幕尺寸决定挂架承重等级和派工人数。"
    },
    wall: {
      title: "墙体是什么材质?",
      subtitle: "敲一敲——闷响是实心墙,空响是空心隔断。"
    },
    bracket: {
      title: "想要哪种挂架?",
      subtitle: "不确定?选最后一项,我们为您推荐。"
    },
    extras: {
      title: "走线、电源与附加项",
      subtitle: "以下项目都可在同一趟完成。"
    }
  },
  fields: {
    tvSize: { label: "电视尺寸" },
    wallType: { label: "墙体类型" },
    height: { label: "安装高度" },
    bracket: { label: "挂架类型" },
    bracketSupply: { label: "需要我们提供吗?" },
    powerPoint: { label: "电视后方有插座吗?" },
    extras: { label: "还要加什么?", help: "可选——勾选所有适用项。" }
  },
  tvSizes: {
    "32": { label: "32 英寸及以下", hint: "≈ 5 kg · VESA 200×200" },
    "43": { label: "40\" – 43\"", hint: "≈ 9 kg · VESA 200×200" },
    "55": { label: "50\" – 55\"", hint: "≈ 16 kg · VESA 400×400" },
    "65": { label: "60\" – 65\"", hint: "≈ 24 kg · VESA 400×400" },
    "75": { label: "70\" – 75\"", hint: "≈ 32 kg · VESA 600×400" },
    "85": { label: "80\" – 85\"", hint: "≈ 45 kg · VESA 800×400" },
    "98": { label: "85 英寸以上", hint: "商用显示屏 · 需两人抬运" }
  },
  wallTypes: {
    concrete: {
      label: "混凝土 / RC 墙",
      hint: "实心,敲击声沉闷",
      anchor: "M10 穿墙螺栓或套管锚栓打入 RC"
    },
    brick: {
      label: "砖墙 / 砌块墙",
      hint: "马来西亚住宅最常见",
      anchor: "M8 套管锚栓打入实心砖,避开灰缝"
    },
    plasterboard: {
      label: "石膏板隔断",
      hint: "空心,敲击有空响",
      anchor: "背板固定在金属龙骨上——绝不可只用板锚",
      warning: "石膏隔断无法仅靠板锚承受大电视。我们会加装横跨龙骨的木或钢背板。"
    },
    wood: {
      label: "木墙 / 胶合板墙",
      hint: "造型墙或木龙骨",
      anchor: "马车螺丝打入实木龙骨",
      warning: "我们会定位并打入龙骨;单靠胶合板面层不承重。"
    },
    "cement-board": {
      label: "水泥板隔断",
      hint: "龙骨上纤维水泥板",
      anchor: "穿透固定到龙骨并加荷载分散件"
    },
    "glass-tile": {
      label: "瓷砖墙",
      hint: "砖或混凝土上贴砖",
      anchor: "金钢石钻头缓慢穿过瓷砖打入墙体",
      warning: "瓷砖钻孔有轻微崩瓷风险;我们低速取芯并密封穿孔。"
    },
    "not-sure": {
      label: "不确定",
      hint: "我们到场检测墙体",
      anchor: "现场敲击测试加试钻确认"
    }
  },
  brackets: {
    fixed: { label: "固定式 / 贴墙", hint: "最薄外形,价格最低" },
    tilt: { label: "可调俯仰", hint: "高位安装时下俯视角" },
    "full-motion": { label: "全动旋转臂", hint: "可拉出旋转——负荷最大" },
    ceiling: { label: "吊装", hint: "自楼板垂挂" },
    "not-sure": { label: "帮我推荐", hint: "我们现场给建议" }
  },
  bracketSupply: {
    customer: { label: "我已有挂架", hint: "仅安装" },
    include: { label: "请提供挂架", hint: "按您电视匹配承重挂架" }
  },
  extras: {
    concealment: { label: "墙内隐藏走线", hint: "开槽、线管与修复" },
    trunking: { label: "明装线槽", hint: "可上漆的整洁线槽——免开槽" },
    "power-point": { label: "电视后方新装插座", hint: "持证电工施工" },
    soundbar: { label: "挂装 soundbar", hint: "挂架对齐电视下方" },
    shelf: { label: "设备悬浮式搁板", hint: "游戏机、路由器或机顶盒" },
    dismount: { label: "拆除旧电视 / 挂架", hint: "取下并修复墙面" },
    setup: { label: "设备连接与调试", hint: "接好信号源并检查画面" }
  },
  heights: {
    standard: { label: "标准高度", hint: "坐姿平视" },
    high: { label: "高位安装", hint: "高过柜体或壁炉" },
    "very-high": { label: "超高 / 挑高空间", hint: "需梯具或架台" }
  },
  powerPoint: {
    yes: "有,有插座",
    no: "那里没有插座"
  },
  durations: {
    oneHour: "现场约 1 小时",
    oneTwoHours: "现场 1–2 小时",
    twoFourHours: "现场 2–4 小时",
    halfDay: "半个工作日"
  },
  packages: {
    heavy: "大电视挂装配套",
    mediaWall: "影音墙全套配套",
    standard: "标准电视挂装"
  },
  breakdown: {
    mounting: "电视挂装 — {size}",
    mountingNote: "公布价格:{label} · 验证区间 RM {low}–RM {high}",
    factor: "墙体、挂架与高度系数",
    factorValue: "× {mult}",
    factorNote: "{wall} · {bracket}挂架 · {height}",
    bracketSupply: "{bracket}挂架供应",
    bracketSupplyRecommended: "推荐款",
    bracketSupplyNote: "按您电视的 VESA 孔位与重量匹配承重挂架",
    concealment: "墙内隐藏走线",
    concealmentNote: "开槽、穿管、修补找平,可上漆",
    trunking: "明装线槽",
    trunkingNote: "依据公布 {label} 价格折算",
    powerPoint: "电视后方新装插座",
    powerPointNote: "公布价格:{label}",
    soundbar: "soundbar 挂装",
    soundbarNote: "公布价格:{label}",
    shelf: "悬浮式搁板安装",
    shelfNote: "公布价格:{label}",
    dismount: "拆除旧电视 / 挂架",
    dismountNote: "取下、补孔并修复",
    setup: "设备连接与画面调试",
    setupNote: "接好信号源、标注接口、检查画面",
    minimum: "已套用最低上门费",
    minimumNote: "网站公布杂工起步价"
  },
  findings: {
    fixingTitle: "建议固定方式",
    bracketTitle: "建议挂架",
    bracketHeavy: "{size}的电视我们通常安装重型固定或俯仰挂架——全动臂对墙体施加的杠杆力大得多。",
    bracketFixed: "超薄固定挂架适合{size}的电视,可让机身贴近墙面。",
    bracketChoice: "{bracket} — {hint}。",
    loadTitle: "承重检查",
    loadExceeds: "{size}的电视超出{wall}不加固的安全承重。我们会加装背板或移至承重墙。",
    loadSafe: "按上述固定方式,{size}的电视在{wall}的安全承重范围内。",
    warningTitle: "您的墙体类型须知",
    noPowerTitle: "电视后方没有插座",
    noPowerDetail: "机后没有插座,电源线就会外露。同一趟加装隐藏插座是最整洁的做法。"
  },
  addons: {
    conceal: { label: "墙内隐藏走线", note: "开槽、线管与修复" },
    power: { label: "电视后方新装插座", note: "公布价格:{label}" },
    soundbar: { label: "soundbar 挂架与调平", note: "公布价格:{label}" },
    featureWall: { label: "电视柜与造型墙木工", note: "公布价格:{label}" },
    patchPaint: { label: "挂装后修补与油漆", note: "公布价格:{label}" }
  },
  related: {
    handyman: { label: "杂工服务", desc: "电视挂装、搁板与挂件" },
    costGuide: { label: "杂工费用指南", desc: "公布 2026 价格" },
    electrical: { label: "电路安装", desc: "新增电源与网络点" },
    carpentry: { label: "木工与造型墙", desc: "电视柜与影音墙" },
    lighting: { label: "灯具", desc: "电视后方氛围灯" }
  },
  articles: {
    safety: "电视挂墙安全指南"
  },
  service: {
    summary: "电视挂墙 — {size}装于{wall}"
  },
  maintenance: {
    bolts: "每 12 个月复查挂架螺栓,全动臂尤其要注意。",
    ventilation: "机身背后至少保留 5 cm 散热空间。",
    noExtraWeight: "切勿在电视挂架臂上悬挂额外重量(搁板、装饰)。"
  },
  assumptions: {
    scope: "估价按一台电视、一面墙、上述固定方式计算。",
    supplied: "所提供的挂架按您电视的重量与 VESA 孔位核定承重。",
    customerBracket: "您提供挂架——钻孔前我们会核对它是否适配您的电视。",
    belowMinimum: "小工程按我们公布的最低上门费计收。",
    wallCheck: "最终固定前,我们会用敲击测试与试钻确认墙体类型。"
  }
};
