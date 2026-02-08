<template>
  <div class="info-card-wrapper relative">
    <div
      class="group flex flex-col lg:flex-row overflow-hidden border border-gray-800 transition-all duration-300 hover:border-gray-600 rounded-xl relative z-10 bg-primary"
    >
      <div class="w-full lg:w-[30%] border-b border-gray-800 lg:border-b-0">
        <div
          class="border-b border-gray-800 py-2 flex items-center justify-center font-medium bg-[#81bce8]"
        >
          蔡恂藝 (Charles Tsai)
        </div>
        <div class="flex items-center justify-center pt-2">
          <div class="overflow-hidden rounded-full w-20 h-20">
            <img :src="profileImage" alt="profile" class="" />
          </div>
        </div>
      </div>
      <div class="w-[70%] p-4 lg:border-l lg:border-gray-800">
        <ul class="list-disc pl-4">
          <li>工作是 web developer</li>
          <li>一週至少運動六天（不然會感覺哪裡怪怪的）</li>
          <li>喜歡沒有目的地也沒有時間限制，漫無目的的散步。</li>
          <li>熱愛研究一些沒有賺頭的東西</li>
          <li>看到人充滿熱誠的講述自己的理想，且真的實行並堅持下去，是我最欽佩，也最開心的事。</li>
          <li>最近在學爵士鋼琴、資料庫、持續精進日文、英文 。</li>
        </ul>
      </div>
    </div>
    <div class="shadow-block" />
  </div>
</template>

<script setup lang="ts">
import profileImage from '~/assets/images/home/me-walk.jpg'
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
