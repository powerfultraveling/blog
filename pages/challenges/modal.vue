<template>
  <ChallengeInnerPageWrapper title="Modal">
    <template #right>
      <FeatureItemCard
        :title="modalInfo[ModalType.BASIC].title"
        :content="modalInfo[ModalType.BASIC].content"
      >
        <div>
          <button class="btn" @click="$modal.open('test')">open</button>
          <FModal name="test" />
        </div>
      </FeatureItemCard>
    </template>
  </ChallengeInnerPageWrapper>
</template>

<script lang="ts" setup>
enum ModalType {
  BASIC = 'BAISC'
}

const modalInfo = {
  [ModalType.BASIC]: {
    title: '基本使用',
    content: ''
  }
}
</script>
