<template>
  <div>
    {{ rules }}
    {{ validationRules }}
    {{ normalizedRules }}
    {{ valid }}
    <div v-if="label" class="mb-1">
      <SFieldLabel :label="label" :required="props.required" />
    </div>
    <div class="mb-1">
      <slot />
    </div>
    <div class="text-danger text-xs">{{ errorMessage }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'
import _ from 'lodash'

import type { Rule } from '~/libs/support/types'

interface Props {
  label?: string
  name: string
  message?: string
  rules: Rule
  required?: boolean
}

const props = defineProps<Props>()

const normalizedRules = computed(() => {
  if (_.isPlainObject(props.rules)) {
    return props.rules
  }

  return (props.rules as string).split('|').reduce((rules, config) => {
    const [rule, value] = config.split(':')

    return { ...rules, [rule]: value || true }
  }, {})
})

const shouldAddRequired = computed(() => !!props.required)

const validationRules = computed(() => {
  if (shouldAddRequired.value) {
    return {
      ...normalizedRules.value,
      required: true
    }
  }

  return normalizedRules.value
})

// FIX: 這邊 rules 會被覆蓋
const {
  errorMessage,
  meta: { valid }
} = useField(props.name, { required: true })
</script>
