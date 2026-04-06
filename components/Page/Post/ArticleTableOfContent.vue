<template>
  <nav
    v-if="props.toc.length"
    aria-label="Table of contents"
    class="mt-2 border border-gray-200 p-6"
  >
    <div class="text-xs uppercase tracking-wide text-gray-500 mb-4 font-sans">Contents</div>
    <ul class="space-y-2 font-sans">
      <li v-for="item in props.toc" :key="item.id">
        <a
          :href="'#' + item.id"
          class="block text-sm text-gray-700 hover:text-black transition-colors leading-snug"
          :style="{ paddingLeft: `${Math.max(0, item.level - 1) * 0.75}rem` }"
          @click.prevent="handleHeadingClick(item.id)"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { ArticleTocItem } from '@/utils/articleMarkdown'

interface Props {
  toc?: ArticleTocItem[]
}

const props = withDefaults(defineProps<Props>(), {
  toc: () => []
})

const emit = defineEmits<{
  (e: 'headingClick', id: string): void
}>()

const handleHeadingClick = (id: string) => {
  emit('headingClick', id)
}
</script>

<style scoped>
.article :deep(h1),
.article :deep(h2),
.article :deep(h3),
.article :deep(h4),
.article :deep(h5),
.article :deep(h6) {
  scroll-margin-top: 1.25rem;
}
</style>
