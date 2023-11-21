import i18nConfig from './config/i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/blog/',
    buildAssetsDir: 'assets'
  },

  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/stylelint-module', '@nuxtjs/i18n', '@pinia/nuxt'],

  i18n: {
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: i18nConfig.defaultLocale.code,
    routesNameSeparator: i18nConfig.routesNameSeparator,
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'En',
        file: 'en.json'
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        name: '中',
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
