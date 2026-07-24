import { servicesData } from "@/config/services-data";

export type GenericContentPage = {
  slug: string;
  title: string;
  category: string;
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
  relatedServiceSlug?: keyof typeof servicesData;
};

const faq = (topic: string) => [
  { q: `Is ${topic} relevant for KL and Selangor homes?`, a: `Yes. The recommendations are written for Klang Valley property types, tropical humidity, condo rules, and common Malaysian construction materials.` },
  { q: `How should I budget for ${topic}?`, a: `Use the guide as a planning range only, then confirm a market-rate itemized quote after photos or an onsite inspection.` },
  { q: `Can KL Servis Rumah help with ${topic}?`, a: `Yes. Share your property type, area, photos, and preferred timing on WhatsApp so we can advise the suitable scope.` },
  { q: `Will the price be confirmed before work starts?`, a: `Yes. We confirm transparent market-rate pricing before work begins and only proceed after approval.` }
];

export const clusterPages: GenericContentPage[] = [
  ["painting", "interior-painting-kl", "Interior Painting in KL", "A complete hub for interior wall painting, preparation, primer, washable paint, colour selection, and room-by-room scheduling.", ["Wall inspection and crack patching", "Low-odor washable paint choices", "Furniture masking and cleanup", "Room sequencing for occupied homes"]],
  ["painting", "exterior-painting-kl", "Exterior Painting in KL", "A practical guide to exterior coating systems that survive Klang Valley UV exposure, rain, algae, and hairline masonry cracks.", ["Pressure washing", "Anti-alkali sealer", "Weatherproof topcoats", "High-wall safety planning"]],
  ["painting", "commercial-painting-kl", "Commercial Painting in KL", "Guidance for office, shoplot, and retail painting with after-hours scheduling, odor control, and handover deadlines.", ["Weekend scheduling", "Brand colour matching", "Low-disruption workflow", "Floor and fixture protection"]],
  ["plumbing", "leak-repair-kl", "Leak Repair in KL", "A local guide to visible and hidden pipe leaks, leak detection, pipe replacement, and pressure testing before handover.", ["Acoustic and visual checks", "Main valve isolation", "SIRIM-grade fittings", "Pressure testing"]],
  ["plumbing", "installation-kl", "Plumbing Installation in KL", "A homeowner guide for taps, sinks, toilet bowls, water heaters, pumps, and fixture replacement in Malaysian homes.", ["Fixture compatibility", "Valve replacement", "Water heater planning", "Clean silicone and sealing"]],
  ["plumbing", "emergency-plumbing-kl", "Emergency Plumbing in KL", "A fast-response guide for burst pipes, major leaks, blocked toilets, and urgent water shut-off actions.", ["Main valve checklist", "Flood reduction", "Priority dispatch", "Permanent repair options"]],
  ["ceiling", "installation-kl", "Ceiling Installation in KL", "A practical ceiling installation hub covering gypsum boards, GI frames, L-boxes, downlight openings, and skim finishing.", ["Laser-level framing", "Moisture-resistant boards", "Joint tape and skim coat", "Downlight coordination"]],
  ["ceiling", "repair-kl", "Ceiling Repair in KL", "A guide to cracked, stained, sagging, or water-damaged ceilings and when to replace boards instead of patching only.", ["Leak-source checks", "Board replacement", "Mold-safe removal", "Seamless repainting"]],
  ["ceiling", "partition-kl", "Partition Walls in KL", "A commercial and residential guide for gypsum partitions, office rooms, soundproofing, and fire-rated board options.", ["Metal tracks", "Rockwool insulation", "Door opening prep", "Smooth skim finish"]],
  ["waterproofing", "bathroom-kl", "Bathroom Waterproofing in KL", "A focused hub for bathroom leaks, no-hack sealing, PU grouting, full membrane replacement, and water ponding tests.", ["Leak diagnosis", "PU injection", "No-hack coating", "Full hacking membrane"]],
  ["waterproofing", "roof-kl", "Roof Waterproofing in KL", "A roof and concrete slab guide covering membranes, crack routing, ponding, UV exposure, and rainy-season leak prevention.", ["Torch-on membrane", "Acrylic coating", "Crack repair", "Drainage checks"]],
  ["waterproofing", "pu-grouting-kl", "PU Grouting in KL", "An in-depth hub on polyurethane injection for active concrete cracks and inter-floor leaks without unnecessary tile hacking.", ["Injection packers", "High-pressure pump", "Flexible PU foam", "Leak verification"]],
  ["handyman", "tv-mounting-kl", "TV Mounting in KL", "A safety-first guide to mounting TVs on brick, concrete, and gypsum walls with the correct anchor system.", ["Wall type identification", "Stud scanning", "Bracket choice", "Weight testing"]],
  ["handyman", "door-lock-kl", "Door and Lock Repair in KL", "A practical guide for sagging doors, hinges, latch alignment, lockset replacement, and digital lock preparation.", ["Hinge checks", "Door planing", "Latch alignment", "Lockset installation"]],
  ["handyman", "furniture-assembly-kl", "Furniture Assembly in KL", "A flat-pack assembly hub covering wardrobes, beds, desks, shelving, safety anchoring, and adjustment.", ["Part sorting", "Level assembly", "Wall anchoring", "Drawer and hinge tuning"]]
].map(([serviceSlug, slug, title, intro, bullets]) => ({ slug: slug as string, title: title as string, category: "Service Cluster", intro: intro as string, bullets: bullets as string[], faqs: faq(title as string), relatedServiceSlug: serviceSlug as keyof typeof servicesData }));

