import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  envDir: resolve(__dirname, '../../'),
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [],
    },
  },
})
