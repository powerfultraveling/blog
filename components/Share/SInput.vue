<template>
  <div class="flex flex-col gap-1.5 w-full">
    <label v-if="label" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <div class="relative">
      <input
        :value="value"
        :type="type"
        :placeholder="placeholder"
        class="w-full px-4 py-2 bg-white border rounded-lg outline-none transition-all duration-200 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        @change="handleChange"
        @focus="emit('focus')"
        @blur="emit('blur')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  value?: string | number
  type?: 'text' | 'password' | 'number' | 'email'
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: ''
})
const emit = defineEmits(['change', 'focus', 'blur'])

// 處理原生 change 事件並向上傳遞
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('change', target.value)
}
</script>
