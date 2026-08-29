/**
 * Free Tools & Guides — indexable content layer.
 *
 * The interactive estimator lives in `lib/estimator/*`; this file holds the
 * server-rendered copy around it (direct answer, how-to steps, FAQs, price
 * table, cross-links). Keeping it server-side means every tool page ships real
 * crawlable text for Google, ChatGPT, Gemini, Perplexity and Claude — the
 * calculator itself is progressive enhancement on top.
 */

import { RATE_YEAR_LABEL } from "./rate-year";
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
      `Free painting cost calculator for KL & Selangor. Pick your surface, size, condition and paint grade to get an instant estimate from our published ${RATE_YEAR_LABEL} rates.`,
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
      `These are the same published rates the calculator uses. They reflect standard Klang Valley market pricing for ${RATE_YEAR_LABEL} — not inflated, not underpriced.`,
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
      { q: "Is the leak estimate a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
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
      { q: "Is the ceiling estimate a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
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
      { q: "Is the plumbing estimate a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
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
      { q: "Is the TV mounting estimate a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
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
,
  "paint-quantity-estimator": {
    slug: "paint-quantity-estimator",
    name: "Paint Quantity Estimator",
    heading: "Paint Quantity Estimator for KL & Selangor",
    metaTitle: "Paint Quantity Estimator KL — Litres & Cost",
    metaDesc: "Free paint quantity estimator for KL & Selangor. Enter room size, coats and get litres, coverage and cost instantly.",
    keywords: ["paint quantity calculator Malaysia","how much paint per sq ft","paint coverage calculator KL"],
    eyebrow: "Free paint quantity tool",
    intro: `Estimate litres of paint needed for any room size, coats and wastage. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does paint quantity estimator cost in KL and Selangor?",
    directAnswer: `Estimate litres of paint needed for any room size, coats and wastage. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Paint Quantity Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Paint Quantity Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/painting-cost-calculator-kl.webp",
    heroAlt: "Paint cans and roller with room measurements for paint quantity calculation",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Paint Quantity Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Paint Quantity Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Paint Quantity Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Paint Quantity Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate litres of paint needed for any room size, coats and wastage.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "painting Service", href: "/services/painting" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "wall-area-calculator": {
    slug: "wall-area-calculator",
    name: "Wall Area Calculator",
    heading: "Wall Area Calculator — Instant sq ft",
    metaTitle: "Wall Area Calculator — sq ft Instant",
    metaDesc: "Free wall area calculator. Enter length, width, height to get total wall area in sq ft.",
    keywords: ["wall area calculator","how to calculate wall area","wall sq ft Malaysia"],
    eyebrow: "Free area tool",
    intro: `Calculate wall paintable area using 2×(L+W)×H formula instantly. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does wall area calculator cost in KL and Selangor?",
    directAnswer: `Calculate wall paintable area using 2×(L+W)×H formula instantly. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Wall Area Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Wall Area Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/painting-cost-calculator-kl.webp",
    heroAlt: "Measuring tape on wall for area calculation",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Wall Area Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Wall Area Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Wall Area Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Wall Area Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Calculate wall paintable area using 2×(L+W)×H formula instantly.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "painting Service", href: "/services/painting" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "ceiling-area-calculator": {
    slug: "ceiling-area-calculator",
    name: "Ceiling Area Calculator",
    heading: "Ceiling Area Calculator",
    metaTitle: "Ceiling Area Calculator — sq ft Instant",
    metaDesc: "Free ceiling area calculator for any room size.",
    keywords: ["ceiling area calculator","sq ft ceiling"],
    eyebrow: "Free area tool",
    intro: `Calculate ceiling area L×W instantly. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does ceiling area calculator cost in KL and Selangor?",
    directAnswer: `Calculate ceiling area L×W instantly. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Ceiling Area Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Ceiling Area Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/ceiling-repair-estimator-kl.webp",
    heroAlt: "Ceiling measurement",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Ceiling Area Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Ceiling Area Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Ceiling Area Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Ceiling Area Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Calculate ceiling area L×W instantly.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "ceiling Service", href: "/services/ceiling" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "ceiling-replacement-cost": {
    slug: "ceiling-replacement-cost",
    name: "Ceiling Replacement Cost Calculator",
    heading: "Ceiling Replacement Cost Calculator",
    metaTitle: "Ceiling Replacement Cost Calculator KL",
    metaDesc: "Estimate plaster ceiling replacement cost in KL & Selangor from published sq ft rates.",
    keywords: ["ceiling replacement cost Malaysia","plaster ceiling price"],
    eyebrow: "Free cost estimator",
    intro: `Estimate ceiling replacement cost from sq ft rates. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does ceiling replacement cost calculator cost in KL and Selangor?",
    directAnswer: `Estimate ceiling replacement cost from sq ft rates. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Ceiling Replacement Cost Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Ceiling Replacement Cost Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/ceiling-repair-estimator-kl.webp",
    heroAlt: "Ceiling replacement",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Ceiling Replacement Cost Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Ceiling Replacement Cost Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Ceiling Replacement Cost Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Ceiling Replacement Cost Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate ceiling replacement cost from sq ft rates.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "plaster-ceiling Service", href: "/services/plaster-ceiling" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "pipe-leak-estimator": {
    slug: "pipe-leak-estimator",
    name: "Pipe Leak Repair Estimator",
    heading: "Pipe Leak Repair Estimator",
    metaTitle: "Pipe Leak Repair Estimator KL",
    metaDesc: "Free pipe leak estimator for KL & Selangor homes. Get cause, urgency and cost.",
    keywords: ["pipe leak repair cost Malaysia","water pipe leak KL"],
    eyebrow: "Free diagnostic",
    intro: `Diagnose pipe leak cause and cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does pipe leak repair estimator cost in KL and Selangor?",
    directAnswer: `Diagnose pipe leak cause and cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Pipe Leak Repair Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Pipe Leak Repair Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/plumbing-diagnostic-kl.webp",
    heroAlt: "Pipe leak",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Pipe Leak Repair Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Pipe Leak Repair Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Pipe Leak Repair Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Pipe Leak Repair Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Diagnose pipe leak cause and cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "plumbing Service", href: "/services/plumbing" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "water-pressure-troubleshooter": {
    slug: "water-pressure-troubleshooter",
    name: "Water Pressure Troubleshooter",
    heading: "Water Pressure Troubleshooter",
    metaTitle: "Water Pressure Troubleshooter KL",
    metaDesc: "Diagnose low water pressure causes and get fix cost estimate.",
    keywords: ["low water pressure fix Malaysia","water pressure low KL"],
    eyebrow: "Free troubleshooter",
    intro: `Troubleshoot low water pressure causes and fixes. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does water pressure troubleshooter cost in KL and Selangor?",
    directAnswer: `Troubleshoot low water pressure causes and fixes. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Water Pressure Troubleshooter — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Water Pressure Troubleshooter——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/plumbing-diagnostic-kl.webp",
    heroAlt: "Low water pressure",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Water Pressure Troubleshooter — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Water Pressure Troubleshooter — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Water Pressure Troubleshooter — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Water Pressure Troubleshooter — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Troubleshoot low water pressure causes and fixes.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "plumbing Service", href: "/services/plumbing" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "pipe-replacement-cost": {
    slug: "pipe-replacement-cost",
    name: "Pipe Replacement Cost Calculator",
    heading: "Pipe Replacement Cost Calculator",
    metaTitle: "Pipe Replacement Cost Calculator KL",
    metaDesc: "Free pipe replacement cost calculator for KL & Selangor.",
    keywords: ["pipe replacement cost Malaysia","repipe house price KL"],
    eyebrow: "Free cost estimator",
    intro: `Estimate pipe replacement cost per linear foot. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does pipe replacement cost calculator cost in KL and Selangor?",
    directAnswer: `Estimate pipe replacement cost per linear foot. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Pipe Replacement Cost Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Pipe Replacement Cost Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/plumbing-diagnostic-kl.webp",
    heroAlt: "Pipe replacement",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Pipe Replacement Cost Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Pipe Replacement Cost Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Pipe Replacement Cost Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Pipe Replacement Cost Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate pipe replacement cost per linear foot.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "plumbing Service", href: "/services/plumbing" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "waterproofing-cost-calculator": {
    slug: "waterproofing-cost-calculator",
    name: "Waterproofing Cost Calculator",
    heading: "Waterproofing Cost Calculator",
    metaTitle: "Waterproofing Cost Calculator KL — Instant",
    metaDesc: "Free waterproofing cost calculator for bathrooms, roof, balcony.",
    keywords: ["waterproofing cost Malaysia","bathroom waterproofing price KL"],
    eyebrow: "Free cost estimator",
    intro: `Estimate waterproofing cost from sq ft and type. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does waterproofing cost calculator cost in KL and Selangor?",
    directAnswer: `Estimate waterproofing cost from sq ft and type. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Waterproofing Cost Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Waterproofing Cost Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/water-leak-triage-kl.webp",
    heroAlt: "Waterproofing membrane",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Waterproofing Cost Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Waterproofing Cost Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Waterproofing Cost Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Waterproofing Cost Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate waterproofing cost from sq ft and type.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "waterproofing Service", href: "/services/waterproofing" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "roof-area-calculator": {
    slug: "roof-area-calculator",
    name: "Roof Area Calculator",
    heading: "Roof Area Calculator",
    metaTitle: "Roof Area Calculator — sq ft",
    metaDesc: "Free roof area calculator with slope factor.",
    keywords: ["roof area calculator","roof sq ft Malaysia"],
    eyebrow: "Free area tool",
    intro: `Calculate roof area from length, width and slope. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does roof area calculator cost in KL and Selangor?",
    directAnswer: `Calculate roof area from length, width and slope. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Roof Area Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Roof Area Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/water-leak-triage-kl.webp",
    heroAlt: "Roof area measurement",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Roof Area Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Roof Area Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Roof Area Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Roof Area Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Calculate roof area from length, width and slope.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "roof-repair Service", href: "/services/roof-repair" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "bathroom-waterproofing-estimator": {
    slug: "bathroom-waterproofing-estimator",
    name: "Bathroom Waterproofing Estimator",
    heading: "Bathroom Waterproofing Estimator",
    metaTitle: "Bathroom Waterproofing Cost Estimator KL",
    metaDesc: "Free bathroom waterproofing cost estimator for KL & Selangor.",
    keywords: ["bathroom waterproofing cost Malaysia","toilet waterproofing KL"],
    eyebrow: "Free estimator",
    intro: `Estimate bathroom waterproofing cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does bathroom waterproofing estimator cost in KL and Selangor?",
    directAnswer: `Estimate bathroom waterproofing cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Bathroom Waterproofing Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Bathroom Waterproofing Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/water-leak-triage-kl.webp",
    heroAlt: "Bathroom waterproofing",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Bathroom Waterproofing Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Bathroom Waterproofing Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Bathroom Waterproofing Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Bathroom Waterproofing Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate bathroom waterproofing cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "waterproofing Service", href: "/services/waterproofing" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "balcony-waterproofing-estimator": {
    slug: "balcony-waterproofing-estimator",
    name: "Balcony Waterproofing Estimator",
    heading: "Balcony Waterproofing Estimator",
    metaTitle: "Balcony Waterproofing Estimator KL",
    metaDesc: "Free balcony waterproofing cost estimator.",
    keywords: ["balcony waterproofing cost Malaysia"],
    eyebrow: "Free estimator",
    intro: `Estimate balcony waterproofing cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does balcony waterproofing estimator cost in KL and Selangor?",
    directAnswer: `Estimate balcony waterproofing cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Balcony Waterproofing Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Balcony Waterproofing Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/water-leak-triage-kl.webp",
    heroAlt: "Balcony waterproofing",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Balcony Waterproofing Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Balcony Waterproofing Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Balcony Waterproofing Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Balcony Waterproofing Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate balcony waterproofing cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "waterproofing Service", href: "/services/waterproofing" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "electrical-installation-cost": {
    slug: "electrical-installation-cost",
    name: "Electrical Installation Cost Estimator",
    heading: "Electrical Installation Cost Estimator",
    metaTitle: "Electrical Installation Cost Estimator KL",
    metaDesc: "Free electrical installation cost estimator for KL & Selangor.",
    keywords: ["electrical installation cost Malaysia","power point price KL"],
    eyebrow: "Free cost estimator",
    intro: `Estimate electrical point installation cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does electrical installation cost estimator cost in KL and Selangor?",
    directAnswer: `Estimate electrical point installation cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Electrical Installation Cost Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Electrical Installation Cost Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero/home-services-electrical-kl.jpg",
    heroAlt: "Electrical installation",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Electrical Installation Cost Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Electrical Installation Cost Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Electrical Installation Cost Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Electrical Installation Cost Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate electrical point installation cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "electrical Service", href: "/services/electrical" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "socket-quantity-calculator": {
    slug: "socket-quantity-calculator",
    name: "Socket Quantity Calculator",
    heading: "Socket Quantity Calculator",
    metaTitle: "Socket Quantity Calculator — How Many Sockets Per Room",
    metaDesc: "Free tool to calculate ideal socket quantity for any room.",
    keywords: ["how many sockets per room","socket quantity calculator"],
    eyebrow: "Free quantity tool",
    intro: `Calculate recommended socket quantity per room. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does socket quantity calculator cost in KL and Selangor?",
    directAnswer: `Calculate recommended socket quantity per room. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Socket Quantity Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Socket Quantity Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero/home-services-electrical-kl.jpg",
    heroAlt: "Electrical sockets",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Socket Quantity Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Socket Quantity Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Socket Quantity Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Socket Quantity Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Calculate recommended socket quantity per room.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "electrical Service", href: "/services/electrical" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "lighting-installation-calculator": {
    slug: "lighting-installation-calculator",
    name: "Lighting Installation Calculator",
    heading: "Lighting Installation Calculator",
    metaTitle: "Lighting Installation Cost Calculator KL",
    metaDesc: "Free lighting installation cost calculator.",
    keywords: ["downlight installation cost Malaysia","lighting point price KL"],
    eyebrow: "Free cost tool",
    intro: `Estimate lighting point and downlight cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does lighting installation calculator cost in KL and Selangor?",
    directAnswer: `Estimate lighting point and downlight cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Lighting Installation Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Lighting Installation Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero/home-services-electrical-kl.jpg",
    heroAlt: "Downlight installation",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Lighting Installation Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Lighting Installation Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Lighting Installation Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Lighting Installation Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate lighting point and downlight cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "lighting Service", href: "/services/lighting" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "ceiling-fan-installation-estimator": {
    slug: "ceiling-fan-installation-estimator",
    name: "Ceiling Fan Installation Estimator",
    heading: "Ceiling Fan Installation Estimator",
    metaTitle: "Ceiling Fan Installation Cost Estimator KL",
    metaDesc: "Free ceiling fan installation cost estimator.",
    keywords: ["ceiling fan installation cost Malaysia"],
    eyebrow: "Free estimator",
    intro: `Estimate ceiling fan installation cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does ceiling fan installation estimator cost in KL and Selangor?",
    directAnswer: `Estimate ceiling fan installation cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Ceiling Fan Installation Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Ceiling Fan Installation Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero/home-services-electrical-kl.jpg",
    heroAlt: "Ceiling fan",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Ceiling Fan Installation Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Ceiling Fan Installation Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Ceiling Fan Installation Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Ceiling Fan Installation Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate ceiling fan installation cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "ceiling-fan Service", href: "/services/ceiling-fan" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "handyman-cost-estimator": {
    slug: "handyman-cost-estimator",
    name: "Handyman Cost Estimator",
    heading: "Handyman Cost Estimator",
    metaTitle: "Handyman Cost Estimator KL",
    metaDesc: "Free handyman cost estimator for any odd job.",
    keywords: ["handyman cost Malaysia","odd job price KL"],
    eyebrow: "Free estimator",
    intro: `Estimate handyman job cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does handyman cost estimator cost in KL and Selangor?",
    directAnswer: `Estimate handyman job cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Handyman Cost Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Handyman Cost Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/tv-mount-advisor-kl.webp",
    heroAlt: "Handyman",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Handyman Cost Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Handyman Cost Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Handyman Cost Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Handyman Cost Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate handyman job cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "handyman Service", href: "/services/handyman" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "furniture-assembly-estimator": {
    slug: "furniture-assembly-estimator",
    name: "Furniture Assembly Estimator",
    heading: "Furniture Assembly Estimator",
    metaTitle: "Furniture Assembly Cost Estimator KL",
    metaDesc: "Free furniture assembly cost estimator.",
    keywords: ["furniture assembly cost Malaysia","IKEA assembly price KL"],
    eyebrow: "Free estimator",
    intro: `Estimate furniture assembly cost for IKEA etc. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does furniture assembly estimator cost in KL and Selangor?",
    directAnswer: `Estimate furniture assembly cost for IKEA etc. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Furniture Assembly Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Furniture Assembly Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/tv-mount-advisor-kl.webp",
    heroAlt: "Furniture assembly",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Furniture Assembly Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Furniture Assembly Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Furniture Assembly Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Furniture Assembly Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate furniture assembly cost for IKEA etc.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "handyman Service", href: "/services/handyman" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "curtain-installation-calculator": {
    slug: "curtain-installation-calculator",
    name: "Curtain Installation Calculator",
    heading: "Curtain Installation Calculator",
    metaTitle: "Curtain Installation Cost Calculator KL",
    metaDesc: "Free curtain installation cost calculator.",
    keywords: ["curtain installation cost Malaysia"],
    eyebrow: "Free cost tool",
    intro: `Estimate curtain track and installation cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does curtain installation calculator cost in KL and Selangor?",
    directAnswer: `Estimate curtain track and installation cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Curtain Installation Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Curtain Installation Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/tools/tv-mount-advisor-kl.webp",
    heroAlt: "Curtain installation",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Curtain Installation Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Curtain Installation Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Curtain Installation Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Curtain Installation Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate curtain track and installation cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "handyman Service", href: "/services/handyman" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "door-installation-cost": {
    slug: "door-installation-cost",
    name: "Door Installation Cost Calculator",
    heading: "Door Installation Cost Calculator",
    metaTitle: "Door Installation Cost Calculator KL",
    metaDesc: "Free door installation cost calculator for KL & Selangor.",
    keywords: ["door installation cost Malaysia"],
    eyebrow: "Free estimator",
    intro: `Estimate door installation cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does door installation cost calculator cost in KL and Selangor?",
    directAnswer: `Estimate door installation cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Door Installation Cost Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Door Installation Cost Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero/home-services-handyman-kl.jpg",
    heroAlt: "Door installation",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Door Installation Cost Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Door Installation Cost Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Door Installation Cost Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Door Installation Cost Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate door installation cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "door Service", href: "/services/door" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "window-replacement-estimator": {
    slug: "window-replacement-estimator",
    name: "Window Replacement Estimator",
    heading: "Window Replacement Estimator",
    metaTitle: "Window Replacement Cost Estimator KL",
    metaDesc: "Free window replacement cost estimator.",
    keywords: ["window replacement cost Malaysia"],
    eyebrow: "Free estimator",
    intro: `Estimate window replacement cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does window replacement estimator cost in KL and Selangor?",
    directAnswer: `Estimate window replacement cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Window Replacement Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Window Replacement Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero/home-services-handyman-kl.jpg",
    heroAlt: "Window replacement",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Window Replacement Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Window Replacement Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Window Replacement Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Window Replacement Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate window replacement cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "window-repair Service", href: "/services/window-repair" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "glass-replacement-calculator": {
    slug: "glass-replacement-calculator",
    name: "Glass Replacement Calculator",
    heading: "Glass Replacement Calculator",
    metaTitle: "Glass Replacement Cost Calculator KL",
    metaDesc: "Free glass replacement cost calculator.",
    keywords: ["glass replacement cost Malaysia"],
    eyebrow: "Free cost tool",
    intro: `Estimate glass replacement cost per sq ft. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does glass replacement calculator cost in KL and Selangor?",
    directAnswer: `Estimate glass replacement cost per sq ft. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Glass Replacement Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Glass Replacement Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero-glass-aluminium.svg",
    heroAlt: "Glass replacement",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Glass Replacement Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Glass Replacement Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Glass Replacement Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Glass Replacement Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate glass replacement cost per sq ft.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "glass-aluminium Service", href: "/services/glass-aluminium" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "flooring-area-calculator": {
    slug: "flooring-area-calculator",
    name: "Flooring Area Calculator",
    heading: "Flooring Area Calculator",
    metaTitle: "Flooring Area Calculator — sq ft",
    metaDesc: "Free flooring area calculator with 10% waste.",
    keywords: ["flooring area calculator","how much flooring"],
    eyebrow: "Free area tool",
    intro: `Calculate flooring area and waste. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does flooring area calculator cost in KL and Selangor?",
    directAnswer: `Calculate flooring area and waste. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Flooring Area Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Flooring Area Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero/home-services-plumbing-kl.jpg",
    heroAlt: "Flooring area",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Flooring Area Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Flooring Area Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Flooring Area Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Flooring Area Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Calculate flooring area and waste.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "flooring Service", href: "/services/flooring" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "tile-quantity-calculator": {
    slug: "tile-quantity-calculator",
    name: "Tile Quantity Calculator",
    heading: "Tile Quantity Calculator",
    metaTitle: "Tile Quantity Calculator — How Many Tiles",
    metaDesc: "Free tile quantity calculator for floor and wall.",
    keywords: ["tile calculator","how many tiles needed"],
    eyebrow: "Free quantity tool",
    intro: `Calculate tile quantity needed with waste. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does tile quantity calculator cost in KL and Selangor?",
    directAnswer: `Calculate tile quantity needed with waste. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Tile Quantity Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Tile Quantity Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero/home-services-plumbing-kl.jpg",
    heroAlt: "Tiles",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Tile Quantity Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Tile Quantity Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Tile Quantity Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Tile Quantity Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Calculate tile quantity needed with waste.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "tiling Service", href: "/services/tiling" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "vinyl-flooring-cost-estimator": {
    slug: "vinyl-flooring-cost-estimator",
    name: "Vinyl Flooring Cost Estimator",
    heading: "Vinyl Flooring Cost Estimator",
    metaTitle: "Vinyl Flooring Cost Estimator KL",
    metaDesc: "Free vinyl flooring cost estimator for KL & Selangor.",
    keywords: ["vinyl flooring cost Malaysia","SPC flooring price KL"],
    eyebrow: "Free estimator",
    intro: `Estimate vinyl flooring cost per sq ft. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does vinyl flooring cost estimator cost in KL and Selangor?",
    directAnswer: `Estimate vinyl flooring cost per sq ft. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Vinyl Flooring Cost Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Vinyl Flooring Cost Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero/home-services-plumbing-kl.jpg",
    heroAlt: "Vinyl flooring",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Vinyl Flooring Cost Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Vinyl Flooring Cost Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Vinyl Flooring Cost Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Vinyl Flooring Cost Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate vinyl flooring cost per sq ft.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "flooring Service", href: "/services/flooring" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "roof-repair-estimator": {
    slug: "roof-repair-estimator",
    name: "Roof Repair Estimator",
    heading: "Roof Repair Estimator",
    metaTitle: "Roof Repair Cost Estimator KL",
    metaDesc: "Free roof repair cost estimator.",
    keywords: ["roof repair cost Malaysia","bumbung bocor price KL"],
    eyebrow: "Free estimator",
    intro: `Estimate roof leak repair cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does roof repair estimator cost in KL and Selangor?",
    directAnswer: `Estimate roof leak repair cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Roof Repair Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Roof Repair Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero/home-services-waterproofing-kl.jpg",
    heroAlt: "Roof repair",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Roof Repair Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Roof Repair Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Roof Repair Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Roof Repair Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate roof leak repair cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "roof-repair Service", href: "/services/roof-repair" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "roof-replacement-cost": {
    slug: "roof-replacement-cost",
    name: "Roof Replacement Cost Calculator",
    heading: "Roof Replacement Cost Calculator",
    metaTitle: "Roof Replacement Cost Calculator KL",
    metaDesc: "Free roof replacement cost calculator.",
    keywords: ["roof replacement cost Malaysia"],
    eyebrow: "Free estimator",
    intro: `Estimate roof replacement cost per sq ft. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does roof replacement cost calculator cost in KL and Selangor?",
    directAnswer: `Estimate roof replacement cost per sq ft. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Roof Replacement Cost Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Roof Replacement Cost Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero/home-services-waterproofing-kl.jpg",
    heroAlt: "Roof replacement",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Roof Replacement Cost Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Roof Replacement Cost Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Roof Replacement Cost Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Roof Replacement Cost Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate roof replacement cost per sq ft.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "roof-repair Service", href: "/services/roof-repair" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "renovation-budget-calculator": {
    slug: "renovation-budget-calculator",
    name: "Renovation Budget Calculator",
    heading: "Renovation Budget Calculator",
    metaTitle: "Renovation Budget Calculator KL — per sq ft",
    metaDesc: "Free renovation budget calculator for Malaysia.",
    keywords: ["renovation budget calculator Malaysia","house renovation cost per sq ft KL"],
    eyebrow: "Free budget tool",
    intro: `Estimate full renovation budget per sq ft. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does renovation budget calculator cost in KL and Selangor?",
    directAnswer: `Estimate full renovation budget per sq ft. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Renovation Budget Calculator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Renovation Budget Calculator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero-renovation.svg",
    heroAlt: "Renovation budget",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Renovation Budget Calculator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Renovation Budget Calculator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Renovation Budget Calculator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Renovation Budget Calculator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate full renovation budget per sq ft.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "house-renovation Service", href: "/services/house-renovation" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "room-renovation-estimator": {
    slug: "room-renovation-estimator",
    name: "Room Renovation Estimator",
    heading: "Room Renovation Estimator",
    metaTitle: "Room Renovation Cost Estimator KL",
    metaDesc: "Free room renovation cost estimator.",
    keywords: ["room renovation cost Malaysia"],
    eyebrow: "Free estimator",
    intro: `Estimate per-room renovation cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does room renovation estimator cost in KL and Selangor?",
    directAnswer: `Estimate per-room renovation cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Room Renovation Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Room Renovation Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero-renovation.svg",
    heroAlt: "Room renovation",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Room Renovation Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Room Renovation Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Room Renovation Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Room Renovation Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate per-room renovation cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "house-renovation Service", href: "/services/house-renovation" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "kitchen-renovation-estimator": {
    slug: "kitchen-renovation-estimator",
    name: "Kitchen Renovation Estimator",
    heading: "Kitchen Renovation Estimator",
    metaTitle: "Kitchen Renovation Cost Estimator KL",
    metaDesc: "Free kitchen renovation cost estimator.",
    keywords: ["kitchen renovation cost Malaysia","kitchen cabinet price KL"],
    eyebrow: "Free estimator",
    intro: `Estimate kitchen renovation cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does kitchen renovation estimator cost in KL and Selangor?",
    directAnswer: `Estimate kitchen renovation cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Kitchen Renovation Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Kitchen Renovation Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero-renovation.svg",
    heroAlt: "Kitchen renovation",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Kitchen Renovation Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Kitchen Renovation Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Kitchen Renovation Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Kitchen Renovation Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate kitchen renovation cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "kitchen-cabinet Service", href: "/services/kitchen-cabinet" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },
  "bathroom-renovation-estimator": {
    slug: "bathroom-renovation-estimator",
    name: "Bathroom Renovation Estimator",
    heading: "Bathroom Renovation Estimator",
    metaTitle: "Bathroom Renovation Cost Estimator KL",
    metaDesc: "Free bathroom renovation cost estimator.",
    keywords: ["bathroom renovation cost Malaysia"],
    eyebrow: "Free estimator",
    intro: `Estimate bathroom renovation cost. One page, no next buttons. Enter your size and get instant estimate from our published ${RATE_YEAR_LABEL} KL & Selangor rates.`,
    directQuestion: "How much does bathroom renovation estimator cost in KL and Selangor?",
    directAnswer: `Estimate bathroom renovation cost. This free calculator gives you an instant estimate from our published ${RATE_YEAR_LABEL} rates for KL & Selangor. Enter your dimensions and get total paintable area, labour, materials, total estimate, range and duration.`,
    trilingualMs: "Bathroom Renovation Estimator — anggaran segera untuk KL & Selangor.",
    trilingualZh: "Bathroom Renovation Estimator——吉隆坡与雪兰莪即时估价工具。",
    heroImage: "/hero-renovation.svg",
    heroAlt: "Bathroom renovation",
    stats: [
      { label: "Instant", value: "Under 2 minutes" },
      { label: "From", value: "RM 150" },
      { label: "Coverage", value: "KL & Selangor" }
    ],
    howTo: [
      { title: "Enter your room size and requirements", desc: "Everything is on one page. Enter length, width and height or choose a preset. The price updates live." },
      { title: "Pick material and condition", desc: "Choose economy, standard or premium grade and current surface condition." },
      { title: "Optional: access and urgency", desc: "Open optional section for height, access and timing. Skip for standard pricing." },
      { title: "See estimate and book on WhatsApp", desc: "Total area, labour, materials, total, range and duration appear instantly. Book via WhatsApp." }
    ],
    priceTable: [
      { scope: "Bathroom Renovation Estimator — Standard", rate: "From RM 150", note: "Standard scope" },
      { scope: "Bathroom Renovation Estimator — Premium", rate: "From RM 350", note: "Premium scope with extras" },
      { scope: "Bathroom Renovation Estimator — Materials", rate: "From RM 80 / unit", note: "Material cost" },
      { scope: "Bathroom Renovation Estimator — Labour", rate: "From RM 120", note: "Labour only" }
    ],
    priceTableNote: `Rates are from our published ${RATE_YEAR_LABEL} price list and used directly by this calculator.`,
    faqs: [
      { q: "How is the estimate calculated?", a: "We use published rates: wall area = 2×(Length+Width)×Height for walls, ceiling area = Length×Width, and combined total for walls+ceiling. Labour and materials are split from the published band. See breakdown for details." },
      { q: "Is this a final quotation?", a: "No. This is an estimated price only. Final quotation will be provided after inspection or after confirming project details." },
      { q: "What includes labour and material?", a: "Yes, estimate includes labour and material unless you select customer supply. Breakdown shows both." },
      { q: "How long does the job take?", a: "Duration is estimated from total area and complexity — typically half day for small jobs, 1–2 days for rooms, 2–3 days for large areas." },
      { q: "Do you cover my area?", a: "We cover all of KL & Selangor including Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang and surrounding." }
    ],
    covers: [
      "Estimate bathroom renovation cost.",
      "Instant live estimate",
      "Labour vs materials split",
      "Paintable area calculation",
      "Duration estimate",
      "WhatsApp booking"
    ],
    relatedTools: ["painting-calculator", "wall-area-calculator", "flooring-area-calculator"],
    relatedServices: [
      { label: "house-renovation Service", href: "/services/house-renovation" },
      { label: "Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 2
  },

  /* ── AIRCON TOOLS ───────────────────────────────────────────────────── */
  "aircon-installation-cost": {
    slug: "aircon-installation-cost",
    name: "Aircon Installation Cost Calculator",
    heading: "Aircon Installation Cost Calculator for KL & Selangor",
    metaTitle: "Aircon Installation Cost Calculator KL",
    metaDesc: "Free aircon installation cost calculator for KL & Selangor. Wall-mounted from RM 259, cassette from RM 377. Installation only — unit not included.",
    keywords: ["aircon installation cost Malaysia", "aircond installation price KL", "aircon install Selangor"],
    eyebrow: "Free instant estimator",
    intro: "One page, no next buttons. Pick the unit type and horsepower, add extra copper if needed — the installation price appears instantly from our published KL & Selangor rates.",
    directQuestion: "How much does aircon installation cost in KL and Selangor?",
    directAnswer: "Aircon installation in KL & Selangor starts from RM 259 for a 1.0–1.5 HP wall-mounted unit, up to RM 584 for a 5.0 HP unit. Ceiling cassette installation starts from RM 377 and window units from RM 259. The price is installation only — the aircon unit is not included. Every installation includes 7 ft of copper pipe, insulation, electrical wiring, drain pipe, bracket, vacuum pump commissioning and a run/cooling test.",
    trilingualMs: "Kalkulator kos pemasangan aircond untuk KL & Selangor — pilih jenis unit dan HP untuk anggaran segera.",
    trilingualZh: "空调安装费用计算器，适用于吉隆坡与雪兰莪——选择机型与匹数即可获得即时估价。",
    heroImage: "/hero-aircon.svg",
    heroAlt: "Aircon installation cost calculator for KL and Selangor homes",
    stats: [
      { label: "Wall-mount, from", value: "RM 259" },
      { label: "Cassette, from", value: "RM 377" },
      { label: "Time to finish", value: "Under 1 minute" }
    ],
    howTo: [
      { title: "Pick the unit type and horsepower", desc: "Choose wall-mounted (1.0–5.0 HP), ceiling cassette or window unit. The price updates live on every tap." },
      { title: "Add extra copper if needed", desc: "Installation includes 7 ft of copper. Slide the extra copper to add pipe beyond 7 ft at the published per-foot rate." },
      { title: "Read your estimate and book", desc: "The estimated installation cost, range and breakdown appear instantly. Book on WhatsApp or request a site survey." }
    ],
    priceTable: [
      { scope: "Wall-Mounted 1.0–1.5 HP", rate: "From RM 259", note: "7 ft copper pipe included" },
      { scope: "Wall-Mounted 2.0 HP", rate: "From RM 324", note: "Installation only" },
      { scope: "Wall-Mounted 5.0 HP", rate: "From RM 584", note: "Largest wall unit" },
      { scope: "Ceiling Cassette 1.0–1.5 HP", rate: "From RM 377", note: "Commercial" },
      { scope: "Window Unit 1.0–1.5 HP", rate: "From RM 259", note: "Installation only" }
    ],
    priceTableNote: "These are minimum starting prices. Installation only — the unit is not included. Extra copper beyond 7 ft is charged per foot.",
    faqs: [
      { q: "Is the aircon unit included in the installation price?", a: "No. The price is installation only — the aircon unit is not included, and you supply your own unit." },
      { q: "What does the installation price include?", a: "Every installation includes 7 ft of copper pipe, insulation, electrical wiring, drain pipe, bracket, vacuum pump commissioning and a run/cooling test." },
      { q: "How much is extra copper pipe?", a: "Extra copper beyond the included 7 ft is charged per foot. The calculator adds this to your estimate." },
      { q: "Is the calculator result a final quote?", a: "No. It is an estimate — the final quotation follows an on-site inspection of your wall type, distance and access." }
    ],
    covers: ["Wall-mounted split units", "Ceiling cassette units", "Window units", "Extra copper pipe"],
    relatedTools: ["aircon-gas-topup-cost", "aircon-size-calculator", "aircon-btu-calculator"],
    relatedServices: [
      { label: "Aircon Service, Repair & Installation", href: "/services/aircon" },
      { label: "Aircon Installation", href: "/services/aircon/installation" },
      { label: "Aircon Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 1
  },
  "aircon-gas-topup-cost": {
    slug: "aircon-gas-topup-cost",
    name: "Aircon Gas Top-Up Cost Calculator",
    heading: "Aircon Gas Top-Up Cost Calculator for KL & Selangor",
    metaTitle: "Aircon Gas Top-Up Cost Calculator KL",
    metaDesc: "Free aircon gas top-up calculator. R22 RM 2.50/PSI, R410A and R32 RM 3.00/PSI. Leak check included. Charged on actual PSI required.",
    keywords: ["aircon gas top up price Malaysia", "aircond gas refill KL", "R32 gas price Selangor"],
    eyebrow: "Free instant estimator",
    intro: "Pick your refrigerant, enter the PSI required and include the leak check — the gas top-up cost appears instantly.",
    directQuestion: "How much does aircon gas top-up cost in Malaysia?",
    directAnswer: "Aircon gas top-up is charged per PSI: R22 is RM 2.50/PSI, while R410A and R32 are RM 3.00/PSI. A structural leak check starts from RM 114 and is included. Gas top-up is charged on the actual PSI required after the technician inspects on site.",
    trilingualMs: "Kalkulator kos top-up gas aircond — R22 RM 2.50/PSI, R410A dan R32 RM 3.00/PSI.",
    trilingualZh: "空调加雪种费用计算器——R22 每 PSI RM 2.50，R410A 与 R32 每 PSI RM 3.00。",
    heroImage: "/hero-aircon.svg",
    heroAlt: "Aircon gas top-up cost calculator for KL and Selangor",
    stats: [
      { label: "R22", value: "RM 2.50 / PSI" },
      { label: "R410A / R32", value: "RM 3.00 / PSI" },
      { label: "Leak check", value: "From RM 114" }
    ],
    howTo: [
      { title: "Pick your refrigerant", desc: "R22, R410A or R32 — check the nameplate on your outdoor unit if unsure." },
      { title: "Enter the PSI required", desc: "Slide to the PSI the technician measured. Gas is charged on the actual PSI required." },
      { title: "Include the leak check", desc: "Toggle the structural leak check (from RM 114) — always recommended, since gas rarely runs out without a leak." }
    ],
    priceTable: [
      { scope: "R22 Gas Refill", rate: "RM 2.50 / PSI", note: "Older systems" },
      { scope: "R410A Gas Refill", rate: "RM 3.00 / PSI", note: "Common inverter" },
      { scope: "R32 Gas Refill", rate: "RM 3.00 / PSI", note: "Newer systems" },
      { scope: "Structural Leak Check", rate: "From RM 114", note: "Included" }
    ],
    priceTableNote: "Gas top-up is charged on the actual PSI required after the technician inspects on site. Leak check included.",
    faqs: [
      { q: "How is gas top-up charged?", a: "Gas top-up is charged on the actual PSI required after the technician inspects on site. R22 is RM 2.50/PSI, while R410A and R32 are RM 3.00/PSI." },
      { q: "Why does my aircon keep losing gas?", a: "If gas keeps dropping, there is a leak in the system. The leak must be found and sealed, or the gas will escape again." },
      { q: "Is the leak check included?", a: "Yes, a structural leak check from RM 114 is included with the gas top-up service." },
      { q: "Is the calculator result a final quote?", a: "No. It is an estimate — the final price depends on the actual PSI required after inspection." }
    ],
    covers: ["R22 refrigerant", "R410A refrigerant", "R32 refrigerant", "Structural leak check"],
    relatedTools: ["aircon-installation-cost", "aircon-service-picker", "aircon-size-calculator"],
    relatedServices: [
      { label: "Aircon Service, Repair & Installation", href: "/services/aircon" },
      { label: "Aircon Gas Top-Up", href: "/services/aircon/gas-top-up" },
      { label: "Aircon Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 1
  },
  "aircon-size-calculator": {
    slug: "aircon-size-calculator",
    name: "Aircon Size Calculator",
    heading: "Aircon Size Calculator — What HP Do You Need?",
    metaTitle: "Aircon Size Calculator — HP by Room Size",
    metaDesc: "Free aircon size calculator. Enter room area, ceiling height and sun exposure to find the right BTU and horsepower for your KL & Selangor room.",
    keywords: ["aircon size calculator Malaysia", "aircond HP calculator", "BTU per sq ft Malaysia"],
    eyebrow: "Free instant estimator",
    intro: "Enter your room area, ceiling height and sun exposure — we recommend the right BTU and horsepower.",
    directQuestion: "What size aircon do I need for my room?",
    directAnswer: "As a rule of thumb, Malaysian rooms need roughly 60 BTU per square foot. A 150 sq ft bedroom needs about 9,000 BTU (1.0–1.5 HP), while a 250 sq ft living room needs about 15,000 BTU (2.0 HP). High ceilings and west-facing sun add 15–20%.",
    trilingualMs: "Kalkulator saiz aircond — masukkan keluasan bilik untuk cadangan BTU dan HP yang sesuai.",
    trilingualZh: "空调匹数计算器——输入房间面积，获得适合的 BTU 与匹数建议。",
    heroImage: "/hero-aircon.svg",
    heroAlt: "Aircon size calculator for KL and Selangor rooms",
    stats: [
      { label: "Rule of thumb", value: "60 BTU / sq ft" },
      { label: "Typical bedroom", value: "1.0–1.5 HP" },
      { label: "Time to finish", value: "Under 1 minute" }
    ],
    howTo: [
      { title: "Enter your room area", desc: "Slide to your room size in square feet — from a small 60 sq ft room to a large 1,200 sq ft space." },
      { title: "Set ceiling and sun exposure", desc: "High ceilings and west-facing sun raise the cooling load, so the recommendation adjusts automatically." },
      { title: "Read your HP recommendation", desc: "The calculator shows the recommended BTU and horsepower, plus the starting price for servicing that unit size." }
    ],
    priceTable: [
      { scope: "1.0–1.5 HP (up to 150 sq ft)", rate: "From RM 129", note: "Bedrooms" },
      { scope: "2.0 HP (up to 250 sq ft)", rate: "From RM 156", note: "Living rooms" },
      { scope: "2.5 HP (up to 350 sq ft)", rate: "From RM 195", note: "Large rooms" },
      { scope: "3.0 HP+ (350 sq ft+)", rate: "From RM 259", note: "Open areas" }
    ],
    priceTableNote: "Minimum starting prices for servicing each unit size. Final cost depends on the unit and is confirmed after inspection.",
    faqs: [
      { q: "How many BTU per square foot does Malaysia need?", a: "Around 60 BTU per square foot as a baseline, plus 15–20% for high ceilings or strong sun exposure." },
      { q: "Is bigger always better for aircon?", a: "No. An oversized unit cools too quickly and short-cycles, leaving the room humid. Right-sizing matters." },
      { q: "What HP is best for a bedroom?", a: "A typical 120–150 sq ft Malaysian bedroom is best served by a 1.0–1.5 HP unit." },
      { q: "Is the calculator result final?", a: "No, it is a sizing estimate — a technician confirms the right unit after reviewing the room." }
    ],
    covers: ["Room area to BTU", "BTU to horsepower", "Ceiling height adjustment", "Sun exposure adjustment"],
    relatedTools: ["aircon-btu-calculator", "aircon-electricity-cost", "aircon-installation-cost"],
    relatedServices: [
      { label: "Aircon Service, Repair & Installation", href: "/services/aircon" },
      { label: "Aircon Installation", href: "/services/aircon/installation" },
      { label: "Aircon Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 1
  },
  "aircon-btu-calculator": {
    slug: "aircon-btu-calculator",
    name: "Aircon BTU Calculator",
    heading: "Aircon BTU Calculator for Malaysian Rooms",
    metaTitle: "Aircon BTU Calculator — Cooling Capacity",
    metaDesc: "Free aircon BTU calculator. Enter room length, width and occupancy to work out the cooling capacity your KL & Selangor room needs.",
    keywords: ["aircon BTU calculator Malaysia", "BTU cooling capacity", "aircond BTU KL"],
    eyebrow: "Free instant estimator",
    intro: "Enter your room length, width and how many people use it — the required BTU appears instantly.",
    directQuestion: "How many BTU does my room need?",
    directAnswer: "A rough estimate is 25 BTU per square foot plus 600 BTU for each additional person beyond two. A 12×12 ft room with two people needs about 3,600 BTU per hour of base cooling before sun and ceiling adjustments.",
    trilingualMs: "Kalkulator BTU aircond — masukkan panjang dan lebar bilik untuk kapasiti penyejukan yang sesuai.",
    trilingualZh: "空调 BTU 计算器——输入房间长宽，计算所需制冷量。",
    heroImage: "/hero-aircon.svg",
    heroAlt: "Aircon BTU calculator for KL and Selangor rooms",
    stats: [
      { label: "Base", value: "25 BTU / sq ft" },
      { label: "Per extra person", value: "+600 BTU" },
      { label: "Time to finish", value: "Under 1 minute" }
    ],
    howTo: [
      { title: "Enter length and width", desc: "Enter the room dimensions in feet to get the floor area." },
      { title: "Set the occupancy", desc: "Add how many people regularly use the room — each extra person adds cooling load." },
      { title: "Read the BTU", desc: "The required BTU appears instantly, with a link to the matching aircon service page." }
    ],
    priceTable: [
      { scope: "Up to 9,000 BTU", rate: "From RM 129", note: "Small rooms" },
      { scope: "9,000–12,000 BTU", rate: "From RM 129", note: "Bedrooms" },
      { scope: "12,000–18,000 BTU", rate: "From RM 156", note: "Living rooms" },
      { scope: "18,000+ BTU", rate: "From RM 195", note: "Large spaces" }
    ],
    priceTableNote: "Minimum starting prices for servicing each cooling capacity. Final cost is confirmed after inspection.",
    faqs: [
      { q: "What is a BTU?", a: "A BTU (British Thermal Unit) measures cooling capacity. Higher BTU means the aircon can cool a larger or hotter space." },
      { q: "How do I convert BTU to horsepower?", a: "Roughly 9,000–12,000 BTU equals 1 HP. The size calculator converts between the two for you." },
      { q: "Does room occupancy affect BTU?", a: "Yes. Each person adds body heat, so busy rooms need more cooling capacity." },
      { q: "Is the BTU result final?", a: "No, it is an estimate. Sun, ceiling height and insulation also affect the real requirement." }
    ],
    covers: ["Room area to BTU", "Occupancy adjustment", "BTU to HP conversion", "Cooling capacity planning"],
    relatedTools: ["aircon-size-calculator", "aircon-electricity-cost", "aircon-savings-calculator"],
    relatedServices: [
      { label: "Aircon Service, Repair & Installation", href: "/services/aircon" },
      { label: "Aircon Installation", href: "/services/aircon/installation" },
      { label: "Aircon Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 1
  },
  "aircon-electricity-cost": {
    slug: "aircon-electricity-cost",
    name: "Aircon Electricity Cost Calculator",
    heading: "Aircon Electricity Cost Calculator for Malaysia",
    metaTitle: "Aircon Electricity Cost Calculator Malaysia",
    metaDesc: "Free aircon electricity cost calculator. Enter horsepower and daily hours to estimate your monthly aircon running cost at RM 0.50/kWh.",
    keywords: ["aircon electricity cost Malaysia", "aircond running cost KL", "aircon monthly bill"],
    eyebrow: "Free instant estimator",
    intro: "Enter your aircon horsepower and daily hours — see the estimated monthly electricity cost instantly.",
    directQuestion: "How much does it cost to run an aircon in Malaysia?",
    directAnswer: "A 1.5 HP aircon draws about 1.1 kW. Running it 8 hours a day at RM 0.50/kWh costs roughly RM 132 per month. Larger units and longer run times scale the figure up.",
    trilingualMs: "Kalkulator kos elektrik aircond — anggaran bil bulanan berdasarkan HP dan jam penggunaan.",
    trilingualZh: "空调电费计算器——按匹数与每日小时数估算每月电费。",
    heroImage: "/hero-aircon.svg",
    heroAlt: "Aircon electricity cost calculator for Malaysia",
    stats: [
      { label: "1.5 HP draw", value: "≈ 1.1 kW" },
      { label: "Tariff", value: "RM 0.50/kWh" },
      { label: "Time to finish", value: "Under 1 minute" }
    ],
    howTo: [
      { title: "Pick your horsepower", desc: "Choose 1.0–2.5 HP — higher HP draws more power." },
      { title: "Set daily hours", desc: "Slide to how many hours a day the unit runs on average." },
      { title: "Read the monthly cost", desc: "The estimated monthly cost appears instantly, at the standard RM 0.50/kWh tariff." }
    ],
    priceTable: [
      { scope: "1.0 HP (≈ 0.8 kW)", rate: "From RM 129", note: "Service price" },
      { scope: "1.5 HP (≈ 1.1 kW)", rate: "From RM 129", note: "Service price" },
      { scope: "2.0 HP (≈ 1.6 kW)", rate: "From RM 156", note: "Service price" },
      { scope: "2.5 HP (≈ 2.0 kW)", rate: "From RM 195", note: "Service price" }
    ],
    priceTableNote: "These are minimum starting service prices. Running cost is estimated at RM 0.50/kWh — an estimate only.",
    faqs: [
      { q: "How much does an aircon add to my electricity bill?", a: "A 1.5 HP unit run 8 hours daily adds roughly RM 132 per month at RM 0.50/kWh. Inverter units cost less to run." },
      { q: "Do inverter aircons really save electricity?", a: "Yes, an inverter can cut running cost by around 35% compared to a non-inverter of the same size." },
      { q: "Does a dirty aircon use more electricity?", a: "Yes. A clogged coil or filter forces the compressor to run longer, raising the bill. Regular servicing keeps it efficient." },
      { q: "Is the cost result final?", a: "No, it is an estimate based on average usage and tariff." }
    ],
    covers: ["Horsepower to kW", "Daily usage", "Monthly running cost", "Inverter comparison"],
    relatedTools: ["aircon-savings-calculator", "aircon-size-calculator", "aircon-btu-calculator"],
    relatedServices: [
      { label: "Aircon Service, Repair & Installation", href: "/services/aircon" },
      { label: "Aircon Basic Servicing", href: "/services/aircon/basic-servicing" },
      { label: "Aircon Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 1
  },
  "aircon-savings-calculator": {
    slug: "aircon-savings-calculator",
    name: "Inverter Aircon Savings Calculator",
    heading: "Inverter Aircon Savings Calculator for Malaysia",
    metaTitle: "Inverter Aircon Savings Calculator Malaysia",
    metaDesc: "Free inverter aircon savings calculator. See how much an inverter unit could save you versus a non-inverter at RM 0.50/kWh.",
    keywords: ["inverter aircon savings Malaysia", "inverter vs non inverter cost", "aircond savings calculator"],
    eyebrow: "Free instant estimator",
    intro: "Enter your horsepower and daily hours — see the estimated monthly saving an inverter unit delivers.",
    directQuestion: "How much can an inverter aircon save me?",
    directAnswer: "An inverter aircon typically uses around 35% less electricity than a non-inverter of the same size. A 1.5 HP unit run 8 hours daily could save roughly RM 46 per month at RM 0.50/kWh.",
    trilingualMs: "Kalkulator penjimatan aircond inverter — anggaran penjimatan bulanan berbanding bukan inverter.",
    trilingualZh: "变频空调省电计算器——估算变频相对定频的每月省电金额。",
    heroImage: "/hero-aircon.svg",
    heroAlt: "Inverter aircon savings calculator for Malaysia",
    stats: [
      { label: "Inverter saving", value: "≈ 35%" },
      { label: "Tariff", value: "RM 0.50/kWh" },
      { label: "Time to finish", value: "Under 1 minute" }
    ],
    howTo: [
      { title: "Pick your horsepower", desc: "Choose the unit size you are comparing." },
      { title: "Set daily hours", desc: "Slide to the hours the unit runs each day." },
      { title: "Read the saving", desc: "The estimated monthly saving of an inverter unit appears instantly." }
    ],
    priceTable: [
      { scope: "Inverter vs non-inverter", rate: "From RM 129", note: "Service price" },
      { scope: "Typical saving", rate: "≈ 35%", note: "Electricity" },
      { scope: "Payback", rate: "On quote", note: "Depends on usage" }
    ],
    priceTableNote: "Savings are estimated at RM 0.50/kWh. Service prices are minimum starting prices.",
    faqs: [
      { q: "Is an inverter aircon worth it?", a: "For units run many hours daily, yes — the 35% running-cost saving usually pays back the higher price over a few years." },
      { q: "How much less does an inverter use?", a: "An inverter typically uses around 35% less electricity than a non-inverter of the same size." },
      { q: "Does the calculator include installation?", a: "No. It estimates running-cost savings only. See the installation calculator for install pricing." },
      { q: "Is the saving result final?", a: "No, it is an estimate based on average usage and tariff." }
    ],
    covers: ["Inverter vs non-inverter", "Monthly saving", "Running cost", "Payback planning"],
    relatedTools: ["aircon-electricity-cost", "aircon-installation-cost", "aircon-btu-calculator"],
    relatedServices: [
      { label: "Aircon Service, Repair & Installation", href: "/services/aircon" },
      { label: "Aircon Installation", href: "/services/aircon/installation" },
      { label: "Aircon Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 1
  },
  "aircon-service-picker": {
    slug: "aircon-service-picker",
    name: "Which Aircon Service Do I Need?",
    heading: "Which Aircon Service Do I Need? — Diagnostic",
    metaTitle: "Which Aircon Service Do I Need? — Quiz",
    metaDesc: "Free aircon diagnostic. Pick your symptoms to find the right service — basic servicing, chemical wash, overhaul, gas top-up or repair.",
    keywords: ["which aircon service", "aircond diagnostic tool", "aircon service finder Malaysia"],
    eyebrow: "Free guided diagnostic",
    intro: "Select the symptoms you are seeing — we recommend the right aircon service and starting price.",
    directQuestion: "Which aircon service do I need?",
    directAnswer: "Not cold? You likely need gas top-up from RM 2.50/PSI. Water leaking or a musty smell? A chemical wash from RM 156 or an overhaul from RM 286. A unit that won't turn on or makes noise? Repair diagnosis from RM 114. Select your symptoms and we map them to the right service.",
    trilingualMs: "Diagnostik aircond percuma — pilih gejala anda untuk cadangan servis yang sesuai.",
    trilingualZh: "免费空调诊断——选择您的症状，获得合适的服务建议。",
    heroImage: "/hero-aircon.svg",
    heroAlt: "Which aircon service do I need diagnostic tool",
    stats: [
      { label: "Chemical wash", value: "From RM 156" },
      { label: "Overhaul", value: "From RM 286" },
      { label: "Repair diagnosis", value: "From RM 114" }
    ],
    howTo: [
      { title: "Select your symptoms", desc: "Tick everything you see — not cold, leaking, noise, smell, weak airflow, won't turn on, or ice." },
      { title: "Read the recommendation", desc: "We map your symptoms to the matching service and its minimum starting price." },
      { title: "Book on WhatsApp", desc: "Send the result to our dispatch desk and we confirm the final price after inspection." }
    ],
    priceTable: [
      { scope: "Basic Servicing", rate: "From RM 129", note: "Routine clean" },
      { scope: "Chemical Wash", rate: "From RM 156", note: "Smell / leaking" },
      { scope: "Chemical Overhaul", rate: "From RM 286", note: "Chronic leaks" },
      { scope: "Gas Top-Up", rate: "RM 2.50–3.00 / PSI", note: "Not cold" },
      { scope: "Repair Diagnosis", rate: "From RM 114", note: "Won't turn on" }
    ],
    priceTableNote: "Minimum starting prices. The final price depends on the nature and scope of your job and is confirmed after a site visit or photo review.",
    faqs: [
      { q: "How do I know which aircon service I need?", a: "Match your symptoms: not cold usually means gas, leaking or smell means chemical wash or overhaul, and not turning on means repair." },
      { q: "What if I have several symptoms?", a: "Select them all — the diagnostic picks the most appropriate single service and explains the recommendation." },
      { q: "Are the prices in the diagnostic final?", a: "No. They are minimum starting prices. The final price is confirmed after a site visit or photo review." },
      { q: "Can I book straight from the result?", a: "Yes. Send the recommended service to our WhatsApp desk and we confirm availability and price." }
    ],
    covers: ["Symptom matching", "Service recommendation", "Starting prices", "WhatsApp booking"],
    relatedTools: ["aircon-gas-topup-cost", "aircon-installation-cost", "aircon-size-calculator"],
    relatedServices: [
      { label: "Aircon Service, Repair & Installation", href: "/services/aircon" },
      { label: "Aircon Repair", href: "/services/aircon/repair" },
      { label: "Aircon Pricing Guide", href: "/pricing" }
    ],
    estimatedMinutes: 1
  }
};


// Intent-specific search descriptions for the compact calculator suite. These
// replace the former one-line placeholders (for example, “Free door
// installation cost calculator”) with the actual inputs and outputs each page
// offers. The five deep diagnostic tools above already carry equivalent copy.
const TOOL_META_DESCRIPTION_OVERRIDES: Record<string, string> = {
  "paint-quantity-estimator": "Calculate paint litres for Malaysian rooms from wall dimensions, openings, number of coats and coverage. Includes a practical allowance before you buy.",
  "wall-area-calculator": "Calculate wall area in square feet from room length, width and height, with doors and windows deducted. Useful for paint, skim coat and wallpaper planning.",
  "ceiling-area-calculator": "Calculate ceiling area in square feet from room dimensions, then use the result to plan plaster ceiling, skim coat, painting or replacement quantities.",
  "ceiling-replacement-cost": "Estimate ceiling replacement cost in KL & Selangor by area, board type, damage and access. Compare labour, materials and likely project range instantly.",
  "pipe-leak-estimator": "Estimate pipe-leak repair cost from the leak location, severity, pipe access and affected fixtures. See likely urgency and a KL & Selangor price range.",
  "water-pressure-troubleshooter": "Troubleshoot low or unstable water pressure by symptom, affected outlets, property type and water source. Get likely causes and the next practical check.",
  "pipe-replacement-cost": "Estimate water-pipe replacement cost from pipe length, material, route and access. Review labour, materials and a practical KL & Selangor budget range.",
  "waterproofing-cost-calculator": "Estimate waterproofing cost for a roof, bathroom, balcony or wall from area, system and condition. Compare scope and price range before requesting a quote.",
  "roof-area-calculator": "Calculate approximate roof surface area from building length, width, roof type and slope factor. Use the result for coating, tile and repair planning.",
  "bathroom-waterproofing-estimator": "Estimate bathroom waterproofing cost from floor area, leak symptoms and repair method. Compare no-hack treatment with full removal and reinstatement.",
  "balcony-waterproofing-estimator": "Estimate balcony waterproofing cost from deck area, existing finish, leak signs and selected system. Includes likely preparation and reinstatement range.",
  "electrical-installation-cost": "Estimate electrical installation cost by socket, lighting, appliance point and wiring quantity. Review point counts and a KL & Selangor budget range.",
  "socket-quantity-calculator": "Plan how many power sockets a room may need from its use, size and appliance load. Organise general and dedicated points before discussing wiring work.",
  "lighting-installation-calculator": "Estimate lighting installation quantity and cost from room size, fitting type and number of points. Compare downlights and other common lighting layouts.",
  "ceiling-fan-installation-estimator": "Estimate ceiling-fan installation cost from fan quantity, ceiling type, point readiness and access. Identify when a new point or support may be needed.",
  "handyman-cost-estimator": "Estimate handyman labour for mounting, repairs and odd jobs from task type, quantity, complexity and access. Build a clearer multi-task request before booking.",
  "furniture-assembly-estimator": "Estimate furniture assembly cost by item type, size and quantity, including common flat-pack wardrobes, beds, desks and cabinets in KL & Selangor.",
  "curtain-installation-calculator": "Estimate curtain track or rod installation from opening width, track type, quantity and wall or ceiling fixing. Plan fittings and labour before installation.",
  "door-installation-cost": "Estimate door installation cost from door type, frame condition, hardware and quantity. Compare labour and material allowances for KL & Selangor homes.",
  "window-replacement-estimator": "Estimate window replacement cost by opening size, frame system, glass choice and panel quantity. Review a practical supply-and-install budget range.",
  "glass-replacement-calculator": "Estimate replacement glass area and cost from pane dimensions, glass type, thickness and quantity. Useful for windows, doors and fixed panels.",
  "flooring-area-calculator": "Calculate floor area and material quantity from room dimensions, with an adjustable waste allowance for vinyl, SPC, laminate, tile or other flooring.",
  "tile-quantity-calculator": "Calculate how many floor or wall tiles to buy from surface and tile dimensions, grout layout and waste allowance. Returns pieces, boxes and total area.",
  "vinyl-flooring-cost-estimator": "Estimate vinyl or SPC flooring cost from floor area, material choice, substrate condition and skirting. See quantity, labour and budget range instantly.",
  "roof-repair-estimator": "Estimate roof-repair cost from roof type, leak symptoms, affected area and access. Compare likely tile, flashing, ridge, gutter or coating scopes.",
  "roof-replacement-cost": "Estimate full roof replacement cost from roof area, covering type, removal needs and access. Review material and labour allowances before a site assessment.",
  "renovation-budget-calculator": "Plan a home-renovation budget from property size, room scope and finish level. See category allowances and a practical total range for KL & Selangor.",
  "room-renovation-estimator": "Estimate a bedroom or living-room renovation from room size and selected painting, ceiling, flooring, electrical and carpentry work.",
  "kitchen-renovation-estimator": "Estimate kitchen renovation cost from layout, cabinet length, worktop, fittings, electrical and plumbing scope. Build a clearer budget before design work.",
  "bathroom-renovation-estimator": "Estimate bathroom renovation cost from size, demolition, waterproofing, tiles, sanitary fittings and plumbing. Compare selected scope and budget range."
};

for (const [slug, description] of Object.entries(TOOL_META_DESCRIPTION_OVERRIDES)) {
  if (!toolsContent[slug]) throw new Error(`Unknown tool metadata override: ${slug}`);
  toolsContent[slug].metaDesc = description;
}

export const toolsList = Object.values(toolsContent);
