#!/usr/bin/env node
// Atlas experience-graph structural validator.
// No network access; no dependencies beyond Node.js.
// Usage: node game/tools/validate-atlas-experience-graph.mjs

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const manifestPath = resolve(here, '../data/atlas-experience-graph.v1.json');
const graph = JSON.parse(readFileSync(manifestPath, 'utf8'));
const problems = [];
const ensure = (condition, message) => { if (!condition) problems.push(message); };
const unique = (items, label) => {
  const ids = items.map(item => item.id);
  ensure(ids.length === new Set(ids).size, 'Repeated IDs in ' + label);
  return new Set(ids);
};
const sources = unique(graph.sources ?? [], 'sources');
const modules = unique(graph.modules ?? [], 'modules');
const scenes = unique(graph.scenes ?? [], 'scenes');
const experiences = unique(graph.experiences ?? [], 'experiences');
ensure(graph.publication_status?.includes('NOT playable'), 'Graph must not claim a playable game');
ensure(graph.integration_approval?.includes('awaiting'), 'Integration-approval gate must be explicit');

for (const item of [...(graph.modules ?? []), ...(graph.scenes ?? []), ...(graph.experiences ?? [])]) {
  ensure(sources.has(item.source), 'Missing approved Atlas source for ' + item.id);
}
for (const source of graph.sources ?? []) {
  ensure(source.user_approved === true && source.verified === true, 'Source not marked verified and approved: ' + source.id);
  ensure(typeof source.atlas_file === 'string' && source.atlas_file.startsWith('atlas/'), 'Invalid Atlas path: ' + source.id);
}
for (const experience of graph.experiences ?? []) {
  const sequence = experience.sequence ?? [];
  ensure(sequence.length > 0, 'Empty sequence: ' + experience.id);
  for (const step of sequence) {
    const used = ['module', 'scene', 'study_section', 'source_action'].filter(key => Object.hasOwn(step, key));
    ensure(used.length === 1, 'Step must refer to exactly one source element: ' + experience.id);
    if (step.module) ensure(modules.has(step.module), 'Missing module ' + step.module);
    if (step.scene) ensure(scenes.has(step.scene), 'Missing scene ' + step.scene);
  }
}

const find = id => graph.experiences.find(x => x.id === id);
const exactModules = (id, expected) => {
  const experience = find(id);
  ensure(Boolean(experience), 'Missing experience ' + id);
  if (experience) {
    const used = experience.sequence.filter(s => s.module).map(s => s.module);
    ensure(JSON.stringify(used) === JSON.stringify(expected), 'Wrong shared blocks in ' + id + ': ' + used.join(', '));
  }
};
exactModules('experience.first-ring-introduction', ['meditation.beginning', 'meditation.ending']);
exactModules('experience.welcoming-other-dragons', ['meditation.beginning', 'meditation.ending']);
exactModules('experience.dragon-ride', ['meditation.beginning', 'meditation.ending']);
exactModules('experience.co-magician-ritual', ['ritual.beginning', 'ritual.ending']);
exactModules('experience.apprentice-to-enchanter', ['ritual.beginning', 'ritual.ending']);
exactModules('experience.testing-energy-balance', []);
exactModules('experience.dragon-alchemy', []);
exactModules('experience.basic-personal-protection', []);

// Enforce separation of book's two castle descriptions and the two separate ritual bodies.
const welcoming = find('experience.welcoming-other-dragons');
const ride = find('experience.dragon-ride');
ensure(welcoming?.sequence.some(s => s.scene === 'scene.welcoming-dragons'), 'Missing wall-less courtyard scene');
ensure(ride?.sequence.some(s => s.scene === 'scene.dragon-ride'), 'Missing outer-wall ride scene');
const oath = find('experience.apprentice-to-enchanter');
ensure(!oath?.sequence.some(s => s.scene === 'scene.co-magician-encounter'), 'Co-magician rite incorrectly imported into Enchanter oath');

if (problems.length > 0) {
  for (const problem of problems) console.error('ERROR:', problem);
  process.exitCode = 1;
} else {
  console.log('PASS — Atlas references and integration boundaries valid');
  console.log(`Sources: ${sources.size}; reusable blocks: ${modules.size}; scenes: ${scenes.size}; experiences: ${experiences.size}`);
  console.log('Reminder: structural validation does not approve visual art, game mechanics or metaphysical claims.');
}
