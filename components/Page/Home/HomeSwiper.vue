<template>
  <div class="py-6 border-b border-black container">
    <div class="text-5xl font-serif font-medium">{{ title }}</div>
    <div class="relative">
      <PSwiper :slides="slides" :options="options">
        <template #controls="{ slidePrev, slideNext, isEnd, isBeginning }">
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
        </template>

        <template #default="{ slide }">
          <a :href="slide.link" target="_blank" class="slide-card-wrapper">
            <div class="slide-card">
              <img :src="slide.image" class="w-50 mb-5 lg:mb-0" />
              <div>
                <div class="text-4xl mb-3">{{ slide.label }}</div>
                <div class="">{{ slide.content }}</div>
              </div>
            </div>
          </a>
        </template>

        <template #pagination="{ slideTo, active }">
          <div class="flex justify-center pt-4">
            <ul class="flex items-center space-x-2">
              <li
                v-for="i in slides.length"
                :key="i"
                class="dot"
                :class="{ active: active + 1 === i }"
                @click="slideTo(i - 1)"
              />
            </ul>
          </div>
        </template>
      </PSwiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  slides: {
    image: string
    date: string
    label: string
    content: string
  }[]
}

defineProps<Props>()

const options = computed(() => ({
  slidesPerView: 1,
  spaceBetween: 16
}))
</script>

<style scoped>
.slide-card-wrapper {
  @apply bg-white h-full flex items-center relative;

  &::before {
    content: '';

    @apply absolute bottom-0 left-0 w-0 h-0 border-b border-r border-black;
  }

  /* &:not(:hover)::before {
    animation: bottom-right 3s 1 reverse;
  } */

  &:hover::before {
    animation: bottom-right 1s forwards;
  }

  &::after {
    content: '';

    @apply absolute top-0 right-0 w-0 h-0 border-t border-l border-black;
  }

  /* &:not(:hover)::after {
    animation: top-left 3s 1 reverse;
  } */

  &:hover::after {
    animation: top-left 1s forwards;
  }

  @keyframes bottom-right {
    0% {
      width: 0;
      height: 0;
    }

    25% {
      width: 100%;
      height: 0;
    }

    50% {
      width: 100%;
      height: 100%;
    }

    100% {
      width: 100%;
      height: 100%;
    }
  }

  @keyframes top-left {
    0% {
      width: 0;
      height: 0;
    }

    25% {
      width: 0;
      height: 0;
    }

    50% {
      width: 0;
      height: 0;
    }

    75% {
      width: 100%;
      height: 0;
    }

    100% {
      width: 100%;
      height: 100%;
    }
  }

  .slide-card {
    @apply bg-white flex flex-col items-center px-6 py-10 font-serif lg:flex-row lg:space-x-6;
  }
}

.dot {
  @apply rounded-full w-2 h-2 border border-black cursor-pointer;

  &.active {
    @apply bg-black;
  }
}

.control {
  @apply top-half -translate-y-half hoverable z-10 md:absolute;

  .caret {
    @apply h-3 bg-black w-px -rotate-45 origin-bottom md:h-6;
  }

  .caret-stroke {
    @apply w-10 bg-black h-px md:w-30 lg:w-40 xl:w-50;
  }
}

:deep(.swiper-slide) {
  @apply h-auto md:px-[20%] !important;
}
</style>
