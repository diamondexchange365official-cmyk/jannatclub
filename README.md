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

## Features

- Responsive desktop and mobile navigation
- Searchable contents and nine illustrated walkthroughs
- Game category filters
- Image viewer with keyboard navigation
- FAQ accordions, reading progress, and guide-link sharing
- Accessible modal previews for registration, login, download, and contact

All account, payment, and download actions are dummy previews, as requested. No credentials, banking information, or payments are collected. The contact and APK links can be connected later in `app.js`.

Google Fonts supplies DM Sans and Manrope when available; system fonts provide an offline fallback.
