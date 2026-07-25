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
  }
};
