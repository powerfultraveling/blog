<template>
  <div class="pt-10">
    <PageTitleWithLayout title="文章列表" />
    <PostsSection :categories="categoriesData" :posts="posts" />
  </div>
</template>

<script lang="ts" setup>
const { postsService, postsCategoriesService } = useServices()

const { data: categoriesData } = await useAsyncData('categories', async () => {
  return await postsCategoriesService.getAllCategories()
})

const { data: posts } = await useAsyncData('posts', async () => {
  return await postsService.getAllPublishedPosts()
})
</script>
