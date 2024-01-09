<template>
  <ChallengeInnerPageWrapper :title="$t('彈窗元件')">
    <template #right>
      <div class="space-y-6">
        <FeatureItemCard
          :title="modalInfo[ModalType.BASIC].title"
          :content="modalInfo[ModalType.BASIC].content"
        >
          <div>
            <button class="btn font-sans basic-btn" @click="$modal.open('test')">Click</button>
            <SModal name="test" />
          </div>
        </FeatureItemCard>
        <FeatureItemCard
          :title="modalInfo[ModalType.SNACKBAR].title"
          :content="modalInfo[ModalType.SNACKBAR].content"
        >
          <div class="flex items-center space-x-4">
            <button class="btn font-sans basic-btn" @click="$snackbar.success('test')">
              Success
            </button>
            <button class="btn font-sans basic-btn" @click="$snackbar.hide()">Close</button>
          </div>
        </FeatureItemCard>
      </div>
    </template>
  </ChallengeInnerPageWrapper>
</template>

<script lang="ts" setup>
const { t } = useI18n()

enum ModalType {
  BASIC = 'BAISC',
  SNACKBAR = 'SNACKBAR'
}

const modalInfo = {
  [ModalType.BASIC]: {
    title: t('基本使用'),
    content: t(
      '使用網址來做開關，並將方法注入到 plugin 裏，用 $modal.open(modalName}) 的方式來打開。'
    )
  },
  [ModalType.SNACKBAR]: {
    title: t('Snackbar'),
    content: t('將功能寫進 libs 裡，之後再從 plugin 住入到整個 App 去做使用')
  }
}
</script>
