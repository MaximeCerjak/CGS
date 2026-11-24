# Combats de coqs : décisions de conception

*Notes de discussion, ni brief ni GDD. Dernière mise à jour : 2026-11-24.*

## Idée de départ
- Futur dystopique : la plupart des animaux sauvages ont disparu, il reste surtout des animaux d'élevage.
- Le héros est l'aîné d'une fratrie (un petit frère, une petite sœur) dans un bidonville futuriste. Le père est mort ou disparu, on ne le connaît pas. La mère travaille dur et possède quelques poules.
- Déclencheur : une connaissance propose au héros de participer à des combats de coqs.
- Ce qui donne envie de jouer : gérer son écurie, personnaliser l'apparence et les stats des coqs, vivre les duels, suivre une histoire qui a du sens.

## Phases de développement
- **Première phase** : tout ce qui est décrit dans ce document, sauf ce qui est explicitement repoussé ci-dessous.
- **Repoussé à une phase ultérieure** :
  - les embranchements du scénario (on commence par un scénario sans embranchements, puis on ajoute des branches petit à petit) ;
  - les croisements d'espèces (coq d'une espèce avec une poule d'une autre) ;
  - l'héritage des stats d'un parent entraîné et puissant ;
  - les blessures définitives et les prothèses ;
  - l'essentiel du contenu exclusif à chaque circuit (lieux, personnages, événements). La première phase en contient peu, on en ajoute ensuite.

## Prototype
- **Question à laquelle il répond** : les duels sont-ils prenants, et le choix entre continuer et abandonner crée-t-il de la tension, sous deux niveaux de risque (règles légales et règles clandestines) ?
- **Contenu** :
  - 2 ou 3 coqs avec des stats fixes, sans élevage ni entraînement ;
  - une suite de 5 à 8 duels de difficulté croissante ;
  - un seul compteur d'argent et une seule échéance (par exemple un loyer à payer avant le duel 6) ;
  - la mort définitive et les blessures qui durent ;
  - deux règles de combat : légales (un arbitre arrête le combat avant la mort, abandon toujours permis, gains plus faibles) et clandestines (combat jusqu'à la mort, abandon refusé ou très coûteux, gains bien plus élevés).
- **Hors prototype** : horloge, famille, voyages, élevage, entraînement, équipement.
- Les systèmes dont dépend le combat (argent, stats) sont simulés au strict minimum.
- **Évolution du prototype** (branche `prototype/ergots`) : après les tests, il a intégré le système de statistiques et les races, la redistribution des points, le carnet, le bookmaker, les dettes, les contres par nature d'attaque, les attaques de race et les règles contre la frustration. L'auteur juge la dernière version « beaucoup mieux ».
- Une fois le prototype validé, on développe un MVP plus complet, à faire tester par des connaissances. Il devra être compréhensible sans explication (interface claire, tutoriel minimal).

## MVP : le prologue
**Rôle** : faire comprendre l'intérêt du jeu, ses objectifs et son univers, sans entrer en profondeur dans la gestion de l'écurie. Le MVP présente les mécaniques principales et aborde les différents systèmes.

**Ce que le joueur doit comprendre** : il existe des combats de coqs légaux et des combats clandestins ; on vit dans un monde d'inégalités ; il existe des organisations de malfrats ; on peut rester honnête ou tremper dans de mauvaises affaires.

**Le récit**
- Présenter la situation familiale et chaque membre de la famille, la situation du héros, la ville et ses habitants, et l'initiateur aux combats de coqs (le demi-frère, dont la trahison n'est pas encore révélée).
- Le joueur est mené vers un premier tournoi. Le MVP s'arrête juste avant ce tournoi.

**L'objectif du joueur** : gagner sa place au premier tournoi, ce qui demande deux conditions :
- réunir la mise d'inscription ;
- avoir remporté 3 combats sur le circuit légal.

Le clandestin peut fournir l'argent, jamais les victoires légales.

**Les finances**
- Au début, le héros ne paie pas le loyer. Il enchaîne petits boulots, paris et jeux d'argent, et participe un peu aux finances de la famille, mais sa mère ne peut pas vraiment compter sur lui. Ses responsabilités financières grandiront au fil du jeu complet.
- Dans le prologue, la mère lui demande de faire un effort : elle n'aura pas les moyens de payer le loyer ce mois-ci, et il faut au moins qu'il participe. C'est le premier dilemme, en concurrence avec la mise du tournoi.
- Les dépenses du poulailler (nourriture, soins, équipement) font partie des finances.
- Les dettes en clandestin restent possibles.

