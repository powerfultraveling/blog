<template>
  <div class="pt-10">
    <PageTitleWithLayout title="文章管理" />
    <div class="container">
      <div>
        <button @click="handleNewPost">新增文章</button>
      </div>
      <div>
        <ListLink v-for="{ title, to } in mappedPosts" :key="to" :title="title" :to="to" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAddNewPost } from '@/composables/editor/useAddNewPost'

const client = useAppSupabase()
const { handleNewPost } = useAddNewPost()

const { data: posts } = await useAsyncData('posts', async () => {
  const { data } = await client.from('posts').select('*')
  return data
})

const mappedPosts = computed(
  () =>
    posts.value?.map((post) => ({
      title: post.title,
      to: `/editor/${post.id}`
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
