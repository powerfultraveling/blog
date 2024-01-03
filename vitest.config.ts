import path from 'path'
import { defineVitestConfig } from '@nuxt/test-utils/config'
// import Vue from '@vitejs/plugin-vue'

export default defineVitestConfig({
  // plugins: [Vue()],
  test: {
    // could access the methods of vitest without import
    globals: true,
    environment: 'nuxt'
  },
  // enable Test file to import module by using absolute path
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '.')
    }
  }
})
