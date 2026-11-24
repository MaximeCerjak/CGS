# Game Brief: Ergots — MVP (prologue)

## In your words
> Dans un futur dystopique, la plupart des animaux sauvages ont disparu. Il reste surtout des animaux d'élevage, dont les poules et les coqs. On incarne l'aîné d'une fratrie dans une ville qui ressemble à un bidonville du futur. [...] Sa mère possède quelques poules. Une connaissance lui propose de participer à des combats de coqs. C'est le déclencheur de l'aventure.
>
> Ce qui me donne envie d'y jouer, c'est de gérer mon écurie, de personnaliser l'apparence et les stats de mes coqs, de vivre les duels et de suivre une histoire qui a du sens, m'embarque et me challenge.
>
> Les éléments devant être présents : élevage, équipement, une partie de l'histoire, carnet, réputation, finances.
>
> « Le MVP peut se contenter de présenter les mécaniques principales du jeu et d'aborder les différents système sans rentrer en profondeur dans la gestion de son écurie. Il faut que le MVP permette de comprendre l'intérêt du jeu, ses objectifs, et son univers. [...] il faut qu'on sache qu'il y a des combats de coqs légaux, des combats clandestins, qu'on vit dans un monde d'inégalités, qu'il y a des organisations de malfaiteurs et qu'on peut rester sage ou tremper dans des mauvaises affaires. »
>
> « au début on ne paye pas le loyer nous même, on enchaine juste les petits boulots, les paris, les jeux d'argent et on essaie de participer aux finances de la famille mais notre mère ne peut pas réellement compter sur nous. »
>
> « l'aspect narratif du MVP doit présenter la situation familiale et les différents membres de la famille, la situation du joueur, la ville et les habitants, l'initiateur au combat de coq et on doit ensuite être mené vers un premier tournoi et ça s'arrête avant le tournoi. Il faudra donc aussi pouvoir éventuellement découvrir les combats clandestins et essayer et peut être pouvoir remplir une ou deux missions clandestines. »
>
> « on peut juste nourrir son poulailler et avoir dès le début un ou deux coqs avec des stats bateaux prêt à se battre. »
>
> Accès au tournoi : « Une mise à réunir et avoir déjà remporté 3 combats sur le circuit légal. [...] dans le prologue la mère demande à son fils de faire un effort par ce qu'elle n'aura pas les moyens de régler le loyer ce mois ci et qu'il faut au moins qu'il participe. »
>
> Paris et petits boulots : « Oui c'est super et pour les petits boulot c'est très bien, du narratif avec un choix et on dépense du temps. »
>
> Missions : « Combat truqué et livraison [...] la livraison on peut la réaliser vraiment, comme dans pokemon lorsqu'on doit récupérer un colis pour le prof chen au pokemarket au début. »
>
> Moteur : « il faut commencer à mettre en place les bases solides du jeu et partir sur un moteur plutot que sur navigateur. » → Godot 4.7, GDScript.
>
> Toutes les décisions détaillées : `design/concept-decisions.md` (notamment « MVP : le prologue »). Le prototype validé : branche `prototype/ergots`, dossier `prototypes/ergots/`.

**Pitch:** Dans un bidonville du futur, un jeune parieur se lance dans les combats de coqs pour gagner sa place au premier tournoi, entre arènes légales, sous-sol clandestin et une famille qui compte sur lui.

**Genre:** combats de coqs au tour par tour, avec gestion d'écurie légère et récit, en vue de dessus.

**Controls:** clavier et souris ; manette prise en charge partiellement. *(inferred (strong))*

**Question:** Un testeur qui joue seul comprend-il l'univers, les deux circuits et le choix moral, et a-t-il envie de connaître la suite ?

**Hooks:** chaque duel est un pari dont la mise est vivante ; le bookmaker et ses cotes ; les contres par nature d'attaque ; chaque crédit à répartir entre aider sa famille et poursuivre son ambition.

