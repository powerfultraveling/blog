<template>
  <div>
    <div class="mb-4 container pt-4">
      <SBackBtn :to="PAGE_LINK.ADMIN_POSTS">文章列表</SBackBtn>
    </div>
    <div v-if="postData">
      <Editor
        :id="id"
        :post-data="postData"
        @change="handleChange"
        @save="handleSave"
        @delete="handleDelete"
        @change-title="handleChangeTitle"
        @change-status="handleChangeStatus"
        @change-cover-image="handleChangeCoverImage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAddNewPost } from '@/composables/editor/useAddNewPost'
import { EditorPost } from '@/libs/types'
import { PAGE_LINK } from '~/libs/const'

const route = useRoute()
const id = route.params.id as string
const postData = ref<EditorPost | null>(null)
const client = useAppSupabase()
const { handleSavePost, handleDeletePost } = useAddNewPost()

const { data: post } = await useAsyncData('post', async () => {
  const { data } = await client.from('posts').select('*').eq('id', id).single()

  if (!data) {
    console.error('Post not found')
    return
  }

  return data
})

const raw = post.value as EditorPost | null
postData.value = raw
  ? {
      ...raw,
      content: raw.content ?? '',
      cover_image_path: raw.cover_image_path ?? null
    }
  : null

const handleChange = (text: string) => {
  if (!postData.value) return
  postData.value = { ...postData.value, content: text }
}

const handleSave = async () => {
  await handleSavePost(id.toString(), {
    title: postData.value?.title ?? '',
    content: postData.value?.content ?? '',
    status: postData.value?.status ?? '',
    cover_image_path: postData.value?.cover_image_path ?? null
  })
}

const handleDelete = async () => {
  await handleDeletePost(id.toString())
}

const handleChangeTitle = (text: string) => {
  if (!postData.value) return
  postData.value = { ...postData.value, title: text }
}

const handleChangeStatus = (status: string) => {
  if (!postData.value) return
  postData.value = { ...postData.value, status }
}

const handleChangeCoverImage = (path: string | null) => {
  if (!postData.value) return
  postData.value = { ...postData.value, cover_image_path: path }
}
</script>
