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
          v-for="{ title, to, category, coverImage, date, subtitle } in paginatedPosts"
          :key="to"
          :title="title"
          :subtitle="subtitle ?? ''"
          :to="to"
          :category="category?.name ?? ''"
          :image="coverImage ?? defaultCoverImage"
          :date="date"
        />
      </div>
      <div></div>
      <PostPagination v-model="currentPage" :total-pages="totalPages" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ALL_VALUE, OTHERS_CATEGORY_SLUG } from '@/libs/const'
import defaultCoverImage from '@/assets/images/home/osaka.jpeg'
import type { Post, PostCategory } from '@/libs/types'

const PAGE_SIZE = 6

interface Props {
  categories: PostCategory[] | null
  posts: Post[] | null
}

const props = defineProps<Props>()
const route = useRoute()
const router = useRouter()

const selectedCategory = ref<string>(ALL_VALUE)
const categoryOptions = computed(() => {
  const options =
    [...(props.categories ?? [])]
      .sort((a, b) => {
        if (a.slug === OTHERS_CATEGORY_SLUG) return 1
        if (b.slug === OTHERS_CATEGORY_SLUG) return -1
        return 0
      })
      .map((category) => ({
        label: category.name,
        value: category.id
      }))

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

const totalPages = computed(() => Math.max(1, Math.ceil(filteredPosts.value.length / PAGE_SIZE)))

const currentPage = computed({
  get() {
    const pageFromQuery = Number(route.query.page)
    if (!Number.isFinite(pageFromQuery) || pageFromQuery < 1) return 1
    return Math.min(Math.floor(pageFromQuery), totalPages.value)
  },
  set(page: number) {
    const nextPage = Math.min(Math.max(1, page), totalPages.value)
    router.push({
      query: {
        ...route.query,
        page: nextPage === 1 ? undefined : String(nextPage)
      }
    })
  }
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return filteredPosts.value.slice(start, start + PAGE_SIZE)
})

function handleChangeCategory(category: string) {
  selectedCategory.value = category
  currentPage.value = 1
}
</script>
