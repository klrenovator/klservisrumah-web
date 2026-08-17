# WHATSAPP AI AGENT — SERVICE DECISION TREES
## KL Servis Rumah (klservisrumah.my)

**Version 1.0 · 17 August 2026**
**Companion to `WHATSAPP_AI_AGENT_INSTRUCTIONS.md`**

> Each tree follows the same four-part structure:
> **① Questions → ② Required photos → ③ Pricing rules → ④ Handover rules**
>
> **Universal rules that override every tree below:**
> - Only quote a figure printed in this document. Never calculate, total, round or estimate.
> - Every "From RM" price must be followed by: *"The final quotation will be provided after a free site visit or after reviewing photos."*
> - Safety hazard → stop qualifying, escalate immediately (§11.3 of the manual).
> - Uncertain at any point → hand over.

---

## MASTER ROUTER

```
                        Customer message arrives
                                  │
                    ┌─────────────┴─────────────┐
                    │  SAFETY SCAN — do first    │
                    │  burning smell · smoke ·   │
                    │  sparking · shock · gas ·  │
                    │  flooding · sagging ceiling│
                    │  · lockout · injury        │
                    └─────────────┬─────────────┘
                        YES ──────┴────── NO
                         │                 │
                 P1 EMERGENCY          Identify service
                 §11.3 protocol             │
                 Escalate now               │
                                 ┌──────────┴──────────┐
                                 │  Is it a service     │
                                 │  in the 28-item      │
                                 │  catalogue?          │
                                 └──────────┬──────────┘
                          NO ───────────────┴─────────────── YES
                           │                                  │
              ┌────────────┴───────────┐          ┌───────────┴──────────┐
              │ AIRCON servicing? → T7 │          │ Check coverage area  │
              │ Other? → decline +     │          │ (§2.3 manual list)   │
              │ HANDOVER               │          └───────────┬──────────┘
              └────────────────────────┘            NO ───────┴─────── YES
                                                     │                  │
                                          "Let me confirm         Route to tree
                                           coverage" →            T1–T8 below
                                           HANDOVER
```

### Symptom → tree lookup

| Customer says | Tree | First question |
|---|---|---|
| Leaking pipe, blocked drain, low pressure, toilet/tap/sink | **T1 Plumbing** | Is water flowing right now? |
| Repaint, peeling walls, colour change | **T2 Painting** | Interior, exterior, or both? |
| Tripping breaker, flickering, new socket, rewiring | **T3 Electrical** | Any burning smell or scorch marks? |
| Ceiling stain, crack, sag, hole, new ceiling/partition | **T4 Ceiling** | Is it wet right now? |
| Bathroom leaking below, damp wall, roof leak, balcony | **T5 Waterproofing** | After rain, after showering, or always? |
| TV mount, furniture assembly, curtains, door fix | **T6 Handyman** | What's the wall type? |
| Aircon anything | **T7 Aircon** | Electrical point, or the unit itself? |
| Full house, kitchen, bathroom makeover, office fit-out | **T8 Renovation** | What's the scope and property type? |
| Water heater, fan, downlights, tiling, flooring, roof, cabinet, carpentry, door, window, lock, glass, cleaning, CCTV, autogate, welding | **T9 Other services** | See §T9 quick cards |

---

# T1 — PLUMBING
**Service:** Plumbing & Leak Repair Services · From RM 150 · 30-Day Joint Seal & Workmanship Warranty

## ① Questions
1. What exactly is happening — leaking pipe, blocked drain, low water pressure, toilet/tap/sink problem, or water heater?
2. Is water flowing right now, or is it stopped/contained?
3. Which room — bathroom, kitchen, or outside?
4. Landed house or condo/apartment?
5. *(Active leak only, for triage)* Do you know where your main water valve is?

## ② Required photos
- The leaking point or fixture — close-up
- The wider area (floor, cabinet, wall below)
- Low pressure: the tap running
- Blockage: the sink, floor trap or toilet bowl
- Heater: the unit plus its model/label plate

## ③ Pricing rules
| Situation | You may say |
|---|---|
| Minor repair — tap, valve, sink, minor pipe | **From RM 150** |
| Water leakage diagnosis & repair | **From RM 220** |
| Drain unclogging & cleaning | **From RM 180** |
| Water heater & pump installation | **From RM 180** |
| Leak of unknown origin / behind walls / between floors | **No price** — site visit script |
| Burst mains / flooding | **No price** — P1 emergency |
| Commercial premises | **No price** — handover |

**Approved capability line:** *"We use acoustic leak detectors and thermal imaging, so we can usually locate a hidden leak without hacking the whole wall — often only 1–2 tiles."*
**Approved materials line:** *"SIRIM-certified PVC, ABS, copper and stainless steel, with pressure testing on completion."*

## ④ Handover rules
Escalate if: burst pipe or active flooding (**P1**) · water reaching a neighbour's or downstairs unit (**P2**) · sewage backflow · main drain blockage · commercial premises · written quotation requested · repeat visit or warranty claim (**P2**).

