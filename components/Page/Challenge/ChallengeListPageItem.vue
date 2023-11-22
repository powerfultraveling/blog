<template>
  <div class="challenge-item">
    <PLink :to="to" class="text-6xl flex justify-between">
      <div class="underline-word">
        {{ title }}
      </div>
      <CaretStroke />
    </PLink>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  to: string
}

defineProps<Props>()
</script>

<style scoped>
.challenge-item {
  @apply p-8;

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
