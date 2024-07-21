import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';


export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://github.com/Alfmobr/PowerBuidilng.git',
})