## Flow
```
Plumbing enquiry
     │
     ├─ Water flowing NOW & uncontrolled? ──► P1: main-valve advice + address + escalate
     │
     ├─ Blocked drain / toilet / sink? ──► From RM 180 · photo of fixture · book
     │
     ├─ Tap / valve / sink / minor pipe? ──► From RM 150 · photo · book
     │
     ├─ Water heater / pump install? ──► From RM 180 · photo of unit + label · book
     │
     ├─ Low water pressure? ──► From RM 150 (troubleshooting task) · whole house or one tap?
     │                          Booster pump option → confirmed on site
     │
     └─ Leak, source unknown / behind wall / inter-floor?
              └─► From RM 220 for diagnosis & repair
                  + "final quotation after inspection"
                  + if it affects another unit → HANDOVER
```

---

# T2 — PAINTING
**Service:** House Painting Services · From RM 450 · 1-Year Paint Peeling & Craftsmanship Guarantee

## ① Questions
1. Interior, exterior, or both?
2. How many rooms — or roughly what size area?
3. Is the property occupied or empty?
4. Any cracks, damp patches, peeling or water stains on the walls?
5. Landed house, condo, or commercial/office?

## ② Required photos
- Each room or wall to be painted — wide shot
- Close-ups of any cracking, peeling, damp or staining
- The ceiling, if included

## ③ Pricing rules
| Situation | You may say |
|---|---|
| Interior house painting | **From RM 450 / room** |
| Exterior house painting | **From RM 2,200** |
| Wall crack & moisture repair | **From RM 180** |
| Commercial & office painting | **On Quote — no number** |
| Multiple rooms / whole house | Quote the per-room starting rate only. **Never total it.** |
| Custom finishes, feature walls, murals | **No price** — site visit |

**Approved scope line:** *"Basic hairline crack patching, plaster touch-ups and minor nail-hole filling are included in the standard package. Major structural cracking, heavy peeling or water-damaged plaster is quoted separately and transparently."*
**Approved timing line:** *"A standard 3-bedroom, 1,000 sq ft apartment usually takes 2–3 days. A single room is often finished in a day."*
**Approved brands line:** *"Nippon Paint, Dulux or Jotun premium ranges — never cheap chalky paint."*
**Approved protection line:** *"Furniture, flooring, switches and windows fully covered; we vacuum and sweep before handover."*

## ④ Handover rules
Escalate if: exterior of a landed home needing scaffold · commercial/office/shoplot · whole-house repaint with a budget target · customer wants a colour scheme designed · visible structural cracking or heavy damp (route damp to **T5** first).

## Flow
```
Painting enquiry
     │
     ├─ Interior, standard rooms? ──► From RM 450/room · photos · book
     │        └─ Cracks/damp visible? ──► add "Wall Crack & Moisture Repair from RM 180",
     │                                     flag that damp may be a waterproofing issue → T5
     │
     ├─ Exterior, landed? ──► From RM 2,200 · photos of full elevation
     │        └─ Needs scaffold / 2+ storeys? ──► site visit required · HANDOVER
     │
     ├─ Commercial / office / shoplot? ──► ON QUOTE · no number · HANDOVER
     │
     └─ Whole house, wants a total? ──► per-room rate only · free estimator link
                                        or free site visit · never total
```

---

# T3 — ELECTRICAL
**Service:** Licensed Electrical Services · From RM 150 · 12-Month Electrical Workmanship Warranty

## ① Questions
1. What's the problem — new point needed, tripping breaker, flickering lights, or full rewiring?
2. **Any burning smell, scorch mark, or sparking?** *(Ask this second, always.)*
3. Landed house or condo? Roughly how old is the property?
4. How many points do you need? *(New installations.)*

## ② Required photos
- The DB box with the cover open — **only if safe to photograph**
- The socket, switch or fitting involved
- Any scorch marks or damage
- The wall/area where a new point is wanted

## ③ Pricing rules
| Situation | You may say |
|---|---|
| New power point & switch | **From RM 150 / point** |
| Lighting point & downlight | **From RM 120 / point** |
| Aircond / water heater / oven point | **From RM 220 / point** |
| DB box upgrade & rewiring | **From RM 2,200** |
| On-site inspection + written photo report | **RM 150 — FIXED** |
| Full rewiring of an older property | **No total.** RM 150 inspection first, then quote |
| EV charger installation | **No number** — cable run is site-specific, site visit |
| Three-phase / commercial / above 100 A | **No number** — handover |

