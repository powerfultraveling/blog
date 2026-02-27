<template>
  <div class="p-4 container">
    <ClientOnly>
      <EditorMetaInfo
        :post-data="props.postData"
        @save="handleSave"
        @change-title="handleChangeTitle"
        @change-status="handleChangeStatus"
        @change-cover-image="handleChangeCoverImage"
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
import { EditorPost } from '@/libs/types'
import { useUploadImage } from '@/composables/editor/uploadImage'
const { handleUploadImage } = useUploadImage()
const props = defineProps<{
  postData: EditorPost
  id: string
}>()

const emit = defineEmits<{
  (e: 'change', text: string): void
  (e: 'save'): void
  (e: 'changeTitle', text: string): void
  (e: 'changeStatus', status: string): void
  (e: 'changeCoverImage', path: string | null): void
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

const handleChangeCoverImage = (path: string | null) => {
  emit('changeCoverImage', path)
}
</script>
