import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'notify': ['react-simple-notify'],
        },
      },
    },
    // Enable minification with esbuild (faster than terser)
    minify: 'esbuild',
    // Optimize chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dev server
  server: {
    warmup: {
      clientFiles: ['./src/components/Hero/**/*.tsx', './src/App.tsx'],
    },
  },
})
