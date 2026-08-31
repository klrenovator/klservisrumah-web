import type { Locale } from "@/lib/i18n";
import type { AreaDetail } from "@/config/area-data";
import type { SuburbDetail } from "@/config/suburb-data";
import type { ServiceDetail, SubService } from "@/config/services-data";
import { getLocalizedArea, getLocalizedSuburb } from "@/lib/location-i18n";
import { getLocalizedService } from "@/lib/service-i18n";
import { localizeAreaDescription } from "@/lib/area-body-i18n";
import { localizeSuburbBody } from "@/lib/suburb-body-i18n";
import {
  getAreaWorkProfile,
  type HousingStock
} from "@/config/area-work-profile";
import { getSuburbWorkProfile } from "@/config/suburb-work-profile";

export type LocationPairCopy = {
  contextHeading: string;
  contextParagraphs: string[];
  scopeHeading: string;
  scopeIntro: string;
  scopeItems: { title: string; body: string }[];
  quoteHeading: string;
  quoteIntro: string;
  quoteItems: string[];
};

/**
 * Service family used only to pick a locally relevant planning paragraph.
 * Families group trades that share access / protection constraints — they are
 * not a public taxonomy and must not invent new services.
 */
type ServiceFamily = "wet" | "finish" | "build" | "systems" | "light";

const SERVICE_FAMILY: Record<string, ServiceFamily> = {
  plumbing: "wet",
  waterproofing: "wet",
  tiling: "wet",
  "bathroom-renovation": "wet",
  painting: "finish",
  "skim-coat": "finish",
  "plaster-ceiling": "finish",
  ceiling: "finish",
  lighting: "finish",
  "house-renovation": "build",
  "kitchen-renovation": "build",
  "kitchen-cabinet": "build",
  carpentry: "build",
  flooring: "build",
  "epoxy-flooring": "build",
  "roof-repair": "build",
  "awning-installation": "build",
  welding: "build",
  "glass-aluminium": "build",
  door: "build",
  "window-repair": "build",
  electrical: "systems",
  "water-heater": "systems",
  "ceiling-fan": "systems",
  aircon: "systems",
  cctv: "systems",
  autogate: "systems",
  locksmith: "systems",
  handyman: "light"
};

function familyOf(slug: string): ServiceFamily {
  return SERVICE_FAMILY[slug] ?? "light";
}

function accessLine(stock: HousingStock, locale: Locale, place: string): string {
  if (locale === "ms") {
    if (stock === "highrise") {
      return `Kebanyakan kerja di menara ${place} memerlukan jendela waktu JMB, tempahan lif servis dan perlindungan koridor sebelum alatan dibawa naik.`;
    }
    if (stock === "landed") {
      return `Kebanyakan kerja rumah landed di ${place} bergantung pada parkir van, dinding berkongsi jiran dan sama ada hujan boleh sampai ke muka kerja.`;
    }
    return `${place} mencampurkan kondominium, shoplot dan jalan landed, jadi soalan tapak pertama ialah jenis hartanah — itu yang menentukan akses, waktu dan pembersihan.`;
  }
  if (locale === "zh") {
    if (stock === "highrise") {
      return `${place}塔楼工程多数需要管委会施工时段、服务电梯预约，以及走廊防护，才能把工具送上楼。`;
    }
    if (stock === "landed") {
      return `${place}有地住宅工程，关键通常是货车停车、与邻居共用的隔墙，以及雨水会不会打到作业面。`;
    }
    return `${place}混合公寓、店屋和有地街道，现场第一个问题是房产类型——这决定通道、工时和清理方式。`;
  }
  if (stock === "highrise") {
    return `Most tower jobs in ${place} need a JMB work-hour window, a service-lift booking and corridor protection before tools come up.`;
  }
  if (stock === "landed") {
    return `Most landed jobs in ${place} turn on van parking, neighbour-shared walls and whether rain can reach the work face.`;
  }
  return `${place} mixes condominiums, shoplots and landed streets, so the first site question is the property type — that decides access, hours and clean-up.`;
}

