<template>
  <div>
    <a class="text-2xl mb-4 flex items-center md:text-6xl md:mb-6" :href="anchorId">
      <div>#</div>
      <div class="text-5xl">{{ title }}</div>
    </a>
    <p v-if="content" class="mb-4 md:mb-6">{{ content }}</p>
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  content?: string
}

const props = defineProps<Props>()

const anchorId = `#${props.title}`
</script>
