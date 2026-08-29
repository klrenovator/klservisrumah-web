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
    ],
    overview: "Uneven walls are a finishing problem that paint cannot fix. Bumps, dips, and ridges come from old textured paint, years of patch repairs, or plaster that was never floated flat — and they become obvious the moment a clean new colour is applied, because flat paint shows every shadow. A full skim coat is the standard fix: a thin layer of plaster over the whole wall, sanded flat before painting.",
    diyChecks: [
      "Shine a torch along the wall at a low angle — sidelight reveals every bump and dip",
      "Run a straightedge (or a long level) across the wall to find hollows deeper than about 3 mm",
      "Check if the unevenness is texture (old paint) or movement (cracks, swelling)",
      "Press on suspect patches — loose or hollow repair areas must be removed before skimming"
    ],
    prevention: [
      "When renovating, request a skim coat in the painting scope instead of 'spot filler'",
      "Use a sealer between old paint and new skim so the plaster bonds properly",
      "Fix moisture issues first — skim over damp walls will blister and fail",
      "For rentals, agree on the wall finish standard before the work starts"
    ],
    costDetail: "Skim coating is quoted per square foot — roughly RM5–RM12 depending on wall condition, access, and whether a second coat is needed. A typical master bedroom runs RM400–RM1,200. Spot repairs are cheaper but leave visible patches; full-wall skim gives the flat premium finish."
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
    ],
    overview: "A wardrobe door that jams is usually a track or roller problem, not a carpentry problem. Sliding doors collect dust and grit that grind the rollers flat; hinged doors swell with humidity or the frame settles out of square. The longer a jammed door is forced, the more damage it does — rollers wear flat, tracks bend, and door edges split.",
    diyChecks: [
      "Vacuum the sliding track completely — grit is the most common cause of sticking doors",
      "Lift the door slightly and release: free vertical movement means worn rollers, not a track problem",
      "For hinged doors, check the hinges and the gap along the closing edge for swelling",
      "Do not force a stuck door shut — a split panel edge is far more expensive than a roller"
    ],
    prevention: [
      "Clean wardrobe tracks twice a year, before and after the monsoon humidity",
      "Keep wardrobes away from direct air-conditioner airflow that causes condensation",
      "Fix a sticking door at the first sign — rollers and tracks wear fast once they start grinding",
      "Store heavy items low and balanced so the frame does not rack"
    ],
    costDetail: "Track cleaning and realignment starts around RM180. Roller replacement runs RM250–RM450 per door; re-hanging hinged doors with new hinges is similar. If panels have swelled or split, replacement may cost more than repair — we check the door condition before quoting."
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
    ],
    overview: "Being locked out is one of the few genuine home emergencies — it can leave children or pets unattended, or you stranded outside at night. In most cases the lock is not damaged at all; the problem is access. A good locksmith will open a standard cylinder non-destructively, and only drill or remove the cylinder when the lock is high-security, seized, or already broken.",
    diyChecks: [
      "Check windows and side doors you may have left unlocked — but never climb balconies to get in",
      "Check with family members or neighbours who may hold a spare key",
      "If you have a smart lock, try the backup key, code, or a power-bank jump on the external terminal",
      "Call before you force anything — a damaged lock and door costs more than the callout"
    ],
    prevention: [
      "Hide a spare key with a trusted neighbour, not under the doormat",
      "Fit a key safe or a smart lock with a backup code for family access",
      "Replace worn keys before they snap inside the cylinder",
      "Keep a locksmith's number saved before you need it"
    ],
    costDetail: "Standard daytime lockout with non-destructive opening runs RM180–RM380. After-hours (10 PM–6 AM) and weekends cost more, toward RM550+; cylinder replacement or drilling damaged locks adds parts. We confirm the price before arrival and show the opening method before work."
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
    ],
    overview: "Flickering LED downlights are almost always a driver or connection problem, not a bulb problem. The cheap unbranded drivers used in budget installations fail within months, dimmer switches not designed for LEDs cause strobing, and loose connections in ceiling junction boxes create heat as well as flicker — which is why this should be checked rather than ignored.",
    diyChecks: [
      "Note whether one light or several flicker — several usually points to a circuit or dimmer issue",
      "Check the dimmer: standard dimmers often cannot control LED loads correctly",
      "Turn the light off at the switch and feel the trim — unusual heat around one fitting needs a check",
      "Take a photo of the fitting brand and model before calling, so the right replacement can be prepared"
    ],
    prevention: [
      "Specify branded LED drivers and fittings (Philips, Osram, Panasonic) for new installations",
      "Use LED-compatible dimmers if you want dimming at all",
      "Have junction connections checked when renovating, not just the light changed",
      "Keep a record of installation dates — fittings that fail within warranty should be claimed"
    ],
    costDetail: "Swapping a failed driver or fitting runs about RM80–RM320 per light depending on brand and trim type. Whole-house surge protection or rewiring a ceiling junction raises the total; ST-licensed electrician work is included in every quote. We match the existing fitting style where possible."
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
    ],
    overview: "A CCTV system that shows live video but records nothing is a storage or power fault, and it is easy to miss — the live view looks fine, so most people only discover the problem when they need footage for an incident or insurance report. The usual causes are a full or failed hard drive, a DVR/NVR power supply that drops under load, a loose cable, or a camera that has frozen and stopped sending frames.",
    diyChecks: [
      "Check the DVR/NVR menu for hard-drive status and free space — a full drive stops recording silently",
      "Check the recording schedule: some systems stop recording after firmware updates",
      "Reboot the DVR/NVR once — frozen recorders often resume after a clean restart",
      "Check all camera feeds individually; one frozen camera on the grid is easy to miss"
    ],
    prevention: [
      "Use surveillance-grade hard drives (WD Purple, Seagate SkyHawk) designed for 24/7 writes",
      "Set the recording schedule to overwrite old footage automatically",
      "Test playback monthly — check last week's recording, not just the live view",
      "Put the DVR/NVR on a surge-protected socket; power failures corrupt drives"
    ],
    costDetail: "A hard-drive or power-supply replacement with testing starts around RM180–RM400. A full 8-channel DVR + drive + install runs RM850–RM1,800; data recovery from a failed drive is quoted separately (RM350–RM1,200) depending on damage. We test the whole system before leaving so recording is confirmed working."
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
  },
  // ── AIRCON problems ─────────────────────────────────────────────────────
  {
    slug: "aircon-not-cold",
    serviceSlug: "aircon",
    title: "Aircon Not Cold (Warm Air Blowing)",
    symptom: "The aircon runs but blows warm or only slightly cool air, so the room never reaches the set temperature.",
    costRange: "RM 129–RM 455 depending on the cause",
    urgency: "Medium",
    causes: [
      "Refrigerant gas low or leaking",
      "Evaporator coil blocked with dust",
      "Dirty air filter restricting airflow",
      "Faulty compressor or temperature sensor"
    ],
    solutions: [
      "Clean the air filter and evaporator coil",
      "Run a leak check and top up refrigerant to the correct PSI",
      "Replace a faulty temperature sensor or thermistor",
      "Repair or replace the compressor if it has failed"
    ],
    whenToCall: [
      "The unit runs all day without cooling",
      "Gas was topped up recently but the air is still warm",
      "There is hissing or frost forming on the pipes"
    ],
    faqs: [
      { q: "Why is my aircon blowing warm air?", a: "The most common causes are low refrigerant, a blocked coil or filter, or a failing compressor. A technician can diagnose it on site within 30–60 minutes." },
      { q: "Is topping up gas always the fix?", a: "Not always. If there is a leak, topping up alone is temporary — the leak must be found and sealed first." },
      { q: "How much does fixing a not-cold aircon cost?", a: "Basic servicing starts from RM 129, gas top-up from RM 2.50 per PSI, and compressor repair from RM 1,040. The final price depends on the actual cause." },
      { q: "Can I keep using a warm aircon?", a: "It is better to stop and get it checked. Running a unit that is low on gas or has a blocked coil wastes electricity and can damage the compressor." }
    ]
  },
  {
    slug: "aircon-water-leaking",
    serviceSlug: "aircon",
    title: "Aircon Water Leaking (Indoor Unit Dripping)",
    symptom: "Water drips from the indoor unit or runs down the wall, usually from a blocked drain or a tilted unit.",
    costRange: "RM 129–RM 455 depending on the cause",
    urgency: "Medium",
    causes: [
      "Blocked or dirty drain pipe",
      "Clogged air filter causing ice to form and melt",
      "Drain pump failure (cassette units)",
      "Unit tilted the wrong way or poorly installed"
    ],
    solutions: [
      "Clear and flush the drain pipe",
      "Clean the filter and coil to stop icing",
      "Replace a failed drain pump",
      "Re-level the indoor unit and check the installation"
    ],
    whenToCall: [
      "Water is dripping onto furniture or flooring",
      "The wall shows water stains below the unit",
      "Water leaks even right after servicing"
    ],
    faqs: [
      { q: "Why does water drip from my aircon?", a: "It is usually a blocked drain pipe or a dirty filter causing ice that melts and overflows the tray. A chemical wash or overhaul clears it." },
      { q: "Is aircon water leakage dangerous?", a: "It can damage walls, flooring and furniture, and promote mould. It should be fixed before the damage spreads." },
      { q: "Will a chemical wash stop the leak?", a: "Often yes, if the cause is a dirty coil and blocked drain. If the drain pump or installation is faulty, that needs a separate repair." },
      { q: "How fast can you fix a leaking aircon?", a: "Most leak causes are fixed in a single visit. Severe blockages or a failed drain pump may need a follow-up part replacement." }
    ]
  },
  {
    slug: "aircon-making-noise",
    serviceSlug: "aircon",
    title: "Aircon Making Noise (Rattling, Buzzing, Grinding)",
    symptom: "The indoor or outdoor unit makes rattling, buzzing, humming or grinding noises during operation.",
    costRange: "RM 195–RM 455 depending on the faulty part",
    urgency: "Medium",
    causes: [
      "Loose panels, screws or brackets",
      "Debris or ice on the blower fan",
      "Worn fan motor bearings",
      "Failing compressor or contactor"
    ],
    solutions: [
      "Tighten loose panels and mounts",
      "Clean debris from the fan and coil",
      "Replace a worn fan motor",
      "Replace a failing contactor or compressor"
    ],
    whenToCall: [
      "The noise is getting louder over time",
      "There is a grinding or metallic sound",
      "The outdoor unit vibrates excessively"
    ],
    faqs: [
      { q: "Is a noisy aircon dangerous?", a: "It is not immediately dangerous, but a grinding fan motor or failing compressor will get worse and cost more to fix if ignored." },
      { q: "What does a grinding noise mean?", a: "Grinding usually points to worn fan motor bearings or debris caught in the blower. It should be checked before the motor seizes." },
      { q: "How much to fix a noisy aircon?", a: "Tightening and cleaning starts from RM 129. Fan motor replacement starts from RM 390, and a compressor from RM 1,040." },
      { q: "Can a service quiet a noisy unit?", a: "Yes, if the noise is from dirt or loose parts. A chemical wash or basic service often resolves rattling and vibration." }
    ]
  },
  {
    slug: "aircon-bad-smell",
    serviceSlug: "aircon",
    title: "Aircon Bad Smell (Mouldy or Musty Odour)",
    symptom: "The aircon blows a musty, mouldy or sour smell into the room, especially when it first starts.",
    costRange: "RM 156–RM 455 depending on the treatment",
    urgency: "Low",
    causes: [
      "Mould and bacteria on the evaporator coil",
      "Stagnant water in the drain tray",
      "Dirty blower wheel",
      "Dust and debris trapped in the filter"
    ],
    solutions: [
      "Clean and sanitise the coil and blower",
      "Flush the drain tray and pipe",
      "Apply an anti-microbial treatment",
      "Deep-clean with a chemical wash or overhaul"
    ],
    whenToCall: [
      "The smell persists after cleaning the filter",
      "Mould is visible on the vents",
      "The smell triggers allergies or breathing irritation"
    ],
    faqs: [
      { q: "Why does my aircon smell bad?", a: "Mould and bacteria grow on the damp coil and blower, then blow into the room. A chemical wash removes the source." },
      { q: "Is the smell dangerous for my family?", a: "Mouldy air can irritate allergies and breathing. Cleaning the coil and drain removes the odour and improves air quality." },
      { q: "Will a basic service remove the smell?", a: "Sometimes, but a pressure chemical wash or chemical overhaul is usually needed to fully sanitise the coil and blower." },
      { q: "How do I stop the smell coming back?", a: "Service the unit every 3–6 months, keep the filter clean, and run the fan-only mode for a few minutes before switching off." }
    ]
  },
  {
    slug: "aircon-weak-airflow",
    serviceSlug: "aircon",
    title: "Aircon Weak Airflow (Not Blowing Strong Enough)",
    symptom: "The aircon cools but the airflow is weak, so the room stays warm even at the highest fan speed.",
    costRange: "RM 129–RM 455 depending on the cause",
    urgency: "Medium",
    causes: [
      "Clogged air filter",
      "Dirty or iced evaporator coil",
      "Failing indoor blower motor",
      "Blocked or undersized ducting"
    ],
    solutions: [
      "Clean or replace the air filter",
      "Wash the evaporator coil to restore airflow",
      "Replace a weak blower motor",
      "Check and clear the ducting or vents"
    ],
    whenToCall: [
      "Airflow drops even at maximum fan speed",
      "The unit is noisy while blowing weakly",
      "Some rooms never reach temperature"
    ],
    faqs: [
      { q: "Why is my aircon airflow so weak?", a: "A clogged filter or dirty coil is the most common cause, followed by a weakening blower motor. Cleaning usually restores it." },
      { q: "How often should I clean the filter?", a: "Every 2–4 weeks for heavy use. A clogged filter starves the coil of air and forces the unit to work harder." },
      { q: "Does weak airflow mean I need a new aircon?", a: "Not usually. Most cases are fixed with cleaning or a blower motor replacement. Only very old units may not be worth repairing." },
      { q: "How much to fix weak airflow?", a: "Basic servicing starts from RM 129. If the blower motor needs replacing, it starts from RM 455." }
    ]
  },
  {
    slug: "aircon-not-turning-on",
    serviceSlug: "aircon",
    title: "Aircon Not Turning On",
    symptom: "The aircon does not respond to the remote or the power button, or it switches off by itself shortly after starting.",
    costRange: "RM 114–RM 455 depending on the fault",
    urgency: "High",
    causes: [
      "Tripped breaker or blown fuse",
      "Faulty remote or receiver board",
      "Failed capacitor or contactor",
      "Faulty PCB control board"
    ],
    solutions: [
      "Check the breaker and power supply",
      "Test and replace the remote or receiver",
      "Replace a failed capacitor or contactor",
      "Repair or replace the PCB control board"
    ],
    whenToCall: [
      "The unit is completely dead",
      "It turns off by itself repeatedly",
      "There is a burning smell or tripping breaker"
    ],
    faqs: [
      { q: "Why won't my aircon turn on?", a: "It could be a tripped breaker, a dead remote, a failed capacitor or a faulty PCB. A diagnostic visit from RM 114 pinpoints it." },
      { q: "Is the diagnostic fee refundable?", a: "The diagnostic fee is waived if we repair the unit during the same visit." },
      { q: "Can a power surge kill an aircon?", a: "Yes. Surges often damage the PCB control board or capacitor. A surge protector on the dedicated circuit helps prevent it." },
      { q: "How much to fix an aircon that won't turn on?", a: "Capacitor replacement starts from RM 195 and PCB repair from RM 455. The final price depends on the part that failed." }
    ]
  },
  {
    slug: "aircon-tripping-mcb",
    serviceSlug: "aircon",
    title: "Aircon Tripping MCB / Circuit Breaker",
    symptom: "The aircon trips the MCB or RCCB circuit breaker whenever it starts, cutting power to the room.",
    costRange: "RM 195–RM 1,040 depending on the fault",
    urgency: "High",
    causes: [
      "Failing compressor drawing excess current",
      "Shorted capacitor or wiring",
      "Undersized breaker or shared circuit",
      "Moisture ingress into the outdoor unit"
    ],
    solutions: [
      "Test the compressor current draw",
      "Replace a shorted capacitor",
      "Install a correctly sized dedicated breaker",
      "Dry and seal the outdoor electrical connections"
    ],
    whenToCall: [
      "The breaker trips every time the aircon starts",
      "Other appliances on the same circuit are affected",
      "There is a burning smell near the unit"
    ],
    faqs: [
      { q: "Why does my aircon trip the breaker?", a: "Usually a failing compressor, a shorted capacitor, or an undersized circuit. It should be checked by a technician to avoid a fire risk." },
      { q: "Is it safe to keep resetting the breaker?", a: "No. Repeated tripping means a real electrical fault. Keep resetting it and you risk overheating the wiring." },
      { q: "Do I need an electrician or an aircon tech?", a: "An aircon technician diagnoses the unit side while an electrician checks the circuit. We coordinate both when needed." },
      { q: "How much to fix a tripping aircon?", a: "A capacitor replacement starts from RM 195, while a compressor replacement starts from RM 1,040." }
    ]
  },
  {
    slug: "ice-forming-on-aircon",
    serviceSlug: "aircon",
    title: "Ice Forming on Aircon (Frozen Coil or Pipes)",
    symptom: "Frost or ice builds up on the evaporator coil or the copper pipes, and the unit stops cooling properly.",
    costRange: "RM 129–RM 455 depending on the cause",
    urgency: "Medium",
    causes: [
      "Low refrigerant gas",
      "Dirty filter or blocked coil",
      "Blower fan running too slowly",
      "Thermostat or sensor fault"
    ],
    solutions: [
      "Defrost the unit and clean the coil",
      "Top up refrigerant after a leak check",
      "Replace a failing blower motor",
      "Replace a faulty temperature sensor"
    ],
    whenToCall: [
      "Ice is visible on the pipes or coil",
      "The unit thaws and re-freezes repeatedly",
      "Water drips as the ice melts"
    ],
    faqs: [
      { q: "Why is there ice on my aircon?", a: "Ice forms when the coil gets too cold — usually from low gas, a blocked coil, or poor airflow over the coil." },
      { q: "Should I turn the unit off if it's frozen?", a: "Yes. Switch to fan-only or off to let it defrost, then book a service to find and fix the cause." },
      { q: "Does ice damage the aircon?", a: "Over time ice can damage the coil and compressor. It also means the unit is not cooling efficiently." },
      { q: "How much to fix a frozen aircon?", a: "Cleaning starts from RM 129, and gas top-up from RM 2.50 per PSI. A full chemical wash starts from RM 156." }
    ]
  },
  {
    slug: "aircon-remote-display-issue",
    serviceSlug: "aircon",
    title: "Aircon Remote or Display Not Working",
    symptom: "The remote control does not respond, or the unit's display shows error codes, flickers or goes blank.",
    costRange: "RM 114–RM 455 depending on the fault",
    urgency: "Low",
    causes: [
      "Flat or corroded remote batteries",
      "Faulty remote sensor or receiver board",
      "Loose display wiring or connector",
      "Faulty main PCB"
    ],
    solutions: [
      "Replace the remote batteries",
      "Test and replace the remote or receiver",
      "Reseat the display connector",
      "Repair or replace the PCB control board"
    ],
    whenToCall: [
      "The remote works only at very close range",
      "The display shows an error code",
      "The display flickers or stays blank"
    ],
    faqs: [
      { q: "Why is my aircon remote not working?", a: "Start with fresh batteries. If it still fails, the remote's infrared sensor or the unit's receiver board is likely faulty." },
      { q: "What do aircon error codes mean?", a: "Each brand has its own codes, but most point to sensor, gas, or PCB faults. A technician can read and resolve them." },
      { q: "Can you replace just the remote?", a: "Yes. Universal or brand-matched remotes are available, and we can program them to your unit." },
      { q: "How much to fix a remote or display issue?", a: "Diagnosis starts from RM 114, a replacement remote is inexpensive, and PCB repair starts from RM 455." }
    ]
  },
  // ── RENOVATION & CONNECTED-TRADE DIAGNOSTIC extras ─────────────────────
  {
    slug: "popping-tiles-buckling",
    serviceSlug: "tiling",
    title: "Popping or Buckling Floor Tiles (Jubin Meletup)",
    symptom: "Floor tiles suddenly lift, tent upwards in an inverted V-shape, or pop with loud cracking sounds due to thermal expansion, trapped moisture, or screed debonding.",
    costRange: "RM 350–RM 2,800+ depending on affected tile count, subfloor condition, and replacement scope",
    urgency: "High",
    causes: [
      "Thermal expansion without adequate expansion joints or perimeter buffer gaps",
      "Moisture trapped beneath tile screed causing vapor pressure debonding",
      "Subfloor concrete slab movement, structural settlement, or poor adhesive coverage",
      "Tiles installed using dry-pack mortar without proper bonding slurry or latex additive"
    ],
    solutions: [
      "Safely remove buckled tiles and relieve perimeter pressure immediately",
      "Hack away old hollow screed down to the solid concrete subfloor",
      "Re-screed with high-bond polymer-modified mortar and proper perimeter movement joints",
      "Re-lay replacement porcelain or ceramic tiles with full back-buttering adhesive coverage"
    ],
    whenToCall: [
      "Multiple tiles have popped up, creating a sharp tripping and cutting hazard",
      "Loud popping sounds are heard as tiles continue to tent across the living room or hallway",
      "Tiles are hollow around the buckled area and at risk of sudden explosive lifting"
    ],
    faqs: [
      { q: "Why do floor tiles pop or buckle suddenly in Malaysia?", a: "Malaysia's tropical heat and humidity cause tile expansion. Without expansion joints, thermal movement creates compressive stress that forces tiles upward away from debonded screed." },
      { q: "Can popped tiles be glued back directly without hacking?", a: "No. The underlying cement bed is usually hollow or crumbled. Re-gluing without hacking the failed screed will cause the new tiles to pop again quickly." },
      { q: "How do you prevent popping tiles during a renovation?", a: "Ensure perimeter expansion gaps (5–8mm) along walls hidden under skirting, use flexible polymer-modified tile adhesive, and back-butter each tile for 100% adhesive contact." },
      { q: "How much does it cost to repair popped tiles in KL and Selangor?", a: "Localized repairs for a small patch start from around RM 350 to RM 600, while re-hacking and re-tiling larger living halls range from RM 1,200 to RM 2,800+ depending on tile size." }
    ]
  },
  {
    slug: "damaged-gypsum-partition-wall",
    serviceSlug: "plaster-ceiling",
    title: "Damaged Gypsum Partition Wall or Holes",
    symptom: "Gypsum drywalls or office partition walls show impact holes, dented corners, sagging stud framing, or moisture-softened board sections.",
    costRange: "RM 180–RM 1,200+ depending on hole size, stud frame damage, and repainting scope",
    urgency: "Medium",
    causes: [
      "Direct physical impact from furniture moves, door handles, or heavy items",
      "Moisture exposure from floor washing or hidden pipe drips softening gypsum core",
      "Inadequate galvanized stud framing spacing or loose self-drilling screws",
      "Heavy wall-mounted fixtures (cabinets, TVs) installed without backing timber or heavy-duty anchors"
    ],
    solutions: [
      "Cut damaged drywall cleanly to adjacent stud centers for rectangular backing support",
      "Reinforce or replace deformed C-stud and U-track metal framing",
      "Install replacement moisture-resistant or standard gypsum board patch with self-adhesive mesh tape",
      "Apply multi-layer skim coat plastering, feather edges, sand smooth, and prime before painting"
    ],
    whenToCall: [
      "Hole exceeds 15cm (6 inches) across or extends across metal framing studs",
      "Partition wall wobbles, flexes noticeably, or feels loose when pushed",
      "Gypsum board has softened, crumbled, or grown mold from water seepage"
    ],
    faqs: [
      { q: "Can a hole in a gypsum partition wall be repaired invisibly?", a: "Yes. Professional drywall repair uses timber backing, bevelled gypsum patches, fiber joint tape, and multi-layer feathered skim coating to create a completely seamless finish after painting." },
      { q: "What causes gypsum partition walls to soften or crumble at the base?", a: "Regular floor mopping without baseboard skirting or water seepage from nearby bathrooms allows water to wick into the gypsum core, breaking down the plaster structure." },
      { q: "Can I hang a TV or heavy shelf on a repaired gypsum partition?", a: "Heavy items should be anchored directly into the metal C-studs or reinforced with plywood backing installed behind the drywall during repair, not into hollow plasterboard." },
      { q: "How much does gypsum partition wall repair cost in KL & Selangor?", a: "Small patch repairs (doorknob holes) start from RM 180–RM 300, while larger board replacements with stud reinforcement and repainting range from RM 450 to RM 1,200." }
    ]
  },
  {
    slug: "old-bathroom-plumbing-tiles",
    serviceSlug: "bathroom-renovation",
    title: "Aging Bathroom with Deteriorated Pipes & Tiles",
    symptom: "Outdated 15–25 year old bathroom suffers from rusty water, concealed pipe drips, porous worn tiles, stubborn lime stains, foul drain odors, and failing waterproofing.",
    costRange: "RM 800–RM 8,500+ depending on minor overhaul vs complete hacking and waterproofing re-build",
    urgency: "Medium",
    causes: [
      "Old galvanized iron (GI) pipes corroded internally, causing rust deposits and pinhole leaks",
      "Degraded waterproofing membrane beneath bathroom floor tiles allowing inter-floor seepage",
      "Porous, dated ceramic tiles with eroded grout lines harboring mold and dirty water",
      "Outdated sanitary fixtures and faulty P-trap floor drains allowing sewer gas backflow"
    ],
    solutions: [
      "Conduct pressure diagnostic and acoustic leak inspection on concealed supply lines",
      "Replace corroded GI pipes with corrosion-proof PPR or stainless-steel piping",
      "Complete bathroom hacking, subfloor leveling, and application of 3-layer elastomeric waterproofing membrane",
      "Re-tile with modern non-slip porcelain tiles and install water-efficient sanitaryware with anti-odor floor traps"
    ],
    whenToCall: [
      "Water pressure from shower and taps has dropped significantly with yellowish tint",
      "Lower-floor neighbour complains of damp stains or water dripping from ceiling slab",
      "Persistent sewer odor, loose floor tiles, or chronic mold despite frequent deep cleaning"
    ],
    faqs: [
      { q: "Is it better to repair an old bathroom piecemeal or do a full renovation overhaul?", a: "For bathrooms over 15–20 years old with concealed GI pipes and failing waterproofing, piecemeal repairs often lead to repeat leaks. A complete hack-and-replace renovation resolves piping, waterproofing, and aesthetics in one go." },
      { q: "How long does a full bathroom renovation overhaul take in KL?", a: "A standard condo or terrace bathroom renovation typically takes 7 to 12 working days, including hacking, pipe re-routing, 3-day waterproofing flood test, tiling, and sanitary installation." },
      { q: "Can bathroom renovation be done without hacking tiles?", a: "Overlaying tiles and chemical waterproofing can work for minor cosmetic upgrades, but if concealed pipes are leaking or the subfloor membrane is failed, hacking to the bare slab is necessary." },
      { q: "What is the typical cost to overhaul an old bathroom in KL & Selangor?", a: "Targeted pipe and fixture replacement starts from RM 800–RM 2,000, while a complete hack-down bathroom overhaul with new waterproofing, tiling, and sanitaryware ranges from RM 4,500 to RM 8,500+." }
    ]
  },
  {
    slug: "old-kitchen-cabinet-plumbing-damage",
    serviceSlug: "kitchen-renovation",
    title: "Water-Damaged Sink Cabinet & Aging Kitchen Layout",
    symptom: "Kitchen under-sink cabinet base is swollen, rotted, or termite-infested from chronic sink trap drips, while outdated electrical points and poor layout hinder cooking.",
    costRange: "RM 450–RM 8,000+ depending on sink base cabinet replacement vs comprehensive kitchen remodeling",
    urgency: "Medium",
    causes: [
      "Slow drips from sink bottle trap, flexible hose, or mixer tap base soaking chipboard or MDF",
      "Non-waterproof melamine or particle board base cabinets in wet kitchen environments",
      "Old grease-choked PVC waste pipes causing frequent kitchen sink backups",
      "Insufficient 13A/15A socket outlets and outdated DB circuits unable to support modern ovens and induction hobs"
    ],
    solutions: [
      "Replace rotted timber/MDF sink base with waterproof aluminium or solid plywood carcass with aluminium foil lining",
      "Re-plumb kitchen sink drainage with heavy-duty PVC piping, cleanout access, and leak-free brass bottle trap",
      "Upgrade kitchen electrical wiring with dedicated circuits for high-wattage appliances",
      "Reconfigure layout into efficient wet and dry kitchen zones with durable quartz or granite countertops"
    ],
    whenToCall: [
      "Under-sink cabinet bottom has collapsed or smells strongly of mold and rot",
      "Sink leaks repeatedly into the cabinet despite tightening DIY fittings",
      "Circuit breaker trips whenever multiple kitchen appliances (oven, air fryer, microwave) run together"
    ],
    faqs: [
      { q: "What is the best material for under-sink kitchen cabinets to prevent water damage?", a: "Aluminium carcasses or high-grade marine plywood with waterproof laminate and internal aluminium foil liners provide the best resistance against future plumbing drips." },
      { q: "Can I replace just the water-damaged sink base cabinet without redoing the entire kitchen?", a: "Yes. KL Servis Rumah can modularly dismantle and replace the damaged sink carcass while preserving your existing solid countertop and surrounding cabinets." },
      { q: "Do kitchen renovations require upgrading electrical points and wiring?", a: "Yes. Older kitchens often lack dedicated 15A/20A circuits for induction hobs, built-in ovens, and dishwashers. Upgrading wiring prevents dangerous MCB tripping." },
      { q: "How much does it cost to fix a water-damaged sink cabinet in KL?", a: "Sink plumbing leak repair and base reinforcement start from RM 450–RM 900, while custom waterproof aluminium sink cabinet replacement ranges from RM 1,200 to RM 2,800." }
    ]
  },
  {
    slug: "uneven-floor-subfloor-leveling",
    serviceSlug: "flooring",
    title: "Uneven Concrete Subfloor Before Flooring Installation",
    symptom: "Existing bare concrete slab or hacked subfloor has bumps, hollow dips, wave patterns, or height discrepancies exceeding 3mm, causing new tiles, SPC, or vinyl to bounce and click.",
    costRange: "RM 3.50–RM 12.00 / sq ft depending on leveling thickness and self-leveling compound required",
    urgency: "Medium",
    causes: [
      "Poor initial concrete slab casting or unlevel rough cement screeding",
      "Uneven tile hacking leaving chisel marks, mortar ridges, and hollow depressions",
      "Floor settlement over time causing sloped or concave subfloor sections",
      "Expansion joint ridges or improper floor transitions between rooms"
    ],
    solutions: [
      "Grind down high concrete ridges and bumps using diamond cup floor grinder",
      "Vacuum dust thoroughly and apply high-penetration acrylic bonding primer",
      "Pour polymer-modified self-leveling underlayment compound to achieve a flat, laser-level surface",
      "Verify flatness with a 2-meter straightedge (tolerance under 2mm over 2 meters) before installing SPC or tiles"
    ],
    whenToCall: [
      "Newly laid SPC click-lock or vinyl planks feel bouncy, hollow, or make clicking noises when walked on",
      "Subfloor height difference exceeds 3mm over a 1-meter span before flooring installation",
      "Water puddles in low spots during mopping or floor preparation"
    ],
    faqs: [
      { q: "Why must concrete subfloors be leveled before laying SPC or vinyl flooring?", a: "SPC click-lock and vinyl flooring are semi-rigid. If installed over dips or ridges, the locking tongue-and-groove joints experience cyclic stress, breaking and causing seams to separate." },
      { q: "What is self-leveling cement compound and how does it work?", a: "Self-leveling compound is a polymer-modified, free-flowing cementitious slurry that flows into low spots under gravity, curing into a dense, glassy-flat surface ready for flooring within 24 hours." },
      { q: "Can self-leveling compound be applied over old tiles?", a: "Yes, provided the existing tiles are solid, non-hollow, degreased, and treated with an epoxy or polymer bonding primer for mechanical adhesion." },
      { q: "How much does floor leveling and screeding cost in KL & Selangor?", a: "Minor cement patch leveling starts from RM 3.50–RM 5.50 per sq ft, while premium self-leveling underlayment ranges from RM 6.50 to RM 12.00 per sq ft depending on required thickness." }
    ]
  },
  {
    slug: "wall-cracks-settlement-masonry",
    serviceSlug: "house-renovation",
    title: "Masonry Wall Settlement Cracks & Extension Separation",
    symptom: "Diagonal stepped cracks appear across brick walls, vertical gap forms at the junction where a kitchen extension meets the main house, or window/door frames show diagonal shear cracks.",
    costRange: "RM 600–RM 4,500+ depending on non-structural settlement stitching vs structural underpinning inspection",
    urgency: "High",
    causes: [
      "Differential soil settlement beneath house extension footings or terrace foundations",
      "Lack of proper steel starter bars (dowel bars) tying extension brickwork to the original structural column",
      "Thermal expansion and contraction cycles between dissimilar building materials",
      "Vibration from nearby heavy road traffic or major construction piling"
    ],
    solutions: [
      "Conduct structural assessment to distinguish non-progressive settlement from active foundation failure",
      "Install helical stainless-steel crack stitches or rebar stitching across masonry joint lines",
      "Inject structural epoxy or non-shrink cementitious grout into deep brickwork cracks",
      "Apply flexible elastomeric sealant at extension expansion joints followed by mesh reinforcement and skim plaster"
    ],
    whenToCall: [
      "Crack width exceeds 3mm (coin thickness) or shows horizontal displacement or stepped brick pattern",
      "Separation gap between kitchen/porch extension and main house widens over time",
      "Doors or windows in the affected wall stick, jam, or cannot latch properly"
    ],
    faqs: [
      { q: "How do I know if a wall crack is cosmetic or structural?", a: "Cosmetic hairline cracks are usually under 1mm and stay within the plaster layer. Structural settlement cracks are wider (>3mm), step along brick mortar joints, go through the wall, or cause doors to stick." },
      { q: "Why do kitchen extensions often crack along the joint with the main house?", a: "New extensions settle at a different rate than the original decades-old house foundation. If starter rebar was omitted, thermal movement and soil settlement create a visible separation line." },
      { q: "Can a cracked brick wall be repaired permanently without rebuilding?", a: "Yes. Once settlement has stabilized, helical rebar stitching embedded in polymer resin locks the masonry together, followed by flexible joint sealing and skim coat repainting." },
      { q: "How much does masonry wall crack repair cost in KL & Selangor?", a: "Localized crack stitching and skim replastering start from RM 600–RM 1,200 per crack line, while extensive structural joint reinforcement and stabilization range from RM 2,200 to RM 4,500+." }
    ]
  }
];
