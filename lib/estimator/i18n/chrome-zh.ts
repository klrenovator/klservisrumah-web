/**
 * Chinese (Simplified) estimator chrome for the deep-tool routes.
 *
 * Contains exactly the shared form/result/fields strings the five /tools/*
 * calculators render (sections: common, form, result, severity, whatsapp) — NOT the generic
 * service-estimator content — so each locale route ships only what it needs.
 *
 * Mirrors messages/zh.json → `estimator` namespace. KEEP IN SYNC:
 * scripts/test-estimators.ts asserts these sections stay identical, so edit
 * BOTH this file and messages/zh.json together.
 */

import type { MessageDictionary } from "../../i18n";

export const chromeZhDict: MessageDictionary = {
  estimator: {
  "common": {
    "disclaimer": "这是根据您提供的信息作出的估算报价。最终价格可能因现场实际状况，于上门勘查后调整。",
    "priceInclusive": "总计含人工与材料",
    "inclusiveNote": "已包含人工与材料",
    "popular": "热门",
    "yes": "是",
    "no": "否",
    "decrease": "减少",
    "increase": "增加",
    "startOver": "重新开始"
  },
  "form": {
    "liveEstimate": "您目前的估价",
    "liveRange": "{low} – {high} · {duration}",
    "seeBreakdown": "查看完整明细",
    "answerMore": "再回答 {n} 项",
    "fineTuneTitle": "可选 — 微调价格",
    "fineTuneSub": "{titles}。跳过此部分，我们将使用最常见的答案。",
    "progressNudge": "已回答 {answered} / {total} 项。点击此处完成“{field}”即可锁定您的估价。",
    "seeFullEstimate": "查看我的完整估价",
    "showLeft": "显示剩余问题",
    "srAnnouncement": "当前估价 {price}，区间 {low} 至 {high}。{status}",
    "srAllAnswered": "所有问题已回答。",
    "srQuestionsLeft": "还剩 {n} 个问题。"
  },
  "result": {
    "instantEstimate": "您的即时估价",
    "estimatedTotal": "估价总计",
    "totalInclusive": "含人工与材料",
    "rangeLabel": "估价区间 {low} – {high}",
    "metricLabour": "人工",
    "metricMaterials": "材料",
    "metricTime": "所需时间",
    "metricPackage": "套餐",
    "recommendedService": "推荐服务",
    "viewService": "查看完整服务详情",
    "bookNow": "立即预订",
    "sendWhatsapp": "发送至 WhatsApp",
    "requestSiteVisit": "预约上门勘查",
    "callLabel": "致电 {phone}",
    "changeAnswers": "修改我的答案",
    "findingsTitle": "可能原因与诊断结果",
    "addonsTitle": "建议附加项目",
    "addonsHint": "点击添加——总价即时更新",
    "recommendedForYou": "为您推荐",
    "addonsSelected": "已选附加项目：{amount} · 新估价总计 {total}",
    "breakdownTitle": "我们如何计算",
    "breakdownSub": "每一项费率均来自本网站公布的价目表",
    "whatWeAssumed": "我们的假设",
    "nextStepsTitle": "建议的后续步骤",
    "maintenanceTitle": "保养提示",
    "relatedReading": "延伸阅读",
    "sendToCustomer": "发送估价给客户",
    "sendToCustomerDesc": "通过 WhatsApp 与客户分享此估价",
    "sendToCustomerBtn": "发送给客户",
    "customerNameLabel": "客户姓名（可选）",
    "customerPhoneLabel": "客户电话（可选）",
    "messagePreview": "消息预览",
    "sendViaWhatsApp": "通过 WhatsApp 发送",
    "copyMessage": "复制消息",
    "messageCopied": "消息已复制到剪贴板！",
    "estimateReady": "估价消息已准备好发送！您的客户将收到详细的报价明细。"
  },
  "severity": {
    "routine": "例行",
    "soon": "本周内预约",
    "urgent": "紧急 — 24 至 48 小时",
    "emergency": "紧急 — 立即处理"
  },
  "whatsapp": {
    "greeting": "您好 KL Servis Rumah，我使用了您的{tool}，想进行预约。",
    "myAnswers": "我的回答",
    "estimateSection": "网站估价",
    "recommended": "推荐服务：{value}",
    "package": "套餐：{value}",
    "estimatedCost": "估价：{value}",
    "range": "估价区间：{low} – {high}",
    "time": "预计用时：{value}",
    "addons": "附加项目：{value}",
    "totalAddons": "含附加项目估价总计：{value}",
    "closing": "请于勘查后确认档期与最终报价。",
    "siteVisitGreeting": "您好 KL Servis Rumah，我想预约免费上门勘查。",
    "siteVisitLine": "网站估价：{price}（{low} – {high}）— {service}。"
  },
  "sendToCustomer": {
    "title": "将估价发送给客户",
    "subtitle": "通过 WhatsApp 与您的客户分享此估价",
    "open": "发送给客户",
    "close": "关闭",
    "nameLabel": "客户姓名（选填）",
    "namePlaceholder": "例如：Ahmad Razak",
    "phoneLabel": "客户电话（选填）",
    "phonePlaceholder": "例如：0123456789",
    "previewLabel": "消息预览",
    "sendWhatsApp": "通过 WhatsApp 发送",
    "copyMessage": "复制消息",
    "copied": "消息已复制到剪贴板！",
    "needContact": "请输入客户姓名或电话号码",
    "ready": "估价消息已准备好发送！您的客户将收到详细的费用明细。"
  }
}
};
