import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const json=p=>JSON.parse(read(p));
const r=json('game/data/auralund-registry.v1.json'),w=json('game/data/auralund-world.v1.json');
const cave=json('game/data/kaudra-cave-evidence-graph.v1.json'),xp=json('game/data/atlas-experience-graph.v1.json');
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’‘]/g,"'").trim();
const index=new Map();
assert.equal(r.entries.length,253);
assert.equal(new Set(r.entries.map(e=>e.id)).size,253);
assert.equal(new Set(r.entries.map(e=>norm(e.name))).size,253);
for(const e of r.entries){
 assert(e.name&&e.skeleton&&e.treatment&&e.location_note);
 assert.notEqual(norm(e.name),norm(e.original),'Unchanged name '+e.original);
 assert.equal(e.palette_is_location,false,'A palette became a map position');
 for(const c of [e.palette.ground,e.palette.main,e.palette.accent])assert(/^#[0-9A-Fa-f]{6}$/.test(c));
 for(const key of [e.id,e.name,...e.aliases,...e.legacy_ids,...e.edition_keys,...e.anchor_keys]){
  const n=norm(key);assert(!index.has(n)||index.get(n).id===e.id,'Ambiguous lookup '+key);index.set(n,e);
 }
 assert(e.edition_keys.every(x=>x.startsWith('AR-KEY-')||!x.startsWith('DC-')));
 assert(e.anchor_keys.every(x=>e.legacy_ids.includes(x)||e.edition_keys.includes(x)));
}
const find=s=>index.get(norm(s));
for(const [old,name]of [['Kaudra','Selvarin'],['Tiamat','Maerava'],['Aetherion','Eiravel'],['Dream Chamber','Stillglaset'],['Aldram','Ordelin']])assert.equal(find(old)?.name,name);
assert.notEqual(find("Aldram's misty dwelling").id,find('Void castle').id);
for(const key of ['cave','experiences']){
 const s=w.source_graphs[key];assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,s.file))).digest('hex'),s.sha256,'Source snapshot hash changed');
}
assert.deepEqual(w.cave.nodes.map(n=>n.id),cave.nodes.map(n=>n.id));
assert.equal(w.cave.nodes.length,13);assert.equal(w.cave.relations.length,11);assert.equal(w.cave.non_relations.length,6);
assert.deepEqual(w.cave.relations,cave.relations);assert.deepEqual(w.cave.non_relations,cave.non_relations);
assert.deepEqual(w.invariants.cave_relations,cave.relations);assert.deepEqual(w.invariants.cave_non_relations,cave.non_relations);
for(let i=0;i<cave.nodes.length;i++){
 const copy=structuredClone(w.cave.nodes[i]);assert.equal(copy.source_label,cave.nodes[i].label);copy.label=copy.source_label;
 for(const k of ['source_label','creative_treatment','auralund_id'])delete copy[k];
 assert.deepEqual(copy,cave.nodes[i],'A source node attribute changed');
 assert.equal(find(cave.nodes[i].id)?.name,w.cave.nodes[i].label);
}
assert.equal(w.experiences.experiences.length,8);assert.equal(w.experiences.modules.length,4);assert.equal(w.experiences.scenes.length,6);
for(const group of ['experiences','modules','scenes']){
 for(let i=0;i<xp[group].length;i++){
  const copy=structuredClone(w.experiences[group][i]);assert(copy.auralund_name&&copy.auralund_id);
  delete copy.auralund_name;delete copy.auralund_id;assert.deepEqual(copy,xp[group][i],'Scene, module or sequence changed: '+xp[group][i].id);
 }
}
for(const e of xp.experiences)assert.deepEqual(w.invariants.experience_sequences[e.id],e.sequence);
assert.deepEqual(w.world_topology.levels,['Highest','Upperworld','Middleworld','Lowerworld','Underworld']);
assert.equal(w.world_topology.map_links.length,12);assert.equal(w.world_topology.not_navigation,true);
for(const e of w.world_topology.map_links){assert(find(e.a)&&find(e.b));assert(!('direction' in e));}
for(const pair of w.invariants.not_merged)assert.notEqual(pair[0],pair[1]);
const reserved=r.entries.filter(e=>e.status==='named_unplaced');assert.equal(reserved.length,2);
for(const e of reserved){assert.equal(e.realm,'unplaced');assert(!w.cave.nodes.some(n=>n.auralund_id===e.id));}
for(let n=1;n<=17;n++)assert(find('DC-NEW-'+String(n).padStart(3,'0')),'Missing NEW record '+n);
const required=['The Shrine of Remembrance','Dome of Multiversal Stars',"Ancient Seers' Gate",'Temple of Beginnings and Endings',"Travelers' Gate",'Past Lives Gate',"Teacher's Gate",'Zodiac Gate','Seers of All Time','Web Gate','Path of Return Light','Dhuaar','Tiamat','Web Weavers','Mysteries Gate of the Seers of the Merkabah','Journey Gate','Hall of Justice and Rebirth','Shrine of the Ancestors','Ring Initiators','Temple of Despair','Void Gate','Kaudra','Glory Gate','Gate of Balance','Sacred Well of Balance','Gate of Wondrous Things','Rings Gate','Dream Chamber'];
for(const s of required)assert(find(s),'Missing historical test subject '+s);
const html=read('game/auralund-codex.html');assert(!/@@[A-Z]+@@/.test(html),'Unfilled HTML template');
const script=[...html.matchAll(/<script(?: [^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]).find(s=>s.includes("'use strict'"));assert(script);new vm.Script(script);
const embeddedRegistry=JSON.parse(html.match(/<script id="registry" type="application\/json">([\s\S]*?)<\/script>/)[1]);assert.equal(embeddedRegistry.entries.length,253);
assert.equal((html.match(/class="chapter"/g)||[]).length,15);
assert(html.includes('@media(prefers-reduced-motion:reduce)'));
assert(!/<(?:script|img|link)[^>]+(?:src|href)=["']https?:/i.test(html),'An external runtime asset appeared');
assert(html.includes('min-width:0;background:var(--surface)'),'Map may overflow on mobile');
for(const f of ['game/assets/auralund-stillgrottan.png','game/assets/auralund-glodtonens-kammare.png'])assert(fs.statSync(path.join(root,f)).size>1000);
const result={entries:253,old_and_new_lookup_keys:index.size,historical_test_subjects:required.length,additional_candidates:17,source_cave_nodes:13,unchanged_relations:11,unchanged_open_pairs:6,unchanged_experience_sequences:8,unchanged_modules:4,unchanged_scenes:6,world_map_links:12,reserved_inactive_names:2,html_chapters:15,javascript_syntax:'passed',browser_visual_test:'not executed: Chromium download unavailable in this environment'};
console.log(JSON.stringify(result,null,2));

