<template>
  <Transition name="app-loading">
    <div
      v-if="visible"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
      aria-hidden="true"
    >
      <div class="flex flex-col items-center gap-4">
        <div class="loading-bounce" />
        <!-- <span class="text-sm text-slate-500">Loading...</span> -->
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
}>()
</script>

<style scoped>
.loading-bounce {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #80c3c6;
  animation: bounce 1.2s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-0.5rem) scale(1.05);
  }
}

.app-loading-enter-active,
.app-loading-leave-active {
  transition: opacity 0.25s ease;
}

.app-loading-enter-from,
.app-loading-leave-to {
  opacity: 0;
}
</style>
