<template>
  <div class="p-6 rounded-md bg-info text-white">
    <div>{{ content }}</div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  content: string
  type: string
}

defineProps<Props>()
</script>
