import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // Add React plugin to support JSX/TSX
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api/web3forms': {
        target: 'https://api.web3forms.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/web3forms/, ''),
      },
    },
  },
});