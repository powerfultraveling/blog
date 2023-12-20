<template>
  <ChallengeInnerPageWrapper :title="$t('彈窗元件')">
    <template #right>
      <FeatureItemCard
        :title="modalInfo[Form.ALL_SELECT].title"
        :content="modalInfo[Form.ALL_SELECT].content"
      >
        <div>
          <AllSelect />
        </div>
      </FeatureItemCard>
    </template>
  </ChallengeInnerPageWrapper>
</template>

<script lang="ts" setup>
const { t } = useI18n()

enum Form {
  ALL_SELECT = 'ALL_SELECT'
}

const modalInfo = {
  [Form.ALL_SELECT]: {
    title: t('全選功能'),
    content: ''
  }
}
</script>
