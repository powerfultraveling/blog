<template>
  <ChallengeInnerPageWrapper :title="$t('彈窗元件')">
    <template #right>
      <div class="space-y-10">
        <FeatureItemCard
          :title="modalInfo[Form.ALL_SELECT].title"
          :content="modalInfo[Form.ALL_SELECT].content"
        >
          <div>
            <AllSelect />
          </div>
        </FeatureItemCard>
        <form class="space-y-10">
          <FeatureItemCard title="Input" :content="modalInfo[Form.ALL_SELECT].content">
            <SInput name="normal" label="normal" required />
          </FeatureItemCard>
          <FeatureItemCard title="Clipboard" :content="modalInfo[Form.ALL_SELECT].content">
            <div class="flex items-center space-x-4">
              <SInput name="clipboard" required />
              <SCopy :value="values.clipboard" />
            </div>
          </FeatureItemCard>
        </form>
      </div>
    </template>
  </ChallengeInnerPageWrapper>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate'
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

const { values } = useForm({
  validationSchema: {
    normal: 'required|email'
  },
  initialValues: {
    normal: 'hallo',
    clipboard: 'clipboard'
  }
})
</script>
