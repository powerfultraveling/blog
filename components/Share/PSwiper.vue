<template>
  <div class="h-full swiper-wrapper">
    <slot
      name="controls"
      :slide-prev="slidePrev"
      :slide-next="slideNext"
      :is-end="isEnd"
      :is-beginning="isBeginning"
    />
    <Swiper
      v-bind="bindOptions"
      class="h-full"
      @swiper="handleReady"
      @slideChange="handleSlideChange"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index" class="h-auto">
        <slot :slide="slide" />
      </SwiperSlide>
    </Swiper>
    <slot name="pagination" :slide-to="slideTo" :active="localActive" />
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { SwiperOptions, Swiper as SwiperClass } from 'swiper/types'
import 'swiper/css'

interface Props {
  slides: any[]
  options: SwiperOptions
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({})
})

const bindOptions = computed(() => {
  const o = props.options
  return {
    ...o,
    width: o.width ?? undefined,
    height: o.height ?? undefined,
    userAgent: o.userAgent ?? undefined,
    url: o.url ?? undefined,
    loopedSlides: o.loopedSlides ?? undefined
  } as Record<string, unknown>
})

const swiper = ref<SwiperClass>()
const localActive = ref(0)
const isEnd = ref(false)
const isBeginning = ref(false)

function handleReady(swiperInstance: SwiperClass) {
  swiper.value = swiperInstance
  // 強制初始化後更新一次，解決垂直高度計算延遲
  setTimeout(() => {
    swiperInstance.update()
  }, 100)
}

function slidePrev(): void {
  swiper.value?.slidePrev()
}

function slideNext(): void {
  swiper.value?.slideNext()
}

function setLocalActivce(activeIndex: number) {
  localActive.value = activeIndex
}

function setSwiperStates() {
  if (!swiper.value) return
  isEnd.value = swiper.value.isEnd
  isBeginning.value = swiper.value.isBeginning
}

function slideTo(index: number) {
  swiper.value?.slideTo(index)
}

function handleSlideChange(swiperInstance: SwiperClass): void {
  setLocalActivce(swiperInstance.activeIndex)
  setSwiperStates()
}
</script>