**Les activités**
- **Combats** : le système complet du prototype (contres, attaques de race, soutien, abandon, bookmaker, mort définitive en clandestin).
- **Paris sur les combats des autres** : le défaut du héros rendu jouable. Ils utilisent le bookmaker et ses cotes, et regarder un combat remplit le carnet.
- **Petits boulots** : narratifs, avec un choix, et ils prennent du temps.
- **Missions clandestines** :
  - un **combat truqué** : perdre exprès contre de l'argent, au risque de blesser son coq ;
  - une **livraison** réalisée pour de vrai : aller chercher un colis et le livrer en se déplaçant dans la ville.
- **Découvrir le circuit clandestin** et pouvoir s'y essayer.

**Les systèmes, et leur profondeur dans le MVP**

| Système | Dans le MVP |
|---|---|
| Combat | complet, comme dans le prototype |
| Élevage | simplifié : nourrir son poulailler ; un ou deux coqs aux stats de base, prêts à combattre dès le début. Pas de croissance des poussins ni d'initiation |
| Équipement | oui, avec une boutique |
| Carnet | oui, rempli en combattant et en regardant des combats |
| Réputation | dans les deux milieux, avec un minimum de portes qui s'ouvrent et se ferment |
| Finances | voir plus haut |
| Temps | un calendrier simple (des jours qui passent) : les petits boulots en consomment, la demande de la mère a une échéance, le tournoi a une date. Pas l'horloge complète |
| Ville | explorable, pour rencontrer ses habitants et réaliser la livraison (à confirmer : déplacement du héros en vue de dessus) |
| Sauvegarde | une sauvegarde simple, puisque les testeurs jouent seuls |
| Prise en main | un début guidé et des aides, puisque le MVP doit se comprendre sans explication |

**Hors MVP** : croissance des poussins et initiation, entraînement en duo, horloge complète, dilemmes familiaux à délai (au-delà de la demande de la mère), trahison et révélation du demi-frère, fins, prothèses et blessures définitives, trois modes de sauvegarde.

**Technologie** : l'auteur penche pour un moteur de jeu plutôt que le navigateur, pour poser des bases solides. Choix du moteur à faire avant de construire le MVP.

## Organisation des branches
- Le prototype est développé sur une branche dédiée.
- Le MVP est développé sur une branche dédiée.
- Le projet complet vit sur la branche de recette et sur la branche principale.

## Décisions

### Ton et position du jeu
- Le jeu ne prend pas parti sur les combats de coqs (comparables au MMA ou aux gladiateurs). Certains personnages sont pour, d'autres contre.
- Une histoire sérieuse (pauvreté, inégalités) avec un côté déjanté et de l'humour noir. Le restaurant de poulet frit est volontairement ironique.
- Les combats sont légaux, mais le milieu est fréquenté par des malfrats.
- La société du jeu est montrée telle qu'elle est, sans jugement : des malfrats qui font des affaires en douce (travail au noir, trafics), et des gens honnêtes qui subissent les inégalités ou saisissent des occasions sans tremper dans les magouilles.

### Deux circuits : légal et clandestin
- À côté des combats légaux existe un réseau de combats clandestins avec d'autres règles.
- Les équipements (armes, protections) sont autorisés dans les deux circuits. Les coqs cyborgs et les expériences scientifiques sont interdits dans le circuit légal et autorisés dans le circuit clandestin.
- Les deux voies diffèrent sur quatre plans :
  1. **Les règles du combat.** Légal : un arbitre arrête le combat avant la mort, abandonner est toujours permis, des soins sont assurés sur place, les gains sont plus faibles. Clandestin : combats jusqu'à la mort, abandon refusé ou très coûteux, gains bien plus élevés.
  2. **La forme des revenus.** Légal : sponsors, contrats, revenu stable, peut-être l'accès au crédit. Clandestin : gros paris, primes, argent rapide mais irrégulier, dettes possibles envers les mauvaises personnes.
  3. **Les portes qui s'ouvrent et se ferment.** Légal : tournois officiels, villes, éleveurs respectables, ligues prestigieuses. Clandestin : marché noir (coqs rares, matériel interdit, médicaments moins chers mais douteux), lieux cachés, faveurs. La première phase contient peu de contenu exclusif ; on en ajoute ensuite.
  4. **Le regard de la famille.** Légal : une réussite qu'on peut montrer, dont la mère peut être fière et dont le frère peut s'inspirer sans danger. Clandestin : il faut cacher, la relation en pâtit, et les malfrats peuvent un jour menacer la famille.

