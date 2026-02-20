<template>
  <div class="p-4 container">
    <ClientOnly>
      <EditorMetaInfo
        :post-data="props.postData"
        @save="handleSave"
        @change-title="handleChangeTitle"
        @change-status="handleChangeStatus"
      />
      <v-md-editor
        :model-value="props.postData.content"
        height="500px"
        :disabled-menus="[]"
        @upload-image="handleUploadImage"
        @change="handleChange"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { Post } from '@/libs/types'
import { useUploadImage } from '@/composables/editor/uploadImage'
const { handleUploadImage } = useUploadImage()
const props = defineProps<{
  postData: Post
  content: string
  id: string
}>()

const emit = defineEmits<{
  (e: 'change', text: string): void
  (e: 'save'): void
  (e: 'changeTitle', text: string): void
  (e: 'changeStatus', status: string): void
}>()

const handleChange = (text: string) => {
  emit('change', text)
}

const handleSave = async () => {
  emit('save')
}

const handleChangeTitle = (text: string) => {
  emit('changeTitle', text)
}

const handleChangeStatus = (status: string) => {
  emit('changeStatus', status)
}
</script>
