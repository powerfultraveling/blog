<template>
  <NuxtLink :to="to">
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
  to: string
}

defineProps<Props>()
</script>
