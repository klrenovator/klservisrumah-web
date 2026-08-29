// AUTO-AUTHORED — P2-C3 deep fix, batch 2: per-topic authored bodies for
// brand, comparison, guide, maintenance, seasonal and top families. Each page
// gets a unique intro (≤158 chars), 4 topic-specific bullets, and 4 real AEO
// FAQs — replacing the shared template that made every page in a family read
// identically.
//
// `scripts/validate-content-pods.ts` (prebuild) checks uniqueness of intros
// across all batch-2 families, structure (4/4/4), and ≥80-char FAQ answers.

export type Batch2PodCopy = {
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

// ─── Brand Pages (12 general + 20 aircon = 32) ─────────────────────────────

export const brandCopy: Record<string, Batch2PodCopy> = {
  "nippon-paint-application-malaysia": {
    intro: "Nippon Paint systems for Malaysian walls: when Spot Less Plus, Vinilex 5000 or Weatherbond earn their place over competing brands on your quote.",
    bullets: ["Spot Less Plus for high-traffic interiors", "Vinilex 5000 for wet-area durability", "Weatherbond for exterior UV and algae", "Primer and sealer pairings per substrate"],
    faqs: [
      { q: "Is Nippon Paint better than Dulux for interiors?", a: "It depends on the line — Nippon's Spot Less Plus excels at stain resistance in hallways and kids' rooms, while Dulux EasyClean competes closely. The right choice depends on your traffic pattern, not brand loyalty." },
      { q: "Does Nippon weatherproof paint last in Malaysian heat?", a: "Weatherbond is rated for tropical UV and rain cycles, and typically carries a 5-year manufacturer warranty on exterior durability when applied over the correct primer and sealer system." },
      { q: "Can Nippon paints be used on old chalky walls?", a: "Yes, with the 5400 Wall Sealer or a suitable alkali-resisting primer applied first — painting over failing chalk without sealer is the most common cause of early peeling." },
      { q: "How do I verify genuine Nippon products on site?", a: "Check batch numbers on the tin against Nippon's Malaysian distributor records; sealed factory tints should arrive unopened, not decanted from unmarked containers." }
    ]
  },
  "dulux-paint-application-malaysia": {
    intro: "Dulux paint systems for KL and Selangor projects: when Weathershield, EasyClean or Ambiance Silk justify their price versus Nippon or Jotun alternatives.",
    bullets: ["Weathershield for monsoon-rated exteriors", "EasyClean for wipeable family interiors", "Ambiance Silk for low-sheen feature walls", "Dulux primer systems matched to substrate"],
    faqs: [
      { q: "Is Dulux Weathershield worth the premium?", a: "On exposed exteriors that face direct monsoon rain and afternoon UV, yes — its 7-year durability claim is backed by real tropical testing, and it outperforms standard emulsions on chalking and fading." },
      { q: "Can Dulux EasyClean handle kids' rooms?", a: "It is designed for exactly that — Class 1 scrub resistance means crayon marks, fingerprints and splashes wipe off without stripping the sheen, which is what differentiates it from basic matt emulsions." },
      { q: "Does Dulux need a specific primer?", a: "Dulux recommends their own 1 Professional Primer for best adhesion and colour hold, but any quality alkali-resisting primer from a compatible system works if applied to spec." },
      { q: "How does Dulux compare on VOC levels?", a: "Dulux's interior ranges carry low-VOC certifications including Green Choice, similar to Nippon's eco-range — both meet Malaysian DOSH indoor air guidelines when properly ventilated during application." }
    ]
  },
  "jotun-paint-application-malaysia": {
    intro: "Jotun coatings for Malaysian properties: Jotashield exteriors, Majestic interiors and when the Scandinavian brand's premium delivers over Nippon and Dulux.",
    bullets: ["Jotashield for extreme UV and heat reflectance", "Majestic True Beauty for luxury interior finish", "Jotun primer and filler systems", "Colour accuracy from Jotun's tinting labs"],
    faqs: [
      { q: "Why choose Jotun over Nippon or Dulux?", a: "Jotun's Jotashield range leads on heat reflectance and colour retention in tropical exposure — if your exterior walls get brutal afternoon sun, the thermal reduction and fade resistance justify the cost." },
      { q: "Is Jotun Majestic worth it for living rooms?", a: "For a high-end pearl or silk finish that stays consistent under different lighting angles, yes — it is the brand architects specify when the walls need to read as a design element, not just a coat." },
      { q: "Does Jotun paint resist mould in bathrooms?", a: "Jotun's bathroom and kitchen range includes anti-fungal additives that work in Malaysian humidity, but proper ventilation and a moisture-resistant substrate are still the first defence." },
      { q: "Where is Jotun available in Malaysia?", a: "Through authorised Jotun dealers and tinting centres across Klang Valley — factory-tinted colours from these centres match more consistently than shop-mixed tints from general hardware stores." }
    ]
  },
  "sirim-certified-pipes-malaysia": {
    intro: "SIRIM-certified pipes for Malaysian plumbing: why the MS certification mark matters, which brands carry it, and how it affects your warranty and insurance.",
    bullets: ["SIRIM QAS certification explained", "Approved brands for potable water", "Pressure ratings per application", "Insurance and warranty implications"],
    faqs: [
      { q: "Why does SIRIM certification matter for pipes?", a: "SIRIM QAS certification confirms the pipe meets Malaysian Standards for pressure, material safety and durability — non-certified pipes void most building insurance claims when they fail." },
      { q: "Which pipe brands carry SIRIM certification?", a: "Common SIRIM-certified brands in Malaysia include PPI (Polyplumb), Wira Plumb and certain Heng Hong copper ranges — always verify the SIRIM label on each batch delivered, not just the brand name." },
      { q: "Can I use non-SIRIM pipes to save money?", a: "You can, but the cost saving is small against the risk: a burst non-certified pipe that floods your unit or the neighbour below is uninsured, and the JMB may require replacement anyway." },
      { q: "How do I verify SIRIM certification on site?", a: "Look for the SIRIM QAS sticker or embossed mark on the pipe itself, not just the packaging — and cross-check the batch number on SIRIM's online certified product directory." }
    ]
  },
  "grundfos-water-pump-installation": {
    intro: "Grundfos water pump installation for Malaysian homes: booster, transfer and circulation pumps sized to your pressure problem, not a catalogue guess.",
    bullets: ["Booster pumps for low shower pressure", "Transfer pumps for tank-to-tank systems", "Circulation pumps for instant hot water", "Silent-running models for condo living"],
    faqs: [
      { q: "Why is my shower pressure still low after a pump?", a: "Often the pump is oversized or undersized for the actual pipe run and fixture count — Grundfos SCALA and UPA ranges cover different scenarios, and correct sizing matters more than brand." },
      { q: "Are Grundfos pumps quiet enough for condos?", a: "The SCALA2 and UPA ranges run at very low noise levels suitable for indoor installation near bedrooms, which is exactly why they are specified in high-rise Malaysian homes." },
      { q: "How long does a Grundfos pump last?", a: "Typically 8–12 years with clean water and proper installation — dry-run protection and thermal cutouts prevent the early failures common on cheaper pumps without those features." },
      { q: "Can a Grundfos pump fix uneven pressure across floors?", a: "For multi-storey landed homes, yes — a correctly sized booster with a pressure vessel balances delivery to upper floors, which is where gravity-feed systems typically fail." }
    ]
  },
  "joven-water-heater-installation": {
    intro: "Joven water heater installation and servicing for Malaysian bathrooms: instant and storage models, dedicated wiring, and when to replace versus repair.",
    bullets: ["Instant heaters for single-point showers", "Storage heaters for bath and multi-point", "Dedicated circuit and RCCB requirements", "Descaling for hard-water efficiency loss"],
    faqs: [
      { q: "Which Joven model suits a condo bathroom?", a: "For a single shower point, the Joven instant range on a 20A dedicated circuit works well — for a bathtub or rain shower needing higher flow, a storage model sized to your draw pattern is the better fit." },
      { q: "Is Joven safer than other brands?", a: "Joven's built-in ELCB and thermal cutout are standard across their range, matching the safety features of Jumbo, Panasonic and Rinnai — correct wiring matters more than the brand badge." },
      { q: "Why does my Joven heater trip the breaker?", a: "Usually a failing heating element or a shared circuit that is under-rated — Joven instant heaters need a dedicated 20A circuit, and sharing it with other appliances causes nuisance tripping." },
      { q: "How often should a Joven heater be descaled?", a: "In hard-water areas of Klang Valley, annually — scale builds on the element, reduces efficiency and eventually causes premature failure, which a RM 80–120 descale visit prevents." }
    ]
  },
  "rinnai-water-heater-installation": {
    intro: "Rinnai water heater installation for Malaysian homes: gas instant heaters, storage electric models, and the ventilation requirements that keep them safe.",
    bullets: ["Gas instant heaters for high flow rates", "Electric storage for consistent temperature", "Flue and ventilation requirements", "Annual safety checks on gas models"],
    faqs: [
      { q: "Is a Rinnai gas heater safe indoors?", a: "Only with correct flue routing to the exterior and adequate room ventilation — Rinnai's balanced-flue models are designed for indoor mounting, but open-flue types need a ventilated utility space." },
      { q: "Why choose Rinnai gas over electric?", a: "Gas instant heaters deliver higher flow rates at consistent temperature for rain showers and bathtubs, and operating cost per litre of hot water is typically lower than electric in Malaysia." },
      { q: "Does Rinnai service exist in Klang Valley?", a: "Yes — Rinnai Malaysia has authorised service centres across Klang Valley for annual safety checks, which are mandatory for gas models to maintain the warranty and insurance coverage." },
      { q: "What happens if the gas supply fails mid-shower?", a: "Rinnai's flame failure device cuts the gas instantly and the unit stops heating — you get cold water, not a gas leak, which is the safety mechanism every certified gas heater must carry." }
    ]
  },
  "knauf-gypsum-board-installation": {
    intro: "Knauf gypsum board for Malaysian ceilings and partitions: standard, moisture-resistant and fire-rated boards chosen for the room, not just the cheapest option.",
    bullets: ["Standard boards for dry living areas", "Moisture-resistant for bathrooms and kitchens", "Fire-rated boards for escape routes", "Knauf frame and jointing systems matched"],
    faqs: [
      { q: "Is Knauf better than other gypsum brands?", a: "Knauf is one of the top global manufacturers with consistent board density and edge quality — in Malaysia it competes with Boral and Yoshima, and the right choice often comes down to the system spec, not just the board brand." },
      { q: "Should bathrooms use moisture-resistant board?", a: "Always — Knauf's green-faced MR board resists moisture absorption in humid Malaysian bathrooms, preventing the sagging and mould growth that standard boards develop within a year or two." },
      { q: "Does Knauf board come with a warranty?", a: "Knauf provides material warranties on their board systems when installed with their specified frame and jointing products — mixing brands in the system can void the board warranty." },
      { q: "Can Knauf boards handle Malaysian humidity?", a: "Standard boards handle normal indoor humidity fine; for areas near water sources or in ground-floor units with rising damp, the MR or cement-board range is specified instead." }
    ]
  },
  "boral-gypsum-board-installation": {
    intro: "Boral gypsum board installation in KL & Selangor: Australian-made boards for ceilings and walls, with system specs matching Malaysian construction conditions.",
    bullets: ["Boral standard and MR board ranges", "Metal frame systems for level ceilings", "Joint compound and tape compatibility", "Acoustic-rated partition builds"],
    faqs: [
      { q: "Is Boral board available in Malaysia?", a: "Yes — Boral's gypsum range is distributed across Malaysia through authorised dealers, competing directly with Knauf and local brands on price and availability for both residential and commercial projects." },
      { q: "Does Boral board sag in tropical humidity?", a: "Not when installed to spec with correct frame spacing and fixing patterns — Boral's boards are tested to tropical conditions, and sagging is almost always a frame-spacing or overloading issue." },
      { q: "Can Boral boards be used for soundproofing?", a: "Yes — Boral's acoustic partition systems use specific board thicknesses, mineral wool infill and sealed joints to achieve rated sound reduction between rooms or units." },
      { q: "How does Boral compare on price to Knauf?", a: "Pricing is broadly competitive — the deciding factor is often which system your contractor is trained on, and whether the full board-frame-jointing system is specified as a matched set." }
    ]
  },
  "sika-waterproofing-application": {
    intro: "Sika waterproofing systems for Malaysian properties: cementitious coatings, PU membranes and injection resins — specified for the leak, not the sales sheet.",
    bullets: ["Sikalastic for exposed roof membranes", "SikaTop Seal for cementitious tanking", "SikaGrout for structural crack repair", "Sika PU injection for active leaks"],
    faqs: [
      { q: "Is Sika waterproofing suitable for bathrooms?", a: "SikaTop Seal 107 and similar cementitious coatings work well under bathroom tiles as a bonded membrane — they are brush-applied, tolerate some substrate movement, and are compatible with standard tile adhesives." },
      { q: "How does Sika compare to membrane-only systems?", a: "Sika covers both cementitious and liquid-applied membrane systems — the choice depends on the substrate, exposure and access: cementitious for under-tile, PU membrane for exposed roofs and decks." },
      { q: "Does Sika waterproofing come with a warranty?", a: "Sika provides system warranties through their approved applicator network — the warranty length depends on the system specified and the surface preparation verified at each stage." },
      { q: "Can Sika products fix an active leak?", a: "Sika's PU injection resin is designed exactly for that — it expands on contact with water to seal active cracks in concrete, buying time for a permanent membrane repair if needed." }
    ]
  },
  "bostik-waterproofing-application": {
    intro: "Bostik waterproofing for Malaysian homes: French-engineered sealants and membranes for bathrooms, balconies and tile joints — applied where they actually hold.",
    bullets: ["Bostik Seal 'N' Flex for wet-area joints", "Bostik membrane systems under tiles", "Tile adhesive and grout compatibility", "Sanitary silicone for long-term seals"],
    faqs: [
      { q: "Is Bostik silicone better than generic brands?", a: "Bostik's sanitary silicone maintains flexibility and anti-fungal properties longer than cheap alternatives, which typically crack and blacken within a year in Malaysian bathroom conditions." },
      { q: "Can Bostik waterproof under bathroom tiles?", a: "Yes — Bostik's cementitious and liquid membrane systems are applied under tile adhesive as a bonded waterproof layer, tested to Malaysian Standards for wet-area performance." },
      { q: "How long does Bostik sealant last in showers?", a: "Typically 5–8 years before replacement is needed, compared to 1–2 years for basic acrylic sealants — the upfront cost difference is small against the repeated re-sealing labour." },
      { q: "Is Bostik compatible with all tile adhesives?", a: "Bostik waterproofing membranes are tested with their own adhesive range and most standard polymer-modified tile adhesives — always confirm compatibility at quote stage, not after the tiles are down." }
    ]
  },
  "mapei-waterproofing-application": {
    intro: "Mapei waterproofing for Malaysian renovations: Italian-made cementitious and liquid membranes for bathrooms, pools and wet areas — specified by tile professionals.",
    bullets: ["Mapei Aquadefense for fast liquid membrane", "Mapelastic for flexible cementitious coats", "Compatibility with Mapei tile adhesives", "System warranty through approved applicators"],
    faqs: [
      { q: "Why do tile professionals prefer Mapei?", a: "Mapei's system approach — waterproofing, adhesive and grout from one manufacturer — means compatibility is guaranteed and warranty claims have a single responsible party, not a blame chain." },
      { q: "Is Mapei Aquadefense fast enough for quick renovations?", a: "Yes — Aquadefense is ready for tiling in about 4 hours after the final coat, making it ideal for bathroom renovations where the family needs the room back fast." },
      { q: "Does Mapei work on existing tiles?", a: "Over-tiling with Mapei systems is possible when the existing tiles are sound and properly primed — but where the old membrane has failed, removal back to substrate is the honest answer." },
      { q: "Is Mapei more expensive than local brands?", a: "The material cost is higher, but the system warranty and reduced callback risk often make it competitive on total job cost — especially for bathrooms where a leak means hacking tiles again." }
    ]
  }
};

// ─── Aircon Brand Pages (20) ────────────────────────────────────────────────

export const airconBrandCopy: Record<string, Batch2PodCopy> = {
  "daikin-aircon-service-malaysia": {
    intro: "Daikin aircon service across KL & Selangor: chemical wash, gas top-up, PCB repair and installation for the most common AC brand in Malaysian homes.",
    bullets: ["Daikin inverter PCB diagnostics", "R32 and R410A gas systems", "Chemical wash for coil and blower", "Daikin spare parts sourcing"],
    faqs: [
      { q: "Why is Daikin the most serviced brand in Malaysia?", a: "Because Daikin holds the largest installed base in Malaysian homes — more units means more service calls, not necessarily more failures. Their inverter range is reliable when maintained on schedule." },
      { q: "Can any technician service a Daikin inverter?", a: "Basic servicing yes, but inverter PCB diagnostics need Daikin-specific error code reading — our teams carry the diagnostic tools for common Daikin inverter fault codes." },
      { q: "How often should a Daikin aircon be serviced?", a: "Every 3–4 months for the filter wash at home, and a professional chemical wash every 6–12 months depending on usage hours and dust levels in your area." },
      { q: "Is Daikin R32 gas safe to handle?", a: "R32 is mildly flammable but safe when handled by trained technicians with proper recovery equipment — all our Daikin gas work follows the manufacturer's handling procedures." }
    ]
  },
  "panasonic-aircon-service-malaysia": {
    intro: "Panasonic aircon service in KL & Selangor: nanoe-G cleaning, inverter servicing and Econavi sensor calibration for Panasonic's popular residential range.",
    bullets: ["nanoe-G filter and coil cleaning", "Econavi sensor diagnostics", "Panasonic inverter board repair", "Standard and chemical wash servicing"],
    faqs: [
      { q: "What makes Panasonic aircon different to service?", a: "Panasonic's nanoe-G air purification and Econavi sensor systems add diagnostic steps that generic servicing skips — our Panasonic-trained visits include sensor calibration and filter integrity checks." },
      { q: "Is Panasonic more reliable than Daikin?", a: "Both brands are top-tier in Malaysia — Panasonic competes closely on energy efficiency and air quality features, while Daikin leads on market share. Reliability is comparable with proper maintenance." },
      { q: "Can Panasonic aircons use generic spare parts?", a: "Some mechanical parts are interchangeable, but PCB boards and sensor modules are brand-specific — using generic boards on Panasonic inverters causes error codes and voids the warranty." },
      { q: "Why does my Panasonic aircon show an H11 error?", a: "H11 typically indicates a communication error between indoor and outdoor units — caused by wiring faults, PCB issues or sensor failures, each diagnosed in a specific order before any part is replaced." }
    ]
  },
  "mitsubishi-electric-aircon-service-malaysia": {
    intro: "Mitsubishi Electric aircon service across KL & Selangor: Mr. Slim and Starmex ranges, inverter diagnostics, and the quiet-operation features that set them apart.",
    bullets: ["Mr. Slim and Starmex system servicing", "Mitsubishi inverter fault diagnostics", "Quiet-operation component checks", "Genuine Mitsubishi parts sourcing"],
    faqs: [
      { q: "Is Mitsubishi Electric different from Mitsubishi Heavy?", a: "Yes — they are separate companies with different product lines, spare parts and error codes. Mitsubishi Electric's Mr. Slim and Starmex are the ranges most common in Malaysian homes." },
      { q: "Why is Mitsubishi Electric more expensive to buy?", a: "Build quality, quiet operation and energy efficiency justify the premium — and servicing costs are comparable to Daikin and Panasonic when maintained on the same schedule." },
      { q: "Can a Mitsubishi aircon go longer between services?", a: "Not really — the premium build quality means fewer breakdowns, but coil fouling and drain blockage affect all brands equally in Malaysian dust and humidity conditions." },
      { q: "What's the most common Mitsubishi Electric fault?", a: "Indoor fan motor wear and drain pump failures on ceiling cassette models — both are straightforward repairs with the right parts in stock, typically completed in one visit." }
    ]
  },
  "york-aircon-service-malaysia": {
    intro: "York aircon service in KL & Selangor: commercial and residential units, ducted system maintenance and the brand's energy-efficient range for Malaysian conditions.",
    bullets: ["York residential split-system service", "Ducted and cassette system maintenance", "York inverter and fixed-speed repair", "Refrigerant charge and leak detection"],
    faqs: [
      { q: "Is York a good aircon brand for Malaysia?", a: "York is a solid mid-range brand with competitive pricing and reasonable build quality — popular in Malaysian commercial spaces and increasingly in residential installations." },
      { q: "Can York parts be sourced locally?", a: "Yes — York has an established distribution network in Malaysia, and common spare parts like capacitors, sensors and fan motors are available within days, not weeks." },
      { q: "How does York compare on energy efficiency?", a: "York's inverter range competes well on star ratings against Daikin and Panasonic, though the premium brands still lead on the highest-efficiency tiers for residential units." },
      { q: "Does York service ducted commercial systems?", a: "Yes — our teams handle York ducted and cassette systems common in Malaysian offices and shops, including filter replacement, coil cleaning and control board diagnostics." }
    ]
  },
  "acson-aircon-service-malaysia": {
    intro: "Acson aircon service in KL & Selangor: the Malaysian-made brand's portable, split and ceiling units serviced with brand-specific knowledge and local parts.",
    bullets: ["Acson split and portable unit service", "Ceiling cassette and floor-standing models", "Malaysian-made parts availability", "Acson inverter diagnostics"],
    faqs: [
      { q: "Is Acson a Malaysian brand?", a: "Yes — Acson is manufactured in Malaysia by OYL Industries (now part of Daikin), giving it strong local parts availability and pricing that competes well for budget-conscious installations." },
      { q: "Are Acson aircons reliable?", a: "For the price point, Acson delivers solid reliability — they may not match the premium brands on efficiency ratings or quietness, but they cool effectively and parts are easy to source." },
      { q: "Can Acson portable aircons be serviced?", a: "Yes — portable units need the same filter cleaning, coil wash and gas checks as wall-mounts, just with different access panels and drain arrangements that our teams are familiar with." },
      { q: "Should I repair or replace an old Acson unit?", a: "If the compressor is healthy and only the PCB or fan motor needs attention, repair makes sense — but a 10+ year old Acson running R22 gas is usually better replaced with a modern inverter." }
    ]
  },
  "carrier-aircon-service-malaysia": {
    intro: "Carrier aircon service across KL & Selangor: the original AC inventor's residential and light-commercial range, with XPower inverter and standard split servicing.",
    bullets: ["Carrier XPower inverter servicing", "Standard split and multi-split service", "Carrier commercial cassette systems", "R410A and R32 refrigerant handling"],
    faqs: [
      { q: "Is Carrier still a good brand in Malaysia?", a: "Carrier remains a respected brand globally and in Malaysia — their XPower inverter range competes on efficiency, and the brand's long history means established service networks and parts supply." },
      { q: "How does Carrier compare to Daikin on price?", a: "Carrier typically prices slightly below Daikin and Panasonic at equivalent star ratings, making it a value choice for homeowners who want a recognised brand without the top-tier premium." },
      { q: "Are Carrier spare parts hard to find?", a: "Common parts like capacitors, sensors and fan motors are readily available — PCB boards may take a few days to source but are not the scarcity issue some lesser brands face." },
      { q: "Can Carrier aircons use R32 gas?", a: "Newer Carrier models use R32 refrigerant, and our technicians are certified to handle both R32 and the older R410A systems still common in existing Malaysian installations." }
    ]
  },
  "midea-aircon-service-malaysia": {
    intro: "Midea aircon service in KL & Selangor: affordable Chinese-engineered splits and inverters, popular in Malaysian rental properties and budget installations.",
    bullets: ["Midea split and inverter servicing", "Budget-friendly repair options", "Midea portable and window units", "Refrigerant and electrical diagnostics"],
    faqs: [
      { q: "Is Midea aircon reliable for Malaysian homes?", a: "Midea offers competitive pricing with reasonable reliability for the cost — popular in rental properties and budget installations where premium brand pricing is hard to justify." },
      { q: "Can Midea compete with Japanese brands?", a: "On price and basic cooling performance, yes — on long-term efficiency retention and quietness, the Japanese brands still lead. The right choice depends on your budget and expected ownership period." },
      { q: "Are Midea spare parts available in Malaysia?", a: "Yes — Midea has a growing distribution network in Malaysia, and common service parts are available through authorised dealers and general AC parts suppliers." },
      { q: "Should I service a Midea aircon as often as Daikin?", a: "Yes — all aircon brands accumulate the same dust, mould and coil fouling in Malaysian conditions. Skipping service on a budget brand just makes it fail faster than a premium one." }
    ]
  },
  "haier-aircon-service-malaysia": {
    intro: "Haier aircon service across KL & Selangor: Chinese-engineered residential splits with self-clean technology, serviced with brand-aware diagnostics and parts.",
    bullets: ["Haier self-clean function diagnostics", "Split and multi-split system service", "Haier inverter PCB troubleshooting", "Compressor and gas system checks"],
    faqs: [
      { q: "Does Haier's self-clean feature replace servicing?", a: "No — the self-clean function helps reduce surface coil dust between professional visits, but it does not replace chemical washing, drain cleaning or gas checks that prevent real performance loss." },
      { q: "Is Haier a good budget aircon choice?", a: "Haier competes well in the value segment with features like self-clean and WiFi control at lower prices — reliability is reasonable for the cost when maintained on schedule." },
      { q: "Can Haier aircons be repaired easily?", a: "Most common repairs — capacitors, sensors, fan motors — use standard components. Haier-specific PCB boards are available through authorised channels, though sometimes with a wait." },
      { q: "How does Haier compare on energy bills?", a: "Haier's inverter models carry competitive star ratings, and real-world consumption is comparable to other value brands — the biggest efficiency factor remains regular servicing regardless of brand." }
    ]
  },
  "toshiba-aircon-service-malaysia": {
    intro: "Toshiba aircon service in KL & Selangor: Japanese-engineered splits and inverters known for durability, with chemical wash, gas and PCB repair across the range.",
    bullets: ["Toshiba inverter and fixed-speed service", "Chemical wash and coil overhaul", "Toshiba hybrid inverter diagnostics", "Compressor and refrigerant system repair"],
    faqs: [
      { q: "Is Toshiba aircon still made in Japan?", a: "Toshiba's AC division (now Toshiba Carrier) manufactures across Japan, Thailand and China depending on the model — Malaysian units are typically Thai-assembled, which does not affect quality or parts." },
      { q: "How reliable are Toshiba aircons?", a: "Toshiba is among the most reliable Japanese brands, with compressors known for longevity — many 15-year-old Toshiba units still run efficiently with proper maintenance." },
      { q: "Are Toshiba parts expensive?", a: "Slightly above mid-range pricing for genuine parts, but the lower failure rate means fewer replacements over the unit's lifetime — total cost of ownership is competitive." },
      { q: "Can Toshiba aircons handle Malaysian heat?", a: "Toshiba units are rated for tropical ambient temperatures and perform well in Malaysian conditions — the brand's thermal management is one reason installers recommend them for west-facing rooms." }
    ]
  },
  "hitachi-aircon-service-malaysia": {
    intro: "Hitachi aircon service in KL & Selangor: Japanese-engineered residential and commercial units with iClean and inverter technology, serviced with brand-specific tools.",
    bullets: ["Hitachi iClean self-cleaning diagnostics", "Inverter and tropical-grade servicing", "Hitachi commercial cassette systems", "Brand-specific error code reading"],
    faqs: [
      { q: "Is Hitachi aircon good for Malaysian weather?", a: "Hitachi designs tropical-grade models specifically for Southeast Asian conditions, with enhanced dehumidification and high-ambient compressor ratings suited to Malaysian heat." },
      { q: "Does Hitachi iClean replace manual servicing?", a: "iClean helps between visits by freezing and shedding surface dust, but professional chemical washing, drain clearing and gas checks are still needed every 6–12 months." },
      { q: "How does Hitachi compare to Daikin on price?", a: "Hitachi is typically priced slightly below Daikin at equivalent capacity and star rating, making it a value choice among Japanese brands without a significant quality gap." },
      { q: "Are Hitachi spare parts available in KL?", a: "Yes — Hitachi has an established parts distribution in Malaysia, and common service components are available within days for most residential and light-commercial models." }
    ]
  },
  "samsung-aircon-service-malaysia": {
    intro: "Samsung aircon service in KL & Selangor: WindFree and digital inverter ranges serviced with Samsung-specific diagnostics and smart-home integration checks.",
    bullets: ["WindFree panel and airflow servicing", "Samsung digital inverter diagnostics", "SmartThings connectivity troubleshooting", "Standard chemical wash and gas service"],
    faqs: [
      { q: "Is Samsung WindFree worth the premium?", a: "If draft sensitivity is a real issue — for bedrooms, nurseries or work-from-home desks directly under the unit — WindFree's micro-hole airflow genuinely reduces the cold-blast problem." },
      { q: "Can Samsung aircons be controlled by phone?", a: "Yes — Samsung's SmartThings integration works over WiFi for remote control, scheduling and monitoring, which our installation includes and tests before handover." },
      { q: "Are Samsung aircon parts easy to get?", a: "Samsung's AC parts distribution in Malaysia is well established — common service parts like sensors, capacitors and fan motors are available quickly, with PCB boards sourced within days." },
      { q: "How reliable is Samsung compared to Japanese brands?", a: "Samsung's digital inverter range has improved significantly in reliability over recent generations — for the price point, it competes well with Japanese mid-range on both features and durability." }
    ]
  },
  "lg-aircon-service-malaysia": {
    intro: "LG aircon service in KL & Selangor: Dual Inverter and Artcool ranges with LG-specific diagnostics, energy monitoring and thinQ smart features.",
    bullets: ["LG Dual Inverter compressor servicing", "Artcool premium range maintenance", "thinQ smart features and WiFi setup", "LG error code diagnostics and PCB repair"],
    faqs: [
      { q: "Is LG Dual Inverter really more efficient?", a: "LG's twin-rotary compressor design reduces vibration and improves part-load efficiency — independent testing confirms lower consumption than single-rotary inverters at the same capacity." },
      { q: "Can LG aircons run on solar or low power?", a: "LG's Dual Inverter range is popular for solar-powered homes because its low minimum running wattage means it can sustain cooling on smaller inverter systems without tripping." },
      { q: "How does LG compare to Samsung on reliability?", a: "Both Korean brands have reached comparable reliability in recent generations — LG's compressor warranty is among the longest in the market, which reflects confidence in their design." },
      { q: "Does LG service cost more than Japanese brands?", a: "Servicing costs are similar across all major brands — the chemical wash, gas check and electrical diagnostic take the same time regardless of whether it is LG, Daikin or Panasonic." }
    ]
  },
  "sharp-aircon-service-malaysia": {
    intro: "Sharp aircon service in KL & Selangor: Plasmacluster ion technology and J-Tech inverter ranges serviced with Sharp-specific diagnostics and parts.",
    bullets: ["Plasmacluster ion generator maintenance", "J-Tech inverter diagnostics and repair", "Sharp standard and premium split service", "Chemical wash and gas system checks"],
    faqs: [
      { q: "Does Sharp Plasmacluster actually clean the air?", a: "Plasmacluster ions have demonstrated antimicrobial effects in lab studies — in real rooms the effect is subtler, but it does help reduce mould growth on the internal coil between services." },
      { q: "Is Sharp aircon reliable in Malaysia?", a: "Sharp is a solid mid-range Japanese brand with good parts availability in Malaysia — reliability is comparable to Hitachi and Toshiba at similar price points." },
      { q: "Can Sharp aircons be repaired locally?", a: "Yes — Sharp has an established service network in Malaysia, and common repair parts are available through authorised dealers and general AC parts suppliers." },
      { q: "How does Sharp's J-Tech inverter compare?", a: "J-Tech inverter offers competitive energy ratings and stable temperature control — it is a strong value proposition among Japanese inverter brands for cost-conscious homeowners." }
    ]
  },
  "fujitsu-aircon-service-malaysia": {
    intro: "Fujitsu aircon service in KL & Selangor: Japanese-engineered premium splits and multi-systems known for extreme-climate performance and long compressor life.",
    bullets: ["Fujitsu premium split and multi servicing", "High-ambient tropical performance checks", "Fujitsu inverter and standard model repair", "Long-life compressor maintenance"],
    faqs: [
      { q: "Why is Fujitsu considered premium?", a: "Fujitsu builds for extreme conditions — their units are rated for higher ambient temperatures and their compressors are known for outlasting competitors, justifying the higher purchase price." },
      { q: "Is Fujitsu worth the extra cost over Daikin?", a: "For west-facing rooms, top-floor units or areas with extreme heat exposure, the premium often pays back through longer life and fewer breakdowns — for mild bedroom use, Daikin is equally fine." },
      { q: "Are Fujitsu parts expensive in Malaysia?", a: "Genuine Fujitsu parts carry a premium, but the lower failure rate means you buy fewer of them — total maintenance cost over 10 years is competitive with the Japanese mainstream brands." },
      { q: "Can Fujitsu handle Malaysia's humidity?", a: "Fujitsu's dehumidification performance is among the best in the market — their units maintain comfortable humidity without overcooling, which is exactly what tropical climates demand." }
    ]
  },
  "gree-aircon-service-malaysia": {
    intro: "Gree aircon service in KL & Selangor: the world's largest AC manufacturer's residential range, affordable inverters and standard splits with growing Malaysian support.",
    bullets: ["Gree inverter and standard split service", "Budget-friendly repair and parts options", "Gree commercial and cassette systems", "Refrigerant and electrical diagnostics"],
    faqs: [
      { q: "Is Gree the world's largest aircon maker?", a: "Yes — Gree manufactures more air-conditioning units than any other company globally, including OEM production for several well-known brands, which gives them scale advantages on pricing." },
      { q: "Are Gree aircons reliable enough for homes?", a: "Gree's residential range offers reasonable reliability at competitive prices — they are a popular choice for rental properties and secondary rooms where premium pricing is hard to justify." },
      { q: "Can Gree parts be found in Malaysia?", a: "Gree's Malaysian distribution has grown significantly, and common parts are available through authorised dealers — PCB boards for newer models may take a few extra days to source." },
      { q: "How does Gree compare on energy efficiency?", a: "Gree's inverter range carries competitive star ratings against other value brands — real-world efficiency depends more on correct sizing and regular servicing than the brand alone." }
    ]
  },
  "national-aircon-service-malaysia": {
    intro: "National aircon service in KL & Selangor: legacy Panasonic-group units still running in Malaysian homes, serviced with compatible parts and brand-aware knowledge.",
    bullets: ["Legacy National unit maintenance", "Compatible parts for older models", "R22 gas phase-out guidance", "Upgrade path to modern inverters"],
    faqs: [
      { q: "Is National the same as Panasonic?", a: "National was Panasonic's earlier brand name in many markets — the AC technology is related, and some parts are cross-compatible, but they are treated as separate product lines for servicing." },
      { q: "Should I keep servicing an old National aircon?", a: "If the compressor is healthy and the unit cools well, servicing extends its life economically — but if it runs R22 gas and needs major repair, replacement with a modern inverter usually pays back." },
      { q: "Can National aircons still get R22 gas?", a: "R22 is being phased out globally and supply is increasingly expensive — a gas top-up on an R22 unit is often the point where replacement with an R32 or R410A inverter makes financial sense." },
      { q: "Are National spare parts still available?", a: "Common mechanical parts are available through general AC suppliers, but brand-specific PCB boards and electronic components are increasingly scarce for discontinued National models." }
    ]
  },
  "hisense-aircon-service-malaysia": {
    intro: "Hisense aircon service in KL & Selangor: Chinese-engineered residential splits and inverters at competitive prices, with growing service support in Malaysia.",
    bullets: ["Hisense split and inverter servicing", "Budget installation and repair options", "Hisense smart features and WiFi setup", "Standard chemical wash and gas service"],
    faqs: [
      { q: "Is Hisense a good budget aircon choice?", a: "Hisense offers competitive features at lower prices — WiFi control, inverter technology and reasonable build quality make it a viable option for cost-conscious installations." },
      { q: "How does Hisense compare to Midea and Gree?", a: "All three compete in the value segment with similar reliability and features — the choice often comes down to which brand your installer stocks and which model fits your room size best." },
      { q: "Can Hisense aircons be serviced in KL?", a: "Yes — Hisense's Malaysian service network is growing, and standard maintenance like chemical wash and gas checks can be performed by any qualified AC technician." },
      { q: "Should I worry about Hisense long-term reliability?", a: "At the price point, reliability is reasonable — the key is maintaining it on schedule, because budget brands are less forgiving of skipped servicing than premium Japanese units." }
    ]
  },
  "aux-aircon-service-malaysia": {
    intro: "AUX aircon service in KL & Selangor: one of China's largest AC exporters, offering affordable splits for Malaysian homes with standard servicing and repair.",
    bullets: ["AUX split and inverter system service", "Affordable repair and maintenance options", "Standard chemical wash and coil cleaning", "Refrigerant and electrical system checks"],
    faqs: [
      { q: "Is AUX a recognised aircon brand in Malaysia?", a: "AUX is a major Chinese manufacturer with growing presence in Southeast Asia — while less known than Daikin or Panasonic locally, it competes aggressively on price in the value segment." },
      { q: "Can AUX aircons handle Malaysian heat?", a: "AUX units are rated for tropical ambient temperatures and perform adequately in Malaysian conditions — they may not match premium brands on extreme-heat performance, but they cool effectively." },
      { q: "Are AUX spare parts available?", a: "Common service parts are available through the Malaysian distribution network, though brand-specific electronic components may take longer to source than for established Japanese brands." },
      { q: "Is AUX worth considering for a rental property?", a: "For rental units where the aircon is a cost line item rather than a selling point, AUX offers competitive pricing with reasonable reliability — a practical budget choice." }
    ]
  },
  "tcl-aircon-service-malaysia": {
    intro: "TCL aircon service in KL & Selangor: the electronics brand's residential AC range, offering affordable cooling with smart-home features for budget installations.",
    bullets: ["TCL split and inverter servicing", "Smart-home and WiFi feature setup", "Budget-friendly maintenance options", "Standard chemical wash and gas checks"],
    faqs: [
      { q: "Does TCL make good aircons?", a: "TCL's AC range competes in the value segment with reasonable build quality and competitive features — they are a practical choice for secondary rooms and budget installations." },
      { q: "Can TCL aircons connect to smart home systems?", a: "TCL's newer models include WiFi and app control features — setup is included in our installation, and we verify connectivity before handover." },
      { q: "How does TCL compare to other budget brands?", a: "TCL competes with Midea, Gree and AUX on price and features — reliability across the value segment is broadly similar, with servicing frequency mattering more than brand." },
      { q: "Is TCL aircon service available in KL?", a: "Yes — standard AC servicing applies to TCL units, and our teams handle chemical washes, gas checks and basic repairs on TCL's residential range." }
    ]
  },
  "isonic-aircon-service-malaysia": {
    intro: "Isonic aircon service in KL & Selangor: the Malaysian-market brand's affordable splits and inverters, serviced locally with commonly available parts.",
    bullets: ["Isonic split and inverter maintenance", "Malaysian-market parts availability", "Budget installation and repair options", "Chemical wash and refrigerant service"],
    faqs: [
      { q: "Is Isonic a Malaysian aircon brand?", a: "Isonic is distributed in the Malaysian market at competitive price points — it targets budget-conscious homeowners and rental property installations where premium pricing is hard to justify." },
      { q: "Can Isonic aircons be repaired easily?", a: "Standard mechanical parts are commonly available, and basic servicing — chemical wash, gas checks, filter cleaning — is the same as any other brand." },
      { q: "How reliable is Isonic compared to major brands?", a: "At the value price point, reliability is reasonable — the key to longevity is regular servicing, which matters even more for budget brands than premium ones." },
      { q: "Should I choose Isonic or a Japanese brand?", a: "For a rental property or a room that runs a few hours daily, Isonic makes financial sense — for a master bedroom running 8+ hours, the efficiency and durability of a Japanese inverter pays back." }
    ]
  }
};

// ─── Comparison Pages (18) ──────────────────────────────────────────────────

export const comparisonCopy: Record<string, Batch2PodCopy> = {
  "pu-grouting-vs-tile-hacking": {
    intro: "PU grouting versus full tile hacking for bathroom leaks: when the no-hack injection method holds, and when only a full membrane replacement will stop the drip.",
    bullets: ["PU injection seals hairline and joint cracks", "Hacking replaces the failed membrane entirely", "Cost difference is 3–5× in most bathrooms", "Decision depends on membrane condition, not price"],
    faqs: [
      { q: "Can PU grouting permanently fix a bathroom leak?", a: "For hairline concrete cracks and joint leaks, yes — PU resin expands on contact with water and fills voids that surface sealants cannot reach. But if the waterproof membrane itself has failed, grouting is a temporary patch." },
      { q: "When is tile hacking the only honest answer?", a: "When the membrane under the tiles is torn, delaminated or aged beyond repair — no injection method fixes a membrane that no longer exists, and selling you one is the most common upsell in waterproofing." },
      { q: "How do I know which method my bathroom needs?", a: "A water test that maps the leak pattern, plus inspection of the membrane condition through a removed grout line or access point — honest contractors show you the evidence before recommending either approach." },
      { q: "Does PU grouting come with a warranty?", a: "Typically 1–2 years on the injection work, compared to up to 5 years on a full membrane replacement — the warranty difference reflects the scope, not the contractor's confidence." }
    ]
  },
  "plaster-ceiling-vs-gypsum-ceiling": {
    intro: "Plaster ceiling versus gypsum board ceiling: the 10-year premium system versus the faster, cheaper alternative — which one earns its place in your home.",
    bullets: ["Plaster ceiling: skim-finished, cove-ready, 10-year warranty", "Gypsum board: faster install, visible joints under raking light", "Cost difference is 30–50% on most rooms", "Both need correct framing, not just good boards"],
    faqs: [
      { q: "Is plaster ceiling really better than gypsum board?", a: "For seamless, cove-lit feature ceilings with a 10-year warranty against sagging and cracking, yes — the premium system uses reinforced joints and multi-coat skim that gypsum board alone cannot match." },
      { q: "When is gypsum board the smarter choice?", a: "For utility areas, storerooms and rental units where a visible joint line under raking light is acceptable, gypsum board installs faster and costs significantly less without sacrificing structural integrity." },
      { q: "Why do gypsum ceilings crack at the joints?", a: "Because standard taping and one-coat finishing cannot handle the thermal and structural movement of Malaysian buildings — the plaster ceiling system's reinforced joints and multi-coat skim are specifically designed to handle that movement." },
      { q: "Can I upgrade from gypsum to plaster later?", a: "Yes, but it means removing the existing boards and re-skimming the frame — it is cheaper to choose the right system from the start than to pay for both." }
    ]
  },
  "nippon-paint-vs-dulux-paint": {
    intro: "Nippon Paint versus Dulux for Malaysian homes: stain resistance, weather durability, colour range and price — a practical comparison, not a brand war.",
    bullets: ["Nippon leads on stain-resistant interiors", "Dulux Weathershield rates higher on exterior UV", "Colour range is comparable across both brands", "Primer compatibility matters more than topcoat brand"],
    faqs: [
      { q: "Which paint brand lasts longer on exterior walls?", a: "Dulux Weathershield and Nippon Weatherbond both carry 5–7 year durability claims, but real-world performance depends more on surface preparation and primer choice than the topcoat brand alone." },
      { q: "Is Nippon Spot Less Plus worth it for hallways?", a: "For high-traffic areas where scuffs and fingerprints are daily reality, Spot Less Plus genuinely resists marks better than standard emulsion — the premium pays for itself in reduced repainting frequency." },
      { q: "Can I mix Nippon primer with Dulux topcoat?", a: "Technically yes if both are water-based and compatible, but manufacturers test and warranty their systems as matched sets — mixing brands means neither warranty applies if something fails." },
      { q: "Which brand has better colour matching?", a: "Both brands have factory-tinting systems that produce consistent colours — the bigger variable is whether your painter uses the brand's own tinting centre or a general hardware shop mixer." }
    ]
  },
  "acrylic-vs-cementitious-waterproofing": {
    intro: "Acrylic coating versus cementitious waterproofing for Malaysian roofs and walls: when a brush-on membrane works, and when you need the bonded cementitious system.",
    bullets: ["Acrylic: flexible, UV-resistant, for exposed surfaces", "Cementitious: bonded, tileable, for under-tile systems", "Acrylic fails under standing water over time", "Cementitious needs a sound, clean substrate to bond"],
    faqs: [
      { q: "Can acrylic waterproofing handle a flat roof?", a: "For exposed flat roofs with good drainage, yes — acrylic coatings like Sikalastic flex with thermal movement and resist UV degradation. But if water ponds for days, acrylic will eventually blister and fail." },
      { q: "When is cementitious the right choice?", a: "Under tiles, in bathrooms and on concrete surfaces where you need a bonded membrane that the tile adhesive grips — cementitious systems are the standard for wet areas because they work with the tiling system." },
      { q: "Which method lasts longer?", a: "Cementitious systems under tiles last 10–15 years when properly applied; acrylic on exposed surfaces needs re-coating every 3–5 years depending on UV exposure and weathering." },
      { q: "Can I apply acrylic over existing cementitious?", a: "Only if the cementitious layer is sound and properly primed — applying acrylic over a failing cementitious membrane just traps the failure underneath and delays the inevitable." }
    ]
  },
  "pvc-pipes-vs-copper-pipes": {
    intro: "PVC versus copper pipes for Malaysian plumbing: cost, durability, pressure ratings and where each material earns its place in your home's water system.",
    bullets: ["PVC: affordable, corrosion-free, for cold water and drainage", "Copper: heat-resistant, durable, for hot water lines", "PVC fails above 60°C; copper handles 100°C+", "Both need SIRIM certification for potable water"],
    faqs: [
      { q: "Can PVC pipes handle hot water from a heater?", a: "Standard PVC is rated for cold water only — hot water lines need CPVC (rated to about 82°C) or copper, which handles the full range. Using PVC on hot lines is a common shortcut that leads to softening and leaks." },
      { q: "Is copper worth the premium over PVC?", a: "For hot water lines and exposed runs where durability matters, yes — copper lasts 50+ years and handles thermal cycling that would fatigue plastic joints over time." },
      { q: "Do PVC pipes need SIRIM certification?", a: "Yes — any pipe carrying potable water in Malaysia should carry SIRIM QAS certification, which confirms pressure rating and material safety. Non-certified PVC is a false economy that voids insurance." },
      { q: "Can I mix PVC and copper in one system?", a: "Yes, with proper dielectric unions at the transition points to prevent galvanic corrosion — a competent plumber knows this, and it should be specified in the quotation." }
    ]
  },
  "pvc-vs-molly-bolt-anchors": {
    intro: "PVC wall plugs versus molly bolt anchors for mounting on Malaysian walls: which fixing earns its place on plasterboard, brick, and concrete surfaces.",
    bullets: ["PVC plugs: masonry and concrete walls", "Molly bolts: plasterboard and hollow walls", "Using the wrong anchor is the #1 mount failure", "Load rating matters more than anchor brand"],
    faqs: [
      { q: "Can I use PVC plugs on a gypsum wall?", a: "No — PVC plugs need solid material to grip, and they pull straight out of hollow gypsum board under any real load. Molly bolts or toggle anchors spread the load behind the board, which is what plasterboard needs." },
      { q: "Which anchor is safest for a heavy TV?", a: "On solid brick or concrete, heavy-duty PVC or nylon plugs rated for the weight work well — on plasterboard, you need molly bolts into the stud or a backing plate, never just the board alone." },
      { q: "Do molly bolts damage the wall?", a: "They leave a larger hole than PVC plugs, but the hole is repairable with filler — the alternative is a fallen TV, which damages the wall, the floor and potentially someone standing nearby." },
      { q: "How do I know what my wall is made of?", a: "A knock test and a small drill probe tell you — solid sound and dust means masonry, hollow sound and clean cut means board. We check before every mount, because guessing is how TVs fall." }
    ]
  },
  "interior-paint-finishes-matte-vs-satin-vs-gloss": {
    intro: "Matte, satin or gloss interior paint: which finish hides imperfections, survives wiping, and reads well under Malaysian home lighting — room by room.",
    bullets: ["Matte hides wall imperfections best", "Satin balances wipeability and appearance", "Gloss highlights every bump and brush mark", "Different rooms need different sheen levels"],
    faqs: [
      { q: "Which paint finish hides my uneven walls?", a: "Matte or flat finish absorbs light and hides surface imperfections — gloss and semi-gloss reflect light and make every bump, patch and roller mark visible under Malaysian downlighting." },
      { q: "Can matte paint be wiped clean?", a: "Modern washable matte formulations resist light wiping, but they will never match satin or eggshell for scrub resistance — in kids' rooms and kitchens, satin is the practical compromise." },
      { q: "Should bathroom paint be gloss?", a: "Bathrooms benefit from satin or semi-gloss for moisture resistance and wipeability, but full gloss on bathroom walls looks institutional — satin gives the durability without the clinical feel." },
      { q: "Can I mix finishes in one room?", a: "Yes — a common approach is matte on walls with satin on trims and doors, which gives visual depth and puts the wipeable finish where hands and feet actually touch." }
    ]
  },
  "wall-putty-vs-plaster-smoothening": {
    intro: "Wall putty versus full plaster smoothening: when a thin skim coat is enough, and when the wall needs the full trowel-flat treatment before painting.",
    bullets: ["Putty: thin coat for minor surface imperfections", "Plaster skim: full-surface levelling to raking light", "Putty cannot fix structural cracks or hollow spots", "Both need proper curing before the primer goes on"],
    faqs: [
      { q: "Is wall putty enough before repainting?", a: "If the wall is structurally sound with only minor surface roughness, yes — putty fills hairlines and smooths texture. But if sunlight shows ridges and patches, you need the full skim coat treatment." },
      { q: "Why does my painter recommend skim coat instead of putty?", a: "Because putty is 1–2mm at most and cannot level an uneven wall — skim coat is 3–5mm of levelling compound that brings the entire surface to a flat plane under raking light." },
      { q: "Does skim coat take longer than putty?", a: "Yes — skim coat needs multiple coats with drying time between each, adding 1–2 days to the schedule. But the result is a wall that looks right under any lighting angle, which putty cannot achieve." },
      { q: "Can I skip both and just paint directly?", a: "On a new, well-finished wall, possibly — on any wall with visible imperfections, painting without prep just makes every defect glossy and obvious, which is exactly why the repaint was needed." }
    ]
  },
  "partition-materials-gypsum-vs-bricks-vs-glass": {
    intro: "Gypsum, brick or glass partitions for KL & Selangor properties: sound insulation, weight, cost and installation speed compared for real Malaysian projects.",
    bullets: ["Gypsum: lightweight, fast install, moderate sound rating", "Brick: heavy, best sound isolation, needs structural support", "Glass: modern aesthetic, natural light transfer", "Weight and floor loading decide what's possible"],
    faqs: [
      { q: "Which partition blocks sound best?", a: "Brick walls with plaster on both sides give the highest sound reduction, followed by double-layer gypsum with mineral wool infill — glass partitions transfer sound unless specified with acoustic laminated panels." },
      { q: "Can a condo floor take brick partitions?", a: "Usually not without structural assessment — brick partitions are heavy, and most condo slabs are designed for lightweight gypsum or glass partitions. Always check with your building engineer before specifying brick." },
      { q: "Is glass partition cheaper than gypsum?", a: "No — glass partitions with aluminium framing and toughened panels cost significantly more than gypsum, but they deliver natural light and a modern aesthetic that gypsum cannot replicate." },
      { q: "How fast can a gypsum partition go up?", a: "A standard room partition in gypsum with metal framing can be installed, boarded and finished in 1–2 days, compared to 5–7 days for brick with plaster curing time." }
    ]
  },
  "diy-painting-vs-professional-painting": {
    intro: "DIY painting versus hiring a professional painter in KL: real cost comparison including materials, time, waste and the finish quality you actually live with.",
    bullets: ["DIY saves labour cost but multiplies your time", "Professionals bring prep, tools and surface knowledge", "Finish quality gap widens on larger projects", "Hidden costs: scaffolding, wastage, rework"],
    faqs: [
      { q: "Is DIY painting really cheaper?", a: "On a single small room with simple walls, yes — on a full house, the material cost is similar but your time, tool rental, wastage and potential rework close the gap fast. A 3-room terrace DIY often takes 2–3 weekends." },
      { q: "What do professional painters do that I can't?", a: "Surface assessment and preparation: identifying hollow plaster, treating cracks, choosing the right primer, cutting clean edges and applying consistent coats — these are skills that separate a finish you enjoy from one you notice." },
      { q: "Can I DIY the easy rooms and hire for the rest?", a: "Yes — bedrooms and low-traffic areas are DIY-friendly; exteriors, high walls, ceilings and feature finishes benefit from professional tools and technique. Many painters quote partial scope if asked." },
      { q: "What if the professional job goes wrong?", a: "A warranted professional job includes rework at no cost — a DIY job that goes wrong costs you the materials twice plus the professional's fee to fix it, which is how 'saving money' becomes the most expensive option." }
    ]
  },
  "cheap-handyman-vs-insured-contractor": {
    intro: "Cheap handyman versus insured contractor in KL: the real cost when a RM 50 job becomes a RM 5,000 repair — insurance, warranty and liability compared.",
    bullets: ["Insured contractors carry public liability cover", "Warranty-backed work means free rework on failure", "Cheap quotes often skip prep and use inferior fixings", "Liability for damage falls on you without insurance"],
    faqs: [
      { q: "Why does an insured contractor cost more?", a: "Insurance premiums, proper tools, trained workers and warranty reserves all cost money — a contractor who skips these can quote lower, but when something breaks or falls, the bill lands on you." },
      { q: "What happens if a cheap handyman damages my property?", a: "Without public liability insurance, you pay for the damage and the repair — and if the handyman damages a neighbour's property through your unit, you are the one the JMB or management comes to." },
      { q: "Is a warranty really worth paying for?", a: "On mounting, plumbing and electrical work, yes — a TV that falls off a wall, a pipe that leaks into the unit below, or a circuit that trips at 2 a.m. are all things a warranty fixes for free." },
      { q: "Can I verify a contractor's insurance?", a: "Yes — ask for a copy of their public liability certificate and verify it with the insurer. A legitimate contractor has this ready; a fly-by-night will make excuses." }
    ]
  },
  "pu-injection-vs-surface-waterproofing": {
    intro: "PU injection versus surface waterproofing for concrete leaks: when to inject from below, when to coat from above, and why the wrong choice wastes money twice.",
    bullets: ["PU injection: seals active cracks from the negative side", "Surface coating: prevents water entry from the positive side", "Injection treats the symptom; surface treats the cause", "Both may be needed for a complete solution"],
    faqs: [
      { q: "When is PU injection the right choice?", a: "When the leak is accessible only from below — basement ceilings, inter-floor slabs and situations where the positive side (roof or bathroom floor) cannot be opened without major demolition." },
      { q: "When is surface waterproofing better?", a: "When the positive side is accessible and the membrane can be renewed — surface waterproofing stops water entering the concrete in the first place, which is always the preferred long-term solution." },
      { q: "Can I use both methods together?", a: "Yes — PU injection stops the active leak immediately, then surface waterproofing on the positive side prevents recurrence. This two-stage approach is common on inter-floor leaks where both sides are accessible." },
      { q: "Why does my contractor only offer injection?", a: "Because injection is faster, cheaper and avoids the demolition of the floor above — but if the root cause is a failed membrane on the positive side, injection alone is a recurring cost, not a permanent fix." }
    ]
  },
  "fixed-quote-vs-hourly-handyman": {
    intro: "Fixed quote versus hourly rate for handyman work in KL: which pricing model protects you from surprises, and when hourly billing actually makes sense.",
    bullets: ["Fixed quote: price agreed before work starts", "Hourly rate: pay for time, risk scope creep", "Fixed suits defined jobs; hourly suits open-ended punch lists", "Both need a written scope to be meaningful"],
    faqs: [
      { q: "Is a fixed quote always better?", a: "For well-defined jobs — mounting a TV, replacing a tap, fixing a door — yes. For open-ended work where the scope is genuinely unknown until walls are opened, hourly with a cap can be more honest." },
      { q: "Why do some handymen refuse fixed quotes?", a: "Because they cannot predict what they will find behind the wall or under the tiles — but a competent handyman should quote a fixed price for the visible scope and a defined hourly rate for any discovered extras." },
      { q: "What if a fixed quote job takes longer than expected?", a: "That is the contractor's risk, not yours — the price was agreed on the visible scope, and any genuine extras should be flagged and approved before the work continues, not added to the invoice after." },
      { q: "Can hourly billing lead to inflated time?", a: "Without a time estimate and progress updates, yes — always agree on an expected time range before work starts, and ask for updates if the job runs significantly beyond it." }
    ]
  },
  "drywall-partition-vs-glass-partition": {
    intro: "Drywall versus glass partitions for offices and homes in KL: privacy, light, cost and installation speed compared for real Malaysian fit-out projects.",
    bullets: ["Drywall: full privacy, electrical routing inside walls", "Glass: natural light transfer, modern aesthetic", "Drywall costs 40–60% less than framed glass", "Glass needs careful handling and toughened panels"],
    faqs: [
      { q: "Which partition is better for a home office?", a: "If you need acoustic privacy for calls, drywall with mineral wool infill — if you want light from a window to reach an internal room, glass with frosted or reeded panels for partial privacy." },
      { q: "Can glass partitions carry sound?", a: "Single-glazed glass partitions transfer conversation easily — acoustic-rated glass with laminated panels and sealed joints reduces this significantly, at a higher cost." },
      { q: "Is drywall strong enough to mount shelves?", a: "With proper anchors into the metal studs, yes for moderate loads — for heavy items, the stud positions need to be planned before the boards go up, which a good contractor does at the framing stage." },
      { q: "How fast can each partition type be installed?", a: "Drywall partitions can be framed, boarded and finished in 2–3 days; glass partitions with aluminium framing typically need 5–7 days including glass fabrication and installation." }
    ]
  },
  "roof-coating-vs-torch-on-membrane": {
    intro: "Roof coating versus torch-on membrane for Malaysian flat roofs and concrete slabs: when a brush-on system holds, and when you need the welded membrane.",
    bullets: ["Acrylic coating: flexible, UV-resistant, for exposed roofs", "Torch-on membrane: welded seams, ponding-water resistant", "Coating needs re-application every 3–5 years", "Membrane lasts 10+ years with proper detailing"],
    faqs: [
      { q: "Can roof coating stop a flat roof leak?", a: "For minor cracks and surface degradation with good drainage, yes — acrylic or polyurethane coatings bridge hairline cracks and resist UV. But if water ponds for days, coating will blister and fail at the weak points." },
      { q: "When is torch-on membrane the right answer?", a: "When the roof has ponding water, multiple leak points, or needs a 10+ year solution — torch-on membrane's welded seams and reinforcement handle standing water that coatings cannot survive." },
      { q: "How much more does torch-on cost?", a: "Typically 2–3× the cost of coating per square metre, but with 3× the lifespan — on a per-year basis, torch-on is often the more economical choice for roofs that need a long-term solution." },
      { q: "Can I coat over an existing torch-on membrane?", a: "Only if the membrane is sound and properly primed — coating over a failing membrane traps moisture and accelerates the failure. The membrane condition must be assessed first." }
    ]
  },
  "chemical-wash-vs-chemical-overhaul": {
    intro: "Chemical wash versus chemical overhaul for aircon servicing: when a coil clean restores cooling, and when the full strip-down is the only honest recommendation.",
    bullets: ["Chemical wash: cleans coil and blower in place", "Chemical overhaul: full strip, clean and reassemble", "Wash suits maintenance; overhaul suits performance loss", "Overhaul costs 2–3× more but restores near-new airflow"],
    faqs: [
      { q: "What does a chemical wash actually clean?", a: "The evaporator coil, blower wheel and drain pan are flushed with a chemical solution that dissolves dust, mould and biofilm without removing the unit — effective for routine maintenance when cooling is still acceptable." },
      { q: "When is a chemical overhaul necessary?", a: "When the aircon blows weak airflow despite clean filters, smells persist after a wash, or the unit has gone years without deep cleaning — the full strip-down reaches surfaces that in-place washing cannot." },
      { q: "Is overhaul worth it on an old aircon?", a: "If the compressor and refrigerant system are healthy, yes — an overhaul restores airflow and efficiency to near-new levels at a fraction of replacement cost. If the compressor is failing, replacement is the honest answer." },
      { q: "How often should each service be done?", a: "Chemical wash every 6–12 months depending on usage and dust; chemical overhaul every 2–3 years or when performance drops despite regular washing — both extend the unit's life and reduce electricity consumption." }
    ]
  },
  "inverter-vs-non-inverter-aircon": {
    intro: "Inverter versus non-inverter aircon for Malaysian homes: the electricity bill difference, comfort level and when the premium pays for itself in under two years.",
    bullets: ["Inverter: variable speed, 30–50% less electricity", "Non-inverter: fixed speed, lower purchase price", "Inverter maintains stable room temperature", "Payback period depends on daily running hours"],
    faqs: [
      { q: "How much electricity does an inverter save?", a: "Typically 30–50% compared to a non-inverter of the same capacity, because the compressor adjusts speed instead of cycling on and off — the saving is largest on units running 6+ hours daily." },
      { q: "Is an inverter worth it for a guest room?", a: "If the room runs a few hours occasionally, the non-inverter's lower purchase price may never be recovered by the inverter's efficiency gain — inverters earn their premium on frequently used rooms." },
      { q: "Do inverters cost more to repair?", a: "PCB boards on inverters are more expensive to replace than the simple capacitor on a non-inverter, but inverter compressors experience less wear from on-off cycling, which can mean fewer compressor failures." },
      { q: "Can I install an inverter on my existing wiring?", a: "Usually yes — inverters draw the same or less current than non-inverters of the same capacity, but the dedicated circuit and breaker must still be correctly sized for the unit's maximum draw." }
    ]
  },
  "wall-mounted-vs-ceiling-cassette-aircon": {
    intro: "Wall-mounted versus ceiling cassette aircon for KL & Selangor properties: installation cost, airflow pattern and which type suits your room layout and ceiling height.",
    bullets: ["Wall-mount: lower cost, simpler installation", "Ceiling cassette: even airflow, suits open-plan rooms", "Cassette needs suspended ceiling or structural mounting", "Wall-mount suits bedrooms; cassette suits living areas"],
    faqs: [
      { q: "Which type cools a large living room better?", a: "Ceiling cassette — its 4-way airflow distributes cooling evenly across open-plan spaces, while a wall-mount blows in one direction and leaves far corners warmer." },
      { q: "Is ceiling cassette more expensive to install?", a: "Yes — installation costs 30–50% more because of the structural mounting, longer refrigerant runs and drain routing through the ceiling. The unit itself is also priced higher than equivalent wall-mounts." },
      { q: "Can I install a cassette in a condo with low ceilings?", a: "Only if there is enough ceiling void depth for the cassette body — typically 250–350mm. In condos with minimal ceiling space, a wall-mount or a slim-profile cassette is the practical choice." },
      { q: "Which type is easier to maintain?", a: "Wall-mounts are simpler — filters slide out and the unit is accessible at eye level. Cassette filters need a ladder and the drain pan is harder to access, making professional servicing more important." }
    ]
  }
};

// ─── Guide Pages (10) ───────────────────────────────────────────────────────

export const guideCopy: Record<string, Batch2PodCopy> = {
  "how-to-choose-house-painter-kl": {
    intro: "How to choose a house painter in KL: five checks that separate a professional job from a botched repaint — before you sign the quotation.",
    bullets: ["Ask for photos of prep work, not just finished walls", "Verify primer and sealer are itemised in the quote", "Confirm the paint brand, range and batch consistency", "Check warranty terms cover peeling and blistering"],
    faqs: [
      { q: "What should a painter's quote include?", a: "Surface preparation (crack filling, sanding, primer), paint brand and range, number of coats, protection of furniture and floors, working hours and a written warranty covering peeling, blistering and colour inconsistency." },
      { q: "How do I verify a painter's past work?", a: "Ask for photos of preparation stages, not just finished rooms — a painter who documents their prep work is one who actually does it. Site visits to current jobs are even better if timing allows." },
      { q: "Should I buy the paint or let the painter supply it?", a: "Let the painter supply it — they are responsible for the system warranty only if they control the materials. If you supply paint and it fails, the painter blames the paint and the paint shop blames the application." },
      { q: "What is a fair painting timeline for a terrace house?", a: "A standard 2-storey terrace interior typically takes 5–7 working days with a 2–3 person team; exterior adds 3–5 days depending on access and weather. Anything significantly faster suggests corners are being cut." }
    ]
  },
  "how-to-choose-plumber-kl": {
    intro: "How to choose a plumber in KL: the checks that prevent a simple repair from becoming a flooding disaster — licensing, isolation knowledge and warranty.",
    bullets: ["Verify isolation valve knowledge before any work", "Ask for SIRIM-certified materials in the quote", "Check the plumber can trace leaks, not just fix them", "Confirm warranty covers joint failure, not just parts"],
    faqs: [
      { q: "Does a plumber need a licence in Malaysia?", a: "For water supply work connected to the mains, yes — plumbers working on IWK (Indah Water) connections and mains supply need relevant certifications. For internal fixture swaps, the requirement is less formal but competence still matters." },
      { q: "How do I know a plumber is competent?", a: "Ask how they would find a hidden leak before hacking — a competent plumber describes pressure testing and acoustic detection, not 'we open the floor and look.' The diagnostic approach tells you everything." },
      { q: "Should a plumber's quote include photos?", a: "For repairs, before-and-after photos are standard practice from professional plumbers — they document the fault, the repair and the materials used, which is what you need for insurance claims and warranty enforcement." },
      { q: "What warranty should a plumbing job carry?", a: "30 days minimum on workmanship for repairs; 12 months for installations. The warranty should cover joint leaks and fitting failures, not just the parts — a plumber who only warrants parts is passing risk to you." }
    ]
  },
  "how-to-choose-waterproofing-contractor-kl": {
    intro: "How to choose a waterproofing contractor in KL: the five questions that expose contractors who sell no-hack solutions for problems that need a full membrane.",
    bullets: ["Ask for leak diagnosis evidence before the solution", "Verify ponding test is included in the scope", "Check the warranty covers re-leak, not just materials", "Confirm the contractor handles neighbour coordination"],
    faqs: [
      { q: "How do I know if my leak needs hacking or not?", a: "A competent contractor tests first: water ponding, dye tracing and membrane condition assessment. If they recommend no-hack without testing, or hacking without showing you the failed membrane, get a second opinion." },
      { q: "What should a waterproofing warranty cover?", a: "The installed system against re-leak for the warranty period — not just the materials. A contractor who only warrants materials is saying they will not come back if the application fails, which defeats the purpose." },
      { q: "Should the contractor coordinate with my downstairs neighbour?", a: "Yes — inter-floor leaks involve access to the unit below for inspection and testing. A professional contractor handles this coordination, not you. It should be included in the scope, not a surprise at day two." },
      { q: "How do I verify a contractor's waterproofing experience?", a: "Ask for case studies with photos of the diagnosis, repair stages and post-repair testing — contractors who document their process are the ones who follow it consistently." }
    ]
  },
  "how-to-choose-ceiling-contractor-kl": {
    intro: "How to choose a ceiling contractor in KL: from framing quality to skim finishing — the checks that prevent sagging, cracking and downlight disasters.",
    bullets: ["Verify frame spacing matches the board manufacturer's spec", "Ask about joint reinforcement and skim coat system", "Check downlight coordination is planned before boarding", "Confirm the warranty covers sagging and cracking"],
    faqs: [
      { q: "What frame spacing is correct for gypsum ceilings?", a: "Most manufacturers specify 400–450mm centres for standard boards — wider spacing causes sagging over time. Ask the contractor to show the spacing on their framing plan, not just 'we follow standard.'" },
      { q: "Should ceiling joints be reinforced?", a: "Yes — the plaster ceiling system uses reinforced tape and multi-coat jointing compound at every joint and corner, which is exactly what prevents the cracking that standard one-coat finishing develops within months." },
      { q: "How do I check downlight coordination?", a: "Before the boards go up, the downlight positions should be marked on the framing with reinforcement around each cut-out — retrofitting downlights after boarding means cutting into the finished ceiling and risking cracks." },
      { q: "What warranty should a ceiling job carry?", a: "Standard gypsum board ceilings should carry 12 months on workmanship; premium plaster ceiling systems carry up to 10 years on sagging and cracking — the warranty length reflects the system quality, not just the contractor's confidence." }
    ]
  },
  "how-to-choose-handyman-kl": {
    intro: "How to choose a handyman in KL: the difference between a professional who fixes it once and a cowboy who comes back three times — before you book.",
    bullets: ["Ask how they identify wall type before drilling", "Verify mounting hardware is rated for the load", "Check the quote includes cleanup and make-good", "Confirm public liability insurance for your protection"],
    faqs: [
      { q: "How do I know a handyman is professional?", a: "A professional describes their approach before starting — wall type identification, anchor selection, load calculation. A cowboy picks up the drill and figures it out on the wall. The difference shows in the first five minutes." },
      { q: "Should a handyman carry insurance?", a: "Yes — public liability insurance protects you if the handyman damages your property, a neighbour's property, or injures someone during the work. Ask for the certificate; a professional has it ready." },
      { q: "Is a fixed quote or hourly rate better?", a: "For defined jobs like mounting, repairs and assembly, a fixed quote protects you from time inflation. For open-ended punch lists where scope is genuinely unknown, hourly with a time estimate is the honest alternative." },
      { q: "What if the handyman's work fails later?", a: "A warranted job includes rework at no cost within the warranty period — if the handyman does not offer a warranty, you are paying for a one-time attempt, not a completed job." }
    ]
  },
  "paint-brand-comparison-nippon-vs-dulux-vs-jotun": {
    intro: "Nippon Paint versus Dulux versus Jotun: a practical three-way comparison for Malaysian homeowners choosing between the top paint brands on every quote.",
    bullets: ["Compare stain resistance across interior ranges", "Exterior durability under tropical UV and rain", "Colour accuracy and tinting system consistency", "Price per litre versus coverage and coats needed"],
    faqs: [
      { q: "Which brand has the best stain-resistant interior paint?", a: "Nippon Spot Less Plus and Dulux EasyClean compete closely on stain resistance; Jotun Majestic True Beauty offers premium finish quality. The best choice depends on whether you prioritise wipeability or visual depth." },
      { q: "Which brand lasts longest on Malaysian exteriors?", a: "Dulux Weathershield, Nippon Weatherbond and Jotun Jotashield all carry 5–7 year claims — real-world performance depends more on primer choice, surface preparation and application quality than the topcoat brand." },
      { q: "Is Jotun worth the premium over Nippon and Dulux?", a: "For feature walls and exteriors with extreme sun exposure, Jotun's heat reflectance and colour retention justify the cost. For standard interiors and sheltered exteriors, Nippon and Dulux deliver comparable results at lower cost." },
      { q: "Can I use different brands for primer and topcoat?", a: "Manufacturers test and warranty their systems as matched sets — mixing brands means neither warranty applies if the system fails. Stick to one brand's primer and topcoat for the warranty to hold." }
    ]
  },
  "waterproofing-method-comparison-pu-vs-membrane": {
    intro: "PU injection versus full membrane waterproofing: a practical comparison for Malaysian bathroom, balcony and roof leaks — which method solves your specific problem.",
    bullets: ["PU injection targets specific cracks and joints", "Full membrane replaces the entire waterproof layer", "Injection is faster; membrane is more permanent", "The right choice depends on membrane condition"],
    faqs: [
      { q: "How do I know if my membrane has failed?", a: "A water ponding test with inspection of the ceiling below, plus checking for membrane delamination at grout lines and edges — if the membrane lifts or crumbles when probed, it has failed and injection alone will not fix it." },
      { q: "Can PU injection buy time before a full repair?", a: "Yes — injection stops the active leak immediately while you plan the full membrane replacement, which is a legitimate two-stage approach when immediate demolition is not practical." },
      { q: "Which method has a longer warranty?", a: "Full membrane replacement carries up to 5 years; PU injection typically 1–2 years. The warranty difference reflects the scope — injection treats specific points, membrane replaces the entire system." },
      { q: "Is there a method between injection and full hacking?", a: "Surface-applied liquid membranes can be applied over existing tiles without hacking in some cases — but they change the floor level, affect door clearances, and only work when the substrate beneath the tiles is sound." }
    ]
  },
  "ceiling-material-comparison-plaster-vs-gypsum": {
    intro: "Plaster ceiling versus gypsum board for Malaysian homes: cost, durability, finish quality and warranty compared for real residential projects.",
    bullets: ["Plaster ceiling: seamless finish, 10-year system warranty", "Gypsum board: faster install, visible joints", "Cost difference is 30–50% per room", "Both need correct framing — the frame decides longevity"],
    faqs: [
      { q: "Which ceiling type suits a condo with low ceilings?", a: "A minimal-drop gypsum board with a flat profile suits tight headroom; plaster ceiling systems need more depth for the multi-coat skim. Where cove lighting is planned, the profile depth must be designed around the light channel." },
      { q: "Why does my gypsum ceiling crack after a year?", a: "Standard joint finishing without reinforcement cannot handle Malaysian thermal movement — the plaster ceiling system's reinforced joints and multi-coat skim are specifically designed to prevent this cracking." },
      { q: "Can I have plaster ceiling in wet areas?", a: "The premium plaster system uses moisture-resistant boards in bathrooms and kitchens, with the same reinforced joint system — it costs more than gypsum MR board but delivers the same seamless finish throughout." },
      { q: "Which ceiling adds more property value?", a: "A well-executed plaster ceiling with cove lighting reads as a premium feature during resale viewings — but the value is in the execution quality, not just the material choice." }
    ]
  },
  "plumbing-pipe-comparison-pvc-vs-copper-vs-ppr": {
    intro: "PVC, copper and PPR pipes for Malaysian homes: pressure ratings, temperature limits, installation cost and lifespan compared for real plumbing decisions.",
    bullets: ["PVC: cold water only, affordable, easy to install", "Copper: hot and cold, 50+ year lifespan, premium cost", "PPR: heat-fused joints, no leaks at connections", "All need SIRIM certification for potable water use"],
    faqs: [
      { q: "Which pipe is best for hot water lines?", a: "Copper handles the full temperature range and lasts decades; PPR with heat-fused joints is the modern alternative that avoids the threaded joints where copper can leak. PVC is not rated for hot water." },
      { q: "Is PPR better than copper?", a: "PPR's heat-fused joints eliminate the threaded connections where copper systems typically leak, and installation is faster — but copper's track record of 50+ years is longer than PPR's 25-year history in Malaysia." },
      { q: "Can I use PVC for the whole house?", a: "Only for cold water supply and drainage — hot water lines need copper, PPR or CPVC. Using PVC on hot lines is a common shortcut that leads to softening, deformation and eventual leaks." },
      { q: "Do all three types need SIRIM certification?", a: "Yes — any pipe carrying potable water in Malaysia should carry SIRIM QAS certification confirming pressure rating and material safety. Non-certified pipes of any type void insurance claims on water damage." }
    ]
  },
  "tv-mount-types-comparison-fixed-vs-tilt-vs-full-motion": {
    intro: "Fixed, tilt or full-motion TV mount: which bracket suits your wall type, viewing angle and the weight of your TV — a safety-first comparison.",
    bullets: ["Fixed mount: lowest profile, strongest hold", "Tilt mount: reduces glare from windows and lights", "Full-motion: extends and swivels for corner mounting", "Wall type decides which mount is actually safe"],
    faqs: [
      { q: "Which TV mount is the safest?", a: "A fixed mount rated for your TV's weight, installed into solid masonry or properly anchored studs — the simpler the bracket, the fewer the failure points. Full-motion mounts multiply the leverage on every fixing." },
      { q: "Can I use a full-motion mount on plasterboard?", a: "Only if the mount is anchored into the metal or timber studs behind the board, not the board itself — a 55-inch TV on a full-motion arm generates significant leverage that plasterboard alone cannot hold." },
      { q: "Does a tilt mount help with window glare?", a: "Yes — a 15° downward tilt reduces reflections from overhead lights and windows at eye level, which is exactly the problem in Malaysian living rooms with large windows and downlighting." },
      { q: "How do I know what my TV weighs?", a: "Check the manufacturer's spec sheet for the weight without the stand — this is the figure the mount must be rated for, with a safety margin. Never use a mount rated for less than your TV's actual weight." }
    ]
  }
};

// ─── Maintenance Pages (10) ─────────────────────────────────────────────────

export const maintenanceCopy: Record<string, Batch2PodCopy> = {
  "painting-maintenance-schedule": {
    intro: "A painting maintenance schedule for Malaysian homes: when to touch up, when to re-coat and how to extend the life of your interior and exterior paint.",
    bullets: ["Interior touch-ups every 2–3 years on high-traffic walls", "Exterior re-coat every 5–7 years on exposed elevations", "Algae and mould treatment before any repaint", "Crack monitoring and sealing before paint damage spreads"],
    faqs: [
      { q: "How often should I repaint my home's interior?", a: "High-traffic areas like hallways and kitchens typically need repainting every 3–5 years; bedrooms and living rooms last 5–8 years with quality paint. Touch-ups extend the cycle if caught early." },
      { q: "What causes exterior paint to fail early in Malaysia?", a: "UV degradation, algae growth on shaded walls, and hairline cracks that let moisture behind the film — addressing cracks and algae before they spread extends the exterior repaint cycle significantly." },
      { q: "Can I touch up without repainting the whole wall?", a: "Yes, if you have the original paint code and batch — but touch-ups on aged paint often show as a slightly different sheen. For visible areas, painting the full wall from corner to corner hides the repair." },
      { q: "Should I wash walls before touching up?", a: "Always — dust, grease and nicotine on the surface prevent the touch-up from bonding properly. A mild detergent wash and thorough drying before any paint goes on is non-negotiable." }
    ]
  },
  "plumbing-annual-checklist": {
    intro: "An annual plumbing checklist for Malaysian homes: the 12 checks that catch leaks, pressure problems and fixture wear before they become flooding emergencies.",
    bullets: ["Check all isolation valves operate freely", "Inspect flexible hoses on heaters and washers", "Test water pressure at every tap and shower", "Look for damp patches under sinks and behind toilets"],
    faqs: [
      { q: "What should I check on my plumbing every year?", a: "Isolation valves (turn them on and off), flexible hoses (look for bulging or corrosion), water pressure (consistent across fixtures), and visible pipe joints (dry means healthy, damp means investigate)." },
      { q: "Why do isolation valves matter?", a: "Because when a pipe bursts at 2 a.m., the isolation valve is the difference between a contained repair and a flooded home — valves that have not been turned in years seize when you need them most." },
      { q: "Should flexible hoses be replaced on a schedule?", a: "Yes — stainless braided hoses on water heaters and washing machines should be replaced every 5 years regardless of appearance, because internal deterioration is not visible until the hose bursts." },
      { q: "What water pressure is normal in a Malaysian home?", a: "Typically 2–4 bar at the tap — below 2 bar suggests a supply or pump issue; above 5 bar risks damaging fixtures and flexible hoses. A simple pressure gauge on any tap tells you where you stand." }
    ]
  },
  "ceiling-maintenance-tips": {
    intro: "Ceiling maintenance tips for Malaysian homes: spotting early signs of leaks, sagging and mould before they become expensive repair jobs.",
    bullets: ["Check for water stains after every heavy rain", "Look for hairline cracks at joints and corners", "Monitor downlight areas for heat discolouration", "Address any sagging immediately — it worsens fast"],
    faqs: [
      { q: "What are the first signs of a ceiling problem?", a: "Water stains (yellow or brown rings after rain), hairline cracks at joints, visible sagging between frame points, and mould spots in bathroom ceilings — all signal issues that worsen if ignored." },
      { q: "Can a sagging ceiling collapse?", a: "Yes — a waterlogged gypsum board can detach from the frame without warning. If you see sagging, move furniture and people away from the area and call for inspection the same day." },
      { q: "Should I check my ceiling after every monsoon?", a: "After every heavy rain event, a quick visual check of all ceilings — especially under bathrooms, balconies and roof valleys above — catches leaks while they are small and repairable." },
      { q: "How do I clean mould off a bathroom ceiling?", a: "With a diluted bleach or commercial mould treatment, proper ventilation and protective gear — but if mould returns within weeks, the cause is persistent moisture from a leak or inadequate extraction, not just surface growth." }
    ]
  },
  "waterproofing-recheck-schedule": {
    intro: "A waterproofing recheck schedule for Malaysian properties: when to inspect bathrooms, balconies and roofs before leaks damage the unit below.",
    bullets: ["Bathroom silicone joints checked every 6 months", "Balcony and roof membrane inspected annually", "Ponding test after any renovation work above", "Grout and tile condition monitored for hollow spots"],
    faqs: [
      { q: "How often should bathroom waterproofing be checked?", a: "Silicone joints and grout lines every 6 months; a full ponding test every 2–3 years or after any renovation work that disturbs the floor. Catching a failing joint early prevents the inter-floor leak that costs 10× more." },
      { q: "What does a ponding test involve?", a: "Plugging the drain, flooding the floor to 20–30mm depth, and inspecting the ceiling below at 24 and 72 hours for any moisture or staining — a simple test that confirms whether the membrane is still performing." },
      { q: "Should roof waterproofing be checked before monsoon?", a: "Absolutely — a pre-monsoon inspection of membrane condition, drain clearance and flashing seals is the cheapest insurance against the leaks that monsoon rain finds within days." },
      { q: "Can I re-seal bathroom joints myself?", a: "Yes for surface silicone renewal — clean, dry and apply quality sanitary silicone. But if the joint keeps failing, the substrate behind it may be damp or moving, which needs professional assessment." }
    ]
  },
  "home-handyman-monthly-checklist": {
    intro: "A monthly handyman checklist for Malaysian homes: the small fixes that prevent big problems — doors, locks, mounts, seals and safety anchors.",
    bullets: ["Check door latches and hinges for sag", "Test smoke detector batteries and placement", "Verify furniture anchors on tall bookshelves", "Inspect window locks and grille fixings"],
    faqs: [
      { q: "What should I check around the house every month?", a: "Door operation (latches, hinges, locks), window locks and grilles, furniture anchoring on tall units, smoke detector function, and any wall-mounted items that might have loosened from vibration or humidity." },
      { q: "Why do doors sag in Malaysian homes?", a: "Humidity causes timber to swell and hinges to loosen — a monthly check catches the early sag before the door scrapes the floor or the latch stops engaging, which is when the fix is a five-minute adjustment." },
      { q: "Should tall furniture be anchored to the wall?", a: "Always — bookshelves, wardrobes and TV units taller than 1.2m should be anchored to the wall with rated fixings, especially in homes with children. A tipping bookshelf is a serious safety risk." },
      { q: "How often should smoke detectors be tested?", a: "Monthly — press the test button and verify the alarm sounds. Replace batteries annually (or use 10-year lithium units), and replace the entire detector every 10 years regardless of function." }
    ]
  },
  "rainy-season-home-prep": {
    intro: "Rainy season home preparation for KL & Selangor: the pre-monsoon checks that prevent leaks, flooding and storm damage to your property.",
    bullets: ["Clear roof gutters and downpipe inlets", "Check window seals and weep holes", "Test sump pumps and floor trap flow", "Inspect external paint for cracks and blistering"],
    faqs: [
      { q: "When does monsoon season affect KL homes?", a: "The southwest monsoon (May–September) brings drier weather; the northeast monsoon (November–March) brings the heavy rain events that test your home's waterproofing, drainage and exterior finishes." },
      { q: "What should I check before the rainy season?", a: "Roof gutters and downpipes (clear of leaves and debris), window seals and weep holes (draining freely), external paint condition (cracks let water behind the film), and any known leak points from previous seasons." },
      { q: "Can I waterproof during the rainy season?", a: "Emergency sealing can be done between rain events, but proper membrane application needs dry conditions and curing time — scheduling waterproofing before the monsoon is always the smarter approach." },
      { q: "Should I check my neighbour's drainage too?", a: "If their downpipe or drainage feeds towards your property, yes — shared drainage issues are common in terrace houses, and a blocked neighbour drain can flood your ground floor regardless of your own preparation." }
    ]
  },
  "post-renovation-cleanup-checklist": {
    intro: "A post-renovation cleanup checklist for Malaysian homes: the steps that turn a construction site back into a liveable home — safely and completely.",
    bullets: ["Remove construction dust from all surfaces and vents", "Check all new fixtures operate correctly", "Verify paint touch-ups and silicone seals", "Test all electrical points added during renovation"],
    faqs: [
      { q: "How thorough should post-renovation cleaning be?", a: "Construction dust gets into air conditioning units, electrical sockets, wardrobe tracks and window channels — a proper cleanup addresses all of these, not just visible surfaces, before the family moves back in." },
      { q: "Should I check aircon after renovation?", a: "Yes — construction dust clogs aircon filters and coats the coil, reducing efficiency and air quality. A filter wash and coil check after renovation restores the unit to pre-work condition." },
      { q: "What should I verify before the contractor leaves?", a: "Every fixture operates correctly, every paint touch-up is done, every silicone seal is clean and continuous, every electrical point works, and every surface is clean — this is the punch-list walkthrough that catches issues while the contractor is still responsible." },
      { q: "How long does post-renovation cleaning take?", a: "For a standard terrace house renovation, 1–2 days of thorough cleaning including aircon servicing, window track cleaning and vent dusting — budget cleaning leaves construction dust circulating for weeks." }
    ]
  },
  "condo-maintenance-checklist": {
    intro: "A condo maintenance checklist for Malaysian high-rise living: the items specific to strata properties that JMB rules and shared systems add to your home upkeep.",
    bullets: ["Check unit isolation valves and stopcocks", "Inspect balcony drainage and waterproofing", "Verify smoke detectors and fire-rated doors", "Review JMB maintenance schedule for shared systems"],
    faqs: [
      { q: "What maintenance is unique to condo living?", a: "Unit isolation valves (your emergency water shutoff), balcony drainage (your leak becomes the neighbour's ceiling), fire-rated doors (required by strata rules), and JMB-scheduled works that affect your unit's access." },
      { q: "Am I responsible for pipes inside my condo walls?", a: "Generally yes — pipes within your unit's boundary are your responsibility, while risers and common-area pipes belong to the JMB. Check your strata plan for the exact boundary, because it decides who pays for leaks." },
      { q: "Should I coordinate with JMB before renovations?", a: "Always — most condos require renovation notification, working hour restrictions, lift booking and debris routing approval. Starting without JMB coordination risks fines and work stoppages." },
      { q: "How often should I check my balcony waterproofing?", a: "Every 6 months for visible cracks in the screed or tile, and annually for drainage flow — a blocked balcony drain during heavy rain can flood your living room and the unit below simultaneously." }
    ]
  },
  "landed-house-maintenance-calendar": {
    intro: "A landed house maintenance calendar for Malaysian terrace, semi-D and bungalow owners: monthly, quarterly and annual tasks organised by season.",
    bullets: ["Monthly: gutters, drains, door and window checks", "Quarterly: aircon service, paint touch-ups, pest check", "Pre-monsoon: roof inspection, waterproofing recheck", "Annual: full plumbing audit, electrical safety check"],
    faqs: [
      { q: "What maintenance does a landed house need that a condo doesn't?", a: "Roof and gutter maintenance, external paint and waterproofing, boundary wall and gate upkeep, external drainage and perimeter pest control — all items that the JMB handles for condo owners." },
      { q: "How often should I clean my gutters?", a: "Monthly during leaf-fall seasons and after storms; quarterly at minimum. Blocked gutters overflow onto fascia boards and into ceiling spaces, causing the water damage that monsoon rain then finds." },
      { q: "Should I service my roof before monsoon?", a: "Yes — a pre-monsoon roof inspection checks tiles, ridges, flashings and valley gutters for the defects that wind-driven rain exploits. A RM 200 inspection prevents a RM 5,000 ceiling repair." },
      { q: "How often should a landed house be repainted?", a: "Exterior every 5–7 years depending on exposure; interior every 5–8 years. Tropical UV and rain degrade exterior paint faster than temperate climates, making the repaint cycle shorter." }
    ]
  },
  "rental-property-turnover-checklist": {
    intro: "A rental property turnover checklist for Malaysian landlords: the between-tenant maintenance that protects your property and speeds up the next tenancy.",
    bullets: ["Full electrical safety check and RCD test", "Plumbing fixture inspection and flexible hose replacement", "Lock re-key or cylinder change for security", "Paint touch-up and deep clean for viewing-ready condition"],
    faqs: [
      { q: "What should a landlord fix between tenants?", a: "Locks (re-key or change cylinders), electrical safety (RCD test, socket condition), plumbing fixtures (taps, hoses, toilet mechanisms), paint condition and deep cleaning — these are the items that affect both safety and rental appeal." },
      { q: "Should I change locks between tenants?", a: "Always — you do not know how many copies of the old keys exist. A re-key is affordable; a break-in report from a former key holder is not. Digital locks make this even easier with code changes." },
      { q: "How do I document the property condition?", a: "Photograph every room, fixture and fitting with date stamps before the new tenant moves in, and keep the photos with the tenancy agreement. This is your evidence for deposit deductions at the end of the tenancy." },
      { q: "Should I service aircons between tenants?", a: "Yes — a chemical wash and gas check between tenants ensures the new tenant inherits a functioning unit, and the service record protects you if the tenant later claims the aircon was faulty on move-in." }
    ]
  }
};

// ─── Seasonal Pages (8) ─────────────────────────────────────────────────────

export const seasonalCopy: Record<string, Batch2PodCopy> = {
  "home-prep-rainy-season-kl": {
    intro: "Prepare your KL & Selangor home for the rainy season: a timed checklist of roof, drainage, waterproofing and exterior checks before the monsoon arrives.",
    bullets: ["Roof and gutter clearance before November", "Window seal and weep hole inspection", "External paint crack sealing", "Balcony and planter drainage verification"],
    faqs: [
      { q: "When should I start preparing for monsoon season?", a: "By October — the northeast monsoon typically brings heavy rain from November through March, and waterproofing, roof repair and drainage work needs dry weather to cure properly before the rain arrives." },
      { q: "What is the single most important pre-monsoon check?", a: "Roof gutters and downpipes — a blocked gutter overflows onto fascia boards and into ceiling spaces during heavy rain, causing damage that a 30-minute cleanup would have prevented." },
      { q: "Can I waterproof during the rainy season?", a: "Emergency sealing between rain events is possible, but proper membrane systems need 2–3 dry days for application and curing — scheduling before the monsoon is always cheaper and more reliable." },
      { q: "Should I check my neighbour's drainage too?", a: "In terrace houses, yes — shared drainage, boundary walls and connected rooflines mean your neighbour's blocked downpipe can flood your property. A friendly conversation before the monsoon prevents disputes during it." }
    ]
  },
  "painting-dry-season-tips": {
    intro: "Dry season painting tips for KL & Selangor homes: why the drier months are the ideal window for exterior repainting and how to plan the project.",
    bullets: ["Exterior painting best in drier months (May–September)", "Allow proper curing between coats in tropical heat", "Schedule around afternoon thunderstorms", "Book painters 4–6 weeks ahead in peak season"],
    faqs: [
      { q: "Why paint during the dry season?", a: "Exterior paint needs dry conditions for proper adhesion and curing — rain on a fresh coat causes blistering, poor adhesion and colour inconsistency. The drier months (typically May–September) give the most reliable painting window." },
      { q: "Can interior painting happen during the rainy season?", a: "Yes — interior painting is not weather-dependent, though ventilation and drying time need managing in humid conditions. Dehumidifiers and fans help cure paint properly when windows must stay closed." },
      { q: "How far ahead should I book a painter?", a: "4–6 weeks during peak dry season — professional painters are busiest when the weather is best, and last-minute bookings often mean less experienced teams or rushed preparation." },
      { q: "What if it rains during my exterior paint job?", a: "A professional painter monitors weather forecasts and pauses work before rain arrives — fresh paint needs 2–4 hours minimum before rain exposure, and a good contractor builds weather contingencies into the schedule." }
    ]
  },
  "waterproofing-pre-monsoon-checklist": {
    intro: "A pre-monsoon waterproofing checklist for Malaysian homes: the inspections and repairs that prevent the leaks monsoon rain will find within days.",
    bullets: ["Bathroom and balcony ponding tests", "Roof membrane and flashing inspection", "Silicone joint condition on all wet areas", "Drain clearance and flow verification"],
    faqs: [
      { q: "What waterproofing checks should I do before monsoon?", a: "Ponding tests on bathrooms and balconies, visual inspection of roof membrane and flashings, silicone joint condition in showers and around windows, and drain flow tests on every outlet — these catch the failures that rain exploits." },
      { q: "Can I fix waterproofing issues during the monsoon?", a: "Emergency measures (silicone renewal, drain clearing) can be done between rain events, but membrane repairs and full system replacements need dry conditions — the pre-monsoon window is when the real work gets done." },
      { q: "How do I test my bathroom waterproofing?", a: "Plug the drain, flood the floor to 20–30mm, and check the ceiling below at 24 and 72 hours. Any moisture or staining means the membrane needs attention before the monsoon puts it under sustained pressure." },
      { q: "Should I re-seal silicone joints as preventive maintenance?", a: "Yes — bathroom and balcony silicone joints degrade every 2–3 years in Malaysian humidity. Renewing them before they fail is the cheapest waterproofing maintenance you can do." }
    ]
  },
  "chinese-new-year-home-repaint-guide": {
    intro: "Chinese New Year home repaint guide for KL & Selangor: timing, colour choices and booking windows for a fresh home before the festive season.",
    bullets: ["Book painters 6–8 weeks before CNY", "Choose auspicious colours or neutral palettes", "Plan room-by-room to keep the home liveable", "Allow 2 weeks curing before festive gatherings"],
    faqs: [
      { q: "When should I book a CNY repaint?", a: "6–8 weeks before Chinese New Year — the pre-CNY period is the busiest painting season in Malaysia, and late bookings mean rushed preparation or less experienced teams." },
      { q: "What colours are popular for CNY repaints?", a: "Red feature walls for prosperity symbolism, warm golds and creams for living areas, and fresh whites for a clean-start feel — but the best colour is one you enjoy year-round, not just during the festival." },
      { q: "Can I repaint just the living room for CNY?", a: "Yes — a single-room refresh takes 2–3 days and transforms the space your guests see most. Focus on the living room, dining area and entrance hallway for maximum festive impact." },
      { q: "How long before CNY should painting finish?", a: "At least 2 weeks — paint needs time to fully cure and off-gas before the home fills with guests, food and incense. Rushing from fresh paint to festive gathering means living with the smell." }
    ]
  },
  "raya-home-makeover-checklist": {
    intro: "Hari Raya home makeover checklist for KL & Selangor: the timed plan for painting, repairs and deep cleaning before the festive open house season.",
    bullets: ["Start planning 8–10 weeks before Raya", "Prioritise guest-facing rooms first", "Combine painting with minor repairs in one visit", "Book deep cleaning for the final week before Raya"],
    faqs: [
      { q: "When should I start my Raya makeover?", a: "8–10 weeks before Hari Raya — painting takes 1–2 weeks including booking, repairs and touch-ups need another week, and deep cleaning happens in the final week. Starting late means cutting corners." },
      { q: "Which rooms should I prioritise for Raya?", a: "Living room, dining area, entrance hallway and guest bathroom — these are the spaces visitors see and judge. Bedrooms and private areas can wait for a less busy season." },
      { q: "Can I combine painting and repairs in one project?", a: "Yes — a coordinated plan that does repairs first (patching, fixing, filling) and painting last is more efficient than separate bookings. Many contractors offer combined Raya packages." },
      { q: "Should I deep clean before or after painting?", a: "After — painting creates dust and drips that undo any prior cleaning. The sequence is repairs, painting, then deep cleaning in the final days before your first open house." }
    ]
  },
  "year-end-renovation-planning": {
    intro: "Year-end renovation planning for KL & Selangor homes: how to use the December–January window for projects that finish before the next busy season.",
    bullets: ["Plan and quote in November, start in December", "Use the quieter period for structural and wet works", "Coordinate with condo management on holiday closures", "Target completion before CNY and Raya rush"],
    faqs: [
      { q: "Is year-end a good time to renovate?", a: "December–January is often quieter for contractors, meaning better availability and attention — but building material suppliers and condo management offices may close for holidays, which needs factoring into the timeline." },
      { q: "How far ahead should I plan a year-end renovation?", a: "Start quoting in October–November so the scope, materials and schedule are locked before December. Renovations that start without a fixed plan in December often drift into February and beyond." },
      { q: "Can I renovate during condo holiday closures?", a: "Check with your JMB — many condos restrict renovation work during major holiday periods (CNY, Raya, Christmas, Deepavali), and working through a closure period risks fines and neighbour complaints." },
      { q: "What renovations suit the year-end window?", a: "Interior projects that do not depend on weather — kitchen and bathroom renovations, ceiling work, flooring and painting. External works are better scheduled in the drier months." }
    ]
  },
  "hari-raya-painting-promo": {
    intro: "Hari Raya painting planning for KL & Selangor: how to book early, choose colours and time your repaint for a fresh home before the festive open houses.",
    bullets: ["Book 6–8 weeks before Raya for best availability", "Choose colours that photograph well for social media", "Combine interior refresh with minor wall repairs", "Schedule completion 2 weeks before your first open house"],
    faqs: [
      { q: "When is the best time to book Raya painting?", a: "6–8 weeks before Hari Raya — the pre-Raya painting rush fills contractors' schedules fast, and late bookings often mean less preparation time or less experienced teams." },
      { q: "What colours work well for Raya open houses?", a: "Warm neutrals (cream, soft grey, warm white) photograph well and suit festive décor; bold feature walls in deep green or gold add character without overwhelming the space." },
      { q: "Can I repaint just the guest-facing areas?", a: "Yes — living room, dining area, entrance and guest bathroom are the spaces visitors see. A focused refresh on these areas delivers maximum impact at a fraction of a full-house repaint." },
      { q: "How long does paint take to cure before guests arrive?", a: "Modern low-VOC paints are touch-dry in hours but fully cure in 2–4 weeks. For the best finish and minimal odour during your open house, finish painting at least 2 weeks before your first event." }
    ]
  },
  "monsoon-leak-emergency-guide": {
    intro: "Monsoon leak emergency guide for KL & Selangor homes: immediate steps when heavy rain finds your roof, ceiling or wall leak — before the damage spreads.",
    bullets: ["Move furniture and electronics from the leak area", "Contain water with buckets and towels", "Photograph the damage for insurance claims", "Call for emergency sealing between rain events"],
    faqs: [
      { q: "What should I do first when a leak starts during rain?", a: "Protect the contents — move furniture, electronics and valuables away from the water, place buckets and towels to contain the flow, and photograph everything for insurance before touching anything." },
      { q: "Can a leak be fixed while it's raining?", a: "Emergency tarping and internal containment can happen immediately; permanent repairs need the surface to dry. A professional can apply temporary sealant between rain events to reduce damage until the full fix." },
      { q: "Should I call my insurance before or after the repair?", a: "Before any permanent repair — photograph the damage, the leak source and any affected contents, then notify your insurer. Repairs done before the insurance assessment may not be covered." },
      { q: "How do I prevent the same leak next monsoon?", a: "After the emergency is resolved, a full roof or membrane inspection identifies the root cause — emergency sealing is a temporary measure, and the permanent repair should be scheduled during the next dry window." }
    ]
  }
};

// ─── Top Pages (10) ─────────────────────────────────────────────────────────

export const topCopy: Record<string, Batch2PodCopy> = {
  "best-house-painters-kl-2026": {
    intro: "How to compare house painters in KL for 2026: the criteria that separate a professional repaint from a rushed job — pricing, prep, warranty and finish quality.",
    bullets: ["Itemised quotes with prep, primer and topcoat listed", "Documented preparation including crack filling and sanding", "Written warranty covering peeling and blistering", "Consistent finish under natural and artificial light"],
    faqs: [
      { q: "What makes a painter professional versus average?", a: "Documented preparation (photos of crack filling, sanding and priming before topcoat), itemised quotes that name every material, written warranties, and a finish that looks consistent under both sunlight and downlighting." },
      { q: "Should I compare painters on price per room?", a: "Price is one factor, but a cheap quote that skips primer or uses fewer coats costs more in the long run — compare the full system (prep, primer, coats, warranty) rather than the bottom line alone." },
      { q: "How many quotes should I get?", a: "Three is the practical number — enough to see the range without analysis paralysis. If all three quotes describe the same scope and materials, the middle-priced one is usually the safest choice." },
      { q: "Can I trust online reviews for painters?", a: "Reviews help, but verified before-and-after photos of preparation stages tell you more — a painter who documents their prep work is one who actually does it consistently." }
    ]
  },
  "best-plumbers-kl": {
    intro: "How to compare plumbers in KL: diagnostic ability, material quality, isolation knowledge and warranty terms — the criteria that matter beyond price.",
    bullets: ["Diagnostic approach before recommending solutions", "SIRIM-certified materials named in the quote", "Isolation valve knowledge and shutdown planning", "Written warranty covering joints and workmanship"],
    faqs: [
      { q: "How do I tell a good plumber from a bad one?", a: "A good plumber describes how they will find the problem before recommending a fix; a bad one starts with the solution before diagnosing. The diagnostic approach — pressure testing, acoustic checks, visual inspection — reveals competence." },
      { q: "Should a plumber explain what they're doing?", a: "Yes — a professional plumber walks you through the diagnosis, explains the repair options and shows you the isolation points. A plumber who works silently and hands you a bill is not building the relationship you need for the next emergency." },
      { q: "Is the cheapest plumber the worst choice?", a: "Not always, but a quote significantly below market usually means corners on materials, skipped prep, or no warranty — the cheapest plumber is expensive when the repair fails and floods the unit below." },
      { q: "Should a plumber be available for emergencies?", a: "For existing customers, yes — a plumber who knows your system and has your records can respond faster and fix more accurately than a new contact found at 2 a.m." }
    ]
  },
  "best-ceiling-contractors-kl": {
    intro: "How to compare ceiling contractors in KL: framing quality, board systems, joint finishing and warranty — the technical criteria that determine whether your ceiling lasts.",
    bullets: ["Frame spacing to manufacturer specification", "Joint reinforcement and multi-coat finishing", "Downlight coordination planned before boarding", "Written warranty on sagging and cracking"],
    faqs: [
      { q: "What should I ask a ceiling contractor before hiring?", a: "Frame spacing (400–450mm for standard boards), joint system (reinforced tape with multi-coat compound), downlight coordination (positions marked before boarding), and warranty terms (minimum 12 months, up to 10 for premium systems)." },
      { q: "How do I verify a contractor's framing quality?", a: "Ask to see the framing before the boards go up — a professional contractor welcomes this inspection, because proper spacing and fixing patterns are visible proof of quality that disappears once the boards are on." },
      { q: "Should I compare quotes on board brand alone?", a: "No — the frame, jointing system and finishing quality matter as much as the board brand. A premium board on a poorly spaced frame with one-coat joints will crack just as fast as a basic board." },
      { q: "What warranty should a ceiling carry?", a: "Standard gypsum board: 12 months minimum on workmanship. Premium plaster ceiling: up to 10 years on sagging and cracking. The warranty should be written on the invoice with the system specification it covers." }
    ]
  },
  "best-waterproofing-contractors-kl": {
    intro: "How to compare waterproofing contractors in KL: diagnostic honesty, test-before-fix discipline, warranty scope and neighbour coordination.",
    bullets: ["Leak diagnosis documented before solution proposed", "Ponding test included in every wet-area scope", "Warranty covers re-leak, not just materials", "Neighbour access and coordination included"],
    faqs: [
      { q: "How do I know a waterproofing contractor is honest?", a: "They test before they sell — a water ponding test, membrane condition check, and documented diagnosis before recommending injection, surface coating or full membrane. A contractor who recommends a solution without testing is guessing." },
      { q: "Should the warranty cover the neighbour's ceiling?", a: "The warranty should cover the waterproofing system against re-leak — damage to the neighbour's ceiling from a previous leak is typically handled through insurance, not the waterproofing warranty." },
      { q: "Is no-hack waterproofing always a scam?", a: "No — PU injection and surface coatings work for specific problems. The scam is selling no-hack for every problem, including failed membranes that need full replacement. The diagnosis determines the method, not the contractor's preference." },
      { q: "How many quotes should I get for waterproofing?", a: "At least two — if one says injection and the other says full membrane, ask both to show you the evidence for their recommendation. The contractor who tests and documents wins over the one who quotes without looking." }
    ]
  },
  "best-handyman-kl": {
    intro: "How to compare handyman services in KL: wall-type knowledge, load-rated fixings, insurance and warranty — the checks that separate a fix from a failure.",
    bullets: ["Wall type identified before any drilling", "Fixings rated for the actual load being mounted", "Public liability insurance for your protection", "Written warranty on mounting and repair work"],
    faqs: [
      { q: "What makes a handyman service professional?", a: "They identify the wall type before drilling, select fixings rated for the load, carry public liability insurance and offer a written warranty — these four checks separate a professional from a cowboy with a drill." },
      { q: "Should a handyman explain their approach?", a: "Yes — a professional describes what they found (wall type, stud position, load path) and what they will use (anchor type, fixing pattern) before starting. Silence and immediate drilling is the sign of an amateur." },
      { q: "Is insurance really necessary for small jobs?", a: "Yes — a TV falling off a wall-mounted bracket can injure someone, damage flooring and crack tiles. Without the handyman's public liability insurance, every cost lands on you." },
      { q: "How do I verify a handyman's quality?", a: "Ask for photos of their mounting work — the fixing pattern, anchor type and wall condition after the job. A professional documents their work; a cowboy does not." }
    ]
  },
  "best-paint-brands-malaysia-2026": {
    intro: "Paint brands in Malaysia for 2026: a practical guide to Nippon, Dulux, Jotun and the brands that earn their place on your quote — by application, not loyalty.",
    bullets: ["Interior stain resistance: Nippon Spot Less Plus vs Dulux EasyClean", "Exterior durability: Jotun Jotashield vs Dulux Weathershield", "Budget range: local brands for rental and utility areas", "Primer and sealer systems matched to the topcoat brand"],
    faqs: [
      { q: "Which paint brand is best for Malaysian homes in 2026?", a: "There is no single best — Nippon leads on stain-resistant interiors, Jotun on heat-reflective exteriors, and Dulux competes closely on both. The right brand depends on which room or surface you are painting." },
      { q: "Are premium paints worth the cost?", a: "For high-traffic interiors and exposed exteriors, yes — premium ranges last longer, resist marks better and need fewer coats. For storerooms and rental units, the budget range delivers adequate performance at lower cost." },
      { q: "Can I use different brands in different rooms?", a: "Yes — many homeowners use premium paint in living areas and bedrooms, and budget paint in utility spaces. Just keep the primer and topcoat from the same brand within each room for the system warranty." },
      { q: "How do I verify paint quality on site?", a: "Check that tints arrive sealed from the brand's authorised tinting centre, with batch numbers matching — shop-mixed tints from general hardware stores vary more in colour consistency." }
    ]
  },
  "best-waterproofing-methods-malaysia": {
    intro: "Waterproofing methods in Malaysia compared: PU injection, cementitious coating, torch-on membrane and liquid-applied systems — which one suits your specific leak.",
    bullets: ["PU injection for active cracks from the negative side", "Cementitious coating for under-tile bonded membranes", "Torch-on membrane for exposed roofs and decks", "Liquid-applied for complex shapes and detailing"],
    faqs: [
      { q: "Which waterproofing method lasts the longest?", a: "Torch-on membrane on exposed surfaces carries 10+ year warranties; cementitious under-tile systems last 10–15 years; PU injection carries 1–2 years. The method must match the problem for any warranty to hold." },
      { q: "Is there a one-size-fits-all waterproofing method?", a: "No — the right method depends on the leak location, substrate condition, access constraints and whether the surface will be tiled or exposed. A contractor who offers only one method for every problem is selling, not solving." },
      { q: "Can I combine waterproofing methods?", a: "Yes — PU injection to stop an active leak, followed by surface membrane on the positive side for long-term prevention, is a common two-stage approach for inter-floor leaks where both sides are accessible." },
      { q: "How do I know which method my leak needs?", a: "A professional diagnosis that includes water testing, membrane condition assessment and substrate inspection — not a recommendation made before the contractor has seen the problem." }
    ]
  },
  "bathroom-waterproofing-options": {
    intro: "Bathroom waterproofing options for Malaysian homes: from silicone joint renewal to full membrane replacement — what each option fixes and what it costs.",
    bullets: ["Silicone joint renewal: cheapest, treats surface seals only", "PU injection: seals active cracks without tile removal", "Surface membrane: coats over existing tiles when substrate is sound", "Full membrane: removes tiles, replaces the waterproof layer"],
    faqs: [
      { q: "What is the cheapest way to fix a bathroom leak?", a: "Silicone joint renewal and grout re-sealing — if the leak is at the shower-wall junction or around the drain, fresh silicone and grout may solve it for under RM 200. But if the membrane has failed, this is a temporary patch." },
      { q: "When is full membrane replacement the only option?", a: "When the membrane under the tiles is torn, delaminated or aged beyond repair — no injection or surface coating fixes a membrane that no longer exists. The honest contractor shows you the evidence before recommending demolition." },
      { q: "Can I waterproof over existing tiles?", a: "In some cases — liquid-applied membranes can be coated over sound existing tiles, but this raises the floor level, affects door clearances and only works when the substrate beneath the tiles is structurally sound." },
      { q: "How long does a bathroom waterproofing job take?", a: "Silicone renewal: hours. PU injection: 1–2 days. Surface membrane over tiles: 2–3 days. Full membrane replacement with tile relaying: 5–7 days including curing and ponding test." }
    ]
  },
  "ceiling-materials-malaysia": {
    intro: "Ceiling materials in Malaysia compared: gypsum board, plaster systems, cement board and metal — which one suits your room, budget and design intent.",
    bullets: ["Gypsum board: standard for dry living areas", "Moisture-resistant board: bathrooms and kitchens", "Plaster ceiling: premium seamless finish with cove lighting", "Cement board: wet areas and exterior soffits"],
    faqs: [
      { q: "Which ceiling material is best for a bathroom?", a: "Moisture-resistant gypsum board (green-faced) or cement board — standard board absorbs moisture and sags within months in a Malaysian bathroom. The board type must be specified in the quotation." },
      { q: "Is plaster ceiling worth the premium?", a: "For living rooms and master bedrooms with cove lighting, yes — the seamless finish and 10-year warranty justify the 30–50% cost premium. For utility rooms and rental units, gypsum board delivers adequate performance at lower cost." },
      { q: "Can I use gypsum board outdoors?", a: "Not standard gypsum — exterior soffits and covered outdoor areas need cement board or exterior-rated gypsum with weatherproof finishing. Using standard board outdoors is a guarantee of early failure." },
      { q: "How do I choose between ceiling materials?", a: "Room function decides: dry living areas get standard board, wet areas get MR or cement board, feature ceilings get the plaster system. The contractor should recommend based on the room, not on what is cheapest to install." }
    ]
  },
  "handyman-services-every-homeowner-needs": {
    intro: "Useful handyman services for Malaysian homeowners: the mounting, fixing and repair jobs that improve daily life — and when to call a professional versus DIY.",
    bullets: ["TV and shelf mounting with wall-type assessment", "Door and lock adjustment for smooth operation", "Furniture assembly with safety anchoring", "Minor plumbing and electrical fixture swaps"],
    faqs: [
      { q: "What handyman jobs can I DIY safely?", a: "Simple shelf mounting on solid walls, furniture assembly, door hinge adjustment and silicone renewal — jobs that do not involve structural drilling, electrical wiring or plumbing connections behind walls." },
      { q: "When should I call a professional handyman?", a: "For TV mounting on plasterboard, heavy mirror hanging, door lock changes, any electrical or plumbing work behind walls, and anything above 2m height where a fall would be serious." },
      { q: "How do I batch multiple handyman jobs efficiently?", a: "Send a list with photos and rough dimensions — a professional handyman prices it as one visit plan, completing all items in a single scheduled window. This is more efficient than booking separate visits for each job." },
      { q: "What should a handyman visit include?", a: "Wall-type identification before drilling, load-rated fixings for every mount, protection of floors and furniture, cleanup before exit, and a written record of what was done and what warranty applies." }
    ]
  }
};
