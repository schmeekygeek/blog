import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import addClasses from 'rehype-add-classes';

// https://astro.build/config
export default defineConfig({
  site: 'https://schmeeky.pages.dev',
  integrations: [sitemap(), react(), image(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-rosePine-text text-4xl font-satoshi font-semibold',
          h2: 'text-2xl font-satoshi font-semibold',
          h3: 'text-xl font-satoshi font-semibold',
          h4: 'text-lg font-satoshi font-semibold',
          h5: 'font-satoshi font-semibold',
          h6: 'font-satoshi font-semibold',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6',
          a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500'
        }
      ]
    ]
  }
});
