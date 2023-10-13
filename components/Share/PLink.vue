<template>
  <NuxtLink :to="localePath">
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
  to: string
}

const props = defineProps<Props>()

const { $localePath } = useNuxtApp()

const localePath = computed(() => $localePath(props.to))
</script>
