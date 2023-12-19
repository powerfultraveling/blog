<template>
  <div class="s-snackbar">
    <div>{{ content }}</div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  content: string
  type: string
}

defineProps<Props>()
const emits = defineEmits(['hide'])

function hide() {
  console.log('hide in component')
  emits('hide')
}

defineExpose({ hide })
</script>

<style scoped>
.s-snackbar {
  @apply fixed top-10 p-6 rounded-md bg-info text-white;
}
</style>
