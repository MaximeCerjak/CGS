# Combats de coqs : décisions de conception

*Notes de discussion, ni brief ni GDD. Dernière mise à jour : 2026-11-22.*

## Idée de départ
- Futur dystopique : la plupart des animaux sauvages ont disparu, il reste surtout des animaux d'élevage.
- Le héros est l'aîné d'une fratrie (un petit frère, une petite sœur) dans un bidonville futuriste. Le père est mort ou disparu, on ne le connaît pas. La mère travaille dur et possède quelques poules.
- Déclencheur : une connaissance propose au héros de participer à des combats de coqs.
- Ce qui donne envie de jouer : gérer son écurie, personnaliser l'apparence et les stats des coqs, vivre les duels, suivre une histoire qui a du sens.

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

### Élevage
- Le poulailler produit des œufs. Une partie donne des mâles, une partie des femelles.
- Les mâles conservés peuvent devenir des coqs de combat : œuf, puis poussin, puis coq mature prêt à combattre, chaque étape prenant un certain nombre de jours de jeu.

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

### Monde et structure
- On se déplace au-delà du quartier : autres villes, un éleveur d'une espèce rare, la montagne pour attraper un coq sauvage introuvable ailleurs. Des personnages, des défis, des conseils, des embrouilles, des propositions.
- Les déplacements n'ont pas de durée propre : c'est le temps de jeu passé à se déplacer sur la carte. Les enfants grandissent pendant ce temps.
- Quand le héros est loin, on ne gère rien à la maison, mais le temps et les finances continuent (charges, nourriture du poulailler).
- Un déménagement (logement, maison, poulailler) est possible au cours de l'histoire.
- Des chapitres existent mais ne sont pas affichés. Comme dans Pokémon, des conditions débloquent de nouveaux accès et événements : conditions d'histoire, de niveau, d'argent, et de temps écoulé (âge des personnages).

## Questions ouvertes
- Des blessures définitives, avec un coq diminué pour le reste de sa vie ? Choix à réfléchir, pas anodin.
- La durée fixe d'un duel : 1 heure ou 2 heures de jeu ?
- Quand le délai d'un dilemme est dépassé : le personnage prend-il de lui-même un autre chemin ?
- Combien de trajectoires familiales seront réellement produites (risque sur la taille du projet).
- La place du père dans le récit.
- Les pistes pas encore discutées : alimentation, logement, soins, entraînement, spécialisation, armes, protections, améliorations scientifiques.

## Observations de Claude (non validées)
- Le service demandé par la sœur et l'abandon d'un duel ont la même structure : choisir ce qu'on sacrifie. Ce pourrait être un pilier du jeu.
- Le héros gère sa famille comme il gère son écurie. Le frère qui entraîne ses propres coqs reproduit son parcours.
- Une boussole possible pour l'humour : la famille reste sincère, c'est le monde autour d'elle qui est grotesque.
- Deux horloges : celle de la carrière (le joueur la fait avancer à son rythme) et celle de la vie (les dilemmes arrivent qu'on soit prêt ou non). La difficulté naît de l'écart entre les deux.
- Mettre la pression et utiliser une attaque peu fiable relèvent de la même logique : un risque choisi.