export const guidePages: GenericContentPage[] = [
  ["how-to-choose-house-painter-kl", "How to Choose a House Painter in KL", "Painting"],
  ["how-to-choose-plumber-kl", "How to Choose a Plumber in KL", "Plumbing"],
  ["how-to-choose-waterproofing-contractor-kl", "How to Choose a Waterproofing Contractor in KL", "Waterproofing"],
  ["how-to-choose-ceiling-contractor-kl", "How to Choose a Ceiling Contractor in KL", "Ceiling"],
  ["how-to-choose-handyman-kl", "How to Choose a Handyman in KL", "Handyman"],
  ["paint-brand-comparison-nippon-vs-dulux-vs-jotun", "Paint Brand Comparison: Nippon vs Dulux vs Jotun", "Painting"],
  ["waterproofing-method-comparison-pu-vs-membrane", "Waterproofing Method Comparison: PU vs Membrane", "Waterproofing"],
  ["ceiling-material-comparison-plaster-vs-gypsum", "Ceiling Material Comparison: Plaster vs Gypsum", "Ceiling"],
  ["plumbing-pipe-comparison-pvc-vs-copper-vs-ppr", "Plumbing Pipe Comparison: PVC vs Copper vs PPR", "Plumbing"],
  ["tv-mount-types-comparison-fixed-vs-tilt-vs-full-motion", "TV Mount Types: Fixed vs Tilt vs Full-Motion", "Handyman"]
].map(([slug, title, category]) => ({ slug, title, category, intro: `${title} explains practical decision criteria, pricing signals, material quality checks, warranty questions, and red flags for Malaysian homeowners.`, bullets: ["Check proven scope and material details", "Ask for itemized market-rate pricing", "Confirm warranty scope in writing", "Avoid vague quotes and pressure tactics"], faqs: faq(title) }));

