<template>
  <div class="relative lg:h-150 overflow-hidden xl:h-[32rem]">
    <PSwiper :slides="slides" :options="options">
      <!-- <template #controls="{ slidePrev, slideNext, isEnd, isBeginning }">
          <div class="flex justify-center py-5">
            <div class="flex items-center space-x-5">
              <button
                :class="{ 'text-gray': isBeginning }"
                class="control left-0"
                @click="slidePrev"
              >
                <div class="caret rotate-45"></div>
                <div class="caret-stroke"></div>
              </button>
              <button :class="{ 'text-gray': isEnd }" class="control right-0" @click="slideNext">
                <div class="flex justify-end">
                  <div class="caret"></div>
                </div>
                <div class="caret-stroke"></div>
              </button>
            </div>
          </div>
        </template> -->

      <template #default="{ slide }">
        <div class="md:w-32 aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <a :href="slide.link" target="_blank">
            <img :src="slide.image" alt="sidebar-item" class="w-full h-full object-cover" />
          </a>
        </div>
      </template>
    </PSwiper>
  </div>
</template>

<script lang="ts" setup>
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
  slidesPerView: 3,
  spaceBetween: 1,
  breakpoints: {
    768: {
      slidesPerView: 5,

      direction: 'horizontal' as const
    },
    1024: {
      direction: 'vertical' as const,
      slidesPerView: 3,
      spaceBetween: 16
    },
    1280: {
      direction: 'vertical' as const,
      slidesPerView: 4,
      spaceBetween: 16
    }
  }
}))
</script>

<style scoped>
.dot {
  @apply rounded-full w-2 h-2 border border-black cursor-pointer;

  &.active {
    @apply bg-black;
  }
}

.control {
  @apply top-half -translate-y-half hoverable z-10 overflow-x-hidden relative md:absolute;

  &:hover {
    .caret,
    .caret-stroke {
      @apply bg-gray;
    }
  }

  .caret {
    @apply h-3 bg-black w-px -rotate-45 origin-bottom transitable md:h-6;
  }

  .caret-stroke {
    @apply w-10 bg-black h-px relative md:w-30 transitable lg:w-40 xl:w-50;
  }
}

:deep(.swiper-slide) {
  @apply h-auto   !important;
}
</style>
