// PROTOTYPE - NOT FOR PRODUCTION
// Question: Les duels sont-ils prenants, et le choix entre continuer et abandonner crée-t-il de la tension, sous deux niveaux de risque ?
// Date: 2026-11-23
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // --- Configuration d'équilibrage : change d'un coup les valeurs listées dans window.PRESETS ---
  preset: { value: 'R', options: ['R', 'C10', 'C15', 'LS'] },
  foeInfo: { value: 2, min: 0, max: 2, step: 1 },                // avant le duel : 0 rumeur seule · 1 + race et points forts · 2 + comparaison avec tes coqs

  // --- Économie (crédits) ---
  startMoney: { value: 40, min: 0, max: 300, step: 5 },          // argent de départ
  rent: { value: 300, min: 50, max: 800, step: 10 },             // loyer à payer
  rentDuel: { value: 6, min: 2, max: 8, step: 1 },               // le loyer doit être payé avant ce duel
  duels: { value: 8, min: 3, max: 8, step: 1 },                  // nombre de duels de la tranche
  legalEntryBase: { value: 5, min: 0, max: 50, step: 1 },        // mise légale = base + duel × parDuel
  legalEntryPerDuel: { value: 3, min: 0, max: 20, step: 1 },
  legalPurseBase: { value: 40, min: 0, max: 200, step: 5 },      // prime légale = base + duel × parDuel
  legalPursePerDuel: { value: 14, min: 0, max: 60, step: 1 },
  clanEntryMult: { value: 3, min: 1, max: 6, step: 0.5 },        // mise clandestine = mise légale × mult
  clanPurseBase: { value: 1.2, min: 0.3, max: 4, step: 0.05 },     // prime clandestine = prime légale × base × cote de ton coq
  healCost: { value: 25, min: 0, max: 100, step: 5 },            // soin d'une blessure (crédits)

  // --- Dettes (clandestin seulement : on peut s'y inscrire sans avoir la mise) ---
  debtInterest: { value: 0.2, min: 0, max: 1, step: 0.05 },      // la dette grossit de cette part après chaque duel
  debtLimit: { value: 200, min: 50, max: 600, step: 10 },        // au-delà, les malfrats saisissent tout : fin de partie
  reprisalChance: { value: 0.6, min: 0, max: 1, step: 0.05 },    // après chaque duel endetté : chance de représailles (un coq blessé)

  // --- Bookmaker ---
  bookRuns: { value: 80, min: 10, max: 300, step: 10 },          // combats simulés pour fixer une cote
  bookNoise: { value: 0.08, min: 0, max: 0.3, step: 0.01 },      // le bookmaker se trompe : écart maximal sur la chance estimée
  bookMargin: { value: 0.1, min: 0, max: 0.4, step: 0.01 },      // la part que garde le bookmaker sur la cote
  oddsMin: { value: 1.15, min: 1.01, max: 2, step: 0.05 },
  oddsMax: { value: 4, min: 2, max: 20, step: 0.5 },

  // --- Règles des deux circuits ---
  refereeStop: { value: 0.2, min: 0.05, max: 0.5, step: 0.05 },  // légal : l'arbitre arrête à cette part de vie
  clanFoeMult: { value: 1.12, min: 1, max: 1.5, step: 0.01 },    // clandestin : stats adverses × mult
  fleeMorale: { value: 20, min: 0, max: 50, step: 1 },           // légal : l'adversaire peut jeter l'éponge sous ce moral
  fleeHp: { value: 0.4, min: 0.1, max: 0.8, step: 0.05 },        // ... et sous cette part de vie
  fleeChance: { value: 0.4, min: 0, max: 1, step: 0.05 },        // ... avec cette chance par tour

  // --- Statistiques ---
  redistPoints: { value: 50, min: 0, max: 150, step: 5 },        // points qu'on peut déplacer d'une stat de combat à l'autre
  overCap: { value: 21, min: 0, max: 60, step: 1 },              // dépassement maximal du plafond de la race, par stat
  redistStep: { value: 5, min: 1, max: 10, step: 1 },            // points déplacés par appui
  accPerPrec: { value: 0.25, min: 0, max: 1, step: 0.05 },       // précision affichée = précision de l'attaque + (stat − 100) × ceci
  dodgeBase: { value: 70, min: 0, max: 150, step: 5 },           // esquive : au-dessus de ce seuil, chaque point retire...
  dodgePerPoint: { value: 0.3, min: 0, max: 1, step: 0.05 },     // ... ceci de chance d'être touché
  critPerPoint: { value: 0.001, min: 0, max: 0.005, step: 0.0005 }, // chance de coup critique par point de critique
  critMult: { value: 1.5, min: 1, max: 3, step: 0.1 },
  intRepeatConsec: { value: 20, min: 0, max: 60, step: 1 },      // intelligence : esquive gagnée (× int/100) contre la même attaque deux fois de suite
  intRepeatSeen: { value: 6, min: 0, max: 30, step: 1 },         // ... contre une attaque déjà vue dans le combat
  vifDodgeMult: { value: 0.5, min: 0, max: 1, step: 0.05 },     // attaque vive : part de l'esquive adverse qui joue
  heavyDefMult: { value: 0.6, min: 0, max: 1, step: 0.05 },     // attaque lourde : part de la défense adverse qui compte
  heavySpdDodge: { value: 0.3, min: 0, max: 1, step: 0.05 },     // attaque lourde : esquive gagnée par point de vitesse d'avance de la cible
  precReadBase: { value: 90, min: 0, max: 150, step: 5 },       // attaque précise : au-dessus de ce seuil d'intelligence, la cible la lit...
  precReadPerPoint: { value: 0.25, min: 0, max: 1, step: 0.05 }, // ... et gagne ceci d'esquive par point
  armorPerDef: { value: 0.06, min: 0, max: 0.2, step: 0.01 },    // dégâts absorbés par point de défense (attaque vive ; moitié pour une précise)
  damageScale: { value: 0.75, min: 0.3, max: 2, step: 0.05 },   // multiplicateur global des dégâts : la durée des combats
  minHit: { value: 35, min: 0, max: 80, step: 1 },              // chance de toucher plancher (%), quelles que soient l'esquive et la lecture
  streakBonus: { value: 12, min: 0, max: 40, step: 1 },          // + chance de toucher par échec d'affilée : l'attaquant finit par trouver l'ouverture
  fatigueTurn: { value: 12, min: 4, max: 40, step: 1 },          // après ce tour, les coqs s'épuisent...
  fatigueDamage: { value: 0.1, min: 0, max: 0.5, step: 0.01 },   // ... et chaque tour ajoute cette part aux dégâts
  aiLearn: { value: 0.85, min: 0, max: 1, step: 0.05 },          // chance que l'IA abandonne une attaque qui a trop échoué
  intFeintBase: { value: 90, min: 0, max: 150, step: 5 },        // au-dessus de ce seuil, l'intelligence peut anticiper une feinte...
  intFeintPerPoint: { value: 0.006, min: 0, max: 0.02, step: 0.001 }, // ... avec cette chance par point

  // --- Blessures ---
  injuryHitFrac: { value: 0.18, min: 0.05, max: 0.5, step: 0.01 },   // un coup ≥ cette part de la vie peut blesser
  injuryChanceLegal: { value: 0.3, min: 0, max: 1, step: 0.05 },
  injuryChanceClan: { value: 0.45, min: 0, max: 1, step: 0.05 },
  injuryMalus: { value: 0.2, min: 0, max: 0.6, step: 0.05 },         // perte sur la stat touchée
  injuryDuels: { value: 2, min: 1, max: 5, step: 1 },                // duels de repos pour guérir sans payer

  // --- Combat ---
  energyRegen: { value: 0.05, min: 0, max: 0.2, step: 0.01 },    // part de l'énergie maximale regagnée par tour
  tiredDamage: { value: 0.5, min: 0.1, max: 1, step: 0.05 },     // dégâts si l'énergie manque pour l'attaque
  tiredAcc: { value: 15, min: 0, max: 40, step: 1 },             // précision perdue si l'énergie manque
  guardDef: { value: 1.4, min: 1, max: 3, step: 0.1 },           // Battre des ailes : défense contre le coup suivant

  // --- État d'esprit (0 à 100) et soutien de l'entraîneur ---
  moraleSpan: { value: 0.5, min: 0, max: 1, step: 0.05 },        // facteur = 1 - span/2 + span × moral/100 sur toutes les stats de combat
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
  pressureAcc: { value: 20, min: 0, max: 50, step: 1 },          // précision perdue sous la pression (points de %)
  pressureMorale: { value: 3, min: 0, max: 20, step: 1 },        // stress de la pression

  // --- Rythme d'affichage (pas de 1/60 s) ---
  beatSteps: { value: 44, min: 10, max: 120, step: 2 },
};

