<template>
  <div class="relative lg:h-[800px] overflow-hidden gallery-carousel">
    <PSwiper :slides="slides" :options="options">
      <template #default="{ slide }">
        <div class="md:w-32 aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <a :href="slide.link" target="_blank" class="block w-full h-full">
            <img :src="slide.image" alt="sidebar-item" class="w-full h-full object-cover" />
          </a>
        </div>
      </template>
    </PSwiper>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  title: string
  slides: {
    image: string
    link: string
  }[]
}

defineProps<Props>()

const options = computed(() => ({
  direction: 'horizontal' as const,
  slidesPerView: 2.3,
  spaceBetween: 16,
  loop: false,
  // 核心修正：禁止越界拖動
  resistance: true,
  resistanceRatio: 0,
  // 確保在視窗大小改變時正確重繪
  observer: true,
  observeParents: true,

  breakpoints: {
    768: {
      slidesPerView: 5,
      direction: 'horizontal' as const
    },
    1024: {
      direction: 'vertical' as const,
      slidesPerView: 3,
      spaceBetween: 16,
      resistanceRatio: 0
    },
    1280: {
      direction: 'vertical' as const,
      slidesPerView: 4,
      spaceBetween: 16,
      resistanceRatio: 0
    }
  }
}))
</script>

<style scoped>
.gallery-carousel :deep(.swiper) {
  width: 100%;
  height: 100%;
}

:deep(.swiper-slide) {
  height: auto;
}

@screen lg {
  .gallery-carousel :deep(.swiper-slide) {
    height: auto !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.dot {
  @apply rounded-full w-2 h-2 border border-black cursor-pointer;

  &.active {
    @apply bg-black;
  }
}
</style>
