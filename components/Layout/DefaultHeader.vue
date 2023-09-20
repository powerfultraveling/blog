<template>
  <header class="w-full bg-primary relative">
    <div class="header-wrapper container">
      <div class="text-[30px]">ぼくのうち</div>
      <HeaderButtons class="hidden lg:flex" />
      <Hamburger class="block lg:hidden" :active="menuOpened" @change="menuOpened = !menuOpened" />
    </div>
    <div class="container flex justify-center">
      <HeaderMenu class="menu flex" :class="{ opened: menuOpened }" />
    </div>
  </header>
</template>

<script lang="ts" setup>
const menuOpened = ref(false)
</script>

<style scoped>
.header-wrapper {
  @apply w-full flex justify-between items-center pt-8 pb-5 border-b border-b-black;
}

.menu {
  @apply absolute max-h-0 overflow-hidden;

  &.opened {
    @apply max-h-[1280px];
  }
}
</style>
