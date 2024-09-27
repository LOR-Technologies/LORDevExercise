import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/your-app/' : '/',
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/Api': 'http://localhost:3000/users',
    },
  },
});
