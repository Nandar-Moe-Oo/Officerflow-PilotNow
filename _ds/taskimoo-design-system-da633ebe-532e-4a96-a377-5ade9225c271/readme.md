# Taskimoo Design System

> **Sharp & editorial. Bold type, tight grids. Black-and-white with one functional red.**

This is the design system for **Taskimoo** — NexStack's internal **Delivery Operating System for humans + AI agents**. It contains the brand foundations (color, type, spacing), the reusable UI primitives, and a click-through recreation of the Taskimoo web app, all wired to a single `styles.css` token entry point.

---

## What Taskimoo is

Taskimoo is NexStack's delivery OS. It keeps the strongest ideas from earlier versions — API-first design, CLI support, GitHub linkage, operational visibility — and refocuses on the workflows the team uses daily:

- **Project portfolio + bidding** — one project record from bid to closure.
- **Daily delivery workspace** — kanban + tasks for BA, developers, QA/QC.
- **Finance & commercial control** — quotations, invoices, payments.
- **GitHub-linked delivery** — work items tied to repos and issues.
- **Role-specific home views** — BA, developer, QA/QC, and Ken (owner) each get their own cockpit.

**Core product principle:** *separate commercial truth from delivery truth.* A project carries a **commercial status** (idea → bidding → quoted → … → fully paid → closed) and a **delivery status** (draft → planned → ready → in progress → in review → QA/QC → UAT → released → closed) as **parallel** fields, never collapsed into one.

The product is built as a Turbo + pnpm monorepo: a **Hono** API (all domain logic), a **Next.js** web app (pure UI), and an internal CLI, over Postgres.

### Sources

This design system was reverse-engineered from the product codebase. Explore these to build higher-fidelity designs:

