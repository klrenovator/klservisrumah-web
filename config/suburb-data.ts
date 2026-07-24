export type SuburbDetail = {
  slug: string;
  name: string;
  parentArea: "kuala-lumpur" | "petaling-jaya" | "subang-jaya" | "puchong" | "shah-alam" | "klang";
  state: "Kuala Lumpur" | "Selangor";
  lat: number;
  lng: number;
  population: string;
  housingProfile: string;
  landmarks: string[];
  commonIssues: string[];
  nearbySuburbs: string[];
  metaTitle: string;
  metaDesc: string;
  faqs: { q: string; a: string }[];
};

const slug = (name: string) =>
  name.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const rawSuburbs = [
  ["Kuala Lumpur", "kuala-lumpur", "Kuala Lumpur", 3.1390, 101.6869, ["KLCC", "Bukit Bintang", "KL Sentral", "Merdeka 118"], "High-rise offices, condominiums, older shoplots, and landed homes with strict building-management access rules."],
  ["Cheras", "kuala-lumpur", "Kuala Lumpur", 3.1068, 101.7253, ["Taman Connaught", "Leisure Mall", "Bandar Tun Hussein Onn", "Cheras Sentral"], "Dense terrace neighbourhoods and condos where plumbing leaks, repainting, and ceiling repairs are common."],
  ["Ampang", "kuala-lumpur", "Selangor", 3.1493, 101.7625, ["Ampang Point", "Kemensah", "Taman Dagang", "Jalan Ampang"], "Landed houses, apartments, and hillside properties that often need waterproofing, exterior paint, and handyman upkeep."],
  ["Setapak", "kuala-lumpur", "Kuala Lumpur", 3.1883, 101.7121, ["Danau Kota", "Wangsa Walk", "TAR UMT", "PV128"], "Mixed student housing, apartments, and shoplots with recurring plumbing, lock, and painting maintenance demand."],
  ["Wangsa Maju", "kuala-lumpur", "Kuala Lumpur", 3.2038, 101.7370, ["Wangsa Walk", "Alpha Angle", "Sri Rampai", "Seksyen 2"], "Condominiums and terrace homes needing condo-friendly work methods, low-mess repairs, and same-day service slots."],
  ["Kepong", "kuala-lumpur", "Kuala Lumpur", 3.2140, 101.6370, ["Kepong Baru", "Metro Prima", "FRIM", "Desa ParkCity border"], "Mature terrace homes and commercial rows where old pipework, damp walls, and repainting are frequent."],
  ["Sri Petaling", "kuala-lumpur", "Kuala Lumpur", 3.0703, 101.6925, ["Endah Parade", "Bukit Jalil Stadium", "Sri Petaling LRT", "Kuchai border"], "Busy apartments and terrace homes with strong demand for handyman, plumbing, and interior painting work."],
  ["Bukit Jalil", "kuala-lumpur", "Kuala Lumpur", 3.0588, 101.6911, ["Pavilion Bukit Jalil", "Axiata Arena", "Technology Park Malaysia", "Aurora Place"], "Newer condos and landed homes that need careful protection, JMB compliance, TV mounting, and touch-up painting."],
  ["Mont Kiara", "kuala-lumpur", "Kuala Lumpur", 3.1670, 101.6520, ["1 Mont Kiara", "Plaza Mont Kiara", "Solaris", "Kiara 163"], "Premium high-rise condominiums with management approvals, lift protection, and clean no-mess workmanship requirements."],
  ["Bangsar", "kuala-lumpur", "Kuala Lumpur", 3.1298, 101.6677, ["Bangsar Village", "APW Bangsar", "Lucky Garden", "Bangsar Baru"], "Older landed homes, apartments, and shoplots that often require repainting, ceiling patching, and fixture upgrades."],
  ["Desa ParkCity", "kuala-lumpur", "Kuala Lumpur", 3.1894, 101.6296, ["The Waterfront", "ParkCity Club", "Plaza Arkadia", "Central Park"], "Premium condos and landed homes needing neat, scheduled crews and careful surface protection."],
  ["Taman Melawati", "kuala-lumpur", "Selangor", 3.2124, 101.7494, ["Melawati Mall", "Bukit Tabur", "Zoo Negara", "Ulu Klang"], "Landed homes near hillside areas where exterior waterproofing, roof leak checks, and repainting are common."],
  ["Hulu Kelang", "kuala-lumpur", "Selangor", 3.1856, 101.7723, ["Ulu Klang", "Kemensah", "Taman Melawati", "Ampang border"], "Hillside and landed properties that need waterproofing, roof leak repairs, and sturdy exterior coatings."],
  ["Petaling Jaya", "petaling-jaya", "Selangor", 3.1073, 101.6067, ["PJ Old Town", "Section 14", "Amcorp Mall", "University Malaya"], "Mature terraces, condos, and office lots with frequent painting, plumbing, and ceiling repair needs."],
  ["Subang Jaya", "subang-jaya", "Selangor", 3.0738, 101.5883, ["SS15", "Subang Parade", "Empire Subang", "Taylor's Lakeside"], "Family homes, student apartments, and commercial offices with steady demand for plumbing, ceiling, and handyman jobs."],
  ["Shah Alam", "shah-alam", "Selangor", 3.0738, 101.5183, ["Blue Mosque", "i-City", "Section 7", "Kompleks PKNS"], "Landed homes, industrial lots, and offices where exterior paint, roof leak, and partition work is common."],
  ["Puchong", "puchong", "Selangor", 3.0333, 101.6167, ["IOI Mall", "Bandar Puteri", "Puchong Jaya", "LDP"], "Terraces, condos, and shoplots with regular plumbing, lock, door, and waterproofing maintenance needs."],
  ["Damansara", "petaling-jaya", "Selangor", 3.1390, 101.6150, ["Damansara Utama", "Damansara Jaya", "The Starling", "Atria"], "Established homes and retail lots where older plumbing, ceiling cracks, and repainting projects are common."],
  ["Kota Damansara", "petaling-jaya", "Selangor", 3.1538, 101.5923, ["Giza Mall", "Tropicana Gardens", "Kota Damansara MRT", "Sunway Nexis"], "Condos, townhouses, and commercial units needing scheduled, condo-friendly repairs and painting."],
  ["Ara Damansara", "petaling-jaya", "Selangor", 3.1124, 101.5769, ["Oasis Ara", "Citta Mall", "Ara Damansara LRT", "Subang Airport"], "Modern condos and offices where careful lift protection, wall mounting, and plumbing fixes are important."],
  ["Sunway", "subang-jaya", "Selangor", 3.0733, 101.6072, ["Sunway Pyramid", "Sunway Lagoon", "Sunway Geo", "BRT Sunway"], "High-density condos, student housing, and commercial spaces needing quick handyman, plumbing, and painting support."],
  ["USJ", "subang-jaya", "Selangor", 3.0478, 101.5889, ["USJ Taipan", "Main Place", "Summit USJ", "Da Men"], "Terraced homes and apartments with common water-heater, pipe, ceiling, and painting maintenance."],
  ["Bandar Utama", "petaling-jaya", "Selangor", 3.1466, 101.6150, ["1 Utama", "Centrepoint", "BU MRT", "Taman Tun border"], "Condos and landed homes with frequent TV mounting, painting touch-ups, and plumbing fixture replacements."],
  ["SS2", "petaling-jaya", "Selangor", 3.1176, 101.6230, ["SS2 Mall", "Durian Street", "Taman Bahagia", "PJ Section 19"], "Mature terrace homes and shoplots where old pipes, roof dampness, and repainting are common."],
  ["Klang", "klang", "Selangor", 3.0449, 101.4456, ["Klang Parade", "Little India", "AEON Bukit Raja", "KTM Klang"], "Humid coastal-influenced homes and commercial areas needing anti-damp painting, plumbing, and ceiling care."],
  ["Port Klang", "klang", "Selangor", 2.9990, 101.3928, ["Port Klang KTM", "Northport", "Pulau Ketam Jetty", "Pandamaran"], "Coastal and industrial properties where corrosion-resistant fittings and damp-control work matter."],
  ["Bukit Tinggi", "klang", "Selangor", 3.0035, 101.4411, ["AEON Bukit Tinggi", "Bandar Bukit Tinggi", "GM Klang", "KESAS"], "Modern townships and commercial rows with regular plumbing, painting, and waterproofing maintenance."],
  ["Setia Alam", "shah-alam", "Selangor", 3.1106, 101.4596, ["Setia City Mall", "Setia City Convention Centre", "Eco Ardence", "Alam Nusantara"], "Newer landed homes and condos needing clean painting, TV mounting, door lock, and ceiling services."],
  ["Meru", "klang", "Selangor", 3.1310, 101.4450, ["Meru town", "Kapar border", "Jalan Meru", "Setia Alam border"], "Landed and semi-industrial properties where roof leaks, exterior paint, and plumbing repairs often appear."],
  ["Kota Kemuning", "shah-alam", "Selangor", 3.0003, 101.5381, ["Gamuda Walk", "Columbia Asia", "Kemuning Utama", "KESAS"], "Landed homes and gated communities needing scheduled, low-mess painting, plumbing, and handyman services."],
  ["Bukit Jelutong", "shah-alam", "Selangor", 3.0976, 101.5474, ["D'Vida", "Space U8", "Guthrie Corridor", "Masjid Tengku Ampuan Jemaah"], "Semi-Ds, bungalows, and offices where exterior coatings and premium finish work are common."],
  ["Glenmarie", "shah-alam", "Selangor", 3.0885, 101.5740, ["Glenmarie LRT", "HICOM", "Utropolis", "Saujana"], "Commercial offices, showrooms, and landed homes that often need partitions, painting, and plumbing work."],
  ["Batu Caves", "kuala-lumpur", "Selangor", 3.2379, 101.6840, ["Batu Caves Temple", "Selayang", "Gombak", "Taman Sri Gombak"], "Landed homes, apartments, and shoplots where roof leaks, plumbing, and exterior paint jobs are common."],
  ["Selayang", "kuala-lumpur", "Selangor", 3.2465, 101.6537, ["Selayang Mall", "Hospital Selayang", "Selayang Baru", "FRIM border"], "Mature homes and apartments with frequent ceiling leak, plumbing, and lock repair jobs."],
  ["Rawang", "shah-alam", "Selangor", 3.3213, 101.5767, ["Rawang town", "Anggun City", "Kundang", "Emerald West"], "Landed townships and industrial areas where exterior paint, roof leak, and handyman maintenance are common."],
  ["Kundang", "shah-alam", "Selangor", 3.2850, 101.5150, ["Kundang Lakes", "Rawang border", "Kuang", "Sungai Buloh border"], "Landed and semi-rural properties needing roof waterproofing, exterior painting, and general repairs."],
  ["Sungai Buloh", "petaling-jaya", "Selangor", 3.2096, 101.5600, ["Sungai Buloh MRT", "Kampung Baru Sungai Buloh", "Damansara Damai", "Hospital Sungai Buloh"], "Townhouses, apartments, and industrial lots with frequent plumbing and maintenance needs."],
  ["Kajang", "puchong", "Selangor", 2.9935, 101.7874, ["Kajang Stadium", "MRT Kajang", "Bandar Baru Bangi border", "Sate Kajang"], "Landed homes and apartments where leak repair, exterior painting, and handyman jobs are regular."],
  ["Semenyih", "puchong", "Selangor", 2.9517, 101.8430, ["Eco Majestic", "Setia EcoHill", "Semenyih town", "Nottingham Malaysia"], "New townships and landed homes needing painting, waterproofing, and fixture installations."],
  ["Balakong", "puchong", "Selangor", 3.0339, 101.7501, ["Mines", "Cheras Selatan", "Jusco Balakong", "Taming Jaya"], "Industrial and residential zones with strong demand for plumbing, partition, and painting works."],
  ["Seri Kembangan", "puchong", "Selangor", 3.0210, 101.7057, ["The Mines", "UPM", "South City Plaza", "Equine Park"], "Condo and terrace areas where plumbing, ceiling leak, and handyman work is common."],
  ["Pandan Indah", "kuala-lumpur", "Selangor", 3.1300, 101.7500, ["Pandan Indah LRT", "Ampang Point border", "Pandan Jaya", "Cempaka"], "High-density apartments and shoplots with frequent plumbing repairs, doors, locks, and repainting."],
  ["Bandar Puteri", "puchong", "Selangor", 3.0219, 101.6165, ["Bandar Puteri LRT", "Puteri Mart", "IOI Rio", "Puchong Financial Corporate Centre"], "Landed homes, condos, and offices needing professional handyman, painting, and plumbing services."],
  ["Putrajaya", "puchong", "Selangor", 2.9264, 101.6964, ["Putrajaya Precinct 1", "Alamanda", "IOI City Mall", "Putrajaya Lake"], "Government quarters, apartments, and offices needing scheduled, tidy repair and maintenance services."],
  ["Cyberjaya", "puchong", "Selangor", 2.9213, 101.6559, ["DPulze", "Shaftsbury Square", "MMU", "Tamarind Square"], "Condominiums, SOHO units, and offices with regular TV mounting, plumbing, and partition needs."],
  ["Dengkil", "puchong", "Selangor", 2.8638, 101.6781, ["Dengkil town", "Putrajaya border", "Cyberjaya border", "Xiamen University Malaysia"], "Landed homes near Putrajaya and Cyberjaya where waterproofing, painting, and plumbing service demand is growing."],
  ["Selangor", "shah-alam", "Selangor", 3.0738, 101.5183, ["Shah Alam", "Petaling Jaya", "Subang Jaya", "Klang"], "State-wide service coverage across mature towns, new townships, commercial units, and landed homes."],
  ["Sentul", "kuala-lumpur", "Kuala Lumpur", 3.1801, 101.6956, ["Sentul Depot", "Sentul West", "KLPAC", "Sentul Timur"], "Older apartments, terraces, and new condos with frequent plumbing, painting, and handyman jobs."],
  ["Bandar Botanic", "klang", "Selangor", 2.9997, 101.4469, ["Bandar Botanic Klang", "AEON Bukit Tinggi", "KESAS", "Bukit Tinggi border"], "Modern landed homes and commercial units needing clean interior painting, door locks, and plumbing repairs."],
] as const;

