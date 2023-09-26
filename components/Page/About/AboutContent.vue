<template>
  <div class="container lg:grid lg:grid-cols-12 lg:gap-x-4">
    <div class="col-start-2 col-end-12 space-y-4">
      <AboutContentBlock v-for="(info, index) in contentInfo" :key="index" :info="info" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const contentInfo = [
  {
    title: '工作',
    infoItems: ['前端工程師', '前端工程師', '前端工程師', '前端工程師', '前端工程師', '前端工程師']
  },
  {
    title: '工作',
    infoItems: ['前端工程師', '前端工程師', '前端工程師', '前端工程師', '前端工程師', '前端工程師']
  }
]
</script>

<style scoped>
.content-block:last-child :deep(ul) {
  @apply pb-4 !important;
}
</style>
