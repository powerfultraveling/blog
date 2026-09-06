<template>
  <div class="mx-auto">
    <div class="col-start-2 col-end-12 space-y-4">
      <AboutContentBlock v-for="(info, index) in contentInfo" :key="index" :info="info" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ABOUT_MAIN } from '@/libs/about/main'
const contentInfo = ABOUT_MAIN
</script>

<style scoped>
.content-block:last-child :deep(ul) {
  @apply pb-8 !important;
}
</style>
