// AUTO-AUTHORED — P2-C3 deep fix, batch 1: per-service commercial &
// residential pod bodies. One intent-correct entry per service per family —
// no shared guidance paragraphs, no cross-family "homes" copy on commercial
// pages. `scripts/validate-content-pods.ts` (prebuild) fails if a service
// lacks an entry, if intros repeat within a family, or if the wrong-audience
// strings this batch removed ever come back.

export type PodCopy = {
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export const commercialCopy: Record<string, PodCopy> = {
  "painting": {
    intro: "Offices, shoplots and showrooms repainted after hours with low-odour systems, brand-colour matching and clean handover before trading resumes.",
    bullets: ["Weekend and night-shift scheduling", "Low-VOC, fast-cure paint systems", "Brand-colour and wayfinding matching", "Floor and fixture protection plans"],
    faqs: [
      { q: "Can you paint while our office is occupied?", a: "Yes — works are phased zone by zone with night or weekend shifts, low-odour paint and full masking, so teams keep working while each floor is finished and handed over." },
      { q: "Do you handle strata or JMB approvals?", a: "Common-area and shoplot repainting comes with scope, hours and worker details for your JMB or management submission. We prepare the paperwork and work inside the approved windows." },
      { q: "How is commercial painting priced?", a: "By measured area, finish spec, access needs and working hours — one fixed itemised figure per phase, reviewed with your facility or fit-out team before work starts." },
      { q: "Do you handle strata common areas?", a: "Yes — corridors, lobby edges and back-of-house paint programs run under the same approval and access discipline, with one point of contact for the management office." }
    ]
  },
  "plumbing": {
    intro: "Commercial plumbing for F&B units, offices and strata plant rooms: leak isolation, riser and washroom repairs, pump work and manager-ready documentation.",
    bullets: ["Bay-by-bay isolation, no all-day shutdowns", "Riser, soil-stack and trap-arm repairs", "Pump and booster swaps for shoplots", "Photo-documented closeout for JMB files"],
    faqs: [
      { q: "Can repairs run without closing the unit?", a: "For most repairs yes. Supply is isolated bay by bay, noisy or shutdown-dependent works move to after trade hours, and full isolations are agreed with you in advance." },
      { q: "What paperwork comes with the job?", a: "Itemised scope, before-and-after photos, warranty terms and an invoice shaped for JMB or landlord records — every repair traceable to the riser or fixture it touches." },
      { q: "Do you handle commercial leak emergencies?", a: "Priority routing for burst risers, flooded floors and failed pumps: we attend, isolate, dry and document, then quote the permanent repair while the unit stays protected." },
      { q: "Can you work to our facilities schedule?", a: "Works slot into your maintenance windows — riser isolation, noise hours and lift bookings are agreed against your schedule before mobilising." }
    ]
  },
  "ceiling": {
    intro: "Gypsum ceilings and partitions for offices and retail — laser-level framing, MEP access panels, tidy board schedules and after-hours installation.",
    bullets: ["Grid ceilings, bulkheads and partitions", "Access panels coordinated to MEP runs", "Board schedules matched to your spec", "Out-of-hours install and demolition"],
    faqs: [
      { q: "Can ceilings install while the office operates?", a: "Yes. Works split into zones scheduled nights or weekends; demolition is vacuumed continuously and each zone is handed over sealed and painted before the next one opens." },
      { q: "How are downlights and sprinklers coordinated?", a: "Setting-out is marked against your lighting and sprinkler layout before boards go up; cut-outs are reinforced, and access panels are placed on the plant lines that actually need them." },
      { q: "Is there a warranty on commercial ceiling work?", a: "Yes — 90 days on ceiling workmanship covering sagging and crack-free handover, recorded on the invoice, with board and frame material handled per the agreed schedule." },
      { q: "Can ceilings go in while the office runs?", a: "Yes. Works split into zones scheduled nights or weekends; demolition is vacuumed continuously and each zone is handed over sealed and painted before the next one opens." }
    ]
  },
  "waterproofing": {
    intro: "Warehouse roofs, podium decks and planter boxes: torch-on membranes, PU injection and ponding tests, documented for landlord handover and warranty claims.",
    bullets: ["Torch-on and PU membrane systems", "Expansion joints and upstands detailed", "Flood testing before handover", "Warranty documentation for owners"],
    faqs: [
      { q: "Can works run while tenants are below?", a: "Wet works are sequenced bay by bay with temporary protection underneath where needed, and the schedule is agreed with management so trading areas are exposed for hours, not days." },
      { q: "What does the 5-year warranty cover?", a: "Membrane systems carry up to a 5-year written leak-free guarantee on workmanship and the installed system, recorded on your invoice with the scope, areas and test results attached." },
      { q: "How do you prove the leak is fixed?", a: "A pre-and-post flood test with timed photos, plus the repair map of every joint, crack and penetration treated — the record you can hand to a landlord or insurer without extra work." },
      { q: "What happens if a leak recurs inside warranty?", a: "Reported leaks are re-attended and tested under the written warranty terms, with the original repair map and photos used to re-check the exact details first." }
    ]
  },
  "handyman": {
    intro: "One work order, one tidy visit: signage and screen mounting, door and furniture fixes, anchor checks and wall repairs for offices and shoplots — after hours on request.",
    bullets: ["Multi-item work orders in one visit", "Stud and anchor checks on every mount", "Protection laid, site swept on exit", "Evening and weekend slots available"],
    faqs: [
      { q: "Can you batch our punch-list items?", a: "Yes — send the list with photos and we price it as one fixed visit plan. Mounting, hanging, patching and tuning all happen in a single scheduled window where access allows." },
      { q: "Do you work after office hours?", a: "Common. Night and weekend slots cover lobby, meeting-room and retail-floor jobs where daytime disruption is unacceptable to tenants or customers." },
      { q: "Is commercial handyman work insured?", a: "Every visit is covered under our public liability insurance, and the work-order invoice doubles as the record facility managers ask for after works in common areas." },
      { q: "Can you work from a punch list?", a: "Send the list with photos and rough dimensions; we price it as one visit plan, complete it in order, and photograph anything that needed a change." }
    ]
  },
  "house-renovation": {
    intro: "Office and F&B fit-out refurbishment for Klang Valley tenancies: knock-down, rebuild and finishing sequenced around landlord clauses and opening-day deadlines.",
    bullets: ["Phased to protect the opening date", "MEP coordination with your consultants", "Fixed itemised scope before strip-out", "Handover packs for landlord sign-off"],
    faqs: [
      { q: "Can a fit-out finish on our tenancy deadline?", a: "That is the planning constraint from day one: scope, sequence and long-lead items are agreed before demolition, and the programme is built backwards from your handover date." },
      { q: "Do you work with our landlord's requirements?", a: "Yes — JMB or management submissions, working-hour rules and make-good conditions are written into the programme, and daily closeouts keep common areas clean and protected." },
      { q: "What does the quotation include?", a: "Every trade, material schedule and protection plan in one fixed, itemised figure — no provisional sum games after the site opens." },
      { q: "Who manages multiple trades on site?", a: "One site lead per programme — trades are sequenced daily against the agreed schedule, and you receive a written day-end status so nobody waits on nobody." }
    ]
  },
  "electrical": {
    intro: "Commercial electrical for units and offices: dedicated appliance circuits, DB upgrades, ST-licensed wiremen and test records your management office will accept.",
    bullets: ["ST-registered wiremen on every job", "Load surveys before capacity promises", "Dedicated circuits for heavy appliances", "Labelling and test sheets at handover"],
    faqs: [
      { q: "Are your electricians licensed for commercial work?", a: "Electrical works are carried out by wiremen registered with Suruhanjayan Tenaga, with permits handled where the premises require them, so the work is legal, insurable and certifiable." },
      { q: "Can we add circuits without a full DB change?", a: "Often yes — a load and board survey decides. If spare ways and capacity exist, we add and protect the circuit properly; if not, a staged DB upgrade is quoted honestly instead." },
      { q: "Do night works cost extra?", a: "After-hours scheduling is priced into the fixed quote as planned shift work — no surprise surcharge at invoice time for closing a trading unit." },
      { q: "Can works run without a full shutdown?", a: "Boards and panels are isolated per circuit with a planned outage window per floor or unit; where a total shutdown is unavoidable, it is scheduled and stated in the quote." }
    ]
  },
  "water-heater": {
    intro: "Pantry and staff-quarter hot water for offices, salons and F&B back-of-house: heater supply, dedicated points and descaling cycles scheduled around trade.",
    bullets: ["Instant and storage units supplied", "Dedicated points with isolators fitted", "Descaling plans for hard-water sites", "Servicing without closing the unit"],
    faqs: [
      { q: "Can servicing happen while we trade?", a: "Yes — unit swaps go in during closed hours, and multi-unit sites are serviced one heater at a time so the pantry keeps running throughout." },
      { q: "Which heaters do you install?", a: "The common Malaysian brands our teams fit and maintain — instant and storage types — on correctly sized dedicated circuits with verified earthing and RCCB protection." },
      { q: "What warranty covers commercial installs?", a: "12 months of installation workmanship warranty, with the manufacturer's warranty passing through in writing on your invoice for the unit itself." },
      { q: "Do descaling visits need the unit closed?", a: "No — servicing and descaling run one heater at a time on a rotating plan, so staff quarters and pantries always have hot water." }
    ]
  },
  "ceiling-fan": {
    intro: "Showroom, classroom and workshop fans: high-mount installs, balancing and regulator checks — with double-height spaces scheduled out of trading hours.",
    bullets: ["Structural-rated mounting on slab and beams", "Balance and wobble testing at speed", "Regulator and remote systems fitted", "Ladders and lifts planned for height"],
    faqs: [
      { q: "Can high ceilings be done safely?", a: "Double-height spaces get a proper access plan — towers or lifts, isolation of the lighting circuit, and two-person fixing — quoted as part of the scope, not improvised on arrival." },
      { q: "Do you service fans we already own?", a: "Yes — bearing noise, wobble, downrod and bracket checks, regulator replacement and cleaning, per unit or bundled into one site visit." },
      { q: "Is mounting on a roof deck safe for fans?", a: "Where the structure allows, we anchor through rated fixings with backing plates rather than friction plugs alone, and say so plainly when a site needs the ceiling opened first." },
      { q: "Can fan maintenance join our existing contract?", a: "Yes — per-unit or bundled visits slot into facility schedules; we log readings and next-window dates on a dated card your FM team can audit." }
    ]
  },
  "lighting": {
    intro: "Downlight grids, track heads and LED retrofits for retail and offices: energy-first relamping, driver swaps and high-level maintenance scheduled around trading.",
    bullets: ["Full-floor LED retrofit planning", "Track and display lighting alignment", "Driver and gear stock kept on unit", "Night works for public spaces"],
    faqs: [
      { q: "Can you cut our electricity bill?", a: "Often yes — a room-by-room relamp to matched LED fittings with correct colour temperature, plus removal of failed magnetic ballasts, is priced against measured payback, not promises." },
      { q: "How is display lighting aimed correctly?", a: "Track heads are set against your fixtures and product lines during a styled walkthrough, so retail light lands on the display and not the aisle glare." },
      { q: "What about failed lights after hours?", a: "Frequent gear fails in batches; we pre-stage matching drivers and fittings on site so a swap is minutes of a scheduled night visit, not a relay of emergency call-outs." },
      { q: "What happens to removed fittings?", a: "Old tubes, drivers and magnetic gear are taken out, sorted and disposed or returned per your recycling or landlord policy — the day's handover is genuinely clear." }
    ]
  },
  "tiling": {
    intro: "Lobbies, corridors and wet commercial areas: large-format and anti-slip tile schedules, setting-out drawings and phased works that always keep one path open.",
    bullets: ["Setting-out drawings before the first tile", "PE and slip-class guidance for wet areas", "Level lippage systems on large slabs", "Corridor-by-corridor phasing"],
    faqs: [
      { q: "Can tiling happen while the building stays open?", a: "Yes — zones are fenced, one circulation path is kept live at all times, and heavy cutting happens off-hours or off-site so lobby acoustics survive the works." },
      { q: "What tiles suit a commercial entrance?", a: "Dense porcelain with the right PE rating and a tested slip class for shoe-traffic and rain tracking; we quote against the schedule you approve, including the adhesive class." },
      { q: "How is lippage controlled on big slabs?", a: "Levelling clip systems, full-coverage notched troweling and flatness checks with a long straightedge — signed off zone by zone before grouting." },
      { q: "Can lobby tiling avoid the entrance?", a: "Yes — the entrance stays live; tiling proceeds around it in approved phases with protection sheets and ramps, so foot traffic never crosses fresh adhesive." }
    ]
  },
  "plaster-ceiling": {
    intro: "Feature plaster, cove strips and bulkheads for lobbies and showrooms — decorative systems backed by a 10-year sag-free warranty, cut and finished off-hours.",
    bullets: ["Cove and indirect-light channels built in", "10-year sag-free & crack-free warranty", "Skim-seam finishing to paint standard", "Sequenced around your opening schedule"],
    faqs: [
      { q: "Is the 10-year warranty real for commercial use?", a: "Yes — 10 years on the premium plaster-ceiling system against sagging and cracking, written on the invoice with the system specification it applies to." },
      { q: "Can decorative work happen in occupied malls?", a: "Mall and strata hours rules are planned into the programme, with dust shrouds, vacuum extraction and nightly handover of each feature before the next phase starts." },
      { q: "What finishes do you quote with?", a: "Skim-coat to paint-ready flatness, taped and set joints, and coordination gaps for LED cove tapes — all in the itemised scope so the painter inherits a clean surface." },
      { q: "How is dust controlled near stock or equipment?", a: "Cutting happens outside or in sealed zones with extraction; adjacent fixtures get sheeting and tape, and each phase closes with a vacuumed clean." }
    ]
  },
  "skim-coat": {
    intro: "Photo-ready wall finishes for showrooms and handovers: full surface prep and glass-smooth skim before final paint and the landlord walkthrough.",
    bullets: ["Crack and joint treatment first", "Trowel-flat walls under raking light", "Dust-controlled sanding stages", "Priced per m², fixed after site check"],
    faqs: [
      { q: "Does skim coat survive commercial wear?", a: "Applied over sound plaster with proper curing, yes — and where walls flex or damp returns, we say so and fix the cause first rather than sealing it in." },
      { q: "Can works run between tenancies?", a: "That is the usual window: prep, coat and cure scheduled back-to-back with the repaint, so the unit photographs ready on handover day." },
      { q: "What is checked before we start?", a: "Hollow spots, cracks and damp are mapped and included or excluded in the fixed quote, so the price you approve matches the wall you have." },
      { q: "How long does skim need to cure before paint?", a: "Coats are scheduled overnight with proper dry times per layer, so primer follows the next trade window instead of trapping damp under your brand colour." }
    ]
  },
  "flooring": {
    intro: "SPC and vinyl for offices, studios and shoplots: caster-rated build-ups, transition details to common floors and phased installation around trading.",
    bullets: ["Heavy-caster and chair-mat rated builds", "Transitions to corridor tiles planned", "Moisture-tested subfloors before lay", "Room-by-room phasing keeps zones live"],
    faqs: [
      { q: "Will click vinyl take office chair traffic?", a: "With the right wear layer and a flat, rigid subfloor, yes — we spec commercial-grade SPC and note where chair mats are still the cheaper long-term answer for hot desks." },
      { q: "Can floors change while staff work?", a: "Yes — floors go in zones over weekends or evenings, furniture lifts included, with the live area protected and usable each morning." },
      { q: "What warranty covers commercial flooring?", a: "5 years of installation workmanship warranty on the laid system, recorded on the invoice alongside the product's own wear warranty." },
      { q: "Is the site usable the same day?", a: "SPC and click vinyl are walkable the day they lock in; heavy furniture lands on protective pads after the final check, per the day's zone plan." }
    ]
  },
  "epoxy-flooring": {
    intro: "Warehouse bays, workshop floors and car-park decks: self-levelled epoxy and anti-slip topcoats with coved skirtings, laid in bays so operations keep moving.",
    bullets: ["Bay-by-bay pour scheduling", "Grind-and-prime surface prep", "Anti-slip and coved-edge options", "5-year delamination warranty"],
    faqs: [
      { q: "How fast can a warehouse floor go back live?", a: "Traffic can typically reopen per completed bay inside days on foot-tile schedules, with full chemical cure staged — the programme is agreed around your operations, not the other way." },
      { q: "Does the floor handle forklift traffic?", a: "Spec'd accordingly: correct film build, steel-shot or ground prep and a topcoat matched to wheel type — quoted with the load profile you give us." },
      { q: "Why coved skirtings?", a: "Square wall junctions chip and trap dirt; a coved epoxy skirting wipes clean and survives scrubbing machines, which is what audits on food and workshop floors actually check." },
      { q: "What does handover include?", a: "A cure schedule, bay-by-bay completion photos and the topcoat spec on the invoice — the document your landlord or auditor asks for afterwards." }
    ]
  },
  "roof-repair": {
    intro: "Shed, factory and shoplot roof fixes: sheet replacement, flashing and ridge seals, skylight re-bedding and membrane systems backed by a 10-year workmanship warranty.",
    bullets: ["Drone-safe site surveys on request", "Sheet, ridge, flash and curb details", "Wet-season priority scheduling", "10-year membrane warranty terms"],
    faqs: [
      { q: "Can roof works stop leaks before monsoon?", a: "Emergency seals isolate active leaks fast; the permanent repair programme — sheets, flashings or membrane — is quoted from the survey so monsoon finds the roof closed, not patched." },
      { q: "What does the 10-year warranty cover?", a: "10 years on membrane and workmanship per the installed system, recorded on the invoice with treated areas and test conditions listed." },
      { q: "Do you work over live production areas?", a: "With protection below, isolation of the bay and agreed hours — yes; where interior exposure is unacceptable, works move to shutdown weekends." },
      { q: "Will works handle our waste and noise rules?", a: "Sheet offcuts and packaging leave with the crew daily; noisy hours follow the permit or strata windows agreed before mobilising." }
    ]
  },
  "kitchen-cabinet": {
    intro: "Café counters, staff pantries and prep lines: cabinet structures sized to the workflow, laminate fronts matched to branding, on a 5-year structure warranty.",
    bullets: ["Front-of-house counter builds", "Worktop and splashback integration", "Heavy-duty hinges on service lines", "5-year structure warranty"],
    faqs: [
      { q: "Can café joinery take commercial abuse?", a: "Spec'd for it: moisture-resistant boards, edge-banded fronts, soft-close and commercial hinges — and where a cheaper domestic spec would fail on your line, the quote says so." },
      { q: "How long is the fit-out out of service?", a: "Units are fabricated off-site and installed in a planned swap window, often overnight or over a closed day, so the pantry line returns the next shift." },
      { q: "Do you match brand colours?", a: "Yes — laminate and PU finishes are matched to your brand palette with approved samples fixed before fabrication." },
      { q: "Can counters be repaired instead of rebuilt?", a: "Where substrates are sound, re-top and re-front packages are surveyed and quoted honestly — demolition only when the core cannot earn its keep." }
    ]
  },
  "carpentry": {
    intro: "Reception joinery, display walls and back-of-house fit-outs: brand-matched veneers and laminates, fabricated ahead and installed overnight for Monday opening.",
    bullets: ["Shopfitting and display joinery", "Reception and counter casework", "Pre-finished off-site, fast on-site", "Repair and make-good for handover"],
    faqs: [
      { q: "Can joinery be ready for our launch date?", a: "That is the point of pre-fabrication: approved drawings, samples fixed early, overnight install and finishing on-site — with the programme agreed before you sign." },
      { q: "Do you also handle landlord make-good?", a: "Yes — removal, patching and repainting of old fit-outs back to bare-shell condition, documented with photos for the deposit and management sign-off." },
      { q: "What warranty applies?", a: "5 years on cabinet structure where joinery is part of the system we build, and 12 months workmanship on installation — both written on your invoice." },
      { q: "Can the fitout survive inspections?", a: "Joinery is fixed to structure, finished to the approved sample, and left with make-good of walls and floors — the walkthrough passes without a punch-list circus." }
    ]
  },
  "door": {
    intro: "High-traffic commercial doors: closers and hinges on heavy cycles, patch and clamp fittings for glass entrances, alignment work so retail doors never sag shut.",
    bullets: ["Heavy-duty cycle-rated hardware", "Glass patch, pivot and clamp fits", "Closer and seal adjustment", "Security upgrade prep for stockrooms"],
    faqs: [
      { q: "Our shopfront door drops by lunchtime — fixable?", a: "Usually yes: hinge and pivot inspection, correct-rated closers and realignment; where the frame or glass hardware is worn out, replacement is quoted with the same care as the adjustment." },
      { q: "Can works happen during trading hours?", a: "Most adjustments take under an hour per door and can run between rushes; hardware swaps on main entrances are scheduled before or after trade so the front is never left open." },
      { q: "Do you service back-of-house and fire doors?", a: "We repair and tune closers, hinges, latches and seals on service doors; certification itself stays with the accredited party, and we will tell you when that is what you actually need." },
      { q: "Do you stock commercial hardware?", a: "Closers, hinges, patch fittings and common lock cases are kept or sourced fast, and the quote names the make and model that was decided at survey." }
    ]
  },
  "window-repair": {
    intro: "Shopfront and office windows: seal and gasket renewal, stiff sliding tracks, rollers and handles — including high-level panels on double-height elevations.",
    bullets: ["EPDM gasket and pile-seal swaps", "Track, roller and handle service", "High-elevation access planned", "Double-glazing unit replacement"],
    faqs: [
      { q: "Rain leaks in around the shopfront glass — where do we start?", a: "Seals and weep holes first: the gasket line and drain slots fail long before the glass does. We inspect, quote and fix with a compression test on close." },
      { q: "Can upper-floor windows be done safely?", a: "Yes — with planned access for the elevation involved, and the access method written into the fixed quote, not improvised on the day." },
      { q: "Do you replace fogged double glazing?", a: "Fogging means the sealed unit failed; we survey, order the matching IGU and refit with new setting blocks and perimeter seals." },
      { q: "Can works happen while we trade?", a: "Frontage works run early or late; one bay stays serviceable, and the day ends with the elevation secured and locked." }
    ]
  },
  "locksmith": {
    intro: "Offices, stockrooms and warehouses: master-key planning, cylinder changes on tenant turnover, panic-exit hardware service and after-hours lockout response.",
    bullets: ["Master key systems per floor plan", "Cylinder swaps on lease changeover", "Exit-device and thumbturn service", "Priority lockout response"],
    faqs: [
      { q: "Can we key our whole floor to one master?", a: "Yes — a keyed-alike or master-keyed hierarchy is planned against your door schedule and access levels, cut and issued with a signed key register at handover." },
      { q: "We changed tenants mid-lease — what now?", a: "Re-key or swap cylinders across shared and restricted doors the same day where stock allows, and update the key register so old keys stop opening live spaces." },
      { q: "Do you handle shopfront digital locks?", a: "We fit and service access control that suits retail units — keypad and smart cylinders with mechanical override — and leave you admin codes you actually control." },
      { q: "Can we control who holds keys?", a: "Key registers, restricted blanks and revocable codes are standard on commercial jobs — issued to a named custodian, not a drawer in reception." }
    ]
  },
  "glass-aluminium": {
    intro: "Storefront glass, aluminium partitions and glass doors for retail and offices: framing, fittings and seals installed to commercial tolerances with safety in mind.",
    bullets: ["Toughened storefront glass works", "Aluminium office partition builds", "Patch fittings and locks on glass", "Mirror and splashback installs"],
    faqs: [
      { q: "A customer hit our glass panel — can it be swapped fast?", a: "Yes — the site is secured and measured the same day, and a matching toughened panel with new hardware is fitted as soon as it is fabricated, typically days not weeks." },
      { q: "Do aluminium partitions come ready for downlights?", a: "Framing carries the service gaps and glazing bead schedule from the drawings, with conduit routed inside the posts before panels close the run." },
      { q: "Is there a warranty on fittings?", a: "12 months on hardware, seals and installation workmanship, written on the invoice; glass itself follows the temperer's certification." },
      { q: "Is storefront glass replaced same day?", a: "Breakages are made safe the same visit; replacement toughened glass is measured immediately and fitted as soon as the fabricator releases it, typically within days." }
    ]
  },
  "cctv": {
    intro: "Retail and warehouse coverage: camera planning against your floor plan, recorder retention settings and remote view — commissioned and documented for management.",
    bullets: ["Coverage planned to entry and till lines", "Retention sizing for your premises rules", "IT-friendly VLAN and remote access", "Signage and privacy compliance notes"],
    faqs: [
      { q: "How many cameras does our unit actually need?", a: "A site walk or floor plan settles it: blind spots at entrances, till lanes, stockroom and receiving doors are the usual must-haves, and the quote lists positions rather than a padded count." },
      { q: "Can our management office view the feed?", a: "Live view is set up for named logins over an access path your IT agrees with, and recorder retention is configured to the hours your strata or policy actually requires." },
      { q: "What happens when a camera fails?", a: "Coverage health is checked at service visits; failed units, power and cable runs are replaced from stock where possible, with the change logged on your site sheet." },
      { q: "Will your install satisfy insurance?", a: "Coverage plans, retention settings and commissioning records are documented so claims and management reviews can trace exactly what was installed and where." }
    ]
  },
  "autogate": {
    intro: "Shared lots and factory yards: sliding and swing gate automation, safety beams and intercom tie-ins, plus service plans that keep vehicles moving at shift change.",
    bullets: ["Retrofit motors on existing gates", "Safety beam and loop checks", "Keypad, intercom and tag access", "Preventive service before breakdowns"],
    faqs: [
      { q: "Our gate broke at shift change — how fast?", a: "Emergency diagnosis clears most failures on the visit; where a board or motor is out of stock, a temporary manual-release plan keeps the yard functioning until the swap." },
      { q: "Can visitors buzz through to security?", a: "Yes — intercom or telephone-style release is wired to the guard post, and access tags for staff are issued and revocable by whoever you nominate to manage them." },
      { q: "Is a service plan worth it?", a: "On gates that carry every shift, yes: track cleaning, roller and limit checks and bolted hardware tighten prevent the jam that closes a yard for a day." },
      { q: "Can you maintain our gate on a plan?", a: "Scheduled visits check tracks, rollers, limits, beams and torque — cheaper than a breakdown during the shift it would strand." }
    ]
  },
  "welding": {
    intro: "Fabrication and repair for workshops and yards: gates, grilles, canopies and stainless back-of-house work — site-welded, ground, painted and photographed for your records.",
    bullets: ["Structural repairs and new fabrications", "Stainless counters and guards for F&B", "Fire-watch safe hot works", "Grounding, priming and finish coats"],
    faqs: [
      { q: "Can welding happen inside an operating unit?", a: "With a hot-works permit approach: screens, fire watch, extraction and movement of combustibles — planned in the quote, and mandatory in shared buildings." },
      { q: "Do you repair bent gates and grilles?", a: "Yes — straightening, re-welds, new sections or rollers, then grinding and paint so the repair does not announce itself from ten metres." },
      { q: "Is stainless fabrication food-area ready?", a: "Back-of-house counters, sinks and guards are welded, ground smooth and finished for cleaning — built to the hygiene checklists your kitchen gets audited against." },
      { q: "Are hot works documented for the building?", a: "Permit information, fire watch arrangements and completion photos go into the closeout pack your management office expects." }
    ]
  },
  "aircon": {
    intro: "Office and restaurant aircon: cassette and multi-split servicing after trade hours, chemical wash cycles, gas checks and per-unit records for facilities teams.",
    bullets: ["Cassette, wall and ducted units", "Chemical wash and overhaul schedules", "Night servicing to keep the floor cool", "Per-unit service log for FM files"],
    faqs: [
      { q: "Can servicing happen without closing the floor?", a: "Yes — units are done one at a time after trading, with drain pans bagged and filters washed so the next morning starts cool and clean." },
      { q: "Do you service rooftop or large systems?", a: "Wall-hung, ceiling cassette and multi-split systems up to the sizes common in Klang Valley offices and F&B units are in scope; plant beyond that is flagged honestly at survey." },
      { q: "What warranty comes with commercial installs?", a: "1-month workmanship warranty with a 3-month parts warranty, per-unit and written on the invoice; manufacturers' warranties pass through separately." },
      { q: "How do we track service for many units?", a: "Every unit gets a dated card — service type, readings and next window — so the facilities log writes itself." }
    ]
  },
  "kitchen-renovation": {
    intro: "Café, canteen and F&B kitchen refurbs: tiling, counters, water and drainage rework sequenced for the shortest close, quoted on a fixed scope before strip-out.",
    bullets: ["Sequenced to minimise the closed period", "Drainage and water rework first", "Surfaces cleanable to audit standard", "Fixed programme with night works"],
    faqs: [
      { q: "How many days will we have to close?", a: "Most café refurbs plan a closed window of days, not weeks: dirty works run nights and weekends, finishing happens live, and the programme is agreed before you sign." },
      { q: "Can you handle grease-trap and drain rework?", a: "Scope is set by survey — trap access, falls and clean-outs are rebuilt where the audit checklist needs it, with plumbing done on fixed price, not daywork." },
      { q: "What warranty covers a commercial kitchen?", a: "12 months workmanship on the refit, with waterproofing systems carrying up to 5 years, all itemised and written before the first tile comes down." },
      { q: "Can the kitchen reopen in one day?", a: "Programmes end with testing and clean-down overnight so the line reopens for the next service day — the close list drives sign-off." }
    ]
  },
  "bathroom-renovation": {
    intro: "Office and mall washroom refurbishment: one cubicle at a time keeps facilities open, with anti-slip floors, fixture swaps and JMB-friendly hour discipline.",
    bullets: ["Cubicle-by-cubicle phasing", "Anti-slip and drainage-first floors", "Fixture, seal and trap-arm swaps", "Out-of-hours wet works"],
    faqs: [
      { q: "Can our washrooms stay open during works?", a: "That is the design constraint: stalls are taken one by one with a sealed hoarding, so every floor keeps functioning while each cubicle is rebuilt behind it." },
      { q: "How is odour and water shutdown handled?", a: "Stacks are capped during open works, drainage is reconnected in tested stages, and overnight shutdown windows clear the wet trades with the supply back before morning." },
      { q: "What does the warranty cover?", a: "12 months on renovation workmanship, with waterproofing systems carrying up to 5 years on the membrane scope — all on the invoice, per cubicle or zone." },
      { q: "How do you keep facilities usable?", a: "By staging fixtures and isolations so a washroom block never goes fully offline, and by finishing each cubicle's seal and silicone before opening the next." }
    ]
  },
  "awning-installation": {
    intro: "Shoplot and alfresco awnings: five-footway-cleared designs, council-aware fabrication, after-hours installs where needed and structures quoted to your actual site drawing.",
    bullets: ["Council and five-footway clearance notes", "Night install for live frontages", "Polycarbonate, ACP and metal deck roofs", "Gutters and drainage to your facade"],
    faqs: [
      { q: "Do shoplot awnings need council approval?", a: "Frequently, yes — design, projection and height rules vary by council. We build to compliant geometry and prepare the information your submission or renovation CDR needs." },
      { q: "Can the awning go up without closing the shop?", a: "Most installs run early-morning or after-hours with traffic-management around the frontage, so trading and the five-footway are affected for hours, not days." },
      { q: "What does a commercial awning cost?", a: "Quoted per site on span, material and fixing condition — no generic 'starting from' price, because every awning is engineered to the building it goes on." },
      { q: "Does the install include take-down of the old awning?", a: "Yes — removal, patching of fixings and paint touch-in around the new anchorage are quoted line items, not surprises." }
    ]
  }
};

export const residentialCopy: Record<string, PodCopy> = {
  "painting": {
    intro: "Interior and exterior repainting for occupied homes: wrapped furniture, low-odour washable systems and room-by-room handover so daily life continues while the walls change.",
    bullets: ["Furniture wrapped, floors sheeted", "Low-odour washable interior systems", "Room-by-room handover, liveable throughout", "Exterior anti-algae coats for tropical walls"],
    faqs: [
      { q: "Can we live in the house while you paint?", a: "Yes — works are scheduled room by room, each one sealed, dried and handed back before the next starts, with low-odour paint so bedrooms and living areas stay usable." },
      { q: "What about condo rules on hours and smell?", a: "We work inside JMB-approved hours with ventilation and low-VOC systems agreed up front, and common-area walls, ceilings and touch-ups documented the same way." },
      { q: "How is a painting quote priced for a home?", a: "Measured per room or elevation with prep listed honestly — crack filling, putty, primer and topcoats — as one fixed price confirmed before the first tin opens." },
      { q: "Is the smell safe around kids and pets?", a: "Low-VOC washable systems are used in occupied homes, and bedrooms get aired overnight with windows and access agreed with you before the first coat." }
    ]
  },
  "plumbing": {
    intro: "Home plumbing for condos and landed houses: leak tracing, fixture and heater work, pumps and pressures — isolation explained, mess avoided, repairs you can verify.",
    bullets: ["Acoustic and visual leak tracing", "Fixture, trap and valve replacements", "Pump and pressure tuning", "Silicone and sealing done properly"],
    faqs: [
      { q: "How do you find a hidden leak without smashing tiles?", a: "Line-by-line pressure tests and acoustic checks narrow the run first, so only the confirmed spot opens. Bathroom floor leaks get the same test before any hacking is suggested." },
      { q: "Do you work around kids and pets?", a: "Water off is announced with expected duration, work zones are cordoned, and tools and materials are cleared at the end of every visit — no sharp surprises on the floor." },
      { q: "What warranty covers home plumbing?", a: "30 days on joint seals and repair workmanship, written on the invoice, with any parts carrying the manufacturer's own terms." },
      { q: "Will you show me the isolation valves?", a: "Yes — at handover we walk you through mains, unit valves and heater isolators, and tag anything unlabelled so the next emergency starts faster." }
    ]
  },
  "ceiling": {
    intro: "Gypsum ceilings and partitions for homes: laser-level framing, moisture-resistant boards where it counts and downlight-ready finishing — done around your furniture, not through it.",
    bullets: ["Laser-level GI framing", "MR boards over wet-adjacent areas", "Downlight and pelmet coordination", "Furniture protection and daily cleanup"],
    faqs: [
      { q: "Can the family stay home during ceiling work?", a: "Small rooms yes — the work area is sealed with zip-walls and negative-pressure dust control where possible, and each ceiling is closed and painted before the next starts." },
      { q: "My ceiling stains after rain — patch or replace?", a: "If the board is sagging or crumbly it is replaced; if it is sound, we fix the water source first, then cut out, tape, skim and repaint so the repair disappears under the light." },
      { q: "Do condo approvals matter for ceilings?", a: "Yes — drilling, hours and debris routing follow JMB rules; we handle the worker details and keep common lifts and corridors protected during the job." },
      { q: "What if a leak damaged boards above?", a: "The source is fixed first, then affected boards are replaced rather than painted over — the inspection photo set shows you exactly what was opened." }
    ]
  },
  "waterproofing": {
    intro: "Bathroom, balcony and roof leaks for homes: no-hack PU options where possible, membrane systems where needed, and ponding tests before your tiles and furniture come back.",
    bullets: ["Leak diagnosis before any upsell", "No-hack sealing where it will hold", "Full membrane systems with ponding tests", "Downstairs neighbours informed properly"],
    faqs: [
      { q: "Can the bathroom be fixed without hacking?", a: "Sometimes — hairline and joint leaks respond to PU injection and re-sealing. If the membrane is truly failed, we say so and quote the full fix instead of selling you a maybe." },
      { q: "How do you prove the leak stops?", a: "A 24–72 hour ponding test with photos of the ceiling below at each stage — the fix is only signed off when the test passes in your home, not on a promise." },
      { q: "Does waterproofing disturb the whole house?", a: "The affected wet area only — usually days, with water and drains managed and the space usable again as soon as cure time allows." },
      { q: "Can you work while we still live in?", a: "Bathroom works sequence so at least one dry zone stays usable, with temporary arrangements agreed in the quote, not improvised at day two." }
    ]
  },
  "handyman": {
    intro: "The mounted, fixed, hung and assembled jobs for homes: TVs anchored to the right wall, furniture assembled, doors and shelves repaired — one tidy visit, floors swept after.",
    bullets: ["Wall type identified before drilling", "Stud and anchor-rated mounting", "Flat-pack assembly done right", "Protection down, cleanup before exit"],
    faqs: [
      { q: "Is plasterboard safe for a big TV?", a: "Depends on the wall and weight — we scan for studs or timber backing, use rated anchors, and add a backing plate where a safe mount needs one rather than just hanging it anyway." },
      { q: "Can you do a whole to-do list in one visit?", a: "Yes — send the list with photos and rough sizes; we price it as one visit plan so mounting, repairs and assembly happen in a single booking." },
      { q: "Do you handle the odd squeak and sag too?", a: "Door latches, soft-close retrofits, wobbly rails and furniture anchoring for kids are standard on home visits — small fixes that make the house feel finished." },
      { q: "Do you bring the right anchors for my wall?", a: "Every mount starts with a wall-type check — stud scan, masonry or board anchors selected for the load, and the fixing tested before we leave." }
    ]
  },
  "house-renovation": {
    intro: "Whole-home renovation for condos, terraces and bungalows: phased so you can keep living in parts of the home, with itemised fixed quotes and written warranties on the work.",
    bullets: ["Phased works for live-in renovating", "Fixed itemised quote before start", "JMB and approval handling", "12-month structural workmanship warranty"],
    faqs: [
      { q: "Can we live at home during renovation?", a: "Often yes for phased works — wet areas and bedrooms are sequenced so one bathroom and one bedroom stay functional; full-home makeovers are easier with a temporary move, and we say which you have." },
      { q: "What actually happens to my condo's rules?", a: "Working hours, lift booking, debris routing and worker particulars are filed with management before day one, and site conditions keep those commitments for the whole job." },
      { q: "How do you keep the price from creeping?", a: "The quote is itemised by room and trade, confirmed after site check; changes only happen on your written instruction with a priced variation — nothing 'discovered' at invoice time." },
      { q: "How do you protect the rooms we still use?", a: "Dust partitions, floor protection and end-of-day cleanup are written into the programme — living areas stay usable while works advance behind the seal." }
    ]
  },
  "electrical": {
    intro: "Home wiring and points by ST-registered wiremen: dedicated circuits for aircons and kitchen gear, DB upgrades, labelled boards and safe repairs — with records for your file.",
    bullets: ["ST-registered wiremen only", "Dedicated points for heavy appliances", "DB upgrades with proper protection", "RCCB and earthing verified, not assumed"],
    faqs: [
      { q: "My breaker trips when the heater and kettle run — normal?", a: "Not normal, but common: heavy appliances sharing an under-rated circuit. The fix is a dedicated point sized to the load, not a bigger breaker — we set that right and test it." },
      { q: "Is rewiring needed in an old house?", a: "Only if the survey says so — insulation condition, earthing and board capacity decide. Where adding points safely is enough, that is what we quote." },
      { q: "What warranty covers electrical work?", a: "12 months workmanship warranty on installs and repairs, with the circuit labelled and the test result noted on your invoice." },
      { q: "Do you work with our JMB's electrician?", a: "Yes — boards, risers and common isolations are coordinated with building personnel, with permits arranged before anything gets opened." }
    ]
  },
  "water-heater": {
    intro: "Instant and storage heaters for Malaysian bathrooms: supply, installation on a dedicated tested point, and descaling when hard water cuts efficiency — sized to your pressure.",
    bullets: ["Heater supply and honest sizing", "Dedicated circuit with isolator fitted", "Descaling for hard-water loss", "RCCB and earth verified on install"],
    faqs: [
      { q: "Which heater suits a high-rise bathroom?", a: "Condo units usually run instant types on 15–20A dedicated circuits; where hot water feeds a bath or multiple points, storage sizing is quoted against your supply and space, not a rule of thumb." },
      { q: "The shower gets warm then cold — what fails?", a: "Commonly a scaled element or a flow/thermal cut-out issue on hard-water lines. A descale often fixes it; if the element is spent, replacement is quoted before touching the unit." },
      { q: "Do you install heaters I already bought?", a: "Yes — on the correct dedicated point with isolator and verified earthing; if the shop unit is not suitable for your bathroom's wiring, we flag it before mounting anything." },
      { q: "How do I know which size fits my family?", a: "Fixture count, bathroom layout and mains pressure decide instant vs storage — sized at survey with the wiring shown to you, not guessed from a catalogue." }
    ]
  },
  "ceiling-fan": {
    intro: "Bedroom and living-room fans done safely: rated brackets and downrods for your slab or joists, wobble-free balancing, light-kit compatibility and old fans removed cleanly.",
    bullets: ["Structural fixings, not plaster alone", "Balance and noise testing at speed", "Remote and dimmer compatibility", "Old fan and hole make-good included"],
    faqs: [
      { q: "Is a fan safe on a concrete slab?", a: "With the right anchor pattern and load-rated fixing, yes — and where a ceiling box or gypsum-only mount can't take a spinning fan's torque, we say what it needs before installing." },
      { q: "My fan wobbles and clicks — balance or replace?", a: "Usually blade tracking, a loose downrod or a tired bearing; we test at speed after fixing, and a wobble-free handover is part of the job." },
      { q: "Can you replace a light with a fan?", a: "Yes — load path checked, new fixing fitted, wiring tidied and the old light hole properly closed, not blanked with tape." },
      { q: "Is balancing really part of the job?", a: "Yes — speed-by-speed wobble checks, bracket torque verification and a remote-pairing walkthrough are done in front of you before handover." }
    ]
  },
  "lighting": {
    intro: "Downlights, pendants and cove strips for homes: cleanly cut ceilings, serviceable driver placement and matched colour temperature — bright where you work, soft where you rest.",
    bullets: ["Downlight grids on a marked layout", "Driver placement you can service", "Warm-to-cool layering per room", "Dimmer and smart-switch compatibility"],
    faqs: [
      { q: "Can LED retrofits run on my old dimmers?", a: "Sometimes, but mismatched drivers flicker and shorten lamp life — we test the pairing during install and quote the right dimmer when the old one won't play." },
      { q: "How bright is 'bright enough' for a kitchen?", a: "Task layers beat raw wattage: under-cabinet or counter-side lighting plus an even downlight grid, specified in lux zones rather than lamp counts." },
      { q: "Do you patch the ceiling after cutting?", a: "Yes — recessed fitting cut-outs are trimmed, boxed where needed and skimmed flush around the fixture, so the ceiling looks original around the new light." },
      { q: "Can you work around a baby's nap times?", a: "Noisy hours are yours to choose — cutting and drill work get scheduled outside agreed rest windows, with silent finishing around them." }
    ]
  },
  "tiling": {
    intro: "Floor and wall tiling for renovations and repairs: homogeneous, porcelain, ceramic, mosaic and large-format slabs — set level with lippage control and a grout line you can live with.",
    bullets: ["Levelling clips on large formats", "10–12mm notch trowel full coverage", "Wet-area falls before the grout", "Match or replace cracked tiles invisibly"],
    faqs: [
      { q: "Can a single cracked tile really be replaced?", a: "Usually — the tile is lifted carefully, substrate cleared, a matched tile set with fresh adhesive and regrouted to shade. Where the batch no longer exists, we show you the seam plan first." },
      { q: "Why do bathroom tiles crack again after retiling?", a: "Because movement and waterproofing were skipped. We prep the slab, redo the wet-zone membrane and let it cure before the new tile goes on — twice the work, half the callbacks." },
      { q: "What's the warranty on tiling?", a: "12 months on tile adhesion and grout workmanship, written on the invoice, so lifting and grout failure are covered, not argued about." },
      { q: "What stops cracked tiles coming back?", a: "Full-coverage adhesive bedding, movement joints where the building needs them and levelling clips on large formats — the spec is stated, not assumed." }
    ]
  },
  "plaster-ceiling": {
    intro: "Modern plaster ceilings for landed and high-rise homes: hidden cove light channels, stepped profiles, L-boxes and pelmets — with a 10-year sag-free, crack-free warranty on the system.",
    bullets: ["Cove and indirect-light channels", "10-year sag-free & crack-free warranty", "Perfect skim under raking light", "Downlight-ready reinforcement"],
    faqs: [
      { q: "Will a plaster ceiling suit a low condo ceiling?", a: "It depends on the drop — profile depth is designed around your lights and curtains, and where a feature-only ceiling reads better than a full tray, we draw it that way." },
      { q: "Why do plaster ceilings crack at the corners?", a: "Movement and weak joint systems. Fixed-and-taped properly with reinforced corners and correct fixing spacing — that system is exactly what the 10-year warranty covers." },
      { q: "Is the work dusty for the household?", a: "Cutting happens outside or in sealed zones with extraction, and each room is handed over sanded, painted and furniture-reinstated before the next one opens." },
      { q: "Will the cove light run hot?", a: "LED tape selection and channel spacing are chosen for the profile, with accessible drivers so the cove can be serviced without touching the plaster." }
    ]
  },
  "skim-coat": {
    intro: "Glass-smooth skim before the paint: full-surface prep, crack treatment and trowel-flat walls under raking light — the finish your new lighting actually deserves.",
    bullets: ["Wet-cut sanding, minimal dust", "Crack and joint treatment first", "Flat to raking-light standard", "Priced per m² after a site check"],
    faqs: [
      { q: "Do I need skim coat before repainting?", a: "If the walls show patchiness, roller marks or hairline cracks under sunlight, yes — paint over bad plaster just makes the problem glossy. Smooth first, colour second." },
      { q: "How much dust hits the furniture?", a: "Wet-sanding methods keep airborne dust low, and everything still in the room is sealed under sheeting with doorways zipped; the handover includes cleanup, not a suggestion to sweep." },
      { q: "What warranty covers skim work?", a: "12 months on smoothness and adhesion, recorded on the invoice — lifting or sanding-through is returned and refinished free." },
      { q: "Is skim enough for a rented unit?", a: "Yes — skim plus two topcoats is usually what a landlord walkthrough accepts; where a wall fails a straightedge test, that prep is quoted first." }
    ]
  },
  "flooring": {
    intro: "Click-lock SPC, laminate and vinyl for homes: level subfloors, moisture barriers where they belong, quiet underfoot — usually walked on the same day it lands.",
    bullets: ["Subfloor levelled before any click", "Moisture barriers on ground-floor slabs", "Transitions to tiles planned, not patched", "Underlay matched for sound and warmth"],
    faqs: [
      { q: "Can flooring go in around my furniture?", a: "Yes for most installs — rooms are cleared to the perimeter, laid and handed back with furniture re-placed and felt pads fitted where the floor meets legs." },
      { q: "Which floors handle wet kitchens and kids?", a: "SPC with a wear layer rated for the room, moisture barriers at wet edges and coved skirting details — laminate gets a talk-out where splashes are daily reality." },
      { q: "Why does new flooring creak or wave?", a: "Almost always the subfloor: waves mean flatness out of spec, creaks mean underlay or locking stress. We test flat with a straightedge before installing and fix what we find." },
      { q: "Do you move furniture for us?", a: "Perimeter furniture gets lifted, protected and re-placed with felt pads as standard; heavy pieces are discussed before install, not after the floor ships." }
    ]
  },
  "epoxy-flooring": {
    intro: "Garage and utility floors in epoxy: ground-prepped, self-levelled and sealed with wipe-clean, anti-slip options and coved edges — a floor a car can live on.",
    bullets: ["Diamond-ground prep before any resin", "Anti-slip broadcast options", "Coved skirtings, no chipped corners", "Topcoat colours matched to your car"],
    faqs: [
      { q: "Will epoxy survive oil, petrol and tyre marks?", a: "A chemical-resistant topcoat does — cleaning is a mop pass, not a scrub. Where hot tyres do bond on sunny days, the spec adds the right topcoat rather than blaming you later." },
      { q: "How long before I can park on it?", a: "Foot traffic inside a day; vehicle loading after the full cure window the system needs — the schedule is given up front so the car has somewhere to sleep meanwhile." },
      { q: "What about moisture coming up through the slab?", a: "Tested before quoting. Where vapour pressure is high, a moisture-tolerant build or venting detail is specified — otherwise any epoxy would lift within months, and we won't sell that." },
      { q: "Can we do it bay by bay?", a: "Yes — garage and utility floors divide into workable bays so one parking space stays live throughout the cure programme." }
    ]
  },
  "roof-repair": {
    intro: "Terrace and bungalow roof leaks fixed at the source: sheet and tile replacement, ridge and flashing seals, valley clearances and membrane systems with a 10-year warranty option.",
    bullets: ["Rain-day + dry-day leak mapping", "Sheet, ridge, valley and curb details", "Gutter and debris flow checks", "10-year membrane warranty options"],
    faqs: [
      { q: "We only leak in heavy wind-driven rain — why?", a: "That points to laps, flashings and valley overflow rather than a crack: water drives uphill under a lifting sheet or into a blocked valley. We test and seal exactly those failure lines." },
      { q: "Can the leak be fixed this week?", a: "Temporary sealing to stop interior damage is usually same-week; the permanent programme follows after a full roof survey, priced per area and defect, not per rumour." },
      { q: "What warranty covers the work?", a: "Membrane systems come with up to 10 years on the installed system and workmanship; sheet and flashing repairs carry 90 days — both listed on the invoice with treated areas." },
      { q: "Will you check the inside too?", a: "Attic and ceiling-side inspection accompanies the roof survey where access allows, because stain patterns show where sheets and flashings fail." }
    ]
  },
  "kitchen-cabinet": {
    intro: "Kitchen cabinets built for real Malaysian cooking: anti-termite boards, soft-close fittings, wipe-clean laminates or PU fronts — installed in days, backed by a 5-year structure warranty.",
    bullets: ["Moisture and termite-resistant cores", "Soft-close hinges and runners standard", "Corner and tall-unit space planning", "5-year structure warranty in writing"],
    faqs: [
      { q: "How long from measurement to a finished kitchen?", a: "Typical cabinet kitchens run days on-site after off-site fabrication — demolition, install, top and finish sequenced so your kitchen is out of action for the shortest honest window." },
      { q: "Laminate or PU fronts — which ages better here?", a: "In humid, oily kitchens laminate shrugs off steam and scrubbing; PU looks softer and needs kinder treatment. We match the finish to how you actually cook, and say why." },
      { q: "Can you keep and rebuild my existing carcasses?", a: "Where boxes are sound, re-fronting with new doors, hardware and tops is often half the cost — offered when inspection says the core deserves it." },
      { q: "How do panels match my existing colour?", a: "Sample boards go side-by-side in your kitchen light before approval; where a dead match is impossible, we say so before fabrication, not after." }
    ]
  },
  "carpentry": {
    intro: "Joinery and carpentry at home: fitted wardrobes, feature walls, doors and trims patched to match — existing pieces revived where that's smarter than replaced.",
    bullets: ["Wardrobe and feature-wall joinery", "Trims and doors matched to existing stain", "Structural repairs to frames and linings", "Salvage-first when it's genuinely better"],
    faqs: [
      { q: "My old wardrobe doors won't close — repair or replace?", a: "Hinges, runners and swollen edges fix more often than buyers expect; if the carcass is tired, we quote a matched rebuild honestly — repair-first, not replace-always." },
      { q: "Can you match an original timber tone?", a: "Stain and lacquer are sampled off-cut and approved before finishing the piece, so a repaired architrave disappears into the row instead of showing up next week." },
      { q: "What's on-site dust and noise like?", a: "Cutting is minimised with pre-fabrication; where saws must run inside, the room is sealed and extraction used, and the space is handed back clean the same day." },
      { q: "Can wardrobes be revived instead of replaced?", a: "Often — runners, hinges, shelves and new fronts get surveyed against a rebuild and quoted both ways; the cheaper working answer wins." }
    ]
  },
  "door": {
    intro: "Doors that bind, sag, rattle or won't lock: planed, rehinged, latched and sealed — front doors, bathroom doors and gates set up for another monsoon of daily use.",
    bullets: ["Rehang with longer, anchored screws", "Latch, strike and deadbolt alignment", "Seal and sweep for drafts and pests", "Timber movement explained, not guessed"],
    faqs: [
      { q: "Why does my door scrape only in wet weather?", a: "Timber absorbs moisture and swells — usually at the latch edge or floor line. The fix is measured relief plus hardware that lets the door close without force, not shaving it to failure." },
      { q: "Can a swollen MDF bathroom door be saved?", a: "Sometimes — if the core is sound, edge-sealing and re-hanging works; if it's sponge now, replacement with a moisture-rated slab is the last laugh for you, not the fitter." },
      { q: "Do you fit locks and door closers?", a: "Yes — deadbolts, digital-lock prep, closers and soft-latch strikes, with frame and rebate checks so the new hardware actually holds." },
      { q: "Do you repair sliding patio doors too?", a: "Yes — tracks, rollers, locks and alignment, including lifted sashes and doors that stop sealing when the monsoon wind gets into them." }
    ]
  },
  "window-repair": {
    intro: "Casement, sliding and top-hung windows made smooth again: glass replacement, roller and track service, new seals, handles and grilles — shutters and sashes that stay put in wind.",
    bullets: ["Seals stop rain creep at the sill", "Rollers matched to the frame profile", "Handles, hinges and locking points", "Temporary board-up after break-ins or storms"],
    faqs: [
      { q: "Rain comes in under the sliding window — normal?", a: "No — usually worn pile seals, blocked weeps or a sash riding over the track. We clear, reseal and adjust so drainage works the way the profile expects." },
      { q: "The glass is cracked — how fast?", a: "Same-day securing and board-up for safety; measured replacement glass fitted as soon as it's ready, with handling notes for upstairs and hard-to-reach panels." },
      { q: "Can old aluminium windows feel new?", a: "Frequently: clean tracks, new rollers, fresh seals and a locked-true sash restore most. Where frames are corroded or bent, replacement is quoted — with the reasons." },
      { q: "Is replacement glass matched to the old?", a: "Frames, tints and thickness are surveyed for a like-for-like fit — double glazing gets the matching sealed unit, not a single pane pretending." }
    ]
  },
  "locksmith": {
    intro: "Home locks, hinges and entry security: cylinder upgrades when keys outlive their owners, strike reinforcement, smart-lock prep and same-day lockout help.",
    bullets: ["Re-key on move-in or staff changeover", "Strikes and hinges reinforced", "Smart-lock prep and fitting", "Non-destructive entry when possible"],
    faqs: [
      { q: "Just moved in — should I change the locks?", a: "Re-key at minimum: you don't know how many copies survived the previous occupants. A re-key costs little; an entry report at 2 a.m. costs a door." },
      { q: "My digital lock battery died — trapped?", a: "Most units have override power or mechanical keys; we open non-destructively where possible and fit a lock with the fail-safe you actually want." },
      { q: "Do you reinforce old door frames?", a: "Yes — longer screws, steel strike plates and hinge-side upgrades close the 'kick-it-in' gap without replacing a door that is otherwise fine." },
      { q: "Can you help before my movers arrive?", a: "Re-keys and smart-lock fitting schedule around moving day; a quick lockout-response add-on covers the day the keys do not turn up." }
    ]
  },
  "glass-aluminium": {
    intro: "Glass and aluminium at home: mirror walls for gyms and studies, splashbacks, wardrobe glass, partitions and shower enclosures — measured, tempered where needed, levelled properly.",
    bullets: ["Toughened glass where safety demands", "Shower screen and hardware refresh", "Mirror and splashback installs", "Aluminium partitions and doors"],
    faqs: [
      { q: "Can a shower glass panel be replaced without tiles coming off?", a: "Usually yes — brackets and channels are relieved carefully, the new toughened panel is set to the existing geometry, and seals are renewed at the same visit." },
      { q: "Is film-safe glass enough for a kids' room mirror?", a: "Toughened glass with a safety backing film is the spec for near-bed and play sightlines — that's exactly how these are quoted and installed." },
      { q: "My aluminium folding doors sag and squeak — repairable?", a: "Top-hung rollers, bearings and track alignment restore most folding systems; where profiles are worn or bent, replacement is quoted with a like-for-like upgrade." },
      { q: "Do you handle heavy mirror walls?", a: "Yes — rated fixings, levelling and edge detail against the wall's real load path, with a site check before the glass is ordered." }
    ]
  },
  "cctv": {
    intro: "Home CCTV the honest way: coverage from porch to drive, discreet cabling, recorder placement agreed with you and phone viewing set up for the people who should see it.",
    bullets: ["Corners covered before camera count", "Cabling routed without ceiling raids", "Night vision and glare managed", "Access codes only you control"],
    faqs: [
      { q: "How many cameras does a terrace house need?", a: "Drive, porch, rear gate and any blind service side — usually four, decided by your plan, not a sales package. We map views on site before quoting." },
      { q: "Can the footage be private?", a: "Yes — local recording with encrypted remote access, no vendor cloud accounts, and access revoked on request; shared-viewer permissions are yours to manage." },
      { q: "Do renters get installed too?", a: "Rental-safe mounts and removable cabling plans are offered so the install leaves your deposit intact — worth asking for at quote stage." },
      { q: "Can I see the feed on my phone?", a: "Set up at handover with your own account and codes, tested in front of you on the home network and mobile data, then left documented." }
    ]
  },
  "autogate": {
    intro: "Auto-gates for homes and cluster schemes: motor repair or replacement, rollers and tracks, safety beams, remotes and keypad access that behave on a rainy night.",
    bullets: ["Motors for existing gates, not just new ones", "Safety beam and auto-reverse tested", "Rain-cycle wear prevention", "Remote and keypad management"],
    faqs: [
      { q: "My gate stopped mid-way — can it be rescued tonight?", a: "Manual release plus a same-day or next-morning visit is standard: most failures are a limit switch, board fuse or seized roller, not a dead motor." },
      { q: "Can you add automation to the old swing gate?", a: "Often yes — arm or underground operator choice depends on leaves, hinges and clearance; a survey decides honestly and quotes the retrofit or the replacement, whichever fits." },
      { q: "How do I stop the gate crushing the car?", a: "Correctly set auto-reverse and safety beams, tested at handover and on service visits — the feature everyone assumes works, proven with a test object before we leave." },
      { q: "Will remotes work with my neighbour's gate?", a: "Cluster and shared-yard systems get coordinated frequencies and the right access control; where sharing changes the wiring, it gets quoted as a plan, not a guess." }
    ]
  },
  "welding": {
    intro: "Welding around the house: gates and grilles repaired, extenders and canopies built, stainless handrails and yard repairs — ground smooth, painted, and neighbours informed.",
    bullets: ["Repair-before-replace on gates and grilles", "Extension and canopy steelwork", "Grind-flush finishes, primed and painted", "Hot-works care around finished homes"],
    faqs: [
      { q: "Can a bent or sagging gate be straightened?", a: "Usually — hinges, posts and frame geometry are reset or rebuilt, then reinforced; only truly fatigued steel gets a replacement quote, and it comes with the reason." },
      { q: "Is on-site welding safe near my house?", a: "With screens, fire watch, combustibles moved and finished floors protected — that's the standard, written into the quote for on-site work in occupied homes." },
      { q: "Will the weld marks show?", a: "Grinding, priming and topcoat finish are part of the job; where an area can't be blended — paint systems on old galvanised sections, for instance — it's flagged up front." },
      { q: "Will the repair rust later?", a: "Ground-flush welds get primed and painted with matched finish coats — the same discipline holds on galvanised sections where coating integrity matters." }
    ]
  },
  "aircon": {
    intro: "Home aircon that actually cools: installs, chemical washes, gas top-ups and repairs — with drain tests, clean-sheet habits indoors and the cooling proven before we leave.",
    bullets: ["Install with vacuum and cooling test", "Chemical wash for the musty blow", "Gas top-up only after leak logic", "Drain flow verified before handover"],
    faqs: [
      { q: "Why does my aircon smell when it starts?", a: "Microbial growth on a damp coil and drain pan — exactly what a chemical wash cleans. Dust filters alone rarely kill the must; we treat the source, not the symptom." },
      { q: "It cools for ten minutes, then blows warm?", a: "Usually airflow, coil freezing or low charge from a slow leak. Diagnostic order matters — top-ups without leak-finding refill a hole; we find the hole first." },
      { q: "What about water dripping indoors?", a: "Blocked or sloping drain lines and frozen coils — cleared, flow-tested and re-insulated properly, with the test logged before the wall gets closed up." },
      { q: "Can the install happen in one visit?", a: "Typically yes — bracket, piping, vacuum and cooling test complete the same day, with wall make-good listed before the van arrives." }
    ]
  },
  "kitchen-renovation": {
    intro: "Kitchen refurbs in a workable sequence: cabinets, tiles, water and extraction changed over in order — kitchen out of action for days, not weeks, at a fixed itemised price.",
    bullets: ["Sequenced: strip, services, surfaces, cabinets", "Wet-zone tile and waterproof checks", "Worktop and splashback integration", "Daily cleanup during the works"],
    faqs: [
      { q: "Do I really have to live without a kitchen?", a: "Usually for a short, planned window — the service tie-in is the constraint, so we schedule demolition-to-cookable in days and stage what can run around it." },
      { q: "What breaks most budget kitchens?", a: "Hidden water and power moves plus 'while we're here' upgrades. Both are decided at quote stage — priced, dated and signed, or left out cleanly." },
      { q: "Is my renovation covered by warranty?", a: "Yes — 12 months workmanship on the refit, waterproofing scopes carry up to 5 years, and the invoice states which is which per trade." },
      { q: "Can we keep the old fridge during works?", a: "Sequencing keeps your usable zones running — water and power move in planned swaps, and the temporary kitchen plan is part of the programme." }
    ]
  },
  "bathroom-renovation": {
    intro: "Bathroom renovation without the dread: leak-safe waterproofing, new tiles, fresh fixtures — planned so the house keeps one working bathroom, dry access kept all day.",
    bullets: ["Membrane renewal with flood testing", "Phased for single-bathroom households", "Anti-slip floors and falls checked", "Silicone and seals done to last"],
    faqs: [
      { q: "How long will we be without the bathroom?", a: "A full single-bathroom refit typically needs a planned few-day window; sequencing and temporary arrangements are agreed in the quote, not improvised at the first visit." },
      { q: "Why does my grout keep going black again?", a: "Because the wet-zone seal fails, not the grout — membrane edges, curb heights and silicone joints are rebuilt on renovation so the tile system dries the way it should." },
      { q: "What guarantees come with a renovation?", a: "12 months workmanship and up to 5 years on waterproofing systems — both on the invoice, per zone, with the ponding-test record attached." },
      { q: "Do you also fix the leak we never asked about?", a: "If the survey finds a leak path, it goes in the quote with a reason — because a beautiful bathroom over a live leak is just expensive tomorrow." }
    ]
  },
  "awning-installation": {
    intro: "Awnings and roofing for car porches, patios and yards: polycarbonate, metal deck or ACP chosen against your actual sun angle and rain sweep, engineered to the site, installed tidily.",
    bullets: ["Design starts from sun and rain exposure", "Materials matched to your span", "Gutters and drainage decided up front", "12-month workmanship warranty"],
    faqs: [
      { q: "Polycarbonate, ACP or metal deck — which one for my porch?", a: "The site decides: heat under the roof, span, rain angle and noise. We recommend against anything that fails your conditions, even if it sells bigger." },
      { q: "How much does an awning cost?", a: "Quoted per site — span, material, fixing condition and drainage. No generic 'starting from' number, because a wrong-sized quote is a wrong-sized bill later." },
      { q: "Will install damage my new paint or tiles?", a: "Fixings are set into structure, not finishes; protection is laid, seal lines are finished, and the site is left clean at handover — the 12-month warranty covers the workmanship." },
      { q: "Will the fixings leak through my tiles?", a: "Anchor points are sealed and set with the right fastener family for the substrate; after works the wall is left as found, not filled with foam." }
    ]
  }
};
