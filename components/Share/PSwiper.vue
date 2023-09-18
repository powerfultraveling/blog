<template>
  <div>
    <slot
      name="controls"
      :slide-prev="slidePrev"
      :slide-next="slideNext"
      :is-end="isEnd"
      :is-beginning="isBeginning"
    />
    <Swiper
      :slides-per-view="options.slidesPerView"
      :space-between="options.spaceBetween"
      :effect="options.effect"
      :autoplay="options.autoplay"
      :modules="[EffectFade, Autoplay]"
      @swiper="handleReady"
      @slideChange="handleSlideChange"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <slot :slide="slide" />
      </SwiperSlide>
    </Swiper>
    <slot name="pagination" :slide-to="slideTo" :active="localActive" />
  </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Autoplay } from 'swiper/modules'
// FIX: type file may have problem
import { SwiperOptions, Swiper as SwiperClass } from 'swiper/types'

import 'swiper/css'

interface Props {
  slides: []
  options: SwiperOptions
}

withDefaults(defineProps<Props>(), {
  options: () => ({})
})

const swiper = ref()
const localActive = ref(0)
const isEnd = ref(false)
const isBeginning = ref(false)

function handleReady(swiperInstance: SwiperClass) {
  swiper.value = swiperInstance
}

function slidePrev(): void {
  swiper.value.slidePrev()
}

function slideNext(): void {
  swiper.value.slideNext()
}

function setLocalActivce(activeIndex: number) {
  localActive.value = activeIndex
}

function setSwiperStates() {
  isEnd.value = swiper.value.isEnd
  isBeginning.value = swiper.value.isBeginning
}

function slideTo(index: number) {
  swiper.value.slideTo(index)
}

function handleSlideChange(swiperInstance: SwiperClass): void {
  setLocalActivce(swiperInstance.activeIndex)
  setSwiperStates()
}
</script>
