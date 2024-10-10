import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Allows connections from outside localhost
    port: 4173 // This should match the port Render uses
  }
});
