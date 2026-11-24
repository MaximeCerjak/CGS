# Game Brief: Ergots *(guessed)*

## In your words
> Dans un futur dystopique, la plupart des animaux sauvages ont disparu. Il reste surtout des animaux d'élevage, dont les poules et les coqs. On incarne l'aîné d'une fratrie dans une ville qui ressemble à un bidonville du futur. Il a un petit frère et une petite sœur. Son père est mort ou disparu, on ne le connaît pas. Sa mère travaille dur pour faire vivre la famille et le personnage veut l'aider à subvenir à leurs besoins.
>
> Sa mère possède quelques poules. Une connaissance lui propose de participer à des combats de coqs. C'est le déclencheur de l'aventure. Au fil des duels, le joueur gagne de l'argent, se fait une réputation et développe une écurie. Il peut acquérir des coqs plus rares et améliorer les conditions de vie de sa famille.
>
> Ce qui me donne envie d'y jouer, c'est de gérer mon écurie, de personnaliser l'apparence et les stats de mes coqs, de vivre les duels et de suivre une histoire qui a du sens, m'embarque et me challenge.
>
> « Si il y a une chose que j'aimerais tester c'est le combat de coq, c'est le coeur du jeu. »
>
> Réponses : 1. Ambiance : ok (tension posée) · 2. Apparence : « le proto peut être en pixel art, bidonville futuriste comme tu l'as décrit, on fera le choix du style pour le mvp » · 3. Soutien : ok · 4. Abandon clandestin : ok (refusé) · 5. Entre deux duels : ok · 6. Victoire et défaite : ok · 7. Langue : ok (français)
>
> Décisions détaillées : `design/concept-decisions.md`.
>
> After play: « je trouve ça vraiment chouette par contre niveau équilibrage il va falloir bien travailler par ce qu'a un moment ça me semble vraiment très dur. Je pense qu'on devrait pouvoir avoir des informations supplémentaire sur son adversaire avant le combat pour savoir qui envoyé face à lui par ce que la c'était très hasardeux comme tentative, mon premier essai à été un échec par ce que j'ai commencé par des combat en legal mais ça ne me rapporté pas assez d'argent pour espérer pouvoir payer mon loyer donc j'ai fait les deux dernier combat en clandestin mais j'ai perdu deux fois et j'ai perdu la partie. Ensuite mon deuxième essai j'ai tenté les deux premier en clandestin et après en légal ce qui m'a permis de gagner la partie. Sinon je trouve que le concept à du potentiel et qu'on peut vite se prendre au jeu avec des graphismes de qualité, une histoire et une interface immersive. »
>
> After play: « autant se concentrer sur les réglages directement à notre portée. Dans ce cas j'aimerais carrément en profiter pour que le prototype embarque la possibilité de tester plusieurs configurations d'équilibrage »

>
> After play: « Je trouve cela trop pauvre. [...] Je veux que mon jeu permettent réellement de configurer des coqs différents, je veux aussi que les coqs aient des caractéristiques propre à chaque race et que cela puisse permettre d'analyser son adversaire » (système complet : `design/concept-decisions.md`, « Système de statistiques et races »)
>
> After play: « à aucun moment, sauf peut être la première partie, on a envie de se lancer dans le clandestin car à chaque fois les descriptions font croire qu'on a aucune chance [...] Il me restait un combat avant le loyer, ma seule chance de payer était de gagner ce combat »
>
> After play: « je figerais aussi la difficulté accru des adversaires en clandestin à 15% [...] en clandestins on peut avoir des dettes et donc des représailles. Je pense même que 10 ou 12% de difficulté supplémentaires pourrait suffire. Donc intègre tout ça et le nouveau système de stat aussi. J'aime particulièrement le bookmaker »

> After play: « j'ai gagner toutes les autres parties en clandestin, meme quand gros-paul était grand outsider avec une cote à 5 j'ai gagné [...] ce qui est un défaut c'est que j'ai tué mon adversaire en 3 coups seulement sans être inquiété » ; « Fait les corrections 1, 2 et 3, l'argent on s'en fou pour le prototype. Ensuite [...] je te laisserai la responsabilités de tester le plus de combinaisons de combat possible pour évaluer l'équilibrage »

> After play: « pour moi c'est normal que certaines races puissent tout simplement avoir des avantages [...] un pokemon de type eau plafonné à 500 peut battre un pokemon de type feu plafonné à 650. C'est ce qui fait défaut à notre système » ; « Contre par les stats, différents type d'attaque qui contre différentes type de stats et préparation pour plus tard » ; l'IA brute « apprenne de ses erreurs » ; indice sur la répétition : « Lame utilise coup d'ergot, encore, trop prévisible, il rate son coup » ; duel 8 : un coq rare, modifié en clandestin (solution a)