function familyParagraph(
  family: ServiceFamily,
  stock: HousingStock,
  locale: Locale,
  place: string,
  service: string
): string {
  if (locale === "ms") {
    if (family === "wet") {
      return stock === "highrise"
        ? `Untuk ${service} di menara ${place}, kerja biasanya berhenti di slab atau membran kawasan basah unit — bukan mengorek secara buta — sambil melindungi riser bersama dan koridor. Foto dekat pada punca dan foto lebar pada tingkat lebih berguna daripada nama mercu tanda.`
        : stock === "landed"
          ? `Untuk ${service} pada rumah landed di ${place}, punca sering dikongsi merentasi dinding parti, longkang belakang atau bumbung. Catat sama ada isu muncul selepas hujan, dan tunjukkan lorong belakang jika van perlu masuk dari situ.`
          : `Untuk ${service} di ${place}, bezakan unit kondominium (JMB, lif, riser bersama) daripada lot landed (longkang, bumbung, lorong belakang). Kaedah dan perlindungan berbeza walaupun nama kerja sama.`;
    }
    if (family === "finish") {
      return stock === "highrise"
        ? `Untuk ${service} di menara ${place}, kawalan habuk, penutupan perabot dan serahan bersih kepada JMB atau penyewa seterusnya sama pentingnya dengan kemasan. Sahkan saiz lif sebelum merancang trip bahan.`
        : stock === "landed"
          ? `Untuk ${service} pada rumah landed di ${place}, cuaca luaran, tepi bumbung dan dinding teres berkongsi biasanya menetapkan urutan — bilik dalam menunggu sehingga langkah basah atau berhabuk terkawal.`
          : `Untuk ${service} di ${place}, asingkan unit JMB daripada lot landed dahulu. Trade yang sama menggunakan akses, waktu dan perlindungan berbeza pada setiap jenis hartanah.`;
    }
    if (family === "build") {
      return stock === "highrise"
        ? `Untuk ${service} di ${place}, kerja pembinaan dalam menara terikat pada tempahan lif, had debris dan waktu senyap. Nyatakan sama ada bahan boleh dipra-potong di tapak atau mesti masuk melalui loading bay.`
        : stock === "landed"
          ? `Untuk ${service} pada lot landed di ${place}, ruang pemunggahan, jiran berkongsi sempadan dan sama ada kerja menyentuh struktur atau hanya kemasan ialah tiga soalan yang memisahkan sebut harga yang jelas daripada yang kabur.`
          : `Untuk ${service} di ${place}, skop pembinaan berubah antara shoplot, kondominium dan rumah landed. Nyatakan jenis lot dan apa yang mesti kekal berfungsi semasa kerja.`;
    }
    if (family === "systems") {
      return stock === "highrise"
        ? `Untuk ${service} di menara ${place}, titik kuasa, paip sedia ada dan peraturan pengurusan menentukan sama ada kerja siap dalam satu lawatan. Sediakan nombor unit, aras lantai dan sebarang sekatan penggerudian JMB.`
        : stock === "landed"
          ? `Untuk ${service} pada rumah landed di ${place}, papan DB, paip luaran dan laluan kabel merentasi dinding parti ialah butiran tapak yang tidak kelihatan pada mercu tanda. Foto papan sedia ada memendekkan lawatan diagnostik.`
          : `Untuk ${service} di ${place}, pasang pada unit high-rise memerlukan kebenaran pengurusan; pada rumah landed ia memerlukan laluan kabel dan parkir van. Nyatakan jenis hartanah pada mesej pertama.`;
    }
    return stock === "highrise"
      ? `Untuk ${service} di ${place}, kerja kecil dalam menara tetap memerlukan slot lif dan perlindungan koridor. Senaraikan tugas, tingkat dan sama ada unit diduduki.`
      : stock === "landed"
        ? `Untuk ${service} pada rumah di ${place}, beberapa tugas kecil boleh disiapkan dalam satu lawatan jika parkir dan akses belakang jelas. Senaraikan setiap tugas supaya item pilihan tidak bercampur dengan pembaikan utama.`
        : `Untuk ${service} di ${place}, hantar jenis hartanah, senarai tugas dan satu foto lebar. Itu memisahkan kerja handyman satu lawatan daripada kerja yang perlu dijadualkan semula.`;
  }

  if (locale === "zh") {
    if (family === "wet") {
      return stock === "highrise"
        ? `${place}塔楼的${service}通常止于本户楼板或湿区防水层，而不是盲目敲打，同时要保护共用立管和走廊。漏点近照加上楼层远景，比地标名称更有用。`
        : stock === "landed"
          ? `${place}有地住宅的${service}，源头常穿过隔墙、后巷水沟或屋顶。请注明是否下雨后才出现，若货车要从后巷进，把后巷也拍进去。`
          : `${place}的${service}要把公寓单位（管委会、电梯、共用立管）和有地地段（水沟、屋顶、后巷）分开。工种名称相同，做法和防护并不相同。`;
    }
    if (family === "finish") {
      return stock === "highrise"
        ? `${place}塔楼的${service}，防尘、家具遮盖以及交给管委会或下一位租户的清洁移交，和饰面本身同样重要。安排材料趟次前先确认电梯尺寸。`
        : stock === "landed"
          ? `${place}有地住宅的${service}，室外天气、屋檐和共用排屋隔墙通常决定工序——室内房间要等潮湿或扬尘步骤被控制住。`
          : `${place}的${service}先把管委会单位和有地地段分开。同一工种在两类房产上的通道、工时和防护都不同。`;
    }
    if (family === "build") {
      return stock === "highrise"
        ? `${place}的${service}若在塔楼内施工，受电梯预约、建筑垃圾限额和安静时段约束。请说明材料能否现场预切，还是必须从卸货区进。`
        : stock === "landed"
          ? `${place}有地地段的${service}，卸货空间、与邻居的边界，以及工程是否触及结构还是只做饰面，是把清楚报价和含糊报价分开的三个问题。`
          : `${place}的${service}在店屋、公寓和有地住宅之间范围不同。请说明地段类型，以及施工期间必须保持可用的部分。`;
    }
    if (family === "systems") {
      return stock === "highrise"
        ? `${place}塔楼的${service}，现有电点、管路和物业管理规定决定能否一次做完。请提供门牌、楼层以及管委会对钻孔的限制。`
        : stock === "landed"
          ? `${place}有地住宅的${service}，配电箱、室外管路和穿过隔墙的走线，是地标上看不到的现场细节。现有箱体的照片能缩短诊断上门。`
          : `${place}的${service}，高楼单位需要物业许可；有地住宅需要走线路径和货车停车。请在第一条消息里写明房产类型。`;
    }
    return stock === "highrise"
      ? `${place}的${service}即使是小修，塔楼里仍需要电梯档期和走廊防护。请列出任务、楼层和单位是否有人住。`
      : stock === "landed"
        ? `${place}住宅的${service}，如果停车和后院通道清楚，几项小任务可以一次做完。请逐项列出，以免选配混进主修范围。`
        : `${place}的${service}请发送房产类型、任务清单和一张远景照片。这样才能区分一次上门的杂工和需要改期的工程。`;
  }

  if (family === "wet") {
    return stock === "highrise"
      ? `For ${service} in ${place} towers, the work usually stops at the unit slab or wet-area membrane — not a blind hack — while protecting shared risers and corridors. A close photo of the source and a wide photo of the floor are more useful than a landmark name.`
      : stock === "landed"
        ? `For ${service} on landed homes in ${place}, the source often crosses a party wall, a rear drain or the roof. Note whether it appears after rain, and show the back lane if the van has to come in that way.`
        : `For ${service} in ${place}, separate condo units (JMB, lift, shared risers) from landed lots (drains, roof, back lane). The method and protection change even when the trade name stays the same.`;
  }
  if (family === "finish") {
    return stock === "highrise"
      ? `For ${service} in ${place} towers, dust control, furniture protection and a clean handover to the JMB or the next tenant matter as much as the finish. Confirm lift size before planning material trips.`
      : stock === "landed"
        ? `For ${service} on landed homes in ${place}, exterior weather, roof edges and shared terrace walls usually set the sequence — interior rooms wait until wet or dusty steps are contained.`
        : `For ${service} in ${place}, separate JMB units from landed lots first. The same trade uses different access, hours and protection on each property type.`;
  }
  if (family === "build") {
    return stock === "highrise"
      ? `For ${service} in ${place}, in-tower building work is bound by lift bookings, debris limits and quiet hours. Say whether materials can be pre-cut on site or must come through the loading bay.`
      : stock === "landed"
        ? `For ${service} on landed lots in ${place}, unloading space, neighbour-shared boundaries and whether the work touches structure or only finishes are the three questions that separate a clear quote from a vague one.`
        : `For ${service} in ${place}, building scope changes between a shoplot, a condo and a landed house. Name the lot type and what must stay usable while the work runs.`;
  }
  if (family === "systems") {
    return stock === "highrise"
      ? `For ${service} in ${place} towers, existing power points, pipe runs and management rules decide whether the job finishes in one visit. Give the unit number, floor and any JMB drilling restriction.`
      : stock === "landed"
        ? `For ${service} on landed homes in ${place}, the DB board, outdoor pipe runs and cable paths across party walls are the site facts a landmark name cannot show. A photo of the existing board shortens the diagnostic visit.`
        : `For ${service} in ${place}, a high-rise unit needs management permission; a landed house needs a cable path and van parking. Name the property type on the first message.`;
  }
  return stock === "highrise"
    ? `For ${service} in ${place}, even a small tower job still needs a lift slot and corridor protection. List the tasks, the floor and whether the unit is occupied.`
    : stock === "landed"
      ? `For ${service} on homes in ${place}, several small tasks can finish in one visit when parking and rear access are clear. List each task so optional items are not mixed into the main repair.`
      : `For ${service} in ${place}, send the property type, the task list and one wide photo. That is what separates a one-visit handyman job from work that has to be rescheduled.`;
}