// Les tables du jeu : races, attaques, coqs du joueur, adversaires.
window.ROSTER = {
  // Profil de chaque race : plafonds par défaut. PDV et énergie ont leurs propres plafonds ;
  // les 7 stats de combat (vit à int) comptent dans le total, sur 1 050 au maximum.
  races: {
    leghorn:  { name: 'Leghorn', signature: 'rafale',  role: 'sprinteur',   hp: 270, en: 190, spd: 150, def: 75,  atk: 105, esq: 135, prec: 125, crit: 110, int: 100 },
    brahma:   { name: 'Brahma', signature: 'ecrasement',   role: 'poids lourd', hp: 440, en: 120, spd: 70,  def: 150, atk: 150, esq: 60,  prec: 125, crit: 135, int: 115 },
    sebright: { name: 'Sebright', signature: 'sournois', role: 'feinteur',    hp: 210, en: 165, spd: 120, def: 55,  atk: 65,  esq: 150, prec: 105, crit: 110, int: 145 },
    houdan:   { name: 'Houdan', signature: 'riposte',   role: 'contreur',    hp: 320, en: 150, spd: 95,  def: 120, atk: 110, esq: 95,  prec: 150, crit: 140, int: 135 },
    shamo:    { name: 'Shamo', signature: 'assaut',    role: 'combattant rare', rare: true, hp: 400, en: 160, spd: 110, def: 125, atk: 160, esq: 85, prec: 135, crit: 140, int: 115 },
    phenix:   { name: 'Phénix', signature: 'danse',   role: 'danseur',     hp: 265, en: 200, spd: 125, def: 70,  atk: 90,  esq: 150, prec: 130, crit: 115, int: 120 },
  },
  // Attaques communes (toutes les races) et attaques propres à une race (race: ...).
  moves: {
    bec:    { name: 'Coup de bec', kind: 'vif',       min: 21, max: 32, acc: 95, cost: 12 },
    ergot:  { name: "Coup d'ergot", kind: 'precis',   min: 32, max: 49, acc: 85, cost: 21 },
    bond:   { name: 'Bond griffu', kind: 'lourd',     min: 49, max: 77, acc: 62, cost: 33 },
    feinte: { name: 'Feinte', kind: 'vif',            min: 11, max: 18, acc: 92, cost: 15, moraleHit: 15 },
    ailes:  { name: 'Battre des ailes', buff: 'guard', acc: 100, cost: 0, energyGain: 45, moraleGain: 5 },
    ruee:   { name: 'Ruée aveugle', kind: 'lourd',    min: 63, max: 98, acc: 50, cost: 42, missMorale: 5 },
    oeil:   { name: "Viser l'œil", kind: 'precis',    min: 18, max: 28, acc: 78, cost: 18, injury: 'oeil', injuryBoost: 2 },
    garde:  { name: 'Esquive basse', buff: 'dodge', acc: 100, cost: 0, energyGain: 22, dodge: 30 },
    rafale:    { name: 'Rafale de becs', race: 'leghorn', kind: 'vif', hits: 3, min: 9, max: 14, acc: 90, cost: 24 },
    ecrasement:{ name: 'Écrasement', race: 'brahma', kind: 'lourd', min: 58, max: 85, acc: 52, cost: 40, ignoreGuard: true },
    sournois:  { name: 'Coup sournois', race: 'sebright', kind: 'vif', min: 20, max: 28, acc: 92, cost: 16, ignoreArmor: true, moraleHit: 8 },
    riposte:   { name: 'Riposte', race: 'houdan', kind: 'precis', min: 32, max: 46, acc: 90, cost: 20, riposte: 1.7 },
    danse:     { name: 'Pas de danse', race: 'phenix', buff: 'dodge', acc: 100, cost: 0, energyGain: 10, dodge: 35, foeMorale: 8 },
    assaut:    { name: 'Assaut du combattant', race: 'shamo', kind: 'lourd', min: 60, max: 90, acc: 68, cost: 38 },
  },
  injuries: {
    aile:  { name: 'Aile froissée',   stat: 'spd',  sign: 'traîne une aile' },
    oeil:  { name: 'Œil poché',       stat: 'prec', sign: "a l'œil poché" },
    bec:   { name: 'Bec fêlé',        stat: 'atk',  sign: 'a le bec fêlé' },
    cotes: { name: 'Côtes meurtries', stat: 'def',  sign: 'se tient les côtes' },
  },
  // look : body round|slim|big · crest single|rose|mohawk|scar · tail sickle|fan|stub|spiky · legs long|short
  coqs: [
    { id: 'braise', name: 'Braise', race: 'houdan', morale: 62, moves: ['bec', 'ergot', 'riposte', 'ailes'],
      look: { body: 'round', crest: 'single', tail: 'sickle', legs: 'long', c: { body: '#d8572a', wing: '#8e2f17', tail: '#1f7a62', hackle: '#f3a635', crest: '#b8323c' } } },
    { id: 'lame', name: 'Lame', race: 'leghorn', morale: 55, moves: ['rafale', 'ergot', 'oeil', 'garde'],
      look: { body: 'slim', crest: 'mohawk', tail: 'spiky', legs: 'long', c: { body: '#33406e', wing: '#1a2142', tail: '#2fd0e6', hackle: '#59d8ea', crest: '#e0408f' } } },
    { id: 'grospaul', name: 'Gros-Paul', race: 'brahma', morale: 66, moves: ['ergot', 'bond', 'ecrasement', 'ailes'],
      look: { body: 'big', crest: 'rose', tail: 'fan', legs: 'short', c: { body: '#efe6cf', wing: '#c09c5c', tail: '#6e4a26', hackle: '#f6d474', crest: '#b8323c' } } },
  ],
  // level : part des plafonds de sa race que l'adversaire a atteinte à l'entraînement.
  // style : equilibre | prudent | brute | vicieux | fou (façon de combattre).
  foes: [
    { name: 'Nugget', race: 'sebright', level: 0.9, style: 'equilibre', morale: 55, rumor: 'Un coq de quartier. Il apprend encore.',
      moves: ['bec', 'sournois', 'feinte', 'garde'],
      look: { body: 'round', crest: 'single', tail: 'stub', legs: 'short', c: { body: '#e8bd4a', wing: '#a9822a', tail: '#7a5a1e', hackle: '#f6dc84', crest: '#b8323c' } } },
    { name: 'Tonton Plumeau', race: 'brahma', level: 0.86, style: 'prudent', morale: 60, rumor: 'Il se protège et attend que tu te fatigues.',
      moves: ['ergot', 'ecrasement', 'ailes', 'bec'],
      look: { body: 'round', crest: 'rose', tail: 'fan', legs: 'long', c: { body: '#9c9a8c', wing: '#6c6a5e', tail: '#3c3a34', hackle: '#c8c4b0', crest: '#a8323c' } } },
    { name: 'Kérosène', race: 'leghorn', level: 0.93, style: 'brute', morale: 70, rumor: 'Il frappe fort et ne recule jamais.',
      moves: ['rafale', 'bond', 'ruee', 'bec'],
      look: { body: 'slim', crest: 'mohawk', tail: 'sickle', legs: 'long', c: { body: '#222228', wing: '#111116', tail: '#ff8a1e', hackle: '#ff7a1a', crest: '#d8402a' } } },
    { name: 'Le Comptable', race: 'sebright', level: 0.95, style: 'vicieux', morale: 60, rumor: 'Il vise les yeux et joue avec les nerfs.',
      moves: ['sournois', 'feinte', 'oeil', 'garde'],
      look: { body: 'slim', crest: 'scar', tail: 'stub', legs: 'long', c: { body: '#7c5a3a', wing: '#4e3622', tail: '#2e2016', hackle: '#cba266', crest: '#a8323c' } } },
    { name: 'Sœur Rouille', race: 'phenix', level: 0.95, style: 'fou', morale: 72, rumor: 'Blessée, elle devient folle furieuse.',
      moves: ['danse', 'ruee', 'bond', 'ergot'],
      look: { body: 'round', crest: 'single', tail: 'spiky', legs: 'short', c: { body: '#b44c22', wing: '#6e2a12', tail: '#4a1e0c', hackle: '#e8784a', crest: '#b8323c' } } },
    { name: 'Vieux Barnabé', race: 'houdan', level: 0.97, style: 'prudent', morale: 66, rumor: 'Un vétéran couvert de cicatrices. Patient.',
      moves: ['riposte', 'ergot', 'ailes', 'bond'],
      look: { body: 'big', crest: 'scar', tail: 'stub', legs: 'short', c: { body: '#d0c8b6', wing: '#9a927e', tail: '#5e584c', hackle: '#e6dec8', crest: '#a8323c' } } },
    { name: "Ergot d'Or", race: 'phenix', level: 1.03, style: 'equilibre', morale: 72, rumor: 'Le favori des parieurs. Rien ne lui manque.',
      moves: ['danse', 'ergot', 'bond', 'feinte'],
      look: { body: 'slim', crest: 'single', tail: 'fan', legs: 'long', c: { body: '#e2a81e', wing: '#a8740e', tail: '#2a8c4c', hackle: '#fff0a0', crest: '#c8343e' } } },
    { name: 'Kaiser', race: 'shamo', level: 1.0, style: 'brute', morale: 78, rumor: 'Un Shamo, une race rare. Personne ne l\u2019a encore fait reculer.', scale: 1.1,
      moves: ['assaut', 'ruee', 'ergot', 'bec'],
      look: { body: 'slim', crest: 'rose', tail: 'sickle', legs: 'long', c: { body: '#3a2420', wing: '#1e1210', tail: '#5c1a8a', hackle: '#c0602a', crest: '#a8323c' } },
      clanMod: { as: { name: 'Kaiser modifié', rumor: 'Au sous-sol, on lui a greffé un bec et des ergots d\u2019acier.' }, add: { atk: 35, def: 25 },
        look: { beak: '#b8c4cc', leg: '#8a949c', spur: '#d8e4ec' } } },
  ],
};

