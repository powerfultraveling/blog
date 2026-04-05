<template>
  <div v-if="post">
    <Article
      :title="post.title"
      :content="postContent"
      :cover-image="coverImage"
      :date="formattedDate"
      :category="post.post_categories?.name ?? ''"
    />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { formatDate } from '@/utils/helpers'
import { renderArticleMarkdown } from '@/utils/articleMarkdown'

const route = useRoute()
const id = route.params.id

const client = useAppSupabase()

const { data: post } = await useAsyncData('post', async () => {
  const { data } = await client
    .from('posts')
    .select('*,post_categories(name)')
    .eq('id', id)
    .single()
  console.log(data)
  return data
})

console.log(post)

const postContent = computed(() => {
  if (!post.value) return ''
  return renderArticleMarkdown(post.value.content)
})

const coverImage = computed(() => {
  if (!post.value) return null
  const { data } = client.storage.from('images').getPublicUrl(post.value.cover_image_path)
  return data.publicUrl
})

const formattedDate = computed(() => {
  if (!post.value) return ''
  return formatDate(post.value.published_at ?? post.value.created_at ?? '')
})
</script>
