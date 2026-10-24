# Uppdrag 001 – Kaudras grotta

**Projekt:** Dragon Cavern  
**Status:** Planerat. Ingen ny kartbrief eller spelkod är ännu källgranskad eller godkänd.  
**Syfte:** Första avgränsade uppdraget i vår Dragon Cavern-utveckling, och ett test av hur mycket ChatGPT Work-kvot ett färdigt uppdrag använder.

## Leverans – första milstolpen

En **färdig, källkontrollerad kartbrief för Kaudras grotta**, inte ännu en fritt påhittad karta. Den ska innehålla:

1. Fullständig lista över rum, delmiljöer, varelser, funktioner och beskrivande detaljer som faktiskt stöds av tillgängliga textsidor.
2. Relationer mellan miljöerna, med varje förbindelse märkt **uttryckligen angiven**, **tolkad** eller **okänd**.
3. Ett källregister (bok, sida, atlas-ID, exakt passageposition där det går).
4. Synligt register över luckor, motsägelser och ännu obestämda detaljer.
5. Separat förslag till spelmässig gestaltning (förslag är **inte** fakta från Conway).
6. Användarens granskning och godkännande innan miljön anses kanonisk.

## Utgångspunkter att kontrollera mot källorna

- D. J. Conway, *Mystical Dragon Magick*, särskilt materialet om Kaudras grotta i den studerade delen av boken.
- Vårt tidigare atlas-ID **DC-P043-001** (projektidentifierare, inte en kod från boken).
- Tidigare studieanteckningar om Kaudra, Dream Chamber, mötes- och sidokammare, reningskammare och trädgård. **Samtliga detaljer och kopplingar måste kontrolleras mot underlaget**, inte antas vara bekräftade av denna lista.
- Om p.42 återges eller transkriberas: bevara eventuella stavningsskillnader som ”Madura”/”Kaudra” som källfrågor, utan tyst rättning.

## Källkritisk arbetsmetod

- **T** = textbelägg; **V** = visuellt belägg; **A** = uttryckligt användargodkännande; **U** = olöst.
- Atlasstatus: **unresolved**, **located**, **verified**, **user-approved**.
- Skilj konsekvent mellan **källfakta**, **tolkning** och **ny spelidé**.
- Bevara permanenta ID:n och korrigeringshistorik.
- Skriv inte samman fri fantasi med påstådda exakta bokbeskrivningar.
- Gör inte hela miljön ”godkänd” bara för att en enstaka passage är bekräftad.

## Nästa etapp – efter källgodkänd kartbrief

Skapa en utforskbar spelprototyp av grottan, med rum, övergångar, klickbara platser och spårbara källnoter. All ny formgivning ska vara separat från källtexten.

## Work-kvot: experimentprotokoll

Innan uppdraget körs i **ChatGPT Work**, dokumentera skärmbild eller avlästa värden för kvarvarande/brukad Work-kvot och exakt tid. Upprepa efter avslutad, faktiskt levererad kartbrief. Logga eventuella återställningar och andra Work-uppdrag under mätperioden. Beräkna bara skillnaden när båda mätningarna finns och samma kvotdefinition används.

Se [work-kvot-logg.md](./work-kvot-logg.md). GitHub-ändringar här visar **inte** i sig hur mycket Work-kvot som förbrukats.


## 2026-10-24 — Mission 001 source-graph milestone (awaiting William's approval)

The initial cave-mapping deliverable has now been **authored and committed** without redoing the earlier 30-test Atlas:

- [Detailed source-critical Kaudra map brief](001-kaudras-grotta-kartbrief-2026-10-24.md): documented places, source support and visual limits.
- [Machine-readable cave relationship graph](../game/data/kaudra-cave-evidence-graph.v1.json): **13 Atlas entities, 11 supported semantic relations, 6 unresolved / unestablished links**.
- [Standalone offline source explorer](../game/kaudra-source-explorer.html): click to inspect entity descriptions, sources, connections and missing paths. **This is a prototype for reviewing knowledge, not a rendered game or canonical floor plan.**
- Existing video was checked **only at printed p.45** for the misty Dream Gate's arrival **near** Kaudra. The previously approved p.42–43 Atlas, including Test X and AD, supplied the principal cave evidence; its earlier original-photo reviews are archived in the source record even though their standalone images are not available now.

### Approval gate before immersive construction
Existing factual Atlas entries remain **user-approved**, but this new composition/map brief and the technical prototype are **awaiting William's review**. No actual cave geometry, entrance/exit corridor, scale colour, Council appearance or forced Garden location was introduced.

**Next step:** William reviews the brief and its six explicitly unresolved connection questions. Only after acceptance should an explorable cave **game world** be designed, with its every newly invented geometric, visual, and interactive detail marked as **game design**, not as Conway's source.