function scopeSiteLine(stock: HousingStock, locale: Locale, place: string): string {
  if (locale === "ms") {
    if (stock === "highrise") {
      return `Di menara ${place}, sahkan tingkat, tempahan lif dan sama ada item ini kerja utama atau tambahan.`;
    }
    if (stock === "landed") {
      return `Pada lot landed di ${place}, sahkan parkir, akses belakang dan sama ada item ini kerja utama atau tambahan.`;
    }
    return `Di ${place}, nyatakan jenis hartanah dan sama ada item ini kerja utama atau tambahan.`;
  }
  if (locale === "zh") {
    if (stock === "highrise") {
      return `在${place}塔楼，请确认楼层、电梯预约，以及这一项是主项还是加项。`;
    }
    if (stock === "landed") {
      return `在${place}有地地段，请确认停车、后院通道，以及这一项是主项还是加项。`;
    }
    return `在${place}请说明房产类型，以及这一项是主项还是加项。`;
  }
  if (stock === "highrise") {
    return `In a ${place} tower, confirm the floor, the lift booking and whether this item is the main job or an add-on.`;
  }
  if (stock === "landed") {
    return `On a landed ${place} lot, confirm parking, rear access and whether this item is the main job or an add-on.`;
  }
  return `In ${place}, name the property type and whether this item is the main job or an add-on.`;
}

