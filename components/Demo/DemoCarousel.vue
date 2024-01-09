<template>
  <div class="container">
    <SSwiper :slides="slides" :options="options">
      <template #controls="{ slidePrev, slideNext, isEnd, isBeginning }">
        <div class="flex space-x-4">
          <button :class="{ 'text-gray': isBeginning }" class="btn" @click="slidePrev">prev</button>
          <button :class="{ 'text-gray': isEnd }" class="btn" @click="slideNext">next</button>
        </div>
      </template>

      <template #default="{ slide }">
        <div class="demo-card">{{ slide }}</div>
      </template>

      <template #pagination="{ slideTo, active }">
        <div class="flex justify-center pt-4">
          <ul class="flex items-center space-x-2">
            <li
              v-for="i in slides.length"
              :key="i"
              class="dot"
              :class="{ active: active === i }"
              @click="slideTo(i - 1)"
            />
          </ul>
        </div>
      </template>
    </SSwiper>
  </div>
</template>

<script lang="ts" setup>
const slides = ['1', '2', '3', '4', '5', '6', '7']

const options = computed(() => ({
  slidesPerView: 3,
  spaceBetween: 16
}))
</script>

<style scoped>
.demo-card {
  @apply bg-white px-20 py-10 text-[48px] flex items-center justify-center;
}

.dot {
  @apply rounded-full w-3 h-3 bg-gray;

  &.active {
    @apply bg-gray-lighter;
  }
}
</style>
