<template>
  <SField :name="name" :label="label" :required="required" :message="message" :rules="rules">
    <textarea v-if="isTextarea" @input="handleInput" />
    <input v-else v-bind="bindings" class="form-control" @input="handleInput" />
  </SField>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'

import type { Rule } from '~/libs/support/types'

interface Props {
  label?: string
  name: string
  type?: string
  message?: string
  required?: boolean
  rules?: Rule
}

enum InputType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  NUMBER = 'number'
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  type: InputType.TEXT,
  message: '',
  rules: ''
})

const { value: inputValue, handleChange } = useField(props.name, { email: true })

function handleInput(e: Event) {
  const value = (e.target as HTMLInputElement).value

  handleChange(value)
}

const isTextarea = computed(() => {
  return props.type === InputType.TEXTAREA
})

const bindings = computed(() => {
  const bindings = {
    value: inputValue.value,
    name: props.name,
    label: props.label,
    rules: props.rules,
    required: props.required
  }

  if (isTextarea.value) {
    return bindings
  }

  return {
    ...bindings,
    type: props.type
  }
})
</script>
