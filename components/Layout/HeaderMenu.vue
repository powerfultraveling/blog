<template>
  <div class="bg-primary w-full justify-center transitable">
    <div class="py-10 space-y-4 flex flex-col items-center">
      <PLink v-for="({ label, to }, index) in links" :key="index" :to="to" class="menu-item">
        <div class="dot">
          <div class="rounded-full bg-black w-2 h-2" />
        </div>
        <div>
          {{ label }}
        </div>
      </PLink>
      <div class="flex items-center space-x-4 pl-5 font-serif text-gray-dark">
        <div
          v-for="{ code, name } in locales"
          :key="code"
          class="hoverable"
          :class="{ 'text-black': code === locale }"
          @click="setLocaleAndReload(code)"
        >
          <div>
            {{ name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $i18n } = useNuxtApp()
const { t } = useI18n()

const links = [
  {
    label: t('關於我'),
    to: '/about'
  }
  // TODO: 之後需加上
  // {
  //   label: '作品集',
  //   to: '/'
  // }
]

// FIXME: Type 有問題，generate 會出問題
const { locale, locales, setLocale } = $i18n

async function setLocaleAndReload(locale: string) {
  await setLocale(locale)

  location.reload()
}
</script>

<style scoped>
.menu-item {
  @apply block relative overflow-hidden pl-5 font-serif text-xl lg:text-3xl;

  .dot {
    @apply rounded-full border border-black w-3 h-3 flex items-center justify-center;
    @apply absolute -left-10 top-half -translate-y-half transitable;
  }

  &:hover .dot {
    @apply -left-0;
  }
}
</style>