const serviceIssues = ["water seepage after heavy rain", "paint peeling caused by humidity", "aging bathroom fittings", "ceiling stains from leaks"];

export const suburbPages: SuburbDetail[] = rawSuburbs.map((item) => {
  const [name, parentArea, state, lat, lng, landmarks, housingProfile] = item;
  const currentSlug = slug(name);
  const nearbySuburbs = rawSuburbs
    .filter((other) => other[1] === parentArea && other[0] !== name)
    .slice(0, 4)
    .map((other) => slug(other[0]));

  return {
    slug: currentSlug,
    name,
    parentArea,
    state,
    lat,
    lng,
    population: "Local residential and commercial catchment",
    housingProfile,
    landmarks: [...landmarks],
    commonIssues: serviceIssues,
    nearbySuburbs,
    metaTitle: `${name} Home Services — Painter, Plumber, Ceiling & Handyman`,
    metaDesc: `Market-rate painting, plumbing, ceiling, waterproofing and handyman services in ${name}. Transparent quotes, insured teams and WhatsApp booking.`,
    faqs: [
      {
        q: `Do you provide same-day service in ${name}?`,
        a: `Same-day slots in ${name} are available when a nearby technician is free. WhatsApp early with photos and a short problem description for the fastest dispatch.`
      },
      {
        q: `Can your team work inside condos and managed buildings in ${name}?`,
        a: `Yes. We follow management work-hour rules, protect lifts and common areas, and keep the site tidy before handover.`
      },
      {
        q: `Are prices in ${name} fixed before work starts?`,
        a: `Yes. We confirm a market-rate, itemized quote before starting, and any additional scope is approved by you first.`
      }
    ]
  };
});

export const suburbSlugs = suburbPages.map((suburb) => suburb.slug);
