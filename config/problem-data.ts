export type ProblemDetail = {
  slug: string;
  serviceSlug: 
    | "painting" | "plumbing" | "ceiling" | "waterproofing" | "handyman"
    | "house-renovation" | "electrical" | "water-heater" | "ceiling-fan" | "lighting"
    | "tiling" | "plaster-ceiling" | "skim-coat" | "flooring" | "epoxy-flooring"
    | "roof-repair" | "kitchen-cabinet" | "carpentry" | "door" | "window-repair"
    | "locksmith" | "glass-aluminium" | "cleaning" | "deep-cleaning" | "post-renovation-cleaning"
    | "cctv" | "autogate" | "welding";
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

  // CLEANING
  {
    slug: "mold-in-bathroom-after-cleaning",
    serviceSlug: "cleaning",
    title: "Mold Returning Quickly After Professional Cleaning",
    symptom: "Black mold appears again in bathroom within 1–2 weeks after cleaning.",
    costRange: "RM120–RM450+ depending on treatment",
    urgency: "Medium",
    causes: ["High humidity and poor ventilation", "Leaking grout or silicone", "Condensation on cold walls", "Inadequate anti-mold treatment"],
    solutions: ["Deep clean with anti-mold solution", "Improve ventilation", "Re-seal grout and silicone", "Apply anti-mold coating"],
    whenToCall: ["Mold is spreading fast", "Health concerns (allergies)", "Recurring after multiple cleans"],
    faqs: [
      { q: "Can cleaning alone stop mold?", a: "Cleaning removes mold but the moisture source must also be addressed for long-term results." },
      { q: "Do you offer anti-mold treatment?", a: "Yes — we apply professional anti-mold coatings that last 6–12 months." }
    ]
  },

  // DEEP CLEANING
  {
    slug: "stubborn-grout-stains-after-deep-clean",
    serviceSlug: "deep-cleaning",
    title: "Grout Still Stained After Deep Cleaning Service",
    symptom: "Bathroom or kitchen grout remains discolored even after professional deep clean.",
    costRange: "RM180–RM680+ depending on area and method",
    urgency: "Low",
    causes: ["Deep-set mold and mineral deposits", "Old or porous grout", "Hard water stains", "Previous poor sealing"],
    solutions: ["Apply grout cleaner and steamer", "Re-grout affected areas", "Apply penetrating sealer", "Recommend color sealing"],
    whenToCall: ["Stains are very dark or widespread", "Client wants color sealing", "Multiple bathrooms affected"],
    faqs: [
      { q: "Can you restore grout color without re-grouting?", a: "Often yes with professional cleaning + color sealing. Full re-grouting is only needed for severely damaged grout." },
      { q: "How long does color sealing last?", a: "Typically 2–4 years depending on usage and cleaning products." }
    ]
  },

  // POST RENOVATION CLEANING
  {
    slug: "construction-dust-returning",
    serviceSlug: "post-renovation-cleaning",
    title: "Fine Construction Dust Returning After Post-Reno Clean",
    symptom: "Fine white or grey dust keeps appearing on surfaces days after post-renovation cleaning.",
    costRange: "RM250–RM950+ depending on property size",
    urgency: "Medium",
    causes: ["Dust trapped in HVAC or false ceiling", "Incomplete vacuuming of porous surfaces", "No negative air machine used", "Ongoing minor works"],
    solutions: ["Use HEPA vacuum and air scrubber", "Clean inside false ceiling and ducts", "Wipe all surfaces with microfiber", "Final air purification"],
    whenToCall: ["Dust is very fine and persistent", "Client has respiratory issues", "Large renovation project"],
    faqs: [
      { q: "Why does dust keep coming back?", a: "Fine renovation dust settles in hidden areas and is disturbed by air movement." },
      { q: "Do you use special equipment?", a: "Yes — we use HEPA vacuums, air scrubbers and negative air machines for post-renovation cleans." }
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

export const problemI18n: Partial<Record<string, Partial<Record<"ms" | "zh", LocalizedProblemContent>>>> = {
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
  "mold-in-bathroom-after-cleaning": {
    ms: {
      title: "Kulat Kembali Pesat Selepas Pembersihan Profesional",
      symptom: "Kulat hitam muncul semula di bilik air dalam 1–2 minggu selepas pembersihan.",
      costRange: "RM120–RM450+ bergantung kepada rawatan",
      causes: ["Kelembapan tinggi dan pengudaraan lemah", "Grout atau silikon bocor", "Kondensasi pada dinding sejuk", "Rawatan anti-kulat tidak mencukupi"],
      solutions: ["Cuci mendalam dengan larutan anti-kulat", "Perbaiki pengudaraan", "Kedap semula grout dan silikon", "Sapukan salutan anti-kulat"],
      whenToCall: ["Kulat merebak pesat", "Kebimbangan kesihatan (alahan)", "Berulang selepas beberapa pembersihan"],
      faqs: [
        { q: "Bolehkah pembersihan sahaja menghentikan kulat?", a: "Pembersihan menanggalkan kulat tetapi punca lembapan juga mesti ditangani untuk hasil jangka panjang." },
        { q: "Adakah anda menawarkan rawatan anti-kulat?", a: "Ya - kami menyapu salutan anti-kulat profesional yang tahan 6–12 bulan." }
      ]
    },
    zh: {
      title: "专业清洁后霉菌迅速再次出现",
      symptom: "清洁后 1–2 周内浴室黑霉再次出现。",
      costRange: "RM120–RM450+，视处理方式而定",
      causes: ["高湿度与通风不良", "填缝或硅胶漏水", "冷墙表面结露", "防霉处理不充分"],
      solutions: ["用防霉溶液深度清洁", "改善通风", "重新密封填缝与硅胶", "涂抹防霉涂层"],
      whenToCall: ["霉菌迅速蔓延", "健康顾虑（过敏）", "多次清洁后反复出现"],
      faqs: [
        { q: "单靠清洁能阻止霉菌吗？", a: "清洁可以去除霉菌，但要获得长期效果还必须解决潮气来源。" },
        { q: "你们提供防霉处理吗？", a: "会的——我们涂抹专业防霉涂层，可持续 6–12 个月。" }
      ]
    }
  },
  "stubborn-grout-stains-after-deep-clean": {
    ms: {
      title: "Grout Masih Berkesan Selepas Perkhidmatan Pembersihan Mendalam",
      symptom: "Grout bilik air atau dapur kekal berubah warna walaupun selepas pembersihan mendalam profesional.",
      costRange: "RM180–RM680+ bergantung kepada kawasan dan kaedah",
      causes: ["Kulat dan mendapan mineral mendalam", "Grout lama atau berliang", "Kesan air keras", "Pengedapan lemah sebelumnya"],
      solutions: ["Sapukan pencuci grout dan penstim", "Grout semula kawasan terjejas", "Sapukan pengedap penusukan", "Cadangkan pengedapan warna"],
      whenToCall: ["Kesan sangat gelap atau meluas", "Klien mahukan pengedapan warna", "Beberapa bilik air terjejas"],
      faqs: [
        { q: "Bolehkah anda memulihkan warna grout tanpa grouting semula?", a: "Selalunya ya dengan pembersihan profesional + pengedapan warna. Grouting semula penuh hanya diperlukan untuk grout rosak teruk." },
        { q: "Berapa lama pengedapan warna bertahan?", a: "Biasanya 2–4 tahun bergantung kepada penggunaan dan produk pembersihan." }
      ]
    },
    zh: {
      title: "深度清洁后瓷砖填缝仍有污渍",
      symptom: "即使经过专业深度清洁，浴室或厨房的填缝仍然变色。",
      costRange: "RM180–RM680+，视面积和方法而定",
      causes: ["深层霉菌与矿物质沉积", "老旧或多孔的填缝", "硬水渍", "先前密封处理不佳"],
      solutions: ["使用填缝清洁剂与蒸汽机", "对受影响区域重新填缝", "涂抹渗透型密封剂", "建议进行颜色密封"],
      whenToCall: ["污渍非常深或范围广", "客户希望进行颜色密封", "多个浴室受影响"],
      faqs: [
        { q: "你们能不重新填缝就恢复填缝颜色吗？", a: "通常可以，通过专业清洁加颜色密封即可实现。只有严重受损的填缝才需要全面重新填缝。" },
        { q: "颜色密封能持续多久？", a: "根据使用情况和清洁产品，通常为 2–4 年。" }
      ]
    }
  },
  "construction-dust-returning": {
    ms: {
      title: "Habuk Pembinaan Halus Kembali Selepas Pembersihan Selepas Renovasi",
      symptom: "Habuk putih atau kelabu halus terus muncul pada permukaan beberapa hari selepas pembersihan pasca renovasi.",
      costRange: "RM250–RM950+ bergantung kepada saiz hartanah",
      causes: ["Habuk terperangkap dalam HVAC atau siling palsu", "Penyedutan tidak lengkap permukaan berliang", "Tiada mesin udara negatif digunakan", "Kerja kecil berterusan"],
      solutions: ["Gunakan vacuum HEPA dan penggosok udara", "Bersihkan di dalam siling palsu dan saluran", "Lap semua permukaan dengan mikrofiber", "Penulenan udara akhir"],
      whenToCall: ["Habuk sangat halus dan berterusan", "Klien mempunyai isu pernafasan", "Projek renovasi besar"],
      faqs: [
        { q: "Mengapa habuk terus kembali?", a: "Habuk renovasi halus mengendap di kawasan tersembunyi dan tergerak semula oleh pergerakan udara." },
        { q: "Adakah anda menggunakan peralatan khas?", a: "Ya - kami menggunakan vacuum HEPA, penggosok udara dan mesin udara negatif untuk pembersihan pasca renovasi." }
      ]
    },
    zh: {
      title: "装修后清洁后细粉尘再次出现",
      symptom: "装修后清洁数天后，细白色或灰色粉尘仍持续出现在表面。",
      costRange: "RM250–RM950+，视物业大小而定",
      causes: ["粉尘滞留在空调系统或吊顶内", "多孔表面吸尘不彻底", "未使用负压空气净化机", "仍有小型施工进行中"],
      solutions: ["使用 HEPA 吸尘器与空气净化机", "清洁吊顶内部与风管", "用超细纤维布擦拭所有表面", "最终空气净化"],
      whenToCall: ["粉尘非常细且持续存在", "客户有呼吸道问题", "大型装修项目"],
      faqs: [
        { q: "为什么粉尘一直出现？", a: "细小的装修粉尘会沉积在隐蔽区域，并因空气流动而再次扬起。" },
        { q: "你们使用特殊设备吗？", a: "会的——我们在装修后清洁中使用 HEPA 吸尘器、空气净化机与负压机。" }
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
  }
};