- **GitHub:** [`nexstacksg/taskimoo-2`](https://github.com/nexstacksg/taskimoo-2) *(private)* — the monorepo. The design system itself lives in `apps/web/app/globals.css`; UI primitives in `apps/web/components/ui/`; product screens in `apps/web/app/(shell)/`.
- Key reading inside that repo: `README.md`, `technical.md` (architecture), `docs/03-prd.md` (status models), `docs/05-ux-flows.md`.

> The compiler ships a single `styles.css`; every token, font and component class flows through its `@import`s. The CSS values here are lifted verbatim from `globals.css`, so designs made with this system match the live product.

---

## CONTENT FUNDAMENTALS

How Taskimoo writes. The voice is **operational, terse, and confident** — a tool for a team that ships, not a consumer app.

- **Tone:** direct and factual. Short declaratives. State the system rule, don't soften it. *"Separate commercial truth from delivery truth."* *"One project record from bidding to closure."*
- **Person:** addresses the user as **you** in product chrome (*"Needs your decision"*, *"Search tasks, bugs, people…"*). Prose/docs use **we** for product decisions (*"We lean on greys + red"*).
- **Greeting:** the dashboard opens personally and plainly — *"Good morning, Ken."* — then immediately gets to work counts.
- **Casing:**
  - **Sentence case** for headings, buttons and body (*"New work item"*, *"Mark accepted"*, *"Needs your decision"*).
  - **UPPERCASE mono** for eyebrows, section kickers, table headers, and field labels (*"DELIVERY · MERCURY"*, *"MILESTONES"*, *"UAT"*). This is the signature editorial move — a newspaper kicker in Geist Mono with wide tracking.
- **Numbers & IDs:** always monospace, tabular. Work items use typed prefixes — `TASK-148`, `BUG-7`, `REQ-12`, `INV-2210`, `QT-1042`. Money is plain (`$31,000`, `$91.5k`). Dates are short (`May 24`, `Jun 12`) with relative countdowns (`in 3d`, `2d ago`).
- **Labels are dense, not chatty:** `5 of 8 milestones done`, `19 deployed · 2 free now · 5 decisions`. Status is a single word or two: *On track / Watch / At risk*, *In progress*, *Overdue*.
- **No emoji.** None in the product UI. The single decorative glyph is the **★** on AI-agent avatars.
- **Vibe:** a newsroom wire desk for software delivery — every line is a fact with a status. Calm, scannable, slightly severe.

---

## VISUAL FOUNDATIONS

- **Palette:** black-and-white at heart. A 5-step ink ramp (`--fg-0`…`--fg-4`) on a 4-step paper ramp (`--bg-0`…`--bg-3`). The **only** chromatic accent is **functional red** (`--red-500` = `#FF3B30`), reserved for urgent / blocked / danger / focus. Semantic green/amber/blue exist but are muted and rare. Designs should read almost monochrome, with red as the live signal.
- **Brand vs. UI color:** the **logo** uses a different palette — near-black (`#07090D`) with an **orange** checkmark (`#FF7A1A`) and **amber** nodes (`#FFB020`). These `--brand-*` tokens are for the mark and brand chrome **only**; never use orange/amber as a UI accent (the app accent is red).
- **Type:** **Geist** (geometric sans) for everything, **Geist Mono** for kickers, IDs, timestamps and labels. Editorial scale with big jumps — display runs to 88px/800 weight; body sits at 14px. Tight tracking on headings (`-0.03em`/`-0.015em`); wide tracking (`0.08em`) on uppercase mono labels.
- **Spacing:** 4px base scale (`--space-1`…`--space-20`). Dense by default — the product ships a `compact` density. Generous whitespace is not the look; tight, information-rich grids are.
- **Backgrounds:** flat surfaces only. **No gradients, no images, no textures, no patterns.** Hierarchy comes from the paper ramp (`--bg-0`/`--bg-1`) and 1px hairline borders.
- **Borders & cards:** **hairlines do the structural work.** Cards are `--bg-0` with a `1px solid --border-0` border and `--radius-md` (6px) corners. The active/selected card gets a **2px red left rail** (`.kcard.selected`) — the one place a border turns red. No drop-shadowed floating cards.
- **Corner radii:** subtle throughout — `2px` (xs, pills/tags), `4px` (sm, buttons/inputs), `6px` (md, cards), `10px` (lg, modals/auth panel), `999px` (chips/avatars).
- **Shadows:** almost none. `--shadow-sm` is a 1px hint; `--shadow-md`/`--shadow-lg` are reserved for overlays (modals, context menus, sheets). Flat surfaces + borders define the UI, not elevation.
- **Animation:** restrained and fast. `--dur-fast` (120ms) for hovers, `--dur-med` (200ms) for transitions, with `--ease-out` (`cubic-bezier(0.22,1,0.36,1)`). Mobile drawers slide/fade in ~200ms. No bounces, no decorative motion, no looping animation.
- **Hover states:** surfaces lift to the next paper step (`--bg-2`); cards strengthen their border (`--border-0` → `--border-1`) and pick up `--shadow-sm`. Ink-filled primary buttons drop to `opacity: 0.9`; red buttons darken to `--red-600`.
- **Press / focus:** focus is a **2px red outline** with 2px offset, plus a red focus ring on inputs (`--shadow-focus`, a translucent red glow). Segmented controls and chip-tabs invert to ink-on-paper when active.
- **Transparency & blur:** minimal. Modal backdrops are `color-mix(#000 30%, transparent)`. No glassmorphism, no backdrop blur.
- **Imagery:** essentially none. This is a data product — avatars are initials chips, not photos. If imagery is ever needed it should be black-and-white/high-contrast to match.
- **Dark theme:** first-class. `[data-theme="dark"]` inverts the grey ramps and the red ramp (so `--red-700` stays "stronger" on dark); red `--red-500` is the constant anchor across both themes.

---

## ICONOGRAPHY

- **System:** [**Lucide**](https://lucide.dev) — the product uses `lucide-react`. This is the single icon set; do not mix in other icon families.
- **Style:** outline icons, **`stroke-width: 1.6`**, round caps and joins, `currentColor`. Default render size is **14–16px** in dense UI (sidebar 15px, buttons 14px, inline meta 13px). Icons inherit text color via `currentColor` and sit at `--fg-2` in rest, `--fg-0` when active.
- **In this design system:** the UI kit ships an inline Lucide-style set at `ui_kits/taskimoo-web/icons.jsx` (`window.TkIcon`) so screens render offline without a CDN round-trip. When building production designs, prefer `lucide-react` (or the Lucide CDN) directly; match the 1.6 stroke weight. The full name→component map the product uses is in the repo at `apps/web/components/ui/Icon.tsx`.
- **Emoji / unicode:** no emoji anywhere. The only non-Lucide glyph is the **★** (U+2605) rendered on AI-agent avatars (`.avatar.ai`) to distinguish agent assignees from humans.
- **Logo:** the Taskimoo mark is an SVG checkmark (orange) on a near-black rounded square — see `assets/logo-mark.svg`, `assets/logo-wordmark.svg`, `assets/logo-wordmark-dark.svg`. The checkmark = "tasks done." Use the mark at ≥24px; pair with the `TASKIMOO.` wordmark (orange period) in the app lockup.

---

## INDEX — what's in this project

**Foundations**
- `styles.css` — the single entry point consumers link. `@import` manifest only.
- `tokens/colors.css` — surfaces, ink, borders, the red ramp, brand-mark palette, semantic + status + priority colors (light & dark).
- `tokens/typography.css` — families, type scale, weights, tracking, and the `.t-*` semantic type classes.
- `tokens/spacing.css` — spacing scale, radii, shadows, motion tokens.
- `tokens/fonts.css` — Geist + Geist Mono (Google Fonts).
- `tokens/base.css` — resets, links, focus, utility helpers (`.row`, `.col`, `.gap-*`, `.muted`, `.truncate`, …).
- `tokens/components.css` — class-based kit (`.btn`, `.pill`, `.kcard`, `.tbl`, `.sidebar`, `.section`, `.run-bar`, …) backing both React components and the UI kit.

**Components** (`components/`) — React primitives. Each has `.jsx` + `.d.ts` + `.prompt.md`; each folder ships one `@dsCard` HTML specimen (the form/nav/data/feedback specimens include an in-card light/dark toggle).
- `core/` — **Button**, **Pill**, **Chip**, **Avatar**.
- `surfaces/` — **SectionCard**, **KPIStrip**.
- `work/` — **TaskCard** (kanban work-item card).
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox** (+ radio), **Toggle**. Mono uppercase labels, hairline borders, the red focus ring; ink-filled checks/toggles with a `red` accent option.
- `nav/` — **Tabs** (underlined subnav), **SegmentedControl** (compact toolbar switch), **Breadcrumb**.
- `data/` — **DualStatus** *(signature)* — the parallel **commercial** + **delivery** pipelines, shown as stepped tracks and never collapsed into one; **ProgressBar** (milestone/completion); **DataTable** (dense editorial table, mono headers, selected-row red rail).
- `feedback/` — **Banner** (inline callout, incl. `ai` tint), **Toast** (transient, accent rail), **EmptyState** (dashed placeholder), **Modal** (centered dialog, `--radius-lg`, flat 30% backdrop).

**Gallery** — `component-gallery.html` composes every component in one page with a global light/dark switch.

**UI kit** (`ui_kits/taskimoo-web/`) — interactive recreation of the Taskimoo web app: login → dashboard cockpit → delivery board (kanban) → finance table. Composes the components above.

**Specimen cards** (`guidelines/`) — the cards rendered in the Design System tab (Colors, Type, Spacing, Brand).

**Assets** (`assets/`) — `logo-mark.svg`, `logo-wordmark.svg`, `logo-wordmark-dark.svg`.

**`SKILL.md`** — makes this folder usable as a downloadable Agent Skill.

---

## Using the system

Link the one stylesheet and use the tokens / classes / components:

```html
<link rel="stylesheet" href="styles.css">
```

```jsx
// React components are bundled to a namespaced global (see check_design_system):
const { Button, Pill, SectionCard, KPIStrip, TaskCard } = window.TaskimooDesignSystem;
```

Color usage stays disciplined: greys + hairlines build the layout; **red is the only accent**, used sparingly for the live signal.

---

### Flagged substitutions / notes

- **Fonts** are loaded from Google Fonts (Geist is open-source / OFL — the real product font, not a substitute). To self-host, drop WOFF2/TTF in `tokens/fonts/` and swap the `@import` in `tokens/fonts.css` for `@font-face` blocks.
- **Icons** are reproduced inline in the UI kit for offline rendering; the canonical set is `lucide-react`.