export const comparisonPages: GenericContentPage[] = [
  ["pu-grouting-vs-tile-hacking", "PU Grouting vs Tile Hacking"],
  ["plaster-ceiling-vs-gypsum-ceiling", "Plaster Ceiling vs Gypsum Ceiling"],
  ["nippon-paint-vs-dulux-paint", "Nippon Paint vs Dulux Paint"],
  ["acrylic-vs-cementitious-waterproofing", "Acrylic vs Cementitious Waterproofing"],
  ["pvc-pipes-vs-copper-pipes", "PVC Pipes vs Copper Pipes"],
  ["pvc-vs-molly-bolt-anchors", "PVC Plugs vs Molly Bolt Anchors"],
  ["interior-paint-finishes-matte-vs-satin-vs-gloss", "Interior Paint Finishes: Matte vs Satin vs Gloss"],
  ["wall-putty-vs-plaster-smoothening", "Wall Putty vs Plaster Smoothening"],
  ["partition-materials-gypsum-vs-bricks-vs-glass", "Partition Materials: Gypsum vs Bricks vs Glass"],
  ["diy-painting-vs-professional-painting", "DIY Painting vs Professional Painting"],
  ["cheap-handyman-vs-insured-contractor", "Cheap Handyman vs Insured Contractor"],
  ["pu-injection-vs-surface-waterproofing", "PU Injection vs Surface Waterproofing"],
  ["fixed-quote-vs-hourly-handyman", "Fixed Quote vs Hourly Handyman"],
  ["drywall-partition-vs-glass-partition", "Drywall Partition vs Glass Partition"],
  ["roof-coating-vs-torch-on-membrane", "Roof Coating vs Torch-On Membrane"]
].map(([slug, title]) => ({ slug, title, category: "Comparison", intro: `${title} compares use cases, cost ranges, durability, disruption level, and suitability for KL and Selangor properties.`, bullets: ["Best-use scenarios", "Cost and disruption comparison", "Durability considerations", "When to call a professional"], faqs: faq(title) }));

export const maintenancePages: GenericContentPage[] = [
  "painting-maintenance-schedule",
  "plumbing-annual-checklist",
  "ceiling-maintenance-tips",
  "waterproofing-recheck-schedule",
  "home-handyman-monthly-checklist",
  "rainy-season-home-prep",
  "post-renovation-cleanup-checklist",
  "condo-maintenance-checklist",
  "landed-house-maintenance-calendar",
  "rental-property-turnover-checklist"
].map((slug) => ({ slug, title: slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" "), category: "Maintenance Guide", intro: "A checklist-style maintenance plan for Malaysian homes, with tasks grouped by urgency, frequency, and whether DIY or professional help is safer.", bullets: ["Monthly checks", "Quarterly prevention", "Rainy-season readiness", "When to book inspection"], faqs: faq(slug.replace(/-/g, " ")) }));

export const seasonalPages: GenericContentPage[] = [
  "home-prep-rainy-season-kl",
  "painting-dry-season-tips",
  "waterproofing-pre-monsoon-checklist",
  "chinese-new-year-home-repaint-guide",
  "raya-home-makeover-checklist",
  "year-end-renovation-planning",
  "hari-raya-painting-promo",
  "monsoon-leak-emergency-guide"
].map((slug) => ({ slug, title: slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" "), category: "Seasonal", intro: "Season-aware planning advice for KL and Selangor homeowners, timed around Malaysian weather, holidays, and peak service windows.", bullets: ["Book early before peak weeks", "Prioritize leaks before repainting", "Protect furniture and flooring", "Confirm work hours with building management"], faqs: faq(slug.replace(/-/g, " ")) }));

export const commercialPages: GenericContentPage[] = Object.values(servicesData).map((service) => ({
  slug: `${service.slug}-services-kl`,
  title: `Commercial ${service.title} in KL`,
  category: "Commercial",
  intro: `Commercial ${service.title.toLowerCase()} focuses on offices, retail lots, showrooms, warehouses, and strata facilities that need tidy scheduling and minimal disruption.`,
  bullets: ["After-hours or weekend scheduling", "Clear scope documentation", "Material and safety planning", "Fast WhatsApp coordination"],
  faqs: faq(`commercial ${service.title}`),
  relatedServiceSlug: service.slug as keyof typeof servicesData
}));

export const residentialPages: GenericContentPage[] = Object.values(servicesData).map((service) => ({
  slug: `${service.slug}-services-kl`,
  title: `Residential ${service.title} in KL`,
  category: "Residential",
  intro: `Residential ${service.title.toLowerCase()} supports condos, apartments, terrace homes, semi-Ds, bungalows, and rental units across KL and Selangor.`,
  bullets: ["Furniture and floor protection", "Condo/JMB coordination", "Transparent market-rate quotes", "Warranty-backed workmanship"],
  faqs: faq(`residential ${service.title}`),
  relatedServiceSlug: service.slug as keyof typeof servicesData
}));

