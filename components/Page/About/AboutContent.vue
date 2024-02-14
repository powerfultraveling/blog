<template>
  <div class="container lg:grid lg:grid-cols-12 lg:gap-x-4">
    <div class="col-start-2 col-end-12 space-y-4">
      <AboutContentBlock v-for="(info, index) in contentInfo" :key="index" :info="info" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

const contentInfo = [
  {
    title: t('關於寫程式'),
    infoItems: [
      t('目前有兩年前端開發經驗，寫過各式各樣的專案，包括電商、後臺系統、測驗系統...等。'),
      t('最喜歡的技術組合是 Vue + Nuxt + Tailwind CSS，使用起來靈活好維護。'),
      t('主要使用語言： JavaScript 與 TypeScript'),
      t('注重程式碼品質與架構設計'),
      t('最近想要學習的東西：演算法、Vue source code、基礎後端、system design、基礎資安')
    ]
  },
  {
    title: t('興趣'),
    infoItems: [
      t('打籃球，大學可能有 90% 以上的時間在圖書館、籃球場'),
      t('彈鋼琴，最近在學爵士'),
      t('旅行，喜歡透過旅行認識不同的生活方式'),
      t('學語言，最近在學日語與精進英文'),
      t('散步，喜歡邊散步邊思考事情')
    ]
  }
]
</script>

<style scoped>
.content-block:last-child :deep(ul) {
  @apply pb-8 !important;
}
</style>
