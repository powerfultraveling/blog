<template>
  <ChallengeInnerPageWrapper :title="$t('彈窗元件')">
    <template #right>
      <FeatureItemCard
        :title="modalInfo[ModalType.BASIC].title"
        :content="modalInfo[ModalType.BASIC].content"
      >
        <div>
          <button class="btn font-sans basic-btn" @click="$modal.open('test')">Click</button>
          <FModal name="test" />
        </div>
      </FeatureItemCard>
    </template>
  </ChallengeInnerPageWrapper>
</template>

<script lang="ts" setup>
const { t } = useI18n()

enum ModalType {
  BASIC = 'BAISC'
}

const modalInfo = {
  [ModalType.BASIC]: {
    title: t('基本使用'),
    content: t(
      '使用網址來做開關，並將方法注入到 plugin 裏，用 $modal.open(modalName}) 的方式來打開。'
    )
  }
}
</script>
