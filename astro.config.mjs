// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sanityIntegration from '@sanity/astro';
import vercel from '@astrojs/vercel';

const projectId =
    process.env.SANITY_STUDIO_PROJECT_ID ||
    process.env.PUBLIC_SANITY_PROJECT_ID ||
    'vz99cd3t';

const dataset =
    process.env.SANITY_STUDIO_DATASET ||
    process.env.PUBLIC_SANITY_DATASET ||
    'production';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel(),
    integrations: [react(),  sanityIntegration({
            projectId,
            dataset,
      useCdn: false,
      studioBasePath: '/studio'
    })],

    server: {
        port: 3000,
    },

    devToolbar: {
        enabled: false,
    },

    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': new URL('./src', import.meta.url).pathname,
            },
        },
    },
});