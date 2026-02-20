<template>
  <div>
    <Editor
      :id="id"
      :post-data="postData"
      @change="handleChange"
      @save="handleSave"
      @change-title="handleChangeTitle"
      @change-status="handleChangeStatus"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAddNewPost } from '@/composables/editor/useAddNewPost'

const route = useRoute()
const id = route.params.id
const postData = ref<Post | null>(null)
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

postData.value = post.value

const handleChange = (text: string) => {
  postData.value = {
    ...postData.value,
    content: text
  }
}

const handleSave = async () => {
  handleSavePost(id.toString(), {
    title: postData.value?.title ?? '',
    content: postData.value?.content ?? '',
    status: postData.value?.status ?? ''
  })
}

const handleChangeTitle = (text: string) => {
  postData.value = {
    ...postData.value,
    title: text
  }
}

const handleChangeStatus = (status: string) => {
  postData.value = {
    ...postData.value,
    status
  }
}
</script>
