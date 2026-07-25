import type { Locale } from "@/lib/i18n";

/**
 * Trilingual content for the 49 suburb pages (`/suburbs/[slug]/[serviceSlug]`).
 *
 * Only the customer-visible descriptive copy is translated here. Suburb names,
 * landmarks (proper nouns), coordinates and slugs stay canonical so URLs,
 * schema markup and internal links remain stable across languages.
 *
 * Meta titles, meta descriptions and FAQs are generated from locale templates
 * in `lib/suburb-i18n.ts` so they stay consistent across all 49 suburbs.
 */
export type LocalizedSuburbContent = {
  housingProfile: string;
};

export const suburbHousingProfileI18n: Record<
  string,
  Partial<Record<Exclude<Locale, "en">, string>>
> = {
  "kuala-lumpur": {
    ms: "Pejabat bertingkat tinggi, kondominium, lot kedai lama, dan rumah bertanah dengan peraturan akses pengurusan bangunan yang ketat.",
    zh: "高层办公楼、公寓、老式店屋和有地住宅，大楼管理层的出入规定较为严格。"
  },
  cheras: {
    ms: "Kawasan rumah teres padat dan kondominium di mana kebocoran paip, mengecat semula, dan pembaikan siling adalah perkara biasa.",
    zh: "密集的排屋社区与公寓，水管渗漏、重新粉刷和天花板维修需求常见。"
  },
  ampang: {
    ms: "Rumah bertanah, pangsapuri, dan hartanah lereng bukit yang kerap memerlukan kerja kalis air, cat luaran, dan penyelenggaraan kerja tangan.",
    zh: "有地住宅、公寓与山坡房产，经常需要防水、外墙粉刷和杂工维护。"
  },
  setapak: {
    ms: "Campuran perumahan pelajar, pangsapuri, dan lot kedai dengan permintaan berulang untuk penyelenggaraan paip, kunci, dan cat.",
    zh: "学生宿舍、公寓与店屋混合区，水管、锁具和油漆维护需求持续。"
  },
  "wangsa-maju": {
    ms: "Kondominium dan rumah teres yang memerlukan kaedah kerja mesra kondo, pembaikan tanpa kotoran, dan slot perkhidmatan hari sama.",
    zh: "公寓与排屋，需要符合公寓规范的施工方式、低尘维修和当天服务档期。"
  },
  kepong: {
    ms: "Rumah teres matang dan deretan komersial di mana paip lama, dinding lembap, dan kerja mengecat semula kerap berlaku.",
    zh: "成熟排屋与商业街区，老旧管道、潮湿墙面和重新粉刷需求频繁。"
  },
  "sri-petaling": {
    ms: "Pangsapuri sibuk dan rumah teres dengan permintaan tinggi untuk kerja tangan, paip, dan mengecat dalaman.",
    zh: "繁忙的公寓与排屋，对杂工、水管和室内粉刷需求旺盛。"
  },
  "bukit-jalil": {
    ms: "Kondominium baharu dan rumah bertanah yang memerlukan perlindungan rapi, pematuhan JMB, pemasangan TV, dan cat sentuhan akhir.",
    zh: "较新的公寓与有地住宅，需要细致的现场保护、遵守物业规定、电视挂装和补漆。"
  },
  "mont-kiara": {
    ms: "Kondominium mewah bertingkat tinggi dengan kelulusan pengurusan, perlindungan lif, dan keperluan kerja bersih tanpa kotoran.",
    zh: "高端高层公寓，需要管理层批准、电梯保护以及零脏乱的整洁施工。"
  },
  bangsar: {
    ms: "Rumah bertanah lama, pangsapuri, dan lot kedai yang sering memerlukan cat semula, tampalan siling, dan naik taraf kelengkapan.",
    zh: "老式有地住宅、公寓与店屋，经常需要重新粉刷、天花板修补和设备升级。"
  },
  "desa-parkcity": {
    ms: "Kondominium premium dan rumah bertanah yang memerlukan krew kemas, berjadual, dan perlindungan permukaan yang teliti.",
    zh: "高端公寓与有地住宅，需要整洁守时的团队和细致的表面保护。"
  },
  "taman-melawati": {
    ms: "Rumah bertanah berhampiran kawasan lereng bukit di mana kalis air luaran, pemeriksaan bocor bumbung, dan cat semula adalah perkara biasa.",
    zh: "邻近山坡地带的有地住宅，外墙防水、屋顶渗漏检查和重新粉刷较为常见。"
  },
  "hulu-kelang": {
    ms: "Hartanah lereng bukit dan bertanah yang memerlukan kalis air, pembaikan bocor bumbung, dan salutan luaran yang kukuh.",
    zh: "山坡与有地房产，需要防水、屋顶漏水修复以及坚固的外墙涂层。"
  },
  "petaling-jaya": {
    ms: "Rumah teres matang, kondominium, dan lot pejabat dengan keperluan kerap untuk mengecat, paip, dan pembaikan siling.",
    zh: "成熟排屋、公寓与办公单位，油漆、水管和天花板维修需求频繁。"
  },
  "subang-jaya": {
    ms: "Rumah keluarga, pangsapuri pelajar, dan pejabat komersial dengan permintaan tetap untuk kerja paip, siling, dan kerja tangan.",
    zh: "家庭住宅、学生公寓与商业办公室，水管、天花板和杂工服务需求稳定。"
  },
  "shah-alam": {
    ms: "Rumah bertanah, lot perindustrian, dan pejabat di mana cat luaran, bocor bumbung, dan kerja partition adalah perkara biasa.",
    zh: "有地住宅、工业单位与办公室，外墙粉刷、屋顶渗漏和隔间工程常见。"
  },
  puchong: {
    ms: "Rumah teres, kondominium, dan lot kedai dengan keperluan penyelenggaraan paip, kunci, pintu, dan kalis air secara berkala.",
    zh: "排屋、公寓与店屋，水管、锁具、门扇和防水维护需求持续。"
  },
  damansara: {
    ms: "Rumah mapan dan lot runcit di mana paip lama, retak siling, dan projek mengecat semula adalah perkara biasa.",
    zh: "成熟住宅与零售单位，老旧水管、天花板裂缝和重新粉刷项目常见。"
  },
  "kota-damansara": {
    ms: "Kondominium, rumah bandar, dan unit komersial yang memerlukan pembaikan dan kerja mengecat berjadual serta mesra kondo.",
    zh: "公寓、联排住宅与商业单位，需要预约排期且符合公寓规范的维修与粉刷。"
  },
  "ara-damansara": {
    ms: "Kondominium moden dan pejabat di mana perlindungan lif, pemasangan dinding, dan pembaikan paip yang teliti amat penting.",
    zh: "现代公寓与办公室，电梯保护、墙面挂装和水管维修的细致度尤为重要。"
  },
  sunway: {
    ms: "Kondominium berkepadatan tinggi, perumahan pelajar, dan ruang komersial yang memerlukan sokongan pantas untuk kerja tangan, paip, dan cat.",
    zh: "高密度公寓、学生宿舍与商业空间，需要快速响应的杂工、水管和油漆支援。"
  },
  usj: {
    ms: "Rumah teres dan pangsapuri dengan penyelenggaraan biasa untuk pemanas air, paip, siling, dan cat.",
    zh: "排屋与公寓，热水器、水管、天花板和油漆的日常维护需求常见。"
  },
  "bandar-utama": {
    ms: "Kondominium dan rumah bertanah dengan permintaan kerap untuk pemasangan TV, cat sentuhan akhir, dan penggantian kelengkapan paip.",
    zh: "公寓与有地住宅，电视挂装、补漆和水管洁具更换需求频繁。"
  },
  ss2: {
    ms: "Rumah teres matang dan lot kedai di mana paip lama, kelembapan bumbung, dan mengecat semula adalah perkara biasa.",
    zh: "成熟排屋与店屋，老旧水管、屋顶潮湿和重新粉刷较为常见。"
  },
  klang: {
    ms: "Rumah dan kawasan komersial berpengaruh iklim pantai lembap yang memerlukan cat anti-lembap, kerja paip, dan penjagaan siling.",
    zh: "受沿海潮湿气候影响的住宅与商业区，需要防潮油漆、水管与天花板养护。"
  },
  "port-klang": {
    ms: "Hartanah pantai dan perindustrian di mana kelengkapan kalis kakisan dan kawalan kelembapan amat penting.",
    zh: "沿海与工业房产，防腐蚀配件和防潮处理尤为重要。"
  },
  "bukit-tinggi": {
    ms: "Perbandaran moden dan deretan komersial dengan penyelenggaraan paip, cat, dan kalis air secara berkala.",
    zh: "现代化城镇与商业街区，水管、油漆和防水维护需求持续。"
  },
  "setia-alam": {
    ms: "Rumah bertanah baharu dan kondominium yang memerlukan kerja mengecat kemas, pemasangan TV, kunci pintu, dan perkhidmatan siling.",
    zh: "较新的有地住宅与公寓，需要整洁的粉刷、电视挂装、门锁与天花板服务。"
  },
  meru: {
    ms: "Hartanah bertanah dan separa perindustrian di mana bocor bumbung, cat luaran, dan pembaikan paip kerap timbul.",
    zh: "有地与半工业房产，屋顶渗漏、外墙粉刷和水管维修较常出现。"
  },
  "kota-kemuning": {
    ms: "Rumah bertanah dan komuniti berpagar yang memerlukan perkhidmatan mengecat, paip, dan kerja tangan berjadual serta minimum kotoran.",
    zh: "有地住宅与封闭式社区，需要预约排期、低尘的油漆、水管和杂工服务。"
  },
  "bukit-jelutong": {
    ms: "Rumah semi-D, banglo, dan pejabat di mana salutan luaran dan kerja kemasan premium adalah perkara biasa.",
    zh: "半独立式洋房、别墅与办公室，外墙涂层与高端饰面工程较为常见。"
  },
  glenmarie: {
    ms: "Pejabat komersial, bilik pameran, dan rumah bertanah yang sering memerlukan partition, mengecat, dan kerja paip.",
    zh: "商业办公室、展示厅与有地住宅，经常需要隔间、粉刷和水管工程。"
  },
  "batu-caves": {
    ms: "Rumah bertanah, pangsapuri, dan lot kedai di mana bocor bumbung, paip, dan kerja cat luaran adalah perkara biasa.",
    zh: "有地住宅、公寓与店屋，屋顶渗漏、水管和外墙粉刷工程常见。"
  },
  selayang: {
    ms: "Rumah matang dan pangsapuri dengan kerja bocor siling, paip, dan pembaikan kunci yang kerap.",
    zh: "成熟住宅与公寓，天花板渗漏、水管和锁具维修需求频繁。"
  },
  rawang: {
    ms: "Perbandaran bertanah dan kawasan perindustrian di mana cat luaran, bocor bumbung, dan penyelenggaraan kerja tangan adalah perkara biasa.",
    zh: "有地城镇与工业区，外墙粉刷、屋顶渗漏和杂工维护较为常见。"
  },
  kundang: {
    ms: "Hartanah bertanah dan separa luar bandar yang memerlukan kalis air bumbung, cat luaran, dan pembaikan am.",
    zh: "有地与半乡村房产，需要屋顶防水、外墙粉刷和一般维修。"
  },
  "sungai-buloh": {
    ms: "Rumah bandar, pangsapuri, dan lot perindustrian dengan keperluan paip dan penyelenggaraan yang kerap.",
    zh: "联排住宅、公寓与工业单位，水管和维护需求频繁。"
  },
  kajang: {
    ms: "Rumah bertanah dan pangsapuri di mana pembaikan bocor, cat luaran, dan kerja tangan adalah rutin.",
    zh: "有地住宅与公寓，漏水维修、外墙粉刷和杂工作业属于日常需求。"
  },
  semenyih: {
    ms: "Perbandaran baharu dan rumah bertanah yang memerlukan kerja mengecat, kalis air, dan pemasangan kelengkapan.",
    zh: "新兴城镇与有地住宅，需要粉刷、防水和洁具设备安装。"
  },
  balakong: {
    ms: "Zon perindustrian dan kediaman dengan permintaan tinggi untuk kerja paip, partition, dan mengecat.",
    zh: "工业与住宅混合区，水管、隔间和粉刷工程需求旺盛。"
  },
  "seri-kembangan": {
    ms: "Kawasan kondominium dan teres di mana kerja paip, bocor siling, dan kerja tangan adalah perkara biasa.",
    zh: "公寓与排屋区，水管、天花板渗漏和杂工作业较为常见。"
  },
  "pandan-indah": {
    ms: "Pangsapuri berkepadatan tinggi dan lot kedai dengan pembaikan paip, pintu, kunci, dan cat semula yang kerap.",
    zh: "高密度公寓与店屋，水管、门扇、锁具维修和重新粉刷需求频繁。"
  },
  "bandar-puteri": {
    ms: "Rumah bertanah, kondominium, dan pejabat yang memerlukan perkhidmatan kerja tangan, mengecat, dan paip yang profesional.",
    zh: "有地住宅、公寓与办公室，需要专业的杂工、粉刷与水管服务。"
  },
  putrajaya: {
    ms: "Kuarters kerajaan, pangsapuri, dan pejabat yang memerlukan perkhidmatan pembaikan dan penyelenggaraan berjadual serta kemas.",
    zh: "政府宿舍、公寓与办公室，需要预约排期且整洁的维修与保养服务。"
  },
  cyberjaya: {
    ms: "Kondominium, unit SOHO, dan pejabat dengan keperluan berkala untuk pemasangan TV, paip, dan partition.",
    zh: "公寓、SOHO 单位与办公室，电视挂装、水管和隔间需求持续。"
  },
  dengkil: {
    ms: "Rumah bertanah berhampiran Putrajaya dan Cyberjaya di mana permintaan untuk kalis air, mengecat, dan paip semakin meningkat.",
    zh: "邻近布城与赛城的有地住宅，防水、粉刷和水管服务需求持续增长。"
  },
  selangor: {
    ms: "Liputan perkhidmatan seluruh negeri merangkumi bandar matang, perbandaran baharu, unit komersial, dan rumah bertanah.",
    zh: "覆盖全州的服务范围，包括成熟市镇、新兴城镇、商业单位与有地住宅。"
  },
  sentul: {
    ms: "Pangsapuri lama, rumah teres, dan kondominium baharu dengan kerja paip, mengecat, dan kerja tangan yang kerap.",
    zh: "老式公寓、排屋与新建公寓，水管、粉刷和杂工作业需求频繁。"
  },
  "bandar-botanic": {
    ms: "Rumah bertanah moden dan unit komersial yang memerlukan cat dalaman kemas, kunci pintu, dan pembaikan paip.",
    zh: "现代有地住宅与商业单位，需要整洁的室内粉刷、门锁与水管维修。"
  }
};

/** Localised "common issues" checked on every suburb page. */
export const suburbCommonIssuesI18n: Record<Exclude<Locale, "en">, string[]> = {
  ms: [
    "resapan air selepas hujan lebat",
    "cat mengelupas akibat kelembapan",
    "kelengkapan bilik air yang sudah usang",
    "kesan air pada siling akibat kebocoran"
  ],
  zh: ["大雨后的渗水问题", "潮湿导致的油漆剥落", "老化的浴室洁具配件", "渗漏造成的天花板水渍"]
};
