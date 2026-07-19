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
          v-for="{ title, to, category, coverImage, date, subtitle } in filteredPosts"
          :key="to"
          :title="title"
          :subtitle="subtitle ?? ''"
          :to="to"
          :category="category?.name ?? ''"
          :image="coverImage ?? defaultCoverImage"
          :date="date"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ALL_VALUE } from '@/libs/const'
import defaultCoverImage from '@/assets/images/home/osaka.jpeg'
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

const client = useAppSupabase()
function getCoverImage(imagePath: string | null) {
  if (!imagePath) return null
  const { data } = client.storage.from('images').getPublicUrl(imagePath)
  return data.publicUrl
}
const mappedPosts = computed(
  () =>
    props.posts
      ?.map((post) => ({
        title: post.title,
        to: `/posts/${post.id}`,
        category: post.post_categories,
        coverImage: getCoverImage(post.cover_image_path),
        date: post.published_at ?? post.created_at ?? '',
        createdAt: post.created_at ?? '',
        subtitle: post.subtitle ?? ''
      }))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) ?? []
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