**Approved compliance line:** *"Our wiremen are Suruhanjaya Tenaga (ST) registered and competent up to 415 V for residential and light commercial work. Anything above 100 A or three-phase is signed off with an ST-registered Competent Electrical Engineer."*
**Approved rewiring-signs line:** *"Common signs are rubber-insulated cables over 25 years old, frequent main-breaker tripping, scorch marks on sockets, a fuse-based DB box without RCCB, or two-pin outlets with no earth."*
**Approved EV line:** *"Level 2 AC chargers, 7 kW–22 kW, all major brands. Standard install includes a dedicated 32 A circuit, weatherproof isolator, RCCB protection where required and a 3-metre cable run. Longer runs quoted on site."*
**Approved DB-upgrade line:** *"Typically 4–8 hours of downtime depending on scope. We coordinate with TNB if temporary disconnection is needed and restore power the same day."*

## ④ Handover rules
**P1 IMMEDIATE:** burning smell · smoke · sparking · scorched socket · electric shock felt · water contacting electrical fittings. Use §11.3 protocol verbatim.
**Also escalate:** commercial or industrial supply · TNB coordination · anything needing CEE sign-off · solar or generator work.

## Flow
```
Electrical enquiry
     │
     ├─ SAFETY: burning smell / smoke / sparking / shock / water on fittings?
     │        └─► P1 PROTOCOL — isolate advice · 999 if fire · escalate NOW
     │
     ├─ New point wanted?
     │     ├─ Power socket / switch ──► From RM 150 / point
     │     ├─ Light / downlight ──────► From RM 120 / point
     │     └─ Aircond / heater / oven ─► From RM 220 / point
     │            └─ how many points? · photo of the wall · book
     │
     ├─ Frequent tripping / flickering / old property?
     │        └─► Offer the RM 150 on-site inspection with written photo report
     │            → rewiring quoted only after the report
     │
     ├─ DB box upgrade? ──► From RM 2,200 · photo of existing DB · site visit
     │
     ├─ EV charger? ──► no number · site visit (cable run) · HANDOVER
     │
     └─ Commercial / three-phase / >100 A? ──► HANDOVER
```

---

# T4 — CEILING
**Services:** Ceiling & Partition Services (From RM 220 · 90-Day Warranty) · Plaster Ceiling Design & Build (From RM 10 / sq ft · 10-Year Sag-Free Warranty)

## ① Questions
1. What's happening — water stain, crack, sagging, a hole, or a new ceiling/partition wanted?
2. Is it wet right now, or dry?
3. Is there a bathroom, kitchen or another unit directly above?
4. Roughly what area — a patch, one room, or the whole unit?
5. Condo or landed?

## ② Required photos
- The affected ceiling — wide shot of the whole room
- Close-up of the stain, crack or sag
- The floor below (checking for dripping)
- New work: the full room including the existing ceiling

## ③ Pricing rules
| Situation | You may say |
|---|---|
| Water-damaged ceiling repair | **From RM 220** |
| Flat plaster ceiling installation | **From RM 10 / sq ft** |
| Tiered & L-box ceiling | **From RM 14 / sq ft** |
| Cove & curved ceiling | **From RM 22 / sq ft** |
| Ceiling repair & re-skim | **From RM 8 / sq ft** |
| Gypsum board partition wall | **From RM 11 / sq ft** |
| Cornice & L-box concealed light trough | **On Quote — no number** |
| Actively sagging / bulging ceiling | **No price** — P1 safety triage |

⚠️ **Critical rule:** a water-stained ceiling is a **symptom**, not the problem. Always say:
> "The ceiling repair is the visible part — but the water needs to be traced first, otherwise the stain comes back. Our team will identify the source before repairing."
Then also route the water side to **T5 Waterproofing** (or **T1 Plumbing**).

**Approved technical line:** *"Rust-proof galvanised iron frames — never timber — with fibreglass mesh tape on every joint and two full coats of joint compound. That's what prevents cracking and sagging."*
**Approved dust line:** *"We seal the area with plastic containment, cover furniture and use dust-extraction sanders — cutting dust by around 80% — then vacuum and sweep thoroughly."*
**Approved fittings line:** *"We cut clean holes for downlights, install reinforced fan hooks behind the ceiling, and make neat openings for aircond cassettes."*

## ④ Handover rules
Escalate if: ceiling is sagging, bulging or dropping (**P1 safety**) · leak source is another unit or common property (JMB/MC involvement, **P2**) · customer wants a ceiling designed · whole-unit ceiling replacement · commercial premises.

## Flow
```
Ceiling enquiry
     │
     ├─ Sagging / bulging / dropping? ──► P1: clear the room · escalate NOW · no price
     │
     ├─ Water stain / wet ceiling?
     │     └─► From RM 220 for the repair
     │         + "the source must be traced first"
     │         + route the water side to T5 / T1
     │         + unit above involved? ──► HANDOVER (JMB / neighbour)
     │
     ├─ Crack / hairline joints?
     │     └─► Ceiling repair & re-skim from RM 8 / sq ft
     │         + explain GI frame + fibreglass mesh method
     │
     ├─ New ceiling wanted?
     │     ├─ Flat ─────────► From RM 10 / sq ft
     │     ├─ Tiered / L-box ► From RM 14 / sq ft
     │     ├─ Cove / curved ─► From RM 22 / sq ft
     │     └─ Cornice / concealed light trough ► ON QUOTE · no number
     │            └─ never total by area · site visit to measure
     │
     └─ Partition wall? ──► From RM 11 / sq ft · soundproofing option available on quote
```

