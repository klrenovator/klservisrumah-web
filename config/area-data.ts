export type AreaDetail = {
  slug: string;
  name: string;
  shortName: string;
  state: "Kuala Lumpur" | "Selangor";
  lat: number;
  lng: number;
  population: string;
  landmarks: string[];
  description: string;
  metaTitle: string;
  metaDesc: string;
  faqs: { q: string; a: string }[];
};

export const areaPages: AreaDetail[] = [
  {
    slug: "kuala-lumpur",
    name: "Kuala Lumpur",
    shortName: "KL",
    state: "Kuala Lumpur",
    lat: 3.1390,
    lng: 101.6869,
    population: "2 million+ (8 million+ Greater Klang Valley)",
    landmarks: ["KLCC Petronas Towers", "Bukit Bintang", "Mont Kiara", "Bangsar", "KL Sentral", "Sentul", "Cheras", "Kepong"],
    description: "KL Servis Rumah sends expert, background-checked craftsmen across the federal territory of Kuala Lumpur. Whether you are living in a high-rise condominium in Mont Kiara, Bangsar, or KLCC, or managing a shoplot or terrace house in Cheras, Sentul, or Kepong, we deliver premium home maintenance services. Our technical teams specialize in premium interior house painting with Nippon Paint, non-destructive water leak detection and repair, plaster ceiling fixes with seamless skim-coating, high-pressure PU grouting for bathroom leakage, and professional TV mounting and furniture assembly. We follow strict JMB regulations, clean up entirely post-work, and guarantee 100% transparent pricing before any work begins.",
    metaTitle: "Expert Home Services Kuala Lumpur — KL Servis Rumah",
    metaDesc: "Premium painting, plumbing, plaster ceiling, waterproofing, and handyman services in Kuala Lumpur. Same-day available. Clean, reliable, and insured.",
    faqs: [
      { q: "Do you service high-rise condos and offices in Kuala Lumpur?", a: "Yes! KL Servis Rumah regularly handles projects in high-rise residences and offices in Mont Kiara, Bangsar, KLCC, and Bukit Bintang. We coordinate with building security, comply with management work hours, and carry liability insurance." },
      { q: "What is your call-out response time for emergency plumbing in KL?", a: "For critical plumbing leaks, flooding, or broken lines in Kuala Lumpur, we dispatch the nearest technician immediately. Our average arrival time is 30 to 60 minutes." },
      { q: "Is there a warranty on your handyman services in Kuala Lumpur?", a: "Yes, all handyman installations, wall-mountings, door repairs, and lock replacements carry a 30-day workmanship safety warranty." }
    ]
  },
  {
    slug: "petaling-jaya",
    name: "Petaling Jaya",
    shortName: "PJ",
    state: "Selangor",
    lat: 3.1073,
    lng: 101.6067,
    population: "600,000+ residents",
    landmarks: ["SS2", "Damansara Uptown", "Sunway Pyramid", "Bandar Utama", "Kota Damansara", "Ara Damansara", "Amcorp Mall"],
    description: "Serving all of Petaling Jaya, KL Servis Rumah provides premier home improvements and repairs. From residential bungalows in Section 14 and SS2 to modern apartments in Kota Damansara, Bandar Utama, and Ara Damansara, our multi-skilled technicians are near you. We specialize in interior and exterior house painting using weather-resistant Dulux coatings, repairing sagging ceiling boards, partition wall installations for home offices, resolving low water pressure issues, toilet bowl installations, and IKEA furniture assemblies. Our work is fully insured, and our technicians are background-checked for your family's safety.",
    metaTitle: "Top-Rated Painting & Handyman Petaling Jaya — PJ Home Services",
    metaDesc: "Need painting, plumbing, ceiling, waterproofing, or handyman repairs in PJ? KL Servis Rumah delivers tidy, certified tradesmen with upfront pricing.",
    faqs: [
      { q: "Do you cover all areas of Petaling Jaya?", a: "Yes, we serve the entire PJ district including SS2, Section 14, Damansara Utama, Damansara Jaya, Kota Damansara, Ara Damansara, Kelana Jaya, and PJ Old Town." },
      { q: "How much does painting cost for a single room in PJ?", a: "Our premium interior room painting starts from RM 400, including minor wall patching, sanding, and two coats of premium Nippon or Dulux washable paint." },
      { q: "Can you fix a leaking ceiling in my Petaling Jaya double-storey terrace?", a: "Yes! We conduct non-hacking PU grouting on upper floor bathrooms to seal the concrete slab leak, and then replace and skim-coat any water-damaged plasterboard on the lower floor ceiling." }
    ]
  },
  {
    slug: "subang-jaya",
    name: "Subang Jaya",
    shortName: "Subang",
    state: "Selangor",
    lat: 3.0738,
    lng: 101.5883,
    population: "700,000+ residents",
    landmarks: ["SS15", "Sunway Lagoon", "Empire Shopping Gallery", "Subang Parade", "USJ Taipan", "Glenmarie", "Summit USJ"],
    description: "KL Servis Rumah is Subang Jaya's trusted home care provider. From commercial offices in Glenmarie and retail outlets in SS15 to family homes across USJ 1 to USJ 21 and Bandar Sunery, we offer high-grade painting, ceiling, plumbing, waterproofing, and handyman services. Our Subang Jaya teams are highly trained in mounting OLED TVs on gypsum walls, installing instant hot water showers, clearing greasy kitchen sinks, sealing roof leaks with bituminous membranes, and building durable soundproof room divider partitions. We guarantee no surprise pricing - we inspect, quote, and only proceed after you approve.",
    metaTitle: "Subang Jaya Handyman, Plumber & Painter | KL Servis Rumah",
    metaDesc: "Reliable painting, plumbing, ceiling, and handyman services in Subang Jaya & USJ. SIRIM-certified parts, clean workmanship. Book same-day slots.",
    faqs: [
      { q: "Are your technicians background-checked?", a: "Yes. All our painters, plumbers, and handymen are screened, background-verified local pros, ensuring trustworthy, secure services in Subang Jaya." },
      { q: "Do you do commercial plumbing and partition work in Glenmarie?", a: "Yes, we regularly install drywall partitions, soundproofing rockwool insulation, and heavy-duty commercial plumbing for offices and showrooms in Glenmarie and SS15." },
      { q: "How long does a TV mounting service take in USJ?", a: "A standard flat TV wall mount installation takes approximately 45 to 60 minutes. We check behind the walls for cables and use premium heavy-duty anchors." }
    ]
  },
  {
    slug: "puchong",
    name: "Puchong",
    shortName: "Puchong",
    state: "Selangor",
    lat: 3.0333,
    lng: 101.6167,
    population: "400,000+ residents",
    landmarks: ["IOI Mall Puchong", "Bandar Puteri Puchong", "Puchong Jaya", "Puchong Utama", "Taman Equine", "LDP Highway"],
    description: "From Puchong Jaya and Bandar Puteri to Puchong Utama and Bukit Jalil borders, KL Servis Rumah provides rapid-response home repairs and premium painting. Puchong's highly populated commercial blocks and residential terraced houses frequently experience water pipe leaks, sagging ceilings, and security lock failures. Our local team resolves these quickly: we replace faulty locks, plane scraping doors, install decorative ceiling moldings, apply multi-layered waterproofing membranes on flat roof slabs, and handle complete home repaintings. We carry a wide selection of replacement parts to resolve most repairs in a single visit.",
    metaTitle: "Puchong Painting, Plumbing & Waterproofing Specialist",
    metaDesc: "Professional home services in Puchong. Bathroom waterproofing, plaster ceiling repair, lock repair, and interior repainting. Free quote. 30-day warranty.",
    faqs: [
      { q: "Can you fix a door that is scraping the floor in Puchong?", a: "Yes. We shave down wood doors that have expanded due to humidity or adjust sagging hinges to restore smooth door alignment." },
      { q: "What is your waterproofing method for bathrooms in Bandar Puteri?", a: "We provide both non-destructive high-pressure PU grouting (no tiles broken) and complete tile-removal chemical membrane restorations based on leak severity." },
      { q: "How much does it cost to assemble IKEA furniture in Puchong?", a: "Our assembly prices start from RM 100, depending on the complexity of the wardrobe, bed frame, or cabinet set." }
    ]
  },
  {
    slug: "shah-alam",
    name: "Shah Alam",
    shortName: "Shah Alam",
    state: "Selangor",
    lat: 3.0738,
    lng: 101.5183,
    population: "650,000+ residents",
    landmarks: ["Blue Mosque", "i-City Shah Alam", "Bukit Jelutong", "Kota Kemuning", "Setia Alam", "Aeon Mall Shah Alam"],
    description: "As the state capital of Selangor, Shah Alam hosts a wide variety of properties, from large semi-Ds in Bukit Jelutong and Kota Kemuning to multi-storey warehouses. KL Servis Rumah provides expert care for Shah Alam properties. Our services include high-durability exterior wall painting to withstand the tropical sun and rain, roof tile leakage repairs, gypsum partitions for study areas, toilet bowl and water heater fittings, and mounting curtains and shelves. We use laser leveling for all shelves and cabinets to ensure clean, perfect horizontal alignments.",
    metaTitle: "Professional Painter & Plumber Shah Alam — KL Servis Rumah",
    metaDesc: "Best home maintenance in Shah Alam. Plaster ceiling repair, exterior house painting, toilet repairs, and TV mounting. Background-verified local pros.",
    faqs: [
      { q: "Do you service Setia Alam and Bukit Jelutong?", a: "Yes! We cover the entire Shah Alam municipality, including Setia Alam, Bukit Jelutong, Kota Kemuning, Section 7, i-City, and Glenmarie borders." },
      { q: "What paints do you recommend for Shah Alam's hot exterior weather?", a: "We recommend premium weather-shield topcoats like Nippon Weatherbond or Dulux Weathershield, which reflect heat and resist mold and dirt buildup." },
      { q: "Can you install dry wall partitions for retail shops in Shah Alam malls?", a: "Yes. We design and install fire-rated commercial partitions with clean skim-coating, completing installations overnight to match retail mall rules." }
    ]
  },
  {
    slug: "klang",
    name: "Klang",
    shortName: "Klang",
    state: "Selangor",
    lat: 3.0449,
    lng: 101.4456,
    population: "800,000+ residents",
    landmarks: ["Klang Parade", "Bukit Tinggi", "Port Klang", "Setia Alam", "AEON Bukit Tinggi", "Little India Klang"],
    description: "Klang properties, especially in coastal Port Klang and densely populated Bandar Bukit Tinggi, are susceptible to high humidity, water leaks, and salty sea air corrosion. KL Servis Rumah provides specialized maintenance in Klang. We offer rust-proof stainless steel plumbing fixtures, anti-corrosive wall sealers, bathroom waterproofing membranes, ceiling board restorations, secure lockset fitting, and general handyman repairs. Our local Klang crews are fully equipped, punctual, and highly experienced in solving dampness and masonry structural peeling.",
    metaTitle: "Klang Plumbing, Painting & Ceiling Repair | KL Servis Rumah",
    metaDesc: "Trusted home repairs in Klang, Bukit Tinggi & Setia Alam. Anti-rust plumbing, damp wall treatments, and durable plaster ceilings. Transparent prices.",
    faqs: [
      { q: "Why do my bathroom pipes rust so quickly in Klang, and can you help?", a: "Klang's higher salt air and water mineralization accelerate rust in galvanized pipes. We replace them with premium SIRIM PVC-u or corrosion-proof PPR/copper piping." },
      { q: "Do you provide waterproofing warranties in Bukit Tinggi?", a: "Yes, we provide up to a 5-year written leak-free warranty for complete chemical waterproofing membrane projects." },
      { q: "Is same-day handyman service available in Setia Alam?", a: "Yes, bookings made before 11:00 AM are eligible for same-day handyman and plumbing dispatches in Setia Alam and Klang." }
    ]
  }
];
export const areas = areaPages.map(a => a.name);
export const areaSlugs = areaPages.map(a => a.slug);
