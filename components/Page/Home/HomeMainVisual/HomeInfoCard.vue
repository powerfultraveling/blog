<template>
  <div class="info-card-wrapper relative">
    <div
      class="group flex flex-col xl:flex-row overflow-hidden border border-gray-800 transition-all duration-300 hover:border-gray-600 rounded-xl relative z-10 bg-primary"
    >
      <div class="w-full xl:w-[30%] border-b border-gray-800 xl:border-b-0">
        <div
          class="border-b border-gray-800 py-2 flex items-center justify-center font-medium bg-[#81bce8]"
        >
          <div>編輯長：</div>
          大力走步
        </div>
        <div class="flex items-center justify-center py-2">
          <div class="overflow-hidden rounded-full w-20 h-20">
            <img :src="profileImage" alt="profile" class="" />
          </div>
        </div>
      </div>
      <div class="xl:w-[70%] p-4 xl:border-l lg:border-gray-800">
        <ul class="list-disc pl-4 space-y-2">
          <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="shadow-block" />
  </div>
</template>

<script setup lang="ts">
import profileImage from '~/assets/images/home/me-walk.jpg'

const items = [
  '目前的工作是 web developer',
  '一週至少運動五天（不然會感覺哪裡怪怪的）。',
  '喜歡沒有時間限制，漫無目的的散步。',
  '最近在學爵士鋼琴、RAG 。'
]
</script>

<style scoped>
.info-card-wrapper {
  .shadow-block {
    @apply absolute bottom-0 left-0 bg-gray-darkest w-full h-full transitable rounded-xl;
  }

  &:hover {
    .shadow-block {
      @apply -translate-x-1 translate-y-1 md:-translate-x-2 md:translate-y-2 lg:-translate-x-3 lg:translate-y-3;
    }
  }
}
</style>
