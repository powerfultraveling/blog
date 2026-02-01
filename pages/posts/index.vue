<template>
  <div class="pt-10">
    <PageTitleWithLayout title="文章列表" />

    <div class="container">
      <ListLink v-for="{ title, to } in mappedPosts" :key="to" :title="title" :to="to" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const client = useAppSupabase()

const { data: posts } = await useAsyncData('posts', async () => {
  const { data } = await client.from('posts').select('*')
  return data
})

const mappedPosts = computed(
  () =>
    posts.value?.map((post) => ({
      title: post.title,
      to: `/posts/${post.id}`
    })) ?? []
)
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