**Intent:** payoff builds (le prologue mène au tournoi et s'arrête juste avant).

## Look and references
- Look : pixel art de bidonville futuriste, comme le prototype : tôles rouillées, néons fatigués (cyan pour le légal, magenta pour le clandestin), palette terne où seuls ressortent les coqs et le sang. *(provisional : la direction artistique est en cours de test par l'auteur et sera choisie pour le MVP)*
- References : le prototype `prototypes/ergots/` (combat et interface) ; Pokémon pour la structure d'un début d'aventure en ville (la course du colis), sans en copier les noms, créatures ni interface.
- View : 2D · Camera : vue de dessus pour la ville ; écran fixe pour les duels.

## First minute
Le héros se réveille dans l'appartement familial. Il croise sa mère, épuisée, qui lui rappelle qu'il n'aide pas beaucoup, puis son petit frère et sa petite sœur. Il sort et découvre le quartier en se déplaçant, parle à quelques habitants, et passe voir le poulailler de sa mère. Le demi-frère (pas encore révélé comme tel) l'aborde et lui parle des combats de coqs. *(guessed : détail des scènes à écrire)*

## Challenge
Réunir la mise d'inscription au tournoi et remporter 3 combats légaux, alors que la mère demande une participation au loyer avant une échéance. Le clandestin rapporte plus vite mais tue les coqs et, à force, ferme des portes côté légal. Une défaite en clandestin coûte le coq pour toujours.

## Core loop
- Se déplacer dans la ville et choisir quoi faire de sa journée.
- Gagner de l'argent : combats légaux ou clandestins, paris sur les combats des autres, petits boulots, missions clandestines.
- Répartir l'argent : participation au loyer, nourriture et soins du poulailler, équipement, mise du tournoi.
- Recommencer jusqu'à pouvoir s'inscrire au tournoi.

## Goal & fail state
- But : s'inscrire au premier tournoi (la mise réunie et 3 victoires légales). Le prologue s'arrête là.
- Échec : tous les coqs sont morts, ou la dette clandestine dépasse la limite.

## Features
- [ ] Le combat complet du prototype : stats et races, contres par nature d'attaque, attaques de race, soutien, abandon, blessures, mort définitive en clandestin, bookmaker.
- [ ] La ville explorable en vue de dessus, avec ses habitants et des dialogues.
- [ ] Le prologue : la famille, la situation du héros, l'initiateur aux combats, et l'arrivée au tournoi.
- [ ] Le poulailler simplifié (nourrir, soigner) et la boutique d'équipement.
- [ ] L'argent : la demande de la mère, les petits boulots, les paris sur les combats des autres, les dettes.
- [ ] Le clandestin et la réputation : un combat truqué, une livraison jouable, des portes qui s'ouvrent et se ferment.
- [ ] Le carnet, la sauvegarde simple et un début guidé.

## Your systems
- combat · in the slice
- bookmaker et cotes · in the slice
- ville et dialogues · in the slice
- récit du prologue · in the slice
- finances (petits boulots, demande de la mère, dettes) · in the slice
- paris sur les combats · in the slice
- missions clandestines (combat truqué, livraison) · in the slice
- réputation dans les deux milieux · thin stand-in
- élevage (nourrir le poulailler) · thin stand-in
- équipement et boutique · thin stand-in
- carnet · thin stand-in
- calendrier (jours qui passent) · thin stand-in
- sauvegarde · thin stand-in
- début guidé · thin stand-in
- croissance des poussins et entraînement · later
- dilemmes familiaux à délai · later
- trahison du demi-frère et fins · later

## Keep
- Le combat du prototype : « je trouve ça vraiment chouette » ; « on peut vite se prendre au jeu » ; « sincèrement c'est beaucoup mieux » (après les contres et les attaques de race) *(you said)*
- Le bookmaker : « ça ajoute quelque chose qui se marie très bien avec le reste du jeu et qui au final semble être nécessaire pour le fond et la forme » *(you said)*

## Avoid
- Une pâle copie de Pokémon : ni ses noms, ni ses créatures, ni son interface.
- La capture de créatures : les coqs sont élevés ou achetés.
- La défaite sans conséquence : un coq mort ne revient pas.
- Rater des dizaines d'attaques d'affilée.
- Un jeu qui prend parti ou juge le joueur.

## Out of scope
- Croissance des poussins, initiation et entraînement en duo : grow it.
- Dilemmes familiaux à délai (au-delà de la demande de la mère), horloge complète : grow it.
- Trahison et révélation du demi-frère, fins : grow it.
- Prothèses, blessures définitives, coqs cyborgs : grow it.
- Trois modes de sauvegarde : grow it.

## Build order
1. Le combat, porté du prototype vers Godot : il est validé et sert de base.
2. La boucle du poulailler et de l'argent (calendrier, nourriture, boutique, demande de la mère).
3. La ville explorable et les dialogues.
4. Le récit du prologue.
5. Les paris, les missions clandestines et la réputation.
6. Le carnet, la sauvegarde et le début guidé.
