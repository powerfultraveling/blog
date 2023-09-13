<template>
  <div class="flex items-center space-x-2">
    <NuxtLink v-for="{ to, label } in links" :key="label" :to="to">{{ label }}</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    label: 'わたし',
    to: '/'
  },
  {
    label: '作品について',
    to: '/'
  }
]
</script>

<style scoped>
a {
  @apply w-38 py-1 border border-black rounded-full flex justify-center transition-all duration-300 hover:bg-black hover:text-white;
}
</style>
