<template>
  <div class="container pb-10 px-6">
    <div class="flex flex-col py-10 max-w-[700px] mx-auto">
      <div class="mb-10">
        <div class="mb-10">
          <div class="flex items-center justify-between">
            <h1 class="text-8xl font-serif mb-5">{{ props.title }}</h1>
            <PLink v-if="props.isAdmin" :to="props.linkToEdit" class="btn">編輯</PLink>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-500">
              {{ props.date }}
            </span>
            <span class="text-sm text-gray-500">
              {{ props.category }}
            </span>
          </div>
        </div>
        <img
          :src="props.coverImage"
          alt="cover image"
          class="w-full aspect-[16/9] object-contain"
        />
      </div>
      <ArticleTableOfContent :toc="props.toc" @headingClick="scrollToHeading" />
      <div class="article" v-html="props.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ArticleTocItem } from '@/utils/articleMarkdown'

interface Props {
  title: string
  content: string
  coverImage: string
  date: string
  category: string
  isAdmin: boolean
  linkToEdit: string
  toc?: ArticleTocItem[]
}

const props = withDefaults(defineProps<Props>(), {
  toc: () => []
})

function scrollToHeading(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  if (import.meta.client) {
    history.replaceState(null, '', `#${id}`)
  }
}
</script>
