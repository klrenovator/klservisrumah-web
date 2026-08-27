export type ProblemDetail = {
  slug: string;
  serviceSlug: 
    | "painting" | "plumbing" | "ceiling" | "waterproofing" | "handyman"
    | "house-renovation" | "electrical" | "water-heater" | "ceiling-fan" | "lighting"
    | "tiling" | "plaster-ceiling" | "skim-coat" | "flooring" | "epoxy-flooring"
    | "roof-repair" | "kitchen-cabinet" | "carpentry" | "door" | "window-repair"
    | "locksmith" | "glass-aluminium"
    | "cctv" | "autogate" | "welding" | "aircon" | "kitchen-renovation" | "bathroom-renovation";
  title: string;
  symptom: string;
  costRange: string;
  urgency: "Low" | "Medium" | "High" | "Emergency";
  causes: string[];
  solutions: string[];
  whenToCall: string[];
  faqs: { q: string; a: string }[];
};

export const problemPages: ProblemDetail[] = [
  {
    slug: "peeling-paint-malaysia",
    serviceSlug: "painting",
    title: "Peeling Paint in Malaysian Homes",
    symptom: "Paint flakes, bubbles, or chalks because moisture, weak primer, or old coatings break the bond with the wall.",
    costRange: "RM150–RM900+ depending on wall condition and area size",
    urgency: "Medium",
    causes: ["Moisture trapped behind the wall", "No sealer or primer used before painting", "Old chalky paint not sanded properly", "Hairline cracks allowing rainwater seepage"],
    solutions: ["Scrape all loose paint to a firm edge", "Apply anti-alkali or moisture sealer", "Patch hairline cracks before repainting", "Use washable interior paint or weather-resistant exterior paint"],
    whenToCall: ["Peeling keeps returning after DIY repainting", "Wall feels damp or has powdery white salts", "Paint is peeling near bathrooms, balconies, or exterior walls"],
    faqs: [
      { q: "Can I paint directly over peeling paint?", a: "No. Loose paint must be scraped and sanded first, otherwise the new coat will peel with the old layer." },
      { q: "Does peeling paint mean there is a leak?", a: "Sometimes. Peeling near bathrooms, ceilings, or exterior walls often points to moisture intrusion that should be checked before repainting." },
      { q: "What paint should I use after repairs?", a: "Use a proper sealer first, then a quality washable or exterior weatherproof topcoat that suits the wall location." },
      { q: "How much does peeling paint repair cost in KL?", a: "Small patching starts from around RM150, while full room repainting with preparation is usually quoted from RM400 per room." }
    ]
  },
  {
    slug: "faded-exterior-paint-malaysia",
    serviceSlug: "painting",
    title: "Faded Exterior Paint After Malaysian Sun and Rain",
    symptom: "Exterior walls look chalky, patchy, or washed out after UV exposure and heavy rain cycles.",
    costRange: "RM1,800–RM8,000+ depending on house size and access",
    urgency: "Medium",
    causes: ["Low-grade exterior paint", "No weather-resistant sealer", "UV exposure on west-facing walls", "Mold and dirt buildup from tropical rain"],
    solutions: ["Pressure wash exterior walls", "Treat mold and chalking", "Apply alkali-resistant sealer", "Use premium weatherproof exterior paint"],
    whenToCall: ["Walls chalk when rubbed by hand", "Hairline cracks are visible", "Scaffolding or high ladders are required"],
    faqs: [
      { q: "How often should exterior walls be repainted in Malaysia?", a: "Most homes need exterior repainting every 5–7 years, sooner if low-grade paint or heavy damp exposure is present." },
      { q: "Can faded paint be touched up only?", a: "Small areas can be touched up, but large faded elevations often need full repainting for an even finish." },
      { q: "Which paint is best for hot exterior walls?", a: "Use a weatherproof exterior system with sealer and UV-resistant topcoat from a reputable paint brand." },
      { q: "Is pressure washing required?", a: "Yes, exterior surfaces should be washed and dried properly before sealer and paint are applied." }
    ]
  },
  {
    slug: "damp-walls-paint-bubbling",
    serviceSlug: "waterproofing",
    title: "Damp Walls and Paint Bubbling",
    symptom: "Paint bubbles, brown stains, or white salt marks appear because water is moving through the wall or slab.",
    costRange: "RM300–RM2,500+ depending on leak source",
    urgency: "High",
    causes: ["Bathroom or balcony seepage", "Rising damp from porous masonry", "Exterior crack allowing rainwater in", "Pipe leak inside the wall"],
    solutions: ["Trace moisture source with meter checks", "Seal external cracks or bathroom grout", "Apply waterproof barrier where suitable", "Repair plaster and repaint after the wall dries"],
    whenToCall: ["Bubbles return after repainting", "Wall feels cold or damp", "Mold smell or black patches appear"],
    faqs: [
      { q: "Can paint fix damp walls?", a: "Paint alone cannot stop dampness. The moisture source must be fixed before repainting." },
      { q: "How do you diagnose damp walls?", a: "We inspect nearby bathrooms, roofs, pipes, and exterior cracks, then use moisture readings to identify the most likely source." },
      { q: "Do I need waterproofing or painting?", a: "Most damp wall cases need waterproofing or leak repair first, then plaster repair and repainting." },
      { q: "How long should a damp wall dry before paint?", a: "Drying time depends on severity, but walls must reach safe moisture levels before primer and topcoat are applied." }
    ]
  },
  {
    slug: "ceiling-mold-stains",
    serviceSlug: "ceiling",
    title: "Ceiling Mold and Brown Water Stains",
    symptom: "Ceiling boards show dark mold, yellow-brown rings, or soft sagging areas after water exposure.",
    costRange: "RM180–RM1,200+ based on ceiling board damage",
    urgency: "High",
    causes: ["Upper-floor bathroom leak", "Air-conditioner drain leakage", "Roof or balcony seepage", "Poor ventilation and condensation"],
    solutions: ["Stop the water source first", "Remove mold-damaged board if soft", "Install moisture-resistant plasterboard", "Skim, prime, and repaint after drying"],
    whenToCall: ["Ceiling is soft or sagging", "Water stain grows after rain or bathroom use", "Mold spreads across the board"],
    faqs: [
      { q: "Can stained ceiling board be repainted?", a: "Only if it is dry and structurally firm. Soft or moldy boards should be replaced before finishing." },
      { q: "Is ceiling mold dangerous?", a: "Mold can affect indoor air quality, so active moisture and contaminated boards should be addressed promptly." },
      { q: "Do I need a plumber or ceiling contractor?", a: "If the source is plumbing, fix the leak first; then repair or replace the affected plaster ceiling." },
      { q: "How fast can ceiling repairs be done?", a: "Small board replacements can often be completed in one visit after the leak source is controlled." }
    ]
  },
  {
    slug: "burst-pipe-emergency",
    serviceSlug: "plumbing",
    title: "Burst Pipe Emergency in KL & Selangor",
    symptom: "Water is spraying, flooding, or rapidly pooling from a pipe, valve, or wall area.",
    costRange: "RM180–RM800+ depending on pipe access and material",
    urgency: "Emergency",
    causes: ["Old or corroded pipe joints", "High water pressure surge", "Poor fittings or failed adhesive", "Accidental drilling into concealed pipe"],
    solutions: ["Turn off main water supply immediately", "Protect electrical items and flooring", "Locate burst section", "Replace damaged pipe or valve and pressure-test"],
    whenToCall: ["Water cannot be stopped quickly", "Leak is inside wall or ceiling", "Electrical points are nearby"],
    faqs: [
      { q: "What should I do first when a pipe bursts?", a: "Turn off the main water valve, keep people away from electrical areas, and call a plumber with photos or video." },
      { q: "Can a burst pipe be repaired without hacking?", a: "Visible pipe bursts can be fixed directly; concealed bursts may require limited access opening at the damaged section." },
      { q: "Is burst pipe service available same day?", a: "Yes, emergency plumbing requests are prioritized based on technician availability and location." },
      { q: "Will the quote be confirmed first?", a: "Yes. After inspection, the technician explains the scope and confirms pricing before permanent repair starts where possible." }
    ]
  },
  {
    slug: "low-water-pressure-kl",
    serviceSlug: "plumbing",
    title: "Low Water Pressure in KL Homes",
    symptom: "Showers, taps, or toilets have weak flow even when the main water valve is open.",
    costRange: "RM120–RM1,500+ depending on diagnosis and pump needs",
    urgency: "Medium",
    causes: ["Partially closed stop valve", "Clogged aerators or old galvanized pipes", "Hidden leakage reducing pressure", "Faulty water pump or municipal pressure drop"],
    solutions: ["Check valves and tap filters", "Inspect for leaks", "Flush or replace blocked sections", "Install or service booster pump if required"],
    whenToCall: ["Pressure dropped suddenly", "Only one bathroom has weak flow", "Pump keeps running or makes noise"],
    faqs: [
      { q: "Why is only one bathroom low pressure?", a: "The issue may be a blocked mixer, old pipe section, or local valve problem near that bathroom." },
      { q: "Do I need a booster pump?", a: "Not always. A technician should check valves, leaks, and pipe condition before recommending a pump." },
      { q: "Can old pipes cause low pressure?", a: "Yes. Internal rust and mineral buildup in older pipes can restrict water flow." },
      { q: "How long does diagnosis take?", a: "Most low-pressure checks take 30–60 minutes, depending on access and the number of fixtures." }
    ]
  },
  {
    slug: "blocked-drain-toilet",
    serviceSlug: "plumbing",
    title: "Blocked Drain or Toilet Choke",
    symptom: "Water drains slowly, backs up, smells bad, or toilet water rises after flushing.",
    costRange: "RM150–RM500+ depending on blockage severity",
    urgency: "High",
    causes: ["Hair, grease, or soap buildup", "Foreign objects flushed into toilet", "Floor trap sludge", "Main drain obstruction"],
    solutions: ["Stop using affected fixture", "Use proper drain clearing tools", "Remove trap or toilet if required", "Flush and test drainage after clearing"],
    whenToCall: ["Water backs up repeatedly", "Multiple drains are affected", "Bad smell or sewage appears"],
    faqs: [
      { q: "Can I use chemical drain cleaner?", a: "Avoid strong chemicals for severe clogs because they can damage pipes and make technician work unsafe." },
      { q: "How long does drain clearing take?", a: "Simple clogs may take under an hour; deeper blockages need more tools and time." },
      { q: "Why does my toilet keep clogging?", a: "Recurring toilet choke can be caused by trapped objects, weak flush, or deeper drain-line restrictions." },
      { q: "Is there a warranty after clearing?", a: "Workmanship warranty applies to the clearing work, but new foreign objects or grease buildup are separate causes." }
    ]
  },
  {
    slug: "water-heater-not-working",
    serviceSlug: "plumbing",
    title: "Water Heater Not Working",
    symptom: "No hot water, low flow, tripping power, or leaking around the water heater unit.",
    costRange: "RM120–RM650+ depending on part replacement or installation",
    urgency: "High",
    causes: ["Faulty heating element or thermostat", "Electrical supply issue", "Blocked inlet filter", "Old leaking hose or valve"],
    solutions: ["Switch off power if tripping or leaking", "Inspect valves and filters", "Replace faulty fittings", "Install a new heater when repair is uneconomical"],
    whenToCall: ["Power trips when heater turns on", "Unit leaks water", "Heater is old or has burnt smell"],
    faqs: [
      { q: "Can plumbers install water heaters?", a: "Yes, installation involves plumbing fittings and safe mounting. Electrical connection must follow safety requirements." },
      { q: "Should I repair or replace an old water heater?", a: "If the tank or core unit is old and leaking, replacement is usually safer than repeated repairs." },
      { q: "How long does installation take?", a: "A standard instant water heater replacement often takes 1–2 hours if existing wiring and piping are suitable." },
      { q: "Do you supply heaters?", a: "We can install customer-supplied units or advise on suitable models before purchase." }
    ]
  },
  {
    slug: "sagging-plaster-ceiling",
    serviceSlug: "ceiling",
    title: "Sagging Plaster Ceiling",
    symptom: "Ceiling boards bow downward, joints open, or the ceiling feels unsafe after moisture or weak framing.",
    costRange: "RM180–RM1,500+ depending on damaged area and frame work",
    urgency: "High",
    causes: ["Water-damaged plasterboard", "Weak wooden framing or failed hangers", "Overloaded ceiling fixtures", "Poor jointing and screw spacing"],
    solutions: ["Inspect ceiling structure", "Remove unsafe boards", "Reinforce with GI metal framing", "Install moisture-resistant board and skim finish"],
    whenToCall: ["Ceiling is visibly dropping", "Cracks grow quickly", "Fan or light fixture is near the sagging area"],
    faqs: [
      { q: "Is a sagging ceiling dangerous?", a: "Yes, it can collapse if boards or hangers have failed. Avoid standing below until inspected." },
      { q: "Can sagging plaster ceiling be repaired only?", a: "Small dry sagging areas may be reinforced, but wet or soft boards should be replaced." },
      { q: "What frame material is best?", a: "Galvanized iron metal framing is commonly used for stable and rust-resistant ceiling support." },
      { q: "Do you repaint after ceiling repair?", a: "Yes, skim coating, primer, and paint can be included in the final quote." }
    ]
  },
  {
    slug: "ceiling-leak-after-rain",
    serviceSlug: "waterproofing",
    title: "Ceiling Leak After Rain",
    symptom: "Ceiling drips or stains only during or after rain, often below roof, balcony, or exterior wall areas.",
    costRange: "RM250–RM3,500+ depending on source and method",
    urgency: "High",
    causes: ["Roof tile or flashing leak", "Balcony waterproofing failure", "Cracked exterior wall", "Flat roof membrane failure"],
    solutions: ["Trace water path during inspection", "Seal roof or external cracks", "Apply suitable membrane system", "Repair damaged ceiling after leak is stopped"],
    whenToCall: ["Leak appears every rain", "Ceiling is soft or stained", "Water is near lights or electrical wiring"],
    faqs: [
      { q: "Why does ceiling leak only after rain?", a: "Rain-triggered leaks usually start from roof, balcony, external wall cracks, or flat roof waterproofing failure." },
      { q: "Can PU injection fix rain leaks?", a: "PU injection can seal concrete cracks, but roof or wall leaks may need external waterproofing or flashing repairs." },
      { q: "Should ceiling be repaired first?", a: "No. Stop the water source first, then replace or repaint the affected ceiling area." },
      { q: "Is this urgent?", a: "Yes if water is active, close to electrical points, or spreading quickly." }
    ]
  },
  {
    slug: "cracked-ceiling-joints",
    serviceSlug: "ceiling",
    title: "Cracked Ceiling Joints",
    symptom: "Straight-line cracks appear along plasterboard joints, especially after building movement or poor joint tape work.",
    costRange: "RM180–RM900+ based on crack length and repainting",
    urgency: "Medium",
    causes: ["Weak joint tape or compound", "Ceiling frame movement", "Water exposure softening joints", "Poor screw spacing"],
    solutions: ["Open and clean failed joint", "Re-tape with fiberglass mesh", "Apply joint compound and skim", "Prime and repaint for a seamless finish"],
    whenToCall: ["Cracks return after DIY filling", "Crack is wide or growing", "Nearby ceiling area is damp"],
    faqs: [
      { q: "Can I fill ceiling cracks with normal filler?", a: "Temporary filler often cracks again. Proper repair uses joint tape, compound, sanding, primer, and paint." },
      { q: "Do ceiling cracks mean structural damage?", a: "Most plasterboard joint cracks are finishing issues, but wide or moving cracks should be inspected." },
      { q: "Will the repaired joint be visible?", a: "A proper skim, sand, primer, and paint system should make the joint blend with the ceiling." },
      { q: "How long does joint repair take?", a: "Small repairs can be done in one day, but drying and repainting may extend the schedule." }
    ]
  },
  {
    slug: "condensation-ceiling-mold",
    serviceSlug: "ceiling",
    title: "Condensation Ceiling Mold",
    symptom: "Black mold or spotting appears in cool rooms, bathrooms, or air-conditioned spaces without obvious leaks.",
    costRange: "RM180–RM1,000+ depending on cleaning, board repair, and repainting",
    urgency: "Medium",
    causes: ["Poor ventilation", "Cold aircond surfaces meeting humid air", "Bathroom steam", "No anti-mold paint system"],
    solutions: ["Improve ventilation and exhaust", "Clean mold safely", "Use anti-mold primer and paint", "Replace damaged board if mold is embedded"],
    whenToCall: ["Mold returns after cleaning", "Ceiling board is soft", "Family members experience smell or irritation"],
    faqs: [
      { q: "Is condensation mold a leak?", a: "Not always. It can come from humidity and poor ventilation, but leak checks are still important." },
      { q: "Can anti-mold paint stop it permanently?", a: "Paint helps, but ventilation and humidity control must be fixed too." },
      { q: "Should moldy boards be replaced?", a: "If mold has penetrated soft or damp board, replacement is safer than surface cleaning only." },
      { q: "What rooms are most affected?", a: "Bathrooms, air-conditioned bedrooms, and poorly ventilated corners are common." }
    ]
  },
  {
    slug: "bathroom-leak-upper-floor",
    serviceSlug: "waterproofing",
    title: "Upper-Floor Bathroom Leak",
    symptom: "A lower ceiling drips below an upstairs bathroom, especially after showering or floor washing.",
    costRange: "RM250–RM9,000 depending on PU injection, no-hack coating, or full re-waterproofing",
    urgency: "High",
    causes: ["Failed tile grout", "Aged waterproofing membrane", "Concrete slab cracks", "Floor trap or pipe leakage"],
    solutions: ["Check fixture and trap leaks", "Use PU injection for active slab cracks", "Apply no-hack surface seal if suitable", "Full hacking and membrane replacement for severe failures"],
    whenToCall: ["Lower ceiling drips after every shower", "Stain grows wider", "Bathroom floor has hollow or cracked tiles"],
    faqs: [
      { q: "Can bathroom leaks be fixed without hacking tiles?", a: "Many slab leaks can be addressed with PU injection or no-hack surface systems, depending on the leak source." },
      { q: "How do you choose the method?", a: "We inspect the leak pattern, floor traps, grout, and ceiling moisture before recommending a repair method." },
      { q: "Is PU injection priced per point?", a: "PU injection is commonly priced per point, with final count based on crack line and leak severity." },
      { q: "Will you repair the damaged ceiling too?", a: "Yes, ceiling board replacement and repainting can be quoted after the leak is stopped." }
    ]
  },
  {
    slug: "roof-leak-rainy-season",
    serviceSlug: "waterproofing",
    title: "Roof Leak During Rainy Season",
    symptom: "Water enters during storms through roof tiles, gutters, flashing, or flat roof membranes.",
    costRange: "RM250–RM5,000+ depending on roof access and waterproofing scope",
    urgency: "High",
    causes: ["Cracked roof tiles", "Blocked gutters", "Failed flashing", "Aged flat roof membrane"],
    solutions: ["Inspect roof safely", "Clear gutters and downpipes", "Replace damaged tiles or flashing", "Apply suitable membrane or sealant system"],
    whenToCall: ["Leak gets worse during heavy rain", "Ceiling stains spread", "Roof access requires ladders or safety equipment"],
    faqs: [
      { q: "Can roof leaks be repaired during rain?", a: "Emergency containment may be possible, but permanent waterproofing usually needs a dry surface." },
      { q: "How do I know if it is roof or pipe leak?", a: "Rain-only leaks usually point to roof, gutter, balcony, or exterior wall sources rather than plumbing." },
      { q: "Do flat roofs need different waterproofing?", a: "Yes, flat roofs typically need membrane systems that handle ponding and UV exposure." },
      { q: "Can you repair the ceiling after roof leak?", a: "Yes, after the roof leak is controlled we can replace stained or damaged ceiling boards and repaint." }
    ]
  },
  {
    slug: "wall-dampness-rising",
    serviceSlug: "waterproofing",
    title: "Rising Damp and Lower Wall Peeling",
    symptom: "Paint flakes and white salts appear near the bottom of walls, often in older landed homes.",
    costRange: "RM300–RM3,000+ depending on wall length and waterproofing approach",
    urgency: "Medium",
    causes: ["Ground moisture wicking through masonry", "Failed damp-proof course", "Exterior paving trapping water", "Leaking pipe or bathroom wall behind"],
    solutions: ["Confirm whether moisture is ground or pipe-related", "Remove salt-contaminated plaster", "Apply damp-control barrier or suitable waterproofing", "Replaster and repaint with compatible system"],
    whenToCall: ["Lower paint keeps bubbling", "White salts return after cleaning", "Dampness spreads along the wall base"],
    faqs: [
      { q: "What is rising damp?", a: "Rising damp is moisture moving upward through porous wall materials from the ground or wet adjoining areas." },
      { q: "Can waterproof paint fix rising damp?", a: "Paint alone is not enough. Salt-contaminated plaster and moisture source must be treated first." },
      { q: "Is rising damp common in Malaysia?", a: "It appears in humid areas, older landed homes, and walls affected by drainage or external water exposure." },
      { q: "How long before repainting?", a: "The wall must be dried and treated properly before primer and paint are applied." }
    ]
  },
  {
    slug: "swimming-pool-leak-balcony",
    serviceSlug: "waterproofing",
    title: "Balcony or Pool Deck Leak",
    symptom: "Water seeps from balcony, pool deck, or terrace areas into rooms or ceilings below.",
    costRange: "RM850–RM12,000+ depending on surface area and hacking needs",
    urgency: "High",
    causes: ["Failed membrane under tiles", "Cracked grout or tile joints", "Poor floor falls causing ponding", "Movement cracks at wall-floor junctions"],
    solutions: ["Moisture map the leak path", "Seal cracks and junctions", "Apply no-hack coating if suitable", "Full membrane replacement for severe failures"],
    whenToCall: ["Leak appears after floor washing or rain", "Tiles sound hollow", "Ceiling below shows active dripping"],
    faqs: [
      { q: "Can balcony leaks be repaired without hacking?", a: "Some balcony leaks can be addressed with surface systems, but severe membrane failure may require tile removal." },
      { q: "Why is ponding a problem?", a: "Standing water increases pressure on weak grout, cracks, and membrane defects, making leaks return." },
      { q: "Do you do ponding tests?", a: "For suitable waterproofing scopes, water ponding tests confirm whether the repaired area resists seepage." },
      { q: "How is pricing calculated?", a: "Pricing depends on area size, access, surface condition, crack treatment, and whether hacking is needed." }
    ]
  },
  {
    slug: "loose-door-hinge",
    serviceSlug: "handyman",
    title: "Loose Door Hinge or Scraping Door",
    symptom: "Door drops, scrapes the floor, fails to latch, or hinges pull loose from the frame.",
    costRange: "RM90–RM350+ depending on hinge and frame condition",
    urgency: "Medium",
    causes: ["Loose screws in timber frame", "Worn hinges", "Humidity swelling timber door", "Misaligned latch plate"],
    solutions: ["Tighten or replace screws with stronger anchors", "Replace hinge set", "Plane swollen door edges", "Realign strike plate and test latch"],
    whenToCall: ["Door cannot close securely", "Frame timber is cracked", "Door is heavy or has a digital lock"],
    faqs: [
      { q: "Can a scraping door be fixed without replacing it?", a: "Usually yes. Hinge adjustment, planing, or strike-plate alignment often restores smooth operation." },
      { q: "Do you supply hinges?", a: "Standard hinges can be supplied, or we can install customer-supplied hardware." },
      { q: "Can you fix bedroom and main doors?", a: "Yes, we repair common timber doors, hinges, handles, locksets, and latch alignment." },
      { q: "How long does door repair take?", a: "Most minor hinge or latch repairs take under one hour." }
    ]
  },
  {
    slug: "tv-fell-off-wall",
    serviceSlug: "handyman",
    title: "Unsafe TV Wall Mount or Failed Anchors",
    symptom: "TV bracket is loose, wall plugs are pulling out, or TV was mounted on the wrong wall anchor type.",
    costRange: "RM120–RM450+ depending on TV size, bracket, and wall type",
    urgency: "High",
    causes: ["Wrong anchor for hollow wall", "No stud detection", "Overloaded low-grade bracket", "Poor drilling depth or wall material"],
    solutions: ["Remove unsafe bracket", "Identify wall type and studs", "Use suitable anchors or mount points", "Weight-test and level the installation"],
    whenToCall: ["Bracket moves when touched", "TV is on gypsum partition", "TV is above children or furniture"],
    faqs: [
      { q: "Can a TV be mounted on gypsum board?", a: "Yes, but it needs correct heavy-duty hollow-wall anchors or studs. Basic plastic plugs are unsafe." },
      { q: "Do you hide TV wires?", a: "Wire trunking or concealed cable options can be discussed depending on wall type." },
      { q: "Should I buy the bracket first?", a: "You can, but we can also advise whether fixed, tilt, or full-motion brackets suit your TV and wall." },
      { q: "How long does TV mounting take?", a: "A standard TV mount usually takes 45–90 minutes depending on wall type and cable work." }
    ]
  },
  {
    slug: "stuck-window-lock",
    serviceSlug: "handyman",
    title: "Stuck Window Lock or Handle",
    symptom: "Window handle jams, lock no longer catches, or sliding window does not close securely.",
    costRange: "RM80–RM300+ depending on parts and window type",
    urgency: "Medium",
    causes: ["Worn lock mechanism", "Misaligned sliding track", "Rust or dirt buildup", "Frame movement over time"],
    solutions: ["Clean and realign track", "Adjust lock catch", "Replace handle or latch", "Lubricate and test smooth closing"],
    whenToCall: ["Window cannot lock for security", "Glass panel feels unstable", "Track or frame is bent"],
    faqs: [
      { q: "Can old window locks be replaced?", a: "Yes, many common handles and latches can be replaced if compatible parts are available." },
      { q: "Do you repair sliding windows?", a: "We can adjust tracks, handles, latches, and minor alignment issues for common residential windows." },
      { q: "Is this an emergency?", a: "It is urgent if the window cannot be secured, especially on lower floors or accessible balconies." },
      { q: "Should I send photos first?", a: "Yes, photos of the handle, lock, and full window help us prepare the right tools and parts." }
    ]
  },
  {
    slug: "ikea-furniture-assembly-help",
    serviceSlug: "handyman",
    title: "IKEA or Flat-Pack Furniture Assembly Help",
    symptom: "Wardrobes, beds, shelves, or desks are difficult to assemble, unstable, or need wall anchoring.",
    costRange: "RM100–RM600+ depending on furniture size and complexity",
    urgency: "Low",
    causes: ["Complex flat-pack instructions", "Missing or mixed hardware", "Large wardrobes needing two-person handling", "Wall anchoring required for safety"],
    solutions: ["Sort parts and hardware", "Assemble frame square and level", "Secure heavy units to wall where required", "Adjust doors, drawers, and hinges"],
    whenToCall: ["Furniture is heavy or tall", "Anchoring is required", "Previous assembly is unstable"],
    faqs: [
      { q: "Do you assemble IKEA and Taobao furniture?", a: "Yes, we assemble common flat-pack wardrobes, beds, desks, cabinets, shelves, and storage units." },
      { q: "Do you anchor wardrobes to walls?", a: "Yes, we recommend anchoring tall or heavy furniture where safety requires it." },
      { q: "Can you fix wrongly assembled furniture?", a: "Often yes, but damaged panels or missing hardware may require replacement parts." },
      { q: "How is assembly priced?", a: "Pricing depends on furniture size, number of items, complexity, and whether wall drilling is required." }
    ]
  },

  // ==================== NEW PROBLEMS (Round 13) ====================

  // ELECTRICAL
  {
    slug: "rccb-tripping-kl",
    serviceSlug: "electrical",
    title: "RCCB / ELCB Keeps Tripping in KL Homes",
    symptom: "Main RCCB trips repeatedly, especially when AC, water heater or multiple appliances are turned on.",
    costRange: "RM180–RM850+ depending on diagnosis and DB upgrade",
    urgency: "High",
    causes: ["Faulty appliance leaking current", "Worn or damaged wiring", "Water ingress in DB box", "Overloaded circuit"],
    solutions: ["Isolate faulty circuit with multimeter test", "Replace damaged wiring or appliance", "Install new RCCB if needed", "Upgrade DB box for better load distribution"],
    whenToCall: ["Trips even with all appliances off", "Burning smell near DB box", "Multiple RCCBs affected"],
    faqs: [
      { q: "Is it safe to keep resetting the RCCB?", a: "No — repeated tripping indicates a real fault. Resetting without diagnosis can lead to fire or shock risk." },
      { q: "Can you fix RCCB tripping without changing the whole DB?", a: "Often yes. We first isolate the faulty circuit and only replace the RCCB or rewire the affected line." },
      { q: "How long does diagnosis take?", a: "Usually 30–60 minutes. We test each circuit systematically." },
      { q: "Do you provide ST-registered electricians?", a: "Yes, all electrical work is handled by licensed wiremen registered with ST (Suruhanjaya Tenaga)." }
    ]
  },
  {
    slug: "flickering-lights-kl",
    serviceSlug: "electrical",
    title: "Flickering Lights or Dimming When Appliances Turn On",
    symptom: "Lights flicker or dim when AC, water heater, or microwave starts.",
    costRange: "RM120–RM650+ depending on wiring and DB work",
    urgency: "Medium",
    causes: ["Undersized wiring", "Loose connections in DB or junction box", "Shared circuit overload", "Faulty dimmer or LED driver"],
    solutions: ["Tighten all connections", "Separate high-load appliances onto dedicated circuits", "Upgrade cable size if needed", "Replace faulty dimmer/LED driver"],
    whenToCall: ["Flickering is constant or worsening", "Lights dim across multiple rooms", "Burning smell or warm switch plates"],
    faqs: [
      { q: "Is flickering lights dangerous?", a: "It can be. Loose connections create heat and are a common cause of electrical fires." },
      { q: "Can LED bulbs cause flickering?", a: "Yes, especially with incompatible dimmers or poor-quality drivers. We test and replace if needed." },
      { q: "How much does it cost to fix?", a: "Simple connection tightening starts from RM120. Full circuit separation or DB work can go up to RM650." }
    ]
  },

  // WATER HEATER
  {
    slug: "water-heater-not-heating",
    serviceSlug: "water-heater",
    title: "Instant Water Heater Not Heating or Weak Flow",
    symptom: "No hot water or very slow heating even after 2–3 minutes.",
    costRange: "RM150–RM680+ depending on element or unit replacement",
    urgency: "High",
    causes: ["Burnt heating element", "Thermostat failure", "Blocked inlet filter", "Air lock in pipes"],
    solutions: ["Replace heating element", "Clean or replace filter", "Bleed air from system", "Install new unit if tank is old"],
    whenToCall: ["No hot water for more than 2 days", "Unit trips power when turned on", "Visible leakage around heater"],
    faqs: [
      { q: "Can you repair or must I replace?", a: "Most instant heaters can be repaired by replacing the element (RM150–RM280). Full replacement only if the tank is leaking." },
      { q: "How long does replacement take?", a: "Standard instant heater replacement takes 1–2 hours including testing." },
      { q: "Do you supply popular brands?", a: "We install Joven, Rheem, Alpha, Faber and Rinnai models." }
    ]
  },

  // CEILING FAN
  {
    slug: "ceiling-fan-wobbling",
    serviceSlug: "ceiling-fan",
    title: "Ceiling Fan Wobbling or Vibrating Loudly",
    symptom: "Fan wobbles, makes noise, or feels unstable when running at medium/high speed.",
    costRange: "RM90–RM380+ depending on balancing or replacement",
    urgency: "Medium",
    causes: ["Unbalanced blades", "Loose mounting bracket", "Worn motor bearings", "Ceiling hook not reinforced"],
    solutions: ["Balance blades with provided weights", "Tighten or replace mounting bracket", "Reinforce ceiling hook with proper anchor", "Replace fan if motor is faulty"],
    whenToCall: ["Wobble is severe or getting worse", "Fan is mounted on false ceiling", "Noise is very loud"],
    faqs: [
      { q: "Can you balance the fan without replacing it?", a: "Yes — most wobble issues are fixed by balancing blades and tightening the bracket." },
      { q: "Is it safe on plaster ceiling?", a: "Only if a proper reinforced fan hook was installed during ceiling work. We check and reinforce if needed." },
      { q: "How long does balancing take?", a: "Usually 30–45 minutes including safety check." }
    ]
  },

  // TILING
  {
    slug: "hollow-tiles-floor",
    serviceSlug: "tiling",
    title: "Hollow Sounding Tiles or Loose Floor Tiles",
    symptom: "Tiles sound hollow when tapped and some are lifting or cracking.",
    costRange: "RM180–RM1,200+ depending on area and substrate repair",
    urgency: "Medium",
    causes: ["Poor adhesive coverage", "Movement in substrate", "Water seepage under tiles", "Wrong trowel size used"],
    solutions: ["Remove loose tiles", "Clean and re-prep substrate", "Re-lay with proper adhesive and coverage", "Apply decoupling membrane on timber floors"],
    whenToCall: ["Multiple tiles are hollow or lifting", "Water is seeping through grout", "Tiles are in high-traffic area"],
    faqs: [
      { q: "Can hollow tiles be fixed without removing all tiles?", a: "Sometimes — we can inject adhesive under individual tiles if the area is small." },
      { q: "Do you use decoupling membrane?", a: "Yes on timber or unstable substrates to prevent future cracking." },
      { q: "How soon can you start?", a: "Usually within 1–2 days after inspection." }
    ]
  },

  // FLOORING
  {
    slug: "spc-flooring-peeling-edges",
    serviceSlug: "flooring",
    title: "SPC / Vinyl Flooring Peeling at Edges or Seams",
    symptom: "Flooring edges are lifting, seams opening, or planks are buckling.",
    costRange: "RM120–RM950+ depending on area and cause",
    urgency: "Medium",
    causes: ["Moisture under floor", "Improper expansion gap", "Poor subfloor preparation", "Heavy furniture dragging"],
    solutions: ["Lift affected planks", "Dry and level subfloor", "Re-install with correct expansion gaps", "Apply moisture barrier if needed"],
    whenToCall: ["Edges lifting in multiple rooms", "Visible water damage", "Floor feels spongy"],
    faqs: [
      { q: "Can you repair only the damaged area?", a: "Yes for small areas. Large areas usually need partial or full re-installation." },
      { q: "Do you check moisture before installation?", a: "Always — we test subfloor moisture content before any SPC or vinyl work." }
    ]
  },

  // ROOF REPAIR
  {
    slug: "clogged-gutter-leaking",
    serviceSlug: "roof-repair",
    title: "Clogged Gutter Causing Roof Leak or Overflow",
    symptom: "Water overflows from gutter during rain, causing wall or ceiling leaks.",
    costRange: "RM280–RM1,200+ depending on cleaning + repair scope",
    urgency: "High",
    causes: ["Leaves, debris and moss buildup", "Sagging or misaligned gutter", "Blocked downpipe", "Missing or damaged gutter guards"],
    solutions: ["Clear all debris safely", "Realign or replace damaged sections", "Install gutter guards", "Check and repair fascia board if rotted"],
    whenToCall: ["Water is entering the house", "Gutter is sagging or detached", "Multiple downpipes blocked"],
    faqs: [
      { q: "How often should gutters be cleaned in Malaysia?", a: "At least twice a year (before and after monsoon season)." },
      { q: "Do you install gutter guards?", a: "Yes — we recommend leaf guards on landed properties with trees nearby." }
    ]
  },

  // KITCHEN CABINET
  {
    slug: "kitchen-cabinet-door-misaligned",
    serviceSlug: "kitchen-cabinet",
    title: "Kitchen Cabinet Doors Misaligned or Not Closing Properly",
    symptom: "Cabinet doors are uneven, rubbing, or will not stay closed.",
    costRange: "RM90–RM450+ depending on hinge replacement and adjustment",
    urgency: "Low",
    causes: ["Worn or loose hinges", "Cabinet frame movement", "Heavy items inside causing sag", "Wrong hinge type for door weight"],
    solutions: ["Adjust or replace hinges", "Reinforce cabinet frame", "Add soft-close dampers", "Realign doors"],
    whenToCall: ["Multiple doors affected", "Doors are heavy or have glass", "Cabinet frame feels loose"],
    faqs: [
      { q: "Can you fix soft-close hinges?", a: "Yes — we replace with Blum or Häfele soft-close hinges." },
      { q: "Do you repair existing cabinets or only new?", a: "We repair and adjust existing kitchen cabinets as well as install new ones." }
    ]
  },

  // LIGHTING
  {
    slug: "flickering-downlights",
    serviceSlug: "lighting",
    title: "Downlights Flickering or Not Turning On",
    symptom: "LED downlights flicker, buzz, or fail to turn on after a few months.",
    costRange: "RM80–RM320+ per point depending on driver replacement",
    urgency: "Medium",
    causes: ["Incompatible or cheap LED driver", "Loose wiring in ceiling", "Overheating due to poor ventilation", "Voltage fluctuation"],
    solutions: ["Replace faulty LED driver", "Check and secure wiring", "Install better quality downlights", "Add ventilation or heat sink"],
    whenToCall: ["Multiple downlights affected", "Burning smell from ceiling", "Lights trip the circuit"],
    faqs: [
      { q: "Why do new downlights flicker?", a: "Usually caused by low-quality drivers or incompatible dimmers. We replace with quality drivers." },
      { q: "Can you replace only the driver?", a: "Yes — most flickering issues are fixed by replacing the driver without changing the fitting." }
    ]
  },

  // PLASTER CEILING
  {
    slug: "plaster-ceiling-cracking-joints",
    serviceSlug: "plaster-ceiling",
    title: "Plaster Ceiling Joint Cracking After Installation",
    symptom: "Straight cracks appear along plasterboard joints within months of installation.",
    costRange: "RM150–RM850+ depending on area",
    urgency: "Medium",
    causes: ["Insufficient joint tape or compound", "Frame movement", "High humidity", "Poor screw spacing"],
    solutions: ["Cut out and re-tape joints with fiberglass mesh", "Apply multiple layers of compound", "Skim entire ceiling", "Improve ventilation"],
    whenToCall: ["Cracks are widening", "Multiple rooms affected", "Ceiling feels flexible"],
    faqs: [
      { q: "Is cracking normal in new plaster ceiling?", a: "Minor hairline cracks can happen, but wide or recurring cracks indicate poor jointing or movement." },
      { q: "Can you fix without repainting the whole ceiling?", a: "Yes for small areas — we blend the repair seamlessly." }
    ]
  },

  // SKIM COAT
  {
    slug: "peeling-skim-coat",
    serviceSlug: "skim-coat",
    title: "Skim Coat Peeling or Powdering After Painting",
    symptom: "New skim coat surface is powdery, peeling, or not holding paint well.",
    costRange: "RM120–RM680+ depending on area",
    urgency: "Medium",
    causes: ["Poor surface preparation", "Wrong mixing ratio", "High humidity during application", "Incompatible primer"],
    solutions: ["Scrape loose material", "Re-apply proper bonding agent", "Re-skim with correct mix", "Use quality primer before painting"],
    whenToCall: ["Large areas affected", "Powder comes off when touched", "Paint is bubbling"],
    faqs: [
      { q: "Why does skim coat peel after painting?", a: "Usually due to dust, moisture, or poor bonding. We fix the substrate first then re-skim." },
      { q: "How long should skim coat dry before painting?", a: "Minimum 7–14 days depending on thickness and humidity." }
    ]
  },

  // EPOXY FLOORING
  {
    slug: "epoxy-floor-yellowing",
    serviceSlug: "epoxy-flooring",
    title: "Epoxy Floor Yellowing or Discoloring",
    symptom: "New epoxy floor has turned yellow, especially in areas exposed to sunlight.",
    costRange: "RM280–RM1,800+ depending on area",
    urgency: "Low",
    causes: ["Non-UV stable topcoat", "Cheap epoxy resin", "Prolonged direct sunlight", "Chemical exposure"],
    solutions: ["Apply UV-stable aliphatic PU topcoat", "Sand and recoat affected areas", "Use pigmented flake system", "Install window film or blinds"],
    whenToCall: ["Yellowing is spreading rapidly", "Surface feels sticky", "Client wants premium finish"],
    faqs: [
      { q: "Can yellowed epoxy be fixed?", a: "Yes — we sand the surface and apply a UV-stable topcoat." },
      { q: "How do you prevent yellowing?", a: "Always use aliphatic PU topcoat on areas exposed to sunlight." }
    ]
  },

  // CARPENTRY
  {
    slug: "wardrobe-door-not-closing",
    serviceSlug: "carpentry",
    title: "Built-in Wardrobe Door Not Closing or Misaligned",
    symptom: "Wardrobe doors are uneven, rubbing against each other, or will not close flush.",
    costRange: "RM120–RM580+ depending on adjustment or hinge work",
    urgency: "Low",
    causes: ["Frame not level during installation", "Warped doors", "Worn hinges", "Heavy items causing sag"],
    solutions: ["Level the frame", "Adjust or replace hinges", "Plane doors if needed", "Add support shelves"],
    whenToCall: ["Multiple doors affected", "Doors are heavy or tall", "Frame feels loose"],
    faqs: [
      { q: "Can you fix existing wardrobes?", a: "Yes — we repair and adjust built-in wardrobes, replace hinges, and realign doors." },
      { q: "Do you use soft-close hinges?", a: "Yes — we install Blum or Häfele soft-close systems." }
    ]
  },

  // DOOR
  {
    slug: "door-scraping-floor",
    serviceSlug: "door",
    title: "Door Scraping Floor or Not Latching Properly",
    symptom: "Door drags on floor, scrapes carpet, or latch does not catch.",
    costRange: "RM80–RM350+ depending on work needed",
    urgency: "Medium",
    causes: ["Door swelling from humidity", "Loose hinges", "Floor level change", "Misaligned strike plate"],
    solutions: ["Plane bottom of door", "Tighten or replace hinges", "Adjust strike plate", "Add door sweep if needed"],
    whenToCall: ["Door is heavy or has digital lock", "Multiple doors affected", "Security concern"],
    faqs: [
      { q: "Can you plane the door without removing it?", a: "Yes for minor adjustments. Heavier doors may need removal." },
      { q: "Do you repair fire-rated doors?", a: "Yes — we maintain the fire rating during repairs." }
    ]
  },

  // WINDOW REPAIR
  {
    slug: "sliding-window-stuck",
    serviceSlug: "window-repair",
    title: "Sliding Window Stuck or Hard to Open",
    symptom: "Sliding window is difficult to move, jumps off track, or will not lock.",
    costRange: "RM90–RM420+ depending on parts",
    urgency: "Medium",
    causes: ["Dirty or damaged rollers", "Warped track", "Misaligned frame", "Broken lock mechanism"],
    solutions: ["Clean and lubricate track", "Replace rollers", "Realign frame", "Replace lock or handle"],
    whenToCall: ["Window is on upper floor", "Security risk", "Glass is loose"],
    faqs: [
      { q: "Can you replace window rollers?", a: "Yes — we stock common roller sizes for aluminium and UPVC windows." },
      { q: "Do you repair casement windows too?", a: "Yes — hinges, handles, and seals for all common window types." }
    ]
  },

  // LOCKSMITH
  {
    slug: "smart-lock-not-working",
    serviceSlug: "locksmith",
    title: "Smart Lock Not Responding or Battery Draining Fast",
    symptom: "Digital/smart lock is unresponsive, app not connecting, or battery drains quickly.",
    costRange: "RM150–RM680+ depending on model and issue",
    urgency: "High",
    causes: ["Low or faulty battery", "App pairing issue", "Motor failure", "Wrong installation"],
    solutions: ["Replace battery", "Re-pair with app", "Replace motor module", "Re-install correctly"],
    whenToCall: ["Lock is completely dead", "Door cannot be opened", "Multiple locks affected"],
    faqs: [
      { q: "Can you install Yale, Samsung or Tuya smart locks?", a: "Yes — we install and configure all popular smart lock brands." },
      { q: "Do you provide emergency lockout service?", a: "Yes — 24/7 emergency lockout service available." }
    ]
  },

  // GLASS & ALUMINIUM
  {
    slug: "shower-screen-leaking",
    serviceSlug: "glass-aluminium",
    title: "Frameless Shower Screen Leaking at Bottom",
    symptom: "Water leaks from the bottom of the shower screen onto the floor.",
    costRange: "RM180–RM750+ depending on seal replacement",
    urgency: "Medium",
    causes: ["Worn bottom seal", "Incorrect slope", "Frame not level", "Silicone failure"],
    solutions: ["Replace bottom seal", "Re-silicone joints", "Adjust frame level", "Add threshold strip"],
    whenToCall: ["Leak is spreading to other areas", "Screen is loose", "Multiple screens affected"],
    faqs: [
      { q: "Can you replace only the seal?", a: "Yes — most leaks are fixed by replacing the bottom wipe seal and re-siliconing." },
      { q: "Do you install frameless shower screens?", a: "Yes — we supply and install 10mm tempered glass frameless systems." }
    ]
  },

  // CCTV
  {
    slug: "cctv-not-recording",
    serviceSlug: "cctv",
    title: "CCTV Camera Not Recording or Footage Missing",
    symptom: "Cameras show live view but no recordings, or footage is corrupted/missing.",
    costRange: "RM180–RM850+ depending on NVR/HDD issue",
    urgency: "High",
    causes: ["HDD failure", "NVR settings error", "Network issue", "Power supply problem", "Camera firmware issue"],
    solutions: ["Check and replace HDD", "Reconfigure recording schedule", "Update firmware", "Check network and power"],
    whenToCall: ["No recordings for several days", "Multiple cameras affected", "Important footage needed"],
    faqs: [
      { q: "Can you recover lost footage?", a: "Sometimes — we attempt data recovery from the HDD before replacement." },
      { q: "Do you install Hikvision and Dahua systems?", a: "Yes — we are experienced with Hikvision, Dahua, Ezviz and Tuya systems." }
    ]
  },

  // AUTOGATE
  {
    slug: "autogate-not-closing",
    serviceSlug: "autogate",
    title: "Autogate Not Closing or Motor Running Continuously",
    symptom: "Autogate opens but will not close, or motor keeps running without stopping.",
    costRange: "RM250–RM1,200+ depending on motor or sensor replacement",
    urgency: "High",
    causes: ["Faulty limit switch", "Obstruction sensor blocked", "Motor capacitor failure", "Remote or board issue"],
    solutions: ["Replace limit switch", "Clean or replace safety sensors", "Replace motor capacitor", "Reprogram control board"],
    whenToCall: ["Gate is stuck open/closed", "Motor is overheating", "Security risk"],
    faqs: [
      { q: "Can you repair existing autogate motors?", a: "Yes — we repair and service Autogate 2000, Nice, FAAC and many other brands." },
      { q: "Do you install battery backup?", a: "Yes — we recommend and install battery backup for power outages." }
    ]
  },

  // WELDING
  {
    slug: "rusting-window-grille",
    serviceSlug: "welding",
    title: "Window Grille or Gate Rusting Quickly",
    symptom: "New or recently painted grille/gate shows rust spots within months.",
    costRange: "RM150–RM680+ depending on area and treatment",
    urgency: "Medium",
    causes: ["Poor surface preparation before painting", "Low-quality paint or primer", "Coastal or humid area", "Scratches exposing metal"],
    solutions: ["Sandblast and re-prime", "Apply rust converter + high-quality paint", "Hot-dip galvanise if possible", "Powder coat for better durability"],
    whenToCall: ["Rust is spreading fast", "Structural concern", "Multiple grilles affected"],
    faqs: [
      { q: "Can you repaint existing grilles?", a: "Yes — we sandblast, treat rust, and apply proper primer + topcoat system." },
      { q: "Is powder coating better than paint?", a: "Yes — powder coating is more durable and recommended for coastal or high-humidity areas." }
    ]
  }
];

