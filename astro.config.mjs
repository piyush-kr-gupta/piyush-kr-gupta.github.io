// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Disable Astro's dev toolbar
  devToolbar: {
    enabled: false,
  },
  // Static site output for GitHub Pages, Vercel, Cloudflare Pages
  output: 'static',
  // Base path can be configured via environment variable ASTRO_BASE_URL for GitHub Pages subpath (e.g. /repo-name/)
  base: process.env.ASTRO_BASE_URL || '/',
  site: process.env.ASTRO_SITE_URL || 'https://piyushkr.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