// Les configurations d'équilibrage à comparer. Chacune remplace les valeurs qu'elle liste ;
// les autres restent comme dans CONFIG. Choisie à l'écran titre (← →) ou dans le panneau.
window.PRESETS = {
  R:   { name: 'Recommandé', desc: 'Clandestin +12 %, légal viable, prime clandestine selon la cote.',
    values: { clanFoeMult: 1.12, legalPurseBase: 40, legalPursePerDuel: 14, clanPurseBase: 1.2, foeInfo: 2 } },
  C10: { name: 'Clandestin +10 %', desc: 'Comme Recommandé, avec des adversaires clandestins un peu moins durs.',
    values: { clanFoeMult: 1.1, legalPurseBase: 40, legalPursePerDuel: 14, clanPurseBase: 1.2, foeInfo: 2 } },
  C15: { name: 'Clandestin +15 %', desc: 'Comme Recommandé, avec des adversaires clandestins un peu plus durs.',
    values: { clanFoeMult: 1.15, legalPurseBase: 40, legalPursePerDuel: 14, clanPurseBase: 1.2, foeInfo: 2 } },
  LS:  { name: 'Légal serré', desc: 'Primes légales du premier prototype : le loyer pousse vers le clandestin.',
    values: { clanFoeMult: 1.12, legalPurseBase: 30, legalPursePerDuel: 12, clanPurseBase: 1.2, foeInfo: 2 } },
};
