<template>
  <div class="bg-primary w-full justify-center transitable">
    <div class="py-10 space-y-4 flex flex-col items-center">
      <NuxtLink v-for="({ label, to }, index) in links" :key="index" :to="to" class="menu-item">
        <div class="dot">
          <div class="rounded-full bg-black w-2 h-2" />
        </div>
        <div>
          {{ label }}
        </div>
      </NuxtLink>
      <div class="flex items-center space-x-4 pl-5 font-serif text-gray-dark">
        <div
          v-for="{ code, name } in locales"
          :key="code"
          class="hoverable"
          :class="{ 'text-black': code === locale }"
          @click="setLocale(code)"
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
const links = [
  {
    label: '關於我',
    to: '/about'
  },
  {
    label: '作品集',
    to: '/'
  }
]

const { locale, locales, setLocale } = useI18n()
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
