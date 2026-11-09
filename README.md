# GREENPROOF — Landing page Next.js

Landing page vitrine en français pour GREENPROOF, construite en Next.js App Router + TypeScript + CSS natif.

## Démarrage

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Identité graphique

- **Police de titres : Manrope** (Google Fonts, poids 700 / 800).
- **Police de textes : DM Sans** (Google Fonts, poids 400 à 700).
- **Icônes : lucide-react**, tracé fin et homogène.
- **Symbole GREENPROOF :** illustration SVG originale à deux feuilles, définie dans `components/Logo.tsx` (proposition graphique, pas un logo officiel de l'ANAP).
- **Couleurs :** vert forêt `#063D2C`, vert profond `#032B20`, citron `#B9F246`, ivoire `#FAFAF5`.
- **Photographie :** image de la conversation, stockée en local dans `public/images/agent-terrain.webp`.

La police exacte de l'affiche générée n'est pas identifiable avec certitude : les images produites ne conservent pas de métadonnées de typographie. Manrope et DM Sans sont des choix **réels et reproductibles**, proches de la direction géométrique de la référence.

## Démonstration

Le tableau de bord est interactif : sélectionner un arbre, filtrer les statuts et rechercher un identifiant. Les données sont fictives et aucun backend n'est connecté. Le mode hors connexion est une capacité **prévue**, non implémentée dans ce site vitrine.

Les contenus concernant les références internationales renvoient vers les études de cas publiques. Le budget et le pilote sont des **objectifs de projet**, pas des performances garanties.

## Fichiers principaux

- `app/page.tsx` — composition de la landing page
- `app/globals.css` — système graphique et responsive
- `components/TreeMonitor.tsx` — démonstration interactive
- `components/Logo.tsx` — symbole et logotype typographique
- `app/layout.tsx` — métadonnées et layout

## Déploiement

Compatible avec Vercel ou toute infrastructure Node.js adaptée à Next.js 16. Node 20.9+ recommandé, Node 22 LTS préférable.
