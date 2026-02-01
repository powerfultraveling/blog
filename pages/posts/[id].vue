<template>
  <div v-if="post">
    <Article :title="post.title" :content="postContent" />
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
</script>
