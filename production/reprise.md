# Reprise du projet Ergots

*À lire en premier au début d'une nouvelle discussion. Dernière mise à jour : 2026-11-24.*

**Pour reprendre, taper :** « Lis `production/reprise.md` et reprends le projet Ergots. »

## Le jeu en une phrase
Dans un bidonville du futur, l'aîné d'une famille pauvre se lance dans les combats de coqs (légaux ou clandestins) pour faire vivre les siens. Gestion d'écurie, duels au tour par tour où la mise est vivante, et une histoire où l'on choisit de rester honnête ou de tremper dans les magouilles.

## Où en est le projet
1. **Concept** : discuté en profondeur et consigné. Ton, histoire, personnages, systèmes, phases.
2. **Prototype de combat** : construit dans le navigateur, testé et validé par l'auteur (« sincèrement c'est beaucoup mieux »). Cinq itérations : stats et races, bookmaker, dettes, contres par nature d'attaque, attaques de race, règles contre la frustration.
3. **Périmètre du MVP** : défini. C'est un prologue qui s'arrête juste avant le premier tournoi.
4. **Moteur** : Godot 4.7, GDScript, 2D, PC + navigateur. Configuré dans le projet ; l'auteur a installé Godot sur son PC Windows.
5. **Brief du MVP** : écrit (`design/game-brief.md`). Prochaine étape : le compléter, puis construire.

## Où se trouve chaque chose
| Quoi | Où |
|---|---|
| Toutes les décisions de conception | `design/concept-decisions.md` (branche `main`) |
| Brief du MVP | `design/game-brief.md` (branche `main`) |
| Configuration du moteur | `project.yaml`, `project.godot`, `CLAUDE.md`, `.claude/docs/technical-preferences.md` |
| Prototype jouable | branche `prototype/ergots`, dossier `prototypes/ergots/` (ouvrir `index.html` dans un navigateur) |
| Brief du prototype | `prototypes/ergots/brief.md` (branche `prototype/ergots`) |
| Valeurs d'équilibrage testées | `prototypes/ergots/config.js` (branche `prototype/ergots`) |

**Branches** : `main` (projet complet), `prototype/ergots` (prototype, à ne pas fusionner dans `main`), une branche dédiée à créer pour le MVP. Décision de l'auteur : prototype et MVP chacun sur sa branche, le projet complet sur la branche principale et la branche de recette.

## Comment travailler avec l'auteur
- Échange critique : donner un avis argumenté, poser une ou deux questions ouvertes, et demander ce que l'auteur a déjà en tête avant de compléter un élément flou.
- Proposer des pistes en expliquant ce que chacune change pour le joueur, et laisser l'auteur décider.
- Demander avant d'écrire un fichier, montrer un brouillon, et ne commiter que sur instruction (la règle du studio, dans `CLAUDE.md`).
- Consigner les décisions dans `design/concept-decisions.md` au fil de l'eau, avec les mots de l'auteur.
- Répondre en français.

## Prochaines étapes, dans l'ordre
1. **Renseigner l'installation de Godot** : demander à l'auteur la version exacte et le chemin de l'exécutable, puis mettre à jour `commands.*` et `engine.path` dans `project.yaml` (via `/project-settings`) et la ligne « Installed at pin time » de `docs/engine-reference/godot/VERSION.md`. Vérifier que `project.godot` s'ouvre.
2. **Compléter le brief du MVP** : la direction artistique (l'auteur fait des tests), la première minute du prologue, les montants (mise du tournoi, participation au loyer, échéances).
3. **`/test-setup`** : installer gdUnit4 et la structure de tests.
4. **Créer la branche du MVP.**
5. **Construire le MVP** dans l'ordre du brief : d'abord le combat porté du prototype vers Godot (réécrit proprement, pas copié), puis le poulailler et l'argent, la ville, le prologue, les paris et missions, enfin carnet, sauvegarde et début guidé. Le studio propose `/create-stories` puis `/dev-story` pour découper et construire.

## Questions encore ouvertes (extrait)
- Équilibre des races : dans le prototype, le Brahma est trop fort et le Sebright trop faible. L'auteur accepte des races inégales si les contres, la redistribution, l'équipement et d'autres attaques de race permettent à un coq faible de devenir tenace.
- Le plancher de chance de toucher (35 %) réduit la frustration mais affaiblit les races qui esquivent : comment redonner de la valeur à l'esquive ?
- Ville explorable en vue de dessus : à confirmer dans le brief.
- Redistribution des stats : 50 ou 75 points, limite à la baisse, répartition définitive ou non.
- Liste complète : section « Questions ouvertes » de `design/concept-decisions.md`.
