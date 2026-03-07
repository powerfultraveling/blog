<template>
  <div class="pt-10">
    <PageTitleWithLayout title="後台管理" />
    <div class="container">
      <div v-for="link in links" :key="link.to">
        <ListLink :title="link.title" :to="link.to" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PAGE_LINK } from '~/libs/const'
const links = [
  {
    title: '文章管理',
    to: PAGE_LINK.ADMIN_POSTS
  }
]
</script>

<style scoped>
:deep(.list-link) {
  &:last-child:not(:first-child) {
    .link-list-item {
      @apply border-b-0;
    }
  }
}
</style>
