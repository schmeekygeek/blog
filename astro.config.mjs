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
    extendDefaultPlugins: true
//    rehypePlugins: [
//      [
//        addClasses,
//        {
//          h1: 'mb-4 underline underline-offset-2 dark:text-rosePine-text text-rosePineDawn-text decoration-rosePine-gold text-4xl',
//          h2: 'mb-4 underline underline-offset-2 dark:text-rosePine-text text-rosePineDawn-text decoration-rosePine-gold text-2xl',
//          h3: 'mb-4 underline underline-offset-2 dark:text-rosePine-text text-rosePineDawn-text decoration-rosePine-gold text-xl',
//          h4: 'mb-4 underline underline-offset-2 dark:text-rosePine-text text-rosePineDawn-text decoration-rosePine-gold text-lg',
//          h5: 'mb-4 underline underline-offset-2 dark:text-rosePine-text text-rosePineDawn-text decoration-rosePine-gold text-lg',
//          h6: 'font-satoshi font-semibold',
//          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
//          p: 'mb-6',
//          a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500',
//          ul: 'list-disc',
//          li: 'list-disc'
//        }
//      ]
//    ]
  }
});
