import { defineConfig } from 'vite';

export default defineConfig({
    root: './src',
    publicDir: '../public',
    build: {
      outDir: '../docs',
      emptyOutDir: true
    },
    base:"/10nalytics_Hackathon/"
  });
