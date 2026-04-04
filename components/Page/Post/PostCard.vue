<template>
  <PLink
    :to="to"
    class="w-full md:max-w-[400px] h-auto group cursor-pointer flex space-x-6 md:space-x-0 md:block"
  >
    <div class="aspect-[1/1] w-42 shrink-0 md:w-full overflow-hidden bg-gray-100 mb-4">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    <div class="flex flex-col justify-between w-full">
      <div class="mb-6">
        <div class="text-sm text-secondary mb-2">
          {{ category }}
        </div>
        <h2 class="text- leading-tight text-black font-bold md:text-3xl">
          {{ title }}
        </h2>

        <p v-if="subtitle" class="text-lg font-medium leading-tight text-gray-500 mt-2">
          {{ subtitle }}
        </p>
      </div>

      <time class="text-right text-xs font-medium text-black tracking-widest">
        {{ formattedDate }}
      </time>
    </div>
  </PLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { formatDate } from '@/utils/helpers'

interface Props {
  title: string
  subtitle?: string
  category: string
  image: string
  date: string | Date
  to: string
}

const props = defineProps<Props>()

// 格式化日期為 2026年2月27日 格式
// TODO: 這邊要改為 dayjs
const formattedDate = computed(() => {
  return formatDate(props.date)
})
</script>

<style scoped>
/* 模擬日系印刷文字的精緻感 */
h2,
p,
time {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
