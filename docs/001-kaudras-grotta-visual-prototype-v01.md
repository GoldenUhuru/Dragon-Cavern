# Kaudra's Cave — First Visual World Prototype (v0.1)

**Created:** 2026-10-24
**Design status:** ARTISTIC PROPOSAL, AWAITING WILLIAM'S VISUAL APPROVAL. Source map `DC-MAP-001-KAUDRA-CAVE` has already been user-approved.
**Prototype:** [`game/kaudra-first-visual-prototype.html`](../game/kaudra-first-visual-prototype.html)
**Source record:** [Mission 001 map brief](001-kaudras-grotta-kartbrief-2026-10-24.md)
**Evidence graph:** [Kaudra's source graph](../game/data/kaudra-cave-evidence-graph.v1.json)

## Delivered

A standalone, offline, interactive HTML/SVG visual-world **concept**, not a 3D cave, top-down map or a scientifically validated setting. It includes:
1. The **enormous cave** — huge cave, shadowy chambers and transparent bubble-like Dream Chamber indicated in an abstract atmospheric illustration.
2. The **Dream Chamber** — visualized as a large transparent bubble-like crystal, with no invented Council member faces or seating.
3. **Other shadowy side chambers** — source items recorded collectively: meditation seats, small shrines, counsellor benches and thrones. No individual room/furniture assignment.
4. **Empty cleansing chamber** — deliberately devoid of decorative ritual machinery; Kaudra's judgment is a narrative condition, not simulated.
5. **Kaudra** — represented only by an abstract glittering-scale motif, *not* a full dragon body, since morphology and colouring remain undescribed.
6. **Garden of Wisdom and Solitude** — separate reference visualization; relative placement to the cave remains unknown.
7. **Sacred crystal cave of p.42** — a separate unresolved source description, not silently equated with the p.43 enormous cave.
8. **Misty Dream Gate** — standalone reference, not a cave entrance; p.45 describes a return into Upperworld *near Kaudra*.

## Interaction model

- Select any of eight study views from a side navigation, or move between them via previous/next.
- Click scene buttons labelled as **study views** rather than physically traversable cave passages. These are UI shortcuts, **not** source-stated spatial connections.
- Switch between **Art concept** and **Evidence-only**. The former adds source-labelled atmospheric visual invention. The latter highlights textually supported features with minimal visual context.
- Each view displays primary printed page, Atlas source ID, supported details and source exclusions.
- Keyboard left/right arrows supported; mobile responsive; no external fonts, images, JavaScript services or tracking.
- The application does not claim to perform real magical cleansing or verify metaphysical properties.

## Source versus visual design

**Book-attested:** enormous shadowy cave, separate side chambers, huge transparent bubble-like crystal Dream Chamber, High Council meetings and thought protection as Conway's belief, empty cleansing chamber for Kaudra-selected students, Kaudra crystal scales, high-hedged Garden containing listed features, p.42 sacred crystal cave, misty Dream Gate.

**Artistic choices, NOT attested:** blue-teal atmospheric palette, geometry of cave silhouettes, point-like glow, visual proportion of crystal, animation of shimmer, any simplistic abstract decorative rock shapes, shape/position of furniture suggestions, iconography and UI transitions. No new source canon is inferred from such design.

**Never presented as established:** floor-plan, cavern entrance, distances, tunnels between rooms, Garden inside cave, equivalence of p.42 and p.43 caves, direct Dream Gate cave access, Kaudra body design/colours, Dhuaar membership appearance or numerical count.

## Test observations

- Local headless Chromium via Playwright loaded the prototype using in-memory HTML; 8 interactive navigation entries and one SVG per active scene appeared.
- Switch to **Evidence-only** changed stage evidence state.
- Switching to Dream Chamber and Garden populated correct names, notes and Garden's explicitly unknown cave location.
- Mobile viewport (390px) had no horizontal document overflow.
- No JavaScript page errors were recorded.
- This testing is **technical function only**, not source approval or visual acceptance.

## Next approval checkpoint

William reviews the standalone HTML and the visual atmosphere, then responds with **approval, corrections, or a preferred representation**. Approval for this v0.1 presentation cannot retroactively convert artistic dimensions, colours or geology into Conway source facts. Only after visual review should a more spatial/immersive game scene be prototyped, with *all* invented corridors and layout labelled game-designed.