function meetingLine(locale: Locale, place: string, landmarks: string[]): string {
  const a = landmarks[0] ?? place;
  const b = landmarks[1] ?? landmarks[0] ?? place;
  if (locale === "ms") {
    return `Pasukan yang mencari kerja di ${place} menggunakan ${a} dan ${b} sebagai rujukan arah sahaja — sebut harga tetap memerlukan nombor unit atau rumah, bukan nama mercu tanda.`;
  }
  if (locale === "zh") {
    return `在${place}找工地时，${a}和${b}只作路线参考——报价仍需要门牌或单位号，而不是地标名称。`;
  }
  return `Crews locating a ${place} job use ${a} and ${b} only as a meeting reference — the quotation still needs the unit or house number, not a landmark name.`;
}

function headings(locale: Locale, place: string, service: string) {
  if (locale === "ms") {
    return {
      contextHeading: `Merancang ${service} untuk hartanah di ${place}`,
      scopeHeading: `Skop ${service} yang sesuai untuk ${place}`,
      scopeIntro: `Setiap item di bawah ialah pilihan kerja sebenar. Gunakan huraian tapak ${place} untuk memisahkan kerja perlu daripada tambahan — jangan anggap setiap hartanah di sini mempunyai keadaan yang sama.`,
      quoteHeading: `Butiran yang membentuk sebut harga ${service} di ${place}`,
      quoteIntro: `Dua hartanah dalam ${place} boleh memerlukan kaedah berbeza. Sebut harga yang berguna memisahkan kerja perlu, pilihan dan andaian, kemudian mengesahkan angka bertulis selepas pemeriksaan tapak.`
    };
  }
  if (locale === "zh") {
    return {
      contextHeading: `${place}${service}规划要点`,
      scopeHeading: `适合${place}的${service}范围`,
      scopeIntro: `以下每一项都是真实的工程选项。用${place}的现场说明把必要工程和加项分开——不要假设这里每套房产的现场条件都相同。`,
      quoteHeading: `${place}${service}报价会核对的资料`,
      quoteIntro: `${place}内两套房产也可能需要不同方法。有用的报价把必要工程、选配和假设分开，并在现场核对后写成书面数字。`
    };
  }
  return {
    contextHeading: `Planning ${service} for a ${place} property`,
    scopeHeading: `${service} scope that fits ${place}`,
    scopeIntro: `Each item below is a real work option. Use the ${place} site notes to separate required work from add-ons — do not assume every property here has the same conditions.`,
    quoteHeading: `Details that shape a ${service} quotation in ${place}`,
    quoteIntro: `Two properties in ${place} can need different methods. A useful quotation separates required work, options and assumptions, then confirms the written figure after a site check.`
  };
}

