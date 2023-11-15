<template>
  <div class="py-5">
    <PLink :to="to" class="h1">{{ title }}</PLink>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  to: string
}

defineProps<Props>()
</script>