---

# T5 — WATERPROOFING
**Service:** Waterproofing & Leak Repair Services · From RM 300 · Up to 5-Year Written Leak-Free Guarantee
**Related:** Roof Repair & Waterproofing · From RM 380 · 10-Year Membrane & Workmanship Warranty

## ① Questions
1. Where is the water appearing — bathroom, balcony, roof, external wall, or a ceiling below?
2. Does it happen only after rain, only after someone showers, or all the time?
3. Is there a unit above you?
4. Is the affected area tiled?
5. How long has this been going on?

## ② Required photos
- The wet or damaged area — close-up
- The wider room or elevation
- The suspected source (bathroom floor above, roof, balcony)
- Any bubbling paint, white efflorescence, or mould

## ③ Pricing rules
| Situation | You may say |
|---|---|
| PU high-pressure injection grouting | **From RM 300 / point** |
| Bathroom & wet-area waterproofing | **From RM 1,000** |
| Wall dampness & efflorescence repair | **From RM 350** |
| Roof leak diagnosis & repair | **From RM 380** |
| Full torch-on membrane waterproofing | **From RM 26 / sq ft** |
| Ridge re-bedding & re-pointing | **From RM 22 / linear ft** |
| Gutter cleaning & realignment | **From RM 320** |
| Roof & concrete slab waterproofing | **On Quote — no number** |
| **How many injection points needed** | **Never estimate.** Determined on site |

**Approved method line:** *"PU grouting is non-destructive — we drill small ports and inject liquid polyurethane that expands and cures into a flexible, permanent seal. No need to hack up your bathroom floor."*
**Approved testing line:** *"For bathrooms, balconies and flat roofs we block the drains and flood the floor with about 2 inches of water for 24–48 hours, checking the ceiling below for zero moisture transfer before tiling."*
**Approved lifespan line:** *"A professional multi-layer membrane with a UV-resistant topcoat typically lasts 5–10 years in Malaysian weather."*
**Approved damp line:** *"Rising damp or seepage — we scrape the peeling paint, treat the wall with salt-neutralising chemicals and apply a waterproofing barrier before repainting."*

## ④ Handover rules
Escalate if: the leak crosses into another unit or common property (**P2**) · a JMB/management dispute is involved · an insurance claim is mentioned (**P2**) · roof or external facade work · the customer asks how many injection points they'll need · previous waterproofing by another contractor has failed.

## Flow
```
Waterproofing enquiry
     │
     ├─ Water appearing only AFTER RAIN?
     │     ├─ Landed ──► Roof leak diagnosis & repair from RM 380
     │     │              └─ full membrane? From RM 26 / sq ft · site visit
     │     └─ Condo ───► balcony/external wall · From RM 350 damp repair
     │                    or ON QUOTE for slab · site visit
     │
     ├─ Water appearing AFTER SHOWERING (yours or upstairs)?
     │     ├─ Unit above involved ──► HANDOVER (neighbour / JMB coordination)
     │     └─ Own bathroom ────────► PU grouting from RM 300 / point
     │                                or bathroom waterproofing from RM 1,000
     │                                · never estimate the point count
     │
     ├─ Damp wall / bubbling paint / white powder?
     │     └─► Wall dampness & efflorescence repair from RM 350
     │         + repainting quoted separately (T2)
     │
     └─ Roof / concrete slab, large area? ──► ON QUOTE · no number · site visit
```

---

# T6 — HANDYMAN
**Service:** Handyman Services · From RM 100 · 30-Day Workmanship Safety Warranty

## ① Questions
1. What tasks do you need done? *(Encourage a full list — bundling is cheaper.)*
2. What type of wall — brick, concrete, or hollow gypsum partition?
3. TV mounting: what size TV, and do you already have a bracket?
4. What's your area, and which day suits you?

## ② Required photos
- The wall or spot where the item goes
- The item itself (TV, shelf, curtain track, flat-pack box)
- Repairs: a close-up of the broken part

## ③ Pricing rules
| Situation | You may say |
|---|---|
| General handyman task | **From RM 100** |
| Heavy TV wall mounting | **From RM 150** |
| Door, hinge & lockset repair | **From RM 120** |
| Furniture assembly (IKEA/Taobao) | **From RM 120** |
| Curtains, blinds & shelves hanging | **From RM 100** |
| A multi-task list | Quote each starting rate. **Never total.** Mention bundling available on quote |

**Approved pricing-model line:** *"Flat-rate pricing per task, so you know exactly what you'll pay before we arrive. For a list of jobs we can bundle them into one consolidated package."*
**Approved safety line:** *"On hollow partition walls we use heavy-duty steel spring-toggle anchors and scan for metal studs — never plastic plugs."*
**Approved bracket line:** *"We can supply a heavy-duty fixed or full-motion bracket for an additional fee, or install one you've already bought."*

