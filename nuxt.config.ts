// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/blog/',
    buildAssetsDir: 'assets'
  },

  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/stylelint-module', '@nuxtjs/i18n'],

  i18n: {
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'english',
        file: 'en.json'
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        name: 'chinese',
        file: 'zh.json'
      }
    ],
    vueI18n: './config/i18n'
  },

  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false
      }
    ]
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  css: ['@/assets/css/tailwind.css'],

  typescript: {
    typeCheck: true
  }
})
