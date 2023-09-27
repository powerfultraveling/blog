<template>
  <div class="py-6 container">
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
          <div class="slide-card-wrapper h-full">
            <a
              :href="slide.link"
              target="_blank"
              class="bg-white h-full flex items-center relative z-10"
            >
              <div class="slide-card relative z-10">
                <img :src="slide.image" class="w-50 mb-5 lg:mb-0" />
                <div>
                  <div class="text-4xl mb-3">{{ slide.label }}</div>
                  <div class="">{{ slide.content }}</div>
                </div>
              </div>
            </a>
            <div class="shadow-block" />
          </div>
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
  @apply relative border border-white;

  .slide-card {
    @apply bg-white flex flex-col items-center px-6 py-10 font-serif transitable lg:flex-row lg:space-x-6;
  }

  .shadow-block {
    @apply absolute bottom-0 left-0 bg-gray-darkest w-full h-full transitable;
  }

  &:hover {
    @apply border border-gray-darkest;

    .shadow-block {
      @apply -translate-x-2 translate-y-2 md:-translate-x-4 md:translate-y-4 lg:-translate-x-7 lg:translate-y-7;
    }
  }
}

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
  @apply h-auto px-[5%] py-3 md:px-[20%] md:py-3 lg:py-5 !important;
}
</style>
