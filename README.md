# Nuxt4-Boilerplate
![CI](https://github.com/MaximeBoulenger/Nuxt4-Boilerplate/actions/workflows/ci.yml/badge.svg)

Ce projet est un boilerplate Nuxt 4 moderne conçu pour démarrer rapidement avec une excellente developer experience, une qualité de code stricte et une CI fiable. Il combine un framework full-stack performant, un outillage de lint/format automatisé, des tests intégrés et des garde-fous (Husky + CI) afin d’éviter toute régression dès les premiers commits.

### Technologies utilisées

Nuxt 4 : framework Vue full-stack (SSR, routing, build, auto-imports).

Vue 3 : base frontend avec la Composition API.

TypeScript : typage statique pour un code plus sûr et maintenable.

SCSS (Sass) : préprocesseur CSS pour des styles plus structurés et modulaires.

Bun : gestionnaire de paquets et runner rapide pour le développement.

ESLint : détection des erreurs et mauvaises pratiques.

Prettier : formatage automatique et cohérent du code.

Vitest : framework de tests unitaires rapide.

@vue/test-utils : utilitaires pour tester les composants Vue.

happy-dom : environnement DOM léger pour les tests.

Husky : hooks Git bloquant les commits si la qualité n’est pas respectée.

GitHub Actions : CI exécutant lint, format, typecheck, tests et build.

<br>

### Commandes principales

bun install : installe toutes les dépendances du projet.

bun dev : lance le serveur de développement Nuxt.

bun run build : build l’application pour la production.

#### Qualité de code

bun run lint : analyse le code avec ESLint.

bun run lint:fix : corrige automatiquement les erreurs ESLint.

bun run format : formate tout le projet avec Prettier.

bun run format:check : vérifie le formatage sans modifier les fichiers.

#### TypeScript

bun run typecheck : lance le typecheck TypeScript.

#### Tests

bun test : exécute les tests unitaires avec Vitest.

bun run test:ui : lance l’interface graphique de Vitest.

#### Git / Workflow

git commit : déclenche Husky (lint, format, typecheck, tests avant commit).

git push : déclenche la CI GitHub Actions.
