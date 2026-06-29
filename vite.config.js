import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const rootDirectory = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  // Use relative base path so assets load correctly regardless of subdirectory
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDirectory, 'index.html'),
        privacy: resolve(rootDirectory, 'privacy.html'),
      },
    },
  },
});
