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
    ],
    overview: "White walls in Malaysian homes age yellow for three reasons at once: cheap emulsion with poor UV stability that simply cannot hold white, airborne kitchen grease and smoke that film the surface, and — on west-facing walls — the afternoon sun doing slow chemical work on the paint film. The giveaway is the pattern. Whole-house yellowing points at the paint system; yellow patches around the kitchen or windows point at grease, smoke, or sun; yellow that only returns after a fresh coat points at a sealer that was bleeding through. The fix is to remove the film, block the stain at the primer stage, and repaint with a paint that was actually formulated to stay white in a hot, humid, greasy climate.",
    diyChecks: [
      "Wash a test patch with mild detergent — if the white comes back, the yellow is surface film; if it stays, it has soaked into the coating",
      "Map the pattern: whole walls, kitchen-adjacent walls, or sun-facing walls each point to a different cause",
      "Check the sealer: if the yellow returns in weeks after a full repaint, the sealer itself is the culprit",
      "Rub the wall — a gritty, chalking feel means the topcoat has broken down and needs a full re-coat, not a touch-up",
    ],
    prevention: [
      "Use a premium UV-stable low-VOC acrylic for white walls — cheap emulsion is a 12-month yellow timer",
      "Run the kitchen extractor during and after cooking; grease film is the number one yellower indoors",
      "Add ventilation or UV film on west-facing windows so the paint film is not baking all afternoon",
      "Repaint white walls every 3–5 years rather than waiting for the cream colour to set in",
    ],
    costDetail: "A single room — clean, stain-block, and two coats of a premium white acrylic — runs RM400–RM900 depending on wall area and height. A whole-home repaint to restore white sits at RM2,000–RM3,500+ for a typical 3-bedroom, and the price moves up where the sealer needs replacing or the walls need full cleaning preparation. We match the paint system to the cause (UV, grease, or sealer bleed) rather than just the colour, and the work carries the standard warranty."
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
    ],
    overview: "Hairline cracks on painted walls are almost always the house moving, not the house failing. In the first 2–5 years a building settles, and the plaster, the paint film, and the cornice all flex at slightly different rates — the paint, being the least flexible layer, cracks first and most visibly. Add Malaysia's humidity cycling, where the walls breathe moisture in and out every day, and a few fine spidery lines around frames and junctions are normal. The cracks that matter are the wide ones (5 mm+), the diagonal ones that progress, and the ones that step along masonry joints — those are structural conversations, not paint conversations. For the cosmetic majority, the fix is to fill with a flexible filler and mesh tape, skim, and repaint — so the wall can keep moving without cracking again.",
    diyChecks: [
      "Measure the crack: under 1 mm is cosmetic filler territory; 1–3 mm needs filler plus mesh; 5 mm or more, or diagonal and progressive, needs a structural look first",
      "Check the pattern: a crack that is only at frames and junctions is movement; a crack that runs across a whole plain wall is worth a second look",
      "Touch the crack — if the plaster around it crumbles, there is moisture involved and the wall must dry before filling",
      "Photograph the crack with a ruler and a date; after a month, re-photograph and compare — a growing crack changes the conversation",
    ],
    prevention: [
      "Fill cosmetic cracks with a flexible acrylic filler plus mesh tape, not rigid putty — the wall keeps moving, the fill must move with it",
      "Repaint with a slightly more flexible acrylic topcoat on walls with a cracking history",
      "Keep the walls breathing: extract humidity in bathrooms and kitchens so the plaster does not cycle wet-dry daily",
      "In new homes, expect a touch-up round in year 2 and year 4 of settling — budget for it",
    ],
    costDetail: "A single cosmetic crack filled, taped, skinned, and repainted starts around RM150–RM300. A room-level pass — all hairline cracks filled and meshed, skimmed, primed, and repainted — runs RM500–RM1,200 depending on wall area and paint grade. Multiple rooms and whole-home crack passes are quoted per room with a discount. Where a crack is wide, diagonal, or progressive, we recommend a structural engineer's assessment before any fill, and the work carries the standard warranty."
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
    ],
    overview: "A leaking bathroom is the one leak that a Malaysian home can never afford to ignore, because the water is not staying in your walls — it is travelling, and it is travelling down. The floor membrane has failed at the grout lines, the slab, or a pipe joint, and the water now has a direct route to the ceiling and the walls of the floor below. The pattern tells you the source: a wet patch that grows after every shower is the floor surface; a constant damp wall beside the bathroom is a pipe or the shower screen seal; and a drip that continues with no water running is a pipe or a trap. The modern good news is that most of these can be stopped without hacking your tiles — PU grouting from below, or a no-hack coating where the failure is at the grout — and the active ones we attend same-day in the Klang Valley, usually within 45–90 minutes.",
    diyChecks: [
      "Time it: run the shower for 5 minutes and watch the wall or ceiling below for 30 — a direct darkening is the floor/slab",
      "Turn off the water supply and watch: a continuing drip with no water running points at a pipe or trap",
      "Tap-test the bathroom floor tiles — a hollow ring around a wet zone means the membrane has failed at that spot",
      "Check the silicone around the shower screen and tub: cracked, mouldy, or missing seal is a seepage path",
    ],
    prevention: [
      "Replace any cracked or mouldy silicone seal around the shower screen and tub yearly",
      "Re-grout the bathroom floor with sealed or epoxy grout every 3–5 years",
      "Fix any weeping pipe joint the week it is found, not the month",
      "In a condo, report a slow ceiling stain to the JMB early — the leak is cheapest to fix before it becomes a claim",
    ],
    costDetail: "Silicone resealing of the shower screen or tub runs RM180–RM350. PU grouting the slab from below — no tile hacking — runs RM350–RM1,500 depending on the leak line. Where the membrane has fully failed, the full re-waterproofing with tile hacking is the RM3,500–RM8,500 job for a standard bathroom. We diagnose the source first — pressure test for pipes, tap-test for the slab — and quote the method that matches the actual failure. Active leaks in the Klang Valley get a same-day dispatch, and the work carries the standard warranty."
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
    ],
    overview: "Low water pressure in a Malaysian home is a narrowing problem: somewhere between the mains and your tap, the flow path has gotten smaller. The classic causes, in order of how often we see them: a clogged shower-head or inlet filter (the cheap one), old galvanized pipes that have rusted their diameter away over 20+ years, a partially closed stop valve, a failing booster pump in a multi-storey house, or — rarely — a mains-side issue from the utility. The tell is the scope. One tap weak points at that tap's aerator or its local pipe run; the whole house weak points at the valve, the pump, or the main line; and pressure that dropped suddenly after road works points at the supply. The fix matches the cause — a RM50 filter swap or a RM2,000 pump — which is why the diagnosis comes first.",
    diyChecks: [
      "Unscrew the shower-head aerator and the tap filter and rinse them — a rusty mesh is the most common and the free fix",
      "Test one tap against the others: if only one is weak, the problem is local to that fixture",
      "Check the main stop valve: is it fully open? A valve a quarter-turn short of open halves the flow",
      "If the house has a pump, listen to it: a pump that runs constantly or makes noise is failing, not boosting",
    ],
    prevention: [
      "Rinse the shower-head and tap filters every 6–12 months — hard water clogs them quietly",
      "Know where your main stop valve is and keep it fully open",
      "In a 2+ storey home, service the booster pump yearly",
      "If you are replacing any pipe run, swap it to PPR or PEX — galvanized is a 20-year pressure timer",
    ],
    costDetail: "Diagnosis with a flow test at the main and at each fixture starts around RM150–RM200. Filter and valve fixes are the inexpensive end. Replacing a corroded pipe run with PPR or PEX is quoted by length and access, and a booster pump supply-and-install runs RM900–RM2,200 depending on the pump grade. We find the narrowing first and quote the smallest fix that restores the flow — so a RM50 filter is not sold as a pump. The work carries the standard warranty."
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
    ],
    overview: "A slow or clogged drain in a Malaysian kitchen or bathroom is almost always one of three things building up over months: grease in the kitchen P-trap and the horizontal run, hair in the bathroom traps, or — the one that surprises people — a foreign object (wet wipe, sanitary product, a lost bottle cap) that has worked its way into the toilet line. The tell is the pattern. A kitchen drain that slows after every fry points at grease. A bathroom drain that slows in weeks points at hair. A sudden total blockage with gurgling from another drain points at an object or a main-line problem. The fix depends on the cause: mechanical clearing first, enzyme treatment to keep it clean, and high-pressure jetting only where the line is badly crusted.",
    diyChecks: [
      "Note which fixtures are slow: one sink points local, several at once points to the shared line",
      "Run water into the slowest fixture and watch another drain — bubbling or rising water elsewhere marks the main line",
      "Check the P-trap under the sink for visible grease film or a partial blockage you can reach",
      "Smell: a sewage note (not just stale water) points below the trap, toward the main line",
    ],
    prevention: [
      "Never pour cooking grease down the sink — collect it in a jar and bin it",
      "Use a mesh strainer in every kitchen and bathroom drain",
      "Run hot water plus a monthly enzyme treatment to keep the line clean",
      "Flush only toilet paper in toilets — wet wipes and sanitary items are the classic main-line clog",
    ],
    costDetail: "Manual snaking or rodding of a single fixture starts around RM150–RM250. Where the kitchen line is badly crusted with grease, high-pressure water jetting of the full run runs RM350–RM700. A camera inspection is added where the blockage keeps returning, so the actual obstruction is seen and priced correctly. We clear the line mechanically first — strong caustic chemicals damage older PVC joints and make follow-up work unsafe — and the work carries the standard warranty."
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
    ],
    overview: "A toilet that flushes weakly, needs two or three presses, or keeps running after the flush is a mechanism problem, not a ceramic problem — and in a Malaysian home the parts that fail are predictable. The flapper valve wears out and no longer seals, so water runs quietly into the bowl and the tank never refills with enough pressure. The rim jets around the bowl edge clog with the hard lime scale that Malaysian water leaves behind, so the flush has less and less to push with. The fill valve's float drifts, and the S-trap under the floor clogs with sludge. Each of these is a small part and a small job; the only expensive outcome is choosing to replace a 15-year-old suite piecemeal for years instead of once.",
    diyChecks: [
      "Lift the cistern lid and watch a full flush: does the flapper seat fully, and does the tank empty in one confident pour?",
      "Check the running: if water flows into the bowl with the fill valve off, the flapper or the fill-valve seat is the leak",
      "Look at the rim jets — dark with scale and barely passing water means descaling is the fix",
      "Note the flush pattern: weak from all rim jets points at the tank mechanism; weak from one side can point at a partial S-trap blockage",
    ],
    prevention: [
      "Descale the cistern and rim jets every 12–18 months with a citric-acid or vinegar soak",
      "Replace the flapper and fill-valve seals at the first sign of running — they are cheap and a 10-minute job",
      "Keep the water soft where possible; hard water is what clogs the rim jets",
      "If you have replaced two or more parts in the last two years, price a new suite — the parts budget will pass the replacement budget",
    ],
    costDetail: "A flapper or fill-valve replacement with parts runs RM150–RM250. Rim-jet descaling and a cistern service sit in the same band. Where the S-trap or waste line is the problem, snaking or trap replacement adds to the job. A full suite replacement — removing the old unit, supply and install of a dual-flush suite, and disposal — runs RM550–RM1,800 depending on the suite grade. We identify the failing part first and quote the smallest fix that actually works, and the work carries the standard warranty."
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
    ],
    overview: "The crack where the ceiling meets the cornice is the most common cosmetic fault in Malaysian homes, and in the great majority of cases it is not structural. Plaster cornice, plasterboard ceiling, and brick wall all move at slightly different rates with temperature and humidity — and in a new house, the first 2–5 years of settling add their own movement. The old filler dries, shrinks, and cracks at that junction, and every repaint that skips the junction just paints over the crack instead of fixing it. The fix is a flexible one: rake out the loose material, fill with a flexible acrylic filler (and mesh tape where the gap is wide), then skim, prime, and paint so the junction can move without cracking again.",
    diyChecks: [
      "Measure the crack with a coin or ruler: under 3 mm is cosmetic filler territory; wider, or stepped, needs a structural look",
      "Check whether the crack is at every cornice junction or just one — every junction means movement; one junction means a local water or support problem",
      "Run a fingernail along the crack: if the plaster crumbles, moisture has softened it and the area needs drying or a leak fix first",
      "Watch the crack for a month: if it is widening, stop — that is an active-movement crack, not a cosmetic one",
    ],
    prevention: [
      "Fill cornice junctions with flexible acrylic filler plus mesh tape from the start, not rigid polyfilla",
      "Repaint the junction lightly with the wall and ceiling colour so movement does not show as a line",
      "Keep bathroom and kitchen exhaust fans running — humidity cycling is what cracks the filler",
      "Check all cornice lines in new homes once a year for the first five years of settling",
    ],
    costDetail: "Per-room cornice crack repair (rake out, flexible fill, mesh where needed, skim, prime, and repaint to match) runs RM200–RM380 for a bedroom and RM450–RM900 for a living room or longer ceiling line. Multiple rooms are quoted with a per-room discount. Where the cornice itself is detaching or water-damaged, we repair or replace the cornice section first, which is quoted on inspection. All work is finished with a matching paint film and covered by the standard warranty."
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
    ],
    overview: "In a condo, a leaking balcony is not just a leak — it is a legal relationship with the unit below. Under most Malaysian JMB rules the strata unit owner is responsible for the waterproofing of their own balcony, which means the downstairs neighbour's ceiling stain is your invoice, and the clock starts when the JMB serves the repair notice. The physical story is usually one of four: the acrylic or cementitious membrane has aged and cracked, the tile grout has let rain through for years, the balcony drain is blocked and water pools against the slab, or a hairline crack in the concrete is doing slow work during every monsoon. The good news: most of these can be fixed without hacking your tiles — grout the slab from below, or strip and re-membrane only the failed zone.",
    diyChecks: [
      "Do a ponding test: hose the balcony, let it pool for 30 minutes, and check the unit below — a new dark spot marks the active path",
      "Check the balcony drain: run water and watch it go; if it pools, the drain is the first thing to fix",
      "Tap-test the balcony floor tiles — a hollow ring around a wet zone means the membrane has failed at that spot",
      "Photograph the downstairs damage with dates, and keep the JMB correspondence — the paper trail is what settles the liability question later",
    ],
    prevention: [
      "Keep the balcony drain clear of leaves and tile chips — a blocked drain pools water against the membrane",
      "Re-grout the balcony floor with sealed or epoxy grout every 3–5 years",
      "Do not let planters sit in standing water against the slab edge",
      "Re-membrane the balcony at the 10–15 year mark even if it has not leaked yet — replacement is far cheaper than a claim",
    ],
    costDetail: "PU grouting the slab from below — with the downstairs owner's permission, no hacking of your tiles — starts around RM800–RM2,500 depending on the crack line. A partial re-membrane of the failed zone runs RM2,500–RM4,500. Full tile-hack, new membrane, and re-tiling of the whole balcony is the RM4,500–RM6,500+ job, typically 3–5 working days. We do a ponding test first so the method matches the actual leak path, and the waterproofing carries the standard written warranty."
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
    ],
    overview: "A ceiling stain that only appears during heavy monsoon rain, tracing a straight line in the slab above, is the classic signature of a leaking concrete slab crack. The crack is usually a shrinkage or movement crack in the concrete — small, often under 3 mm, and structurally unremarkable — but it is a direct channel from the roof or the slab surface to the ceiling below, and surface waterproofing that has aged out over decades cannot close it. The reason it only leaks in heavy rain is that light rain soaks into the concrete's pores and dries out, while a sustained downpour fills the crack channel faster than the surrounding slab can absorb it. The modern fix does not require accessing the roof: PU foam is injected under pressure from below through small drilled ports, expanding to fill the crack completely and flexing with the slab for the next 8–15 years.",
    diyChecks: [
      "During a heavy rain, mark the drip line with masking tape — the straightness of the line is what separates a slab crack from a random pipe leak",
      "Check the roof or the slab surface above (if accessible) for the same crack line — a visible crack plus the drip line confirms the diagnosis",
      "Note the width of any accessible crack: under 3 mm is typical injection territory; wider structural cracks need a structural engineer first",
      "Check whether the leak has worsened year on year — a growing stain means the crack channel is widening or the surface seal is failing",
    ],
    prevention: [
      "Keep the roof and slab surface clean and draining — standing water on the slab accelerates crack growth",
      "Reseal the slab surface with an acrylic membrane where accessible, every 8–10 years",
      "Report inter-floor leaks in condos to the JMB early so the slab is treated before the crack widens",
      "Have slab cracks over 3 mm assessed by a structural engineer before any injection work",
    ],
    costDetail: "PU grouting of a slab crack is priced by crack length and access, and a typical monsoon leak runs RM650–RM1,800 for a single line, rising toward RM3,800+ for multiple lines or difficult access. The job takes 2–4 hours, is done from below with no roof access needed, cures the same day, and carries a written warranty of up to 5 years. Where the surface above is accessible, we can also reseal it with an acrylic membrane in the same visit for longer-term cover. We confirm the crack line by tracing the drip before quoting."
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
    ],
    overview: "A curtain track that droops, pulls its screws out, or falls is a fixings problem, not a curtain problem — and in Malaysian homes the failure is almost always the same: the track was fixed into plasterboard or plaster with basic plastic plugs, and the plaster's grip simply gave up under the repeated pull of opening and closing heavy curtains. A blackout or lined curtain on a long track can put several kilograms of dynamic load on every fixing, day after day. The fix is to re-fix properly: find the joist, or use heavy-duty toggle/spring anchors rated well above the curtain weight, patch the pulled-out holes, and for extra-heavy curtains add intermediate wall brackets so the track stops carrying its own span.",
    diyChecks: [
      "Support the track by hand and open the curtain fully — note how many fixings have pulled out or loosened",
      "Tap around each fixing: a hollow thud means plasterboard, a solid knock means concrete or a joist nearby",
      "Weigh or estimate the curtain: blackout and lined fabrics double the load versus a sheer",
      "Check the ceiling around the track for any water stain — damp plaster will not hold any fixing",
    ],
    prevention: [
      "Match the fixing to the wall: concrete needs plated anchors, plasterboard needs heavy-duty toggles, never basic plugs",
      "Use an intermediate support bracket on tracks longer than about 2 metres with heavy curtains",
      "Replace the track's end stops and rollers when they wear — dragging rollers multiply the load on the fixings",
      "Re-torque the track screws once a year; a minute of work prevents a fallen track",
    ],
    costDetail: "Re-fixing a standard track on one window — patching pulled-out holes, locating joists or drilling new heavy-duty anchor points, and re-hanging with the correct fixings — runs RM120–RM250. Concrete ceilings and damaged plasterboard that needs patching and priming sit at RM250–RM380+ per window. Where the curtain is genuinely heavy (blackout, lined, or a long multi-panel track), we add intermediate brackets in the same price. Each installation is load-tested before handover and covered by the standard warranty."
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
    ],
    overview: "A 15+ year old condo unit is not a decorating project — it is a building that has spent decades absorbing wear, and the refresh order matters as much as the finish. Waterproofing, electrical safety, and plumbing come first, because they are the expensive and the dangerous ones to find later; paint, flooring, and tiles are the visible layer that makes the unit feel new; and the kitchen and wardrobes go last, because they are the pieces the whole schedule is built around. Get the order wrong and you will be protecting wet work with carpets that are about to be hacked, or fitting wardrobes that have to be removed for a plumbing fix. In a condo the JMB rules shape the schedule too: work hours, lift protection, debris removal, and the deposit are part of the plan, not surprises.",
    diyChecks: [
      "Walk the unit room by room and mark the three categories: fix-first (leaks, electrics, pipes), refresh (paint, floor, tiles), and fit-out (kitchen, wardrobes, fixtures)",
      "Check the age of the wiring and the DB box — a 20+ year old unit with the original wiring is a safety item, not a cosmetic one",
      "Look at the bathroom ceilings and the neighbours' complaints: inter-floor leaks are the most expensive late discovery in a condo",
      "Decide your end goal — move in, or rent out — because it changes the material grade and the budget per room",
    ],
    prevention: [
      "Budget for the hidden items: in a 15+ year old unit, 15–25% of the quote is usually surprises (waterproofing, pipes, wiring)",
      "Sequence the work so wet trades finish before dry trades, and dry trades finish before finishes",
      "Protect the lift, the lobby, and the common corridors — JMB claims for damage are expensive and slow",
      "Keep a dated photo log of the unit before, during, and after — it settles disputes and documents the work",
    ],
    costDetail: "A full 3-bedroom condo refurbishment in the Klang Valley runs RM22,000–RM180,000+ depending on unit size, material grade, and scope. The schedule is typically 6–10 weeks: hacking plus waterproofing, tiling plus plumbing plus electrical, kitchen plus carpentry, then paint plus handover. After the site visit we issue an itemised quote with each scope line priced separately, so you approve which lines proceed. JMB deposit, permits, work hours, lift protection, and debris removal are handled as standard, and each phase carries the standard warranty."
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
    ],
    overview: "A main breaker or RCD that trips several times a day is a fault that is repeating on schedule — and the schedule is the clue. Trips that happen the moment one specific appliance starts point at that appliance's wiring or a shared overload. Trips that only happen after rain point at moisture finding a path to earth through a socket, a ceiling rose, or the DB box itself. Trips that are immediate and repeat within seconds point at a hard short or a failed breaker. What matters is that the RCD is doing its job: it is the device that protects a person from electrocution, and bypassing it to keep the power on is how house fires and shocks start. The fix is to isolate the fault circuit by circuit, and to upgrade the DB where the breakers themselves have aged out.",
    diyChecks: [
      "Unplug appliances one by one from the suspect circuit and test the RCD — if it stops tripping, you have the appliance",
      "Check the pattern against the weather: trips that cluster after heavy rain point at water ingress somewhere in the wiring",
      "Look at the DB box: discoloured or warm breakers, water marks, or a burnt smell mean the box itself needs attention",
      "Note which appliances trip it — induction hobs, water heaters, and aircons are the usual high-load suspects",
    ],
    prevention: [
      "Distribute high-load appliances across separate circuits instead of one shared line",
      "Keep the DB box dry and sealed — fix any leak or damp spot above it",
      "Have the DB box inspected and labelled every 5–10 years, especially in older homes",
      "Replace appliances with cracked flex cords or frayed plugs before they become the tripping source",
    ],
    costDetail: "Circuit-by-circuit diagnosis starts around RM180–RM350. Replacing a failed breaker or RCD sits in the middle of the range, and a full DB box upgrade — new breakers, RCDs, neat labelling, and better load distribution — runs RM850–RM1,800 for a typical home, done by ST-licensed electricians in a single day without rewiring. Where a specific appliance is the fault, the trip stops once it is repaired or replaced. The work carries the standard warranty."
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
    ],
    overview: "A tile that sounds hollow when tapped has lost its bond — the cement bed between the tile and the screed has failed, and the tile is now floating. In Malaysian homes the usual causes are poor original bedding (dry-pack without proper bonding), water that has worked under the tile and lifted the adhesive, or slow building settlement moving the subfloor. One loose tile is a nuisance; a patch of them is a trip hazard and a water path — every hollow tile around a wet area is a potential leak into the slab below, and the first tile that finally pops up can crack its neighbours when it lands. The tap test is the whole diagnosis, and the repair is lifting, cleaning, and re-bedding with proper thin-set.",
    diyChecks: [
      "Tap-test a 2 m × 2 m grid with a coin or tile tapper and mark every hollow sound — map the whole patch, not just the obvious tile",
      "Check the tiles around the hollow one: if the ring of neighbours is hollow too, the screed beneath the whole area has debonded",
      "Look at the grout lines around the loose tile — cracked or missing grout marks where the water has been entering",
      "Put a heavy object on the loose tile for a day and re-tap: if it has settled lower, the bed is crumbled and needs full re-bedding, not a glue patch",
    ],
    prevention: [
      "Keep wet areas drier — a bath mat at the shower exit and a squeegee after mopping cuts the water that lifts tiles",
      "Re-grout cracked lines around wet zones every few years so water cannot work under the tile",
      "Report hollow-tile patches in condos to the JMB before a tile pops up and cracks its neighbours",
      "When re-tiling any area, insist on thin-set with full back-buttering coverage, not dry mortar",
    ],
    costDetail: "A single loose tile relayed with proper thin-set and matching grout runs RM150–RM280. A patch of several tiles is quoted by count and typically starts around RM350. Where the tap test shows a whole area hollow, the job moves to re-screeding and re-laying by the square metre, which is where the RM2,000–RM2,800+ band applies. We map the hollow zone before quoting so the price covers the actual patch, and the re-bedded tiles carry the standard warranty."
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
    ],
    overview: "Grout is the weakest line on any tiled surface, and it shows it first. Cement-based grout in Malaysian homes typically lasts 5–8 years before it starts crumbling, and in bathrooms and kitchens the cycle is shorter because the wet environment feeds the black mould that colonises the line. Once the grout is cracked or powdering, it no longer seals the joint: water walks straight through the gap into the screed and, in wet rooms, into the slab below — which is how a \"cosmetic\" grout problem quietly becomes a waterproofing problem under the neighbour's ceiling. Re-grouting is cheap insurance against that chain.",
    diyChecks: [
      "Scrape the grout with a fingernail or grout pen — if it crumbles to powder, the bond is gone and cleaning will not save it",
      "Check the wettest lines first (shower base, tub edge, kitchen sink) — that is where seepage starts",
      "Look at the tiles above the affected line: a brown ring or white salt mark above the grout means water is already travelling",
      "Tap a few tiles near badly cracked grout — hollow sounds mean the moisture has started to debond the tile itself",
    ],
    prevention: [
      "Seal all grout lines with a hydrophobic penetrating sealer after regrouting, and re-seal every 2–3 years",
      "Use epoxy or high-quality acrylic grout in wet areas from the start — cement grout there is a 5-year clock",
      "Keep bathroom floors drier: a bath mat at the shower exit cuts the constant wet-dry cycling",
      "Fix any grout line that starts to crack within the year, before it becomes a seepage path",
    ],
    costDetail: "Re-grouting a standard bathroom (shower area, floor, and wet-wall zone) runs RM650–RM1,400 including grout removal, cleaning, epoxy grout, and sealing. Kitchens and dry-area rooms are lower, starting around RM250–RM500, while large floor areas are quoted by square metre. Epoxy grout costs more upfront than cement grout but lasts 15+ years versus 5–8, so in wet rooms it usually pays for itself within one regrouting cycle. All work is finished with a hydrophobic sealer and covered by the standard warranty."
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
    ],
    overview: "Lifting or curling vinyl and SPC planks are a stress problem, not a dead floor. The boards expand in heat and contract in the cool, and if the 10 mm expansion gap at the walls was never left, or has been taken up, the planks have nowhere to move — so they push against each other and pop up at the edges, usually near doors, windows, or wet areas. In Malaysian homes the two usual triggers are direct west-facing sun baking one wall of the floor and water that has seeped under a plank during monsoon. The click-lock still holds, which is why the same planks can almost always be lifted, dried, and re-clicked.",
    diyChecks: [
      "Walk the perimeter and press down on each lifted plank — note which ones move, click, or gap when pushed",
      "Check the wall gap: it should read about 10 mm; if the plank sits flush against the wall, the expansion gap is the cause",
      "Look under and around the lifted edges for discolouration, a damp smell, or a wet substrate",
      "Map which rooms are affected — sun-baked west rooms point to heat, wet entry areas point to water",
    ],
    prevention: [
      "Keep the 10 mm expansion gap at every wall and column — never fill it solid with skirting",
      "Lay doormats at entrances so rain-soaked shoes do not drag water across the floor",
      "Use curtains or UV film on west-facing windows to cut direct sun on the boards",
      "Wipe spills immediately and never wet-mop vinyl or SPC flooring",
    ],
    costDetail: "Spot repair — lifting, drying and re-clicking a few planks — starts around RM250 and is usually done in 2–4 hours. Extensive edge lifting along a whole wall, or planks that must be replaced after waterlogging, runs RM800 to RM1,800+ depending on plank count and whether the substrate needs drying or patching. We confirm the cause (heat versus water) before starting, and the re-click workmanship is covered by the standard warranty."
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
    ],
    overview: "A cracked or displaced roof tile is a timed bomb that only counts down in the monsoon. In Malaysia, roof tiles fail for one of four reasons: storm impact or a fallen branch, foot traffic from a previous contractor, brittleness after 20+ years of tropical UV, or ridge mortar that has dry-shrunk and let the caps slide. The risk is not the tile itself — it is what the tile is covering. Once a tile lifts, rain walks under it and along the battens until it finds the nearest gap into the ceiling, which is why the drip point on your ceiling is usually metres from the actual crack. A quick inspection while the weather is kind is the cheapest insurance you will buy all year.",
    diyChecks: [
      "After a storm, check the gutter line and ground below the roof for missing tiles before climbing anything",
      "Look up at the ridge line from the ground with binoculars — slipped ridge caps are the most common leak source",
      "Note where water entered the ceiling last time and trace it back up the roof slope; the entry is usually higher and further out than the drip",
      "If you can safely see a cracked tile, photograph it with a ruler in frame — the photo is what speeds up the quote",
    ],
    prevention: [
      "Trim overhanging branches so storm branches cannot rake across the tiles",
      "Keep a roof inspection on the calendar every 2–3 years, and after every major storm",
      "Do not walk on the roof yourself — foot traffic on 10+ year old tiles is a leading cause of displacement",
      "Report cracked tiles to the JMB early in condos so the repair is scheduled while the leak is still a spot, not a stain",
    ],
    costDetail: "A full roof inspection (drone plus ground survey plus written report) runs RM250–RM450. Spot repair — replacing a few cracked or displaced tiles with colour-matched stock and sealing hairline cracks — starts around RM380–RM900. Re-bedding loose ridge caps with fresh polymer mortar and replacing a short section of ridge sits in the RM900–RM1,800 band. A full re-roof is only recommended when 30%+ of the tiles or the underlay is compromised. Tile supply and matching are confirmed before work starts, and the repair carries the standard warranty."
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
    ],
    overview: "Sagging kitchen cabinet doors are almost always a hinge problem, not a cabinet problem. The hinges take the full weight of the door every time it opens, and after five or six years of that in a Malaysian kitchen — with steam, grease, and humidity in the air — the hinge screws loosen in the cabinet body, the hinge cup wears, and the door drops a few millimetres. That few millimetres is enough to make the door rub its neighbour, miss the neighbour's edge, or slam instead of close. The good news: it is one of the cheapest and quickest repairs in the house, and a hinge upgrade while you are at it buys years of soft-close convenience.",
    diyChecks: [
      "Open the sagging door fully and look inside the cabinet — is the hinge cup visibly loose or is the screw head stripped in the wood?",
      "Check the hinge type: cheap non-adjustable hinges cannot be aligned, only replaced",
      "Feel the door as it closes — a consistent gap on one side means the door has dropped, not the cabinet moved",
      "Count how many doors in the run show the same sag — if it is most of them, a full hinge pass is the sensible fix",
    ],
    prevention: [
      "Tighten the hinge screws (not the door-side screw that pulls the door) once or twice a year",
      "Replace hinge screws with longer or thread-lock versions where the body wood has started to strip",
      "Keep the kitchen ventilated — steam and grease accelerate hinge and screw corrosion",
      "Upgrade to soft-close hinges when replacing a single one, so the whole run ages evenly",
    ],
    costDetail: "A single door alignment and hinge tightening starts around RM150. Replacing worn hinges with soft-close equivalents runs RM30–RM60 per door installed, and a full 8–10 door kitchen hinge conversion lands at RM350–RM620. Where the cabinet body itself is stripped or soft, we fill and re-drill the mounting points or fit longer screws, quoted on inspection. All work includes a door-alignment test across the whole run before handover, and is covered by the standard warranty."
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
    ],
    overview: "A smart lock is only as secure as its installation. The lock itself — Samsung, Yale, Kaadas or similar — is fine off the shelf; what decides whether it protects the door is the prep work: the right mortise cut for the lock body, the correct thumb-turn alignment, a battery pack that is reachable, and access codes that are actually tested in every mode (fingerprint, card, code, app, and the emergency key). On metal or fire-rated doors the work is harder because the mortise has to be cut into steel, and a bad fit on a short-let or rental door means a locked-out guest and a JMB or tenant dispute. Most of the \"smart lock doesn't work\" calls we get trace back to installation shortcuts, not the hardware.",
    diyChecks: [
      "Measure the door thickness (35–55 mm typical) and the bevel edge before buying or scheduling — the spec sheet must match the door",
      "Check the existing mortise: if the old mechanical lock body size differs from the smart lock, the door will need a new cut",
      "For metal or fire-rated doors, confirm the lock is rated for that material — standard wood-door bodies will not cut or hold correctly",
      "If the door is a short-let or Airbnb, decide which access codes and self-check-in features you need before installation day",
    ],
    prevention: [
      "Keep the emergency key with a trusted person off the property, not in the lock box by the door",
      "Replace batteries before the low-battery warning, not after — most brands warn weeks ahead",
      "Test all access methods monthly for the first 3 months after installation",
      "Update firmware and re-check the app pairing after any power cut or battery change",
    ],
    costDetail: "Installation on a standard timber or composite door runs RM250–RM450 per door, covering the mortise cut where needed, body fitting, wiring of the battery pack, app pairing, and full access-code testing. Metal or fire-rated doors take longer and sit at RM450–RM550+. We complete pairing with your phone, enrol fingerprints and user codes, and hand over the emergency key and manual. Typical time: 45–90 minutes standard, 90–150 minutes metal doors."
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
    ],
    overview: "An auto gate remote that stops working is almost never a mystery: it is one of four things — a weak CR2032 battery, a corroded receiver antenna under the control board, a remote whose code was wiped after a motor reset, or a failing control board. The pattern tells you which. One remote dying is usually the battery; several remotes failing at once points at the receiver or board; and a gate that opens by itself is a security problem that should be treated as urgent, because it usually means the receiver is misfiring and the gate could open for a stranger as easily as for you.",
    diyChecks: [
      "Replace the remote battery with a fresh CR2032 and test at 2–3 metres — most \"dead\" remotes are just batteries",
      "Test from different distances and angles; a remote that only works at arm's length points to a weak transmitter or a corroded antenna",
      "Check whether all remotes fail together — if they do, the problem is the receiver, not the remotes",
      "Watch the gate for 10 minutes: if it opens on its own, stop using it and get the receiver checked",
    ],
    prevention: [
      "Replace remote batteries yearly, especially after long monsoon seasons of humidity",
      "Keep the motor box dry and ventilated — rust on the antenna is the number one silent killer",
      "Register every working remote code and keep the spare programmed and stored away",
      "Use rolling-code remotes for new or replacement gates to defeat code cloning",
    ],
    costDetail: "Battery and basic pairing checks are included in the call-out; a standard remote with programming runs RM120–RM250 and a rolling-code remote RM250–RM380. Receiver antenna cleaning or replacement sits in the middle of the range, and a full control board replacement pushes toward RM550+. Wi-Fi smartphone gate controllers, if you want them, install for RM350–RM650. All repairs are tested end-to-end — open, close, and auto-reverse — before we leave."
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
    ],
    overview: "A metal gate that sags or drags on the ground is telling you its hinges are failing — and gate hinges are the most abused welds on the property. They carry the full dead weight of the gate, swing through hundreds of cycles a year, sit in direct sun and rain, and in older installations the original weld was often a quick stick of cheap filler. Over years the weld fatigues, the pin corrodes, and the gate slowly drops until it scrapes the ground. The dragging is not just cosmetic: it bends the gate leaf, wears the closer or latch, and in a double-leaf gate the whole door can tilt onto one post.",
    diyChecks: [
      "Lift the gate leaf by hand and hold it — if it drops the moment you let go, the hinge pin or weld has given way",
      "Tap around the hinge base with a screwdriver handle; a hollow or rattle sound means the weld has cracked away from the frame",
      "Check the concrete post: a crack or lean in the post means the gate load is moving the post itself, not just the hinge",
      "Look for rust flakes at the pin and hinge knuckle — surface rust is normal, flaking means the metal has lost thickness",
    ],
    prevention: [
      "Grease the hinge pin and knuckles every 6–12 months with a lithium or marine-grade grease",
      "Tighten or re-torque hinge bolts yearly on non-welded (bolted) hinge plates",
      "Keep the gate balanced: a two-leaf gate should be level, not tilted onto one side",
      "Paint any scraped or exposed weld area within a week to stop rust restarting",
    ],
    costDetail: "A single-side hinge re-weld with grinding, heavy-duty hinge replacement, and primer plus two enamel coats starts around RM250–RM450 per side. Both sides, plus mid-span bracing for a wide or unusually heavy gate, runs RM800–RM1,200+. If the concrete post itself has moved, that is a separate reinforcement job quoted on inspection. We complete most hinge repairs on site in 2–4 hours with portable welders, and the welded work carries a 12–24 month anti-rust warranty."
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
    ],
    overview: "An aircon that runs all day but never cools the room has one of four causes, and the order of checking is fixed because the cheap ones are the common ones. First: the filter and the coil. In a hot, dusty climate a neglected unit loads up with lint and mould within weeks, the airflow starves, and the unit works harder for less cooling. Second: the refrigerant. A slow leak drops the gas charge until the system can no longer pull heat out of the room — and topping up without finding the leak just buys weeks. Third: the temperature sensor, which can read the room as colder than it is and shut the compressor off. Fourth: the compressor itself, the expensive end, which fails after years of hard work or a voltage event. The diagnosis takes 30–60 minutes on site, and the pattern of the fault — warm air versus no air versus ice on the pipes — tells a technician a lot.",
    diyChecks: [
      "Clean the filter and run the unit for a day — if it cools noticeably better, the airflow was the cause",
      "Feel the two copper pipes at the outdoor unit: both should be warm-ish in cooling mode; one cold and one warm with ice points at low gas",
      "Check the set point against the room: a unit fighting a 35 °C room at 16 °C will never win — that is not a fault",
      "Note any frost on the pipes or a hissing note — both point at the refrigerant side and should be checked before the next season",
    ],
    prevention: [
      "Clean the filter every 2–4 weeks in heavy use — it is the cheapest cooling you will ever buy",
      "Service the unit every 3–6 months so the coil stays clean and the gas charge stays checked",
      "If a gas top-up fixes it, keep the receipt and the PSI reading — if it warms up again in a season, the leak was not found",
      "Put the unit on a dedicated circuit; voltage surges are a leading compressor killer",
    ],
    costDetail: "A basic service starts from RM129 and fixes the warm-air cases where the coil and filter are the cause. A leak check plus gas top-up runs from RM2.50 per PSI, with the leak itself repaired first. A faulty temperature sensor is a small part in the middle of the range, and a compressor repair or replacement starts from RM1,040 — quoted only after the cheaper stages are done. We diagnose on site in 30–60 minutes and explain each finding, and the work carries the standard warranty."
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
    ],
    overview: "Water dripping from the indoor unit is the aircon telling you its drainage has failed — and in a Malaysian unit the causes stack in a fixed order. First and most often: the drain pipe is blocked. A film of mould and dust plugs the small drain line, the tray fills, and the water looks for the path of least resistance, which is usually over the edge of the unit and onto the wall or the carpet. Second: a dirty filter or coil that starves the coil of air, making it freeze, and the ice then melts and overflows. Third and rarer: a failed drain pump on a cassette unit, or a unit that was levelled the wrong way at installation, so the tray tilts toward the wall. Each cause has a different fix, which is why the diagnosis — checking the drain, the filter, the coil, and the unit's level — comes first.",
    diyChecks: [
      "Trace the drip: a stream from the drain outlet side of the unit points at the drain; a weep from the bottom edge points at an overflowing tray",
      "Take out the filter: if it is clogged, clean it — a starved coil ices and the melt-water overflows",
      "Check the drain pipe at the outdoor end: lift it up and blow through it — no airflow means the line is blocked",
      "Look at the unit's level: a unit tilted toward the wall will always leak that way",
    ],
    prevention: [
      "Clean the filter every 2–4 weeks in heavy use — it protects both the airflow and the drainage",
      "Service the unit every 3–6 months and check the drain line each time",
      "After a chemical wash, run the unit for ten minutes and confirm the drain is flowing",
      "If the unit was re-mounted or moved, have the level re-checked — a few millimetres the wrong way is a permanent leak",
    ],
    costDetail: "A service with a drain clearing starts from RM129 and resolves the majority of drip cases. A chemical wash that also clears the coil and tray runs from RM156. A failed drain pump (cassette units) or a re-leveling job is quoted after the cleaning stage, and sits toward RM455. We confirm the water is actually draining outdoors before we leave, and the work carries the standard warranty."
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
    ],
    overview: "Noise from an aircon is the unit describing its own fault — and in most Malaysian homes the first few months of a new noise are a free diagnosis. Rattling is almost always loose: a panel, a screw, a bracket, or a piece of debris caught in the blower. Buzzing or humming points to the electrical side — a contactor sticking, a capacitor straining, or a motor winding starting to go. Grinding is the one to take seriously: it is a fan motor bearing wearing down, or metal-on-metal in the compressor, and both get worse and more expensive the longer they run. The pattern (when it starts, which unit, whether it changes with the fan speed) narrows the search to a part in most cases.",
    diyChecks: [
      "Switch the fan speed up and down: noise that changes with fan speed is mechanical (blower, fan, coil); noise that is constant is electrical",
      "With the unit off, check the indoor panel for visible looseness and gently tap it — a rattle that reproduces is a loose panel or screw",
      "Look at the outdoor unit: any visible wobble, a fan blade that looks chipped, or debris wrapped around the fan",
      "Note when the noise started — after a storm (loose part), after a service (something left loose), or gradually (wearing part)",
    ],
    prevention: [
      "Service the unit every 3–6 months in heavy use — a clean blower and coil do not rattle",
      "Keep the outdoor unit's fan area clear of leaves, plastic, and vines",
      "Do not stack boxes or lean items against the outdoor unit; vibration loosens brackets",
      "After any service, run the unit for ten minutes and listen — catching a new noise early is free",
    ],
    costDetail: "Tightening loose panels and brackets, cleaning debris from the blower, and a basic service starts from RM195 for most rattling cases. A worn fan motor replacement starts from RM390, and a failing contactor or compressor is quoted after testing — the compressor end of the range sits above RM1,000. We identify the noise source by ear and by running the unit at each fan speed, explain the part and the price before work, and the repair carries the standard warranty."
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
    ],
    overview: "A musty or mouldy smell from the aircon is the unit blowing the contents of its own interior into your room — and in a tropical climate that interior is a perfect mould farm. Warm humid air meets the damp evaporator coil, the drain tray holds stagnant water, and the blower wheel collects a film of dust: in a few weeks of inattention the colony is established, and every time the unit starts it pumps the odour (and the spores) across the room. It is not dangerous in the immediate sense, but for anyone with allergies or asthma it is a genuine air-quality problem, and the smell is the signal that the unit has gone well past its service interval. A basic filter clean helps a little; the actual fix is a chemical wash of the coil and blower, a flush of the drain, and an anti-microbial treatment.",
    diyChecks: [
      "Clean or replace the filter and run the unit for a day — if the smell is much weaker, the filter was the main contributor",
      "Smell where the louvre is: an odour that is strongest at first startup and fades points at the coil and blower, not the filter",
      "Look into the unit past the filter for visible mould on the coil or a dark film on the blower wheel",
      "Check the drain: water backing up or a musty drip from the drain outlet means the tray is stagnant",
    ],
    prevention: [
      "Service the unit every 3–6 months in continuous use — the smell is a service-interval alarm, not a normal state",
      "Run the fan-only mode for 5–10 minutes before switching off, so the coil dries and mould cannot settle",
      "Keep the filter clean; a clogged filter holds the moisture against the coil",
      "Leave the front panel open for an hour after heavy use to air out the interior",
    ],
    costDetail: "A basic service starts from RM129 and removes the odour where the filter and light coil buildup are the cause. A chemical wash starts from RM156, and a full chemical overhaul — coil, blower, drain flush, and anti-microbial treatment — runs toward RM455, which is the band where the smell comes from an established colony. We identify the source (coil, blower, or drain) during the service, and the treatment carries the standard warranty. The smell should be gone by the end of the visit; if it returns within a service interval, tell us — the cause was not fully treated."
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
    ],
    overview: "An aircon that cools but barely blows has an airflow problem, and in the overwhelming majority of Malaysian units the cause is one of three things in a fixed order of likelihood: a clogged air filter, a dirty or partially iced evaporator coil, or a blower motor that is winding down. The filter is the first suspect because in a hot, dusty, humid climate a neglected filter loads up with lint and mould in weeks and starves the coil of air. A dirty coil is second: the fins clog, the air cannot pass, and the unit works harder for less. The blower motor is the last — bearings wear, the impeller slows, and the airflow drops in a way no cleaning fixes. The good news: two of the three are routine service jobs, not repairs.",
    diyChecks: [
      "Open the front panel and take out the filter — if it is dark with dust and mould, clean or replace it and run the unit for a day before calling anyone",
      "Check the airflow at the louvre: weak at all fan speeds points to the coil or motor; weak only at low speed points to the fan",
      "Look at the evaporator (the finned panel under the filter) for visible dust mats or any frost",
      "Note the noise: a whining or grinding note under the airflow points at the blower motor bearings",
    ],
    prevention: [
      "Clean the filter every 2–4 weeks in heavy use — it is a 10-minute job that protects the coil",
      "Service the unit every 3–6 months so the coil and blower stay clean",
      "Keep the room's return path clear — curtains or furniture blocking the louvre cut the airflow",
      "Run fan-only mode for a few minutes after cooling to dry the coil and discourage mould",
    ],
    costDetail: "A basic service — filter clean, coil wash, blower check — starts from RM129 and fixes the majority of weak-airflow cases. A chemical wash or overhaul is the step up when a basic service does not restore the flow. A failing blower motor replacement starts from RM455, and is only quoted after the cleaning stage is done and the flow is still weak. We measure the airflow before and after so you can see the difference, and the work carries the standard warranty."
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
    ],
    overview: "An aircon that will not turn on narrows down to one of four things, and the order of checking is fixed because each step is cheaper than the last. First: power. A tripped breaker or a blown fuse at the DB is the most common and the free fix. Second: the remote or the receiver. A dead remote, flat batteries, or a failing receiver board makes a perfectly healthy unit look dead. Third: the capacitor or contactor — the parts that fail most often in Malaysian units, usually after a power surge or a long monsoon season of humidity. Fourth: the main PCB, the expensive end, often killed by surges. The pattern helps: a unit that is completely dead points at power or receiver; one that starts and then shuts itself off points at the capacitor, the compressor thermal, or the board.",
    diyChecks: [
      "Check the DB first: is the aircon's breaker up, and does the socket have power (test with a lamp)?",
      "Fit fresh batteries and try the remote at close range; also try the physical button on the indoor unit",
      "Listen for the outdoor unit: any hum, click, or attempt to start when you press the remote tells you where the fault is",
      "Smell for burning near the unit and the DB — a burnt smell means stop and do not reset anything",
    ],
    prevention: [
      "Put the aircon on a dedicated circuit with a correctly sized breaker",
      "Use a surge protector on the dedicated socket where the wiring allows",
      "Service the unit yearly — a clean, dry unit handles voltage dips better",
      "Switch the unit off at the DB during storms if you will be away for days",
    ],
    costDetail: "The diagnostic visit starts from RM114 and is waived when we repair the unit in the same visit. Power-side fixes (breaker, socket, fuse) are the inexpensive end. Capacitor or contactor replacement starts from RM195, and main PCB repair or replacement starts from RM455 — the PCB is the expensive end and is only quoted after testing confirms it. We identify the fault by running the unit through the power-receiver-capacitor-board sequence, explain each finding, and the repair carries the standard warranty."
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
    ],
    overview: "An aircon that trips the MCB or RCCB the moment it starts is telling you one thing: the current draw at startup is higher than the circuit can carry. In a healthy unit that surge is brief and the breaker absorbs it; in a failing one it happens every cycle. The usual culprits, in order: a compressor winding that is shorting and drawing far more amps, a capacitor that has failed and is letting current leak, an undersized breaker or a circuit shared with other high-load appliances, or — in older outdoor units — moisture into the electrical connections. This is one of the few aircon faults that should be treated as urgent, because a breaker that trips on demand is a fire risk in the wiring, not just an inconvenience with the AC.",
    diyChecks: [
      "Reset the breaker and watch the amperage pattern: if it trips within a few seconds of the compressor starting, stop — do not reset again until inspected",
      "Check what else is on the same circuit: a water heater, oven, or iron sharing the line with the aircon can trip it at startup",
      "Smell around the outdoor unit for burning plastic — a hot compressor or contactor smells before it visibly fails",
      "Check the outdoor unit's wiring junction for any water pooling or corroded terminals after rain",
    ],
    prevention: [
      "Give the aircon its own dedicated circuit with a correctly sized breaker — sharing is the root of most startup trips",
      "Keep the outdoor unit's electrical junction dry and sealed, especially on exposed balconies",
      "Service the unit yearly; a dirty coil makes the compressor work harder and draw more current",
      "Never bypass the breaker with a higher-rated one to \"fix\" the tripping — that removes the protection, not the fault",
    ],
    costDetail: "Capacitor replacement starts from RM195. Wiring or contactor repair sits in the middle of the range, and a compressor replacement starts from RM1,040 — the compressor is the expensive end, and it is only quoted after a current-draw test confirms it. We coordinate with an electrician when the fault is on the circuit side (breaker sizing, shared loads), and the repair carries the standard warranty. A tripping unit is not safe to keep resetting; the diagnostic visit is the first step."
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
    ],
    overview: "Ice on the coil or the copper pipes is the aircon telling you the coil is running colder than it should — and in a Malaysian climate that is never normal, because the unit is supposed to be removing heat, not freezing the room's humidity onto a tin plate. The chain is usually one of: low refrigerant (a slow leak has dropped the gas charge), a blocked coil or filter that starves the coil of air, a blower fan turning too slowly, or a temperature sensor reading wrong. Each one pulls the coil temperature down until the moisture in the room's air condenses and freezes on it. The unit then stops cooling, drips as the ice melts, and re-freezes when you switch it back on — a loop that will quietly damage the compressor if it runs for weeks.",
    diyChecks: [
      "Switch the unit off or to fan-only and let it defrost fully — the ice melts in 30–60 minutes and the water that drips is the amount that was frozen",
      "Take out the filter: if it is clogged with dust, clean it — a starved coil is the most common ice cause",
      "Check the drain: if water is backing up into the tray, the drain is blocked and the tray is overflowing",
      "Note where the ice forms: on the first section of pipe near the unit points to low gas; across the whole coil points to airflow",
    ],
    prevention: [
      "Clean the filter every 2–4 weeks — a starved coil freezes, not just under-cools",
      "Service the unit every 3–6 months and check the drain line each time",
      "After a gas top-up, watch the unit for a week: if it re-freezes, the leak was not found",
      "Do not run the unit at very low set points on maximum humidity days — the coil works hardest then",
    ],
    costDetail: "A clean and check starts from RM129 and resolves the ice where the cause is a dirty filter or coil. A chemical wash starts from RM156 for heavier buildup. Where the gas charge is low, a leak check plus top-up runs from RM2.50 per PSI, and the leak itself is repaired first — a top-up without finding the leak just buys time. A failing blower motor or temperature sensor is quoted after the cleaning and gas check. The work carries the standard warranty."
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
    ],
    overview: "A dead aircon remote or a blank, flickering, or error-coding display is almost always a small fault with a small price — but the distinction matters, because a \"remote problem\" and a \"board problem\" are very different jobs. The remote side: flat or corroded batteries, a worn infrared sensor, or a remote that simply aged out. The unit side: a loose display ribbon connector under the front panel, a failing receiver board, or a main PCB that is dying and throwing error codes as it goes. Error codes are the unit telling you what is wrong — each brand has its own book, and reading one wrong can send a technician down the wrong part path. Start with the cheap stuff, and get a technician to read the code before anyone replaces a board.",
    diyChecks: [
      "Fit two fresh batteries and test at 1–2 metres with the line of sight clear — most \"dead\" remotes are just batteries",
      "Try the physical on/off button on the indoor unit itself: if it works, the remote or receiver is the suspect",
      "Write down any error code on the display exactly (E5, H4, etc.) with the brand and model number — that is half the diagnosis",
      "Check the front panel for any visible looseness or a faint crack along the display area before anyone pries it open",
    ],
    prevention: [
      "Replace remote batteries once a year — tropical humidity corrodes contacts quietly",
      "Keep the remote away from direct sun and kitchen heat; IR sensors fade in UV",
      "When a code appears, switch the unit off rather than cycling it repeatedly — some codes reset, others escalate",
      "Keep the model number and a photo of the PCB label somewhere you can find it fast",
    ],
    costDetail: "A diagnostic visit starts from RM114 and is waived when we repair the unit in the same visit. A replacement remote — universal or brand-matched and programmed to your unit — is the inexpensive end of the range. Receiver board or display-connector work sits in the middle, and main PCB repair or replacement starts from RM455. We read the error code first, explain what it points to, and only then quote the part — so you are not paying for a new board when a re-seated connector was the fault."
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
    ],
    overview: "A tile that tents up in an inverted V, or pops with a loud crack, is the floor telling you the pressure under it has won. In Malaysia's heat and humidity the tiles expand every day, and where there is no expansion gap or the screed beneath has debonded, that expansion has nowhere to go but up. The trapped moisture under the screed makes it worse: it vaporises in the heat, the vapour pressure lifts the tile, and the first tile that finally pops up can crack its neighbours as it lands. It is also the most dangerous floor fault in the house — a tented tile is a sharp, sudden trip hazard, and a loose tile that has not popped yet can shear without warning. The repair is not a glue patch: the failed screed has to be hacked out, re-levelled with a proper bonding mix, and the tile re-laid with full back-buttering.",
    diyChecks: [
      "Tap-test a grid around the popped tile — the hollow zone is the real repair area, and it is usually bigger than the visible damage",
      "Look at the popped tile's underside: crumbled cement means the screed has failed; a flat surface means the bond line only",
      "Check the perimeter: is there a buffer gap between the tiles and the wall, or are they butted tight?",
      "Keep the area clear and marked — a second tile is likely to follow, and a tented edge is a cutting hazard",
    ],
    prevention: [
      "Leave a 5–8 mm perimeter expansion gap under the skirting whenever tiling, and flexible joints in large floors",
      "Use a polymer-modified adhesive with full back-buttering, not dry mortar, on any new or re-laid tile",
      "Keep wet areas drier — the moisture under the screed is what lifts the tiles in the heat",
      "Replace any tile that sounds hollow before it pops, not after",
    ],
    costDetail: "A localized patch — a few popped tiles with the failed screed hacked out and re-laid — starts around RM350–RM600. A whole room where the tap test shows a large hollow zone runs RM1,200–RM2,800+ depending on area, tile size, and whether matching tiles are available. We map the hollow zone before quoting, source matching tiles where the design is discontinued, and the re-laid tiles carry the standard warranty."
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
    ],
    overview: "A gypsum partition wall is a dry, fast, and lightweight way to divide a space — and it fails in the predictable ways that lightweight walls fail. Impact damage is the common one: a furniture move, a door handle, a trolley, a dropped tool. The slower one is moisture: a floor that is mopped without a skirting, a pipe drip behind the board, or a bathroom wall that was never properly sealed — the gypsum core swells, softens, and crumbles from the base up. And the third is load: a TV, a cabinet, or a shelf hung into hollow board with basic plugs, until one day the plug simply gives way. The repair is as clean as the damage allows: cut the damage back to the studs, back it with timber or new board, tape, skim in layers, and paint it back to invisible.",
    diyChecks: [
      "Push the wall gently in the damaged zone: a wobble or flex means the framing behind is compromised, not just the board",
      "Check the base of the wall for any soft or crumbled board — moisture damage always starts at the bottom",
      "Look for the stud centres (tap: a solid knock marks a stud) and note where the damage sits relative to them",
      "Photograph the damage with a ruler before anything else — it is what sizes the repair and the quote",
    ],
    prevention: [
      "Fit a skirting or a moisture barrier at the base of every gypsum partition in a wet zone",
      "Hang heavy items into the metal studs or a timber backing, never into hollow board with basic plugs",
      "Fix any pipe drip or bathroom seal failure the week it is found — water behind a partition is invisible until it is structural",
      "Use impact-rated board or a protective panel behind the wall in traffic areas and around door handles",
    ],
    costDetail: "A small patch repair — a doorknob hole or a corner dent, backed and skimmed to invisible — starts around RM180–RM300. A larger board replacement with stud reinforcement and repainting runs RM450–RM1,200 depending on size, height, and the paint scope. Where the damage is from moisture, the source (pipe, seal, or floor) is fixed in the same job, and that is quoted on inspection. We match the existing paint where possible, and the work carries the standard warranty."
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
    ],
    overview: "A 15–25 year old bathroom is a building that has spent two decades doing its hardest work in the wettest room in the house, and it shows: rust-tinted water from corroded galvanized pipes, a floor membrane that has aged out beneath the tiles, grout that has gone black with mould, and a drain that smells because the old P-trap floor drain no longer seals. The individual complaints are cheap to fix one by one — and that is exactly the trap. Every piecemeal repair on a bathroom this old is a bet that the next failure is somewhere else, and the next one is usually under the floor, where it costs ten times more. The honest fix at this age is a full overhaul: pressure-test the concealed lines, replace the corroded pipes, hack to the bare slab, re-membrane in three layers, flood-test for 72 hours, and re-tile. It is the one bathroom spend that pays for itself by stopping the next three claims.",
    diyChecks: [
      "Run the tap into a clear glass: a yellow or brown tint means the galvanized pipes are shedding rust — a pipe replacement, not a filter",
      "Tap-test the floor tiles: a hollow ring around the wet zones means the membrane has failed under that area",
      "Smell the floor drain with the taps off: a persistent sewer note means the trap seal has failed",
      "Ask the downstairs neighbour (or check the JMB log) for a history of ceiling stains — that history is the cost argument for doing it properly once",
    ],
    prevention: [
      "After the overhaul, keep the new membrane honest: re-seal the grout lines every 3–5 years and keep the silicone seals fresh",
      "Replace the flexible hoses and the trap seals every 5–7 years",
      "Keep the floor draining — a flooded bathroom floor tests the membrane every single day",
      "In a condo, report any new inter-floor stain immediately so the warranty and the JMB record line up",
    ],
    costDetail: "Targeted work — replacing the corroded supply pipes and the failed fixtures — starts around RM800–RM2,000. A full bathroom overhaul — hacking, pipe re-routing, three-layer membrane, 72-hour flood test, tiling, and sanitaryware — runs RM4,500–RM8,500+ for a standard bathroom, typically 7–12 working days. We pressure-test the lines before and after, document the flood test, and the waterproofing carries the standard written warranty."
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
    ],
    overview: "A kitchen sink cabinet that has swollen, rotted, or gone soft at the base is the kitchen's most common slow failure — and it is almost always water that has been winning for years. The bottle trap drips, the flexible hose weeps at the connection, the mixer tap base seeps, and the chipboard or MDF carcass soaks it up every single day until the base has collapsed. It is also the kitchen's most common electrical fault in older homes: a layout with too few sockets, shared circuits, and no dedicated line for the oven or the induction hob, so the breaker trips every time the cooktop, the kettle, and the oven run together. The good news: the sink base can be replaced on its own without redoing the kitchen, and the plumbing and electrical upgrades can be done in the same visit.",
    diyChecks: [
      "Lift the cabinet door and look at the base: a soft, spongy, or swollen board with a musty smell is the classic soaked chipboard",
      "Put a dry tissue under the trap and the mixer base for 24 hours — a wet tissue finds the drip you cannot see",
      "Count the sockets and note the appliances: a kitchen running an oven, an air fryer, and a kettle on one or two circuits is an upgrade candidate",
      "Check the counter top above the damaged base: if it is solid and dry, the carcass can be replaced without touching the stone",
    ],
    prevention: [
      "Replace the sink base carcass with a waterproof aluminium or marine-ply carcass with a foil-lined base",
      "Swap the flexible hoses and the trap seals every 5–7 years, and re-tighten the mixer base yearly",
      "Put a drip tray or a moisture sensor in the sink base — the failure is slow, and the sensor is cheap",
      "Give the high-wattage appliances their own circuit so the cooker and the kettle stop sharing a breaker",
    ],
    costDetail: "A plumbing leak fix with a base reinforcement starts around RM450–RM900. A full sink-base replacement with a waterproof aluminium carcass and the re-plumbing runs RM1,200–RM2,800 depending on the cabinet size and the plumbing scope. A wider kitchen remodelling — new layout, quartz or granite counter, dedicated electrical circuits — is quoted room by room after the site visit, and each phase carries the standard warranty."
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
    ],
    overview: "An uneven subfloor is the quiet killer of new flooring. SPC click-lock and vinyl planks are semi-rigid: they need a flat base, and where the concrete has bumps, hollow dips, or wave patterns over 3 mm, the locking joints flex under every step. The result is a floor that bounces, clicks, and — within a season or two — pops its seams and lifts its edges. The same uneven base also ruins ceramic tile: hollow sounds, cracked grout, and tiles that ring when tapped. The fix is to level the base properly: grind down the high spots, clean the dust, prime for adhesion, and pour a self-leveling compound that flows itself flat and cures into a dense, glassy surface. It is the one prep job in a flooring project that you genuinely cannot DIY-ify without the right tools and material.",
    diyChecks: [
      "Run a 2-metre straightedge across the floor: a gap under it over 3 mm means the base needs levelling before any new flooring",
      "Tap-test the existing floor: hollow sounds mark the debonded zones that will transfer the movement to the new layer",
      "Check for standing water after mopping — a low spot that pools is a dip that needs filling",
      "Look at the existing flooring's wear pattern: edges that have popped or seams that have opened mark where the base moved",
    ],
    prevention: [
      "Always level to under 3 mm over 2 metres before laying any click-lock or vinyl flooring",
      "Use a self-leveling compound, not a trowelled screed, for the final surface — a trowel cannot beat a pour",
      "Prime the base with a high-penetration bonding agent before the pour, or the compound will not key in",
      "Keep expansion joints and transitions between rooms clean and level — they are where the movement shows",
    ],
    costDetail: "Minor patch levelling — filling low spots and grinding high ones with a cementitious mix — starts from RM3.50–RM5.50 per sq ft. A full self-leveling underlayment over a whole room runs RM6.50–RM12.00 per sq ft depending on thickness and the grade of compound. We verify the flatness with a straightedge before the flooring goes down — the new floor's warranty is only as good as the base it sits on — and the work carries the standard warranty."
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
    ],
    overview: "A diagonal, stepped crack running along brick joints — or a growing gap where a kitchen extension meets the main house — is the masonry version of a settlement conversation, and it is the one crack you should not treat as cosmetic. Unlike a hairline paint crack, a masonry settlement crack is the wall itself moving: the extension's footing has settled at a different rate from the original house, the starter bars that should have tied the two together were omitted, and every thermal cycle and every monsoon season opens the joint a little more. The risk is not the crack's appearance but its progression — a crack that is still moving after a year of monitoring is an active structural issue, not a finishing one. The proper response is to stop the movement (stitching or, in the serious case, underpinning assessment), then seal, mesh, and finish the joint so it can flex without opening again.",
    diyChecks: [
      "Measure the crack with a coin and a ruler: under 3 mm is a watch-and-stitch territory; 5 mm+ or horizontal displacement needs a structural engineer before anything is filled",
      "Photograph the crack with a ruler and a date, and re-photograph monthly — the change between photos is the diagnosis",
      "Check the doors and windows in the affected wall: sticking or jamming frames mean the movement is still active",
      "Look for the same crack pattern on the other side of the wall and at the extension's footing line — a through-crack is a different conversation",
    ],
    prevention: [
      "Any new extension should be tied into the original structure with proper dowel bars before the brickwork goes up",
      "Keep the extension's drainage away from the original house's footing — differential settlement loves a wet side",
      "Monitor stepped cracks in new and extended homes every 3–6 months for the first five years",
      "Do not fill a moving crack with rigid mortar to 'hide' it — that only masks the movement until it fails",
    ],
    costDetail: "Stitching a single crack line — helical stainless-steel rods set in polymer resin, then flexible joint sealing and skim — starts around RM600–RM1,200 per crack line. Where the separation is extensive, the joint reinforcement and stabilization work runs RM2,200–RM4,500+. A structural engineer's assessment is recommended before any stitching where the crack is over 5 mm or still moving, and the work carries the standard warranty."
  }
];
