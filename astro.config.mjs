import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://aaronbatalion.com',
  output: 'static',
  adapter: cloudflare(),
  publicDir: './static',
});
