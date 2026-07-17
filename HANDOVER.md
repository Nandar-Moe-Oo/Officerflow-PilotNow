# Active Shift screen — hourly evidence windows

Developer handover for `Officer Link Flow.dc.html`.

This file is a **clickable prototype**, not production code. It fakes the
passage of time so the flow can be demoed in a browser. Treat it as the spec
for *behaviour and UI*, and read "Prototype vs production" before copying any
of the timing logic.

## The rule

An officer must upload evidence for every hour of the shift. Each hour gets a
**5-minute on-time window** at the top of the hour, and then a grace period
lasting **until the top of the next hour**, during which the upload still counts
but is marked Late. Once the next hour arrives, the previous hour is locked as
Missed forever.

Every evidence hour `H` rolls through four stages:

| Stage | When | Officer can upload? | Recorded as |
| --- | --- | --- | --- |
| Upcoming | before `H:00` | No — too early | — |
| **Open** | `H:00` → `H:05` | Yes | **Done** (on time) |
| **Missed section** | `H:05` → `H+1:00` | Yes | **Late** |
| Missed | from `H+1:00` | No — locked | **Missed** |

The key detail: **the missed section always empties at the top of the next
hour.** The moment 13:00's window opens, the 12:00 card stops showing and 12:00
locks as Missed — its grace period is over. It holds one hour at a time, and
the on-time window and the missed section are **never on screen together**.

Worked example, assuming the officer uploads nothing:

```
12:59   card: "NEXT UPLOAD · 13:00" counting down    missed section: 12:00 (locks 13:00)
13:00   card: "13:00 EVIDENCE · DUE NOW"  05:00      missed section: empty
                                                     12:00 -> Missed, locked
13:04   card: 00:50 left, countdown turns red        missed section: empty
13:05   card: "NEXT UPLOAD · 14:00" 54:59            missed section: 13:00 (locks 14:00)
14:00   card: "14:00 EVIDENCE · DUE NOW"  05:00      missed section: empty
                                                     13:00 -> Missed, locked
```

So an hour's total upload opportunity is one hour: 5 minutes on-time, then
55 minutes late.

## The three cards

**1. Waiting (too early).** Header `NEXT UPLOAD · 14:00`, "Upcoming" pill,
large countdown to the next window, Camera/Gallery **disabled**. The officer's
resting state for most of the hour.

**2. On-time window open.** Amber, header `13:00 EVIDENCE · DUE NOW`, "Window
open" pill. `CLOSES IN` countdown from `05:00`, a progress bar that drains, live
Camera/Gallery, photo grid with per-photo remove, and a Submit button disabled
until at least one photo is attached. **Countdown and bar turn red in the final
60 seconds.** Submitting marks the hour Done and the card is replaced by the
waiting card.

**3. Missed section (the red card).** Header `12:00 evidence — missed`, tag
`LATE UNTIL 13:00`. Same upload controls; submitting marks the hour **Late**,
not Done. Shown alongside the waiting card. Disappears at the top of the next
hour, or once submitted.

## Status vocabulary (timeline + shift log)

| Status | Colour | Meaning |
| --- | --- | --- |
| Done | green | Uploaded inside the 5-minute window |
| `MM:SS left` | amber | On-time window currently open |
| Upload late | red | In the missed section — still uploadable |
| Late | amber | Uploaded during the grace hour |
| Missed | red | Grace hour expired — permanent |
| Upcoming | grey | Window not open yet |

The end-of-shift screen tallies `8 - missed` of 8 evidence items and a missed
count; both turn red when anything is missed.

## Prototype vs production — read this

**Time is simulated.** `state.now` is a seconds-since-midnight counter that
`tick()` increments once a second; the demo starts at 12:59:35 so the 13:00
window opens ~25 seconds after you land on the shift screen. Every stage is
*derived* from `now` in `statusOf()` — there are no phase flags to keep in
sync. Production keeps this shape but replaces the counter with
**authoritative server time**.

**Do not trust the device clock.** This is evidence for a compliance and pay
record. An officer who changes their phone clock could reopen a closed window
or fake an on-time upload. The server must decide whether a submission is
on-time, late, or rejected; the client countdown is only a hint.

**The officer must be notified.** The prototype's clock only runs while you are
on the shift screen — a demo convenience. Real windows close whether the app is
open or not, so a **push notification at the top of each hour** is required. A
5-minute window nobody is told about will be missed constantly.

**Offline is unspecified.** If the officer is in a basement at 13:03 with no
signal, does a queued upload count as on-time? Decide explicitly — it
determines whether the window is enforced at capture time (timestamp the photo
locally, sync later) or at receipt on the server. The prototype assumes instant
connectivity.

**Nothing is persisted.** State is in-memory and a refresh restarts the demo.
Hour outcomes must be server-side records — they drive admin review and pay.

**Hard-coded values to make configurable:** `WINDOW_SEC` (300) and the `HOURS`
list (`[12,13,14,15,16]`). Different sites will want different window lengths
and shift hours. The grace period is not a separate constant — it is defined as
"until the top of the next hour" (`opens + HOUR_SEC` in `statusOf()`). If a site
ever wants a grace period that is not exactly one hour, that needs its own
constant, and the "missed section empties when the next window opens" rule has
to be rethought with it.

**Edge cases not designed yet:** what happens if the shift's last hour (16:00)
is still in its grace period at check-out time (17:00); and whether an admin can
manually excuse a Missed hour.

## Where the code lives

All inside the `<script type="text/x-dc">` block of `Officer Link Flow.dc.html`:

- `HOURS`, `WINDOW_SEC`, `HOUR_SEC`, `START_SEC` — constants at the top.
- `statusOf(h, now, subs)` — **the whole rule in one function.** Returns
  `upcoming | open | lateopen | missed | done | late` for any hour at any time.
  Everything else derives from it; change the rule here.
- `openHour()` / `lateHour()` — which hour owns each card right now.
- `state.now` — seconds since midnight; the single source of truth.
- `state.subs` — `hour -> { status: 'done' | 'late', n: photoCount }`. Only
  submissions are stored; Missed is derived from the clock, never written down.
- `tick()` — increments `now`, clears staged photos when a card hands over.
- `renderVals()` — derives every display value and builds the timeline rows.
- `<sc-if>` blocks on `isWaiting` / `isWindowOpen` / `showLate` — the markup.

Note `lateopen` (in the missed section, still uploadable) and `late` (was
submitted during the grace hour) are deliberately different values. Conflating
them is a bug that has already been fixed once.

## Status of this work

Behaviour was verified by simulating the state machine: the handover at each
`:05`, the countdowns, the on-time and late submit paths, and the missed and
evidence tallies all check out. The **visual rendering has not been reviewed in
a browser** — worth eyeballing before it informs a production build.
