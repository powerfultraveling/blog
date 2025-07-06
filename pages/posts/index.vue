<template>
  <div class="pt-10">
    <PageTitleWithLayout title="文章列表" />

    <div class="container">
      <ListLink v-for="{ title, to } in normalizeArticleList" :key="to" :title="title" :to="to" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { flatMap } from 'lodash-es'
import { getAllArticlesMeta } from '~/apis/article'
import type { ArticleMetaData } from '~/libs/types'

const { data } = await useAsyncData('articles', () => getAllArticlesMeta())

const normalizeArticleList = computed(() => {
  if (!data.value) return []
  return flatMap(data.value, (item: ArticleMetaData[]) => {
    return item.map((item: ArticleMetaData) => ({
      ...item,
      to: `/posts/${item.fileName}?category=${item.category}`
    }))
  })
})
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
