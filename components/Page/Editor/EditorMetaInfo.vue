<template>
  <div class="mb-4 space-y-3">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <SInput :value="props.postData.title" placeholder="文章標題" @change="handleChangeTitle" />
        <SDropdown
          :model-value="props.postData.status"
          :options="options"
          placeholder="選擇文章狀態"
          @change="handleChangeStatus"
        />
      </div>
      <div class="flex items-center gap-2">
        <button class="btn btn-info" @click="handleSave">SAVE</button>
        <button type="button" class="btn btn-sm btn-error btn-outline" @click="handleDelete">
          刪除
        </button>
      </div>
    </div>

    <!-- Cover image: native file picker + preview -->
    <div class="flex items-start gap-3">
      <input
        ref="coverFileInputRef"
        type="file"
        accept="image/*"
        class="hidden"
        @change="handleCoverFileChange"
      />
      <button type="button" class="btn btn-sm btn-outline" @click="coverFileInputRef?.click()">
        選擇封面圖
      </button>
      <div v-if="coverPreviewUrl" class="relative">
        <img
          :src="coverPreviewUrl"
          alt="封面預覽"
          class="h-20 w-32 object-cover rounded border border-base-content/20"
        />
        <button
          type="button"
          class="absolute -top-1 -right-1 btn btn-circle btn-xs btn-ghost bg-base-100/90"
          aria-label="移除封面"
          @click="handleRemoveCover"
        >
          ×
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Option, Post } from '@/libs/types'

const BUCKET = 'images'

const props = defineProps<{
  postData: Post
}>()

const options = ref<Option[]>([
  { value: 'draft', label: '草稿' },
  { value: 'published', label: '發布' }
])

const emit = defineEmits<{
  (e: 'save'): void
  (e: 'delete'): void
  (e: 'changeTitle', text: string): void
  (e: 'changeStatus', status: string): void
  (e: 'changeCoverImage', path: string | null): void
}>()

const client = useAppSupabase()
const coverFileInputRef = ref<HTMLInputElement | null>(null)

// 預覽用：用 storage path 取得 public URL（僅顯示用，DB 存 path）
const coverPreviewUrl = computed(() => {
  const path = props.postData.cover_image_path
  if (!path) return null
  const { data } = client.storage.from(BUCKET).getPublicUrl(path)
  return data.publicUrl
})

const handleCoverFileChange = async (e: Event) => {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file || !file.type.startsWith('image/')) {
    if (file) alert('請選擇圖片檔案')
    input.value = ''
    return
  }

  const fileExt = file.name.split('.').pop() ?? 'jpg'
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`
  const filePath = `covers/${fileName}`

  try {
    const { error } = await client.storage.from(BUCKET).upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    })
    if (error) throw error
    emit('changeCoverImage', filePath)
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : '封面上傳失敗'
    alert(`封面上傳失敗：${msg}`)
  }
  input.value = ''
}

const handleRemoveCover = () => {
  emit('changeCoverImage', null)
}

const handleSave = () => {
  emit('save')
}

const handleDelete = () => {
  if (!confirm('確定要刪除此文章？')) return
  emit('delete')
}

const handleChangeTitle = (text: string) => {
  emit('changeTitle', text)
}

const handleChangeStatus = (status: string) => {
  emit('changeStatus', status)
}
</script>
