<template>
  <div class="bg-primary w-full justify-center transitable">
    <div class="py-10 space-y-4 flex flex-col items-center">
      <PLink v-for="({ label, to }, index) in links" :key="index" :to="to" class="menu-item">
        <div class="dot">
          <div class="rounded-full bg-black w-2 h-2" />
        </div>
        <div class="menu-label" data-test="menu-label">
          {{ label }}
        </div>
      </PLink>
      <div class="flex items-center space-x-4 pl-5 text-gray-dark">
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
const { locale, locales, setLocale, t } = $i18n

interface NavItem {
  label: string
  to: string
}

const links: NavItem[] = [
  {
    label: t('關於我'),
    to: '/about'
  },
  {
    label: t('文章列表'),
    to: '/articles'
  },
  {
    label: t('前端挑戰'),
    to: '/challenges'
  }
  // TODO: 之後需加上
  // {
  //   label: '作品集',
  //   to: '/'
  // }
]

async function setLocaleAndReload(locale: string) {
  await setLocale(locale)

  location.reload()
}
</script>

<style scoped>
.menu-item {
  @apply block relative overflow-hidden pl-5 text-xl lg:text-3xl;

  .dot {
    @apply rounded-full border border-black w-3 h-3 flex items-center justify-center;
    @apply absolute -left-10 top-half -translate-y-half transitable;
  }

  &:hover .dot {
    @apply -left-0;
  }
}
</style>
