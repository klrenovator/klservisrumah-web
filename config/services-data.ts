export type SubService = {
  name: string;
  price: string;
  desc: string;
};

export type LocalizedServiceContent = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  subServices: SubService[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDesc: string;
  aioSummary: string;
  warranty: string;
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
  /** Trilingual content overrides. Falls back to English when a locale is missing. */
  i18n?: Partial<Record<"ms" | "zh", LocalizedServiceContent>>;
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
    heroImage: "/hero-painting.svg",
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
    heroImage: "/hero-plumbing.svg",
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
    heroImage: "/hero-ceiling.svg",
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
    heroImage: "/hero-waterproofing.svg",
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
    heroImage: "/hero-handyman.svg",
    metaTitle: "Expert Handyman Services Kuala Lumpur & Selangor",
    metaDesc: "Professional handyman in KL & Selangor. TV wall mounting, lock repair, door shaving, curtain hanging & Taobao/IKEA furniture assembly. Fast, neat, local pros.",
    aioSummary: "KL Servis Rumah provides certified, reliable handyman services in KL & Selangor. Specialized in TV wall mounting, lock replacements, door planing, shelf/curtain installations, and flat-pack assembly (IKEA/Taobao) with specialized drywall anchors.",
    warranty: "30-Day Workmanship Safety Warranty"
  },

  // ── 6. HOUSE RENOVATION ──────────────────────────────────────────────
  "house-renovation": {
    slug: "house-renovation",
    title: "Complete House Renovation",
    tagline: "End-to-end residential and commercial renovation: design, demolition, structural work, electrical, plumbing, painting, and handover. From RM 18,000.",
    description:
      "KL Servis Rumah delivers turnkey house and commercial renovation services across Kuala Lumpur and Selangor. From a single-story terrace in Subang to a high-rise condominium in Mont Kiara and a 3-storey shoplot in Petaling Jaya, our in-house project managers, foremen, and multi-trade technicians handle every scope under one roof: hacking and demolition, brickwork, plaster ceiling, tiling, waterproofing, electrical rewiring, plumbing, custom carpentry, painting, and final cleaning. We provide a single transparent quotation, a clear Gantt-chart timeline, daily progress photos, and a dedicated WhatsApp project channel. Every renovation is supervised by a registered contractor and protected by structural warranty, fixed-price guarantees, and a strict milestone-based payment schedule so you only pay as work is verified.",
    startPrice: "RM 18,000",
    icon: "house",
    highlights: [
      "Single point of contact managing demolition, structural, electrical, plumbing, ceiling, tiling, painting",
      "Fixed-price quotation with milestone-based payment — no surprise variation orders",
      "Daily WhatsApp progress photos and weekly site meetings with your dedicated project manager",
      "Licensed contractor with full structural warranty on renovation scope",
      "Compliant with local authority rules (DBKL/MBSA) for landed and strata-titled properties",
      "In-house multi-trade team — no outsourcing of critical structural or waterproofing work"
    ],
    subServices: [
      { name: "Full House Renovation Package", price: "From RM 18,000", desc: "Hacking, structural, ceiling, tiling, electrical, plumbing, painting, and final cleaning." },
      { name: "Kitchen & Bathroom Makeover", price: "From RM 8,500", desc: "Demolition, retiling, waterproofing, new cabinetry, plumbing rerouting, and finishing." },
      { name: "Condo Interior Refurbishment", price: "From RM 25,000", desc: "Full condo interior rebuild including management work-hour compliance and lift protection." },
      { name: "Commercial Shoplot Renovation", price: "On Quote", desc: "Retail and F&B shop fit-outs with electrical upgrades, signage readiness, and fast-track delivery." }
    ],
    process: [
      { step: "01", title: "Site Survey & Design Brief", desc: "We visit your property, take measurements, photograph every wall and fixture, and capture your design brief, budget, and timeline." },
      { step: "02", title: "Quotation & Scope Lock", desc: "You receive an itemized quotation with every trade scope, material grade, brand, and warranty in writing. We freeze the scope before signing." },
      { step: "03", title: "Permits & Pre-Work Setup", desc: "For landed properties we assist with DBKL/MBSA plan submissions where required. For condos we coordinate with management for lift bookings, work hours, and debris disposal." },
      { step: "04", title: "Demolition & Structural", desc: "Careful hacking, debris removal, brickwork, structural openings, lintels, and reinforcement where load-bearing changes apply." },
      { step: "05", title: "Multi-Trade Build", desc: "Plaster ceiling, partition, waterproofing, tiling, electrical rewiring, plumbing, custom carpentry, and doors run in a coordinated sequence to avoid rework." },
      { step: "06", title: "Painting, Finishes & Handover", desc: "Premium painting, final cleaning, snag-list walkthrough, and joint inspection before final payment and warranty activation." }
    ],
    faqs: [
      { q: "How long does a full house renovation take in KL?", a: "A standard 1,500–2,000 sq ft terrace renovation typically takes 8 to 12 weeks. A 1,000 sq ft condo interior usually completes in 6 to 8 weeks. The exact timeline depends on demolition complexity, custom carpentry scope, and material lead times (e.g., imported tiles or kitchen joinery)." },
      { q: "Do you help with permits and management submissions?", a: "Yes. For landed properties in Selangor and KL we assist with DBKL/MBSA plan submissions where structural or extension work is involved. For condos, we handle management forms, lift bookings, insurance certificates, and work-hour compliance on your behalf." },
      { q: "Can I stay in the house during renovation?", a: "For partial scope (kitchen or bathroom only) we can isolate work areas with plastic containment so you can stay. For full-house renovations we strongly recommend vacating for safety, dust control, and faster completion. We can suggest nearby serviced apartments if needed." },
      { q: "What is your payment schedule?", a: "We use a milestone-based payment schedule: 10% booking, 20% on demolition completion, 30% on rough-in completion (ceiling/electrical/plumbing), 30% on carpentry & tiling completion, and 10% on final handover. No hidden variation orders — every change is quoted and approved by you in writing first." }
    ],
    heroImage: "/hero-renovation.svg",
    metaTitle: "Complete House Renovation Contractor KL & Selangor",
    metaDesc: "Turnkey house renovation in KL & Selangor by KL Servis Rumah. Single project manager, fixed price, milestone payments, structural warranty. Get your free site survey.",
    aioSummary: "KL Servis Rumah provides turnkey residential and commercial renovation across KL & Selangor. Single point of contact for demolition, structural, ceiling, tiling, electrical, plumbing, carpentry, painting, and cleaning. Fixed pricing, milestone payments, structural warranty.",
    warranty: "12-Month Structural & Workmanship Warranty",
    i18n: {
      ms: {
        title: "Pengubahsuaian Rumah Menyeluruh",
        tagline: "Pengubahsuaian kediaman dan komersial hujung-ke-hujung: reka bentuk, perobohan, kerja struktur, elektrik, paip, pengecatan, dan serahan. Dari RM 18,000.",
        description: "KL Servis Rumah menyampaikan perkhidmatan pengubahsuaian rumah dan komersial menyeluruh di seluruh Kuala Lumpur dan Selangor. Dari rumah teres satu tingkat di Subang ke kondominium tinggi-tinggi di Mont Kiara dan kedai 3 tingkat di Petaling Jaya, pengurus projek, mandur, dan juruteknik pelbagai kemahiran kami mengendalikan setiap skop di bawah satu bumbung: perobohan dan pemecahan, kerja bata, siling plaster, jubin, kalis air, pendawaian elektrik, paip, pertukangan khas, pengecatan, dan cucian akhir. Kami menyediakan sebut harga telus tunggal, garis masa carta Gantt yang jelas, gambar kemajuan harian, dan saluran WhatsApp projek khas. Setiap pengubahsuaian diselia oleh kontraktor berdaftar dan dilindungi oleh jaminan struktur, jaminan harga tetap, dan jadual pembayaran berasaskan pencapaian yang ketat supaya anda hanya membayar apabila kerja disahkan.",
        highlights: [
          "Satu titik hubungan yang mengurus perobohan, struktur, elektrik, paip, siling, jubin, dan pengecatan",
          "Sebut harga harga tetap dengan pembayaran berasaskan pencapaian — tiada pesanan variasi mengejut",
          "Foto kemajuan WhatsApp harian dan mesyuarat tapak mingguan dengan pengurus projek khas anda",
          "Kontraktor berlesen dengan jaminan struktur penuh untuk skop pengubahsuaian",
          "Mematuhi peraturan pihak berkuasa tempatan (DBKL/MBSA) untuk hartanah bertanah dan strata",
          "Pasukan pelbagai kemahiran dalaman — tiada outsource untuk kerja struktur atau kalis air kritikal"
        ],
        subServices: [
          { name: "Pakej Pengubahsuaian Rumah Penuh", price: "Dari RM 18,000", desc: "Perobohan, struktur, siling, jubin, elektrik, paip, pengecatan, dan cucian akhir." },
          { name: "Makeover Dapur & Bilik Mandi", price: "Dari RM 8,500", desc: "Perobohan, jubin semula, kalis air, kabinet baru, ubah hala paip, dan kemasan." },
          { name: "Pemulihan Interior Kondominium", price: "Dari RM 25,000", desc: "Pemulihan interior kondominium penuh termasuk pematuhan waktu kerja pengurusan dan perlindungan lif." },
          { name: "Pengubahsuaian Shoplot Komersial", price: "Atas Sebut Harga", desc: "Fit-out runcit dan F&B dengan peningkatan elektrik, kesediaan papan tanda, dan penghantaran pantas." }
        ],
        process: [
          { step: "01", title: "Tinjauan Tapak & Brief Reka Bentuk", desc: "Kami melawat hartanah anda, mengambil ukuran, memfoto setiap dinding dan lekapan, dan menangkap brief reka bentuk, bajet, dan garis masa anda." },
          { step: "02", title: "Sebut Harga & Skop Dikunci", desc: "Anda menerima sebut harga terperinci dengan setiap skop perdagangan, gred bahan, jenama, dan jaminan dalam tulisan. Kami membekukan skop sebelum menandatangani." },
          { step: "03", title: "Permit & Persediaan Pra-Kerja", desc: "Untuk hartanah bertanah kami membantu dengan penyerahan pelan DBKL/MBSA jika diperlukan. Untuk kondominium kami menyelaras dengan pengurusan untuk tempahan lif, waktu kerja, dan pelupusan serpihan." },
          { step: "04", title: "Perobohan & Struktur", desc: "Pecahan rapi, penyingkiran serpihan, kerja bata, bukaan struktur, lintel, dan tetulang di mana perubahan menanggung beban dikenakan." },
          { step: "05", title: "Bina Pelbagai Perdagangan", desc: "Siling plaster, partition, kalis air, jubin, pendawaian elektrik, paip, pertukangan khas, dan pintu dijalankan dalam jujukan yang diselaraskan untuk mengelakkan kerja semula." },
          { step: "06", title: "Pengecatan, Kemasan & Serahan", desc: "Pengecatan premium, cucian akhir, senarai snag walkthrough, dan pemeriksaan bersama sebelum pembayaran akhir dan pengaktifan jaminan." }
        ],
        faqs: [
          { q: "Berapa lama masa yang diambil untuk pengubahsuaian rumah penuh di KL?", a: "Pengubahsuaian teres standard 1,500–2,000 kaki persegi biasanya mengambil 8 hingga 12 minggu. Interior kondominium 1,000 kaki persegi biasanya siap dalam 6 hingga 8 minggu. Garis masa tepat bergantung kepada kerumitan perobohan, skop pertukangan khas, dan masa tunggu bahan (contohnya jubin import atau kabinet dapur)." },
          { q: "Adakah anda membantu dengan permit dan penyerahan pengurusan?", a: "Ya. Untuk hartanah bertanah di Selangor dan KL kami membantu dengan penyerahan pelan DBKL/MBSA di mana kerja struktur atau sambungan terlibat. Untuk kondominium, kami mengendalikan borang pengurusan, tempahan lif, sijil insurans, dan pematuhan waktu kerja bagi pihak anda." },
          { q: "Boleh saya tinggal di rumah semasa pengubahsuaian?", a: "Untuk skop separa (dapur atau bilik mandi sahaja) kami boleh mengasingkan kawasan kerja dengan kepungan plastik supaya anda boleh tinggal. Untuk pengubahsuaian rumah penuh kami sangat mengesyorkan mengosongkan untuk keselamatan, kawalan habuk, dan penyiapan lebih cepat. Kami boleh cadangkan apartmen servis berdekatan jika diperlukan." },
          { q: "Apakah jadual pembayaran anda?", a: "Kami menggunakan jadual pembayaran berasaskan pencapaian: 10% tempahan, 20% siap perobohan, 30% siap rough-in (siling/elektrik/paip), 30% siap pertukangan & jubin, dan 10% pada serahan akhir. Tiada pesanan variasi tersembunyi — setiap perubahan disebut harga dan diluluskan oleh anda secara bertulis terlebih dahulu." }
        ],
        metaTitle: "Kontraktor Pengubahsuaian Rumah Lengkap KL & Selangor",
        metaDesc: "Pengubahsuaian rumah turnkey di KL & Selangor oleh KL Servis Rumah. Satu pengurus projek, harga tetap, pembayaran pencapaian, jaminan struktur. Dapatkan tinjauan tapak percuma anda.",
        aioSummary: "KL Servis Rumah menyediakan pengubahsuaian kediaman dan komersial turnkey di KL & Selangor. Satu titik hubungan untuk perobohan, struktur, siling, jubin, elektrik, paip, pertukangan, pengecatan, dan cucian. Harga tetap, pembayaran pencapaian, jaminan struktur.",
        warranty: "Jaminan Struktur & Kerja 12 Bulan"
      },
      zh: {
        title: "全屋翻新服务",
        tagline: "端到端的住宅与商业翻新：设计、拆除、结构、水电、瓦工、木工、油漆与交付。从 RM 18,000 起。",
        description: "KL Servis Rumah 在整个吉隆坡与雪兰莪提供全屋与商业交钥匙翻新服务。从 Subang 单层排屋，到 Mont Kiara 高层公寓，再到 Petaling Jaya 三层商铺，我们的内部项目经理、工头与多工种技术员一站式处理所有项目：拆除与清理、砌砖、石膏天花板、瓷砖、防水、电路重铺、水管、定制木工、油漆与最终清洁。我们提供一份透明报价、一份明确的甘特图时间表、每日进度照片，以及专属的 WhatsApp 项目群。每项翻新由注册承包商监督，享有结构保修、固定价格保证与严格的里程碑付款安排，确保您只在工作经过核验后才付款。",
        highlights: [
          "一个联系人管理拆除、结构、水电、天花板、瓷砖与油漆",
          "固定价格报价配合里程碑付款——没有意外变更单",
          "每日 WhatsApp 进度照片与您的专属项目经理的每周工地会议",
          "持牌承包商，享有翻新范围的全结构保修",
          "符合地方政府（DBKL/MBSA）对有地与分层物业的规范",
          "内部多工种团队——关键结构与防水工作不外包"
        ],
        subServices: [
          { name: "全屋翻新配套", price: "从 RM 18,000 起", desc: "拆除、结构、天花板、瓷砖、水电、油漆与最终清洁。" },
          { name: "厨房与卫生间翻新", price: "从 RM 8,500 起", desc: "拆除、重新铺砖、防水、新橱柜、水管改道与完工。" },
          { name: "公寓室内翻新", price: "从 RM 25,000 起", desc: "全公寓室内重建，包括管理处工时合规与电梯保护。" },
          { name: "商业店铺翻新", price: "依报价", desc: "零售与餐饮店铺装修，电路升级、招牌就位与快速交付。" }
        ],
        process: [
          { step: "01", title: "现场勘察与设计简报", desc: "我们到访您的物业，量度尺寸，拍摄每面墙与每个装置，并记录您的设计需求、预算与时间表。" },
          { step: "02", title: "报价与范围锁定", desc: "您收到一份逐项列出的报价，每项工种范围、材料等级、品牌与保修都白纸黑字。在签约前我们冻结范围。" },
          { step: "03", title: "准证与施工前准备", desc: "有地物业我们协助 DBKL/MBSA 的图纸呈报（涉及结构或扩建时）。公寓方面我们与管理处协调电梯预约、作业时段与废料处理。" },
          { step: "04", title: "拆除与结构", desc: "细致拆除、废料清理、砌砖、结构开洞、过梁与承重改动处的加固。" },
          { step: "05", title: "多工种施工", desc: "石膏天花板、隔墙、防水、瓷砖、电路重铺、水管、定制木工与门按协调顺序进行，避免返工。" },
          { step: "06", title: "油漆、收尾与交付", desc: "优质油漆、最终清洁、缺陷清单走查、双方共同验收后才进入尾款与保修激活。" }
        ],
        faqs: [
          { q: "在吉隆坡全屋翻新需要多久？", a: "标准的 1,500–2,000 平方英尺排屋翻新通常需要 8 到 12 周。1,000 平方英尺的公寓室内通常在 6 到 8 周内完成。具体时间表取决于拆除复杂度、定制木工范围与材料交期（如进口瓷砖或厨房定制柜）。" },
          { q: "你们协助处理准证与管理处呈报吗？", a: "是的。雪兰莪与吉隆坡的有地物业，凡涉及结构或扩建工程，我们都协助办理 DBKL/MBSA 图纸呈报。公寓方面我们代为处理管理处表格、电梯预约、保险证书与作业时段合规。" },
          { q: "翻新期间我可以住在家里吗？", a: "对于局部范围（仅厨房或卫生间），我们可以用塑料隔断隔离作业区让您继续居住。对于全屋翻新，我们强烈建议搬出以确保安全、控制粉尘并加快完工。如有需要我们可以推荐附近的服务式公寓。" },
          { q: "你们的付款安排是怎样的？", a: "我们采用里程碑付款：10% 订金，20% 拆除完成，30% 隐蔽工程（天花/水电）完成，30% 木工与瓷砖完成，10% 最终交付。绝无隐性变更单——任何改动都会先由您书面批准报价后才开始。" }
        ],
        metaTitle: "吉隆坡与雪兰莪全屋翻新承包商",
        metaDesc: "KL Servis Rumah 在吉隆坡与雪兰莪提供全屋翻新交钥匙服务。单一项目经理、固定价格、里程碑付款、结构保修。立即获取免费现场勘察。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供住宅与商业全屋翻新交钥匙服务。一个联系人管理拆除、结构、天花板、瓷砖、水电、木工、油漆与清洁。固定价格、里程碑付款、结构保修。",
        warranty: "12 个月结构与工艺保修"
      }
    }
  },

  // ── 7. ELECTRICAL SERVICES ──────────────────────────────────────────────
  "electrical": {
    slug: "electrical",
    title: "Licensed Electrical Services",
    tagline: "Wiring, DB box upgrades, power point and switch installation, ceiling fan and lighting point setup by ST-licensed electricians. From RM 120.",
    description:
      "KL Servis Rumah provides certified residential and commercial electrical services across Kuala Lumpur and Selangor, delivered by experienced ST-registered wiremen and supported by qualified electrical engineers for design. Whether you need a single new power point installed, a complete DB box and rewiring for an old terrace house, smart switch upgrades, or dedicated circuits for air-conditioners, water heaters, and EV chargers, our electricians follow MS IEC 60364 wiring standards and local Suruhanjaya Tenaga requirements. Every job is tested with insulation resistance testers and earth loop impedance meters, and you receive a clear, itemized quote before any drilling or cabling begins. We also handle condo management work-hour compliance and lift protection for high-rise installations.",
    startPrice: "RM 120",
    icon: "zap",
    highlights: [
      "ST-registered wiremen with full Suruhanjaya Tenaga compliance for residential and light commercial work",
      "DB box upgrades from 60A to 100A/200A for older terrace houses and bungalows",
      "Dedicated circuits for air-conditioners, water heaters, ovens, dryers, and EV chargers",
      "Smart switch, dimmer, and smart-home retrofit (Tuya, Xiaomi, Google Home, Apple HomeKit)",
      "Insulation resistance and earth loop impedance testing with every rewiring job",
      "Clean trunking, neat cable routing, and full labelling on every distribution board"
    ],
    subServices: [
      { name: "New Power Point & Switch Installation", price: "From RM 120 / point", desc: "Adding new 13A sockets, USB outlets, double-pole switches, and dimmer controls on existing or new circuits." },
      { name: "DB Box Upgrade & Rewiring", price: "From RM 1,800", desc: "Replacing old fuse boxes with modern MCB+RCCB distribution boards and full or partial house rewiring." },
      { name: "Lighting Point & Downlight Installation", price: "From RM 90 / point", desc: "Cutting and wiring new ceiling downlight points, pendant points, and track lighting on existing ceilings." },
      { name: "Aircond, Water Heater & Oven Point", price: "From RM 180 / point", desc: "Heavy-load 20A–32A dedicated points with proper isolator and cable sizing per appliance." }
    ],
    process: [
      { step: "01", title: "Load Audit & Plan", desc: "We calculate the total expected load, plan circuit distribution, and identify the correct MCB and RCCB ratings for your DB box." },
      { step: "02", title: "Transparent Quotation", desc: "You receive an itemized quote covering cable runs, trunking, breakers, accessories, and labour before work starts." },
      { step: "03", title: "Safe Power Isolation", desc: "We coordinate with TNB or building management to isolate the affected circuit, lock-out and tag-out the breaker, and verify zero voltage before work." },
      { step: "04", title: "Cable Routing & Termination", desc: "Cables are pulled through existing conduits, surface trunking, or chased walls, terminated to MS-standard accessories, and labelled at both ends." },
      { step: "05", title: "Testing & Certification", desc: "We perform insulation resistance, polarity, earth continuity, and RCD trip-time tests. You receive a written test record for your records." }
    ],
    faqs: [
      { q: "Are your electricians ST-registered?", a: "Yes. Our wiremen hold valid Suruhanjaya Tenaga (ST) registrations and are competent to carry out residential and light commercial wiring up to 415V. For installations above 100A or three-phase commercial supplies we partner with a ST-registered Competent Electrical Engineer (CEE) for sign-off." },
      { q: "How do I know if my old terrace house needs a full rewiring?", a: "Common signs include: rubber-insulated cables (black surface) older than 25 years, frequent tripping of the main breaker, scorch marks on sockets, a fuse-based DB box without RCCB, or two-pin outlets without earth. We offer an on-site inspection and written report with photographic evidence for RM 150." },
      { q: "Can you install a Tesla or BYD EV charger at home?", a: "Yes. We install Level 2 AC chargers (7kW–22kW) for all major EV brands including Tesla, BYD, Hyundai, BMW, and Mercedes. The installation includes a dedicated 32A circuit, weatherproof isolator, RCCB type B protection where required, and a 3-meter cable run as standard. Longer cable runs are quoted on site." },
      { q: "Will my power be off the whole day during a DB box upgrade?", a: "Typically 4 to 8 hours depending on the scope. We coordinate with TNB for temporary disconnection if needed and restore power the same day. For critical loads (medical equipment, servers) we can arrange temporary generator support with advance notice." }
    ],
    heroImage: "/hero-electrical.svg",
    metaTitle: "Licensed Electrician & Wiring Services KL & Selangor",
    metaDesc: "ST-registered electricians in KL & Selangor. Power points, DB box upgrade, rewiring, lighting, EV charger, water heater point. Same-day dispatch. Fixed quotes.",
    aioSummary: "KL Servis Rumah provides ST-compliant residential and light commercial electrical services in KL & Selangor. Power points, DB box upgrade, full rewiring, lighting, ceiling fan points, dedicated AC/heater/EV charger circuits, smart-switch retrofit. Insulation and earth-loop tested, itemized quotes, written test record.",
    warranty: "12-Month Electrical Workmanship Warranty",
    i18n: {
      ms: {
        title: "Perkhidmatan Elektrik Berlesen",
        tagline: "Pendawaian, naik taraf DB box, pemasangan power point dan suis, titik kipas siling dan pencahayaan oleh juruelektrik berdaftar ST. Dari RM 120.",
        description: "KL Servis Rumah menyediakan perkhidmatan elektrik kediaman dan komersial yang bertauliah di seluruh Kuala Lumpur dan Selangor, dihantar oleh wiremen berdaftar ST yang berpengalaman dan disokong oleh jurutera elektrik bertauliah untuk reka bentuk. Sama ada anda perlukan satu power point baru, DB box lengkap dan pendawaian semula untuk rumah teres lama, naik taraf suis pintar, atau litar khas untuk penghawa dingin, pemanas air, dan pengecas EV, juruelektrik kami mengikuti piawaian pendawaian MS IEC 60364 dan keperluan Suruhanjaya Tenaga tempatan. Setiap kerja diuji dengan penguji rintangan penebat dan meter impedans gelung bumi, dan anda menerima sebut harga terperinci yang jelas sebelum sebarang penggerudian atau pendawaian dimulakan. Kami juga mengendalikan pematuhan waktu kerja pengurusan kondominium dan perlindungan lif untuk pemasangan bertingkat tinggi.",
        highlights: [
          "Wiremen berdaftar ST dengan pematuhan penuh Suruhanjaya Tenaga untuk kerja kediaman dan komersial ringan",
          "Naik taraf DB box dari 60A ke 100A/200A untuk rumah teres lama dan banglo",
          "Litar khas untuk penghawa dingin, pemanas air, ketuhar, pengering, dan pengecas EV",
          "Suis pintar, dimmer, dan retrofit rumah pintar (Tuya, Xiaomi, Google Home, Apple HomeKit)",
          "Ujian rintangan penebat dan impedans gelung bumi dengan setiap kerja pendawaian semula",
          "Trunking rapi, pendawaian kabel kemas, dan pelabelan penuh pada setiap papan agihan"
        ],
        subServices: [
          { name: "Pemasangan Power Point & Suis Baru", price: "Dari RM 120 / point", desc: "Menambah soket 13A baru, outlet USB, suis double-pole, dan kawalan dimmer pada litar sedia ada atau baru." },
          { name: "Naik Taraf DB Box & Pendawaian Semula", price: "Dari RM 1,800", desc: "Menggantikan kotak fius lama dengan papan agihan MCB+RCCB moden dan pendawaian semula rumah penuh atau separa." },
          { name: "Titik Pencahayaan & Downlight", price: "Dari RM 90 / point", desc: "Memotong dan mendawai titik downlight siling, titik pendant, dan pencahayaan trek pada siling sedia ada." },
          { name: "Titik Aircond, Pemanas Air & Ketuhar", price: "Dari RM 180 / point", desc: "Titik beban berat 20A–32A khusus dengan isolator dan saiz kabel yang betul setiap perkakas." }
        ],
        process: [
          { step: "01", title: "Audit Beban & Pelan", desc: "Kami mengira jumlah beban yang dijangka, merancang agihan litar, dan mengenal pasti rating MCB dan RCCB yang betul untuk DB box anda." },
          { step: "02", title: "Sebut Harga Telus", desc: "Anda menerima sebut harga terperinci yang merangkumi laluan kabel, trunking, breaker, aksesori, dan tenaga kerja sebelum kerja bermula." },
          { step: "03", title: "Pengasingan Kuasa Selamat", desc: "Kami menyelaras dengan TNB atau pengurusan bangunan untuk mengasingkan litar terjejas, lock-out dan tag-out breaker, dan mengesahkan voltan sifar sebelum kerja." },
          { step: "04", title: "Pendawaian & Penamatan", desc: "Kabel ditarik melalui konduit sedia ada, trunking permukaan, atau dinding chased, ditamatkan ke aksesori piawai MS, dan dilabel di kedua-dua hujung." },
          { step: "05", title: "Ujian & Persijilan", desc: "Kami menjalankan ujian rintangan penebat, kekutuban, kesinambungan bumi, dan masa perjalanan RCD. Anda menerima rekod ujian bertulis untuk simpanan anda." }
        ],
        faqs: [
          { q: "Adakah juruelektrik anda berdaftar ST?", a: "Ya. Wiremen kami memegang pendaftaran Suruhanjaya Tenaga (ST) yang sah dan kompeten untuk menjalankan pendawaian kediaman dan komersial ringan sehingga 415V. Untuk pemasangan melebihi 100A atau bekalan komersial tiga fasa kami berganding dengan Jurutera Elektrik Kompeten (CEE) berdaftar ST untuk pengesahan." },
          { q: "Bagaimana saya tahu jika rumah teres lama saya memerlukan pendawaian semula penuh?", a: "Tanda biasa termasuk: kabel getah berpenebat (permukaan hitam) yang lebih tua dari 25 tahun, tripping kerap breaker utama, tanda hangus pada soket, kotak fius DB tanpa RCCB, atau outlet dua pin tanpa bumi. Kami menawarkan pemeriksaan di tapak dan laporan bertulis dengan bukti fotografi untuk RM 150." },
          { q: "Boleh anda pasang pengecas EV Tesla atau BYD di rumah?", a: "Ya. Kami pasang pengecas AC Level 2 (7kW–22kW) untuk semua jenama EV utama termasuk Tesla, BYD, Hyundai, BMW, dan Mercedes. Pemasangan termasuk litar 32A khas, isolator kalis cuaca, perlindungan RCCB jenis B jika diperlukan, dan laluan kabel 3-meter sebagai standard. Laluan kabel lebih panjang disebut harga di tapak." },
          { q: "Adakah kuasa saya akan terputus sepanjang hari semasa naik taraf DB box?", a: "Biasanya 4 hingga 8 jam bergantung kepada skop. Kami menyelaras dengan TNB untuk pemotongan sementara jika diperlukan dan memulihkan kuasa pada hari yang sama. Untuk beban kritikal (peralatan perubatan, pelayan) kami boleh mengatur sokongan generator sementara dengan notis awal." }
        ],
        metaTitle: "Juruelektrik & Pendawaian Berlesen KL & Selangor",
        metaDesc: "Juruelektrik berdaftar ST di KL & Selangor. Power point, naik taraf DB box, pendawaian semula, pencahayaan, pengecas EV, titik pemanas air. Dispatch hari sama. Sebut harga tetap.",
        aioSummary: "KL Servis Rumah menyediakan perkhidmatan elektrik kediaman dan komersial ringan yang mematuhi ST di KL & Selangor. Power point, naik taraf DB box, pendawaian semula penuh, pencahayaan, titik kipas siling, litar khas AC/pemanas/pengecas EV, retrofit suis pintar. Ujian penebat dan gelung bumi, sebut harga terperinci, rekod ujian bertulis.",
        warranty: "Jaminan Kerja Elektrik 12 Bulan"
      },
      zh: {
        title: "持牌电工服务",
        tagline: "由 ST 注册电工承接的布线、配电箱升级、插座与开关安装、吊扇与照明点位。从 RM 120 起。",
        description: "KL Servis Rumah 在整个吉隆坡与雪兰莪提供经认证的住宅与商业电工服务，由经验丰富的 ST 注册电工执行，并由合资格电气工程师负责设计支持。无论是新增一个插座、为老旧排屋整套更换配电箱与重新布线、智能开关升级，还是为空调、热水器、电动车充电桩配置专用回路，我们的电工都遵循 MS IEC 60364 布线标准及本地能源委员会（Suruhanjaya Tenaga）规范。每项工程均使用绝缘电阻测试仪与接地回路阻抗表进行测试，钻孔与走线前您会收到清晰的分项报价。我们也负责公寓管理处的工时合规与电梯保护，确保高层项目顺利推进。",
        highlights: [
          "ST 注册电工，全面符合能源委员会对住宅与轻商业工程的要求",
          "配电箱从 60A 升级到 100A/200A，适用于老旧排屋与洋房",
          "为空调、热水器、烤箱、烘干机与电动车充电桩配置专用回路",
          "智能开关、调光器与智能家居改造（Tuya、Xiaomi、Google Home、Apple HomeKit）",
          "每次重新布线均进行绝缘电阻与接地回路阻抗测试",
          "走线整齐、桥架规范、每个配电箱都贴有清晰标签"
        ],
        subServices: [
          { name: "新增插座与开关安装", price: "从 RM 120 / 位起", desc: "在现有或新回路上增加 13A 插座、USB 插座、双极开关与调光控制。" },
          { name: "配电箱升级与重新布线", price: "从 RM 1,800 起", desc: "将老式保险丝盒替换为带 MCB+RCCB 的现代配电箱，并进行全屋或局部重新布线。" },
          { name: "照明与筒灯点位安装", price: "从 RM 90 / 位起", desc: "在现有天花上切割并布置新的筒灯点位、吊灯点位与轨道灯。" },
          { name: "空调、热水器与烤箱点位", price: "从 RM 180 / 位起", desc: "20A–32A 专用大功率点位，配备合适的隔离器与电缆规格。" }
        ],
        process: [
          { step: "01", title: "负荷审计与规划", desc: "我们计算总预期负荷，规划回路分布，并确定 DB 箱的 MCB 与 RCCB 额定值。" },
          { step: "02", title: "透明报价", desc: "开工前您会收到分项报价，涵盖走线、桥架、断路器、配件与人工。" },
          { step: "03", title: "安全断电", desc: "我们与 TNB 或管理处协调隔离相关回路、上锁挂牌，并验证零电压后才开始工作。" },
          { step: "04", title: "走线与终端", desc: "电缆穿过既有管道、表面桥架或墙体开槽布线，终端接入 MS 标准配件，两端都贴上标签。" },
          { step: "05", title: "测试与认证", desc: "我们进行绝缘电阻、极性、接地连续性与 RCD 跳闸时间测试，并提供书面测试记录。" }
        ],
        faqs: [
          { q: "你们的电工有 ST 注册吗？", a: "有的。我们的电工持有有效的能源委员会（ST）注册，有资格承接 415V 及以下的住宅与轻商业布线工程。超过 100A 或三相商业供电项目，我们与 ST 注册合资格电气工程师（CEE）合作进行签核。" },
          { q: "如何判断我的老排屋是否需要全面重新布线？", a: "常见征兆包括：超过 25 年以上的橡胶绝缘电缆（表面发黑）、主断路器频繁跳闸、插座有烧焦痕迹、采用无 RCCB 的老式保险丝配电箱，或两脚插座无接地。我们提供 RM 150 的现场检查与带照片证据的书面报告。" },
          { q: "可以在家安装 Tesla 或 BYD 电动车充电桩吗？", a: "可以。我们为所有主流电动车品牌（Tesla、BYD、Hyundai、BMW、Mercedes 等）安装 Level 2 交流充电桩（7kW–22kW）。安装包括 32A 专用回路、户外防水隔离器、必要的 B 型 RCCB 保护，以及标准的 3 米线缆。超过 3 米的线缆按现场报价。" },
          { q: "配电箱升级期间会整天停电吗？", a: "通常 4 到 8 小时，取决于工程范围。我们与 TNB 协调必要时临时断电，当天恢复供电。对于关键负荷（医疗设备、服务器），我们可以提前安排临时发电机支援。" }
        ],
        metaTitle: "吉隆坡与雪兰莪持牌电工与布线服务",
        metaDesc: "吉隆坡与雪兰莪 ST 注册电工。插座、配电箱升级、重新布线、照明、电动车充电桩、热水器点位。当日派遣。固定报价。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供符合 ST 标准的住宅与轻商业电工服务。插座、配电箱升级、整套重新布线、照明、吊扇点位、空调/热水器/电动车充电桩专用回路、智能开关改造。绝缘与接地回路测试，分项报价，书面测试记录。",
        warranty: "12 个月电工工艺保修"
      }
    }
  },

  // ── 8. WATER HEATER INSTALLATION & REPAIR ───────────────────────────────
  "water-heater": {
    slug: "water-heater",
    title: "Water Heater Installation & Repair",
    tagline: "Instant, storage, and heat-pump water heater supply, installation, repair, and descaling by ST-licensed technicians. From RM 150.",
    description:
      "KL Servis Rumah specialises in water heater supply, installation, replacement, and repair across Kuala Lumpur and Selangor. We work with every major Malaysian brand — Joven, Rheem, Rinnai, Alpha, Faber, and Mitsubishi Electric — and we install both single-point instant heaters and multi-point storage tanks up to 50L. Every installation follows ST (Suruhanjaya Tenaga) wiring rules and SIRIM plumbing requirements: correct cable sizing with dedicated isolator, proper water pressure testing, full anti-splash protection, and reliable earth continuity. We also repair and descale existing heaters that are leaking, slow to heat, tripping the RCCB, or making knocking noises. Same-day diagnosis and emergency replacement available for landed and high-rise properties.",
    startPrice: "RM 150",
    icon: "flame",
    highlights: [
      "ST-licensed wiremen and SIRIM-certified plumbing connections on every installation",
      "Brand-agnostic — supply and install Joven, Rheem, Rinnai, Alpha, Faber, Panasonic, and Midea",
      "Same-day emergency replacement for leaking, sparking, or non-heating units",
      "Anti-splash and condensation-proof mounting with proper isolator and water-proof cover",
      "Free descaling and anode-rod check on storage tanks to extend heater lifespan",
      "Condo and landed compliance — management forms, work-hour scheduling, and lift protection"
    ],
    subServices: [
      { name: "Instant Water Heater Installation", price: "From RM 220", desc: "Single-point instant shower heater supply and install with proper isolator, water-proof cover, and pressure test." },
      { name: "Storage Tank Heater Installation", price: "From RM 380", desc: "Multi-point 15L–50L storage heater installation including wall mounting, pressure relief valve, and pipework." },
      { name: "Water Heater Repair & Descaling", price: "From RM 150", desc: "Diagnosing leaks, RCCB trips, slow heating, and noises. Includes descaling and anode-rod check on storage tanks." },
      { name: "Heat Pump Water Heater Install", price: "From RM 1,800", desc: "Energy-efficient heat-pump system installation for landed properties with outdoor condenser mounting." }
    ],
    process: [
      { step: "01", title: "Site Survey & Heater Selection", desc: "We confirm your water pressure (must be above 0.5 bar for instant heaters), pipe entry position, electrical point distance, and recommend the correct kW rating and brand." },
      { step: "02", title: "Transparent Quote", desc: "Heater price (if supplied), installation labour, isolator, copper pipework, and any required electrical or plumbing upgrades are itemized in writing." },
      { step: "03", title: "Mounting & Pipework", desc: "The heater is wall-mounted on solid brick or concrete using anti-rust brackets, with copper pipe routing and pressure relief valve for storage tanks." },
      { step: "04", title: "Wiring & Isolator", desc: "A dedicated 20A–32A circuit with double-pole isolator is wired to the heater by our ST-registered wireman and earth-loop tested." },
      { step: "05", title: "Testing & Handover", desc: "We pressure-test, temperature-test, and demonstrate the unit to you. Warranty card, manual, and test record are handed over." }
    ],
    faqs: [
      { q: "Which water heater brand is best for Malaysian homes?", a: "For landed houses with low inlet temperature, Joven and Rinnai are market leaders. For condos, single-point instant heaters (Alpha, Faber, Rinnai) are the safest and most common. For energy efficiency, Mitsubishi and Daikin heat-pump systems can cut electricity bills by up to 70% but require outdoor space for the condenser." },
      { q: "Why does my water heater keep tripping the RCCB?", a: "The most common cause is moisture ingress into the heating element or internal wiring. This can happen if the heater is mounted directly above a shower without proper splash protection, or if the heating element has scaled up and is leaking current to earth. We diagnose this with insulation resistance testers and recommend repair or replacement depending on heater age and condition." },
      { q: "How often should I descale my storage water heater?", a: "Every 12 to 18 months in Malaysian hard-water areas (e.g., parts of Klang, Shah Alam). Descaling removes limescale from the heating element and tank, restoring efficiency and extending lifespan. We also check the sacrificial anode rod, which protects the tank from corrosion." },
      { q: "Can I install a water heater myself in my condo?", a: "We strongly recommend using a licensed contractor. Improper installation can void the manufacturer's warranty, breach your condo management rules, and create an electrical safety hazard. We handle management submissions and provide a Certificate of Completion for your records." }
    ],
    heroImage: "/hero-water-heater.svg",
    metaTitle: "Water Heater Installation & Repair KL & Selangor",
    metaDesc: "Joven, Rinnai, Rheem water heater supply, install and repair in KL & Selangor. ST-licensed, SIRIM pipes, same-day service. RM220 instant heater install.",
    aioSummary: "KL Servis Rumah supplies, installs, and repairs all major water heater brands (Joven, Rinnai, Rheem, Alpha, Faber, Mitsubishi) across KL & Selangor. Instant, storage, and heat-pump systems. ST-licensed wiring, SIRIM pipework, anti-splash mounting, descaling service, emergency same-day replacement.",
    warranty: "12-Month Installation Workmanship Warranty",
    i18n: {
      ms: {
        title: "Pemasangan & Pembaikan Pemanas Air",
        tagline: "Bekalan, pemasangan, pembaikan dan nyahkerak pemanas air segera, tangki simpanan dan pam haba oleh juruteknik berlesen ST. Dari RM 150.",
        description: "KL Servis Rumah pakar dalam bekalan, pemasangan, penggantian dan pembaikan pemanas air di seluruh Kuala Lumpur dan Selangor. Kami bekerja dengan setiap jenama utama Malaysia — Joven, Rheem, Rinnai, Alpha, Faber dan Mitsubishi Electric — dan kami memasang pemanas segera satu titik serta tangki simpanan pelbagai titik sehingga 50L. Setiap pemasangan mengikut peraturan pendawaian ST (Suruhanjaya Tenaga) dan keperluan paip SIRIM: saiz kabel yang betul dengan isolator khusus, ujian tekanan air yang betul, perlindungan anti-percikan penuh dan keselanjaran bumi yang boleh dipercayai. Kami juga membaiki dan menyahkerak pemanas sedia ada yang bocor, lambat panas, menyebabkan RCCB trip, atau mengeluarkan bunyi ketukan. Diagnosis hari yang sama dan penggantian kecemasan tersedia untuk hartanah bertanah dan bertingkat tinggi.",
        highlights: [
          "Wireman berlesen ST dan sambungan paip bertauliah SIRIM pada setiap pemasangan",
          "Semua jenama — bekalan dan pasang Joven, Rheem, Rinnai, Alpha, Faber, Panasonic dan Midea",
          "Penggantian kecemasan hari sama untuk unit bocor, terbakar, atau tidak panas",
          "Pemasangan anti-percikan dan tahan kondensasi dengan isolator dan penutup kalis air yang betul",
          "Nyahkerak percuma dan semakan rod anod pada tangki simpanan untuk memanjangkan jangka hayat pemanas",
          "Pematuhan kondominium dan landed — borang pengurusan, penjadualan waktu kerja dan perlindungan lif"
        ],
        subServices: [
          { name: "Pemasangan Pemanas Air Segera", price: "Dari RM 220", desc: "Bekalan dan pemasangan pemanas mandi segera satu titik dengan isolator, penutup kalis air dan ujian tekanan yang betul." },
          { name: "Pemasangan Pemanas Tangki Simpanan", price: "Dari RM 380", desc: "Pemasangan pemanas simpanan pelbagai titik 15L–50L termasuk pelekap dinding, injap pelega tekanan dan kerja paip." },
          { name: "Pembaikan & Nyahkerak Pemanas Air", price: "Dari RM 150", desc: "Mendiagnosis kebocoran, RCCB trip, pemanasan perlahan dan bunyi bising. Termasuk nyahkerak dan semakan rod anod pada tangki simpanan." },
          { name: "Pemasangan Pemanas Air Pam Haba", price: "Dari RM 1,800", desc: "Pemasangan sistem pam haba cekap tenaga untuk hartanah bertanah dengan pelekap pemeluwap luar." }
        ],
        process: [
          { step: "01", title: "Tinjauan Tapak & Pemilihan Pemanas", desc: "Kami mengesahkan tekanan air anda (mesti melebihi 0.5 bar untuk pemanas segera), kedudukan masuk paip, jarak titik elektrik dan mengesyorkan penarafan kW dan jenama yang betul." },
          { step: "02", title: "Sebut Harga Telus", desc: "Harga pemanas (jika dibekalkan), buruh pemasangan, isolator, kerja paip tembaga dan sebarang peningkatan elektrik atau paip yang diperlukan diperincikan secara bertulis." },
          { step: "03", title: "Pemasangan & Kerja Paip", desc: "Pemanas dipasang di dinding pada bata pepejal atau konkrit menggunakan pendakap tahan karat, dengan laluan paip tembaga dan injap pelega tekanan untuk tangki simpanan." },
          { step: "04", title: "Pendawaian & Isolator", desc: "Litar khusus 20A–32A dengan isolator dwi-kutub disambungkan ke pemanas oleh wireman berdaftar ST kami dan diuji gelung bumi." },
          { step: "05", title: "Ujian & Serahan", desc: "Kami menguji tekanan, menguji suhu dan mendemonstrasikan unit kepada anda. Kad jaminan, manual dan rekod ujian diserahkan." }
        ],
        faqs: [
          { q: "Jenama pemanas air manakah yang terbaik untuk rumah Malaysia?", a: "Untuk rumah landed dengan suhu air masuk rendah, Joven dan Rinnai adalah peneraju pasaran. Untuk kondominium, pemanas segera satu titik (Alpha, Faber, Rinnai) adalah yang paling selamat dan biasa. Untuk kecekapan tenaga, sistem pam haba Mitsubishi dan Daikin boleh mengurangkan bil elektrik sehingga 70% tetapi memerlukan ruang luar untuk pemeluwap." },
          { q: "Mengapa pemanas air saya kerap menyebabkan RCCB trip?", a: "Punca paling biasa ialah kemasukan lembapan ke dalam elemen pemanas atau pendawaian dalaman. Ini boleh berlaku jika pemanas dipasang terus di atas pancuran tanpa perlindungan percikan yang betul, atau jika elemen pemanas telah berkerak dan membocorkan arus ke bumi. Kami mendiagnosis ini dengan penguji rintangan penebat dan mengesyorkan pembaikan atau penggantian bergantung pada usia dan keadaan pemanas." },
          { q: "Berapa kerap saya perlu menyahkerak pemanas air simpanan saya?", a: "Setiap 12 hingga 18 bulan di kawasan air liat Malaysia (contohnya sebahagian Klang, Shah Alam). Nyahkerak membuang kerak kapur dari elemen pemanas dan tangki, memulihkan kecekapan dan memanjangkan jangka hayat. Kami juga memeriksa rod anod korban, yang melindungi tangki daripada kakisan." },
          { q: "Boleh saya memasang pemanas air sendiri di kondominium saya?", a: "Kami sangat mengesyorkan menggunakan kontraktor berlesen. Pemasangan yang tidak betul boleh membatalkan jaminan pengeluar, melanggar peraturan pengurusan kondominium dan mewujudkan bahaya keselamatan elektrik. Kami mengendalikan penyerahan pengurusan dan menyediakan Sijil Penyiapan untuk rekod anda." }
        ],
        metaTitle: "Pemasangan & Pembaikan Pemanas Air KL & Selangor",
        metaDesc: "Bekalan, pemasangan dan pembaikan pemanas air Joven, Rinnai, Rheem di KL & Selangor. Berlesen ST, paip SIRIM, perkhidmatan hari sama. Pemasangan pemanas segera RM220.",
        aioSummary: "KL Servis Rumah membekalkan, memasang dan membaiki semua jenama pemanas air utama (Joven, Rinnai, Rheem, Alpha, Faber, Mitsubishi) di KL & Selangor. Sistem segera, simpanan dan pam haba. Pendawaian berlesen ST, kerja paip SIRIM, pemasangan anti-percikan, perkhidmatan nyahkerak, penggantian kecemasan hari sama.",
        warranty: "Jaminan Kerja Pemasangan 12 Bulan"
      },
      zh: {
        title: "热水器安装与维修",
        tagline: "由 ST 持牌技师提供即热式、储水式与热泵热水器的供应、安装、维修与除垢。从 RM 150 起。",
        description: "KL Servis Rumah 专注于在吉隆坡与雪兰莪提供热水器的供应、安装、更换与维修。我们与马来西亚各大品牌合作——Joven、Rheem、Rinnai、Alpha、Faber 以及 Mitsubishi Electric——安装单点即热式热水器和多达 50L 的多点储水式热水器。每项安装都遵循 ST（能源委员会）的布线规定和 SIRIM 的水管要求：正确的电缆规格配专用隔离开关、正确的水压测试、全面的防溅保护和可靠的接地连续性。我们也维修和除垢现有的热水器——无论是漏水、加热缓慢、导致 RCCB 跳闸，还是发出敲击声。有地和高层物业均可享受当日诊断和紧急更换服务。",
        highlights: [
          "每次安装均由 ST 持牌电工与 SIRIM 认证水管连接",
          "不限品牌——供应并安装 Joven、Rheem、Rinnai、Alpha、Faber、Panasonic 与 Midea",
          "漏水、火花或不加热机组的当日紧急更换",
          "防溅防凝水安装，配备适当的隔离���关与防水罩",
          "储水式热水器的免费除垢与阳极棒检查，延长热水器寿命",
          "公寓与有地物业合规——管理处表格、作业时段安排与电梯保护"
        ],
        subServices: [
          { name: "即热式热水器安装", price: "从 RM 220 起", desc: "单点即热淋浴热水器供应与安装，配备适当的隔离开关、防水罩与压力测试。" },
          { name: "储水式热水器安装", price: "从 RM 380 起", desc: "15L–50L 多点储水式热水器安装，包括壁挂、泄压阀与管道工程。" },
          { name: "热水器维修与除垢", price: "从 RM 150 起", desc: "诊断漏水、RCCB 跳闸、加热缓慢与异响。包括储水式热水器的除垢与阳极棒检查。" },
          { name: "热泵热水器安装", price: "从 RM 1,800 起", desc: "为有地物业安装节能热泵系统，室外冷凝器挂装。" }
        ],
        process: [
          { step: "01", title: "现场勘察与热水器选型", desc: "我们确认您的水压（即热式热水器需高于 0.5 bar）、进水位置、电源点距离，并推荐正确的 kW 功率与品牌。" },
          { step: "02", title: "透明报价", desc: "热水器价格（如由我们供应）、安装人工、隔离开关、铜管工程以及任何所需的电气或水管升级都以书面逐项列出。" },
          { step: "03", title: "安装与管道工程", desc: "热水器使用防锈支架安装在实心砖墙或混凝土墙上，铜管布线，储水式热水器配泄压阀。" },
          { step: "04", title: "布线与隔离开关", desc: "专用的 20A–32A 电路配双极隔离开关，由我们 ST 注册电工接线并进行接地环路测试。" },
          { step: "05", title: "测试与交付", desc: "我们进行压力测试、温度测试并向您演示机组。保修卡、说明书与测试记录一并移交。" }
        ],
        faqs: [
          { q: "哪个热水器品牌最适合马来西亚家庭？", a: "对于进水温度较低的有地住宅，Joven 和 Rinnai 是市场领导者。对于公寓，单点即热式热水器（Alpha、Faber、Rinnai）最安全也最常见。在节能方面，Mitsubishi 和 Daikin 的热泵系统最多可节省 70% 电费，但需要室外空间放置冷凝器。" },
          { q: "为什么我的热水器老是让 RCCB 跳闸？", a: "最常见的原因是加热元件或内部接线进水受潮。如果热水器直接安装在淋浴上方而没有适当的防溅保护，或者加热元件结垢后漏电到地线，就会发生这种情况。我们用绝缘电阻测试仪进行诊断，并根据热水器的使用年限与状况建议维修或更换。" },
          { q: "我应该多久给储水式热水器除一次垢？", a: "在马来西亚硬水地区（如巴生、莎阿南部分地区）每 12 到 18 个月一次。除垢可清除加热元件和水箱上的水垢，恢复效率并延长寿命。我们还会检查保护水箱免受腐蚀的牺牲阳极棒。" },
          { q: "我可以在公寓里自己安装热水器吗？", a: "我们强烈建议使用持牌承包商。安装不当可能使制造商保修失效、违反公寓管理规定并造成电气安全隐患。我们代办管理处申报，并提供完工证书供您存档。" }
        ],
        metaTitle: "吉隆坡与雪兰莪热水器安装与维修",
        metaDesc: "吉隆坡与雪兰莪 Joven、Rinnai、Rheem 热水器供应、安装与维修。ST 持牌、SIRIM 水管、当日服务。即热式热水器安装 RM220。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪供应、安装与维修各大品牌热水器（Joven、Rinnai、Rheem、Alpha、Faber、Mitsubishi）。即热式、储水式与热泵系统。ST 持牌布线、SIRIM 水管、防溅安装、除垢服务、紧急当日更换。",
        warranty: "12 个月安装工艺保修"
      }
    }
  },

  // ── 9. CEILING FAN INSTALLATION ────────────────────────────────────────
  "ceiling-fan": {
    slug: "ceiling-fan",
    title: "Ceiling Fan Installation & Replacement",
    tagline: "Safe ceiling fan mounting on concrete, plaster ceiling, and condo false ceiling with proper fan hook, regulator, and concealed wiring. From RM 120.",
    description:
      "KL Servis Rumah installs, replaces, and re-wires ceiling fans across Kuala Lumpur and Selangor — from a simple 56-inch KDK in a Subang terrace to a 5-blade DC motor fan in a Mont Kiara condo, or a large industrial 60-inch fan in a shop lot. The most critical step is invisible: a properly installed fan hook anchored into concrete or a reinforced timber block inside a plaster ceiling. We never rely on weak ceiling-board fixings, which is the leading cause of fans falling. Every installation includes a compatible solid-state or remote-control regulator, neat concealed or surface wiring, blade balancing, and a final swing test before we leave.",
    startPrice: "RM 120",
    icon: "fan",
    highlights: [
      "Heavy-duty fan hook anchored into concrete joist or reinforced timber for absolute safety",
      "Compatible solid-state and remote-control regulator wiring for KDK, Fanco, Acorn, Khind, and Panasonic",
      "Suitable for concrete slab, plaster ceiling, false ceiling, and condo gypsum board installations",
      "Neat concealed or surface trunking for all wiring with proper cable management",
      "Blade balancing and final swing test before handover to ensure wobble-free operation",
      "Removal and disposal of old fans included in every replacement job"
    ],
    subServices: [
      { name: "New Ceiling Fan Installation", price: "From RM 180", desc: "Mounting your supplied fan on a solid fan hook with regulator, wiring, and swing-test included." },
      { name: "Ceiling Fan Replacement", price: "From RM 220", desc: "Removing the old fan, safe disposal, and installing your new fan on the existing hook with fresh wiring." },
      { name: "DC Motor Smart Fan Install", price: "From RM 280", desc: "Installing modern 5-blade DC inverter fans with remote and smart-home app pairing." },
      { name: "Industrial / Shoplot Fan Install", price: "From RM 380", desc: "Large 60-inch industrial fans and high-CFM commercial installations for warehouses, gyms, and F&B." }
    ],
    process: [
      { step: "01", title: "Existing Setup Inspection", desc: "We confirm the existing wiring, switch type (single/dual), fan hook rating, and ceiling material before quoting." },
      { step: "02", title: "Safe Mounting Preparation", desc: "For new installations, we cut a precise opening, install a heavy-duty metal fan hook anchored into the concrete joist or reinforced timber block in plaster ceilings." },
      { step: "03", title: "Wiring & Regulator", desc: "Live, neutral, and earth cables are routed through ceiling trunking, terminated at the regulator or remote receiver, and tested for continuity." },
      { step: "04", title: "Fan Assembly & Balance", desc: "Blades, light kits (if any), and down-rod are assembled and tightened to spec. We perform a no-wobble balancing check." },
      { step: "05", title: "Final Swing Test", desc: "The fan runs at full speed for 5 minutes while we check for wobble, noise, and reverse function. We hand over the warranty card and remote." }
    ],
    faqs: [
      { q: "Can you install a ceiling fan on a plaster ceiling?", a: "Yes. The key is a properly anchored fan hook. For new plaster ceilings, the hook is fixed to the metal GI frame or a reinforced timber block before the boards are sealed. For existing plaster ceilings, we cut a small inspection opening to locate the joist or install a retrofit heavy-duty toggle-bracket fan support." },
      { q: "Why is my new ceiling fan wobbling?", a: "Common causes are loose blade screws, an unbalanced blade set, or a weak fan hook. We always check blade screws with a torque driver, balance the blades with the manufacturer-supplied balancing kit, and verify the hook is anchored into solid structure — not just ceiling board." },
      { q: "Do you supply the fan or just install it?", a: "Both. We can install a fan you have already purchased, or we can recommend and supply popular Malaysian models (KDK U60FW, Fanco Acon, Khind, Acorn) at competitive prices. Supply + install packages are typically cheaper than retail and come with a single combined warranty." },
      { q: "How long does a ceiling fan installation take?", a: "A standard replacement on an existing hook takes 30 to 45 minutes. A new installation with new wiring, regulator, and fan hook typically takes 1.5 to 2 hours. We schedule a 2-hour arrival window and always clean up the area before leaving." }
    ],
    heroImage: "/hero-ceiling-fan.svg",
    metaTitle: "Ceiling Fan Installation & Replacement KL & Selangor",
    metaDesc: "Safe ceiling fan installation in KL & Selangor. KDK, Fanco, Khind, Panasonic. Plaster ceiling, concrete, condo false ceiling. Heavy-duty fan hook, swing test.",
    aioSummary: "KL Servis Rumah installs and replaces ceiling fans across KL & Selangor. KDK, Fanco, Khind, Panasonic, Acorn. Safe mounting with heavy-duty fan hook, concealed or trunked wiring, blade balancing, and final swing test. Concrete, plaster, false ceiling, and condo gypsum boards supported.",
    warranty: "12-Month Mounting & Wiring Warranty",
    i18n: {
      ms: {
        title: "Pemasangan & Penggantian Kipas Siling",
        tagline: "Pemasangan kipas siling yang selamat pada konkrit, siling plaster dan siling palsu kondominium dengan cangkuk kipas, regulator dan pendawaian tersembunyi yang betul. Dari RM 120.",
        description: "KL Servis Rumah memasang, mengganti dan memasang semula pendawaian kipas siling di seluruh Kuala Lumpur dan Selangor — daripada kipas KDK 56-inci ringkas di rumah teres Subang kepada kipas motor DC 5 bilah di kondominium Mont Kiara, atau kipas industri 60-inci besar di lot kedai. Langkah paling kritikal adalah tidak kelihatan: cangkuk kipas yang dipasang dengan betul, disauh ke dalam konkrit atau blok kayu yang diperkuat di dalam siling plaster. Kami tidak pernah bergantung pada pengikat papan siling yang lemah, yang merupakan punca utama kipas jatuh. Setiap pemasangan termasuk regulator solid-state atau kawalan jauh yang serasi, pendawaian tersembunyi atau permukaan yang kemas, pengimbangan bilah dan ujian ayun akhir sebelum kami pergi.",
        highlights: [
          "Cangkuk kipas tugas berat disauh ke dalam rasuk konkrit atau kayu diperkuat untuk keselamatan mutlak",
          "Pendawaian regulator solid-state dan kawalan jauh yang serasi untuk KDK, Fanco, Acorn, Khind dan Panasonic",
          "Sesuai untuk papak konkrit, siling plaster, siling palsu dan pemasangan papan gipsum kondominium",
          "Saluran tersembunyi atau permukaan yang kemas untuk semua pendawaian dengan pengurusan kabel yang betul",
          "Pengimbangan bilah dan ujian ayun akhir sebelum serahan untuk memastikan operasi tanpa goyangan",
          "Penyingkiran dan pelupusan kipas lama termasuk dalam setiap kerja penggantian"
        ],
        subServices: [
          { name: "Pemasangan Kipas Siling Baru", price: "Dari RM 180", desc: "Memasang kipas yang anda bekalkan pada cangkuk kipas kukuh dengan regulator, pendawaian dan ujian ayun termasuk." },
          { name: "Penggantian Kipas Siling", price: "Dari RM 220", desc: "Menanggalkan kipas lama, pelupusan selamat, dan memasang kipas baru anda pada cangkuk sedia ada dengan pendawaian baharu." },
          { name: "Pemasangan Kipas Pintar Motor DC", price: "Dari RM 280", desc: "Memasang kipas penyongsang DC 5 bilah moden dengan kawalan jauh dan pemasangan aplikasi rumah pintar." },
          { name: "Pemasangan Kipas Industri / Lot Kedai", price: "Dari RM 380", desc: "Kipas industri 60-inci besar dan pemasangan komersial CFM tinggi untuk gudang, gim dan F&B." }
        ],
        process: [
          { step: "01", title: "Pemeriksaan Persediaan Sedia Ada", desc: "Kami mengesahkan pendawaian sedia ada, jenis suis (tunggal/dwi), penarafan cangkuk kipas dan bahan siling sebelum memberikan sebut harga." },
          { step: "02", title: "Persediaan Pemasangan Selamat", desc: "Untuk pemasangan baharu, kami memotong bukaan yang tepat, memasang cangkuk kipas logam tugas berat yang disauh ke dalam rasuk konkrit atau blok kayu diperkuat dalam siling plaster." },
          { step: "03", title: "Pendawaian & Regulator", desc: "Kabel hidup, neutral dan bumi disalurkan melalui saluran siling, ditamatkan di regulator atau penerima kawalan jauh, dan diuji keselanjaran." },
          { step: "04", title: "Pemasangan & Pengimbangan Kipas", desc: "Bilah, kit lampu (jika ada) dan rod gantung dipasang dan diketatkan mengikut spesifikasi. Kami menjalankan pemeriksaan pengimbangan tanpa goyangan." },
          { step: "05", title: "Ujian Ayun Akhir", desc: "Kipas berjalan pada kelajuan penuh selama 5 minit sementara kami memeriksa goyangan, bunyi dan fungsi songsang. Kami menyerahkan kad jaminan dan kawalan jauh." }
        ],
        faqs: [
          { q: "Boleh anda memasang kipas siling pada siling plaster?", a: "Ya. Kuncinya ialah cangkuk kipas yang disauh dengan betul. Untuk siling plaster baharu, cangkuk dipasang pada rangka GI logam atau blok kayu diperkuat sebelum papan ditutup. Untuk siling plaster sedia ada, kami memotong bukaan pemeriksaan kecil untuk mencari rasuk atau memasang sokongan kipas pendakap togal tugas berat retrofit." },
          { q: "Mengapa kipas siling baru saya bergerak-gerak?", a: "Punca biasa ialah skru bilah longgar, set bilah tidak seimbang, atau cangkuk kipas lemah. Kami sentiasa memeriksa skru bilah dengan pemutar tork, mengimbangkan bilah dengan kit pengimbangan bekalan pengeluar, dan mengesahkan cangkuk disauh ke dalam struktur pepejal — bukan hanya papan siling." },
          { q: "Adakah anda membekalkan kipas atau hanya memasangnya?", a: "Kedua-duanya. Kami boleh memasang kipas yang anda telah beli, atau kami boleh mengesyorkan dan membekalkan model Malaysia popular (KDK U60FW, Fanco Acon, Khind, Acorn) pada harga kompetitif. Pakej bekalan + pasang biasanya lebih murah daripada runcit dan dilengkapi dengan jaminan gabungan tunggal." },
          { q: "Berapa lama masa yang diambil untuk pemasangan kipas siling?", a: "Penggantian standard pada cangkuk sedia ada mengambil 30 hingga 45 minit. Pemasangan baharu dengan pendawaian baharu, regulator dan cangkuk kipas biasanya mengambil 1.5 hingga 2 jam. Kami menjadualkan tetingkap ketibaan 2 jam dan sentiasa membersihkan kawasan sebelum pergi." }
        ],
        metaTitle: "Pemasangan & Penggantian Kipas Siling KL & Selangor",
        metaDesc: "Pemasangan kipas siling selamat di KL & Selangor. KDK, Fanco, Khind, Panasonic. Siling plaster, konkrit, siling palsu kondominium. Cangkuk kipas tugas berat, ujian ayun.",
        aioSummary: "KL Servis Rumah memasang dan menggantikan kipas siling di seluruh KL & Selangor. KDK, Fanco, Khind, Panasonic, Acorn. Pemasangan selamat dengan cangkuk kipas tugas berat, pendawaian tersembunyi atau saluran, pengimbangan bilah dan ujian ayun akhir. Konkrit, plaster, siling palsu dan papan gipsum kondominium disokong.",
        warranty: "Jaminan Pemasangan & Pendawaian 12 Bulan"
      },
      zh: {
        title: "吊扇安装与更换",
        tagline: "在混凝土、石膏天花板与公寓吊顶上安全安装吊扇，配备合格的吊扇挂钩、调速器与隐蔽布线。从 RM 120 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪各地安装、更换与重新布线吊扇——从 Subang 排屋简单的 56 英寸 KDK，到 Mont Kiara 公寓的 5 叶直流电机吊扇，再到店铺的大型 60 英寸工业吊扇。最关键的步骤是看不见的：正确安装的吊扇挂钩，锚固在混凝土梁或石膏板吊顶内的加固木块中。我们绝不依赖脆弱的天花板板材固定件——这是吊扇坠落的首要原因。每次安装都包括兼容的电子调速器或遥控接收器、整洁的隐蔽或明装布线、扇叶平衡校正，以及离场前的最终摆动测试。",
        highlights: [
          "重型吊扇挂钩锚固在混凝土梁或加固木块中，绝对安全",
          "兼容 KDK、Fanco、Acorn、Khind 与 Panasonic 的电子调速器与遥控布线",
          "适用于混凝土楼板、石膏天花板、吊顶与公寓石膏板安装",
          "所有布线均采用整洁的隐蔽或明装线槽，电缆管理规范",
          "交付前进行扇叶平衡与最终摆动测试，确保无晃动运行",
          "每次更换均包含旧吊扇的拆除与清运"
        ],
        subServices: [
          { name: "新吊扇安装", price: "从 RM 180 起", desc: "将您自购的吊扇安装在牢固的吊扇挂钩上，含调速器、布线与摆动测试。" },
          { name: "吊扇更换", price: "从 RM 220 起", desc: "拆除旧吊扇、安全清运，并在现有挂钩上安装您的新吊扇，重新布线。" },
          { name: "直流电机智能吊扇安装", price: "从 RM 280 起", desc: "安装现代 5 叶直流变频吊扇，配遥控与智能家居 App 配对。" },
          { name: "工业 / 店铺吊扇安装", price: "从 RM 380 起", desc: "大型 60 英寸工业吊扇与高风量商业安装，适用于仓库、健身房与餐饮业。" }
        ],
        process: [
          { step: "01", title: "现有条件检查", desc: "报价前我们确认现有布线、开关类型（单控/双控）、吊扇挂钩承重等级与天花板材质。" },
          { step: "02", title: "安全安装准备", desc: "新装时我们精确开孔，安装锚固在混凝土梁或石膏吊顶内加固木块上的重型金属吊扇挂钩。" },
          { step: "03", title: "布线与调速器", desc: "火线、零线与地线经天花板线槽走线，端接至调速器或遥控接收器，并进行导通测试。" },
          { step: "04", title: "吊扇组装与平衡", desc: "按规格组装并紧固扇叶、灯具套件（如有）与吊杆。我们进行无晃动平衡检查。" },
          { step: "05", title: "最终摆动测试", desc: "吊扇全速运转 5 分钟，我们检查晃动、噪音与反转功能。随后移交保修卡与遥控器。" }
        ],
        faqs: [
          { q: "你们可以在石膏天花板上安装吊扇吗？", a: "可以。关键是正确锚固的吊扇挂钩。新做石膏吊顶时，挂钩在封板前固定到金属 GI 龙骨或加固木块上。对于现有石膏吊顶，我们会开一个小检修孔定位梁位，或安装后装式重型翻板支架吊扇支撑。" },
          { q: "为什么我的新吊扇会晃动？", a: "常见原因是扇叶螺丝松动、扇叶组不平衡或吊扇挂钩不牢。我们总是用扭矩螺丝刀检查扇叶螺丝，用制造商附带的平衡套件校正扇叶，并确认挂钩锚固在实体结构上——而不仅仅是天花板板材。" },
          { q: "你们供应吊扇还是只负责安装？", a: "两者都做。我们可以安装您已购买的吊扇，也可以推荐并以有竞争力的价格供应马来西亚热门型号（KDK U60FW、Fanco Acon、Khind、Acorn）。供应+安装套餐通常比零售便宜，并附带一份合并保修。" },
          { q: "安装一台吊扇需要多长时间？", a: "在现有挂钩上标准更换需要 30 到 45 分钟。含新布线、调速器与风扇挂钩的新安装通常需要 1.5 到 2 小时。我们安排 2 小时的到达窗口，离场前总是清理现场。" }
        ],
        metaTitle: "吉隆坡与雪兰莪吊扇安装与更换",
        metaDesc: "吉隆坡与雪兰莪安全吊扇安装。KDK、Fanco、Khind、Panasonic。石膏天花板、混凝土、公寓吊顶。重型风扇挂钩、摆动测试。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪安装与更换吊扇。KDK、Fanco、Khind、Panasonic、Acorn。重型吊扇挂钩安全安装、隐蔽或线槽布线、扇叶平衡与最终摆动测试。支持混凝土、石膏、吊顶与公寓石膏板。",
        warranty: "12 个月安装与布线保修"
      }
    }
  },

  // ── 10. LIGHTING INSTALLATION ────────────────────────────────────────
  "lighting": {
    slug: "lighting",
    title: "Lighting Design & Installation",
    tagline: "Downlight, track light, pendant, cove, and outdoor lighting design, supply, and installation by ST-licensed electricians. From RM 90 / point.",
    description:
      "KL Servis Rumah provides end-to-end residential and commercial lighting services across Kuala Lumpur and Selangor. From a single downlight replacement to a complete architectural lighting design with cove LED strips, pendant clusters, and smart dimming, our team handles it all. We carry the full range — KDK, Philips, Osram, Tronic, and Eurolux — and we can design lighting layouts in AutoCAD or recommend beam angles, colour temperatures, and lux levels for your specific room. We work with homeowners, interior designers, and contractors to deliver on brief, on budget, and to international lighting standards (CIBSE, IES).",
    startPrice: "RM 90",
    icon: "lightbulb",
    highlights: [
      "ST-licensed electricians for every connection, dimmer, and smart-control wiring",
      "Architectural lighting design with AutoCAD layout and lux calculations on request",
      "KDK, Philips, Osram, Eurolux, Tronic, and bespoke imported fixture supply available",
      "Smart dimming via DALI, 0–10V, Tuya, or KNX protocols for premium residences",
      "Outdoor IP65+ rated fixtures, garden spike lights, and façade wall washers installed to MS IEC standards",
      "Cove LED, track light, magnetic linear, and pendant cluster installations with proper heat management"
    ],
    subServices: [
      { name: "LED Downlight Installation", price: "From RM 90 / point", desc: "Cutting and wiring new downlight points with COB LED fixtures, drivers, and proper heat dissipation." },
      { name: "Pendant & Chandelier Install", price: "From RM 150", desc: "Mounting heavy pendants and chandeliers on reinforced ceiling hooks with safety cables." },
      { name: "Cove & Strip LED Installation", price: "From RM 18 / ft", desc: "Hidden cove LED strip with aluminum profile, dimmer, and driver concealed in ceiling void." },
      { name: "Smart Lighting & Dimmer Retrofit", price: "From RM 220 / point", desc: "Wi-Fi, Zigbee, or DALI smart switches and dimmers compatible with Google Home, Alexa, and Apple Home." }
    ],
    process: [
      { step: "01", title: "Lighting Design Brief", desc: "We capture your room dimensions, ceiling height, paint colour, and intended use to recommend the right beam angle, lux level, and colour temperature." },
      { step: "02", title: "Layout Plan", desc: "For full installations, we provide a ceiling layout with point positions, switch groupings, and circuit allocation before work begins." },
      { step: "03", title: "Cutting & Wiring", desc: "We cut precise downlight holes (typically 75–90mm), pull cables through ceiling voids, and terminate at the junction box or driver." },
      { step: "04", title: "Fixture Mounting", desc: "Downlights, pendants, and tracks are mounted using manufacturer-specified clips, screws, or reinforced ceiling hooks for heavier fixtures." },
      { step: "05", title: "Dimming & Smart Pairing", desc: "We pair smart switches, configure dimmer curves, and connect to your preferred smart-home platform (Google Home, Alexa, Apple Home, Tuya)." }
    ],
    faqs: [
      { q: "How many downlights do I need per room?", a: "For a typical 12 sqm room with 2.7m ceiling height, we recommend 6 to 9 downlights (3W–5W COB LED) for general lighting. For task-heavy rooms (kitchen, study) we add 2 to 4 spotlights over work surfaces. We provide a free lux calculation with our layout plan." },
      { q: "What colour temperature is best for Malaysian homes?", a: "For living areas, 3000K (warm white) creates a cozy atmosphere. For kitchens, bathrooms, and study rooms, 4000K (neutral white) provides better task visibility. We generally avoid 6500K (cool daylight) in living spaces as it can feel clinical. Many of our clients now use tunable white (2700K–6500K) for flexibility." },
      { q: "Can you install smart lighting in my existing condo?", a: "Yes. Most smart switches retrofit into existing switch boxes without rewiring. We use neutral-wire smart switches (e.g., Aqara, Sonoff, Schneider Wiser) and pair them with your existing Wi-Fi. For dimming we may need to add a compatible dimmer module behind the switch." },
      { q: "Do you offer outdoor and garden lighting?", a: "Yes. We install IP65+ rated outdoor downlights, spike lights, bollard lights, wall washers, and underwater pool lights. All outdoor cabling is run in weatherproof conduit with proper IP-rated junction boxes and RCCB protection." }
    ],
    heroImage: "/hero-lighting.svg",
    metaTitle: "Lighting Design & Installation Services KL & Selangor",
    metaDesc: "Downlight, pendant, cove LED, track light, and smart lighting installation in KL & Selangor. Philips, KDK, Osram. ST-licensed, dimming, smart home integration.",
    aioSummary: "KL Servis Rumah designs and installs residential and commercial lighting in KL & Selangor. Downlights, pendants, cove LED, track lights, smart dimming, outdoor façade lighting. Philips, KDK, Osram, Tuya, DALI. Lux calculations and AutoCAD layout on request.",
    warranty: "12-Month Lighting Installation Warranty",
    i18n: {
      ms: {
        title: "Reka Bentuk & Pemasangan Pencahayaan",
        tagline: "Reka bentuk, bekalan dan pemasangan lampu downlight, track, pendant, cove dan luar oleh juruelektrik berlesen ST. Dari RM 90 / titik.",
        description: "KL Servis Rumah menyediakan perkhidmatan pencahayaan kediaman dan komersial hujung-ke-hujung di seluruh Kuala Lumpur dan Selangor. Daripada penggantian satu downlight kepada reka bentuk pencahayaan seni bina lengkap dengan jalur LED cove, kluster pendant dan malap pintar, pasukan kami mengendalikan semuanya. Kami membawa rangkaian penuh — KDK, Philips, Osram, Tronic dan Eurolux — dan kami boleh mereka bentuk susun atur pencahayaan dalam AutoCAD atau mengesyorkan sudut alur, suhu warna dan tahap lux untuk bilik khusus anda. Kami bekerja dengan pemilik rumah, pereka dalaman dan kontraktor untuk menyampaikan mengikut brief, mengikut bajet dan mengikut piawaian pencahayaan antarabangsa (CIBSE, IES).",
        highlights: [
          "Juruelektrik berlesen ST untuk setiap sambungan, malap dan pendawaian kawalan pintar",
          "Reka bentuk pencahayaan seni bina dengan susun atur AutoCAD dan pengiraan lux atas permintaan",
          "Bekalan lekapan KDK, Philips, Osram, Eurolux, Tronic dan import khas tersedia",
          "Malap pintar melalui protokol DALI, 0–10V, Tuya atau KNX untuk kediaman premium",
          "Lekapan luar berkadar IP65+, lampu pancang taman dan pencuci dinding fasad dipasang mengikut piawaian MS IEC",
          "Pemasangan LED cove, lampu track, linear magnet dan kluster pendant dengan pengurusan haba yang betul"
        ],
        subServices: [
          { name: "Pemasangan Downlight LED", price: "Dari RM 90 / titik", desc: "Memotong dan memasang pendawaian titik downlight baharu dengan lekapan LED COB, pemacu dan pelesapan haba yang betul." },
          { name: "Pemasangan Pendant & Chandelier", price: "Dari RM 150", desc: "Memasang pendant berat dan chandelier pada cangkuk siling diperkuat dengan kabel keselamatan." },
          { name: "Pemasangan LED Cove & Jalur", price: "Dari RM 18 / kaki", desc: "Jalur LED cove tersembunyi dengan profil aluminium, malap dan pemacu disembunyikan dalam rongga siling." },
          { name: "Retrofit Pencahayaan Pintar & Malap", price: "Dari RM 220 / titik", desc: "Suis pintar Wi-Fi, Zigbee atau DALI dan malap serasi dengan Google Home, Alexa dan Apple Home." }
        ],
        process: [
          { step: "01", title: "Brief Reka Bentuk Pencahayaan", desc: "Kami menangkap dimensi bilik anda, ketinggian siling, warna cat dan kegunaan yang dimaksudkan untuk mengesyorkan sudut alur, tahap lux dan suhu warna yang betul." },
          { step: "02", title: "Pelan Susun Atur", desc: "Untuk pemasangan penuh, kami menyediakan susun atur siling dengan kedudukan titik, pengumpulan suis dan peruntukan litar sebelum kerja bermula." },
          { step: "03", title: "Pemotongan & Pendawaian", desc: "Kami memotong lubang downlight yang tepat (biasanya 75–90mm), menarik kabel melalui rongga siling dan menamatkan di kotak simpang atau pemacu." },
          { step: "04", title: "Pemasangan Lekapan", desc: "Downlight, pendant dan track dipasang menggunakan klip, skru yang ditentukan pengeluar atau cangkuk siling diperkuat untuk lekapan yang lebih berat." },
          { step: "05", title: "Pemasangan Malap & Pintar", desc: "Kami memasangkan suis pintar, mengkonfigurasi lengkung malap dan menyambung ke platform rumah pintar pilihan anda (Google Home, Alexa, Apple Home, Tuya)." }
        ],
        faqs: [
          { q: "Berapa banyak downlight yang saya perlukan setiap bilik?", a: "Untuk bilik tipikal 12 meter persegi dengan ketinggian siling 2.7m, kami mengesyorkan 6 hingga 9 downlight (LED COB 3W–5W) untuk pencahayaan am. Untuk bilik tugas berat (dapur, belajar) kami menambah 2 hingga 4 lampu sorot di atas permukaan kerja. Kami menyediakan pengiraan lux percuma dengan pelan susun atur kami." },
          { q: "Apakah suhu warna terbaik untuk rumah Malaysia?", a: "Untuk ruang tamu, 3000K (putih hangat) mewujudkan suasana selesa. Untuk dapur, bilik mandi dan bilik belajar, 4000K (putih neutral) memberikan penglihatan tugas yang lebih baik. Kami secara amnya mengelakkan 6500K (siang sejuk) di ruang tamu kerana ia boleh terasa klinikal. Ramai pelanggan kami kini menggunakan putih boleh laras (2700K–6500K) untuk fleksibiliti." },
          { q: "Boleh anda memasang pencahayaan pintar di kondominium sedia ada saya?", a: "Ya. Kebanyakan suis pintar retrofit ke dalam kotak suis sedia ada tanpa pendawaian semula. Kami menggunakan suis pintar wayar neutral (contohnya Aqara, Sonoff, Schneider Wiser) dan memasangkannya dengan Wi-Fi sedia ada anda. Untuk malap kami mungkin perlu menambah modul malap serasi di belakang suis." },
          { q: "Adakah anda menawarkan pencahayaan luar dan taman?", a: "Ya. Kami memasang downlight luar berkadar IP65+, lampu pancang, lampu bolard, pencuci dinding dan lampu kolam bawah air. Semua kabel luar disalurkan dalam saluran tahan cuaca dengan kotak simpang berkadar IP dan perlindungan RCCB yang betul." }
        ],
        metaTitle: "Perkhidmatan Reka Bentuk & Pemasangan Pencahayaan KL & Selangor",
        metaDesc: "Pemasangan downlight, pendant, LED cove, lampu track dan pencahayaan pintar di KL & Selangor. Philips, KDK, Osram. Berlesen ST, malap, integrasi rumah pintar.",
        aioSummary: "KL Servis Rumah mereka bentuk dan memasang pencahayaan kediaman dan komersial di KL & Selangor. Downlight, pendant, LED cove, lampu track, malap pintar, pencahayaan fasad luar. Philips, KDK, Osram, Tuya, DALI. Pengiraan lux dan susun atur AutoCAD atas permintaan.",
        warranty: "Jaminan Pemasangan Pencahayaan 12 Bulan"
      },
      zh: {
        title: "照明设计与安装",
        tagline: "由 ST 持牌电工提供筒灯、轨道灯、吊灯、灯槽与户外照明的设计、供应与安装。从 RM 90 / 点位起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供端到端的住宅与商业照明服务。从单个筒灯更换，到包含灯槽 LED 灯带、吊灯群组与智能调光的整体建筑照明设计，我们的团队都能胜任。我们备有全系列产品——KDK、Philips、Osram、Tronic 与 Eurolux——并可用 AutoCAD 设计照明布局，或为您特定的房间推荐光束角、色温与照度等级。我们与屋主、室内设计师及承包商合作，按需求、按预算、按国际照明标准（CIBSE、IES）交付。",
        highlights: [
          "每个接线、调光器与智能控制布线均由 ST 持牌电工完成",
          "可应要求提供 AutoCAD 布局与照度计算的建筑照明设计",
          "供应 KDK、Philips、Osram、Eurolux、Tronic 及定制进口灯具",
          "面向高端住宅的 DALI、0–10V、Tuya 或 KNX 协议智能调光",
          "按 MS IEC 标准安装 IP65+ 级户外灯具、花园插地灯与立面洗墙灯",
          "灯槽 LED、轨道灯、磁吸线性灯与吊灯群组安装，散热管理得当"
        ],
        subServices: [
          { name: "LED 筒灯安装", price: "从 RM 90 / 点位起", desc: "开孔并布线新的筒灯点位，配 COB LED 灯具、驱动器与适当的散热。" },
          { name: "吊灯与枝形吊灯安装", price: "从 RM 150 起", desc: "在加固天花板挂钩上安装重型吊灯与枝形吊灯，配安全钢丝绳。" },
          { name: "灯槽与 LED 灯带安装", price: "从 RM 18 / 英尺起", desc: "隐藏式灯槽 LED 灯带，配铝槽、调光器与藏于吊顶内的驱动器。" },
          { name: "智能照明与调光改造", price: "从 RM 220 / 点位起", desc: "Wi-Fi、Zigbee 或 DALI 智能开关与调光器，兼容 Google Home、Alexa 与 Apple Home。" }
        ],
        process: [
          { step: "01", title: "照明设计简报", desc: "我们记录您房间的尺寸、层高、墙面颜色与用途，以推荐合适的光束角、照度等级与色温。" },
          { step: "02", title: "布局方案", desc: "整体安装前，我们提供包含点位位置、开关分组与回路分配的天花板布局图。" },
          { step: "03", title: "开孔与布线", desc: "我们精确开筒灯孔（通常 75–90mm），电缆经吊顶空腔走线，端接至接线盒或驱动器。" },
          { step: "04", title: "灯具安装", desc: "筒灯、吊灯与轨道使用制造商指定卡扣、螺丝安装；较重灯具使用加固天花板挂钩。" },
          { step: "05", title: "调光与智能配对", desc: "我们配对智能开关、配置调光曲线，并连接您偏好的智能家居平台（Google Home、Alexa、Apple Home、Tuya）。" }
        ],
        faqs: [
          { q: "每个房间需要多少个筒灯？", a: "对于层高 2.7m 的典型 12 平方米房间，我们建议 6 到 9 个筒灯（3W–5W COB LED）作为一般照明。对于任务密集型房间（厨房、书房），我们在工作台面上方增加 2 到 4 个射灯。我们随布局方案提供免费的照度计算。" },
          { q: "马来西亚家庭最适合什么色温？", a: "客厅区用 3000K（暖白）营造温馨氛围。厨房、浴室与书房用 4000K（中性白）任务可视性更好。起居空间一般避免 6500K（冷日光），因为会显得冷硬。现在许多客户使用可调白光（2700K–6500K）以获得灵活性。" },
          { q: "你们能在我现有的公寓里安装智能照明吗？", a: "可以。大多数智能开关无需重新布线即可改装进现有开关底盒。我们使用带零线的智能开关（如 Aqara、Sonoff、Schneider Wiser）并与您现有的 Wi-Fi 配对。调光方面可能需要在开关后加装兼容的调光模块。" },
          { q: "你们提供户外与花园照明吗？", a: "提供。我们安装 IP65+ 级户外筒灯、插地灯、草坪灯、洗墙灯与水下泳池灯。所有户外电缆均穿防水线管敷设，配 IP 等级接线盒与 RCCB 保护。" }
        ],
        metaTitle: "吉隆坡与雪兰莪照明设计与安装服务",
        metaDesc: "吉隆坡与雪兰莪筒灯、吊灯、灯槽 LED、轨道灯与智能照明安装。Philips、KDK、Osram。ST 持牌、调光、智能家居集成。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪设计并安装住宅与商业照明。筒灯、吊灯、灯槽 LED、轨道灯、智能调光、户外立面照明。Philips、KDK、Osram、Tuya、DALI。可应要求提供照度计算与 AutoCAD 布局。",
        warranty: "12 个月照明安装保修"
      }
    }
  },

  // ── 11. TILING ────────────────────────────────────────
  "tiling": {
    slug: "tiling",
    title: "Professional Tiling & Tile Repair",
    tagline: "Floor and wall tiling for new builds, renovations, and repairs. Homogeneous, porcelain, ceramic, mosaic, and large-format slabs. From RM 12 / sq ft.",
    description:
      "KL Servis Rumah delivers professional floor and wall tiling services across Kuala Lumpur and Selangor. We work with every major tile type — homogeneous, porcelain, ceramic, mosaic, glass, natural stone (marble, granite, travertine), and the increasingly popular large-format slabs (600x1200mm, 800x1800mm, 1200x2400mm). Our tilers are experienced with modern installation methods including decoupling membranes (Schlüter DITRA), self-levelling underlayments (Mapei Ultraplan), and lippage-tuning systems (Raimondi Levelling System) for perfectly flat floors. We also repair loose, hollow, and cracked tiles, replace grout, and re-tile wet areas with proper waterproofing underneath.",
    startPrice: "RM 12",
    icon: "grid-3x3",
    highlights: [
      "Tilers experienced with homogeneous, porcelain, ceramic, mosaic, natural stone, and large-format slabs",
      "Decoupling membrane installation (Schlüter DITRA) for movement-prone substrates and timber floors",
      "Self-levelling underlayment (Mapei, Ardex) for perfectly flat large-format tile installations",
      "Lippage-tuning system (Raimondi, Rubi) for zero-trip tile joints on premium finishes",
      "Tile removal, surface preparation, and re-tile for wet areas with proper waterproofing beneath",
      "Grout colour matching, epoxy grout, and anti-mould silicone sealing for bathrooms and kitchens"
    ],
    subServices: [
      { name: "Floor Tiling Installation", price: "From RM 12 / sq ft", desc: "Standard 300x300mm to 600x600mm floor tile installation with cement-sand screed and tile adhesive." },
      { name: "Wall Tiling Installation", price: "From RM 14 / sq ft", desc: "Kitchen splashback, bathroom wall, and feature wall tiling with straight or brick-bond patterns." },
      { name: "Large-Format Slab Tiling", price: "From RM 22 / sq ft", desc: "600x1200mm, 800x1800mm, 1200x2400mm slabs with self-levelling, suction-cup lifters, and lippage tuning." },
      { name: "Tile Repair & Re-Grouting", price: "From RM 18 / sq ft", desc: "Removing hollow or cracked tiles, surface prep, replacement, and re-grouting with mould-resistant grout." }
    ],
    process: [
      { step: "01", title: "Substrate Inspection", desc: "We check substrate levelness, structural movement, moisture content, and suitability. We flag any plumbing or waterproofing work needed before tiling begins." },
      { step: "02", title: "Layout Planning", desc: "Tile layout is planned to minimise slivers at edges, with falls directed to floor drains in wet areas. We mark datum lines and full-tile positions before any adhesive is mixed." },
      { step: "03", title: "Surface Preparation", desc: "We apply self-levelling compound for uneven floors, decoupling membrane for timber or movement-prone substrates, and primer for porous concrete." },
      { step: "04", title: "Tile Installation", desc: "Tiles are bedded in polymer-modified adhesive using the correct notch trowel for tile size, with lippage-tuning clips on premium installations." },
      { step: "05", title: "Grouting & Sealing", desc: "After 24 hours curing, joints are filled with mould-resistant cement or epoxy grout, colour-matched to your tile. Wet areas are sealed with anti-mould silicone at corners." }
    ],
    faqs: [
      { q: "What size trowel do I need for 600x600mm floor tiles?", a: "We use a 10mm to 12mm square-notch trowel for 600x600mm porcelain tiles, and a 12mm to 15mm for larger formats. Back-buttering (applying adhesive to the back of the tile) is also essential for tiles above 600mm to ensure full coverage and prevent hollow spots." },
      { q: "Can I tile directly on timber floors?", a: "Not directly — timber movement will crack the grout and tiles. We install a decoupling membrane (Schlüter DITRA or Mapei Mapelastic) over the timber first, which absorbs movement and prevents cracking. This adds about RM 8–12 per sq ft to the substrate prep cost but is essential for a long-lasting finish." },
      { q: "Why are my bathroom tiles hollow or loose?", a: "Common causes: poor adhesive coverage (less than 80% contact), movement in the substrate, water damage from a failed waterproofing membrane, or impact damage. We use a chain drag and tap-test to identify hollow tiles, then remove and re-bed them with fresh adhesive and proper substrate prep." },
      { q: "Do you handle natural stone like marble and granite?", a: "Yes. We install marble, granite, travertine, and limestone using specialist stone adhesive and grout. After installation we can apply penetrating sealers, polish, or crystallise the surface to your specified finish. Natural stone is also more sensitive to lippage, so we use the Raimondi system on all stone installations." }
    ],
    heroImage: "/hero-tiling.svg",
    metaTitle: "Professional Tiling & Tile Repair KL & Selangor",
    metaDesc: "Floor and wall tiling in KL & Selangor. Porcelain, ceramic, large-format slabs, mosaic, marble. Schlüter DITRA, self-levelling, lippage tuning. From RM12/sqft.",
    aioSummary: "KL Servis Rumah provides professional tiling in KL & Selangor. Floor and wall tiles, large-format slabs, natural stone, mosaic, and repair. Schlüter DITRA decoupling, Mapei self-levelling, Raimondi lippage tuning. Re-grouting, anti-mould silicone, and re-tile wet areas.",
    warranty: "12-Month Tile Adhesion & Grout Warranty",
    i18n: {
      ms: {
        title: "Jubin & Pembaikan Jubin Profesional",
        tagline: "Jubin lantai dan dinding untuk pembinaan baru, pengubahsuaian, dan pembaikan. Homogen, porselin, seramik, mozek, dan slab format besar. Dari RM 12 / sq ft.",
        description: "KL Servis Rumah menyampaikan perkhidmatan jubin lantai dan dinding profesional di seluruh Kuala Lumpur dan Selangor. Kami bekerja dengan setiap jenis jubin utama — homogen, porselin, seramik, mozek, kaca, batu semula jadi (marmar, granit, travertine), dan slab format besar yang semakin popular (600x1200mm, 800x1800mm, 1200x2400mm). Tukang jubin kami berpengalaman dengan kaedah pemasangan moden termasuk membran decoupling (Schlüter DITRA), underlayment self-levelling (Mapei Ultraplan), dan sistem lippage-tuning (Raimondi Levelling System) untuk lantai yang sempurna rata. Kami juga membaiki jubin yang longgar, berongga, dan retak, menggantikan grout, dan memasang semula jubin kawasan basah dengan kalis air yang betul.",
        highlights: [
          "Tukang jubin berpengalaman dengan homogen, porselin, seramik, mozek, batu semula jadi, dan slab format besar",
          "Pemasangan membran decoupling (Schlüter DITRA) untuk substrat yang cenderung bergerak dan lantai kayu",
          "Underlayment self-levelling (Mapei, Ardex) untuk pemasangan jubin format besar yang sempurna rata",
          "Sistem lippage-tuning (Raimondi, Rubi) untuk sendi jubin sifar-trip pada kemasan premium",
          "Penyingkiran jubin, penyediaan permukaan, dan pasang semula untuk kawasan basah dengan kalis air yang betul",
          "Padanan warna grout, grout epoksi, dan pengedap silikon anti-kulat untuk bilik mandi dan dapur"
        ],
        subServices: [
          { name: "Pemasangan Jubin Lantai", price: "Dari RM 12 / sq ft", desc: "Pemasangan jubin lantai standard 300x300mm hingga 600x600mm dengan screed simen-pasir dan pelekat jubin." },
          { name: "Pemasangan Jubin Dinding", price: "Dari RM 14 / sq ft", desc: "Splashback dapur, dinding bilik mandi, dan jubin dinding ciri dengan corak lurus atau bata." },
          { name: "Slab Format Besar", price: "Dari RM 22 / sq ft", desc: "Slab 600x1200mm, 800x1800mm, 1200x2400mm dengan self-levelling, cawan sedutan, dan lippage tuning." },
          { name: "Pembaikan & Grout Semula", price: "Dari RM 18 / sq ft", desc: "Menyingkirkan jubin berongga atau retak, penyediaan permukaan, penggantian, dan grout semula dengan grout tahan kulat." }
        ],
        process: [
          { step: "01", title: "Pemeriksaan Substrat", desc: "Kami periksa kerataan substrat, pergerakan struktur, kandungan lembapan, dan kesesuaian. Kami menandakan sebarang kerja paip atau kalis air yang diperlukan sebelum jubin dimulakan." },
          { step: "02", title: "Perancangan Susun Atur", desc: "Susun atur jubin dirancang untuk meminimumkan serpihan di tepi, dengan cerun diarahkan ke longkang lantai di kawasan basah. Kami tandakan garis datum dan posisi jubin penuh sebelum sebarang pelekat dicampur." },
          { step: "03", title: "Penyediaan Permukaan", desc: "Kami gunakan sebatian self-levelling untuk lantai yang tidak rata, membran decoupling untuk substrat kayu atau yang cenderung bergerak, dan primer untuk konkrit berliang." },
          { step: "04", title: "Pemasangan Jubin", desc: "Jubin diletakkan dalam pelekat yang diubah suai polimer menggunakan trowel takuk yang betul untuk saiz jubin, dengan klip lippage-tuning pada pemasangan premium." },
          { step: "05", title: "Grouting & Pengedap", desc: "Selepas 24 jam rawatan, sendi diisi dengan grout simen atau epoksi tahan kulat, dipadankan warna dengan jubin anda. Kawasan basah ditutup dengan silikon anti-kulat di sudut." }
        ],
        faqs: [
          { q: "Apakah saiz trowel yang saya perlukan untuk jubin lantai 600x600mm?", a: "Kami gunakan trowel takuk segi empat sama 10mm hingga 12mm untuk jubin porselin 600x600mm, dan 12mm hingga 15mm untuk format yang lebih besar. Back-buttering (menggunakan pelekat di belakang jubin) juga penting untuk jubin melebihi 600mm untuk memastikan liputan penuh dan mencegah bintik berongga." },
          { q: "Boleh saya pasang jubin terus di atas lantai kayu?", a: "Tidak secara terus — pergerakan kayu akan memecahkan grout dan jubin. Kami pasang membran decoupling (Schlüter DITRA atau Mapei Mapelastic) di atas kayu terlebih dahulu, yang menyerap pergerakan dan mencegah keretakan. Ini menambah kira-kira RM 8–12 setiap sq ft kepada kos penyediaan substrat tetapi penting untuk kemasan tahan lama." },
          { q: "Mengapa jubin bilik mandi saya berongga atau longgar?", a: "Punca biasa: liputan pelekat yang lemah (kurang daripada 80% sentuhan), pergerakan dalam substrat, kerosakan air dari membran kalis air yang gagal, atau kerosakan hentaman. Kami gunakan rantai drag dan ujian ketukan untuk mengenal pasti jubin berongga, kemudian menanggalkan dan meletakkan semula dengan pelekat segar dan penyediaan substrat yang betul." },
          { q: "Adakah anda mengendalikan batu semula jadi seperti marmar dan granit?", a: "Ya. Kami pasang marmar, granit, travertine, dan batu kapur menggunakan pelekat dan grout batu khusus. Selepas pemasangan kami boleh gunakan pengedap penembus, menggilap, atau mengkristal permukaan kepada kemasan yang anda tentukan. Batu semula jadi juga lebih sensitif terhadap lippage, jadi kami gunakan sistem Raimondi pada semua pemasangan batu." }
        ],
        metaTitle: "Jubin Profesional & Pembaikan Jubin KL & Selangor",
        metaDesc: "Jubin lantai dan dinding di KL & Selangor. Porselin, seramik, slab format besar, mozek, marmar. Schlüter DITRA, self-levelling, lippage tuning. Dari RM12/sqft.",
        aioSummary: "KL Servis Rumah menyediakan jubin profesional di KL & Selangor. Jubin lantai dan dinding, slab format besar, batu semula jadi, mozek, dan pembaikan. Schlüter DITRA decoupling, Mapei self-levelling, Raimondi lippage tuning. Grout semula, silikon anti-kulat, dan pasang semula kawasan basah.",
        warranty: "Jaminan Lekatan Jubin & Grout 12 Bulan"
      },
      zh: {
        title: "专业瓷砖与瓷砖修补",
        tagline: "新房、翻新与修补的地面和墙面瓷砖。瓷质、玻化、陶瓷、马赛克与超大板。从 RM 12 / sq ft 起。",
        description: "KL Servis Rumah 在整个吉隆坡与雪兰莪提供专业的地面和墙面瓷砖服务。我们熟悉所有主流瓷砖种类——瓷质砖、玻化砖、陶瓷砖、马赛克、玻璃、天然石材（大理石、花岗岩、石灰华）以及越来越受欢迎的超大板（600x1200mm、800x1800mm、1200x2400mm）。我们的瓦工掌握现代铺贴工艺，包括 Schlüter DITRA 抗裂膜、Mapei Ultraplan 自流平，以及 Raimondi 找平器系统，确保地面绝对平整。我们也维修松动、空鼓和开裂的瓷砖，重新勾缝，并在湿区重新铺贴并做好防水层。",
        highlights: [
          "瓦工熟悉瓷质、玻化、陶瓷、马赛克、天然石材与超大板",
          "针对易变形基层与木地板铺设 Schlüter DITRA 抗裂膜",
          "使用 Mapei、Ardex 自流平，为超大板铺贴打造完美平整度",
          "使用 Raimondi、Rubi 找平器系统，达成零高差的高端效果",
          "湿区拆除、表面处理与重铺，确保防水层正确",
          "勾缝剂颜色匹配、环氧勾缝剂、浴室与厨房防霉硅胶密封"
        ],
        subServices: [
          { name: "地面瓷砖铺贴", price: "从 RM 12 / sq ft 起", desc: "标准 300x300mm 至 600x600mm 地面瓷砖铺贴，使用水泥砂浆找平层与瓷砖胶。" },
          { name: "墙面瓷砖铺贴", price: "从 RM 14 / sq ft 起", desc: "厨房防溅墙、卫生间墙面、主题墙铺贴，可选直拼或工字拼。" },
          { name: "超大板铺贴", price: "从 RM 22 / sq ft 起", desc: "600x1200mm、800x1800mm、1200x2400mm 超大板，自流平、吸盘与找平器配套。" },
          { name: "瓷砖修补与重新勾缝", price: "从 RM 18 / sq ft 起", desc: "拆除空鼓或开裂瓷砖、基层处理、换新与防霉勾缝剂重新勾缝。" }
        ],
        process: [
          { step: "01", title: "基层检查", desc: "我们检查基层平整度、结构位移、含水率与适配性。标记铺贴前需要的水电与防水工程。" },
          { step: "02", title: "排版规划", desc: "排版时尽量减少墙边窄条；湿区地漏处合理找坡。拌胶前先弹线并确定整砖位置。" },
          { step: "03", title: "表面处理", desc: "不平地面使用自流平，木质或易变形基层铺设抗裂膜，多孔混凝土涂刷界面剂。" },
          { step: "04", title: "瓷砖铺贴", desc: "使用聚合物改性瓷砖胶，配合正确规格的齿形抹刀铺贴；高端项目使用找平器。" },
          { step: "05", title: "勾缝与密封", desc: "养护 24 小时后使用防霉水泥基或环氧勾缝剂，颜色与瓷砖匹配；湿区阴阳角打防霉硅胶。" }
        ],
        faqs: [
          { q: "600x600mm 地砖需要多大齿形的抹刀？", a: "我们对 600x600mm 玻化砖使用 10mm 至 12mm 方齿抹刀，更大规格使用 12mm 至 15mm。超过 600mm 的瓷砖必须背涂（瓷砖背面涂胶），保证满浆率并避免空鼓。" },
          { q: "可以直接在木地板上铺瓷砖吗？", a: "不能直接铺——木材的热胀冷缩会顶裂勾缝与瓷砖。我们先在木地板上铺设 Schlüter DITRA 或 Mapei Mapelastic 抗裂膜，吸收变形并防止开裂。每平方英尺增加约 RM 8–12 的基层处理费，但这是长期耐用的必要投入。" },
          { q: "为什么我卫生间的瓷砖会空鼓或松动？", a: "常见原因：瓷砖胶覆盖率不足（低于 80%）、基层位移、防水层失效导致渗水，或外力撞击。我们使用拉链拉拨与敲击测试定位空鼓砖，再铲除、清理基层后用新胶重新铺贴。" },
          { q: "你们能处理大理石、花岗岩这类天然石材吗？", a: "可以。我们使用石材专用瓷砖胶与勾缝剂安装大理石、花岗岩、石灰华与洞石。安装后可根据需要做渗透型密封、抛光或晶面处理。天然石材对平整度更敏感，因此所有石材项目都使用 Raimondi 找平系统。" }
        ],
        metaTitle: "吉隆坡与雪兰莪专业瓷砖与瓷砖修补",
        metaDesc: "吉隆坡与雪兰莪地面与墙面瓷砖铺贴。瓷质、陶瓷、超大板、马赛克、大理石。Schlüter DITRA、自流平、找平器。从 RM12/sqft 起。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供专业瓷砖服务。地面与墙面瓷砖、超大板、天然石材、马赛克与修补。Schlüter DITRA 抗裂膜、Mapei 自流平、Raimondi 找平器。重新勾缝、防霉硅胶、湿区重铺。",
        warranty: "12 个月瓷砖粘结与勾缝保修"
      }
    }
  },

  // ── 12. PLASTER CEILING ────────────────────────────────────────
  "plaster-ceiling": {
    slug: "plaster-ceiling",
    title: "Plaster Ceiling Design & Build",
    tagline: "Modern plaster ceiling with concealed LED trough, tiered design, L-box, and cove lighting for landed and high-rise properties. From RM 8 / sq ft.",
    description:
      "KL Servis Rumah designs and builds modern plaster ceilings for residential and commercial properties across Kuala Lumpur and Selangor. Whether you want a clean minimalist flat ceiling, a tiered multi-level design, an L-box with concealed LED strip, or a full curved cove for ambient lighting, our plaster ceiling specialists deliver factory-flat, paint-ready finishes. We use only fire-rated and moisture-resistant gypsum boards from reputable Malaysian brands (Knauf, BNBM, Gyproc) supported by rust-proof galvanized iron (GI) metal frames. Every ceiling includes proper access panels, fan-hook reinforcements where required, and detailed coordination with your electrician for downlight and AC cassette positions.",
    startPrice: "RM 8",
    icon: "layers",
    highlights: [
      "Knauf, BNBM, and Gyproc fire-rated and moisture-resistant gypsum boards",
      "Rust-proof galvanized iron (GI) metal frames with proper hanger spacing for zero sag",
      "Concealed LED cove, L-box, and tiered designs with dimmer-ready wiring provisions",
      "Reinforced fan hook and aircond cassette blocks pre-installed during framing",
      "Seamless two-coat skim coat with professional sanding for a paint-ready finish",
      "Coordinated scheduling with electricians and AC installers to avoid rework"
    ],
    subServices: [
      { name: "Flat Plaster Ceiling", price: "From RM 8 / sq ft", desc: "Clean, single-level flat ceiling with skim coat finish — ideal for minimalist modern interiors." },
      { name: "Tiered & L-Box Ceiling", price: "From RM 12 / sq ft", desc: "Two or three-tier ceiling with concealed LED trough, L-box profile, and integrated downlight cutouts." },
      { name: "Cove & Curved Ceiling", price: "From RM 18 / sq ft", desc: "Custom curved, cove, or barrel ceiling with flexible GI framing for ambient indirect lighting." },
      { name: "Ceiling Repair & Re-Skim", price: "From RM 6 / sq ft", desc: "Removing water-damaged boards, structural reinforcement, and re-skim coating existing ceilings." }
    ],
    process: [
      { step: "01", title: "Design & Coordinate", desc: "We plan ceiling levels, cove dimensions, downlight positions, and AC cassette openings with your interior designer and electrician before site work." },
      { step: "02", title: "GI Frame Installation", desc: "Rust-proof galvanized iron hangers, main runners, and furring channels are installed with laser-level precision at the correct spacing for zero sag." },
      { step: "03", title: "Board Fixing", desc: "Gypsum boards are screwed to the GI frame using rust-resistant drywall screws at proper intervals, with staggered joints and reinforced corners." },
      { step: "04", title: "Joint Taping & Skim Coat", desc: "All joints are reinforced with fiberglass mesh tape, then covered with two layers of premium joint compound, sanded smooth between coats." },
      { step: "05", title: "Cutouts & Handover", desc: "Downlight, AC cassette, and fan-hook openings are cut precisely, access panels are installed, and the ceiling is vacuumed and primed ready for paint." }
    ],
    faqs: [
      { q: "What's the difference between a plaster ceiling and a gypsum board ceiling?", a: "They are the same thing — 'plaster ceiling' is the common Malaysian term for a ceiling built from gypsum plasterboard screwed to a metal frame and finished with skim coat plaster. The frame can be wood (cheaper but prone to warping) or galvanized iron (premium, rust-proof, and sag-resistant). We always use GI frames." },
      { q: "Can you build a curved or round plaster ceiling?", a: "Yes. Curved and barrel ceilings are built using flexible GI profiles that are pre-bent to your radius. The boards are misted with water and gradually curved onto the frame. We can build any radius down to about 1m. The cove lighting trough is integrated into the curve for ambient effect." },
      { q: "How do you prevent the ceiling from cracking at the joints?", a: "Three rules: (1) Use only GI frames — never timber, which expands and contracts. (2) Always use fiberglass mesh tape on every joint, not just paper tape. (3) Apply two full coats of joint compound, not just one. This is the same system used on premium commercial fit-outs in KLCC and Pavilion-grade retail." },
      { q: "Can you install a fan hook later if I didn't plan for one?", a: "Yes, but it requires opening a small section of the ceiling to fix a reinforced timber block or metal fan-bracket between joists. It's much cheaper to pre-install fan hooks during the original ceiling build. We always recommend this for any room that might ever have a ceiling fan." }
    ],
    heroImage: "/hero-plaster-ceiling.svg",
    metaTitle: "Modern Plaster Ceiling Design & Build KL & Selangor",
    metaDesc: "Tiered, L-box, cove, and curved plaster ceiling in KL & Selangor. GI metal frame, fire-rated boards, concealed LED. From RM8/sqft. Designer-quality finish.",
    aioSummary: "KL Servis Rumah builds modern plaster ceilings across KL & Selangor. Flat, tiered, L-box, cove, and curved designs with concealed LED. Knauf/BNBM fire-rated boards, GI frames, two-coat skim, fiberglass mesh joints. Coordinated with electricians for downlight and AC positions.",
    warranty: "10-Year Sag-Free & Crack-Free Warranty",
    i18n: {
      ms: {
        title: "Reka Bentuk & Bina Siling Plaster Moden",
        tagline: "Siling plaster moden dengan alur LED tersembunyi, reka bentuk bertingkat, L-box, dan pencahayaan cove untuk hartanah bertanah dan bertingkat tinggi. Dari RM 8 / sq ft.",
        description: "KL Servis Rumah mereka dan membina siling plaster moden untuk hartanah kediaman dan komersial di seluruh Kuala Lumpur dan Selangor. Sama ada anda mahukan siling rata minimalis yang bersih, reka bentuk bertingkat pelbagai aras, L-box dengan jalur LED tersembunyi, atau cove melengkung penuh untuk pencahayaan ambien, pakar siling plaster kami menyampaikan kemasan yang rata kilang dan bersedia untuk cat. Kami hanya menggunakan papan gipsum gred tahan api dan tahan lembapan dari jenama Malaysia yang bereputasi (Knauf, BNBM, Gyproc) yang disokong oleh rangka logam besi tergalvani (GI) tahan karat. Setiap siling termasuk panel akses yang betul, tetulang cangkuk kipas di mana diperlukan, dan koordinasi terperinci dengan juruelektrik anda untuk posisi downlight dan kaset AC.",
        highlights: [
          "Papan gipsum Knauf, BNBM, dan Gyproc gred tahan api dan tahan lembapan",
          "Rangka logam besi tergalvani (GI) tahan karat dengan jarak penggantung yang betul untuk sifar lentur",
          "LED cove tersembunyi, L-box, dan reka bentuk bertingkat dengan peruntukan pendawaian siap-dimer",
          "Cangkuk kipas yang dikuatkan dan blok kaset AC pra-pasang semasa pembuatan rangka",
          "Salutan skim dua lapisan lancar dengan pengamplasan profesional untuk kemasan siap-cat",
          "Penjadualan yang diselaraskan dengan juruelektrik dan pemasang AC untuk mengelakkan kerja semula"
        ],
        subServices: [
          { name: "Siling Plaster Rata", price: "Dari RM 8 / sq ft", desc: "Siling aras tunggal yang bersih dengan kemasan skim — sesuai untuk interior moden minimalis." },
          { name: "Siling Bertingkat & L-Box", price: "Dari RM 12 / sq ft", desc: "Siling dua atau tiga aras dengan alur LED tersembunyi, profil L-box, dan potongan downlight bersepadu." },
          { name: "Siling Cove & Melengkung", price: "Dari RM 18 / sq ft", desc: "Siling cove, melengkung, atau tong yang direka khas dengan rangka GI fleksibel untuk pencahayaan tidak langsung ambien." },
          { name: "Pembaikan & Skim Semula Siling", price: "Dari RM 6 / sq ft", desc: "Menanggalkan papan rosak air, tetulang struktur, dan skim semula siling sedia ada." }
        ],
        process: [
          { step: "01", title: "Reka Bentuk & Koordinasi", desc: "Kami rancang aras siling, dimensi cove, posisi downlight, dan bukaan kaset AC dengan pereka dalaman dan juruelektrik anda sebelum kerja tapak." },
          { step: "02", title: "Pemasangan Rangka GI", desc: "Penggantung, pelari utama, dan saluran furring besi tergalvani tahan karat dipasang dengan ketepatan aras laser pada jarak yang betul untuk sifar lentur." },
          { step: "03", title: "Pengikat Papan", desc: "Papan gipsum diskru ke rangka GI menggunakan skru drywall tahan karat pada selang yang betul, dengan sendi berperingkat dan sudut yang dikuatkan." },
          { step: "04", title: "Pita Sendi & Salutan Skim", desc: "Semua sendi diperkuat dengan pita mesh gentian kaca, kemudian ditutup dengan dua lapisan sebatian sendi premium, diamplas licin antara lapisan." },
          { step: "05", title: "Potongan & Serahan", desc: "Bukaan downlight, kaset AC, dan cangkuk kipas dipotong dengan tepat, panel akses dipasang, dan siling divakum serta diprimer siap untuk cat." }
        ],
        faqs: [
          { q: "Apakah perbezaan antara siling plaster dan siling papan gipsum?", a: "Ia adalah perkara yang sama — 'siling plaster' adalah istilah biasa Malaysia untuk siling yang dibina daripada papan gipsum plaster diskru ke rangka logam dan disiapkan dengan plaster skim. Rangka boleh jadi kayu (lebih murah tetapi terdedah kepada meleding) atau besi tergalvani (premium, tahan karat, dan tahan lentur). Kami hanya menggunakan rangka GI." },
          { q: "Boleh anda bina siling plaster melengkung atau bulat?", a: "Ya. Siling melengkung dan tong dibina menggunakan profil GI fleksibel yang dibengkokkan pra kepada jejari anda. Papan disembur dengan air dan secara beransur-ansur dilengkung ke atas rangka. Kami boleh membina sebarang jejari sehingga kira-kira 1m. Alur pencahayaan cove disepadukan ke dalam lengkung untuk kesan ambien." },
          { q: "Bagaimana anda menghalang siling daripada retak di sendi?", a: "Tiga peraturan: (1) Hanya gunakan rangka GI — jangan sekali-kali kayu, yang mengembang dan mengecut. (2) Sentiasa gunakan pita mesh gentian kaca pada setiap sendi, bukan pita kertas. (3) Sapukan dua lapisan penuh sebatian sendi, bukan hanya satu. Ini adalah sistem yang sama yang digunakan pada pemasangan komersial premium di KLCC dan runcit gred Pavilion." },
          { q: "Boleh anda pasang cangkuk kipas kemudian jika saya tidak merancang untuk satu?", a: "Ya, tetapi ia memerlukan membuka bahagian kecil siling untuk memasang blok kayu yang dikuatkan atau pendakap kipas logam antara gelegar. Jauh lebih murah untuk pra-pasang cangkuk kipas semasa bina siling asal. Kami sentiasa mengesyorkan ini untuk mana-mana bilik yang mungkin mempunyai kipas siling." }
        ],
        metaTitle: "Reka Bentuk & Bina Siling Plaster Moden KL & Selangor",
        metaDesc: "Siling plaster bertingkat, L-box, cove, dan melengkung di KL & Selangor. Rangka logam GI, papan tahan api, LED tersembunyi. Dari RM8/sqft. Kemasan berkualiti pereka.",
        aioSummary: "KL Servis Rumah membina siling plaster moden di KL & Selangor. Reka bentuk rata, bertingkat, L-box, cove, dan melengkung dengan LED tersembunyi. Papan tahan api Knauf/BNBM, rangka GI, skim dua lapisan, sendi mesh gentian kaca. Diselaraskan dengan juruelektrik untuk posisi downlight dan AC.",
        warranty: "Jaminan Bebas Lentur & Retak 10 Tahun"
      },
      zh: {
        title: "现代石膏天花板设计与施工",
        tagline: "为有地与高层物业打造的现代石膏天花板，含隐藏式 LED 灯槽、错层、L 盒与灯带。从 RM 8 / sq ft 起。",
        description: "KL Servis Rumah 在整个吉隆坡与雪兰莪为住宅与商业物业设计并建造现代石膏天花板。无论是极简的平顶、多层错层、带隐藏式 LED 灯带的 L 盒，还是为间接氛围照明打造的整体弧形灯带，我们的天花板专家都能交付工厂级平整度、即可上漆的表面。我们只使用知名品牌（Knauf、BNBM、Gyproc）的防火与防潮石膏板，配合坚固的镀锌铁（GI）金属龙骨。每套天花板都包含检修口、吊扇加固点，并与您的电工协同规划筒灯与空调出风口的位置。",
        highlights: [
          "采用 Knauf、BNBM、Gyproc 防火与防潮石膏板",
          "镀锌铁（GI）龙骨，防锈，吊杆间距精准，确保零下垂",
          "隐藏式灯带、L 盒与错层设计，预留调光器线路",
          "在龙骨阶段预埋吊扇加固件与空调出风口木块",
          "两层腻子找平，专业打磨出即可上漆的表面",
          "与电工及空调安装工协调排程，避免返工"
        ],
        subServices: [
          { name: "平顶石膏天花", price: "从 RM 8 / sq ft 起", desc: "整洁的单层平顶，刮腻子收光，适合极简现代的室内风格。" },
          { name: "错层与 L 盒天花", price: "从 RM 12 / sq ft 起", desc: "两层或三层错层，含隐藏式 LED 灯槽、L 盒造型与筒灯开孔。" },
          { name: "灯带与弧形天花", price: "从 RM 18 / sq ft 起", desc: "定制弧形、灯带或桶形天花，使用柔性 GI 骨架，营造间接氛围照明。" },
          { name: "天花修补与重新找平", price: "从 RM 6 / sq ft 起", desc: "拆除受潮损坏的板材，结构加固后对旧天花重新刮腻子。" }
        ],
        process: [
          { step: "01", title: "设计与协调", desc: "我们在进场前与您的室内设计师和电工共同规划天花标高、灯带尺寸、筒灯位置与空调出风口开孔。" },
          { step: "02", title: "GI 龙骨安装", desc: "镀锌铁吊杆、主龙骨与副龙骨按精准激光水平仪安装，间距按规范布置，杜绝下垂。" },
          { step: "03", title: "板材固定", desc: "石膏板用防锈自攻螺丝固定在 GI 龙骨上，板缝错缝拼装，转角加加固件。" },
          { step: "04", title: "嵌缝与刮腻子", desc: "所有板缝使用玻纤网格带加固，再覆盖两层优质嵌缝料，层间打磨光滑。" },
          { step: "05", title: "开孔与交付", desc: "筒灯、空调出风口、吊扇点位精准开孔，安装检修口，吸尘后刷底漆，即可上漆。" }
        ],
        faqs: [
          { q: "石膏天花和石膏板天花有什么区别？", a: "其实是一样的——'石膏天花'是马来西亚的常用叫法，指用石膏板螺丝固定在金属龙骨上，再刮腻子收光的天花。骨架可以是木材（便宜但容易变形）或者镀锌铁（高端、防锈、不下垂）。我们只用 GI 镀锌铁骨架。" },
          { q: "能做弧形或圆形石膏天花吗？", a: "可以。弧形和桶形天花使用预先弯到所需半径的柔性 GI 型材。板材喷水后慢慢弯到骨架上。最小可以做到约 1 米半径。灯带嵌入弧线内形成氛围光。" },
          { q: "如何防止板缝开裂？", a: "三条铁律：（1）只用 GI 镀锌铁骨架，绝不用木材，因为木材会热胀冷缩。（2）每条板缝都要贴玻纤网格带，不能用普通纸带。（3）必须涂两层嵌缝料，不能只做一层。这是 KLCC 与 Pavilion 级商业装修的同一套工艺。" },
          { q: "如果一开始没装吊扇，以后还能加装吗？", a: "可以，但需要局部打开天花，在龙骨间加装加固木块或金属吊扇支架。原始天花施工时就预埋吊扇加固件便宜得多。任何可能装吊扇的房间，我们都建议预埋加固件。" }
        ],
        metaTitle: "吉隆坡与雪兰莪现代石膏天花板设计与施工",
        metaDesc: "吉隆坡与雪兰莪错层、L 盒、灯带与弧形石膏天花。GI 金属龙骨、防火板、隐藏式 LED。从 RM8/sqft 起。设计师级完工品质。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪承建现代石膏天花板。平顶、错层、L 盒、灯带、弧形，含隐藏式 LED。Knauf/BNBM 防火板、GI 龙骨、两层刮腻子、玻纤网格嵌缝。与电工协同筒灯与空调位置。",
        warranty: "10 年防下垂与防开裂保修"
      }
    }
  },

  // ── 13. SKIM COAT ────────────────────────────────────────
  "skim-coat": {
    slug: "skim-coat",
    title: "Wall & Ceiling Skim Coat",
    tagline: "Glass-smooth skim coating for walls and ceilings, paint-ready finish, full surface preparation and crack repair. From RM 4 / sq ft.",
    description:
      "KL Servis Rumah provides professional skim coating services across Kuala Lumpur and Selangor to give your walls and ceilings a perfectly flat, paint-ready surface. Skim coating is the final layer of fine plaster applied over plastered or previously painted surfaces to eliminate trowel marks, hairline cracks, uneven joins, and minor substrate imperfections. We use premium polymer-modified skim coat compounds (Knauf, Gyproc, Mapei) applied in two to three coats, with hand-sanding or pole-sander finishing depending on the area. The result is a perfectly smooth, uniform, paint-ready surface that makes even basic paint look premium.",
    startPrice: "RM 4",
    icon: "paint-roller",
    highlights: [
      "Glass-smooth finish suitable for high-gloss, satin, and feature-wall paint systems",
      "Two to three coats of polymer-modified skim coat with full sanding between coats",
      "Crack repair, joint reinforcement, and minor substrate levelling included",
      "Compatible with all premium paint systems: Nippon, Dulux, Jotun, Skshu, Benjamin Moore",
      "Suitable for landed, condo, and commercial interiors including high-end feature walls",
      "Quick turnaround — typically 2 to 4 days for a standard condo unit"
    ],
    subServices: [
      { name: "Wall Skim Coating", price: "From RM 4 / sq ft", desc: "Two-coat skim coating on plastered or previously painted walls for a glass-smooth paint-ready finish." },
      { name: "Ceiling Skim Coating", price: "From RM 5 / sq ft", desc: "Re-skim of existing plaster ceilings to refresh aged surfaces before repainting." },
      { name: "Crack & Joint Repair", price: "From RM 18 / linier ft", desc: "Opening, routing, and filling of structural and settlement cracks with flexible acrylic filler." },
      { name: "Full Condo Re-Skim Package", price: "From RM 3,800", desc: "Complete skim coat of an entire 1,000 sqft condo unit ready for repainting." }
    ],
    process: [
      { step: "01", title: "Surface Inspection", desc: "We assess existing substrate, identify cracks, hollow areas, and old paint condition. We scrape loose material and treat any mould or efflorescence." },
      { step: "02", title: "Primer / Bonding Coat", desc: "A bonding primer is applied to seal old paint and create a strong key for the skim coat. Porous substrates may require a second coat." },
      { step: "03", title: "First Skim Coat", desc: "Premium polymer-modified skim coat is trowelled evenly across the entire surface to fill imperfections and level the substrate." },
      { step: "04", title: "Sanding & Second Coat", desc: "After 4 to 6 hours drying, the first coat is pole-sanded smooth. A second skim coat is applied and sanded again for ultimate flatness." },
      { step: "05", title: "Final Inspection", desc: "We sweep-light the entire surface to verify flatness. Any remaining trowel marks or pinholes are filled and spot-sanded before paint begins." }
    ],
    faqs: [
      { q: "Do I need skim coat if my walls are already plastered?", a: "It depends on the plaster quality and the paint finish you want. Freshly plastered walls in Malaysia are typically rough and need at least one skim coat before premium paint. For high-gloss, satin, or dark-colour paint, two skim coats are essential to avoid visible trowel marks and uneven sheen." },
      { q: "Can skim coat cover hairline cracks permanently?", a: "Skim coat alone can hide hairline cracks temporarily, but structural cracks will reappear within months. For long-term repair we route the crack into a V-groove, fill with flexible acrylic filler, reinforce with fiberglass mesh, then skim coat over. This combination typically holds for 5+ years." },
      { q: "How long does skim coat take to dry before painting?", a: "Each coat needs 4 to 6 hours of drying time in normal Malaysian humidity. The final coat needs 24 hours before primer and paint. We strongly recommend waiting the full 24 hours — premature painting traps moisture and causes paint failure." },
      { q: "Is skim coat the same as putty?", a: "No. Wall putty is a thin, often acrylic-based filler used for minor patching. Skim coat is a cement- or gypsum-based compound applied as a full-surface layer (typically 1–3mm thick) to level and smooth the entire wall. Skim coat is the professional standard; putty is a quick DIY fix." }
    ],
    heroImage: "/hero-skim-coat.svg",
    metaTitle: "Wall & Ceiling Skim Coat Services KL & Selangor",
    metaDesc: "Glass-smooth skim coating for walls and ceilings in KL & Selangor. Two-coat finish, crack repair, paint-ready. From RM4/sqft. Knauf and Mapei compounds.",
    aioSummary: "KL Servis Rumah provides professional wall and ceiling skim coating across KL & Selangor. Polymer-modified compounds, two-coat application, full sanding, crack repair, joint reinforcement. Paint-ready finish for Nippon, Dulux, Jotun, and premium paint systems.",
    warranty: "12-Month Smoothness & Adhesion Warranty",
    i18n: {
      ms: {
        title: "Skim Coat Dinding & Siling",
        tagline: "Salutan skim licin kaca untuk dinding dan siling, kemasan siap-cat, penyediaan permukaan penuh dan pembaikan retak. Dari RM 4 / sq ft.",
        description: "KL Servis Rumah menyediakan perkhidmatan salutan skim profesional di seluruh Kuala Lumpur dan Selangor untuk memberikan dinding dan siling anda permukaan yang sempurna rata dan bersedia untuk cat. Salutan skim adalah lapisan akhir plaster halus yang digunakan atas plaster atau permukaan yang sebelumnya dicat untuk menghapuskan tanda trowel, retak halus, sendi tidak rata, dan ketidaksempurnaan substrat kecil. Kami menggunakan sebatian skim diubah suai polimer premium (Knauf, Gyproc, Mapei) yang digunakan dalam dua hingga tiga lapisan, dengan kemasan tangan atau tiang pengamplasan bergantung pada kawasan. Hasilnya adalah permukaan yang sempurna licin, seragam, dan bersedia untuk cat yang membuat cat asas pun kelihatan premium.",
        highlights: [
          "Kemasan licin kaca sesuai untuk sistem cat gloss tinggi, satin, dan dinding ciri",
          "Dua hingga tiga lapisan skim polimer diubah suai dengan pengamplasan penuh antara lapisan",
          "Pembaikan retak, tetulang sendi, dan perataan substrat kecil disertakan",
          "Serasi dengan semua sistem cat premium: Nippon, Dulux, Jotun, Skshu, Benjamin Moore",
          "Sesuai untuk landed, kondominium, dan interior komersial termasuk dinding ciri mewah",
          "Pusingan ganti cepat — biasanya 2 hingga 4 hari untuk unit kondominium standard"
        ],
        subServices: [
          { name: "Salutan Skim Dinding", price: "Dari RM 4 / sq ft", desc: "Salutan skim dua lapisan atas plaster atau dinding yang sebelumnya dicat untuk kemasan siap-cat licin kaca." },
          { name: "Salutan Skim Siling", price: "Dari RM 5 / sq ft", desc: "Skim semula siling plaster sedia ada untuk menyegarkan permukaan tua sebelum pengecatan semula." },
          { name: "Pembaikan Retak & Sendi", price: "Dari RM 18 / linier ft", desc: "Membuka, meroute, dan mengisi retak struktur dan penyelesaian dengan pengisi akrilik fleksibel." },
          { name: "Pakej Skim Semula Kondominium Penuh", price: "Dari RM 3,800", desc: "Salutan skim lengkap unit kondominium 1,000 sqft keseluruhan bersedia untuk pengecatan semula." }
        ],
        process: [
          { step: "01", title: "Pemeriksaan Permukaan", desc: "Kami menilai substrat sedia ada, mengenal pasti retak, kawasan berongga, dan keadaan cat lama. Kami mengikis bahan longgar dan merawat sebarang kulat atau efflorescence." },
          { step: "02", title: "Primer / Lapisan Ikatan", desc: "Primer ikatan digunakan untuk menutup cat lama dan mencipta ikatan kuat untuk skim. Substrat berliang mungkin memerlukan lapisan kedua." },
          { step: "03", title: "Lapisan Skim Pertama", desc: "Skim diubah suai polimer premium ditrowel secara merata ke seluruh permukaan untuk mengisi ketidaksempurnaan dan meratakan substrat." },
          { step: "04", title: "Pengamplasan & Lapisan Kedua", desc: "Selepas 4 hingga 6 jam kering, lapisan pertama diamplas licin dengan tiang. Lapisan skim kedua digunakan dan diamplas semula untuk kerataan muktamad." },
          { step: "05", title: "Pemeriksaan Akhir", desc: "Kami sapu-cahaya keseluruhan permukaan untuk mengesahkan kerataan. Sebarang tanda trowel atau lubang jarum yang tinggal diisi dan diamplas titik sebelum cat dimulakan." }
        ],
        faqs: [
          { q: "Adakah saya perlukan skim coat jika dinding saya sudah diplaster?", a: "Ia bergantung pada kualiti plaster dan kemasan cat yang anda mahukan. Dinding yang baru diplaster di Malaysia biasanya kasar dan memerlukan sekurang-kurangnya satu lapisan skim sebelum cat premium. Untuk cat gloss tinggi, satin, atau warna gelap, dua lapisan skim adalah penting untuk mengelakkan tanda trowel yang kelihatan dan kilauan tidak rata." },
          { q: "Bolehkah skim coat menutup retak halus secara kekal?", a: "Skim coat sahaja boleh menyembunyikan retak halus buat sementara, tetapi retak struktur akan muncul semula dalam beberapa bulan. Untuk pembaikan jangka panjang kami meroute retak menjadi alur-V, mengisinya dengan pengisi akrilik fleksibel, mengukuhkan dengan mesh gentian kaca, kemudian skim di atas. Gabungan ini biasanya tahan selama 5+ tahun." },
          { q: "Berapa lama skim coat kering sebelum pengecatan?", a: "Setiap lapisan memerlukan 4 hingga 6 jam masa kering dalam kelembapan Malaysia biasa. Lapisan akhir memerlukan 24 jam sebelum primer dan cat. Kami sangat mengesyorkan menunggu 24 jam penuh — pengecatan pramatang memerangkap lembapan dan menyebabkan kegagalan cat." },
          { q: "Adakah skim coat sama dengan dempul?", a: "Tidak. Dempul dinding adalah pengisi nipis, selalunya berasaskan akrilik, yang digunakan untuk tampalan kecil. Skim coat adalah sebatian berasaskan simen atau gipsum yang digunakan sebagai lapisan permukaan penuh (biasanya 1–3mm tebal) untuk meratakan dan melicinkan keseluruhan dinding. Skim coat adalah piawai profesional; dempul adalah pembaikan DIY yang cepat." }
        ],
        metaTitle: "Skim Coat Dinding & Siling KL & Selangor",
        metaDesc: "Salutan skim licin kaca untuk dinding dan siling di KL & Selangor. Kemasan dua lapisan, pembaikan retak, siap-cat. Dari RM4/sqft. Sebatian Knauf dan Mapei.",
        aioSummary: "KL Servis Rumah menyediakan salutan skim dinding dan siling profesional di KL & Selangor. Sebatian diubah suai polimer, aplikasi dua lapisan, pengamplasan penuh, pembaikan retak, tetulang sendi. Kemasan siap-cat untuk Nippon, Dulux, Jotun, dan sistem cat premium.",
        warranty: "Jaminan Kelicinan & Lekatan 12 Bulan"
      },
      zh: {
        title: "墙面与天花腻子",
        tagline: "玻璃般光滑的墙面与天花腻子，可上漆的表面，全套基层处理与裂缝修补。从 RM 4 / sq ft 起。",
        description: "KL Servis Rumah 在整个吉隆坡与雪兰莪提供专业腻子服务，让您的墙面与天花获得完美平整、即可上漆的表面。腻子是涂在已抹灰或旧漆面上的一层细石膏，用来消除抹刀痕、细裂纹、接缝不平和小瑕疵。我们使用优质聚合物改性腻子（Knauf、Gyproc、Mapei），做两到三道，根据面积用手工或长杆打磨。最终得到完全光滑、均匀、可上漆的表面，连普通底漆都能呈现高端效果。",
        highlights: [
          "玻璃般光滑的表面，适合高光、丝光和主题墙漆系统",
          "两到三道聚合物改性腻子，层间充分打磨",
          "包含裂缝修补、接缝加固和小面积基层找平",
          "兼容所有主流高端漆：Nippon、Dulux、Jotun、Skshu、Benjamin Moore",
          "适用于有地、公寓与商业室内空间，包括高端主题墙",
          "出活快——一套标准公寓通常 2 到 4 天即可完工"
        ],
        subServices: [
          { name: "墙面腻子", price: "从 RM 4 / sq ft 起", desc: "在已抹灰或旧漆墙面上做两道腻子，达到玻璃般光滑、可上漆的效果。" },
          { name: "天花腻子", price: "从 RM 5 / sq ft 起", desc: "对旧石膏天花重新刮腻子，让旧表面焕然一新再上漆。" },
          { name: "裂缝与接缝修补", price: "从 RM 18 / 延尺起", desc: "开槽、清理后用弹性丙烯酸填料处理沉降与结构性裂缝。" },
          { name: "整套公寓重刮腻子配套", price: "从 RM 3,800 起", desc: "1,000 sqft 公寓全屋刮腻子，准备上漆。" }
        ],
        process: [
          { step: "01", title: "表面检查", desc: "我们评估现有基层，找出裂缝、空鼓区域与旧漆状况。铲除松动材料，并处理霉菌与盐析。" },
          { step: "02", title: "界面剂 / 封闭底漆", desc: "涂刷界面底漆封闭旧漆并与腻子形成强附着力。多孔基层可能需要两遍。" },
          { step: "03", title: "第一道腻子", desc: "优质聚合物改性腻子用抹刀均匀批刮，填补瑕疵并找平基层。" },
          { step: "04", title: "打磨与第二道", desc: "第一道干燥 4 到 6 小时后用长杆打磨光滑；批刮第二道，再次打磨至最终平整。" },
          { step: "05", title: "终检", desc: "用扫光法逐面检查平整度；残留的抹刀痕和针孔点补后局部打磨，再上漆。" }
        ],
        faqs: [
          { q: "已经抹灰的墙面还需要刮腻子吗？", a: "看抹灰质量以及您想要的漆面效果。马来西亚新抹灰墙面通常粗糙，涂高端漆前至少要刮一道腻子。如果使用高光、丝光或深色漆，强烈建议刮两道腻子，避免抹刀痕和不均匀光泽。" },
          { q: "腻子能永久盖住细裂纹吗？", a: "光靠腻子只能暂时盖住细裂纹，结构性裂纹几个月内会重新出现。我们采用 V 形开槽、弹性丙烯酸填料、玻纤网格加固、然后再刮腻子。这种组合通常可保持 5 年以上。" },
          { q: "腻子多久能干透再上漆？", a: "每道需要 4 到 6 小时的干燥时间（马来西亚常规湿度）。最后一道需等 24 小时再上底漆和面漆。强烈建议等满 24 小时——过早涂漆会锁住水分导致漆面失效。" },
          { q: "腻子和补墙膏是一样的吗？", a: "不一样。补墙膏是薄薄一层（通常丙烯酸基）的局部小修补料；腻子是水泥基或石膏基的整面找平层（通常 1–3mm 厚）。腻子是专业标准，补墙膏是 DIY 临时方案。" }
        ],
        metaTitle: "吉隆坡与雪兰莪墙面与天花腻子服务",
        metaDesc: "吉隆坡与雪兰莪墙面与天花玻璃般光滑腻子。两道收光、裂缝修补、即可上漆。从 RM4/sqft 起。Knauf 与 Mapei 腻子。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供专业墙面与天花腻子服务。聚合物改性腻子、两道施工、充分打磨、裂缝修补、接缝加固。可上漆表面，兼容 Nippon、Dulux、Jotun 与高端漆系统。",
        warranty: "12 个月平整度与粘结保修"
      }
    }
  },

  // ── 14. FLOORING (VINYL, SPC, LAMINATE) ───────────────────────────────
  "flooring": {
    slug: "flooring",
    title: "Vinyl, SPC & Laminate Flooring",
    tagline: "Modern click-lock flooring for homes and offices. Waterproof SPC, scratch-resistant laminate, and luxury vinyl planks. From RM 12 / sq ft.",
    description:
      "KL Servis Rumah supplies and installs modern click-lock flooring across Kuala Lumpur and Selangor. We work with every major Malaysian flooring brand — FloorEver, NS Floors, Quick-Step, Kronotex, and Audacity — and we install three main systems: SPC (Stone Polymer Composite, the most popular waterproof choice for Malaysian homes), laminate (the budget-friendly wood-look option), and luxury vinyl planks / tiles (LVP/LVT) for wet areas. Every installation includes moisture testing of the subfloor, proper underlayment, expansion gap planning, transition strip fitting, and skirting finishing. Our floorers use premium pull bars, tapping blocks, and undercut door jamb saws to deliver a professional, squeak-free finish that lasts 15+ years.",
    startPrice: "RM 12",
    icon: "square",
    highlights: [
      "Waterproof SPC flooring suitable for kitchens, bathrooms, and high-humidity Malaysian homes",
      "Click-lock system with no glue, no nails, and no on-site dust from sanding or sealing",
      "Compatible with underfloor heating systems (heating mats under SPC or engineered boards)",
      "Squeak-free installation with proper underlayment, expansion gaps, and transition strips",
      "Door jamb undercutting for a flush, professional finish between rooms",
      "Removal and disposal of old flooring included in every replacement project"
    ],
    subServices: [
      { name: "SPC Click-Lock Flooring Install", price: "From RM 12 / sq ft", desc: "Waterproof stone polymer composite planks with built-in underlay, ideal for whole-home installation." },
      { name: "Laminate Flooring Install", price: "From RM 9 / sq ft", desc: "Budget-friendly HDF laminate with wood-look finish, AC4–AC5 wear rating for residential traffic." },
      { name: "Luxury Vinyl Plank (LVP) Install", price: "From RM 14 / sq ft", desc: "100% waterproof LVP with realistic wood grain, perfect for wet kitchens, bathrooms, and basement." },
      { name: "Skirting & Transition Strip Fitting", price: "From RM 6 / linier ft", desc: "PVC, MDF, or aluminium skirting plus T-mould and reducer transitions for a clean room-to-room finish." }
    ],
    process: [
      { step: "01", title: "Subfloor Moisture Test", desc: "We measure the concrete or existing floor moisture content. Anything above 3% requires a 6-mil vapour barrier underlayment to prevent future cupping or mould." },
      { step: "02", title: "Subfloor Levelling", desc: "Cement-based self-levelling compound is applied where needed to achieve the flatness tolerance required by the flooring manufacturer (typically 3mm over 2m)." },
      { step: "03", title: "Underlayment Installation", desc: "Premium IXPE or EVA foam underlayment is rolled out with taped seams to provide acoustic damping, thermal insulation, and minor subfloor levelling." },
      { step: "04", title: "Plank Installation", desc: "Boards are installed row by row with proper staggered joints, manufacturer-specified expansion gaps (8–12mm) at all walls and fixed objects, and tapped together using a pull bar." },
      { step: "05", title: "Skirting & Transitions", desc: "PVC or matching skirting is installed with neat mitred corners. T-mould, reducer, and end-cap transitions are fitted at doorways and between different floor types." }
    ],
    faqs: [
      { q: "What is the difference between SPC, laminate, and vinyl flooring?", a: "SPC (Stone Polymer Composite) has a stone-plastic core that makes it 100% waterproof and very dimensionally stable — ideal for Malaysian homes. Laminate is an HDF wood-fibre board with a printed wear layer — more affordable, less water-resistant, but excellent scratch resistance. Luxury Vinyl Plank (LVP) is pure PVC with realistic wood-look printing — fully waterproof and softer underfoot. We recommend SPC for whole-home use, LVP for wet areas, and laminate for bedrooms and dry living areas." },
      { q: "Can I install click-lock flooring over existing tiles?", a: "Yes, in most cases. The existing tiles must be solid (no hollow spots), level to within 3mm over 2m, and free of lippage. We may need a thin levelling compound in spots, and we always use a quality underlayment to bridge minor grout-line texture. This saves demolition cost and time." },
      { q: "How long does it take to install flooring in a 1,000 sqft condo?", a: "Typically 2 to 3 days for SPC or laminate, including subfloor prep, underlayment, and skirting. Larger areas or complex layouts (lots of angles, kitchen islands, bathroom cut-outs) can take 4 to 5 days. We schedule a 1-day buffer for drying of any self-levelling compound." },
      { q: "Do you handle furniture moving during flooring installation?", a: "Yes. We can include a furniture-moving package that covers disassembly of beds, wardrobes (when possible), and dining sets, safe relocation, and reassembly after the floor is laid. This is quoted separately based on the volume of furniture." }
    ],
    heroImage: "/hero-flooring.svg",
    metaTitle: "Vinyl, SPC & Laminate Flooring Installation KL & Selangor",
    metaDesc: "Click-lock flooring in KL & Selangor. Waterproof SPC, laminate, luxury vinyl. FloorEver, Quick-Step, NS Floors. From RM9/sqft. Subfloor prep included.",
    aioSummary: "KL Servis Rumah supplies and installs vinyl, SPC, and laminate flooring across KL & Selangor. FloorEver, Quick-Step, NS Floors, Kronotex, Audacity. Click-lock system with no glue, no dust, squeak-free. Subfloor prep, underlayment, skirting, transitions all included.",
    warranty: "5-Year Installation Workmanship Warranty",
    i18n: {
      ms: {
        title: "Lantai Vinyl, SPC & Laminate",
        tagline: "Lantai click-lock moden untuk rumah dan pejabat. SPC kalis air, laminate tahan calar dan papan vinyl mewah. Dari RM 12 / kaki persegi.",
        description: "KL Servis Rumah membekalkan dan memasang lantai click-lock moden di seluruh Kuala Lumpur dan Selangor. Kami bekerja dengan setiap jenama lantai utama Malaysia — FloorEver, NS Floors, Quick-Step, Kronotex dan Audacity — dan kami memasang tiga sistem utama: SPC (Stone Polymer Composite, pilihan kalis air paling popular untuk rumah Malaysia), laminate (pilihan rupa kayu mesra bajet) dan papan / jubin vinyl mewah (LVP/LVT) untuk kawasan basah. Setiap pemasangan termasuk ujian kelembapan subfloor, underlayment yang betul, perancangan jurang pengembangan, pemasangan jalur peralihan dan kemasan skirting. Pemasang lantai kami menggunakan pull bar premium, tapping block dan gergaji undercut bingkai pintu untuk menyampaikan kemasan profesional tanpa derit yang tahan 15+ tahun.",
        highlights: [
          "Lantai SPC kalis air sesuai untuk dapur, bilik mandi dan rumah Malaysia berkelembapan tinggi",
          "Sistem click-lock tanpa gam, tanpa paku dan tanpa habuk tapak daripada pengisaran atau pengedap",
          "Serasi dengan sistem pemanasan bawah lantai (tikar pemanas di bawah SPC atau papan kejuruteraan)",
          "Pemasangan tanpa derit dengan underlayment yang betul, jurang pengembangan dan jalur peralihan",
          "Undercut bingkai pintu untuk kemasan rata dan profesional antara bilik",
          "Penyingkiran dan pelupusan lantai lama termasuk dalam setiap projek penggantian"
        ],
        subServices: [
          { name: "Pemasangan Lantai SPC Click-Lock", price: "Dari RM 12 / kaki persegi", desc: "Papan komposit polimer batu kalis air dengan underlay terbina dalam, sesuai untuk pemasangan seluruh rumah." },
          { name: "Pemasangan Lantai Laminate", price: "Dari RM 9 / kaki persegi", desc: "Laminate HDF mesra bajet dengan kemasan rupa kayu, penarafan haus AC4–AC5 untuk trafik kediaman." },
          { name: "Pemasangan Papan Vinyl Mewah (LVP)", price: "Dari RM 14 / kaki persegi", desc: "LVP 100% kalis air dengan urat kayu realistik, sesuai untuk dapur basah, bilik mandi dan besmen." },
          { name: "Pemasangan Skirting & Jalur Peralihan", price: "Dari RM 6 / kaki linier", desc: "Skirting PVC, MDF atau aluminium serta peralihan T-mould dan reducer untuk kemasan bilik-ke-bilik yang kemas." }
        ],
        process: [
          { step: "01", title: "Ujian Kelembapan Subfloor", desc: "Kami mengukur kandungan kelembapan konkrit atau lantai sedia ada. Apa-apa melebihi 3% memerlukan underlayment halangan wap 6-mil untuk mengelakkan cupping atau kulat masa depan." },
          { step: "02", title: "Pemerataan Subfloor", desc: "Sebatian rata-sendiri berasaskan simen disapu di mana perlu untuk mencapai toleransi kerataan yang dikehendaki pengeluar lantai (biasanya 3mm atas 2m)." },
          { step: "03", title: "Pemasangan Underlayment", desc: "Underlayment busa IXPE atau EVA premium dibentangkan dengan sambungan bertape untuk memberikan redaman akustik, penebat haba dan pemerataan subfloor kecil." },
          { step: "04", title: "Pemasangan Papan", desc: "Papan dipasang baris demi baris dengan sambungan selang-seli yang betul, jurang pengembangan yang ditentukan pengeluar (8–12mm) pada semua dinding dan objek tetap, dan diketuk bersama menggunakan pull bar." },
          { step: "05", title: "Skirting & Peralihan", desc: "Skirting PVC atau sepadan dipasang dengan sudut mitred kemas. Peralihan T-mould, reducer dan end-cap dipasang di laluan pintu dan antara jenis lantai berbeza." }
        ],
        faqs: [
          { q: "Apakah perbezaan antara lantai SPC, laminate dan vinyl?", a: "SPC (Stone Polymer Composite) mempunyai teras batu-plastik yang menjadikannya 100% kalis air dan sangat stabil dimensi — sesuai untuk rumah Malaysia. Laminate ialah papan gentian kayu HDF dengan lapisan haus bercetak — lebih berpatutan, kurang tahan air, tetapi rintangan calar sangat baik. Papan Vinyl Mewah (LVP) ialah PVC tulen dengan cetakan rupa kayu realistik — kalis air sepenuhnya dan lebih lembut di kaki. Kami mengesyorkan SPC untuk kegunaan seluruh rumah, LVP untuk kawasan basah dan laminate untuk bilik tidur dan ruang tamu kering." },
          { q: "Boleh saya memasang lantai click-lock di atas jubin sedia ada?", a: "Ya, dalam kebanyakan kes. Jubin sedia ada mesti pepejal (tiada bahagian kosong), rata dalam 3mm atas 2m dan bebas daripada lippage. Kami mungkin memerlukan sebatian rata nipis di sesetengah tempat, dan kami sentiasa menggunakan underlayment berkualiti untuk merentangi tekstur garis grout kecil. Ini menjimatkan kos dan masa perobohan." },
          { q: "Berapa lama masa yang diambil untuk memasang lantai di kondominium 1,000 kaki persegi?", a: "Biasanya 2 hingga 3 hari untuk SPC atau laminate, termasuk persediaan subfloor, underlayment dan skirting. Kawasan lebih besar atau susun atur kompleks (banyak sudut, pulau dapur, potongan bilik mandi) boleh mengambil 4 hingga 5 hari. Kami menjadualkan penampan 1 hari untuk pengeringan sebarang sebatian rata-sendiri." },
          { q: "Adakah anda mengendalikan perpindahan perabot semasa pemasangan lantai?", a: "Ya. Kami boleh menyertakan pakej perpindahan perabot yang merangkumi pembongkaran katil, almari pakaian (apabila mungkin) dan set makan, pemindahan selamat dan pemasangan semula selepas lantai dipasang. Ini disebut harga secara berasingan berdasarkan jumlah perabot." }
        ],
        metaTitle: "Pemasangan Lantai Vinyl, SPC & Laminate KL & Selangor",
        metaDesc: "Lantai click-lock di KL & Selangor. SPC kalis air, laminate, vinyl mewah. FloorEver, Quick-Step, NS Floors. Dari RM9/kaki persegi. Persediaan subfloor termasuk.",
        aioSummary: "KL Servis Rumah membekalkan dan memasang lantai vinyl, SPC dan laminate di seluruh KL & Selangor. FloorEver, Quick-Step, NS Floors, Kronotex, Audacity. Sistem click-lock tanpa gam, tanpa habuk, tanpa derit. Persediaan subfloor, underlayment, skirting dan peralihan semua termasuk.",
        warranty: "Jaminan Kerja Pemasangan 5 Tahun"
      },
      zh: {
        title: "Vinyl、SPC 与复合地板",
        tagline: "适用于家庭与办公室的现代锁扣地板。防水 SPC、耐磨复合地板与豪华乙烯基地板。从 RM 12 / 平方英尺起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪供应并安装现代锁扣地板。我们与马来西亚各大地板品牌合作——FloorEver、NS Floors、Quick-Step、Kronotex 与 Audacity——安装三大主流系统：SPC（石塑复合地板，马来西亚家庭最受欢迎的防水选择）、复合地板（经济实惠的仿木纹选择）以及用于潮湿区域的豪华乙烯基地板（LVP/LVT）。每次安装都包括地面基层含水率测试、合适的垫层、伸缩缝规划、收边条安装与踢脚线收尾。我们的地板师傅使用优质回力钩、敲块与门框下切锯，交付专业、无异响、可使用 15 年以上的成品。",
        highlights: [
          "防水 SPC 地板适合厨房、浴室与高湿度的马来西亚家庭",
          "锁扣系统免胶、免钉，现场无打磨或上漆粉尘",
          "兼容地暖系统（发热垫铺设于 SPC 或复合板下）",
          "垫层、伸缩缝与收边条到位，安装无异响",
          "门框下切处理，房间之间收口平整专业",
          "每次更换项目均包含旧地板的拆除与清运"
        ],
        subServices: [
          { name: "SPC 锁扣地板安装", price: "从 RM 12 / 平方英尺起", desc: "带内置垫层的防水石塑复合地板，非常适合全屋铺装。" },
          { name: "复合地板安装", price: "从 RM 9 / 平方英尺起", desc: "经济实惠的 HDF 复合地板，仿木纹表面处理，AC4–AC5 耐磨等级适合家用。" },
          { name: "豪华乙烯基地板 (LVP) 安装", price: "从 RM 14 / 平方英尺起", desc: "100% 防水 LVP，木纹逼真，适合湿厨房、浴室与地下室。" },
          { name: "踢脚线与收边条安装", price: "从 RM 6 / 延英尺起", desc: "PVC、MDF 或铝合金踢脚线，配 T 型条与高低扣，房间之间收口干净利落。" }
        ],
        process: [
          { step: "01", title: "基层含水率测试", desc: "我们测量混凝土或现有地面的含水率。超过 3% 需要铺设 6-mil 防潮垫层，防止日后起拱或发霉。" },
          { step: "02", title: "基层找平", desc: "在需要处施工水泥基自流平，达到地板制造商要求的平整度公差（通常 2 米内 3mm）。" },
          { step: "03", title: "垫层铺设", desc: "铺设优质 IXPE 或 EVA 泡沫垫层，接缝贴胶带，提供吸音、保温与轻微找平功能。" },
          { step: "04", title: "地板安装", desc: "逐排安装，错缝规范，所有墙体与固定物处按制造商要求留伸缩缝（8–12mm），用回力钩敲合。" },
          { step: "05", title: "踢脚线与收边", desc: "安装 PVC 或配套踢脚线，阴阳角斜切整齐。门口与不同地面材料之间安装 T 型条、高低扣与收边条。" }
        ],
        faqs: [
          { q: "SPC、复合地板和乙烯基地板有什么区别？", a: "SPC（石塑复合地板）采用石粉塑料芯材，100% 防水且尺寸非常稳定——非常适合马来西亚家庭。复合地板是 HDF 木质纤维板加印刷耐磨层——更经济，耐水性较差，但抗刮性能出色。豪华乙烯基地板（LVP）是纯 PVC 加逼真木纹印刷——完全防水且脚感更软。我们建议全屋用 SPC，潮湿区用 LVP，卧室与干燥起居区用复合地板。" },
          { q: "可以在现有瓷砖上直接铺锁扣地板吗？", a: "大多数情况下可以。现有瓷砖必须坚实（无空鼓）、2 米内平整度在 3mm 以内且无高低差。局部可能需要薄层找平，我们总是使用优质垫层来弥合轻微的砖缝纹理。这样可节省拆除的费用与时间。" },
          { q: "1,000 平方英尺的公寓铺地板需要多长时间？", a: "SPC 或复合地板通常 2 到 3 天，包括基层处理、垫层与踢脚线。面积更大或布局复杂（转角多、厨房中岛、浴室缺口）可能需要 4 到 5 天。我们会预留 1 天缓冲让自流平干燥。" },
          { q: "铺地板期间你们负责搬家具吗？", a: "负责。我们可以提供搬家服务包，包括床、衣柜（可行时）与餐桌椅的拆卸、安全搬移，以及地板铺好后的复位安装。此项根据家具数量单独报价。" }
        ],
        metaTitle: "吉隆坡与雪兰莪 Vinyl、SPC 与复合地板安装",
        metaDesc: "吉隆坡与雪兰莪锁扣地板。防水 SPC、复合地板、豪华乙烯基。FloorEver、Quick-Step、NS Floors。从 RM9/平方英尺起。含基层处理。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪供应并安装 vinyl、SPC 与复合地板。FloorEver、Quick-Step、NS Floors、Kronotex、Audacity。锁扣系统免胶、无尘、无异响。基层处理、垫层、踢脚线、收边条全包。",
        warranty: "5 年安装工艺保修"
      }
    }
  },

  // ── 15. EPOXY FLOORING ────────────────────────────────────────
  "epoxy-flooring": {
    slug: "epoxy-flooring",
    title: "Epoxy & Polyurethane Flooring",
    tagline: "Heavy-duty epoxy floor coating for garages, warehouses, factories, showrooms, and commercial kitchens. From RM 18 / sq ft.",
    description:
      "KL Servis Rumah installs industrial-grade epoxy and polyurethane floor coatings across Kuala Lumpur and Selangor. Epoxy is the go-to solution for areas that need a seamless, chemical-resistant, easy-to-clean, and abrasion-resistant surface: garages, warehouses, factories, commercial kitchens, car showrooms, pharmaceutical plants, and even modern residential interiors. We work with every major system — self-levelling epoxy (mirror-smooth 2–4mm), broadcast quartz or flake (slip-resistant 3–6mm), mortar screed (heavy-duty 5–10mm for forklift traffic), and polyurethane (UV-stable, scratch-resistant topcoats). Every installation includes diamond-grinding substrate preparation, primer, body coat, optional decorative flake, and a UV-stable aliphatic polyurethane topcoat for the longest service life.",
    startPrice: "RM 18",
    icon: "circle-dot",
    highlights: [
      "Diamond-grinding surface preparation (CSP 3–4 profile) for maximum epoxy bond strength",
      "Self-levelling epoxy for mirror-smooth, easy-to-clean showroom and residential floors",
      "Slip-resistant broadcast quartz and decorative flake systems for safety and aesthetics",
      "Chemical-resistant systems for laboratories, factories, and commercial kitchens",
      "UV-stable aliphatic polyurethane topcoat prevents yellowing in sun-exposed areas",
      "Heavy-duty mortar screed for forklift, pallet jack, and vehicle traffic zones"
    ],
    subServices: [
      { name: "Self-Levelling Epoxy Floor", price: "From RM 18 / sq ft", desc: "Mirror-smooth 2–3mm self-levelling epoxy for residential, showroom, and light commercial floors." },
      { name: "Flake / Quartz Broadcast Epoxy", price: "From RM 22 / sq ft", desc: "Decorative vinyl flake or coloured quartz broadcast with slip-resistant finish for garages and kitchens." },
      { name: "Heavy-Duty Mortar Screed", price: "From RM 32 / sq ft", desc: "5–10mm trowel-applied epoxy mortar for warehouses, factories, and forklift traffic zones." },
      { name: "Epoxy Floor Repair & Recoating", price: "From RM 12 / sq ft", desc: "Diamond-grinding the existing epoxy, repairing damaged areas, and applying fresh primer + topcoat." }
    ],
    process: [
      { step: "01", title: "Substrate Assessment", desc: "We inspect the existing concrete for moisture, oil contamination, cracks, and surface profile. We perform a calcium chloride moisture test if needed, and recommend a moisture-mitigating primer if required." },
      { step: "02", title: "Diamond Grinding", desc: "Industrial walk-behind diamond grinders with vacuum extraction are used to achieve a CSP 3–4 profile. Cracks are routed open and filled with epoxy mortar." },
      { step: "03", title: "Primer Application", desc: "A penetrating epoxy primer is applied by roller to seal the concrete and create a chemical bond with the body coat. We allow 12–24 hours cure depending on ambient conditions." },
      { step: "04", title: "Body Coat / Broadcast", desc: "Self-levelling epoxy is poured and spread with a notched trowel or spiked roller. For broadcast systems, decorative flake or quartz is hand-cast to full rejection into the wet body coat." },
      { step: "05", title: "Topcoat & Curing", desc: "After the body coat cures, excess flake is scraped and vacuumed, and a UV-stable aliphatic polyurethane topcoat is applied in two coats for maximum scratch and chemical resistance." }
    ],
    faqs: [
      { q: "How long does epoxy flooring take to install and cure?", a: "Most residential garage or showroom projects (300–500 sq ft) take 3 to 4 days including grinding, primer, body coat, and topcoat. Light foot traffic is allowed after 24 hours, vehicle traffic after 72 hours, and full chemical resistance after 7 days. We will schedule around your access needs." },
      { q: "Will my epoxy floor turn yellow in the sun?", a: "Standard aromatic epoxy does yellow with UV exposure. To prevent this, we always apply a UV-stable aliphatic polyurethane topcoat (e.g., Sika, BASF, or RPM products). This topcoat is crystal-clear and stays clear for 10+ years even in direct sun-exposed areas like car porches and outdoor walkways." },
      { q: "Can epoxy be applied over existing tiles?", a: "Generally not recommended. Epoxy needs to bond directly to a sound concrete substrate. We typically remove existing tiles (we can include this in the quote) and grind the underlying concrete. In some cases, an existing epoxy floor can be recoated without removal — we assess this case by case." },
      { q: "Is epoxy flooring slippery when wet?", a: "Standard self-levelling epoxy is smooth and can be slippery when wet, especially in commercial kitchens or pool decks. For these areas, we recommend a broadcast quartz or flake system with a fine-grit topcoat additive that delivers P4–P5 slip rating (AS/NZS 4586) without sacrificing cleanability." }
    ],
    heroImage: "/hero-epoxy-flooring.svg",
    metaTitle: "Epoxy & PU Floor Coating KL & Selangor",
    metaDesc: "Industrial epoxy flooring in KL & Selangor. Garage, warehouse, factory, showroom, kitchen. Self-levelling, flake, mortar screed. From RM18/sqft. UV-stable topcoat.",
    aioSummary: "KL Servis Rumah installs industrial-grade epoxy and polyurethane floor coatings across KL & Selangor. Self-levelling, broadcast quartz, decorative flake, mortar screed systems. Diamond grinding, moisture-mitigating primer, UV-stable aliphatic PU topcoat. Sika, BASF, RPM systems.",
    warranty: "5-Year Delamination & Yellowing Warranty",
    i18n: {
      ms: {
        title: "Lantai Epoxy & Polyurethane",
        tagline: "Salutan lantai epoxy tugas berat untuk garaj, gudang, kilang, bilik pameran dan dapur komersial. Dari RM 18 / kaki persegi.",
        description: "KL Servis Rumah memasang salutan lantai epoxy dan polyurethane gred industri di seluruh Kuala Lumpur dan Selangor. Epoxy ialah penyelesaian utama untuk kawasan yang memerlukan permukaan lancar, tahan bahan kimia, mudah dibersihkan dan tahan lelasan: garaj, gudang, kilang, dapur komersial, bilik pameran kereta, loji farmaseutikal dan juga dalaman kediaman moden. Kami bekerja dengan setiap sistem utama — epoxy rata-sendiri (licin cermin 2–4mm), taburan kuarza atau flake (rintangan gelincir 3–6mm), mortar screed (tugas berat 5–10mm untuk trafik forklift) dan polyurethane (topcoat stabil UV, tahan calar). Setiap pemasangan termasuk penyediaan substrat pengisaran intan, primer, lapisan badan, flake hiasan pilihan dan topcoat polyurethane alifatik stabil UV untuk jangka hayat perkhidmatan terpanjang.",
        highlights: [
          "Penyediaan permukaan pengisaran intan (profil CSP 3–4) untuk kekuatan ikatan epoxy maksimum",
          "Epoxy rata-sendiri untuk lantai bilik pameran dan kediaman yang licin cermin dan mudah dibersihkan",
          "Sistem taburan kuarza rintangan gelincir dan flake hiasan untuk keselamatan dan estetika",
          "Sistem tahan bahan kimia untuk makmal, kilang dan dapur komersial",
          "Topcoat polyurethane alifatik stabil UV mengelakkan penguningan di kawasan terdedah matahari",
          "Mortar screed tugas berat untuk zon trafik forklift, pallet jack dan kenderaan"
        ],
        subServices: [
          { name: "Lantai Epoxy Rata-Sendiri", price: "Dari RM 18 / kaki persegi", desc: "Epoxy rata-sendiri 2–3mm licin cermin untuk lantai kediaman, bilik pameran dan komersial ringan." },
          { name: "Epoxy Taburan Flake / Kuarza", price: "Dari RM 22 / kaki persegi", desc: "Taburan flake vinyl hiasan atau kuarza berwarna dengan kemasan rintangan gelincir untuk garaj dan dapur." },
          { name: "Mortar Screed Tugas Berat", price: "Dari RM 32 / kaki persegi", desc: "Mortar epoxy sapuan trowel 5–10mm untuk gudang, kilang dan zon trafik forklift." },
          { name: "Pembaikan & Salutan Semula Lantai Epoxy", price: "Dari RM 12 / kaki persegi", desc: "Mengisar intan epoxy sedia ada, membaiki kawasan rosak dan menyapu primer + topcoat baharu." }
        ],
        process: [
          { step: "01", title: "Penilaian Substrat", desc: "Kami memeriksa konkrit sedia ada untuk kelembapan, pencemaran minyak, retakan dan profil permukaan. Kami menjalankan ujian kelembapan kalsium klorida jika perlu, dan mengesyorkan primer tebusan kelembapan jika diperlukan." },
          { step: "02", title: "Pengisaran Intan", desc: "Pengisar intan walk-behind industri dengan sedutan vakum digunakan untuk mencapai profil CSP 3–4. Retakan dibuka dan diisi dengan mortar epoxy." },
          { step: "03", title: "Penyapuan Primer", desc: "Primer epoxy menembus disapu dengan roller untuk mengedap konkrit dan mewujudkan ikatan kimia dengan lapisan badan. Kami membenarkan pengeringan 12–24 jam bergantung pada keadaan ambien." },
          { step: "04", title: "Lapisan Badan / Taburan", desc: "Epoxy rata-sendiri dituang dan diratakan dengan trowel bergerigi atau roller berduri. Untuk sistem taburan, flake hiasan atau kuarza ditabur tangan ke penolakan penuh ke dalam lapisan badan basah." },
          { step: "05", title: "Topcoat & Pengeringan", desc: "Selepas lapisan badan kering, lebihan flake dikikis dan divakum, dan topcoat polyurethane alifatik stabil UV disapu dalam dua lapisan untuk rintangan calar dan bahan kimia maksimum." }
        ],
        faqs: [
          { q: "Berapa lama lantai epoxy mengambil masa untuk dipasang dan kering?", a: "Kebanyakan projek garaj kediaman atau bilik pameran (300–500 kaki persegi) mengambil 3 hingga 4 hari termasuk pengisaran, primer, lapisan badan dan topcoat. Trafik kaki ringan dibenarkan selepas 24 jam, trafik kenderaan selepas 72 jam dan rintangan bahan kimia penuh selepas 7 hari. Kami akan menjadualkan mengikut keperluan akses anda." },
          { q: "Adakah lantai epoxy saya akan menguning di bawah matahari?", a: "Epoxy aromatik standard memang menguning dengan pendedahan UV. Untuk mengelakkan ini, kami sentiasa menyapu topcoat polyurethane alifatik stabil UV (contohnya produk Sika, BASF atau RPM). Topcoat ini jernih seperti kristal dan kekal jernih selama 10+ tahun walaupun di kawasan terdedah matahari langsung seperti beranda kereta dan laluan luar." },
          { q: "Boleh epoxy disapu di atas jubin sedia ada?", a: "Secara amnya tidak disyorkan. Epoxy perlu melekat terus pada substrat konkrit yang kukuh. Kami biasanya menanggalkan jubin sedia ada (kami boleh sertakan ini dalam sebut harga) dan mengisar konkrit di bawahnya. Dalam sesetengah kes, lantai epoxy sedia ada boleh disalut semula tanpa penyingkiran — kami menilai ini kes demi kes." },
          { q: "Adakah lantai epoxy licin apabila basah?", a: "Epoxy rata-sendiri standard licin dan boleh menjadi licin apabila basah, terutamanya di dapur komersial atau dek kolam. Untuk kawasan ini, kami mengesyorkan sistem taburan kuarza atau flake dengan bahan tambahan topcoat grit halus yang memberikan penarafan gelincir P4–P5 (AS/NZS 4586) tanpa mengorbankan kebolehbersihan." }
        ],
        metaTitle: "Salutan Lantai Epoxy & PU KL & Selangor",
        metaDesc: "Lantai epoxy industri di KL & Selangor. Garaj, gudang, kilang, bilik pameran, dapur. Rata-sendiri, flake, mortar screed. Dari RM18/kaki persegi. Topcoat stabil UV.",
        aioSummary: "KL Servis Rumah memasang salutan lantai epoxy dan polyurethane gred industri di seluruh KL & Selangor. Sistem rata-sendiri, taburan kuarza, flake hiasan, mortar screed. Pengisaran intan, primer tebusan kelembapan, topcoat PU alifatik stabil UV. Sistem Sika, BASF, RPM.",
        warranty: "Jaminan Delaminasi & Penguningan 5 Tahun"
      },
      zh: {
        title: "环氧与聚氨酯地坪",
        tagline: "适用于车库、仓库、工厂、展厅与商业厨房的重型环氧地坪涂层。从 RM 18 / 平方英尺起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪安装工业级环氧与聚氨酯地坪涂层。环氧是需要无缝、耐化学、易清洁且耐磨表面的区域的首选方案：车库、仓库、工厂、商业厨房、汽车展厅、制药厂，甚至现代家居室内。我们施工各种主流系统——自流平环氧（镜面效果 2–4mm）、撒砂石英或彩片（防滑 3–6mm）、砂浆面层（重型 5–10mm 适合叉车通行）以及聚氨酯（抗紫外线、耐刮面漆）。每次安装都包括金刚石打磨基层处理、底漆、中涂、可选装饰彩片，以及抗紫外线脂肪族聚氨酯面漆，确保最长的使用寿命。",
        highlights: [
          "金刚石打磨表面处理（CSP 3–4 粗糙度），环氧附着力最大化",
          "自流平环氧，展厅与住宅地面镜面光滑、易于清洁",
          "防滑石英撒砂与装饰彩片系统，兼顾安全与美观",
          "适用于实验室、工厂与商业厨房的耐化学系统",
          "抗紫外线脂肪族聚氨酯面漆，防止阳光照射区域黄变",
          "重型砂浆面层，适合叉车、托盘车与车辆通行区域"
        ],
        subServices: [
          { name: "自流平环氧地坪", price: "从 RM 18 / 平方英尺起", desc: "2–3mm 镜面自流平环氧，适合住宅、展厅与轻型商业地面。" },
          { name: "彩片 / 石英撒砂环氧", price: "从 RM 22 / 平方英尺起", desc: "装饰乙烯基彩片或彩色石英撒砂，防滑表面，适合车库与厨房。" },
          { name: "重型砂浆面层", price: "从 RM 32 / 平方英尺起", desc: "5–10mm 镘涂环氧砂浆，适合仓库、工厂与叉车通行区。" },
          { name: "环氧地坪维修与翻新", price: "从 RM 12 / 平方英尺起", desc: "金刚石打磨现有环氧，修补损坏区域，重新施工底漆 + 面漆。" }
        ],
        process: [
          { step: "01", title: "基层评估", desc: "我们检查现有混凝土的含水率、油污、裂缝与表面粗糙度。必要时进行氯化钙含水率测试，并按需推荐防潮底漆。" },
          { step: "02", title: "金刚石打磨", desc: "使用带吸尘的工业手推式金刚石打磨机达到 CSP 3–4 粗糙度。裂缝开槽后用环氧砂浆填补。" },
          { step: "03", title: "底漆施工", desc: "用滚筒涂布渗透型环氧底漆，封闭混凝土并与中涂形成化学粘结。根据环境条件养护 12–24 小时。" },
          { step: "04", title: "中涂 / 撒砂", desc: "自流平环氧倾倒后用齿形镘刀或放气滚筒摊开。撒砂系统在湿中涂上手撒装饰彩片或石英至饱和。" },
          { step: "05", title: "面漆与养护", desc: "中涂固化后，刮除并吸净多余彩片，分两遍涂布抗紫外线脂肪族聚氨酯面漆，获得最大耐刮与耐化学性能。" }
        ],
        faqs: [
          { q: "环氧地坪施工与固化需要多长时间？", a: "大多数住宅车库或展厅项目（300–500 平方英尺）需要 3 到 4 天，包括打磨、底漆、中涂与面漆。24 小时后可轻度行走，72 小时后可通车，7 天后达到完全耐化学性能。我们会按您的通行需求安排工期。" },
          { q: "我的环氧地坪在阳光下会变黄吗？", a: "标准芳香族环氧在紫外线照射下确实会黄变。为防止这种情况，我们总是涂布抗紫外线脂肪族聚氨酯面漆（如 Sika、BASF 或 RPM 产品）。这种面漆清澈透明，即使在车棚、户外走道等阳光直射区域也能保持 10 年以上不黄变。" },
          { q: "环氧可以涂在现有瓷砖上吗？", a: "一般不建议。环氧需要直接粘结在坚实的混凝土基层上。我们通常会拆除现有瓷砖（可计入报价）并打磨下面的混凝土。某些情况下，现有环氧地面可以不拆除直接翻新——我们逐案评估。" },
          { q: "环氧地坪湿了会滑吗？", a: "标准自流平环氧表面光滑，潮湿时会滑，尤其在商业厨房或泳池平台。这些区域我们建议采用石英或彩片撒砂系统，并在面漆中添加细砂防滑剂，达到 P4–P5 防滑等级（AS/NZS 4586），同时不影响易清洁性。" }
        ],
        metaTitle: "吉隆坡与雪兰莪环氧与聚氨酯地坪涂层",
        metaDesc: "吉隆坡与雪兰莪工业环氧地坪。车库、仓库、工厂、展厅、厨房。自流平、彩片、砂浆面层。从 RM18/平方英尺起。抗紫外线面漆。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪安装工业级环氧与聚氨酯地坪涂层。自流平、石英撒砂、装饰彩片、砂浆面层系统。金刚石打磨、防潮底漆、抗紫外线脂肪族 PU 面漆。Sika、BASF、RPM 系统。",
        warranty: "5 年脱层与黄变保修"
      }
    }
  },

  // ── 16. ROOF REPAIR ────────────────────────────────────────
  "roof-repair": {
    slug: "roof-repair",
    title: "Roof Repair & Waterproofing",
    tagline: "Roof tile replacement, leak repair, gutter cleaning, flashing, and full torch-on waterproofing for landed properties. From RM 350.",
    description:
      "KL Servis Rumah provides professional roof repair and waterproofing services for landed houses across Kuala Lumpur and Selangor. We work on every common Malaysian roof type — concrete tile (the most common), clay tile, metal deck (zinc/aluminium), and flat concrete slab. Our services cover the full spectrum from small leak repairs to full re-roofing: tile replacement, ridge re-bedding and re-pointing, valley seal replacement, flashing fabrication and replacement, gutter cleaning and realignment, downpipe unblocking, full torch-on membrane waterproofing for flat roofs, and heat-reflective roof coating. We use thermal imaging and moisture meters to trace leaks to their exact source — no more guessing which tile to replace. Every job includes a written report with photographic evidence of the issue and the repair.",
    startPrice: "RM 350",
    icon: "home",
    highlights: [
      "Thermal imaging leak detection to find the exact source of roof leaks without guesswork",
      "Concrete, clay, and metal roof specialists — every common Malaysian roof type",
      "Ridge re-bedding and re-pointing with flexible polymer mortar (no more hairline cracks)",
      "Custom-fabricated flashing for chimneys, parapet walls, and roof penetrations",
      "Full torch-on bituminous membrane and acrylic elastomeric waterproofing systems",
      "Heat-reflective white roof coating to reduce ceiling temperature by up to 8°C"
    ],
    subServices: [
      { name: "Roof Leak Diagnosis & Repair", price: "From RM 350", desc: "Thermal imaging to locate the leak source, followed by tile, flashing, or membrane repair on the affected area." },
      { name: "Ridge Re-Bedding & Re-Pointing", price: "From RM 18 / linier ft", desc: "Removing loose ridge mortar and re-bedding with flexible polymer mortar for a permanent seal." },
      { name: "Gutter Cleaning & Realignment", price: "From RM 280", desc: "Clearing leaves and debris, realigning falls toward downpipes, and sealing leaking joints." },
      { name: "Full Torch-On Membrane Waterproofing", price: "From RM 22 / sq ft", desc: "Two-layer torch-applied bituminous membrane system with 10-year manufacturer warranty for flat roofs." }
    ],
    process: [
      { step: "01", title: "Roof Inspection & Leak Trace", desc: "We physically inspect the roof for cracked tiles, missing flashing, blocked gutters, and ridge damage. For hard-to-find leaks we use thermal imaging and moisture meters." },
      { step: "02", title: "Photographic Report", desc: "You receive a written report with annotated photos showing the exact issues, recommended repairs, itemized pricing, and warranty terms." },
      { step: "03", title: "Safe Work Setup", desc: "For landed houses we set up edge-protection and access platforms. We never walk on fragile tiles; we use proper crawl boards and roof ladders." },
      { step: "04", title: "Repair Execution", desc: "Tiles are replaced, flashing is fabricated from zincalume or colour-bond, ridges are re-bedded and re-pointed with polymer mortar, and membranes are torch-applied in overlapping layers." },
      { step: "05", title: "Water Test & Handover", desc: "Where practical, we perform a controlled water test to confirm the leak is resolved. You receive before/after photos and a written warranty document." }
    ],
    faqs: [
      { q: "How do I know if my roof leak needs a repair or full re-roofing?", a: "If the leak is localised to one area, the surrounding tiles are in good condition, and the existing waterproofing is under 10 years old, a targeted repair is usually sufficient. If the roof has multiple leak points, widespread ridge damage, faded/eroded tiles, or the existing membrane is over 15 years old, we typically recommend a full re-roofing. We always give you both options with honest pricing." },
      { q: "Can you work on steep or double-storey roofs safely?", a: "Yes. Our team is trained for working-at-height and uses proper fall-protection, edge-protection, and access platforms. For double-storey repairs we set up a full perimeter edge-protection system and never compromise on safety. We carry Workmen's Compensation and Public Liability insurance for landed work." },
      { q: "What is the best waterproofing system for a flat concrete roof in Malaysia?", a: "For flat concrete roofs we recommend a torch-applied modified bituminous membrane system (3mm + 4mm APP or SBS) with a UV-protective aluminium or mineral-grit top surface, or a liquid-applied polyurethane system with a UV-stable topcoat. Both are designed for tropical UV and rain cycles. We provide a 10-year workmanship and 15-year material warranty on full membrane systems." },
      { q: "Will a white reflective roof coating really lower my room temperature?", a: "Yes, significantly. Independent testing shows that high-albedo reflective coatings can lower surface temperature by 25–30°C and the ceiling below by 5–8°C. This reduces air-conditioning load by 10–20% in single-storey and top-floor rooms. We use premium acrylic elastomeric coatings with a 10-year manufacturer warranty against chalking and peel." }
    ],
    heroImage: "/hero-roof-repair.svg",
    metaTitle: "Roof Repair & Waterproofing Services KL & Selangor",
    metaDesc: "Roof leak repair, tile replacement, ridge re-bedding, gutter cleaning, torch-on waterproofing in KL & Selangor. Thermal imaging leak detection. From RM350.",
    aioSummary: "KL Servis Rumah provides roof repair and waterproofing for landed properties across KL & Selangor. Concrete, clay, and metal roofs. Tile replacement, ridge re-bedding, flashing fabrication, gutter cleaning, torch-on membrane, heat-reflective coating. Thermal imaging leak detection. Insured work-at-height team.",
    warranty: "10-Year Membrane & Workmanship Warranty",
    i18n: {
      ms: {
        title: "Pembaikan & Kalis Air Bumbung",
        tagline: "Penggantian jubin bumbung, pembaikan bocor, pembersihan longkang, flashing dan kalis air torch-on penuh untuk hartanah bertanah. Dari RM 350.",
        description: "KL Servis Rumah menyediakan perkhidmatan pembaikan bumbung dan kalis air profesional untuk rumah bertanah di seluruh Kuala Lumpur dan Selangor. Kami bekerja pada setiap jenis bumbung Malaysia biasa — jubin konkrit (paling biasa), jubin tanah liat, metal deck (zink/aluminium) dan papak konkrit rata. Perkhidmatan kami merangkumi spektrum penuh daripada pembaikan bocor kecil kepada pembumbungan semula penuh: penggantian jubin, re-bedding dan re-pointing rabung, penggantian pengedap lembah, fabrikasi dan penggantian flashing, pembersihan dan penjajaran semula longkang, nyahsekat paip turun, kalis air membran torch-on penuh untuk bumbung rata dan salutan bumbung pantul haba. Kami menggunakan pengimejan terma dan meter kelembapan untuk mengesan bocor ke sumber tepatnya — tiada lagi meneka jubin mana yang perlu diganti. Setiap kerja termasuk laporan bertulis dengan bukti fotografi isu dan pembaikan.",
        highlights: [
          "Pengesanan bocor pengimejan terma untuk mencari sumber tepat bocor bumbung tanpa tekaan",
          "Pakar bumbung konkrit, tanah liat dan logam — setiap jenis bumbung Malaysia biasa",
          "Re-bedding dan re-pointing rabung dengan mortar polimer fleksibel (tiada lagi retakan rambut)",
          "Flashing fabrikasi khas untuk cerobong, dinding parapet dan penembusan bumbung",
          "Sistem kalis air membran bitumen torch-on dan elastomerik akrilik penuh",
          "Salutan bumbung putih pantul haba untuk mengurangkan suhu siling sehingga 8°C"
        ],
        subServices: [
          { name: "Diagnosis & Pembaikan Bocor Bumbung", price: "Dari RM 350", desc: "Pengimejan terma untuk mengesan sumber bocor, diikuti pembaikan jubin, flashing atau membran pada kawasan terjejas." },
          { name: "Re-Bedding & Re-Pointing Rabung", price: "Dari RM 18 / kaki linier", desc: "Menanggalkan mortar rabung longgar dan re-bedding dengan mortar polimer fleksibel untuk pengedapan kekal." },
          { name: "Pembersihan & Penjajaran Semula Longkang", price: "Dari RM 280", desc: "Membersihkan daun dan serpihan, menjajarkan semula cerun ke arah paip turun dan mengedap sambungan bocor." },
          { name: "Kalis Air Membran Torch-On Penuh", price: "Dari RM 22 / kaki persegi", desc: "Sistem membran bitumen dua lapisan sapu obor dengan jaminan pengeluar 10 tahun untuk bumbung rata." }
        ],
        process: [
          { step: "01", title: "Pemeriksaan Bumbung & Kesan Bocor", desc: "Kami memeriksa bumbung secara fizikal untuk jubin retak, flashing hilang, longkang tersumbat dan kerosakan rabung. Untuk bocor sukar dicari kami menggunakan pengimejan terma dan meter kelembapan." },
          { step: "02", title: "Laporan Fotografi", desc: "Anda menerima laporan bertulis dengan foto beranotasi menunjukkan isu tepat, pembaikan disyorkan, harga terperinci dan terma jaminan." },
          { step: "03", title: "Persediaan Kerja Selamat", desc: "Untuk rumah bertanah kami menyediakan perlindungan tepi dan platform akses. Kami tidak pernah berjalan di atas jubin rapuh; kami menggunakan papan merangkak dan tangga bumbung yang betul." },
          { step: "04", title: "Pelaksanaan Pembaikan", desc: "Jubin diganti, flashing difabrikasi daripada zincalume atau colour-bond, rabung di-re-bed dan di-re-point dengan mortar polimer, dan membran disapu obor dalam lapisan bertindih." },
          { step: "05", title: "Ujian Air & Serahan", desc: "Di mana praktikal, kami menjalankan ujian air terkawal untuk mengesahkan bocor diselesaikan. Anda menerima foto sebelum/selepas dan dokumen jaminan bertulis." }
        ],
        faqs: [
          { q: "Bagaimana saya tahu bocor bumbung saya perlu dibaiki atau pembumbungan semula penuh?", a: "Jika bocor setempat pada satu kawasan, jubin sekitar dalam keadaan baik dan kalis air sedia ada bawah 10 tahun, pembaikan bersasar biasanya mencukupi. Jika bumbung mempunyai pelbagai titik bocor, kerosakan rabung meluas, jubin pudar/hakis, atau membran sedia ada melebihi 15 tahun, kami biasanya mengesyorkan pembumbungan semula penuh. Kami sentiasa memberikan kedua-dua pilihan dengan harga jujur." },
          { q: "Boleh anda bekerja pada bumbung curam atau dua tingkat dengan selamat?", a: "Ya. Pasukan kami terlatih untuk kerja di ketinggian dan menggunakan perlindungan jatuh, perlindungan tepi dan platform akses yang betul. Untuk pembaikan dua tingkat kami menyediakan sistem perlindungan tepi perimeter penuh dan tidak pernah berkompromi dengan keselamatan. Kami membawa insurans Pampasan Pekerja dan Liabiliti Awam untuk kerja bertanah." },
          { q: "Apakah sistem kalis air terbaik untuk bumbung konkrit rata di Malaysia?", a: "Untuk bumbung konkrit rata kami mengesyorkan sistem membran bitumen terubah suai sapu obor (3mm + 4mm APP atau SBS) dengan permukaan atas aluminium atau grit mineral perlindungan UV, atau sistem polyurethane sapuan cecair dengan topcoat stabil UV. Kedua-duanya direka untuk kitaran UV dan hujan tropika. Kami menyediakan jaminan kerja 10 tahun dan jaminan bahan 15 tahun pada sistem membran penuh." },
          { q: "Adakah salutan bumbung pantul putih benar-benar menurunkan suhu bilik saya?", a: "Ya, dengan ketara. Ujian bebas menunjukkan salutan pantul albedo tinggi boleh menurunkan suhu permukaan sebanyak 25–30°C dan siling di bawah sebanyak 5–8°C. Ini mengurangkan beban penghawa dingin sebanyak 10–20% di bilik satu tingkat dan tingkat atas. Kami menggunakan salutan elastomerik akrilik premium dengan jaminan pengeluar 10 tahun terhadap pengapuran dan pengelupasan." }
        ],
        metaTitle: "Perkhidmatan Pembaikan & Kalis Air Bumbung KL & Selangor",
        metaDesc: "Pembaikan bocor bumbung, penggantian jubin, re-bedding rabung, pembersihan longkang, kalis air torch-on di KL & Selangor. Pengesanan bocor pengimejan terma. Dari RM350.",
        aioSummary: "KL Servis Rumah menyediakan pembaikan bumbung dan kalis air untuk hartanah bertanah di seluruh KL & Selangor. Bumbung konkrit, tanah liat dan logam. Penggantian jubin, re-bedding rabung, fabrikasi flashing, pembersihan longkang, membran torch-on, salutan pantul haba. Pengesanan bocor pengimejan terma. Pasukan kerja di ketinggian berinsurans.",
        warranty: "Jaminan Membran & Kerja 10 Tahun"
      },
      zh: {
        title: "屋顶维修与防水",
        tagline: "有地物业的屋瓦更换、漏水维修、天沟清理、泛水板与全烤贴式防水。从 RM 350 起。",
        description: "KL Servis Rumah 为吉隆坡与雪兰莪的有地住宅提供专业屋顶维修与防水服务。我们施工马来西亚各种常见屋顶类型——混凝土瓦（最常见）、陶土瓦、金属屋面（锌/铝）与混凝土平顶。服务涵盖从小面积漏水维修到整体换屋顶的全方位：换瓦、屋脊重新铺浆与勾缝、天沟密封更换、泛水板制作与更换、天沟清理与调坡、落水管疏通、平屋顶全烤贴式卷材防水，以及屋顶隔热反射涂料。我们使用热成像与湿度仪将漏水点精确定位——不再靠猜换哪片瓦。每项工作都附有书面报告与问题和维修的照片证据。",
        highlights: [
          "热成像漏水检测，精确定位屋顶漏水源，不靠猜测",
          "混凝土、陶土与金属屋顶专家——覆盖马来西亚所有常见屋顶类型",
          "屋脊重新铺浆与勾缝，使用柔性聚合物砂浆（不再有发丝裂缝）",
          "烟囱、女儿墙与屋面穿透处的定制泛水板",
          "全烤贴式沥青卷材与丙烯酸弹性防水系统",
          "白色隔热反射屋顶涂料，天花板温度最多可降低 8°C"
        ],
        subServices: [
          { name: "屋顶漏水诊断与维修", price: "从 RM 350 起", desc: "热成像定位漏水源，随后对受影响区域进行换瓦、泛水或卷材维修。" },
          { name: "屋脊重新铺浆与勾缝", price: "从 RM 18 / 延英尺起", desc: "清除松动的屋脊砂浆，用柔性聚合物砂浆重新铺浆，永久密封。" },
          { name: "天沟清理与调坡", price: "从 RM 280 起", desc: "清除树叶与杂物，将坡度调至落水口方向，并密封漏水接缝。" },
          { name: "全烤贴式卷材防水", price: "从 RM 22 / 平方英尺起", desc: "双层火烤沥青卷材系统，平屋顶享 10 年制造商保修。" }
        ],
        process: [
          { step: "01", title: "屋顶检查与漏水追踪", desc: "我们实地检查屋顶的瓦片裂缝、泛水缺失、天沟堵塞与屋脊损坏。难找的漏水点使用热成像与湿度仪。" },
          { step: "02", title: "照片报告", desc: "您收到一份带标注照片的书面报告，列明确切问题、建议维修方案、逐项价格与保修条款。" },
          { step: "03", title: "安全施工准备", desc: "有地住宅我们设置临边防护与作业平台。我们绝不踩踏易碎瓦片；使用专用的爬行板与屋顶梯。" },
          { step: "04", title: "维修施工", desc: "更换瓦片，用锌铝或彩钢板制作泛水，屋脊用聚合物砂浆重新铺浆勾缝，卷材分层搭接火烤施工。" },
          { step: "05", title: "淋水测试与交付", desc: "可行时，我们进行受控淋水测试确认漏水已解决。您收到施工前后照片与书面保修文件。" }
        ],
        faqs: [
          { q: "怎么判断屋顶漏水是需要局部维修还是整体换屋顶？", a: "如果漏水集中在一个区域、周围瓦片状况良好且现有防水层不到 10 年，通常针对性维修即可。如果屋顶有多个漏水点、屋脊大面积损坏、瓦片褪色/风化，或现有卷材超过 15 年，我们通常建议整体换屋顶。我们总会以诚实的价格给您两种方案。" },
          { q: "你们能安全地在陡坡或双层屋顶上施工吗？", a: "可以。我们的团队受过高空作业培训，使用规范的防坠、临边防护与作业平台。双层维修我们设置全周边临边防护系统，在安全上绝不妥协。我们为有地工程投保劳工赔偿险与公众责任险。" },
          { q: "马来西亚混凝土平顶最好的防水系统是什么？", a: "混凝土平顶我们推荐火烤改性沥青卷材系统（3mm + 4mm APP 或 SBS），顶面为抗紫外线铝箔或矿物粒料面层；或液体涂布聚氨酯系统加抗紫外线面漆。两者都为热带紫外线与降雨循环而设计。整铺卷材系统我们提供 10 年工艺保修与 15 年材料保修。" },
          { q: "白色反射屋顶涂料真的能降低室温吗？", a: "是的，效果显著。独立测试表明，高反射率涂料可使表面温度降低 25–30°C，下方天花板降低 5–8°C。这使单层和顶层房间的空调负荷减少 10–20%。我们使用优质丙烯酸弹性涂料，制造商提供 10 年防粉化、防剥落保修。" }
        ],
        metaTitle: "吉隆坡与雪兰莪屋顶维修与防水服务",
        metaDesc: "吉隆坡与雪兰莪屋顶漏水维修、换瓦、屋脊铺浆、天沟清理、烤贴防水。热成像漏水检测。从 RM350 起。",
        aioSummary: "KL Servis Rumah 为吉隆坡与雪兰莪的有地物业提供屋顶维修与防水。混凝土、陶土与金属屋顶。换瓦、屋脊铺浆、泛水制作、天沟清理、烤贴卷材、隔热涂料。热成像漏水检测。已投保的高空作业团队。",
        warranty: "10 年卷材与工艺保修"
      }
    }
  },

  // ── 17. KITCHEN CABINET ────────────────────────────────────────
  "kitchen-cabinet": {
    slug: "kitchen-cabinet",
    title: "Kitchen Cabinet & Countertop",
    tagline: "Custom-built and modular kitchen cabinets with stone, solid surface, or laminate countertops. Design, supply, install. From RM 6,000.",
    description:
      "KL Servis Rumah designs, fabricates, and installs custom kitchen cabinets and countertops for residential and light-commercial projects across Kuala Lumpur and Selangor. We work with three main systems: (1) **Modular cabinets** (Häfele, Blum, or compatible) — pre-engineered boxes with consistent quality and faster install; (2) **Custom plywood cabinets** — built-to-fit on site, ideal for unusual layouts and maximum storage; (3) **Hybrid systems** — modular carcasses with custom doors and panels. Countertop options include granite (the Malaysian classic), engineered quartz (Caesarstone, Silestone — scratch and stain resistant), solid surface (Corian — seamless joins, integrated sinks), and high-pressure laminate (the most budget-friendly). Every kitchen includes soft-close hinges, full-extension drawer runners, and ergonomic storage planning.",
    startPrice: "RM 6,000",
    icon: "utensils",
    highlights: [
      "Modular, custom plywood, and hybrid kitchen systems to fit every budget and layout",
      "Häfele and Blum soft-close hinges and full-extension drawer runners as standard",
      "Granite, quartz, solid surface, and laminate countertop options with seamless joins",
      "Ergonomic storage planning: pull-out pantries, magic corners, drawer organisers",
      "Concealed handles, integrated lighting, and appliance garages for clean aesthetics",
      "Free 3D kitchen design render with itemized quotation before signing"
    ],
    subServices: [
      { name: "Modular Kitchen Cabinet (10ft L-shape)", price: "From RM 6,000", desc: "Häfele or Blum hardware with 18mm melamine carcass, doors in laminate, acrylic, or spray-painted finish." },
      { name: "Custom Plywood Kitchen", price: "From RM 9,000", desc: "Built-to-fit plywood cabinet with soft-close hardware, custom doors, and full-height pantry units." },
      { name: "Quartz / Granite Countertop", price: "From RM 180 / linier ft", desc: "Caesarstone, Silestone, or local granite with undermount sink cutout and seamless joins." },
      { name: "Kitchen Makeover (Doors & Hardware Only)", price: "From RM 3,500", desc: "Replacing doors, drawer fronts, handles, hinges, and runners to refresh an existing kitchen carcass." }
    ],
    process: [
      { step: "01", title: "Site Measurement & Design Brief", desc: "We visit your home, take laser-accurate measurements, photograph the space, and capture your cooking style, storage needs, appliance list, and budget." },
      { step: "02", title: "3D Design & Quotation", desc: "You receive a 3D rendered layout with full itemized pricing — every cabinet, hardware, accessory, and stone slab is listed. We revise the design until you are happy." },
      { step: "03", title: "Manufacturing & Lead Time", desc: "Modular cabinets take 14–21 days to manufacture. Custom plywood cabinets are built in our workshop over 21–28 days. Countertop templating happens after cabinet installation." },
      { step: "04", title: "Demolition & Prep", desc: "Old kitchen is carefully dismantled and removed (we can include this in the quote). Plumbing and electrical points are relocated to match the new layout." },
      { step: "05", title: "Installation & Handover", desc: "Cabinets are levelled and anchored, countertops are templated and installed, sink and tap are fitted, and a final alignment check plus snag list walkthrough is completed." }
    ],
    faqs: [
      { q: "Modular vs custom plywood kitchen — which is better for me?", a: "Modular cabinets are pre-engineered boxes (Häfele, Blum, or compatible) with consistent quality, faster install (typically 1 day), and lower cost. They are ideal for standard L-shape, U-shape, or straight kitchens. Custom plywood cabinets are built on-site to fit your exact space, perfect for unusual layouts, sloped ceilings, or maximum storage needs. We can also do hybrid: modular carcasses with custom doors and panels. We help you choose during the design consultation." },
      { q: "What is the most popular countertop material in Malaysia?", a: "Granite remains the most popular (local granite from RM 80–150/linier ft, imported granite RM 150–400/linier ft) due to its heat resistance, durability, and one-of-a-kind patterns. Engineered quartz (Caesarstone, Silestone) is the fastest-growing premium choice — non-porous, scratch-resistant, consistent patterns, and never needs sealing. Solid surface (Corian) is favoured for seamless joins and integrated sinks. We can show you physical samples during the design consultation." },
      { q: "Can you keep my existing kitchen carcass and just replace doors?", a: "Yes. A door-and-hardware makeover is a popular budget option. We measure the existing carcass, manufacture new doors and drawer fronts in your chosen finish (laminate, acrylic, spray-painted, or vinyl wrap), replace all hinges and runners with soft-close versions, install new handles, and your kitchen looks brand new at a fraction of the cost of a full replacement." },
      { q: "How long does a full kitchen renovation take from design to handover?", a: "Typically 6 to 10 weeks: 1 week for design and quotation, 3–4 weeks for cabinet manufacturing, 1 week for demolition and prep, 1–2 days for cabinet install, 1 week for countertop templating and install, plus plumbing and electrical finishing. We provide a detailed Gantt chart at sign-off so you know exactly when each milestone happens." }
    ],
    heroImage: "/hero-kitchen-cabinet.svg",
    metaTitle: "Custom Kitchen Cabinet & Countertop KL & Selangor",
    metaDesc: "Custom and modular kitchen cabinets in KL & Selangor. Häfele, Blum hardware. Granite, quartz, solid surface countertops. From RM6000. 3D design included.",
    aioSummary: "KL Servis Rumah designs, fabricates, and installs kitchen cabinets across KL & Selangor. Modular (Häfele, Blum), custom plywood, and hybrid systems. Granite, quartz (Caesarstone, Silestone), solid surface, laminate countertops. Free 3D design render. Soft-close hardware, ergonomic storage, integrated lighting.",
    warranty: "5-Year Cabinet Structure Warranty",
    i18n: {
      ms: {
        title: "Kabinet Dapur & Permukaan Kaunter",
        tagline: "Kabinet dapur kustom dan modular dengan permukaan kaunter batu, solid surface atau laminate. Reka bentuk, bekalan, pemasangan. Dari RM 6,000.",
        description: "KL Servis Rumah mereka bentuk, memfabrikasi dan memasang kabinet dapur kustom dan permukaan kaunter untuk projek kediaman dan komersial ringan di seluruh Kuala Lumpur dan Selangor. Kami bekerja dengan tiga sistem utama: (1) **Kabinet modular** (Häfele, Blum atau serasi) — kotak pra-kejuruteraan dengan kualiti konsisten dan pemasangan lebih pantas; (2) **Kabinet papan lapis kustom** — dibina mengikut ukuran di tapak, sesuai untuk susun atur luar biasa dan storan maksimum; (3) **Sistem hibrid** — rangka modular dengan pintu dan panel kustom. Pilihan permukaan kaunter termasuk granit (kegemaran Malaysia), kuarza kejuruteraan (Caesarstone, Silestone — tahan calar dan kotoran), solid surface (Corian — sambungan lancar, singki bersepadu) dan laminate tekanan tinggi (paling mesra bajet). Setiap dapur termasuk engsel tutup lembut, rel laci sambungan penuh dan perancangan storan ergonomik.",
        highlights: [
          "Sistem dapur modular, papan lapis kustom dan hibrid untuk setiap bajet dan susun atur",
          "Engsel tutup lembut Häfele dan Blum serta rel laci sambungan penuh sebagai standard",
          "Pilihan permukaan kaunter granit, kuarza, solid surface dan laminate dengan sambungan lancar",
          "Perancangan storan ergonomik: pantry tarik-keluar, magic corner, susun atur laci",
          "Pemegang tersembunyi, pencahayaan bersepadu dan garaj perkakas untuk estetika kemas",
          "Render reka bentuk dapur 3D percuma dengan sebut harga terperinci sebelum menandatangani"
        ],
        subServices: [
          { name: "Kabinet Dapur Modular (L-shape 10 kaki)", price: "Dari RM 6,000", desc: "Perkakasan Häfele atau Blum dengan rangka melamin 18mm, pintu dalam kemasan laminate, akrilik atau cat semburan." },
          { name: "Dapur Papan Lapis Kustom", price: "Dari RM 9,000", desc: "Kabinet papan lapis bina-mengikut-ukuran dengan perkakasan tutup lembut, pintu kustom dan unit pantry penuh tinggi." },
          { name: "Permukaan Kaunter Kuarza / Granit", price: "Dari RM 180 / kaki linier", desc: "Caesarstone, Silestone atau granit tempatan dengan potongan singki bawah-duduk dan sambungan lancar." },
          { name: "Makeover Dapur (Pintu & Perkakasan Sahaja)", price: "Dari RM 3,500", desc: "Menggantikan pintu, muka laci, pemegang, engsel dan rel untuk menyegarkan rangka dapur sedia ada." }
        ],
        process: [
          { step: "01", title: "Ukuran Tapak & Brief Reka Bentuk", desc: "Kami melawat rumah anda, mengambil ukuran tepat laser, memfoto ruang dan menangkap gaya masakan, keperluan storan, senarai perkakas dan bajet anda." },
          { step: "02", title: "Reka Bentuk 3D & Sebut Harga", desc: "Anda menerima susun atur render 3D dengan harga terperinci penuh — setiap kabinet, perkakasan, aksesori dan slab batu disenaraikan. Kami menyemak semula reka bentuk sehingga anda berpuas hati." },
          { step: "03", title: "Pembuatan & Masa Tunggu", desc: "Kabinet modular mengambil 14–21 hari untuk dibuat. Kabinet papan lapis kustom dibina di bengkel kami dalam 21–28 hari. Templating permukaan kaunter berlaku selepas pemasangan kabinet." },
          { step: "04", title: "Perobohan & Persediaan", desc: "Dapur lama ditanggalkan dan disingkirkan dengan rapi (boleh disertakan dalam sebut harga). Titik paip dan elektrik dipindahkan mengikut susun atur baharu." },
          { step: "05", title: "Pemasangan & Serahan", desc: "Kabinet diratakan dan disauh, permukaan kaunter di-template dan dipasang, singki dan paip dipasang, dan pemeriksaan penjajaran akhir serta walkthrough senarai snag diselesaikan." }
        ],
        faqs: [
          { q: "Dapur modular vs papan lapis kustom — mana lebih baik untuk saya?", a: "Kabinet modular ialah kotak pra-kejuruteraan (Häfele, Blum atau serasi) dengan kualiti konsisten, pemasangan lebih pantas (biasanya 1 hari) dan kos lebih rendah. Ia sesuai untuk dapur L-shape, U-shape atau lurus standard. Kabinet papan lapis kustom dibina di tapak mengikut ruang tepat anda, sesuai untuk susun atur luar biasa, siling condong atau keperluan storan maksimum. Kami juga boleh buat hibrid: rangka modular dengan pintu dan panel kustom. Kami membantu anda memilih semasa konsultasi reka bentuk." },
          { q: "Apakah bahan permukaan kaunter paling popular di Malaysia?", a: "Granit kekal paling popular (granit tempatan dari RM 80–150/kaki linier, granit import RM 150–400/kaki linier) kerana rintangan haba, ketahanan dan corak uniknya. Kuarza kejuruteraan (Caesarstone, Silestone) ialah pilihan premium yang paling pesat berkembang — tidak berliang, tahan calar, corak konsisten dan tidak perlu pengedapan. Solid surface (Corian) digemari untuk sambungan lancar dan singki bersepadu. Kami boleh tunjukkan sampel fizikal semasa konsultasi reka bentuk." },
          { q: "Boleh kekalkan rangka dapur sedia ada saya dan hanya ganti pintu?", a: "Ya. Makeover pintu-dan-perkakasan ialah pilihan bajet popular. Kami mengukur rangka sedia ada, membuat pintu dan muka laci baharu dalam kemasan pilihan anda (laminate, akrilik, cat semburan atau balutan vinyl), menggantikan semua engsel dan rel dengan versi tutup lembut, memasang pemegang baharu, dan dapur anda kelihatan seperti baharu pada sebahagian kecil kos penggantian penuh." },
          { q: "Berapa lama pengubahsuaian dapur penuh dari reka bentuk ke serahan?", a: "Biasanya 6 hingga 10 minggu: 1 minggu untuk reka bentuk dan sebut harga, 3–4 minggu untuk pembuatan kabinet, 1 minggu untuk perobohan dan persediaan, 1–2 hari untuk pemasangan kabinet, 1 minggu untuk templating dan pemasangan permukaan kaunter, ditambah kemasan paip dan elektrik. Kami menyediakan carta Gantt terperinci semasa sign-off supaya anda tahu tepat bila setiap pencapaian berlaku." }
        ],
        metaTitle: "Kabinet Dapur Kustom & Permukaan Kaunter KL & Selangor",
        metaDesc: "Kabinet dapur kustom dan modular di KL & Selangor. Perkakasan Häfele, Blum. Permukaan kaunter granit, kuarza, solid surface. Dari RM6000. Reka bentuk 3D termasuk.",
        aioSummary: "KL Servis Rumah mereka bentuk, memfabrikasi dan memasang kabinet dapur di seluruh KL & Selangor. Sistem modular (Häfele, Blum), papan lapis kustom dan hibrid. Permukaan kaunter granit, kuarza (Caesarstone, Silestone), solid surface, laminate. Render reka bentuk 3D percuma. Perkakasan tutup lembut, storan ergonomik, pencahayaan bersepadu.",
        warranty: "Jaminan Struktur Kabinet 5 Tahun"
      },
      zh: {
        title: "厨房橱柜与台面",
        tagline: "定制与模块化厨房橱柜，配石材、实体面材或防火板台面。设计、供应、安装。从 RM 6,000 起。",
        description: "KL Servis Rumah 为吉隆坡与雪兰莪的住宅及轻型商业项目设计、制作与安装定制厨房橱柜和台面。我们提供三大系统：(1) **模块化橱柜**（Häfele、Blum 或兼容品牌）——预工程化柜体，品质稳定、安装更快；(2) **定制胶合板橱柜**——现场按尺寸打造，适合异形布局与最大化收纳；(3) **混合系统**——模块柜体配定制门板与面板。台面选择包括花岗岩（马来西亚经典）、人造石英石（Caesarstone、Silestone——耐刮耐污）、实体面材（Corian——无缝拼接、一体水槽）和高压防火板（最经济）。每套厨房都标配缓冲铰链、全拉出抽屉滑轨与符合人体工学的收纳规划。",
        highlights: [
          "模块化、定制胶合板与混合厨房系统，适合各种预算与布局",
          "标配 Häfele 与 Blum 缓冲铰链及全拉出抽屉滑轨",
          "花岗岩、石英石、实体面材与防火板台面，无缝拼接",
          "人体工学收纳规划：拉篮 pantry、转角拉篮、抽屉分隔件",
          "隐藏式拉手、内嵌灯光与电器柜，外观干净利落",
          "签约前免费提供 3D 厨房设计效果图与逐项报价"
        ],
        subServices: [
          { name: "模块化厨房橱柜（10 英尺 L 型）", price: "从 RM 6,000 起", desc: "Häfele 或 Blum 五金配 18mm 三聚氰胺柜体，门板可选防火板、亚克力或喷漆饰面。" },
          { name: "定制胶合板厨房", price: "从 RM 9,000 起", desc: "按尺寸定制的胶合板橱柜，配缓冲五金、定制门板与通顶 pantry 柜。" },
          { name: "石英石 / 花岗岩台面", price: "从 RM 180 / 延英尺起", desc: "Caesarstone、Silestone 或本地花岗岩，台下盆开孔与无缝拼接。" },
          { name: "厨房翻新（仅门板与五金）", price: "从 RM 3,500 起", desc: "更换门板、抽屉面板、拉手、铰链与滑轨，让现有柜体焕然一新。" }
        ],
        process: [
          { step: "01", title: "现场测量与设计简报", desc: "我们上门激光精准测量、拍摄空间，并记录您的烹饪习惯、收纳需求、电器清单与预算。" },
          { step: "02", title: "3D 设计与报价", desc: "您收到 3D 渲染布局图与完整逐项报价——每个柜体、五金、配件与石板都清晰列出。我们反复修改设计直到您满意。" },
          { step: "03", title: "生产与交期", desc: "模块化橱柜生产需 14–21 天。定制胶合板橱柜在我们的工厂生产 21–28 天。台面在橱柜安装后量尺定制。" },
          { step: "04", title: "拆除与准备", desc: "旧厨房小心拆除并清运（可计入报价）。水管与电源点按新布局移位。" },
          { step: "05", title: "安装与交付", desc: "橱柜调平固定，台面量尺安装，水槽与龙头装妥，并完成最终对缝检查与缺陷清单走查。" }
        ],
        faqs: [
          { q: "模块化与定制胶合板厨房——哪个更适合我？", a: "模块柜是预工程化柜体（Häfele、Blum 或兼容品牌），品质稳定、安装更快（通常 1 天）、成本更低，适合标准 L 型、U 型或一字型厨房。定制胶合板柜现场按您的实际空间打造，适合异形布局、斜顶或追求最大收纳的需求。我们也可以做混合方案：模块柜体配定制门板与面板。设计咨询时我们会帮您选择。" },
          { q: "马来西亚最流行的台面材料是什么？", a: "花岗岩仍最受欢迎（本地花岗岩 RM 80–150/延英尺，进口花岗岩 RM 150–400/延英尺），因其耐热、耐用且花纹独一无二。人造石英石（Caesarstone、Silestone）是增长最快的高端选择——无孔隙、耐刮、花纹一致且永远无需封釉。实体面材（Corian）因无缝拼接与一体水槽受青睐。设计咨询时我们可提供实物样板。" },
          { q: "可以保留现有柜体只换门板吗？", a: "可以。门板五金翻新是很受欢迎的经济方案。我们测量现有柜体，按您选择的饰面（防火板、亚克力、喷漆或贴膜）制作新门板与抽屉面板，将所有铰链滑轨换成缓冲款，装上新拉手，您的厨房即以整体换新零头的价格焕然一新。" },
          { q: "整套厨房翻新从设计到交付要多久？", a: "通常 6 到 10 周：1 周设计与报价，3–4 周橱柜生产，1 周拆除与准备，1–2 天橱柜安装，1 周台面量尺与安装，外加水电收尾。签约时我们提供详细的甘特图，让您清楚每个节点的时间。" }
        ],
        metaTitle: "吉隆坡与雪兰莪定制厨房橱柜与台面",
        metaDesc: "吉隆坡与雪兰莪定制与模块化厨房橱柜。Häfele、Blum 五金。花岗岩、石英石、实体面材台面。从 RM6000 起。含 3D 设计。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪设计、制作与安装厨房橱柜。模块化（Häfele、Blum）、定制胶合板与混合系统。花岗岩、石英石（Caesarstone、Silestone）、实体面材、防火板台面。免费 3D 设计效果图。缓冲五金、人体工学收纳、内嵌灯光。",
        warranty: "5 年柜体结构保修"
      }
    }
  },

  // ── 18. CARPENTRY ────────────────────────────────────────
  "carpentry": {
    slug: "carpentry",
    title: "Custom Carpentry & Joinery",
    tagline: "Built-in wardrobes, TV consoles, study desks, feature walls, shoe racks, and custom furniture. From RM 250 / linier ft.",
    description:
      "KL Servis Rumah designs and builds custom carpentry and joinery for residential and commercial projects across Kuala Lumpur and Selangor. Our in-house carpenters work with premium materials — 18mm plywood carcasses (not cheap MDF), 25mm thick shelves for wardrobes, high-pressure laminate or spray-painted finishes, and quality hardware (Häfele, Blum). We build: built-in floor-to-ceiling wardrobes, walk-in closet systems, TV consoles and feature walls, study desks and home-office cabinetry, dining benches and banquette seating, feature storage walls for living rooms, custom shoe cabinets, and display shelving. Every project is measured on-site, drawn in CAD, and rendered in 3D before manufacture. We never outsource critical cabinet-making — all work is done in our own KL workshop.",
    startPrice: "RM 250",
    icon: "ruler",
    highlights: [
      "In-house carpenters — no outsourcing of critical cabinet-making",
      "18mm plywood carcasses (not cheap MDF) for long-lasting structural integrity",
      "Häfele and Blum soft-close hinges and full-extension drawer runners",
      "Free 3D design render with itemized quotation before signing",
      "Laminate, acrylic, spray-painted, and vinyl-wrapped finish options",
      "Free site visit and measurement within KL and Selangor"
    ],
    subServices: [
      { name: "Built-in Wardrobe", price: "From RM 280 / linier ft", desc: "Floor-to-ceiling wardrobe with internal drawers, shelves, hanging rails, and mirror or laminate doors." },
      { name: "TV Console & Feature Wall", price: "From RM 1,200", desc: "Custom TV console with storage drawers, floating shelves, cable management, and matching feature wall panelling." },
      { name: "Study Desk & Home Office", price: "From RM 900", desc: "Built-in study desk with cable management, drawers, overhead cabinets, and matching shelving." },
      { name: "Shoe Cabinet & Entry Storage", price: "From RM 1,500", desc: "Slim depth shoe cabinet with tilt-out drawers, sitting bench, mirror, and integrated lighting." }
    ],
    process: [
      { step: "01", title: "Site Visit & Measurement", desc: "We visit your home, take laser measurements, photograph the space, and capture your storage needs, style preferences, and budget." },
      { step: "02", title: "3D Design & Quotation", desc: "You receive a 3D rendered layout with full itemized pricing — every panel, hardware, finish, and accessory is listed. We revise the design until you are happy." },
      { step: "03", title: "Workshop Manufacturing", desc: "All components are precision-cut, edge-banded, and pre-assembled in our KL workshop using CNC and traditional joinery. Quality-checked before delivery." },
      { step: "04", title: "On-Site Installation", desc: "We deliver and install the unit in 1 to 3 days depending on size. Dust is contained with plastic sheeting, and old furniture is removed on request." },
      { step: "05", title: "Alignment & Handover", desc: "Every shelf, drawer, and door is aligned and tested. We hand over the warranty card and cleaning guide, and walk you through care instructions." }
    ],
    faqs: [
      { q: "What is the difference between plywood and MDF for built-in furniture?", a: "Plywood is a layered wood-veneer product with much higher structural strength, moisture resistance, and screw-holding ability — ideal for wardrobes, cabinets, and any piece that needs to bear weight or be disassembled. MDF (Medium-Density Fibreboard) is a fine-particle board that is smoother for painting but absorbs moisture easily and sags under load. We use plywood for all structural components and only use MDF where a perfectly smooth painted finish is required (e.g. some feature wall panels)." },
      { q: "How long does it take to build a custom wardrobe?", a: "From design sign-off to installation, typically 4 to 6 weeks: 1 week for design revisions and approval, 2–3 weeks for workshop manufacturing, 1–2 days for on-site installation. We provide a detailed timeline at sign-off so you can plan your move-in or other renovations accordingly." },
      { q: "Can I supply my own hardware (handles, runners, hinges)?", a: "Yes. You can supply your preferred hardware or we can include Häfele or Blum in the quote. If you supply, we will not warranty the hardware, but our workmanship warranty still covers the assembly. Many clients supply imported handles from Taobao or Carousell for a more bespoke look at lower cost." },
      { q: "Do you handle built-in carpentry in condos and high-rises?", a: "Yes. We have extensive experience working in condos and serviced apartments across KL — Mont Kiara, Bangsar, KLCC, Damansara, etc. We comply with management work-hour rules, use lift protection, and handle all debris removal. A typical condo built-in wardrobe can be measured, manufactured, and installed within 4 to 6 weeks." }
    ],
    heroImage: "/hero-carpentry.svg",
    metaTitle: "Custom Carpentry & Built-in Furniture KL & Selangor",
    metaDesc: "Custom built-in wardrobes, TV consoles, study desks, feature walls in KL & Selangor. In-house workshop, Häfele/Blum hardware. From RM250/linierft. 3D design included.",
    aioSummary: "KL Servis Rumah designs and builds custom carpentry across KL & Selangor. Built-in wardrobes, TV consoles, study desks, feature walls, shoe cabinets, display shelving. 18mm plywood carcasses, Häfele/Blum hardware, premium finishes. In-house workshop, 3D design render, itemized quotation.",
    warranty: "5-Year Cabinet Structure Warranty",
    i18n: {
      ms: {
        title: "Pertukangan & Kerja Kayu Kustom",
        tagline: "Almari pakaian tanam, konsol TV, meja belajar, dinding feature, rak kasut dan perabot kustom. Dari RM 250 / kaki linier.",
        description: "KL Servis Rumah mereka bentuk dan membina pertukangan dan kerja kayu kustom untuk projek kediaman dan komersial di seluruh Kuala Lumpur dan Selangor. Tukang kayu dalaman kami bekerja dengan bahan premium — rangka papan lapis 18mm (bukan MDF murah), para 25mm tebal untuk almari pakaian, kemasan laminate tekanan tinggi atau cat semburan, dan perkakasan berkualiti (Häfele, Blum). Kami membina: almari pakaian tanam lantai-ke-siling, sistem walk-in closet, konsol TV dan dinding feature, meja belajar dan kabinet pejabat rumah, bangku makan dan tempat duduk banquette, dinding storan feature untuk ruang tamu, kabinet kasut kustom dan rak pameran. Setiap projek diukur di tapak, dilukis dalam CAD dan di-render 3D sebelum pembuatan. Kami tidak pernah outsource pembuatan kabinet kritikal — semua kerja dilakukan di bengkel KL kami sendiri.",
        highlights: [
          "Tukang kayu dalaman — tiada outsource pembuatan kabinet kritikal",
          "Rangka papan lapis 18mm (bukan MDF murah) untuk integriti struktur tahan lama",
          "Engsel tutup lembut Häfele dan Blum serta rel laci sambungan penuh",
          "Render reka bentuk 3D percuma dengan sebut harga terperinci sebelum menandatangani",
          "Pilihan kemasan laminate, akrilik, cat semburan dan balutan vinyl",
          "Lawatan tapak dan ukuran percuma dalam KL dan Selangor"
        ],
        subServices: [
          { name: "Almari Pakaian Tanam", price: "Dari RM 280 / kaki linier", desc: "Almari pakaian lantai-ke-siling dengan laci dalaman, para, rel gantungan dan pintu cermin atau laminate." },
          { name: "Konsol TV & Dinding Feature", price: "Dari RM 1,200", desc: "Konsol TV kustom dengan laci storan, para terapung, pengurusan kabel dan panel dinding feature sepadan." },
          { name: "Meja Belajar & Pejabat Rumah", price: "Dari RM 900", desc: "Meja belajar tanam dengan pengurusan kabel, laci, kabinet atas dan rak sepadan." },
          { name: "Kabinet Kasut & Storan Pintu Masuk", price: "Dari RM 1,500", desc: "Kabinet kasut kedalaman nipis dengan laci tilt-out, bangku duduk, cermin dan pencahayaan bersepadu." }
        ],
        process: [
          { step: "01", title: "Lawatan Tapak & Ukuran", desc: "Kami melawat rumah anda, mengambil ukuran laser, memfoto ruang dan menangkap keperluan storan, keutamaan gaya dan bajet anda." },
          { step: "02", title: "Reka Bentuk 3D & Sebut Harga", desc: "Anda menerima susun atur render 3D dengan harga terperinci penuh — setiap panel, perkakasan, kemasan dan aksesori disenaraikan. Kami menyemak semula reka bentuk sehingga anda berpuas hati." },
          { step: "03", title: "Pembuatan Bengkel", desc: "Semua komponen dipotong tepat, di-edge-band dan dipra-pasang di bengkel KL kami menggunakan CNC dan kerja kayu tradisional. Diperiksa kualiti sebelum penghantaran." },
          { step: "04", title: "Pemasangan Di Tapak", desc: "Kami menghantar dan memasang unit dalam 1 hingga 3 hari bergantung pada saiz. Habuk dikawal dengan kain plastik, dan perabot lama disingkirkan atas permintaan." },
          { step: "05", title: "Penjajaran & Serahan", desc: "Setiap para, laci dan pintu dijajarkan dan diuji. Kami menyerahkan kad jaminan dan panduan pembersihan, dan menerangkan arahan penjagaan kepada anda." }
        ],
        faqs: [
          { q: "Apakah perbezaan antara papan lapis dan MDF untuk perabot tanam?", a: "Papan lapis ialah produk venir kayu berlapis dengan kekuatan struktur, rintangan kelembapan dan keupayaan pegangan skru yang jauh lebih tinggi — sesuai untuk almari pakaian, kabinet dan apa-apa yang perlu menanggung berat atau ditanggalkan. MDF (Medium-Density Fibreboard) ialah papan zarah halus yang lebih licin untuk mengecat tetapi menyerap kelembapan dengan mudah dan melendut di bawah beban. Kami menggunakan papan lapis untuk semua komponen struktur dan hanya menggunakan MDF di mana kemasan cat sangat licin diperlukan (contohnya sesetengah panel dinding feature)." },
          { q: "Berapa lama masa yang diambil untuk membina almari pakaian kustom?", a: "Dari sign-off reka bentuk ke pemasangan, biasanya 4 hingga 6 minggu: 1 minggu untuk semakan dan kelulusan reka bentuk, 2–3 minggu untuk pembuatan bengkel, 1–2 hari untuk pemasangan di tapak. Kami menyediakan garis masa terperinci semasa sign-off supaya anda boleh merancang perpindahan atau pengubahsuaian lain dengan sewajarnya." },
          { q: "Boleh saya membekalkan perkakasan sendiri (pemegang, rel, engsel)?", a: "Ya. Anda boleh membekalkan perkakasan pilihan anda atau kami boleh sertakan Häfele atau Blum dalam sebut harga. Jika anda membekalkan, kami tidak akan memberi jaminan perkakasan, tetapi jaminan kerja kami masih melindungi pemasangan. Ramai pelanggan membekalkan pemegang import dari Taobao atau Carousell untuk rupa lebih khas pada kos lebih rendah." },
          { q: "Adakah anda mengendalikan pertukangan tanam di kondominium dan bangunan tinggi?", a: "Ya. Kami mempunyai pengalaman luas bekerja di kondominium dan apartmen servis di seluruh KL — Mont Kiara, Bangsar, KLCC, Damansara dan lain-lain. Kami mematuhi peraturan waktu kerja pengurusan, menggunakan perlindungan lif dan mengendalikan semua penyingkiran serpihan. Almari pakaian tanam kondominium biasa boleh diukur, dibuat dan dipasang dalam 4 hingga 6 minggu." }
        ],
        metaTitle: "Pertukangan Kustom & Perabot Tanam KL & Selangor",
        metaDesc: "Almari pakaian tanam, konsol TV, meja belajar, dinding feature kustom di KL & Selangor. Bengkel dalaman, perkakasan Häfele/Blum. Dari RM250/kaki linier. Reka bentuk 3D termasuk.",
        aioSummary: "KL Servis Rumah mereka bentuk dan membina pertukangan kustom di seluruh KL & Selangor. Almari pakaian tanam, konsol TV, meja belajar, dinding feature, kabinet kasut, rak pameran. Rangka papan lapis 18mm, perkakasan Häfele/Blum, kemasan premium. Bengkel dalaman, render reka bentuk 3D, sebut harga terperinci.",
        warranty: "Jaminan Struktur Kabinet 5 Tahun"
      },
      zh: {
        title: "定制木工与细木作",
        tagline: "定制入墙衣柜、电视柜、书桌、背景墙、鞋柜与定制家具。从 RM 250 / 延英尺起。",
        description: "KL Servis Rumah 为吉隆坡与雪兰莪的住宅与商业项目设计并打造定制木工与细木作。我们的内部木工使用优质材料——18mm 胶合板柜体（非廉价 MDF）、衣柜 25mm 加厚层板、高压防火板或喷漆饰面，以及优质五金（Häfele、Blum）。我们制作：顶天立地入墙衣柜、步入式衣帽间系统、电视柜与背景墙、书桌与家庭办公柜、餐凳与卡座、客厅收纳背景墙、定制鞋柜与展示层架。每个项目都现场测量、CAD 绘图并 3D 渲染后再生产。关键的柜体制作绝不外包——所有工作都在我们吉隆坡自有工厂完成。",
        highlights: [
          "内部木工——关键柜体制作绝不外包",
          "18mm 胶合板柜体（非廉价 MDF），结构经久耐用",
          "Häfele 与 Blum 缓冲铰链及全拉出抽屉滑轨",
          "签约前免费提供 3D 设计效果图与逐项报价",
          "防火板、亚克力、喷漆与贴膜饰面可选",
          "吉隆坡与雪兰莪境内免费上门测量"
        ],
        subServices: [
          { name: "入墙衣柜", price: "从 RM 280 / 延英尺起", desc: "顶天立地衣柜，配内置抽屉、层板、挂衣杆与镜面或防火板门。" },
          { name: "电视柜与背景墙", price: "从 RM 1,200 起", desc: "定制电视柜，配收纳抽屉、悬浮层板、走线管理与配套背景墙板。" },
          { name: "书桌与家庭办公", price: "从 RM 900 起", desc: "入墙式书桌，配走线管理、抽屉、吊柜与配套层架。" },
          { name: "鞋柜与玄关收纳", price: "从 RM 1,500 起", desc: "薄进深鞋柜，配翻斗抽屉、换鞋凳、镜子与内嵌灯光。" }
        ],
        process: [
          { step: "01", title: "上门测量", desc: "我们上门激光测量、拍摄空间，并记录您的收纳需求、风格偏好与预算。" },
          { step: "02", title: "3D 设计与报价", desc: "您收到 3D 渲染布局图与完整逐项报价——每块板材、五金、饰面与配件都清晰列出。我们反复修改设计直到您满意。" },
          { step: "03", title: "工厂生产", desc: "所有部件在我们吉隆坡工厂用 CNC 与传统榫卯工艺精密切割、封边并预组装。发货前质检。" },
          { step: "04", title: "现场安装", desc: "视尺寸大小，我们 1 到 3 天内送货并安装。用塑料布控制粉尘，旧家具按要求清运。" },
          { step: "05", title: "调校与交付", desc: "每层板、抽屉与门板都调平测试。我们移交保修卡与清洁指南，并向您讲解保养说明。" }
        ],
        faqs: [
          { q: "定制家具用胶合板和 MDF 有什么区别？", a: "胶合板是多层木皮压合产品，结构强度、防潮性与握钉力都高得多——适合衣柜、橱柜等需要承重或可拆装的家具。MDF（中密度纤维板）是细颗粒板，喷漆表面更光滑，但极易吸潮，承重下会下弯。我们所有结构部件都用胶合板，只在需要极致光滑漆面处使用 MDF（如部分背景墙板）。" },
          { q: "定制一个衣柜需要多长时间？", a: "从设计定稿到安装，通常 4 到 6 周：1 周设计修改与确认，2–3 周工厂生产，1–2 天现场安装。定稿时我们提供详细时间表，方便您安排入住或其他装修。" },
          { q: "我可以自己提供五金（拉手、滑轨、铰链）吗？", a: "可以。您可以提供自选五金，或在报价中选用 Häfele、Blum。若您自备五金，五金本身不在我们保修范围内，但我们的工艺保修仍涵盖组装。许多客户从淘宝或 Carousell 购买进口拉手，成本更低、更具个性。" },
          { q: "你们在公寓和高层建筑做定制柜体吗？", a: "做。我们在吉隆坡各地的公寓与服务式住宅有丰富经验——Mont Kiara、Bangsar、KLCC、Damansara 等。我们遵守管理处工时规定，使用电梯保护，并负责所有废料清运。典型的公寓入墙衣柜可在 4 到 6 周内完成测量、生产与安装。" }
        ],
        metaTitle: "吉隆坡与雪兰莪定制木工与入墙家具",
        metaDesc: "吉隆坡与雪兰莪定制入墙衣柜、电视柜、书桌、背景墙。自有工厂，Häfele/Blum 五金。从 RM250/延英尺起。含 3D 设计。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪设计并打造定制木工。入墙衣柜、电视柜、书桌、背景墙、鞋柜、展示层架。18mm 胶合板柜体，Häfele/Blum 五金，优质饰面。自有工厂、3D 设计效果图、逐项报价。",
        warranty: "5 年柜体结构保修"
      }
    }
  },

  // ── 19. DOOR REPAIR & INSTALLATION ───────────────────────────────
  "door": {
    slug: "door",
    title: "Door Repair & Installation",
    tagline: "Solid timber, engineered, fire-rated, and laminate doors — supply, install, plane, hinge, and lock fitting. From RM 220.",
    description:
      "KL Servis Rumah supplies, installs, and repairs all types of interior and exterior doors across Kuala Lumpur and Selangor. We work with every common Malaysian door type: solid hardwood (meranti, chengal, oak), engineered timber with HDF skin, flush laminate doors, fire-rated doors (1-hour and 2-hour certified), and PVC/metal door frames for bathrooms and kitchens. Our services include new door installation (with frame, architrave, hinges, and lockset), door planing for doors that scrape or stick, hinge replacement, lockset installation, door frame repair, and full bathroom/kitchen PVC door replacement. Every installation includes proper alignment, even gaps (3–4mm top and sides, 5–8mm bottom), and a slam test before handover.",
    startPrice: "RM 220",
    icon: "door-open",
    highlights: [
      "Solid timber, engineered, fire-rated, and laminate door specialists",
      "Door planing and adjustment to fix scraping, sticking, or swollen doors",
      "Premium hinges (SS304 stainless) and locksets (Yale, Imperial, Hafele, or supplied by you)",
      "Proper alignment with 3–4mm top/side gaps and 5–8mm bottom for smooth operation",
      "Fire-rated door installation with intumescent seals for compliance with building regs",
      "Old door and frame removal included in every replacement project"
    ],
    subServices: [
      { name: "Solid Timber Door Installation", price: "From RM 480", desc: "Solid meranti or chengal door with meranti frame, 3 SS304 hinges, architrave, and basic mortice lockset." },
      { name: "Laminate Door Installation", price: "From RM 220", desc: "HDF-skin engineered door with smooth laminate finish, ideal for budget-friendly modern interiors." },
      { name: "Door Planing & Adjustment", price: "From RM 90", desc: "Trimming a door that is scraping the floor or frame, rehanging on existing hinges, and adjusting the lockset." },
      { name: "Fire-Rated Door Installation", price: "From RM 850", desc: "1-hour or 2-hour certified fire door with intumescent seals, suitable for kitchen, staircase, or fire-escape access." }
    ],
    process: [
      { step: "01", title: "Site Measurement & Selection", desc: "We measure the existing door opening (height, width, depth of frame), check the swing direction, and recommend the right door type and size." },
      { step: "02", title: "Door Sourcing & Lead Time", desc: "Laminate and engineered doors are available in 3–7 days. Solid timber and custom fire-rated doors take 14–21 days. We provide exact lead times at quotation." },
      { step: "03", title: "Old Door Removal", desc: "We carefully remove the old door, hinges, lockset, and (if needed) the architrave. Frames are left in place unless replacement is also requested." },
      { step: "04", title: "New Door Installation", desc: "The new door is hung on stainless steel ball-bearing hinges, aligned with even gaps, and the lockset is morticed and fitted. The door is tested for smooth swing and latch." },
      { step: "05", title: "Architrave & Finishing", desc: "MDF or solid timber architrave is installed with mitred corners, sealed, and ready for paint. We can also paint the door and frame for an additional fee." }
    ],
    faqs: [
      { q: "Why is my door scraping the floor suddenly?", a: "Most common cause is humidity-related expansion — Malaysian tropical humidity makes timber doors absorb moisture and swell, especially in bathrooms and kitchens. Other causes include loose hinges (the door is sagging), a settled house frame, or a recently installed floor covering. We assess the cause and either plane the door, rehang the hinges with longer screws, or replace the door entirely if the swelling is too severe." },
      { q: "Can I keep my existing door frame and just replace the door?", a: "Yes, in most cases. As long as the frame is in good condition, square, and the right size, we can hang a new door on the existing frame. This saves the cost of frame replacement and reduces disruption. We measure the existing frame and source a door to fit (or trim the new door to fit)." },
      { q: "What is a fire-rated door and do I need one?", a: "A fire-rated door is a certified door and frame system that has been tested to withstand fire for a specified period (typically 1 hour or 2 hours). They are required by Malaysian building regulations for kitchen doors in some condo developments, all doors leading to fire-escape staircases, and certain commercial situations. We supply and install fire-rated doors from brands including Sanitor, Felicia, and local certified manufacturers, with proper intumescent seals and self-closing devices." },
      { q: "Should I choose solid timber or laminate doors?", a: "Solid timber doors (meranti, chengal, oak) are heavier, more sound-insulating, and have a premium feel — they can also be sanded and repainted multiple times. They cost more (RM 480+) and are sensitive to humidity. Laminate/engineered doors are lighter, more dimensionally stable in humid Malaysian weather, easier to maintain, and more affordable (RM 220+). For bedrooms and main doors we recommend solid timber; for bathrooms, kitchens, and rental properties we recommend laminate or PVC." }
    ],
    heroImage: "/hero-door.svg",
    metaTitle: "Door Repair & Installation Services KL & Selangor",
    metaDesc: "Door supply, install, plane, and repair in KL & Selangor. Solid timber, laminate, fire-rated doors. SS304 hinges, Yale/Hafele locksets. From RM220 per door.",
    aioSummary: "KL Servis Rumah supplies, installs, and repairs doors across KL & Selangor. Solid timber, engineered, laminate, fire-rated, PVC doors. Door planing, hinge replacement, lockset fitting, frame repair. SS304 stainless steel hardware, even alignment, slam test before handover.",
    warranty: "12-Month Door Hanging & Hardware Warranty",
    i18n: {
      ms: {
        title: "Pembaikan & Pemasangan Pintu",
        tagline: "Pintu kayu pepejal, engineered, tahan api dan laminate — bekalan, pemasangan, ketam, engsel dan pemasangan kunci. Dari RM 220.",
        description: "KL Servis Rumah membekalkan, memasang dan membaiki semua jenis pintu dalaman dan luaran di seluruh Kuala Lumpur dan Selangor. Kami bekerja dengan setiap jenis pintu Malaysia biasa: kayu keras pepejal (meranti, chengal, oak), kayu engineered dengan kulit HDF, pintu laminate flush, pintu tahan api (bertauliah 1 jam dan 2 jam), dan bingkai pintu PVC/logam untuk bilik mandi dan dapur. Perkhidmatan kami termasuk pemasangan pintu baharu (dengan bingkai, architrave, engsel dan set kunci), ketam pintu untuk pintu yang menggesel atau melekat, penggantian engsel, pemasangan set kunci, pembaikan bingkai pintu dan penggantian penuh pintu PVC bilik mandi/dapur. Setiap pemasangan termasuk penjajaran yang betul, jurang sekata (3–4mm atas dan sisi, 5–8mm bawah) dan ujian hentam sebelum serahan.",
        highlights: [
          "Pakar pintu kayu pepejal, engineered, tahan api dan laminate",
          "Ketam dan pelarasan pintu untuk membaiki pintu yang menggesel, melekat atau mengembang",
          "Engsel premium (keluli tahan karat SS304) dan set kunci (Yale, Imperial, Hafele atau dibekalkan anda)",
          "Penjajaran betul dengan jurang atas/sisi 3–4mm dan bawah 5–8mm untuk operasi lancar",
          "Pemasangan pintu tahan api dengan pengedap intumescent untuk pematuhan peraturan bangunan",
          "Penyingkiran pintu dan bingkai lama termasuk dalam setiap projek penggantian"
        ],
        subServices: [
          { name: "Pemasangan Pintu Kayu Pepejal", price: "Dari RM 480", desc: "Pintu meranti atau chengal pepejal dengan bingkai meranti, 3 engsel SS304, architrave dan set kunci mortice asas." },
          { name: "Pemasangan Pintu Laminate", price: "Dari RM 220", desc: "Pintu engineered kulit HDF dengan kemasan laminate licin, sesuai untuk dalaman moden mesra bajet." },
          { name: "Ketam & Pelarasan Pintu", price: "Dari RM 90", desc: "Memotong pintu yang menggesel lantai atau bingkai, menggantung semula pada engsel sedia ada dan melaraskan set kunci." },
          { name: "Pemasangan Pintu Tahan Api", price: "Dari RM 850", desc: "Pintu api bertauliah 1 jam atau 2 jam dengan pengedap intumescent, sesuai untuk dapur, tangga atau akses laluan kecemasan." }
        ],
        process: [
          { step: "01", title: "Ukuran Tapak & Pemilihan", desc: "Kami mengukur bukaan pintu sedia ada (tinggi, lebar, kedalaman bingkai), memeriksa arah ayunan dan mengesyorkan jenis dan saiz pintu yang betul." },
          { step: "02", title: "Perolehan Pintu & Masa Tunggu", desc: "Pintu laminate dan engineered tersedia dalam 3–7 hari. Pintu kayu pepejal dan tahan api kustom mengambil 14–21 hari. Kami menyediakan masa tunggu tepat semasa sebut harga." },
          { step: "03", title: "Penyingkiran Pintu Lama", desc: "Kami menanggalkan pintu lama, engsel, set kunci dan (jika perlu) architrave dengan rapi. Bingkai dibiarkan kecuali penggantian turut diminta." },
          { step: "04", title: "Pemasangan Pintu Baharu", desc: "Pintu baharu digantung pada engsel bebola keluli tahan karat, dijajarkan dengan jurang sekata, dan set kunci di-mortice dan dipasang. Pintu diuji untuk ayunan dan latch lancar." },
          { step: "05", title: "Architrave & Kemasan", desc: "Architrave MDF atau kayu pepejal dipasang dengan sudut mitred, dikedap dan sedia untuk cat. Kami juga boleh mengecat pintu dan bingkai dengan bayaran tambahan." }
        ],
        faqs: [
          { q: "Mengapa pintu saya tiba-tiba menggesel lantai?", a: "Punca paling biasa ialah pengembangan berkaitan kelembapan — kelembapan tropika Malaysia menyebabkan pintu kayu menyerap lembapan dan mengembang, terutamanya di bilik mandi dan dapur. Punca lain termasuk engsel longgar (pintu melendut), bingkai rumah yang mendap, atau lantai baharu yang baru dipasang. Kami menilai punca dan sama ada mengetam pintu, menggantung semula engsel dengan skru lebih panjang, atau menggantikan pintu sepenuhnya jika pengembangan terlalu teruk." },
          { q: "Boleh saya kekalkan bingkai pintu sedia ada dan hanya ganti pintu?", a: "Ya, dalam kebanyakan kes. Selagi bingkai dalam keadaan baik, segi empat tepat dan saiz betul, kami boleh menggantung pintu baharu pada bingkai sedia ada. Ini menjimatkan kos penggantian bingkai dan mengurangkan gangguan. Kami mengukur bingkai sedia ada dan mendapatkan pintu yang muat (atau memotong pintu baharu mengikut saiz)." },
          { q: "Apakah pintu tahan api dan adakah saya memerlukannya?", a: "Pintu tahan api ialah sistem pintu dan bingkai bertauliah yang telah diuji untuk menahan api untuk tempoh tertentu (biasanya 1 jam atau 2 jam). Ia dikehendaki oleh peraturan bangunan Malaysia untuk pintu dapur di sesetengah pembangunan kondominium, semua pintu menuju tangga laluan kecemasan dan situasi komersial tertentu. Kami membekalkan dan memasang pintu tahan api daripada jenama termasuk Sanitor, Felicia dan pengeluar tempatan bertauliah, dengan pengedap intumescent dan peranti tutup-sendiri yang betul." },
          { q: "Patutkah saya memilih pintu kayu pepejal atau laminate?", a: "Pintu kayu pepejal (meranti, chengal, oak) lebih berat, lebih menebap bunyi dan mempunyai rasa premium — ia juga boleh diisar dan dicat semula berkali-kali. Kosnya lebih tinggi (RM 480+) dan sensitif kepada kelembapan. Pintu laminate/engineered lebih ringan, lebih stabil dimensi dalam cuaca lembap Malaysia, lebih mudah diselenggara dan lebih berpatutan (RM 220+). Untuk bilik tidur dan pintu utama kami mengesyorkan kayu pepejal; untuk bilik mandi, dapur dan hartanah sewaan kami mengesyorkan laminate atau PVC." }
        ],
        metaTitle: "Perkhidmatan Pembaikan & Pemasangan Pintu KL & Selangor",
        metaDesc: "Bekalan, pemasangan, ketam dan pembaikan pintu di KL & Selangor. Pintu kayu pepejal, laminate, tahan api. Engsel SS304, set kunci Yale/Hafele. Dari RM220 setiap pintu.",
        aioSummary: "KL Servis Rumah membekalkan, memasang dan membaiki pintu di seluruh KL & Selangor. Pintu kayu pepejal, engineered, laminate, tahan api, PVC. Ketam pintu, penggantian engsel, pemasangan set kunci, pembaikan bingkai. Perkakasan keluli tahan karat SS304, penjajaran sekata, ujian hentam sebelum serahan.",
        warranty: "Jaminan Gantungan Pintu & Perkakasan 12 Bulan"
      },
      zh: {
        title: "门维修与安装",
        tagline: "实木、工程木、防火与防火板门——供应、安装、刨修、铰链与锁具安装。从 RM 220 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪供应、安装与维修各类室内外门。我们施工马来西亚各种常见门型：实木硬木（meranti、chengal、橡木）、HDF 贴面工程木门、平板防火板门、防火门（1 小时与 2 小时认证），以及厨卫用 PVC/金属门框。服务包括新门安装（含门框、门套、铰链与锁具）、刮地卡涩门的刨修、铰链更换、锁具安装、门框维修，以及厨卫 PVC 门整体更换。每次安装都包括规范调校、均匀缝隙（顶部和两侧 3–4mm，底部 5–8mm）以及交付前的关门测试。",
        highlights: [
          "实木、工程木、防火与防火板门专家",
          "门刨修与调校，解决刮地、卡涩或膨胀问题",
          "优质铰链（SS304 不锈钢）与锁具（Yale、Imperial、Hafele 或您自备）",
          "规范调校：顶/侧缝 3–4mm、底缝 5–8mm，开关顺滑",
          "带膨胀密封条的防火门安装，符合建筑法规",
          "每次更换项目均含旧门与门框拆除"
        ],
        subServices: [
          { name: "实木门安装", price: "从 RM 480 起", desc: "meranti 或 chengal 实木门，配 meranti 门框、3 个 SS304 铰链、门套与基础执手锁。" },
          { name: "防火板门安装", price: "从 RM 220 起", desc: "HDF 贴面工程门，防火板饰面光滑，适合经济型现代室内。" },
          { name: "门刨修与调校", price: "从 RM 90 起", desc: "刨修刮地或刮框的门，在现有铰链上重新挂门并调试锁具。" },
          { name: "防火门安装", price: "从 RM 850 起", desc: "1 小时或 2 小时认证防火门，配膨胀密封条，适合厨房、楼梯间或消防疏散通道。" }
        ],
        process: [
          { step: "01", title: "现场测量与选门", desc: "我们测量现有门洞（高、宽、框深），确认开门方向，并推荐合适的门型与尺寸。" },
          { step: "02", title: "门采购与交期", desc: "防火板门与工程门 3–7 天到货。实木门与定制防火门需 14–21 天。报价时我们提供确切交期。" },
          { step: "03", title: "旧门拆除", desc: "我们小心拆除旧门、铰链、锁具以及（如需要）门套。除非同时要求更换，门框保留。" },
          { step: "04", title: "新门安装", desc: "新门挂在不锈钢滚珠铰链上，缝隙调匀，锁具开槽安装。测试开关与锁舌是否顺滑。" },
          { step: "05", title: "门套与收尾", desc: "MDF 或实木门套斜角拼接安装、封边，待上漆。如需给门和门框刷漆可另行收费。" }
        ],
        faqs: [
          { q: "为什么我的门突然刮地？", a: "最常见的原因是湿度引起的膨胀——马来西亚热带湿度使木门吸潮膨胀，厨卫门尤其明显。其他原因包括铰链松动（门下垂）、房屋框架沉降或新铺的地面材料。我们判断原因后，或刨门、或用更长螺丝重挂铰链，膨胀严重则整门更换。" },
          { q: "可以保留现有门框只换门吗？", a: "大多数情况下可以。只要门框状况良好、方正且尺寸合适，我们就能在现有门框上挂新门。这样可省去换框费用，施工干扰也更小。我们测量现有门框，选配匹配的门（或将新门裁切到合适尺寸）。" },
          { q: "什么是防火门？我需要吗？", a: "防火门是经测试能在规定时间（通常 1 小时或 2 小时）内耐火的认证门与门框系统。马来西亚建筑法规要求部分公寓项目的厨房门、所有通往消防疏散楼梯的门以及特定商业场所安装防火门。我们供应并安装 Sanitor、Felicia 及本地认证厂商的防火门，配齐膨胀密封条与闭门器。" },
          { q: "实木门和防火板门该怎么选？", a: "实木门（meranti、chengal、橡木）更重、隔音更好、质感高级——还可多次打磨重漆。价格更高（RM 480 起）且对湿度敏感。防火板/工程门更轻、在马来西亚潮湿天气下尺寸更稳定、更易打理、价格更实惠（RM 220 起）。卧室与大门我们建议实木门；浴室、厨房与出租物业我们建议防火板门或 PVC 门。" }
        ],
        metaTitle: "吉隆坡与雪兰莪门维修与安装服务",
        metaDesc: "吉隆坡与雪兰莪门供应、安装、刨修与维修。实木、防火板、防火门。SS304 铰链、Yale/Hafele 锁具。每扇门从 RM220 起。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪供应、安装与维修各类门。实木、工程木、防火板、防火、PVC 门。门刨修、铰链更换、锁具安装、门框维修。SS304 不锈钢五金、缝隙均匀、交付前关门测试。",
        warranty: "12 个月门扇安装与五金保修"
      }
    }
  },

  // ── 20. WINDOW REPAIR ────────────────────────────────────────
  "window-repair": {
    slug: "window-repair",
    title: "Window Repair & Glass Replacement",
    tagline: "Casement, sliding, top-hung, awning windows — glass replacement, seal repair, handle replacement, and alignment. From RM 180.",
    description:
      "KL Servis Rumah repairs and replaces all types of residential and light-commercial windows across Kuala Lumpur and Selangor. We work on every common Malaysian window type: aluminium casement, sliding, top-hung (awning), and fixed glass panels. Common issues we resolve: cracked or shattered glass, broken or stiff handles and hinges, worn or hardened rubber seals causing water ingress, window frames out of alignment, missing or damaged grilles, and condensation between double-glazed units. We can also upgrade single-glazed windows to double-glazed for sound insulation, and replace old aluminium tracks with modern stainless or nylon rollers for smoother sliding. Emergency glass replacement is available same-day for landed houses, with a temporary board-up if custom glass is needed.",
    startPrice: "RM 180",
    icon: "square-stack",
    highlights: [
      "All window types: casement, sliding, top-hung, awning, fixed glass, louvre",
      "Cracked and shattered glass replacement with same-day emergency service for landed houses",
      "Worn seal replacement to stop water seepage and air-conditioning loss",
      "Stiff or broken handle, hinge, and roller repair or replacement",
      "Single to double-glazed upgrade for sound insulation in busy areas",
      "Frame alignment and track cleaning for smooth sliding operation"
    ],
    subServices: [
      { name: "Glass Replacement", price: "From RM 180", desc: "Removing broken or cracked glass and installing new clear, tinted, frosted, or tempered glass to the same size and thickness." },
      { name: "Window Seal Replacement", price: "From RM 25 / linier ft", desc: "Replacing worn or hardened EPDM rubber seals to stop water ingress and improve insulation." },
      { name: "Window Handle & Hinge Repair", price: "From RM 90", desc: "Replacing broken, stiff, or corroded handles, hinges, stays, and locking mechanisms on casement or top-hung windows." },
      { name: "Sliding Window Roller Replacement", price: "From RM 120", desc: "Replacing worn nylon or steel rollers and cleaning tracks for smooth sliding operation." }
    ],
    process: [
      { step: "01", title: "Window Inspection", desc: "We identify the window type, frame material, glass thickness, hardware condition, and the exact issue (glass, seal, hardware, or alignment)." },
      { step: "02", title: "Transparent Quote", desc: "Itemized quote covering parts, labour, and any access equipment needed (e.g. for high windows). Glass lead times are confirmed upfront." },
      { step: "03", title: "Safe Glass Removal", desc: "We carefully remove broken or cracked glass, vacuum debris, and dispose of shards safely. The opening is sealed temporarily if custom glass is needed." },
      { step: "04", title: "Installation", desc: "New glass, seals, or hardware is installed with proper glazing tape, sealant, and adjustment. We test the window for smooth operation and weather-tight seal." },
      { step: "05", title: "Handover & Test", desc: "The window is opened, closed, locked, and tested for water tightness with a controlled spray. The work area is cleaned and old materials removed." }
    ],
    faqs: [
      { q: "Can you replace just the glass without changing the whole window?", a: "Yes, in most cases. As long as the frame is in good condition and the right size, we can install new glass in your existing frame. This is much cheaper than a full window replacement. We can also upgrade single glass to double-glazed for better sound and heat insulation, though this may require a frame change depending on the original thickness." },
      { q: "How do I know if my window needs new seals or new glass?", a: "Signs of failed seals: water seepage during rain, draughts when the window is closed, fog or condensation between glass panes (in double-glazed units), and visible cracking or peeling of the rubber. Signs of failed glass: obvious cracks, chips, scratches that impair visibility, or shattered panes. We can assess on-site and recommend the most cost-effective repair." },
      { q: "My sliding window is hard to open. Do I need a new window?", a: "Usually no. Most sliding windows become hard to operate because of worn rollers, debris in the track, or a slight frame misalignment. We can replace the rollers (RM 120 per window), clean and lubricate the track, and re-align the sash if needed. This typically restores smooth operation for a fraction of the cost of a new window." },
      { q: "Do you offer emergency same-day glass replacement?", a: "Yes, for landed houses. We carry common sizes (4mm and 5mm clear and tinted glass) in our van and can usually replace broken glass on the spot. For custom sizes, tempered glass, or double-glazed units, we board up the opening securely and return within 2–5 working days for the permanent installation." }
    ],
    heroImage: "/hero-window.svg",
    metaTitle: "Window Repair & Glass Replacement KL & Selangor",
    metaDesc: "Window glass replacement, seal repair, handle/hinge/roller replacement in KL & Selangor. Casement, sliding, top-hung, awning windows. From RM180. Same-day emergency.",
    aioSummary: "KL Servis Rumah repairs and replaces windows across KL & Selangor. Glass replacement, seal repair, handle/hinge/roller replacement, frame alignment, single-to-double upgrade. Casement, sliding, top-hung, awning, fixed glass. Same-day emergency glass replacement for landed houses.",
    warranty: "12-Month Hardware & Seal Warranty",
    i18n: {
      ms: {
        title: "Pembaikan Tingkap & Penggantian Kaca",
        tagline: "Tingkap casement, gelangsar, top-hung, awning — penggantian kaca, pembaikan pengedap, penggantian pemegang dan penjajaran. Dari RM 180.",
        description: "KL Servis Rumah membaiki dan menggantikan semua jenis tingkap kediaman dan komersial ringan di seluruh Kuala Lumpur dan Selangor. Kami bekerja pada setiap jenis tingkap Malaysia biasa: casement aluminium, gelangsar, top-hung (awning) dan panel kaca tetap. Isu biasa yang kami selesaikan: kaca retak atau pecah, pemegang dan engsel rosak atau keras, pengedap getah haus atau mengeras menyebabkan kemasukan air, bingkai tingkap tidak jajar, grilles hilang atau rosak, dan kondensasi antara unit dua lapisan. Kami juga boleh menaik taraf tingkap kaca tunggal kepada dua lapisan untuk penebat bunyi, dan menggantikan trek aluminium lama dengan roller keluli tahan karat atau nilon moden untuk gelongsor lebih lancar. Penggantian kaca kecemasan tersedia hari sama untuk rumah landed, dengan papan sementara jika kaca kustom diperlukan.",
        highlights: [
          "Semua jenis tingkap: casement, gelangsar, top-hung, awning, kaca tetap, louvre",
          "Penggantian kaca retak dan pecah dengan perkhidmatan kecemasan hari sama untuk rumah landed",
          "Penggantian pengedap haus untuk menghentikan resapan air dan kehilangan penghawa dingin",
          "Pembaikan atau penggantian pemegang, engsel dan roller keras atau rosak",
          "Naik taraf kaca tunggal ke dua lapisan untuk penebat bunyi di kawasan sibuk",
          "Penjajaran bingkai dan pembersihan trek untuk operasi gelongsor lancar"
        ],
        subServices: [
          { name: "Penggantian Kaca", price: "Dari RM 180", desc: "Menanggalkan kaca pecah atau retak dan memasang kaca jernih, tinted, frosted atau tempered baharu mengikut saiz dan ketebalan sama." },
          { name: "Penggantian Pengedap Tingkap", price: "Dari RM 25 / kaki linier", desc: "Menggantikan pengedap getah EPDM haus atau mengeras untuk menghentikan kemasukan air dan menambah baik penebatan." },
          { name: "Pembaikan Pemegang & Engsel Tingkap", price: "Dari RM 90", desc: "Menggantikan pemegang, engsel, stay dan mekanisme kunci rosak, keras atau berkarat pada tingkap casement atau top-hung." },
          { name: "Penggantian Roller Tingkap Gelangsar", price: "Dari RM 120", desc: "Menggantikan roller nilon atau keluli haus dan membersihkan trek untuk operasi gelongsor lancar." }
        ],
        process: [
          { step: "01", title: "Pemeriksaan Tingkap", desc: "Kami mengenal pasti jenis tingkap, bahan bingkai, ketebalan kaca, keadaan perkakasan dan isu tepat (kaca, pengedap, perkakasan atau penjajaran)." },
          { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci merangkumi alat ganti, buruh dan sebarang peralatan akses yang diperlukan (contohnya untuk tingkap tinggi). Masa tunggu kaca disahkan terlebih dahulu." },
          { step: "03", title: "Penyingkiran Kaca Selamat", desc: "Kami menanggalkan kaca pecah atau retak dengan rapi, vakum serpihan dan melupuskan pecahan dengan selamat. Bukaan dikedap sementara jika kaca kustom diperlukan." },
          { step: "04", title: "Pemasangan", desc: "Kaca, pengedap atau perkakasan baharu dipasang dengan pita glazing, pengedap dan pelarasan yang betul. Kami menguji tingkap untuk operasi lancar dan pengedapan tahan cuaca." },
          { step: "05", title: "Serahan & Ujian", desc: "Tingkap dibuka, ditutup, dikunci dan diuji ketahanan air dengan semburan terkawal. Kawasan kerja dibersihkan dan bahan lama disingkirkan." }
        ],
        faqs: [
          { q: "Boleh anda menggantikan kaca sahaja tanpa menukar seluruh tingkap?", a: "Ya, dalam kebanyakan kes. Selagi bingkai dalam keadaan baik dan saiz betul, kami boleh memasang kaca baharu dalam bingkai sedia ada anda. Ini jauh lebih murah daripada penggantian tingkap penuh. Kami juga boleh menaik taraf kaca tunggal kepada dua lapisan untuk penebatan bunyi dan haba lebih baik, walaupun ini mungkin memerlukan penukaran bingkai bergantung pada ketebalan asal." },
          { q: "Bagaimana saya tahu tingkap saya memerlukan pengedap baharu atau kaca baharu?", a: "Tanda pengedap gagal: resapan air semasa hujan, bahang angin apabila tingkap ditutup, kabus atau kondensasi antara lapisan kaca (dalam unit dua lapisan) dan retakan atau pengelupasan getah yang kelihatan. Tanda kaca gagal: retakan jelas, serpih, calar yang menjejaskan penglihatan atau panel pecah. Kami boleh menilai di tapak dan mengesyorkan pembaikan paling menjimatkan." },
          { q: "Tingkap gelangsar saya sukar dibuka. Perlu saya beli tingkap baharu?", a: "Biasanya tidak. Kebanyakan tingkap gelangsar menjadi sukar dikendalikan kerana roller haus, serpihan dalam trek atau sedikit ketidakjajaran bingkai. Kami boleh menggantikan roller (RM 120 setiap tingkap), membersihkan dan melincirkan trek, dan menjajarkan semula sash jika perlu. Ini biasanya memulihkan operasi lancar pada sebahagian kecil kos tingkap baharu." },
          { q: "Adakah anda menawarkan penggantian kaca kecemasan hari sama?", a: "Ya, untuk rumah landed. Kami membawa saiz biasa (kaca jernih dan tinted 4mm dan 5mm) dalam van kami dan biasanya boleh menggantikan kaca pecah di tempat kejadian. Untuk saiz kustom, kaca tempered atau unit dua lapisan, kami menutup bukaan dengan papan dengan selamat dan kembali dalam 2–5 hari bekerja untuk pemasangan kekal." }
        ],
        metaTitle: "Pembaikan Tingkap & Penggantian Kaca KL & Selangor",
        metaDesc: "Penggantian kaca tingkap, pembaikan pengedap, penggantian pemegang/engsel/roller di KL & Selangor. Tingkap casement, gelangsar, top-hung, awning. Dari RM180. Kecemasan hari sama.",
        aioSummary: "KL Servis Rumah membaiki dan menggantikan tingkap di seluruh KL & Selangor. Penggantian kaca, pembaikan pengedap, penggantian pemegang/engsel/roller, penjajaran bingkai, naik taraf tunggal-ke-ganda. Casement, gelangsar, top-hung, awning, kaca tetap. Penggantian kaca kecemasan hari sama untuk rumah landed.",
        warranty: "Jaminan Perkakasan & Pengedap 12 Bulan"
      },
      zh: {
        title: "窗户维修与玻璃更换",
        tagline: "平开窗、推拉窗、上悬窗、外开下悬窗——玻璃更换、密封条维修、执手更换与调校。从 RM 180 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪维修与更换各类住宅及轻型商业窗户。我们施工马来西亚各种常见窗型：铝合金平开窗、推拉窗、上悬（外开下悬）窗与固定玻璃面板。我们解决的常见问题：玻璃开裂或碎裂、执手铰链损坏或卡涩、橡胶密封条老化变硬导致渗水、窗框错位、防护格栅缺失或损坏，以及中空玻璃内部结雾。我们还可以将单层玻璃升级为中空玻璃以提升隔音，并将旧铝合金轨道更换为现代不锈钢或尼龙滑轮，推拉更顺滑。有地住宅提供当日紧急玻璃更换，定制玻璃期间可临时封板。",
        highlights: [
          "所有窗型：平开、推拉、上悬、外开下悬、固定玻璃、百叶",
          "玻璃开裂碎裂更换，有地住宅当日紧急服务",
          "更换老化密封条，阻止渗水与冷气流失",
          "维修或更换卡涩、损坏的执手、铰链与滑轮",
          "单层升级中空玻璃，提升繁忙路段的隔音",
          "窗框调校与轨道清洁，推拉恢复顺滑"
        ],
        subServices: [
          { name: "玻璃更换", price: "从 RM 180 起", desc: "拆除碎裂或开裂玻璃，安装相同尺寸厚度的新白玻、茶色玻、磨砂玻或钢化玻璃。" },
          { name: "窗户密封条更换", price: "从 RM 25 / 延英尺起", desc: "更换老化变硬的 EPDM 橡胶密封条，阻止渗水并改善保温。" },
          { name: "窗户执手与铰链维修", price: "从 RM 90 起", desc: "更换平开窗或上悬窗上损坏、卡涩或腐蚀的执手、铰链、撑挡与锁闭机构。" },
          { name: "推拉窗滑轮更换", price: "从 RM 120 起", desc: "更换磨损的尼龙或钢滑轮并清洁轨道，恢复顺滑推拉。" }
        ],
        process: [
          { step: "01", title: "窗户检查", desc: "我们确认窗型、框料、玻璃厚度、五金状况与确切问题（玻璃、密封、五金或错位）。" },
          { step: "02", title: "透明报价", desc: "逐项报价涵盖配件、人工与任何所需的高空作业设备（如高位窗户）。玻璃交期提前确认。" },
          { step: "03", title: "安全拆玻璃", desc: "我们小心拆除碎裂或开裂玻璃，吸净碎屑并安全处理。如需定制玻璃，先临时封堵窗口。" },
          { step: "04", title: "安装", desc: "使用规范的压条胶带、密封胶与调校安装新玻璃、密封条或五金。我们测试窗户开关顺滑与气密防水。" },
          { step: "05", title: "交付与测试", desc: "窗户反复开合、上锁，并以受控喷水测试防水性。清理工作区并清运旧料。" }
        ],
        faqs: [
          { q: "可以只换玻璃不换整扇窗吗？", a: "大多数情况下可以。只要窗框状况良好、尺寸合适，我们就能在现有窗框内安装新玻璃，这比整窗更换便宜得多。我们还可以将单层玻璃升级为中空玻璃以获得更好的隔音隔热，不过视原始厚度可能需要换框。" },
          { q: "怎么判断窗户需要换密封条还是换玻璃？", a: "密封条失效的迹象：下雨渗水、关窗后有穿堂风、玻璃夹层间起雾结露（中空玻璃）、橡胶明显开裂或剥落。玻璃失效的迹象：明显裂纹、崩边、影响视线的划痕或整片碎裂。我们可以现场评估，推荐最省钱的维修方案。" },
          { q: "我的推拉窗很难推开，需要换新窗吗？", a: "通常不需要。大多数推拉窗变涩是因为滑轮磨损、轨道积灰或窗框轻微错位。我们可以更换滑轮（每扇窗 RM 120）、清洁润滑轨道，必要时调整窗扇。通常只需新窗零头的价格就能恢复顺滑。" },
          { q: "你们提供当日紧急玻璃更换吗？", a: "有地住宅提供。我们的服务车常备常用规格（4mm 和 5mm 白玻与茶色玻），通常可当场更换碎玻璃。定制尺寸、钢化玻璃或中空玻璃，我们会先安全封板，2–5 个工作日内回来正式安装。" }
        ],
        metaTitle: "吉隆坡与雪兰莪窗户维修与玻璃更换",
        metaDesc: "吉隆坡与雪兰莪窗玻璃更换、密封条维修、执手/铰链/滑轮更换。平开窗、推拉窗、上悬窗、外开下悬窗。从 RM180 起。当日紧急服务。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪维修与更换窗户。玻璃更换、密封条维修、执手/铰链/滑轮更换、窗框调校、单层升级中空。平开窗、推拉窗、上悬窗、外开下悬窗、固定玻璃。有地住宅当日紧急玻璃更换。",
        warranty: "12 个月五金与密封保修"
      }
    }
  },

  // ── 21. LOCKSMITH ────────────────────────────────────────
  "locksmith": {
    slug: "locksmith",
    title: "Locksmith & Smart Lock Services",
    tagline: "Digital smart locks, key cutting, lock replacement, door reinforcement, and emergency lockout service. From RM 150.",
    description:
      "KL Servis Rumah provides residential and light-commercial locksmith services across Kuala Lumpur and Selangor. We supply, install, and repair every type of lock: traditional mortice locks, deadbolts, knob locks, digital keypad locks, RFID card locks, Bluetooth smart locks, Wi-Fi smart locks with app control, and biometric fingerprint locks. Popular Malaysian smart lock brands we work with: **Samsung, Yale, Igloohome, Solity, Hafele, Kaiser, and Philips**. Beyond lock installation, we cut keys, re-key locks to a new key (so old keys stop working), open locked doors for emergency lockouts (with proof of ownership), and reinforce door frames with longer screws and strike plates for forced-entry resistance. All work is documented with serial numbers and warranty cards.",
    startPrice: "RM 150",
    icon: "key",
    highlights: [
      "Samsung, Yale, Igloohome, Solity, Hafele, Kaiser, Philips smart lock specialists",
      "Key cutting, re-keying, and emergency lockout service for landed houses and condos",
      "Door frame reinforcement with 3-inch security screws and reinforced strike plates",
      "Smart lock app pairing and user/fingerprint registration included in every install",
      "Free on-site security consultation with photos of vulnerable entry points",
      "All work documented with serial numbers and warranty cards for insurance records"
    ],
    subServices: [
      { name: "Smart Lock Installation", price: "From RM 380", desc: "Supply and install digital keypad, Bluetooth, Wi-Fi, or biometric fingerprint lock with app pairing and user registration." },
      { name: "Mortice / Deadbolt Lock Replacement", price: "From RM 180", desc: "Remove existing mortice or deadbolt lock and install a new Yale, Imperial, or Hafele lock with 3 keys." },
      { name: "Key Cutting & Re-Keying", price: "From RM 25", desc: "Cutting new keys to existing locks, or re-keying the lock to a new key so old keys stop working (ideal after moving in or lost key)." },
      { name: "Emergency Lockout (Landed House)", price: "From RM 150", desc: "Non-destructive entry to your home or room during lockout, with proof of ownership. Available same-day within KL & Selangor." }
    ],
    process: [
      { step: "01", title: "Lock Assessment & Recommendation", desc: "We assess your current lock, door material (solid wood, hollow core, metal), and security needs. We recommend the right lock type and brand within your budget." },
      { step: "02", title: "Transparent Quote", desc: "Itemized quote covering the lock, accessories, installation labour, and any door modifications needed for the new lock to fit properly." },
      { step: "03", title: "Old Lock Removal", desc: "The old lock is removed, the door is cleaned and prepped, and any damage from the previous lock is repaired." },
      { step: "04", title: "New Lock Installation", desc: "The new lock is fitted, aligned, and tested. For smart locks, we pair the app, register fingerprints/pins, and configure user access levels." },
      { step: "05", title: "Security Brief & Handover", desc: "We provide a brief on how to use and maintain the lock, register your warranty, and hand over the serial number and warranty card for your insurance." }
    ],
    faqs: [
      { q: "Which smart lock brand is best for Malaysian condos and landed houses?", a: "For landed houses, we recommend Yale YDM series, Igloohome Smart Mortise, or Samsung SHP — all reliable, weather-resistant, and easy to manage via app. For condos, the popular choices are Solity and Hafele because they fit standard Malaysian condo door cutouts without major modification. We can advise on the best fit for your specific door during the on-site consultation." },
      { q: "Can I keep my existing lock and just cut new keys?", a: "Yes, in most cases. As long as the lock cylinder is in good condition, we can cut new keys directly from the lock. If you have moved into a new home and want all old keys to stop working, we can also re-key the lock to a new key without replacing the whole lock — much cheaper than a full lock replacement." },
      { q: "What if I'm locked out of my house?", a: "Call our emergency line. For landed houses we offer same-day non-destructive lockout service within KL & Selangor (subject to technician availability). We will require proof of ownership (IC, utility bill, or photo ID matching the address) before opening the door. For condos, the management office usually has a master key — we can also coordinate with them." },
      { q: "How long does smart lock installation take?", a: "A standard replacement on an existing door with matching cutout takes 30 to 60 minutes. A new installation that requires drilling a new mortise pocket in the door takes 1.5 to 2 hours. We always do a full operation test, app pairing, and user registration before handover." }
    ],
    heroImage: "/hero-locksmith.svg",
    metaTitle: "Locksmith & Smart Lock Installation KL & Selangor",
    metaDesc: "Smart lock, digital lock, mortice lock, deadbolt installation in KL & Selangor. Samsung, Yale, Igloohome, Solity, Hafele, Philips. From RM150. Emergency lockout.",
    aioSummary: "KL Servis Rumah supplies, installs, and repairs locks across KL & Selangor. Smart locks (Samsung, Yale, Igloohome, Solity, Hafele, Kaiser, Philips), mortice, deadbolt, knob locks. Key cutting, re-keying, emergency lockout, door reinforcement. App pairing, fingerprint registration, warranty documentation.",
    warranty: "12-Month Lock Installation & Hardware Warranty",
    i18n: {
      ms: {
        title: "Perkhidmatan Tukang Kunci & Kunci Pintar",
        tagline: "Kunci pintar digital, pemotongan kunci, penggantian kunci, pengukuhan pintu dan perkhidmatan kecemasan terkunci. Dari RM 150.",
        description: "KL Servis Rumah menyediakan perkhidmatan tukang kunci kediaman dan komersial ringan di seluruh Kuala Lumpur dan Selangor. Kami membekalkan, memasang dan membaiki setiap jenis kunci: kunci mortice tradisional, deadbolt, kunci tombol, kunci pad kekunci digital, kunci kad RFID, kunci pintar Bluetooth, kunci pintar Wi-Fi dengan kawalan aplikasi dan kunci cap jari biometrik. Jenama kunci pintar Malaysia popular yang kami kerjakan: **Samsung, Yale, Igloohome, Solity, Hafele, Kaiser dan Philips**. Selain pemasangan kunci, kami memotong kunci, re-key kunci kepada kunci baharu (supaya kunci lama tidak berfungsi lagi), membuka pintu terkunci untuk kecemasan terkunci (dengan bukti pemilikan) dan mengukuhkan bingkai pintu dengan skru lebih panjang dan plat strike untuk rintangan pecah masuk. Semua kerja didokumentasikan dengan nombor siri dan kad jaminan.",
        highlights: [
          "Pakar kunci pintar Samsung, Yale, Igloohome, Solity, Hafele, Kaiser, Philips",
          "Pemotongan kunci, re-key dan perkhidmatan kecemasan terkunci untuk rumah landed dan kondominium",
          "Pengukuhan bingkai pintu dengan skru keselamatan 3 inci dan plat strike diperkuat",
          "Pemasangan aplikasi kunci pintar dan pendaftaran pengguna/cap jari termasuk dalam setiap pemasangan",
          "Konsultasi keselamatan di tapak percuma dengan foto titik masuk terdedah",
          "Semua kerja didokumentasikan dengan nombor siri dan kad jaminan untuk rekod insurans"
        ],
        subServices: [
          { name: "Pemasangan Kunci Pintar", price: "Dari RM 380", desc: "Bekalan dan pemasangan kunci pad kekunci digital, Bluetooth, Wi-Fi atau cap jari biometrik dengan pemasangan aplikasi dan pendaftaran pengguna." },
          { name: "Penggantian Kunci Mortice / Deadbolt", price: "Dari RM 180", desc: "Menanggalkan kunci mortice atau deadbolt sedia ada dan memasang kunci Yale, Imperial atau Hafele baharu dengan 3 kunci." },
          { name: "Pemotongan Kunci & Re-Key", price: "Dari RM 25", desc: "Memotong kunci baharu untuk kunci sedia ada, atau re-key kunci kepada kunci baharu supaya kunci lama tidak berfungsi (sesuai selepas berpindah atau kehilangan kunci)." },
          { name: "Kecemasan Terkunci (Rumah Landed)", price: "Dari RM 150", desc: "Kemasukan tanpa merosakkan ke rumah atau bilik anda semasa terkunci, dengan bukti pemilikan. Tersedia hari sama dalam KL & Selangor." }
        ],
        process: [
          { step: "01", title: "Penilaian Kunci & Cadangan", desc: "Kami menilai kunci semasa, bahan pintu (kayu pepejal, teras berongga, logam) dan keperluan keselamatan anda. Kami mengesyorkan jenis dan jenama kunci yang betul mengikut bajet anda." },
          { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci merangkumi kunci, aksesori, buruh pemasangan dan sebarang pengubahsuaian pintu yang diperlukan supaya kunci baharu muat dengan betul." },
          { step: "03", title: "Penyingkiran Kunci Lama", desc: "Kunci lama ditanggalkan, pintu dibersihkan dan disediakan, dan sebarang kerosakan daripada kunci sebelumnya dibaiki." },
          { step: "04", title: "Pemasangan Kunci Baharu", desc: "Kunci baharu dipasang, dijajarkan dan diuji. Untuk kunci pintar, kami memasangkan aplikasi, mendaftarkan cap jari/pin dan mengkonfigurasi tahap akses pengguna." },
          { step: "05", title: "Taklimat Keselamatan & Serahan", desc: "Kami memberikan taklimat cara menggunakan dan menyelenggara kunci, mendaftarkan jaminan anda dan menyerahkan nombor siri serta kad jaminan untuk insurans anda." }
        ],
        faqs: [
          { q: "Jenama kunci pintar manakah yang terbaik untuk kondominium dan rumah landed Malaysia?", a: "Untuk rumah landed, kami mengesyorkan siri Yale YDM, Igloohome Smart Mortise atau Samsung SHP — semuanya boleh dipercayai, tahan cuaca dan mudah diurus melalui aplikasi. Untuk kondominium, pilihan popular ialah Solity dan Hafele kerana ia muat pada potongan pintu kondominium Malaysia standard tanpa pengubahsuaian besar. Kami boleh memberi nasihat tentang kesesuaian terbaik untuk pintu khusus anda semasa konsultasi di tapak." },
          { q: "Boleh saya kekalkan kunci sedia ada dan hanya potong kunci baharu?", a: "Ya, dalam kebanyakan kes. Selagi silinder kunci dalam keadaan baik, kami boleh memotong kunci baharu terus daripada kunci. Jika anda telah berpindah ke rumah baharu dan mahu semua kunci lama tidak berfungsi, kami juga boleh re-key kunci kepada kunci baharu tanpa menggantikan seluruh kunci — jauh lebih murah daripada penggantian kunci penuh." },
          { q: "Bagaimana jika saya terkunci di luar rumah?", a: "Hubungi talian kecemasan kami. Untuk rumah landed kami menawarkan perkhidmatan terkunci tanpa merosakkan hari sama dalam KL & Selangor (tertakluk pada ketersediaan juruteknik). Kami memerlukan bukti pemilikan (IC, bil utiliti atau ID bergambar yang sepadan dengan alamat) sebelum membuka pintu. Untuk kondominium, pejabat pengurusan biasanya mempunyai kunci master — kami juga boleh menyelaras dengan mereka." },
          { q: "Berapa lama pemasangan kunci pintar mengambil masa?", a: "Penggantian standard pada pintu sedia ada dengan potongan sepadan mengambil 30 hingga 60 minit. Pemasangan baharu yang memerlukan gerudi poket mortise baharu pada pintu mengambil 1.5 hingga 2 jam. Kami sentiasa menjalankan ujian operasi penuh, pemasangan aplikasi dan pendaftaran pengguna sebelum serahan." }
        ],
        metaTitle: "Tukang Kunci & Pemasangan Kunci Pintar KL & Selangor",
        metaDesc: "Kunci pintar, kunci digital, kunci mortice, pemasangan deadbolt di KL & Selangor. Samsung, Yale, Igloohome, Solity, Hafele, Philips. Dari RM150. Kecemasan terkunci.",
        aioSummary: "KL Servis Rumah membekalkan, memasang dan membaiki kunci di seluruh KL & Selangor. Kunci pintar (Samsung, Yale, Igloohome, Solity, Hafele, Kaiser, Philips), mortice, deadbolt, kunci tombol. Pemotongan kunci, re-key, kecemasan terkunci, pengukuhan pintu. Pemasangan aplikasi, pendaftaran cap jari, dokumentasi jaminan.",
        warranty: "Jaminan Pemasangan Kunci & Perkakasan 12 Bulan"
      },
      zh: {
        title: "锁匠与智能锁服务",
        tagline: "数字智能锁、配钥匙、换锁、门体加固与紧急开锁服务。从 RM 150 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供住宅与轻型商业锁匠服务。我们供应、安装与维修各种锁具：传统执手锁、呆锁、球形锁、数字密码锁、RFID 卡锁、蓝牙智能锁、App 控制的 Wi-Fi 智能锁以及生物指纹锁。我们常用的马来西亚热门智能锁品牌：**Samsung、Yale、Igloohome、Solity、Hafele、Kaiser 与 Philips**。除装锁外，我们还配钥匙、换锁芯改钥匙（旧钥匙随之失效）、为紧急被锁门外的情况无损开门（需所有权证明），并用加长螺丝与加强锁扣板加固门框以抵御暴力闯入。所有工作都以序列号与保修卡记录在案。",
        highlights: [
          "Samsung、Yale、Igloohome、Solity、Hafele、Kaiser、Philips 智能锁专家",
          "有地住宅与公寓的配钥匙、换锁芯与紧急开锁服务",
          "门框加固：3 英寸防撬螺丝与加强锁扣板",
          "每次安装均含智能锁 App 配对与用户/指纹录入",
          "免费现场安全评估，拍摄薄弱入口点照片",
          "所有工作以序列号与保修卡记录，便于保险存档"
        ],
        subServices: [
          { name: "智能锁安装", price: "从 RM 380 起", desc: "供应并安装数字密码、蓝牙、Wi-Fi 或生物指纹锁，含 App 配对与用户录入。" },
          { name: "执手锁 / 呆锁更换", price: "从 RM 180 起", desc: "拆除现有执手锁或呆锁，安装带 3 把钥匙的新 Yale、Imperial 或 Hafele 锁。" },
          { name: "配钥匙与换锁芯", price: "从 RM 25 起", desc: "为现有锁配新钥匙，或换锁芯改用新钥匙使旧钥匙失效（适合搬新家或丢钥匙后）。" },
          { name: "紧急开锁（有地住宅）", price: "从 RM 150 起", desc: "被锁门外时无损开启您的家门或房门，需提供所有权证明。吉隆坡与雪兰莪当日可达。" }
        ],
        process: [
          { step: "01", title: "锁具评估与推荐", desc: "我们评估现有锁具、门材质（实木、空心、金属）与您的安全需求，按预算推荐合适的锁型与品牌。" },
          { step: "02", title: "透明报价", desc: "逐项报价涵盖锁具、配件、安装人工以及新锁就位所需的任何门体改动。" },
          { step: "03", title: "旧锁拆除", desc: "拆除旧锁，清洁整理门面，并修补旧锁造成的任何损伤。" },
          { step: "04", title: "新锁安装", desc: "安装、调正并测试新锁。智能锁则配对 App、录入指纹/密码，并配置用户权限等级。" },
          { step: "05", title: "安全讲解与交付", desc: "我们讲解使用与保养方法，注册保修，并移交序列号与保修卡供您投保。" }
        ],
        faqs: [
          { q: "马来西亚公寓和有地住宅最适合哪个智能锁品牌？", a: "有地住宅我们推荐 Yale YDM 系列、Igloohome Smart Mortise 或 Samsung SHP——均可靠耐用、耐候性好、App 管理方便。公寓的热门选择是 Solity 和 Hafele，因为它们无需大改即可适配马来西亚公寓标准门开孔。现场咨询时我们可以针对您的具体门给出最佳建议。" },
          { q: "可以保留现有锁只配新钥匙吗？", a: "大多数情况下可以。只要锁芯状况良好，我们就能直接照锁配新钥匙。如果您刚搬新家想让所有旧钥匙失效，也可以换锁芯改用新钥匙而无需整锁更换——比全换锁便宜得多。" },
          { q: "被锁在门外怎么办？", a: "拨打我们的紧急热线。有地住宅我们提供吉隆坡与雪兰莪当日无损开锁服务（视技工档期）。开门前我们需要所有权证明（身份证、水电账单或与地址一致的带照片证件）。公寓方面，管理处通常有万能钥匙——我们也可以与他们协调。" },
          { q: "安装智能锁要多久？", a: "在开孔匹配的现有门上标准更换需要 30 到 60 分钟。需要在门上开新锁体槽的全新安装需 1.5 到 2 小时。交付前我们总是做完整功能测试、App 配对与用户录入。" }
        ],
        metaTitle: "吉隆坡与雪兰莪锁匠与智能锁安装",
        metaDesc: "吉隆坡与雪兰莪智能锁、数字锁、执手锁、呆锁安装。Samsung、Yale、Igloohome、Solity、Hafele、Philips。从 RM150 起。紧急开锁。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪供应、安装与维修锁具。智能锁（Samsung、Yale、Igloohome、Solity、Hafele、Kaiser、Philips）、执手锁、呆锁、球形锁。配钥匙、换锁芯、紧急开锁、门体加固。App 配对、指纹录入、保修登记。",
        warranty: "12 个月锁具安装与五金保修"
      }
    }
  },

  // ── 22. GLASS & ALUMINIUM ────────────────────────────────────────
  "glass-aluminium": {
    slug: "glass-aluminium",
    title: "Glass & Aluminium Fabrication",
    tagline: "Shower screens, glass partitions, aluminium windows, sliding doors, and mirror installation across KL & Selangor. From RM 280.",
    description:
      "KL Servis Rumah provides custom glass and aluminium fabrication and installation across Kuala Lumpur and Selangor. We work on residential and light-commercial projects: frameless and framed shower screens, glass office partitions, sliding glass doors, swing glass doors, aluminium casement and sliding windows, top-hung awning windows, louvre windows, and decorative mirrors. We use tempered or laminated safety glass from Malaysian certified glass manufacturers (Malaysian Sheet Glass, TechnoGlas, Xinyi Glass), with aluminium frames from leading local extruders (Akasia, Hua Ho, YKK AP, or custom powder-coated profiles). Every shower screen installation includes waterproofing review, proper drip-edge design, and 12-month leak-free warranty on the seals.",
    startPrice: "RM 280",
    icon: "panel-top",
    highlights: [
      "Tempered and laminated safety glass from MS-certified Malaysian manufacturers",
      "Aluminium frames from Akasia, Hua Ho, YKK AP, or custom powder-coated profiles",
      "Frameless and framed shower screens with anti-leak drip-edge design",
      "Glass office partitions for home offices, meeting rooms, and shop fitting",
      "Aluminium sliding and casement windows fabricated to size on site",
      "Wall mirrors, dressing mirrors, and gym mirrors with concealed fixings"
    ],
    subServices: [
      { name: "Frameless Shower Screen", price: "From RM 380 / panel", desc: "10–12mm tempered glass with concealed hinges and anti-leak seals. Custom cut to your bathroom layout." },
      { name: "Aluminium Sliding Window", price: "From RM 280 / sq ft", desc: "Locally fabricated aluminium sliding window with 5mm clear or tinted glass, nylon rollers, and weatherstrip." },
      { name: "Glass Office Partition", price: "From RM 180 / sq ft", desc: "10–12mm tempered glass partition with aluminium or frameless channel, including door and hardware." },
      { name: "Wall Mirror Installation", price: "From RM 280", desc: "5–6mm silver-backed mirror with concealed aluminium channel fixings, suitable for bathrooms, gyms, and dressing rooms." }
    ],
    process: [
      { step: "01", title: "Site Measurement & Design", desc: "We measure the opening, capture layout constraints (slopes, plumbing, drainage), and recommend the right glass thickness, frame, and hardware." },
      { step: "02", title: "Quotation & Lead Time", desc: "Tempered glass typically takes 5–7 working days for fabrication. Aluminium frames are 3–5 days. You receive an itemized quote with both." },
      { step: "03", title: "Fabrication", desc: "Glass is cut, tempered (heat-strengthened for safety), and edge-polished at the factory. Aluminium frames are cut, mitred, and powder-coated to your colour choice." },
      { step: "04", title: "On-Site Installation", desc: "Frames are anchored with stainless or zinc-plated fixings, glass is seated on setting blocks with structural silicone, and hardware is installed." },
      { step: "05", title: "Sealing & Water Test", desc: "For shower screens, we run a 24-hour water test to confirm the seal is leak-free. All seals and hardware are aligned and tested for smooth operation." }
    ],
    faqs: [
      { q: "What glass thickness should I choose for a shower screen?", a: "For a single fixed panel up to 1.5m wide, 10mm tempered glass is sufficient. For frameless doors or larger panels above 1.5m wide, we recommend 12mm tempered. For bathroom sliders or framed designs, 8mm is acceptable. We always use tempered or laminated safety glass that breaks into small safe granules rather than dangerous shards — never ordinary annealed glass in wet areas." },
      { q: "Can my existing shower screen be re-sealed instead of replaced?", a: "Yes, in many cases. If the glass and frame are in good condition but the silicone seal has gone black, mouldy, or detached, we can remove the old silicone, clean the surface, and apply fresh mould-resistant sanitary-grade silicone. This typically costs 30–50% of a full replacement and extends the screen life by 3–5 years." },
      { q: "Do you handle office glass partitions for commercial fit-outs?", a: "Yes. We install full-height glass partitions for offices, meeting rooms, and shop floors using 10–12mm tempered glass with aluminium or frameless U-channel systems. We can also integrate glass doors (swing or sliding), frosted/etched film for privacy, and acoustic laminated glass for meeting rooms. Our team is experienced with managed building compliance and lift protection for high-rise installations." },
      { q: "What is the difference between clear, tinted, frosted, and reflective glass?", a: "Clear glass is the standard transparent option. Tinted (grey, bronze, green) reduces solar heat gain by 30–40% and is common for west-facing windows. Frosted (acid-etched or sandblasted) is opaque for privacy while still transmitting light. Reflective glass has a metallic coating that reflects heat and provides one-way privacy during the day. We can show you physical samples and discuss the right choice for your specific use case." }
    ],
    heroImage: "/hero-glass-aluminium.svg",
    metaTitle: "Glass & Aluminium Fabrication KL & Selangor",
    metaDesc: "Shower screens, glass partitions, aluminium windows in KL & Selangor. Tempered glass, Akasia/Hua Ho frames, custom fabrication. From RM280. 12-month leak warranty.",
    aioSummary: "KL Servis Rumah fabricates and installs glass and aluminium products across KL & Selangor. Frameless and framed shower screens, glass office partitions, aluminium windows, sliding glass doors, wall mirrors. Tempered safety glass from MS-certified manufacturers. Akasia, Hua Ho, YKK AP frames.",
    warranty: "12-Month Leak-Free & Hardware Warranty",
    i18n: {
      ms: {
        title: "Fabrikasi Kaca & Aluminium",
        tagline: "Skrin pancuran, partition kaca, tingkap aluminium, pintu gelangsar dan pemasangan cermin di seluruh KL & Selangor. Dari RM 280.",
        description: "KL Servis Rumah menyediakan fabrikasi dan pemasangan kaca dan aluminium kustom di seluruh Kuala Lumpur dan Selangor. Kami bekerja pada projek kediaman dan komersial ringan: skrin pancuran tanpa bingkai dan berbingkai, partition pejabat kaca, pintu kaca gelangsar, pintu kaca hayun, tingkap aluminium casement dan gelangsar, tingkap awning top-hung, tingkap louvre dan cermin hiasan. Kami menggunakan kaca keselamatan tempered atau laminated daripada pengeluar kaca bertauliah Malaysia (Malaysian Sheet Glass, TechnoGlas, Xinyi Glass), dengan bingkai aluminium daripada penyemperit tempatan terkemuka (Akasia, Hua Ho, YKK AP atau profil powder-coated kustom). Setiap pemasangan skrin pancuran termasuk semakan kalis air, reka bentuk drip-edge yang betul dan jaminan bebas bocor 12 bulan pada pengedap.",
        highlights: [
          "Kaca keselamatan tempered dan laminated daripada pengeluar Malaysia bertauliah MS",
          "Bingkai aluminium daripada Akasia, Hua Ho, YKK AP atau profil powder-coated kustom",
          "Skrin pancuran tanpa bingkai dan berbingkai dengan reka bentuk drip-edge anti-bocor",
          "Partition pejabat kaca untuk pejabat rumah, bilik mesyuarat dan pemasangan kedai",
          "Tingkap gelangsar dan casement aluminium difabrikasi mengikut saiz di tapak",
          "Cermin dinding, cermin pakaian dan cermin gim dengan pengikat tersembunyi"
        ],
        subServices: [
          { name: "Skrin Pancuran Tanpa Bingkai", price: "Dari RM 380 / panel", desc: "Kaca tempered 10–12mm dengan engsel tersembunyi dan pengedap anti-bocor. Potongan kustom mengikut susun atur bilik mandi anda." },
          { name: "Tingkap Gelangsar Aluminium", price: "Dari RM 280 / kaki persegi", desc: "Tingkap gelangsar aluminium fabrikasi tempatan dengan kaca jernih atau tinted 5mm, roller nilon dan weatherstrip." },
          { name: "Partition Pejabat Kaca", price: "Dari RM 180 / kaki persegi", desc: "Partition kaca tempered 10–12mm dengan saluran aluminium atau tanpa bingkai, termasuk pintu dan perkakasan." },
          { name: "Pemasangan Cermin Dinding", price: "Dari RM 280", desc: "Cermin silver-backed 5–6mm dengan pengikat saluran aluminium tersembunyi, sesuai untuk bilik mandi, gim dan bilik persalinan." }
        ],
        process: [
          { step: "01", title: "Ukuran Tapak & Reka Bentuk", desc: "Kami mengukur bukaan, menangkap kekangan susun atur (cerun, paip, saliran) dan mengesyorkan ketebalan kaca, bingkai dan perkakasan yang betul." },
          { step: "02", title: "Sebut Harga & Masa Tunggu", desc: "Kaca tempered biasanya mengambil 5–7 hari bekerja untuk fabrikasi. Bingkai aluminium 3–5 hari. Anda menerima sebut harga terperinci dengan kedua-duanya." },
          { step: "03", title: "Fabrikasi", desc: "Kaca dipotong, di-temper (diperkukuh haba untuk keselamatan) dan digilap tepi di kilang. Bingkai aluminium dipotong, di-mitre dan di-powder-coat mengikut pilihan warna anda." },
          { step: "04", title: "Pemasangan Di Tapak", desc: "Bingkai disauh dengan pengikat keluli tahan karat atau bersadur zink, kaca didudukkan pada blok pemasangan dengan silikon struktur, dan perkakasan dipasang." },
          { step: "05", title: "Pengedapan & Ujian Air", desc: "Untuk skrin pancuran, kami menjalankan ujian air 24 jam untuk mengesahkan pengedap bebas bocor. Semua pengedap dan perkakasan dijajarkan dan diuji untuk operasi lancar." }
        ],
        faqs: [
          { q: "Ketebalan kaca apakah yang patut saya pilih untuk skrin pancuran?", a: "Untuk panel tetap tunggal sehingga 1.5m lebar, kaca tempered 10mm mencukupi. Untuk pintu tanpa bingkai atau panel lebih besar melebihi 1.5m lebar, kami mengesyorkan tempered 12mm. Untuk gelangsar bilik mandi atau reka bentuk berbingkai, 8mm boleh diterima. Kami sentiasa menggunakan kaca keselamatan tempered atau laminated yang pecah menjadi granul kecil selamat dan bukannya serpihan berbahaya — tidak pernah kaca annealed biasa di kawasan basah." },
          { q: "Boleh skrin pancuran sedia ada saya dikedap semula dan bukannya diganti?", a: "Ya, dalam banyak kes. Jika kaca dan bingkai dalam keadaan baik tetapi pengedap silikon telah menghitam, berkulat atau tertanggal, kami boleh menanggalkan silikon lama, membersihkan permukaan dan menyapu silikon gred saniter tahan kulat baharu. Ini biasanya berharga 30–50% daripada penggantian penuh dan memanjangkan jangka hayat skrin sebanyak 3–5 tahun." },
          { q: "Adakah anda mengendalikan partition kaca pejabat untuk fit-out komersial?", a: "Ya. Kami memasang partition kaca penuh tinggi untuk pejabat, bilik mesyuarat dan lantai kedai menggunakan kaca tempered 10–12mm dengan sistem saluran-U aluminium atau tanpa bingkai. Kami juga boleh menyepadukan pintu kaca (hayun atau gelangsar), filem frosted/etched untuk privasi dan kaca laminated akustik untuk bilik mesyuarat. Pasukan kami berpengalaman dengan pematuhan bangunan terurus dan perlindungan lif untuk pemasangan bangunan tinggi." },
          { q: "Apakah perbezaan antara kaca jernih, tinted, frosted dan reflektif?", a: "Kaca jernih ialah pilihan telus standard. Tinted (kelabu, gangsa, hijau) mengurangkan perolehan haba solar sebanyak 30–40% dan biasa untuk tingkap menghadap barat. Frosted (acid-etched atau sandblasted) legap untuk privasi sambil masih menghantar cahaya. Kaca reflektif mempunyai salutan logam yang memantulkan haba dan memberikan privasi sehala pada siang hari. Kami boleh tunjukkan sampel fizikal dan membincangkan pilihan yang betul untuk kes penggunaan khusus anda." }
        ],
        metaTitle: "Fabrikasi Kaca & Aluminium KL & Selangor",
        metaDesc: "Skrin pancuran, partition kaca, tingkap aluminium di KL & Selangor. Kaca tempered, bingkai Akasia/Hua Ho, fabrikasi kustom. Dari RM280. Jaminan bebas bocor 12 bulan.",
        aioSummary: "KL Servis Rumah memfabrikasi dan memasang produk kaca dan aluminium di seluruh KL & Selangor. Skrin pancuran tanpa bingkai dan berbingkai, partition pejabat kaca, tingkap aluminium, pintu kaca gelangsar, cermin dinding. Kaca keselamatan tempered daripada pengeluar bertauliah MS. Bingkai Akasia, Hua Ho, YKK AP.",
        warranty: "Jaminan Bebas Bocor & Perkakasan 12 Bulan"
      },
      zh: {
        title: "玻璃与铝业工程",
        tagline: "吉隆坡与雪兰莪的淋浴屏、玻璃隔断、铝合金窗、推拉门与镜子安装。从 RM 280 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供定制玻璃与铝合金的制作与安装。我们承接住宅与轻型商业项目：无框与有框淋浴屏、玻璃办公隔断、玻璃推拉门、玻璃平开门、铝合金平开窗与推拉窗、上悬窗、百叶窗与装饰镜。我们采用马来西亚认证玻璃厂商（Malaysian Sheet Glass、TechnoGlas、信义玻璃）的钢化或夹层安全玻璃，铝型材来自本地知名挤压厂（Akasia、Hua Ho、YKK AP 或定制粉末喷涂型材）。每次淋浴屏安装都包括防水检查、合理的滴水边设计，以及密封 12 个月防漏保修。",
        highlights: [
          "MS 认证马来西亚厂商的钢化与夹层安全玻璃",
          "Akasia、Hua Ho、YKK AP 或定制粉末喷涂型材的铝框",
          "无框与有框淋浴屏，防渗漏滴水边设计",
          "家庭办公室、会议室与商铺装修用玻璃隔断",
          "铝合金推拉窗与平开窗现场按尺寸定制",
          "墙镜、穿衣镜与健身房镜，暗藏式固定件"
        ],
        subServices: [
          { name: "无框淋浴屏", price: "从 RM 380 / 扇起", desc: "10–12mm 钢化玻璃配暗藏铰链与防漏密封。按您的浴室布局定制裁切。" },
          { name: "铝合金推拉窗", price: "从 RM 280 / 平方英尺起", desc: "本地制作的铝合金推拉窗，配 5mm 白玻或茶色玻、尼龙滑轮与密封毛条。" },
          { name: "玻璃办公隔断", price: "从 RM 180 / 平方英尺起", desc: "10–12mm 钢化玻璃隔断，配铝合金或无框地槽，含门与五金。" },
          { name: "墙镜安装", price: "从 RM 280 起", desc: "5–6mm 镀银镜，配暗藏铝槽固定件，适合浴室、健身房与更衣室。" }
        ],
        process: [
          { step: "01", title: "现场测量与设计", desc: "我们测量洞口，记录布局限制（坡度、管道、排水），并推荐合适的玻璃厚度、框架与五金。" },
          { step: "02", title: "报价与交期", desc: "钢化玻璃制作通常需 5–7 个工作日。铝框 3–5 天。您将收到列明两者的逐项报价。" },
          { step: "03", title: "工厂制作", desc: "玻璃在工厂裁切、钢化（热强化以确保安全）并磨边。铝框按您选择的颜色裁切、斜拼并粉末喷涂。" },
          { step: "04", title: "现场安装", desc: "框架用不锈钢或镀锌固定件锚固，玻璃以结构硅胶坐于垫块上，五金安装就位。" },
          { step: "05", title: "密封与淋水测试", desc: "淋浴屏我们进行 24 小时淋水测试确认密封无渗漏。所有密封与五金调校并测试开关顺滑。" }
        ],
        faqs: [
          { q: "淋浴屏应该选多厚的玻璃？", a: "宽至 1.5m 的单块固定面板，10mm 钢化玻璃即可。无框门或超过 1.5m 宽的大面板，我们建议 12mm 钢化。浴室推拉门或有框设计，8mm 也可以。我们始终使用钢化或夹层安全玻璃——破碎时形成安全小颗粒而非危险碎片——潮湿区域绝不用普通退火玻璃。" },
          { q: "现有淋浴屏可以只重新打胶而不更换吗？", a: "很多情况下可以。如果玻璃和框架状况良好，但硅胶发黑、发霉或脱落，我们可以清除旧硅胶、清洁表面并重新施打防霉卫浴级硅胶。费用通常只有整体更换的 30–50%，并可延长淋浴屏寿命 3–5 年。" },
          { q: "你们承接商业装修的玻璃办公隔断吗？", a: "承接。我们使用 10–12mm 钢化玻璃配铝合金或无框 U 型槽系统，为办公室、会议室与商铺安装通顶玻璃隔断。还可集成玻璃门（平开或推拉）、磨砂/蚀刻隐私膜，以及会议室用夹层隔音玻璃。我们的团队熟悉管理式楼宇的合规要求与高层施工的电梯保护。" },
          { q: "白玻、茶玻、磨砂与镀膜玻璃有什么区别？", a: "白玻是标准透明选择。茶色/灰色/绿色着色玻璃可减少 30–40% 的太阳得热，常用于西晒窗。磨砂（酸蚀或喷砂）透光不透视，保护隐私。镀膜玻璃带金属涂层，反射热量并在白天提供单向隐私。我们可以提供实物样板，并根据您的具体用途讨论合适的选择。" }
        ],
        metaTitle: "吉隆坡与雪兰莪玻璃与铝业工程",
        metaDesc: "吉隆坡与雪兰莪淋浴屏、玻璃隔断、铝合金窗。钢化玻璃、Akasia/Hua Ho 型材、定制加工。从 RM280 起。12 个月防漏保修。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪制作与安装玻璃与铝制品。无框与有框淋浴屏、玻璃办公隔断、铝合金窗、玻璃推拉门、墙镜。MS 认证厂商钢化安全玻璃。Akasia、Hua Ho、YKK AP 型材。",
        warranty: "12 个月防漏与五金保修"
      }
    }
  },

  // ── 23. CLEANING SERVICES ────────────────────────────────────────
  "cleaning": {
    slug: "cleaning",
    title: "Residential & Office Cleaning",
    tagline: "Weekly, fortnightly, or monthly cleaning for homes, condos, and small offices. Background-checked cleaners, eco products. From RM 150 / session.",
    description:
      "KL Servis Rumah provides reliable residential and small-office cleaning services across Kuala Lumpur and Selangor. We service condos, apartments, terrace houses, and small offices (under 3,000 sqft) with weekly, fortnightly, monthly, or one-off cleaning visits. Every cleaner is background-checked, fully trained, and equipped with eco-friendly, pet-safe cleaning products. Standard service includes dusting, vacuuming, mopping, kitchen and bathroom cleaning, surface wiping, trash removal, and bed-making. We can also customize a checklist for your home (e.g. specific floor type, allergy considerations, sensitive furniture). All recurring bookings are managed by a dedicated supervisor who performs a monthly quality spot-check and handles any service feedback.",
    startPrice: "RM 150",
    icon: "spray-can",
    highlights: [
      "Background-checked, in-house trained cleaners (no gig-economy contractors)",
      "Eco-friendly, pet-safe, and child-safe cleaning products as standard",
      "Flexible weekly, fortnightly, or monthly scheduling with a single WhatsApp point of contact",
      "Custom cleaning checklist built around your home, floor type, and sensitivities",
      "Monthly supervisor spot-check and quality report for every recurring booking",
      "Locked pricing, no surprise fees, and same-day replacement if your regular cleaner is unavailable"
    ],
    subServices: [
      { name: "Weekly Condo Cleaning (1,000 sqft)", price: "From RM 150 / visit", desc: "3-bed condo or apartment cleaned weekly, including kitchen, bathrooms, and common areas." },
      { name: "Bi-Weekly Terrace House Cleaning", price: "From RM 220 / visit", desc: "Two-storey terrace house cleaned every fortnight, including ground floor, first floor, and outdoor areas." },
      { name: "Office Cleaning (Small Office, 1,500 sqft)", price: "From RM 280 / visit", desc: "After-hours office cleaning including workstations, meeting rooms, pantry, and restrooms." },
      { name: "One-Off Spring Clean", price: "From RM 380", desc: "One-time deep clean including ceiling fans, light fixtures, behind furniture, and window interiors." }
    ],
    process: [
      { step: "01", title: "Booking & Onboarding", desc: "You submit your home size, location, and preferred frequency via WhatsApp. We confirm a quote and a start date within 24 hours." },
      { step: "02", title: "Custom Cleaning Checklist", desc: "We build a custom checklist for your home covering floor type, sensitive surfaces, areas to skip, and any specific requests (e.g. pet beds, child-safe products)." },
      { step: "03", title: "First Clean & Calibration", desc: "Your assigned cleaner performs the first visit. We follow up with you to confirm satisfaction and adjust the checklist if needed." },
      { step: "04", title: "Recurring Service", desc: "Your cleaner arrives on the same day and time each visit. You receive a WhatsApp confirmation 30 minutes before arrival." },
      { step: "05", title: "Monthly Quality Check", desc: "A supervisor performs a spot-check once a month and shares a quality report with you. Any feedback is implemented immediately." }
    ],
    faqs: [
      { q: "Do I need to be home during the cleaning?", a: "No. Most of our recurring clients give us a spare key, door card, or building passcode so the cleaner can come and go independently. We keep a secure log of who has access, and all cleaners are background-checked and insured. You can also be home if you prefer — many clients choose to be home for the first few visits until they are comfortable." },
      { q: "What cleaning products do you use?", a: "We use eco-friendly, biodegradable, pet-safe and child-safe products by default. For kitchen and bathroom we use a separate, stronger degreaser and descaler. If you have specific allergies or sensitivities (e.g. no essential oils, no fragrance), let us know at booking and we will customize. We can also use your own products if you prefer." },
      { q: "Can I customize the cleaning checklist?", a: "Absolutely. The checklist is fully customizable. You can specify areas to prioritize, areas to skip, special instructions for delicate items, and any recurring tasks (e.g. \"always wipe down the kitchen cabinet fronts\"). We update the checklist in your client file and your cleaner reviews it before each visit." },
      { q: "What if I am not happy with a clean?", a: "We offer a 24-hour re-clean guarantee. If anything in the clean does not meet your expectations, contact us within 24 hours and we will send the cleaner back to re-do the specific area, free of charge. For recurring clients, persistent issues are addressed by the supervisor on the next quality check." }
    ],
    heroImage: "/hero-cleaning.svg",
    metaTitle: "Residential & Office Cleaning Services KL & Selangor",
    metaDesc: "Weekly, fortnightly, or monthly cleaning in KL & Selangor. Background-checked cleaners, eco products, custom checklist. From RM150/session. Condo, terrace, office.",
    aioSummary: "KL Servis Rumah provides residential and small-office cleaning across KL & Selangor. Weekly, fortnightly, monthly, or one-off. Background-checked cleaners, eco-friendly products, custom checklist per home. Monthly supervisor spot-check. Condos, apartments, terrace houses, small offices.",
    warranty: "24-Hour Re-Clean Satisfaction Guarantee",
    i18n: {
      ms: {
        title: "Pembersihan Kediaman & Pejabat",
        tagline: "Pembersihan mingguan, dua minggu sekali atau bulanan untuk rumah, kondominium dan pejabat kecil. Pembersih diperiksa latar belakang, produk mesra alam. Dari RM 150 / sesi.",
        description: "KL Servis Rumah menyediakan perkhidmatan pembersihan kediaman dan pejabat kecil yang boleh dipercayai di seluruh Kuala Lumpur dan Selangor. Kami memberi perkhidmatan kepada kondominium, apartmen, rumah teres dan pejabat kecil (bawah 3,000 kaki persegi) dengan lawatan pembersihan mingguan, dua minggu sekali, bulanan atau sekali sahaja. Setiap pembersih diperiksa latar belakang, terlatih sepenuhnya dan dilengkapi dengan produk pembersihan mesra alam dan selamat untuk haiwan peliharaan. Perkhidmatan standard termasuk mengelap habuk, vakum, mop, pembersihan dapur dan bilik mandi, mengelap permukaan, membuang sampah dan mengemas katil. Kami juga boleh menyesuaikan senarai semak untuk rumah anda (contohnya jenis lantai khusus, pertimbangan alahan, perabot sensitif). Semua tempahan berulang diuruskan oleh penyelia khas yang menjalankan pemeriksaan kualiti rawak bulanan dan mengendalikan sebarang maklum balas perkhidmatan.",
        highlights: [
          "Pembersih diperiksa latar belakang dan terlatih dalaman (bukan kontraktor gig-economy)",
          "Produk pembersihan mesra alam, selamat untuk haiwan peliharaan dan kanak-kanak sebagai standard",
          "Penjadualan mingguan, dua minggu sekali atau bulanan yang fleksibel dengan satu titik hubungan WhatsApp",
          "Senarai semak pembersihan kustom dibina mengikut rumah, jenis lantai dan sensitiviti anda",
          "Pemeriksaan rawak penyelia bulanan dan laporan kualiti untuk setiap tempahan berulang",
          "Harga dikunci, tiada yuran mengejut dan pengganti hari sama jika pembersih tetap anda tidak hadir"
        ],
        subServices: [
          { name: "Pembersihan Kondominium Mingguan (1,000 kaki persegi)", price: "Dari RM 150 / lawatan", desc: "Kondominium 3 bilik atau apartmen dibersihkan setiap minggu, termasuk dapur, bilik mandi dan kawasan bersama." },
          { name: "Pembersihan Rumah Teres Dua Minggu Sekali", price: "Dari RM 220 / lawatan", desc: "Rumah teres dua tingkat dibersihkan setiap dua minggu, termasuk tingkat bawah, tingkat satu dan kawasan luar." },
          { name: "Pembersihan Pejabat (Pejabat Kecil, 1,500 kaki persegi)", price: "Dari RM 280 / lawatan", desc: "Pembersihan pejabat selepas waktu kerja termasuk stesen kerja, bilik mesyuarat, pantry dan tandas." },
          { name: "Cucian Musim Sekali Sahaja", price: "Dari RM 380", desc: "Pembersihan menyeluruh sekali termasuk kipas siling, lekapan lampu, belakang perabot dan bahagian dalam tingkap." }
        ],
        process: [
          { step: "01", title: "Tempahan & Onboarding", desc: "Anda menghantar saiz rumah, lokasi dan kekerapan pilihan melalui WhatsApp. Kami mengesahkan sebut harga dan tarikh mula dalam 24 jam." },
          { step: "02", title: "Senarai Semak Pembersihan Kustom", desc: "Kami membina senarai semak kustom untuk rumah anda merangkumi jenis lantai, permukaan sensitif, kawasan yang dilangkau dan sebarang permintaan khusus (contohnya katil haiwan, produk selamat kanak-kanak)." },
          { step: "03", title: "Cucian Pertama & Penentukuran", desc: "Pembersih yang ditugaskan menjalankan lawatan pertama. Kami menghubungi anda untuk mengesahkan kepuasan dan melaraskan senarai semak jika perlu." },
          { step: "04", title: "Perkhidmatan Berulang", desc: "Pembersih anda tiba pada hari dan masa yang sama setiap lawatan. Anda menerima pengesahan WhatsApp 30 minit sebelum ketibaan." },
          { step: "05", title: "Pemeriksaan Kualiti Bulanan", desc: "Penyelia menjalankan pemeriksaan rawak sebulan sekali dan berkongsi laporan kualiti dengan anda. Sebarang maklum balas dilaksanakan serta-merta." }
        ],
        faqs: [
          { q: "Perlu saya berada di rumah semasa pembersihan?", a: "Tidak. Kebanyakan pelanggan berulang kami memberikan kunci ganti, kad pintu atau kod laluan bangunan supaya pembersih boleh datang dan pergi secara bebas. Kami menyimpan log selamat siapa yang mempunyai akses, dan semua pembersih diperiksa latar belakang dan berinsurans. Anda juga boleh berada di rumah jika mahu — ramai pelanggan memilih berada di rumah untuk beberapa lawatan pertama sehingga selesa." },
          { q: "Produk pembersihan apa yang anda gunakan?", a: "Kami menggunakan produk mesra alam, terbiodegradasi, selamat untuk haiwan peliharaan dan kanak-kanak secara lalai. Untuk dapur dan bilik mandi kami menggunakan pencuci gris dan nyahkerak berasingan yang lebih kuat. Jika anda mempunyai alahan atau sensitiviti khusus (contohnya tiada minyak pati, tiada pewangi), beritahu kami semasa tempahan dan kami akan menyesuaikan. Kami juga boleh menggunakan produk anda sendiri jika anda mahu." },
          { q: "Boleh saya menyesuaikan senarai semak pembersihan?", a: "Sudah tentu. Senarai semak boleh disesuaikan sepenuhnya. Anda boleh menentukan kawasan keutamaan, kawasan dilangkau, arahan khas untuk barang halus dan sebarang tugas berulang (contohnya \"sentiasa lap muka kabinet dapur\"). Kami mengemas kini senarai semak dalam fail pelanggan anda dan pembersih anda menyemaknya sebelum setiap lawatan." },
          { q: "Bagaimana jika saya tidak berpuas hati dengan sesuatu cucian?", a: "Kami menawarkan jaminan cuci semula 24 jam. Jika apa-apa dalam cucian tidak memenuhi jangkaan anda, hubungi kami dalam 24 jam dan kami akan menghantar pembersih kembali untuk mengulangi kawasan khusus, percuma. Untuk pelanggan berulang, isu berterusan ditangani oleh penyelia pada pemeriksaan kualiti seterusnya." }
        ],
        metaTitle: "Perkhidmatan Pembersihan Kediaman & Pejabat KL & Selangor",
        metaDesc: "Pembersihan mingguan, dua minggu sekali atau bulanan di KL & Selangor. Pembersih diperiksa latar belakang, produk mesra alam, senarai semak kustom. Dari RM150/sesi. Kondo, teres, pejabat.",
        aioSummary: "KL Servis Rumah menyediakan pembersihan kediaman dan pejabat kecil di seluruh KL & Selangor. Mingguan, dua minggu sekali, bulanan atau sekali sahaja. Pembersih diperiksa latar belakang, produk mesra alam, senarai semak kustom setiap rumah. Pemeriksaan rawak penyelia bulanan. Kondominium, apartmen, rumah teres, pejabat kecil.",
        warranty: "Jaminan Kepuasan Cuci Semula 24 Jam"
      },
      zh: {
        title: "住宅与办公室清洁",
        tagline: "住宅、公寓与小型办公室的每周、每两周或每月清洁。背景审查的清洁员，环保清洁剂。从 RM 150 / 次起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供可靠的住宅与小型办公室清洁服务。我们为公寓、服务式住宅、排屋与小型办公室（3,000 平方英尺以下）提供每周、每两周、每月或单次清洁。每位清洁员都经过背景审查、全面培训，并配备环保、宠物安全的清洁产品。标准服务包括除尘、吸尘、拖地、厨卫清洁、台面擦拭、垃圾清理与整理床铺。我们还可以为您的家定制清洁清单（如特定地板类型、过敏考虑、娇贵家具）。所有包期客户都由专属督导管理，每月进行质量抽查并处理服务反馈。",
        highlights: [
          "背景审查、内部培训的清洁员（非零工平台外包）",
          "标配环保、宠物与儿童安全的清洁产品",
          "每周/每两周/每月灵活排期，单一 WhatsApp 联系人",
          "按您的家居、地板类型与敏感需求定制清洁清单",
          "每个包期客户享有每月督导抽查与质量报告",
          "价格锁定、无隐藏收费，固定清洁员缺席时当日替补"
        ],
        subServices: [
          { name: "每周公寓清洁（1,000 平方英尺）", price: "从 RM 150 / 次起", desc: "三房公寓每周清洁，包括厨房、浴室与公共区域。" },
          { name: "每两周排屋清洁", price: "从 RM 220 / 次起", desc: "双层排屋每两周清洁，包括楼下、楼上与室外区域。" },
          { name: "办公室清洁（小型办公室，1,500 平方英尺）", price: "从 RM 280 / 次起", desc: "下班后办公室清洁，包括工位、会议室、茶水间与洗手间。" },
          { name: "单次大扫除", price: "从 RM 380 起", desc: "一次性深度清洁，包括吊扇、灯具、家具背后与窗户内侧。" }
        ],
        process: [
          { step: "01", title: "预订与开通", desc: "您通过 WhatsApp 提交房屋面积、位置与期望频率。我们在 24 小时内确认报价与开始日期。" },
          { step: "02", title: "定制清洁清单", desc: "我们为您的家定制清洁清单，涵盖地板类型、敏感表面、跳过区域与任何特殊要求（如宠物窝、儿童安全产品）。" },
          { step: "03", title: "首次清洁与校准", desc: "指定清洁员执行首次服务。我们随后回访确认您的满意度，必要时调整清单。" },
          { step: "04", title: "定期服务", desc: "您的清洁员每次同一时间上门。到达前 30 分钟您会收到 WhatsApp 确认。" },
          { step: "05", title: "每月质量检查", desc: "督导每月抽查一次并与您分享质量报告。任何反馈立即落实。" }
        ],
        faqs: [
          { q: "清洁期间我需要在家吗？", a: "不需要。大多数包期客户给我们备用钥匙、门卡或门禁密码，清洁员可独立进出。我们对持有门禁的人员留有安全记录，所有清洁员都经过背景审查并有保险。您也可以在家——许多客户前几次选择在家，直到放心为止。" },
          { q: "你们用什么清洁产品？", a: "默认使用环保、可生物降解、宠物与儿童安全的产品。厨房和浴室另用更强的去油剂与除垢剂。如果您有特定过敏或敏感（如无精油、无香精），预订时告知我们即可定制。也可以使用您自己的产品。" },
          { q: "可以自定义清洁清单吗？", a: "完全可以。清单完全可定制。您可以指定重点区域、跳过区域、娇贵物品的特别说明以及任何固定任务（如\"每次都要擦厨房柜门\"）。我们在客户档案中更新清单，清洁员每次上门前都会查阅。" },
          { q: "对清洁不满意怎么办？", a: "我们提供 24 小时返工保证。如果清洁有任何地方不符合您的期望，24 小时内联系我们，我们将免费派清洁员返工重做指定区域。包期客户的持续问题由督导在下一次质量检查时处理。" }
        ],
        metaTitle: "吉隆坡与雪兰莪住宅与办公室清洁服务",
        metaDesc: "吉隆坡与雪兰莪每周、每两周或每月清洁。背景审查清洁员、环保产品、定制清单。从 RM150/次起。公寓、排屋、办公室。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供住宅与小型办公室清洁。每周、每两周、每月或单次。背景审查清洁员、环保产品、每户定制清单。每月督导抽查。公寓、服务式住宅、排屋、小型办公室。",
        warranty: "24 小时返工满意保证"
      }
    }
  },

  // ── 24. DEEP CLEANING ────────────────────────────────────────
  "deep-cleaning": {
    slug: "deep-cleaning",
    title: "Deep Cleaning & Move-In/Out",
    tagline: "Top-to-bottom deep cleaning for move-in, move-out, post-illness, or seasonal refresh. From RM 380.",
    description:
      "KL Servis Rumah provides professional deep cleaning services across Kuala Lumpur and Selangor. Deep cleaning goes far beyond a regular weekly clean: it includes inside oven and refrigerator, ceiling fan blade degreasing, light fixture and switch plate wiping, behind and under furniture, window and track cleaning, grout scrubbing, hard water stain removal, mould treatment, curtain and blind vacuuming, and detailed bathroom descale. Our deep cleans are typically requested for: move-in (so you start fresh), move-out (to maximize your security deposit return), post-illness (cold, flu, COVID disinfection), allergy season (dust-mite reduction), or a quarterly seasonal refresh. We use hospital-grade disinfectant for post-illness cleans and HEPA-filtered vacuums throughout.",
    startPrice: "RM 380",
    icon: "brush",
    highlights: [
      "Top-to-bottom coverage including inside oven, fridge, ceiling fans, and light fixtures",
      "HEPA-filtered vacuums for dust-mite and pet-dander reduction",
      "Hospital-grade disinfection for post-illness or COVID cleans",
      "Mould and mildew treatment with anti-fungal solution",
      "Grout scrubbing and hard water stain removal in kitchens and bathrooms",
      "Move-out cleans that meet landlord inspection standards — and pass security deposit return"
    ],
    subServices: [
      { name: "Condo Move-Out Deep Clean (1,000 sqft)", price: "From RM 380", desc: "Full top-to-bottom clean including inside cabinets, oven, fridge, fans, and window tracks. Move-out ready." },
      { name: "Terrace House Deep Clean (2,000 sqft)", price: "From RM 580", desc: "Two-storey home including outdoor areas, garage, and staircases. Move-in or move-out ready." },
      { name: "Post-Illness Disinfection Clean", price: "From RM 450", desc: "Hospital-grade disinfection of all touchpoints, fabrics, and air spaces. Recommended after flu, COVID, or stomach bugs." },
      { name: "Allergy Season Refresh", price: "From RM 420", desc: "HEPA-vacuum deep clean with dust-mite treatment on mattresses, sofas, and curtains." }
    ],
    process: [
      { step: "01", title: "Scope Assessment", desc: "We confirm home size, focus areas, and any specific concerns (mould, post-illness, allergy, move-in/out). For move-out we ask for the landlord's checklist if available." },
      { step: "02", title: "Transparent Quote", desc: "Itemized quote based on home size, scope, and number of cleaners needed (typically 2–3 cleaners for 4–6 hours)." },
      { step: "03", title: "Top-Down Cleaning", desc: "We start from ceiling fans, light fixtures, and high surfaces, then work down to walls, furniture, and finally floors. This ensures debris falls downward and is captured." },
      { step: "04", title: "Detail Cleaning", desc: "Inside cabinets, oven, fridge, behind furniture, window tracks, ceiling fan blades, bathroom grout, and other detail areas are scrubbed and disinfected." },
      { step: "05", title: "Final Inspection & Touch-Ups", desc: "We do a final walkthrough with you (or your landlord) and address any missed spots. For move-out cleans, we provide a written completion receipt." }
    ],
    faqs: [
      { q: "How long does a deep clean take?", a: "It depends on the size and condition of the home. A standard 1,000 sqft condo takes 4–6 hours with 2 cleaners. A 2,000 sqft terrace house takes 6–8 hours with 3 cleaners. Heavily soiled or post-renovation homes can take longer. We always quote a fixed price based on the assessment, so the duration does not affect the price." },
      { q: "What is the difference between deep cleaning and post-renovation cleaning?", a: "Deep cleaning is for homes that are lived-in and need a thorough reset (move-in/out, post-illness, seasonal). Post-renovation cleaning is specifically for homes that have just been built or renovated and need construction debris, paint dust, and grout haze removed. Post-renovation cleaning requires more aggressive tools (scrapers, solvents) and is priced higher. If you have just renovated, book our post-renovation cleaning instead." },
      { q: "Do you provide the cleaning products and equipment?", a: "Yes. We bring all cleaning products, microfiber cloths, mops, buckets, HEPA-filtered vacuums, and any specialty equipment (e.g. grout brushes, mould sprayers, extension poles for high fixtures). You do not need to provide anything except access to water and electricity." },
      { q: "Can I combine deep cleaning with pest control or disinfection?", a: "Yes. We can coordinate with our pest control partners for a one-time service (typically RM 200–400 extra depending on property size). For post-illness or COVID, we include hospital-grade disinfection in our standard post-illness service at no extra charge. Just mention your needs at booking." }
    ],
    heroImage: "/hero-deep-cleaning.svg",
    metaTitle: "Deep Cleaning & Move-In/Out Services KL & Selangor",
    metaDesc: "Top-to-bottom deep cleaning in KL & Selangor. Move-in, move-out, post-illness disinfection. HEPA vacuums, hospital-grade products. From RM380. 24-hr guarantee.",
    aioSummary: "KL Servis Rumah provides deep cleaning services across KL & Selangor. Move-in, move-out, post-illness disinfection, allergy season refresh, quarterly reset. Top-to-bottom coverage including inside oven, fridge, fans, window tracks, grout. HEPA vacuums, hospital-grade disinfection.",
    warranty: "24-Hour Re-Clean Satisfaction Guarantee",
    i18n: {
      ms: {
        title: "Cucian Menyeluruh & Pindah Masuk/Keluar",
        tagline: "Cucian menyeluruh atas-ke-bawah untuk pindah masuk, pindah keluar, selepas sakit atau penyegaran bermusim. Dari RM 380.",
        description: "KL Servis Rumah menyediakan perkhidmatan cucian menyeluruh profesional di seluruh Kuala Lumpur dan Selangor. Cucian menyeluruh jauh melampaui cucian mingguan biasa: ia termasuk bahagian dalam ketuhar dan peti sejuk, nyahgris bilah kipas siling, mengelap lekapan lampu dan plat suis, belakang dan bawah perabot, pembersihan tingkap dan trek, gosokan grout, penyingkiran kotoran air liat, rawatan kulat, vakum langsir dan bidai, serta nyahkerak bilik mandi terperinci. Cucian menyeluruh kami biasanya diminta untuk: pindah masuk (supaya anda bermula bersih), pindah keluar (untuk memaksimumkan pulangan deposit keselamatan), selepas sakit (selsema, selesema, disinfeksi COVID), musim alahan (pengurangan hama habuk) atau penyegaran bermusim suku tahunan. Kami menggunakan disinfektan gred hospital untuk cucian selepas sakit dan vakum berpenapis HEPA di seluruh rumah.",
        highlights: [
          "Perlindungan atas-ke-bawah termasuk bahagian dalam ketuhar, peti sejuk, kipas siling dan lekapan lampu",
          "Vakum berpenapis HEPA untuk pengurangan hama habuk dan kelemumur haiwan",
          "Disinfeksi gred hospital untuk cucian selepas sakit atau COVID",
          "Rawatan kulat dan lumut dengan larutan anti-kulat",
          "Gosokan grout dan penyingkiran kotoran air liat di dapur dan bilik mandi",
          "Cucian pindah keluar yang memenuhi piawaian pemeriksaan tuan rumah — dan lulus pulangan deposit keselamatan"
        ],
        subServices: [
          { name: "Cucian Menyeluruh Pindah Keluar Kondominium (1,000 kaki persegi)", price: "Dari RM 380", desc: "Cucian atas-ke-bawah penuh termasuk bahagian dalam kabinet, ketuhar, peti sejuk, kipas dan trek tingkap. Sedia pindah keluar." },
          { name: "Cucian Menyeluruh Rumah Teres (2,000 kaki persegi)", price: "Dari RM 580", desc: "Rumah dua tingkat termasuk kawasan luar, garaj dan tangga. Sedia pindah masuk atau keluar." },
          { name: "Cucian Disinfeksi Selepas Sakit", price: "Dari RM 450", desc: "Disinfeksi gred hospital semua titik sentuh, fabrik dan ruang udara. Disyorkan selepas selesema, COVID atau sakit perut." },
          { name: "Penyegaran Musim Alahan", price: "Dari RM 420", desc: "Cucian menyeluruh vakum HEPA dengan rawatan hama habuk pada tilam, sofa dan langsir." }
        ],
        process: [
          { step: "01", title: "Penilaian Skop", desc: "Kami mengesahkan saiz rumah, kawasan tumpuan dan sebarang kebimbangan khusus (kulat, selepas sakit, alahan, pindah masuk/keluar). Untuk pindah keluar kami meminta senarai semak tuan rumah jika ada." },
          { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci berdasarkan saiz rumah, skop dan bilangan pembersih diperlukan (biasanya 2–3 pembersih selama 4–6 jam)." },
          { step: "03", title: "Pembersihan Atas-Ke-Bawah", desc: "Kami bermula dari kipas siling, lekapan lampu dan permukaan tinggi, kemudian turun ke dinding, perabot dan akhirnya lantai. Ini memastikan serpihan jatuh ke bawah dan ditangkap." },
          { step: "04", title: "Pembersihan Terperinci", desc: "Bahagian dalam kabinet, ketuhar, peti sejuk, belakang perabot, trek tingkap, bilah kipas siling, grout bilik mandi dan kawasan terperinci lain digosok dan didisinfeksi." },
          { step: "05", title: "Pemeriksaan Akhir & Sentuhan", desc: "Kami menjalankan walkthrough akhir dengan anda (atau tuan rumah anda) dan menangani sebarang tempat yang terlepas. Untuk cucian pindah keluar, kami menyediakan resit penyiapan bertulis." }
        ],
        faqs: [
          { q: "Berapa lama cucian menyeluruh mengambil masa?", a: "Ia bergantung pada saiz dan keadaan rumah. Kondominium standard 1,000 kaki persegi mengambil 4–6 jam dengan 2 pembersih. Rumah teres 2,000 kaki persegi mengambil 6–8 jam dengan 3 pembersih. Rumah yang sangat kotor atau selepas pengubahsuaian mungkin mengambil masa lebih lama. Kami sentiasa memberikan harga tetap berdasarkan penilaian, jadi tempoh tidak menjejaskan harga." },
          { q: "Apakah perbezaan antara cucian menyeluruh dan cucian selepas pengubahsuaian?", a: "Cucian menyeluruh ialah untuk rumah yang didiami dan memerlukan reset menyeluruh (pindah masuk/keluar, selepas sakit, bermusim). Cucian selepas pengubahsuaian khusus untuk rumah yang baru dibina atau diubah suai dan memerlukan serpihan pembinaan, habuk cat dan kabut grout disingkirkan. Cucian selepas pengubahsuaian memerlukan alat lebih agresif (pengikis, pelarut) dan berharga lebih tinggi. Jika anda baru sahaja mengubah suai, tempah cucian selepas pengubahsuaian kami sebaliknya." },
          { q: "Adakah anda menyediakan produk dan peralatan pembersihan?", a: "Ya. Kami membawa semua produk pembersihan, kain mikrofiber, mop, baldi, vakum berpenapis HEPA dan sebarang peralatan khas (contohnya berus grout, penyembur kulat, batang sambungan untuk lekapan tinggi). Anda tidak perlu menyediakan apa-apa kecuali akses kepada air dan elektrik." },
          { q: "Boleh saya gabungkan cucian menyeluruh dengan kawalan serangga atau disinfeksi?", a: "Ya. Kami boleh menyelaras dengan rakan kongsi kawalan serangga kami untuk perkhidmatan sekali (biasanya RM 200–400 tambahan bergantung pada saiz hartanah). Untuk selepas sakit atau COVID, kami menyertakan disinfeksi gred hospital dalam perkhidmatan selepas sakit standard kami tanpa caj tambahan. Nyatakan sahaja keperluan anda semasa tempahan." }
        ],
        metaTitle: "Cucian Menyeluruh & Perkhidmatan Pindah Masuk/Keluar KL & Selangor",
        metaDesc: "Cucian menyeluruh atas-ke-bawah di KL & Selangor. Pindah masuk, pindah keluar, disinfeksi selepas sakit. Vakum HEPA, produk gred hospital. Dari RM380. Jaminan 24 jam.",
        aioSummary: "KL Servis Rumah menyediakan perkhidmatan cucian menyeluruh di seluruh KL & Selangor. Pindah masuk, pindah keluar, disinfeksi selepas sakit, penyegaran musim alahan, reset suku tahunan. Perlindungan atas-ke-bawah termasuk bahagian dalam ketuhar, peti sejuk, kipas, trek tingkap, grout. Vakum HEPA, disinfeksi gred hospital.",
        warranty: "Jaminan Kepuasan Cuci Semula 24 Jam"
      },
      zh: {
        title: "深度清洁与搬家保洁",
        tagline: "入住、退租、病后消毒或季节性焕新的全屋自上而下深度清洁。从 RM 380 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供专业深度清洁服务。深度清洁远超普通的每周保洁：包括烤箱和冰箱内部、吊扇叶片去油、灯具与开关面板擦拭、家具背后与底部、窗户与轨道清洁、砖缝刷洗、硬水渍去除、霉菌处理、窗帘与百叶吸尘，以及浴室细致除垢。深度清洁通常用于：搬家入住（从干净开始）、退租（最大化押金返还）、病后（感冒、流感、新冠消毒）、过敏季（减少尘螨）或季度性焕新。病后清洁我们使用医用级消毒剂，全屋使用 HEPA 过滤吸尘器。",
        highlights: [
          "自上而下全覆盖，包括烤箱、冰箱、吊扇与灯具内部",
          "HEPA 过滤吸尘器，减少尘螨与宠物皮屑",
          "医用级消毒，用于病后或新冠清洁",
          "抗真菌溶液处理霉菌与霉斑",
          "厨房与浴室的砖缝刷洗与硬水渍去除",
          "退租清洁达到房东验收标准——助您全额拿回押金"
        ],
        subServices: [
          { name: "公寓退租深度清洁（1,000 平方英尺）", price: "从 RM 380 起", desc: "全屋自上而下清洁，包括柜内、烤箱、冰箱、吊扇与窗轨。达到退租标准。" },
          { name: "排屋深度清洁（2,000 平方英尺）", price: "从 RM 580 起", desc: "双层住宅含室外区域、车库与楼梯。达到入住或退租标准。" },
          { name: "病后消毒清洁", price: "从 RM 450 起", desc: "所有接触点、织物与空气的医用级消毒。建议流感、新冠或肠胃病后使用。" },
          { name: "过敏季焕新", price: "从 RM 420 起", desc: "HEPA 吸尘深度清洁，床垫、沙发与窗帘的尘螨处理。" }
        ],
        process: [
          { step: "01", title: "范围评估", desc: "我们确认房屋面积、重点区域与任何特殊顾虑（霉菌、病后、过敏、搬入/搬出）。退租清洁我们会索取房东的验收清单（如有）。" },
          { step: "02", title: "透明报价", desc: "按房屋面积、范围与所需清洁员人数逐项报价（通常 2–3 名清洁员，4–6 小时）。" },
          { step: "03", title: "自上而下清洁", desc: "从吊扇、灯具与高处表面开始，逐步向下到墙面、家具，最后是地板。确保灰尘向下掉落并被收走。" },
          { step: "04", title: "细节清洁", desc: "柜内、烤箱、冰箱、家具背后、窗轨、吊扇叶片、浴室砖缝等细节区域逐一刷洗并消毒。" },
          { step: "05", title: "最终检查与补漏", desc: "我们与您（或您的房东）一起最终走查，补齐任何遗漏。退租清洁我们提供书面完工收据。" }
        ],
        faqs: [
          { q: "深度清洁需要多长时间？", a: "取决于房屋大小与状况。标准的 1,000 平方英尺公寓由 2 名清洁员需 4–6 小时。2,000 平方英尺排屋由 3 名清洁员需 6–8 小时。重度脏污或装修后的房屋可能更久。我们总是按评估报固定价格，时长不影响价格。" },
          { q: "深度清洁和装修后清洁有什么区别？", a: "深度清洁针对正在居住、需要彻底重置的房屋（搬入/搬出、病后、季节性）。装修后清洁专门针对新建或刚装修完、需要清除建筑残渣、涂料粉尘与砖缝浮灰的房屋。装修后清洁需要更强力的工具（铲刀、溶剂），价格也更高。如果您刚装修完，请改订我们的装修后清洁。" },
          { q: "你们自带清洁产品和设备吗？", a: "是的。我们自带所有清洁产品、超细纤维布、拖把、水桶、HEPA 过滤吸尘器及任何专用设备（如砖缝刷、霉菌喷雾、高处灯具用的伸缩杆）。您只需提供水电即可。" },
          { q: "深度清洁可以搭配杀虫或消毒服务吗？", a: "可以。我们可以与合作的杀虫公司协调一次服务（视物业面积通常加收 RM 200–400）。病后或新冠消毒在我们标准的病后服务中已含医用级消毒，不另收费。预订时说明您的需求即可。" }
        ],
        metaTitle: "吉隆坡与雪兰莪深度清洁与搬家保洁服务",
        metaDesc: "吉隆坡与雪兰莪全屋深度清洁。入住、退租、病后消毒。HEPA 吸尘器、医用级产品。从 RM380 起。24 小时保证。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供深度清洁服务。入住、退租、病后消毒、过敏季焕新、季度重置。自上而下全覆盖，包括烤箱、冰箱、吊扇、窗轨、砖缝。HEPA 吸尘器、医用级消毒。",
        warranty: "24 小时返工满意保证"
      }
    }
  },

  // ── 25. POST RENOVATION CLEANING ───────────────────────────────
  "post-renovation-cleaning": {
    slug: "post-renovation-cleaning",
    title: "Post-Renovation Cleaning",
    tagline: "Construction debris removal, paint dust, grout haze, and silicone cleanup after renovation. From RM 580.",
    description:
      "KL Servis Rumah provides specialist post-renovation cleaning services across Kuala Lumpur and Selangor. After renovation or new construction, your home will be covered in fine cement dust, paint splatter, silicone smears, grout haze on tiles, adhesive residue, and general construction debris. Standard cleaning products and even regular deep cleaning cannot handle these. Our post-renovation team uses specialist solvents, plastic and metal scrapers, wet-vacuum extraction, and floor buffing machines to safely remove construction residue without damaging new finishes. We service freshly painted interiors, new tiles, new aluminium windows, new glass, new epoxy floors, new kitchens, and new bathrooms. We can also coordinate with your contractor to align the clean with handover, so you receive a move-in-ready home.",
    startPrice: "RM 580",
    icon: "hammer",
    highlights: [
      "Specialist construction-residue removal — not just surface cleaning",
      "Plastic and metal scrapers, wet-vacuum extraction, floor buffing machines",
      "Paint splatter, silicone smears, grout haze, and adhesive residue removal",
      "Safe on new tiles, glass, aluminium, epoxy, and freshly painted surfaces",
      "Construction debris bagging and disposal included",
      "Coordinate with your contractor for handover-aligned cleaning"
    ],
    subServices: [
      { name: "Condo Post-Renovation Clean (1,000 sqft)", price: "From RM 580", desc: "Full post-renovation clean for a 3-bed condo after a typical kitchen + bathroom renovation." },
      { name: "Terrace House Post-Renovation Clean (2,000 sqft)", price: "From RM 1,200", desc: "Whole-house post-renovation clean including outdoor areas, garage, and windows." },
      { name: "New Tiles Grout Haze Removal", price: "From RM 8 / sq ft", desc: "Specialist grout haze removal on newly laid porcelain or ceramic tiles using pH-balanced acidic cleaner." },
      { name: "Construction Debris Removal", price: "From RM 280", desc: "Bagging and disposal of leftover construction materials, packaging, and debris. Skip bin coordination if needed." }
    ],
    process: [
      { step: "01", title: "Scope Assessment", desc: "We assess the renovation scope (paint, tile, plaster, carpentry, etc.), the type of finishes, and the level of construction residue. For very heavy soiling we do a site visit before quoting." },
      { step: "02", title: "Multi-Stage Quotation", desc: "We quote based on home size, surface types, and the level of residue. Multi-stage cleans (e.g. rough clean + final polish) are quoted accordingly." },
      { step: "03", title: "Rough Clean", desc: "Construction debris is bagged and removed. Loose dust is vacuumed with industrial HEPA vacuums. Surfaces are wiped with damp microfiber to capture fine dust." },
      { step: "04", title: "Detail Cleaning", desc: "Paint splatter is removed with specialist solvent. Silicone smears are scraped and dissolved. Grout haze is treated with pH-balanced cleaner. Adhesive residue is removed with citrus-based solvent." },
      { step: "05", title: "Final Polish & Handover", desc: "Floors are buffed, glass and aluminium are polished streak-free, light fixtures and switches are wiped, and the home is ready for move-in or listing photos." }
    ],
    faqs: [
      { q: "How is post-renovation cleaning different from deep cleaning?", a: "Post-renovation cleaning is much more aggressive. It requires specialist solvents (paint stripper, silicone remover, grout haze remover), plastic and metal scrapers, wet-vacuum extraction, and floor buffers. Deep cleaning is for lived-in homes; post-renovation cleaning is for newly built or renovated spaces with construction residue. The cost is also higher because of the equipment, time, and risk involved." },
      { q: "Can you clean without damaging new finishes like paint or new tiles?", a: "Yes, when done by experienced professionals. We use pH-balanced cleaners, plastic scrapers for paint, and soft microfiber cloths. We never use metal scrapers on glass or aluminium, and we never use acidic cleaners on natural stone (marble, travertine, limestone). We also test in an inconspicuous area first if the finish is unusual. If your finishes are under warranty, we coordinate with your contractor to use approved methods." },
      { q: "How long after renovation should I book the clean?", a: "Book the clean 3–7 days after your contractor completes the work. This allows paint, silicone, and grout to fully cure. Booking too early risks damaging uncured finishes. Booking too late means construction dust settles deeper and becomes harder to remove. We can also coordinate directly with your contractor for a handover-aligned clean." },
      { q: "Do you remove construction debris (sand, cement bags, leftover materials)?", a: "Yes. We bag and dispose of leftover construction debris as part of the standard post-renovation clean. For large volumes (e.g. after a full-house renovation), we can coordinate a skip bin rental (typically RM 350–500 for a 1-week bin in KL/Selangor) which is quoted separately. The bin is delivered before the clean and removed within 7 days." }
    ],
    heroImage: "/hero-post-renovation-cleaning.svg",
    metaTitle: "Post-Renovation Cleaning Services KL & Selangor",
    metaDesc: "Construction dust, paint splatter, grout haze, silicone cleanup in KL & Selangor. Specialist solvents, scrapers, wet-vacuum, floor buffer. From RM580. Contractor-aligned.",
    aioSummary: "KL Servis Rumah provides specialist post-renovation cleaning across KL & Selangor. Construction debris removal, paint splatter, silicone smears, grout haze, adhesive residue. Plastic/metal scrapers, wet-vacuum extraction, floor buffing. Safe on new tiles, glass, aluminium, epoxy, paint. Contractor-aligned handover.",
    warranty: "7-Day Spot-Check Free Re-Clean Guarantee",
    i18n: {
      ms: {
        title: "Pembersihan Selepas Pengubahsuaian",
        tagline: "Penyingkiran serpihan pembinaan, habuk cat, kabut grout dan pembersihan silikon selepas pengubahsuaian. Dari RM 580.",
        description: "KL Servis Rumah menyediakan perkhidmatan pembersihan selepas pengubahsuaian pakar di seluruh Kuala Lumpur dan Selangor. Selepas pengubahsuaian atau pembinaan baharu, rumah anda akan diliputi habuk simen halus, percikan cat, calitan silikon, kabut grout pada jubin, sisa pelekat dan serpihan pembinaan am. Produk pembersihan standard dan juga cucian menyeluruh biasa tidak dapat mengendalikan ini. Pasukan selepas pengubahsuaian kami menggunakan pelarut pakar, pengikis plastik dan logam, sedutan vakum basah dan mesin pengilap lantai untuk menyelamatkan membuang sisa pembinaan tanpa merosakkan kemasan baharu. Kami memberi perkhidmatan kepada dalaman yang baru dicat, jubin baharu, tingkap aluminium baharu, kaca baharu, lantai epoxy baharu, dapur baharu dan bilik mandi baharu. Kami juga boleh menyelaras dengan kontraktor anda untuk menjajarkan cucian dengan serahan, supaya anda menerima rumah sedia untuk didiami.",
        highlights: [
          "Penyingkiran sisa pembinaan pakar — bukan sekadar pembersihan permukaan",
          "Pengikis plastik dan logam, sedutan vakum basah, mesin pengilap lantai",
          "Penyingkiran percikan cat, calitan silikon, kabut grout dan sisa pelekat",
          "Selamat pada jubin baharu, kaca, aluminium, epoxy dan permukaan yang baru dicat",
          "Pembungkusan dan pelupusan serpihan pembinaan termasuk",
          "Penyelarasan dengan kontraktor anda untuk pembersihan sejajar serahan"
        ],
        subServices: [
          { name: "Cucian Selepas Pengubahsuaian Kondominium (1,000 kaki persegi)", price: "Dari RM 580", desc: "Cucian selepas pengubahsuaian penuh untuk kondominium 3 bilik selepas pengubahsuaian dapur + bilik mandi biasa." },
          { name: "Cucian Selepas Pengubahsuaian Rumah Teres (2,000 kaki persegi)", price: "Dari RM 1,200", desc: "Cucian selepas pengubahsuaian seluruh rumah termasuk kawasan luar, garaj dan tingkap." },
          { name: "Penyingkiran Kabut Grout Jubin Baharu", price: "Dari RM 8 / kaki persegi", desc: "Penyingkiran kabut grout pakar pada jubin porselin atau seramik baru dipasang menggunakan pencuci berasid seimbang pH." },
          { name: "Penyingkiran Serpihan Pembinaan", price: "Dari RM 280", desc: "Pembungkusan dan pelupusan bahan pembinaan, pembungkusan dan serpihan tertinggal. Penyelarasan tong skip jika perlu." }
        ],
        process: [
          { step: "01", title: "Penilaian Skop", desc: "Kami menilai skop pengubahsuaian (cat, jubin, plaster, pertukangan, dll.), jenis kemasan dan tahap sisa pembinaan. Untuk kekotoran sangat teruk kami melawat tapak sebelum memberi sebut harga." },
          { step: "02", title: "Sebut Harga Berperingkat", desc: "Kami memberi sebut harga berdasarkan saiz rumah, jenis permukaan dan tahap sisa. Cucian berperingkat (contohnya cucian kasar + gilap akhir) disebut harga sewajarnya." },
          { step: "03", title: "Cucian Kasar", desc: "Serpihan pembinaan dibungkus dan disingkirkan. Habuk longgar divakum dengan vakum HEPA industri. Permukaan dilap dengan mikrofiber lembap untuk menangkap habuk halus." },
          { step: "04", title: "Pembersihan Terperinci", desc: "Percikan cat disingkirkan dengan pelarut pakar. Calitan silikon dikikis dan dilarutkan. Kabut grout dirawat dengan pencuci seimbang pH. Sisa pelekat disingkirkan dengan pelarut berasaskan sitrus." },
          { step: "05", title: "Gilap Akhir & Serahan", desc: "Lantai digilap, kaca dan aluminium digilap bebas kesan, lekapan lampu dan suis dilap, dan rumah sedia untuk didiami atau gambar penyenaraian." }
        ],
        faqs: [
          { q: "Bagaimana cucian selepas pengubahsuaian berbeza daripada cucian menyeluruh?", a: "Cucian selepas pengubahsuaian jauh lebih agresif. Ia memerlukan pelarut pakar (peluntur cat, penanggal silikon, penanggal kabut grout), pengikis plastik dan logam, sedutan vakum basah dan pengilap lantai. Cucian menyeluruh ialah untuk rumah yang didiami; cucian selepas pengubahsuaian ialah untuk ruang yang baru dibina atau diubah suai dengan sisa pembinaan. Kos juga lebih tinggi kerana peralatan, masa dan risiko yang terlibat." },
          { q: "Boleh anda membersihkan tanpa merosakkan kemasan baharu seperti cat atau jubin baharu?", a: "Ya, apabila dilakukan oleh profesional berpengalaman. Kami menggunakan pencuci seimbang pH, pengikis plastik untuk cat dan kain mikrofiber lembut. Kami tidak pernah menggunakan pengikis logam pada kaca atau aluminium, dan tidak pernah menggunakan pencuci berasid pada batu semula jadi (marmar, travertine, batu kapur). Kami juga menguji di kawasan tidak ketara dahulu jika kemasan luar biasa. Jika kemasan anda di bawah jaminan, kami menyelaras dengan kontraktor anda untuk menggunakan kaedah yang diluluskan." },
          { q: "Berapa lama selepas pengubahsuaian patut saya menempah cucian?", a: "Tempah cucian 3–7 hari selepas kontraktor anda menyiapkan kerja. Ini membolehkan cat, silikon dan grout kering sepenuhnya. Menempah terlalu awal berisiko merosakkan kemasan yang belum kering. Menempah terlalu lewat bermakna habuk pembinaan terenap lebih dalam dan menjadi lebih sukar disingkirkan. Kami juga boleh menyelaras terus dengan kontraktor anda untuk cucian sejajar serahan." },
          { q: "Adakah anda menyingkirkan serpihan pembinaan (pasir, beg simen, bahan tertinggal)?", a: "Ya. Kami membungkus dan melupuskan serpihan pembinaan tertinggal sebagai sebahagian daripada cucian selepas pengubahsuaian standard. Untuk jumlah besar (contohnya selepas pengubahsuaian seluruh rumah), kami boleh menyelaras sewaan tong skip (biasanya RM 350–500 untuk tong 1 minggu di KL/Selangor) yang disebut harga secara berasingan. Tong dihantar sebelum cucian dan disingkirkan dalam 7 hari." }
        ],
        metaTitle: "Perkhidmatan Pembersihan Selepas Pengubahsuaian KL & Selangor",
        metaDesc: "Habuk pembinaan, percikan cat, kabut grout, pembersihan silikon di KL & Selangor. Pelarut pakar, pengikis, vakum basah, pengilap lantai. Dari RM580. Sejajar kontraktor.",
        aioSummary: "KL Servis Rumah menyediakan pembersihan selepas pengubahsuaian pakar di seluruh KL & Selangor. Penyingkiran serpihan pembinaan, percikan cat, calitan silikon, kabut grout, sisa pelekat. Pengikis plastik/logam, sedutan vakum basah, pengilapan lantai. Selamat pada jubin baharu, kaca, aluminium, epoxy, cat. Serahan sejajar kontraktor.",
        warranty: "Jaminan Cuci Semula Percuma Pemeriksaan Rawak 7 Hari"
      },
      zh: {
        title: "装修后开荒保洁",
        tagline: "装修后的建筑废料清运、涂料粉尘、砖缝浮灰与玻璃胶渍清洁。从 RM 580 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供专业的装修后开荒保洁服务。装修或新建完成后，您的家中会布满细小的水泥粉尘、涂料飞溅、玻璃胶污渍、瓷砖上的砖缝浮灰、残胶与各种建筑垃圾。普通清洁产品甚至常规深度清洁都无法应对。我们的开荒团队使用专业溶剂、塑料与金属铲刀、湿式吸尘与地板抛光机，在不损伤新饰面的前提下安全清除建筑残留。我们服务刚刷漆的室内、新铺瓷砖、新铝合金窗、新玻璃、新环氧地坪、新厨房与新浴室。我们还可以与您的装修承包商协调，把保洁与交付时间对齐，让您直接收房入住。",
        highlights: [
          "专业建筑残留清除——不只是表面清洁",
          "塑料与金属铲刀、湿式吸尘、地板抛光机",
          "涂料飞溅、玻璃胶污渍、砖缝浮灰与残胶清除",
          "对新瓷砖、玻璃、铝合金、环氧与新漆面均安全",
          "含建筑垃圾装袋与清运",
          "与您的承包商协调，保洁与交付同步"
        ],
        subServices: [
          { name: "公寓装修后开荒（1,000 平方英尺）", price: "从 RM 580 起", desc: "三房公寓在典型厨卫装修后的全屋开荒保洁。" },
          { name: "排屋装修后开荒（2,000 平方英尺）", price: "从 RM 1,200 起", desc: "整栋房屋装修后开荒，含室外区域、车库与窗户。" },
          { name: "新瓷砖砖缝浮灰清除", price: "从 RM 8 / 平方英尺起", desc: "使用 pH 平衡酸性清洁剂，专业清除新铺抛光砖或瓷砖上的砖缝浮灰。" },
          { name: "建筑垃圾清运", price: "从 RM 280 起", desc: "剩余建筑材料、包装与废料的装袋清运。需要时可协调租用垃圾桶。" }
        ],
        process: [
          { step: "01", title: "范围评估", desc: "我们评估装修范围（油漆、贴砖、抹灰、木工等）、饰面类型与建筑残留程度。特别脏的我们报价前先上门查看。" },
          { step: "02", title: "分阶段报价", desc: "按房屋面积、表面类型与残留程度报价。分阶段清洁（如粗保洁 + 精保洁）相应计费。" },
          { step: "03", title: "粗保洁", desc: "建筑垃圾装袋清运。浮灰用工业 HEPA 吸尘器吸除。表面用潮湿超细纤维布擦拭收细尘。" },
          { step: "04", title: "精细清洁", desc: "涂料飞溅用专业溶剂清除。玻璃胶污渍铲除并溶除。砖缝浮灰用 pH 平衡清洁剂处理。残胶用柑橘基溶剂清除。" },
          { step: "05", title: "最终抛光与交付", desc: "地板抛光，玻璃与铝材擦至无水痕，灯具与开关擦拭干净，房屋可入住或拍摄挂牌照片。" }
        ],
        faqs: [
          { q: "装修后开荒和深度清洁有什么区别？", a: "开荒清洁强度大得多。它需要专业溶剂（除漆剂、除胶剂、砖缝浮灰清除剂）、塑料与金属铲刀、湿式吸尘与地板抛光机。深度清洁针对住人的房屋；开荒针对有建筑残留的新建或刚装修空间。由于设备、时间与风险，费用也更高。" },
          { q: "清洁时会不会损伤新漆面或新瓷砖等新饰面？", a: "由经验丰富的专业人员操作就不会。我们使用 pH 平衡清洁剂、塑料铲刀处理漆面、柔软的超细纤维布。玻璃和铝合金上绝不用金属铲刀，天然石材（大理石、洞石、石灰石）上绝不用酸性清洁剂。特殊饰面我们会先在不显眼处测试。如果您的饰面在保修期内，我们会与承包商协调采用认可的方法。" },
          { q: "装修完工后多久预约开荒比较合适？", a: "建议在承包商完工后 3–7 天预约。这样涂料、玻璃胶与砖缝剂能完全固化。太早预约有损伤未固化饰面的风险；太晚则建筑粉尘沉淀更深、更难清除。我们也可以直接与您的承包商协调，做与交付同步的保洁。" },
          { q: "你们清运建筑垃圾吗（沙子、水泥袋、剩余材料）？", a: "清运。装袋并清运剩余建筑垃圾已包含在标准开荒服务中。量大时（如全屋装修后），我们可协调租用大型垃圾桶（吉隆坡/雪兰莪 1 周桶通常 RM 350–500），费用另计。垃圾桶在保洁前送达，7 天内移走。" }
        ],
        metaTitle: "吉隆坡与雪兰莪装修后开荒保洁服务",
        metaDesc: "吉隆坡与雪兰莪建筑粉尘、涂料飞溅、砖缝浮灰、玻璃胶清洁。专业溶剂、铲刀、湿式吸尘、地板抛光。从 RM580 起。与承包商同步。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供专业装修后开荒保洁。建筑垃圾清运、涂料飞溅、玻璃胶污渍、砖缝浮灰、残胶。塑料/金属铲刀、湿式吸尘、地板抛光。对新瓷砖、玻璃、铝合金、环氧、漆面安全。与承包商交付同步。",
        warranty: "7 天免费抽查返工保证"
      }
    }
  },

  // ── 26. CCTV INSTALLATION ────────────────────────────────────────
  "cctv": {
    slug: "cctv",
    title: "CCTV & Security Camera Installation",
    tagline: "Hikvision, Dahua, Ezviz, TP-Link, Tuya CCTV supply, install, network setup, and remote viewing. From RM 380 / camera.",
    description:
      "KL Servis Rumah provides residential and small-business CCTV installation across Kuala Lumpur and Selangor. We supply and install industry-standard IP cameras from Hikvision, Dahua, Ezviz, TP-Link (Tapo), and Tuya — covering both wired (PoE NVR) and wireless (Wi-Fi cloud) systems. Every installation includes: site survey and camera positioning, cable routing (CAT6 for wired, discreet trunking for wireless), NVR or cloud storage configuration, mobile app pairing, and remote viewing setup on your phone. We specialize in landed-house and shoplot installations with 4 to 16 cameras, condo installations (1–4 cameras with Wi-Fi cloud storage), and small-office installations with access-control integration. All work is documented with camera position photos, password handover, and a written warranty.",
    startPrice: "RM 380",
    icon: "camera",
    highlights: [
      "Hikvision, Dahua, Ezviz, TP-Link (Tapo), and Tuya certified installer",
      "Wired (PoE NVR) and wireless (Wi-Fi cloud) systems for every property type",
      "Site survey and camera positioning for maximum coverage with minimum blind spots",
      "Concealed cable routing through trunking or ceiling voids — no ugly surface cables",
      "Mobile app pairing and remote viewing setup on your phone (iOS + Android)",
      "Documentation with camera position photos, password handover, and written warranty"
    ],
    subServices: [
      { name: "Condo Wi-Fi CCTV Package (4 cameras)", price: "From RM 1,800", desc: "4x 4MP Wi-Fi cameras with cloud storage, mobile app setup, and remote viewing. Ideal for 1,000-1,500 sqft condos." },
      { name: "Landed House PoE CCTV (8 cameras)", price: "From RM 3,800", desc: "8x 4MP PoE bullet cameras, 8-channel NVR with 2TB HDD, 1-week continuous recording, full cable routing." },
      { name: "Single Camera Add-On", price: "From RM 380", desc: "Adding one more camera to an existing system (Hikvision/Dahua/Ezviz/Tapo) including cable, mounting, and app pairing." },
      { name: "CCTV System Health Check & Relocation", price: "From RM 180", desc: "On-site health check, cleaning, re-aim, app reconfiguration, or relocation of existing CCTV cameras." }
    ],
    process: [
      { step: "01", title: "Site Survey & Camera Plan", desc: "We visit your property, identify entry points, blind spots, and high-risk areas, and propose a camera position plan with coverage notes." },
      { step: "02", title: "Transparent Quote", desc: "Itemized quote covering cameras, NVR or cloud subscription, cabling, mounting brackets, and any access equipment needed for high locations." },
      { step: "03", title: "Cable Routing", desc: "For wired systems, CAT6 cable is run through ceiling voids, trunking, or conduit. For wireless systems, we position each camera within Wi-Fi range and use discreet trunking for the power cable." },
      { step: "04", title: "Camera Mounting & Configuration", desc: "Cameras are mounted with vandal-resistant brackets, aimed and focused, and connected to the NVR or cloud. Mobile app is installed on your phone and tested for remote viewing." },
      { step: "05", title: "Documentation & Handover", desc: "You receive a written report with camera position photos, default and admin passwords, app setup instructions, and warranty documentation." }
    ],
    faqs: [
      { q: "How many CCTV cameras do I need for my landed house?", a: "Most landed houses in KL/Selangor benefit from 6–8 cameras: front door, back door, garage, side gate, driveway, living room, and one or two perimeter coverage points. For a typical 2-storey terrace with a small garden, 4–6 cameras are usually sufficient. We do a free site survey and propose a tailored plan based on your property layout, not a one-size-fits-all number." },
      { q: "Wired (PoE) or wireless (Wi-Fi) — which is better for me?", a: "Wired PoE systems are more reliable (no Wi-Fi dropouts, no battery concerns), record 24/7 to a local NVR (no cloud subscription), and typically last 7+ years. They are best for new installations and larger properties. Wireless Wi-Fi systems are easier to retrofit (no cable routing), record to the cloud, and are best for renters, condos, and small spaces. We recommend wired for landed houses and wireless for condos." },
      { q: "Can I view my cameras on my phone when I'm overseas?", a: "Yes. All our systems support remote viewing via mobile app (iOS and Android). We set up the app on your phone before handover and walk you through the live view, playback, and notification features. As long as your home has internet and your phone has internet (Wi-Fi or 4G/5G), you can view your cameras from anywhere in the world." },
      { q: "Is CCTV legal in Malaysian condos?", a: "CCTV inside your own condo unit is fully legal. CCTV in common areas (corridor, lobby) requires management approval and usually must be installed by a management-approved contractor. We help you submit the management application with the camera specification and position plan, and we have experience working with all major KL/Selangor condo managements." }
    ],
    heroImage: "/hero-cctv.svg",
    metaTitle: "CCTV & Security Camera Installation KL & Selangor",
    metaDesc: "Hikvision, Dahua, Ezviz, TP-Link CCTV install in KL & Selangor. Wired PoE and wireless Wi-Fi, NVR, cloud, mobile app. From RM380/camera. Free site survey.",
    aioSummary: "KL Servis Rumah supplies and installs CCTV across KL & Selangor. Hikvision, Dahua, Ezviz, TP-Link (Tapo), Tuya. Wired PoE NVR and wireless Wi-Fi cloud systems. Free site survey, camera position plan, concealed cable routing, mobile app pairing, remote viewing, full documentation.",
    warranty: "12-Month Camera & Installation Warranty",
    i18n: {
      ms: {
        title: "Pemasangan CCTV & Kamera Keselamatan",
        tagline: "Bekalan, pemasangan, persediaan rangkaian dan tontonan jauh CCTV Hikvision, Dahua, Ezviz, TP-Link, Tuya. Dari RM 380 / kamera.",
        description: "KL Servis Rumah menyediakan pemasangan CCTV kediaman dan perniagaan kecil di seluruh Kuala Lumpur dan Selangor. Kami membekalkan dan memasang kamera IP standard industri daripada Hikvision, Dahua, Ezviz, TP-Link (Tapo) dan Tuya — merangkumi sistem berwayar (PoE NVR) dan tanpa wayar (awan Wi-Fi). Setiap pemasangan termasuk: tinjauan tapak dan penempatan kamera, laluan kabel (CAT6 untuk berwayar, saluran diskret untuk tanpa wayar), konfigurasi NVR atau storan awan, pemasangan aplikasi mudah alih dan persediaan tontonan jauh pada telefon anda. Kami pakar dalam pemasangan rumah landed dan lot kedai dengan 4 hingga 16 kamera, pemasangan kondominium (1–4 kamera dengan storan awan Wi-Fi) dan pemasangan pejabat kecil dengan integrasi kawalan akses. Semua kerja didokumentasikan dengan foto kedudukan kamera, serahan kata laluan dan jaminan bertulis.",
        highlights: [
          "Pemasang bertauliah Hikvision, Dahua, Ezviz, TP-Link (Tapo) dan Tuya",
          "Sistem berwayar (PoE NVR) dan tanpa wayar (awan Wi-Fi) untuk setiap jenis hartanah",
          "Tinjauan tapak dan penempatan kamera untuk liputan maksimum dengan titik buta minimum",
          "Laluan kabel tersembunyi melalui saluran atau rongga siling — tiada kabel permukaan hodoh",
          "Pemasangan aplikasi mudah alih dan persediaan tontonan jauh pada telefon anda (iOS + Android)",
          "Dokumentasi dengan foto kedudukan kamera, serahan kata laluan dan jaminan bertulis"
        ],
        subServices: [
          { name: "Pakej CCTV Wi-Fi Kondominium (4 kamera)", price: "Dari RM 1,800", desc: "4x kamera Wi-Fi 4MP dengan storan awan, persediaan aplikasi mudah alih dan tontonan jauh. Sesuai untuk kondominium 1,000-1,500 kaki persegi." },
          { name: "CCTV PoE Rumah Landed (8 kamera)", price: "Dari RM 3,800", desc: "8x kamera bullet PoE 4MP, NVR 8 saluran dengan HDD 2TB, rakaman berterusan 1 minggu, laluan kabel penuh." },
          { name: "Tambahan Kamera Tunggal", price: "Dari RM 380", desc: "Menambah satu lagi kamera pada sistem sedia ada (Hikvision/Dahua/Ezviz/Tapo) termasuk kabel, pemasangan dan pemasangan aplikasi." },
          { name: "Pemeriksaan Kesihatan & Pemindahan Sistem CCTV", price: "Dari RM 180", desc: "Pemeriksaan kesihatan di tapak, pembersihan, sasaran semula, konfigurasi semula aplikasi atau pemindahan kamera CCTV sedia ada." }
        ],
        process: [
          { step: "01", title: "Tinjauan Tapak & Pelan Kamera", desc: "Kami melawat hartanah anda, mengenal pasti titik masuk, titik buta dan kawasan berisiko tinggi, dan mencadangkan pelan kedudukan kamera dengan nota liputan." },
          { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci merangkumi kamera, NVR atau langganan awan, kabel, pendakap pemasangan dan sebarang peralatan akses yang diperlukan untuk lokasi tinggi." },
          { step: "03", title: "Laluan Kabel", desc: "Untuk sistem berwayar, kabel CAT6 disalurkan melalui rongga siling, saluran atau konduit. Untuk sistem tanpa wayar, kami menempatkan setiap kamera dalam julat Wi-Fi dan menggunakan saluran diskret untuk kabel kuasa." },
          { step: "04", title: "Pemasangan & Konfigurasi Kamera", desc: "Kamera dipasang dengan pendakap tahan vandal, disasarkan dan difokuskan, dan disambungkan ke NVR atau awan. Aplikasi mudah alih dipasang pada telefon anda dan diuji untuk tontonan jauh." },
          { step: "05", title: "Dokumentasi & Serahan", desc: "Anda menerima laporan bertulis dengan foto kedudukan kamera, kata laluan lalai dan admin, arahan persediaan aplikasi dan dokumentasi jaminan." }
        ],
        faqs: [
          { q: "Berapa banyak kamera CCTV yang saya perlukan untuk rumah landed saya?", a: "Kebanyakan rumah landed di KL/Selangor mendapat manfaat daripada 6–8 kamera: pintu depan, pintu belakang, garaj, pintu pagar sisi, laluan kereta, ruang tamu dan satu atau dua titik liputan perimeter. Untuk teres 2 tingkat dengan taman kecil, 4–6 kamera biasanya mencukupi. Kami menjalankan tinjauan tapak percuma dan mencadangkan pelan yang disesuaikan berdasarkan susun atur hartanah anda, bukan nombor satu-saiz-untuk-semua." },
          { q: "Berwayar (PoE) atau tanpa wayar (Wi-Fi) — mana lebih baik untuk saya?", a: "Sistem PoE berwayar lebih boleh dipercayai (tiada gangguan Wi-Fi, tiada kebimbangan bateri), merakam 24/7 ke NVR tempatan (tiada langganan awan) dan biasanya bertahan 7+ tahun. Ia terbaik untuk pemasangan baharu dan hartanah lebih besar. Sistem Wi-Fi tanpa wayar lebih mudah retrofit (tiada laluan kabel), merakam ke awan dan terbaik untuk penyewa, kondominium dan ruang kecil. Kami mengesyorkan berwayar untuk rumah landed dan tanpa wayar untuk kondominium." },
          { q: "Boleh saya melihat kamera saya pada telefon semasa di luar negara?", a: "Ya. Semua sistem kami menyokong tontonan jauh melalui aplikasi mudah alih (iOS dan Android). Kami menyediakan aplikasi pada telefon anda sebelum serahan dan menerangkan ciri tontonan langsung, main semula dan pemberitahuan. Selagi rumah anda mempunyai internet dan telefon anda mempunyai internet (Wi-Fi atau 4G/5G), anda boleh melihat kamera anda dari mana-mana di dunia." },
          { q: "Adakah CCTV sah di kondominium Malaysia?", a: "CCTV di dalam unit kondominium anda sendiri adalah sah sepenuhnya. CCTV di kawasan bersama (koridor, lobi) memerlukan kelulusan pengurusan dan biasanya mesti dipasang oleh kontraktor yang diluluskan pengurusan. Kami membantu anda mengemukakan permohonan pengurusan dengan spesifikasi kamera dan pelan kedudukan, dan kami berpengalaman bekerja dengan semua pengurusan kondominium utama KL/Selangor." }
        ],
        metaTitle: "Pemasangan CCTV & Kamera Keselamatan KL & Selangor",
        metaDesc: "Pemasangan CCTV Hikvision, Dahua, Ezviz, TP-Link di KL & Selangor. PoE berwayar dan Wi-Fi tanpa wayar, NVR, awan, aplikasi mudah alih. Dari RM380/kamera. Tinjauan tapak percuma.",
        aioSummary: "KL Servis Rumah membekalkan dan memasang CCTV di seluruh KL & Selangor. Hikvision, Dahua, Ezviz, TP-Link (Tapo), Tuya. Sistem NVR PoE berwayar dan awan Wi-Fi tanpa wayar. Tinjauan tapak percuma, pelan kedudukan kamera, laluan kabel tersembunyi, pemasangan aplikasi mudah alih, tontonan jauh, dokumentasi penuh.",
        warranty: "Jaminan Kamera & Pemasangan 12 Bulan"
      },
      zh: {
        title: "CCTV 与监控摄像头安装",
        tagline: "Hikvision、Dahua、Ezviz、TP-Link、Tuya 监控的供应、安装、网络设置与远程查看。从 RM 380 / 台起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供住宅与小型商业监控安装。我们供应并安装 Hikvision、Dahua、Ezviz、TP-Link (Tapo) 与 Tuya 的行业标准 IP 摄像头——涵盖有线（PoE NVR）与无线（Wi-Fi 云）两大系统。每次安装包括：现场勘察与摄像头定位、布线（有线用 CAT6，无线用隐蔽线槽）、NVR 或云存储配置、手机 App 配对与手机远程查看设置。我们专长于有地住宅与店铺安装（4 到 16 个摄像头）、公寓安装（1–4 个摄像头配 Wi-Fi 云存储）以及带门禁集成的小型办公室安装。所有工作都以摄像头位置照片、密码移交与书面保修记录在案。",
        highlights: [
          "Hikvision、Dahua、Ezviz、TP-Link (Tapo) 与 Tuya 认证安装商",
          "有线（PoE NVR）与无线（Wi-Fi 云）系统覆盖各类物业",
          "现场勘察与摄像头定位，覆盖最大化、盲区最小化",
          "线槽或吊顶空腔隐蔽布线——没有难看的明线",
          "手机 App 配对与远程查看设置（iOS + Android）",
          "交付摄像头位置照片、密码与书面保修的完整文档"
        ],
        subServices: [
          { name: "公寓 Wi-Fi 监控套餐（4 台）", price: "从 RM 1,800 起", desc: "4 台 4MP Wi-Fi 摄像头，配云存储、手机 App 设置与远程查看。适合 1,000-1,500 平方英尺公寓。" },
          { name: "有地住宅 PoE 监控（8 台）", price: "从 RM 3,800 起", desc: "8 台 4MP PoE 枪机、8 路 NVR 配 2TB 硬盘、1 周连续录像、完整布线。" },
          { name: "单台加装摄像头", price: "从 RM 380 起", desc: "在现有系统（Hikvision/Dahua/Ezviz/Tapo）上加装一台摄像头，含线缆、安装与 App 配对。" },
          { name: "监控系统健康检查与移机", price: "从 RM 180 起", desc: "现场健康检查、清洁、重新调校角度、App 重新配置，或迁移现有监控摄像头。" }
        ],
        process: [
          { step: "01", title: "现场勘察与布点方案", desc: "我们上门查看物业，识别出入口、盲区与高风险区域，并提出带覆盖说明的摄像头布点方案。" },
          { step: "02", title: "透明报价", desc: "逐项报价涵盖摄像头、NVR 或云订阅、线缆、安装支架及高位作业所需的任何登高设备。" },
          { step: "03", title: "布线", desc: "有线系统：CAT6 网线经吊顶空腔、线槽或线管敷设。无线系统：每台摄像头置于 Wi-Fi 覆盖范围内，电源线走隐蔽线槽。" },
          { step: "04", title: "摄像头安装与配置", desc: "摄像头以防拆支架安装，调焦对位后接入 NVR 或云端。在您的手机上安装 App 并测试远程查看。" },
          { step: "05", title: "文档与交付", desc: "您收到含摄像头位置照片、默认与管理员密码、App 设置说明与保修文件的书面报告。" }
        ],
        faqs: [
          { q: "我的有地住宅需要装几个摄像头？", a: "吉隆坡/雪兰莪的大多数有地住宅适合 6–8 个摄像头：前门、后门、车库、侧门、车道、客厅，以及一两个周边覆盖点。带小花园的典型双层排屋，4–6 个通常足够。我们提供免费现场勘察，根据您的物业布局定制方案，而不是一成不变的数字。" },
          { q: "有线（PoE）还是无线（Wi-Fi）——哪个适合我？", a: "有线 PoE 系统更可靠（不怕 Wi-Fi 掉线、无电池顾虑），24/7 录到本地 NVR（无需云订阅），通常可用 7 年以上，最适合新装与较大物业。无线 Wi-Fi 系统加装容易（无需布线）、录到云端，最适合租客、公寓与小空间。有地住宅我们建议有线，公寓建议无线。" },
          { q: "人在国外时能用手机看监控吗？", a: "可以。我们所有系统都支持手机 App（iOS 与 Android）远程查看。交付前我们在您手机上装好 App，并逐项演示实时画面、回放与通知功能。只要家里有网、手机有网（Wi-Fi 或 4G/5G），您在世界任何地方都能查看监控。" },
          { q: "在马来西亚公寓装监控合法吗？", a: "在自己单元内安装监控完全合法。公共区域（走廊、大堂）的监控需要管理处批准，且通常必须由管理处认可的承包商安装。我们可以帮您准备摄像头规格与布点方案提交管理处申请，并与吉隆坡/雪兰莪各大公寓管理方有丰富的合作经验。" }
        ],
        metaTitle: "吉隆坡与雪兰莪 CCTV 与监控摄像头安装",
        metaDesc: "吉隆坡与雪兰莪 Hikvision、Dahua、Ezviz、TP-Link 监控安装。有线 PoE 与无线 Wi-Fi、NVR、云端、手机 App。从 RM380/台起。免费现场勘察。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪供应并安装监控。Hikvision、Dahua、Ezviz、TP-Link (Tapo)、Tuya。有线 PoE NVR 与无线 Wi-Fi 云系统。免费现场勘察、摄像头布点方案、隐蔽布线、手机 App 配对、远程查看、完整文档。",
        warranty: "12 个月摄像头与安装保修"
      }
    }
  },

  // ── 27. AUTOGATE INSTALLATION ────────────────────────────────────────
  "autogate": {
    slug: "autogate",
    title: "Auto Gate & Motorised Gate",
    tagline: "Swing, sliding, and folding autogate supply, install, and motor servicing across KL & Selangor. From RM 1,800.",
    description:
      "KL Servis Rumah supplies, installs, and services autogate systems for landed houses across Kuala Lumpur and Selangor. We work with every common gate type: **swing gate** (single or double leaf, most common for terrace houses), **sliding gate** (single or bi-parting, ideal for narrow driveways or limited swing space), and **folding gate** (accordion-style for very narrow entries). Motor brands we install: Autogate 2000 (the Malaysian classic), BFT, CAME, NICE, and locally assembled units. Every installation includes: site survey, motor sizing calculation, foundation and rail installation, motor mounting, electrical wiring with proper isolator, control board programming, remote control pairing (2–4 remotes), and safety sensor installation. We also service and repair existing autogates — motor replacement, control board repair, track realignment, and battery backup installation.",
    startPrice: "RM 1,800",
    icon: "move",
    highlights: [
      "Swing, sliding, and folding autogate systems for every driveway type",
      "Autogate 2000, BFT, CAME, NICE, and locally assembled motor brands",
      "Site survey, motor sizing, and foundation engineering for reliable operation",
      "Proper isolator and IP-rated electrical wiring for outdoor use",
      "Infrared safety sensors to stop the gate on obstacle detection",
      "Battery backup system so the gate works during a power outage"
    ],
    subServices: [
      { name: "Single Swing Autogate", price: "From RM 1,800", desc: "Single-leaf swing gate motor with 2 remotes, safety sensor, and basic installation. Most popular for terrace houses." },
      { name: "Double Swing Autogate", price: "From RM 2,800", desc: "Two-leaf swing gate with dual motors, synchronisation, 2 remotes, and 2 safety sensors." },
      { name: "Sliding Autogate", price: "From RM 3,200", desc: "Sliding gate with rack-and-pinion motor, ground track, and 2 remotes. Ideal for narrow driveways." },
      { name: "Autogate Motor Replacement & Service", price: "From RM 850", desc: "Replacement of failed motor with new unit, control board reconfiguration, and safety sensor re-test." }
    ],
    process: [
      { step: "01", title: "Site Survey & Gate Sizing", desc: "We measure the existing or planned gate, assess the driveway slope, electrical supply, and recommend the right motor size and gate type." },
      { step: "02", title: "Transparent Quote", desc: "Itemized quote covering motor, gate (if supplied by us), foundation work, electrical, safety sensors, and remotes." },
      { step: "03", title: "Foundation & Rail", desc: "We dig and pour concrete foundations for the gate posts and motor mount. For sliding gates, we install a level ground track with proper drainage." },
      { step: "04", title: "Motor & Electrical Install", desc: "Motor is mounted on a proper bracket, electrical wiring is run in weatherproof conduit, isolator is installed, and control board is programmed." },
      { step: "05", title: "Safety Sensors & Commissioning", desc: "Infrared safety sensors are installed on both sides of the gate. Remotes are paired, gate travel limits are set, and the full open/close cycle is tested." }
    ],
    faqs: [
      { q: "How do I choose between swing, sliding, and folding autogate?", a: "Swing gates are the most common and affordable, but they need clearance for the gate to swing (about 90° opening). Sliding gates are best when the driveway is narrow or the gate would hit an obstruction when swung open. Folding gates are for very narrow entries where neither swing nor sliding fits. We always do a site survey before recommending — the choice depends on your driveway geometry, slope, and available space." },
      { q: "Will the gate work during a power outage?", a: "Standard autogates will not open during a power outage unless a battery backup is installed. We strongly recommend a battery backup (typically RM 350–500) which keeps the gate functional for 8–24 hours of typical use. Alternatively, all our motor installations include a manual release key so you can unlock the gate manually from the inside during an outage." },
      { q: "Can you automate my existing manual gate?", a: "Yes, in most cases. As long as the gate is in good condition (not warped, not heavily rusted) and the hinges are solid, we can add a motor. We may need to upgrade the hinges, add a centre stop, or replace a wooden gate with a steel frame for reliability. We do a site assessment and tell you upfront if the existing gate is suitable." },
      { q: "What maintenance does an autogate need?", a: "We recommend a 6-monthly service: lubricate hinges and moving parts, check motor brushes (for brushed motors), test safety sensors, check battery backup if installed, and re-test the full open/close cycle. Our maintenance visit costs RM 150 and includes a written condition report. A well-maintained autogate typically lasts 8–12 years before the motor needs replacement." }
    ],
    heroImage: "/hero-autogate.svg",
    metaTitle: "Auto Gate Installation KL & Selangor",
    metaDesc: "Swing, sliding, folding autogate in KL & Selangor. Autogate 2000, BFT, CAME, NICE. From RM1800. Motor replacement, safety sensor, battery backup. 12-month warranty.",
    aioSummary: "KL Servis Rumah supplies, installs, and services autogate systems across KL & Selangor. Swing, sliding, and folding gate types. Autogate 2000, BFT, CAME, NICE motors. Site survey, motor sizing, foundation work, electrical, safety sensors, remote pairing, battery backup. Existing gate automation available.",
    warranty: "12-Month Motor & Installation Warranty",
    i18n: {
      ms: {
        title: "Autogate & Pagar Bermotor",
        tagline: "Bekalan, pemasangan dan servis motor autogate hayun, gelangsar dan lipat di seluruh KL & Selangor. Dari RM 1,800.",
        description: "KL Servis Rumah membekalkan, memasang dan menyervis sistem autogate untuk rumah landed di seluruh Kuala Lumpur dan Selangor. Kami bekerja dengan setiap jenis pagar biasa: **pagar hayun** (satu atau dua daun, paling biasa untuk rumah teres), **pagar gelangsar** (tunggal atau dwi-belah, sesuai untuk laluan kereta sempit atau ruang hayunan terhad) dan **pagar lipat** (gaya akordion untuk laluan masuk sangat sempit). Jenama motor yang kami pasang: Autogate 2000 (kegemaran Malaysia), BFT, CAME, NICE dan unit pemasangan tempatan. Setiap pemasangan termasuk: tinjauan tapak, pengiraan saiz motor, pemasangan asas dan rel, pemasangan motor, pendawaian elektrik dengan isolator yang betul, pengaturcaraan papan kawalan, pemasangan kawalan jauh (2–4 remote) dan pemasangan sensor keselamatan. Kami juga menyervis dan membaiki autogate sedia ada — penggantian motor, pembaikan papan kawalan, penjajaran semula trek dan pemasangan bateri sandar.",
        highlights: [
          "Sistem autogate hayun, gelangsar dan lipat untuk setiap jenis laluan kereta",
          "Jenama motor Autogate 2000, BFT, CAME, NICE dan pemasangan tempatan",
          "Tinjauan tapak, saiz motor dan kejuruteraan asas untuk operasi boleh dipercayai",
          "Pendawaian elektrik isolator dan berkadar IP yang betul untuk kegunaan luar",
          "Sensor keselamatan inframerah untuk menghentikan pagar apabila mengesan halangan",
          "Sistem bateri sandar supaya pagar berfungsi semasa gangguan kuasa"
        ],
        subServices: [
          { name: "Autogate Hayun Tunggal", price: "Dari RM 1,800", desc: "Motor pagar hayun satu daun dengan 2 remote, sensor keselamatan dan pemasangan asas. Paling popular untuk rumah teres." },
          { name: "Autogate Hayun Berkembar", price: "Dari RM 2,800", desc: "Pagar hayun dua daun dengan motor dwi, penyegerakan, 2 remote dan 2 sensor keselamatan." },
          { name: "Autogate Gelangsar", price: "Dari RM 3,200", desc: "Pagar gelangsar dengan motor rack-and-pinion, trek tanah dan 2 remote. Sesuai untuk laluan kereta sempit." },
          { name: "Penggantian & Servis Motor Autogate", price: "Dari RM 850", desc: "Penggantian motor rosak dengan unit baharu, konfigurasi semula papan kawalan dan ujian semula sensor keselamatan." }
        ],
        process: [
          { step: "01", title: "Tinjauan Tapak & Saiz Pagar", desc: "Kami mengukur pagar sedia ada atau dirancang, menilai cerun laluan kereta, bekalan elektrik dan mengesyorkan saiz motor dan jenis pagar yang betul." },
          { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci merangkumi motor, pagar (jika dibekalkan kami), kerja asas, elektrik, sensor keselamatan dan remote." },
          { step: "03", title: "Asas & Rel", desc: "Kami menggali dan menuang asas konkrit untuk tiang pagar dan pelekap motor. Untuk pagar gelangsar, kami memasang trek tanah rata dengan saliran yang betul." },
          { step: "04", title: "Pemasangan Motor & Elektrik", desc: "Motor dipasang pada pendakap yang betul, pendawaian elektrik disalurkan dalam konduit tahan cuaca, isolator dipasang dan papan kawalan diaturcara." },
          { step: "05", title: "Sensor Keselamatan & Pentauliahan", desc: "Sensor keselamatan inframerah dipasang di kedua-dua belah pagar. Remote dipasangkan, had perjalanan pagar ditetapkan dan kitaran buka/tutup penuh diuji." }
        ],
        faqs: [
          { q: "Bagaimana saya memilih antara autogate hayun, gelangsar dan lipat?", a: "Pagar hayun paling biasa dan berpatutan, tetapi memerlukan ruang untuk hayunan pagar (bukaan kira-kira 90°). Pagar gelangsar terbaik apabila laluan kereta sempit atau pagar akan terkena halangan apabila dihayun terbuka. Pagar lipat untuk laluan masuk sangat sempit di mana hayun atau gelangsar tidak muat. Kami sentiasa menjalankan tinjauan tapak sebelum mengesyorkan — pilihan bergantung pada geometri laluan kereta, cerun dan ruang tersedia anda." },
          { q: "Adakah pagar berfungsi semasa gangguan kuasa?", a: "Autogate standard tidak akan terbuka semasa gangguan kuasa kecuali bateri sandar dipasang. Kami sangat mengesyorkan bateri sandar (biasanya RM 350–500) yang mengekalkan pagar berfungsi selama 8–24 jam penggunaan biasa. Sebagai alternatif, semua pemasangan motor kami termasuk kunci pelepas manual supaya anda boleh membuka pagar secara manual dari dalam semasa gangguan kuasa." },
          { q: "Boleh anda mengautomasi pagar manual sedia ada saya?", a: "Ya, dalam kebanyakan kes. Selagi pagar dalam keadaan baik (tidak melengkung, tidak teruk berkarat) dan engsel kukuh, kami boleh menambah motor. Kami mungkin perlu menaik taraf engsel, menambah hentian tengah atau menggantikan pagar kayu dengan rangka keluli untuk kebolehpercayaan. Kami menjalankan penilaian tapak dan memberitahu anda terlebih dahulu jika pagar sedia ada sesuai." },
          { q: "Penyelenggaraan apa yang diperlukan autogate?", a: "Kami mengesyorkan servis 6 bulan sekali: melincirkan engsel dan bahagian bergerak, memeriksa berus motor (untuk motor berberus), menguji sensor keselamatan, memeriksa bateri sandar jika dipasang dan menguji semula kitaran buka/tutup penuh. Lawatan penyelenggaraan kami berharga RM 150 dan termasuk laporan keadaan bertulis. Autogate yang diselenggara dengan baik biasanya bertahan 8–12 tahun sebelum motor perlu diganti." }
        ],
        metaTitle: "Pemasangan Autogate KL & Selangor",
        metaDesc: "Autogate hayun, gelangsar, lipat di KL & Selangor. Autogate 2000, BFT, CAME, NICE. Dari RM1800. Penggantian motor, sensor keselamatan, bateri sandar. Jaminan 12 bulan.",
        aioSummary: "KL Servis Rumah membekalkan, memasang dan menyervis sistem autogate di seluruh KL & Selangor. Jenis pagar hayun, gelangsar dan lipat. Motor Autogate 2000, BFT, CAME, NICE. Tinjauan tapak, saiz motor, kerja asas, elektrik, sensor keselamatan, pemasangan remote, bateri sandar. Automasi pagar sedia ada tersedia.",
        warranty: "Jaminan Motor & Pemasangan 12 Bulan"
      },
      zh: {
        title: "电动门与自动门系统",
        tagline: "吉隆坡与雪兰莪平开、推拉与折叠电动门的供应、安装与电机保养。从 RM 1,800 起。",
        description: "KL Servis Rumah 为吉隆坡与雪兰莪的有地住宅供应、安装与保养电动门系统。我们施工各种常见门型：**平开门**（单开或双开，排屋最常见）、**推拉门**（单移或双移，适合车道狭窄或开启空间受限的情况）和**折叠门**（手风琴式，适合极窄入口）。我们安装的电机品牌：Autogate 2000（马来西亚经典）、BFT、CAME、NICE 及本地组装机。每次安装包括：现场勘察、电机功率计算、地基与轨道施工、电机安装、配规范隔离开关的电气布线、控制板编程、遥控器配对（2–4 个）与安全传感器安装。我们也保养与维修现有电动门——电机更换、控制板维修、轨道调校与备用电池安装。",
        highlights: [
          "平开、推拉与折叠电动门系统，适合各种车道",
          "Autogate 2000、BFT、CAME、NICE 及本地组装电机品牌",
          "现场勘察、电机选型与地基工程，运行可靠",
          "户外使用配规范的隔离开关与 IP 等级电气布线",
          "红外安全传感器，遇阻挡自动停门",
          "备用电池系统，停电时门仍可正常使用"
        ],
        subServices: [
          { name: "单开平开电动门", price: "从 RM 1,800 起", desc: "单开门电机，配 2 个遥控器、安全传感器与基础安装。排屋最热门选择。" },
          { name: "双开平开电动门", price: "从 RM 2,800 起", desc: "双开门配双电机、同步控制、2 个遥控器与 2 个安全传感器。" },
          { name: "推拉电动门", price: "从 RM 3,200 起", desc: "齿轮齿条电机推拉门，配地轨与 2 个遥控器。适合狭窄车道。" },
          { name: "电动门电机更换与保养", price: "从 RM 850 起", desc: "更换故障电机，重新配置控制板，重测安全传感器。" }
        ],
        process: [
          { step: "01", title: "现场勘察与门体选型", desc: "我们测量现有或计划中的门，评估车道坡度、电源条件，并推荐合适的电机功率与门型。" },
          { step: "02", title: "透明报价", desc: "逐项报价涵盖电机、门体（如由我们供应）、地基工程、电气、安全传感器与遥控器。" },
          { step: "03", title: "地基与轨道", desc: "开挖并浇筑门柱与电机基座的混凝土地基。推拉门安装带排水找平的地面轨道。" },
          { step: "04", title: "电机与电气安装", desc: "电机装在规范支架上，电线穿防水线管敷设，安装隔离开关，控制板编程。" },
          { step: "05", title: "安全传感器与调试", desc: "门两侧安装红外安全传感器。配对遥控器，设定门行程限位，测试完整开/关循环。" }
        ],
        faqs: [
          { q: "平开、推拉、折叠电动门怎么选？", a: "平开门最常见也最经济，但需要门扇摆动的空间（约 90° 开启）。车道狭窄或开门会撞到障碍物时，推拉门最合适。折叠门用于极窄、平开推拉都不合适的入口。我们总是先现场勘察再推荐——取决于您的车道几何、坡度与可用空间。" },
          { q: "停电时门还能用吗？", a: "标准电动门停电时无法开启，除非装有备用电池。我们强烈建议加装备用电池（通常 RM 350–500），一般使用强度下可维持 8–24 小时。另外，我们所有电机安装都配手动释放钥匙，停电时可从内侧手动解锁开门。" },
          { q: "可以把我现有的手动门改成电动吗？", a: "大多数情况下可以。只要门状况良好（不变形、无严重锈蚀）且铰链牢固，就可以加装电机。可能需要升级铰链、加装中间限位，或把木门换成钢框以保证可靠性。我们现场评估后会如实告知现有门是否适合。" },
          { q: "电动门需要什么保养？", a: "我们建议每 6 个月保养一次：润滑铰链与活动部件、检查电机碳刷（有刷电机）、测试安全传感器、检查备用电池（如已安装）、重测完整开/关循环。我们的保养上门服务 RM 150，含书面状况报告。保养良好的电动门电机通常可用 8–12 年才需要更换。" }
        ],
        metaTitle: "吉隆坡与雪兰莪电动门安装",
        metaDesc: "吉隆坡与雪兰莪平开、推拉、折叠电动门。Autogate 2000、BFT、CAME、NICE。从 RM1800 起。电机更换、安全传感器、备用电池。12 个月保修。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪供应、安装与保养电动门系统。平开、推拉与折叠门型。Autogate 2000、BFT、CAME、NICE 电机。现场勘察、电机选型、地基工程、电气、安全传感器、遥控器配对、备用电池。也可将现有手动门改电动。",
        warranty: "12 个月电机与安装保修"
      }
    }
  },

  // ── 28. WELDING & METAL WORKS ───────────────────────────────
  "welding": {
    slug: "welding",
    title: "Welding & Metal Fabrication",
    tagline: "Custom grilles, gates, structural repair, staircase fabrication, and on-site welding across KL & Selangor. From RM 250.",
    description:
      "KL Servis Rumah provides on-site and workshop welding and metal fabrication across Kuala Lumpur and Selangor. Our certified welders work with mild steel, stainless steel, and aluminium for residential and light-commercial projects. Services include: custom window grilles, door grilles, main gate fabrication, staircase stringer fabrication, structural steel repair (lintels, beams, columns), fence and railing fabrication, custom brackets and frames, and on-site emergency welding repair. We also fabricate matching metal parts for carpentry or renovation projects (e.g. steel frame for sliding barn door, custom metal kitchen hood, decorative metal panels). All work is finished with anti-rust primer and either powder coating (for factory finish) or weather-resistant enamel paint (for on-site finish).",
    startPrice: "RM 250",
    icon: "welding-spark",
    highlights: [
      "Certified welders (MIG, TIG, and arc) for mild steel, stainless steel, and aluminium",
      "Custom fabrication of grilles, gates, staircases, railings, and structural steel",
      "On-site welding and emergency repair for landed houses and shoplots",
      "Anti-rust primer + powder-coat or weather-resistant enamel finish options",
      "Structural steel repair (lintels, beams, columns) with engineering sign-off",
      "Matching metal parts for carpentry, renovation, and decorative projects"
    ],
    subServices: [
      { name: "Custom Window Grille", price: "From RM 38 / sq ft", desc: "Powder-coated mild steel window grille in your chosen design (geometric, classic, or modern). Includes anti-rust primer." },
      { name: "Main Gate Fabrication", price: "From RM 2,500", desc: "Custom main gate with mild steel frame, infill design of your choice, and hot-dip galvanised + powder-coat finish." },
      { name: "On-Site Welding Repair", price: "From RM 250", desc: "Emergency or scheduled welding repair at your location — broken hinges, gate, grille, railing, or structural steel." },
      { name: "Staircase Stringer Fabrication", price: "From RM 380 / linier ft", desc: "Custom mild steel staircase stringer fabricated to your measurements, primed and painted for indoor or outdoor use." }
    ],
    process: [
      { step: "01", title: "Site Visit & Design", desc: "We measure, take photographs, capture the design intent (or sketch from a reference), and recommend the right material and finish for the project." },
      { step: "02", title: "Quotation & Lead Time", desc: "Itemized quote covering material, fabrication labour, finish (primer + powder-coat or enamel), installation, and any access equipment." },
      { step: "03", title: "Workshop Fabrication", desc: "Components are cut, bent, and welded in our KL workshop. Quality checks are done at every stage. For complex projects we provide progress photos." },
      { step: "04", title: "On-Site Installation", desc: "Fabricated pieces are delivered, positioned, and welded or bolted on site. We minimize mess and clean up before leaving." },
      { step: "05", title: "Finishing & Handover", desc: "On-site welds are ground smooth, all surfaces are touched up with anti-rust primer, and the agreed finish is applied. For factory powder-coat items, finishing happens before installation." }
    ],
    faqs: [
      { q: "Is powder-coat or enamel paint better for outdoor metal?", a: "Powder-coat is the more durable option and is the industry standard for outdoor metal. It is factory-applied, baked at 200°C, and provides 10+ years of UV and weather resistance. Enamel paint is on-site applied, faster, and cheaper, but typically needs repainting every 3–5 years. For landed house grilles, gates, and railings we always recommend powder-coat. Enamel is suitable for hidden structural items or quick touch-ups." },
      { q: "Can you match the colour of my existing grilles and gates?", a: "We can usually match common powder-coat colours (black, grey, white, dark green) by sending a sample to the powder-coater. For custom colours (e.g. a specific RAL code or a metallic finish), we can order a custom powder-coat batch. There may be a small setup fee for custom colours and a longer lead time. Bring us a sample or a colour code and we will quote accordingly." },
      { q: "Do you do emergency welding repairs?", a: "Yes. We offer same-day emergency welding for landed houses and shoplots in KL & Selangor (subject to availability). Common emergencies: broken gate hinge, snapped grille bar, collapsed railing, vehicle impact on gate. We bring a portable welding machine and can usually complete the repair on site within 1–3 hours." },
      { q: "What is hot-dip galvanising and do I need it?", a: "Hot-dip galvanising is a factory process where steel is dipped in molten zinc to create a thick, durable, anti-corrosion coating. It is recommended for outdoor structural items that will be exposed to rain and humidity for years (e.g. main gate, fence post, structural beam). It adds about RM 3–5 per kg to the cost and 3–5 days to the lead time, but extends the lifespan of outdoor metal by 2–3x. We recommend galvanising for all outdoor structural items." }
    ],
    heroImage: "/hero-welding.svg",
    metaTitle: "Welding & Metal Fabrication KL & Selangor",
    metaDesc: "Custom grilles, gates, structural steel, staircase fabrication, on-site welding repair in KL & Selangor. MIG/TIG welders, mild/stainless/aluminium. From RM250.",
    aioSummary: "KL Servis Rumah provides welding and metal fabrication across KL & Selangor. Custom grilles, gates, staircases, railings, structural steel. Certified welders (MIG, TIG, arc) for mild steel, stainless steel, aluminium. Anti-rust primer + powder-coat or enamel finish. On-site emergency repair available.",
    warranty: "12-Month Welding & Fabrication Warranty",
    i18n: {
      ms: {
        title: "Kimpalan & Fabrikasi Logam",
        tagline: "Grilles kustom, pagar, pembaikan struktur, fabrikasi tangga dan kimpalan di tapak di seluruh KL & Selangor. Dari RM 250.",
        description: "KL Servis Rumah menyediakan kimpalan dan fabrikasi logam di tapak dan bengkel di seluruh Kuala Lumpur dan Selangor. Tukang kimpal bertauliah kami bekerja dengan keluli lembut, keluli tahan karat dan aluminium untuk projek kediaman dan komersial ringan. Perkhidmatan termasuk: grilles tingkap kustom, grilles pintu, fabrikasi pagar utama, fabrikasi stringer tangga, pembaikan keluli struktur (lintel, rasuk, tiang), fabrikasi pagar dan railing, pendakap dan bingkai kustom, serta pembaikan kimpalan kecemasan di tapak. Kami juga memfabrikasi bahagian logam sepadan untuk projek pertukangan atau pengubahsuaian (contohnya rangka keluli untuk pintu barn gelangsar, hood dapur logam kustom, panel logam hiasan). Semua kerja dikemas dengan primer anti-karat dan sama ada powder coating (untuk kemasan kilang) atau cat enamel tahan cuaca (untuk kemasan di tapak).",
        highlights: [
          "Tukang kimpal bertauliah (MIG, TIG dan arc) untuk keluli lembut, keluli tahan karat dan aluminium",
          "Fabrikasi kustom grilles, pagar, tangga, railing dan keluli struktur",
          "Kimpalan di tapak dan pembaikan kecemasan untuk rumah landed dan lot kedai",
          "Primer anti-karat + pilihan kemasan powder-coat atau enamel tahan cuaca",
          "Pembaikan keluli struktur (lintel, rasuk, tiang) dengan sign-off kejuruteraan",
          "Bahagian logam sepadan untuk projek pertukangan, pengubahsuaian dan hiasan"
        ],
        subServices: [
          { name: "Grille Tingkap Kustom", price: "Dari RM 38 / kaki persegi", desc: "Grille tingkap keluli lembut powder-coated dalam reka bentuk pilihan anda (geometri, klasik atau moden). Termasuk primer anti-karat." },
          { name: "Fabrikasi Pagar Utama", price: "Dari RM 2,500", desc: "Pagar utama kustom dengan rangka keluli lembut, reka bentuk isian pilihan anda dan kemasan galvanis celup panas + powder-coat." },
          { name: "Pembaikan Kimpalan Di Tapak", price: "Dari RM 250", desc: "Pembaikan kimpalan kecemasan atau berjadual di lokasi anda — engsel, pagar, grille, railing atau keluli struktur patah." },
          { name: "Fabrikasi Stringer Tangga", price: "Dari RM 380 / kaki linier", desc: "Stringer tangga keluli lembut kustom difabrikasi mengikut ukuran anda, di-primer dan dicat untuk kegunaan dalaman atau luaran." }
        ],
        process: [
          { step: "01", title: "Lawatan Tapak & Reka Bentuk", desc: "Kami mengukur, mengambil gambar, menangkap niat reka bentuk (atau lakaran daripada rujukan) dan mengesyorkan bahan dan kemasan yang betul untuk projek." },
          { step: "02", title: "Sebut Harga & Masa Tunggu", desc: "Sebut harga terperinci merangkumi bahan, buruh fabrikasi, kemasan (primer + powder-coat atau enamel), pemasangan dan sebarang peralatan akses." },
          { step: "03", title: "Fabrikasi Bengkel", desc: "Komponen dipotong, dibengkok dan dikimpal di bengkel KL kami. Pemeriksaan kualiti dilakukan pada setiap peringkat. Untuk projek kompleks kami menyediakan gambar kemajuan." },
          { step: "04", title: "Pemasangan Di Tapak", desc: "Bahagian fabrikasi dihantar, diletakkan dan dikimpal atau di-bolt di tapak. Kami meminimumkan kekotoran dan membersihkan sebelum pergi." },
          { step: "05", title: "Kemasan & Serahan", desc: "Kimpalan di tapak digilap licin, semua permukaan disentuh dengan primer anti-karat dan kemasan yang dipersetujui disapu. Untuk item powder-coat kilang, kemasan dibuat sebelum pemasangan." }
        ],
        faqs: [
          { q: "Powder-coat atau cat enamel — mana lebih baik untuk logam luar?", a: "Powder-coat ialah pilihan lebih tahan lama dan standard industri untuk logam luar. Ia disapu di kilang, dibakar pada 200°C dan memberikan rintangan UV dan cuaca 10+ tahun. Cat enamel disapu di tapak, lebih pantas dan lebih murah, tetapi biasanya memerlukan cat semula setiap 3–5 tahun. Untuk grilles, pagar dan railing rumah landed kami sentiasa mengesyorkan powder-coat. Enamel sesuai untuk item struktur tersembunyi atau sentuhan pantas." },
          { q: "Boleh anda padankan warna grilles dan pagar sedia ada saya?", a: "Kami biasanya boleh memadankan warna powder-coat biasa (hitam, kelabu, putih, hijau gelap) dengan menghantar sampel kepada powder-coater. Untuk warna kustom (contohnya kod RAL khusus atau kemasan metalik), kami boleh memesan kelompok powder-coat kustom. Mungkin terdapat yuran persediaan kecil untuk warna kustom dan masa tunggu lebih lama. Bawa sampel atau kod warna kepada kami dan kami akan memberi sebut harga sewajarnya." },
          { q: "Adakah anda membuat pembaikan kimpalan kecemasan?", a: "Ya. Kami menawarkan kimpalan kecemasan hari sama untuk rumah landed dan lot kedai di KL & Selangor (tertakluk pada ketersediaan). Kecemasan biasa: engsel pagar patah, bar grille putus, railing runtuh, hentaman kenderaan pada pagar. Kami membawa mesin kimpal mudah alih dan biasanya boleh menyiapkan pembaikan di tapak dalam 1–3 jam." },
          { q: "Apakah galvanis celup panas dan adakah saya memerlukannya?", a: "Galvanis celup panas ialah proses kilang di mana keluli dicelup dalam zink lebur untuk mewujudkan salutan anti-kakisan tebal dan tahan lama. Ia disyorkan untuk item struktur luar yang akan terdedah kepada hujan dan kelembapan bertahun-tahun (contohnya pagar utama, tiang pagar, rasuk struktur). Ia menambah kira-kira RM 3–5 setiap kg kepada kos dan 3–5 hari kepada masa tunggu, tetapi memanjangkan jangka hayat logam luar sebanyak 2–3x. Kami mengesyorkan galvanis untuk semua item struktur luar." }
        ],
        metaTitle: "Kimpalan & Fabrikasi Logam KL & Selangor",
        metaDesc: "Grilles kustom, pagar, keluli struktur, fabrikasi tangga, pembaikan kimpalan di tapak di KL & Selangor. Tukang kimpal MIG/TIG, keluli lembut/tahan karat/aluminium. Dari RM250.",
        aioSummary: "KL Servis Rumah menyediakan kimpalan dan fabrikasi logam di seluruh KL & Selangor. Grilles kustom, pagar, tangga, railing, keluli struktur. Tukang kimpal bertauliah (MIG, TIG, arc) untuk keluli lembut, keluli tahan karat, aluminium. Primer anti-karat + kemasan powder-coat atau enamel. Pembaikan kecemasan di tapak tersedia.",
        warranty: "Jaminan Kimpalan & Fabrikasi 12 Bulan"
      },
      zh: {
        title: "焊接与金属加工",
        tagline: "吉隆坡与雪兰莪的定制防护格栅、大门、结构维修、楼梯制作与现场焊接。从 RM 250 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供现场与工厂焊接及金属加工。我们的持证焊工使用低碳钢、不锈钢与铝材，服务住宅与轻型商业项目。服务包括：定制窗户防护格栅、门栅、大门制作、楼梯龙骨制作、结构钢维修（过梁、横梁、立柱）、围栏与栏杆制作、定制支架与框架，以及现场紧急焊接维修。我们还为木工或装修项目制作配套金属件（如谷仓推拉门钢框、定制金属抽油烟机罩、装饰金属板）。所有工件都以防锈底漆打底，饰面可选粉末喷涂（工厂工艺）或耐候磁漆（现场工艺）。",
        highlights: [
          "持证焊工（MIG、TIG 与电弧焊），加工低碳钢、不锈钢与铝材",
          "格栅、大门、楼梯、栏杆与结构钢的定制加工",
          "有地住宅与店铺的现场焊接与紧急维修",
          "防锈底漆 + 粉末喷涂或耐候磁漆饰面可选",
          "结构钢维修（过梁、横梁、立柱），工程师签字确认",
          "为木工、装修与装饰项目制作配套金属件"
        ],
        subServices: [
          { name: "定制窗户防护格栅", price: "从 RM 38 / 平方英尺起", desc: "粉末喷涂低碳钢窗栅，款式任选（几何、经典或现代）。含防锈底漆。" },
          { name: "大门定制", price: "从 RM 2,500 起", desc: "定制大门，低碳钢框架，任选填充设计，热镀锌 + 粉末喷涂饰面。" },
          { name: "现场焊接维修", price: "从 RM 250 起", desc: "上门紧急或预约焊接维修——铰链、大门、格栅、栏杆或结构钢断裂。" },
          { name: "楼梯龙骨制作", price: "从 RM 380 / 延英尺起", desc: "按您尺寸定制的低碳钢楼梯龙骨，底漆加面漆，室内外皆可。" }
        ],
        process: [
          { step: "01", title: "上门测量与设计", desc: "我们测量、拍照、记录设计意图（或按参考图绘制草图），并为项目推荐合适的材料与饰面。" },
          { step: "02", title: "报价与交期", desc: "逐项报价涵盖材料、加工人工、饰面（底漆 + 粉末喷涂或磁漆）、安装与任何登高设备。" },
          { step: "03", title: "工厂制作", desc: "部件在我们吉隆坡工厂切割、折弯并焊接。每个环节都有质检。复杂项目我们提供进度照片。" },
          { step: "04", title: "现场安装", desc: "成品运抵现场，定位后焊接或螺栓固定。我们把现场脏乱降到最低，离场前清理干净。" },
          { step: "05", title: "收尾与交付", desc: "现场焊缝打磨平滑，所有表面补涂防锈底漆，按约定工艺饰面。工厂粉末喷涂件在安装前完成饰面。" }
        ],
        faqs: [
          { q: "户外金属用粉末喷涂还是磁漆好？", a: "粉末喷涂更耐久，是户外金属的行业标准。它在工厂施工、200°C 烘烤固化，可提供 10 年以上的抗紫外线与耐候性能。磁漆现场施工、更快更便宜，但通常每 3–5 年需要重刷。有地住宅的格栅、大门与栏杆我们总是推荐粉末喷涂。磁漆适合隐蔽的结构件或快速修补。" },
          { q: "能配出我现有格栅和大门的颜色吗？", a: "常见粉末喷涂颜色（黑、灰、白、深绿）我们通常可以寄样品给喷涂厂配色。定制颜色（如特定 RAL 色号或金属色），我们可以订做整批粉末。定制颜色可能有少量开机费且交期更长。给我们一块样品或色号，我们据此报价。" },
          { q: "你们接紧急焊接维修吗？", a: "接。我们为吉隆坡与雪兰莪的有地住宅和店铺提供当日紧急焊接（视档期）。常见紧急情况：大门铰链断裂、格栅杆断开、栏杆倒塌、车辆撞门。我们携带便携式焊机，通常 1–3 小时内可在现场完成维修。" },
          { q: "什么是热镀锌？我需要吗？", a: "热镀锌是把钢材浸入熔融锌液形成厚实耐久防腐层的工厂工艺。建议用于长期暴露在雨水中高湿环境的户外结构件（如大门、围栏立柱、结构梁）。每公斤大约增加 RM 3–5 成本，交期延长 3–5 天，但户外金属寿命可延长 2–3 倍。所有户外结构件我们都建议镀锌。" }
        ],
        metaTitle: "吉隆坡与雪兰莪焊接与金属加工",
        metaDesc: "吉隆坡与雪兰莪定制格栅、大门、结构钢、楼梯制作、现场焊接维修。MIG/TIG 焊工，低碳钢/不锈钢/铝材。从 RM250 起。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供焊接与金属加工。定制格栅、大门、楼梯、栏杆、结构钢。持证焊工（MIG、TIG、电弧）加工低碳钢、不锈钢、铝材。防锈底漆 + 粉末喷涂或磁漆饰面。可提供现场紧急维修。",
        warranty: "12 个月焊接与加工保修"
      }
    }
  }
};
