<template>
  <div class="container flex justify-center pt-10 lg:pt-0">
    <div class="max-w-[1024px] w-full space-y-4">
      <PostListFilter
        :options="categoryOptions"
        :selected-category="selectedCategory"
        @change="handleChangeCategory"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        <PostCard
          v-for="{ title, to, category } in filteredPosts"
          :key="to"
          :title="title"
          :to="to"
          :category="category?.name ?? ''"
          :image="coverImage"
          :date="'2026-02-27'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ALL_VALUE } from '@/libs/const'
import coverImage from '@/assets/images/home/osaka.jpeg'
import { Post } from '@/libs/types'

interface Props {
  categories: { name: string; id: string }[] | null
  posts: Post[] | null
}

const props = defineProps<Props>()

const selectedCategory = ref<string>(ALL_VALUE)

const categoryOptions = computed(() => {
  const options =
    props.categories?.map((category) => ({
      label: category.name,
      value: category.id
    })) ?? []

  const defaultOption = {
    label: '所有文章',
    value: ALL_VALUE
  }

  return [defaultOption, ...options]
})

const mappedPosts = computed(
  () =>
    props.posts?.map((post) => ({
      title: post.title,
      to: `/posts/${post.id}`,
      category: post.post_categories
    })) ?? []
)

const filteredPosts = computed(() => {
  return mappedPosts.value.filter((post) => {
    if (selectedCategory.value === ALL_VALUE) {
      return true
    }

    return post.category?.id?.toString() === selectedCategory.value
  })
})

function handleChangeCategory(category: string) {
  selectedCategory.value = category
}
</script>
