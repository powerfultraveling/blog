<template>
  <div>
    <SField :name="name" :label="label" :required="required" :message="message">
      <input v-bind="bindings" @input="handleInput" />
    </SField>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'

interface Props {
  label: string
  name: string
  message: string
  required: boolean
}

const props = defineProps<Props>()

const { value: inputValue, handleChange } = useField(props.name)

function handleInput(e: Event) {
  const value = (e.target as HTMLInputElement).value

  handleChange(value)
}

const bindings = computed(() => {
  return {
    value: inputValue.value,
    name: props.name,
    label: props.label,
    required: props.required
  }
})
</script>
