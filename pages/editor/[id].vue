<template>
  <div>
    <Editor :id="id" :content="postContent" @change="handleChange" @save="handleSave" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAddNewPost } from '@/composables/editor/useAddNewPost'

const route = useRoute()
const id = route.params.id
const postContent = ref('')
const client = useAppSupabase()
const { handleSavePost } = useAddNewPost()

const { data: post } = await useAsyncData('post', async () => {
  const { data } = await client.from('posts').select('*').eq('id', id).single()

  if (!data) {
    console.error('Post not found')
    return
  }

  return data
})

postContent.value = post.value?.content

const handleChange = (text: string) => {
  postContent.value = text
}

const handleSave = async () => {
  handleSavePost(id.toString(), postContent.value)
}
</script>
