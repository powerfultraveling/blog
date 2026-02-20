<template>
  <div>
    <Editor :content="postContent" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const client = useAppSupabase()

const { data: post } = await useAsyncData('post', async () => {
  const { data } = await client.from('posts').select('*').eq('id', id).single()
  console.log(data)
  return data
})

console.log(post)

const postContent = computed(() => {
  if (!post.value) return ''
  return post.value.content
})
</script>
