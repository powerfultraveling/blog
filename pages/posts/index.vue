<template>
  <div class="pt-10">
    <PageTitleWithLayout title="文章列表" />

    <div class="container">
      <ListLink
        v-for="{ title, to } in articleList"
        :key="to"
        :title="title"
        :to="to"
        is-external
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAllArticlesMeta } from '~/apis/article'

const { data } = await useAsyncData('articles', () => getAllArticlesMeta())
console.log('data', data.value)

// const articleList = data.value.map((item: any) => ({
//   to: item.path,
//   title: item.title
// }))

// console.log('articleList', articleList)

// const articleList = [
//   {
//     to: '/posts/1',
//     title: '文章1',
//     isExternal: false
//   },
//   {
//     to: '/posts/2',
//     title: '文章2',
//     isExternal: false
//   },
//   {
//     to: '/posts/2',
//     title: '文章2',
//     isExternal: false
//   },
//   {
//     to: '/posts/2',
//     title: '文章2',
//     isExternal: false
//   }
// ]
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
