<template>
  <div class="wrapper container">
    <div class="left">
      <div class="title">{{ title }}</div>
    </div>
    <div class="col-span-9 pt-6">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
}

defineProps<Props>()
</script>

<style scoped>
.wrapper {
  @apply md:grid md:grid-cols-12 md:gap-x-4 min-h-screen;

  .left {
    @apply border-black mb-6 md:mb-0 md:col-span-3 md:border-r pt-6;
  }
}

.title {
  @apply text-6xl;
}
</style>
