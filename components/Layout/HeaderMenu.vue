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
      <div class="pt-10 flex justify-center pl-5">
        <button v-if="isLoggedIn" class="text-center btn" @click="handleLogout">Logout</button>
      </div>
      <!-- TODO: Added the i18n in the future -->
      <!-- <div class="flex items-center space-x-4 pl-5 font-serif text-gray-dark">
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
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/composables/useAuthStore'

const { isLoggedIn, logout } = useAuthStore()

const links = [
  {
    label: '關於我',
    to: '/about'
  },
  {
    label: '文章列表',
    to: '/posts'
  },
  {
    label: '作品集',
    to: '/projects'
  }
]

const handleLogout = async () => {
  await logout()

  await navigateTo('/')
}

// FIXME: Type 有問題，generate 會出問題
// const { locale, locales, setLocale } = useI18n()
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
