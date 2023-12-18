<template>
  <div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  content: string
  type: string
}

defineProps<Props>()

const emits = defineEmits(['change'])

function toggleActive() {
  emits('change')
}
</script>

<style scoped></style>
