# Canonical keep/merge decisions — Painting & Ceiling/Partition (2026-08-10)

**Scope rule:** No localized priority page was generated before this decision was
written and recorded. This document is the required evidence-gate from
`AI_OPTIMIZATION_ROADMAP.md` → "Next Session — START HERE" item 5.

These are **documented keep decisions** based on the audit evidence in
`docs/service-architecture-multilingual-audit-2026-08-09.md` (sections 4, 14 and
the high-overlap pairs list). No URL is deleted or redirected here because the
audit explicitly forbids doing so "until Search Console and intent review". No
Search Console / GSC data was available to this session, so the conservative,
evidence-preserving option is chosen for every pair.

---

## 1. Painting specialty URLs vs the `-kl` cluster pages

Canonical source-of-truth specialties (4, from `services-data.painting`):

| Specialty | URL |
|---|---|
| Interior House Painting | `/services/painting/interior-house-painting` |
| Exterior House Painting | `/services/painting/exterior-house-painting` |
| Commercial & Office Painting | `/services/painting/commercial-and-office-painting` |
| Wall Crack & Moisture Repair | `/services/painting/wall-crack-and-moisture-repair` |

Competing EN-only cluster pages (from `content-data`):

| Cluster | URL | Overlaps |
|---|---|---|
| Interior Painting in KL | `/services/painting/interior-painting-kl` | `interior-house-painting` |
| Exterior Painting in KL | `/services/painting/exterior-painting-kl` | `exterior-house-painting` |
| Commercial Painting in KL | `/services/painting/commercial-painting-kl` | `commercial-and-office-painting` |

**Decision: KEEP both; do not merge or redirect yet.**
- The four canonical specialty pages are the **authoritative, structured**
  destinations that will receive real localized MS/ZH twins. All new
  locale-specialty routes and all internal links (main → specialty, specialty →
  blog/problem) target the canonical specialty slugs.
- The three `-kl` pages remain live EN guides. No localized counterparts are
  created for them, so no competing localized cluster duplicates are produced.
- Recommended follow-up (requires GSC evidence, out of scope): if the `-kl`
  pages show near-zero distinct impressions/backlinks vs their canonical
  specialty, consolidate with a 301 to the canonical specialty. Until that data
  exists, both stay.
- `wall-crack-and-moisture-repair` has **no** competing cluster page — no
  decision needed.

## 2. Ceiling specialties vs `-kl` cluster pages

Canonical source-of-truth specialties (4):

| Specialty | URL |
|---|---|
| Water-Damaged Ceiling Repair | `/services/ceiling/water-damaged-ceiling-repair` |
| Plaster Ceiling Installation | `/services/ceiling/plaster-ceiling-installation` |
| Gypsum Board Partition Wall | `/services/ceiling/gypsum-board-partition-wall` |
| Cornice & L-Box Concealed Light Trough | `/services/ceiling/cornice-and-l-box-concealed-light-trough` |

Competing EN-only cluster pages:

| Cluster | URL | Overlaps |
|---|---|---|
| Ceiling Installation in KL | `/services/ceiling/ceiling-installation-kl` | `plaster-ceiling-installation`, plus the standalone Plaster Ceiling service |
| Ceiling Repair in KL | `/services/ceiling/repair-kl` | `water-damaged-ceiling-repair` |
| Gypsum Partition Services KL & Selangor | `/services/ceiling/partition-kl` | `gypsum-board-partition-wall` |

**Decision: KEEP both; do not merge or redirect yet.**
- `water-damaged-ceiling-repair`, `gypsum-board-partition-wall` and
  `plaster-ceiling-installation` are the canonical specialty destinations for
  localized twins and internal linking.
- `cornice-and-l-box-concealed-light-trough` has **no** competing cluster page —
  no decision needed.
- The `-kl` pages remain as EN-only local guides; no localized cluster twins.

## 3. Ceiling main service vs the standalone Plaster Ceiling service

There are two top-level services whose intent overlaps on "plaster ceiling":

| Service | URL | Nature |
|---|---|---|
| Ceiling & Partition Services | `/services/ceiling` | Parent pillar incl. plaster ceiling install, water-damaged repair, gypsum partition, cornice/L-box |
| Plaster Ceiling Design & Build | `/services/plaster-ceiling` | Standalone pillar focused on plaster ceiling design & build |

**Decision: KEEP both as distinct pillars (no merge).**
- `/services/ceiling` owns the **repair + installation + partition** ceiling
  intent; `/services/plaster-ceiling` owns the **design-and-build** plaster
  ceiling intent. Their sub-services differ (`ceiling` → plaster-ceiling-installation
  as one of four; `plaster-ceiling` → flat / tiered & L-box / cove & curved /
  ceiling-repair-and-re-skim).
- They cross-link each other via the now-complete `relatedServices` mapping and
  share the `gypsum-vs-plaster-ceiling-malaysia` blog, so the competing intent is
  resolved through internal linking rather than deletion.
- Ceiling specialty localization targets the four `ceiling` sub-services only.
  The `plaster-ceiling` pillar is a separate tranche and is **not** multiplied
  in this Painting + Ceiling priority pass.

## 4. Consequence for the priority tranche

The Painting + Ceiling/Partition locale-specialty tranche (item 6) will create
localized twins **only** for these eight canonical specialties:

- `painting` → `interior-house-painting`, `exterior-house-painting`,
  `commercial-and-office-painting`, `wall-crack-and-moisture-repair`
- `ceiling` → `water-damaged-ceiling-repair`, `plaster-ceiling-installation`,
  `gypsum-board-partition-wall`, `cornice-and-l-box-concealed-light-trough`

No `-kl` cluster page and no `plaster-ceiling` sub-service gets a localized twin
in this pass. The shared dynamic-route architecture and typed relationship map
from `config/topical-authority-map.ts` are the single source of truth for these
routes.
