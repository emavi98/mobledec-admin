import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],

  resolve: {
    alias: {
      // Alias general para la carpeta src
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      lib: path.resolve(__dirname, 'src/lib'),
      services: path.resolve(__dirname, 'src/services'),
      providers: path.resolve(__dirname, 'src/providers'),
      store: path.resolve(__dirname, 'src/store'),
      shadcn: path.resolve(__dirname, 'src/components/tailwind/shadcn'),
      // Alias específico para la carpeta shadcn-ui

      //'shadcn-ui': 'src/components/tailwind-css/shadcn-ui',
    },
  },
});