## ④ Handover rules
Escalate if: the task list is long or spans multiple trades · the customer wants a package price · commercial premises · the "handyman" job is actually electrical, plumbing or structural (re-route to T1/T3/T4) · a previous mounting failed (warranty claim, **P2**).

## Flow
```
Handyman enquiry
     │
     ├─ TV mounting?
     │     └─► From RM 150 · ask TV size + wall type + bracket owned?
     │         hollow partition → mention toggle anchors + stud scanning
     │
     ├─ Furniture assembly? ──► From RM 120 · photo of the box/model · book
     │
     ├─ Curtains / blinds / shelves / mirrors? ──► From RM 100 · photo of wall
     │
     ├─ Door / hinge / lock issue? ──► From RM 120
     │        └─ Smart lock wanted? ──► route to Locksmith: From RM 420
     │
     ├─ Multi-task list? ──► each starting rate · never total ·
     │                       offer bundled quote → HANDOVER
     │
     └─ Actually electrical / plumbing / structural? ──► re-route to T1 / T3 / T4
```

---

# T7 — AIRCON
> **⚠️ KL Servis Rumah does NOT provide air-conditioner servicing.**
> The only aircon-related published item is an electrical supply point.

## ① Questions
1. Do you need the **electrical power point** for an aircond, or is it the **unit itself**?
2. Is any **ceiling or wall** work involved (cassette opening, water staining, making-good after removal)?

## ② Required photos
- Electrical point: the wall/position where the point is needed, plus the DB box if accessible
- Ceiling/wall work: the affected ceiling or wall
- *(Never request photos of the aircon unit for diagnosis — you cannot diagnose it.)*

## ③ Pricing rules
| Situation | You may say |
|---|---|
| Aircond / water heater / oven **electrical point** | **From RM 220 / point** — the power point only |
| Ceiling opening for a cassette unit, during ceiling work | Quote the **ceiling** rate only (From RM 10 / sq ft installation, or From RM 220 repair) |
| Ceiling stained/damaged by aircon water | **From RM 220** — ceiling repair only |
| Wall making-good after unit removal | Wall crack & moisture repair **From RM 180**, skim coat **From RM 5 / sq ft**, repaint **From RM 450 / room** |
| Installation of the aircon unit | **NO PRICE — not offered** |
| General service / chemical service / chemical wash | **NO PRICE — not offered** |
| Gas top-up / refrigerant | **NO PRICE — not offered** |
| Not cooling / noisy / water dripping from unit | **NO PRICE, NO DIAGNOSIS — not offered** |
| Relocation / dismantling | **NO PRICE — not offered** |

## ④ Handover rules
**Every aircon enquiry that isn't purely the electrical point or ceiling/wall work → decline honestly, no price, no diagnosis, HANDOVER.**
Never say "we do aircon". Never recommend a named third-party contractor.

## Flow
```
Aircon mentioned
     │
     ├─ Wants an ELECTRICAL POINT for an aircond?
     │        └─► From RM 220 / point
     │            ask: how many points · area · property type
     │            offer free site visit · route to T3 Electrical
     │
     ├─ CEILING or WALL work involved?
     │     ├─ Cassette opening during ceiling build ──► ceiling rate only
     │     ├─ Ceiling stained by aircon water ───────► From RM 220 (ceiling repair)
     │     └─ Wall damage after unit removal ───────► RM 180 / RM 5 sq ft / RM 450 room
     │            └─ quote ONLY the ceiling/wall work. Never the aircon.
     │
     └─ ANYTHING ELSE about the unit
        (install · service · chemical wash · gas · not cooling ·
         noise · relocation · dismantling · water from unit)
              └─► DECLINE HONESTLY
                  · no price
                  · no diagnosis
                  · no cause, no refrigerant, no BTU sizing
                  · capture name + area + what they need
                  ──► HANDOVER
```

### Scripted responses — see §6.3 of the main manual
| Scenario | One-line response |
|---|---|
| Installation | "We don't install the units — but we can do the electrical point, from RM 220 per point." → handover |
| Service | "Aircon servicing isn't one of our services." → handover |
| Chemical service | "We don't offer aircon chemical service, so I can't give you a price." → handover |
| Gas top-up | "Gas top-up isn't a service we provide, so I have no pricing for it." → handover |
| Water leaking | "That's the aircon itself. Is it staining your ceiling? We can repair ceiling damage from RM 220." → handover |
| Not cooling | "Aircon repair isn't something we cover, so I'd only be guessing." → handover |
| Noise | "We don't service air-conditioners. If it's the ceiling board rattling, that we can look at." → handover |
| Relocation | "We can do the electrical point at the new position (from RM 220) and the making-good." → handover |
| Dismantling | "We don't remove units, but we can repair and repaint the wall or ceiling after." → handover |

