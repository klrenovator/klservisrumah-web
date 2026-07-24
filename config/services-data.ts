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
    warranty: "12-Month Installation Workmanship Warranty"
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
    warranty: "12-Month Mounting & Wiring Warranty"
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
    warranty: "12-Month Lighting Installation Warranty"
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
    warranty: "5-Year Installation Workmanship Warranty"
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
    warranty: "5-Year Delamination & Yellowing Warranty"
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
    warranty: "10-Year Membrane & Workmanship Warranty"
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
    warranty: "5-Year Cabinet Structure Warranty"
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
    warranty: "5-Year Cabinet Structure Warranty"
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
    warranty: "12-Month Door Hanging & Hardware Warranty"
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
    warranty: "12-Month Hardware & Seal Warranty"
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
    warranty: "12-Month Lock Installation & Hardware Warranty"
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
    warranty: "12-Month Leak-Free & Hardware Warranty"
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
    warranty: "24-Hour Re-Clean Satisfaction Guarantee"
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
    warranty: "24-Hour Re-Clean Satisfaction Guarantee"
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
    warranty: "7-Day Spot-Check Free Re-Clean Guarantee"
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
    warranty: "12-Month Camera & Installation Warranty"
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
    warranty: "12-Month Motor & Installation Warranty"
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
    warranty: "12-Month Welding & Fabrication Warranty"
  }
};
