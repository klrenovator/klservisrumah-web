export type ProblemDetail = {
  slug: string;
  serviceSlug: "painting" | "plumbing" | "ceiling" | "waterproofing" | "handyman";
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
  }
];

export const problemSlugs = problemPages.map((problem) => problem.slug);
