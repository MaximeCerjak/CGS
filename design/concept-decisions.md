# Combats de coqs : décisions de conception

*Notes de discussion, ni brief ni GDD. Dernière mise à jour : 2026-11-22.*

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
  - les blessures définitives et les prothèses.

## Prototype
- **Question à laquelle il répond** : les duels sont-ils prenants, et le choix entre continuer et abandonner crée-t-il de la tension ?
- **Contenu** :
  - 2 ou 3 coqs avec des stats fixes, sans élevage ni entraînement ;
  - une suite de 5 à 8 duels de difficulté croissante ;
  - un seul compteur d'argent et une seule échéance (par exemple un loyer à payer avant le duel 6) ;
  - la mort définitive et les blessures qui durent.
- **Hors prototype** : horloge, famille, voyages, élevage, entraînement, équipement.
- Les systèmes dont dépend le combat (argent, stats) sont simulés au strict minimum.
- Une fois le prototype validé, on développe un MVP plus complet, à faire tester par des connaissances. Il devra être compréhensible sans explication (interface claire, tutoriel minimal).

## Organisation des branches
- Le prototype est développé sur une branche dédiée.
- Le MVP est développé sur une branche dédiée.
- Le projet complet vit sur la branche de recette et sur la branche principale.

## Décisions

### Ton et position du jeu
- Le jeu ne prend pas parti sur les combats de coqs (comparables au MMA ou aux gladiateurs). Certains personnages sont pour, d'autres contre.
- Une histoire sérieuse (pauvreté, inégalités) avec un côté déjanté et de l'humour noir. Le restaurant de poulet frit est volontairement ironique.
- Les combats sont légaux, mais le milieu est fréquenté par des malfrats.

### Duel
- Au tour par tour, comme Pokémon (menus, sans placement). L'interface sera à retravailler pour ne pas faire une pâle copie.
- La préparation compte beaucoup, et le joueur donne des ordres pendant le combat.
- Première version envisagée en 2D vue de dessus. Le contrôle direct en 3D a été évoqué comme autre possibilité.
- Le hasard fait partie du combat : esquives, attaques ratées, dégâts compris dans une fourchette. La précision de chaque attaque est connue : utiliser une attaque peu fiable dans une situation critique est un choix du joueur, qui en assume le résultat.

### Stats et lecture du combat
- Stats d'un coq en duel : énergie, santé, blessures, état d'esprit.
- La santé est la jauge de vie. Les blessures dégradent les stats de combat (vitesse, hargne, défense, précision, attaque, etc.).
- L'état d'esprit agit sur les stats de combativité (défense, vitesse, etc.).
- Le joueur voit son propre coq précisément. Il voit les mêmes stats chez l'adversaire, mais avec moins de précision : une jauge plutôt que des chiffres, un coq qui devient hésitant ou a peur, qui est blessé, dont les attaques perdent en efficacité.
- Les signes passent par un changement du sprite d'attente (nouvel état) ou par des informations écrites, pas forcément par des animations.
- La lecture du combat s'améliore avec l'expérience d'entraîneur.

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
- La place du père dans le récit.
- Le scénario sans embranchements de la première phase.

## Observations de Claude (non validées)
- Le service demandé par la sœur et l'abandon d'un duel ont la même structure : choisir ce qu'on sacrifie. Ce pourrait être un pilier du jeu.
- Le héros gère sa famille comme il gère son écurie. Le frère qui entraîne ses propres coqs reproduit son parcours.
- Une boussole possible pour l'humour : la famille reste sincère, c'est le monde autour d'elle qui est grotesque.
- Deux horloges : celle de la carrière (le joueur la fait avancer à son rythme) et celle de la vie (les dilemmes arrivent qu'on soit prêt ou non). La difficulté naît de l'écart entre les deux.
- Mettre la pression et utiliser une attaque peu fiable relèvent de la même logique : un risque choisi.
- Le confort (à la maison) et le soutien (dans l'arène) passent tous les deux par l'état d'esprit.
- Les maladies dues à un poulailler surpeuplé donnent un prix naturel à une grande écurie.
- Les prothèses pourraient devenir les améliorations scientifiques : elles naîtraient d'une blessure et d'un dilemme.
- Le nombre de places d'entraînement pourrait dépendre de la qualité du bâtiment.
- Si les stats se transmettent un jour, un coq puissant qui meurt laisse quelque chose à travers ses descendants.
- Coût de production : armes, protections, prothèses et espèces visibles sur le sprite multiplient les combinaisons à dessiner.
- Même la version sans embranchements doit contenir des dilemmes avec délai, et la structure technique doit prévoir dès le départ le journal, le score relationnel et la mémoire des choix.
