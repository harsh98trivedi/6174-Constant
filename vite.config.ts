import { defineConfig } from 'vite'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  // This is the CRITICAL part for GitHub Pages. 
  // It matches your repository name: https://github.com/harsh98trivedi/6174-Constant
  base: '/6174-Constant/',
  
  plugins: [svelte({
    preprocess: vitePreprocess()
  })],
  
  server: {
    host: true,
    port: 5173,
  },
  
  build: {
    // Standard output directory
    outDir: 'dist',
    emptyOutDir: true,
  }
})
