import type { ProblemDetail } from "@/config/problem-data";

/**
 * Extra problem pages that fill gaps in the primary `problemPages` list so
 * that every service pillar owns at least 3 dedicated diagnostic pages.
 *
 * Kept in a separate file so `problem-data.ts` stays readable and so the
 * next data expansion can happen without merge-conflict risk.
 *
 * All entries default to English; ms/zh fallback is handled by
 * `lib/problem-i18n.ts` (English is used when no locale override exists).
 */
export const extraProblemPages: ProblemDetail[] = [
  // ── PAINTING extras ────────────────────────────────────────────────────
  {
    slug: "yellowing-white-walls",
    serviceSlug: "painting",
    title: "White Walls Turning Yellow / Cream",
    symptom: "Once-white walls start looking cream, yellow, or dirty after 12–36 months even without touching them.",
    costRange: "RM 400–RM 3,500+ depending on room count and cause",
    urgency: "Low",
    causes: [
      "Cheap emulsion paint with poor UV stability",
      "Cigarette smoke or kitchen grease deposits",
      "Sun exposure on west-facing walls",
      "Yellowing sealer bleeding through the topcoat"
    ],
    solutions: [
      "Clean walls with mild detergent to remove surface film",
      "Apply a stain-blocking primer before repainting",
      "Repaint with a UV-stable, low-VOC premium acrylic",
      "Add ventilation improvements in kitchens and smoking areas"
    ],
    whenToCall: [
      "Yellowing returns within 12 months of repainting",
      "Cleaning does not restore the original white",
      "Only certain walls (near kitchen or windows) are affected"
    ],
    faqs: [
      { q: "Why do my white walls turn yellow so fast?", a: "Usually a combination of cheap paint (low UV stability), airborne kitchen grease, cigarette smoke and sun exposure. Premium acrylic paint holds white much longer." },
      { q: "Can I just paint over the yellow patches?", a: "Only if you first apply a stain-blocking primer — otherwise the stain will bleed through the new topcoat in weeks." },
      { q: "Which paint stays white the longest in Malaysia?", a: "Look for a premium interior acrylic with UV stability and low VOC — brands like Nippon Odour-less, Dulux EasyClean and Jotun Fenomastic are our common go-tos." }
    ]
  },
  {
    slug: "paint-cracking-hairline-walls",
    serviceSlug: "painting",
    title: "Hairline Cracks Appearing on Painted Walls",
    symptom: "Fine spidery cracks appear on painted walls, often around window frames, door frames, or ceiling-wall junctions.",
    costRange: "RM 300–RM 2,200+ depending on crack length and repaint scope",
    urgency: "Medium",
    causes: [
      "Normal building settlement (worst in the first 2–5 years)",
      "Skim-coat applied too thick or too fast",
      "Temperature and humidity movement",
      "Underlying plaster shrinkage"
    ],
    solutions: [
      "Widen the crack slightly and fill with flexible acrylic filler",
      "Apply fibreglass mesh tape for larger cracks",
      "Skim over the repair with a thin plaster coat",
      "Prime and repaint with a flexible acrylic topcoat"
    ],
    whenToCall: [
      "Cracks are wider than a hair (1 mm+)",
      "The same crack reopens after repainting",
      "You see cracks running diagonally across large areas"
    ],
    faqs: [
      { q: "Do hairline cracks mean my house has structural damage?", a: "Almost never. Cosmetic hairline cracks are normal settlement and paint-film movement — real structural cracks are usually much wider (5 mm+), diagonal and progressive." },
      { q: "Can I just fill hairline cracks with regular putty?", a: "Not for lasting results. Rigid putty pops out within months. We use flexible acrylic filler + mesh tape so the crack stays sealed even as the wall moves." },
      { q: "How much to fix hairline cracks in a whole room?", a: "Typical room-level crack repair + skim + primer + repaint runs RM 500 to RM 1,200 depending on wall area and paint grade." }
    ]
  },

  // ── PLUMBING extras ────────────────────────────────────────────────────
  {
    slug: "leaking-bathroom",
    serviceSlug: "plumbing",
    title: "Leaking Bathroom (Wet Floor Below, Damp Walls)",
    symptom: "The floor below your upstairs bathroom is wet or damp, or the wall next to the bathroom shows brown stains and paint bubbling.",
    costRange: "RM 350–RM 4,500+ depending on leak source",
    urgency: "High",
    causes: [
      "Cracked bathroom floor waterproofing membrane",
      "Failed silicone around shower screen or bathtub",
      "Leaking concealed pipe inside the wall",
      "Broken tile grout allowing water into the slab"
    ],
    solutions: [
      "Pressure-test the plumbing to isolate pipe vs slab leak",
      "PU grout the concrete slab from below (no tile hacking)",
      "Re-silicone shower screens and bathtub joints",
      "Full membrane re-do with tile hacking (worst case)"
    ],
    whenToCall: [
      "Ceiling below the bathroom is dripping",
      "Wall paint next to the bathroom is bubbling",
      "The wet patch is expanding week-on-week"
    ],
    faqs: [
      { q: "Do I need to hack up the tiles to fix a bathroom leak?", a: "Not usually. In most cases we can seal the leak from below using high-pressure PU grouting — no tile damage. Full hacking is only needed when the membrane has completely failed." },
      { q: "How much does bathroom leak repair cost in KL?", a: "PU grouting from below: RM 350 to RM 1,500. Silicone reseal: RM 180 to RM 350. Full membrane redo: RM 3,500 to RM 8,500 for a standard bathroom." },
      { q: "How fast can you attend an active bathroom leak?", a: "For active leaks in the Klang Valley we dispatch same-day, typically arriving within 45 to 90 minutes." }
    ]
  },
  {
    slug: "low-water-pressure",
    serviceSlug: "plumbing",
    title: "Low Water Pressure at Home",
    symptom: "Weak shower flow, taps trickling, or the water heater struggling to trigger because incoming pressure is too low.",
    costRange: "RM 200–RM 3,500+ depending on cause and fixture count",
    urgency: "Medium",
    causes: [
      "Clogged inlet filter on the water heater or shower head",
      "Corroded galvanised pipes narrowing the flow diameter",
      "Failing booster pump or pressure tank",
      "SYABAS mains-side supply issue (rare but possible)"
    ],
    solutions: [
      "Clean or replace shower head and inlet filters",
      "Descale the water heater",
      "Replace corroded pipe runs with PPR/PEX",
      "Install or replace a pressure booster pump"
    ],
    whenToCall: [
      "Only one tap is affected (likely local clog)",
      "The whole house is affected (likely pump or main)",
      "Pressure dropped suddenly after works nearby"
    ],
    faqs: [
      { q: "Should I install a booster pump?", a: "If your house has 2+ storeys or you experience low pressure on the top floor, a booster pump is usually the right fix. Typical install: RM 900 to RM 2,200 depending on pump grade." },
      { q: "Can old galvanised pipes cause low pressure?", a: "Yes — internal rust narrows the pipe diameter over 20+ years. Full swap to PPR/PEX pipes restores flow and prevents future rust leaks." },
      { q: "How do I know if my water heater filter is clogged?", a: "Shut off the heater, close inlet valve, unscrew the inlet filter and inspect. If it's brown/scaled, rinse or replace — takes 10 minutes." }
    ]
  },
  {
    slug: "clogged-drain",
    serviceSlug: "plumbing",
    title: "Clogged Kitchen or Bathroom Drain",
    symptom: "Water drains slowly, sits in the sink or shower tray, or backs up when you run multiple taps.",
    costRange: "RM 150–RM 700+ depending on clog severity",
    urgency: "Medium",
    causes: [
      "Kitchen grease build-up in the P-trap and horizontal run",
      "Hair accumulation in bathroom drain traps",
      "Foreign objects (wet wipes, sanitary products) in toilet lines",
      "Broken or sagging pipe run causing debris to collect"
    ],
    solutions: [
      "Manual snaking / rodding of the trap and pipe",
      "Enzyme-based drain treatment (safe for pipes)",
      "High-pressure water jetting (for stubborn kitchen runs)",
      "Camera inspection + pipe repair for structural failures"
    ],
    whenToCall: [
      "Multiple drains in the house back up simultaneously",
      "Water bubbles up from another drain when you flush",
      "You smell sewage indoors"
    ],
    faqs: [
      { q: "Are chemical drain openers safe for my pipes?", a: "Strong caustic chemicals can damage older PVC joints and are unsafe for enclosed spaces. We recommend mechanical clearing plus enzyme treatments — safer and longer-lasting." },
      { q: "How much to unblock a kitchen drain?", a: "Manual snaking: RM 150 to RM 250. High-pressure jetting: RM 350 to RM 700 for a full kitchen line." },
      { q: "How can I prevent future kitchen clogs?", a: "Never pour cooking grease down the sink; use a mesh strainer; and run hot water + a monthly enzyme treatment to keep the line clean." }
    ]
  },
  {
    slug: "toilet-not-flushing",
    serviceSlug: "plumbing",
    title: "Toilet Not Flushing Properly",
    symptom: "Toilet flushes weakly, does not clear the bowl in one press, or keeps running after flushing.",
    costRange: "RM 150–RM 850+ depending on part replacement",
    urgency: "Medium",
    causes: [
      "Worn flapper valve or flush mechanism",
      "Clogged rim jets around the bowl edge",
      "Partial block in the S-trap or waste line",
      "Faulty fill valve (float assembly)"
    ],
    solutions: [
      "Replace the flapper, fill valve or dual-flush cartridge",
      "Descale the rim jets with vinegar or CLR",
      "Snake the S-trap and waste line",
      "Full cistern rebuild kit for old suites"
    ],
    whenToCall: [
      "You've replaced the flapper and it still runs",
      "Water flow into the bowl is weak from all sides",
      "Multiple flushes are needed for a single use"
    ],
    faqs: [
      { q: "Should I repair or replace my old toilet?", a: "If the ceramic is cracked, or you've replaced parts multiple times in the last 2 years, replacing the whole suite (RM 550 to RM 1,800 installed) is usually more cost-effective." },
      { q: "Why does my toilet keep running?", a: "Nearly always a worn flapper valve or fill-valve seal. Both are quick fixes — RM 150 to RM 250 including parts." },
      { q: "How much for a new toilet installation in KL?", a: "Supply + install of a good dual-flush suite typically runs RM 850 to RM 1,800 including removing the old unit and disposing of it." }
    ]
  },

  // ── CEILING extras ─────────────────────────────────────────────────────
  {
    slug: "sagging-ceiling",
    serviceSlug: "ceiling",
    title: "Sagging or Bowing Plaster Ceiling",
    symptom: "Sections of the ceiling visibly droop, feel soft when tapped, or show a curved dip in the board.",
    costRange: "RM 380–RM 2,800+ depending on board area to replace",
    urgency: "High",
    causes: [
      "Water absorption from an active or recent leak above",
      "Failed suspension wire or timber batten",
      "Long-term humidity weakening the board",
      "Cheap or thin ceiling board used at installation"
    ],
    solutions: [
      "Stop the water source first (leak, condensation)",
      "Remove the damaged section fully",
      "Install moisture-resistant plaster or gypsum board",
      "Skim, prime, and repaint to match surrounding ceiling"
    ],
    whenToCall: [
      "The sag is more than 10 mm deep",
      "You can hear a soft creaking when the ceiling is touched",
      "You see brown water stains alongside the sag"
    ],
    faqs: [
      { q: "Can a sagging ceiling collapse?", a: "Yes, especially after prolonged water damage. If it's soft to the touch or dripping, keep people away and call us urgently — we dispatch same-day for safety-critical ceiling issues." },
      { q: "Do you need to replace the whole ceiling?", a: "No. We remove and replace only the affected section, then blend the skim-coat and paint so the repair is invisible." },
      { q: "Which ceiling board should I use to prevent future sag?", a: "In wet-prone areas (near bathrooms, kitchens) use moisture-resistant (MR) gypsum board. In dry areas standard 9mm plasterboard is fine." }
    ]
  },
  {
    slug: "ceiling-cornice-crack",
    serviceSlug: "ceiling",
    title: "Cornice Cracks Between Wall and Ceiling",
    symptom: "Visible cracks or gaps appear at the joint between the wall and the plaster cornice moulding.",
    costRange: "RM 200–RM 900+ depending on room count",
    urgency: "Low",
    causes: [
      "Normal thermal expansion of ceiling vs wall",
      "Cornice adhesive drying out over time",
      "Water damage weakening the plaster bond",
      "Building settlement in the first 5 years"
    ],
    solutions: [
      "Rake out the loose material and vacuum clean",
      "Fill with flexible acrylic filler",
      "Reinforce with mesh tape for larger gaps",
      "Skim, prime and repaint to match"
    ],
    whenToCall: [
      "The gap is wider than 3 mm",
      "The cornice is starting to detach from the ceiling",
      "Water stains appear at the same time"
    ],
    faqs: [
      { q: "Can I fix cornice cracks with regular polyfilla?", a: "It'll last 3–6 months. Flexible acrylic filler + mesh tape lasts 5+ years even with thermal movement." },
      { q: "Do I need to replace the entire cornice?", a: "Only if it's fully detached or heavily water-damaged. Most cracks are surface repair only." },
      { q: "How much per room to fix cornice cracks?", a: "Typical bedroom cornice repair (fill + skim + repaint): RM 200 to RM 380. Living room or larger area: RM 450 to RM 900." }
    ]
  },

  // ── WATERPROOFING extras ────────────────────────────────────────────────
  {
    slug: "balcony-leak-condo",
    serviceSlug: "waterproofing",
    title: "Balcony Leaking Into the Unit Below (Condo)",
    symptom: "Your downstairs neighbour reports water dripping from their ceiling on the same footprint as your balcony above.",
    costRange: "RM 800–RM 6,500+ depending on membrane state",
    urgency: "High",
    causes: [
      "Failed acrylic or cementitious membrane",
      "Cracked tile grout letting rain water through",
      "Blocked balcony drain causing water pooling",
      "Concrete slab hairline cracks"
    ],
    solutions: [
      "Ponding test to confirm the leak path",
      "PU grout the slab from below (if access allowed)",
      "Strip tiles, apply new membrane + fresh tiles",
      "Fix blocked drains and add drip edge"
    ],
    whenToCall: [
      "The downstairs unit has active water damage",
      "JMB has served a repair notice",
      "You've resealed grout and the leak continues"
    ],
    faqs: [
      { q: "Am I liable for the downstairs unit's damage?", a: "Under most Malaysian JMB rules yes — the strata unit owner is responsible for their own waterproofing. Fix urgently and document the repair for future claims." },
      { q: "Can you PU grout from the downstairs unit without hacking my balcony tiles?", a: "Often yes — with the downstairs owner's permission, we grout the slab from below and avoid touching your tiles. Success rate is high for hairline cracks." },
      { q: "How long does a balcony re-membrane take?", a: "Full tile-hack + new membrane + retile is typically 3 to 5 working days for a standard balcony." }
    ]
  },
  {
    slug: "concrete-slab-crack-leak",
    serviceSlug: "waterproofing",
    title: "Concrete Slab Cracks Leaking During Heavy Rain",
    symptom: "Water appears on the ceiling only during heavy monsoon rains, tracing a specific crack line in the slab above.",
    costRange: "RM 650–RM 3,800+ depending on crack length",
    urgency: "High",
    causes: [
      "Structural or shrinkage cracks in the concrete slab",
      "Movement between building components",
      "Loss of surface waterproofing over decades",
      "Poor drainage causing water pooling on the slab"
    ],
    solutions: [
      "Locate the crack path from below with thermal imaging",
      "Drill injection ports along the crack",
      "High-pressure PU grouting to fill the crack completely",
      "Reseal the top surface with acrylic membrane if accessible"
    ],
    whenToCall: [
      "You only see the leak during rain",
      "The drip forms along a specific straight line",
      "Traditional waterproofing has already failed"
    ],
    faqs: [
      { q: "Is PU grouting a permanent fix for slab cracks?", a: "PU foam is flexible and lasts 8 to 15 years typically — it flexes with the slab so it doesn't crack again. We provide up to 5-year written warranty." },
      { q: "Can you grout without accessing the top of the slab?", a: "Yes. Injection is done from below, which is why PU grouting is popular for inter-floor leaks between condo units." },
      { q: "How long does PU grouting take?", a: "Most concrete slab crack projects finish in 2 to 4 hours — same day, no mess, immediate curing." }
    ]
  },

  // ── HANDYMAN extras ────────────────────────────────────────────────────
  {
    slug: "curtain-track-falling",
    serviceSlug: "handyman",
    title: "Curtain Track Coming Loose from the Ceiling",
    symptom: "The curtain track is drooping, has visible screw holes pulling out of the ceiling, or has partially fallen.",
    costRange: "RM 120–RM 380+ per window",
    urgency: "Low",
    causes: [
      "Screws driven into plasterboard without anchors",
      "Track over-loaded with heavy curtains",
      "Water damage weakening the plasterboard",
      "Old rubber wall plugs disintegrating"
    ],
    solutions: [
      "Remove old fixings and patch the plaster",
      "Locate the ceiling joist or use heavy-duty toggle bolts",
      "Reinstall the track with proper anchors and stainless steel screws",
      "Add support wall brackets for extra-heavy curtains"
    ],
    whenToCall: [
      "Multiple screw holes have pulled out",
      "The ceiling around the track is damaged",
      "The curtain is heavy blackout or lined fabric"
    ],
    faqs: [
      { q: "How do you mount a curtain track on plasterboard?", a: "We use heavy-duty toggle bolts or spring anchors rated for at least 4× the curtain weight. For blackout curtains we also add intermediate wall brackets." },
      { q: "Can you install curtain tracks on concrete ceilings?", a: "Yes — we hammer-drill and use plated concrete anchors for a permanent fix. Takes about 30 minutes per window." },
      { q: "What if my ceiling is already damaged?", a: "We patch the plaster, prime and let it cure, then install the new track — usually a same-day job with a 24-hour paint cure between steps." }
    ]
  },
  {
    slug: "door-hinge-sagging",
    serviceSlug: "handyman",
    title: "Sagging or Squeaking Door",
    symptom: "Door drags on the floor, doesn't close flush, squeaks when opened, or the hinges show visible movement.",
    costRange: "RM 150–RM 550+ per door",
    urgency: "Low",
    causes: [
      "Worn-out hinges (especially on heavy solid-wood doors)",
      "Screws loosening in the door frame",
      "Timber door absorbing humidity and swelling",
      "Frame settlement in older houses"
    ],
    solutions: [
      "Tighten or replace hinge screws (use longer screws into the stud)",
      "Replace worn hinges with heavy-duty ball-bearing hinges",
      "Plane the door edge to reduce swelling",
      "Re-hang the door with fresh frame packing"
    ],
    whenToCall: [
      "The door touches the floor when closing",
      "Multiple doors in the house are sagging",
      "The hinge screws no longer bite"
    ],
    faqs: [
      { q: "Can you fix a sagging door without replacing it?", a: "In 90% of cases yes — new hinges + longer screws + light planing usually restores the door completely. Full replacement only needed for cracked or heavily warped doors." },
      { q: "Why do wood doors swell in Malaysia?", a: "Tropical humidity causes cyclic swelling — worst before/during monsoon. We plane the door with a small margin so it works year-round." },
      { q: "How much for a full door service (planing + new hinges + repaint)?", a: "Typical fee is RM 220 to RM 380 per door depending on planing extent and paint touch-up needed." }
    ]
  },

  // ── HOUSE RENOVATION ────────────────────────────────────────────────────
  {
    slug: "old-condo-full-refurbishment",
    serviceSlug: "house-renovation",
    title: "Old Condo That Needs Full Refurbishment",
    symptom: "You've bought or inherited a 15+ year old condo with tired paint, dated tiles, worn kitchen and old bathrooms.",
    costRange: "RM 22,000–RM 180,000+ depending on unit size and scope",
    urgency: "Low",
    causes: [
      "Decades of tenant/owner wear and tear",
      "Old fixtures well past service life",
      "Aged waterproofing membranes",
      "Cheap materials used in original build"
    ],
    solutions: [
      "Site survey with detailed room-by-room scope",
      "Prioritise waterproofing, electrical safety and plumbing first",
      "Refresh finishes (paint, flooring, tiles) in second phase",
      "Fit-out kitchen and wardrobes last for best schedule flow"
    ],
    whenToCall: [
      "You've just bought a resale condo unit",
      "You're planning to rent out and want higher rental yield",
      "You want to move in after refresh, not before"
    ],
    faqs: [
      { q: "How long does a full 3-bed condo refurbishment take?", a: "Typical schedule is 6 to 10 weeks depending on scope: 1 week hacking + waterproofing, 3 weeks tiling + plumbing + electrical, 2 weeks kitchen + carpentry, 1 week paint + handover." },
      { q: "Do you provide a fixed price for full refurb?", a: "Yes. After the site visit we issue a detailed itemised quote with each scope line priced separately — you approve which lines proceed." },
      { q: "Can you work with the condo's JMB restrictions?", a: "Yes. We handle the JMB deposit, permits, quiet-hour rules, lift protection and rubbish removal as standard." }
    ]
  },

  // ── ELECTRICAL extra ────────────────────────────────────────────────────
  {
    slug: "power-tripping-frequently",
    serviceSlug: "electrical",
    title: "Power Tripping Frequently in the House",
    symptom: "The main breaker or an RCD trips several times a day, often when a specific appliance is turned on.",
    costRange: "RM 180–RM 1,800+ depending on cause",
    urgency: "High",
    causes: [
      "Faulty appliance drawing excess current or shorting",
      "Overloaded circuit (too many appliances on one line)",
      "Water ingress on a socket or in the ceiling",
      "Aged DB box with weak breakers"
    ],
    solutions: [
      "Isolate each circuit to identify the tripping source",
      "Test appliances one by one",
      "Redistribute high-load appliances across circuits",
      "Replace faulty breakers or upgrade the DB box"
    ],
    whenToCall: [
      "The trip is immediate and repeats within seconds",
      "You smell burning near a socket or the DB box",
      "The trip only happens after rain"
    ],
    faqs: [
      { q: "Is a tripping RCD dangerous?", a: "The RCD is protecting you — never bypass it. It's tripping because of a real earth-leak or short. Get it diagnosed within 24 hours." },
      { q: "Can I upgrade my DB box without rewiring the whole house?", a: "Yes. We can upgrade the DB box, breakers and RCDs in a single day without rewiring, giving you modern protection." },
      { q: "How much for a full DB box upgrade in KL?", a: "Typical DB box upgrade with 6 to 12 way breakers, RCD and neat labelling: RM 850 to RM 1,800 installed by a ST-licensed electrician." }
    ]
  },

  // ── WATER HEATER extra ────────────────────────────────────────────────────
  {
    slug: "water-heater-cold",
    serviceSlug: "water-heater",
    title: "Water Heater Not Heating (Cold Water Only)",
    symptom: "The shower runs cold even after turning on the water heater — no warm output at all.",
    costRange: "RM 180–RM 850+ depending on fault",
    urgency: "Medium",
    causes: [
      "Blown heating element (most common)",
      "Faulty thermostat",
      "Tripped safety cut-out or RCD",
      "Broken pressure switch (for instant heaters)"
    ],
    solutions: [
      "Test element continuity with a multimeter",
      "Replace the heating element or full element assembly",
      "Reset or replace the thermostat",
      "Reset the safety cut-out"
    ],
    whenToCall: [
      "The heater trips the RCD every time it's turned on",
      "You've had the heater 3+ years without service",
      "There's a leak from the heater body"
    ],
    faqs: [
      { q: "Can I replace the heating element myself?", a: "Only qualified persons should — the element is on high-voltage 230V mains. We change most elements in 20 to 40 minutes." },
      { q: "Is my heater worth repairing or should I replace it?", a: "Under 5 years old: usually worth repairing. Over 8 years old: often better to replace for reliability, energy efficiency and warranty." },
      { q: "How much for a new instant water heater installed?", a: "Mid-range instant heater supply + install: RM 550 to RM 1,200. Storage tank heater supply + install: RM 850 to RM 1,900." }
    ]
  },

  // ── TILING extras ────────────────────────────────────────────────────────
  {
    slug: "loose-hollow-tiles",
    serviceSlug: "tiling",
    title: "Loose or Hollow-Sounding Floor Tiles",
    symptom: "Tiles crack, pop up, or sound hollow when tapped with a coin because the bond to the substrate has failed.",
    costRange: "RM 350–RM 2,800+ depending on tile count and access",
    urgency: "Medium",
    causes: [
      "Poor cement bedding during original installation",
      "Substrate movement due to building settlement",
      "Water ingress separating tile from screed",
      "Wrong tile adhesive used for the tile format"
    ],
    solutions: [
      "Tap-test the entire floor to map hollow zones",
      "Carefully lift affected tiles",
      "Re-lay with proper thin-set adhesive and 100% coverage",
      "Re-grout matching the surrounding colour"
    ],
    whenToCall: [
      "Multiple tiles have popped up in the last month",
      "You feel movement when walking on the floor",
      "Water is seeping through cracked grout"
    ],
    faqs: [
      { q: "Can loose tiles be re-glued from the top?", a: "Only temporarily for small edge lifts. Proper repair requires lifting the tile and re-bedding it with the correct thin-set adhesive." },
      { q: "How much to relay a single loose tile?", a: "Single-tile relay: RM 150 to RM 280 including matching grout. Multi-tile relays are quoted by area." },
      { q: "Can you match my old tile colour?", a: "We keep a stock of common Malaysian tile grouts. If your tile is a rare design, we ask you to bring a spare tile or we source the nearest match." }
    ]
  },
  {
    slug: "cracked-tile-grout",
    serviceSlug: "tiling",
    title: "Cracked or Discoloured Tile Grout",
    symptom: "Grout lines between tiles are cracking, crumbling, or turning grey/black with mould.",
    costRange: "RM 250–RM 1,800+ depending on room size",
    urgency: "Medium",
    causes: [
      "Old cement grout past its 5-8 year service life",
      "Substrate movement stressing the grout line",
      "Damp environments (bathroom, kitchen) feeding mould",
      "Cheap unsealed grout used originally"
    ],
    solutions: [
      "Grind out the old grout to a clean depth",
      "Clean the tile edges with a stain remover",
      "Apply premium epoxy or acrylic grout",
      "Seal the grout line with a hydrophobic sealer"
    ],
    whenToCall: [
      "Grout is crumbling to powder when scratched",
      "Water is leaking to the floor below",
      "Mould keeps returning despite cleaning"
    ],
    faqs: [
      { q: "Is epoxy grout worth the extra cost?", a: "For bathrooms and kitchens yes — epoxy grout is waterproof, mould-resistant, and lasts 15+ years vs 5-8 years for cement grout." },
      { q: "Can I just paint over old grout?", a: "Grout paint lasts 6-12 months but doesn't fix cracked or missing grout. Proper regrouting is the right long-term fix." },
      { q: "How much to regrout a standard bathroom?", a: "Typical bathroom regrouting: RM 650 to RM 1,400 including grout removal, cleaning, epoxy grout and sealing." }
    ]
  },

  // ── PLASTER CEILING extras ───────────────────────────────────────────────
  {
    slug: "plaster-ceiling-hairline-crack",
    serviceSlug: "plaster-ceiling",
    title: "Hairline Cracks in Plaster Ceiling",
    symptom: "Fine spider-web cracks appear across the plaster ceiling surface, often near joints or corners.",
    costRange: "RM 300–RM 1,800+ depending on ceiling area",
    urgency: "Low",
    causes: [
      "Skim coat applied too thick or too fast originally",
      "Thermal expansion cycling",
      "Building settlement in the first 5 years",
      "Water damage weakening the plaster bond"
    ],
    solutions: [
      "Widen the crack slightly and clean out debris",
      "Apply mesh tape over the crack",
      "Skim-coat over the repair with flexible plaster",
      "Prime and repaint to match"
    ],
    whenToCall: [
      "Cracks are wider than 1 mm",
      "Multiple cracks appearing at the same time",
      "You see water stains alongside cracks"
    ],
    faqs: [
      { q: "Do hairline cracks mean the ceiling will fall?", a: "Cosmetic hairline cracks are rarely structural. They usually mean the skim coat is stress-cycling — easily repaired." },
      { q: "Can I fill hairline cracks myself?", a: "Small filler jobs are possible but often reopen. Professional repair uses mesh tape + flexible skim for lasting results." },
      { q: "How much to repair hairline cracks in a room?", a: "Room-level repair (patch + skim + primer + repaint): RM 380 to RM 850 depending on ceiling size." }
    ]
  },

  // ── SKIM COAT extras ─────────────────────────────────────────────────────
  {
    slug: "uneven-wall-surface-skim",
    serviceSlug: "skim-coat",
    title: "Uneven or Bumpy Wall Surface",
    symptom: "Walls have visible bumps, dips, plaster ridges, or old paint texture that shows through the new topcoat.",
    costRange: "RM 5–RM 12 per sq ft (skim-coat)",
    urgency: "Low",
    causes: [
      "Old textured paint or old plaster ridges",
      "Uneven original wall surface",
      "Multiple paint layers building up unevenly",
      "Wall repair patches never properly smoothed"
    ],
    solutions: [
      "Sand rough areas smooth",
      "Apply full-wall skim coat (2-3 mm thick)",
      "Sand smooth after curing",
      "Prime with sealer before painting"
    ],
    whenToCall: [
      "The wall looks bumpy under sidelight",
      "You want a premium modern flat finish",
      "You're refreshing an old rental property"
    ],
    faqs: [
      { q: "Is skim coat different from filler?", a: "Yes. Filler is for spot repairs. Skim coat is a full-wall thin plaster layer that gives a perfectly smooth premium finish." },
      { q: "How thick is a skim coat?", a: "Standard skim coat is 2 to 3 mm thick. Very uneven walls may need multiple layers." },
      { q: "Can I skip skim coat if I'm repainting anyway?", a: "You can, but paint alone doesn't hide bumps. Premium finishes always start with a proper skim." }
    ]
  },

  // ── FLOORING extras ──────────────────────────────────────────────────────
  {
    slug: "vinyl-flooring-lifting-edges",
    serviceSlug: "flooring",
    title: "Vinyl or SPC Flooring Lifting at the Edges",
    symptom: "Vinyl or SPC planks curl, lift, or gap at the edges — usually near doors, windows, or wet areas.",
    costRange: "RM 250–RM 1,800+ depending on plank count",
    urgency: "Medium",
    causes: [
      "Insufficient expansion gap at walls (needs 10 mm)",
      "Direct sunlight overheating the material",
      "Water seepage under the flooring",
      "Original click-lock not fully engaged"
    ],
    solutions: [
      "Lift affected planks",
      "Trim expansion gap at walls",
      "Dry the substrate fully before reinstall",
      "Re-click planks with full engagement"
    ],
    whenToCall: [
      "Multiple planks are lifting in the same area",
      "You feel movement when walking on them",
      "Water is visible under the plank edges"
    ],
    faqs: [
      { q: "Can lifting vinyl be reused?", a: "Usually yes if not heat-damaged. We lift, dry, trim expansion gap and re-click the same planks." },
      { q: "Do I need to replace the whole floor?", a: "Only if planks are heat-warped or waterlogged. Most cases are edge-lift only — fixable in 2-4 hours." },
      { q: "How to prevent future lifting?", a: "Ensure 10 mm expansion gap at walls, avoid direct west-facing sunlight, and use rugs in wet-prone entryways." }
    ]
  },

  // ── ROOF REPAIR extras ───────────────────────────────────────────────────
  {
    slug: "cracked-roof-tiles",
    serviceSlug: "roof-repair",
    title: "Cracked or Displaced Roof Tiles",
    symptom: "Roof tiles visibly cracked, slipped, or displaced — often first noticed after a heavy storm.",
    costRange: "RM 380–RM 1,800+ depending on tile count and access",
    urgency: "High",
    causes: [
      "Storm impact or fallen tree branches",
      "Foot traffic damage (previous contractor)",
      "Age-related brittleness after 20+ years",
      "Failed mortar bedding on ridge tiles"
    ],
    solutions: [
      "Locate all cracked/displaced tiles with a drone survey",
      "Replace individual tiles (colour-matched)",
      "Re-bed loose ridge caps with fresh polymer mortar",
      "Seal any hairline cracks with UV-stable sealant"
    ],
    whenToCall: [
      "You've seen a leak after heavy rain",
      "Tiles are visibly missing from the ground",
      "The house is 20+ years old"
    ],
    faqs: [
      { q: "Can you match my old roof tile colour?", a: "Yes — we source from Monier, Malaysian Mosaics and other common Malaysian brands. Very old tiles may need close-match rather than exact match." },
      { q: "Should I replace the whole roof?", a: "Only if 30%+ of tiles are damaged, or the underlay is compromised. Most homes need only spot repair + ridge re-bed." },
      { q: "How much for a full roof inspection?", a: "Standard roof inspection (drone + ground survey + written report): RM 250 to RM 450 depending on roof access and size." }
    ]
  },

  // ── KITCHEN CABINET extras ───────────────────────────────────────────────
  {
    slug: "cabinet-door-sagging",
    serviceSlug: "kitchen-cabinet",
    title: "Kitchen Cabinet Doors Sagging or Misaligned",
    symptom: "Cabinet doors don't close flush, sag on one side, or rub against neighbouring doors.",
    costRange: "RM 150–RM 850+ depending on door count",
    urgency: "Low",
    causes: [
      "Worn or loose Blum/Hafele hinges",
      "Screws stripped in the cabinet body",
      "Door swelling from steam/humidity",
      "Cabinet body movement over time"
    ],
    solutions: [
      "Tighten hinge screws (or use longer screws)",
      "Replace worn hinges with soft-close Blum equivalents",
      "Adjust hinge screws for perfect door alignment",
      "Fill and re-drill stripped screw holes"
    ],
    whenToCall: [
      "Multiple doors are affected",
      "Hinges show visible movement or looseness",
      "You want to upgrade to soft-close hinges"
    ],
    faqs: [
      { q: "Should I replace all my hinges at once?", a: "If your cabinet is 5+ years old and one hinge failed, expect others to follow. Full hinge upgrade to soft-close typically RM 30 to RM 60 per door installed." },
      { q: "Can you match my existing hinge brand?", a: "Yes. Blum and Hafele are the two most common in Malaysia and readily available in both standard and soft-close variants." },
      { q: "How much for a full kitchen hinge upgrade?", a: "Typical 8-10 door kitchen: RM 350 to RM 620 for a complete soft-close hinge conversion." }
    ]
  },

  // ── CARPENTRY extras ─────────────────────────────────────────────────────
  {
    slug: "wardrobe-door-jamming",
    serviceSlug: "carpentry",
    title: "Wardrobe Door Jamming or Not Closing",
    symptom: "Sliding wardrobe doors stick on the track, or hinged doors won't shut without pushing hard.",
    costRange: "RM 180–RM 650+ depending on door type",
    urgency: "Low",
    causes: [
      "Dust and debris in sliding track",
      "Worn top or bottom rollers",
      "Door frame settlement",
      "Panels swollen from humidity"
    ],
    solutions: [
      "Vacuum and clean the sliding track",
      "Replace worn top/bottom rollers",
      "Realign the door frame with shim plates",
      "Plane the door edge if swelling has occurred"
    ],
    whenToCall: [
      "The door is off the track completely",
      "Rollers show visible flat spots",
      "Multiple wardrobe doors are affected"
    ],
    faqs: [
      { q: "Can I fix a sliding wardrobe door myself?", a: "Cleaning the track and adjusting rollers is DIY-friendly. Roller replacement usually needs a technician for proper alignment." },
      { q: "How much for wardrobe door repair?", a: "Standard sliding door realignment + track clean: RM 180 to RM 320. Roller replacement: RM 250 to RM 450 per door." },
      { q: "Should I replace instead of repair?", a: "For 8+ year-old built-in wardrobes with warped panels or missing spare parts, replacement is often more economical." }
    ]
  },

  // ── DOOR extras ──────────────────────────────────────────────────────────
  {
    slug: "digital-smart-lock-installation",
    serviceSlug: "door",
    title: "Digital / Smart Lock Installation on Existing Door",
    symptom: "You bought a Samsung, Yale, Kaadas or similar smart lock and need it installed on your current door properly.",
    costRange: "RM 250–RM 550+ per door",
    urgency: "Low",
    causes: [
      "New smart lock upgrade for security",
      "Old mechanical lock failing",
      "Landlord requirement change",
      "Airbnb / short-let management need"
    ],
    solutions: [
      "Verify door thickness and lock spec compatibility",
      "Chisel new mortise if the lock body dimensions differ",
      "Wire the battery pack and connect the mobile app",
      "Program access codes and test all modes"
    ],
    whenToCall: [
      "You're installing your first smart lock",
      "Your door is metal or a fire-rated door",
      "The lock spec doesn't match existing door prep"
    ],
    faqs: [
      { q: "Can any smart lock fit my door?", a: "Not always. Door thickness (35-55 mm typical), mortise/tubular type and material all matter. We check before installation." },
      { q: "How long does smart lock install take?", a: "Standard door: 45 to 90 minutes. Metal or fire-rated doors: 90 to 150 minutes." },
      { q: "Do you help set up the mobile app?", a: "Yes — we complete pairing with your phone, help set up user codes and fingerprint enrolment." }
    ]
  },

  // ── LOCKSMITH extras ─────────────────────────────────────────────────────
  {
    slug: "locked-out-of-house",
    serviceSlug: "locksmith",
    title: "Locked Out of Your House",
    symptom: "You've locked your keys inside or lost them, and you can't get into your house.",
    costRange: "RM 180–RM 550+ depending on lock type and time",
    urgency: "Emergency",
    causes: [
      "Keys locked inside",
      "Lost house keys",
      "Broken key stuck in cylinder",
      "Battery-dead smart lock with no backup key"
    ],
    solutions: [
      "Non-destructive lock picking (standard cylinders)",
      "Cylinder removal + replacement",
      "Broken key extraction",
      "Emergency battery jump for smart locks"
    ],
    whenToCall: [
      "You're locked out right now",
      "You have small children or pets inside",
      "It's night time and you're stranded"
    ],
    faqs: [
      { q: "How fast can you arrive for a lockout?", a: "Typical response time within KL/Selangor is 30 to 75 minutes. Late-night after-hours call: 60 to 90 minutes." },
      { q: "Will you damage my door?", a: "For 90% of standard cylinder locks, we use non-destructive picking. Only high-security or damaged locks may need the cylinder drilled." },
      { q: "How much does after-hours lockout cost?", a: "Standard lockout: RM 180 to RM 380. After-hours (10 PM - 6 AM): RM 350 to RM 650. Emergency uplift is explained before we arrive." }
    ]
  },

  // ── LIGHTING extras ──────────────────────────────────────────────────────
  {
    slug: "downlight-flickering",
    serviceSlug: "lighting",
    title: "LED Downlight Flickering or Dying Early",
    symptom: "LED downlights flicker on/off, dim intermittently, or die months after installation.",
    costRange: "RM 80–RM 320 per light",
    urgency: "Medium",
    causes: [
      "Cheap unbranded LED driver failing",
      "Incompatible dimmer switch",
      "Loose connection at the ceiling junction",
      "Voltage instability from TNB supply"
    ],
    solutions: [
      "Replace with premium branded LED (Philips, Osram, Panasonic)",
      "Upgrade to LED-compatible dimmer",
      "Tighten and insulate the junction box",
      "Install a whole-house surge protector"
    ],
    whenToCall: [
      "Multiple downlights are affected",
      "You had them installed less than 2 years ago",
      "You smell burning near the ceiling"
    ],
    faqs: [
      { q: "Are all LED downlights the same?", a: "No. Cheap unbranded LEDs die in 6-18 months. Branded (Philips, Osram, Panasonic) last 8-15 years with warranty." },
      { q: "How much for premium LED downlight retrofit?", a: "Branded LED downlight supply + install: RM 120 to RM 220 per point including the ST-licensed electrician." },
      { q: "Can I replace bulbs myself?", a: "For plug-in bulbs yes. Recessed LED downlights are hard-wired and should be replaced by a licensed electrician." }
    ]
  },

  // ── CEILING FAN extras ───────────────────────────────────────────────────
  {
    slug: "ceiling-fan-wobbling",
    serviceSlug: "ceiling-fan",
    title: "Ceiling Fan Wobbling or Making Noise",
    symptom: "Ceiling fan wobbles from side to side, or makes a clicking/humming noise while running.",
    costRange: "RM 150–RM 450 per fan",
    urgency: "Medium",
    causes: [
      "Fan blades out of balance",
      "Loose fan hook or ceiling mount",
      "Warped fan blade (heat/humidity)",
      "Worn bearing in the motor"
    ],
    solutions: [
      "Balance blades with a balancing kit",
      "Tighten the fan hook screws",
      "Replace warped blades (matched set)",
      "Full motor service or replacement"
    ],
    whenToCall: [
      "The fan is visibly moving up and down",
      "You can hear scraping or grinding",
      "The fan has fallen partially from the ceiling"
    ],
    faqs: [
      { q: "Is a wobbling ceiling fan dangerous?", a: "Yes — a wobbling fan can eventually pull the mount out of the ceiling. Get it checked within a week." },
      { q: "How much to balance a fan?", a: "Balancing + mount check: RM 150 to RM 250. Blade replacement: RM 250 to RM 450 depending on fan brand." },
      { q: "Should I upgrade to a DC motor fan?", a: "DC motor fans use 60% less power, are quieter and last longer. Upgrade cost: RM 850 to RM 1,800 installed." }
    ]
  },

  // ── EPOXY FLOORING extras ────────────────────────────────────────────────
  {
    slug: "epoxy-floor-yellowing",
    serviceSlug: "epoxy-flooring",
    title: "Epoxy Floor Yellowing or Fading",
    symptom: "Once-clear or coloured epoxy floor develops a yellow tint, especially in areas exposed to sunlight.",
    costRange: "RM 12–RM 28 per sq ft (topcoat refresh)",
    urgency: "Low",
    causes: [
      "Standard epoxy is not UV-stable",
      "West-facing window exposure",
      "Skylight or roof sunlight direct on floor",
      "Old age-related breakdown"
    ],
    solutions: [
      "Light abrasion of the existing epoxy surface",
      "Apply new UV-stable polyurethane topcoat",
      "Add UV-stable pigment layer if colour change desired",
      "Recoat every 5-7 years for high-UV areas"
    ],
    whenToCall: [
      "The yellowing is aesthetically unacceptable",
      "You're planning a business/showroom refresh",
      "You want to switch from epoxy to PU"
    ],
    faqs: [
      { q: "Why does epoxy yellow but polyurethane doesn't?", a: "Standard epoxy resin isn't UV-stable — aromatic bonds break down in sunlight. Polyurethane topcoats are UV-stable and stay clear." },
      { q: "Can I recoat epoxy without hacking?", a: "Yes — we lightly abrade the surface and apply a fresh PU or epoxy topcoat. Same-day dry, next-day use." },
      { q: "How long does an epoxy floor last?", a: "Interior areas: 8-15 years. High-UV areas: 3-5 years before recoat needed." }
    ]
  },

  // ── GLASS ALUMINIUM extras ───────────────────────────────────────────────
  {
    slug: "shower-screen-water-leak",
    serviceSlug: "glass-aluminium",
    title: "Shower Screen Leaking Water onto the Floor",
    symptom: "Water pools outside the shower screen after every use — from either the corner joint, bottom seal, or hinge line.",
    costRange: "RM 180–RM 850+ depending on screen size",
    urgency: "Medium",
    causes: [
      "Failed silicone at frame joints",
      "Missing or worn magnetic seal strip",
      "Frame not properly leveled during install",
      "Cracked glass corner allowing seepage"
    ],
    solutions: [
      "Strip and re-apply premium sanitary silicone",
      "Replace worn magnetic seal strips",
      "Adjust hinge alignment for proper closure",
      "Full screen replacement if glass is compromised"
    ],
    whenToCall: [
      "Water is leaking every shower use",
      "The seal strip is visibly torn or missing",
      "You have small children slipping on the wet floor"
    ],
    faqs: [
      { q: "Can I just re-silicone the shower screen myself?", a: "For small touch-ups yes. For a full reseal, professional cleaning + curing time makes a big difference in longevity." },
      { q: "How much to replace a shower screen seal?", a: "Magnetic seal strip replacement: RM 120 to RM 250. Full silicone reseal: RM 180 to RM 380 including drying time." },
      { q: "When should I replace the whole shower screen?", a: "If the glass is cracked, the frame is corroded, or the hinges have visible play, replacement (RM 850 to RM 2,400) is safer than repair." }
    ]
  },

  // ── CLEANING extras ──────────────────────────────────────────────────────
  {
    slug: "stubborn-bathroom-limescale",
    serviceSlug: "cleaning",
    title: "Stubborn Bathroom Limescale and Water Stains",
    symptom: "White chalky deposits and hard-water stains build up on shower glass, taps and tiles that regular cleaning won't remove.",
    costRange: "RM 180–RM 550+ per bathroom",
    urgency: "Low",
    causes: [
      "Hard water in Klang Valley (calcium deposits)",
      "Infrequent cleaning allowing buildup",
      "No water softener installed",
      "Rough tile surface trapping mineral deposits"
    ],
    solutions: [
      "Deep clean with mild acid-based descaler",
      "Steam clean grout lines",
      "Polish chrome and glass with specialist compound",
      "Recommend water softener for long-term prevention"
    ],
    whenToCall: [
      "Regular cleaning is no longer effective",
      "You're preparing for property viewing/sale",
      "You want a professional deep clean before Hari Raya / CNY"
    ],
    faqs: [
      { q: "Are your bathroom cleaning chemicals safe for family?", a: "Yes. We use eco-friendly descalers and always ventilate the bathroom fully. Chemical residue is fully rinsed before we leave." },
      { q: "How long does a deep bathroom clean take?", a: "Standard bathroom deep clean: 2 to 4 hours per bathroom depending on scale severity." },
      { q: "How to prevent limescale returning?", a: "Squeegee shower glass after every use, wipe taps weekly, and consider a whole-house water softener for long-term protection." }
    ]
  },

  // ── DEEP CLEANING extras ─────────────────────────────────────────────────
  {
    slug: "move-out-condo-deep-clean",
    serviceSlug: "deep-cleaning",
    title: "Move-Out Condo Deep Cleaning",
    symptom: "You're moving out and need the condo cleaned to a standard the landlord/agent will accept for your deposit refund.",
    costRange: "RM 420–RM 1,800+ depending on unit size",
    urgency: "Medium",
    causes: [
      "Standard tenant wear and tear",
      "Grease buildup in kitchen",
      "Bathroom scale buildup",
      "Marks on walls from furniture and hooks"
    ],
    solutions: [
      "Full room-by-room deep cleaning",
      "Wall spot-cleaning for scuff marks",
      "Kitchen degrease including stove and hood",
      "Bathroom deep clean with descaler",
      "Final inspection walkthrough with landlord/agent"
    ],
    whenToCall: [
      "You have less than a week before handover",
      "You want maximum deposit refund",
      "The unit is 800+ sq ft"
    ],
    faqs: [
      { q: "Do you handle wall touch-ups too?", a: "Basic scuff removal is included. Actual repainting is quoted separately if the wall damage is beyond cleaning." },
      { q: "How much for a 3-bed condo move-out clean?", a: "Typical 900-1200 sq ft condo: RM 850 to RM 1,400 for a full deep clean including kitchen and 2 bathrooms." },
      { q: "Do you provide a receipt for the landlord?", a: "Yes — full itemised invoice with company details, ideal for deposit refund negotiations." }
    ]
  },

  // ── POST-RENOVATION CLEANING extras ──────────────────────────────────────
  {
    slug: "cement-splatter-tile-clean",
    serviceSlug: "post-renovation-cleaning",
    title: "Cement Splatter and Dust After Renovation",
    symptom: "Renovation is complete but cement/paint splatter, silicone residue and construction dust are everywhere.",
    costRange: "RM 650–RM 3,200+ depending on unit size",
    urgency: "Medium",
    causes: [
      "Standard renovation debris",
      "Silicone and adhesive drips",
      "Cement splatter on windows/tiles",
      "Fine dust throughout the unit"
    ],
    solutions: [
      "Full HEPA-vacuum of every surface",
      "Cement stain removal from tiles and glass",
      "Silicone residue scraping and solvent clean",
      "Full damp-mop and detail wipe-down",
      "Air-cleaning with HEPA filter units"
    ],
    whenToCall: [
      "Renovation just completed",
      "You need to move in within a week",
      "Contractor cleanup was inadequate"
    ],
    faqs: [
      { q: "Does the contractor's cleanup count as post-renovation cleaning?", a: "Rarely. Standard contractor cleanup is basic debris removal. Post-renovation deep clean gets your unit truly move-in-ready." },
      { q: "How long does post-renovation cleaning take?", a: "A standard 3-bed condo: 6-10 hours with a team of 2-3 cleaners. Larger units or heavy renovation: 1-2 full days." },
      { q: "How much to remove cement from bathroom tiles?", a: "Included in the deep-clean scope. Standalone cement removal (if needed as a follow-up): RM 250 to RM 550 per bathroom." }
    ]
  },

  // ── CCTV extras ──────────────────────────────────────────────────────────
  {
    slug: "cctv-not-recording-storage-full",
    serviceSlug: "cctv",
    title: "CCTV Not Recording or Showing Blank Feed",
    symptom: "Your CCTV cameras show no live feed, are stuck on a static image, or the DVR/NVR won't play back recordings.",
    costRange: "RM 180–RM 850+ depending on system fault",
    urgency: "High",
    causes: [
      "Hard drive full or failed",
      "Power supply failure to the DVR/NVR",
      "Network cable disconnected",
      "IP camera firmware issue"
    ],
    solutions: [
      "Test hard drive and replace if failed",
      "Replace DVR/NVR power supply",
      "Test and re-terminate network cables",
      "Firmware update via manufacturer app"
    ],
    whenToCall: [
      "You need CCTV for insurance/incident report",
      "Feed has been down more than 24 hours",
      "You suspect intentional tampering"
    ],
    faqs: [
      { q: "How long do CCTV hard drives last?", a: "Purpose-built CCTV hard drives (WD Purple, Seagate SkyHawk) typically last 4-7 years with 24/7 operation." },
      { q: "How much to replace a full 8-channel DVR system?", a: "Full 8-channel DVR + hard drive + install: RM 850 to RM 1,800 excluding cameras." },
      { q: "Can you recover footage from a failed DVR?", a: "For hard drive failures, professional data recovery can retrieve most footage — RM 350 to RM 1,200 depending on damage." }
    ]
  },

  // ── AUTOGATE extras ──────────────────────────────────────────────────────
  {
    slug: "autogate-remote-not-working",
    serviceSlug: "autogate",
    title: "Auto Gate Remote Not Working",
    symptom: "The auto gate remote no longer opens the gate, or works only intermittently from a very short distance.",
    costRange: "RM 120–RM 550+ depending on cause",
    urgency: "Medium",
    causes: [
      "Weak remote battery",
      "Receiver antenna corroded",
      "Remote code mismatch after motor reset",
      "Motor control board failure"
    ],
    solutions: [
      "Replace remote battery (CR2032 typical)",
      "Clean or replace receiver antenna",
      "Re-programme remote to the motor",
      "Replace control board if necessary"
    ],
    whenToCall: [
      "You've lost your remote and need a new one paired",
      "Multiple remotes stopped working at the same time",
      "The gate opens by itself intermittently"
    ],
    faqs: [
      { q: "Can any remote be paired to my gate?", a: "Only remotes matching your motor brand (SEIP, DEA, AutoGate, DASPI, etc.). We keep the common Malaysian codes in stock." },
      { q: "How much for a new autogate remote?", a: "Standard remote + programming: RM 120 to RM 250. Rolling-code remote: RM 250 to RM 380." },
      { q: "Should I upgrade to smartphone gate control?", a: "Wi-Fi gate controllers are RM 350 to RM 650 installed and let you open the gate from anywhere using an app." }
    ]
  },

  // ── WELDING extras ───────────────────────────────────────────────────────
  {
    slug: "loose-metal-gate-hinges",
    serviceSlug: "welding",
    title: "Loose or Sagging Metal Gate Hinges",
    symptom: "Your metal gate sags, drags on the ground, or the hinges are visibly loose or corroded.",
    costRange: "RM 250–RM 1,200+ depending on gate size",
    urgency: "Medium",
    causes: [
      "Original hinge weld failed",
      "Rust corroded the hinge pin",
      "Gate weight exceeded original spec",
      "Concrete post movement"
    ],
    solutions: [
      "Grind out old weld and clean surface",
      "Weld heavy-duty replacement hinges",
      "Prime and paint the welded area",
      "Add mid-span support if the gate is unusually wide"
    ],
    whenToCall: [
      "The gate is dragging on the ground",
      "You can see rust flakes at the hinge",
      "The gate is close to detaching from the post"
    ],
    faqs: [
      { q: "Can you weld on-site?", a: "Yes. We bring portable arc/MIG welders and can complete most gate hinge repairs in 2-4 hours on-site." },
      { q: "Will the welded area rust again?", a: "Not if properly primed with rust-inhibiting primer + 2 coats of enamel paint — typical warranty 12-24 months." },
      { q: "Should I replace the whole gate?", a: "Only if the frame is heavily rusted. Hinge-only repair (RM 350 to RM 850) usually restores the gate for another 10-15 years." }
    ]
  },

  // ── WINDOW REPAIR extras ─────────────────────────────────────────────────
  {
    slug: "stuck-sliding-window",
    serviceSlug: "window-repair",
    title: "Sliding Window Stuck or Jamming",
    symptom: "Aluminium sliding windows won't slide, need excessive force, or come off the track when moved.",
    costRange: "RM 180–RM 550+ per window",
    urgency: "Low",
    causes: [
      "Dust and dirt in the track",
      "Worn or broken roller wheels",
      "Frame corrosion from coastal moisture",
      "Weight of glass distorting the frame"
    ],
    solutions: [
      "Vacuum and lubricate the track",
      "Replace worn nylon rollers",
      "Straighten distorted frame with careful adjustment",
      "Install anti-corrosion coating"
    ],
    whenToCall: [
      "You've had the windows more than 10 years",
      "Rollers are visibly cracked or missing",
      "Frame is corroded to the point of flaking"
    ],
    faqs: [
      { q: "Can I fix a stuck sliding window myself?", a: "Track cleaning and lubricating are DIY-friendly. Roller replacement usually requires lifting the window sash — better done professionally." },
      { q: "How much to replace sliding window rollers?", a: "Standard replacement: RM 180 to RM 320 per window including new rollers and track lubrication." },
      { q: "Should I upgrade to casement windows instead?", a: "Casement (crank) windows seal better and are more secure. Full conversion: RM 850 to RM 1,800 per window." }
    ]
  }
];
