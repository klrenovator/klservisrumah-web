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
  }
];
