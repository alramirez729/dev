# developer portfolio

Personal portfolio/log — React + Vite + TypeScript, deployed to Vercel.

## Prerequisites

- **Node.js** ≥ 18 — [nodejs.org](https://nodejs.org)
- **npm** ≥ 9 (bundled with Node)

Check your versions:

```bash
node -v
npm -v
```

## Getting started

```bash
# 1. Install dependencies (first time only, or after pulling new changes)
npm install

# 2. Start the local dev server
npm run dev
```

The dev server runs at **http://localhost:5173** and hot-reloads on save.

## Other commands

| Command | What it does |
|---|---|
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  components/     # Hero, Projects, Links, MiniGame — one file + CSS Module each
  data/
    projects.ts   # Add/edit projects here — no CMS, just a plain array
  App.tsx
  index.css       # Global tokens (colors, font, spacing)
index.html
vite.config.ts
```

## Adding a project

Edit `src/data/projects.ts` and add an entry to the array:

```ts
{
  name: 'My Project',
  description: 'One line — what it does, not how.',
  tech: ['React', 'TypeScript'],
  url: 'https://your-deployed-url.com',
  repo: 'https://github.com/alramirez729/my-project', // optional
}
```

## Deployment

Vercel — connected to this repo. Push to `main` and it auto-deploys.

```bash
git push origin main
```

To deploy a preview build manually: `npx vercel` (requires Vercel CLI + login).
