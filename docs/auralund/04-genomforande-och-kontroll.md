# Genomförande och kontroll

25 oktober 2026. Auralunds första gestaltning genomförd enligt Williams fria mandat.

## Resultat

- 253 namngivna poster med nya benämningar, typer, bevarad kärna, ny gestaltning och färgkrets.
- En nyskriven världsbok med inledning och fjorton kapitel: egen ursprungsmyt, drakarnas röster, material, ljud, portarnas tecken och åtta upplevelser.
- Två nya originalillustrationer: Stillgrottan och Glödtonens kammare.
- En illustrerad PDF-bok på 56 sidor med samtliga 253 namn, klickbar innehållsförteckning och källnoter.
- En interaktiv Vävarbok med namn- och ankarsökning, typ- och färgfilter, schematisk världskarta, relationskort, läsbara bokkapitel och en frivillig syntetisk klangskiss.
- JSON-register, bevarad relations-/upplevelsedata och full namnnyckel i CSV.

## Det som skelettkontrollen verifierar

| Kontroll | Resultat |
| --- | --- |
| Unika nya benämningar och AR-ID | 253 av 253 |
| Söknycklar: nya namn, originalalias och ankare | 1 122 utan tvetydig uppslagning |
| Historiska tester A-AD | Samtliga 28 unika ämnen representerade; 30 historiska testbrev eftersom I/S och J/Q överlappar |
| Senare kandidater NEW-001-017 | 17 av 17 |
| Grottgrafens noder och befintliga ID | 13 av 13 bevarade |
| Grottgrafens relationer, typer och villkor | 11 av 11 exakt oförändrade |
| Grottgrafens öppna parfrågor | 6 av 6 exakt oförändrade |
| Upplevelsesekvenser | 8 av 8 exakt oförändrade |
| Gemensamma procedurdelar | 4 av 4 exakt oförändrade |
| Hela scenernas källinnehåll | 6 av 6 exakt oförändrade |
| Världskartans huvudnivåer och schematiska länkar | Fem nivåer och tolv länkar bevarade |
| Oidentifierade kandidatnamn | Två poster, fortsatt oplacerade och inaktiva |
| Tidigare integrationskontroll | PASS |
| JavaScript-syntax och inbäddad namn-/världsdata | PASS |
| Samtliga namn i PDF-texten | 253 av 253 |
| PDF: text utanför sidan, ersättningstecken, null-tecken | 0 / 0 / 0 |
| PDF: sidor visuellt granskade genom kontaktark | 56 av 56; omslag, innehåll och representativa sidor även större |

Kontrollen jämför de nya datavyerna direkt med de två befintliga källgraferna. Hashar för dessa källor är sparade i den nya världsfilen. En källnod återställs till sitt tidigare etikettfält och jämförs i övrigt fullständigt. Ordningen och innehållet i sekvenserna jämförs, inte bara antalet poster.

## Bevarade osäkerheter

Stillgrottan och Gryningskristallens grotta blir inte samma plats genom namnbytet. Alla vägars trädgård placeras inte i grottan. Disporten blir inte en grottingång. De två rättvisehallarna hålls isär. Mot Oföddheten blir inte automatiskt Nollporten. Aldram/Ordelins dimbostad hålls skild från bokförvaringen i Void castle/Dimbiblioteket. Alberon/Serevan blir inte automatiskt Aldram/Ordelin.

Färgkretsen används som bildspråk, inte som en ny kartkoordinat. Detta är särskilt viktigt för Jämnmodets källa vid gränssambandet och Försoningslyktan med osäkert exakt läge.

Inget namnbyte öppnar en tidigare förbjuden port. De två oidentifierade kandidaterna får varken korridorer, uppdrag eller aktivering. Eiravels tre vinghopp består; färdig flygförmåga läggs inte till som etablerat faktum.

## Faktisk testgräns för HTML

Ett visuellt och interaktivt test i Chromium kunde inte köras i denna miljö: webbläsarbinären saknades och installationshämtningen gav ingen användbar fil. JavaScript-syntax, inbäddade data, namnuppslagningens nycklar, källsamband, scenordning och självständiga bildresurser är kontrollerade. Ingen genomförd visuell webbläsargranskning, klicktest eller ljuduppspelning påstås.

Den separata paketerade HTML-läsversionen har bilderna inbäddade och behöver ingen extern bildserver. Källversionen i repositoryt använder de två bilderna i game/assets. Gränssnittet är konstruerat för responsiv läsning, tangentbord, tydligt fokus och reducerad rörelse; detta är implementerat men ännu inte visuellt webbläsartestat här.

## Vad som faktiskt ändras i projektet

README gör Auralund till den nya kreativa ingången. Nya filer lägger till världsbok, register, bilder, uppslagsverk och kontrollkod. Tidigare Atlasposter, poänghistorik, godkännanderegister, källgrafer och källprototyper skrivs inte över. Den befintliga följeslagaren i arbetsrummet har inte ändrats genom något appanrop.

Detta är en genomförd första originalgestaltning och ett arbetsbart nästa lager för spelbygget. Något separat användargodkännande av varje ny bilddetalj eller en driftsatt, geografiskt spelbar värld påstås inte.
