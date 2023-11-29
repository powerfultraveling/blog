<template>
  <button class="btn cover-btn z-10">
    <label class="relative z-10">click</label>
  </button>
</template>

<script lang="ts" setup></script>

<style scoped>
.cover-btn {
  @apply w-20 relative overflow-hidden;

  &::before {
    content: '';

    @apply bg-black absolute inset-0 translate-y-full transitable z-0;
  }

  &:hover {
    &::before {
      @apply translate-y-0;
    }

    @apply text-white;
  }
}
</style>
