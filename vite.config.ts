import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [
    svgLoader({ defaultImport: 'url' }),
    { ...eslint({ ignorePath: '.prettierignore' }), apply: 'serve' },
    { ...stylelint({ ignorePath: '.prettierignore' }), apply: 'serve' }
  ]
})
