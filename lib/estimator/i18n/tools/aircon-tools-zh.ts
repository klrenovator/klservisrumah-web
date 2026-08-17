import type { MessageDictionary } from "../../../i18n";

export const airconToolsZhDict: MessageDictionary = {
  "common": {
    "duration": "当天",
    "package": "空调服务",
    "relatedService": "空调服务",
    "relatedServiceDesc": "查看完整空调服务页面",
    "relatedPrice": "空调价格指南",
    "relatedPriceDesc": "查看 2026 价格表",
    "assumption": "仅为估算——最终报价需现场勘查后确认。",
    "access": {
      "easy": "容易接近",
      "difficult": "难以接近"
    }
  },
  "install": {
    "meta": { "name": "空调安装费用计算器" },
    "unit": {
      "wall1": "挂壁机 1.0–1.5 HP",
      "wall2": "挂壁机 2.0 HP",
      "wall25": "挂壁机 2.5 HP",
      "wall3": "挂壁机 3.0 HP",
      "wall4": "挂壁机 4.0 HP",
      "wall5": "挂壁机 5.0 HP",
      "cassette": "天花卡式 1.0–1.5 HP",
      "window": "窗式机 1.0–1.5 HP"
    },
    "steps": {
      "unit": { "title": "您要安装哪种机型？", "subtitle": "选择机型和匹数" },
      "extra": { "title": "额外铜管与接近条件", "subtitle": "超过 7 英尺的铜管按每英尺另计" }
    },
    "fields": {
      "unit": "机型",
      "copper": "额外铜管",
      "access": "接近条件"
    },
    "breakdown": {
      "base": "安装基础价",
      "baseNote": "仅含安装——不含主机",
      "copper": "额外铜管",
      "copperNote": "超过 7 英尺每英尺",
      "copperNone": "无额外铜管"
    },
    "result": { "service": "空调安装" }
  },
  "gas": {
    "meta": { "name": "空调加雪种费用计算器" },
    "steps": {
      "gas": { "title": "哪种制冷剂？", "subtitle": "查看室外机铭牌" },
      "amount": { "title": "加多少雪种？", "subtitle": "所需 PSI 与检漏" }
    },
    "fields": {
      "gas": "制冷剂类型",
      "psi": "所需 PSI",
      "leak": "包含结构性检漏"
    },
    "types": {
      "r22": "R22",
      "r410a": "R410A",
      "r32": "R32"
    },
    "leak": {
      "yes": "是",
      "no": "否"
    },
    "breakdown": {
      "gas": "加雪种",
      "leak": "检漏",
      "leakNone": "未包含",
      "leakNote": "从 RM 114 起，已包含"
    },
    "result": { "service": "空调加雪种" }
  },
  "size": {
    "meta": { "name": "空调匹数计算器" },
    "steps": {
      "room": { "title": "房间信息", "subtitle": "面积、层高与日照" }
    },
    "fields": {
      "area": "房间面积",
      "ceiling": "层高",
      "exposure": "日照"
    },
    "ceiling": {
      "standard": "标准（9–10 英尺）",
      "high": "挑高 / 复式"
    },
    "exposure": {
      "low": "低（阴凉）",
      "high": "高（西晒 / 炎热）"
    },
    "breakdown": {
      "area": "房间面积",
      "btu": "建议制冷量",
      "hp": "≈ {hp} HP"
    },
    "result": { "service": "空调" }
  },
  "btu": {
    "meta": { "name": "空调 BTU 计算器" },
    "steps": {
      "dims": { "title": "房间尺寸", "subtitle": "长、宽与人数" }
    },
    "fields": {
      "length": "长",
      "width": "宽",
      "occupancy": "房间人数"
    },
    "people": "人",
    "breakdown": {
      "area": "地面面积",
      "occupancy": "人数",
      "btu": "所需 BTU"
    },
    "result": { "service": "空调" }
  },
  "elec": {
    "meta": { "name": "空调电费计算器" },
    "steps": {
      "usage": { "title": "使用情况", "subtitle": "匹数与每日小时数" }
    },
    "fields": {
      "hp": "匹数",
      "hours": "每日小时数"
    },
    "breakdown": {
      "usage": "每日用电",
      "monthly": "预计每月电费",
      "note": "按 RM 0.50/度——仅为估算"
    },
    "result": { "service": "空调" }
  },
  "save": {
    "meta": { "name": "变频空调省电计算器" },
    "steps": {
      "usage": { "title": "使用情况", "subtitle": "匹数与每日小时数" }
    },
    "fields": {
      "hp": "匹数",
      "hours": "每日小时数"
    },
    "breakdown": {
      "saving": "变频省电",
      "pct": "≈ 比定频省 35%",
      "monthly": "预计每月省电",
      "note": "按 RM 0.50/度——仅为估算"
    },
    "result": { "service": "空调" }
  },
  "pick": {
    "meta": { "name": "我需要哪种空调服务？" },
    "steps": {
      "symptoms": { "title": "您看到什么情况？", "subtitle": "选择所有相关症状" }
    },
    "fields": { "symptoms": "症状" },
    "symptoms": {
      "not-cold": "不冷 / 出热风",
      "leaking": "漏水",
      "noise": "有噪音",
      "smell": "有异味",
      "weak": "风量小",
      "not-on": "无法开机",
      "ice": "结冰"
    },
    "breakdown": {
      "symptoms": "症状",
      "service": "推荐服务"
    },
    "findings": { "detail": "技术员将在现场确认诊断。" }
  }
};
