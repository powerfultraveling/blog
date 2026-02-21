<template>
  <div class="pt-10">
    <PageTitleWithLayout title="文章列表" />
    <div class="container flex justify-center">
      <div class="max-w-[1024px] w-full">
        <PostListFilter
          :options="categoryOptions"
          :selected-category="selectedCategory"
          @change="handleChangeCategory"
        />
        <ListLink v-for="{ title, to } in filteredPosts" :key="to" :title="title" :to="to" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ALL_VALUE } from '@/libs/const'

const client = useAppSupabase()
const selectedCategory = ref<string>(ALL_VALUE)

const { data: categoriesData } = await useAsyncData('categories', async () => {
  const { data } = await client.from('post_categories').select('*')
  return data ?? []
})

const categoryOptions = computed(() => {
  const options =
    categoriesData.value?.map((category) => ({
      label: category.name,
      value: category.id
    })) ?? []

  const defaultOption = {
    label: '所有文章',
    value: ALL_VALUE
  }

  return [defaultOption, ...options]
})

const { data: posts } = await useAsyncData('posts', async () => {
  const { data } = await client.from('posts').select('*').eq('status', 'published')
  return data
})

const mappedPosts = computed(
  () =>
    posts.value?.map((post) => ({
      title: post.title,
      to: `/posts/${post.id}`,
      category: post.post_category_id
    })) ?? []
)

const filteredPosts = computed(() => {
  return mappedPosts.value.filter((post) =>
    selectedCategory.value === ALL_VALUE ? true : post.category === selectedCategory.value
  )
})

function handleChangeCategory(category: string) {
  selectedCategory.value = category
}
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
