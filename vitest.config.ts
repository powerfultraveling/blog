import path from 'path'
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    // EXPLAIN: could access the methods of vitest without import
    globals: true,
    // EXPLAIN: Using Nuxt could make vitest recognize composables from Nuxt
    environment: 'nuxt'
  },
  // enable Test file to import module by using absolute path
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '.')
    }
  }
})
