/**
 * Free Tools & Guides — indexable content layer.
 *
 * The interactive estimator lives in `lib/estimator/*`; this file holds the
 * server-rendered copy around it (direct answer, how-to steps, FAQs, price
 * table, cross-links). Keeping it server-side means every tool page ships real
 * crawlable text for Google, ChatGPT, Gemini, Perplexity and Claude — the
 * calculator itself is progressive enhancement on top.
 */

import { RATES } from "@/lib/estimator/pricing";
import { formatMYR } from "@/lib/estimator/format";

export type ToolFaq = { q: string; a: string };

export type ToolPriceRow = { scope: string; rate: string; note: string };

export type ToolContent = {
  slug: string;
  /** Wizard name, matches the estimator spec. */
  name: string;
  /** SEO H1 (page heading). */
  heading: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  /** Short badge above the H1. */
  eyebrow: string;
  /** One-line promise shown under the H1. */
  intro: string;
  /** Lead paragraph, also used for the AI-citable direct answer. */
  directQuestion: string;
  directAnswer: string;
  trilingualMs: string;
  trilingualZh: string;
  /** Hero image path + descriptive alt text. */
  heroImage: string;
  heroAlt: string;
  /** Three headline stats above the fold. */
  stats: { label: string; value: string }[];
  /** HowTo schema steps + on-page "how it works". */
  howTo: { title: string; desc: string }[];
  /** Published rate table rendered as static HTML for crawlers. */
  priceTable: ToolPriceRow[];
  priceTableNote: string;
  faqs: ToolFaq[];
  /** What the tool covers, listed for AEO extraction. */
  covers: string[];
  relatedTools: string[];
  relatedServices: { label: string; href: string }[];
  estimatedMinutes: number;
};

const money = (value: number) => formatMYR(value);
const band = (low: number, high: number) => `${money(low)} – ${money(high)}`;

