<template>
  <button class="slide" :class="{ active }" @click="toggleActive">
    <div class="control"></div>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  active: boolean
}

defineProps<Props>()

const emits = defineEmits(['change'])

function toggleActive() {
  emits('change')
}
</script>

<style scoped>
.slide {
  @apply w-20 h-10 bg-gray-lighter rounded-full relative transitable;
}

.control {
  @apply w-8 h-8 bg-gray rounded-full absolute top-half -translate-y-half left-1 transitable;
}

.slide.active {
  @apply bg-black;

  .control {
    @apply bg-white left-11 !important;
  }
}
</style>
