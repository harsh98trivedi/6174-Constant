import { defineConfig } from 'vite'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/6174-Constant/',
  plugins: [svelte({
    preprocess: vitePreprocess()
  })],
  server: {
    host: true,
    port: 5173,
  }
})
