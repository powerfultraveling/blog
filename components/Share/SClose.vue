<template>
  <div class="close" :class="{ active }" @click="toggleActive">
    <div class="stick rotate-45" />
    <div class="stick -rotate-45" />
  </div>
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
.close {
  @apply cursor-pointer relative translate-y-half;

  .stick {
    @apply left-0 w-4 h-[2px] bg-black absolute transitable;
  }

  &:hover .stick {
    @apply bg-gray;
  }

  &.active .stick {
    @apply rotate-0;
  }
}
</style>
