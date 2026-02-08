import i18nConfig from './config/i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '蔡恂藝部落格',
      meta: [{ name: 'description', content: '蔡恂藝的個人網站' }]
    }
  },
  nitro: {
    preset: 'cloudflare'
  },
  // app: {
  //   baseURL: '/',
  //   buildAssetsDir: 'assets'
  // },

  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  },
  devtools: { enabled: true },
  stylelint: {
    cache: false
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/stylelint-module', '@nuxtjs/i18n', '@nuxtjs/supabase'],

  supabase: {
    redirect: false
  },

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

  css: ['@/assets/css/main.css'],

  typescript: {
    typeCheck: true
  }
})
