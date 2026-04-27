import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Chandu-kadiri.github.io',
  base: '/Freelance',
  integrations: [tailwind()],
  output: 'static',
});