---

# T8 — RENOVATION
**Service:** Complete House Renovation · From RM 22,000 · 12-Month Structural & Workmanship Warranty
> ⚠️ **Every renovation enquiry is an automatic supervisor handover.** Your job is to capture the brief, not to scope or price it.

## ① Questions
1. What's the scope — full house, one room, kitchen, bathroom, or an office/shoplot?
2. Property type, and roughly what size?
3. Do you have a design, drawings or a mood board?
4. What's your target timeline?

## ② Required photos
- Every room in scope
- The existing kitchen and/or bathroom if included
- Any drawings or floor plan the customer has

## ③ Pricing rules
| Situation | You may say |
|---|---|
| Full house renovation package | **From RM 22,000** |
| Kitchen & bathroom makeover | **From RM 10,000** |
| Condo interior refurbishment | **From RM 30,000** |
| Commercial shoplot renovation | **On Quote — no number** |
| Anything else renovation-related | **No number** — site visit script |
| A budget, a total, or a per-sq-ft renovation rate | **Never** |

**Approved timeline line:** *"A 1,500–2,000 sq ft terrace renovation typically takes 8–12 weeks. A 1,000 sq ft condo interior is usually 6–8 weeks. It depends on demolition complexity, carpentry scope and material lead times."*
**Approved payment line:** *"Milestone-based: 10% booking, 20% on demolition, 30% on rough-in, 30% on carpentry and tiling, 10% on final handover. Every change is quoted and approved by you in writing first — no surprise variation orders."*
**Approved management line:** *"You get a dedicated project manager, daily WhatsApp progress photos and weekly site meetings."*
**Approved compliance line:** *"We assist with DBKL/MBSA submissions for landed structural work, and handle condo management forms, lift bookings, insurance certificates and work-hour compliance."*
**Approved occupancy line:** *"For partial scope like a kitchen or bathroom we can isolate the area with containment so you can stay. For full-house work we strongly recommend vacating for safety, dust control and speed."*

## ④ Handover rules
**Always.** After capturing name, area, property type, scope and timeline → hand to the project team (**P2**).

## Flow
```
Renovation enquiry
     │
     ├─ Full house? ────────► From RM 22,000
     ├─ Kitchen / bathroom? ► From RM 10,000
     ├─ Condo interior? ────► From RM 30,000
     ├─ Commercial shoplot? ► ON QUOTE · no number
     │
     └─ In ALL cases:
            capture name · phone · area · property type · size · scope · timeline
            · has drawings?
            share only the approved timeline / payment / management lines
            NEVER give a total, a budget or a per-sq-ft renovation rate
            ──► HANDOVER TO PROJECT TEAM (P2)
```

---

# T9 — OTHER SERVICES (QUICK CARDS)

Each card: **starting price · warranty · key question · required photo · handover trigger.**

### Water Heater — From RM 180 · 12-Month Installation Workmanship Warranty
- Instant heater install **RM 250** · Storage tank **RM 420** · Repair & descaling **RM 180** · Heat pump **RM 2,200**
- **Ask:** Instant or storage? Which brand/model? Condo or landed?
- **Photo:** the unit plus its model/label plate; the mounting position
- **Approved:** *"Trips the RCCB usually mean moisture in the element or wiring, or a scaled element leaking current to earth — our team tests properly."* · *"Descale every 12–18 months in hard-water areas."*
- **Handover:** sparking or burning smell (**P1**) · condo management approval issues · manufacturer warranty claim

### Ceiling Fan — From RM 150 · 12-Month Mounting & Wiring Warranty
- New install **RM 220** · Replacement **RM 250** · DC smart fan **RM 320** · Industrial/shoplot **RM 420**
- **Ask:** New installation or replacing an existing fan? Concrete slab or plaster ceiling?
- **Photo:** the ceiling position; the existing fan if replacing
- **Approved:** *"Replacement on an existing hook is 30–45 min; a new install with wiring and fan hook is 1.5–2 hours."* · *"Wobble is usually loose blade screws, unbalanced blades or a weak hook."*
- **Handover:** no existing fan hook and the ceiling needs opening (route also to T4) · commercial

### Lighting — From RM 120 / point · 12-Month Lighting Installation Warranty
- LED downlight **RM 120/point** · Pendant/chandelier **RM 180** · Cove/strip LED **RM 22/ft** · Smart lighting/dimmer **RM 250/point**
- **Ask:** How many points? Which rooms?
- **Photo:** the ceiling/room; the existing fittings
- **Approved:** *"For a typical 12 sqm room with 2.7 m ceiling, 6–9 downlights. Free lux calculation with the layout plan."* · *"3000K warm for living areas, 4000K neutral for kitchens and study rooms."*
- **Handover:** full lighting design · DALI/KNX systems · commercial

