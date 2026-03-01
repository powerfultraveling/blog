<template>
  <div class="container">
    <div class="flex flex-col py-10 max-w-[700px] mx-auto">
      <div class="mb-10">
        <div class="mb-10">
          <h1 class="text-8xl font-serif mb-5">{{ props.title }}</h1>
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
      <div class="article" v-html="props.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  content: string
  coverImage: string
  date: string
  category: string
}

const props = defineProps<Props>()
</script>
