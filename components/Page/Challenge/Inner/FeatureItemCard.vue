<template>
  <div>
    <div class="text-6xl mb-6">{{ title }}</div>
    <p>{{ content }}</p>
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  content: string
}

defineProps<Props>()
</script>
