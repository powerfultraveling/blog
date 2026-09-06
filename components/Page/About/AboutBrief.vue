<template>
  <div class="info-card-wrapper relative mb-10">
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
        我來自台北，
        <br />
        喜歡沒有目的地也沒有時間限制地在城市中散步。
        <br />
        <br />
        興趣很（太）廣泛，所以近期正在學習「怎麼管理興趣」。
        <br />
        今年開始重拾鋼琴，想要在三年內參加爵士 Jam Session。
        <br />
        一週運動五天，不運動會覺得哪裡怪怪的。
        <br />
        <br />
        有時後會突然很想分享點什麼，所以架了一個部落格。
        <br />
        有空的時候寫寫文章，分享對生活、興趣、技術的一些想法。
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
  '聽起來很怪也說不定，但我很喜歡看人用心做事情。',
  '最近在學爵士鋼琴、資料庫、日文 。'
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