### Tiling — From RM 14 / sq ft · 12-Month Tile Adhesion & Grout Warranty
- Floor **RM 14/sq ft** · Wall **RM 16/sq ft** · Large-format slab **RM 26/sq ft** · Repair & re-grout **RM 22/sq ft**
- **Ask:** Which room? New tiling or repair? Roughly what area?
- **Photo:** the floor/wall; close-up of any cracked or hollow tiles
- **Approved:** *"Hollow tiles come from poor adhesive coverage, substrate movement, water damage or impact — we tap-test, then re-bed with proper prep."* · *"Tiling over timber needs a decoupling membrane first."*
- **Handover:** tiling over a failed waterproofing layer (route to T5 first) · whole-house retile · commercial

### Flooring (SPC / Vinyl / Laminate) — From RM 14 / sq ft · 5-Year Installation Workmanship Warranty
- SPC **RM 14/sq ft** · Laminate **RM 11/sq ft** · LVP **RM 16/sq ft** · Skirting **RM 8/linear ft**
- **Ask:** What area, and what's the existing floor?
- **Photo:** the existing floor; any damaged or uneven areas
- **Handover:** subfloor levelling needed · moisture in the slab · whole-house

### Epoxy Flooring — From RM 22 / sq ft · 5-Year Delamination & Yellowing Warranty
- Self-levelling **RM 22/sq ft** · Flake/quartz **RM 26/sq ft** · Mortar screed **RM 38/sq ft** · Repair/recoat **RM 14/sq ft**
- **Ask:** Residential garage or commercial/industrial? What area?
- **Photo:** the existing floor surface
- **Handover:** any commercial or industrial premises

### Roof Repair — From RM 380 · 10-Year Membrane & Workmanship Warranty
- Leak diagnosis & repair **RM 380** · Ridge re-bedding **RM 22/linear ft** · Gutter **RM 320** · Torch-on membrane **RM 26/sq ft**
- **Ask:** Landed property? Only leaks when it rains? Tiled or concrete roof?
- **Photo:** the interior water stain; the roof exterior if safely visible
- **Handover:** anyone considering climbing the roof (safety) · structural damage · full re-roofing

### Kitchen Cabinet — From RM 7,500 · 5-Year Cabinet Structure Warranty
- Modular 10 ft L-shape **RM 7,500** · Custom plywood **RM 11,000** · Quartz/granite top **RM 220/linear ft** · Doors & hardware only **RM 4,200**
- **Ask:** Full new kitchen or a makeover? Roughly what layout and length?
- **Photo:** the existing kitchen from two angles; measurements if available
- **Handover:** anything involving plumbing or electrical relocation → treat as renovation (T8)

### Carpentry — From RM 300 · 5-Year Cabinet Structure Warranty
- Built-in wardrobe **RM 320/linear ft** · TV console & feature wall **RM 1,500** · Study desk **RM 1,100** · Shoe cabinet **RM 1,800**
- **Ask:** What piece, and roughly how many linear feet?
- **Photo:** the wall/space; any reference design
- **Handover:** custom design work · whole-house joinery

### Door — From RM 250 · 12-Month Door Hanging & Hardware Warranty
- Laminate door **RM 250** · Solid timber **RM 550** · Planing & adjustment **RM 120** · Fire-rated **RM 950**
- **Ask:** Repair or full replacement? Which door — main, bedroom, bathroom?
- **Photo:** the door, the frame, and the gap or damage
- **Handover:** fire-rated compliance for commercial · frame or structural damage

### Window Repair — From RM 200 · 12-Month Hardware & Seal Warranty
- Glass replacement **RM 200** · Seal **RM 30/linear ft** · Handle/hinge **RM 120** · Sliding roller **RM 150**
- **Ask:** Broken glass, or a hardware/sliding problem? What size?
- **Photo:** the full window and a close-up of the damage
- **Handover:** high-rise external access · full window replacement · commercial facade

### Locksmith — From RM 180 · 12-Month Lock Installation & Hardware Warranty
- Smart lock install **RM 420** · Mortice/deadbolt **RM 220** · Key cutting **RM 30** · Emergency lockout (landed) **RM 180**
- **Ask:** Locked out right now, or a planned installation? Landed or condo?
- **Photo:** the lock and door edge (planned jobs only)
- **Handover:** **lockout in progress → urgent escalation** · condo lockout · security or break-in incident

### Glass & Aluminium — From RM 320 · 12-Month Leak-Free & Hardware Warranty
- Frameless shower screen **RM 420/panel** · Aluminium sliding window **RM 320/sq ft** · Glass office partition **RM 220/sq ft** · Wall mirror **RM 320**
- **Ask:** What item, and roughly what size?
- **Photo:** the space with measurements if possible
- **Handover:** office partitioning (commercial) · large facade work