export const brandPages: GenericContentPage[] = [
  ["nippon-paint-application-malaysia", "Nippon Paint Application Malaysia", "painting"],
  ["dulux-paint-application-malaysia", "Dulux Paint Application Malaysia", "painting"],
  ["jotun-paint-application-malaysia", "Jotun Paint Application Malaysia", "painting"],
  ["sirim-certified-pipes-malaysia", "SIRIM-Certified Pipes Malaysia", "plumbing"],
  ["grundfos-water-pump-installation", "Grundfos Water Pump Installation", "plumbing"],
  ["joven-water-heater-installation", "Joven Water Heater Installation", "plumbing"],
  ["rinnai-water-heater-installation", "Rinnai Water Heater Installation", "plumbing"],
  ["knauf-gypsum-board-installation", "Knauf Gypsum Board Installation", "ceiling"],
  ["boral-gypsum-board-installation", "Boral Gypsum Board Installation", "ceiling"],
  ["sika-waterproofing-application", "Sika Waterproofing Application", "waterproofing"],
  ["bostik-waterproofing-application", "Bostik Waterproofing Application", "waterproofing"],
  ["mapei-waterproofing-application", "Mapei Waterproofing Application", "waterproofing"]
].map(([slug, title, relatedServiceSlug]) => ({ slug, title, category: "Brand Guide", intro: `${title} explains when this brand or material category is suitable, how it should be applied, and what homeowners should check before approving a quote.`, bullets: ["Compatibility with the surface", "Correct preparation method", "Warranty and care considerations", "No claim of exclusive partnership unless documented"], faqs: faq(title), relatedServiceSlug: relatedServiceSlug as keyof typeof servicesData }));

export const topPages: GenericContentPage[] = [
  "best-house-painters-kl-2026",
  "best-plumbers-kl",
  "best-ceiling-contractors-kl",
  "best-waterproofing-contractors-kl",
  "best-handyman-kl",
  "best-paint-brands-malaysia-2026",
  "best-waterproofing-methods-malaysia",
  "bathroom-waterproofing-options",
  "ceiling-materials-malaysia",
  "handyman-services-every-homeowner-needs"
].map((slug) => ({ slug, title: slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" "), category: "Top Considerations", intro: "An educational list of criteria, not a fabricated ranking. Use it to compare providers, methods, materials, and quote quality fairly.", bullets: ["Transparent pricing", "Workmanship warranty", "Material quality", "Clean site handover", "Relevant local experience"], faqs: faq(slug.replace(/-/g, " ")) }));

export const answerPages: GenericContentPage[] = Object.values(servicesData).map((service) => ({
  slug: `${service.slug}-ultimate-guide`,
  title: `${service.title} Ultimate Guide for KL & Selangor`,
  category: "AI Answer Guide",
  intro: `${service.title} in KL and Selangor should be priced at standard market rates, scoped clearly, performed by insured and background-verified tradesmen, and backed by written workmanship terms.`,
  bullets: [service.tagline, `Starting price: ${service.startPrice}`, `Warranty: ${service.warranty}`, "Last updated: 2026-07-24"],
  faqs: service.faqs,
  relatedServiceSlug: service.slug as keyof typeof servicesData
}));

export const processPages: GenericContentPage[] = Object.values(servicesData).map((service) => ({
  slug: `${service.slug === "waterproofing" ? "pu-grouting" : service.slug}-process-kl`,
  title: `${service.title} Process in KL`,
  category: "Process",
  intro: `A step-by-step process page for ${service.title.toLowerCase()}, including preparation, execution, quality checks, and warranty handover.`,
  bullets: service.process.map((step) => `${step.step}: ${step.title}`),
  faqs: service.faqs,
  relatedServiceSlug: service.slug as keyof typeof servicesData
}));

export const allGenericPages = [
  ...clusterPages,
  ...guidePages,
  ...comparisonPages,
  ...maintenancePages,
  ...seasonalPages,
  ...commercialPages,
  ...residentialPages,
  ...brandPages,
  ...topPages,
  ...answerPages,
  ...processPages
];
