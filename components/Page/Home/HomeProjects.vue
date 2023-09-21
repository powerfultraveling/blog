<template>
  <HomeSwiper :slides="slides" title="專案" />
</template>

<script lang="ts" setup>
import poya from '~/assets/images/projects/poya.png'
import thw from '~/assets/images/projects/thw.png'
import flyingV from '~/assets/images/projects/flyingV.png'
import kita from '~/assets/images/projects/kita.png'

const slides = [
  {
    image: flyingV,
    date: '2022.03.20',
    label: 'flyingV 十週年網站',
    link: 'https://exhibition.flyingv.cc/',
    content:
      '慶祝 flying v 的活動網站，因為是活動網站，整體加上了許多比較酷炫的動畫效果，是一個比較活潑的網站。'
  },
  {
    image: kita,
    date: '2022.03.20',
    label: '台灣友善動物協會',
    link: 'https://www.kitanimals.org/',
    content: '協助友善動物協會重新開發官網，因為有大量的文章，所以採用 cms 的架構。'
  },
  {
    image: poya,
    date: '2022.03.20',
    label: '寶雅官網',
    link: 'https://www.poya.com.tw/',
    content:
      '幫助重新開發寶雅官網，因為此專案規模比較大，主要困難點在最一開始的結構設計與工作的分配，如何在初期建立好共用元件與工具，讓每個工程師的任務不互相耦合是最重要的。'
  },
  {
    image: thw,
    date: '2022.03.20',
    label: '高鐵假期',
    link: 'https://tholiday.thsrc.com.tw/?dialog=8b4e84b973d76a0367d240eac61bcc6f',
    content:
      '主要經手業務邏輯的修改，由其商品內頁因業務邏輯複雜並互相牽連，因此，如何將 code 重構成易讀易修改的架構與 syntax 是本專案最重要的部分。'
  }
]
</script>
