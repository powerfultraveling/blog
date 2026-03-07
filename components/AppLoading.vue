<template>
  <Transition name="app-loading">
    <div
      v-if="visible"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-100"
      aria-hidden="true"
    >
      <div class="flex flex-col items-center gap-4">
        <div
          class="w-10 h-10 rounded-full border-2 border-slate-300 border-t-slate-700 animate-spin"
        />
        <span class="text-sm text-slate-500">Loading...</span>
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
.app-loading-enter-active,
.app-loading-leave-active {
  transition: opacity 0.25s ease;
}

.app-loading-enter-from,
.app-loading-leave-to {
  opacity: 0;
}
</style>
