<template>
  <div class="flex justify-between mb-4">
    <div class="flex items-center gap-2">
      <SInput :value="props.postData.title" placeholder="文章標題" @change="handleChangeTitle" />
      <SDropdown
        :model-value="props.postData.status"
        :options="options"
        placeholder="選擇文章狀態"
        @change="handleChangeStatus"
      />
    </div>
    <button class="btn btn-info" @click="handleSave">SAVE</button>
  </div>
</template>

<script setup lang="ts">
// 1. 獲取 Supabase 客戶端實例
import { Option, Post } from '@/libs/types'
const props = defineProps<{
  postData: Post
}>()

const options = ref<Option[]>([
  { value: 'draft', label: '草稿' },
  { value: 'published', label: '發布' }
])

const emit = defineEmits<{
  (e: 'save'): void
  (e: 'changeTitle', text: string): void
  (e: 'changeStatus', status: string): void
}>()

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