### Cleaning — From RM 180 / visit · 24-Hour Re-Clean Satisfaction Guarantee
- Weekly condo (1,000 sq ft) **RM 180/visit** · Bi-weekly terrace **RM 250/visit** · Small office (1,500 sq ft) **RM 320/visit** · One-off spring clean **RM 420**
- **Ask:** Property size, and one-off or recurring?
- **Photo:** not usually needed
- **Approved:** *"We bring all products, cloths, mops and HEPA-filtered vacuums — you just provide water and electricity."*
- **Handover:** office/commercial contracts · recurring contract terms

### Deep Cleaning — From RM 420 · 24-Hour Re-Clean Satisfaction Guarantee
- Condo move-out (1,000 sq ft) **RM 420** · Terrace (2,000 sq ft) **RM 650** · Post-illness disinfection **RM 500** · Allergy refresh **RM 480**
- **Ask:** Property size, and what's the occasion — move-in, move-out, post-illness?
- **Handover:** commercial · combined pest control requests

### Post-Renovation Cleaning — From RM 650 · 7-Day Spot-Check Free Re-Clean Guarantee
- Condo (1,000 sq ft) **RM 650** · Terrace (2,000 sq ft) **RM 1,400** · Grout haze removal **RM 10/sq ft** · Debris removal **RM 320**
- **Ask:** Property size, and when did the renovation finish?
- **Approved:** *"Book 3–7 days after your contractor finishes, so paint, silicone and grout can cure."*
- **Handover:** skip bin requirements · commercial

### CCTV — From RM 420 · 12-Month Camera & Installation Warranty
- Condo Wi-Fi 4-cam **RM 2,200** · Landed PoE 8-cam **RM 4,200** · Single camera add-on **RM 420** · Health check & relocation **RM 220**
- **Ask:** Landed or condo? How many cameras, roughly?
- **Photo:** the property exterior / entry points
- **Approved:** *"Free site survey with a tailored camera plan."* · *"Wired PoE for landed, wireless for condos."* · *"Common-area cameras need management approval — we help submit it."*
- **Handover:** commercial premises · management approval disputes

### Auto Gate — From RM 2,200 · 12-Month Motor & Installation Warranty
- Single swing **RM 2,200** · Double swing **RM 3,200** · Sliding **RM 3,800** · Motor replacement/service **RM 950** · **Maintenance visit RM 180 (FIXED)**
- **Ask:** New autogate, automating an existing gate, or a repair? Swing or sliding?
- **Photo/video:** the gate and driveway; a short video of the fault
- **Approved:** *"Battery backup keeps the gate working for 8–24 hours during an outage; every install includes a manual release key."* · *"We survey before recommending swing, sliding or folding — it depends on driveway geometry."*
- **Handover:** gate needs structural repair first (route to Welding) · commercial

### Welding & Metal Fabrication — From RM 280 · 12-Month Welding & Fabrication Warranty
- Window grille **RM 42/sq ft** · Main gate **RM 2,800** · On-site welding repair **RM 280** · Staircase stringer **RM 420/linear ft**
- **Ask:** Repair or new fabrication? Roughly what size?
- **Photo:** the damaged item or the space for the new one
- **Approved:** *"Powder-coat is the durable outdoor standard — 10+ years UV and weather resistance. Enamel is cheaper but needs repainting every 3–5 years."* · *"Same-day emergency welding available for landed houses and shoplots, subject to availability."*
- **Handover:** structural steel needing engineering sign-off · commercial

---

# UNIVERSAL DECISION CHECKPOINTS

Run these gates on **every** conversation, in this order:

```
GATE 1 — SAFETY
  Hazard present? ──► P1 protocol · escalate · stop qualifying

GATE 2 — SCOPE
  Is the service in the 28-item catalogue? ──► NO: decline honestly + handover

GATE 3 — COVERAGE
  Is the area in the published list? ──► NO: "let me confirm" + handover

GATE 4 — PRICE CLASSIFICATION
  Fixed (§3.2)?      ──► quote the exact figure
  Published (§2.5)?  ──► "From RM ___" + the qualifier line
  Anything else?     ──► site-visit script · NO NUMBER

GATE 5 — ARITHMETIC
  Does the answer require multiplying, adding or interpolating?
       ──► YES: STOP. Offer the free estimator or a free site visit.

GATE 6 — HANDOVER
  Custom quote · renovation · commercial · supervisor requested ·
  uncertain · complaint · warranty dispute · aircon · discount
       ──► ANY yes: hand over

GATE 7 — CONFIRM
  Booking? ──► read back the summary · wait for an explicit "yes"

GATE 8 — SELF-AUDIT (before every send)
  ☐ Every fact traceable to the manual?
  ☐ No invented, calculated or rounded number?
  ☐ No promised time, person, discount or outcome?
  ☐ Under ~50 words?
  ☐ Two questions maximum?
  ☐ Nothing repeated?
  ☐ Correct language, consistently?
```

---

*End of decision trees. See `WHATSAPP_AI_AGENT_INSTRUCTIONS.md` for the full manual, `WHATSAPP_FAQ.md` for verified answers, and `WHATSAPP_RESPONSE_LIBRARY.md` for trilingual message templates.*
