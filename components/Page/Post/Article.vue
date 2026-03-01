<template>
  <div class="container">
    <div class="flex flex-col py-10 max-w-[700px] mx-auto">
      <div class="mb-10">
        <h1 class="text-8xl mb-10 font-serif">{{ props.title }}</h1>
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
}

const props = defineProps<Props>()
</script>
