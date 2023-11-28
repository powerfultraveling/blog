<template>
  <header class="w-full bg-primary relative">
    <div class="header-wrapper container">
      <PLink to="/" class="flex flex-col items-center">
        <img src="~/assets/images/logo/logo-words.svg" class="w-20" />
        <!-- <div class="text-[25px] font-bold">{{ $t('文書屋') }}</div> -->
      </PLink>
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

const router = useRouter()

router.beforeEach((_, __, next) => {
  menuOpened.value = false

  next()
})
</script>

<style scoped>
.header-wrapper {
  @apply w-full flex justify-between items-center pt-8 pb-5 border-b border-b-black;
}

.menu {
  @apply absolute opacity-0 z-30 h-0;

  &.opened {
    @apply opacity-[96%] h-screen;
  }
}
</style>