export const toolsContent: Record<string, ToolContent> = {
  "painting-calculator": {
    slug: "painting-calculator",
    name: "Painting Cost Calculator",
    heading: "Painting Cost Calculator for KL & Selangor",
    metaTitle: "Painting Cost Calculator KL — Instant Price Estimate",
    metaDesc:
      "Free painting cost calculator for KL & Selangor. Pick your surface, size, condition and paint grade to get an instant estimate from our published 2026 rates.",
    keywords: [
      "painting cost calculator Malaysia",
      "house painting price KL",
      "paint cost per square feet Malaysia",
      "interior painting cost Selangor",
      "exterior painting quote KL"
    ],
    eyebrow: "Free instant estimator",
    intro:
      "One page, no next buttons. Pick what you are painting and the size — the price appears instantly from our published KL & Selangor rates.",
    directQuestion: "How much does house painting cost in KL and Selangor?",
    directAnswer: `Interior painting in Kuala Lumpur and Selangor runs ${band(RATES.painting.interiorSqft.low, RATES.painting.interiorSqft.high)} per square foot, with a minimum of ${money(RATES.painting.roomMinimum)} per room. Exterior painting runs ${band(RATES.painting.exteriorSqft.low, RATES.painting.exteriorSqft.high)} per square foot and starts from ${money(RATES.painting.exteriorMinimum)}. The final figure depends on surface condition, paint grade, colour change, access height and how quickly you need it. This calculator applies those same published rates to your answers in about 90 seconds.`,
    trilingualMs:
      "Kalkulator kos mengecat percuma untuk KL & Selangor — pilih permukaan, saiz dan gred cat untuk anggaran segera.",
    trilingualZh: "免费油漆费用计算器，适用于吉隆坡与雪兰莪——选择表面、尺寸与涂料等级即可获得即时估价。",
    heroImage: "/tools/painting-cost-calculator-kl.webp",
    heroAlt:
      "Professional painter from KL Servis Rumah rolling premium paint onto an interior wall in a Kuala Lumpur home while a tablet shows the painting cost calculator",
    stats: [
      { label: "Interior rate", value: `${money(RATES.painting.interiorSqft.low)}–${money(RATES.painting.interiorSqft.high)} / sq ft` },
      { label: "From, per room", value: money(RATES.painting.roomMinimum) },
      { label: "Time to finish", value: "Under 2 minutes" }
    ],
    howTo: [
      { title: "Pick what you want painted and how big it is", desc: "Everything is on one page. Choose from interior walls, ceilings, exterior walls, roof, doors, windows, gates, fences, cabinets, wardrobes, railings, steel structures, or a whole apartment, condo, landed house, office, shop lot, factory or warehouse — then tap a common room size such as 10 × 12 ft, a property built-up band, or enter your own measurements." },
      { title: "Say what condition the surface is in", desc: "New, sound, cracked, peeling, water damaged, mouldy, uneven or bare cement — and flag any skim coat or waterproofing needed. The price at the top of the page updates on every tap." },
      { title: "Optional: fine-tune paint, colour, access and urgency", desc: "Open the optional section only if you want to change the paint grade, colour direction, access height or scheduling. Skip it and we use the most common answers — economy to luxury grades, ground-floor access and standard scheduling." },
      { title: "Read your estimate and book", desc: "The estimated cost, range, labour vs materials split, completion time, recommended package and add-ons all appear on the same page — then book on WhatsApp or request a free site visit." }
    ],
    priceTable: [
      { scope: "Interior wall painting", rate: `${money(RATES.painting.interiorSqft.low)}–${money(RATES.painting.interiorSqft.high)} / sq ft`, note: `Minimum ${money(RATES.painting.roomMinimum)} per room` },
      { scope: "Exterior wall painting", rate: `${money(RATES.painting.exteriorSqft.low)}–${money(RATES.painting.exteriorSqft.high)} / sq ft`, note: `Starts from ${money(RATES.painting.exteriorMinimum)}` },
      { scope: "Wall crack & moisture repair", rate: `From ${money(RATES.painting.repairMinimum)}`, note: "Routing, filling and sealer primer" },
      { scope: "Wall skim coating", rate: `From ${money(RATES.painting.skimWallSqft)} / sq ft`, note: "Glass-smooth levelling before paint" },
      { scope: "Ceiling skim coating", rate: `From ${money(RATES.painting.skimCeilingSqft)} / sq ft`, note: "Refresh aged plaster ceilings" },
      { scope: "Crack & joint repair", rate: `From ${money(RATES.painting.crackLinearFt)} / linear ft`, note: "Structural and settlement cracks" },
      { scope: "Wall dampness treatment", rate: `From ${money(RATES.painting.dampRemedial)}`, note: "Efflorescence and moisture barrier" }
    ],
    priceTableNote:
      "These are the same published rates the calculator uses. They reflect standard Klang Valley market pricing for 2026 — not inflated, not underpriced.",
    faqs: [
      { q: "How much does it cost to paint a room in KL?", a: `A standard 10 × 12 ft bedroom with walls in good condition typically lands near our published minimum of ${money(RATES.painting.roomMinimum)} per room. Larger rooms, high ceilings, dark colour changes or heavy crack repair push the figure up, which is exactly what the calculator models.` },
      { q: "How much does exterior house painting cost in Selangor?", a: `Exterior painting is priced at ${band(RATES.painting.exteriorSqft.low, RATES.painting.exteriorSqft.high)} per square foot depending on access and paint system, starting from ${money(RATES.painting.exteriorMinimum)} for a small facade. Scaffold or rope access adds cost, and the calculator includes both options.` },
      { q: "Is the calculator's estimate a final quotation?", a: "No. It is an estimated quotation based on the information you provide. Final pricing may change after an on-site inspection depending on actual site conditions such as hidden damage, substrate quality or access restrictions." },
      { q: "Does the estimate include paint and materials?", a: "Yes, unless you select \"I will supply the paint\". The result screen splits the figure into estimated labour and estimated materials so you can see both." },
      { q: "Do you use Nippon Paint or Dulux?", a: "Yes. We use genuine Nippon Paint, Dulux and Jotun products across all four grades. The economy tier uses their budget emulsions; premium and luxury tiers use washable, low-VOC and weatherproof ranges." },
      { q: "How long does painting take?", a: "A single room is usually one day. A 3-bedroom condo takes 2 to 3 days including preparation and drying. The calculator estimates completion time from your area, condition and access answers." },
      { q: "Do I need skim coating before painting?", a: `Skim coating is worth it when walls are wavy, patched or previously papered. It is charged separately from ${money(RATES.painting.skimWallSqft)} per square foot, and you can toggle it inside the calculator to see the effect on your total.` },
      { q: "Can I get a discount for painting the whole house?", a: "Yes. The calculator automatically applies a volume efficiency once the painted area passes 1,500 sq ft and again beyond 4,000 sq ft, because setup and protection cost is shared across a larger scope." }
    ],
    covers: [
      "Interior walls and ceilings",
      "Exterior walls, roof coating and boundary walls",
      "Doors, windows, gates, grilles and fences",
      "Kitchen cabinets, wardrobes and joinery",
      "Stair railings and structural steel",
      "Apartments, condominiums and landed houses",
      "Offices, shop lots, factories and warehouses"
    ],
    relatedTools: ["ceiling-calculator", "leak-triage"],
    relatedServices: [
      { label: "House Painting Service", href: "/services/painting" },
      { label: "Painting Cost Guide", href: "/services/painting/cost" },
      { label: "Skim Coat & Wall Levelling", href: "/services/skim-coat" },
      { label: "Waterproofing", href: "/services/waterproofing" }
    ],
    estimatedMinutes: 2
  },

  "leak-triage": {
    slug: "leak-triage",
    name: "Water Leak Triage",
    heading: "Water Leak Triage & Repair Cost Estimator",
    metaTitle: "Water Leak Triage KL — Find the Cause & Cost",
    metaDesc:
      "Free guided leak diagnosis for KL & Selangor homes. Identify likely causes, urgency level and estimated repair cost for ceiling, bathroom, roof, wall and pipe leaks.",
    keywords: [
      "water leak repair cost Malaysia",
      "ceiling leak KL",
      "bathroom leak repair Selangor",
      "PU grouting price KL",
      "roof leak repair cost Malaysia"
    ],
    eyebrow: "Free guided diagnosis",
    intro:
      "One page, no next buttons. Tell us where the leak is and what you see — the likely cause, urgency and repair cost appear instantly.",
    directQuestion: "How do I tell how serious a water leak is, and what will it cost to repair?",
    directAnswer: `Leak severity is judged on three things: whether water is actively moving, how fast the affected area is spreading, and how long it has been running. In Kuala Lumpur and Selangor, PU injection grouting for slab leaks costs ${band(RATES.waterproofing.puBand.low, RATES.waterproofing.puPoint)} per point, bathroom waterproofing without hacking runs ${band(RATES.waterproofing.bathroomBand.low, RATES.waterproofing.bathroomBand.high)}, roof leak diagnosis and repair starts from ${money(RATES.waterproofing.roofDiagnosis)}, and water-damaged ceiling reinstatement starts from ${money(RATES.waterproofing.ceilingRepair)}. This triage tool matches your symptoms to the likely cause, assigns an urgency level and estimates the repair using those published rates.`,
    trilingualMs:
      "Alat triaj kebocoran air percuma — kenal pasti punca, tahap kecemasan dan anggaran kos pembaikan dalam masa 2 minit.",
    trilingualZh: "免费漏水分诊工具——2 分钟内识别原因、紧急程度与预估维修费用。",
    heroImage: "/tools/water-leak-triage-kl.webp",
    heroAlt:
      "KL Servis Rumah technician using a moisture meter to trace a water leak on a stained ceiling in a Kuala Lumpur apartment",
    stats: [
      { label: "PU grouting", value: `${money(RATES.waterproofing.puBand.low)}–${money(RATES.waterproofing.puPoint)} / point` },
      { label: "Ceiling repair from", value: money(RATES.waterproofing.ceilingRepair) },
      { label: "Diagnosis time", value: "Under 2 minutes" }
    ],
    howTo: [
      { title: "Pick where the leak appears and what you see", desc: "Everything is on one page. Choose the location — bathroom, kitchen, roof, ceiling, balcony, wall, outdoor area, water tank, pipe, toilet, tap or water heater — then tick every symptom: wet wall, active dripping, low pressure, brown stain, ceiling bubbling, cracks, mould, burst pipe, pipe noise, a spinning water meter or an unusually high bill." },
      { title: "Rate how bad it is and how much area is affected", desc: "Slow, moderate, fast or severe, and from a palm-sized spot to multiple rooms. The urgency level and the price at the top of the page update immediately." },
      { title: "Optional: add how long it has run and the property details", desc: "Open the optional section to add leak duration, property type and building age. Skip it and we assume a typical mid-age Klang Valley home." },
      { title: "Read the diagnosis and book", desc: "Likely causes, urgency level, estimated repair cost and range, plus recommended add-ons such as ceiling reinstatement or repainting — all on the same page." }
    ],
    priceTable: [
      { scope: "PU high-pressure injection grouting", rate: `${money(RATES.waterproofing.puBand.low)}–${money(RATES.waterproofing.puPoint)} / point`, note: "Non-destructive slab leak sealing" },
      { scope: "Bathroom waterproofing (no hacking)", rate: band(RATES.waterproofing.bathroomBand.low, RATES.waterproofing.bathroomBand.high), note: `Published starting price ${money(RATES.waterproofing.bathroom)}` },
      { scope: "Bathroom waterproofing (with hacking)", rate: band(RATES.waterproofing.bathroomHackBand.low, RATES.waterproofing.bathroomHackBand.high), note: "Full hack and retile scope" },
      { scope: "Roof leak diagnosis & repair", rate: `From ${money(RATES.waterproofing.roofDiagnosis)}`, note: "Tiles, ridge, flashing and valley gutter" },
      { scope: "Torch-on membrane waterproofing", rate: `From ${money(RATES.waterproofing.roofMembraneSqft)} / sq ft`, note: "Roof slabs and balconies" },
      { scope: "Water-damaged ceiling repair", rate: `From ${money(RATES.waterproofing.ceilingRepair)}`, note: "Board replacement and reinstatement" },
      { scope: "Wall dampness & efflorescence", rate: `From ${money(RATES.waterproofing.wallDamp)}`, note: "Salt scaling, mould and moisture barrier" },
      { scope: "Concealed pipe leak detection", rate: `From ${money(RATES.plumbing.leakDiagnosis)}`, note: "Acoustic and thermal tracing" }
    ],
    priceTableNote:
      "Repair figures always cover the leak source first. Finishing works such as tiles, paint and ceiling boards are itemised separately so you can see exactly what you are paying for.",
    faqs: [
      { q: "How urgent is a ceiling leak?", a: "A ceiling that is bubbling or sagging is urgent — water is pooling above the board and it can come down without warning. Turn off any lighting circuit in that ceiling and book within 24 to 48 hours. A dry brown stain that has not changed in months is far less urgent." },
      { q: "How much does it cost to fix a leaking ceiling in KL?", a: `Sealing the source with PU injection runs ${band(RATES.waterproofing.puBand.low, RATES.waterproofing.puPoint)} per point, and reinstating the damaged ceiling starts from ${money(RATES.waterproofing.ceilingRepair)}. The triage tool combines both because reinstating a ceiling without fixing the source simply repeats the damage.` },
      { q: "Can you find a hidden leak without hacking my bathroom?", a: "Yes. We use acoustic leak detectors and thermal imaging to trace the escape point, then open only the minimum tile area needed. Full hacking is a last resort, not a starting point." },
      { q: "My water meter moves when all taps are closed. What does that mean?", a: "That is a confirmed hidden leak on the supply side. It is one of the highest-weighted symptoms in this tool because the water is escaping continuously, usually under a slab or inside a wall." },
      { q: "Is the leak estimate a final quotation?", a: "No. It is an estimated quotation based on the information provided. Final pricing may change after an on-site inspection depending on actual site conditions — leak sources are frequently different from where the water appears." },
      { q: "Do you offer emergency leak response?", a: "Yes. For burst pipes and severe active leaks we dispatch the nearest available technician, typically arriving within 30 to 60 minutes across KL and Selangor. An emergency uplift applies and is stated in your estimate before you book." },
      { q: "Should I claim insurance for water damage?", a: "For significant ceiling or floor damage it is often worth it. Our written itemised quotation and photos of the source are accepted by most Malaysian insurers as supporting documentation." }
    ],
    covers: [
      "Bathroom, kitchen and wet-area leaks",
      "Ceiling leaks from the unit or roof above",
      "Roof, gutter and flashing leaks",
      "Balcony and external wall water ingress",
      "Concealed and underground pipe leaks",
      "Water tank, toilet, tap and water heater leaks"
    ],
    relatedTools: ["plumbing-diagnostic", "ceiling-calculator"],
    relatedServices: [
      { label: "Waterproofing & PU Grouting", href: "/services/waterproofing" },
      { label: "Plumbing Leak Repair", href: "/services/plumbing" },
      { label: "Ceiling Repair", href: "/services/ceiling" },
      { label: "Roof Repair", href: "/services/roof-repair" }
    ],
    estimatedMinutes: 2
  },

  "ceiling-calculator": {
    slug: "ceiling-calculator",
    name: "Ceiling Repair Estimator",
    heading: "Ceiling Repair & Installation Cost Estimator",
    metaTitle: "Ceiling Repair Cost Estimator KL & Selangor",
    metaDesc:
      "Estimate plaster ceiling repair, board replacement, L-box design and gypsum partition cost in KL & Selangor from published per-square-foot rates.",
    keywords: [
      "plaster ceiling price Malaysia",
      "ceiling repair cost KL",
      "gypsum ceiling per square feet",
      "L-box ceiling price Selangor",
      "ceiling replacement cost Malaysia"
    ],
    eyebrow: "Free instant estimator",
    intro:
      "One page, no next buttons. Pick the ceiling type, work needed and area — the estimate appears instantly from our published sq ft rates.",
    directQuestion: "How much does plaster ceiling work cost in KL and Selangor?",
    directAnswer: `Flat plaster ceiling installation is published from ${money(RATES.ceiling.flatSqft)} per square foot, tiered and L-box designs from ${money(RATES.ceiling.tieredSqft)}, cove and curved ceilings from ${money(RATES.ceiling.coveSqft)}, and repair or re-skim of an existing ceiling from ${money(RATES.ceiling.reskimSqft)} per square foot. Gypsum partition walls are from ${money(RATES.ceiling.partitionSqft)} per square foot and water-damaged ceiling repair starts from ${money(RATES.ceiling.repairMinimum)}. This estimator applies those rates to your ceiling type, area, damage level, height and extras.`,
    trilingualMs:
      "Anggaran kos siling plaster percuma — pilih jenis siling, keluasan dan tahap kerosakan untuk harga segera.",
    trilingualZh: "免费石膏天花估价工具——选择天花类型、面积与损坏程度即可获得即时报价。",
    heroImage: "/tools/ceiling-repair-estimator-kl.webp",
    heroAlt:
      "KL Servis Rumah installer fitting a gypsum plaster ceiling board onto a galvanised iron frame in a Selangor home",
    stats: [
      { label: "Flat ceiling from", value: `${money(RATES.ceiling.flatSqft)} / sq ft` },
      { label: "Repair from", value: money(RATES.ceiling.repairMinimum) },
      { label: "Time to finish", value: "Under 2 minutes" }
    ],
    howTo: [
      { title: "Pick the ceiling type, work needed and area", desc: "Everything is on one page. Gypsum board, plaster, PVC panel, calcium silicate, timber, cement board — or \"not sure\" and we identify it on site. Then choose repair, replacement, a new flat, tiered L-box or cove design, or a gypsum partition, and tap an area preset from a 20 sq ft patch up to 20 × 25 ft." },
      { title: "Describe the damage and any extras", desc: "Hairline cracks, visible cracks, water stains, sagging boards, holes, partial collapse or mould — plus painting, lighting removal, fan refit, cornice, insulation or debris disposal. The price updates on every tap." },
      { title: "Optional: ceiling height and timing", desc: "Open the optional section only if your ceiling is unusually high or you need the job fast. Skip it and we price standard height and standard scheduling." },
      { title: "Read your estimate and book", desc: "Estimated cost, range, labour and materials, completion time, recommended package and add-ons all appear on the same page — then book on WhatsApp." }
    ],
    priceTable: [
      { scope: "Flat plaster ceiling", rate: `From ${money(RATES.ceiling.flatSqft)} / sq ft`, note: "Single-level, skim finished" },
      { scope: "Tiered & L-box ceiling", rate: `From ${money(RATES.ceiling.tieredSqft)} / sq ft`, note: "Concealed LED trough design" },
      { scope: "Cove & curved ceiling", rate: `From ${money(RATES.ceiling.coveSqft)} / sq ft`, note: "Flexible GI framing feature" },
      { scope: "Ceiling repair & re-skim", rate: `From ${money(RATES.ceiling.reskimSqft)} / sq ft`, note: "Existing ceilings refreshed" },
      { scope: "Gypsum board partition wall", rate: `From ${money(RATES.ceiling.partitionSqft)} / sq ft`, note: "Paint-ready room division" },
      { scope: "Water-damaged ceiling repair", rate: `From ${money(RATES.ceiling.repairMinimum)}`, note: "Board removal and reinstatement" },
      { scope: "LED downlight point", rate: `From ${money(RATES.ceiling.downlightPoint)} / point`, note: "Cut, wire and fit" },
      { scope: "Ceiling fan installation", rate: `From ${money(RATES.ceiling.fanPoint)}`, note: "Hook check, wiring and swing test" }
    ],
    priceTableNote:
      "Installation rates include rust-proof GI framing, board, jointing and skim finish. Painting is priced separately and can be added inside the estimator.",
    faqs: [
      { q: "How much does a plaster ceiling cost per square foot in Malaysia?", a: `Flat plaster ceiling is published from ${money(RATES.ceiling.flatSqft)} per square foot. Tiered and L-box designs are from ${money(RATES.ceiling.tieredSqft)} and cove or curved work from ${money(RATES.ceiling.coveSqft)}, because they need more framing time and detailing.` },
      { q: "Should I repair or replace a water-damaged ceiling?", a: "If the board is stained but firm, a cut-out patch and re-skim is usually enough. If it is sagging, soft or has mould through the thickness, replacing the section is cheaper long term. Either way the leak source must be sealed first, otherwise the new board fails too." },
      { q: "Can you install a ceiling without removing my lights?", a: "For a re-skim, yes — we mask around the fittings. For board replacement the fittings must come down and go back up, which the estimator prices per light point." },
      { q: "How long does a plaster ceiling take to install?", a: "A standard bedroom is typically one day for framing and boarding plus a second day for jointing and skim. Larger halls and tiered designs take three to four days. The estimator calculates this from your area and damage answers." },
      { q: "Is the ceiling estimate a final quotation?", a: "No. It is an estimated quotation based on the information provided. Final pricing may change after an on-site inspection depending on actual site conditions, particularly what we find once the ceiling void is opened." },
      { q: "Do you handle gypsum partition walls too?", a: `Yes. Gypsum board partition walls are published from ${money(RATES.ceiling.partitionSqft)} per square foot and are selectable as a work type inside the estimator.` },
      { q: "What is the difference between gypsum and calcium silicate board?", a: "Gypsum is the standard, cheapest and easiest to finish. Calcium silicate is more fire and moisture resistant, which is why it costs more per square foot and is preferred for wet areas and external soffits." }
    ],
    covers: [
      "Gypsum, plaster, PVC, calcium silicate and timber ceilings",
      "Water damage, sagging, cracks and holes",
      "Section replacement and full re-skim",
      "New flat, tiered L-box and cove designs",
      "Gypsum partition walls",
      "Downlight, fan and cornice integration"
    ],
    relatedTools: ["leak-triage", "painting-calculator"],
    relatedServices: [
      { label: "Plaster Ceiling Service", href: "/services/plaster-ceiling" },
      { label: "Ceiling Repair", href: "/services/ceiling" },
      { label: "Ceiling Cost Guide", href: "/services/ceiling/cost" },
      { label: "Lighting Installation", href: "/services/lighting" }
    ],
    estimatedMinutes: 2
  },

  "plumbing-diagnostic": {
    slug: "plumbing-diagnostic",
    name: "Plumbing Diagnostic",
    heading: "Plumbing Diagnostic & Repair Cost Estimator",
    metaTitle: "Plumbing Diagnostic Tool KL — Cause & Cost",
    metaDesc:
      "Diagnose blocked drains, leaks, low water pressure and fixture faults in KL & Selangor homes. Get likely causes, urgency and estimated repair cost instantly.",
    keywords: [
      "plumber price Malaysia",
      "blocked toilet repair cost KL",
      "low water pressure fix Selangor",
      "pipe leak repair price Malaysia",
      "plumbing call out charge KL"
    ],
    eyebrow: "Free guided diagnosis",
    intro:
      "One page, no next buttons. Pick your problem and the price, likely cause and urgency appear instantly from our published plumbing rates.",
    directQuestion: "How much does a plumber charge in KL and Selangor?",
    directAnswer: `Minor plumbing repairs in the Klang Valley are published from ${money(RATES.plumbing.minorRepair)}, with a validated market band of ${band(RATES.plumbing.minorBand.low, RATES.plumbing.minorBand.high)} depending on complexity. Drain and toilet unclogging starts from ${money(RATES.plumbing.drain)}, water leakage diagnosis and repair from ${money(RATES.plumbing.leakDiagnosis)}, fixture installation from ${money(RATES.plumbing.fixtureInstall)}, and water heater work from ${money(RATES.plumbing.heaterRepair)}. This diagnostic tool matches your symptom to the likely cause and prices it from those published rates.`,
    trilingualMs:
      "Alat diagnostik paip percuma — kenal pasti masalah, tahap kecemasan dan anggaran kos pembaikan dengan cepat.",
    trilingualZh: "免费水管诊断工具——快速识别问题、紧急程度与预估维修费用。",
    heroImage: "/tools/plumbing-diagnostic-kl.webp",
    heroAlt:
      "Licensed KL Servis Rumah plumber tightening a pipe fitting under a kitchen sink in a Kuala Lumpur home",
    stats: [
      { label: "Minor repair from", value: money(RATES.plumbing.minorRepair) },
      { label: "Drain clearing from", value: money(RATES.plumbing.drain) },
      { label: "Diagnosis time", value: "Under 2 minutes" }
    ],
    howTo: [
      { title: "Pick your plumbing problem and how severe it is", desc: "Everything is on one page. Blocked sink, toilet, floor trap or outdoor drain; pipe leak, concealed leak, low pressure, no water; tap, mixer, toilet, sink or bidet work; water heater or booster pump — then rate it minor, moderate, major or emergency." },
      { title: "Choose the location and how many points are affected", desc: "Kitchen, main or en-suite bathroom, laundry, outdoor, roof tank, or multiple locations, plus the number of affected fixtures. The price at the top of the page updates immediately." },
      { title: "Optional: property details, parts and timing", desc: "Open the optional section to set property type, building age, who supplies the parts and how urgently you need a plumber. Skip it and we price a typical terrace house on standard scheduling with our SIRIM-certified parts." },
      { title: "Read your diagnosis and book", desc: "Likely causes, urgency, estimated cost and range, time on site, and add-ons such as a whole-house plumbing health check — all on the same page." }
    ],
    priceTable: [
      { scope: "Minor plumbing repair", rate: `From ${money(RATES.plumbing.minorRepair)}`, note: `Market band ${band(RATES.plumbing.minorBand.low, RATES.plumbing.minorBand.high)}` },
      { scope: "Drain & toilet unclogging", rate: `From ${money(RATES.plumbing.drain)}`, note: `Market band ${band(RATES.plumbing.drainBand.low, RATES.plumbing.drainBand.high)}` },
      { scope: "Water leakage diagnosis & repair", rate: `From ${money(RATES.plumbing.leakDiagnosis)}`, note: "Acoustic and thermal detection" },
      { scope: "Toilet, tap & sink installation", rate: `From ${money(RATES.plumbing.fixtureInstall)}`, note: "SIRIM-certified fittings" },
      { scope: "Water heater & pump installation", rate: `From ${money(RATES.plumbing.heaterService)}`, note: "Includes isolator and pressure test" },
      { scope: "Instant water heater installation", rate: `From ${money(RATES.plumbing.instantHeater)}`, note: "Single-point shower heater" },
      { scope: "Storage tank heater installation", rate: `From ${money(RATES.plumbing.storageHeater)}`, note: "15L–50L multi-point" },
      { scope: "Water heater repair & descaling", rate: `From ${money(RATES.plumbing.heaterRepair)}`, note: "Element, thermostat and anode check" }
    ],
    priceTableNote:
      "Every visit includes pressure testing after the repair. Emergency and after-hours dispatch carries an uplift that is always shown in your estimate before you book.",
    faqs: [
      { q: "What is the call-out charge for a plumber in KL?", a: `Our published plumbing starting price is ${money(RATES.plumbing.minorRepair)}, and that is the minimum applied to any visit. Small tasks completed within that time are not charged extra.` },
      { q: "How much does it cost to unclog a toilet or drain?", a: `Drain and toilet unclogging starts from ${money(RATES.plumbing.drain)}, within a validated market band of ${band(RATES.plumbing.drainBand.low, RATES.plumbing.drainBand.high)}. Deeper blockages in the soil stack or external manhole sit at the upper end.` },
      { q: "Why is my water pressure suddenly low?", a: "The four common causes are a partially closed or seized stopcock, scale build-up inside old galvanised pipe, a failed pressure pump or tank float, and a hidden leak bleeding line pressure. The diagnostic tool lists these against your specific answers." },
      { q: "Can I supply my own taps and fixtures?", a: "Yes. Select \"I already bought the parts\" and the estimate drops the material portion. We warrant our workmanship; the fixture itself carries its own manufacturer warranty." },
      { q: "Is the plumbing estimate a final quotation?", a: "No. It is an estimated quotation based on the information provided. Final pricing may change after an on-site inspection depending on actual site conditions such as pipe accessibility and hidden corrosion." },
      { q: "Do you handle emergency plumbing at night?", a: "Yes. Emergency and after-hours dispatch is available across KL and Selangor. Select it in the optional timing section and the uplift is added transparently to your estimate." },
      { q: "How long does a typical plumbing repair take?", a: "Most tap, trap and fixture jobs are done in one to two hours. Concealed leak detection and repair usually takes half a day. The estimator predicts on-site time from your answers." }
    ],
    covers: [
      "Blocked sinks, toilets, floor traps and outdoor drains",
      "Visible, concealed and underground pipe leaks",
      "Low water pressure and total supply loss",
      "Tap, mixer, toilet, sink and bidet work",
      "Water heater faults and new installations",
      "Booster pump and water tank problems"
    ],
    relatedTools: ["leak-triage", "tv-mount-advisor"],
    relatedServices: [
      { label: "Plumbing Services", href: "/services/plumbing" },
      { label: "Plumbing Cost Guide", href: "/services/plumbing/cost" },
      { label: "Water Heater Service", href: "/services/water-heater" },
      { label: "Emergency Plumbing", href: "/services/plumbing/emergency" }
    ],
    estimatedMinutes: 2
  },

  "tv-mount-advisor": {
    slug: "tv-mount-advisor",
    name: "TV Mount Advisor",
    heading: "TV Wall Mount Advisor & Installation Cost",
    metaTitle: "TV Mount Advisor KL — Bracket, Wall & Price",
    metaDesc:
      "Find the right TV bracket and wall anchor for concrete, brick, plasterboard or timber walls in KL & Selangor, with an instant installation cost estimate.",
    keywords: [
      "TV mounting service KL",
      "TV bracket installation price Malaysia",
      "mount TV on plasterboard wall",
      "TV wall mount cost Selangor",
      "cable concealment TV Malaysia"
    ],
    eyebrow: "Free instant advisor",
    intro:
      "One page, no next buttons. Pick your TV size and wall type — the right bracket, anchors and price appear instantly.",
    directQuestion: "How much does TV wall mounting cost in KL and Selangor?",
    directAnswer: `TV wall mounting is published from ${money(RATES.handyman.tvMount)}, within a validated market band of ${band(RATES.handyman.tvBand.low, RATES.handyman.tvBand.high)} depending on screen size, wall type and bracket. Concrete and solid brick walls are straightforward; plasterboard partitions need a backing plate fixed across the studs, which costs more. Adding in-wall cable concealment or a new power point behind the TV — published from ${money(RATES.handyman.powerPoint)} per point — is best done during the same visit. This advisor recommends the fixing method and prices the job instantly.`,
    trilingualMs:
      "Penasihat pemasangan TV percuma — dapatkan cadangan braket, kaedah pengikat dan anggaran kos serta-merta.",
    trilingualZh: "免费电视挂墙顾问——即时获得支架建议、固定方式与费用估算。",
    heroImage: "/tools/tv-mount-advisor-kl.webp",
    heroAlt:
      "KL Servis Rumah handyman levelling a large flat-screen TV on a wall bracket in a modern Kuala Lumpur living room",
    stats: [
      { label: "Mounting from", value: money(RATES.handyman.tvMount) },
      { label: "Power point from", value: `${money(RATES.handyman.powerPoint)} / point` },
      { label: "Advice time", value: "Under 1 minute" }
    ],
    howTo: [
      { title: "Pick your TV size and the wall type", desc: "Everything is on one page. From 32 inches up to commercial displays above 85 inches, then knock the wall: a dull thud means concrete or brick, a drummy sound means a hollow plasterboard partition. Tiled, timber, cement board — or \"not sure\" and we test on arrival." },
      { title: "Choose the bracket", desc: "Fixed flat, tilting, full-motion swivel arm or ceiling mount — or choose \"recommend one for me\" and the tool advises based on your TV size and wall. Say whether you already own a bracket or want us to supply a load-rated one." },
      { title: "Optional: cables, power and extras", desc: "Open the optional section for in-wall concealment, surface trunking, a new power point, soundbar mounting, a floating shelf, removing an old TV or device setup. Skip it and we price a straightforward mount." },
      { title: "Read your recommendation and book", desc: "The exact fixing method, a load safety check, estimated cost and range, time on site, and add-ons — all on the same page." }
    ],
    priceTable: [
      { scope: "TV wall mounting", rate: `From ${money(RATES.handyman.tvMount)}`, note: `Market band ${band(RATES.handyman.tvBand.low, RATES.handyman.tvBand.high)}` },
      { scope: "General handyman task", rate: `From ${money(RATES.handyman.callOut)}`, note: `Market band ${band(RATES.handyman.generalBand.low, RATES.handyman.generalBand.high)}` },
      { scope: "New power point / socket", rate: `From ${money(RATES.handyman.powerPoint)} / point`, note: "Licensed electrical work" },
      { scope: "Soundbar, shelf or bracket fitting", rate: `From ${money(RATES.handyman.shelf)}`, note: "Aligned and load checked" },
      { scope: "LED downlight point", rate: `From ${money(RATES.handyman.lightPoint)} / point`, note: "Ambient lighting around the TV" }
    ],
    priceTableNote:
      "Every mount is levelled, torque-checked and load tested before we leave. Wall type is verified with a knock test and pilot drill before final fixing.",
    faqs: [
      { q: "Can I mount a 65-inch TV on a plasterboard wall?", a: "Not on board anchors alone. A gypsum partition needs a timber or steel backing plate fixed across the metal studs to spread the load. We include that in the estimate whenever you select a plasterboard wall." },
      { q: "How much does TV mounting cost in Malaysia?", a: `Published from ${money(RATES.handyman.tvMount)}, within a validated band of ${band(RATES.handyman.tvBand.low, RATES.handyman.tvBand.high)}. Larger screens, full-motion arms, tiled walls and hollow partitions sit at the upper end.` },
      { q: "Can you hide the cables inside the wall?", a: "Yes. In-wall concealment means chasing a channel, running conduit and making good ready for paint. On a hollow partition we can often drop the cables inside the void with no chasing at all." },
      { q: "Do I need a power point behind the TV?", a: `It is the cleanest result — otherwise the power cable stays visible. A new socket is published from ${money(RATES.handyman.powerPoint)} per point and is best added during the same visit.` },
      { q: "What bracket should I choose?", a: "Fixed brackets are slimmest and cheapest, tilting brackets suit high mounting above a console, and full-motion arms let you pull the TV out and turn it — but they place far more leverage load on the wall. Select \"recommend one for me\" and the tool advises." },
      { q: "Is the TV mounting estimate a final quotation?", a: "No. It is an estimated quotation based on the information provided. Final pricing may change after an on-site inspection depending on actual site conditions, particularly wall construction." },
      { q: "Will you mount a TV I bought overseas?", a: "Yes, as long as the VESA mounting pattern is standard. Bring the bracket or let us supply one — we check the load rating against the panel weight before drilling." }
    ],
    covers: [
      "TVs from 32 inches to commercial displays",
      "Concrete, brick, plasterboard, timber, cement board and tiled walls",
      "Fixed, tilting, full-motion and ceiling brackets",
      "In-wall cable concealment and surface trunking",
      "New power points behind the TV",
      "Soundbars, floating shelves and device setup"
    ],
    relatedTools: ["plumbing-diagnostic", "painting-calculator"],
    relatedServices: [
      { label: "Handyman Services", href: "/services/handyman" },
      { label: "Handyman Cost Guide", href: "/services/handyman/cost" },
      { label: "Electrical Installation", href: "/services/electrical" },
      { label: "Carpentry & Feature Walls", href: "/services/carpentry" }
    ],
    estimatedMinutes: 1
  }
};

export const toolsList = Object.values(toolsContent);
