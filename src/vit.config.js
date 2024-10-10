import { defineConfig } from 'vite';

export default defineConfig({
  base: "/123/", // Adjust this to your GitHub repository name
  // Other configurations...
  build: {
    outDir: 'dist', // Specify the output directory if needed
  },
  // Any additional configurations can be added here
});
