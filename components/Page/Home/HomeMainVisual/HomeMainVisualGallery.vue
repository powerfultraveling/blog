<template>
  <!-- <div class="w-32 border-r border-slate-300 p-4 flex flex-col gap-6 h-screen overflow-y-auto">
    <div class="text-blue-600 text-xs font-bold border-b border-blue-600 pb-1 mb-2">
      ポッドキャスト
    </div>
    <div></div>
    <div
      v-for="item in items"
      :key="item.link"
      class="w-full aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-sm"
    >
      <a :href="item.link" target="_blank">
        <img :src="item.image" alt="sidebar-item" class="w-full h-full object-cover" />
      </a>
    </div>
  </div> -->
  <HomeVisualGalleryCarousel :slides="items" />
</template>

<script setup>
import takanaka from '@/assets/images/home/takanaka.jpg'
import oscar from '@/assets/images/home/request.png'
import ryo from '@/assets/images/home/ryo-fukai.png'
import vulfpeck from '@/assets/images/home/vulfpeck.png'

const items = [
  {
    image: takanaka,
    link: 'https://www.youtube.com/watch?v=ZZ2WPRrGZEE'
  },
  {
    image: oscar,
    link: 'https://www.youtube.com/watch?v=55qFfWIMmak'
  },
  {
    image: vulfpeck,
    link: 'https://www.youtube.com/watch?v=rhxQoDlt2AU'
  },
  {
    image: ryo,
    link: 'https://www.youtube.com/watch?v=F5EFsUU7RRA'
  },
  {
    image: takanaka,
    link: 'https://www.youtube.com/watch?v=ZZ2WPRrGZEE'
  },
  {
    image: oscar,
    link: 'https://www.youtube.com/watch?v=55qFfWIMmak'
  },
  {
    image: vulfpeck,
    link: 'https://www.youtube.com/watch?v=rhxQoDlt2AU'
  },
  {
    image: ryo,
    link: 'https://www.youtube.com/watch?v=F5EFsUU7RRA'
  }
]
</script>