// Additional problem entries (kept in a separate file for
// readability; combined here so `problemPages` remains the single
// source of truth used across the app and schemas).
import { extraProblemPages } from "@/config/problem-data-extra";

/**
 * Merge the extras, dropping any slug already defined above.
 *
 * `problem-data-extra.ts` re-declared `ceiling-fan-wobbling` and
 * `epoxy-floor-yellowing`, which are also defined in this file. Page lookups
 * use `.find()`, so the first record always won and the second was dead data —
 * but it still inflated the array, emitting duplicate `<loc>` entries in
 * sitemap.xml and double-counting questions in the `/faq` directory.
 * De-duplicating here keeps the rendered content identical while making the
 * collection internally consistent.
 */
const seenProblemSlugs = new Set(problemPages.map((problem) => problem.slug));
const uniqueExtraProblemPages = extraProblemPages.filter((problem) => {
  if (seenProblemSlugs.has(problem.slug)) return false;
  seenProblemSlugs.add(problem.slug);
  return true;
});

export const allProblemPages: ProblemDetail[] = [...problemPages, ...uniqueExtraProblemPages];

// Overwrite the exported array (import site expects `problemPages`
// to include every problem). Downstream code uses `problemPages`
// directly, so we mutate-append rather than shadow-export.
(problemPages as ProblemDetail[]).push(...uniqueExtraProblemPages);

export const problemSlugs = problemPages.map((problem) => problem.slug);

// Trilingual problem content (MS + ZH) — Round 14
export type LocalizedProblemContent = {
  title: string;
  symptom: string;
  costRange: string;
  causes: string[];
  solutions: string[];
  whenToCall: string[];
  faqs: { q: string; a: string }[];
};

