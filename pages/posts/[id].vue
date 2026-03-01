<template>
  <div v-if="post">
    <Article :title="post.title" :content="postContent" :cover-image="coverImage" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

import MarkdownIt from 'markdown-it'

const route = useRoute()
const id = route.params.id
const md = new MarkdownIt()

const client = useAppSupabase()

const { data: post } = await useAsyncData('post', async () => {
  const { data } = await client.from('posts').select('*').eq('id', id).single()
  console.log(data)
  return data
})

console.log(post)

const postContent = computed(() => {
  if (!post.value) return ''
  return md.render(post.value.content)
})

const coverImage = computed(() => {
  if (!post.value) return null
  const { data } = client.storage.from('images').getPublicUrl(post.value.cover_image_path)
  return data.publicUrl
})
</script>
