<template>
  <div class="container flex justify-center mb-10 lg:mb-20">
    <PageTitle :title="title" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
}

defineProps<Props>()
</script>
