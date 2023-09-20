<template>
  <div class="py-6 border-b border-black container">
    <div class="text-2xl">{{ title }}</div>
    <div class="relative">
      <PSwiper :slides="slides" :options="options">
        <template #controls="{ slidePrev, slideNext, isEnd, isBeginning }">
          <button :class="{ 'text-gray': isBeginning }" class="control left-0" @click="slidePrev">
            <div class="caret rotate-45"></div>
            <div class="caret-stroke"></div>
          </button>
          <button :class="{ 'text-gray': isEnd }" class="control right-0" @click="slideNext">
            <div class="flex justify-end">
              <div class="caret"></div>
            </div>
            <div class="caret-stroke"></div>
          </button>
        </template>

        <template #default="{ slide }">
          <div>
            <img :src="slide.image" />
            <div class="pt-2 flex items-center space-x-3">
              <div>{{ slide.date }}</div>
              <div>{{ slide.label }}</div>
            </div>
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
  }[]
}

defineProps<Props>()

const options = computed(() => ({
  slidesPerView: 1,
  spaceBetween: 16
}))
</script>

<style scoped>
.dot {
  @apply rounded-full w-2 h-2 border border-black;

  &.active {
    @apply bg-black;
  }
}

.control {
  @apply absolute top-half -translate-y-half hoverable z-10;

  .caret {
    @apply h-3 bg-black w-px -rotate-45 origin-bottom md:h-6;
  }

  .caret-stroke {
    @apply w-10 bg-black h-px md:w-30 lg:w-40 xl:w-50;
  }
}

:deep(.swiper-slide) {
  @apply px-[20%];
}
</style>