function scopeItems(
  subs: SubService[],
  stock: HousingStock,
  locale: Locale,
  place: string
): { title: string; body: string }[] {
  return subs.slice(0, 4).map((sub) => ({
    title: sub.name,
    body: `${sub.desc} ${scopeSiteLine(stock, locale, place)}`
  }));
}

function quoteItems(
  process: { title: string; desc: string }[],
  locale: Locale,
  place: string,
  landmarks: string[],
  firstSub: string
): string[] {
  const steps = process.slice(0, 3).map((step) => `${step.title}: ${step.desc}`);
  const extras =
    locale === "ms"
      ? [
          `Akses di ${place}: tingkat atau lorong, parkir van, waktu pengurusan dan jarak memunggah — bukan hanya rujukan ${landmarks[0] ?? place}.`,
          `Ukuran atau bilangan titik bagi ${firstSub}, plus alamat atau pin tepat supaya liputan dan jadual boleh disahkan.`
        ]
      : locale === "zh"
        ? [
            `${place}通道：楼层或巷弄、货车停车、物业施工时段和卸货距离——不能只写${landmarks[0] ?? place}。`,
            `${firstSub}的尺寸或点位数量，外加准确地址或定位，以便确认覆盖范围和档期。`
          ]
        : [
            `Access in ${place}: floor or lane, van parking, management hours and unloading distance — not only a reference to ${landmarks[0] ?? place}.`,
            `Measurements or point counts for ${firstSub}, plus the exact address or pin so coverage and timing can be confirmed.`
          ];
  return [...steps, ...extras];
}

