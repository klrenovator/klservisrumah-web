import type { Locale } from "@/lib/i18n";
import type { AreaDetail } from "@/config/area-data";
import type { SuburbDetail } from "@/config/suburb-data";
import type { ServiceDetail } from "@/config/services-data";
import { getLocalizedArea, getLocalizedSuburb } from "@/lib/location-i18n";
import { getLocalizedService } from "@/lib/service-i18n";
import { localizeAreaDescription } from "@/lib/area-body-i18n";
import { localizeSuburbBody } from "@/lib/suburb-body-i18n";

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

function hash(value: string) {
  let result = 2166136261;
  for (const character of value) {
    result ^= character.charCodeAt(0);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function rotate<T>(values: T[], offset: number) {
  return values.map((_, index) => values[(index + offset) % values.length]);
}

function areaPairCopy(area: AreaDetail, service: ServiceDetail, locale: Locale, nearMe: boolean): LocationPairCopy {
  const place = getLocalizedArea(area, locale);
  const work = getLocalizedService(service, locale);
  const areaDescription = localizeAreaDescription(area.slug, locale, place.description);
  const seed = hash(`${area.slug}:${service.slug}:${nearMe ? "near" : "service"}:${locale}`);
  const landmarks = rotate(area.landmarks, seed % area.landmarks.length);
  const subServices = rotate(work.subServices, (seed >>> 4) % work.subServices.length);

  if (locale === "ms") {
    return {
      contextHeading: nearMe ? `Cara memilih ${work.title} berdekatan ${place.name}` : `Merancang ${work.title} untuk hartanah di ${place.name}`,
      contextParagraphs: [
        areaDescription,
        nearMe
          ? `Carian “berdekatan saya” hanya menunjukkan niat lokasi; ia tidak mengesahkan jarak kru, slot atau skop. Untuk permintaan ${work.title} di ${place.name}, hantar pin atau alamat sebenar dan gunakan ${landmarks[0]} atau ${landmarks[1]} sebagai rujukan arah sahaja. Nyatakan sama ada anda memerlukan ${subServices[0].name.toLowerCase()} atau pemeriksaan bagi menentukan punca terlebih dahulu.`
          : `Untuk menyediakan skop ${work.title} yang boleh dibandingkan di ${place.name}, mulakan dengan lokasi tepat, jenis hartanah dan bahagian yang terjejas. Rujukan seperti ${landmarks[0]} dan ${landmarks[1]} membantu menerangkan akses, tetapi alamat sebenar masih diperlukan. Bezakan ${subServices[0].name.toLowerCase()} daripada ${subServices[1]?.name.toLowerCase() ?? "kerja tambahan"} supaya item pilihan tidak bercampur dengan pembaikan utama.`,
        `Foto lebar menunjukkan kedudukan kerja, manakala foto dekat menunjukkan kerosakan atau kemasan. Sertakan ukuran, bilangan titik atau bilik, tingkat, tempat letak kenderaan dan peraturan pengurusan jika berkaitan. Maklumat ini lebih berguna daripada sekadar menyebut ${place.name}, dan membantu menentukan sama ada ${subServices[2]?.name.toLowerCase() ?? subServices[0].name.toLowerCase()} perlu dimasukkan dalam penilaian.`
      ],
      scopeHeading: nearMe ? `Semakan sebelum meminta penghantaran ke ${place.name}` : `Senarai semak skop setempat untuk ${place.name}`,
      scopeIntro: `Gunakan senarai ini untuk menerangkan kerja tanpa menganggap semua hartanah sekitar ${place.name} mempunyai keadaan yang sama.`,
      scopeItems: subServices.slice(0, 4).map((sub, index) => ({
        title: sub.name,
        body: `Untuk permintaan sekitar ${landmarks[index % landmarks.length]}, nyatakan lokasi tepat ${sub.name.toLowerCase()}, keadaan semasa dan hasil yang diingini. Rujuk kadar ${sub.price} sebagai panduan permulaan sahaja; ukuran, bahan, akses dan kerja berkaitan masih perlu disahkan.`
      })),
      quoteHeading: `Butiran yang mempengaruhi sebut harga ${work.title}`,
      quoteIntro: `Dua rumah dalam ${place.name} boleh memerlukan kaedah berbeza. Sebut harga yang berguna memisahkan kerja perlu, pilihan dan andaian.`,
      quoteItems: [
        `Skala: ukuran, kuantiti, bilangan bilik atau titik bagi ${subServices[0].name.toLowerCase()}.`,
        `Keadaan: umur, kerosakan yang kelihatan, pembaikan lama dan sama ada masalah aktif atau berkala.`,
        `Bahan: produk sedia ada, gred atau kemasan pilihan dan siapa yang membekalkan item tersebut.`,
        `Akses di ${place.name}: tingkat, lif, tangga, parkir, masa kerja pengurusan dan jarak dari kawasan memunggah.`,
        `Pengesahan lokasi: alamat atau pin sebenar, bukan hanya rujukan ${landmarks[2] ?? landmarks[0]}.`
      ]
    };
  }

  if (locale === "zh") {
    return {
      contextHeading: nearMe ? `如何在${place.name}附近寻找${work.title}` : `${place.name}${work.title}规划要点`,
      contextParagraphs: [
        areaDescription,
        nearMe
          ? `“附近”搜索只表达地点意图，并不确认师傅距离、档期或工程范围。如需在${place.name}安排${work.title}，请发送准确地址或定位；${landmarks[0]}和${landmarks[1]}只能作为路线参考。同时说明您需要${subServices[0].name}，还是先检查原因再决定方案。`
          : `要比较${place.name}的${work.title}报价，应先说明准确地点、房产类型和受影响位置。${landmarks[0]}与${landmarks[1]}可帮助描述通道，但仍须提供实际地址。请把${subServices[0].name}和${subServices[1]?.name ?? "附加工程"}分开，以免选配项目混入主要维修范围。`,
        `广角照片用于交代施工位置，近照用于显示损坏或饰面；另外提供尺寸、点位或房间数量、楼层、停车和物业施工规定。这样的资料比只写${place.name}更有用，也有助判断是否需要把${subServices[2]?.name ?? subServices[0].name}纳入评估。`
      ],
      scopeHeading: nearMe ? `${place.name}派工前检查清单` : `${place.name}本地工程范围清单`,
      scopeIntro: `以下清单用于准确说明需求，并不假设${place.name}所有房产的现场情况相同。`,
      scopeItems: subServices.slice(0, 4).map((sub, index) => ({
        title: sub.name,
        body: `若地点靠近${landmarks[index % landmarks.length]}，请说明${sub.name}的准确施工位置、当前状况和期望结果。${sub.price}只可作为起步价参考；尺寸、材料、通道及关联工程仍需确认。`
      })),
      quoteHeading: `${work.title}报价会考虑哪些资料`,
      quoteIntro: `${place.name}内两套房产也可能需要不同方法。清晰报价应把必要工程、选配项目和假设分别列明。`,
      quoteItems: [
        `工程量：${subServices[0].name}的尺寸、数量、房间数或点位。`,
        `现况：使用年限、可见损坏、旧维修，以及问题持续发生还是偶尔出现。`,
        `材料：现有产品、期望等级或饰面，以及由哪一方供应。`,
        `${place.name}通道：楼层、电梯、楼梯、停车、物业施工时段及卸货距离。`,
        `地点确认：提供实际地址或定位，不能只以${landmarks[2] ?? landmarks[0]}作为地址。`
      ]
    };
  }

  return {
    contextHeading: nearMe ? `How to choose ${work.title} near ${place.name}` : `Planning ${work.title} for a ${place.name} property`,
    contextParagraphs: [
      areaDescription,
      nearMe
        ? `A “near me” search signals location intent; it does not confirm crew distance, availability or scope. For ${work.title} in ${place.name}, send the exact address or map pin and use ${landmarks[0]} or ${landmarks[1]} only as a navigation reference. State whether you need ${subServices[0].name.toLowerCase()} or an assessment to identify the cause first.`
        : `To create a comparable ${work.title} scope in ${place.name}, start with the exact location, property type and affected part. References such as ${landmarks[0]} and ${landmarks[1]} help explain access, but the actual address is still needed. Separate ${subServices[0].name.toLowerCase()} from ${subServices[1]?.name.toLowerCase() ?? "additional work"} so optional work is not mixed into the core repair.`,
      `A wide photo shows where the work sits; a close photo shows the defect or finish. Add measurements, the number of points or rooms, floor level, parking and management work rules where relevant. This is more useful than naming ${place.name} alone and helps establish whether ${subServices[2]?.name.toLowerCase() ?? subServices[0].name.toLowerCase()} belongs in the assessment.`
    ],
    scopeHeading: nearMe ? `Checks before requesting dispatch to ${place.name}` : `A local scope checklist for ${place.name}`,
    scopeIntro: `Use this checklist to describe the work without assuming that every property around ${place.name} has the same site conditions.`,
    scopeItems: subServices.slice(0, 4).map((sub, index) => ({
      title: sub.name,
      body: `For a request around ${landmarks[index % landmarks.length]}, identify the exact location of ${sub.name.toLowerCase()}, its current condition and the intended outcome. Treat ${sub.price} as a starting guide only; measurements, materials, access and related work still need confirmation.`
    })),
    quoteHeading: `Details that shape a ${work.title} quotation`,
    quoteIntro: `Two homes within ${place.name} can require different methods. A useful quotation separates required work, options and assumptions.`,
    quoteItems: [
      `Scale: measurements, quantity, rooms or points for ${subServices[0].name.toLowerCase()}.`,
      `Condition: age, visible damage, previous repairs and whether the issue is active or intermittent.`,
      `Materials: existing products, preferred grade or finish and who supplies each item.`,
      `Access in ${place.name}: floor, lift, stairs, parking, management work hours and unloading distance.`,
      `Location confirmation: the exact address or pin, not only a reference to ${landmarks[2] ?? landmarks[0]}.`
    ]
  };
}

export function buildAreaServicePairCopy(area: AreaDetail, service: ServiceDetail, locale: Locale) {
  return areaPairCopy(area, service, locale, false);
}

export function buildNearMePairCopy(area: AreaDetail, service: ServiceDetail, locale: Locale) {
  return areaPairCopy(area, service, locale, true);
}

export function buildSuburbServicePairCopy(suburb: SuburbDetail, service: ServiceDetail, locale: Locale): LocationPairCopy {
  const place = getLocalizedSuburb(suburb, locale);
  const work = getLocalizedService(service, locale);
  const body = localizeSuburbBody(suburb.slug, locale, place.housingProfile, place.commonIssues);
  const seed = hash(`${suburb.slug}:${service.slug}:${locale}`);
  const landmarks = rotate(suburb.landmarks, seed % suburb.landmarks.length);
  const subServices = rotate(work.subServices, (seed >>> 3) % work.subServices.length);
  const issues = rotate(body.commonIssues, seed % body.commonIssues.length);

  if (locale === "ms") {
    return {
      contextHeading: `${work.title} untuk profil hartanah ${suburb.name}`,
      contextParagraphs: [body.housingProfile, `Bagi ${work.title}, jangan anggap isu umum seperti ${issues.slice(0, 2).join(" dan ")} mempunyai satu punca. Catat tempat tepat, tempoh dan perubahan selepas hujan atau penggunaan. Gunakan ${landmarks[0]} sebagai rujukan arah sahaja dan berikan alamat sebenar.`, `Bezakan ${subServices[0].name.toLowerCase()} daripada ${subServices[1]?.name.toLowerCase() ?? "kerja berkaitan"}. Foto lebar, foto dekat, ukuran serta syarat pengurusan membantu mengelakkan skop yang terlalu umum.`, `Buat satu log khusus ${suburb.name}: catat ${issues.map((issue, index) => `${issue} di bahagian menghala ${landmarks[index % landmarks.length]}`).join("; ")}. Susunan ini membantu membandingkan perubahan mengikut lokasi tanpa mendakwa mercu tanda itu ialah alamat hartanah.`, `Untuk pilihan kerja, padankan ${subServices.map((sub, index) => `${sub.name.toLowerCase()} dengan keadaan berhampiran ${landmarks[(index + 1) % landmarks.length]}`).join("; ")}. Padanan hanyalah cara mengatur foto dan nota sebelum pemeriksaan, bukan pengesahan bahawa setiap item diperlukan.`],
      scopeHeading: `Cara menyediakan skop di ${suburb.name}`,
      scopeIntro: `Setiap item di bawah menghubungkan pilihan kerja dengan maklumat tapak yang perlu disahkan.`,
      scopeItems: subServices.slice(0, 4).map((sub, index) => ({ title: sub.name, body: `Untuk hartanah sekitar ${landmarks[index % landmarks.length]}, nyatakan sama ada ${issues[index % issues.length]} berkaitan dengan ${sub.name.toLowerCase()} atau sekadar isu berasingan. Kadar ${sub.price} ialah panduan permulaan, bukan harga automatik.` })),
      quoteHeading: `Semakan sebut harga ${work.title} di ${suburb.name}`,
      quoteIntro: `Sebut harga harus membezakan punca, kerja pembetulan dan kemasan semula.`,
      quoteItems: [`Ukuran dan kuantiti bagi ${subServices[0].name.toLowerCase()}.`, `Bukti keadaan seperti ${issues[0]}, foto dan pembaikan lama.`, `Pilihan bahan, kemasan serta item dibekalkan pelanggan.`, `Akses dari ${landmarks[1] ?? landmarks[0]}, parkir, tingkat dan masa kerja bangunan.`, `Alamat atau pin tepat untuk pengesahan liputan dan jadual.`]
    };
  }
  if (locale === "zh") {
    return {
      contextHeading: `${suburb.name}房产的${work.title}规划`,
      contextParagraphs: [body.housingProfile, `处理${work.title}时，不应假设${issues.slice(0, 2).join("及")}只有一种原因。请记录准确位置、持续时间，以及下雨或使用后是否变化；${landmarks[0]}只作路线参考，仍须提供实际地址。`, `请把${subServices[0].name}与${subServices[1]?.name ?? "相关工程"}分开。广角及近照、尺寸和物业施工规定，可避免工程范围过于笼统。`, `可建立一份${suburb.name}现场记录：${issues.map((issue, index) => `把“${issue}”标记在朝向${landmarks[index % landmarks.length]}的一侧`).join("；")}。这只是整理方位变化的方法，并不表示地标就是房产地址。`, `整理工程选项时，可分别把${subServices.map((sub, index) => `${sub.name}的照片归入${landmarks[(index + 1) % landmarks.length]}方向`).join("；")}。此分类用于勘查前整理资料，并非确认所有项目都需要施工。`],
      scopeHeading: `${suburb.name}工程范围准备方法`,
      scopeIntro: `以下项目把施工选项与需要核实的现场资料逐项对应。`,
      scopeItems: subServices.slice(0, 4).map((sub, index) => ({ title: sub.name, body: `若房产靠近${landmarks[index % landmarks.length]}，请说明${issues[index % issues.length]}是否与${sub.name}有关，还是独立问题。${sub.price}只是起步参考，并非自动报价。` })),
      quoteHeading: `${suburb.name}${work.title}报价检查`,
      quoteIntro: `报价应把问题原因、修复工程和恢复饰面分别列出。`,
      quoteItems: [`${subServices[0].name}的尺寸与数量。`, `包括${issues[0]}、照片和旧维修在内的现况资料。`, `材料、饰面选择及客户自备物品。`, `从${landmarks[1] ?? landmarks[0]}方向前往的通道、停车、楼层和物业施工时间。`, `用于确认覆盖和安排时间的准确地址或定位。`]
    };
  }
  return {
    contextHeading: `${work.title} for the ${suburb.name} property profile`,
    contextParagraphs: [body.housingProfile, `For ${work.title}, do not assume common observations such as ${issues.slice(0, 2).join(" and ")} have one cause. Record the exact position, duration and whether anything changes after rain or use. Use ${landmarks[0]} only as a direction reference and provide the actual address.`, `Separate ${subServices[0].name.toLowerCase()} from ${subServices[1]?.name.toLowerCase() ?? "related work"}. Wide and close photos, measurements and management rules prevent an overly broad scope.`, `Build a ${suburb.name} condition log: ${issues.map((issue, index) => `mark “${issue}” on the side facing ${landmarks[index % landmarks.length]}`).join("; ")}. This is a practical way to compare changes by position without treating the landmark as the property's address.`, `For work options, pair ${subServices.map((sub, index) => `${sub.name.toLowerCase()} notes with the ${landmarks[(index + 1) % landmarks.length]} direction`).join("; ")}. The pairing simply organises photos before an assessment; it does not confirm that every item is required.`],
    scopeHeading: `How to prepare the scope in ${suburb.name}`,
    scopeIntro: `Each item below connects a work option with site information that still needs verification.`,
    scopeItems: subServices.slice(0, 4).map((sub, index) => ({ title: sub.name, body: `For a property around ${landmarks[index % landmarks.length]}, state whether ${issues[index % issues.length]} appears connected to ${sub.name.toLowerCase()} or is a separate issue. The ${sub.price} rate is a starting guide, not an automatic price.` })),
    quoteHeading: `${work.title} quotation checks for ${suburb.name}`,
    quoteIntro: `The quotation should distinguish cause, corrective work and reinstatement.`,
    quoteItems: [`Measurements and quantities for ${subServices[0].name.toLowerCase()}.`, `Condition evidence such as ${issues[0]}, photos and earlier repairs.`, `Material and finish choices, including customer-supplied items.`, `Access from ${landmarks[1] ?? landmarks[0]}, parking, floor level and building work hours.`, `The exact address or pin for coverage and scheduling confirmation.`]
  };
}
