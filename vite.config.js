import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/UGF2024/',  // Замените на новое имя репозитория
  build: {
    outDir: 'dist',
  },
});