# Jannat Club

A responsive Jannat Club guide based on the provided reference website, using the supplied black, gold, and purple brand imagery.

## Run locally

Use Node.js 20 or later. No dependency installation is required.

```sh
npm run dev
```

Open http://localhost:3000. Set `PORT` to use a different port.

## Build

```sh
npm run check
npm run build
```

The `dist` directory is a standalone static site. Serve it with any static web host. Source images remain in `public/images`.

## Deploy to Vercel

Import this repository with the project root set to the repository root. The
committed `vercel.json` selects the **Other** framework preset, runs
`npm run build`, and serves `dist` as the static output directory.

`server.mjs` is only the local development server. The deployed site does not
need a Node.js function or a running server. Serving `dist` provides
`index.html`, `styles.css`, `app.js`, and `/images/` at their expected URLs.

Vercel deploys new commits automatically when its Git integration is enabled.
After deployment, check `/`, `/styles.css`, `/app.js`, and an image under
`/images/`; each should return HTTP 200.

## Features

- Responsive desktop and mobile navigation
- Searchable contents and nine illustrated walkthroughs
- Game category filters
- Image viewer with keyboard navigation
- FAQ accordions, reading progress, and guide-link sharing
- Accessible modal previews for registration, login, download, and contact

All account, payment, and download actions are dummy previews, as requested. No credentials, banking information, or payments are collected. The contact and APK links can be connected later in `app.js`.

Google Fonts supplies DM Sans and Manrope when available; system fonts provide an offline fallback.
