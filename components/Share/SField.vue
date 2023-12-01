<template>
  <div>
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

interface Props {
  label?: string
  name: string
  message?: string
  required: boolean
}

const props = defineProps<Props>()

const { errorMessage } = useField(props.name)
</script>
