<p align="center">
  <img src="public/assets/lockup.svg" alt="DofusIn" width="220" />
</p>

<p align="center">
  Site vitrine et téléchargement de DofusIn.
  <br />
  <a href="https://dofusin.fr">dofusin.fr</a>
</p>

---

Ce repo contient le site public de [DofusIn](https://dofusin.fr), l'outil
communautaire d'entraide entre joueurs Dofus (téléchargement de
l'application, tuto d'installation en images, FAQ), ainsi qu'un backoffice
d'administration minimal.

- **Landing page** — présentation, lien de téléchargement de l'installeur
  Windows, tuto d'installation étape par étape.
- **Backoffice admin** — vue sur les personnages/comptes, protégée par Basic
  Auth, qui appelle l'API DofusIn en HTTP côté serveur (aucun accès direct à
  la base de données depuis ce repo).

## Stack technique

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (style `base-rhea`, sur [Base UI](https://base-ui.com/)) — même système de design que l'application desktop

## Développement

```bash
npm install
npm run dev
```

Voir `.env.example` pour les variables requises (URL de l'API DofusIn,
identifiants du backoffice, lien de téléchargement de l'installeur).

```bash
npm run typecheck
npm run lint
npm run build
```

## Projets liés

- [dofusin](https://github.com/lorenzo-237/dofusin) — application desktop
  (Tauri) que ce site fait télécharger

## Licence

[GPL-3.0](./LICENSE)
