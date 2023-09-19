<template>
  <HomeSwiper :slides="slides" title="お知らせ" />
</template>

<script lang="ts" setup>
const slides = [
  {
    image: 'https://www.moji-sekkei.jp/cms/wp-content/uploads/2022/01/information_01.jpg',
    date: '2022.03.20',
    label: '事業継承のお知らせ'
  },
  {
    image: 'https://www.moji-sekkei.jp/cms/wp-content/uploads/2022/01/information_01.jpg',
    date: '2022.03.20',
    label: '事業継承のお知らせ'
  },
  {
    image: 'https://www.moji-sekkei.jp/cms/wp-content/uploads/2022/01/information_01.jpg',
    date: '2022.03.20',
    label: '事業継承のお知らせ'
  }
]
</script>
