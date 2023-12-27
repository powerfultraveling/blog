import path from 'path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    // could access the methods of vitest without import
    globals: true,
    environment: 'happy-dom'
  },
  // enable Test file to import module by using absolute path
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '.')
    }
  }
})
