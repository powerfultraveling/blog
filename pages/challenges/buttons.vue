<template>
  <ChallengeInnerPageWrapper :title="$t('各式按鈕')">
    <template #right>
      <div class="space-y-4">
        <FeatureItemCard :title="buttonInfo[ButtonType.SWITCH].title">
          <div>
            <PSwitch :active="active" @change="active = !active" />
          </div>
        </FeatureItemCard>
        <FeatureItemCard :title="buttonInfo[ButtonType.COVER].title">
          <div>
            <CoverButton />
          </div>
        </FeatureItemCard>
        <FeatureItemCard :title="buttonInfo[ButtonType.BORDER_EXPAND].title">
          <div>
            <BorderButton />
          </div>
        </FeatureItemCard>
      </div>
    </template>
  </ChallengeInnerPageWrapper>
</template>

<script lang="ts" setup>
enum ButtonType {
  SWITCH = 'SWITCH',
  COVER = 'COVER',
  BORDER_EXPAND = 'BORDER_EXPAND'
}

const buttonInfo = {
  [ButtonType.SWITCH]: {
    title: 'Toggler'
  },
  [ButtonType.COVER]: {
    title: 'CoverUp'
  },
  [ButtonType.BORDER_EXPAND]: {
    title: 'BorderExpanded'
  }
}

const active = ref(false)
</script>