> After play: « Les combats deviennent aussi peut être interminable par ce qu'on a trop réduits les dégâts. Si on se met à raté successivement plusieurs dizaines d'attaques ça peut devenir très énervant pour un joueur et ne plus du tout donné envie de jouer, il faut régler ça. Des attaques communes à toutes les races et des attaques spécifiques. »

**Pitch:** Dans un bidonville du futur, tu fais combattre tes coqs pour payer le loyer, et à chaque tour tu choisis jusqu'où risquer leur vie.

**Genre:** combat de créatures au tour par tour, centré sur la prise de risque (sans capture de créatures).

**Controls:** à l'écran titre, ← → pour choisir la configuration d'équilibrage. à la souris : cliquer une attaque et un soutien, puis valider. Au clavier : 1 à 4 pour les attaques, E pour encourager, P pour mettre la pression, A pour abandonner. *(guessed)*

**Question:** Les duels sont-ils prenants, et le choix entre continuer et abandonner crée-t-il de la tension, sous deux niveaux de risque (règles légales et règles clandestines) ?

**Hooks:** chaque duel est un pari dont la mise est vivante. Un coq mort ne revient pas, et le loyer, lui, tombe quoi qu'il arrive.

**Intent:**

## Look and references
- Look : pixel art de bidonville futuriste. Des tôles rouillées, des néons fatigués qui grésillent, et une palette terne (rouille, gris béton, brun boueux) où seuls ressortent les coqs (couleurs vives et saturées) et le sang (le seul rouge pur de l'écran). Des accents de néon cyan et magenta sur les enseignes. L'arène est une fosse de terre entourée de grillage, avec le public en silhouettes sombres derrière. Signature : le néon de l'arène qui grésille et clignote quand un coup porte. Chaque coq a sa silhouette propre (crête, queue, posture), lisible à taille de jeu. Chaque personnage est dessiné, sans émoji ni simples cercles.
- References : Pokémon (le combat au tour par tour avec un menu d'attaques, mais avec une interface différente, pour ne pas en faire une pâle copie).
- View : 2D · Camera : un écran de combat fixe, ton coq de dos à gauche et l'adversaire de face à droite. Un écran d'entre-deux-duels montre le poulailler de fortune.

## First minute
Le joueur arrive dans le poulailler de fortune et voit ses trois coqs, chacun avec son nom, son portrait et ses stats. Une ligne en haut indique : « Loyer : 300 crédits, à payer avant le duel 6. Tu as 40. » Il choisit un coq, puis le circuit légal pour le duel 1, et entre dans l'arène. Les néons grésillent et la foule s'agite derrière le grillage. Il choisit une attaque, dont il voit la précision et la fourchette de dégâts, et un soutien (encourager ou mettre la pression), puis valide. Il voit le coup porter ou rater. Le sprite de l'adversaire change : il hésite. Il comprend qu'il peut lire le combat. Il gagne, encaisse ses gains, puis revient à l'écran d'entre-deux-duels. Là, il découvre que le duel clandestin rapporte trois fois plus, mais se joue à mort. C'est le premier moment où le principe du jeu se révèle.

## Challenge
La première vraie menace arrive au duel 3 ou 4 : un adversaire plus fort, qui blesse. Le coq blessé perd en stats tant qu'il n'est pas soigné. Soit on paie les soins, et cet argent manque pour le loyer, soit on le laisse sauter des duels. C'est là que le circuit clandestin devient tentant. Une défaite dans le circuit légal coûte de l'argent et des blessures. Une défaite dans le circuit clandestin coûte le coq, pour toujours. Le loyer tombe avant le duel 6, et les duels 7 et 8 opposent les adversaires les plus forts.

## Core loop
- Choisir un coq, un circuit (légal ou clandestin) et, au besoin, payer des soins.
- Combattre au tour par tour : à chaque tour, un ordre et un soutien, en lisant l'état de l'adversaire.
- Quand ça tourne mal : continuer ou abandonner dans le circuit légal, aller au bout dans le circuit clandestin.
- Encaisser les gains, ou enterrer son coq. Préparer le loyer, puis passer au duel suivant.

## Goal & fail state
- On gagne en payant le loyer avant le duel 6, puis en terminant le duel 8 avec au moins un coq vivant.
- On perd si on ne peut pas payer le loyer, ou si tous ses coqs sont morts.

## Features
- [x] Un duel au tour par tour : 4 attaques par coq, avec précision et fourchette de dégâts visibles, esquives et coups ratés.
- [x] Le soutien de l'entraîneur : encourager ou mettre la pression, en plus de l'ordre, avec un effet sur l'état d'esprit, qui modifie les stats de combat.
- [x] Une lecture partielle de l'adversaire : une jauge approximative, un sprite qui change selon son état (hésitant, blessé, apeuré) et des lignes de texte.
- [x] Deux règles de combat : légales (l'arbitre arrête le combat avant la mort, abandon permis, gains faibles) et clandestines (combat jusqu'à la mort, abandon refusé, gains bien plus élevés).
- [x] La mort définitive, et des blessures qui durent après le combat (malus sur les stats, soins payants ou duels sautés).
- [x] L'écran entre deux duels : choix du coq et du circuit, soins, argent, et loyer dû avant le duel 6 (version simplifiée).
- [x] 3 coqs joueurs aux profils distincts, et 8 adversaires de difficulté croissante, avec au moins 4 façons de combattre différentes.
- [x] Plusieurs configurations d'équilibrage à comparer (v0, A, B, C), choisies à l'écran titre, avec un historique des dernières parties.
- [x] Des informations sur l'adversaire avant le duel : style, points forts, et comparaison estimée avec chacun de tes coqs.

- [x] Le système de statistiques : PDV, énergie et 7 stats de combat (vitesse, défense, attaque, esquive, précision, critique, intelligence), 5 races aux profils distincts, redistribution de 50 points (21 au maximum au-dessus du plafond de la race).
- [x] Le bookmaker : une cote pour chacun de tes coqs face à l'adversaire, et en clandestin une prime qui dépend de la cote.
- [x] Le clandestin à crédit : dettes, intérêts et représailles ; payer le loyer d'avance ; passer un duel pour laisser ses coqs se reposer.
- [x] Le carnet : le profil d'une race n'est connu qu'après l'avoir rencontrée ; l'initiative et l'historique du duel.

- [x] Les contres par nature d'attaque : vive (arrêtée par la défense), précise (lue par l'intelligence), lourde (esquivée par un coq plus rapide) ; une IA qui abandonne une attaque après plusieurs échecs ; des indices dans le journal.
- [x] Le duel 8 : Kaiser, un Shamo rare en légal, le même avec bec et ergots d'acier en clandestin.

- [x] Des attaques communes à toutes les races et une attaque propre à chaque race (★) : Rafale de becs, Écrasement, Coup sournois, Riposte, Pas de danse, Assaut du combattant.
- [x] Contre l'agacement : une chance de toucher plancher, chaque échec d'affilée rapproche de l'ouverture, et les coqs s'épuisent après le tour 12 (chaque coup porte davantage).

## Your systems
- duel au tour par tour · in the slice
- soutien de l'entraîneur et état d'esprit · in the slice
- circuits légal et clandestin · in the slice
- mort définitive et blessures · in the slice
- argent et loyer · thin stand-in
- soins · in the slice
- statistiques et races · in the slice
- bookmaker et cotes · in the slice
- dettes et représailles · thin stand-in
- carnet des races · thin stand-in
- contres par nature d'attaque · in the slice
- élevage, logement, alimentation, maladies · later
- entraînement en duo · later
- armes et protections · later
- famille, dilemmes et relations · later
- horloge et calendrier · later
- réputation dans les deux milieux · later
- histoire, demi-frère, fins · later
- trois modes de sauvegarde · later

## Keep
- « je trouve ça vraiment chouette » ; « le concept a du potentiel et on peut vite se prendre au jeu » *(you said)*

## Avoid
- Une pâle copie de Pokémon : ni ses noms, ni ses créatures, ni son interface.
- La capture de créatures : les coqs sont élevés ou achetés, pas capturés.
- La défaite sans conséquence : un coq mort ne revient pas.
- Une « essence » récupérable sur un coq mort.

## Out of scope
- Élevage, reproduction, logement et alimentation : add it as a feature.
- Entraînement en duo : add it as a feature.
- Armes et protections : add it as a feature.
- Boutique et objets : change it after play.
- Famille, dilemmes, horloge, réputation : grow it.
- L'histoire (le demi-frère, le contact, les deux fins) : grow it.
- Les trois modes de sauvegarde : grow it.

## Build order
1. La tranche jouable : les 8 duels enchaînés, avec les deux règles de combat, l'écran entre deux duels, le loyer, la victoire et la défaite.
2. Ensuite : affiner la lecture de l'adversaire et l'équilibrage des gains après les premières parties.
