<template>
  <div class="px-4 lg:px-0">
    <div class="text-blue-600 text-xs font-bold border-b border-blue-600 pb-1 mb-4">
      ミュージック
    </div>
    <HomeVisualGalleryCarousel :slides="items" />
  </div>
</template>

<script setup>
import takanaka from '@/assets/images/home/takanaka.jpg'
import oscar from '@/assets/images/home/request.png'
import ryo from '@/assets/images/home/ryo-fukai.png'
import vulfpeck from '@/assets/images/home/vulfpeck.png'

const items = [
  {
    image: takanaka,
    title: `That's the way of the world`,
    link: 'https://www.youtube.com/watch?v=ZZ2WPRrGZEE'
  },
  {
    image: oscar,
    title: `The Girl from Ipanema`,
    link: 'https://www.youtube.com/watch?v=55qFfWIMmak'
  },
  {
    image: vulfpeck,
    title: `Dean Town`,
    link: 'https://www.youtube.com/watch?v=rhxQoDlt2AU'
  },
  {
    image: ryo,
    title: `Early Summer `,
    link: 'https://www.youtube.com/watch?v=F5EFsUU7RRA'
  }
]
</script>
