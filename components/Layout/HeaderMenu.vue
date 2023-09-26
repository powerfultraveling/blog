<template>
  <div class="bg-primary w-full justify-center transitable">
    <div class="py-10 space-y-4">
      <NuxtLink v-for="({ label, to }, index) in links" :key="index" :to="to">
        <div class="dot">
          <div class="rounded-full bg-black w-2 h-2" />
        </div>
        <div>
          {{ label }}
        </div>
      </NuxtLink>
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
</script>

<style scoped>
a {
  @apply block relative overflow-hidden pl-5 font-serif text-xl;

  .dot {
    @apply rounded-full border border-black w-3 h-3 flex items-center justify-center;
    @apply absolute -left-10 top-half -translate-y-half transitable;
  }

  &:hover .dot {
    @apply -left-0;
  }
}
</style>
