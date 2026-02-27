<template>
  <div class="flex space-x-2 mb-6">
    <button
      v-for="category in props.options"
      :key="category.value"
      class="btn bg-primary hover:bg-[#81bce8] rounded-none"
      :class="{
        '!bg-secondary-light text-white !border-secondary-light':
          selectedCategory === category.value
      }"
      @click="handleChange(category.value as string)"
    >
      {{ category.label }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { Option } from '@/libs/types'

const props = defineProps<{
  selectedCategory: string
  options: Option[]
}>()

const emit = defineEmits<{
  (e: 'change', category: string): void
}>()

function handleChange(category: string) {
  emit('change', category)
}
</script>
