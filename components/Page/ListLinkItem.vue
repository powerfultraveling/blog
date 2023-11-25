<template>
  <div class="link-list-item">
    <div class="underline-word">
      {{ title }}
    </div>
    <CaretStroke />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
}

defineProps<Props>()
</script>

<style scoped>
.link-list-item {
  @apply p-8 text-2xl flex justify-between items-center space-x-4 xl:text-5xl;

  &:hover {
    .underline-word::after {
      @apply w-full;
    }

    :deep(.caret),
    :deep(.caret-stroke) {
      @apply bg-gray;
    }
  }
}
</style>