// Overrides may be partial: the original 43 carry the full content block,
// while the 34 later problems supply only the fields not already covered by
// `config/problem-body-i18n.ts` (title, costRange and faqs). `getLocalizedProblem`
// falls back field-by-field to the English record, so partial overrides are safe.
export const problemI18n: Partial<Record<string, Partial<Record<"ms" | "zh", Partial<LocalizedProblemContent>>>>> = {
  "rccb-tripping-kl": {
    ms: {
      title: "RCCB / ELCB Kerap Trip di Rumah KL",
      symptom: "RCCB utama kerap trip, terutamanya apabila AC, pemanas air atau beberapa perkakas dihidupkan.",
      costRange: "RM180–RM850+ bergantung kepada diagnosis dan naik taraf DB",
      causes: ["Perkakas rosak bocor arus", "Pendawaian haus atau rosak", "Air masuk ke dalam DB box", "Litar beban berlebihan"],
      solutions: ["Asingkan litar rosak dengan ujian multimeter", "Ganti pendawaian atau perkakas rosak", "Pasang RCCB baru jika perlu", "Naik taraf DB box untuk agihan beban lebih baik"],
      whenToCall: ["Trip walaupun semua perkakas dimatikan", "Bau hangus berhampiran DB box", "Beberapa RCCB terjejas"],
      faqs: [
        { q: "Selamat ke jika saya terus reset RCCB?", a: "Tidak — trip berulang menunjukkan kerosakan sebenar. Reset tanpa diagnosis boleh menyebabkan risiko kebakaran atau kejutan elektrik." },
        { q: "Boleh anda betulkan tanpa tukar keseluruhan DB?", a: "Selalunya boleh. Kami mula-mula asingkan litar rosak dan hanya ganti RCCB atau pendawaian semula bahagian yang terjejas." },
        { q: "Berapa lama masa diagnosis?", a: "Biasanya 30–60 minit. Kami uji setiap litar secara sistematik." },
        { q: "Adakah anda ada juruelektrik berdaftar ST?", a: "Ya, semua kerja elektrik dikendalikan oleh wiremen berlesen berdaftar dengan ST (Suruhanjaya Tenaga)." }
      ]
    },
    zh: {
      title: "KL 住宅 RCCB / ELCB 频繁跳闸",
      symptom: "主 RCCB 频繁跳闸，尤其在开启空调、热水器或多个电器时。",
      costRange: "RM180–RM850+，视诊断和 DB 升级而定",
      causes: ["电器漏电", "电线磨损或损坏", "DB 箱进水", "电路过载"],
      solutions: ["用万用表隔离故障电路", "更换损坏的电线或电器", "必要时安装新 RCCB", "升级 DB 箱以更好地分配负载"],
      whenToCall: ["所有电器关闭仍跳闸", "DB 箱附近有焦味", "多个 RCCB 受影响"],
      faqs: [
        { q: "一直重置 RCCB 安全吗？", a: "不安全——反复跳闸表示存在真实故障。未诊断就重置可能导致火灾或触电风险。" },
        { q: "可以不更换整个 DB 箱就修复吗？", a: "通常可以。我们先隔离故障电路，只更换 RCCB 或重新布线受影响线路。" },
        { q: "诊断需要多长时间？", a: "通常 30–60 分钟。我们系统地测试每个电路。" },
        { q: "你们有 ST 注册电工吗？", a: "有，所有电气工作由 Suruhanjaya Tenaga (ST) 注册的持牌电工处理。" }
      ]
    }
  },
  "flickering-lights-kl": {
    ms: {
      title: "Lampu Berkelip atau Malap Apabila Perkakas Dihidupkan",
      symptom: "Lampu berkelip atau malap apabila AC, pemanas air atau microwave dihidupkan.",
      costRange: "RM120–RM650+ bergantung kepada pendawaian dan kerja DB",
      causes: ["Pendawaian terlalu kecil", "Sambungan longgar di DB atau kotak simpang", "Litar kongsi beban berlebihan", "Dimmer atau LED driver rosak"],
      solutions: ["Ketatkan semua sambungan", "Asingkan perkakas beban tinggi ke litar khas", "Naik taraf saiz kabel jika perlu", "Ganti dimmer/LED driver rosak"],
      whenToCall: ["Berkelip berterusan atau semakin teruk", "Lampu malap di pelbagai bilik", "Bau hangus atau plat suis panas"],
      faqs: [
        { q: "Adakah lampu berkelip berbahaya?", a: "Boleh jadi. Sambungan longgar menghasilkan haba dan merupakan punca biasa kebakaran elektrik." },
        { q: "Boleh mentol LED menyebabkan berkelip?", a: "Ya, terutamanya dengan dimmer yang tidak serasi atau driver berkualiti rendah. Kami uji dan ganti jika perlu." },
        { q: "Berapa kos untuk membaiki?", a: "Pengetatan sambungan mudah bermula dari RM120. Pemisahan litar penuh atau kerja DB boleh mencecah RM650." }
      ]
    },
    zh: {
      title: "电器开启时灯光闪烁或变暗",
      symptom: "开启空调、热水器或微波炉时灯光闪烁或变暗。",
      costRange: "RM120–RM650+，视布线和 DB 工作而定",
      causes: ["电线规格过小", "DB 或接线盒连接松动", "共享电路过载", "调光器或 LED 驱动器故障"],
      solutions: ["紧固所有连接", "将高负载电器分离到专用电路", "必要时升级电缆规格", "更换故障调光器/LED 驱动器"],
      whenToCall: ["闪烁持续或加剧", "多个房间灯光变暗", "有焦味或开关板发热"],
      faqs: [
        { q: "灯光闪烁危险吗？", a: "可能危险。松动连接会产生热量，是电气火灾的常见原因。" },
        { q: "LED 灯泡会导致闪烁吗？", a: "是的，尤其是与不兼容的调光器或劣质驱动器搭配时。我们会测试并在必要时更换。" },
        { q: "修复费用是多少？", a: "简单连接紧固从 RM120 起。完整电路分离或 DB 工作最高可达 RM650。" }
      ]
    }
  },
  "water-heater-not-heating": {
    ms: {
      title: "Pemanas Air Segera Tidak Panas atau Aliran Lemah",
      symptom: "Tiada air panas atau pemanasan sangat perlahan walaupun selepas 2–3 minit.",
      costRange: "RM150–RM680+ bergantung kepada elemen atau penggantian unit",
      causes: ["Elemen pemanas terbakar", "Termostat rosak", "Penapis masuk tersumbat", "Air lock dalam paip"],
      solutions: ["Ganti elemen pemanas", "Bersihkan atau ganti penapis", "Buang udara dari sistem", "Pasang unit baru jika tangki lama"],
      whenToCall: ["Tiada air panas lebih dari 2 hari", "Unit trip kuasa apabila dihidupkan", "Kebocoran kelihatan di sekitar pemanas"],
      faqs: [
        { q: "Boleh anda membaiki atau mesti saya ganti?", a: "Kebanyakan pemanas segera boleh dibaiki dengan mengganti elemen (RM150–RM280). Penggantian penuh hanya jika tangki bocor." },
        { q: "Berapa lama masa penggantian?", a: "Penggantian pemanas segera standard mengambil 1–2 jam termasuk ujian." },
        { q: "Adakah anda membekalkan jenama popular?", a: "Kami pasang model Joven, Rheem, Alpha, Faber dan Rinnai." }
      ]
    },
    zh: {
      title: "即热式热水器不加热或水流弱",
      symptom: "即使运行 2–3 分钟后仍无热水或加热非常缓慢。",
      costRange: "RM150–RM680+，视加热元件或整机更换而定",
      causes: ["加热元件烧毁", "温控器故障", "进水过滤器堵塞", "管道内有气锁"],
      solutions: ["更换加热元件", "清洁或更换过滤器", "从系统中排气", "如水箱老化则更换新机"],
      whenToCall: ["超过 2 天无热水", "开机时跳闸", "热水器周围有明显漏水"],
      faqs: [
        { q: "可以维修还是必须更换？", a: "大多数即热式热水器可通过更换加热元件修复（RM150–RM280）。只有水箱漏水时才需整机更换。" },
        { q: "更换需要多长时间？", a: "标准即热式热水器更换通常需 1–2 小时（含测试）。" },
        { q: "你们供应热门品牌吗？", a: "我们安装 Joven、Rheem、Alpha、Faber 和 Rinnai 型号。" }
      ]
    }
  },
  "ceiling-fan-wobbling": {
    ms: {
      title: "Kipas Siling Bergetar atau Bising Kuat",
      symptom: "Kipas bergetar, mengeluarkan bunyi atau terasa tidak stabil apabila berjalan pada kelajuan sederhana/tinggi.",
      costRange: "RM90–RM380+ bergantung kepada pengimbangan atau penggantian",
      causes: ["Bilah tidak seimbang", "Pendakap pemasangan longgar", "Bearing motor haus", "Cangkuk siling tidak diperkuat"],
      solutions: ["Imbangkan bilah dengan berat yang disediakan", "Ketatkan atau ganti pendakap pemasangan", "Perkuat cangkuk siling dengan angker yang betul", "Ganti kipas jika motor rosak"],
      whenToCall: ["Getaran teruk atau semakin teruk", "Kipas dipasang pada siling palsu", "Bunyi sangat kuat"],
      faqs: [
        { q: "Boleh anda imbangkan kipas tanpa menggantinya?", a: "Ya — kebanyakan masalah getaran diperbaiki dengan mengimbangkan bilah dan mengetatkan pendakap." },
        { q: "Selamat ke pada siling plaster?", a: "Hanya jika cangkuk kipas yang diperkuat telah dipasang semasa kerja siling. Kami periksa dan perkuat jika perlu." },
        { q: "Berapa lama masa pengimbangan?", a: "Biasanya 30–45 minit termasuk pemeriksaan keselamatan." }
      ]
    },
    zh: {
      title: "吊扇晃动或噪音大",
      symptom: "吊扇在中高速时晃动、发出噪音或感觉不稳。",
      costRange: "RM90–RM380+，视平衡校正或更换而定",
      causes: ["扇叶不平衡", "安装支架松动", "电机轴承磨损", "吊扇挂钩未加固"],
      solutions: ["用配重块平衡扇叶", "紧固或更换安装支架", "用正确锚固件加固吊扇挂钩", "电机故障则更换吊扇"],
      whenToCall: ["晃动严重或加剧", "吊扇安装在吊顶上", "噪音非常大"],
      faqs: [
        { q: "可以不更换吊扇就平衡吗？", a: "可以——大多数晃动问题通过平衡扇叶和紧固支架即可解决。" },
        { q: "安装在石膏吊顶上安全吗？", a: "只有在吊顶施工时已安装加固的吊扇挂钩才安全。我们会检查并在需要时加固。" },
        { q: "平衡需要多长时间？", a: "通常 30–45 分钟（含安全检查）。" }
      ]
    }
  },
  "hollow-tiles-floor": {
    ms: {
      title: "Jubin Berongga atau Longgar di Lantai",
      symptom: "Jubin berongga apabila diketuk dan sebahagiannya terangkat atau retak.",
      costRange: "RM180–RM1,200+ bergantung kepada kawasan dan pembaikan substrat",
      causes: ["Liputan pelekat yang lemah", "Pergerakan dalam substrat", "Rembesan air di bawah jubin", "Saiz trowel yang salah digunakan"],
      solutions: ["Tanggalkan jubin yang longgar", "Bersihkan dan sediakan semula substrat", "Pasang semula dengan pelekat yang betul dan liputan penuh", "Gunakan membran decoupling pada lantai kayu"],
      whenToCall: ["Banyak jubin berongga atau terangkat", "Air meresap melalui grout", "Jubin di kawasan trafik tinggi"],
      faqs: [
        { q: "Boleh jubin berongga dibaiki tanpa menanggalkan semua jubin?", a: "Kadang-kadang — kami boleh suntik pelekat di bawah jubin individu jika kawasan kecil." },
        { q: "Adakah anda gunakan membran decoupling?", a: "Ya pada substrat kayu atau tidak stabil untuk mengelakkan keretakan masa depan." },
        { q: "Berapa cepat anda boleh mulakan?", a: "Biasanya dalam 1–2 hari selepas pemeriksaan." }
      ]
    },
    zh: {
      title: "地板瓷砖空鼓或松动",
      symptom: "敲击时瓷砖有空鼓声，部分瓷砖翘起或开裂。",
      costRange: "RM180–RM1,200+，视面积和基层修复而定",
      causes: ["瓷砖胶覆盖率不足", "基层位移", "瓷砖下渗水", "齿形抹刀尺寸错误"],
      solutions: ["拆除松动瓷砖", "清洁并重新准备基层", "用正确瓷砖胶和满浆重新铺贴", "木地板上使用抗裂膜"],
      whenToCall: ["多块瓷砖空鼓或翘起", "水从砖缝渗出", "高流量区域瓷砖"],
      faqs: [
        { q: "可以不拆除所有瓷砖就修复空鼓吗？", a: "小面积时可以——我们可以在单块瓷砖下注射瓷砖胶。" },
        { q: "你们使用抗裂膜吗？", a: "是的，在木质或不稳定基层上使用，防止未来开裂。" },
        { q: "多久可以开始施工？", a: "通常检查后 1–2 天内开始。" }
      ]
    }
  },
  "spc-flooring-peeling-edges": {
    ms: {
      title: "Lantai SPC / Vinyl Terkupas di Tepi atau Sendi",
      symptom: "Tepi lantai terangkat, sendi terbuka, atau papan melengkung.",
      costRange: "RM120–RM950+ bergantung kepada kawasan dan punca",
      causes: ["Kelembapan di bawah lantai", "Jurang pengembangan yang tidak betul", "Penyediaan subfloor yang lemah", "Perabot berat diseret"],
      solutions: ["Angkat papan yang terjejas", "Keringkan dan ratakan subfloor", "Pasang semula dengan jurang pengembangan yang betul", "Sapukan penghalang kelembapan jika perlu"],
      whenToCall: ["Tepi terangkat di pelbagai bilik", "Kerosakan air kelihatan", "Lantai terasa spongy"],
      faqs: [
        { q: "Boleh anda baiki hanya kawasan yang rosak?", a: "Ya untuk kawasan kecil. Kawasan besar biasanya memerlukan pemasangan semula separa atau penuh." },
        { q: "Adakah anda periksa kelembapan sebelum pemasangan?", a: "Sentiasa — kami uji kandungan kelembapan subfloor sebelum sebarang kerja SPC atau vinyl." }
      ]
    },
    zh: {
      title: "SPC / 乙烯基地板边缘或接缝剥离",
      symptom: "地板边缘翘起、接缝打开或板材起拱。",
      costRange: "RM120–RM950+，视面积和原因而定",
      causes: ["地板下潮湿", "膨胀缝不正确", "基层准备不足", "重家具拖拽"],
      solutions: ["掀起受影响板材", "干燥并找平基层", "用正确膨胀缝重新安装", "必要时加防潮层"],
      whenToCall: ["多个房间边缘翘起", "可见水损", "地板有海绵感"],
      faqs: [
        { q: "可以只修复损坏区域吗？", a: "小面积可以。大面积通常需要局部或整体重新安装。" },
        { q: "安装前会检查潮湿吗？", a: "始终会——在任何 SPC 或乙烯基地板施工前，我们都会测试基层含水率。" }
      ]
    }
  },
  "peeling-paint-malaysia": {
    ms: {
      title: "Cat Terkopek di Rumah Malaysia",
      symptom: "Cat mengelupas, melecuh, atau berkapur kerana lembapan, primer lemah, atau salutan lama yang gagal melekat pada dinding.",
      costRange: "RM150–RM900+ bergantung kepada keadaan dinding dan saiz kawasan",
      causes: ["Lembapan terperangkap di sebalik dinding", "Tiada penyekat atau primer digunakan sebelum mengecat", "Cat berkapur lama tidak diamplas dengan betul", "Retakan rambut membenarkan rembesan air hujan"],
      solutions: ["Kikis semua cat longgar ke tepi yang kukuh", "Sapukan penyekat anti-alkali atau lembapan", "Tampal retakan rambut sebelum mengecat semula", "Gunakan cat interior boleh dicuci atau cat eksterior tahan cuaca"],
      whenToCall: ["Pengelupasan kembali selepas mengecat semula sendiri", "Dinding terasa lembap atau ada garam berserbuk", "Cat mengelupas berhampiran bilik air, balkoni, atau dinding luar"],
      faqs: [
        { q: "Bolehkah saya mengecat terus di atas cat yang mengelupas?", a: "Tidak. Cat longgar mesti dikikis dan diamplas dahulu, jika tidak lapisan baru akan mengelupas bersama lapisan lama." },
        { q: "Adakah cat terkopek bermakna ada kebocoran?", a: "Kadangkala. Pengelupasan berhampiran bilik air, siling, atau dinding luar sering menunjukkan kemasukan lembapan yang perlu diperiksa sebelum mengecat semula." },
        { q: "Cat apa yang perlu saya gunakan selepas pembaikan?", a: "Gunakan penyekat yang betul dahulu, kemudian topcoat boleh dicuci berkualiti atau tahan cuaca eksterior yang sesuai dengan lokasi dinding." },
        { q: "Berapa kos pembaikan cat terkopek di KL?", a: "Penampalan kecil bermula dari kira-kira RM150, manakala pengecatan semula bilik penuh dengan persediaan biasanya disebut harga dari RM450 setiap bilik." }
      ]
    },
    zh: {
      title: "马来西亚房屋油漆剥落",
      symptom: "由于潮气、底漆薄弱或旧涂层与墙面粘结失效，油漆出现片状剥落、起泡或粉化。",
      costRange: "RM150–RM900+，视墙面状况和面积而定",
      causes: ["墙内滞留潮气", "上漆前未使用密封底漆", "旧粉化涂料未妥善打磨", "发丝裂缝导致雨水渗入"],
      solutions: ["刮除所有松脱油漆至牢固边缘", "涂抹防碱或防潮密封底漆", "重新上漆前修补发丝裂缝", "使用可水洗室内漆或防风雨室外漆"],
      whenToCall: ["自行重新粉刷后剥落依旧出现", "墙面潮湿或有粉状白色盐渍", "浴室、阳台或外墙附近油漆剥落"],
      faqs: [
        { q: "可以直接在剥落的油漆上重新上漆吗？", a: "不可以。必须先刮除并打磨松脱油漆，否则新涂层会随旧层一起剥落。" },
        { q: "油漆剥落是否意味着有漏水？", a: "有时是。浴室、天花板或外墙附近的剥落通常表明有渗水问题，应在重新粉刷前检查。" },
        { q: "修复后应使用什么油漆？", a: "先使用正确的密封底漆，再根据墙面位置使用优质可水洗漆或防风雨室外面漆。" },
        { q: "在吉隆坡修复剥落油漆需要多少钱？", a: "小面积修补费用约从 RM150 起，包含预备工作的整间房重新粉刷通常从每间房 RM450 起报价。" }
      ]
    }
  },
  "faded-exterior-paint-malaysia": {
    ms: {
      title: "Cat Eksterior Pudar Selepas Matahari dan Hujan Malaysia",
      symptom: "Dinding luar kelihatan berkapur, berbelang, atau pudar selepas pendedahan UV dan kitaran hujan lebat.",
      costRange: "RM1,800–RM8,000+ bergantung kepada saiz rumah dan akses",
      causes: ["Cat eksterior gred rendah", "Tiada penyekat tahan cuaca", "Pendedahan UV pada dinding menghadap barat", "Pengumpulan kulat dan kekotoran daripada hujan tropika"],
      solutions: ["Cuci tekanan dinding luar", "Rawat kulat dan pengapuran", "Sapukan penyekat tahan alkali", "Gunakan cat eksterior tahan cuaca premium"],
      whenToCall: ["Dinding berkapur apabila digosok dengan tangan", "Retakan rambut kelihatan", "Perancah atau tangga tinggi diperlukan"],
      faqs: [
        { q: "Berapa kerap dinding luar perlu dicat semula di Malaysia?", a: "Kebanyakan rumah memerlukan pengecatan semula eksterior setiap 5–7 tahun, lebih awal jika cat gred rendah atau pendedahan lembapan berat wujud." },
        { q: "Bolehkah cat pudar hanya disentuh semula?", a: "Kawasan kecil boleh disentuh semula, tetapi permukaan pudar yang luas sering memerlukan pengecatan semula penuh untuk kemasan sekata." },
        { q: "Cat apa yang terbaik untuk dinding eksterior panas?", a: "Gunakan sistem eksterior tahan cuaca dengan penyekat dan topcoat tahan UV daripada jenama cat yang bereputasi." },
        { q: "Adakah pencucian tekanan diperlukan?", a: "Ya, permukaan luar perlu dicuci dan dikeringkan dengan betul sebelum penyekat dan cat disapu." }
      ]
    },
    zh: {
      title: "马来西亚阳光雨水导致外墙油漆褪色",
      symptom: "经过紫外线照射与热带暴雨循环后，外墙呈现粉化、斑驳或褪色状态。",
      costRange: "RM1,800–RM8,000+，视房屋大小和施工难度而定",
      causes: ["低品质外墙漆", "未使用防风雨密封底漆", "西向墙面紫外线暴晒", "热带雨水造成霉菌与污垢堆积"],
      solutions: ["高压清洗外墙", "处理霉菌与粉化问题", "涂抹防碱密封底漆", "使用优质防风雨外墙漆"],
      whenToCall: ["用手擦拭墙面出现粉化", "可见发丝裂缝", "需要脚手架或高梯作业"],
      faqs: [
        { q: "马来西亚外墙多久需要重新粉刷一次？", a: "大多数房屋每 5–7 年需要重新粉刷外墙，若使用低品质涂料或长期暴露于潮湿环境则需更频繁。" },
        { q: "褪色的油漆只能局部补漆吗？", a: "小面积可以补漆，但大面积褪色通常需要全面重新粉刷以确保色泽均匀。" },
        { q: "炎热外墙最适合用什么油漆？", a: "使用带有密封底漆与抗紫外线面漆的防风雨外墙系统，并选择信誉良好的油漆品牌。" },
        { q: "是否需要高压清洗？", a: "是的，外部表面应在涂抹密封底漆和油漆前彻底清洗并晾干。" }
      ]
    }
  },
  "damp-walls-paint-bubbling": {
    ms: {
      title: "Dinding Lembap dan Cat Menggelembung",
      symptom: "Cat menggelembung, kesan perang, atau kesan garam putih muncul kerana air bergerak melalui dinding atau slab.",
      costRange: "RM300–RM2,500+ bergantung kepada punca kebocoran",
      causes: ["Rembesan bilik air atau balkoni", "Lembapan naik daripada masonri berliang", "Retakan luar membenarkan air hujan masuk", "Kebocoran paip di dalam dinding"],
      solutions: ["Kesan punca lembapan dengan pemeriksaan meter", "Kedapkan retakan luar atau grout bilik air", "Sapukan penghadang kalis air jika sesuai", "Baiki plaster dan cat semula selepas dinding kering"],
      whenToCall: ["Gelembung kembali selepas mengecat semula", "Dinding terasa sejuk atau lembap", "Bau kulat atau kesan hitam muncul"],
      faqs: [
        { q: "Bolehkah cat menyelesaikan dinding lembap?", a: "Cat sahaja tidak dapat menghentikan kelembapan. Punca lembapan mesti dibaiki sebelum mengecat semula." },
        { q: "Bagaimana anda mendiagnosis dinding lembap?", a: "Kami memeriksa bilik air, bumbung, paip, dan retakan luar berdekatan, kemudian menggunakan bacaan kelembapan untuk mengesan punca yang paling berkemungkinan." },
        { q: "Adakah saya perlukan kalis air atau pengecatan?", a: "Kebanyakan kes dinding lembap memerlukan kalis air atau pembaikan kebocoran dahulu, kemudian pembaikan plaster dan pengecatan semula." },
        { q: "Berapa lama dinding lembap perlu kering sebelum dicat?", a: "Masa pengeringan bergantung kepada tahap keterukan, tetapi dinding mesti mencapai tahap kelembapan selamat sebelum primer dan topcoat disapu." }
      ]
    },
    zh: {
      title: "潮湿墙面与油漆起泡",
      symptom: "由于水分透过墙体或楼板移动，油漆出现起泡、棕色渍痕或白色盐渍。",
      costRange: "RM300–RM2,500+，视漏水源而定",
      causes: ["浴室或阳台渗水", "多孔砖体导致的毛细返潮", "外墙裂缝导致雨水渗入", "墙内水管漏水"],
      solutions: ["用湿度计追踪潮气来源", "密封外部裂缝或浴室瓷砖缝", "在适合的位置涂抹防水屏障", "墙面干燥后修补石膏并重新粉刷"],
      whenToCall: ["重新粉刷后起泡再次出现", "墙面感觉冰冷或潮湿", "出现霉味或黑色斑块"],
      faqs: [
        { q: "油漆能解决潮湿墙面问题吗？", a: "单靠油漆无法阻止潮湿。必须先解决潮气来源才能重新粉刷。" },
        { q: "你们如何诊断潮湿墙面？", a: "我们会检查附近的浴室、屋顶、水管与外墙裂缝，然后用湿度读数确定最可能的来源。" },
        { q: "我需要防水还是刷漆？", a: "大多数潮湿墙面案例需要先进行防水或漏水修复，然后再修补石膏并重新粉刷。" },
        { q: "潮湿墙面刷漆前需要干燥多久？", a: "干燥时间取决于严重程度，但墙面必须达到安全湿度水平后才能涂底漆和面漆。" }
      ]
    }
  },
  "ceiling-mold-stains": {
    ms: {
      title: "Kulat Siling dan Kesan Air Perang",
      symptom: "Papan siling menunjukkan kulat gelap, cincin kuning-perang, atau kawasan melendut lembut selepas pendedahan air.",
      costRange: "RM180–RM1,200+ berdasarkan kerosakan papan siling",
      causes: ["Kebocoran bilik air tingkat atas", "Kebocoran saliran penyaman udara", "Rembesan bumbung atau balkoni", "Pengudaraan lemah dan kondensasi"],
      solutions: ["Hentikan punca air dahulu", "Tanggalkan papan rosak kulat jika lembut", "Pasang papan plaster tahan lembapan", "Skim, prima, dan cat semula selepas kering"],
      whenToCall: ["Siling lembut atau melendut", "Kesan air berkembang selepas hujan atau penggunaan bilik air", "Kulat merebak di seluruh papan"],
      faqs: [
        { q: "Bolehkah papan siling berkesan dicat semula?", a: "Hanya jika ia kering dan kukuh dari segi struktur. Papan lembut atau berkulat perlu digantikan sebelum kemasan." },
        { q: "Adakah kulat siling berbahaya?", a: "Kulat boleh menjejaskan kualiti udara dalaman, jadi lembapan aktif dan papan tercemar perlu ditangani segera." },
        { q: "Adakah saya perlukan jurutera paip atau kontraktor siling?", a: "Jika punca adalah paip, baiki kebocoran dahulu; kemudian baiki atau gantikan siling plaster yang terjejas." },
        { q: "Berapa cepat pembaikan siling boleh dilakukan?", a: "Penggantian papan kecil sering boleh disiapkan dalam satu lawatan selepas punca kebocoran dikawal." }
      ]
    },
    zh: {
      title: "天花板霉菌与棕色水渍",
      symptom: "天花板板材在遇水后出现深色霉菌、黄棕色环渍或局部软化下垂区域。",
      costRange: "RM180–RM1,200+，视天花板损坏程度而定",
      causes: ["楼上浴室漏水", "空调排水管漏水", "屋顶或阳台渗水", "通风不良与冷凝"],
      solutions: ["先止住水源", "若板材已软化则拆除受霉菌损坏部分", "安装防潮石膏板", "干燥后批灰、上底漆并重新粉刷"],
      whenToCall: ["天花板软化或下垂", "雨后或使用浴室后水渍扩大", "霉菌蔓延至整块板材"],
      faqs: [
        { q: "有渍痕的天花板可以直接重新粉刷吗？", a: "只有在其干燥且结构牢固时才可以。软化或发霉的板材应在饰面前更换。" },
        { q: "天花板霉菌危险吗？", a: "霉菌可能影响室内空气质量，因此应及时处理活跃潮气和受污染板材。" },
        { q: "我需要找水管工还是天花板承包商？", a: "如果源头是水管问题，应先修复漏水，然后再修复或更换受影响的石膏天花板。" },
        { q: "天花板维修需要多快完成？", a: "在控制住漏水源后，小面积板材更换通常可在一次上门中完成。" }
      ]
    }
  },
  "burst-pipe-emergency": {
    ms: {
      title: "Kecemasan Paip Pecah di KL & Selangor",
      symptom: "Air menyembur, membanjiri, atau bertakung dengan cepat daripada paip, injap, atau kawasan dinding.",
      costRange: "RM180–RM800+ bergantung kepada akses dan bahan paip",
      causes: ["Sendi paip lama atau berkarat", "Lonjakan tekanan air tinggi", "Kelengkapan lemah atau pelekat gagal", "Kemalangan menggerudi ke dalam paip tersembunyi"],
      solutions: ["Tutup bekalan air utama dengan segera", "Lindungi item elektrik dan lantai", "Kesan bahagian pecah", "Gantikan paip atau injap rosak dan uji tekanan"],
      whenToCall: ["Air tidak dapat dihentikan dengan cepat", "Kebocoran di dalam dinding atau siling", "Titik elektrik berdekatan"],
      faqs: [
        { q: "Apa yang perlu saya lakukan dahulu apabila paip pecah?", a: "Tutup injap air utama, jauhkan orang daripada kawasan elektrik, dan hubungi jurutera paip dengan foto atau video." },
        { q: "Bolehkah paip pecah dibaiki tanpa memecahkan dinding?", a: "Paip pecah yang kelihatan boleh dibaiki terus; paip pecah tersembunyi mungkin memerlukan pembukaan akses terhad di bahagian rosak." },
        { q: "Adakah perkhidmatan paip pecah tersedia pada hari yang sama?", a: "Ya, permintaan paip kecemasan diutamakan berdasarkan ketersediaan juruteknik dan lokasi." },
        { q: "Adakah sebut harga akan disahkan dahulu?", a: "Ya. Selepas pemeriksaan, juruteknik menerangkan skop dan mengesahkan harga sebelum pembaikan kekal bermula di mana mungkin." }
      ]
    },
    zh: {
      title: "吉隆坡与雪兰莪爆管紧急事件",
      symptom: "水从管道、阀门或墙体区域喷出、泛滥或迅速积聚。",
      costRange: "RM180–RM800+，视管道可及性和材质而定",
      causes: ["老化或腐蚀的管道接头", "水压激增", "管件不良或粘合剂失效", "意外钻入隐藏管道"],
      solutions: ["立即关闭主水阀", "保护电器物品和地板", "定位爆裂位置", "更换损坏管道或阀门并进行压力测试"],
      whenToCall: ["水无法迅速止住", "漏水在墙内或天花板内", "附近有电源插座"],
      faqs: [
        { q: "管道爆裂时我该先做什么？", a: "关闭主水阀，让人员远离电力区域，并携带照片或视频联系水管工。" },
        { q: "爆管可以不砸墙就修复吗？", a: "可见的爆管可直接修复；隐藏的爆管可能需要在损坏部位开有限的检修口。" },
        { q: "爆管服务能当天提供吗？", a: "可以，紧急水管请求会根据技术员的可用性和位置优先处理。" },
        { q: "报价会先确认吗？", a: "会的。检查后，技术员会说明范围并在条件允许时确认价格后再开始永久性修复。" }
      ]
    }
  },
  "low-water-pressure-kl": {
    ms: {
      title: "Tekanan Air Rendah di Rumah KL",
      symptom: "Pancuran, paip air, atau tandas mempunyai aliran lemah walaupun injap air utama terbuka.",
      costRange: "RM120–RM1,500+ bergantung kepada diagnosis dan keperluan pam",
      causes: ["Injap henti separuh tertutup", "Aerator tersumbat atau paip besi bergalvani lama", "Kebocoran tersembunyi mengurangkan tekanan", "Pam air rosak atau penurunan tekanan perbandaran"],
      solutions: ["Periksa injap dan penapis paip air", "Periksa kebocoran", "Bilas atau gantikan bahagian tersumbat", "Pasang atau servis pam penambah jika diperlukan"],
      whenToCall: ["Tekanan menurun mendadak", "Hanya satu bilik air aliran lemah", "Pam terus berjalan atau berbunyi"],
      faqs: [
        { q: "Mengapa hanya satu bilik air tekanan rendah?", a: "Isu mungkin adalah pengadun tersumbat, bahagian paip lama, atau masalah injap tempatan berhampiran bilik air tersebut." },
        { q: "Adakah saya perlukan pam penambah?", a: "Tidak semestinya. Juruteknik perlu memeriksa injap, kebocoran, dan keadaan paip sebelum mengesyorkan pam." },
        { q: "Bolehkah paip lama menyebabkan tekanan rendah?", a: "Ya. Karat dalaman dan pengumpulan mineral dalam paip lama boleh menghadkan aliran air." },
        { q: "Berapa lama masa diagnosis mengambil masa?", a: "Kebanyakan pemeriksaan tekanan rendah mengambil masa 30–60 minit, bergantung kepada akses dan bilangan lekapan." }
      ]
    },
    zh: {
      title: "吉隆坡住宅水压偏低",
      symptom: "即使主水阀已完全打开，淋浴、水龙头或马桶的水流仍然微弱。",
      costRange: "RM120–RM1,500+，视诊断和是否需要水泵而定",
      causes: ["截止阀未完全打开", "起沫器堵塞或旧镀锌管", "隐藏漏水降低了压力", "水泵故障或市政供水压力下降"],
      solutions: ["检查阀门和水龙头过滤网", "检查是否漏水", "冲洗或更换堵塞管段", "必要时安装或维修增压泵"],
      whenToCall: ["压力突然下降", "仅一间浴室水流弱", "水泵持续运转或有噪音"],
      faqs: [
        { q: "为什么只有一间浴室水压低？", a: "问题可能是该浴室附近的混水阀堵塞、旧管段或局部阀门问题。" },
        { q: "我需要增压泵吗？", a: "不一定。技术员应先检查阀门、漏水情况和管道状况，再建议是否需要水泵。" },
        { q: "旧管道会导致水压低吗？", a: "会的。旧管道内部的锈蚀和矿物质堆积会限制水流。" },
        { q: "诊断需要多长时间？", a: "大多数低水压检查需要 30–60 分钟，视管道可及性和洁具数量而定。" }
      ]
    }
  },
  "blocked-drain-toilet": {
    ms: {
      title: "Saliran atau Tandas Tersumbat",
      symptom: "Air mengalir perlahan, mengundur, berbau busuk, atau air tandas naik selepas disiram.",
      costRange: "RM150–RM500+ bergantung kepada keterukan sumbatan",
      causes: ["Pengumpulan rambut, minyak, atau sabun", "Objek asing dimasukkan ke dalam tandas", "Lumpur perangkap lantai", "Halangan saliran utama"],
      solutions: ["Berhenti menggunakan lekapan terjejas", "Gunakan alat pembersihan saliran yang betul", "Tanggalkan perangkap atau tandas jika perlu", "Siram dan uji saliran selepas pembersihan"],
      whenToCall: ["Air mengundur berulang kali", "Beberapa saliran terjejas", "Bau busuk atau kumbahan muncul"],
      faqs: [
        { q: "Bolehkah saya menggunakan pencuci saliran kimia?", a: "Elakkan bahan kimia kuat untuk sumbatan teruk kerana ia boleh merosakkan paip dan menjadikan kerja juruteknik tidak selamat." },
        { q: "Berapa lama masa membersihkan saliran mengambil masa?", a: "Sumbatan mudah mungkin mengambil masa kurang dari satu jam; sumbatan lebih dalam memerlukan lebih banyak alat dan masa." },
        { q: "Mengapa tandas saya terus tersumbat?", a: "Sumbatan tandas berulang boleh disebabkan oleh objek terperangkap, siraman lemah, atau sekatan saluran lebih dalam." },
        { q: "Adakah terdapat jaminan selepas pembersihan?", a: "Jaminan kerja terpakai untuk kerja pembersihan, tetapi objek asing baru atau pengumpulan minyak adalah punca berasingan." }
      ]
    },
    zh: {
      title: "排水管或马桶堵塞",
      symptom: "排水缓慢、倒流、发出臭味，或冲厕后马桶水位升高。",
      costRange: "RM150–RM500+，视堵塞严重程度而定",
      causes: ["毛发、油脂或肥皂堆积", "异物冲入马桶", "地漏内污泥堆积", "主排水管堵塞"],
      solutions: ["停止使用受影响的洁具", "使用适当的排水疏通工具", "必要时拆除存水弯或马桶", "疏通后冲水测试排水"],
      whenToCall: ["水反复倒流", "多个排水管受影响", "出现异味或污水"],
      faqs: [
        { q: "我可以使用化学清洁剂疏通排水管吗？", a: "对于严重堵塞应避免使用强力化学品，因为它们可能损坏管道，并使技术员的作业不安全。" },
        { q: "疏通排水管需要多长时间？", a: "简单的堵塞可能不到一小时即可解决；较深的堵塞需要更多工具和时间。" },
        { q: "为什么我的马桶一直堵塞？", a: "反复堵塞可能是异物卡住、冲水力弱或更深处排水管受限造成的。" },
        { q: "疏通后有保修吗？", a: "疏通工作本身享有工艺保修，但新的异物或油脂堆积属于另外的原因。" }
      ]
    }
  },
  "water-heater-not-working": {
    ms: {
      title: "Pemanas Air Tidak Berfungsi",
      symptom: "Tiada air panas, aliran rendah, trip kuasa, atau kebocoran di sekitar unit pemanas air.",
      costRange: "RM120–RM650+ bergantung kepada penggantian bahagian atau pemasangan",
      causes: ["Elemen pemanasan atau termostat rosak", "Isu bekalan elektrik", "Penapis masuk tersumbat", "Hos atau injap bocor lama"],
      solutions: ["Matikan kuasa jika trip atau bocor", "Periksa injap dan penapis", "Gantikan kelengkapan rosak", "Pasang pemanas baru apabila pembaikan tidak ekonomik"],
      whenToCall: ["Kuasa trip apabila pemanas dihidupkan", "Unit bocor air", "Pemanas lama atau berbau hangus"],
      faqs: [
        { q: "Bolehkah jurutera paip memasang pemanas air?", a: "Ya, pemasangan melibatkan kelengkapan paip dan pemasangan selamat. Sambungan elektrik mesti mematuhi keperluan keselamatan." },
        { q: "Adakah saya perlu membaiki atau menggantikan pemanas air lama?", a: "Jika tangki atau unit teras lama dan bocor, penggantian biasanya lebih selamat daripada pembaikan berulang." },
        { q: "Berapa lama masa pemasangan mengambil masa?", a: "Penggantian pemanas air segera standard sering mengambil masa 1–2 jam jika pendawaian dan paip sedia ada sesuai." },
        { q: "Adakah anda membekalkan pemanas air?", a: "Kami boleh memasang unit yang dibekalkan pelanggan atau menasihati model yang sesuai sebelum pembelian." }
      ]
    },
    zh: {
      title: "热水器无法运作",
      symptom: "无热水、水流量低、跳闸，或热水器周围出现漏水。",
      costRange: "RM120–RM650+，视更换零件或整机安装而定",
      causes: ["加热元件或温控器故障", "电力供应问题", "进水过滤器堵塞", "旧软管或阀门漏水"],
      solutions: ["若跳闸或漏水应立即断电", "检查阀门和过滤器", "更换故障配件", "维修不划算时安装新热水器"],
      whenToCall: ["开启热水器时跳闸", "机组漏水", "热水器老旧或有烧焦味"],
      faqs: [
        { q: "水管工可以安装热水器吗？", a: "可以，安装涉及管道配件和安全固定。电气连接必须符合安全要求。" },
        { q: "旧热水器应该修理还是更换？", a: "如果水箱或核心机组老旧且漏水，更换通常比反复维修更安全。" },
        { q: "安装需要多长时间？", a: "如果现有布线和管道适用，标准即热式热水器更换通常需要 1–2 小时。" },
        { q: "你们提供热水器吗？", a: "我们可以安装客户自备的机型，或在购买前建议合适的型号。" }
      ]
    }
  },
  "sagging-plaster-ceiling": {
    ms: {
      title: "Siling Plaster Melendut",
      symptom: "Papan siling melentur ke bawah, sendi terbuka, atau siling terasa tidak selamat selepas lembapan atau rangka lemah.",
      costRange: "RM180–RM1,500+ bergantung kepada kawasan rosak dan kerja rangka",
      causes: ["Papan plaster rosak air", "Rangka kayu lemah atau penggantung gagal", "Lekapan siling berlebihan beban", "Sambungan lemah dan jarak skru"],
      solutions: ["Periksa struktur siling", "Tanggalkan papan tidak selamat", "Perkukuhkan dengan rangka logam GI", "Pasang papan tahan lembapan dan kemasan skim"],
      whenToCall: ["Siling kelihatan jatuh", "Retakan berkembang pesat", "Kipas atau lampu berdekatan kawasan melendut"],
      faqs: [
        { q: "Adakah siling melendut berbahaya?", a: "Ya, ia boleh runtuh jika papan atau penggantung gagal. Elakkan berdiri di bawahnya sehingga diperiksa." },
        { q: "Bolehkah siling plaster melendut hanya dibaiki?", a: "Kawasan melendut kering kecil mungkin boleh diperkukuhkan, tetapi papan basah atau lembut perlu digantikan." },
        { q: "Bahan rangka apa yang terbaik?", a: "Rangka logam besi bergalvani biasanya digunakan untuk sokongan siling yang stabil dan tahan karat." },
        { q: "Adakah anda mengecat semula selepas pembaikan siling?", a: "Ya, skim coat, primer, dan cat boleh disertakan dalam sebut harga akhir." }
      ]
    },
    zh: {
      title: "石膏天花板下垂",
      symptom: "天花板板材向下弯曲，接缝开裂，或因潮气或骨架薄弱使天花板感觉不安全。",
      costRange: "RM180–RM1,500+，视受损面积和骨架工程而定",
      causes: ["水损石膏板", "木质骨架薄弱或吊件失效", "天花板装置负荷过重", "接缝处理不佳与螺丝间距不当"],
      solutions: ["检查天花板结构", "拆除不安全板材", "使用镀锌金属骨架加固", "安装防潮板材并批灰饰面"],
      whenToCall: ["天花板明显下垂", "裂缝迅速扩大", "风扇或灯具靠近下垂区域"],
      faqs: [
        { q: "下垂的天花板危险吗？", a: "是的，如果板材或吊件失效可能会坍塌。检查前避免站在下方。" },
        { q: "下垂的石膏天花板只能修补吗？", a: "小面积的干燥下垂区域可能可以加固，但潮湿或软化的板材应予更换。" },
        { q: "哪种骨架材料最好？", a: "镀锌铁金属骨架通常用于稳定且防锈的天花板支撑。" },
        { q: "天花板维修后你们会重新粉刷吗？", a: "会的，最终报价中可包含批灰、底漆与油漆工作。" }
      ]
    }
  },
  "ceiling-leak-after-rain": {
    ms: {
      title: "Kebocoran Siling Selepas Hujan",
      symptom: "Siling menitis atau berkesan hanya semasa atau selepas hujan, sering di bawah bumbung, balkoni, atau kawasan dinding luar.",
      costRange: "RM250–RM3,500+ bergantung kepada punca dan kaedah",
      causes: ["Kebocoran jubin bumbung atau kilasan", "Kegagalan kalis air balkoni", "Dinding luar retak", "Kegagalan membran bumbung rata"],
      solutions: ["Kesan laluan air semasa pemeriksaan", "Kedapkan bumbung atau retakan luar", "Sapukan sistem membran yang sesuai", "Baiki siling rosak selepas kebocoran dihentikan"],
      whenToCall: ["Kebocoran muncul setiap kali hujan", "Siling lembut atau berkesan", "Air berhampiran lampu atau pendawaian elektrik"],
      faqs: [
        { q: "Mengapa siling bocor hanya selepas hujan?", a: "Kebocoran dicetuskan hujan biasanya bermula daripada bumbung, balkoni, retakan dinding luar, atau kegagalan kalis air bumbung rata." },
        { q: "Bolehkah suntikan PU membaiki kebocoran hujan?", a: "Suntikan PU boleh mengedap retakan konkrit, tetapi kebocoran bumbung atau dinding mungkin memerlukan kalis air luar atau pembaikan kilasan." },
        { q: "Patutkah siling dibaiki dahulu?", a: "Tidak. Hentikan punca air dahulu, kemudian gantikan atau cat semula kawasan siling yang terjejas." },
        { q: "Adakah ini kecemasan?", a: "Ya jika air aktif, dekat dengan titik elektrik, atau merebak dengan cepat." }
      ]
    },
    zh: {
      title: "雨后天花板漏水",
      symptom: "天花板仅在下雨期间或雨后滴水或出现渍痕，通常位于屋顶、阳台或外墙下方。",
      costRange: "RM250–RM3,500+，视漏水源和处理方法而定",
      causes: ["屋顶瓦片或防水板漏水", "阳台防水层失效", "外墙开裂", "平屋顶防水层失效"],
      solutions: ["检查时追踪水流路径", "密封屋顶或外部裂缝", "涂抹合适的防水层系统", "止漏后修复受损天花板"],
      whenToCall: ["每次下雨都会漏水", "天花板软化或有渍痕", "水渍靠近灯具或电线"],
      faqs: [
        { q: "为什么天花板只在雨后漏水？", a: "雨水引发的漏水通常源自屋顶、阳台、外墙裂缝或平屋顶防水层失效。" },
        { q: "PU 注射能修复雨水导致的漏水吗？", a: "PU 注射可以密封混凝土裂缝，但屋顶或墙面漏水可能需要外部防水或防水板维修。" },
        { q: "应该先修天花板吗？", a: "不应该。应先止住水源，然后再更换或重新粉刷受影响的天花板区域。" },
        { q: "这紧急吗？", a: "如果水流仍然活跃、靠近电力点或迅速扩散，则属于紧急情况。" }
      ]
    }
  },
  "cracked-ceiling-joints": {
    ms: {
      title: "Sendi Siling Retak",
      symptom: "Retakan garis lurus muncul di sepanjang sendi papan plaster, terutamanya selepas pergerakan bangunan atau kerja pita sendi yang lemah.",
      costRange: "RM180–RM900+ berdasarkan panjang retak dan pengecatan semula",
      causes: ["Pita sendi atau sebatian lemah", "Pergerakan rangka siling", "Pendedahan air melembutkan sendi", "Jarak skru yang lemah"],
      solutions: ["Buka dan bersihkan sendi gagal", "Pita semula dengan jaringan gentian kaca", "Sapukan sebatian sendi dan skim", "Prima dan cat semula untuk kemasan lancar"],
      whenToCall: ["Retakan kembali selepas pengisian sendiri", "Retakan luas atau berkembang", "Kawasan siling berdekatan lembap"],
      faqs: [
        { q: "Bolehkah saya mengisi retakan siling dengan pengisi biasa?", a: "Pengisi sementara sering retak semula. Pembaikan yang betul menggunakan pita sendi, sebatian, pengamplasan, primer, dan cat." },
        { q: "Adakah retakan siling bermakna kerosakan struktur?", a: "Kebanyakan retakan sendi papan plaster adalah isu kemasan, tetapi retakan luas atau bergerak perlu diperiksa." },
        { q: "Adakah sendi yang dibaiki akan kelihatan?", a: "Sistem skim, amplas, primer, dan cat yang betul sepatutnya menjadikan sendi berbaur dengan siling." },
        { q: "Berapa lama pembaikan sendi mengambil masa?", a: "Pembaikan kecil boleh dilakukan dalam satu hari, tetapi pengeringan dan pengecatan semula mungkin memanjangkan jadual." }
      ]
    },
    zh: {
      title: "天花板接缝开裂",
      symptom: "石膏板接缝处出现直线裂缝，通常发生在建筑物位移或接缝贴带工艺不佳之后。",
      costRange: "RM180–RM900+，视裂缝长度和是否需要重新粉刷而定",
      causes: ["接缝带或腻子薄弱", "天花板骨架位移", "水分渗入软化接缝", "螺丝间距不当"],
      solutions: ["打开并清洁失效接缝", "用玻璃纤维网格重新贴带", "涂抹接缝腻子并批灰", "上底漆并重新粉刷以实现无缝饰面"],
      whenToCall: ["自行填补后裂缝再次出现", "裂缝宽或持续扩大", "附近天花板区域潮湿"],
      faqs: [
        { q: "我可以用普通填缝剂填补天花板裂缝吗？", a: "临时填缝剂通常会再次开裂。正确的修复方法应使用接缝带、腻子、打磨、底漆和油漆。" },
        { q: "天花板裂缝是否意味着结构损坏？", a: "大多数石膏板接缝裂缝属于饰面问题，但宽大或持续变化的裂缝应进行检查。" },
        { q: "修复后的接缝会明显吗？", a: "正确的批灰、打磨、底漆和油漆工序应能使接缝与天花板融为一体。" },
        { q: "接缝维修需要多长时间？", a: "小面积维修可在一天内完成，但干燥和重新粉刷可能会延长工期。" }
      ]
    }
  },
  "condensation-ceiling-mold": {
    ms: {
      title: "Kulat Siling Kondensasi",
      symptom: "Kulat hitam atau bintik muncul di bilik sejuk, bilik air, atau ruang berhawa dingin tanpa kebocoran ketara.",
      costRange: "RM180–RM1,000+ bergantung kepada pembersihan, pembaikan papan, dan pengecatan semula",
      causes: ["Pengudaraan lemah", "Permukaan penyaman udara sejuk bertemu udara lembap", "Wap bilik air", "Tiada sistem cat anti-kulat"],
      solutions: ["Perbaiki pengudaraan dan ekzos", "Bersihkan kulat dengan selamat", "Gunakan primer dan cat anti-kulat", "Gantikan papan rosak jika kulat tertanam"],
      whenToCall: ["Kulat kembali selepas dibersihkan", "Papan siling lembut", "Ahli keluarga mengalami bau atau iritasi"],
      faqs: [
        { q: "Adakah kulat kondensasi bermakna kebocoran?", a: "Tidak semestinya. Ia boleh datang daripada kelembapan dan pengudaraan lemah, tetapi pemeriksaan kebocoran masih penting." },
        { q: "Bolehkah cat anti-kulat menghentikannya secara kekal?", a: "Cat membantu, tetapi kawalan pengudaraan dan kelembapan mesti turut dibaiki." },
        { q: "Patutkah papan berkulat digantikan?", a: "Jika kulat telah menembusi papan lembut atau lembap, penggantian lebih selamat daripada pembersihan permukaan sahaja." },
        { q: "Bilik apa yang paling terjejas?", a: "Bilik air, bilik tidur berhawa dingin, dan sudut berpengudaraan lemah adalah biasa." }
      ]
    },
    zh: {
      title: "冷凝导致的天花板霉菌",
      symptom: "在没有明显漏水的情况下，凉爽房间、浴室或空调空间的天花板出现黑色霉菌或斑点。",
      costRange: "RM180–RM1,000+，视清洁、板材修复和重新粉刷而定",
      causes: ["通风不良", "冷空调表面与湿气接触", "浴室蒸汽", "缺乏防霉涂料系统"],
      solutions: ["改善通风与排气", "安全清除霉菌", "使用防霉底漆与面漆", "若霉菌已深入板材则更换"],
      whenToCall: ["清洁后霉菌再次出现", "天花板板材软化", "家人出现异味或过敏反应"],
      faqs: [
        { q: "冷凝霉菌是漏水吗？", a: "不一定。它可能来自湿气和通风不良，但仍应进行漏水检查。" },
        { q: "防霉漆能永久阻止霉菌吗？", a: "油漆有帮助，但通风和湿度控制也必须同时解决。" },
        { q: "发霉的板材应该更换吗？", a: "如果霉菌已渗入软化或潮湿的板材，更换比单纯表面清洁更安全。" },
        { q: "哪些房间最容易受影响？", a: "浴室、空调卧室和通风不良的角落最常见。" }
      ]
    }
  },
  "bathroom-leak-upper-floor": {
    ms: {
      title: "Kebocoran Bilik Air Tingkat Atas",
      symptom: "Siling bawah menitis di bawah bilik air atas, terutamanya selepas mandi atau mencuci lantai.",
      costRange: "RM250–RM9,000 bergantung kepada suntikan PU, salutan tanpa hacking, atau kalis air semula penuh",
      causes: ["Grout jubin gagal", "Membran kalis air lama", "Retakan slab konkrit", "Kebocoran perangkap lantai atau paip"],
      solutions: ["Periksa kebocoran lekapan dan perangkap", "Gunakan suntikan PU untuk retakan slab aktif", "Sapukan salutan permukaan tanpa hacking jika sesuai", "Hacking penuh dan penggantian membran untuk kegagalan teruk"],
      whenToCall: ["Siling bawah menitis selepas setiap mandi", "Kesan berkembang lebih luas", "Lantai bilik air ada jubin berongga atau retak"],
      faqs: [
        { q: "Bolehkah kebocoran bilik air dibaiki tanpa memecah jubin?", a: "Banyak kebocoran slab boleh ditangani dengan suntikan PU atau sistem permukaan tanpa hacking, bergantung kepada punca kebocoran." },
        { q: "Bagaimana anda memilih kaedah?", a: "Kami memeriksa corak kebocoran, perangkap lantai, grout, dan lembapan siling sebelum mengesyorkan kaedah pembaikan." },
        { q: "Adakah suntikan PU dikenakan harga setiap titik?", a: "Suntikan PU biasanya dikenakan harga setiap titik, dengan kiraan akhir berdasarkan garis retak dan keterukan kebocoran." },
        { q: "Adakah anda membaiki siling yang rosak juga?", a: "Ya, penggantian papan siling dan pengecatan semula boleh disebut harga selepas kebocoran dihentikan." }
      ]
    },
    zh: {
      title: "楼上浴室漏水",
      symptom: "楼下天花板在楼上浴室下方滴水，尤其是在淋浴或冲洗地板后。",
      costRange: "RM250–RM9,000，视 PU 注射、非破坏性涂层或全面重新防水而定",
      causes: ["瓷砖填缝失效", "老化的防水层", "混凝土板裂缝", "地漏或水管漏水"],
      solutions: ["检查洁具和地漏是否漏水", "对活跃的板裂缝使用 PU 注射", "在合适情况下涂抹非破坏性表面密封层", "严重失效时进行全面凿除与防水层更换"],
      whenToCall: ["每次淋浴后楼下天花板都滴水", "渍痕范围扩大", "浴室地板瓷砖空鼓或开裂"],
      faqs: [
        { q: "浴室漏水可以不凿砖就修复吗？", a: "根据漏水源头不同，许多楼板漏水可以通过 PU 注射或非破坏性表面系统解决。" },
        { q: "你们如何选择修复方法？", a: "我们会先检查漏水模式、地漏、填缝和天花板湿度，然后再建议修复方法。" },
        { q: "PU 注射是按点收费的吗？", a: "PU 注射通常按点收费，最终数量根据裂缝线和漏水严重程度确定。" },
        { q: "你们也会修复受损的天花板吗？", a: "会的，止漏后可以报价进行天花板板材更换和重新粉刷。" }
      ]
    }
  },
  "roof-leak-rainy-season": {
    ms: {
      title: "Kebocoran Bumbung Semasa Musim Hujan",
      symptom: "Air masuk semasa ribut melalui jubin bumbung, saliran, kilasan, atau membran bumbung rata.",
      costRange: "RM250–RM5,000+ bergantung kepada akses bumbung dan skop kalis air",
      causes: ["Jubin bumbung retak", "Saliran tersumbat", "Kilasan gagal", "Membran lama"],
      solutions: ["Kesan laluan air semasa pemeriksaan", "Kedapkan bumbung atau retakan luar", "Sapukan sistem membran yang sesuai", "Baiki siling rosak selepas kebocoran dihentikan"],
      whenToCall: ["Kebocoran muncul setiap ribut", "Jubin bumbung longgar atau retak berlebihan", "Kawasan bumbung luas terjejas"],
      faqs: [
        { q: "Berapa kerap bumbung perlu diperiksa di Malaysia?", a: "Sekurang-kurangnya dua kali setahun, sebelum dan selepas musim monsun, untuk mengesan jubin longgar dan saliran tersumbat." },
        { q: "Bolehkah kebocoran bumbung dibaiki tanpa menggantikan keseluruhan bumbung?", a: "Ya untuk kebanyakan kes. Kami membaiki bahagian terjejas seperti jubin, kilasan, atau membran tanpa penggantian penuh melainkan kerosakan meluas." },
        { q: "Adakah anda memasang membran kalis air bumbung?", a: "Ya, kami memasang sistem akrilik tahan UV atau torch-on bituminus untuk bumbung rata atau slab." },
        { q: "Berapa cepat perkhidmatan boleh dijadualkan semasa musim hujan?", a: "Kes kebocoran aktif diutamakan dan boleh dijadualkan dalam masa 24-48 jam bergantung kepada lokasi." }
      ]
    },
    zh: {
      title: "雨季屋顶漏水",
      symptom: "暴雨期间，水通过屋顶瓦片、排水沟、防水板或平屋顶防水层渗入室内。",
      costRange: "RM250–RM5,000+，视屋顶可及性和防水范围而定",
      causes: ["屋顶瓦片开裂", "排水沟堵塞", "防水板失效", "防水层老化"],
      solutions: ["检查时追踪水流路径", "密封屋顶或外部裂缝", "涂抹合适的防水层系统", "止漏后修复受损天花板"],
      whenToCall: ["每次暴雨都会漏水", "屋顶瓦片大量松动或开裂", "大面积屋顶受影响"],
      faqs: [
        { q: "马来西亚屋顶多久需要检查一次？", a: "至少每年两次，在季风季节前后检查，以发现松动瓦片和堵塞的排水沟。" },
        { q: "屋顶漏水可以不更换整个屋顶就修复吗？", a: "大多数情况下可以。我们会修复受影响的部分，如瓦片、防水板或防水层，除非损坏范围很大，否则无需全面更换。" },
        { q: "你们安装屋顶防水层吗？", a: "会的，我们为平屋顶或楼板安装抗紫外线丙烯酸系统或热熔沥青系统。" },
        { q: "雨季期间服务能多快安排？", a: "活跃漏水案例会优先处理，根据地点可在 24-48 小时内安排。" }
      ]
    }
  },
  "wall-dampness-rising": {
    ms: {
      title: "Lembapan Naik dan Pengelupasan Dinding Bawah",
      symptom: "Cat mengelupas dan garam putih muncul berhampiran bahagian bawah dinding, sering di rumah bertanah lama.",
      costRange: "RM300–RM3,000+ bergantung kepada panjang dinding dan pendekatan kalis air",
      causes: ["Lembapan tanah merambat melalui masonri", "Kursus kalis lembapan gagal", "Turapan luar memerangkap air", "Paip bocor atau dinding bilik air di sebalik"],
      solutions: ["Sahkan sama ada lembapan berkaitan tanah atau paip", "Tanggalkan plaster tercemar garam", "Sapukan penghadang kawalan lembapan atau kalis air yang sesuai", "Plaster semula dan cat semula dengan sistem serasi"],
      whenToCall: ["Cat bawah terus menggelembung", "Garam putih kembali selepas dibersihkan", "Lembapan merebak sepanjang tapak dinding"],
      faqs: [
        { q: "Apakah lembapan naik?", a: "Lembapan naik adalah kelembapan bergerak ke atas melalui bahan dinding berliang daripada tanah atau kawasan bersebelahan basah." },
        { q: "Bolehkah cat kalis air membaiki lembapan naik?", a: "Cat sahaja tidak mencukupi. Plaster tercemar garam dan punca lembapan mesti dirawat dahulu." },
        { q: "Adakah lembapan naik biasa di Malaysia?", a: "Ia muncul di kawasan lembap, rumah bertanah lama, dan dinding terjejas oleh saliran atau pendedahan air luar." },
        { q: "Berapa lama sebelum mengecat semula?", a: "Dinding mesti dikeringkan dan dirawat dengan betul sebelum primer dan cat disapu." }
      ]
    },
    zh: {
      title: "毛细返潮与下层墙面剥落",
      symptom: "墙面下部出现油漆剥落和白色盐渍，常见于老旧有地房屋。",
      costRange: "RM300–RM3,000+，视墙体长度和防水方式而定",
      causes: ["地下潮气透过砖体上升", "防潮层失效", "外部铺装截留水分", "背后水管或浴室墙漏水"],
      solutions: ["确认潮气来自地面还是管道", "清除受盐污染的石膏", "涂抹防潮屏障或合适的防水层", "使用兼容系统重新批灰并粉刷"],
      whenToCall: ["下层油漆持续起泡", "清洁后白色盐渍再次出现", "潮气沿墙基蔓延"],
      faqs: [
        { q: "什么是毛细返潮？", a: "毛细返潮是指水分通过多孔墙体材料从地面或潮湿邻近区域向上移动。" },
        { q: "防水漆能修复毛细返潮吗？", a: "单靠油漆不够。必须先处理受盐污染的石膏和潮气来源。" },
        { q: "毛细返潮在马来西亚常见吗？", a: "它常出现在潮湿地区、老旧有地房屋以及受排水或外部积水影响的墙面。" },
        { q: "重新粉刷前需要等多久？", a: "墙面必须经过适当干燥和处理后，才能涂底漆和油漆。" }
      ]
    }
  },
  "swimming-pool-leak-balcony": {
    ms: {
      title: "Kebocoran Balkoni atau Dek Kolam",
      symptom: "Air merembes daripada balkoni, dek kolam, atau kawasan teres ke dalam bilik atau siling bawah.",
      costRange: "RM850–RM12,000+ bergantung kepada saiz permukaan dan keperluan hacking",
      causes: ["Membran gagal di bawah jubin", "Grout atau sendi jubin retak", "Kecerunan lantai lemah menyebabkan takungan", "Retakan pergerakan di persimpangan dinding-lantai"],
      solutions: ["Peta lembapan laluan kebocoran", "Kedapkan retakan dan persimpangan", "Sapukan salutan tanpa hacking jika sesuai", "Penggantian membran penuh untuk kegagalan teruk"],
      whenToCall: ["Kebocoran muncul selepas mencuci lantai atau hujan", "Jubin berbunyi berongga", "Siling bawah menunjukkan titisan aktif"],
      faqs: [
        { q: "Bolehkah kebocoran balkoni dibaiki tanpa hacking?", a: "Sesetengah kebocoran balkoni boleh ditangani dengan sistem permukaan, tetapi kegagalan membran teruk mungkin memerlukan penanggalan jubin." },
        { q: "Mengapa takungan menjadi masalah?", a: "Air bertakung meningkatkan tekanan pada grout lemah, retakan, dan kecacatan membran, menyebabkan kebocoran kembali." },
        { q: "Adakah anda menjalankan ujian takungan?", a: "Untuk skop kalis air yang sesuai, ujian takungan air mengesahkan sama ada kawasan yang dibaiki tahan rembesan." },
        { q: "Bagaimana harga dikira?", a: "Harga bergantung kepada saiz kawasan, akses, keadaan permukaan, rawatan retak, dan sama ada hacking diperlukan." }
      ]
    },
    zh: {
      title: "阳台或泳池平台漏水",
      symptom: "水从阳台、泳池平台或露台区域渗入下方房间或天花板。",
      costRange: "RM850–RM12,000+，视表面积和凿除需求而定",
      causes: ["瓷砖下防水层失效", "填缝或瓷砖接缝开裂", "地面坡度不良导致积水", "墙地交界处的位移裂缝"],
      solutions: ["绘制渗水路径图", "密封裂缝与交界处", "在合适情况下涂抹非破坏性涂层", "严重失效时全面更换防水层"],
      whenToCall: ["洗地或下雨后出现漏水", "瓷砖有空鼓声", "下方天花板出现活跃滴水"],
      faqs: [
        { q: "阳台漏水可以不凿砖修复吗？", a: "部分阳台漏水可以通过表面系统处理，但严重的防水层失效可能需要拆除瓷砖。" },
        { q: "为什么积水会成为问题？", a: "积水会增加薄弱填缝、裂缝和防水层缺陷的压力，导致漏水再次出现。" },
        { q: "你们进行蓄水测试吗？", a: "对于合适的防水项目，蓄水测试可确认修复区域是否能抵抗渗水。" },
        { q: "价格如何计算？", a: "价格取决于面积大小、可及性、表面状况、裂缝处理以及是否需要凿除。" }
      ]
    }
  },
  "loose-door-hinge": {
    ms: {
      title: "Engsel Pintu Longgar atau Pintu Menggesel",
      symptom: "Pintu jatuh, menggesel lantai, gagal mengancing, atau engsel tertanggal dari rangka.",
      costRange: "RM90–RM350+ bergantung kepada keadaan engsel dan rangka",
      causes: ["Skru longgar dalam rangka kayu", "Engsel haus", "Kelembapan mengembangkan pintu kayu", "Plat kancing tidak sejajar"],
      solutions: ["Ketatkan atau gantikan skru dengan sauh lebih kukuh", "Gantikan set engsel", "Ratakan tepi pintu yang mengembang", "Sejajarkan plat kancing dan uji kancing"],
      whenToCall: ["Pintu tidak boleh ditutup dengan selamat", "Kayu rangka retak", "Pintu berat atau ada kunci digital"],
      faqs: [
        { q: "Bolehkah pintu yang menggesel dibaiki tanpa menggantikannya?", a: "Biasanya ya. Pelarasan engsel, perataan, atau penjajaran plat kancing sering memulihkan operasi lancar." },
        { q: "Adakah anda membekalkan engsel?", a: "Engsel standard boleh dibekalkan, atau kami boleh memasang perkakasan yang dibekalkan pelanggan." },
        { q: "Bolehkah anda membaiki pintu bilik tidur dan pintu utama?", a: "Ya, kami membaiki pintu kayu biasa, engsel, tombol pintu, dan penjajaran kancing." },
        { q: "Berapa lama pembaikan pintu mengambil masa?", a: "Kebanyakan pembaikan engsel atau kancing kecil mengambil masa kurang dari satu jam." }
      ]
    },
    zh: {
      title: "门铰链松动或门刮擦地面",
      symptom: "门下垂、刮擦地毯，或门闩无法锁上。",
      costRange: "RM90–RM350+，视铰链和门框状况而定",
      causes: ["木框螺丝松动", "铰链磨损", "湿气导致木门膨胀", "门闩板错位"],
      solutions: ["用更牢固的锚固件紧固或更换螺丝", "更换铰链组", "刨平膨胀的门边", "调整门闩板并测试锁扣"],
      whenToCall: ["门无法安全关闭", "门框木材开裂", "门较重或装有数字锁"],
      faqs: [
        { q: "刮擦的门可以不更换就修复吗？", a: "通常可以。调整铰链、刨平或调整门闩板通常能恢复顺畅操作。" },
        { q: "你们提供铰链吗？", a: "可以提供标准铰链，也可以安装客户自备的五金件。" },
        { q: "你们能修复卧室门和大门吗？", a: "可以，我们修复常见木门、铰链、把手与门闩对齐问题。" },
        { q: "门维修需要多长时间？", a: "大多数小型铰链或门闩维修不到一小时即可完成。" }
      ]
    }
  },
  "tv-fell-off-wall": {
    ms: {
      title: "Pemasangan Dinding TV Tidak Selamat atau Sauh Gagal",
      symptom: "Braket TV longgar, plag dinding tertanggal, atau TV dipasang pada jenis sauh dinding yang salah.",
      costRange: "RM120–RM450+ bergantung kepada saiz TV, braket, dan jenis dinding",
      causes: ["Sauh salah untuk dinding berongga", "Tiada pengesanan stud", "Braket gred rendah beban berlebihan", "Kedalaman gerudi atau bahan dinding lemah"],
      solutions: ["Tanggalkan braket tidak selamat", "Kenal pasti jenis dinding dan stud", "Gunakan sauh atau titik pemasangan yang sesuai", "Uji berat dan ratakan pemasangan"],
      whenToCall: ["Braket bergerak apabila disentuh", "TV berada pada partition gypsum", "TV berada di atas kanak-kanak atau perabot"],
      faqs: [
        { q: "Bolehkah TV dipasang pada papan gypsum?", a: "Ya, tetapi ia memerlukan sauh dinding berongga tugas berat yang betul atau stud. Plag plastik asas tidak selamat." },
        { q: "Adakah anda menyembunyikan wayar TV?", a: "Trunking wayar atau pilihan kabel tersembunyi boleh dibincangkan bergantung kepada jenis dinding." },
        { q: "Patutkah saya membeli braket dahulu?", a: "Anda boleh, tetapi kami juga boleh menasihati sama ada braket tetap, condong, atau bergerak penuh sesuai dengan TV dan dinding anda." },
        { q: "Berapa lama masa pemasangan TV mengambil masa?", a: "Pemasangan TV standard biasanya mengambil masa 45–90 minit bergantung kepada jenis dinding dan kerja kabel." }
      ]
    },
    zh: {
      title: "电视挂墙不安全或锚固件失效",
      symptom: "电视支架松动，墙塞脱落，或电视安装在错误类型的墙壁锚固件上。",
      costRange: "RM120–RM450+，视电视尺寸、支架和墙壁类型而定",
      causes: ["空心墙使用了错误的锚固件", "未进行龙骨探测", "劣质支架超负荷", "钻孔深度或墙体材质不当"],
      solutions: ["拆除不安全的支架", "确定墙壁类型和龙骨位置", "使用合适的锚固件或安装点", "承重测试并调平安装"],
      whenToCall: ["支架一碰就晃动", "电视安装在石膏隔墙上", "电视位于儿童或家具上方"],
      faqs: [
        { q: "电视可以安装在石膏板上吗？", a: "可以，但需要正确的重型空心墙锚固件或龙骨。基本塑料墙塞不安全。" },
        { q: "你们会隐藏电视电线吗？", a: "可根据墙壁类型讨论走线槽或隐藏布线方案。" },
        { q: "我应该先买支架吗？", a: "可以，但我们也可以建议固定式、倾斜式或全动式支架是否适合您的电视和墙壁。" },
        { q: "电视安装需要多长时间？", a: "标准电视安装通常需要 45–90 分钟，视墙壁类型和布线工作而定。" }
      ]
    }
  },
  "stuck-window-lock": {
    ms: {
      title: "Kunci atau Pemegang Tingkap Tersangkut",
      symptom: "Pemegang tingkap tersekat, kunci tidak lagi mengancing, atau tingkap gelongsor tidak menutup dengan selamat.",
      costRange: "RM80–RM300+ bergantung kepada bahagian dan jenis tingkap",
      causes: ["Mekanisme kunci haus", "Trek gelongsor tidak sejajar", "Pengumpulan karat atau kekotoran", "Pergerakan rangka dari semasa ke semasa"],
      solutions: ["Bersihkan dan sejajarkan trek", "Laraskan tangkapan kunci", "Gantikan pemegang atau kancing", "Lincirkan dan uji penutupan lancar"],
      whenToCall: ["Tingkap tidak boleh dikunci untuk keselamatan", "Panel kaca terasa tidak stabil", "Trek atau rangka bengkok"],
      faqs: [
        { q: "Bolehkah kunci tingkap lama digantikan?", a: "Ya, banyak pemegang dan kancing biasa boleh digantikan jika bahagian serasi tersedia." },
        { q: "Adakah anda membaiki tingkap gelongsor?", a: "Kami boleh melaraskan trek, pemegang, kancing, dan isu penjajaran kecil untuk tingkap kediaman biasa." },
        { q: "Adakah ini kecemasan?", a: "Ia mendesak jika tingkap tidak boleh dikunci untuk keselamatan, terutamanya di tingkat bawah atau balkoni boleh diakses." },
        { q: "Patutkah saya menghantar foto dahulu?", a: "Ya, foto pemegang, kunci, dan keseluruhan tingkap membantu kami menyediakan alatan dan bahagian yang betul." }
      ]
    },
    zh: {
      title: "窗锁或把手卡住",
      symptom: "窗户把手卡住、锁扣无法闭合，或推拉窗无法安全关闭。",
      costRange: "RM80–RM300+，视零件和窗户类型而定",
      causes: ["锁具机构磨损", "推拉轨道错位", "生锈或积垢", "窗框长期位移"],
      solutions: ["清洁并调整轨道", "调整锁扣位置", "更换把手或门闩", "润滑并测试顺畅关闭"],
      whenToCall: ["窗户无法锁上以确保安全", "玻璃面板感觉不稳固", "轨道或窗框弯曲"],
      faqs: [
        { q: "旧窗锁可以更换吗？", a: "可以，如果有兼容零件，许多常见把手和门闩都可以更换。" },
        { q: "你们修复推拉窗吗？", a: "我们可以为常见住宅窗户调整轨道、把手、门闩及小的对齐问题。" },
        { q: "这是紧急情况吗？", a: "如果窗户无法锁上以确保安全，尤其是在低楼层或可进入的阳台，这属于紧急情况。" },
        { q: "我应该先发照片吗？", a: "是的，把手、锁具和整扇窗户的照片有助于我们准备正确的工具和零件。" }
      ]
    }
  },
  "ikea-furniture-assembly-help": {
    ms: {
      title: "Bantuan Pemasangan Perabot IKEA atau Flat-Pack",
      symptom: "Almari, katil, rak, atau meja sukar dipasang, tidak stabil, atau memerlukan sauh dinding.",
      costRange: "RM100–RM600+ bergantung kepada saiz dan kerumitan perabot",
      causes: ["Arahan flat-pack kompleks", "Perkakasan hilang atau bercampur", "Almari besar memerlukan pengendalian dua orang", "Sauh dinding diperlukan untuk keselamatan"],
      solutions: ["Susun bahagian dan perkakasan", "Pasang rangka segi empat dan rata", "Kukuhkan unit berat ke dinding jika diperlukan", "Laraskan pintu, laci, dan engsel"],
      whenToCall: ["Perabot berat atau tinggi", "Sauh diperlukan", "Pemasangan sebelumnya tidak stabil"],
      faqs: [
        { q: "Adakah anda memasang perabot IKEA dan Taobao?", a: "Ya, kami memasang almari flat-pack biasa, katil, meja, kabinet, rak, dan unit simpanan." },
        { q: "Adakah anda mengukuhkan almari ke dinding?", a: "Ya, kami mengesyorkan pengukuhan perabot tinggi atau berat di mana keselamatan memerlukannya." },
        { q: "Bolehkah anda membaiki perabot yang dipasang secara salah?", a: "Selalunya ya, tetapi panel rosak atau perkakasan hilang mungkin memerlukan bahagian ganti." },
        { q: "Bagaimana pemasangan dikenakan harga?", a: "Harga bergantung kepada saiz perabot, bilangan item, kerumitan, dan sama ada penggerudian dinding diperlukan." }
      ]
    },
    zh: {
      title: "IKEA 或平板包装家具组装协助",
      symptom: "衣柜、床架、置物架或书桌难以组装、不稳固，或需要墙壁锚固。",
      costRange: "RM100–RM600+，视家具尺寸和复杂程度而定",
      causes: ["复杂的平板包装说明书", "五金件缺失或混乱", "大型衣柜需要两人搬运", "为安全需要墙壁锚固"],
      solutions: ["整理零件与五金件", "组装方正水平的框架", "必要时将重型家具固定于墙壁", "调整门板、抽屉与铰链"],
      whenToCall: ["家具较重或较高", "需要锚固", "先前的组装不稳固"],
      faqs: [
        { q: "你们组装 IKEA 和淘宝家具吗？", a: "会的，我们组装常见的平板包装衣柜、床架、书桌、柜子、置物架与储物单元。" },
        { q: "你们会将衣柜固定在墙上吗？", a: "会的，出于安全考虑，我们建议固定高大或较重的家具。" },
        { q: "你们能修复组装错误的家具吗？", a: "通常可以，但损坏的面板或缺失的五金件可能需要更换零件。" },
        { q: "组装如何计价？", a: "价格取决于家具尺寸、数量、复杂程度以及是否需要墙壁钻孔。" }
      ]
    }
  },
  "clogged-gutter-leaking": {
    ms: {
      title: "Saliran Tersumbat Menyebabkan Kebocoran atau Limpahan Bumbung",
      symptom: "Air melimpah dari saliran semasa hujan, menyebabkan kebocoran dinding atau siling.",
      costRange: "RM280–RM1,200+ bergantung kepada skop pembersihan + pembaikan",
      causes: ["Pengumpulan daun, serpihan dan lumut", "Saliran melendut atau tidak sejajar", "Paip turun tersumbat", "Pengawal saliran hilang atau rosak"],
      solutions: ["Bersihkan semua serpihan dengan selamat", "Sejajarkan semula atau gantikan bahagian rosak", "Pasang pengawal saliran", "Periksa dan baiki papan fasia jika reput"],
      whenToCall: ["Air memasuki rumah", "Saliran melendut atau tertanggal", "Beberapa paip turun tersumbat"],
      faqs: [
        { q: "Berapa kerap saliran perlu dibersihkan di Malaysia?", a: "Sekurang-kurangnya dua kali setahun (sebelum dan selepas musim monsun)." },
        { q: "Adakah anda memasang pengawal saliran?", a: "Ya, kami mengesyorkan pengawal daun pada hartanah bertanah dengan pokok berdekatan." }
      ]
    },
    zh: {
      title: "排水沟堵塞导致屋顶漏水或溢流",
      symptom: "下雨时排水沟溢流，导致墙面或天花板漏水。",
      costRange: "RM280–RM1,200+，视清理与维修范围而定",
      causes: ["树叶、杂物与青苔堆积", "排水沟下垂或错位", "落水管堵塞", "排水沟防护网缺失或损坏"],
      solutions: ["安全清除所有杂物", "重新调整或更换损坏部分", "安装排水沟防护网", "檐板腐烂时检查并修复"],
      whenToCall: ["水进入室内", "排水沟下垂或脱落", "多根落水管堵塞"],
      faqs: [
        { q: "马来西亚排水沟多久需要清理一次？", a: "至少每年两次（季风季节前后）。" },
        { q: "你们安装排水沟防护网吗？", a: "会的，对于附近有树木的有地物业，我们建议安装防叶网。" }
      ]
    }
  },
  "kitchen-cabinet-door-misaligned": {
    ms: {
      title: "Pintu Kabinet Dapur Tidak Sejajar atau Tidak Menutup dengan Betul",
      symptom: "Pintu kabinet tidak sekata, bergesel, atau tidak kekal tertutup.",
      costRange: "RM90–RM450+ bergantung kepada penggantian engsel dan pelarasan",
      causes: ["Engsel haus atau longgar", "Pergerakan rangka kabinet", "Barang berat di dalam menyebabkan melendut", "Jenis engsel salah untuk berat pintu"],
      solutions: ["Laraskan atau gantikan engsel", "Kukuhkan rangka kabinet", "Tambah peredam tutup lembut", "Sejajarkan semula pintu"],
      whenToCall: ["Beberapa pintu terjejas", "Pintu berat atau berkaca", "Rangka kabinet terasa longgar"],
      faqs: [
        { q: "Bolehkah anda membaiki engsel tutup lembut?", a: "Ya, kami menggantikan dengan engsel tutup lembut Blum atau Häfele." },
        { q: "Adakah anda membaiki kabinet sedia ada atau hanya baru?", a: "Kami membaiki dan melaraskan kabinet dapur sedia ada serta memasang yang baru." }
      ]
    },
    zh: {
      title: "厨房橱柜门错位或无法正常关闭",
      symptom: "橱柜门不平整、摩擦或无法保持关闭。",
      costRange: "RM90–RM450+，视铰链更换和调整而定",
      causes: ["铰链磨损或松动", "橱柜框架位移", "内部重物导致下垂", "门重与铰链类型不匹配"],
      solutions: ["调整或更换铰链", "加固橱柜框架", "加装缓冲阻尼器", "重新对齐门板"],
      whenToCall: ["多扇门受影响", "门较重或带玻璃", "橱柜框架感觉松动"],
      faqs: [
        { q: "你们能修复缓冲铰链吗？", a: "会的，我们使用 Blum 或 Häfele 缓冲铰链进行更换。" },
        { q: "你们只安装新橱柜还是也维修现有的？", a: "我们既维修调整现有厨房橱柜，也安装新橱柜。" }
      ]
    }
  },
  "flickering-downlights": {
    ms: {
      title: "Downlight Berkelip atau Tidak Menyala",
      symptom: "Downlight LED berkelip, berdengung, atau gagal menyala selepas beberapa bulan.",
      costRange: "RM80–RM320+ setiap titik bergantung kepada penggantian pemacu",
      causes: ["Pemacu LED tidak serasi atau murah", "Pendawaian longgar dalam siling", "Terlebih panas akibat pengudaraan lemah", "Turun naik voltan"],
      solutions: ["Gantikan pemacu LED rosak", "Periksa dan kukuhkan pendawaian", "Pasang downlight berkualiti lebih baik", "Tambah pengudaraan atau penyerap haba"],
      whenToCall: ["Beberapa downlight terjejas", "Bau hangus dari siling", "Lampu trip litar"],
      faqs: [
        { q: "Mengapa downlight baru berkelip?", a: "Biasanya disebabkan oleh pemacu berkualiti rendah atau dimmer tidak serasi. Kami menggantikan dengan pemacu berkualiti." },
        { q: "Bolehkah anda menggantikan hanya pemacu?", a: "Ya - kebanyakan isu berkelip dibaiki dengan menggantikan pemacu tanpa menukar lekapan." }
      ]
    },
    zh: {
      title: "筒灯闪烁或无法开启",
      symptom: "LED 筒灯使用几个月后出现闪烁、嗡嗡声或无法开启。",
      costRange: "RM80–RM320+/点，视驱动器更换而定",
      causes: ["不兼容或廉价的 LED 驱动器", "天花板内布线松动", "通风不良导致过热", "电压波动"],
      solutions: ["更换故障 LED 驱动器", "检查并加固布线", "安装更优质的筒灯", "增加通风或散热片"],
      whenToCall: ["多个筒灯受影响", "天花板有烧焦味", "灯具导致跳闸"],
      faqs: [
        { q: "为什么新筒灯会闪烁？", a: "通常是由劣质驱动器或不兼容的调光器引起。我们会更换为优质驱动器。" },
        { q: "你们能只更换驱动器吗？", a: "可以——大多数闪烁问题只需更换驱动器而无需更换灯具本身即可解决。" }
      ]
    }
  },
  "plaster-ceiling-cracking-joints": {
    ms: {
      title: "Retakan Sendi Siling Plaster Selepas Pemasangan",
      symptom: "Retakan lurus muncul di sepanjang sendi papan plaster dalam beberapa bulan selepas pemasangan.",
      costRange: "RM150–RM850+ bergantung kepada kawasan",
      causes: ["Pita atau sebatian sendi tidak mencukupi", "Pergerakan rangka", "Kelembapan tinggi", "Jarak skru lemah"],
      solutions: ["Potong dan pita semula sendi dengan jaringan gentian kaca", "Sapukan berbilang lapisan sebatian", "Skim keseluruhan siling", "Perbaiki pengudaraan"],
      whenToCall: ["Retakan semakin luas", "Beberapa bilik terjejas", "Siling terasa fleksibel"],
      faqs: [
        { q: "Adakah retakan normal pada siling plaster baru?", a: "Retakan rambut kecil boleh berlaku, tetapi retakan luas atau berulang menunjukkan sambungan sendi lemah atau pergerakan." },
        { q: "Bolehkah anda membaiki tanpa mengecat semula keseluruhan siling?", a: "Ya untuk kawasan kecil - kami menggabungkan pembaikan dengan lancar." }
      ]
    },
    zh: {
      title: "石膏天花板安装后接缝开裂",
      symptom: "安装后几个月内石膏板接缝处出现直线裂缝。",
      costRange: "RM150–RM850+，视面积而定",
      causes: ["接缝带或腻子不足", "骨架位移", "湿度过高", "螺丝间距不当"],
      solutions: ["用玻璃纤维网格切开并重新贴带", "涂抹多层腻子", "整个天花板批灰", "改善通风"],
      whenToCall: ["裂缝正在扩大", "多个房间受影响", "天花板感觉有弹性"],
      faqs: [
        { q: "新石膏天花板开裂正常吗？", a: "轻微发丝裂缝可能发生，但宽大或反复出现的裂缝表明接缝处理不当或存在位移。" },
        { q: "你们能不重新粉刷整个天花板就修复吗？", a: "小面积可以——我们会将修复处无缝融合。" }
      ]
    }
  },
  "peeling-skim-coat": {
    ms: {
      title: "Skim Coat Terkopek atau Berserbuk Selepas Pengecatan",
      symptom: "Permukaan skim coat baru berserbuk, terkopek, atau tidak memegang cat dengan baik.",
      costRange: "RM120–RM680+ bergantung kepada kawasan",
      causes: ["Persediaan permukaan lemah", "Nisbah campuran salah", "Kelembapan tinggi semasa aplikasi", "Primer tidak serasi"],
      solutions: ["Kikis bahan longgar", "Sapukan semula agen lekatan yang betul", "Skim semula dengan campuran yang betul", "Gunakan primer berkualiti sebelum mengecat"],
      whenToCall: ["Kawasan luas terjejas", "Serbuk terkopek apabila disentuh", "Cat menggelembung"],
      faqs: [
        { q: "Mengapa skim coat terkopek selepas mengecat?", a: "Biasanya disebabkan oleh habuk, kelembapan, atau lekatan lemah. Kami membaiki substrat dahulu kemudian skim semula." },
        { q: "Berapa lama skim coat perlu kering sebelum mengecat?", a: "Sekurang-kurangnya 7–14 hari bergantung kepada ketebalan dan kelembapan." }
      ]
    },
    zh: {
      title: "批灰粉刷后剥落或粉化",
      symptom: "新批灰表面出现粉化、剥落，或无法很好地附着油漆。",
      costRange: "RM120–RM680+，视面积而定",
      causes: ["表面预备不佳", "混合比例错误", "施工时湿度过高", "底漆不兼容"],
      solutions: ["刮除松脱材料", "重新涂抹正确的粘结剂", "以正确配比重新批灰", "上漆前使用优质底漆"],
      whenToCall: ["大面积受影响", "触摸时粉末脱落", "油漆起泡"],
      faqs: [
        { q: "为什么批灰粉刷后会剥落？", a: "通常是由于灰尘、潮气或粘结不良造成的。我们会先处理基层再重新批灰。" },
        { q: "批灰需要干燥多久才能上漆？", a: "根据厚度和湿度，至少需要 7–14 天。" }
      ]
    }
  },
  "epoxy-floor-yellowing": {
    ms: {
      title: "Lantai Epoxy Menguning atau Berubah Warna",
      symptom: "Lantai epoxy baru bertukar kuning, terutamanya di kawasan terdedah kepada cahaya matahari.",
      costRange: "RM280–RM1,800+ bergantung kepada kawasan",
      causes: ["Topcoat tidak stabil UV", "Resin epoxy murah", "Pendedahan cahaya matahari langsung berpanjangan", "Pendedahan kimia"],
      solutions: ["Sapukan topcoat PU alifatik stabil UV", "Amplas dan salut semula kawasan terjejas", "Gunakan sistem serpihan berpigmen", "Pasang filem tingkap atau bidai"],
      whenToCall: ["Penguningan merebak pesat", "Permukaan terasa melekit", "Klien mahukan kemasan premium"],
      faqs: [
        { q: "Bolehkah epoxy menguning dibaiki?", a: "Ya - kami mengamplas permukaan dan menyapu topcoat stabil UV." },
        { q: "Bagaimana anda mengelakkan penguningan?", a: "Sentiasa gunakan topcoat PU alifatik pada kawasan terdedah kepada cahaya matahari." }
      ]
    },
    zh: {
      title: "环氧地板变黄或褪色",
      symptom: "新环氧地板出现发黄，尤其是在阳光照射的区域。",
      costRange: "RM280–RM1,800+，视面积而定",
      causes: ["非抗紫外线面层", "廉价环氧树脂", "长期直接阳光照射", "化学品接触"],
      solutions: ["涂抹抗紫外线脂肪族 PU 面层", "打磨并重新涂覆受影响区域", "使用带颜料的彩片系统", "安装窗膜或百叶窗"],
      whenToCall: ["发黄迅速蔓延", "表面感觉粘腻", "客户希望获得高级饰面"],
      faqs: [
        { q: "变黄的环氧地板可以修复吗？", a: "可以——我们会打磨表面并涂抹抗紫外线面层。" },
        { q: "如何防止变黄？", a: "在阳光照射区域始终使用脂肪族 PU 面层。" }
      ]
    }
  },
  "wardrobe-door-not-closing": {
    ms: {
      title: "Pintu Almari Bina-Dalam Tidak Menutup atau Tidak Sejajar",
      symptom: "Pintu almari tidak sekata, bergesel antara satu sama lain, atau tidak menutup rata.",
      costRange: "RM120–RM580+ bergantung kepada pelarasan atau kerja engsel",
      causes: ["Rangka tidak rata semasa pemasangan", "Pintu melengkung", "Engsel haus", "Barang berat menyebabkan melendut"],
      solutions: ["Ratakan rangka", "Laraskan atau gantikan engsel", "Ratakan pintu jika perlu", "Tambah rak sokongan"],
      whenToCall: ["Beberapa pintu terjejas", "Pintu berat atau tinggi", "Rangka terasa longgar"],
      faqs: [
        { q: "Bolehkah anda membaiki almari sedia ada?", a: "Ya - kami membaiki dan melaraskan almari bina-dalam, menggantikan engsel, dan menyejajarkan semula pintu." },
        { q: "Adakah anda menggunakan engsel tutup lembut?", a: "Ya - kami memasang sistem tutup lembut Blum atau Häfele." }
      ]
    },
    zh: {
      title: "定制衣柜门无法关闭或错位",
      symptom: "衣柜门不平整、彼此摩擦，或无法平齐关闭。",
      costRange: "RM120–RM580+，视调整或铰链工作而定",
      causes: ["安装时框架未调平", "门板变形", "铰链磨损", "重物导致下垂"],
      solutions: ["调平框架", "调整或更换铰链", "必要时刨平门板", "加装支撑架"],
      whenToCall: ["多扇门受影响", "门较重或较高", "框架感觉松动"],
      faqs: [
        { q: "你们能修复现有的衣柜吗？", a: "可以——我们维修调整定制衣柜、更换铰链，并重新对齐门板。" },
        { q: "你们使用缓冲铰链吗？", a: "会的——我们安装 Blum 或 Häfele 缓冲系统。" }
      ]
    }
  },
  "door-scraping-floor": {
    ms: {
      title: "Pintu Menggesel Lantai atau Tidak Mengancing dengan Betul",
      symptom: "Pintu menggesel lantai, bergesel dengan karpet, atau kancing tidak mengait.",
      costRange: "RM80–RM350+ bergantung kepada kerja yang diperlukan",
      causes: ["Pintu mengembang akibat kelembapan", "Engsel longgar", "Perubahan tahap lantai", "Plat kancing tidak sejajar"],
      solutions: ["Ratakan bahagian bawah pintu", "Ketatkan atau gantikan engsel", "Laraskan plat kancing", "Tambah penyapu pintu jika perlu"],
      whenToCall: ["Pintu berat atau ada kunci digital", "Beberapa pintu terjejas", "Kebimbangan keselamatan"],
      faqs: [
        { q: "Bolehkah anda meratakan pintu tanpa menanggalkannya?", a: "Ya untuk pelarasan kecil. Pintu lebih berat mungkin memerlukan penanggalan." },
        { q: "Adakah anda membaiki pintu tahan api?", a: "Ya - kami mengekalkan taraf tahan api semasa pembaikan." }
      ]
    },
    zh: {
      title: "门刮擦地板或无法正常锁上",
      symptom: "门拖擦地面、刮擦地毯，或门闩无法扣合。",
      costRange: "RM80–RM350+，视所需工作而定",
      causes: ["湿气导致门膨胀", "铰链松动", "地面高度变化", "门闩板错位"],
      solutions: ["刨平门底部", "紧固或更换铰链", "调整门闩板", "必要时加装门扫"],
      whenToCall: ["门较重或装有数字锁", "多扇门受影响", "存在安全隐患"],
      faqs: [
        { q: "你们能不拆门就刨平吗？", a: "小的调整可以。较重的门可能需要拆卸。" },
        { q: "你们维修防火门吗？", a: "会的——我们在维修过程中保持防火等级。" }
      ]
    }
  },
  "sliding-window-stuck": {
    ms: {
      title: "Tingkap Gelongsor Tersekat atau Sukar Dibuka",
      symptom: "Tingkap gelongsor sukar digerakkan, terkeluar dari trek, atau tidak mengunci.",
      costRange: "RM90–RM420+ bergantung kepada bahagian",
      causes: ["Roller kotor atau rosak", "Trek melengkung", "Rangka tidak sejajar", "Mekanisme kunci rosak"],
      solutions: ["Bersihkan dan lincirkan trek", "Gantikan roller", "Sejajarkan semula rangka", "Gantikan kunci atau pemegang"],
      whenToCall: ["Tingkap di tingkat atas", "Risiko keselamatan", "Kaca longgar"],
      faqs: [
        { q: "Bolehkah anda menggantikan roller tingkap?", a: "Ya - kami menstok saiz roller biasa untuk tingkap aluminium dan UPVC." },
        { q: "Adakah anda membaiki tingkap casement juga?", a: "Ya - engsel, pemegang, dan pengedap untuk semua jenis tingkap biasa." }
      ]
    },
    zh: {
      title: "推拉窗卡住或难以开启",
      symptom: "推拉窗移动困难、脱离轨道，或无法上锁。",
      costRange: "RM90–RM420+，视零件而定",
      causes: ["滚轮脏污或损坏", "轨道变形", "窗框错位", "锁具机构损坏"],
      solutions: ["清洁并润滑轨道", "更换滚轮", "重新对齐窗框", "更换锁具或把手"],
      whenToCall: ["窗户位于楼上", "存在安全风险", "玻璃松动"],
      faqs: [
        { q: "你们能更换窗户滚轮吗？", a: "可以——我们备有铝窗和 UPVC 窗常见滚轮尺寸。" },
        { q: "你们也修复平开窗吗？", a: "会的——所有常见窗户类型的铰链、把手与密封条均可维修。" }
      ]
    }
  },
  "smart-lock-not-working": {
    ms: {
      title: "Kunci Pintar Tidak Bertindak Balas atau Bateri Cepat Habis",
      symptom: "Kunci digital/pintar tidak bertindak balas, apl tidak menyambung, atau bateri cepat habis.",
      costRange: "RM150–RM680+ bergantung kepada model dan isu",
      causes: ["Bateri rendah atau rosak", "Isu pemasangan apl", "Kegagalan motor", "Pemasangan salah"],
      solutions: ["Gantikan bateri", "Pasang semula dengan apl", "Gantikan modul motor", "Pasang semula dengan betul"],
      whenToCall: ["Kunci mati sepenuhnya", "Pintu tidak boleh dibuka", "Beberapa kunci terjejas"],
      faqs: [
        { q: "Bolehkah anda memasang kunci pintar Yale, Samsung atau Tuya?", a: "Ya - kami memasang dan mengkonfigurasi semua jenama kunci pintar popular." },
        { q: "Adakah anda menyediakan perkhidmatan terkunci kecemasan?", a: "Ya - perkhidmatan terkunci kecemasan 24/7 tersedia." }
      ]
    },
    zh: {
      title: "智能锁无响应或耗电过快",
      symptom: "数字/智能锁无响应、应用无法连接，或电池耗电过快。",
      costRange: "RM150–RM680+，视型号和问题而定",
      causes: ["电池电量低或故障", "应用配对问题", "电机故障", "安装不当"],
      solutions: ["更换电池", "重新与应用配对", "更换电机模块", "正确重新安装"],
      whenToCall: ["锁完全无反应", "门无法打开", "多把锁受影响"],
      faqs: [
        { q: "你们能安装 Yale、Samsung 或 Tuya 智能锁吗？", a: "可以——我们安装并配置所有主流智能锁品牌。" },
        { q: "你们提供紧急开锁服务吗？", a: "会的——提供 24/7 紧急开锁服务。" }
      ]
    }
  },
  "shower-screen-leaking": {
    ms: {
      title: "Skrin Pancuran Tanpa Bingkai Bocor di Bahagian Bawah",
      symptom: "Air bocor dari bahagian bawah skrin pancuran ke lantai.",
      costRange: "RM180–RM750+ bergantung kepada penggantian pengedap",
      causes: ["Pengedap bawah haus", "Kecerunan salah", "Rangka tidak rata", "Kegagalan silikon"],
      solutions: ["Gantikan pengedap bawah", "Silikon semula sendi", "Laraskan aras rangka", "Tambah jalur ambang"],
      whenToCall: ["Kebocoran merebak ke kawasan lain", "Skrin longgar", "Beberapa skrin terjejas"],
      faqs: [
        { q: "Bolehkah anda menggantikan hanya pengedap?", a: "Ya - kebanyakan kebocoran dibaiki dengan menggantikan pengedap sapu bawah dan silikon semula." },
        { q: "Adakah anda memasang skrin pancuran tanpa bingkai?", a: "Ya - kami membekal dan memasang sistem tanpa bingkai kaca keras 10mm." }
      ]
    },
    zh: {
      title: "无框淋浴屏底部漏水",
      symptom: "水从淋浴屏底部渗漏到地面。",
      costRange: "RM180–RM750+，视密封条更换而定",
      causes: ["底部密封条磨损", "坡度不正确", "框架未调平", "硅胶失效"],
      solutions: ["更换底部密封条", "重新打硅胶密封接缝", "调整框架水平", "加装门槛条"],
      whenToCall: ["漏水蔓延至其他区域", "屏风松动", "多块屏风受影响"],
      faqs: [
        { q: "你们能只更换密封条吗？", a: "可以——大多数漏水问题通过更换底部密封条并重新打硅胶即可解决。" },
        { q: "你们安装无框淋浴屏吗？", a: "会的——我们供应并安装 10 毫米钢化玻璃无框系统。" }
      ]
    }
  },
  "cctv-not-recording": {
    ms: {
      title: "Kamera CCTV Tidak Merakam atau Rakaman Hilang",
      symptom: "Kamera menunjukkan paparan langsung tetapi tiada rakaman, atau rakaman rosak/hilang.",
      costRange: "RM180–RM850+ bergantung kepada isu NVR/HDD",
      causes: ["Kegagalan HDD", "Ralat tetapan NVR", "Isu rangkaian", "Masalah bekalan kuasa", "Isu firmware kamera"],
      solutions: ["Periksa dan gantikan HDD", "Konfigurasi semula jadual rakaman", "Kemas kini firmware", "Periksa rangkaian dan kuasa"],
      whenToCall: ["Tiada rakaman untuk beberapa hari", "Beberapa kamera terjejas", "Rakaman penting diperlukan"],
      faqs: [
        { q: "Bolehkah anda memulihkan rakaman hilang?", a: "Kadangkala - kami cuba pemulihan data daripada HDD sebelum penggantian." },
        { q: "Adakah anda memasang sistem Hikvision dan Dahua?", a: "Ya - kami berpengalaman dengan sistem Hikvision, Dahua, Ezviz dan Tuya." }
      ]
    },
    zh: {
      title: "CCTV 摄像头无法录像或录像丢失",
      symptom: "摄像头能显示实时画面但无录像，或录像损坏/丢失。",
      costRange: "RM180–RM850+，视 NVR/硬盘问题而定",
      causes: ["硬盘故障", "NVR 设置错误", "网络问题", "电源供应问题", "摄像头固件问题"],
      solutions: ["检查并更换硬盘", "重新配置录像计划", "更新固件", "检查网络与电源"],
      whenToCall: ["数天无录像", "多个摄像头受影响", "需要重要录像资料"],
      faqs: [
        { q: "你们能恢复丢失的录像吗？", a: "有时可以——在更换硬盘前我们会尝试进行数据恢复。" },
        { q: "你们安装 Hikvision 和 Dahua 系统吗？", a: "会的——我们熟悉 Hikvision、Dahua、Ezviz 和 Tuya 系统。" }
      ]
    }
  },
  "autogate-not-closing": {
    ms: {
      title: "Autogate Tidak Menutup atau Motor Berjalan Berterusan",
      symptom: "Autogate terbuka tetapi tidak akan menutup, atau motor terus berjalan tanpa berhenti.",
      costRange: "RM250–RM1,200+ bergantung kepada penggantian motor atau sensor",
      causes: ["Suis had rosak", "Sensor halangan tersekat", "Kegagalan kapasitor motor", "Isu remote atau papan"],
      solutions: ["Gantikan suis had", "Bersihkan atau gantikan sensor keselamatan", "Gantikan kapasitor motor", "Program semula papan kawalan"],
      whenToCall: ["Pintu tersekat terbuka/tertutup", "Motor terlebih panas", "Risiko keselamatan"],
      faqs: [
        { q: "Bolehkah anda membaiki motor autogate sedia ada?", a: "Ya - kami membaiki dan menservis Autogate 2000, Nice, FAAC dan banyak jenama lain." },
        { q: "Adakah anda memasang sandaran bateri?", a: "Ya - kami mengesyorkan dan memasang sandaran bateri untuk gangguan kuasa." }
      ]
    },
    zh: {
      title: "自动门无法关闭或电机持续运转",
      symptom: "自动门可以打开但无法关闭，或电机持续运转不停止。",
      costRange: "RM250–RM1,200+，视电机或传感器更换而定",
      causes: ["限位开关故障", "障碍传感器受阻", "电机电容器故障", "遥控器或电路板问题"],
      solutions: ["更换限位开关", "清洁或更换安全传感器", "更换电机电容器", "重新编程控制板"],
      whenToCall: ["大门卡在打开/关闭状态", "电机过热", "存在安全风险"],
      faqs: [
        { q: "你们能维修现有的自动门电机吗？", a: "可以——我们维修保养 Autogate 2000、Nice、FAAC 及其他多个品牌。" },
        { q: "你们安装备用电池吗？", a: "会的——我们建议并安装备用电池以应对停电。" }
      ]
    }
  },
  "rusting-window-grille": {
    ms: {
      title: "Grille Tingkap atau Pintu Pagar Berkarat Pesat",
      symptom: "Grille/pagar baru atau baru dicat menunjukkan bintik karat dalam beberapa bulan.",
      costRange: "RM150–RM680+ bergantung kepada kawasan dan rawatan",
      causes: ["Persediaan permukaan lemah sebelum mengecat", "Cat atau primer gred rendah", "Kawasan pantai atau lembap", "Calar mendedahkan logam"],
      solutions: ["Sandblast dan prima semula", "Sapukan penukar karat + cat berkualiti tinggi", "Sadur galvani panas jika boleh", "Salutan serbuk untuk ketahanan lebih baik"],
      whenToCall: ["Karat merebak pesat", "Kebimbangan struktur", "Beberapa grille terjejas"],
      faqs: [
        { q: "Bolehkah anda mengecat semula grille sedia ada?", a: "Ya - kami sandblast, rawat karat, dan sapukan sistem primer + topcoat yang betul." },
        { q: "Adakah salutan serbuk lebih baik daripada cat?", a: "Ya - salutan serbuk lebih tahan lasak dan disyorkan untuk kawasan pantai atau kelembapan tinggi." }
      ]
    },
    zh: {
      title: "窗户护栏或大门快速生锈",
      symptom: "新的或近期上漆的护栏/大门在几个月内出现锈斑。",
      costRange: "RM150–RM680+，视面积和处理方式而定",
      causes: ["上漆前表面预备不佳", "低品质油漆或底漆", "沿海或潮湿地区", "划痕导致金属外露"],
      solutions: ["喷砂处理并重新打底", "涂抹除锈转化剂+优质油漆", "如可能则进行热浸镀锌", "喷粉处理以获得更好的耐久性"],
      whenToCall: ["锈蚀迅速蔓延", "存在结构隐患", "多个护栏受影响"],
      faqs: [
        { q: "你们能重新粉刷现有的护栏吗？", a: "可以——我们进行喷砂、除锈处理，并涂抹正确的底漆+面漆系统。" },
        { q: "喷粉是否比油漆更好？", a: "是的——喷粉更耐用，推荐用于沿海或高湿度地区。" }
      ]
    }
  },
  "yellowing-white-walls": {
    ms: {
      title: "Dinding Putih Bertukar Kuning / Krim",
      costRange: "RM 400–RM 3,500+ bergantung kepada bilangan bilik dan punca",
      faqs: [
        { q: "Kenapa dinding putih saya menjadi kuning begitu cepat?", a: "Biasanya gabungan cat murah (kestabilan UV rendah), gris dapur bawaan udara, asap rokok dan pendedahan matahari. Cat akrilik premium mengekalkan warna putih lebih lama." },
        { q: "Bolehkah saya terus mengecat di atas tompok kuning?", a: "Hanya jika anda sapukan primer penghalang noda dahulu — jika tidak, noda akan menembusi topcoat baharu dalam beberapa minggu." },
        { q: "Cat mana yang paling lama kekal putih di Malaysia?", a: "Cari akrilik dalaman premium dengan kestabilan UV dan VOC rendah — jenama seperti Nippon Odour-less, Dulux EasyClean dan Jotun Fenomastic adalah pilihan biasa kami." }
      ]
    },
    zh: {
      title: "白墙发黄 / 变黄",
      costRange: "RM 400–RM 3,500+，视房间数量和原因而定",
      faqs: [
        { q: "我的白墙为什么会这么快变黄？", a: "通常是廉价油漆（抗紫外线性能差）、厨房油烟、香烟烟雾和日晒共同作用的结果。优质丙烯酸漆能保持白色更久。" },
        { q: "可以直接在发黄的斑块上重新刷漆吗？", a: "必须先涂防污底漆——否则污渍会在几周内渗透到新面漆上。" },
        { q: "在马来西亚哪种漆保持白色最久？", a: "选择具有抗紫外线和低 VOC 的优质室内丙烯酸漆——如 Nippon Odour-less、Dulux EasyClean 和 Jotun Fenomastic 是我们常用的选择。" }
      ]
    }
  },
  "paint-cracking-hairline-walls": {
    ms: {
      title: "Retak Rambut pada Dinding Bercat",
      costRange: "RM 300–RM 2,200+ bergantung kepada panjang retakan dan skop pengecatan semula",
      faqs: [
        { q: "Adakah retak rambut tanda kerosakan struktur rumah?", a: "Hampir tidak pernah. Retak rambut kosmetik adalah normal akibat enapan dan pergerakan filem cat — retak struktur sebenar biasanya jauh lebih lebar (5 mm+), menyerong dan progresif." },
        { q: "Bolehkah saya hanya mengisi retak rambut dengan putty biasa?", a: "Tidak untuk hasil tahan lama. Putty tegar akan pecah keluar dalam beberapa bulan. Kami gunakan pengisi akrilik fleksibel + pita mesh supaya retakan kekal tertutup walaupun dinding bergerak." },
        { q: "Berapa kos membaiki retak rambut di seluruh bilik?", a: "Pembaikan retak + skim + primer + cat semula peringkat bilik biasanya RM 500 hingga RM 1,200 bergantung kepada luas dinding dan gred cat." }
      ]
    },
    zh: {
      title: "涂漆墙面出现发丝裂纹",
      costRange: "RM 300–RM 2,200+，视裂纹长度和重涂范围而定",
      faqs: [
        { q: "发丝裂纹是否意味着房屋有结构损坏？", a: "几乎不会。表面的发丝裂纹是正常的沉降和漆膜伸缩所致——真正的结构裂缝通常宽得多（5 毫米以上）、呈斜向且不断扩展。" },
        { q: "可以用普通腻子填补发丝裂纹吗？", a: "无法持久。刚性腻子几个月内就会崩裂。我们使用柔性丙烯酸填缝剂+网格胶带，即使墙体移动裂缝也能保持密封。" },
        { q: "整间房修复发丝裂纹要多少钱？", a: "整间房的裂缝修补+批灰+底漆+重涂通常在 RM 500 至 RM 1,200，视墙面面积和油漆等级而定。" }
      ]
    }
  },
  "leaking-bathroom": {
    ms: {
      title: "Bilik Air Bocor (Lantai Basah, Dinding Lembap)",
      costRange: "RM 350–RM 4,500+ bergantung kepada punca kebocoran",
      faqs: [
        { q: "Perlukah jubin dipecahkan untuk membaiki kebocoran bilik air?", a: "Biasanya tidak. Dalam kebanyakan kes kami boleh menutup kebocoran dari bawah menggunakan grouting PU tekanan tinggi — tanpa merosakkan jubin. Pengecuhan penuh hanya diperlukan apabila membran telah gagal sepenuhnya." },
        { q: "Berapa kos pembaikan kebocoran bilik air di KL?", a: "Grouting PU dari bawah: RM 350 hingga RM 1,500. Semula silikon: RM 180 hingga RM 350. Ganti membran penuh: RM 3,500 hingga RM 8,500 untuk bilik air standard." },
        { q: "Berapa cepat anda boleh hadir untuk kebocoran bilik air yang aktif?", a: "Untuk kebocoran aktif di Lembah Klang kami hantar pada hari yang sama, biasanya tiba dalam 45 hingga 90 minit." }
      ]
    },
    zh: {
      title: "浴室漏水（楼下地面潮湿、墙壁渗水）",
      costRange: "RM 350–RM 4,500+，视漏水原因而定",
      faqs: [
        { q: "修复浴室漏水一定要砸掉瓷砖吗？", a: "通常不需要。大多数情况下我们可以通过高压 PU 注浆从楼下封堵漏水——不损坏瓷砖。只有防水膜完全失效时才需要全面砸砖。" },
        { q: "在吉隆坡修复浴室漏水要多少钱？", a: "从楼下 PU 注浆：RM 350 至 RM 1,500。重新打硅胶：RM 180 至 RM 350。标准浴室防水膜重做：RM 3,500 至 RM 8,500。" },
        { q: "活跃的浴室漏水多久能上门处理？", a: "巴生谷地区的活跃漏水我们当天派遣，通常在 45 至 90 分钟内到达。" }
      ]
    }
  },
  "low-water-pressure": {
    ms: {
      title: "Tekanan Air Rendah di Rumah",
      costRange: "RM 200–RM 3,500+ bergantung kepada punca dan bilangan paip",
      faqs: [
        { q: "Adakah saya perlu memasang pam penggalak?", a: "Jika rumah anda 2+ tingkat atau anda mengalami tekanan rendah di tingkat atas, pam penggalak biasanya penyelesaian yang tepat. Pemasangan biasa: RM 900 hingga RM 2,200 bergantung kepada gred pam." },
        { q: "Bolehkah paip bergalvani lama menyebabkan tekanan rendah?", a: "Ya — karat dalaman menyempitkan diameter paip selepas 20+ tahun. Penukaran penuh kepada paip PPR/PEX memulihkan aliran dan mengelakkan kebocoran karat pada masa hadapan." },
        { q: "Bagaimana saya tahu jika penapis pemanas air tersumbat?", a: "Matikan pemanas, tutup injap masuk, buka skru penapis masuk dan periksa. Jika ia perang/berskala, bilas atau ganti — mengambil masa 10 minit." }
      ]
    },
    zh: {
      title: "家中水压过低",
      costRange: "RM 200–RM 3,500+，视原因和水龙头数量而定",
      faqs: [
        { q: "我应该安装增压泵吗？", a: "如果您的房屋有 2 层以上或顶层水压偏低，增压泵通常是正确的解决方案。典型安装费：RM 900 至 RM 2,200，视泵的等级而定。" },
        { q: "老旧的镀锌管会导致水压过低吗？", a: "会——20 多年后内部锈蚀会使管径变窄。全面更换为 PPR/PEX 管道可恢复水流并防止未来锈蚀漏水。" },
        { q: "如何判断热水器滤网是否堵塞？", a: "关闭热水器，关闭进水阀，拧下进水滤网检查。如果发黄/结垢，冲洗或更换——只需 10 分钟。" }
      ]
    }
  },
  "clogged-drain": {
    ms: {
      title: "Saluran Dapur atau Bilik Air Tersumbat",
      costRange: "RM 150–RM 700+ bergantung kepada tahap penyumbatan",
      faqs: [
        { q: "Adakah cecair kimia pembuka longkang selamat untuk paip?", a: "Bahan kimia kaustik kuat boleh merosakkan sambungan PVC lama dan tidak selamat untuk ruang tertutup. Kami cadangkan pembersihan mekanikal serta rawatan enzim — lebih selamat dan tahan lebih lama." },
        { q: "Berapa kos untuk membuka longkang dapur?", a: "Ular paip manual: RM 150 hingga RM 250. Jetting tekanan tinggi: RM 350 hingga RM 700 untuk saluran dapur penuh." },
        { q: "Bagaimana saya boleh mengelakkan penyumbatan dapur pada masa hadapan?", a: "Jangan buang gris masakan ke dalam sinki; gunakan penapis mesh; dan jalankan air panas + rawatan enzim bulanan untuk memastikan saluran bersih." }
      ]
    },
    zh: {
      title: "厨房或浴室下水道堵塞",
      costRange: "RM 150–RM 700+，视堵塞程度而定",
      faqs: [
        { q: "化学管道疏通剂对管道安全吗？", a: "强腐蚀性化学品会损坏老旧的 PVC 接头，在封闭空间也不安全。我们建议机械疏通加酶处理——更安全、效果更持久。" },
        { q: "疏通厨房下水道要多少钱？", a: "手动管道疏通：RM 150 至 RM 250。高压水射流：整条厨房管道 RM 350 至 RM 700。" },
        { q: "如何预防日后厨房堵塞？", a: "切勿将厨房油脂倒入水槽；使用滤网；并每月用热水加酶处理保持管道清洁。" }
      ]
    }
  },
  "toilet-not-flushing": {
    ms: {
      title: "Tandas Tidak Berfungsi dengan Baik",
      costRange: "RM 150–RM 850+ bergantung kepada penggantian bahagian",
      faqs: [
        { q: "Patutkah saya membaiki atau mengganti tandas lama?", a: "Jika seramik retak, atau anda telah mengganti bahagian berkali-kali dalam 2 tahun terakhir, mengganti keseluruhan set (RM 550 hingga RM 1,800 termasuk pemasangan) biasanya lebih menjimatkan." },
        { q: "Mengapa tandas saya sentiasa mengalir?", a: "Hampir selalu injap flapper haus atau pengedap injap pengisian. Kedua-duanya pembaikan cepat — RM 150 hingga RM 250 termasuk bahagian." },
        { q: "Berapa kos pemasangan tandas baru di KL?", a: "Bekalan + pemasangan set flush dwi standard biasanya RM 850 hingga RM 1,800 termasuk menanggalkan unit lama dan pelupusannya." }
      ]
    },
    zh: {
      title: "马桶冲水不畅",
      costRange: "RM 150–RM 850+，视更换部件而定",
      faqs: [
        { q: "老马桶应该维修还是更换？", a: "如果陶瓷开裂，或过去 2 年内多次更换零件，更换整套马桶（含安装 RM 550 至 RM 1,800）通常更划算。" },
        { q: "为什么马桶一直流水？", a: "几乎都是排水阀垫片或进水阀密封圈磨损。两者都是快速修复——含零件 RM 150 至 RM 250。" },
        { q: "在吉隆坡安装新马桶要多少钱？", a: "优质双冲水马桶的供应+安装通常在 RM 850 至 RM 1,800，包括拆除旧马桶并处理。" }
      ]
    }
  },
  "sagging-ceiling": {
    ms: {
      title: "Siling Plaster Melendut atau Melengkung",
      costRange: "RM 380–RM 2,800+ bergantung kepada keluasan papan yang diganti",
      faqs: [
        { q: "Adakah siling kendur boleh runtuh?", a: "Ya, terutamanya selepas kerosakan air yang berpanjangan. Jika ia lembut apabila disentuh atau menitis, jauhkan orang dan hubungi kami dengan segera — kami hantar pada hari yang sama untuk isu siling kritikal keselamatan." },
        { q: "Adakah anda perlu mengganti keseluruhan siling?", a: "Tidak. Kami keluarkan dan ganti hanya bahagian yang terjejas, kemudian sebati skim dan cat supaya pembaikan tidak kelihatan." },
        { q: "Papan siling mana yang perlu saya gunakan untuk mengelakkan kendur pada masa hadapan?", a: "Di kawasan mudah lembap (berhampiran bilik air, dapur) gunakan papan gypsum kalis lembapan (MR). Di kawasan kering papan plaster 9mm standard sudah memadai." }
      ]
    },
    zh: {
      title: "石膏天花板下垂或变形",
      costRange: "RM 380–RM 2,800+，视需更换的天花板面积而定",
      faqs: [
        { q: "天花板下垂会倒塌吗？", a: "会，尤其是在长期受水损坏之后。如果按压柔软或滴水，请让人远离并立即联系我们——对于涉及安全的天花板问题我们当天派遣。" },
        { q: "需要更换整个天花板吗？", a: "不需要。我们只拆除并更换受影响的部分，然后批灰和上漆使修复看不出痕迹。" },
        { q: "用哪种天花板板材防止日后下垂？", a: "在潮湿区域（浴室、厨房附近）使用防潮（MR）石膏板。干燥区域使用标准 9 毫米石膏板即可。" }
      ]
    }
  },
  "ceiling-cornice-crack": {
    ms: {
      title: "Retak Kornis Antara Dinding dan Siling",
      costRange: "RM 200–RM 900+ bergantung kepada bilangan bilik",
      faqs: [
        { q: "Bolehkah saya membaiki retak kornis dengan polyfilla biasa?", a: "Ia akan bertahan 3–6 bulan. Pengisi akrilik fleksibel + pita mesh bertahan 5+ tahun walaupun dengan pergerakan haba." },
        { q: "Adakah saya perlu mengganti keseluruhan kornis?", a: "Hanya jika ia tercabut sepenuhnya atau rosak teruk akibat air. Kebanyakan retak hanya memerlukan pembaikan permukaan." },
        { q: "Berapa kos setiap bilik untuk membaiki retak kornis?", a: "Pembaikan kornis bilik tidur biasa (isi + skim + cat semula): RM 200 hingga RM 380. Ruang tamu atau kawasan lebih besar: RM 450 hingga RM 900." }
      ]
    },
    zh: {
      title: "墙面与天花板之间石膏线开裂",
      costRange: "RM 200–RM 900+，视房间数量而定",
      faqs: [
        { q: "能用普通腻子修补石膏线裂缝吗？", a: "只能维持 3–6 个月。柔性丙烯酸填缝剂+网格胶带即使有热胀冷缩也能保持 5 年以上。" },
        { q: "需要更换整条石膏线吗？", a: "只有在完全脱落或严重水损时才需要。大多数裂缝只需表面修复。" },
        { q: "每间房修补石膏线裂缝多少钱？", a: "典型卧室石膏线修复（填缝+批灰+重涂）：RM 200 至 RM 380。客厅或更大区域：RM 450 至 RM 900。" }
      ]
    }
  },
  "balcony-leak-condo": {
    ms: {
      title: "Balkoni Bocor ke Unit Bawah (Kondominium)",
      costRange: "RM 800–RM 6,500+ bergantung kepada keadaan membran",
      faqs: [
        { q: "Adakah saya bertanggungjawab atas kerosakan unit bawah?", a: "Di bawah kebanyakan peraturan JMB Malaysia, ya — pemilik unit strata bertanggungjawab ke atas kalis air unit sendiri. Baiki segera dan dokumentasikan pembaikan untuk tuntutan masa hadapan." },
        { q: "Bolehkah anda grouting PU dari unit bawah tanpa memecahkan jubin balkoni saya?", a: "Selalunya boleh — dengan kebenaran pemilik unit bawah, kami grouting papak dari bawah dan elak menyentuh jubin anda. Kadar kejayaan tinggi untuk retak halus." },
        { q: "Berapa lama masa untuk membran balkoni baru?", a: "Pengecuhan jubin penuh + membran baru + jubin semula biasanya 3 hingga 5 hari bekerja untuk balkoni standard." }
      ]
    },
    zh: {
      title: "公寓阳台漏水渗到楼下单位",
      costRange: "RM 800–RM 6,500+，视防水膜状况而定",
      faqs: [
        { q: "楼下单位的损失我要负责吗？", a: "根据马来西亚大多数 JMB 规定，是的——分层单位业主负责自己单位的防水。请尽快修复并记录维修过程以备日后索赔。" },
        { q: "可以在不砸我家阳台瓷砖的情况下从楼下做 PU 注浆吗？", a: "通常可以——征得楼下业主同意后，我们从下方注浆楼板，不触碰您的瓷砖。对发丝裂缝成功率很高。" },
        { q: "阳台重新做防水膜要多久？", a: "标准阳台的全面砸砖+新防水膜+重新铺砖通常需要 3 至 5 个工作日。" }
      ]
    }
  },
  "concrete-slab-crack-leak": {
    ms: {
      title: "Retak Papak Konkrit Bocor Semasa Hujan Lebat",
      costRange: "RM 650–RM 3,800+ bergantung kepada panjang retakan",
      faqs: [
        { q: "Adakah grouting PU pembaikan kekal untuk retak papak?", a: "Busa PU fleksibel dan biasanya bertahan 8 hingga 15 tahun — ia lentur bersama papak supaya tidak retak semula. Kami berikan waranti bertulis sehingga 5 tahun." },
        { q: "Bolehkah anda grouting tanpa akses ke bahagian atas papak?", a: "Ya. Suntikan dilakukan dari bawah, sebab itu grouting PU popular untuk kebocoran antara lantai unit kondominium." },
        { q: "Berapa lama masa grouting PU?", a: "Kebanyakan projek retak papak konkrit siap dalam 2 hingga 4 jam — pada hari yang sama, tanpa kotoran, pengawetan segera." }
      ]
    },
    zh: {
      title: "混凝土楼板裂缝在暴雨时渗水",
      costRange: "RM 650–RM 3,800+，视裂缝长度而定",
      faqs: [
        { q: "PU 注浆是楼板裂缝的永久修复吗？", a: "PU 泡沫具有柔性，通常可使用 8 至 15 年——它随楼板伸缩，因此不会再次开裂。我们提供长达 5 年的书面保修。" },
        { q: "不接触楼板顶部也能注浆吗？", a: "可以。注浆从下方进行，因此 PU 注浆非常适合公寓楼层间的渗漏。" },
        { q: "PU 注浆需要多长时间？", a: "大多数混凝土楼板裂缝工程在 2 至 4 小时内完成——当天搞定、无尘、即时固化。" }
      ]
    }
  },
  "curtain-track-falling": {
    ms: {
      title: "Trek Langsir Tercabut daripada Siling",
      costRange: "RM 120–RM 380+ setiap tingkap",
      faqs: [
        { q: "Bagaimana anda memasang trek langsir pada papan plaster?", a: "Kami guna bolt toggle tugas berat atau sauh spring yang dinilai sekurang-kurangnya 4× berat langsir. Untuk langsir gelap kami tambah kurungan dinding perantara." },
        { q: "Bolehkah anda memasang trek langsir pada siling konkrit?", a: "Ya — kami gerudi dengan tukul dan guna sauh konkrit bersalut untuk pemasangan kekal. Ambil masa kira-kira 30 minit setiap tingkap." },
        { q: "Bagaimana jika siling saya sudah rosak?", a: "Kami tampal plaster, primer dan biarkan ia kering, kemudian pasang trek baru — biasanya kerja sehari dengan tempoh kering cat 24 jam antara langkah." }
      ]
    },
    zh: {
      title: "窗帘轨道从天花板松脱",
      costRange: "每个窗户 RM 120–RM 380+",
      faqs: [
        { q: "如何在石膏板上安装窗帘轨道？", a: "我们使用承重至少为窗帘重量 4 倍的重型蝶形螺栓或弹簧锚栓。对于遮光窗帘，我们还会增加中间墙支架。" },
        { q: "能在混凝土天花板上安装窗帘轨道吗？", a: "可以——我们使用冲击钻和镀层混凝土锚栓进行永久固定。每个窗户约需 30 分钟。" },
        { q: "如果天花板已经损坏怎么办？", a: "我们修补石膏、涂底漆并等待固化，然后安装新轨道——通常当天完成，步骤之间留 24 小时油漆固化时间。" }
      ]
    }
  },
  "door-hinge-sagging": {
    ms: {
      title: "Pintu Kendor atau Berbunyi",
      costRange: "RM 150–RM 550+ setiap pintu",
      faqs: [
        { q: "Bolehkah anda membaiki pintu kendor tanpa menggantinya?", a: "Dalam 90% kes ya — engsel baru + skru lebih panjang + pengetaman ringan biasanya memulihkan pintu sepenuhnya. Penggantian penuh hanya untuk pintu retak atau meleding teruk." },
        { q: "Mengapa pintu kayu mengembang di Malaysia?", a: "Kelembapan tropika menyebabkan pembengkakan kitaran — paling teruk sebelum/semasa monsun. Kami ketam pintu dengan ruang kecil supaya ia berfungsi sepanjang tahun." },
        { q: "Berapa kos servis pintu penuh (pengetaman + engsel baru + cat semula)?", a: "Yuran biasa RM 220 hingga RM 380 setiap pintu bergantung kepada tahap pengetaman dan sentuhan cat yang diperlukan." }
      ]
    },
    zh: {
      title: "门扇下垂或吱吱作响",
      costRange: "每扇门 RM 150–RM 550+",
      faqs: [
        { q: "不换门能修好下垂的门吗？", a: "90% 的情况可以——新铰链+加长螺丝+轻微刨削通常能完全修复。只有开裂或严重变形的门才需要整扇更换。" },
        { q: "为什么马来西亚的木门会膨胀？", a: "热带湿度导致周期性膨胀——在季风前/期间最严重。我们刨削门扇时预留少量间隙，使其全年顺畅。" },
        { q: "全套门维修（刨削+新铰链+重漆）多少钱？", a: "每扇门通常 RM 220 至 RM 380，视刨削范围和补漆需求而定。" }
      ]
    }
  },
  "old-condo-full-refurbishment": {
    ms: {
      title: "Kondominium Lama Yang Perlu Diubahsuai Sepenuhnya",
      costRange: "RM 22,000–RM 180,000+ bergantung kepada saiz unit dan skop",
      faqs: [
        { q: "Berapa lama pengubahsuaian penuh kondominium 3 bilik?", a: "Jadual biasa 6 hingga 10 minggu bergantung kepada skop: 1 minggu pecah dinding + kalis air, 3 minggu jubin + paip + elektrik, 2 minggu dapur + pertukangan, 1 minggu cat + serahan." },
        { q: "Adakah anda memberikan harga tetap untuk pengubahsuaian penuh?", a: "Ya. Selepas lawatan tapak kami keluarkan sebut harga terperinci dengan setiap baris skop harga berasingan — anda luluskan baris mana yang diteruskan." },
        { q: "Bolehkah anda bekerja dengan peraturan JMB kondominium?", a: "Ya. Kami uruskan deposit JMB, permit, peraturan waktu senyap, perlindungan lif dan pelupusan sampah sebagai standard." }
      ]
    },
    zh: {
      title: "需要全面翻新的老公寓",
      costRange: "RM 22,000–RM 180,000+，视单位面积和工程范围而定",
      faqs: [
        { q: "三房公寓全面翻新需要多久？", a: "视工程范围通常为 6 至 10 周：1 周拆墙+防水，3 周铺砖+水电，2 周厨房+木工，1 周油漆+交付。" },
        { q: "全面翻新提供固定价格吗？", a: "提供。现场勘察后我们会出具详细分项报价，每项工程单独定价——由您决定执行哪些项目。" },
        { q: "能配合公寓 JMB 的管理规定吗？", a: "可以。我们标准处理 JMB 押金、许可证、静音时段规定、电梯保护和垃圾清运。" }
      ]
    }
  },
  "power-tripping-frequently": {
    ms: {
      title: "Elektrik Kerap Trip di Rumah",
      costRange: "RM 180–RM 1,800+ bergantung kepada punca",
      faqs: [
        { q: "Adakah RCD yang kerap trip berbahaya?", a: "RCD melindungi anda — jangan sekali-kali pintas. Ia trip kerana kebocoran bumi atau litar pintas sebenar. Dapatkan diagnosis dalam 24 jam." },
        { q: "Bolehkah saya naik taraf kotak DB tanpa pendawaian semula seluruh rumah?", a: "Ya. Kami boleh naik taraf kotak DB, pemutus dan RCD dalam satu hari tanpa pendawaian semula, memberikan perlindungan moden." },
        { q: "Berapa kos naik taraf kotak DB penuh di KL?", a: "Naik taraf kotak DB biasa dengan pemutus 6 hingga 12 hala, RCD dan pelabelan kemas: RM 850 hingga RM 1,800 dipasang oleh juruelektrik berlesen ST." }
      ]
    },
    zh: {
      title: "家中频繁跳闸",
      costRange: "RM 180–RM 1,800+，视原因而定",
      faqs: [
        { q: "频繁跳闸的 RCD 危险吗？", a: "RCD 是在保护您——切勿绕过它。跳闸是因为存在真实的漏电或短路。请在 24 小时内安排检测。" },
        { q: "不重新布线全屋能升级 DB 电箱吗？", a: "可以。我们能在一天内升级电箱、断路器和 RCD 而无需重新布线，提供现代化保护。" },
        { q: "在吉隆坡全面升级电箱要多少钱？", a: "典型电箱升级（6 至 12 路断路器、RCD、整齐标识）：由 ST 持牌电工安装 RM 850 至 RM 1,800。" }
      ]
    }
  },
  "water-heater-cold": {
    ms: {
      title: "Pemanas Air Tidak Panas (Air Sejuk Sahaja)",
      costRange: "RM 180–RM 850+ bergantung kepada kerosakan",
      faqs: [
        { q: "Bolehkah saya mengganti elemen pemanas sendiri?", a: "Hanya orang berkelayakan sahaja — elemen berada pada bekalan 230V voltan tinggi. Kami mengganti kebanyakan elemen dalam 20 hingga 40 minit." },
        { q: "Adakah pemanas saya berbaloi dibaiki atau perlu diganti?", a: "Bawah 5 tahun: biasanya berbaloi dibaiki. Lebih 8 tahun: selalunya lebih baik diganti untuk kebolehpercayaan, kecekapan tenaga dan waranti." },
        { q: "Berapa kos pemanas air segera baru dipasang?", a: "Bekalan + pemasangan pemanas segera julat pertengahan: RM 550 hingga RM 1,200. Bekalan + pemasangan pemanas tangki: RM 850 hingga RM 1,900." }
      ]
    },
    zh: {
      title: "热水器不加热（只有冷水）",
      costRange: "RM 180–RM 850+，视故障而定",
      faqs: [
        { q: "可以自己更换加热元件吗？", a: "只能由合格人员操作——加热元件连接 230V 高压电源。我们更换大多数元件只需 20 至 40 分钟。" },
        { q: "热水器值得维修还是更换？", a: "5 年以下：通常值得维修。8 年以上：为可靠性和能效考虑，更换通常更好。" },
        { q: "安装新即热式热水器多少钱？", a: "中档即热式热水器供应+安装：RM 550 至 RM 1,200。储水式热水器供应+安装：RM 850 至 RM 1,900。" }
      ]
    }
  },
  "loose-hollow-tiles": {
    ms: {
      title: "Jubin Lantai Longgar atau Berbunyi Kosong",
      costRange: "RM 350–RM 2,800+ bergantung kepada bilangan jubin dan akses",
      faqs: [
        { q: "Bolehkah jubin longgar digam semula dari atas?", a: "Hanya sementara untuk angkat tepi kecil. Pembaikan yang betul memerlukan mengangkat jubin dan meletakkan semula dengan pelekat thin-set yang sesuai." },
        { q: "Berapa kos untuk meletakkan semula satu jubin longgar?", a: "Relay satu jubin: RM 150 hingga RM 280 termasuk grout padan. Relay pelbagai jubin disebut harga mengikut kawasan." },
        { q: "Bolehkah anda padankan warna jubin lama saya?", a: "Kami simpan stok grout jubin Malaysia yang biasa. Jika jubin anda reka bentuk jarang, kami minta anda bawa jubin ganti atau kami cari padanan terdekat." }
      ]
    },
    zh: {
      title: "地砖松动或敲击有空鼓声",
      costRange: "RM 350–RM 2,800+，视瓷砖数量和施工条件而定",
      faqs: [
        { q: "松动的瓷砖能从表面重新粘合吗？", a: "对于小面积边缘翘起只能临时处理。正确修复需要撬起瓷砖并用合适的薄浆粘合剂重新铺设。" },
        { q: "重新铺设一块松动瓷砖多少钱？", a: "单块重铺：RM 150 至 RM 280，含配色填缝。多块重铺按面积报价。" },
        { q: "能匹配我旧瓷砖的颜色吗？", a: "我们备有马来西亚常见瓷砖填缝剂库存。如果您的瓷砖是稀有款式，请提供备用瓷砖或我们寻找最接近的匹配。" }
      ]
    }
  },
  "cracked-tile-grout": {
    ms: {
      title: "Grout Jubin Retak atau Berubah Warna",
      costRange: "RM 250–RM 1,800+ bergantung kepada saiz bilik",
      faqs: [
        { q: "Adakah grout epoksi berbaloi dengan kos tambahan?", a: "Untuk bilik air dan dapur ya — grout epoksi kalis air, tahan kulat, dan tahan 15+ tahun berbanding 5-8 tahun untuk grout simen." },
        { q: "Bolehkah saya hanya mengecat di atas grout lama?", a: "Cat grout bertahan 6-12 bulan tetapi tidak membaiki grout retak atau hilang. Regrouting yang betul adalah penyelesaian jangka panjang yang tepat." },
        { q: "Berapa kos regrout bilik air standard?", a: "Regrouting bilik air biasa: RM 650 hingga RM 1,400 termasuk penyingkiran grout, pembersihan, grout epoksi dan pengedap." }
      ]
    },
    zh: {
      title: "瓷砖填缝剂开裂或变色",
      costRange: "RM 250–RM 1,800+，视房间大小而定",
      faqs: [
        { q: "环氧填缝剂值得额外花费吗？", a: "浴室和厨房值得——环氧填缝剂防水、防霉，使用寿命 15 年以上，而水泥填缝剂只有 5-8 年。" },
        { q: "可以直接在旧填缝剂上涂漆吗？", a: "填缝剂漆只能维持 6-12 个月，且不能修复开裂或缺失的填缝剂。正确的重新填缝才是长久之计。" },
        { q: "标准浴室重新填缝多少钱？", a: "典型浴室重新填缝：RM 650 至 RM 1,400，包括清除旧填缝剂、清洁、环氧填缝和密封。" }
      ]
    }
  },
  "plaster-ceiling-hairline-crack": {
    ms: {
      title: "Retak Rambut pada Siling Plaster",
      costRange: "RM 300–RM 1,800+ bergantung kepada keluasan siling",
      faqs: [
        { q: "Adakah retak rambut bermakna siling akan jatuh?", a: "Retak rambut kosmetik jarang bersifat struktur. Ia biasanya bermakna lapisan skim mengalami kitaran tekanan — mudah dibaiki." },
        { q: "Bolehkah saya mengisi retak rambut sendiri?", a: "Kerja pengisi kecil mungkin boleh tetapi sering terbuka semula. Pembaikan profesional menggunakan pita mesh + skim fleksibel untuk hasil tahan lama." },
        { q: "Berapa kos membaiki retak rambut di dalam bilik?", a: "Pembaikan peringkat bilik (tampalan + skim + primer + cat semula): RM 380 hingga RM 850 bergantung kepada saiz siling." }
      ]
    },
    zh: {
      title: "石膏天花板出现发丝裂纹",
      costRange: "RM 300–RM 1,800+，视天花板面积而定",
      faqs: [
        { q: "发丝裂纹意味着天花板会掉下来吗？", a: "表面的发丝裂纹很少涉及结构问题。通常只是批灰层在热胀冷缩——很容易修复。" },
        { q: "可以自己填补发丝裂纹吗？", a: "小面积填补或许可行，但往往会再次开裂。专业修复使用网格胶带+柔性批灰以获得持久效果。" },
        { q: "修复房间内的发丝裂纹多少钱？", a: "整房修复（修补+批灰+底漆+重涂）：RM 380 至 RM 850，视天花板尺寸而定。" }
      ]
    }
  },
  "uneven-wall-surface-skim": {
    ms: {
      title: "Permukaan Dinding Tidak Rata atau Beralun",
      costRange: "RM 5–RM 12 setiap kaki persegi (skim coat)",
      faqs: [
        { q: "Adakah skim coat berbeza daripada filler?", a: "Ya. Filler untuk pembaikan tompok. Skim coat ialah lapisan plaster nipis seluruh dinding yang memberikan kemasan premium licin sempurna." },
        { q: "Berapa tebal skim coat?", a: "Skim coat standard 2 hingga 3 mm tebal. Dinding sangat tidak rata mungkin perlukan beberapa lapisan." },
        { q: "Bolehkah saya langkau skim coat jika saya mengecat semula?", a: "Boleh, tetapi cat sahaja tidak menyembunyikan benjolan. Kemasan premium sentiasa bermula dengan skim yang betul." }
      ]
    },
    zh: {
      title: "墙面不平整或凹凸不平",
      costRange: "每平方英尺 RM 5–RM 12（批灰）",
      faqs: [
        { q: "批灰和补墙膏有什么区别？", a: "有区别。补墙膏用于局部修补。批灰是覆盖整面墙的薄层石膏，带来完美光滑的优质饰面。" },
        { q: "批灰有多厚？", a: "标准批灰厚度为 2 至 3 毫米。非常不平整的墙面可能需要多层。" },
        { q: "反正要重新刷漆，可以跳过批灰吗？", a: "可以，但油漆本身无法遮盖凹凸。优质饰面始终从正确批灰开始。" }
      ]
    }
  },
  "vinyl-flooring-lifting-edges": {
    ms: {
      title: "Lantai Vinyl atau SPC Terangkat di Tepi",
      costRange: "RM 250–RM 1,800+ bergantung kepada bilangan plank",
      faqs: [
        { q: "Bolehkah vinyl yang terangkat digunakan semula?", a: "Biasanya ya jika tidak rosak akibat haba. Kami angkat, keringkan, potong jurang pengembangan dan klik semula plank yang sama." },
        { q: "Adakah saya perlu mengganti keseluruhan lantai?", a: "Hanya jika plank meleding akibat haba atau tepu air. Kebanyakan kes hanya angkat tepi — boleh dibaiki dalam 2-4 jam." },
        { q: "Bagaimana mengelakkan angkat tepi pada masa hadapan?", a: "Pastikan jurang pengembangan 10 mm di dinding, elak cahaya matahari barat terus, dan guna permaidani di pintu masuk mudah lembap." }
      ]
    },
    zh: {
      title: "乙烯基或 SPC 地板边缘翘起",
      costRange: "RM 250–RM 1,800+，视地板板块数量而定",
      faqs: [
        { q: "翘起的乙烯基地板还能重复使用吗？", a: "如果没有热损坏通常可以。我们撬起、干燥、修整伸缩缝并重新卡扣相同的板块。" },
        { q: "需要更换整个地板吗？", a: "只有在板块热变形或浸水的情况下才需要。大多数情况只是边缘翘起——2-4 小时内可修复。" },
        { q: "如何防止日后再次翘起？", a: "确保墙边留有 10 毫米伸缩缝、避免西晒直射，并在易潮湿的入口处使用地垫。" }
      ]
    }
  },
  "cracked-roof-tiles": {
    ms: {
      title: "Jubin Bumbung Retak atau Teralih",
      costRange: "RM 380–RM 1,800+ bergantung kepada bilangan jubin dan akses",
      faqs: [
        { q: "Bolehkah anda padankan warna jubin bumbung lama saya?", a: "Ya — kami sumber dari Monier, Malaysian Mosaics dan jenama Malaysia biasa lain. Jubin sangat lama mungkin perlukan padanan hampir berbanding padanan tepat." },
        { q: "Perlukah saya mengganti keseluruhan bumbung?", a: "Hanya jika 30%+ jubin rosak, atau lapisan bawah terjejas. Kebanyakan rumah hanya perlukan pembaikan tompok + rebed rabung." },
        { q: "Berapa kos pemeriksaan bumbung penuh?", a: "Pemeriksaan bumbung standard (drone + tinjauan tanah + laporan bertulis): RM 250 hingga RM 450 bergantung kepada akses dan saiz bumbung." }
      ]
    },
    zh: {
      title: "屋顶瓦片开裂或移位",
      costRange: "RM 380–RM 1,800+，视瓦片数量和施工条件而定",
      faqs: [
        { q: "能匹配我旧屋顶瓦片的颜色吗？", a: "可以——我们从 Monier、Malaysian Mosaics 等马来西亚常见品牌采购。非常旧的瓦片可能需要近似匹配而非完全一致。" },
        { q: "需要更换整个屋顶吗？", a: "只有超过 30% 瓦片损坏或防水垫层受损时才需要。大多数房屋只需局部修补+屋脊重铺。" },
        { q: "全面屋顶检查多少钱？", a: "标准屋顶检查（无人机+地面勘察+书面报告）：RM 250 至 RM 450，视屋顶通道和大小而定。" }
      ]
    }
  },
  "cabinet-door-sagging": {
    ms: {
      title: "Pintu Kabinet Dapur Kendor atau Senget",
      costRange: "RM 150–RM 850+ bergantung kepada bilangan pintu",
      faqs: [
        { q: "Perlukah saya mengganti semua engsel sekaligus?", a: "Jika kabinet anda berumur 5+ tahun dan satu engsel gagal, jangkakan yang lain menyusul. Naik taraf penuh ke soft-close biasanya RM 30 hingga RM 60 setiap pintu termasuk pemasangan." },
        { q: "Bolehkah anda padankan jenama engsel sedia ada saya?", a: "Ya. Blum dan Hafele adalah dua jenama paling biasa di Malaysia dan mudah didapati dalam varian standard dan soft-close." },
        { q: "Berapa kos naik taraf engsel dapur penuh?", a: "Dapur 8-10 pintu biasa: RM 350 hingga RM 620 untuk penukaran soft-close lengkap." }
      ]
    },
    zh: {
      title: "厨房柜门下垂或错位",
      costRange: "RM 150–RM 850+，视门板数量而定",
      faqs: [
        { q: "需要一次更换所有铰链吗？", a: "如果柜体已使用 5 年以上且一个铰链损坏，其他通常也会陆续损坏。全套升级为缓冲铰链通常每扇门含安装 RM 30 至 RM 60。" },
        { q: "能匹配我现有的铰链品牌吗？", a: "可以。Blum 和 Häfele 是马来西亚最常见的两个品牌，标准和缓冲版本都有现货。" },
        { q: "全套厨房铰链升级多少钱？", a: "典型 8-10 门厨房：完整缓冲铰链改装 RM 350 至 RM 620。" }
      ]
    }
  },
  "wardrobe-door-jamming": {
    ms: {
      title: "Pintu Almari Tersangkut atau Tidak Tertutup",
      costRange: "RM 180–RM 650+ bergantung kepada jenis pintu",
      faqs: [
        { q: "Bolehkah saya membaiki pintu almari gelangsar sendiri?", a: "Membersih trek dan melaraskan roller boleh DIY. Penggantian roller biasanya memerlukan juruteknik untuk penjajaran yang betul." },
        { q: "Berapa kos pembaikan pintu almari?", a: "Penjajaran semula pintu gelangsar standard + pembersihan trek: RM 180 hingga RM 320. Penggantian roller: RM 250 hingga RM 450 setiap pintu." },
        { q: "Patutkah saya mengganti daripada membaiki?", a: "Untuk almari binaan berumur 8+ tahun dengan panel meleding atau alat ganti tiada, penggantian selalunya lebih menjimatkan." }
      ]
    },
    zh: {
      title: "衣柜门卡住或关不上",
      costRange: "RM 180–RM 650+，视门型而定",
      faqs: [
        { q: "可以自己修衣柜推拉门吗？", a: "清洁轨道和调整滚轮可以 DIY。更换滚轮通常需要技术人员进行正确对准。" },
        { q: "衣柜门维修多少钱？", a: "标准推拉门重新对准+轨道清洁：RM 180 至 RM 320。更换滚轮：每扇门 RM 250 至 RM 450。" },
        { q: "应该更换而不是维修吗？", a: "对于使用 8 年以上、面板变形或缺备件的入墙衣柜，更换通常更经济。" }
      ]
    }
  },
  "digital-smart-lock-installation": {
    ms: {
      title: "Pemasangan Kunci Digital / Pintar pada Pintu Sedia Ada",
      costRange: "RM 250–RM 550+ setiap pintu",
      faqs: [
        { q: "Bolehkah mana-mana kunci pintar muat pintu saya?", a: "Tidak semestinya. Ketebalan pintu (biasa 35-55 mm), jenis mortise/tubular dan bahan semuanya penting. Kami periksa sebelum pemasangan." },
        { q: "Berapa lama pemasangan kunci pintar?", a: "Pintu standard: 45 hingga 90 minit. Pintu logam atau tahan api: 90 hingga 150 minit." },
        { q: "Adakah anda bantu sediakan aplikasi mudah alih?", a: "Ya — kami lengkapkan pemadanan dengan telefon anda, bantu sediakan kod pengguna dan pendaftaran cap jari." }
      ]
    },
    zh: {
      title: "在现有门上安装电子 / 智能门锁",
      costRange: "每扇门 RM 250–RM 550+",
      faqs: [
        { q: "任何智能锁都能装在我的门上吗？", a: "不一定。门厚（通常 35-55 毫米）、锁体类型（防盗锁体/圆柱锁体）和门材质都很重要。安装前我们会检查。" },
        { q: "智能锁安装需要多久？", a: "标准门：45 至 90 分钟。金属门或防火门：90 至 150 分钟。" },
        { q: "你们帮忙设置手机应用吗？", a: "会——我们完成与您手机的配对，协助设置用户密码和指纹录入。" }
      ]
    }
  },
  "locked-out-of-house": {
    ms: {
      title: "Terkunci di Luar Rumah",
      costRange: "RM 180–RM 550+ bergantung kepada jenis kunci dan masa",
      faqs: [
        { q: "Berapa cepat anda tiba untuk kes terkunci?", a: "Masa tindak balas biasa dalam KL/Selangor 30 hingga 75 minit. Panggilan lewat malam selepas waktu kerja: 60 hingga 90 minit." },
        { q: "Adakah anda akan merosakkan pintu saya?", a: "Untuk 90% kunci silinder standard, kami guna pick tanpa merosakkan. Hanya kunci keselamatan tinggi atau rosak mungkin perlu digerudi silinder." },
        { q: "Berapa kos terkunci selepas waktu kerja?", a: "Kunci standard: RM 180 hingga RM 380. Selepas waktu kerja (10 malam - 6 pagi): RM 350 hingga RM 650. Caj kecemasan dijelaskan sebelum kami tiba." }
      ]
    },
    zh: {
      title: "被反锁在家门外",
      costRange: "RM 180–RM 550+，视锁型和时段而定",
      faqs: [
        { q: "被锁门外后你们多久能到？", a: "吉隆坡/雪兰莪的典型响应时间为 30 至 75 分钟。深夜非工作时间呼叫：60 至 90 分钟。" },
        { q: "会损坏我的门吗？", a: "90% 的标准圆柱锁我们使用无损开锁技术。只有高安保或损坏的锁才可能需要钻开锁芯。" },
        { q: "非工作时间开锁多少钱？", a: "标准开锁：RM 180 至 RM 380。非工作时间（晚上 10 点至早上 6 点）：RM 350 至 RM 650。紧急附加费会在到达前说明。" }
      ]
    }
  },
  "downlight-flickering": {
    ms: {
      title: "Downlight LED Berkelip atau Cepat Rosak",
      costRange: "RM 80–RM 320 setiap lampu",
      faqs: [
        { q: "Adakah semua downlight LED sama?", a: "Tidak. LED tanpa jenama murah rosak dalam 6-18 bulan. Jenama terkenal (Philips, Osram, Panasonic) tahan 8-15 tahun dengan waranti." },
        { q: "Berapa kos retrofit downlight LED premium?", a: "Bekalan + pemasangan downlight LED jenama: RM 120 hingga RM 220 setiap titik termasuk juruelektrik berlesen ST." },
        { q: "Bolehkah saya mengganti mentol sendiri?", a: "Untuk mentol plug-in ya. Downlight LED ceruk adalah pendawaian keras dan perlu diganti oleh juruelektrik berlesen." }
      ]
    },
    zh: {
      title: "LED 筒灯闪烁或过早损坏",
      costRange: "每个灯 RM 80–RM 320",
      faqs: [
        { q: "所有 LED 筒灯都一样吗？", a: "不一样。廉价无品牌 LED 6-18 个月就损坏。品牌产品（飞利浦、欧司朗、松下）使用寿命 8-15 年且有保修。" },
        { q: "升级为优质 LED 筒灯多少钱？", a: "品牌 LED 筒灯供应+安装：每个点位 RM 120 至 RM 220，含 ST 持牌电工。" },
        { q: "可以自己更换灯泡吗？", a: "插拔式灯泡可以。嵌入式 LED 筒灯为硬接线，应由持牌电工更换。" }
      ]
    }
  },
  "shower-screen-water-leak": {
    ms: {
      title: "Skrin Mandian Bocor ke Lantai",
      costRange: "RM 180–RM 850+ bergantung kepada saiz skrin",
      faqs: [
        { q: "Bolehkah saya re-silikon skrin mandian sendiri?", a: "Untuk sentuhan kecil ya. Untuk reseal penuh, pembersihan profesional + masa pengawetan membuat perbezaan besar pada jangka hayat." },
        { q: "Berapa kos mengganti pengedap skrin mandian?", a: "Penggantian jalur pengedap magnet: RM 120 hingga RM 250. Reseal silikon penuh: RM 180 hingga RM 380 termasuk masa pengeringan." },
        { q: "Bila perlu mengganti keseluruhan skrin mandian?", a: "Jika kaca retak, bingkai terhakis, atau engsel longgar kelihatan, penggantian (RM 850 hingga RM 2,400) lebih selamat daripada pembaikan." }
      ]
    },
    zh: {
      title: "淋浴隔断漏水到地板",
      costRange: "RM 180–RM 850+，视隔断尺寸而定",
      faqs: [
        { q: "可以自己重新打硅胶修淋浴隔断吗？", a: "小面积修补可以。完整重新密封时，专业清洁+固化时间对寿命影响很大。" },
        { q: "更换淋浴隔断密封条多少钱？", a: "磁性密封条更换：RM 120 至 RM 250。全面重新打硅胶：RM 180 至 RM 380，含干燥时间。" },
        { q: "什么时候应该更换整个淋浴隔断？", a: "如果玻璃开裂、框架腐蚀或铰链明显松动，更换（RM 850 至 RM 2,400）比维修更安全。" }
      ]
    }
  },
  "cctv-not-recording-storage-full": {
    ms: {
      title: "CCTV Tidak Merakam atau Paparan Kosong",
      costRange: "RM 180–RM 850+ bergantung kepada kerosakan sistem",
      faqs: [
        { q: "Berapa lama cakera keras CCTV tahan?", a: "Cakera keras CCTV khusus (WD Purple, Seagate SkyHawk) biasanya tahan 4-7 tahun dengan operasi 24/7." },
        { q: "Berapa kos mengganti sistem DVR 8 saluran penuh?", a: "DVR 8 saluran penuh + cakera keras + pemasangan: RM 850 hingga RM 1,800 tidak termasuk kamera." },
        { q: "Bolehkah anda pulihkan rakaman dari DVR yang gagal?", a: "Untuk kegagalan cakera keras, pemulihan data profesional boleh mendapatkan semula kebanyakan rakaman — RM 350 hingga RM 1,200 bergantung kepada kerosakan." }
      ]
    },
    zh: {
      title: "CCTV 无法录像或画面空白",
      costRange: "RM 180–RM 850+，视系统故障而定",
      faqs: [
        { q: "CCTV 专用硬盘的寿命有多长？", a: "专用 CCTV 硬盘（西数紫盘、希捷 SkyHawk）在 24/7 运行下通常可使用 4-7 年。" },
        { q: "更换整套 8 路 DVR 系统多少钱？", a: "完整 8 路 DVR+硬盘+安装：RM 850 至 RM 1,800，不含摄像头。" },
        { q: "能从故障 DVR 中恢复录像吗？", a: "对于硬盘故障，专业数据恢复可以找回大部分录像——RM 350 至 RM 1,200，视损坏程度而定。" }
      ]
    }
  },
  "autogate-remote-not-working": {
    ms: {
      title: "Alat Kawalan Jauh Pagar Auto Tidak Berfungsi",
      costRange: "RM 120–RM 550+ bergantung kepada punca",
      faqs: [
        { q: "Adakah sebarang remot boleh dipadankan dengan pagar auto saya?", a: "Hanya remot yang sepadan dengan jenama motor anda (SEIP, DEA, AutoGate, DASPI, dll.). Kami simpan stok kod Malaysia yang biasa." },
        { q: "Berapa kos alat kawalan jauh autogate baru?", a: "Alat kawalan standard + program: RM 120 hingga RM 250. Alat kawalan kod gelongsor: RM 250 hingga RM 380." },
        { q: "Patutkah saya naik taraf ke kawalan pagar telefon pintar?", a: "Pengawal pagar Wi-Fi adalah RM 350 hingga RM 650 termasuk pemasangan dan membolehkan anda membuka pagar dari mana-mana menggunakan aplikasi." }
      ]
    },
    zh: {
      title: "自动门遥控器失灵",
      costRange: "RM 120–RM 550+，视原因而定",
      faqs: [
        { q: "能否把任意遥控器配对到我的自动门？", a: "只有与您电机品牌匹配的遥控器（SEIP、DEA、AutoGate、DASPI 等）。我们备有马来西亚常用型号。" },
        { q: "新的自动门遥控器多少钱？", a: "标准遥控器+编程：RM 120 至 RM 250。滚动码遥控器：RM 250 至 RM 380。" },
        { q: "应该升级为手机控制自动门吗？", a: "Wi-Fi 门控器含安装 RM 350 至 RM 650，可让您通过应用随时随地开门。" }
      ]
    }
  },
  "loose-metal-gate-hinges": {
    ms: {
      title: "Engsel Pagar Besi Longgar atau Kendor",
      costRange: "RM 250–RM 1,200+ bergantung kepada saiz pagar",
      faqs: [
        { q: "Adakah anda boleh menjalankan kerja kimpalan di tapak?", a: "Ya. Kami bawa pengimpal arka/MIG mudah alih dan boleh menyiapkan kebanyakan pembaikan engsel pagar dalam 2-4 jam di tapak." },
        { q: "Adakah kawasan kimpalan akan berkarat semula?", a: "Tidak jika disiapkan dengan primer perencat karat + 2 lapisan cat enamel — waranti biasa 12-24 bulan." },
        { q: "Perlukah saya mengganti keseluruhan pagar?", a: "Hanya jika bingkai berkarat teruk. Pembaikan engsel sahaja (RM 350 hingga RM 850) biasanya memulihkan pagar untuk 10-15 tahun lagi." }
      ]
    },
    zh: {
      title: "金属大门铰链松动或下垂",
      costRange: "RM 250–RM 1,200+，视大门尺寸而定",
      faqs: [
        { q: "你们能在现场进行焊接吗？", a: "可以。我们携带便携式电弧/MIG 焊机，大多数大门铰链维修可在现场 2-4 小时内完成。" },
        { q: "焊接区域会再次生锈吗？", a: "如果正确涂上防锈底漆+2 层磁漆就不会——典型保修期 12-24 个月。" },
        { q: "需要更换整扇大门吗？", a: "只有在框架严重锈蚀时才需要。仅铰链维修（RM 350 至 RM 850）通常可让大门再使用 10-15 年。" }
      ]
    }
  },
  "stuck-sliding-window": {
    ms: {
      title: "Tingkap Gelangsar Tersangkut atau Seret",
      costRange: "RM 180–RM 550+ setiap tingkap",
      faqs: [
        { q: "Bolehkah tingkap gelangsar yang tersangkut dibaiki sendiri?", a: "Pembersihan dan pelinciran trek boleh DIY. Penggantian roller biasanya memerlukan mengangkat panel tingkap — lebih baik dilakukan oleh profesional." },
        { q: "Berapa kos mengganti roller tingkap gelangsar?", a: "Penggantian standard: RM 180 hingga RM 320 setiap tingkap termasuk roller baru dan pelinciran trek." },
        { q: "Patutkah saya naik taraf ke tingkap casement?", a: "Tingkap casement (engkol) menutup lebih ketat dan lebih selamat. Penukaran penuh: RM 850 hingga RM 1,800 setiap tingkap." }
      ]
    },
    zh: {
      title: "推拉窗卡住或滑动不畅",
      costRange: "每扇窗 RM 180–RM 550+",
      faqs: [
        { q: "推拉窗卡住了能自己动手修吗？", a: "轨道清洁和润滑可以 DIY。更换滚轮通常需要抬起窗扇——最好由专业人员操作。" },
        { q: "更换推拉窗滚轮多少钱？", a: "标准更换：每扇窗 RM 180 至 RM 320，含新滚轮和轨道润滑。" },
        { q: "应该升级为平开窗吗？", a: "平开（摇杆式）窗密封性更好、更安全。全面改造：每扇窗 RM 850 至 RM 1,800。" }
      ]
    }
  },
  "aircon-not-cold": {
    ms: {
      title: "Aircond Tidak Sejuk (Hembusan Udara Panas)",
      costRange: "RM 129–RM 455 bergantung kepada punca",
      faqs: [
        { q: "Kenapa aircond saya menghembus udara panas?", a: "Punca paling biasa ialah bahan pendingin rendah, gegelung atau penapis tersumbat, atau pemampat yang gagal. Juruteknik boleh mendiagnosisnya di tapak dalam 30–60 minit." },
        { q: "Adakah top-up gas sentiasa penyelesaiannya?", a: "Tidak selalu. Jika terdapat kebocoran, top-up sahaja hanyalah sementara — kebocoran mesti dikesan dan ditutup dahulu." },
        { q: "Berapa kos untuk membaiki aircond yang tidak sejuk?", a: "Servis asas bermula dari RM 129, top-up gas dari RM 2.50 setiap PSI, dan pembaikan pemampat dari RM 1,040. Harga akhir bergantung kepada punca sebenar." },
        { q: "Bolehkah saya terus menggunakan aircond yang tidak sejuk?", a: "Lebih baik berhenti dan periksa. Menggunakan unit yang kurang gas atau gegelung tersumbat membazir elektrik dan boleh merosakkan pemampat." }
      ]
    },
    zh: {
      title: "空调不冷（吹出热风）",
      costRange: "RM 129–RM 455，视原因而定",
      faqs: [
        { q: "为什么我的空调吹出热风？", a: "最常见的原因是雪种不足、蒸发器或滤网堵塞，或压缩机故障。技术员可在现场 30–60 分钟内诊断。" },
        { q: "加雪种一定能解决吗？", a: "不一定。如果有泄漏，单纯加雪种只是暂时的——必须先找到并封堵泄漏点。" },
        { q: "修不冷的空调要多少钱？", a: "基本保养从 RM 129 起，加雪种从每 PSI RM 2.50 起，压缩机维修从 RM 1,040 起。最终价格取决于实际原因。" },
        { q: "空调不冷还能继续用吗？", a: "最好停机检查。雪种不足或蒸发器堵塞的机器继续运行会浪费电并可能损坏压缩机。" }
      ]
    }
  },
  "aircon-water-leaking": {
    ms: {
      title: "Aircond Bocor Air (Unit Dalaman Menitis)",
      costRange: "RM 129–RM 455 bergantung kepada punca",
      faqs: [
        { q: "Kenapa air menitis dari aircond saya?", a: "Biasanya disebabkan paip saliran tersumbat atau penapis kotor yang menyebabkan ais terbentuk lalu mencair dan melimpah. Cucian kimia atau overhaul akan membersihkannya." },
        { q: "Adakah kebocoran air aircond berbahaya?", a: "Ia boleh merosakkan dinding, lantai dan perabot, serta menggalakkan kulat. Perlu dibaiki sebelum kerosakan merebak." },
        { q: "Adakah cucian kimia akan menghentikan kebocoran?", a: "Selalunya ya, jika puncanya ialah gegelung kotor dan saliran tersumbat. Jika pam saliran atau pemasangan rosak, itu memerlukan pembaikan berasingan." },
        { q: "Berapa cepat anda boleh membaiki aircond yang bocor?", a: "Kebanyakan punca kebocoran dibaiki dalam satu lawatan. Sumbatan teruk atau pam saliran yang gagal mungkin memerlukan penggantian bahagian lanjutan." }
      ]
    },
    zh: {
      title: "空调漏水（室内机滴水）",
      costRange: "RM 129–RM 455，视原因而定",
      faqs: [
        { q: "为什么我的空调会滴水？", a: "通常是排水管堵塞，或滤网太脏导致结冰融化后溢出接水盘。化学清洗或大修可以解决。" },
        { q: "空调漏水危险吗？", a: "会损坏墙面、地板和家具，并滋生霉菌。应在损坏扩大前尽快维修。" },
        { q: "化学清洗能止住漏水吗？", a: "如果原因是蒸发器脏和排水堵塞，通常可以。如果是排水泵或安装问题，则需要单独维修。" },
        { q: "修漏水的空调要多久？", a: "大多数漏水原因一次上门即可解决。严重堵塞或排水泵故障可能需要后续更换配件。" }
      ]
    }
  },
  "aircon-making-noise": {
    ms: {
      title: "Aircond Berbunyi Bising (Bergetar, Berdengung, Mengisar)",
      costRange: "RM 195–RM 455 bergantung kepada bahagian rosak",
      faqs: [
        { q: "Adakah aircond yang bising berbahaya?", a: "Tidak berbahaya serta-merta, tetapi motor kipas yang mengisar atau pemampat yang gagal akan menjadi lebih teruk dan lebih mahal untuk dibaiki jika dibiarkan." },
        { q: "Apakah maksud bunyi mengisar?", a: "Bunyi mengisar biasanya menunjukkan galas motor kipas haus atau serpihan tersangkut pada blower. Perlu diperiksa sebelum motor tersekat." },
        { q: "Berapa kos untuk membaiki aircond yang bising?", a: "Pengetatan dan pembersihan bermula dari RM 129. Penggantian motor kipas bermula dari RM 390, dan pemampat dari RM 1,040." },
        { q: "Bolehkah servis meredakan unit yang bising?", a: "Ya, jika bunyi berpunca daripada kotoran atau bahagian longgar. Cucian kimia atau servis asas selalunya menyelesaikan getaran." }
      ]
    },
    zh: {
      title: "空调有噪音（咔嗒、嗡嗡、摩擦声）",
      costRange: "RM 195–RM 455，视故障部件而定",
      faqs: [
        { q: "空调噪音大危险吗？", a: "不会立即有危险，但摩擦的风扇电机或故障的压缩机会越来越严重，拖延不修只会更贵。" },
        { q: "摩擦声代表什么？", a: "摩擦声通常表示风扇电机轴承磨损或有异物卡在风轮里。应在电机卡死前检查。" },
        { q: "修有噪音的空调要多少钱？", a: "紧固和清洁从 RM 129 起。风扇电机更换从 RM 390 起，压缩机从 RM 1,040 起。" },
        { q: "保养能让机器安静下来吗？", a: "如果噪音来自灰尘或松动部件，可以。化学清洗或基本保养通常能解决咔嗒和震动。" }
      ]
    }
  },
  "aircon-bad-smell": {
    ms: {
      title: "Aircond Berbau Busuk (Bau Kulat atau Apak)",
      costRange: "RM 156–RM 455 bergantung kepada rawatan",
      faqs: [
        { q: "Kenapa aircond saya berbau busuk?", a: "Kulat dan bakteria tumbuh pada gegelung dan blower yang lembap, lalu dihembus ke dalam bilik. Cucian kimia membuang puncanya." },
        { q: "Adakah bau itu berbahaya untuk keluarga saya?", a: "Udara berkulat boleh merengsakan alahan dan pernafasan. Membersihkan gegelung dan saliran membuang bau serta menambah baik kualiti udara." },
        { q: "Adakah servis asas akan membuang bau?", a: "Kadangkala, tetapi cucian kimia tekanan atau overhaul kimia biasanya diperlukan untuk mensanitasi gegelung dan blower sepenuhnya." },
        { q: "Bagaimana saya menghentikan bau daripada berulang?", a: "Servis unit setiap 3–6 bulan, pastikan penapis bersih, dan jalankan mod kipas selama beberapa minit sebelum menutup unit." }
      ]
    },
    zh: {
      title: "空调有异味（霉味或发酸味）",
      costRange: "RM 156–RM 455，视处理方式而定",
      faqs: [
        { q: "为什么我的空调有异味？", a: "霉菌和细菌在潮湿的蒸发器和风轮上滋生，再吹进房间。化学清洗可以根除异味源。" },
        { q: "这味道对家人有害吗？", a: "发霉的空气可能刺激过敏和呼吸道。清洗蒸发器和排水可以去除异味并改善空气质量。" },
        { q: "基本保养能去除异味吗？", a: "有时可以，但通常需要高压化学清洗或化学大修才能彻底消毒蒸发器和风轮。" },
        { q: "如何防止异味复发？", a: "每 3–6 个月保养一次，保持滤网清洁，关机前先开风扇模式吹几分钟。" }
      ]
    }
  },
  "aircon-weak-airflow": {
    ms: {
      title: "Aliran Udara Aircond Lemah (Tidak Hembus Kuat)",
      costRange: "RM 129–RM 455 bergantung kepada punca",
      faqs: [
        { q: "Kenapa aliran udara aircond saya begitu lemah?", a: "Penapis tersumbat atau gegelung kotor adalah punca paling biasa, diikuti motor blower yang lemah. Pembersihan biasanya memulihkannya." },
        { q: "Berapa kerap saya perlu membersihkan penapis?", a: "Setiap 2–4 minggu untuk penggunaan berat. Penapis tersumbat menyekat udara dan memaksa unit bekerja lebih keras." },
        { q: "Adakah aliran udara lemah bermakna saya perlukan aircond baharu?", a: "Tidak semestinya. Kebanyakan kes dibaiki dengan pembersihan atau penggantian motor blower. Hanya unit yang sangat lama mungkin tidak berbaloi dibaiki." },
        { q: "Berapa kos untuk membaiki aliran udara lemah?", a: "Servis asas bermula dari RM 129. Jika motor blower perlu diganti, ia bermula dari RM 455." }
      ]
    },
    zh: {
      title: "空调风量小（出风无力）",
      costRange: "RM 129–RM 455，视原因而定",
      faqs: [
        { q: "为什么我的空调风量这么小？", a: "滤网堵塞或蒸发器脏是最常见的原因，其次是风轮电机老化。清洁通常可以恢复。" },
        { q: "滤网应该多久清洗一次？", a: "频繁使用的话每 2–4 周一次。堵塞的滤网会阻挡气流，让机器更吃力。" },
        { q: "风量小是不是要换新空调？", a: "不一定。大多数情况靠清洁或更换风轮电机就能解决。只有很老的机器才可能不值得修。" },
        { q: "修风量小要多少钱？", a: "基本保养从 RM 129 起。如需更换风轮电机，从 RM 455 起。" }
      ]
    }
  },
  "aircon-not-turning-on": {
    ms: {
      title: "Aircond Tidak Boleh Dihidupkan",
      costRange: "RM 114–RM 455 bergantung kepada kerosakan",
      faqs: [
        { q: "Kenapa aircond saya tidak boleh dihidupkan?", a: "Ia boleh jadi breaker terputus, remote mati, kapasitor gagal atau PCB rosak. Lawatan diagnosis dari RM 114 akan mengenal pastinya." },
        { q: "Adakah yuran diagnosis dikembalikan?", a: "Yuran diagnosis diketepikan jika kami membaiki unit semasa lawatan yang sama." },
        { q: "Bolehkah lonjakan kuasa merosakkan aircond?", a: "Ya. Lonjakan selalunya merosakkan papan PCB atau kapasitor. Pelindung lonjakan pada litar khas membantu mencegahnya." },
        { q: "Berapa kos untuk membaiki aircond yang tidak boleh dihidupkan?", a: "Penggantian kapasitor bermula dari RM 195 dan pembaikan PCB dari RM 455. Harga akhir bergantung kepada bahagian yang gagal." }
      ]
    },
    zh: {
      title: "空调无法开机",
      costRange: "RM 114–RM 455，视故障而定",
      faqs: [
        { q: "为什么我的空调开不了机？", a: "可能是断路器跳闸、遥控器没电、电容失效或 PCB 故障。从 RM 114 起的诊断上门可确定原因。" },
        { q: "诊断费会退吗？", a: "如果当天上门就修好，诊断费会免收。" },
        { q: "电涌会烧坏空调吗？", a: "会。电涌常损坏 PCB 主板或电容。在专用回路上加装电涌保护器可预防。" },
        { q: "修开不了机的空调要多少钱？", a: "电容更换从 RM 195 起，PCB 维修从 RM 455 起。最终价格取决于故障部件。" }
      ]
    }
  },
  "aircon-tripping-mcb": {
    ms: {
      title: "Aircond Menyebabkan MCB / Breaker Trip",
      costRange: "RM 195–RM 1,040 bergantung kepada kerosakan",
      faqs: [
        { q: "Kenapa aircond saya menyebabkan breaker trip?", a: "Biasanya pemampat yang gagal, kapasitor terpintas, atau litar bersaiz tidak mencukupi. Perlu diperiksa oleh juruteknik untuk mengelakkan risiko kebakaran." },
        { q: "Adakah selamat untuk terus reset breaker?", a: "Tidak. Trip berulang bermakna ada kerosakan elektrik sebenar. Terus reset berisiko memanaskan pendawaian." },
        { q: "Perlukah saya panggil juruelektrik atau juruteknik aircond?", a: "Juruteknik aircond mendiagnosis bahagian unit manakala juruelektrik memeriksa litar. Kami menyelaras kedua-duanya jika perlu." },
        { q: "Berapa kos untuk membaiki aircond yang menyebabkan trip?", a: "Penggantian kapasitor bermula dari RM 195, manakala penggantian pemampat bermula dari RM 1,040." }
      ]
    },
    zh: {
      title: "空调导致漏电开关 / 断路器跳闸",
      costRange: "RM 195–RM 1,040，视故障而定",
      faqs: [
        { q: "为什么我的空调会导致断路器跳闸？", a: "通常是压缩机故障、电容短路或回路规格不足。应由技术员检查，以免引发火灾风险。" },
        { q: "一直重置断路器安全吗？", a: "不安全。反复跳闸意味着存在真实电气故障，持续重置有过热起火风险。" },
        { q: "我该找电工还是空调师傅？", a: "空调师傅诊断主机侧，电工检查回路。需要时我们两边协调。" },
        { q: "修导致跳闸的空调要多少钱？", a: "电容更换从 RM 195 起，压缩机更换从 RM 1,040 起。" }
      ]
    }
  },
  "ice-forming-on-aircon": {
    ms: {
      title: "Ais Terbentuk pada Aircond (Gegelung atau Paip Beku)",
      costRange: "RM 129–RM 455 bergantung kepada punca",
      faqs: [
        { q: "Kenapa ada ais pada aircond saya?", a: "Ais terbentuk apabila gegelung terlalu sejuk — biasanya daripada gas rendah, gegelung tersumbat, atau aliran udara lemah di atas gegelung." },
        { q: "Perlukah saya menutup unit jika ia beku?", a: "Ya. Tukar ke mod kipas atau matikan untuk membiarkan ia nyahbeku, kemudian tempah servis untuk mencari dan membaiki puncanya." },
        { q: "Adakah ais merosakkan aircond?", a: "Lama-kelamaan ais boleh merosakkan gegelung dan pemampat. Ia juga bermakna unit tidak menyejuk dengan cekap." },
        { q: "Berapa kos untuk membaiki aircond yang beku?", a: "Pembersihan bermula dari RM 129, dan top-up gas dari RM 2.50 setiap PSI. Cucian kimia penuh bermula dari RM 156." }
      ]
    },
    zh: {
      title: "空调结冰（蒸发器或管道结霜）",
      costRange: "RM 129–RM 455，视原因而定",
      faqs: [
        { q: "为什么我的空调会结冰？", a: "蒸发器过冷时就会结冰——通常是雪种不足、蒸发器堵塞或出风不畅导致。" },
        { q: "结冰了要关机吗？", a: "要。切到送风或关机让其化霜，然后预约保养查找并修复原因。" },
        { q: "结冰会损坏空调吗？", a: "长期结冰会损坏蒸发器和压缩机，也说明机器制冷效率差。" },
        { q: "修结冰的空调要多少钱？", a: "清洁从 RM 129 起，加雪种从每 PSI RM 2.50 起。完整化学清洗从 RM 156 起。" }
      ]
    }
  },
  "aircon-remote-display-issue": {
    ms: {
      title: "Remote atau Paparan Aircond Tidak Berfungsi",
      costRange: "RM 114–RM 455 bergantung kepada kerosakan",
      faqs: [
        { q: "Kenapa remote aircond saya tidak berfungsi?", a: "Mulakan dengan bateri baharu. Jika masih gagal, sensor inframerah remote atau papan penerima unit berkemungkinan rosak." },
        { q: "Apakah maksud kod ralat aircond?", a: "Setiap jenama mempunyai kod tersendiri, tetapi kebanyakannya menunjukkan kerosakan sensor, gas atau PCB. Juruteknik boleh membaca dan menyelesaikannya." },
        { q: "Bolehkah anda menggantikan remote sahaja?", a: "Ya. Remote universal atau padanan jenama tersedia, dan kami boleh memprogramkannya kepada unit anda." },
        { q: "Berapa kos untuk membaiki masalah remote atau paparan?", a: "Diagnosis bermula dari RM 114, remote gantian adalah murah, dan pembaikan PCB bermula dari RM 455." }
      ]
    },
    zh: {
      title: "空调遥控器或显示屏不工作",
      costRange: "RM 114–RM 455，视故障而定",
      faqs: [
        { q: "为什么我的空调遥控器不工作？", a: "先换新电池。如果仍然失灵，遥控器的红外传感器或室内机的接收板很可能损坏。" },
        { q: "空调故障代码是什么意思？", a: "每个品牌代码不同，但大多指向传感器、雪种或 PCB 故障。技术员可以读取并解决。" },
        { q: "可以只换遥控器吗？", a: "可以。有万能或品牌匹配的遥控器，我们可以为您的机器编程配对。" },
        { q: "修遥控器或显示屏问题要多少钱？", a: "诊断从 RM 114 起，换遥控器很便宜，PCB 维修从 RM 455 起。" }
      ]
    }
  },
  "popping-tiles-buckling": {
    ms: {
      title: "Jubin Lantai Meletup atau Meleding (Jubin Naik)",
      costRange: "RM 350–RM 2,800+ bergantung kepada skop dan bilangan jubin",
      faqs: [
        { q: "Mengapakah jubin lantai tiba-tiba meletup atau meleding di Malaysia?", a: "Cuaca panas dan lembap di Malaysia menyebabkan jubin mengembang. Tanpa jurang pengembangan yang cukup di tepi dinding, tekanan haba menolak jubin ke atas menjauhi lepaan simen yang longgar." },
        { q: "Bolehkah jubin yang meletup digam semula tanpa memecahkan simen lama?", a: "Tidak. Lapisan simen di bawah biasanya sudah lekang atau hancur. Menampal semula tanpa memecahkan lepaan rosak akan menyebabkan jubin meletup kembali." },
        { q: "Bagaimanakah cara mengelakkan jubin meletup semasa kerja ubah suai?", a: "Pastikan ada jurang pengembangan (5–8mm) di sepanjang dinding bawah skirting, gunakan simen pelekat polimer fleksibel, dan sapu simen pelekat 100% penuh di belakang setiap jubin." },
        { q: "Berapakah kos membaiki jubin meletup di KL dan Selangor?", a: "Pembaikan tompokan kecil bermula dari RM 350 hingga RM 600, manakala kerja memecahkan semula dan memasang jubin baharu untuk ruang tamu luas berkisar antara RM 1,200 hingga RM 2,800+." }
      ]
    },
    zh: {
      title: "地砖起拱爆裂（地砖爆炸凸起）",
      costRange: "RM 350–RM 2,800+，视瓷砖数量与基层而定",
      faqs: [
        { q: "为什么马来西亚的房屋地砖会突然起拱爆裂？", a: "马来西亚气候炎热潮湿，地砖热胀冷缩。如果铺贴时四周未留足伸缩缝，膨胀应力无处释放就会将脱离基层的地砖向上顶起爆开。" },
        { q: "起拱的地砖可以直接用胶水粘回去而不敲掉旧水泥吗？", a: "不能。地砖下方的原有水泥砂浆通常已粉化空鼓，直接贴胶无法承重，短时间内会再次脱落起拱。" },
        { q: "在装修铺砖时如何防止地砖日后起拱？", a: "在墙边踢脚线下方预留 5–8mm 伸缩缝，使用高弹性聚合物瓷砖胶，并在每块砖背面满刮胶浆以保证 100% 满粘接触。" },
        { q: "在吉隆坡和雪兰莪修补起拱爆裂地砖要多少钱？", a: "局部小范围修补从 RM 350 至 RM 600 起，若是大面积客厅凿除旧水泥重贴地砖则在 RM 1,200 至 RM 2,800+ 之间。" }
      ]
    }
  },
  "damaged-gypsum-partition-wall": {
    ms: {
      title: "Dinding Pemisah Gipsum Berlubang atau Rosak",
      costRange: "RM 180–RM 1,200+ bergantung kepada saiz lubang dan struktur rangka",
      faqs: [
        { q: "Bolehkah lubang pada dinding pemisah gipsum dibaiki tanpa kesan tampalan?", a: "Boleh. Pembaikan profesional menggunakan sokongan kayu di belakang, tampalan gipsum berpemotong kemas, pita jaring gentian, dan skim coat bertingkat yang digosok rata sebelum mengecat semula." },
        { q: "Apakah punca bahagian bawah dinding pemisah gipsum menjadi lembut atau reput?", a: "Mengecop lantai basah secara kerap tanpa skirting kalis air atau resapan air dari bilik mandi menyebabkan air meresap ke dalam teras gipsum dan melembutkannya." },
        { q: "Bolehkah saya menggantung TV atau rak berat pada dinding pemisah gipsum?", a: "Barangan berat mesti diskru terus ke rangka stud besi C atau dipasang dengan papan lapis sokongan di belakang dinding gipsum, bukan diskru pada papan gipsum kosong." },
        { q: "Berapakah kos membaiki dinding pemisah gipsum di KL & Selangor?", a: "Tampalan lubang kecil bermula dari RM 180–RM 300, manakala penggantian kepingan gipsum besar bersama pengukuhan rangka stud dan cat adalah sekitar RM 450 hingga RM 1,200." }
      ]
    },
    zh: {
      title: "石膏隔断墙损坏破洞（轻钢龙骨隔墙修复）",
      costRange: "RM 180–RM 1,200+，视破洞大小与龙骨加固而定",
      faqs: [
        { q: "石膏板隔墙上的破洞修补后能做到完全看不出痕迹吗？", a: "可以。专业补洞会在内部加装木垫板支撑，嵌入匹配石膏板并贴抗裂网带，经过多道羽化批灰打磨和重新刷漆后完全与原墙融合无痕。" },
        { q: "石膏隔断墙底部为什么会受潮发胀或软化？", a: "拖地积水从底部渗入或靠近卫生间受潮，由于石膏芯材吸水，水分会导致石膏板软化粉化发霉。" },
        { q: "修复后的石膏隔墙上可以悬挂电视机或重型挂架吗？", a: "重型物品必须直接固定在金属竖向 C 型龙骨上，或在修补时于石膏板背后预埋多层夹板加固，不能直接挂在单层空心石膏板上。" },
        { q: "在吉隆坡和雪兰莪修补石膏隔断墙需要多少钱？", a: "门把手撞击的小洞修补从 RM 180–RM 300 起，若涉及大面积换板、龙骨加固及整面墙重新批灰刷漆则在 RM 450 至 RM 1,200 之间。" }
      ]
    }
  },
  "old-bathroom-plumbing-tiles": {
    ms: {
      title: "Masalah Bilik Mandi Usang, Paip Berkarat & Jubin Lusuh",
      costRange: "RM 800–RM 8,500+ bergantung kepada pembaikan paip vs ubah suai penuh",
      faqs: [
        { q: "Adakah lebih baik membaiki secara bertampal atau membuat ubah suai penuh bilik mandi lama?", a: "Bagi bilik mandi melebihi 15–20 tahun dengan paip besi lama dan kalis air usang, pembaikan setempat sering menyebabkan kebocoran baru. Ubah suai penuh menyelesaikan isu paip, kalis air, dan kebersihan secara tuntas." },
        { q: "Berapa lamakah tempoh kerja ubah suai penuh bilik mandi di KL?", a: "Ubah suai bilik mandi standard biasanya mengambil masa 7 hingga 12 hari bekerja, merangkumi kerja memecah jubin, pendawaian semula paip, ujian banjir kalis air 3 hari, pemasangan jubin dan mangkuk tandas." },
        { q: "Bolehkah ubah suai bilik mandi dibuat tanpa memecahkan jubin?", a: "Pemasangan jubin lapisan atas boleh dilakukan untuk naik taraf rupa, tetapi jika ada kebocoran paip tersembunyi atau membran kalis air bocor, jubin lama wajib dipecahkan hingga ke papak asal." },
        { q: "Berapakah anggaran kos ubah suai bilik mandi lama di KL & Selangor?", a: "Penggantian paip dan peralatan sanitari terpilih bermula dari RM 800–RM 2,000, manakala ubah suai penuh dengan kalis air baru, jubin porselin, dan kelengkapan moden berkisar antara RM 4,500 hingga RM 8,500+." }
      ]
    },
    zh: {
      title: "老旧浴室暗管老化、水压偏小与瓷砖渗水",
      costRange: "RM 800–RM 8,500+，视局部换管还是全拆重装而定",
      faqs: [
        { q: "老旧卫生间是局部补漏划算还是全拆整体翻新更彻底？", a: "房龄超过 15–20 年且使用镀锌铁管的老浴室，局部补漏往往治标不治本。全拆重做水管回路与三道防水，能彻底解决隐蔽漏水与卫生异味问题。" },
        { q: "在吉隆坡进行全套卫生间翻新通常需要多长时间？", a: "一套标准的公寓或排屋卫生间翻新一般需要 7 至 12 个工作日，包括打拆旧砖、重排 PPR 水管、72小时闭水试验、重铺防滑地砖及安装洁具。" },
        { q: "老浴室翻新可以不敲旧瓷砖直接覆盖铺贴吗？", a: "如果仅是表面美化且无任何漏水，可以采用微水泥或砖上贴砖；但若存在暗管漏水或防水层失效渗漏楼下，必须彻底敲除至水泥楼板基层重做。" },
        { q: "吉隆坡与雪兰莪老旧卫生间翻新大概需要多少费用？", a: "局部更换暗管与洁具从 RM 800–RM 2,000 起，若包含全拆敲砖、全套重做防水、全铺地砖墙砖及换新卫浴洁具，整体在 RM 4,500 至 RM 8,500+ 之间。" }
      ]
    }
  },
  "old-kitchen-cabinet-plumbing-damage": {
    ms: {
      title: "Kerosakan Kabinet Sinki Dapur Akibat Paip Bocor",
      costRange: "RM 450–RM 8,000+ bergantung kepada gantian dasar sinki vs ubah suai dapur",
      faqs: [
        { q: "Apakah bahan kabinet bawah sinki terbaik untuk mengelakkan kerosakan air?", a: "Bangkai kabinet aluminium sepenuhnya atau papan lapis gred marin dengan lapisan pelindung kerajang aluminium memberikan ketahanan terbaik terhadap titisan paip pada masa hadapan." },
        { q: "Bolehkah saya menukar bahagian bawah kabinet sinki yang rosak tanpa merombak seluruh dapur?", a: "Boleh. KL Servis Rumah boleh menggantikan kabinet asas sinki secara modular menggunakan aluminium kalis air sambil mengekalkan permukaan table top dan kabinet lain sedia ada." },
        { q: "Adakah kerja ubah suai dapur memerlukan penambahan punca elektrik dan litar pendawaian?", a: "Ya. Dapur lama sering kekurangan punca soket kuasa 15A/20A untuk ketuhar elektrik, periuk induksi, dan mesin basuh pinggan. Penambahan litar mengelakkan DB elektrik daripada kerap trip." },
        { q: "Berapakah kos membaiki kabinet sinki rosak dan paip bocor di KL?", a: "Pembaikan kebocoran paip sinki dan pengukuhan dasar bermula dari RM 450–RM 900, manakala penggantian kabinet sinki aluminium kalis air berkisar antara RM 1,200 hingga RM 2,800." }
      ]
    },
    zh: {
      title: "厨房水槽柜受潮腐烂、水管渗漏与老旧翻新",
      costRange: "RM 450–RM 8,000+，视单换水槽底柜还是整体厨房翻新而定",
      faqs: [
        { q: "厨房水槽下方地柜选用什么材质最防潮防水？", a: "全铝合金柜体或加贴防水铝箔的高密度海洋板是最佳选择，即使下水管产生冷凝水或轻微渗漏也不会吸水发胀腐烂发霉。" },
        { q: "可以只单独更换水槽下方受潮发胀的底柜而不拆除整套橱柜吗？", a: "可以。KL Servis Rumah 支持局部模块化更换，在完整保留现有石英石台面和其余吊柜地柜的前提下，单独拆除换装全铝防水水槽地柜。" },
        { q: "老旧厨房翻新是否需要重新布设大功率电器回路？", a: "是的。老旧厨房插座较少，现代嵌入式烤箱、电磁炉和洗碗机需要独立的 15A/20A 电气回路，重新布线能有效避免使用时频繁跳闸。" },
        { q: "在吉隆坡修复水槽漏水及更换水槽底柜需要多少钱？", a: "单纯水槽下水管检修与底板加固从 RM 450–RM 900 起，定制安装全新全铝合金防水水槽底柜费用在 RM 1,200 至 RM 2,800 左右。" }
      ]
    }
  },
  "uneven-floor-subfloor-leveling": {
    ms: {
      title: "Lantai Konkrit Tidak Rata Sebelum Pasang Jubin atau Lantai SPC",
      costRange: "RM 3.50–RM 12.00 / kaki persegi bergantung kepada ketebalan self-leveling",
      faqs: [
        { q: "Mengapakah lantai konkrit mesti diratakan sebelum memasang lantai SPC atau vinil?", a: "Lantai SPC dan vinil dipasang secara terapung. Jika lantai asal bergelombang atau berbonggol, sambungan klik akan menanggung beban lenturan berterusan lalu patah dan renggang." },
        { q: "Apakah itu simen perata sendiri (self-leveling compound) dan bagaimana ia berfungsi?", a: "Simen self-leveling ialah bancuhan simen polimer cecair yang mengalir mengikut graviti ke kawasan rendah, menghasilkan permukaan kaca yang sangat rata dan sedia untuk pemasangan lantai dalam tempoh 24 jam." },
        { q: "Bolehkah simen self-leveling disapu di atas jubin lama?", a: "Boleh, dengan syarat jubin sedia ada masih kukuh, tidak berongga, dibersihkan daripada gris, dan disapu dengan primer pelekat polimer khas terlebih dahulu." },
        { q: "Berapakah kos kerja meratakan lantai konkrit di KL & Selangor?", a: "Kerja meratakan simen tampalan biasa bermula dari RM 3.50–RM 5.50 setiap kaki persegi, manakala lepaan self-leveling polimer premium adalah sekitar RM 6.50 hingga RM 12.00 setiap kaki persegi." }
      ]
    },
    zh: {
      title: "铺贴 SPC 地板或瓷砖前地面不平整与自流平找平",
      costRange: "每平方英尺 RM 3.50–RM 12.00，视找平厚度与自流平材料而定",
      faqs: [
        { q: "为什么在安装 SPC 锁扣地板前必须先做地面自流平找平？", a: "SPC 锁扣地板属于半刚性悬浮铺装。如果基层地面存在凹坑或凸点，踩踏时锁扣接缝会反复承受拉折应力，导致锁扣崩裂开缝甚至地板翘边。" },
        { q: "什么是自流平水泥？它是如何找平地面的？", a: "自流平水泥是一种高流动性聚合物特种砂浆，倒在地面上会借助重力自然流淌填平低洼处，24小时即可固化形成像镜面一样平整高强度的找平基层。" },
        { q: "自流平水泥可以直接倒在旧瓷砖上面找平吗？", a: "可以，前提是原有瓷砖牢固不空鼓、彻底除油除尘，并提前滚涂一层专用环氧或聚合物界面剂以增强粘结附着力。" },
        { q: "在吉隆坡和雪兰莪做地面找平与自流平施工大概多少钱？", a: "局部水泥薄层找平从每平方英尺 RM 3.50–RM 5.50 起，高品质工业级聚合物自流平施工通常在每平方英尺 RM 6.50 至 RM 12.00 之间。" }
      ]
    }
  },
  "wall-cracks-settlement-masonry": {
    ms: {
      title: "Retak Struktur Dinding Bata & Sambungan Tambahan Rumah",
      costRange: "RM 600–RM 4,500+ bergantung kepada kaedah jahitan keluli vs pengukuhan",
      faqs: [
        { q: "Bagaimanakah cara mengenal pasti sama ada retak dinding itu retak biasa atau retak struktur?", a: "Retak kosmetik biasanya halus (<1mm) pada permukaan cat. Retak struktur pula lebih lebar (>3mm), membentuk corak tangga di sepanjang garisan bata, tembus ke belakang, atau menyebabkan pintu sukar dibuka." },
        { q: "Mengapakah sambungan bahagian tambahan dapur sering retak dan berpisah daripada rumah asal?", a: "Bahagian tambahan mempunyai asas konkrit baru yang mengalami kadar enapan tanah berbeza daripada rumah asal. Tanpa besi dowel pengikat yang betul, pergerakan haba dan tanah akan membuka celah pemisah." },
        { q: "Bolehkah dinding bata yang retak dibaiki secara kekal tanpa merobohkan semula?", a: "Boleh. Setelah mendapan tanah stabil, pemasangan bar jahitan keluli tahan karat bersama grouting simen tanpa kecut dapat mengunci struktur bata dengan kukuh sebelum kerja skim coat semula." },
        { q: "Berapakah kos membaiki retak dinding bata di KL & Selangor?", a: "Kerja menjahit retakan setempat dan lepaan semula bermula dari RM 600–RM 1,200 setiap garisan retak, manakala pengukuhan struktur sambungan besar adalah sekitar RM 2,200 hingga RM 4,500+." }
      ]
    },
    zh: {
      title: "房屋沉降砖墙阶梯裂缝与扩建接缝分离开裂",
      costRange: "RM 600–RM 4,500+，视裂缝缝合加固与结构勘测范围而定",
      faqs: [
        { q: "如何准确判断墙面裂缝是表面油漆开裂还是砖墙结构沉降裂缝？", a: "表面油漆裂缝细小（<1mm）且仅在批灰层；结构沉降裂缝通常较宽（>3mm）、沿砖缝呈阶梯状开裂、贯穿墙体甚至导致门窗框受挤压变形卡死。" },
        { q: "为什么厨房或车库扩建部分与主屋接缝处极易出现开裂缝隙？", a: "扩建基础与原主屋地基存在沉降速率差异。若当初扩建施工时未在主楼混凝土柱中植入拉结钢筋，温度胀缩与土壤沉降就会在接缝处拉开贯穿缝隙。" },
        { q: "砖墙开裂后可以彻底加固修复而不必拆墙重建吗？", a: "可以。在沉降稳定后，采用开槽植入不锈钢螺旋加固筋结合高压无收缩结构灌浆，能有效锁紧砖体结构并恢复墙体抗剪强度。" },
        { q: "在吉隆坡和雪兰莪修复砖墙结构沉降裂缝大概要多少费用？", a: "局部单道裂缝不锈钢缝合与批灰刷漆从 RM 600–RM 1,200 起，若是大面积扩建接缝贯通开裂与结构加固则在 RM 2,200 至 RM 4,500+ 之间。" }
      ]
    }
  }
};
