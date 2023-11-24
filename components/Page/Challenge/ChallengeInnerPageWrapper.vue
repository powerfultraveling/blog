<template>
  <div class="wrapper">
    <div class="col-span-3 border-r border-black pt-6">
      <div class="title">{{ title }}</div>
    </div>
    <div class="col-span-9 pt-6">
      <slot name="right"></slot>
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
  @apply container grid grid-cols-12 gap-x-4 min-h-screen;
}

.title {
  @apply text-6xl;
}
</style>
