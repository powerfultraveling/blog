import type { Ref } from 'vue'
import type { Locale, LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
import i18nConfig from '~/config/i18n'

declare module '@nuxtjs/i18n/dist/runtime/types' {
  interface NuxtI18nRoutingCustomProperties  {
    getLocale(): string
    // FIXME: wrong type from nuxt-i18n
    locale: Ref<Locale>
    locales: Ref<LocaleObject[]>
  }
}

export default defineNuxtPlugin(() => {
  const { $i18n } = useNuxtApp()
  const { defaultLocale } = i18nConfig

  function getLocale(): string {
    return (
      $i18n.getLocaleCookie() ||
      $i18n.getBrowserLocale() ||
      $i18n.locale.value ||
      defaultLocale.code
    )
  }

  if (!$i18n.getLocale) {
    $i18n.getLocale = getLocale
  }

  // FIXME: should not implement by us, but nuxt-i18n's redirect not working
})
