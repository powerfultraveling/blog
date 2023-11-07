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
      t('接觸這個領域大約兩年左右'),
      t('主要專在前端領域'),
      t('最熟悉的技術線是 Vue + Nuxt + Tailwind'),
      t('主要使用語言： JavaScript 與 TypeScript'),
      t('最喜歡的框架是 Vue，喜歡他明瞭的寫法、易上手的特性以及廣泛的社群支援'),
      t('注重程式碼品質'),
      t('上一份工作是接案公司，所以寫過各式各樣的專案'),
      t('最近想要嘗試自學基礎後端以及研究 system design')
    ]
  },
  {
    title: t('興趣'),
    infoItems: [
      t('打籃球，大學可能有 90% 以上的時間在圖書館、籃球場'),
      t('彈鋼琴，最近想學爵士但拖延'),
      t('蒐集文宣與包裝，家裡有好幾箱各式各樣的紙製包裝，被家人朋友稱為垃圾'),
      t('聽音樂 ，很容易聽一聽進入另外一個世界'),
      t('學習，學成新東西時大腦會跳 breaking')
    ]
  }
]
</script>

<style scoped>
.content-block:last-child :deep(ul) {
  @apply pb-8 !important;
}
</style>
