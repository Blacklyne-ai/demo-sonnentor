// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────
// Gesundheitspraxis SonnenTor — STATIC build. No adapter, no SSR.
// Output: /dist with plain HTML files. Deploy: Cloudflare PAGES
//   Framework preset: Astro · Build: npm run build · Output: dist
// Tailwind v3.4 via @astrojs/tailwind (v4 breaks Cloudflare Pages).
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://demo-sonnentor.pages.dev',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) =>
        !/\/(impressum|datenschutz|agb|widerruf|haftungsausschluss)/.test(page),
    }),
  ],
  // /seite.html statt /seite/index.html → Cloudflare serviert No-Trailing-Slash
  // Links direkt mit 200, ohne 308-Redirect-Hop.
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
});
