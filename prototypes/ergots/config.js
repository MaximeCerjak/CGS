// PROTOTYPE - NOT FOR PRODUCTION
// Question: Les duels sont-ils prenants, et le choix entre continuer et abandonner crée-t-il de la tension, sous deux niveaux de risque ?
// Date: 2026-11-23
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // --- Configuration d'équilibrage : change d'un coup les valeurs listées dans window.PRESETS ---
  preset: { value: 'C', options: ['v0', 'A', 'B', 'C'] },
  foeInfo: { value: 2, min: 0, max: 2, step: 1 },                // avant le duel : 0 rumeur seule · 1 + style et points forts · 2 + comparaison avec tes coqs

  // --- Économie (crédits) ---
  startMoney: { value: 40, min: 0, max: 300, step: 5 },          // argent de départ
  rent: { value: 300, min: 50, max: 800, step: 10 },             // loyer à payer
  rentDuel: { value: 6, min: 2, max: 8, step: 1 },               // le loyer tombe avant ce duel
  duels: { value: 8, min: 3, max: 8, step: 1 },                  // nombre de duels de la tranche
  legalEntryBase: { value: 5, min: 0, max: 50, step: 1 },        // mise légale = base + duel × parDuel
  legalEntryPerDuel: { value: 3, min: 0, max: 20, step: 1 },
  legalPurseBase: { value: 40, min: 0, max: 200, step: 5 },      // prime légale = base + duel × parDuel
  legalPursePerDuel: { value: 14, min: 0, max: 60, step: 1 },
  clanEntryMult: { value: 3, min: 1, max: 6, step: 0.5 },        // mise clandestine = mise légale × mult
  clanPurseMultStart: { value: 2, min: 1, max: 6, step: 0.25 },  // prime clandestine = prime légale × mult, au duel 1...
  clanPurseMultEnd: { value: 3, min: 1, max: 6, step: 0.25 },    // ... jusqu'à ce mult au dernier duel
  healCost: { value: 25, min: 0, max: 100, step: 5 },            // soin d'une blessure (crédits)

  // --- Règles des deux circuits ---
  refereeStop: { value: 0.2, min: 0.05, max: 0.5, step: 0.05 },  // légal : l'arbitre arrête à cette part de vie
  clanFoeMultStart: { value: 1.35, min: 1, max: 1.8, step: 0.01 }, // clandestin : stats adverses × mult au duel 1...
  clanFoeMultEnd: { value: 1.05, min: 1, max: 1.8, step: 0.01 },   // ... jusqu'à ce mult au dernier duel
  fleeMorale: { value: 20, min: 0, max: 50, step: 1 },           // légal : l'adversaire peut jeter l'éponge sous ce moral
  fleeHp: { value: 0.4, min: 0.1, max: 0.8, step: 0.05 },        // ... et sous cette part de vie
  fleeChance: { value: 0.4, min: 0, max: 1, step: 0.05 },        // ... avec cette chance par tour

  // --- Blessures ---
  injuryHitFrac: { value: 0.18, min: 0.05, max: 0.5, step: 0.01 },   // un coup ≥ cette part de la vie peut blesser
  injuryChanceLegal: { value: 0.3, min: 0, max: 1, step: 0.05 },
  injuryChanceClan: { value: 0.45, min: 0, max: 1, step: 0.05 },
  injuryMalus: { value: 0.2, min: 0, max: 0.6, step: 0.05 },         // perte sur la stat touchée
  injuryAccMalus: { value: 12, min: 0, max: 40, step: 1 },           // œil poché : points de précision perdus
  injuryDuels: { value: 2, min: 1, max: 5, step: 1 },                // duels de repos pour guérir sans payer

  // --- Combat ---
  critChance: { value: 0.08, min: 0, max: 0.3, step: 0.01 },
  critMult: { value: 1.5, min: 1, max: 3, step: 0.1 },
  energyRegen: { value: 5, min: 0, max: 30, step: 1 },           // énergie regagnée par tour
  tiredDamage: { value: 0.5, min: 0.1, max: 1, step: 0.05 },     // dégâts si l'énergie manque pour l'attaque
  tiredAcc: { value: 15, min: 0, max: 40, step: 1 },             // précision perdue si l'énergie manque
  guardDef: { value: 1.4, min: 1, max: 3, step: 0.1 },           // Battre des ailes : défense contre le coup suivant
  speedDodgePerPoint: { value: 1.5, min: 0, max: 5, step: 0.1 }, // esquive gagnée par point de vitesse d'écart
  speedDodgeMax: { value: 15, min: 0, max: 40, step: 1 },

  // --- État d'esprit (0 à 100) et soutien de l'entraîneur ---
  moraleSpan: { value: 0.5, min: 0, max: 1, step: 0.05 },        // facteur = 1 - span/2 + span × moral/100 sur atq, déf, vit
  moraleHesitant: { value: 45, min: 0, max: 100, step: 1 },      // sous ce moral : hésite (-5 précision)
  moraleScared: { value: 25, min: 0, max: 100, step: 1 },        // sous ce moral : a peur (-15 précision)
  moraleBigHit: { value: 8, min: 0, max: 30, step: 1 },          // moral perdu sur un gros coup reçu
  moraleSmallHit: { value: 3, min: 0, max: 20, step: 1 },
  moraleLanded: { value: 4, min: 0, max: 20, step: 1 },          // moral gagné en touchant
  moraleMissed: { value: 3, min: 0, max: 20, step: 1 },          // moral perdu en ratant
  moraleLowHpDrain: { value: 5, min: 0, max: 20, step: 1 },      // par tour sous 30 % de vie
  encourageMorale: { value: 10, min: 0, max: 30, step: 1 },
  encourageDef: { value: 1.2, min: 1, max: 2, step: 0.05 },
  pressureAtk: { value: 1.25, min: 1, max: 2, step: 0.05 },
  pressureSpd: { value: 1.2, min: 1, max: 2, step: 0.05 },
  pressureAcc: { value: 20, min: 0, max: 50, step: 1 },          // précision perdue sous la pression
  pressureMorale: { value: 3, min: 0, max: 20, step: 1 },        // stress de la pression

  // --- Rythme d'affichage (pas de 1/60 s) ---
  beatSteps: { value: 44, min: 10, max: 120, step: 2 },
};

