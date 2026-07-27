import type { Locale } from "@/lib/i18n";
import type { AreaDetail } from "@/config/area-data";
import type { SuburbDetail } from "@/config/suburb-data";
import { areaI18n } from "@/config/area-i18n";
import { areaI18nExtra } from "@/config/area-i18n-extra";
import { suburbHousingProfileI18n, suburbCommonIssuesI18n } from "@/config/suburb-i18n";

/**
 * Returns the coverage-area entry with localized content applied for the
 * given locale. Falls back to English when a locale-specific field is
 * missing, mirroring getLocalizedService() / getLocalizedProblem().
 */
export function getLocalizedArea(area: AreaDetail, locale: Locale): AreaDetail {
  if (locale === "en") return area;
  // The hand-written entries in `areaI18n` cover the 6 headline areas and take
  // precedence; `areaI18nExtra` fills in the remaining 31 coverage areas.
  const override = areaI18n[area.slug]?.[locale] ?? areaI18nExtra[area.slug]?.[locale];
  if (!override) return area;
  return {
    ...area,
    name: override.name || area.name,
    description: override.description || area.description,
    metaTitle: override.metaTitle || area.metaTitle,
    metaDesc: override.metaDesc || area.metaDesc,
    faqs: override.faqs?.length ? override.faqs : area.faqs
  };
}

/**
 * Locale templates for suburb pages. The 49 suburb entries share the same
 * structure, so the FAQ + population copy is generated per locale instead of
 * being duplicated 49 times.
 */
const suburbTemplates: Record<Exclude<Locale, "en">, {
  population: string;
  faqs: (name: string) => { q: string; a: string }[];
}> = {
  ms: {
    population: "Kawasan tadahan kediaman dan komersial tempatan",
    faqs: (name) => [
      {
        q: `Adakah anda menyediakan perkhidmatan hari sama di ${name}?`,
        a: `Slot hari sama di ${name} tersedia apabila juruteknik berdekatan lapang. WhatsApp awal dengan foto dan penerangan ringkas masalah untuk penghantaran terpantas.`
      },
      {
        q: `Bolehkah pasukan anda bekerja di dalam kondo dan bangunan terurus di ${name}?`,
        a: "Boleh. Kami mematuhi peraturan waktu kerja pengurusan, melindungi lif dan kawasan umum, serta memastikan tapak kemas sebelum serahan."
      },
      {
        q: `Adakah harga di ${name} ditetapkan sebelum kerja bermula?`,
        a: "Ya. Kami mengesahkan sebut harga terperinci pada kadar adil sebelum memulakan kerja, dan sebarang skop tambahan perlu diluluskan oleh anda terlebih dahulu."
      }
    ]
  },
  zh: {
    population: "本地住宅与商业服务覆盖范围",
    faqs: (name) => [
      {
        q: `你们在${name}提供当天服务吗？`,
        a: `当附近技师有空档时，${name}可安排当天服务。请尽早通过 WhatsApp 发送照片和简短的问题描述，以便最快派工。`
      },
      {
        q: `你们的团队可以在${name}的公寓和管理式大楼内施工吗？`,
        a: "可以。我们遵守管理层的施工时段规定，保护电梯与公共区域，并在交付前清理现场。"
      },
      {
        q: `${name}的价格会在开工前确定吗？`,
        a: "会的。我们在开工前确认公道的逐项报价，任何额外工程都需先经您批准。"
      }
    ]
  }
};

/**
 * Returns the suburb entry with localized content applied for the given
 * locale. Suburb names, landmarks and coordinates stay canonical; only the
 * descriptive copy, common issues and FAQs are swapped.
 */
export function getLocalizedSuburb(suburb: SuburbDetail, locale: Locale): SuburbDetail {
  if (locale === "en") return suburb;
  const template = suburbTemplates[locale];
  const housingProfile = suburbHousingProfileI18n[suburb.slug]?.[locale];
  return {
    ...suburb,
    population: template.population,
    housingProfile: housingProfile || suburb.housingProfile,
    commonIssues: suburbCommonIssuesI18n[locale] ?? suburb.commonIssues,
    faqs: template.faqs(suburb.name)
  };
}
