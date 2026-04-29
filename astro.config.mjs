import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// When running in GitHub Actions CI, apply the /Freelance base path for GitHub Pages.
// Locally, no base is needed — pages are served at localhost:4321/
const isProd = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://Chandu-kadiri.github.io',
  base: isProd ? '/Freelance' : '/',
  integrations: [tailwind()],
  output: 'static',
});
