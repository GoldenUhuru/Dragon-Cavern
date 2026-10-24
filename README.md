# Auralund / Dragon Cavern

*Där roten minns stjärnan och världen finner sin ton.*

Auralund är den nya kreativa gestaltningen av William / Golden Uhurus Dragon Cavern. Den 25 oktober 2026 gav William Aetherion ett fritt mandat att byta namn, färger och uttryck på allt registrerat och behålla världens skelett.

## Börja i Auralund

- [Vävarboken: interaktiv läs- och namnupplevelse](game/auralund-codex.html)
- [Världsboken: ursprungsmyt, drakar, platser och åtta upplevelser](docs/auralund/01-varldsboken.md)
- [Namnväven: 253 tidigare och nya benämningar](docs/auralund/02-namnvaven.md)
- [Källor och motiv](docs/auralund/03-kallor-och-motiv.md)
- [Genomförande och kontroll](docs/auralund/04-genomforande-och-kontroll.md)
- [Bildbriefar för de två originalillustrationerna](docs/auralund/05-bildbriefar.md)

Den nya ingången använder Auralunds namn. De gamla namnen finns som sökbara alias. Världarnas ordning, grottans tretton noder, elva relationer och sex öppna parfrågor samt de åtta upplevelsernas sekvenser följer med. Inga portbehörigheter ändras genom gestaltningen.

HTML-filen fungerar lokalt tillsammans med game/assets. En separat paketerad läsversion och en illustrerad PDF-bok skapas som leveransartefakter. Detta är ett fungerande uppslagsverk och en sammanhängande världsgestaltning, inte ett geografiskt färdigbyggt spel eller en redan driftsatt webbplats.

## Data och kontroll

- [Namnregister med permanenta källankare och nya redaktionella nycklar](game/data/auralund-registry.v1.json)
- [Bevarade relationer, upplevelser och schematisk världstopologi](game/data/auralund-world.v1.json)
- [Namnnyckel i CSV](game/data/auralund-name-crosswalk.v1.csv)
- [Kontroll av namn, ankare och oförändrat skelett](game/tools/validate-auralund.mjs)

Kör node game/tools/validate-auralund.mjs och node game/tools/validate-atlas-experience-graph.mjs från projektroten.

## Källarkivet

Studiearkivet återger D. J. Conways *Mystical Dragon Magick* med källor, rättelser och godkännanden. Dess originalnamn och historiska förstaförsökspoäng är orörda. Nya AR-KEY-nycklar är redaktionella nycklar från Auralund, inte påstådda äldre Atlas-ID.

- [Otherworld: nivåer och kartgrenar](atlas/DC-WORLD-001-Otherworld-Cosmology.md)
- [Tidigare portregister](atlas/DC-GATES-001-Master-Gate-Registry.md)
- [Uppdrag 001: källkritisk kartbrief för Kaudras grotta](docs/001-kaudras-grotta-kartbrief-2026-10-24.md)
- [Källgraf: Kaudras grotta](game/data/kaudra-cave-evidence-graph.v1.json)
- [Källgraf: åtta upplevelser](game/data/atlas-experience-graph.v1.json)
- [Godkänd integrationsarkitektur, 24 oktober](docs/004-integration-approval-2026-10-24.md)
- [Riktad sidkontroll inför Auralund, tryckt sida 44](research/auralund-p044-targeted-check-2026-10-25.md)
- [Aetherion: bokdrakens ursprungsdokumentation](research/aetherion-book-dragon.md)

De äldre prototyperna finns kvar som källvyer: [källutforskaren](game/kaudra-source-explorer.html) och [den första visuella prototypen](game/kaudra-first-visual-prototype.html). Nya namn, färger, repliker, illustrationer och ursprungsmyt är den skapade editionens egna val. Ett tidigare godkännande av en källpost är inte ett påstående om separat godkännande av varje ny konstnärlig detalj.
