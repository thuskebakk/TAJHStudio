# TAJH Studio

Static site built with Vite.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The built site is emitted to `dist/`. Vite fingerprints built CSS and assets so filenames change when their contents change.

## Cloudflare Pages

Use these build settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
