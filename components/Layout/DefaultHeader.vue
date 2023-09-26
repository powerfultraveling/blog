<template>
  <header class="w-full bg-primary relative">
    <div class="header-wrapper container">
      <NuxtLink to="/">
        <div class="text-[30px] font-serif font-bold">蔡藝屋</div>
      </NuxtLink>
      <!-- TODO: could recover it if needed -->
      <!-- <HeaderButtons class="hidden lg:flex" /> -->
      <Hamburger class="block" :active="menuOpened" @change="menuOpened = !menuOpened" />
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
  @apply absolute opacity-0 z-20 h-0;

  &.opened {
    @apply opacity-90 h-screen lg:h-0 lg:opacity-0;
  }
}
</style>
