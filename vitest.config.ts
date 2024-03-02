// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals:true,

    environment: 'jsdom',

    includeSource: ['src/**/*.{test,spec}.ts'],

    setupFiles: ['src/setupTest.ts'],

    coverage:{
      enabled:true,
      provider: 'v8', 
      exclude:['src/setupTest.ts'],
      reporter:[
        ['lcov', { 'projectRoot': './src' }],
        ['json', { 'file': 'coverage.json' }]
      ]
    }
  },
})
