<template>
  <div class="pt-10">
    <PageTitleWithLayout title="文章列表" />
    <PostsSection :categories="categoriesData" :posts="posts" />
  </div>
</template>

<script lang="ts" setup>
const client = useAppSupabase()

const { data: categoriesData } = await useAsyncData('categories', async () => {
  const { data } = await client.from('post_categories').select('*')
  return data ?? []
})

const { data: posts } = await useAsyncData('posts', async () => {
  const { data } = await client
    .from('posts')
    .select('*,post_categories(name,id)')
    .eq('status', 'published')
  return data
})
</script>