### Réputation dans les deux milieux
- On peut fréquenter les deux circuits, mais trop tremper dans la clandestinité finit par se savoir, et des portes se ferment côté légal. Ça marche dans les deux sens : un joueur trop honnête voit aussi des portes se fermer côté clandestin.
- On n'est jamais bloqué définitivement d'un côté. Il y a toujours un moyen de changer de chemin :
  - pour revenir au légal : payer une grosse amende, ou faire un séjour en prison pendant lequel les charges continuent de tomber ;
  - pour revenir au clandestin : rendre un petit service à quelqu'un pour accéder à de nouveaux contacts et lieux, puis un autre service, ou accepter un combat truqué.
- Le joueur perçoit sa réputation par des signes à lire : des rumeurs, et un contact qui connaît les deux milieux et peut le prévenir, au détour d'une discussion, qu'il prend des risques qui pourraient lui coûter cher.

### Histoire
- **Le héros au début** : un jeune comme les autres, qui se cherche et ne sait pas quoi faire de sa vie. Il enchaîne les petits boulots et les trafics, et passe le reste de son temps à parier et à jouer de l'argent dans l'espoir de se sortir de sa situation.
- **Deux fins**, sans bonne ni mauvaise fin :
  - le héros prend la direction des arènes et des malfrats (diriger les malfrats peut aussi permettre d'aider son quartier) ;
  - le héros met sa réussite au service des siens et de son quartier, loin des malfrats.
- Axe des deux fins : devenir celui qui gère le jeu (le gérant des arènes), ou se lever de la table pour construire autre chose avec ses gains.
- **La fin découle des choix accumulés** pendant la partie, pas d'une décision finale. Plus le joueur trempe dans les magouilles, plus il se rapproche de la direction des malfrats. Plus il reste honnête et passe par des voies classiques pour acquérir des biens et une réputation, plus il se rapproche de l'autre fin.
- Rejouabilité : deux fins différentes pour commencer. Continuer à jouer après la fin reste une extension possible.
- **Le genre du personnage** : le joueur choisit de jouer un garçon ou une fille. Tous les dialogues sont adaptés en conséquence.

### Le père
- Le père est mort. Il ne réapparaît pas.
- Il a d'abord eu une première famille, dont un fils. Il l'a abandonnée pour venir vivre avec la mère du héros, avec qui il a eu trois enfants, dont le héros. Puis il a trompé la mère, il est parti, on ne l'a plus jamais revu, et il est mort loin de la famille.
- La mère ne sait pas que le père avait un fils avant eux.

### Le demi-frère : la connaissance qui initie le héros
- La connaissance qui propose les combats de coqs au héros est le premier fils du père, donc son demi-frère. Ils se connaissent par les paris.
- C'est un faux gentil, guidé par la vengeance : il tient la famille du héros pour responsable de son propre malheur et veut la voir tomber. Ses conseils poussent discrètement vers le clandestin, les gros paris et les dettes.
- Il devient aussi un rival récurrent dans l'arène, avec ses propres coqs.
- Deux révélations séparées :
  - le joueur découvre que c'est un faux gentil assez tôt, dans la première partie du jeu (premier tiers, ou au plus tard première moitié) ;
  - il découvre que c'est son demi-frère seulement vers la phase finale.
- Après la révélation du lien de sang, la relation peut prendre différentes directions.

### Le contact entre les deux milieux
- Un personnage distinct du demi-frère, qui connaît le milieu légal et le milieu clandestin.
- Au détour d'une discussion, il peut prévenir le joueur qu'il prend des risques qui pourraient lui coûter cher. C'est l'une des façons dont le joueur perçoit sa réputation.

### Duel
- Au tour par tour, comme Pokémon (menus, sans placement). L'interface sera à retravailler pour ne pas faire une pâle copie.
- La préparation compte beaucoup, et le joueur donne des ordres pendant le combat.
- Première version envisagée en 2D vue de dessus. Le contrôle direct en 3D a été évoqué comme autre possibilité.
- Le hasard fait partie du combat : esquives, attaques ratées, dégâts compris dans une fourchette. La précision de chaque attaque est connue : utiliser une attaque peu fiable dans une situation critique est un choix du joueur, qui en assume le résultat.

### Stats et lecture du combat
- Stats d'un coq en duel : énergie, santé, blessures, état d'esprit (voir aussi « Système de statistiques et races »).
- La santé est la jauge de vie. Les blessures dégradent les stats de combat (vitesse, hargne, défense, précision, attaque, etc.).
- L'état d'esprit agit sur les stats de combativité (défense, vitesse, etc.).
- Le joueur voit son propre coq précisément. Il voit les mêmes stats chez l'adversaire, mais avec moins de précision : une jauge plutôt que des chiffres, un coq qui devient hésitant ou a peur, qui est blessé, dont les attaques perdent en efficacité.
- Les signes passent par un changement du sprite d'attente (nouvel état) ou par des informations écrites, pas forcément par des animations.
- La lecture du combat s'améliore avec l'expérience d'entraîneur.

### Système de statistiques et races
Retour de l'auteur après le prototype : les 5 stats du prototype (vie, énergie, vitesse, attaque, défense) sont trop pauvres. Le jeu doit permettre de configurer des coqs vraiment différents, avec des caractéristiques propres à chaque race.

**Les statistiques**
- **PDV** et **énergie** : chacune a son propre plafond, séparé des stats de combat.
- **7 stats de combat** : vitesse, défense, attaque, esquive, précision, critique, intelligence.
  - **Vitesse** : ordre d'action.
  - **Esquive** : capacité physique à éviter un coup ; elle joue à chaque attaque.
  - **Précision** : chance de toucher.
  - **Critique** : chance de réaliser une attaque plus puissante.
  - **Intelligence** : lecture du combat. Elle permet d'anticiper une feinte adverse. Elle augmente l'esquive quand l'adversaire répète une attaque : fortement si c'est la même attaque plusieurs fois de suite, légèrement si elle a déjà été utilisée dans le combat.
- **L'état d'esprit** n'est pas une stat : il fait fluctuer l'ensemble des stats. Il est protégé par le confort (logement, alimentation) et influencé par le soutien de l'entraîneur.

**Les plafonds**
- Le plafond absolu des 7 stats de combat est de 1 050 (7 × 150).
- Chaque race a un plafond par défaut pour chaque stat, qui définit son profil. Le total de ces plafonds est propre à la race.
- Un poussin ne naît pas avec ses stats au maximum : il atteint les plafonds de sa race en étant entraîné.
- L'équipement, et plus tard les prothèses, s'ajoutent par-dessus les stats plafonnées, dans une certaine limite.

**La redistribution**
- Parmi l'ensemble des points, le joueur peut en redistribuer un certain nombre d'une stat à l'autre. Valeur de départ : **50 points** (75 évoqué, à régler).
- Une stat peut dépasser le plafond de sa race de **21 points au maximum**. Exemple : baisser la défense d'un Brahma pour augmenter son attaque ou sa vitesse au-delà de son plafond, mais de 21 points au plus.

**Ce qui différencie deux coqs de la même race**
- les variations à la naissance (aléatoires en première phase ; héritées des parents en phase ultérieure, comme décidé pour l'héritage des stats) ;
- l'entraînement et la redistribution des points ;
- l'équipement, puis les prothèses ;
- les attaques sélectionnées.

**Exemple de profils de races** (exemple de l'auteur, à revoir pour trouver un système efficace et amusant ; le total compte les 7 stats de combat, sur 1 050) :

| Race | PDV | Énergie | Vitesse | Défense | Attaque | Esquive | Précision | Critique | Intelligence | Total / 1 050 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Leghorn · Sprinteur | 270 | 190 | 150 | 75 | 105 | 135 | 125 | 110 | 100 | 800 |
| Brahma · Poids lourd | 440 | 120 | 70 | 150 | 150 | 60 | 125 | 135 | 115 | 805 |
| Sebright · Feinteur | 210 | 165 | 120 | 55 | 65 | 150 | 105 | 110 | 145 | 750 |
| Houdan · Contreur | 320 | 150 | 95 | 120 | 110 | 95 | 150 | 140 | 135 | 845 |
| Phénix · Danseur | 265 | 200 | 125 | 70 | 90 | 150 | 130 | 115 | 120 | 800 |

**Le carnet des races**
- Connaître la race du coq adverse donne son profil combatif, à condition de l'avoir déjà rencontrée.
- Un carnet de notes (ou une tablette) répertorie les caractéristiques des coqs combattus et de ceux dont on a entendu parler.
- On ne rencontre pas les coqs seulement en les combattant : on peut aussi aller les voir se battre dans des tournois.

**L'équilibre entre les races** (décidé après les tests du prototype)
- Les races n'ont pas à être égales : certaines peuvent tout simplement avoir des avantages, et les races rares être plus fortes (exemple : le Shamo).
- Ce qui compte, c'est qu'un coq plus faible puisse battre un coq plus fort dans les bonnes conditions. Cela passe par les contres entre natures d'attaque, la redistribution des stats, les attaques propres aux races, et plus tard l'équipement : de quoi rendre un coq plutôt faible tenace face à certaines races.
- Écarté : un budget égal pour toutes les races (où les PDV et l'énergie coûteraient des points).

### Contres par nature d'attaque
Le système de contres retenu passe par les stats, sans tableau de types. Chaque attaque a une nature, et chaque nature bute sur une stat différente :
- **vive** (exemples : Coup de bec, Feinte) : difficile à esquiver (l'esquive adverse ne compte qu'à moitié), mais la défense adverse en absorbe une part fixe à chaque coup ;
- **précise** (exemples : Coup d'ergot, Viser l'œil) : la précision de l'attaquant compte double et la défense n'en absorbe que la moitié, mais un coq malin (intelligence élevée) la lit et l'esquive plus facilement ;
- **lourde** (exemples : Bond griffu, Ruée aveugle) : elle traverse une bonne partie de la défense, mais un coq plus rapide que l'attaquant l'esquive plus facilement.

Les contres par la préparation (natures d'attaque et résistances des corps, puis équipement) viendront plus tard.

### Attaques communes et attaques de race
- Toutes les races partagent des attaques communes : Coup de bec, Coup d'ergot, Bond griffu, Feinte, Ruée aveugle, Viser l'œil, Battre des ailes, Esquive basse.
- Chaque race a en plus ses attaques propres. Celles du prototype :

| Race | Attaque propre | Effet |
|---|---|---|
| Leghorn | Rafale de becs | vive, trois coups à la suite |
| Brahma | Écrasement | lourde, ignore la garde et l'esquive préparée |
| Sebright | Coup sournois | vive, traverse la défense, trouble le moral |
| Houdan | Riposte | précise, dégâts bien plus forts si l'adversaire vient de rater |
| Phénix | Pas de danse | grosse esquive, l'adversaire perd du moral |
| Shamo | Assaut du combattant | lourde, puissante et assez précise |

- D'autres attaques propres aux races viendront s'ajouter.

### Rythme du combat et frustration
Retour de l'auteur : rater plusieurs dizaines d'attaques d'affilée rend le jeu énervant et donne envie d'arrêter. Règles retenues dans le prototype :
- une chance de toucher plancher (35 %), quelles que soient l'esquive et la lecture adverses ;
- chaque échec d'affilée augmente la chance de toucher (+12 % par raté) : l'attaquant « trouve enfin l'ouverture » ;
- au-delà d'un certain nombre de tours (12), les coqs s'épuisent : chaque tour ajoute 10 % aux dégâts, pour que le combat se conclue ;
- un réglage global des dégâts fixe la durée des combats. Cible obtenue : 5 à 13 tours en légal, 7 à 17 en clandestin.

### L'IA des adversaires
- Chaque adversaire a un style : équilibré, prudent, brute, vicieux, imprévisible.
- Elle apprend de ses erreurs, sans que ce soit systématique : quand une attaque a raté ou a été absorbée deux ou trois fois de suite (une brute s'entête plus longtemps), elle en change, la plupart du temps. Elle peut donc encore répéter, ce qu'un joueur attentif peut exploiter.

### Indices dans le journal de combat
Le jeu explique ses règles par le récit du combat, sans tutoriel. Exemples :
- répétition : « Lame utilise Coup d'ergot, encore. Trop prévisible : il rate son coup. » ; « Nugget a déjà vu ce Coup d'ergot et l'évite. » ;
- contres : « Le coup glisse sur sa défense. » ; « trop lent : il l'évite sans peine » ; « a lu le geste et l'évite » ;
- rythme : « trouve enfin l'ouverture » ; « Les deux coqs s'épuisent : chaque coup porte davantage. »

### Le bookmaker
- Avant chaque duel, le bookmaker de l'arène affiche une cote pour chacun de tes coqs face à l'adversaire. Elle tient compte du circuit, des blessures et de la répartition des points.
- La cote est une estimation du milieu, pas une vérité : elle se trompe un peu, dans un sens comme dans l'autre. Elle est calculée comme si ton coq était mené par un entraîneur compétent.
- En clandestin, la prime dépend de la cote : envoyer un outsider rapporte davantage. En légal, la prime est fixe.
- Il pourra plus tard être possible de repérer une cote mal fixée grâce à l'expérience d'entraîneur et au carnet.

### Argent, dettes et loyer (dans le prototype)
- En clandestin, on peut s'inscrire sans avoir la mise : on s'endette. La dette grossit d'un duel à l'autre, et des représailles sont possibles (un coq blessé au poulailler). Au-delà d'une certaine dette, les malfrats saisissent tout. En légal, pas de crédit.
- Le loyer peut être payé dès qu'on a la somme.
- On peut passer un duel : on ne gagne rien, mais les coqs se reposent et leurs blessures guérissent.
- Pour le prototype, l'argent après le loyer n'a pas d'importance : pas de deuxième échéance.

### Le duel final du prototype
- En légal : un coq d'une race rare et naturelle, le Shamo (Kaiser).
- En clandestin : le même coq, modifié (bec et ergots d'acier), conformément à la règle qui réserve les modifications au circuit clandestin.

### Soutien de l'entraîneur
- En plus de l'ordre donné au coq, l'entraîneur peut le soutenir pendant le même tour. Le soutien ne remplace pas l'ordre.
- Le soutien agit sur l'état d'esprit, qui agit sur les stats. Exemples à affiner : mettre la pression (plus de vitesse et d'attaque, beaucoup moins de précision) ; encourager (plus de défense et d'état d'esprit).
- D'autres formes de soutien sont possibles.

### Mort, blessures et abandon
- Un coq mort disparaît définitivement. L'idée d'une « essence » récupérable est abandonnée.
- On ne garde que l'expérience d'entraîneur, qui accélère l'entraînement sur les premiers paliers et améliore la lecture du combat.
- Le moment clé : tenter le coup au risque de perdre son coq, ou abandonner. Abandonner fait perdre de l'argent sans en gagner.
- Les blessures durent après le combat. Un coq blessé ne peut pas se relancer tout de suite : il faut des soins, du temps et de l'argent.
- **Phase ultérieure** : des blessures définitives, avec un malus permanent sur les stats. Deux choix :
  - soigner : le coq est stabilisé mais garde une séquelle (malus définitif) ;
  - poser une prothèse, si on en a les moyens. La prothèse est un compromis, pas une amélioration pure : elle augmente certaines stats et en diminue d'autres (exemple : une aile d'acier fait perdre en vitesse et gagner en attaque).

### Se relever d'une perte
- Revendre des possessions pour retourner vite dans des combats qui rapportent.
- Ou attendre qu'un jeune coq soit prêt : il reprend des combats de bas niveau qui rapportent moins, et les charges continuent (loyer du logement et du commerce, nourriture de la famille et du poulailler).
- Une écurie bien gérée a plusieurs coqs prêts en même temps. Perdre un coq reste dur si on a beaucoup investi en lui : la tension demeure en fin de partie. Composer son écurie (beaucoup de coqs moyens ou quelques coqs très forts) est un choix stratégique.

### Sauvegarde et modes de jeu
Trois modes, choisis en début de partie et expliqués au joueur :
- **Facile** : sauvegarde libre. Pas d'équilibrage spécifique ; le joueur est prévenu que ça réduit les contraintes.
- **Moyen** : à la fin d'un combat, le joueur choisit de sauvegarder ou de revenir à la dernière sauvegarde (faite après le combat précédent). Il peut retenter un combat perdu, au prix du temps à rejouer.
- **Difficile** : sauvegarde automatique à la fin de chaque combat, sans possibilité de recharger.
- L'équilibrage se fait pour le mode difficile.

### Élevage : logement et alimentation
- Le poulailler est un bâtiment dont on peut améliorer la qualité et la structure.
- L'alimentation existe en plusieurs niveaux de qualité.
- Le logement et l'alimentation forment le confort du coq. Le confort agit sur sa force mentale : plus un coq a de confort, plus son état d'esprit reste positif et combatif longtemps pendant un combat ; moins il en a, plus vite il faiblit mentalement, puis en combat.

### Soins
- **Soins du quotidien** : prévenir les maladies. Trop de volailles dans un bâtiment trop petit favorise les maladies, qu'il faut traiter (vaccins, antibiotiques, etc.).
- **Soins après un combat** : bandages, sutures, etc.

### Entraînement
- Une zone d'entraînement dans le poulailler accueille deux coqs, qui s'affrontent pendant un certain temps de jeu.
- À la fin, leur jauge d'entraînement est remplie : on peut modifier des stats, ou leur faire apprendre une nouvelle attaque, selon le cas.
- Le choix du partenaire compte :
  - un coq faible avec un coq fort : gains plus élevés, risque de blessure plus élevé ;
  - deux coqs de niveau proche : gains moindres, risque de blessure moindre.
- Le matériel d'entraînement compte aussi. Il s'améliore avec les améliorations du poulailler et de sa zone d'entraînement.
- Un entraînement peut blesser un coq, qu'il faut alors soigner.

### Armes et protections
- Équipements par partie du corps : griffes, bec, casque, crocs, etc.
- Plusieurs matériaux possibles (acier et autres).

### Reproduction et héritage
- Le poulailler produit des œufs. Une partie donne des mâles, une partie des femelles.
- Les mâles conservés peuvent devenir des coqs de combat : œuf, puis poussin, puis coq mature prêt à combattre, chaque étape prenant un certain nombre de jours de jeu.
- Le poussin hérite de l'espèce de son père, et donc des stats par défaut de cette espèce.
- **Phase ultérieure** : croisements entre l'espèce du coq et celle de la poule, puis héritage des stats d'un père entraîné et devenu très puissant.

### Temps
- Une horloge et un calendrier avancent pendant qu'on joue.
- Le temps s'arrête dans les menus, pendant les pauses et pendant les dialogues. Le jeu se met en pause automatiquement après un moment d'inactivité.
- Un duel fait passer une durée fixe (par exemple : entré à 14 h, sorti à 16 h). L'inscription au combat peut elle aussi prendre du temps.
- Le temps fait grandir les coqs et vieillir les personnages. Attendre qu'un jeune coq soit prêt, c'est aussi laisser grandir les enfants.

### Famille
- L'avenir de la famille diverge selon les choix. Exemples : un restaurant de poulet frit, la mère embauchée pour développer le poulailler, la sœur qui fait des études, le frère qui entraîne ses propres coqs, d'autres encore.
- Chaque membre de la famille a sa propre volonté. Une trajectoire souhaitée peut ne pas aboutir si certaines conditions ne sont pas remplies.
- Ces conditions dépendent de la relation, pas seulement de l'argent.
- Pas de jauge visible, mais des interactions. Exemple : la sœur demande un service qui oblige à repousser un entraînement, et on accepte ou on refuse. Un journal retrace les interactions principales. Un score relationnel caché sert aux concepteurs à décider des interactions futures.
- La mère : au début, le héros lui cache les combats. Elle n'est pas dupe et comprend en voyant l'argent rentrer.
- En vieillissant, les personnages font naître des dilemmes, que le joueur ait ou non les moyens d'y répondre.
- Les dilemmes fonctionnent comme des quêtes : une date limite claire, notée dans le journal de quêtes. Les personnages en parlent (« Alors, tu as assez pour mes études ? ») et sont plus ou moins pressés.
- Un dilemme peut attendre (la sœur peut reporter ses études d'un, deux ou cinq ans), dans une certaine limite au-delà de laquelle il n'est plus résolvable. Certains délais sont très courts, d'autres très longs.
- Contrairement au score relationnel, les délais des dilemmes sont visibles et clairs.
- Quand le délai est dépassé, le personnage décide de lui-même. Exemples pour la sœur : un autre parcours, trouver un travail, des études moins chères, autre chose que des études, ou quitter la maison et en vouloir au héros. Les issues seront définies dans les branches du scénario.

### Monde et structure
- On se déplace au-delà du quartier : autres villes, un éleveur d'une espèce rare, la montagne pour attraper un coq sauvage introuvable ailleurs. Des personnages, des défis, des conseils, des embrouilles, des propositions.
- Les déplacements n'ont pas de durée propre : c'est le temps de jeu passé à se déplacer sur la carte. Les enfants grandissent pendant ce temps.
- Quand le héros est loin, on ne gère rien à la maison, mais le temps et les finances continuent (charges, nourriture du poulailler).
- Un déménagement (logement, maison, poulailler) est possible au cours de l'histoire.
- Des chapitres existent mais ne sont pas affichés. Comme dans Pokémon, des conditions débloquent de nouveaux accès et événements : conditions d'histoire, de niveau, d'argent, et de temps écoulé (âge des personnages).

## Questions ouvertes
- Les améliorations scientifiques : intéressantes ou superficielles ? À réfléchir.
- La forme exacte de l'entraînement au-delà du duo (ce qu'on choisit d'améliorer, les attaques apprises).
- La durée fixe d'un duel : 1 heure ou 2 heures de jeu ?
- Les directions possibles de la relation avec le demi-frère après la révélation (confrontation, réconciliation, autre), et sa place dans chacune des deux fins.
- Le moment exact où le joueur découvre la trahison du demi-frère : premier tiers ou première moitié ?
- Le scénario sans embranchements de la première phase.
- Redistribution des stats : 50 ou 75 points ? Une stat peut-elle descendre sans limite sous le plafond de sa race (une limite de −21 évoquée) ? La répartition est-elle définitive, ou peut-on la refaire (contre de l'argent ou du temps d'entraînement) ?
- La parade par l'intelligence, qui réduisait les dégâts avec la défense, est-elle abandonnée ?
- Combien d'attaques un coq connaît-il, et combien en emporte-t-il en duel ? (Prototype : 4 par coq, dont son attaque de race.)
- L'équilibre des races reste à travailler : dans le prototype, le Brahma est trop fort et le Sebright trop faible.
- Le plancher de chance de toucher réduit la frustration mais affaiblit les races qui comptent sur l'esquive (Sebright, Phénix, Leghorn) : comment redonner de la valeur à l'esquive sans faire revenir les longues séries de ratés ?

## Observations de Claude (non validées)
- Une race plus forte pourrait se payer ailleurs : plus rare et plus chère, ce qui rejoint les coqs rares qu'on va chercher en voyage.
- Une piste pour l'esquive : esquiver pourrait aussi fatiguer l'attaquant (lui coûter de l'énergie), au lieu de seulement le faire rater.
- Les simulations du prototype (environ 60 000 combats par itération) montrent que choisir le bon coq pour chaque adversaire décide souvent du combat : le carnet et la cote prennent alors toute leur valeur.
- La cote du bookmaker colle au héros parieur et au thème du rapport au risque.
- Avec le carnet, la lecture de l'adversaire se fait en deux temps : la race donne le profil général, le duel révèle le build de ce coq-là.
- Aller observer des tournois pour remplir le carnet coûte du temps de calendrier : l'information devient une ressource, et on retrouve le dilemme central.
- Races, stats de base et carnet rapprochent fortement le jeu de la structure de Pokémon. Ce qui le distingue : un carnet imparfait, rempli en observant, fait d'estimations plutôt que de chiffres exacts.
- L'intelligence qui punit la répétition marche dans les deux sens : le joueur doit varier ses attaques, et peut exploiter un adversaire peu malin. Le joueur doit le voir (exemple : « Nugget a lu ton Coup d'ergot »).
- Neuf stats, plus le moral et les blessures : l'essentiel se lit au poulailler et dans le carnet, l'écran de duel ne garde que ce qui change pendant le combat.
- Le service demandé par la sœur et l'abandon d'un duel ont la même structure : choisir ce qu'on sacrifie. Ce pourrait être un pilier du jeu.
- Le héros gère sa famille comme il gère son écurie. Le frère qui entraîne ses propres coqs reproduit son parcours.
- Une boussole possible pour l'humour : la famille reste sincère, c'est le monde autour d'elle qui est grotesque.
- Deux horloges : celle de la carrière (le joueur la fait avancer à son rythme) et celle de la vie (les dilemmes arrivent qu'on soit prêt ou non). La difficulté naît de l'écart entre les deux.
- Mettre la pression et utiliser une attaque peu fiable relèvent de la même logique : un risque choisi.
- Le choix du circuit est un choix moral fait par la mécanique : pas besoin de compteur caché d'honnêteté.
- Si une prothèse compte comme une modification « cyborg », un joueur honnête dont le coq perd une aile ne peut que soigner avec séquelle : la blessure devient une tentation qui pousse vers le clandestin.
- La prison n'a pas besoin de pénalité inventée : le calendrier continue (charges, enfants qui grandissent, délais des dilemmes, poulailler à nourrir).
- Le demi-frère et le héros portent la même blessure : tous deux ont été abandonnés par le même père. Le demi-frère se venge sur des gens qui ont subi la même chose que lui. La révélation finale fait de l'ennemi un miroir, compréhensible sans être excusé.
- Révéler tôt la trahison remplace la question « peut-on lui faire confiance ? » par « pourquoi m'en veut-il ? », qui peut porter l'histoire jusqu'à la phase finale. Il faudra placer des indices pour que la révélation soit surprenante mais juste.
- Le faux gentil doit vraiment aider de temps en temps, sinon le joueur devine sa trahison dès la première scène.
- Le duo de personnages : celui en qui on a confiance à tort (le demi-frère) et celui qui dit des vérités qu'on n'a pas forcément envie d'entendre (le contact).
- Le héros est déjà un parieur : le combat de coqs est le même pari, avec un être vivant comme mise. Le choix de continuer ou d'abandonner met son défaut de caractère entre les mains du joueur. Thème possible : le rapport au risque.
- Le confort (à la maison) et le soutien (dans l'arène) passent tous les deux par l'état d'esprit.
- Les maladies dues à un poulailler surpeuplé donnent un prix naturel à une grande écurie.
- Les prothèses pourraient devenir les améliorations scientifiques : elles naîtraient d'une blessure et d'un dilemme.
- Le nombre de places d'entraînement pourrait dépendre de la qualité du bâtiment.
- Si les stats se transmettent un jour, un coq puissant qui meurt laisse quelque chose à travers ses descendants.
- Coût de production : armes, protections, prothèses et espèces visibles sur le sprite multiplient les combinaisons à dessiner.
- Même la version sans embranchements doit contenir des dilemmes avec délai, et la structure technique doit prévoir dès le départ le journal, le score relationnel et la mémoire des choix.
