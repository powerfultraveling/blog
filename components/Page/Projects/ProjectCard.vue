<template>
  <div
    class="group flex flex-col overflow-hidden border border-gray-800 transition-all duration-300 hover:border-gray-600 hover:shadow-2xl"
  >
    <div class="relative aspect-[16/10] overflow-hidden">
      <img
        :src="props.image"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        v-if="props.projectLink"
        class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <a
          :href="props.projectLink"
          target="_blank"
          class="rounded-full bg-white px-4 py-2 text-sm font-bold text-black hover:bg-gray-200"
        >
          造訪網站
        </a>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <h3 class="mb-3 text-2xl font-bold text-black">
        {{ props.title }}
      </h3>

      <p class="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-700">
        {{ props.description }}
      </p>

      <a
        v-if="props.articleLink"
        :href="props.articleLink"
        target="_blank"
        class="mb-6 flex items-center gap-2 text-lg font-medium text-gray-600 transition-colors hover:text-gray-800"
      >
        <span class="text-xl">📖</span>
        文章介紹
      </a>

      <div class="mt-auto flex flex-wrap gap-2">
        <span
          v-for="tag in props.tags"
          :key="tag"
          class="rounded-full bg-[#3d444d] px-4 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-600"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 定義 Props 介面
interface Props {
  image: string // 圖片路徑
  title: string // 專案標題
  description: string // 專案簡介
  tags: string[] // 標籤列表
  articleLink?: string // 文章介紹連結
  projectLink?: string // 專案實體連結 (選填)
}

const props = defineProps<Props>()
</script>

<style scoped>
/* 這裡可以依據需求加入微調動畫 */
</style>