// Les tables du jeu : attaques, coqs du joueur, adversaires. Ce ne sont pas des curseurs, mais
// chaque nombre se règle ici.
window.ROSTER = {
  moves: {
    bec:    { name: 'Coup de bec',      min: 6,  max: 9,  acc: 95, cost: 8 },
    ergot:  { name: "Coup d'ergot",     min: 9,  max: 14, acc: 85, cost: 14 },
    bond:   { name: 'Bond griffu',      min: 14, max: 22, acc: 62, cost: 22 },
    feinte: { name: 'Feinte',           min: 3,  max: 5,  acc: 92, cost: 10, moraleHit: 15 },
    ailes:  { name: 'Battre des ailes', buff: 'guard', acc: 100, cost: 0, energyGain: 30, moraleGain: 5 },
    ruee:   { name: 'Ruée aveugle',     min: 18, max: 28, acc: 50, cost: 28, missMorale: 5 },
    oeil:   { name: "Viser l'œil",      min: 5,  max: 8,  acc: 78, cost: 12, injury: 'oeil', injuryBoost: 2 },
    garde:  { name: 'Esquive basse',    buff: 'dodge', acc: 100, cost: 0, energyGain: 15, dodge: 30 },
  },
  injuries: {
    aile:  { name: 'Aile froissée',   stat: 'spd', sign: 'traîne une aile' },
    oeil:  { name: 'Œil poché',       stat: 'acc', sign: "a l'œil poché" },
    bec:   { name: 'Bec fêlé',        stat: 'atk', sign: 'a le bec fêlé' },
    cotes: { name: 'Côtes meurtries', stat: 'def', sign: 'se tient les côtes' },
  },
  // look : body round|slim|big · crest single|rose|mohawk|scar · tail sickle|fan|stub|spiky · legs long|short
  coqs: [
    { id: 'braise', name: 'Braise', blurb: 'Équilibré, fiable.', hp: 60, atk: 12, def: 11, spd: 11, acc: 0, morale: 62,
      moves: ['bec', 'ergot', 'bond', 'ailes'],
      look: { body: 'round', crest: 'single', tail: 'sickle', legs: 'long', c: { body: '#d8572a', wing: '#8e2f17', tail: '#1f7a62', hackle: '#f3a635', crest: '#b8323c' } } },
    { id: 'lame', name: 'Lame', blurb: 'Rapide et précis, mais fragile.', hp: 48, atk: 11, def: 9, spd: 16, acc: 5, morale: 55,
      moves: ['bec', 'oeil', 'feinte', 'ergot'],
      look: { body: 'slim', crest: 'mohawk', tail: 'spiky', legs: 'long', c: { body: '#33406e', wing: '#1a2142', tail: '#2fd0e6', hackle: '#59d8ea', crest: '#e0408f' } } },
    { id: 'grospaul', name: 'Gros-Paul', blurb: 'Lourd et puissant, mais lent.', hp: 76, atk: 15, def: 13, spd: 7, acc: -5, morale: 66,
      moves: ['ergot', 'ruee', 'bond', 'ailes'],
      look: { body: 'big', crest: 'rose', tail: 'fan', legs: 'short', c: { body: '#efe6cf', wing: '#c09c5c', tail: '#6e4a26', hackle: '#f6d474', crest: '#b8323c' } } },
  ],
  // style : equilibre | prudent | brute | vicieux | fou (façon de combattre de l'adversaire)
  foes: [
    { name: 'Nugget', style: 'equilibre', rumor: 'Un coq de quartier. Il apprend encore.', hp: 44, atk: 9, def: 9, spd: 9, acc: 0, morale: 55,
      moves: ['bec', 'ergot', 'ailes', 'feinte'],
      look: { body: 'round', crest: 'single', tail: 'stub', legs: 'short', c: { body: '#e8bd4a', wing: '#a9822a', tail: '#7a5a1e', hackle: '#f6dc84', crest: '#b8323c' } } },
    { name: 'Tonton Plumeau', style: 'prudent', rumor: 'Il se protège et attend que tu te fatigues.', hp: 56, atk: 10, def: 13, spd: 8, acc: 0, morale: 60,
      moves: ['ergot', 'ailes', 'garde', 'bec'],
      look: { body: 'round', crest: 'rose', tail: 'fan', legs: 'long', c: { body: '#9c9a8c', wing: '#6c6a5e', tail: '#3c3a34', hackle: '#c8c4b0', crest: '#a8323c' } } },
    { name: 'Kérosène', style: 'brute', rumor: 'Il frappe fort et ne recule jamais.', hp: 58, atk: 14, def: 10, spd: 12, acc: 0, morale: 70,
      moves: ['bond', 'ergot', 'ruee', 'bec'],
      look: { body: 'slim', crest: 'mohawk', tail: 'sickle', legs: 'long', c: { body: '#222228', wing: '#111116', tail: '#ff8a1e', hackle: '#ff7a1a', crest: '#d8402a' } } },
    { name: 'Le Comptable', style: 'vicieux', rumor: 'Il vise les yeux et joue avec les nerfs.', hp: 60, atk: 12, def: 12, spd: 13, acc: 5, morale: 60,
      moves: ['feinte', 'oeil', 'ergot', 'garde'],
      look: { body: 'slim', crest: 'scar', tail: 'stub', legs: 'long', c: { body: '#7c5a3a', wing: '#4e3622', tail: '#2e2016', hackle: '#cba266', crest: '#a8323c' } } },
    { name: 'Sœur Rouille', style: 'fou', rumor: 'Blessée, elle devient folle furieuse.', hp: 66, atk: 15, def: 11, spd: 12, acc: 0, morale: 72,
      moves: ['ruee', 'bond', 'ergot', 'bec'],
      look: { body: 'round', crest: 'single', tail: 'spiky', legs: 'short', c: { body: '#b44c22', wing: '#6e2a12', tail: '#4a1e0c', hackle: '#e8784a', crest: '#b8323c' } } },
    { name: 'Vieux Barnabé', style: 'prudent', rumor: 'Un vétéran couvert de cicatrices. Patient.', hp: 76, atk: 14, def: 15, spd: 10, acc: 0, morale: 66,
      moves: ['ergot', 'ailes', 'bond', 'garde'],
      look: { body: 'big', crest: 'scar', tail: 'stub', legs: 'short', c: { body: '#d0c8b6', wing: '#9a927e', tail: '#5e584c', hackle: '#e6dec8', crest: '#a8323c' } } },
    { name: "Ergot d'Or", style: 'equilibre', rumor: 'Le favori des parieurs. Rien ne lui manque.', hp: 78, atk: 16, def: 14, spd: 14, acc: 5, morale: 72,
      moves: ['ergot', 'bond', 'feinte', 'ailes'],
      look: { body: 'slim', crest: 'single', tail: 'fan', legs: 'long', c: { body: '#e2a81e', wing: '#a8740e', tail: '#2a8c4c', hackle: '#fff0a0', crest: '#c8343e' } } },
    { name: 'La Bétonnière', style: 'brute', rumor: 'Une montagne. On dit qu’elle a tué six coqs.', hp: 92, atk: 18, def: 15, spd: 9, acc: 0, morale: 76,
      moves: ['ruee', 'bond', 'ergot', 'ailes'], scale: 1.15,
      look: { body: 'big', crest: 'mohawk', tail: 'spiky', legs: 'short', c: { body: '#6c7074', wing: '#44484c', tail: '#2a2c2e', hackle: '#9aa0a4', crest: '#c0383e' } } },
  ],
};

