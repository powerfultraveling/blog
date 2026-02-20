<template>
  <div ref="dropdownRef" class="relative w-64">
    <button
      type="button"
      class="w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
      @click="toggleDropdown"
    >
      <span :class="!modelValue ? 'text-gray-400' : 'text-gray-700'">
        {{ selectedLabel }}
      </span>
      <span class="ml-2 text-gray-400 transition-transform" :class="{ 'rotate-180': isOpen }">
        ▼
      </span>
    </button>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <ul
        v-if="isOpen"
        class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none"
      >
        <li
          v-for="option in options"
          :key="option.value"
          class="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-indigo-600 hover:text-white transition-colors"
          :class="{ 'bg-indigo-50 text-indigo-700': option.value === modelValue }"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface Option {
  value: string | number
  label: string
}

const props = defineProps<{
  options: Option[]
  modelValue: string | number | null
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue', 'change'])

const isOpen = ref(false)

// 取得當前選中的標籤文本
const selectedLabel = computed(() => {
  const selected = props.options.find((opt) => opt.value === props.modelValue)
  return selected ? selected.label : props.placeholder || '請選擇'
})

const toggleDropdown = () => (isOpen.value = !isOpen.value)

const selectOption = (option: Option) => {
  emit('update:modelValue', option.value)
  emit('change', option.value)
  isOpen.value = false
}
</script>
