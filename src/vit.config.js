// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/IMDR/', // Update to match your GitHub repository name
  build: {
    outDir: 'dist' // Ensure this matches your deploy script's output directory
  },
  // Optional: Add any additional plugins or settings here
});