// Les configurations d'équilibrage à comparer. Chacune remplace les valeurs qu'elle liste ;
// les autres restent comme dans CONFIG. Choisie à l'écran titre (← →) ou dans le panneau.
window.PRESETS = {
  v0: { name: 'v0 · Premier prototype', desc: 'Le prototype tel que tu l\u2019as joué : rumeur seule sur l\u2019adversaire.',
    values: { legalPurseBase: 30, legalPursePerDuel: 12, clanPurseMultStart: 3, clanPurseMultEnd: 3, clanFoeMultStart: 1.12, clanFoeMultEnd: 1.12, foeInfo: 0 } },
  A: { name: 'A · Clandestin risqué tôt', desc: 'Clandestin dangereux et moins payé au début, moins écrasant à la fin.',
    values: { legalPurseBase: 30, legalPursePerDuel: 12, clanPurseMultStart: 2, clanPurseMultEnd: 3, clanFoeMultStart: 1.35, clanFoeMultEnd: 1.05, foeInfo: 2 } },
  B: { name: 'B · Légal viable', desc: 'Le légal paie mieux : une partie tout en légal peut payer le loyer, de justesse.',
    values: { legalPurseBase: 40, legalPursePerDuel: 14, clanPurseMultStart: 3, clanPurseMultEnd: 3, clanFoeMultStart: 1.12, clanFoeMultEnd: 1.12, foeInfo: 2 } },
  C: { name: 'C · A et B ensemble', desc: 'Clandestin risqué tôt, légal viable. Ma recommandation.',
    values: { legalPurseBase: 40, legalPursePerDuel: 14, clanPurseMultStart: 2, clanPurseMultEnd: 3, clanFoeMultStart: 1.35, clanFoeMultEnd: 1.05, foeInfo: 2 } },
};
