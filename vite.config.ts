import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages - change 'everest-app' to your repository name
  base: '/everest-app/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
