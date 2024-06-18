import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/3d-slider/',  // Замените имя_репозитория на имя вашего репозитория
  build: {
    outDir: 'dist',
  },
});