/**
 * Parametric body copy for an area × service page.
 *
 * Audit P2-C4 / P2-26: the previous generator rotated landmarks through
 * unrelated sub-service names ("For a request around KLCC Petronas Towers,
 * identify the exact location of wall preparation & priming…"). That doorway
 * pattern is gone. Copy is now:
 *   1. the area's own description
 *   2. an authored local-work note for the area
 *   3. a service-family paragraph that respects the area's housing stock
 *   4. real sub-service descriptions (not landmark salad)
 *   5. the service's own process steps as quotation checks
 *
 * Prices stay on the visible rate table of the same page — they are not
 * repeated here (Wave 13 location-similarity guardrail).
 */
export function buildAreaServicePairCopy(
  area: AreaDetail,
  service: ServiceDetail,
  locale: Locale
): LocationPairCopy {
  const place = getLocalizedArea(area, locale);
  const work = getLocalizedService(service, locale);
  const areaDescription = localizeAreaDescription(area.slug, locale, place.description);
  const profile = getAreaWorkProfile(area.slug);
  const family = familyOf(service.slug);
  const heads = headings(locale, place.name, work.title);
  const firstSub = work.subServices[0]?.name ?? work.title;

  return {
    contextHeading: heads.contextHeading,
    contextParagraphs: [
      areaDescription,
      profile.note[locale],
      accessLine(profile.stock, locale, place.name),
      familyParagraph(family, profile.stock, locale, place.name, work.title),
      meetingLine(locale, place.name, area.landmarks)
    ],
    scopeHeading: heads.scopeHeading,
    scopeIntro: heads.scopeIntro,
    scopeItems: scopeItems(work.subServices, profile.stock, locale, place.name),
    quoteHeading: heads.quoteHeading,
    quoteIntro: heads.quoteIntro,
    quoteItems: quoteItems(work.process, locale, place.name, area.landmarks, firstSub)
  };
}

export function buildSuburbServicePairCopy(
  suburb: SuburbDetail,
  service: ServiceDetail,
  locale: Locale
): LocationPairCopy {
  const place = getLocalizedSuburb(suburb, locale);
  const work = getLocalizedService(service, locale);
  const body = localizeSuburbBody(suburb.slug, locale, place.housingProfile, place.commonIssues);
  const profile = getSuburbWorkProfile(suburb.slug);
  const stock = profile.stock;
  const family = familyOf(service.slug);
  const heads = headings(locale, suburb.name, work.title);
  const genericIssue =
    /water seepage after heavy rain|paint peeling caused by humidity|aging bathroom fittings|ceiling stains from leaks/i;
  const issues = body.commonIssues.filter((item) => !genericIssue.test(item)).slice(0, 3);
  const issueLine =
    issues.length === 0
      ? null
      : locale === "ms"
        ? `Pemerhatian biasa di ${suburb.name} termasuk ${issues.join(", ")}. Setiap satu boleh ada punca berbeza — catat posisi tepat dan sama ada ia berubah selepas hujan atau penggunaan, jangan anggap mercu tanda ialah alamat.`
        : locale === "zh"
          ? `${suburb.name}常见情况包括${issues.join("、")}。每一项都可能有不同原因——请记下准确位置，以及下雨或使用后是否变化，不要把地标当成地址。`
          : `Typical observations in ${suburb.name} include ${issues.join(", ")}. Each one can have a different cause — record the exact position and whether it changes after rain or use, and do not treat a landmark as the address.`;
  const firstSub = work.subServices[0]?.name ?? work.title;

  return {
    contextHeading: heads.contextHeading,
    contextParagraphs: [
      body.housingProfile,
      profile.note[locale],
      ...(issueLine ? [issueLine] : []),
      accessLine(stock, locale, suburb.name),
      familyParagraph(family, stock, locale, suburb.name, work.title),
      meetingLine(locale, suburb.name, suburb.landmarks)
    ],
    scopeHeading: heads.scopeHeading,
    scopeIntro: heads.scopeIntro,
    scopeItems: scopeItems(work.subServices, stock, locale, suburb.name),
    quoteHeading: heads.quoteHeading,
    quoteIntro: heads.quoteIntro,
    quoteItems: quoteItems(work.process, locale, suburb.name, suburb.landmarks, firstSub)
  };
}
