<template>
  <div v-if="post">
    <Article
      :title="post.title"
      :content="rendered.html"
      :toc="rendered.toc"
      :cover-image="coverImage"
      :date="formattedDate"
      :category="post.post_categories?.name ?? ''"
      :is-admin="isLoggedIn"
      :link-to-edit="linkToEdit"
    />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { formatDate } from '@/utils/helpers'
import { renderArticleMarkdown } from '@/utils/articleMarkdown'
import { useAuthStore } from '@/composables/useAuthStore'
import { PAGE_LINK } from '~/libs/const'

const { isLoggedIn } = useAuthStore()

const route = useRoute()
const id = route.params.id

const client = useAppSupabase()

const { data: post } = await useAsyncData('post', async () => {
  const { data } = await client
    .from('posts')
    .select('*,post_categories(name)')
    .eq('id', id)
    .single()

  return data
})

console.log(post)

const rendered = computed(() => {
  if (!post.value?.content) return { html: '', toc: [] }
  return renderArticleMarkdown(post.value.content)
})

const linkToEdit = computed(() => {
  if (!post.value) return ''
  return `${PAGE_LINK.ADMIN_POSTS}/${post.value.id}`
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
