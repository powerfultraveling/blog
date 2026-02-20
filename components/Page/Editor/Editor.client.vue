<template>
  <div class="p-4 container">
    <ClientOnly>
      <div class="flex justify-end mb-4">
        <div>
          <SDropdown v-model="selectedOption" :options="options" placeholder="選擇文章狀態" />
        </div>
        <button class="btn btn-info" @click="handleSave">SAVE</button>
      </div>
      <v-md-editor
        :model-value="props.content"
        height="500px"
        :disabled-menus="[]"
        @upload-image="handleUploadImage"
        @change="handleChange"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// 1. 獲取 Supabase 客戶端實例
import { Option } from '@/libs/types'
const props = defineProps<{
  title: string
  content: string
  id: string
}>()

const selectedOption = ref<string>('draft')
const options = ref<Option[]>([
  { value: 'draft', label: '草稿' },
  { value: 'published', label: '發布' }
])

const emit = defineEmits<{
  (e: 'change', text: string): void
  (e: 'save'): void
}>()

const handleChange = (text: string) => {
  emit('change', text)
}

const handleSave = async () => {
  emit('save')
}

const client = useAppSupabase()
// const markdownText = ref<string>('# 試試看拖放圖片到這裡')

/**
 * 處理圖片上傳事件
 * @param event 原生事件
 * @param insertImage v-md-editor 提供的回調函數，用於插入圖片語法
 * @param files 檔案列表
 */
const handleUploadImage = async (event: Event, insertImage: Function, files: File[]) => {
  const file = files[0]
  if (!file) return

  // 檢查檔案類型
  if (!file.type.startsWith('image/')) {
    alert('只能上傳圖片檔案')
    return
  }

  // 2. 準備唯一檔名（避免重複）
  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
  const filePath = `uploads/${fileName}`

  try {
    // 3. 上傳到 Supabase Storage
    // 假設你的 Bucket 名稱叫 'images'
    const { data, error } = await client.storage.from('images').upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    })

    if (error) throw error

    // 4. 獲取公開 URL
    // 注意：確保你的 Bucket 設定為 Public，否則需要使用 createSignedUrl
    const {
      data: { publicUrl }
    } = client.storage.from('images').getPublicUrl(filePath)

    // 5. 將圖片插入編輯器
    insertImage({
      url: publicUrl,
      desc: file.name
      // width: 'auto', // 選填
      // height: 'auto', // 選填
    })
  } catch (error: any) {
    console.error('上傳失敗:', error.message)
    alert('圖片上傳失敗，請稍後再試')
  }
}
</script>
