<template>
  <div class="pt-10">
    <PageTitle :title="title" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
}

defineProps<Props>()
</script>
