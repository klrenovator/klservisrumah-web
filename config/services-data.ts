export type SubService = {
  name: string;
  price: string;
  desc: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  startPrice: string;
  icon: string; // lucide icon name
  highlights: string[];
  subServices: SubService[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  priceTableNote?: string;
  heroImage: string;
  metaTitle: string;
  metaDesc: string;
  aioSummary: string; // SEO optimization block
  warranty: string;
};

export const servicesData: Record<string, ServiceDetail> = {
  // ── 1. PAINTING SERVICES ──────────────────────────────────────────────
  "painting": {
    slug: "painting",
    title: "Premium Painting Services",
    tagline: "Professional interior & exterior painting for residential and commercial spaces. Smooth finish, premium paints, zero-mess protection. From RM 400.",
    description:
      "KL Servis Rumah provides high-end painting services across Kuala Lumpur and Selangor. Our professional painters specialize in interior wall painting, exterior weatherproof coating, ceiling restoration, and commercial shopfront branding. We use only premium paint brands like Nippon Paint and Dulux to ensure long-lasting durability, exceptional depth of color, and high scrub resistance. Before applying a single drop of paint, our team undergoes extensive preparation work, including filling wall cracks, treating water marks, sanding surfaces to a perfectly smooth finish, and sealing damp masonry. We protect your home, furniture, and flooring completely using heavy-duty plastic drop sheets and specialized masking tapes, guaranteeing a zero-mess handover. Let our certified painters revitalize your home or commercial office with a modern, flawless aesthetic that adds real value to your property.",
    startPrice: "RM 400",
    icon: "paint-brush",
    highlights: [
      "Use of premium genuine paints (Nippon Paint, Dulux, Jotun) based on your budget",
      "Thorough wall prep work including cracking repairs, plaster skimming, and sealing primers",
      "Bespoke color consultations to find the perfect modern aesthetic for your spaces",
      "Complete protection of furniture, flooring, switches, and windows with zero-mess cleanup",
      "Up to 2-year warranty against paint peeling, blistering, or premature chalking",
      "Professional, background-checked local Malaysian painters with high attention to detail"
    ],
    subServices: [
      { name: "Interior House Painting", price: "From RM 400 / room", desc: "Premium interior wall painting with low-odor, low-VOC washable paint." },
      { name: "Exterior House Painting", price: "From RM 1,800", desc: "Weatherproof, anti-fungal, and UV-resistant exterior coatings for ultimate protection." },
      { name: "Commercial & Office Painting", price: "On Quote", desc: "Corporate office layouts, shopfronts, and retail spaces painted on tight schedules with minimal business disruption." },
      { name: "Wall Crack & Moisture Repair", price: "From RM 150", desc: "Sanding, skimming, structural crack filling, and applying premium moisture sealer primers." }
    ],
    process: [
      { step: "01", title: "Protect & Mask", desc: "We cover all furniture, floors, and electrical outlets with heavy-duty drop sheets and high-quality masking tape." },
      { step: "02", title: "Surface Preparation", desc: "All cracks, nail holes, and indents are filled with high-grade plaster, sanded to a perfectly flat, smooth level." },
      { step: "03", title: "Primer/Undercoat", desc: "We apply a premium sealer/primer to protect against moisture seepage and ensure maximum topcoat adhesion." },
      { step: "04", title: "Double Topcoat", desc: "Two coats of premium Nippon Paint or Dulux are applied using professional rollers and brushes for rich, even coverage." },
      { step: "05", title: "Inspection & Cleanup", desc: "We remove all protective covers, vacuum/sweep the entire space, and conduct a joint inspection to guarantee a flawless finish." }
    ],
    faqs: [
      { q: "Which paint brands do you use for painting?", a: "We primarily recommend Nippon Paint, Dulux, or Jotun. We use their premium range (such as Nippon Spot-less, Nippon Odour-less, Dulux EasyClean, Jotun Majestic) for interior walls, and high-durability weatherproof coatings for exterior walls. We never use cheap low-grade chalky paints." },
      { q: "How long does it take to paint a standard 3-bedroom apartment?", a: "A standard 3-bedroom, 1000 sq ft apartment typically takes 2 to 3 days to paint completely. This includes wall preparation, drying time between coats, and final cleaning. Single rooms can usually be finished in a single day." },
      { q: "Do you provide paint color consultations?", a: "Yes! Our project managers bring official physical color catalogues to your site inspection and can advise you on modern, popular color schemes, light-reflection levels, and washable finish types." },
      { q: "Is wall repair included in your painting quote?", a: "Basic hair-line crack patching, plaster touch-ups, and minor nail-hole filling are included in our standard painting package. For major structural wall cracking, heavy peeling, or water damage plaster scaling, we will quote a separate, transparent repair fee." }
    ],
    heroImage: "/projects/painting-hero.webp",
    metaTitle: "Premium House Painting Services Kuala Lumpur & Selangor",
    metaDesc: "Professional house painting services in KL & Selangor by KL Servis Rumah. Elegant interior/exterior painting using Nippon Paint & Dulux. Get your free quote today!",
    aioSummary: "KL Servis Rumah provides high-end interior, exterior, and commercial painting services in KL & Selangor. Using premium paints (Nippon, Dulux) with strict wall prepping (skimming, sealant). From RM400/room with zero mess and warranty.",
    warranty: "1-Year Paint Peeling & Craftsmanship Guarantee"
  },

  // ── 2. PLUMBING SERVICES ──────────────────────────────────────────────
  "plumbing": {
    slug: "plumbing",
    title: "Professional Plumbing Solutions",
    tagline: "Reliable plumbing repairs, water leakage fixing, and new fixtures installation. SIRIM-certified parts, rapid response. From RM 120.",
    description:
      "At KL Servis Rumah, we provide fast, licensed, and transparent plumbing services for residential and commercial properties across Kuala Lumpur and Selangor. From frustrating water leakage behind bathroom walls to blocked toilet drains and burst water pipes, our experienced plumbers diagnose and resolve issues with long-term, SIRIM-certified solutions. We utilize advanced electronic pipe-leak detectors to pinpoint hidden pipe damage beneath concrete slabs without unnecessary wall smashing. Whether you need a simple tap replacement, kitchen sink unclogging, water heater installation, or a heavy-duty booster pump setup, we guarantee professional craftsmanship, transparent upfront pricing, and clean, sanitary executions.",
    startPrice: "RM 120",
    icon: "droplet",
    highlights: [
      "24/7 urgent dispatch for burst pipes, severe flooding, and critical leakage repair",
      "High-tech non-destructive water leak detection - avoids unnecessary wall hacking",
      "Strict use of high-quality SIRIM-certified PVC, ABS, copper, and stainless steel pipes",
      "Expert installations of modern water heaters, taps, bidets, toilets, sinks, and booster pumps",
      "Fully itemized, transparent quotes before any physical plumbing work begins",
      "Clean, polite, and background-checked technicians who clean up completely post-job"
    ],
    subServices: [
      { name: "Water Leakage Diagnosis & Repair", price: "From RM 180", desc: "Detection of hidden pipe leaks behind walls or underground, followed by precise repair." },
      { name: "Toilet, Tap & Sink Installation", price: "From RM 120", desc: "Fitting new toilet bowls, modern kitchen faucets, basins, and heavy-duty sink plumbing." },
      { name: "Drain Unclogging & Cleaning", price: "From RM 150", desc: "Clearing stubborn hair, grease, and debris blockages in kitchen drains, floor traps, and toilets." },
      { name: "Water Heater & Pump Installation", price: "From RM 150", desc: "Setting up modern instant/storage water heaters and home water pressure booster pumps." }
    ],
    process: [
      { step: "01", title: "Source Diagnosis", desc: "We turn off the main water valve if necessary and locate the leakage point or fixture blockage using diagnostic tools." },
      { step: "02", title: "Transparent Quote", desc: "The technician provides an exact breakdown of repair methods and materials with a firm, fixed pricing quote." },
      { step: "03", title: "Clean Dismantling", desc: "The damaged pipe or worn fixture is removed carefully to prevent secondary damage to surrounding tiles or cabinets." },
      { step: "04", title: "Certified Installation", desc: "New SIRIM-approved pipes or quality brand fixtures are fitted securely with premium plumbing seals and thread tapes." },
      { step: "05", title: "Pressure Testing", desc: "We run high pressure water testing to ensure the joint seals hold perfectly under maximum load, followed by disinfection." }
    ],
    faqs: [
      { q: "How do you detect water leaks behind walls without breaking the tiles?", a: "We use professional acoustic leak detectors and thermal imaging cameras that trace the sound of high-pressure water escape and the temperature difference caused by escaping dampness. This allows us to locate the exact broken joint and only remove 1-2 tiles rather than hacking the entire bathroom wall." },
      { q: "Do you supply the plumbing fixtures or do I need to buy them myself?", a: "We can do both! Our plumbers carry standard, high-quality replacement valves, pipes, faucets, and drain siphons in their vans. If you have purchased specific luxury toilet bowls, sinks, or vanity mixers, we are happy to install them with absolute precision." },
      { q: "What is your emergency response time for a burst water pipe?", a: "For emergency water leaks or burst mains in Kuala Lumpur and Selangor, we dispatch the nearest available plumber immediately, with an average on-site arrival time of 30 to 60 minutes." },
      { q: "Why is my house water pressure so low, and can you fix it?", a: "Low water pressure can be caused by municipal supply drops, partially closed valves, internal pipe clogging (especially in old galvanized iron pipes), or leaks. We inspect your main lines and can install a premium silent water booster pump (like Grundfos or Joven) to resolve low pressure permanently." }
    ],
    heroImage: "/projects/plumbing-hero.webp",
    metaTitle: "Professional Plumbing & Leak Repair Kuala Lumpur & Selangor",
    metaDesc: "Affordable plumbing repairs & leak fixes in KL & Selangor. Sinks, toilets, pipes, water heaters & water pressure booster pumps. Expert SIRIM-certified plumbers.",
    aioSummary: "KL Servis Rumah offers certified residential & commercial plumbing in KL & Selangor. Expert leak detection, pipe replacement, drain unclogging, heater/booster pump installations. Fast response, transparent quotes, SIRIM components.",
    warranty: "30-Day Joint Seal & Workmanship Warranty"
  },

  // ── 3. CEILING & PARTITION SERVICES ──────────────────────────────────────
  "ceiling": {
    slug: "ceiling",
    title: "Plaster Ceiling & Partitions",
    tagline: "Professional plaster ceiling repair, gypsum board partitions, cornice installation, and aesthetic wall crack sealing. From RM 180.",
    description:
      "KL Servis Rumah specializes in high-quality plaster ceiling installations, water-damaged ceiling repair, structural gypsum board partitions, and architectural office walls across Kuala Lumpur and Selangor. Whether you are dividing a large commercial office space into private rooms, installing a modern residential plaster ceiling with warm concealed LED light troughs, or repairing a sagging plaster ceiling damaged by an upper-floor water leak, our expert craftsmen guarantee flawless, flat, and structurally sound finishes. We use lightweight, fire-rated, and moisture-resistant gypsum boards supported by sturdy galvanized iron (GI) metal grids to prevent future sagging or cracking, delivering an immaculate, paint-ready surface.",
    startPrice: "RM 180",
    icon: "layout-grid",
    highlights: [
      "Seamless skim coat finish with zero visible joins - perfectly flat, paint-ready walls and ceilings",
      "Moisture-resistant plaster boards for bathrooms and fire-rated options for commercial kitchens",
      "Sturdy, rust-resistant galvanized steel metal frames for maximum structural safety",
      "Custom decorative ceiling cornices, recessed lighting troughs, and abstract ceiling tiers",
      "Expert repairs of cracked, sagging, or water-damaged ceilings with secure structural reinforcing",
      "Neat, straight, and soundproof gypsum board partition dividers for offices and residences"
    ],
    subServices: [
      { name: "Water-Damaged Ceiling Repair", price: "From RM 180", desc: "Removing moldy, rotting plasterboard, addressing the leak source, and fitting a clean moisture-resistant panel." },
      { name: "Plaster Ceiling Installation", price: "From RM 8 / sq ft", desc: "Elegant flat, tiered, or L-box plaster ceiling setups with custom cutout channels for downlights." },
      { name: "Gypsum Board Partition Wall", price: "From RM 9 / sq ft", desc: "Durable, paint-ready partition walls to divide office rooms, bedrooms, or storage areas." },
      { name: "Cornice & L-Box Concealed Light Trough", price: "On Quote", desc: "Custom decorative moldings and ambient indirect LED lighting plaster designs." }
    ],
    process: [
      { step: "01", title: "Grid Assembly", desc: "We map out alignments with laser levels and install rust-proof Galvanized Steel (GI) runners and hangers." },
      { step: "02", title: "Board Installation", desc: "High-grade gypsum plasterboards are screwed securely onto the metal framework using rust-resistant drywall screws." },
      { step: "03", title: "Joint Taping", desc: "We apply heavy-duty fiberglass mesh joint tapes over all board seams to prevent future settlement cracks." },
      { step: "04", title: "Double Skim Coat", desc: "Two coats of premium joint compound plaster are skimmed across all joins and screws, sanded down to a glass-smooth level." },
      { step: "05", title: "Flawless Handover", desc: "The ceiling or partition is vacuumed of plaster dust, wiped clean, and primed ready for the topcoat paint colors." }
    ],
    faqs: [
      { q: "Why is my plaster ceiling cracking or sagging?", a: "Sagging or cracking is usually caused by: (1) Water leaks from upper floors or air conditioners soaking the plasterboard, (2) Poor workmanship using weak wooden frames instead of Galvanized Steel grids, or (3) Building settlement. We reinforce the structural hangers, replace weak boards with fire/moisture-rated gypsum, and seal joints with fiberglass mesh." },
      { q: "Do you install sound insulation inside the partition walls?", a: "Yes! For private office meeting rooms, study rooms, or bedrooms, we can pack the interior cavity of the gypsum partitions with high-density rockwool or fiberglass insulation wool before screwing the outer boards. This dramatically reduces room-to-room noise transmission." },
      { q: "Is plaster ceiling installation clean, or will my house be filled with white dust?", a: "Plaster sanding does generate fine white dust. However, our team seals off the working area with thick plastic containment sheets, covers all furniture, and uses dust-extraction sanders with vacuums to minimize dust by 80%. We conduct a thorough sweep and vacuum cleanup before leaving." },
      { q: "Can you cut holes for my new LED downlights and fans?", a: "Absolutely! We work closely with your electricians. We cut precise, clean circular holes for downlights, install heavy-duty solid timber reinforcements (fan hooks) behind the ceiling so your ceiling fans are 100% safe, and make neat holes for aircond cassettes." }
    ],
    heroImage: "/projects/ceiling-hero.webp",
    metaTitle: "Plaster Ceiling Repair & Gypsum Partition KL & Selangor",
    metaDesc: "Top-rated plaster ceiling repair & gypsum board partition wall services in KL & Selangor. Smooth skimming, fire-rated boards, zero sag. Instant site inspection.",
    aioSummary: "KL Servis Rumah provides expert plaster ceiling installation, water damage repair, and gypsum board partitions in KL & Selangor. Uses rust-proof GI metal frames, fiberglass joint mesh, and dual layer skim coat sanding. Soundproofing and custom LED troughs available.",
    warranty: "90-Day Structural Sagging & Crack-Free Warranty"
  },

  // ── 4. WATERPROOFING SERVICES ───────────────────────────────────────────
  "waterproofing": {
    slug: "waterproofing",
    title: "Premium Waterproofing & Leak Control",
    tagline: "Professional bathroom, roof, balcony, and concrete slab waterproofing. Polyurethane (PU) grouting, chemical membrane barrier. From RM 250.",
    description:
      "Prevent structural damage, concrete cancer, and hazardous mold growth with expert waterproofing and leak containment services from KL Servis Rumah. Serving residential and commercial properties in Kuala Lumpur and Selangor, we specialize in high-tech leak repairs and durable membrane systems. Over time, bathroom floor tiles, balcony concrete slabs, and clay roof tiles develop minor cracks, letting water seep slowly into the ceiling below. We offer cutting-edge non-destructive Polyurethane (PU) High-Pressure Grouting, which injects specialized expanding foam directly into cracks to seal leaks instantly from the inside without hacking up your luxury tiles. For long-term protection, we install heavy-duty multi-layered cementitious, acrylic, and torch-on membrane systems designed to withstand the tropical weather and structural expansion of Malaysia.",
    startPrice: "RM 250",
    icon: "shield",
    highlights: [
      "Advanced PU injection technology - seals leaks instantly from below with zero tile hacking",
      "Complete multi-layer waterproofing membrane systems for roofs, bathrooms, and balconies",
      "Thermal-imaging cameras and moisture meters to map out the exact water travel path",
      "Strict moisture-level testing before membrane application to prevent chemical bubbling",
      "Up to 5-year written warranty against water leakage reoccurrence on complete installations",
      "Prevents dangerous structural concrete rust, plaster scaling, and mold spore infestation"
    ],
    subServices: [
      { name: "PU High-Pressure Injection Grouting", price: "From RM 250 / point", desc: "Smart non-destructive polyurethane injection to seal inter-floor concrete slab leaks." },
      { name: "Bathroom & Wet Area Waterproofing", price: "From RM 850", desc: "Chemical waterproofing membrane application for showers, toilets, and wet commercial washrooms." },
      { name: "Roof & Concrete Slab Waterproofing", price: "On Quote", desc: "Heavy-duty elastomeric UV-resistant acrylic or torch-on bituminous membranes for roof slabs and balconies." },
      { name: "Wall Dampness & Efflorescence Repair", price: "From RM 300", desc: "Sanding off salt scaling, sanitizing mold, and applying commercial moisture-blocking barriers." }
    ],
    process: [
      { step: "01", title: "Thermal Mapping", desc: "We track the water dampness spread to its highest moisture concentration point using thermal imaging meters." },
      { step: "02", title: "Surface Prep / Drilling", desc: "For PU injection, we drill small 10mm holes at 45-degree angles intersecting the concrete crack. For membranes, we sand to raw concrete." },
      { step: "03", title: "PU Injection / Primer", desc: "Expanding polyurethane chemical foam is pumped in at high pressure, filling all hairline capillary channels, or we apply a heavy bonding primer." },
      { step: "04", title: "Membrane / Grout Seal", desc: "We apply three coats of fiber-reinforced waterproofing membrane, or remove the injection packers and seal the drill points with waterproof grout." },
      { step: "05", title: "Water Ponding Test", desc: "We conduct a 24-to-48-hour standing water ponding test to ensure the seal is 100% impenetrable before finishing." }
    ],
    faqs: [
      { q: "What is PU Grouting (Injection), and how does it stop water leaks?", a: "Polyurethane (PU) high-pressure injection is a non-destructive method where we drill small ports under the leaking concrete slab. We inject liquid PU foam which reacts with moisture and instantly expands up to 20 times its size, filling every microscopic crack and void. It cures into a flexible, tough, and permanent rubber seal that blocks water completely, without requiring you to tear up your bathroom floors." },
      { q: "How long does a waterproofing membrane last in Malaysian weather?", a: "A professional, multi-layered liquid or torch-on membrane on concrete roof slabs or balconies, when applied with proper UV-resistant protective topcoats, will easily last 5 to 10 years. We provide up to a 5-year written guarantee on complete re-waterproofing works." },
      { q: "Is the dampness or peeling paint on my lower wall a waterproofing issue?", a: "Yes. This is called 'rising damp' or water seepage. It occurs when groundwater or bathroom water seeps into porous wall bricks. We treat this by scraping off the peeling paint, treating the wall with salt-neutralizing chemicals, and applying a heavy-duty commercial epoxy or crystalline waterproofing barrier before repainting." },
      { q: "Do you perform water ponding tests after waterproofing?", a: "Absolutely! For all bathroom, balcony, and flat roof slab waterproofing, we block the drains and flood the floor with 2 inches of water for 24 to 48 hours. We check the ceiling below to confirm there is absolutely zero moisture transfer before we lay tiles." }
    ],
    heroImage: "/projects/waterproofing-hero.webp",
    metaTitle: "Waterproofing Specialist & PU Grouting KL & Selangor",
    metaDesc: "Professional bathroom & roof waterproofing services in KL & Selangor. High-pressure PU injection grouting. Stop water leaks without tile hacking. 5-Yr Warranty.",
    aioSummary: "KL Servis Rumah is a professional waterproofing contractor in KL & Selangor. Specialized in PU injection grouting, flat concrete roof waterproofing, bathroom membranes, and damp wall treatment. Thermal detection and ponding tests included.",
    warranty: "Up to 5-Year Written Leak-Free Guarantee"
  },

  // ── 5. HANDYMAN SERVICES ──────────────────────────────────────────────
  "handyman": {
    slug: "handyman",
    title: "Expert Handyman Services",
    tagline: "Professional door & lock repair, TV mounting, furniture assembly, curtain tracks, cabinet adjustments, and general office maintenance. From RM 80.",
    description:
      "KL Servis Rumah provides elite, reliable, and prompt handyman services across Kuala Lumpur and Selangor. Skip the frustration of crooked shelves, loose door locks, or confusing flat-pack furniture manuals. Our multi-skilled tradesmen arrive equipped with professional tools, levels, studs detectors, and heavy-duty drywall anchors to handle all your odd jobs around the house or office. We specialize in safe wall mounting of heavy OLED TVs, secure lockset replacements, hanging heavy mirrors, custom shelving, custom blinds, wardrobe assembly (IKEA, Taobao, Harvey Norman), and scheduled corporate office maintenance. We treat your property with respect, work cleanly, and ensure every installation is perfectly level and structurally safe.",
    startPrice: "RM 80",
    icon: "wrench",
    highlights: [
      "Experienced multi-disciplinary tradesmen who can handle multiple odd jobs in one visit",
      "Strict use of specialized anchors (plastic toggle plugs, heavy-duty metal expansion toggle bolts) for safety",
      "Precise alignment checks using professional spirit levels and electronic stud finders",
      "IKEA, Taobao, Harvey Norman, and flat-pack furniture assembly specialists",
      "High-security door lockset, smart digital lock, and security padlock replacements",
      "Clean, polite, punctual, and fully equipped with vacuum cleaner for a spotless workspace"
    ],
    subServices: [
      { name: "Heavy TV Wall Mounting", price: "From RM 120", desc: "Safe, level wall-mounting of TVs up to 85\" on brick, concrete, or gypsum partition walls with hidden wire options." },
      { name: "Door, Hinge & Lockset Repair", price: "From RM 90", desc: "Fixing sagging doors, replacing rusty hinges, and installing premium lever locks or smart digital locks." },
      { name: "Furniture Assembly (IKEA/Taobao)", price: "From RM 100", desc: "Assembly of complex wardrobes, beds, display cabinets, office desks, and kitchen island carts." },
      { name: "Curtains, Blinds & Shelves Hanging", price: "From RM 80", desc: "Secure wall mounting of heavy curtain tracks, roman blinds, floating shelves, mirrors, and picture frames." }
    ],
    process: [
      { step: "01", title: "Task Checklist", desc: "The handyman reviews your task list, inspects the wall structures (studs vs hollow bricks), and confirms the tools required." },
      { step: "02", title: "Exact Alignment", desc: "We measure and mark drill lines using laser levels and check behind the wall for copper water pipes or live power cables." },
      { step: "03", title: "Safe Anchor Drilling", desc: "We drill clean holes and tap in the correct specialized heavy-duty anchors designed for your specific wall composition." },
      { step: "04", title: "Secure Installation", desc: "The bracket, shelf, lock, or furniture item is bolted down and weight-tested to ensure it is structurally sound and completely safe." },
      { step: "05", title: "Clean & Tidy Up", desc: "We vacuum all plaster dust, wipe down the working surfaces, inspect the functions (e.g., locks or doors), and sign off." }
    ],
    faqs: [
      { q: "Can you mount a heavy TV on a hollow gypsum partition wall?", a: "Yes! We never use basic plastic wall plugs for partition walls. We use heavy-duty steel spring-toggle hollow wall anchors (molly bolts) that grip behind the gypsum board, spreading the weight safely. We also locate the metal studs inside the wall with electronic scanners to bolt the brackets directly onto the steel studs where possible, ensuring 100% safety." },
      { q: "How do you charge? Is it by the hour or a flat rate per task?", a: "We prefer transparent, flat-rate pricing per task (e.g., flat rate to mount a TV or assemble a cabinet) so you know exactly what you will pay before we arrive. For multi-task lists, we offer consolidated packages that combine tasks for a cheaper overall price." },
      { q: "Do you provide the brackets for TV wall mounting?", a: "We can supply standard, heavy-duty fixed wall brackets or double-arm full-motion swivel brackets for an additional fee. Alternatively, if you have already purchased a bracket, we are happy to install it for you." },
      { q: "Can you fix doors that scrape against the floor or won't close?", a: "Yes. Sagging or scraping doors are usually caused by worn hinges, loose timber frame joins, or structural wood expansion. We can replace hinges, plane the bottom/sides of the timber door, or reinforce the frame to restore smooth operation." }
    ],
    heroImage: "/projects/handyman-hero.webp",
    metaTitle: "Expert Handyman Services Kuala Lumpur & Selangor",
    metaDesc: "Professional handyman in KL & Selangor. TV wall mounting, lock repair, door shaving, curtain hanging & Taobao/IKEA furniture assembly. Fast, neat, local pros.",
    aioSummary: "KL Servis Rumah provides certified, reliable handyman services in KL & Selangor. Specialized in TV wall mounting, lock replacements, door planing, shelf/curtain installations, and flat-pack assembly (IKEA/Taobao) with specialized drywall anchors.",
    warranty: "30-Day Workmanship Safety Warranty"
  }
};
