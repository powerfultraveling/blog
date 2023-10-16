<template>
  <div class="container lg:grid lg:grid-cols-12 lg:gap-x-4">
    <div class="col-start-2 col-end-12 space-y-4">
      <AboutContentBlock v-for="(info, index) in contentInfo" :key="index" :info="info" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const contentInfo = [
  {
    title: '關於寫程式',
    infoItems: [
      '接觸這個領域大約兩年左右',
      '主要專在前端領域',
      '最熟悉的技術線是 Vue + Nuxt + Tailwind',
      '主要使用語言： JavaScript 與 TypeScript',
      '最喜歡的框架是 Vue，喜歡他明瞭的寫法、易上手的特性以及廣泛的社群支援',
      '注重程式碼品質',
      '上一份工作是接案公司，所以寫過各式各樣的專案',
      '最近想要嘗試自學基礎後端以及研究 system design'
    ]
  },
  {
    title: '興趣',
    infoItems: [
      '打籃球，大學可能有 90% 以上的時間在圖書館、籃球場',
      '彈鋼琴，最近想學爵士但拖延',
      '蒐集文宣與包裝，家裡有好幾箱各式各樣的紙製包裝，被家人朋友稱為垃圾',
      '聽音樂 ，很容易聽一聽進入另外一個世界',
      '語言學習，透過語言學習暸解不同國家的生活方式'
    ]
  }
]
</script>

<style scoped>
.content-block:last-child :deep(ul) {
  @apply pb-8 !important;
}
</style>
