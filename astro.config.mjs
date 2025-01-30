// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
// @ts-ignore
import htmx from 'astro-htmx';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), htmx()],
  vite: {
    resolve: {
      alias: {
        '@images': '/src/assets/images'
      }
    }
  },
  output: 'server',
  adapter: vercel(),
});