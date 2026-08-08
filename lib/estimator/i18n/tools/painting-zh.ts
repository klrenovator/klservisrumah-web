import type { MessageDictionary } from "../../../i18n";

export const paintingZhDict: MessageDictionary = {
  meta: {
    name: "油漆费用计算器",
    resultLabel: "油漆工程估价"
  },
  steps: {
    paintingType: {
      title: "您要油漆什么?",
      subtitle: "选择只刷墙、只刷天花、或墙面+天花——计算方式即时变化。"
    },
    roomSize: {
      title: "房间多大?",
      subtitle: "选择预设或输入自定义尺寸——无需量尺。"
    },
    ceilingHeight: {
      title: "天花高度?",
      subtitle: "仅在包含墙面时需要。选只刷天花时隐藏。"
    },
    scope: {
      title: "您要油漆什么?",
      subtitle: "选择表面、项目或房产类型——每种计价方式不同。"
    },
    area: {
      title: "面积多大?",
      subtitle: "点选常见尺寸——无需量尺。"
    },
    condition: {
      title: "表面状况如何?",
      subtitle: "底层处理决定油漆寿命——如实选择才能获得准确数字。"
    },
    paint: {
      title: "想要哪种油漆系统?",
      subtitle: "我们所有等级均使用 Nippon、Dulux、Jotun 正品。"
    },
    colour: {
      title: "颜色方向?",
      subtitle: "颜色影响覆盖率——深色通常需要多涂一层。"
    },
    access: {
      title: "现场出入方便吗?",
      subtitle: "高度与出入条件决定我们携带的安全设备。"
    },
    urgency: {
      title: "希望什么时候完工?",
      subtitle: "标准排期价格最低。"
    }
  },
  fields: {
    paintingType: {
      label: "油漆类型",
      help: "只刷墙 = 2×(长+宽)×高,只刷天花 = 长×宽,墙+天花 = 两者相加"
    },
    roomSize: { label: "房间尺寸" },
    roomPreset: { label: "房间尺寸" },
    paintingArea: { label: "油漆面积" },
    customLength: { label: "长度" },
    customWidth: { label: "宽度" },
    customHeight: { label: "天花高度" },
    ceilingHeight: { label: "天花高度", help: "马来西亚标准天花 10 英尺。只刷天花时隐藏。" },
    target: {
      label: "油漆范围",
      help: "选择最接近的一项。估价后可在 WhatsApp 上追加其他范围。"
    },
    propertySize: { label: "房产建筑面积" },
    itemCount: { label: "多少件?" },
    condition: { label: "整体表面状况" },
    extraPrep: { label: "需要额外处理吗?", help: "可选——勾选所有适用项。" },
    grade: { label: "油漆等级" },
    features: { label: "想要的油漆特性", help: "可选——每项特性对应真实产品系列。" },
    paintSupply: { label: "油漆由谁提供?" },
    colour: { label: "颜色偏好" },
    access: { label: "出入条件" },
    urgency: { label: "期望时间" }
  },
  paintingTypes: {
    "walls-only": {
      label: "只刷墙",
      service: "室内墙面翻新油漆",
      hint: "2 × (长 + 宽) × 高",
      note: "封底修补后涂两层面漆"
    },
    "ceiling-only": {
      label: "只刷天花",
      service: "天花翻新油漆",
      hint: "长 × 宽 — 无需高度",
      note: "适用于天花污渍与变色"
    },
    "walls-ceiling": {
      label: "墙面 + 天花",
      service: "全房翻新油漆 — 墙面+天花",
      hint: "墙面积 + 天花面积",
      note: "全房翻新最受欢迎"
    }
  },
  roomPresets: {
    "10x10": { label: "10 × 10 英尺", hint: "小卧室 · 100 平方英尺地板 · 占吉隆坡 40%" },
    "12x12": { label: "12 × 12 英尺", hint: "标准卧室 · 144 平方英尺地板" },
    "12x15": { label: "12 × 15 英尺", hint: "主人房 · 180 平方英尺地板" },
    "15x15": { label: "15 × 15 英尺", hint: "大厅 · 225 平方英尺地板" },
    "20x20": { label: "20 × 20 英尺", hint: "开放式空间 · 400 平方英尺地板" },
    custom: { label: "自定义尺寸", hint: "输入您自己的长和宽" },
    "8x8": { hint: "小卧室 / 储藏室" },
    "8x10": { hint: "单人卧室" },
    "10x10_old": { hint: "标准卧室" },
    "10x12": { hint: "主人房" },
    "12x12_old": { hint: "大卧室" },
    "12x15_old": { hint: "客厅" },
    "15x15_old": { hint: "大客厅" },
    "20x20_old": { hint: "开放式空间" }
  },
  targets: {
    "interior-walls": {
      label: "室内墙壁",
      service: "室内墙壁翻新油漆",
      note: "在封底、修补后的表面上涂两层面漆。"
    },
    ceiling: { label: "天花板", service: "天花板翻新油漆" },
    "single-room": { label: "整个房间(墙壁+天花板)", service: "房间翻新油漆配套" },
    "feature-wall": { label: "特色墙 / 背景墙", service: "特色墙油漆" },
    staircase: { label: "楼梯墙 / 挑高空间", service: "高挑空楼梯油漆" },
    "exterior-walls": { label: "室外 / 外墙", service: "外墙耐候油漆" },
    "boundary-wall": { label: "围墙 / 边界墙", service: "围墙油漆" },
    roof: { label: "屋顶 / 屋顶涂层", service: "屋顶涂层与隔热反射油漆" },
    "car-porch": { label: "车棚 / 雨棚", service: "车棚翻新油漆" },
    doors: { label: "门", service: "门翻新处理", noun: "门" },
    windows: { label: "窗 / 窗框", service: "窗框翻新油漆", noun: "窗" },
    "main-gate": { label: "大门", service: "大门除锈与翻新油漆", noun: "门扇" },
    "metal-fence": { label: "铁花围栏 / 铁栅", service: "铁花围栏油漆" },
    "wooden-fence": { label: "木围栏 / 凉棚", service: "木围栏着色与油漆" },
    "stair-railing": { label: "楼梯扶手", service: "扶手翻新油漆", noun: "扶手段(10 英尺)" },
    "steel-structure": { label: "钢结构 / 雨棚架", service: "钢结构防护涂层" },
    cabinets: { label: "橱柜(一般)", service: "橱柜喷漆与翻新", noun: "橱柜门" },
    "kitchen-cabinets": { label: "厨房橱柜", service: "厨房橱柜翻新", noun: "橱柜门" },
    wardrobes: { label: "衣柜", service: "衣柜翻新", noun: "衣柜门" },
    apartment: { label: "公寓 — 全室内", service: "公寓全室翻新油漆" },
    condominium: {
      label: "共管公寓 — 全室内",
      service: "共管公寓全室翻新油漆",
      note: "包含电梯保护与遵守管理处施工时间。"
    },
    "landed-house": { label: "有地房屋 — 全室内", service: "有地房屋全室翻新油漆" },
    "landed-exterior": { label: "有地房屋 — 全室外", service: "房屋全外墙油漆" },
    office: {
      label: "办公室",
      service: "商业办公室油漆",
      note: "可安排下班后或周末施工,避免影响办公。"
    },
    "shop-lot": { label: "店铺", service: "店铺油漆" },
    "commercial-building": {
      label: "商业大楼",
      service: "商业大楼油漆",
      note: "立面施工方式现场确认。"
    },
    factory: { label: "工厂", service: "工厂油漆与涂层" },
    warehouse: { label: "仓库", service: "仓库油漆与划线" }
  },
  areaPresets: {
    "8x8": { hint: "小卧室 / 储藏室" },
    "8x10": { hint: "单人卧室" },
    "10x10": { hint: "标准卧室" },
    "10x12": { hint: "主人房" },
    "12x12": { hint: "大卧室" },
    "12x15": { hint: "客厅" },
    "15x15": { hint: "大客厅" },
    "20x20": { hint: "开放式空间" },
    custom: { label: "自定义尺寸", hint: "输入您自己的尺寸" },
    ceilingSuffix: "天花板",
    roomWallsAndCeiling: "{label} 房间、天花板高 {height} 英尺 — 墙壁+天花板",
    roomWallSurface: "{label} 房间、天花板高 {height} 英尺 — 墙面",
    presetCeiling: "{label} 天花板"
  },
  propertySizes: {
    "600": { label: "600 平方英尺以下", hint: "单间 / 小公寓" },
    "900": { label: "600 – 900 平方英尺", hint: "两房公寓" },
    "1200": { label: "900 – 1,200 平方英尺", hint: "三房公寓" },
    "1600": { label: "1,200 – 1,600 平方英尺", hint: "排屋" },
    "2200": { label: "1,600 – 2,200 平方英尺", hint: "双层排屋" },
    "3000": { label: "2,200 – 3,000 平方英尺", hint: "半独立 / 独立洋房" },
    "4500": { label: "3,000 – 4,500 平方英尺", hint: "大洋房 / 店铺" },
    "8000": { label: "4,500 平方英尺以上", hint: "商业 / 工业" }
  },
  conditions: {
    "new-wall": { label: "新墙(从未油漆)", hint: "只需封底漆" },
    excellent: { label: "极佳 — 平整干净", hint: "直接重涂" },
    good: { label: "良好 — 轻微痕迹", hint: "轻度打磨与修补" },
    "previously-painted": { label: "曾油漆、状况良好", hint: "标准覆盖涂层" },
    "old-wall": { label: "旧墙、粉化表面", hint: "需要固粉底漆" },
    "minor-cracks": { label: "细微发丝裂纹", hint: "填补与局部批灰" },
    "heavy-cracks": { label: "严重 / 结构裂缝", hint: "开槽、填充与加固" },
    peeling: { label: "油漆剥落 / 起皮", hint: "刮除至坚实基层" },
    "water-damage": { label: "水渍 / 水损", hint: "封渍并检查水源" },
    mould: { label: "霉菌滋生", hint: "上漆前防霉清洗" },
    uneven: { label: "表面不平 / 波浪纹", hint: "找平砂浆" },
    "bare-cement": { label: "素水泥 / 灰泥面", hint: "全套底漆系统" },
    "rusty-metal": { label: "金属表面生锈", hint: "除锈加防锈底漆" }
  },
  extraPrep: {
    "skim-coat": { label: "需要批灰(skim coat)", hint: "全表面找平,达到镜面效果" },
    waterproofing: { label: "需要防水", hint: "潮湿或渗水墙必须先封固" },
    "mould-treatment": { label: "防霉处理", hint: "防霉清洗与抗霉底漆" },
    "crack-repair": { label: "裂缝开槽填补", hint: "结构或沉降裂缝" },
    "wallpaper-removal": { label: "墙纸 / 旧涂层清除", hint: "上漆前彻底剥除" },
    "furniture-shift": { label: "大家具搬移", hint: "搬移并复位大件物品" }
  },
  grades: {
    economy: { label: "经济型", hint: "平价乳胶漆,2 层面漆" },
    standard: { label: "标准型", hint: "Nippon / Dulux 中端系列" },
    premium: { label: "高级型", hint: "可擦洗、耐污渍系列" },
    luxury: { label: "豪华型", hint: "顶级饰面、设计师色彩" }
  },
  features: {
    "low-voc": { label: "低 VOC" },
    odourless: { label: "无味配方" },
    washable: { label: "可擦洗 / 耐刷洗" },
    "anti-mould": { label: "防霉" },
    "weather-resistant": { label: "耐候" },
    "premium-exterior": { label: "高级外墙系统" },
    "heat-reflective": { label: "隔热反射" },
    "anti-rust": { label: "防锈 / 金属底漆" }
  },
  colours: {
    same: { label: "相同颜色", hint: "直接翻新,覆盖最佳" },
    light: { label: "浅色", hint: "标准两层覆盖" },
    dark: { label: "深色", hint: "通常需要第三层" },
    multiple: { label: "多种颜色", hint: "额外遮蔽与收边工时" },
    accent: { label: "特色墙", hint: "一面点缀墙" }
  },
  access: {
    easy: { label: "出入方便 — 地面层", hint: "标准梯具作业" },
    "first-floor": { label: "一楼", hint: "轻型架台" },
    "second-floor": { label: "二楼", hint: "加长梯具" },
    "high-rise": { label: "高层单位", hint: "需预订电梯并保护地板" },
    scaffold: { label: "需要脚手架", hint: "脚手架搭设与拆除" },
    "rope-access": { label: "需要绳索作业", hint: "持证高空作业团队" },
    difficult: { label: "出入困难 / 空间狭窄", hint: "作业空间受限" }
  },
  urgency: {
    standard: { label: "标准排期", hint: "下一个可约档期" },
    "7-days": { label: "7 天内", hint: "优先排期" },
    urgent: { label: "加急 — 48 小时", hint: "为您调配班组" },
    emergency: { label: "紧急 / 当天", hint: "立即派工" }
  },
  paintSupply: {
    include: { label: "报价含油漆", hint: "我们采购并送抵现场" },
    customer: { label: "我自己提供油漆", hint: "仅人工与辅料" }
  },
  basis: {
    item: "{count} × {noun}(每件油漆面约 {perItem} 平方英尺)",
    unitFallback: "件",
    property: "建筑面积 {sqft} 平方英尺 × {factor} 可涂表面系数",
    customCeiling: "{length} × {width} 英尺天花板",
    customRoomBoth: "{length} × {width} 英尺房间、天花板高 {height} 英尺 — 墙壁+天花板",
    customRoomWalls: "{length} × {width} 英尺房间、天花板高 {height} 英尺 — 墙面",
    newWallsOnly: "{length} × {width} 英尺 × {height} 英尺 — 墙 {wall} 平方英尺 按 2 × (长+宽) × 高",
    newCeilingOnly: "{length} × {width} 英尺 — 天花 {ceiling} 平方英尺 按 长 × 宽",
    newWallsCeiling: "{length} × {width} 英尺 × {height} 英尺 — 墙 {wall} + 天花 {ceiling} = {total} 平方英尺"
  },
  durations: {
    halfDay: "半天(3–4 小时)",
    oneDay: "1 个工作日",
    oneTwoDays: "1–2 个工作日",
    twoThreeDays: "2–3 个工作日",
    fourFiveDays: "4–5 个工作日",
    oneWeek: "约 1 个工作周",
    oneTwoWeeks: "1–2 个工作周",
    weeks: "约 {n} 个工作周"
  },
  packages: {
    luxury: "豪华饰面配套",
    premium: "高级防护配套",
    economy: "经济翻新配套",
    standard: "标准重涂配套"
  },
  formats: {
    itemCountOne: "{value} 件",
    itemCountMany: "{value} 件"
  },
  bands: { interior: "室内", exterior: "室外" },
  breakdown: {
    paintingType: "油漆类型",
    roomDimensions: "房间尺寸",
    paintedArea: "油漆面积",
    totalArea: "总可油漆面积",
    wallArea: "墙面积",
    ceilingArea: "天花面积",
    paintQuantity: "所需油漆数量",
    paintQuantityValue: "{litres} 升 {coats} 层",
    paintQuantityNote: "~{area} 平方英尺 × {coats} 层 ÷ 每升 {coverage} 平方英尺 含 10% 损耗",
    paintedAreaValue: "{area} 平方英尺",
    appliedRate: "适用单价",
    appliedRateValue: "每平方英尺 RM {rate}",
    appliedRateNote: "网站公布区间 每平方英尺 RM {low}–RM {high}({band}工程)",
    skimCoat: "批灰底层处理",
    skimCoatNote: "{area} 平方英尺 × 公布批灰单价 每平方英尺 RM {rate}",
    crack: "裂缝开槽填补",
    crackNote: "约 {linearFt} 延英尺 × 公布单价 每延英尺 RM {rate}",
    damp: "潮湿 / 防水补救",
    dampNote: "网站公布墙体潮湿与泛碱修复价格",
    mould: "防霉处理",
    mouldNote: "防霉清洗与抗霉底漆",
    wallpaper: "旧涂层 / 墙纸清除",
    wallpaperNote: "上底漆前的剥除人工",
    furniture: "家具搬移与保护",
    furnitureNote: "网站公布杂工单项价格",
    derust: "除锈与防锈底漆",
    rescrape: "刮除与重新底漆",
    rescrapeNote: "网站公布墙体裂缝与潮湿修复价格",
    minimum: "已套用最低工程金额",
    minimumNoteExterior: "网站公布室外起步价({label})",
    minimumNoteRoom: "网站公布室内起步价({label})",
    minimumNoteSmall: "网站公布小工程起步价({label})",
    supply: "您自行提供油漆",
    supplyValue: "− RM {amount}",
    supplyNote: "已扣除油漆成本;保留辅料与人工"
  },
  addons: {
    ceilingRefresh: { label: "加做天花板翻新油漆", note: "同一趟施工,同一套防护" },
    crackPackage: { label: "墙体裂缝与潮湿修复配套", note: "公布价格:{label}" },
    skimUpgrade: { label: "全面批灰升级(镜面效果)", note: "公布价格:{label}" },
    waterproof: { label: "潮湿墙防水处理", note: "公布价格:{label}" },
    postClean: { label: "油漆后清洁", note: "公布价格:每次上门 RM {price} 起" },
    gateGrille: { label: "大门铁花防锈油漆", note: "除锈处理加两层防护面漆" }
  },
  related: {
    service: { label: "房屋油漆服务", desc: "完整范围、保修与流程" },
    costGuide: { label: "油漆费用指南", desc: "网站公布 2026 行情价格" },
    skimCoat: { label: "批灰与墙面找平", desc: "适用于不平或修补过的墙" },
    waterproofing: { label: "防水工程", desc: "油漆前先解决潮湿" },
    plasterCeiling: { label: "石膏天花板", desc: "天花板油漆前先修复" }
  },
  articles: {
    colours: "马来西亚选漆颜色 5 大技巧",
    repaint: "什么时候该重新油漆房屋?",
    condoVs: "公寓与排屋翻新油漆对比"
  },
  assumptions: {
    topcoats: "在处理好并上过底漆的表面涂两层面漆;若换色需要则加第三层。",
    protection: "家具保护、遮蔽与每日清洁已包含在人工费用内。",
    belowMinimum: "您的范围低于我们的最低工程金额,因此按网站公布起步价计算。",
    measuredArea: "价格按您选择的实际油漆表面面积计算,而非地板面积。",
    builtUp: "建筑面积按巴生谷标准系数换算为可涂表面;现场测量确认准确数字。",
    customerPaint: "您提供油漆;开工前我们会确认所需升数。",
    commercial: "商业与工业范围须经出入与安全勘察后确认。"
  },
  maintenance: {
    wash: "每年雨季前清洗外墙一次,防止霉菌堆积。",
    cracks: "及早修补细微裂纹——填补费用远低于全面批灰。",
    touchUp: "预留 1 升最终颜色以便日后补漆;交付时我们会为您贴标。"
  }
};
