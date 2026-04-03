<template>
  <div>
    <div class="space-x-2 mb-6 w-full flex-wrap hidden md:flex">
      <button
        v-for="category in props.options"
        :key="category.value"
        class="btn bg-primary hover:bg-[#81bce8] rounded-none shrink-0 mt-1"
        :class="{
          'bg-secondary-light text-white !border-secondary-light':
            selectedCategory === category.value
        }"
        @click="handleChange(category.value as string)"
      >
        {{ category.label }}
      </button>
    </div>
    <SDropdown
      class="md:hidden"
      :model-value="selectedCategory"
      :options="props.options"
      :selected="selectedCategory"
      @change="handleChange"
    />
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
