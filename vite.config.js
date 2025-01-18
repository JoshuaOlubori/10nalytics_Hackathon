import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Ensure this points to the directory with index.html
  build: {
    outDir: '../docs', // Output directory
  },
});
