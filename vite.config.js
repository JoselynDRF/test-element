import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import createVuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    createVuePlugin({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2,
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: '@vue/compat',
    }
  }
})
